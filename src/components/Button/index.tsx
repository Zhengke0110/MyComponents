import { computed, defineComponent, type PropType } from 'vue'
export type ColorType =
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系

// 常用的主题色类型 (用于简化部分组件的类型定义)
export type ThemeColorType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

// 主题色对应的实际颜色
export const THEME_COLOR_MAP: Record<ThemeColorType, ColorType> = {
  primary: 'indigo',
  secondary: 'gray',
  success: 'green',
  warning: 'yellow',
  danger: 'red',
  info: 'blue'
};



export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ButtonVariant = 'solid' | 'outline' | 'soft' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  color?: ColorType
  theme?: ThemeColorType
  icon?: string
  iconColor?: string
  loading?: boolean
  disabled?: boolean
  isActiveAnim?: boolean
  block?: boolean
}

const iconValidator = (value: string): boolean => {
  // 拆分空格分隔的类名
  const classes = value.split(' ')
  // 检查是否至少有一个类符合 icon-[xxx] 格式
  return classes.some(cls => cls.startsWith('icon-[') && cls.endsWith(']'))
}

// 按钮变体的样式映射
const variantColorMap = {
  solid: {
    slate: "bg-slate-500 text-white hover:bg-slate-600 focus:ring-slate-400",
    gray: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400",
    zinc: "bg-zinc-500 text-white hover:bg-zinc-600 focus:ring-zinc-400",
    neutral: "bg-neutral-500 text-white hover:bg-neutral-600 focus:ring-neutral-400",
    stone: "bg-stone-500 text-white hover:bg-stone-600 focus:ring-stone-400",
    red: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
    orange: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400",
    amber: "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400",
    yellow: "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400",
    lime: "bg-lime-500 text-white hover:bg-lime-600 focus:ring-lime-400",
    green: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400",
    emerald: "bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-400",
    teal: "bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-400",
    cyan: "bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-400",
    sky: "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-400",
    blue: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
    indigo: "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-400",
    violet: "bg-violet-500 text-white hover:bg-violet-600 focus:ring-violet-400",
    purple: "bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-400",
    fuchsia: "bg-fuchsia-500 text-white hover:bg-fuchsia-600 focus:ring-fuchsia-400",
    pink: "bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-400",
    rose: "bg-rose-500 text-white hover:bg-rose-600 focus:ring-rose-400"
  },
  outline: {
    slate: "border border-slate-500 text-slate-700 hover:bg-slate-50 focus:ring-slate-400 dark:text-slate-300",
    gray: "border border-gray-500 text-gray-700 hover:bg-gray-50 focus:ring-gray-400 dark:text-gray-300",
    zinc: "border border-zinc-500 text-zinc-700 hover:bg-zinc-50 focus:ring-zinc-400 dark:text-zinc-300",
    neutral: "border border-neutral-500 text-neutral-700 hover:bg-neutral-50 focus:ring-neutral-400 dark:text-neutral-300",
    stone: "border border-stone-500 text-stone-700 hover:bg-stone-50 focus:ring-stone-400 dark:text-stone-300",
    red: "border border-red-500 text-red-700 hover:bg-red-50 focus:ring-red-400 dark:text-red-300",
    orange: "border border-orange-500 text-orange-700 hover:bg-orange-50 focus:ring-orange-400 dark:text-orange-300",
    amber: "border border-amber-500 text-amber-700 hover:bg-amber-50 focus:ring-amber-400 dark:text-amber-300",
    yellow: "border border-yellow-500 text-yellow-700 hover:bg-yellow-50 focus:ring-yellow-400 dark:text-yellow-300",
    lime: "border border-lime-500 text-lime-700 hover:bg-lime-50 focus:ring-lime-400 dark:text-lime-300",
    green: "border border-green-500 text-green-700 hover:bg-green-50 focus:ring-green-400 dark:text-green-300",
    emerald: "border border-emerald-500 text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-400 dark:text-emerald-300",
    teal: "border border-teal-500 text-teal-700 hover:bg-teal-50 focus:ring-teal-400 dark:text-teal-300",
    cyan: "border border-cyan-500 text-cyan-700 hover:bg-cyan-50 focus:ring-cyan-400 dark:text-cyan-300",
    sky: "border border-sky-500 text-sky-700 hover:bg-sky-50 focus:ring-sky-400 dark:text-sky-300",
    blue: "border border-blue-500 text-blue-700 hover:bg-blue-50 focus:ring-blue-400 dark:text-blue-300",
    indigo: "border border-indigo-500 text-indigo-700 hover:bg-indigo-50 focus:ring-indigo-400 dark:text-indigo-300",
    violet: "border border-violet-500 text-violet-700 hover:bg-violet-50 focus:ring-violet-400 dark:text-violet-300",
    purple: "border border-purple-500 text-purple-700 hover:bg-purple-50 focus:ring-purple-400 dark:text-purple-300",
    fuchsia: "border border-fuchsia-500 text-fuchsia-700 hover:bg-fuchsia-50 focus:ring-fuchsia-400 dark:text-fuchsia-300",
    pink: "border border-pink-500 text-pink-700 hover:bg-pink-50 focus:ring-pink-400 dark:text-pink-300",
    rose: "border border-rose-500 text-rose-700 hover:bg-rose-50 focus:ring-rose-400 dark:text-rose-300"
  },
  soft: {
    slate: "bg-slate-50 text-slate-800 hover:bg-slate-100 focus:ring-slate-400 dark:bg-slate-900/20 dark:text-slate-300",
    gray: "bg-gray-50 text-gray-800 hover:bg-gray-100 focus:ring-gray-400 dark:bg-gray-900/20 dark:text-gray-300",
    zinc: "bg-zinc-50 text-zinc-800 hover:bg-zinc-100 focus:ring-zinc-400 dark:bg-zinc-900/20 dark:text-zinc-300",
    neutral: "bg-neutral-50 text-neutral-800 hover:bg-neutral-100 focus:ring-neutral-400 dark:bg-neutral-900/20 dark:text-neutral-300",
    stone: "bg-stone-50 text-stone-800 hover:bg-stone-100 focus:ring-stone-400 dark:bg-stone-900/20 dark:text-stone-300",
    red: "bg-red-50 text-red-800 hover:bg-red-100 focus:ring-red-400 dark:bg-red-900/20 dark:text-red-300",
    orange: "bg-orange-50 text-orange-800 hover:bg-orange-100 focus:ring-orange-400 dark:bg-orange-900/20 dark:text-orange-300",
    amber: "bg-amber-50 text-amber-800 hover:bg-amber-100 focus:ring-amber-400 dark:bg-amber-900/20 dark:text-amber-300",
    yellow: "bg-yellow-50 text-yellow-800 hover:bg-yellow-100 focus:ring-yellow-400 dark:bg-yellow-900/20 dark:text-yellow-300",
    lime: "bg-lime-50 text-lime-800 hover:bg-lime-100 focus:ring-lime-400 dark:bg-lime-900/20 dark:text-lime-300",
    green: "bg-green-50 text-green-800 hover:bg-green-100 focus:ring-green-400 dark:bg-green-900/20 dark:text-green-300",
    emerald: "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 focus:ring-emerald-400 dark:bg-emerald-900/20 dark:text-emerald-300",
    teal: "bg-teal-50 text-teal-800 hover:bg-teal-100 focus:ring-teal-400 dark:bg-teal-900/20 dark:text-teal-300",
    cyan: "bg-cyan-50 text-cyan-800 hover:bg-cyan-100 focus:ring-cyan-400 dark:bg-cyan-900/20 dark:text-cyan-300",
    sky: "bg-sky-50 text-sky-800 hover:bg-sky-100 focus:ring-sky-400 dark:bg-sky-900/20 dark:text-sky-300",
    blue: "bg-blue-50 text-blue-800 hover:bg-blue-100 focus:ring-blue-400 dark:bg-blue-900/20 dark:text-blue-300",
    indigo: "bg-indigo-50 text-indigo-800 hover:bg-indigo-100 focus:ring-indigo-400 dark:bg-indigo-900/20 dark:text-indigo-300",
    violet: "bg-violet-50 text-violet-800 hover:bg-violet-100 focus:ring-violet-400 dark:bg-violet-900/20 dark:text-violet-300",
    purple: "bg-purple-50 text-purple-800 hover:bg-purple-100 focus:ring-purple-400 dark:bg-purple-900/20 dark:text-purple-300",
    fuchsia: "bg-fuchsia-50 text-fuchsia-800 hover:bg-fuchsia-100 focus:ring-fuchsia-400 dark:bg-fuchsia-900/20 dark:text-fuchsia-300",
    pink: "bg-pink-50 text-pink-800 hover:bg-pink-100 focus:ring-pink-400 dark:bg-pink-900/20 dark:text-pink-300",
    rose: "bg-rose-50 text-rose-800 hover:bg-rose-100 focus:ring-rose-400 dark:bg-rose-900/20 dark:text-rose-300"
  },
  ghost: {
    slate: "bg-transparent hover:bg-slate-100 text-slate-700 focus:ring-slate-400 dark:hover:bg-slate-800 dark:text-slate-300",
    gray: "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-400 dark:hover:bg-gray-800 dark:text-gray-300",
    zinc: "bg-transparent hover:bg-zinc-100 text-zinc-700 focus:ring-zinc-400 dark:hover:bg-zinc-800 dark:text-zinc-300",
    neutral: "bg-transparent hover:bg-neutral-100 text-neutral-700 focus:ring-neutral-400 dark:hover:bg-neutral-800 dark:text-neutral-300",
    stone: "bg-transparent hover:bg-stone-100 text-stone-700 focus:ring-stone-400 dark:hover:bg-stone-800 dark:text-stone-300",
    red: "bg-transparent hover:bg-red-100 text-red-700 focus:ring-red-400 dark:hover:bg-red-900/30 dark:text-red-300",
    orange: "bg-transparent hover:bg-orange-100 text-orange-700 focus:ring-orange-400 dark:hover:bg-orange-900/30 dark:text-orange-300",
    amber: "bg-transparent hover:bg-amber-100 text-amber-700 focus:ring-amber-400 dark:hover:bg-amber-900/30 dark:text-amber-300",
    yellow: "bg-transparent hover:bg-yellow-100 text-yellow-700 focus:ring-yellow-400 dark:hover:bg-yellow-900/30 dark:text-yellow-300",
    lime: "bg-transparent hover:bg-lime-100 text-lime-700 focus:ring-lime-400 dark:hover:bg-lime-900/30 dark:text-lime-300",
    green: "bg-transparent hover:bg-green-100 text-green-700 focus:ring-green-400 dark:hover:bg-green-900/30 dark:text-green-300",
    emerald: "bg-transparent hover:bg-emerald-100 text-emerald-700 focus:ring-emerald-400 dark:hover:bg-emerald-900/30 dark:text-emerald-300",
    teal: "bg-transparent hover:bg-teal-100 text-teal-700 focus:ring-teal-400 dark:hover:bg-teal-900/30 dark:text-teal-300",
    cyan: "bg-transparent hover:bg-cyan-100 text-cyan-700 focus:ring-cyan-400 dark:hover:bg-cyan-900/30 dark:text-cyan-300",
    sky: "bg-transparent hover:bg-sky-100 text-sky-700 focus:ring-sky-400 dark:hover:bg-sky-900/30 dark:text-sky-300",
    blue: "bg-transparent hover:bg-blue-100 text-blue-700 focus:ring-blue-400 dark:hover:bg-blue-900/30 dark:text-blue-300",
    indigo: "bg-transparent hover:bg-indigo-100 text-indigo-700 focus:ring-indigo-400 dark:hover:bg-indigo-900/30 dark:text-indigo-300",
    violet: "bg-transparent hover:bg-violet-100 text-violet-700 focus:ring-violet-400 dark:hover:bg-violet-900/30 dark:text-violet-300",
    purple: "bg-transparent hover:bg-purple-100 text-purple-700 focus:ring-purple-400 dark:hover:bg-purple-900/30 dark:text-purple-300",
    fuchsia: "bg-transparent hover:bg-fuchsia-100 text-fuchsia-700 focus:ring-fuchsia-400 dark:hover:bg-fuchsia-900/30 dark:text-fuchsia-300",
    pink: "bg-transparent hover:bg-pink-100 text-pink-700 focus:ring-pink-400 dark:hover:bg-pink-900/30 dark:text-pink-300",
    rose: "bg-transparent hover:bg-rose-100 text-rose-700 focus:ring-rose-400 dark:hover:bg-rose-900/30 dark:text-rose-300"
  }
};

export const Button = defineComponent({
  name: 'Button',
  props: {
    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'solid'
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'md'
    },
    color: {
      type: String as PropType<ColorType>,
      default: 'blue',
      validator: (value: string): boolean => {
        const validColors: ColorType[] = [
          'slate', 'gray', 'zinc', 'neutral', 'stone',
          'red', 'orange', 'amber', 'yellow', 'lime',
          'green', 'emerald', 'teal', 'cyan', 'sky',
          'blue', 'indigo', 'violet', 'purple', 'fuchsia',
          'pink', 'rose'
        ];
        return validColors.includes(value as ColorType);
      }
    },
    theme: {
      type: String as PropType<ThemeColorType>,
      default: undefined,
      validator: (value: string): boolean => {
        const validThemes = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
        return validThemes.includes(value);
      }
    },
    icon: {
      type: String,
      validator: iconValidator,
      default: undefined
    },
    iconColor: String,
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isActiveAnim: {
      type: Boolean,
      default: true
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  setup(props: ButtonProps, { slots, emit }) {
    const isIconOnly = computed(() => props.icon && !slots.default)

    // 简化 icon 处理逻辑，因为现在只接受标准格式
    const iconClass = computed(() => props.icon || '')

    // 计算实际使用的颜色：如果提供了theme，则使用theme对应的颜色，否则使用color属性
    const actualColor = computed<ColorType>(() => {
      if (props.theme) {
        return THEME_COLOR_MAP[props.theme as ThemeColorType];
      }
      return props.color as ColorType;
    });

    // 根据变体和颜色获取样式
    const colorStyles = computed(() => {
      const variant = props.variant || 'solid';
      const color = actualColor.value;
      return variantColorMap[variant][color];
    });

    const baseStyles = computed(() => ({
      'inline-flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed gap-2': true,
      'hover:scale-105 active:scale-100': props.isActiveAnim,
      'opacity-75 cursor-wait': props.loading,
      'p-2': isIconOnly.value,
      'w-full': props.block,
    }));

    const sizeStyles = computed(() => {
      if (isIconOnly.value) return ''
      const styles = {
        xs: 'px-2.5 py-1 text-xs',
        sm: 'px-3.5 py-1.5 text-sm',
        md: 'px-4.5 py-2 text-base',
        lg: 'px-5.5 py-2.5 text-lg',
        xl: 'px-6.5 py-3 text-xl'
      }
      return styles[props.size || 'md']
    })

    const iconSizeStyles = computed(() => {
      const styles = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-7 h-7'
      }
      return styles[props.size || 'md']
    })

    return () => (
      <button
        class={[baseStyles.value, colorStyles.value, sizeStyles.value]}
        disabled={props.disabled || props.loading}
        onClick={(event: MouseEvent) => {
          if (!props.loading && !props.disabled) {
            emit('click', event)
          }
        }}
      >
        {props.loading && (
          <span class={[iconSizeStyles.value, 'inline-flex items-center']} role="status">
            <div class="icon-[mingcute--loading-line] animate-spin w-full h-full" />
          </span>
        )}
        {!props.loading && props.icon && (
          <span class={[iconSizeStyles.value, 'inline-flex items-center']}>
            <div class={iconClass.value} style={{ width: '100%', height: '100%', color: props.iconColor }} />
          </span>
        )}
        {!isIconOnly.value && (
          <span class="inline-block">{slots.default?.()}</span>
        )}
      </button>
    )
  }
})

export default Button
