import { defineComponent, ref, watch, onMounted, onUnmounted, nextTick, type PropType } from 'vue'
import { useThrottleFn } from '@vueuse/core'

export interface InfiniteProps {
  modelValue?: boolean
  isFinished?: boolean
  threshold?: number
  distance?: number
  loadingText?: string
  finishedText?: string
  errorText?: string
  immediateCheck?: boolean
}

export const Infinite = defineComponent({
  name: 'Infinite',
  props: {
    modelValue: {
      type: Boolean as PropType<InfiniteProps['modelValue']>,
      default: false
    },
    isFinished: {
      type: Boolean as PropType<InfiniteProps['isFinished']>,
      default: false
    },
    threshold: {
      type: Number as PropType<InfiniteProps['threshold']>,
      default: 100
    },
    distance: {
      type: Number as PropType<InfiniteProps['distance']>,
      default: 0
    },
    loadingText: {
      type: String as PropType<InfiniteProps['loadingText']>,
      default: '加载中...'
    },
    finishedText: {
      type: String as PropType<InfiniteProps['finishedText']>,
      default: '没有更多了'
    },
    errorText: {
      type: String as PropType<InfiniteProps['errorText']>,
      default: '加载失败'
    },
    immediateCheck: {
      type: Boolean as PropType<InfiniteProps['immediateCheck']>,
      default: true
    }
  },
  emits: ['update:modelValue', 'on-load'],
  setup(props, { emit, slots, expose }) {
    const container = ref<HTMLElement | null>(null)
    const loading = ref(props.modelValue)
    const error = ref(false)

    const checkPosition = () => {
      if (!container.value || loading.value || props.isFinished) return

      const { clientHeight } = document.documentElement
      const containerBottom = container.value.getBoundingClientRect().bottom

      if (containerBottom <= clientHeight + (props.threshold ?? 100)) {
        loading.value = true
        emit('update:modelValue', true)
        emit('on-load')
      }
    }

    const throttledCheck = useThrottleFn(checkPosition, 200)

    watch(
      () => props.modelValue,
      (newVal) => {
        loading.value = newVal
      }
    )

    watch(
      () => props.isFinished,
      (newVal) => {
        if (newVal) {
          loading.value = false
          emit('update:modelValue', false)
        }
      }
    )

    onMounted(() => {
      document.addEventListener('scroll', throttledCheck)
      if (props.immediateCheck) {
        nextTick(() => checkPosition())
      }
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', throttledCheck)
    })

    const reset = () => {
      error.value = false
      loading.value = false
      emit('update:modelValue', false)
    }

    expose({ reset })

    return () => (
      <div class="infinite-loading w-full h-full" ref={container}>
        <div class="infinite-content min-h-[100px]">
          {slots.default?.()}
        </div>

        {loading.value && (
          <div class="infinite-loading-status">
            {slots.loading?.() || (
              <p class="text-gray-500 text-center py-4">{props.loadingText}</p>
            )}
          </div>
        )}

        {props.isFinished && (
          <div class="infinite-finished-status">
            {slots.finished?.() || (
              <p class="text-gray-400 text-center py-4">{props.finishedText}</p>
            )}
          </div>
        )}

        {error.value && (
          <div class="infinite-error-status">
            {slots.error?.() || (
              <p class="text-red-500 text-center py-4">{props.errorText}</p>
            )}
          </div>
        )}
      </div>
    )
  }
})

export default Infinite
