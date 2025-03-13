import { computed, defineComponent } from "vue";
import { THEME_COLOR_MAP, colorClassMap, sizeClassesMap, svgPaths } from "./config";
import { checkBoxProps, type CheckBoxPropsType } from "./types";

export const CheckBox = defineComponent({
  name: "CheckBox",
  props: checkBoxProps,
  emits: ["update:modelValue", "change", "focus", "blur", "click"],
  setup(props: CheckBoxPropsType, { emit }) {
    // 获取实际使用的颜色类型
    const actualColorType = computed(() => {
      // 检查传入的type是否为主题枚举
      if (props.type && props.type in THEME_COLOR_MAP) {
        return THEME_COLOR_MAP[props.type as keyof typeof THEME_COLOR_MAP];
      }
      return props.type as keyof typeof colorClassMap;
    });

    // 获取颜色样式类
    const colorClasses = computed(() => {
      const colorType = actualColorType.value || 'indigo';
      return colorClassMap[colorType] || colorClassMap.indigo;
    });

    // 获取尺寸样式
    const sizeClasses = computed(() => sizeClassesMap[props.size]);

    // 处理变更事件
    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit("update:modelValue", target.checked);
      emit("change", event);
    };

    // 计算复选框类名
    const checkboxClasses = computed(() => [
      // 基本样式
      "relative appearance-none rounded border",
      "transition-all duration-200 ease-in-out",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:bg-gray-100 dark:disabled:bg-gray-800",
      "disabled:border-gray-300 dark:disabled:border-gray-700",
      "focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
      // 颜色样式
      colorClasses.value.border,
      !props.disabled && colorClasses.value.hoverBorder,
      colorClasses.value.checkedBg,
      colorClasses.value.focusRing,
      // 背景色
      "bg-white dark:bg-gray-800",
      // 选中状态动画增强
      "checked:animate-pulse checked:animate-once checked:animate-duration-300",
      // 暗色模式下增强选中状态的视觉效果
      "dark:checked:border-opacity-0 dark:checked:shadow-[0_0_0_1px_rgba(255,255,255,0.2)]",
    ]);

    // 计算图标类名
    const iconClasses = computed(() => [
      // 基本样式
      "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      "transition-transform duration-200 ease-in-out",
      // 增强暗色模式下图标的亮度
      "stroke-white dark:stroke-white dark:stroke-opacity-100 dark:stroke-[2.5px]",
      "group-has-[:disabled]:stroke-gray-950/25 dark:group-has-[:disabled]:stroke-gray-300/50",
      // 大小样式
      sizeClasses.value.icon,
      // 动画效果增强
      props.modelValue || props.indeterminate
        ? "scale-100 transform-gpu"
        : "scale-0 transform-gpu",
    ]);

    // 计算包装器类名
    const wrapperClasses = computed(() => [
      "relative",
      // 布局相关类名
      props.layout === "vertical"
        ? "flex flex-col gap-3"
        : "flex items-center gap-2",
      props.inline ? "inline-flex" : "flex",
      // 文本颜色，增强对比度
      "text-gray-900 dark:text-gray-50",
      props.wrapperClass,
    ]);

    // 计算标签类名
    const labelTextClasses = computed(() => [
      "font-medium",
      "text-gray-900 dark:text-gray-50", // 增强文字亮度
      props.labelClass,
    ]);

    // 计算描述文本类名
    const descriptionClasses = computed(() => [
      "text-gray-500 dark:text-gray-300", // 提高描述文字的亮度
    ]);

    // 获取当前应使用的 SVG 路径
    const currentPath = computed(() => {
      return props.indeterminate ? svgPaths.indeterminate : svgPaths.check;
    });

    // 渲染复选框输入元素
    const renderCheckboxInput = () => (
      <div class={["group relative grid grid-cols-1", sizeClasses.value.checkbox]}>
        <input
          id={props.id}
          name={props.name}
          type="checkbox"
          checked={props.modelValue}
          disabled={props.disabled}
          indeterminate={props.indeterminate}
          aria-describedby={
            props.description ? `${props.id}-description` : undefined
          }
          onChange={handleChange}
          onFocus={(e) => emit("focus", e)}
          onBlur={(e) => emit("blur", e)}
          onClick={(e) => emit("click", e)}
          class={[checkboxClasses.value, sizeClasses.value.input]}
        />
        <svg
          class={iconClasses.value}
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d={currentPath.value}
            stroke-width={sizeClasses.value.strokeWidth}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    );

    // 渲染带描述的布局
    const renderWithDescription = () => (
      <>
        <div class="min-w-0 flex-1 text-sm/6">
          <label
            for={props.id}
            class={labelTextClasses.value}
          >
            {props.label}
          </label>
          <p id={`${props.id}-description`} class={descriptionClasses.value}>
            {props.description}
          </p>
        </div>
        <div class={["flex shrink-0 items-center", sizeClasses.value.container]}>
          {renderCheckboxInput()}
        </div>
      </>
    );

    // 渲染简单布局
    const renderSimple = () => (
      <>
        <div class={["flex shrink-0 items-center", sizeClasses.value.container]}>
          {renderCheckboxInput()}
        </div>
        <label
          for={props.id}
          class={[
            "cursor-pointer select-none font-medium",
            labelTextClasses.value,
            sizeClasses.value.label,
          ]}
        >
          {props.label}
        </label>
      </>
    );

    return () => (
      <div class={wrapperClasses.value}>
        {props.description ? renderWithDescription() : renderSimple()}
      </div>
    );
  },
});

export default CheckBox;
export * from './types';
