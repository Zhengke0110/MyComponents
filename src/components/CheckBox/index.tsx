import { computed, defineComponent, ref, onMounted, onUnmounted } from "vue";
import { ThemeColorType, THEME_COLOR_MAP } from "./config";
import {
  checkBoxProps,
  type CheckBoxEmits,
  type CheckBoxPropsType
} from "./types";
import {
  sizeClassesMap,
  colorMap,
  darkModeColorMap,
  baseCheckboxClasses,
  darkModeCheckboxClasses,
  baseIconClasses,
  darkModeIconClasses,
  svgPaths
} from "./config";

export const CheckBox = defineComponent({
  name: "CheckBox",
  props: checkBoxProps,
  emits: ["update:modelValue", "change", "focus", "blur", "click"],
  setup(props: CheckBoxPropsType, { emit }) {
    // 检测系统暗色模式
    const systemDarkMode = ref(false);
    
    // 兼容性处理系统暗色模式监听
    let mediaQuery: MediaQueryList | null = null;
    
    onMounted(() => {
      // 确保在浏览器环境中运行
      if (typeof window !== 'undefined') {
        mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        systemDarkMode.value = mediaQuery.matches;
        
        // 使用兼容性更好的方式添加监听器
        const handleChange = (e: MediaQueryListEvent) => {
          systemDarkMode.value = e.matches;
        };
        
        // 使用 addEventListener 或 addListener (兼容旧浏览器)
        if (mediaQuery.addEventListener) {
          mediaQuery.addEventListener('change', handleChange);
        } else if (mediaQuery.addListener) {
          // @ts-ignore - 兼容旧版浏览器 API
          mediaQuery.addListener(handleChange);
        }
        
        // 清理函数
        onUnmounted(() => {
          if (!mediaQuery) return;
          
          if (mediaQuery.removeEventListener) {
            mediaQuery.removeEventListener('change', handleChange);
          } else if (mediaQuery.removeListener) {
            // @ts-ignore - 兼容旧版浏览器 API
            mediaQuery.removeListener(handleChange);
          }
        });
      }
    });
    
    // 计算当前是否为暗色模式
    const isDarkMode = computed(() => {
      if (!props.followSystem) return props.darkMode;
      return props.darkMode || systemDarkMode.value;
    });

    // 获取尺寸样式
    const sizeClasses = computed(() => sizeClassesMap[props.size]);

    // 获取实际使用的颜色类型（优先使用 theme，回退到 color）
    const actualColorType = computed(() => {
      if (props.theme && props.theme in THEME_COLOR_MAP) {
        return THEME_COLOR_MAP[props.theme as ThemeColorType];
      }
      return props.color;
    });

    // 计算颜色样式，根据暗色模式选择不同的颜色映射
    const colorStyle = computed(() => {
      const colorMapToUse = isDarkMode.value ? darkModeColorMap : colorMap;
      const colors = colorMapToUse[actualColorType.value] || colorMapToUse.indigo;
      return {
        "--tw-checkbox-border": colors.light,
        "--tw-checkbox-hover": colors.medium,
        "--tw-checkbox-checked": colors.dark,
      };
    });

    // 处理变更事件
    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit("update:modelValue", target.checked);
      emit("change", event);
    };

    // 计算复选框类名，合并暗色模式的类名
    const checkboxClasses = computed(() => {
      // 创建一个新对象，避免修改原始对象
      const classes = { ...baseCheckboxClasses };
      
      if (isDarkMode.value) {
        
        // 添加暗色模式特定的类
        return {
          ...classes,
          ...darkModeCheckboxClasses,
          "hover:border-[var(--tw-checkbox-hover)]": !props.disabled,
        };
      }
      
      return {
        ...classes,
        "hover:border-[var(--tw-checkbox-hover)]": !props.disabled,
      };
    });

    // 计算图标类名，合并暗色模式的类名
    const iconClasses = computed(() => [
      ...baseIconClasses,
      ...(isDarkMode.value ? darkModeIconClasses : []),
      props.modelValue || props.indeterminate ? "scale-100" : "scale-0",
      sizeClasses.value.icon,
    ]);

    // 计算包装器类名
    const wrapperClasses = computed(() => [
      "relative",
      // 布局相关类名
      props.layout === "vertical"
        ? "flex flex-col gap-3"
        : "flex items-center gap-2",
      props.inline ? "inline-flex" : "flex",
      // 暗色模式下的文本颜色
      isDarkMode.value ? "text-gray-100" : "text-gray-900",
      props.wrapperClass,
    ]);

    // 计算标签类名
    const labelTextClasses = computed(() => [
      "font-medium",
      isDarkMode.value ? "text-gray-100" : "text-gray-900",
      props.labelClass,
    ]);

    // 计算描述文本类名
    const descriptionClasses = computed(() => [
      isDarkMode.value ? "text-gray-400" : "text-gray-500",
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
          style={colorStyle.value}
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
            "cursor-pointer font-medium select-none",
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
