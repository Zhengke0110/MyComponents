import { defineComponent, PropType, computed } from 'vue'

export type StepStatus = 'wait' | 'process' | 'finish' | 'error'
export type StepDirection = 'horizontal' | 'vertical'
export type StepSize = 'default' | 'small'

export interface StepItem {
  title: string
  description?: string
  status?: StepStatus
  icon?: string
  disabled?: boolean
  subTitle?: string
}

export default defineComponent({
  name: 'Steps',
  props: {
    current: {
      type: Number,
      default: 0
    },
    direction: {
      type: String as PropType<StepDirection>,
      default: 'horizontal'
    },
    items: {
      type: Array as PropType<StepItem[]>,
      default: () => []
    },
    initial: {
      type: Number,
      default: 0
    },
    labelPlacement: {
      type: String,
      default: 'horizontal'
    },
    size: {
      type: String as PropType<StepSize>,
      default: 'default'
    },
    status: {
      type: String as PropType<StepStatus>,
      default: 'process'
    },
    progressDot: {
      type: Boolean,
      default: false
    },
    responsive: {
      type: Boolean,
      default: true
    }
  },
  emits: ['change', 'update:current'],
  setup(props, { emit }) {
    const classes = computed(() => ({
      'w-full relative p-4 flex items-center': true,
      'flex-col gap-8': props.direction === 'vertical',
      'flex-row gap-4': props.direction === 'horizontal',
      'dark:bg-gray-800/50': true
    }))

    const getStepClasses = (item: StepItem, index: number, isActive: boolean, status: StepStatus) => ({
      'flex items-start flex-1 relative group cursor-pointer': true,
      'opacity-40 cursor-not-allowed pointer-events-none filter grayscale': item.disabled,
      'after:content-[""] after:absolute after:bg-gradient-to-r after:from-gray-200 after:to-gray-300 after:dark:from-gray-700 after:dark:to-gray-600 after:transition-all after:duration-500': true,
      // 水平连接线
      'after:h-0.5 after:top-4 after:left-12 after:right-4 after:-z-10': props.direction === 'horizontal',
      // 垂直连接线
      'after:w-0.5 after:left-4 after:top-8 after:h-full': props.direction === 'vertical',
      // 最后一项不需要连接线
      'after:hidden': index === props.items.length - 1,
      // 激活状态的连接线
      'after:bg-gradient-to-r after:from-blue-400 after:to-blue-500 dark:after:from-blue-500 dark:after:to-blue-400': isActive,
    })

    const getIconClasses = (item: StepItem, isActive: boolean, status: StepStatus) => ({
      'flex items-center justify-center shrink-0 relative z-10 transition-all duration-300': true,
      // 基础样式
      'w-8 h-8 rounded-full border-2 bg-white/90 backdrop-blur-sm': !props.progressDot,
      'w-3 h-3 rounded-full': props.progressDot,
      // 尺寸
      'w-6 h-6': props.size === 'small' && !props.progressDot,
      // 状态样式
      'border-gray-300 text-gray-400 dark:border-gray-600 dark:text-gray-500': status === 'wait',
      'border-blue-500 text-blue-500 shadow-lg shadow-blue-200 dark:border-blue-400 dark:text-blue-400 dark:shadow-blue-900/20': status === 'process',
      'border-green-500 text-green-500 bg-green-50 shadow-lg shadow-green-200 dark:border-green-400 dark:text-green-400 dark:bg-green-900/20 dark:shadow-green-900/20': status === 'finish',
      'border-red-500 text-red-500 bg-red-50 shadow-lg shadow-red-200 dark:border-red-400 dark:text-red-400 dark:bg-red-900/20 dark:shadow-red-900/20': status === 'error',
      // 进度点样式
      'border-0 bg-gray-300 dark:bg-gray-600': props.progressDot,
      'bg-gradient-to-r from-blue-400 to-blue-500': props.progressDot && (isActive || status === 'finish'),
      // 激活状态
      'scale-110 ring-4 ring-blue-100 dark:ring-blue-500/20': isActive && !props.progressDot,
      // 悬停效果
      'group-hover:scale-105 group-hover:ring-2 ring-blue-100 dark:ring-blue-500/20': !item.disabled,
    })

    const handleStepClick = (index: number) => {
      if (props.items[index]?.disabled) return
      emit('change', index)
      emit('update:current', index)
    }

    return () => (
      <div class={classes.value}>
        {props.items.map((item, index) => {
          const isActive = index <= props.current;
          const stepStatus = item.status ||
            (index < props.current ? 'finish' :
              index === props.current ? 'process' : 'wait');

          return (
            <div
              key={index}
              class={getStepClasses(item, index, isActive, stepStatus)}
              onClick={() => handleStepClick(index)}
            >
              <div class={getIconClasses(item, isActive, stepStatus)}>
                {!props.progressDot && (item.icon || (
                  <span class={`
                    font-medium
                    ${props.size === 'small' ? 'text-xs' : 'text-sm'}
                  `}>
                    {index + 1}
                  </span>
                ))}
              </div>
              <div class="ml-4 flex-1 min-w-0">
                <div class={`
                  font-medium mb-1 transition-colors duration-300
                  ${props.size === 'small' ? 'text-sm' : 'text-base'}
                  ${isActive ? 'text-blue-500 dark:text-blue-400' : 'dark:text-white'}
                `}>
                  {item.title}
                  {item.subTitle && (
                    <span class="text-sm text-gray-500 ml-2 dark:text-gray-400">
                      {item.subTitle}
                    </span>
                  )}
                </div>
                {item.description && (
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
})
