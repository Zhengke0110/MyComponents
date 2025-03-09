import { computed, defineComponent, type PropType } from 'vue'
import { ColorType, THEME_COLOR_MAP, ThemeColorType, ButtonSize, ButtonVariant, variantColorMap } from './config'
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
