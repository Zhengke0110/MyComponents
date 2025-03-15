import { computed, defineComponent, ref, type PropType } from 'vue'
import { ColorType, TextInputProps, colorMap, TextInputSize } from './config'
export type { ColorType, TextInputSize }
export const TextInput = defineComponent({
  name: 'TextInput',
  props: {
    modelValue: String,
    id: {
      type: String,
      required: true
    },
    name: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    description: String,
    error: String,
    color: {
      type: String as PropType<ColorType>,
      default: 'indigo'
    },
    size: {
      type: String as PropType<TextInputSize>,
      default: 'md'
    },
    wrapperClass: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    multiline: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    }
  },
  emits: ['update:modelValue', 'focus', 'blur'],
  setup(props, { emit, slots }) {
    const isFocused = ref(false);

    // 尺寸相关样式
    const sizeClasses = computed(() => ({
      sm: {
        input: 'py-1 px-2.5 text-sm tracking-tight',
      },
      md: {
        input: 'py-1.5 px-3 text-base tracking-normal',
      },
      lg: {
        input: 'py-2 px-3.5 text-lg tracking-normal',
      }
    }[props.size]));



    // 获取颜色样式对象，现在支持深色模式
    const colorStyle = computed(() => {
      const color = props.color as ColorType || 'indigo';
      const defaultTheme = colorMap.light.indigo;

      // 根据是否启用了深色模式选择对应的调色板
      const themeGroup = document.documentElement.classList.contains('dark')
        ? colorMap.dark
        : colorMap.light;

      const theme = themeGroup[color] || defaultTheme;

      return {
        ring: isFocused.value ? `2px solid ${theme.focus}` : `1px solid ${document.documentElement.classList.contains('dark') ? '#4b5563' : '#e5e7eb'}`,
        hoverRing: !props.disabled && !isFocused.value ? theme.hover : undefined,
        text: props.modelValue && !props.disabled ? theme.text : document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#111827',
        errorRing: props.error ? (isFocused.value ? document.documentElement.classList.contains('dark') ? '#ef4444' : '#ef4444' : document.documentElement.classList.contains('dark') ? '#b91c1c' : '#fca5a5') : undefined,
        background: props.color && !props.error && !props.disabled ? theme.bgAlpha : document.documentElement.classList.contains('dark') ? 'rgba(31, 41, 55, 0.5)' : '#ffffff',
      };
    });

    // 容器样式，支持深色模式
    const containerStyle = computed(() => {
      const base = {
        transition: 'all 250ms ease-in-out',
        boxShadow: props.disabled ? 'none' : undefined,
        opacity: props.disabled ? '0.5' : '1',
        cursor: props.disabled ? 'not-allowed' : 'text',
        backgroundColor: colorStyle.value.background,
      };

      if (props.error) {
        return {
          ...base,
          backgroundColor: document.documentElement.classList.contains('dark') ? 'rgba(127, 29, 29, 0.1)' : '#ffffff',
          boxShadow: `0 0 0 ${isFocused.value ? '2px' : '1px'} ${colorStyle.value.errorRing}`,
        };
      }

      return {
        ...base,
        boxShadow: `0 0 0 ${colorStyle.value.ring}`,
      };
    });

    // 输入框基础样式
    const inputBaseStyle = computed(() => ({
      color: colorStyle.value.text,
      transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isFocused.value ? 'scale(1.005)' : 'scale(1)',
      outline: 'none',
      backgroundColor: 'transparent'
    }));

    // 图标容器样式
    const iconContainerStyle = computed(() => ({
      transition: 'color 250ms ease',
      color: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280',
    }));

    // 图标悬停和聚焦样式
    const getIconActiveStyle = (isActive: boolean) => ({
      ...iconContainerStyle.value,
      color: isActive
        ? document.documentElement.classList.contains('dark')
          ? '#e5e7eb'
          : '#4b5563'
        : undefined,
    });

    // 输入框通用类
    const inputBaseClasses = computed(() => [
      'block min-w-0 flex-1 border-0 bg-transparent focus:ring-0 disabled:cursor-not-allowed',
      sizeClasses.value.input,
      'text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500',
      'placeholder:transition-opacity placeholder:duration-200',
      'placeholder:select-none',
      'placeholder:tracking-wide',
      'focus:placeholder:opacity-50',
      'transition-all duration-300 ease-in-out'
    ]);

    // 输入框特定类
    const inputClasses = computed(() => [
      ...inputBaseClasses.value,
      '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
      slots.prefix ? 'pl-3' : '',
      props.modelValue && slots.suffix ? 'pr-16' : props.modelValue ? 'pr-8' : slots.suffix ? 'pr-10' : 'pr-3',
    ]);

    // 文本区域特定类
    const textareaClasses = computed(() => [
      ...inputBaseClasses.value,
      'resize-none',
      slots.prefix ? 'pl-3' : '',
      slots.suffix ? 'pr-10' : '',
    ]);

    // 图标容器类
    const iconContainerClasses = computed(() => {
      return {
        prefix: 'flex items-center justify-center pl-3 pr-2 transition-colors duration-300',
        suffix: 'flex items-center justify-center pr-3 pl-2 transition-colors duration-300',
      };
    });

    // 清除按钮类
    const clearButtonClasses = computed(() => [
      'absolute flex h-full items-center px-2 transition-all duration-300',
      slots.suffix ? 'right-8 border-r border-gray-200 dark:border-gray-700' : 'right-0',
      isFocused.value ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
    ]);

    // 事件处理
    const handleInput = (event: Event) => {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement;
      let value = target.value;

      // 如果是数字输入框，进行额外处理
      if (props.type === 'number') {
        // 移除非数字字符（保留负号和小数点）
        value = value.replace(/[^\d.-]/g, '');
        // 确保只有一个小数点和一个负号
        const parts = value.split('.');
        if (parts.length > 2) {
          value = parts[0] + '.' + parts.slice(1).join('');
        }
        if (value.split('-').length > 2) {
          value = value.replace(/-/g, '');
          if (value.startsWith('.')) {
            value = '0' + value;
          }
          value = '-' + value;
        }
        // 如果不是第一位，移除负号
        if (value.indexOf('-') > 0) {
          value = value.replace(/-/g, '');
        }
      }

      emit('update:modelValue', value);
    };

    const handleFocus = (event: FocusEvent) => {
      isFocused.value = true;
      emit('focus', event);
    };

    const handleBlur = (event: FocusEvent) => {
      isFocused.value = false;
      emit('blur', event);
    };

    const clearInput = () => {
      emit('update:modelValue', '');
    };

    return () => (
      <div class={['relative space-y-1.5', props.wrapperClass]}>
        {props.label && (
          <label
            for={props.id}
            class={['block text-sm font-medium text-gray-700 dark:text-gray-300', props.labelClass]}
          >
            {props.label}
            {props.required && <span class="ml-1 text-red-500 dark:text-red-400">*</span>}
          </label>
        )}

        <div class="relative">
          <div
            class="group flex w-full items-center rounded-md"
            style={containerStyle.value}
            onMouseover={(e) => {
              if (!props.disabled && !props.error && !isFocused.value) {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 1px ${colorStyle.value.hoverRing}`;
              }
            }}
            onMouseleave={(e) => {
              if (!isFocused.value) {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 ${colorStyle.value.ring}`;
              }
            }}
          >
            {slots.prefix && (
              <div
                class={iconContainerClasses.value.prefix}
                style={getIconActiveStyle(isFocused.value)}
              >
                {slots.prefix()}
              </div>
            )}

            {props.multiline ? (
              <textarea
                id={props.id}
                name={props.name}
                value={props.modelValue}
                disabled={props.disabled}
                placeholder={props.placeholder}
                required={props.required}
                rows={props.rows}
                onInput={handleInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
                class={textareaClasses.value}
                style={inputBaseStyle.value}
              />
            ) : (
              <input
                id={props.id}
                type={props.type}
                name={props.name}
                value={props.modelValue}
                disabled={props.disabled}
                placeholder={props.placeholder}
                required={props.required}
                onInput={handleInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
                class={inputClasses.value}
                style={inputBaseStyle.value}
              />
            )}

            {/* 清除按钮 */}
            {props.modelValue && !props.disabled && (
              <button
                type="button"
                class={clearButtonClasses.value}
                style={{ zIndex: 2 }}
                onClick={clearInput}
              >
                <svg
                  class="size-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            )}

            {slots.suffix && (
              <div
                class={iconContainerClasses.value.suffix}
                style={getIconActiveStyle(isFocused.value)}
              >
                {slots.suffix()}
              </div>
            )}
          </div>
        </div>

        {props.error ? (
          <p class="mt-1 text-sm text-red-500 dark:text-red-400 transition-all duration-200">
            {props.error}
          </p>
        ) : props.description ? (
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {props.description}
          </p>
        ) : null}
      </div>
    )
  }
})

export default TextInput
