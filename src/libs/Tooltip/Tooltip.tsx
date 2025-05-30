import { computed, defineComponent, nextTick, onBeforeUnmount, onMounted, ref, type PropType, Teleport, Transition } from 'vue'

export type TooltipPosition = 'top' | 'bottom'

export const Tooltip = defineComponent({
  name: 'Tooltip',
  props: {
    content: {
      type: String,
      default: ''
    },
    position: {
      type: String as PropType<TooltipPosition>,
      default: 'top'
    },
    offset: {
      type: Number,
      default: 10
    }
  },
  setup(props, { slots }) {
    const tooltipContainer = ref<HTMLElement | null>(null)
    const tooltip = ref<HTMLElement | null>(null)
    const isVisible = ref(false)
    const positionStyle = ref<{ top?: string; left?: string; position?: string; zIndex?: string }>({})
    const currentPosition = ref<TooltipPosition>(props.position)

    // 使用固定类名而非动态类名，确保 Tailwind 可以识别
    const tooltipClasses = computed(() => [
      'absolute px-5 py-3 text-center text-gray-600 bg-white rounded-lg shadow-lg dark:text-white dark:bg-gray-800 dark:shadow-none shadow-gray-200',
      'transition-all duration-200 ease-out z-50',
      'min-w-[12rem] max-w-xs',
      `tooltip-${currentPosition.value}`
    ])

    // 箭头样式单独处理，避免动态类问题
    const arrowClasses = computed(() => [
      `tooltip-arrow-${currentPosition.value}`
    ])

    // 使用计算属性处理定位样式
    const tooltipStyles = computed(() => ({
      position: 'fixed' as const,
      top: positionStyle.value.top,
      left: positionStyle.value.left,
      zIndex: 9999,
    }))

    const calculatePosition = () => {
      if (!tooltipContainer.value || !tooltip.value) return

      // 重置当前位置为初始设置的位置
      currentPosition.value = props.position

      // 获取触发元素的位置信息
      const triggerRect = tooltipContainer.value.getBoundingClientRect()
      const tooltipRect = tooltip.value.getBoundingClientRect()

      // 视口尺寸
      const viewportWidth = document.documentElement.clientWidth
      const viewportHeight = document.documentElement.clientHeight

      // 安全边距，避免贴边
      const safeMargin = 8

      let top = 0
      let left = 0

      // 基础位置计算 - 水平居中对齐
      left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2

      // 根据指定位置确定垂直方向的位置
      if (currentPosition.value === 'top') {
        // 触发元素上方
        top = triggerRect.top - tooltipRect.height - props.offset
      } else {
        // 触发元素下方
        top = triggerRect.bottom + props.offset
      }

      // 智能方向切换 - 如果指定位置放不下，则切换到反方向
      if (top < safeMargin && currentPosition.value === 'top') {
        // 上方空间不足，切换到下方
        currentPosition.value = 'bottom'
        top = triggerRect.bottom + props.offset
      } else if (top + tooltipRect.height > viewportHeight - safeMargin && currentPosition.value === 'bottom') {
        // 下方空间不足，切换到上方
        currentPosition.value = 'top'
        top = triggerRect.top - tooltipRect.height - props.offset
      }

      // 横向边界调整 - 确保不超出视口
      if (left < safeMargin) {
        // 左边界调整，确保至少留有安全边距
        left = safeMargin
      } else if (left + tooltipRect.width > viewportWidth - safeMargin) {
        // 右边界调整，确保不超出右边界
        left = viewportWidth - tooltipRect.width - safeMargin
      }

      // 极端情况处理 - 如果上下都放不下
      if (top < safeMargin && top + tooltipRect.height > viewportHeight - safeMargin) {
        // 如果显示区域太小，优先确保内容最大程度可见
        if (currentPosition.value === 'top') {
          top = safeMargin
        } else {
          top = viewportHeight - tooltipRect.height - safeMargin
        }
      } else {
        // 正常边界调整
        if (top < safeMargin) {
          top = safeMargin
        }
        if (top + tooltipRect.height > viewportHeight - safeMargin) {
          top = viewportHeight - tooltipRect.height - safeMargin
        }
      }

      // 设置最终位置，使用 fixed 定位以处理滚动
      positionStyle.value = {
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
        zIndex: '9999',
      }
    }

    // 显示提示
    const showTooltip = () => {
      isVisible.value = true
      nextTick(() => {
        calculatePosition()
        // 首次计算后，再执行一次计算以确保位置准确
        nextTick(() => {
          calculatePosition()
        })
      })
    }

    // 隐藏提示
    const hideTooltip = () => {
      isVisible.value = false
    }

    // 监听各种可能导致位置变化的事件
    onMounted(() => {
      window.addEventListener('resize', calculatePosition)
      window.addEventListener('scroll', calculatePosition, { passive: true })
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', calculatePosition)
      window.removeEventListener('scroll', calculatePosition)
    })

    return () => (
      <div class="relative inline-block" ref={tooltipContainer}>
        <div
          onMouseenter={showTooltip}
          onMouseleave={hideTooltip}
          class="w-full"
        >
          {slots.trigger ? (
            slots.trigger()
          ) : (
            <button
              type="button"
              class="text-gray-600 transition-colors duration-200 focus:outline-none dark:text-gray-300 dark:hover:text-blue-400 hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </button>
          )}
        </div>

        <Teleport to="body">
          <Transition
            name="tooltip-fade"
            enterActiveClass="transition ease-out duration-200"
            enterFromClass="opacity-0 scale-95"
            enterToClass="opacity-100 scale-100"
            leaveActiveClass="transition ease-in duration-150"
            leaveFromClass="opacity-100 scale-100"
            leaveToClass="opacity-0 scale-95"
          >
            {isVisible.value && (
              <div
                ref={tooltip}
                class={tooltipClasses.value}
                style={tooltipStyles.value}
              >
                {slots.content ? (
                  slots.content()
                ) : (
                  <p class="text-sm">{props.content}</p>
                )}
                {/* 添加箭头元素 */}
                <span class={arrowClasses.value}></span>
              </div>
            )}
          </Transition>
        </Teleport>

        <style scoped>{`
          /* 箭头样式 - 使用固定类名 */
          .tooltip-top::after,
          .tooltip-arrow-top {
            content: "";
            position: absolute;
            bottom: -8px;
            left: 50%;
            margin-left: -8px;
            border-width: 8px 8px 0;
            border-style: solid;
            border-color: #ffffff transparent transparent transparent;
          }
          
          .tooltip-bottom::after,
          .tooltip-arrow-bottom {
            content: "";
            position: absolute;
            top: -8px;
            left: 50%;
            margin-left: -8px;
            border-width: 0 8px 8px;
            border-style: solid;
            border-color: transparent transparent #ffffff transparent;
          }
          
          /* 暗黑模式箭头颜色 - 使用全局选择器适配 Tailwind dark 模式 */
          :global(.dark) .tooltip-top::after,
          :global(.dark) .tooltip-arrow-top {
            border-color: #1f2937 transparent transparent transparent;
          }
          
          :global(.dark) .tooltip-bottom::after,
          :global(.dark) .tooltip-arrow-bottom {
            border-color: transparent transparent #1f2937 transparent;
          }
        `}</style>
      </div>
    )
  }
})

export default Tooltip
