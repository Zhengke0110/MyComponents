import { defineComponent, PropType, StyleValue, Transition } from "vue";
import { computed } from "vue";
import { whenever } from "@vueuse/core";
import "./styles.css"; // 引入外部样式文件
import { ColorType, PlacementType, PopoverProps, colorMap } from "./config";
export type { ColorType, PlacementType, PopoverProps };
import { usePopover } from "./hooks";

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
    backgroundColor: { type: String, default: "rgba(255, 255, 255, 0.9)" },
    darkBackgroundColor: { type: String, default: "rgba(39, 39, 42, 0.9)" },
    theme: {
      type: String as PropType<ColorType>,
      default: undefined,
    },
    variant: {
      type: String as PropType<"solid" | "light" | "glass">,
      default: "solid",
    },
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit }) {
    const {
      containerRef,
      triggerRef,
      popoverRef,
      isVisible,
      getArrowPositionClass,
      popoverStyle,
    } = usePopover(props, (event) => emit(event));

    // 检测当前是否为暗黑模式
    const isDarkMode = computed(() => {
      if (typeof window === "undefined") return false;
      return document.documentElement.classList.contains("dark");
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
        backdropFilter: "blur(8px)",
      };
    });

    // 合并所有样式
    const mergedPopoverStyle = computed(() => {
      return {
        ...(popoverStyle.value as object),
        ...(backgroundStyle.value as object),
      } as StyleValue;
    });

    // 处理箭头背景色
    const arrowStyle = computed(() => {
      if (!props.arrow) return {};

      // 如果指定了自定义类，不应用内联背景色
      if (props.customClass) {
        return { backgroundColor: "inherit" };
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
        const arrowElement = popoverRef.value.querySelector(
          ".popover-arrow",
        ) as HTMLElement;
        if (arrowElement) {
          arrowElement.style.backgroundColor = isDarkMode.value
            ? props.darkBackgroundColor
            : props.backgroundColor;
        }
      }
    });


    // 修改 getThemeClasses 计算逻辑
    const getThemeStyles = computed(() => {
      if (!props.theme || !colorMap[props.theme]) return {};

      const colors = colorMap[props.theme];
      const variants = {
        solid: {
          backgroundColor: colors.dark,
          color: "#ffffff",
          borderColor: "transparent",
        },
        light: {
          backgroundColor: colors.light,
          color: colors.dark,
          borderColor: colors.light,
        },
        glass: {
          backgroundColor: `${colors.light}cc`,
          color: colors.dark,
          borderColor: `${colors.light}33`,
          backdropFilter: "blur(8px)",
        },
      };

      return variants[props.variant];
    });

    // 修改箭头样式计算逻辑
    const getArrowStyles = computed(() => {
      if (!props.theme || !colorMap[props.theme]) return {};

      const colors = colorMap[props.theme];
      const variants = {
        solid: {
          backgroundColor: colors.dark,
          borderColor: "transparent",
        },
        light: {
          backgroundColor: colors.light,
          borderColor: colors.light,
        },
        glass: {
          backgroundColor: `${colors.light}cc`,
          borderColor: `${colors.light}33`,
        },
      };

      return variants[props.variant];
    });

    return () => (
      <div ref={containerRef} class="relative inline-block">
        <div ref={triggerRef} class="inline-block">
          {slots.reference?.()}
        </div>
        <Transition
          enterActiveClass="transform-gpu transition-all duration-200 ease-out"
          leaveActiveClass="transform-gpu transition-all duration-150 ease-in"
          enterFromClass="opacity-0 scale-95"
          leaveToClass="opacity-0 scale-95"
        >
          {isVisible.value && (
            <div
              ref={popoverRef}
              class={[
                "absolute z-50",
                "rounded-xl shadow-lg",
                "border",
                props.customClass,
              ].filter(Boolean)}
              style={{
                // 使用类型断言确保扩展的对象类型正确
                ...(mergedPopoverStyle.value as Record<string, string>),
                ...getThemeStyles.value,
              }}
            >
              <div class={["p-2", props.contentClass].filter(Boolean)}>
                {slots.default?.()}
              </div>
              {props.arrow && (
                <div
                  class={[
                    "absolute h-3 w-3 rotate-45 border",
                    getArrowPositionClass.value, // 直接添加类名
                  ].join(" ")}
                  style={{
                    ...(getArrowStyles.value as Record<string, string>),
                  }}
                />
              )}
            </div>
          )}
        </Transition>
      </div>
    );
  },
});
