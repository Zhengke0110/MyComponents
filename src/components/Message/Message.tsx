import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'Message',
  props: {
    id: { type: String, required: true },
    type: { type: String as PropType<'info' | 'success' | 'warning' | 'error'>, default: 'info' },
    content: { type: String, required: true },
    duration: { type: Number, default: 3000 },
    closable: { type: Boolean, default: false },
    onClose: { type: Function, required: true }
  },
  setup(props) {
    const visible = ref(true)
    const timer = ref<NodeJS.Timeout>()

    const iconMap = {
      info: 'i-heroicons-information-circle-20-solid',
      success: 'i-heroicons-check-circle-20-solid',
      warning: 'i-heroicons-exclamation-triangle-20-solid',
      error: 'i-heroicons-x-circle-20-solid'
    }

    const colorMap = {
      info: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
      success: 'bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400',
      warning: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400',
      error: 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
    }

    const startTimer = () => {
      if (props.duration > 0) {
        timer.value = setTimeout(() => {
          close()
        }, props.duration)
      }
    }

    const close = () => {
      visible.value = false
      setTimeout(() => {
        props.onClose()
      }, 300) // 等待动画完成
    }

    onMounted(() => {
      startTimer()
    })

    onBeforeUnmount(() => {
      if (timer.value) {
        clearTimeout(timer.value)
      }
    })

    return () => (
      <div
        class={`
          fixed left-1/2 -translate-x-1/2 z-50
          transform transition-all duration-300 ease-in-out
          ${visible.value ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
        `}
      >
        <div
          class={`
            flex items-center px-4 py-2 rounded-lg shadow-md
            ${colorMap[props.type]}
          `}
        >
          <i class={`${iconMap[props.type]} w-5 h-5 mr-2`} />
          <span class="text-sm font-medium">{props.content}</span>
          {props.closable && (
            <button
              onClick={close}
              class={`
                ml-3 p-1 rounded-full opacity-60 hover:opacity-100
                transition-opacity duration-200
              `}
            >
              <i class="i-heroicons-x-mark-20-solid w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    )
  }
})
