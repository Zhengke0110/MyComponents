import { computed, defineComponent, ref, type PropType } from 'vue'

// 颜色主题类型
export type ColorType =
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'

export type TextInputSize = 'sm' | 'md' | 'lg'

export interface TextInputProps {
  modelValue?: string
  id: string
  name?: string
  label?: string
  type?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  description?: string
  error?: string
  color?: ColorType
  size?: TextInputSize
  wrapperClass?: string
  labelClass?: string
  multiline?: boolean
  rows?: number
}

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

    // 颜色映射 - 添加实际颜色值而非类名
    const colorMap: Record<ColorType, { 
      light: string; 
      medium: string; 
      dark: string; 
      hover: string;
      focus: string;
      text: string;
      bgAlpha: string; // 新增背景色透明值
    }> = {
      slate: { light: '#cbd5e1', medium: '#64748b', dark: '#475569', hover: '#94a3b8', focus: '#475569', text: '#334155', bgAlpha: 'rgba(148, 163, 184, 0.08)' },
      gray: { light: '#d1d5db', medium: '#6b7280', dark: '#4b5563', hover: '#9ca3af', focus: '#4b5563', text: '#374151', bgAlpha: 'rgba(156, 163, 175, 0.08)' },
      zinc: { light: '#d4d4d8', medium: '#71717a', dark: '#52525b', hover: '#a1a1aa', focus: '#52525b', text: '#3f3f46', bgAlpha: 'rgba(161, 161, 170, 0.08)' },
      neutral: { light: '#d4d4d4', medium: '#737373', dark: '#525252', hover: '#a3a3a3', focus: '#525252', text: '#404040', bgAlpha: 'rgba(163, 163, 163, 0.08)' },
      stone: { light: '#d6d3d1', medium: '#78716c', dark: '#57534e', hover: '#a8a29e', focus: '#57534e', text: '#44403c', bgAlpha: 'rgba(168, 162, 158, 0.08)' },
      red: { light: '#fca5a5', medium: '#ef4444', dark: '#dc2626', hover: '#f87171', focus: '#dc2626', text: '#b91c1c', bgAlpha: 'rgba(248, 113, 113, 0.08)' },
      orange: { light: '#fdba74', medium: '#f97316', dark: '#ea580c', hover: '#fb923c', focus: '#ea580c', text: '#c2410c', bgAlpha: 'rgba(251, 146, 60, 0.08)' },
      amber: { light: '#fcd34d', medium: '#f59e0b', dark: '#d97706', hover: '#fbbf24', focus: '#d97706', text: '#b45309', bgAlpha: 'rgba(251, 191, 36, 0.08)' },
      yellow: { light: '#fde047', medium: '#eab308', dark: '#ca8a04', hover: '#facc15', focus: '#ca8a04', text: '#a16207', bgAlpha: 'rgba(250, 204, 21, 0.08)' },
      lime: { light: '#bef264', medium: '#84cc16', dark: '#65a30d', hover: '#a3e635', focus: '#65a30d', text: '#4d7c0f', bgAlpha: 'rgba(163, 230, 53, 0.08)' },
      green: { light: '#86efac', medium: '#22c55e', dark: '#16a34a', hover: '#4ade80', focus: '#16a34a', text: '#15803d', bgAlpha: 'rgba(74, 222, 128, 0.08)' },
      emerald: { light: '#6ee7b7', medium: '#10b981', dark: '#059669', hover: '#34d399', focus: '#059669', text: '#047857', bgAlpha: 'rgba(52, 211, 153, 0.08)' },
      teal: { light: '#5eead4', medium: '#14b8a6', dark: '#0d9488', hover: '#2dd4bf', focus: '#0d9488', text: '#0f766e', bgAlpha: 'rgba(45, 212, 191, 0.08)' },
      cyan: { light: '#67e8f9', medium: '#06b6d4', dark: '#0891b2', hover: '#22d3ee', focus: '#0891b2', text: '#0e7490', bgAlpha: 'rgba(34, 211, 238, 0.08)' },
      sky: { light: '#7dd3fc', medium: '#0ea5e9', dark: '#0284c7', hover: '#38bdf8', focus: '#0284c7', text: '#0369a1', bgAlpha: 'rgba(56, 189, 248, 0.08)' },
      blue: { light: '#93c5fd', medium: '#3b82f6', dark: '#2563eb', hover: '#60a5fa', focus: '#2563eb', text: '#1d4ed8', bgAlpha: 'rgba(96, 165, 250, 0.08)' },
      indigo: { light: '#a5b4fc', medium: '#6366f1', dark: '#4f46e5', hover: '#818cf8', focus: '#4f46e5', text: '#4338ca', bgAlpha: 'rgba(129, 140, 248, 0.08)' },
      violet: { light: '#c4b5fd', medium: '#8b5cf6', dark: '#7c3aed', hover: '#a78bfa', focus: '#7c3aed', text: '#6d28d9', bgAlpha: 'rgba(167, 139, 250, 0.08)' },
      purple: { light: '#d8b4fe', medium: '#a855f7', dark: '#9333ea', hover: '#c084fc', focus: '#9333ea', text: '#7e22ce', bgAlpha: 'rgba(192, 132, 252, 0.08)' },
      fuchsia: { light: '#f0abfc', medium: '#d946ef', dark: '#c026d3', hover: '#e879f9', focus: '#c026d3', text: '#a21caf', bgAlpha: 'rgba(232, 121, 249, 0.08)' },
      pink: { light: '#f9a8d4', medium: '#ec4899', dark: '#db2777', hover: '#f472b6', focus: '#db2777', text: '#be185d', bgAlpha: 'rgba(244, 114, 182, 0.08)' },
      rose: { light: '#fda4af', medium: '#f43f5e', dark: '#e11d48', hover: '#fb7185', focus: '#e11d48', text: '#be123c', bgAlpha: 'rgba(251, 113, 133, 0.08)' },
    };

    // 获取颜色样式对象
    const colorStyle = computed(() => {
      const color = props.color as ColorType;
      const theme = colorMap[color] || colorMap.indigo;
      return {
        ring: isFocused.value ? `2px solid ${theme.focus}` : `1px solid #e5e7eb`, 
        hoverRing: !props.disabled && !isFocused.value ? theme.hover : undefined,
        text: props.modelValue && !props.disabled ? theme.text : '#111827',
        errorRing: props.error ? (isFocused.value ? '#ef4444' : '#fca5a5') : undefined,
        // 只有当设置了颜色且不是错误状态时，才使用带透明度的背景色
        background: props.color && !props.error && !props.disabled ? theme.bgAlpha : undefined 
      };
    });

    // 容器样式
    const containerStyle = computed(() => {
      const base = { 
        transition: 'all 300ms ease-in-out',
        boxShadow: props.disabled ? 'none' : undefined,
        opacity: props.disabled ? '0.5' : '1',
        cursor: props.disabled ? 'not-allowed' : 'text',
        // 设置背景色
        backgroundColor: colorStyle.value.background || '#ffffff'
      };
      
      if (props.error) {
        return {
          ...base,
          backgroundColor: '#ffffff', // 错误状态下重置为白色背景
          boxShadow: `0 0 0 ${isFocused.value ? '2px' : '1px'} ${colorStyle.value.errorRing}`,
        };
      }
      
      return {
        ...base,
        boxShadow: `0 0 0 ${colorStyle.value.ring}`,
        '&:hover': {
          boxShadow: !props.disabled && !isFocused.value 
            ? `0 0 0 1px ${colorStyle.value.hoverRing}` 
            : undefined
        }
      };
    });

    // 输入框基础样式
    const inputBaseStyle = computed(() => ({
      color: colorStyle.value.text,
      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isFocused.value ? 'scale(1.01)' : 'scale(1)',
      outline: 'none',
      // 保持输入框背景透明
      backgroundColor: 'transparent'
    }));

    // 图标容器样式
    const iconContainerStyle = {
      transition: 'color 300ms ease',
      color: '#9ca3af', // 默认颜色为灰色
    };

    // 图标悬停和聚焦样式
    const getIconActiveStyle = (isActive: boolean) => ({
      ...iconContainerStyle,
      color: isActive ? '#6b7280' : undefined,
    });

    // 输入框通用类
    const inputBaseClasses = computed(() => [
      'block min-w-0 flex-1 border-0 bg-transparent focus:ring-0 disabled:cursor-not-allowed',
      sizeClasses.value.input,
      'text-gray-900 placeholder:text-gray-400',
      'placeholder:transition-opacity placeholder:duration-200',
      'placeholder:select-none',
      'placeholder:tracking-wide',
      'focus:placeholder:opacity-50',
      // 添加焦点时的动画效果
      'transition-all duration-300 ease-in-out'
    ]);

    // 输入框特定类
    const inputClasses = computed(() => [
      ...inputBaseClasses.value,
      '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
      // 调整边距 - 增加图标与输入框的间隔
      slots.prefix ? 'pl-3' : '',
      props.modelValue && slots.suffix ? 'pr-16' : props.modelValue ? 'pr-8' : slots.suffix ? 'pr-10' : 'pr-3',
    ]);

    // 文本区域特定类
    const textareaClasses = computed(() => [
      ...inputBaseClasses.value,
      'resize-none',
      // 调整边距 - 增加图标与输入框的间隔
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
      slots.suffix ? 'right-8 border-r border-gray-200' : 'right-0',
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

    // 计算container hover时的样式
    const getContainerHoverStyle = () => {
      if (props.disabled || props.error) return {};
      
      const color = props.color as ColorType;
      const theme = colorMap[color] || colorMap.indigo;
      return {
        boxShadow: !isFocused.value ? `0 0 0 1px ${theme.hover}` : undefined
      };
    };

    return () => (
      <div class={['relative space-y-1.5', props.wrapperClass]}>
        {props.label && (
          <label
            for={props.id}
            class={['block text-sm font-medium text-gray-700', props.labelClass]}
          >
            {props.label}
            {props.required && <span class="ml-1 text-red-500">*</span>}
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

            {/* 清除按钮 - 调整z-index避免与后缀图标重叠 */}
            {props.modelValue && !props.disabled && (
              <button
                type="button"
                class={clearButtonClasses.value}
                style={{ zIndex: 2 }}
                onClick={clearInput}
              >
                <svg
                  class="size-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
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
          <p class="mt-1 text-sm text-red-500 transition-all duration-200">
            {props.error}
          </p>
        ) : props.description ? (
          <p class="mt-1 text-sm text-gray-500">
            {props.description}
          </p>
        ) : null}
      </div>
    )
  }
})

export default TextInput
