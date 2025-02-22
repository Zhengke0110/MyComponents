import { computed, defineComponent, type PropType } from 'vue'

export type ButtonType = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'ghost'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
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
    type: {
      type: String as PropType<ButtonType>,
      default: 'primary'
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'md'
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

    const variantStyles = computed(() => ({
      'inline-flex items-center justify-center rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed gap-2': true,
      'hover:scale-105 active:scale-100': props.isActiveAnim,
      'opacity-75 cursor-wait': props.loading,
      'p-2': isIconOnly.value,
      'w-full': props.block,
      // 按钮类型样式
      'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500': props.type === 'primary',
      'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-100': props.type === 'secondary',
      'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500': props.type === 'success',
      'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500': props.type === 'warning',
      'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500': props.type === 'error',
      'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500': props.type === 'info',
      'bg-transparent hover:bg-gray-100 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800': props.type === 'ghost'
    }))

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
        class={[variantStyles.value, sizeStyles.value]}
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
