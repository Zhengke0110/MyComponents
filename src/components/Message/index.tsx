import { h, render, ref, computed, onMounted, type PropType, CSSProperties, Teleport, TransitionGroup, defineComponent } from 'vue'

// 所有可用的颜色类型
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


interface MessageProps {
  id: string
  type: 'success' | 'warning' | 'error' | 'info'
  content: string
  duration?: number
  position?: 'top' | 'bottom'
  closable?: boolean
  onClose?: () => void
  destroy: (el: Element) => void
  color?: ColorType // 添加自定义颜色属性
}

// 根据颜色生成样式的函数
const getStylesForColor = (color: ColorType) => {
  return {
    iconWrapperClass: `text-${color}-700`,
    textClass: `text-${color}-700`,
    closeButtonClass: `bg-${color}-600/10 text-${color}-700 hover:bg-${color}-600/20`,
    containerClass: `bg-${color}-100 border border-${color}-200/50 shadow-lg shadow-${color}-500/10`,
  }
}

// 定义不同类型的颜色映射
const typeToColorMap = {
  success: THEME_COLOR_MAP.success,
  warning: THEME_COLOR_MAP.warning,
  error: THEME_COLOR_MAP.danger,
  info: THEME_COLOR_MAP.info,
}

const styles: Record<'success' | 'warning' | 'error' | 'info', {
  iconWrapperClass: string,
  textClass: string,
  closeButtonClass: string,
  containerClass: string,
}> = {
  success: getStylesForColor(typeToColorMap.success),
  warning: getStylesForColor(typeToColorMap.warning),
  error: getStylesForColor(typeToColorMap.error),
  info: getStylesForColor(typeToColorMap.info),
}

const messageStyles = {
  '.message-down-enter-active, .message-down-leave-active, .message-up-enter-active, .message-up-leave-active': {
    transition: 'all 0.4s cubic-bezier(0.33, 1, 0.68, 1)',
  },
  '.message-down-enter-from, .message-down-leave-to': {
    opacity: 0,
    transform: 'translate(-50%, -30px)',
    filter: 'blur(4px)',
  },
  '.message-up-enter-from, .message-up-leave-to': {
    opacity: 0,
    transform: 'translate(-50%, 30px)',
    filter: 'blur(4px)',
  },
} as Record<string, CSSProperties>

let seed = 1

const MessageComponent = defineComponent({
  name: 'Message',
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String as PropType<'success' | 'warning' | 'error' | 'info'>,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    position: {
      type: String,
      default: 'top'
    },
    closable: {
      type: Boolean,
      default: false
    },
    onClose: {
      type: Function,
    },
    destroy: {
      type: Function,
      required: true
    },
    color: {
      type: String as PropType<ColorType>,
      default: null
    }
  },
  setup(props) {
    const isVisible = ref(true)
    const timer = ref<NodeJS.Timeout>()

    const positionClass = computed(() => ({
      'top-4': props.position === 'top',
      'bottom-4': props.position === 'bottom',
    }))

    // 计算使用的颜色和样式
    const currentColor = computed(() => props.color || typeToColorMap[props.type])
    const currentStyle = computed(() => props.color ? getStylesForColor(props.color) : styles[props.type])

    const handleClose = () => {
      isVisible.value = false
      if (timer.value) {
        clearTimeout(timer.value)
      }
      props.onClose?.()
    }

    onMounted(() => {
      if (props.duration !== 0) {
        timer.value = setTimeout(() => {
          handleClose()
        }, props.duration)
      }
    })

    const renderIcon = () => {
      // 使用相应的图标颜色类
      const iconColorClass = currentStyle.value.iconWrapperClass

      if (props.type === 'success') {
        return (
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 4 12 14.01l-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        )
      }
      if (props.type === 'warning') {
        return (
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        )
      }
      if (props.type === 'info') {
        return (
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
            <path d="M12 16v-4M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        )
      }
      return (
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
          <path d="m15 9-6 6M9 9l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      )
    }

    return () => (
      <Teleport to="body">
        <TransitionGroup
          name={props.position === 'top' ? 'message-down' : 'message-up'}
          onAfterLeave={(el) => props.destroy(el)}
        >
          <div
            v-show={isVisible.value}
            key={props.id}
            class={[
              'fixed left-[50%] z-50 flex items-center px-5 py-3 rounded-lg transform -translate-x-1/2 transition-all duration-300',
              positionClass.value,
              currentStyle.value.containerClass,
              { 'cursor-pointer': props.closable },
            ]}
            onClick={() => props.closable && handleClose()}
          >
            <div class={['mr-3 flex-shrink-0', currentStyle.value.iconWrapperClass]}>
              {renderIcon()}
            </div>

            <span class={['text-sm font-medium', currentStyle.value.textClass]}>
              {props.content}
            </span>

            {props.closable && (
              <button
                class={['ml-4 p-1 rounded-full transition-all duration-200', currentStyle.value.closeButtonClass]}
                onClick={(e: Event) => {
                  e.stopPropagation()
                  handleClose()
                }}
              >
                <i class="i-tabler-x h-4 w-4" />
              </button>
            )}
          </div>
        </TransitionGroup>
      </Teleport>
    )
  }
})

const createMessage = (
  type: 'success' | 'warning' | 'error' | 'info',
  content: string,
  options: Partial<MessageProps> = {}
) => {
  const id = `message_${seed++}`
  const container = document.createElement('div')

  const destroy = () => {
    render(null, container)
  }

  const vnode = h(MessageComponent, {
    id,
    type,
    content,
    destroy,
    ...options,
  })

  render(vnode, container)
}

// 创建自定义主题颜色消息的方法
const createThemedMessage = (
  color: ColorType,
  content: string,
  options: Partial<MessageProps> = {}
) => {
  const id = `message_${seed++}`
  const container = document.createElement('div')

  const destroy = () => {
    render(null, container)
  }

  // 默认使用 info 类型的图标
  const vnode = h(MessageComponent, {
    id,
    type: 'info',
    content,
    destroy,
    color,
    ...options,
  })

  render(vnode, container)
}

export const Message = {
  success(content: string, options?: Partial<MessageProps>) {
    return createMessage('success', content, options)
  },
  warning(content: string, options?: Partial<MessageProps>) {
    return createMessage('warning', content, options)
  },
  error(content: string, options?: Partial<MessageProps>) {
    return createMessage('error', content, options)
  },
  info(content: string, options?: Partial<MessageProps>) {
    return createMessage('info', content, options)
  },
  // 新增 theme 方法，支持自定义颜色
  theme(content: string, color: ColorType, options?: Partial<MessageProps>) {
    return createThemedMessage(color, content, options)
  }
}

export default Message
