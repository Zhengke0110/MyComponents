import { computed, defineComponent, type PropType } from "vue";

// 定义支持的颜色类型
type ColorType =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export const CheckBox = defineComponent({
  name: "CheckBox",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String as PropType<ColorType>,
      default: "indigo",
    },
    layout: {
      type: String as PropType<"horizontal" | "vertical">,
      default: "horizontal",
    },
    size: {
      type: String as PropType<"sm" | "md" | "lg">,
      default: "md",
    },
    inline: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    wrapperClass: {
      type: String,
      default: "",
    },
    labelClass: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue", "change", "focus", "blur", "click"],
  setup(props, { emit }) {
    const sizeClasses = computed(
      () =>
        ({
          sm: {
            container: "h-5",
            checkbox: "size-3.5",
            input: "size-3.5",
            icon: "size-2.5",
            label: "ml-2 text-sm",
            strokeWidth: 2.5,
          },
          md: {
            container: "h-6",
            checkbox: "size-4",
            input: "size-4",
            icon: "size-3",
            label: "ml-2 text-base",
            strokeWidth: 2.5,
          },
          lg: {
            container: "h-7",
            checkbox: "size-5",
            input: "size-5",
            icon: "size-4",
            label: "ml-3 text-lg",
            strokeWidth: 3,
          },
        })[props.size],
    );

    // 更新颜色映射对象

    // 更新颜色映射对象
    const colorMap: Record<
      ColorType,
      { light: string; medium: string; dark: string }
    > = {
      slate: { light: "#cbd5e1", medium: "#64748b", dark: "#475569" },
      gray: { light: "#d1d5db", medium: "#6b7280", dark: "#4b5563" },
      zinc: { light: "#d4d4d8", medium: "#71717a", dark: "#52525b" },
      neutral: { light: "#d4d4d4", medium: "#737373", dark: "#525252" },
      stone: { light: "#d6d3d1", medium: "#78716c", dark: "#57534e" },
      red: { light: "#fca5a5", medium: "#ef4444", dark: "#dc2626" },
      orange: { light: "#fdba74", medium: "#f97316", dark: "#ea580c" },
      amber: { light: "#fcd34d", medium: "#f59e0b", dark: "#d97706" },
      yellow: { light: "#fde047", medium: "#eab308", dark: "#ca8a04" },
      lime: { light: "#bef264", medium: "#84cc16", dark: "#65a30d" },
      green: { light: "#86efac", medium: "#22c55e", dark: "#16a34a" },
      emerald: { light: "#6ee7b7", medium: "#10b981", dark: "#059669" },
      teal: { light: "#5eead4", medium: "#14b8a6", dark: "#0d9488" },
      cyan: { light: "#67e8f9", medium: "#06b6d4", dark: "#0891b2" },
      sky: { light: "#7dd3fc", medium: "#0ea5e9", dark: "#0284c7" },
      blue: { light: "#93c5fd", medium: "#3b82f6", dark: "#2563eb" },
      indigo: { light: "#a5b4fc", medium: "#6366f1", dark: "#4f46e5" },
      violet: { light: "#c4b5fd", medium: "#8b5cf6", dark: "#7c3aed" },
      purple: { light: "#d8b4fe", medium: "#a855f7", dark: "#9333ea" },
      fuchsia: { light: "#f0abfc", medium: "#d946ef", dark: "#c026d3" },
      pink: { light: "#f9a8d4", medium: "#ec4899", dark: "#db2777" },
      rose: { light: "#fda4af", medium: "#f43f5e", dark: "#e11d48" },
    };

    const colorStyle = computed(() => {
      const colors =
        colorMap[props.color as keyof typeof colorMap] || colorMap.indigo;
      return {
        "--tw-checkbox-border": colors.light,
        "--tw-checkbox-hover": colors.medium,
        "--tw-checkbox-checked": colors.dark,
      };
    });

    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit("update:modelValue", target.checked);
      emit("change", event);
    };

    const checkboxClasses = computed(() => ({
      "relative cursor-pointer appearance-none rounded border bg-white": true,
      "transition-all duration-200 ease-in-out": true,
      "hover:border-[var(--tw-checkbox-hover)]": !props.disabled,
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tw-checkbox-hover)] focus-visible:ring-offset-2":
        true,
      "disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100":
        props.disabled,
      "checked:bg-[var(--tw-checkbox-checked)] checked:border-[var(--tw-checkbox-checked)]":
        true,
      "checked:animate-pulse checked:animate-once checked:animate-duration-200":
        true,
    }));

    const wrapperClasses = computed(() => [
      "relative",
      // 布局相关类名
      props.layout === "vertical" 
        ? "flex flex-col gap-3" 
        : "flex items-center gap-2",
      props.inline ? "inline-flex" : "flex",
      props.wrapperClass,
    ]);

    return () => (
      <div class={wrapperClasses.value}>
        {props.description ? (
          // 带描述文本的布局
          <>
            <div class="min-w-0 flex-1 text-sm/6">
              <label
                for={props.id}
                class={["font-medium text-gray-900", props.labelClass]}
              >
                {props.label}
              </label>
              <p id={`${props.id}-description`} class="text-gray-500">
                {props.description}
              </p>
            </div>
            <div class={["flex shrink-0 items-center", sizeClasses.value.container]}>
              {/* Checkbox input wrapper */}
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
                  class={[
                    "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    "transition-transform duration-200 ease-in-out",
                    "stroke-white group-has-[:disabled]:stroke-gray-950/25",
                    props.modelValue || props.indeterminate
                      ? "scale-100"
                      : "scale-0",
                    sizeClasses.value.icon,
                  ]}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  {!props.indeterminate ? (
                    <path
                      d="M4 8.5L6.5 11L12 4"
                      stroke-width={sizeClasses.value.strokeWidth}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  ) : (
                    <path
                      d="M3 8H13"
                      stroke-width={sizeClasses.value.strokeWidth}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  )}
                </svg>
              </div>
            </div>
          </>
        ) : (
          // 简单布局
          <>
            <div class={["flex shrink-0 items-center", sizeClasses.value.container]}>
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
                  class={[
                    "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    "transition-transform duration-200 ease-in-out",
                    "stroke-white group-has-[:disabled]:stroke-gray-950/25",
                    props.modelValue || props.indeterminate
                      ? "scale-100"
                      : "scale-0",
                    sizeClasses.value.icon,
                  ]}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  {!props.indeterminate ? (
                    <path
                      d="M4 8.5L6.5 11L12 4"
                      stroke-width={sizeClasses.value.strokeWidth}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  ) : (
                    <path
                      d="M3 8H13"
                      stroke-width={sizeClasses.value.strokeWidth}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  )}
                </svg>
              </div>
            </div>
            <label
              for={props.id}
              class={[
                "cursor-pointer font-medium text-gray-900 select-none",
                sizeClasses.value.label,
                props.labelClass,
              ]}
            >
              {props.label}
            </label>
          </>
        )}
      </div>
    );
  },
});

export default CheckBox;
