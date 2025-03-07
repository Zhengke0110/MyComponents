import { defineComponent, PropType, ref, StyleValue, Transition } from "vue";
import { computed, nextTick } from "vue";
import {
  useElementBounding,
  useEventListener,
  useTimeoutFn,
  onClickOutside,
  useElementHover,
  useToggle,
  tryOnUnmounted,
  whenever,
} from "@vueuse/core";

import "./styles.css"; // 引入外部样式文件
export type PlacementType =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

export interface PopoverProps {
  placement?: PlacementType;
  offset?: number;
  delay?: number;
  trigger?: "hover" | "click";
  arrow?: boolean;
  customClass?: string;
  contentClass?: string;
  closeOnContentClick?: boolean;
  showDelay?: number;
  hideDelay?: number;
  persistent?: boolean;
  // 添加自定义背景色属性
  backgroundColor?: string;
  darkBackgroundColor?: string;
}
// Hook: usePopover
export function usePopover(
  props: PopoverProps,
  emit: (event: "show" | "hide") => void,
) {
  const containerRef = ref<HTMLElement | null>(null);
  const triggerRef = ref<HTMLElement | null>(null);
  const popoverRef = ref<HTMLElement | null>(null);
  const [isVisible, _] = useToggle(false);

  // VueUse composables
  const triggerBounds = useElementBounding(triggerRef);
  const popoverBounds = useElementBounding(popoverRef);
  const isHovered = useElementHover(containerRef);

  // Timeout handlers
  const { start: startShowTimer, stop: stopShowTimer } = useTimeoutFn(() => {
    isVisible.value = true;
    emit("show");
  }, props.showDelay || 0);

  const { start: startHideTimer, stop: stopHideTimer } = useTimeoutFn(() => {
    isVisible.value = false;
    emit("hide");
  }, props.hideDelay || 300);

  // Methods
  const show = () => {
    stopHideTimer();
    startShowTimer();
  };

  const hide = () => {
    if (props.persistent) return;
    stopShowTimer();
    startHideTimer();
  };

  // Event handlers setup
  onClickOutside(
    containerRef,
    () => {
      // 移除 trigger 判断，让点击外部始终触发关闭
      if (!props.persistent) {
        hide();
      }
    },
    { ignore: [triggerRef] },
  );

  whenever(isHovered, (value) => {
    if (props.trigger !== "hover") return;
    if (value) {
      show();
    } else {
      // 添加延迟以防止过快关闭
      setTimeout(() => {
        if (!isHovered.value) {
          hide();
        }
      }, 100);
    }
  });

  useEventListener(triggerRef, "click", (event: Event) => {
    if (props.trigger !== "click") return;
    event.stopPropagation();
    if (isVisible.value) {
      hide();
    } else {
      show();
    }
  });

  useEventListener(popoverRef, "click", (event: Event) => {
    if (props.closeOnContentClick) {
      event.stopPropagation();
      hide();
    }
  });

  whenever(isVisible, async () => {
    await nextTick();
    triggerBounds.update();
    popoverBounds.update();
  });

  // Cleanup
  tryOnUnmounted(() => {
    stopShowTimer();
    stopHideTimer();
  });

  // Computed styles
  const getArrowPositionClass = computed(() => {
    const baseClasses = "border-gray-200 dark:border-zinc-700";
    const positions = {
      top: `bottom-[-6px] border-b border-r ${baseClasses}`,
      bottom: `top-[-6px] border-t border-l ${baseClasses}`,
      left: `right-[-6px] border-r border-t ${baseClasses}`,
      right: `left-[-6px] border-l border-b ${baseClasses}`,
    };

    const direction = props.placement?.split("-")[0] as keyof typeof positions;
    return positions[direction];
  });

  const getAnimationClass = computed(() => {
    const direction = props.placement?.split("-")[0];
    return (
      {
        top: "slide-down-fade",
        bottom: "slide-up-fade",
        left: "slide-right-fade",
        right: "slide-left-fade",
      }[direction as string] || "slide-up-fade"
    );
  });

  // 获取当前视口尺寸
  const viewportWidth = computed(() => window.innerWidth);
  const viewportHeight = computed(() => window.innerHeight);

  const popoverStyle = computed(() => {
    const style: Record<string, string | number> = {};
    if (!triggerBounds.width.value || !popoverBounds.width.value) return style;

    const {
      width: triggerWidth,
      height: triggerHeight,
      left: triggerLeft,
      top: triggerTop,
      right: triggerRight,
      bottom: triggerBottom,
    } = triggerBounds;

    const { width: popoverWidth, height: popoverHeight } = popoverBounds;

    const offset = props.offset ?? 8;
    let mainPlacement = props.placement?.split("-")[0] as string;
    let alignment = props.placement?.split("-")[1];

    // 基本位置计算
    let calcPosition = () => {
      switch (mainPlacement) {
        case "top":
          style.bottom = `${triggerHeight.value + offset}px`;
          if (alignment === "start") {
            style.left = "0px";
          } else if (alignment === "end") {
            style.right = "0px";
          } else {
            style.left = `${(triggerWidth.value - popoverWidth.value) / 2}px`;
          }
          break;

        case "bottom":
          style.top = `${triggerHeight.value + offset}px`;
          if (alignment === "start") {
            style.left = "0px";
          } else if (alignment === "end") {
            style.right = "0px";
          } else {
            style.left = `${(triggerWidth.value - popoverWidth.value) / 2}px`;
          }
          break;

        case "left":
          style.right = `${triggerWidth.value + offset}px`;
          if (alignment === "start") {
            style.top = "0px";
          } else if (alignment === "end") {
            style.bottom = "0px";
          } else {
            style.top = `${(triggerHeight.value - popoverHeight.value) / 2}px`;
          }
          break;

        case "right":
          style.left = `${triggerWidth.value + offset}px`;
          if (alignment === "start") {
            style.top = "0px";
          } else if (alignment === "end") {
            style.bottom = "0px";
          } else {
            style.top = `${(triggerHeight.value - popoverHeight.value) / 2}px`;
          }
          break;
      }
    };

    // 执行基本位置计算
    calcPosition();

    // 安全区域检测与调整逻辑
    nextTick(() => {
      if (!popoverRef.value || !containerRef.value) return;

      const popoverRect = popoverRef.value.getBoundingClientRect();
      const containerRect = containerRef.value.getBoundingClientRect();
      const safeMargin = 10; // 安全边距

      // 计算容器在视口中的绝对位置
      const containerAbsLeft = containerRect.left;
      const containerAbsTop = containerRect.top;
      
      // 检查并调整水平位置
      if (popoverRect.right > viewportWidth.value - safeMargin) {
        // 如果右侧超出视口
        if (mainPlacement === "left" || mainPlacement === "right") {
          // 对于左右定位，调整为相反方向
          if (mainPlacement === "right") {
            delete style.left;
            style.right = `${triggerWidth.value + offset}px`;
          }
        } else {
          // 对于上下定位，调整水平偏移
          delete style.left;
          style.right = "0px";
        }
      } else if (popoverRect.left < safeMargin) {
        // 如果左侧超出视口
        if (mainPlacement === "left" || mainPlacement === "right") {
          // 对于左右定位，调整为相反方向
          if (mainPlacement === "left") {
            delete style.right;
            style.left = `${triggerWidth.value + offset}px`;
          }
        } else {
          // 对于上下定位，调整水平偏移
          delete style.right;
          style.left = "0px";
        }
      }

      // 检查并调整垂直位置
      if (popoverRect.bottom > viewportHeight.value - safeMargin) {
        // 如果底部超出视口
        if (mainPlacement === "top" || mainPlacement === "bottom") {
          // 对于上下定位，调整为相反方向
          if (mainPlacement === "bottom") {
            delete style.top;
            style.bottom = `${triggerHeight.value + offset}px`;
          }
        } else {
          // 对于左右定位，调整垂直偏移
          delete style.top;
          style.bottom = "0px";
        }
      } else if (popoverRect.top < safeMargin) {
        // 如果顶部超出视口
        if (mainPlacement === "top" || mainPlacement === "bottom") {
          // 对于上下定位，调整为相反方向
          if (mainPlacement === "top") {
            delete style.bottom;
            style.top = `${triggerHeight.value + offset}px`;
          }
        } else {
          // 对于左右定位，调整垂直偏移
          delete style.bottom;
          style.top = "0px";
        }
      }

      // 应用调整后的样式
      Object.keys(style).forEach(key => {
        if (popoverRef.value) {
          popoverRef.value.style[key as any] = style[key] as string;
        }
      });
    });

    return style;
  });

  return {
    containerRef,
    triggerRef,
    popoverRef,
    isVisible,
    getArrowPositionClass,
    getAnimationClass,
    popoverStyle,
    show,
    hide,
  } as const;
}

export default defineComponent({
  name: "Popover",
  props: {
    placement: {
      type: String as PropType<PlacementType>,
      default: "bottom",
    },
    offset: { type: Number, default: 8 },
    delay: { type: Number, default: 300 },
    trigger: {
      type: String as PropType<"hover" | "click">,
      default: "hover",
    },
    arrow: { type: Boolean, default: false },
    customClass: { type: String, default: "" },
    contentClass: { type: String, default: "" },
    closeOnContentClick: { type: Boolean, default: false },
    showDelay: { type: Number, default: 0 },
    hideDelay: { type: Number, default: 300 },
    persistent: { type: Boolean, default: false },
    // 新增自定义背景色属性
    backgroundColor: { type: String, default: 'rgba(255, 255, 255, 0.9)' },
    darkBackgroundColor: { type: String, default: 'rgba(39, 39, 42, 0.9)' },
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit }) {
    const {
      containerRef,
      triggerRef,
      popoverRef,
      isVisible,
      getArrowPositionClass,
      getAnimationClass,
      popoverStyle,
    } = usePopover(props, (event) => emit(event));

    // 检测当前是否为暗黑模式
    const isDarkMode = computed(() => {
      if (typeof window === 'undefined') return false;
      return document.documentElement.classList.contains('dark');
    });

    // 计算背景色样式
    const backgroundStyle = computed(() => {
      // 如果指定了自定义类，优先使用自定义类
      if (props.customClass) {
        return {};
      }
      
      return {
        backgroundColor: isDarkMode.value 
          ? props.darkBackgroundColor 
          : props.backgroundColor,
        backdropFilter: 'blur(8px)',
      };
    });
    
    // 合并所有样式
    const mergedPopoverStyle = computed(() => {
      return {
        ...popoverStyle.value,
        ...backgroundStyle.value
      } as StyleValue;
    });

    // 处理箭头背景色
    const arrowStyle = computed(() => {
      if (!props.arrow) return {};
      
      // 如果指定了自定义类，不应用内联背景色
      if (props.customClass) {
        return { backgroundColor: 'inherit' };
      }
      
      // 使用与主体相同的背景色
      return {
        backgroundColor: isDarkMode.value 
          ? props.darkBackgroundColor 
          : props.backgroundColor,
      };
    });

    // 使用监听器动态更新箭头背景色
    whenever(isDarkMode, () => {
      if (popoverRef.value && props.arrow) {
        const arrowElement = popoverRef.value.querySelector('.popover-arrow') as HTMLElement;
        if (arrowElement) {
          arrowElement.style.backgroundColor = isDarkMode.value 
            ? props.darkBackgroundColor 
            : props.backgroundColor;
        }
      }
    });

    return () => (
      <div ref={containerRef} class="relative inline-block">
        <div ref={triggerRef} class="inline-block">
          {slots.reference?.()}
        </div>
        <Transition
          enterActiveClass={`transform-gpu transition-all duration-300 ease-out ${getAnimationClass.value}`}
          leaveActiveClass="transform-gpu transition-all duration-200 ease-in-back"
          enterFromClass="opacity-0 scale-95 blur-sm"
          leaveToClass="opacity-0 scale-95 blur-sm"
        >
          {isVisible.value && (
            <div
              ref={popoverRef}
              class={[
                "absolute z-50",
                "border border-gray-200/50 dark:border-zinc-700/50",
                "shadow-lg shadow-gray-200/20 dark:shadow-zinc-900/30",
                "rounded-xl",
                "transform-gpu",
                "popover-animate",
                props.customClass,
              ].filter(Boolean)}
              style={mergedPopoverStyle.value}
            >
              <div class={["p-2", props.contentClass].filter(Boolean)}>
                {slots.default?.()}
              </div>
              {props.arrow && (
                <div
                  class={[
                    "absolute h-4 w-4 rotate-45 border popover-arrow",
                    getArrowPositionClass.value,
                  ]}
                  style={arrowStyle.value}
                />
              )}
            </div>
          )}
        </Transition>
      </div>
    );
  },
});
