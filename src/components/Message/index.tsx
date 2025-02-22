import { h, render, ref, computed, onMounted, type PropType, CSSProperties, Teleport, TransitionGroup, defineComponent } from 'vue'

interface MessageProps {
  id: string
  type: 'success' | 'warning' | 'error' | 'info'  // 添加 info 类型
  content: string
  duration?: number
  position?: 'top' | 'bottom'
  closable?: boolean
  onClose?: () => void
  destroy: (el: Element) => void
}

const styles: Record<'success' | 'warning' | 'error' | 'info', {  // 添加 info 样式
  iconWrapperClass: string,
  textClass: string,
  closeButtonClass: string,
  containerClass: string,
}> = {
  success: {
    iconWrapperClass: 'text-green-700',
    textClass: 'text-green-700',
    closeButtonClass: 'bg-green-600/10 text-green-700 hover:bg-green-600/20',
    containerClass: 'bg-green-100 border border-green-200/50 shadow-lg shadow-green-500/10',
  },
  warning: {
    iconWrapperClass: 'text-amber-700',
    textClass: 'text-amber-700',
    closeButtonClass: 'bg-amber-600/10 text-amber-700 hover:bg-amber-600/20',
    containerClass: 'bg-amber-100 border border-amber-200/50 shadow-lg shadow-amber-500/10',
  },
  error: {
    iconWrapperClass: 'text-red-700',
    textClass: 'text-red-700',
    closeButtonClass: 'bg-red-600/10 text-red-700 hover:bg-red-600/20',
    containerClass: 'bg-red-100 border border-red-200/50 shadow-lg shadow-red-500/10',
  },
  info: {
    iconWrapperClass: 'text-blue-700',
    textClass: 'text-blue-700',
    closeButtonClass: 'bg-blue-600/10 text-blue-700 hover:bg-blue-600/20',
    containerClass: 'bg-blue-100 border border-blue-200/50 shadow-lg shadow-blue-500/10',
  },
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
      type: String as PropType<'success' | 'warning' | 'error' | 'info'>,  // 添加 info 类型
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
    }
  },
  setup(props) {
    const isVisible = ref(true)
    const timer = ref<NodeJS.Timeout>()

    const positionClass = computed(() => ({
      'top-4': props.position === 'top',
      'bottom-4': props.position === 'bottom',
    }))

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
              styles[props.type].containerClass,
              { 'cursor-pointer': props.closable },
            ]}
            onClick={() => props.closable && handleClose()}
          >
            <div class={['mr-3 flex-shrink-0', styles[props.type].iconWrapperClass]}>
              {renderIcon()}
            </div>

            <span class={['text-sm font-medium', styles[props.type].textClass]}>
              {props.content}
            </span>

            {props.closable && (
              <button
                class={['ml-4 p-1 rounded-full transition-all duration-200', styles[props.type].closeButtonClass]}
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
  type: 'success' | 'warning' | 'error' | 'info',  // 添加 info 类型
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
  info(content: string, options?: Partial<MessageProps>) {  // 添加 info 方法
    return createMessage('info', content, options)
  },
}

export default Message
