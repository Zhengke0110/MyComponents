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
// import { usePopover } from '../../lib/Popover';
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
      top: `bottom-[-7px] border-b border-r ${baseClasses}`,
      bottom: `top-[-7px] border-t border-l ${baseClasses}`,
      left: `right-[-7px] border-r border-t ${baseClasses}`,
      right: `left-[-7px] border-l border-b ${baseClasses}`,
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

  const popoverStyle = computed(() => {
    const style: Record<string, string | number> = {}; // 修改类型以支持数字值
    if (!triggerBounds.width.value || !popoverBounds.width.value) return style;

    const {
      width: triggerWidth,
      height: triggerHeight,
      left: triggerLeft,
      top: triggerTop,
    } = triggerBounds;

    const { width: popoverWidth, height: popoverHeight } = popoverBounds;

    const offset = props.offset ?? 8;

    // 计算位置样式
    switch (props.placement) {
      case "top":
      case "top-start":
      case "top-end":
        style.bottom = `${triggerHeight.value + offset}px`;
        if (props.placement === "top-start") {
          style.left = 0;
        } else if (props.placement === "top-end") {
          style.right = 0;
        } else {
          style.left = `${(triggerWidth.value - popoverWidth.value) / 2}px`;
        }
        break;

      case "bottom":
      case "bottom-start":
      case "bottom-end":
        style.top = `${triggerHeight.value + offset}px`;
        if (props.placement === "bottom-start") {
          style.left = 0;
        } else if (props.placement === "bottom-end") {
          style.right = 0;
        } else {
          style.left = `${(triggerWidth.value - popoverWidth.value) / 2}px`;
        }
        break;

      case "left":
      case "left-start":
      case "left-end":
        style.right = `${triggerWidth.value + offset}px`;
        if (props.placement === "left-start") {
          style.top = 0;
        } else if (props.placement === "left-end") {
          style.bottom = 0;
        } else {
          style.top = `${(triggerHeight.value - popoverHeight.value) / 2}px`;
        }
        break;

      case "right":
      case "right-start":
      case "right-end":
        style.left = `${triggerWidth.value + offset}px`;
        if (props.placement === "right-start") {
          style.top = 0;
        } else if (props.placement === "right-end") {
          style.bottom = 0;
        } else {
          style.top = `${(triggerHeight.value - popoverHeight.value) / 2}px`;
        }
        break;
    }

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
                "backdrop-blur-lg",
                "border border-gray-200/50 dark:border-zinc-700/50",
                "shadow-lg shadow-gray-200/20 dark:shadow-zinc-900/30",
                "rounded-xl",
                "transform-gpu",
                "popover-animate",
                props.customClass, // 移到默认背景色之前
                "bg-white/90 dark:bg-zinc-800/90", // 移到最后，允许被自定义类覆盖
              ].filter(Boolean)}
              style={popoverStyle.value as StyleValue}
            >
              <div class={["p-2", props.contentClass].filter(Boolean)}>
                {slots.default?.()}
              </div>
              {props.arrow && (
                <div
                  class={[
                    "absolute h-4 w-4 rotate-45 border",
                    "bg-inherit", // 移动到最后，继承父元素的背景色
                    getArrowPositionClass.value,
                  ]}
                />
              )}
            </div>
          )}
        </Transition>
      </div>
    );
  },
});
