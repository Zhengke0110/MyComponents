import { ref } from "vue";
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
import { PopoverProps } from "./config";
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
      Object.keys(style).forEach((key) => {
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
