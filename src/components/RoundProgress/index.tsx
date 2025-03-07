import { computed, defineComponent, onMounted, ref, type PropType } from 'vue'

export type RoundProgressProps = {
  progress: number
  size: number
  strokeWidth: number
  startColor: string
  endColor: string
  label: string
  showDecoration: boolean
  duration: number
  textClass: string
  bgClass: string
  labelClass: string
  decorationClass: string
  decorationDotsClass: string
}

export const RoundProgress = defineComponent({
  name: 'RoundProgress',
  props: {
    progress: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      default: 32
    },
    strokeWidth: {
      type: Number,
      default: 3
    },
    startColor: {
      type: String,
      default: '#4f46e5'
    },
    endColor: {
      type: String,
      default: '#7c3aed'
    },
    label: {
      type: String,
      default: ''
    },
    showDecoration: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 1000
    },
    textClass: {
      type: String,
      default: 'text-gray-700'
    },
    bgClass: {
      type: String,
      default: 'stroke-gray-200'
    },
    labelClass: {
      type: String,
      default: 'text-gray-600'
    },
    decorationClass: {
      type: String,
      default: ''
    },
    decorationDotsClass: {
      type: String,
      default: ''
    }
  },
  setup(props: RoundProgressProps, { slots }) {
    // Generate unique ID for SVG gradient
    const uniqueId = Math.random().toString(36).substr(2, 9)
    
    // 优化计算属性，为小尺寸提供更好的显示效果
    const viewBoxSize = computed(() => 100)
    const center = computed(() => viewBoxSize.value / 2)
    
    // 优化半径计算，对小尺寸更友好
    const radius = computed(() => {
      // 针对不同尺寸调整圆环和边距的比例
      const strokeAdjustment = props.size < 40 ? props.strokeWidth * 1.5 : props.strokeWidth * 2
      return viewBoxSize.value / 2 - strokeAdjustment
    })
    
    const circumference = computed(() => 2 * Math.PI * radius.value)
    
    // Animation state
    const currentProgress = ref(0)
    
    const strokeDashoffset = computed(() => {
      return circumference.value - (currentProgress.value / 100) * circumference.value
    })
    
    // 调整小尺寸时的文字大小
    const textSizeClass = computed(() => {
      if (props.size < 30) return 'text-[8px]'
      if (props.size < 40) return 'text-[10px]'
      if (props.size < 60) return 'text-xs'
      if (props.size < 80) return 'text-sm'
      return 'text-base'
    })
    
    // Animation
    onMounted(() => {
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4)
      let startTime: number | null = null
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / props.duration, 1)
        
        currentProgress.value = Math.round(easeOutQuart(progress) * props.progress)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    })
    
    return () => (
      <div
        class="relative inline-flex items-center justify-center"
        style={{ width: `${props.size}px`, height: `${props.size}px` }}
      >
        <svg
          class="w-full h-full -rotate-90 transform"
          viewBox={`0 0 ${viewBoxSize.value} ${viewBoxSize.value}`}
          style={{
            filter: props.showDecoration
              ? 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))'
              : 'none'
          }}
        >
          {/* Background circle */}
          <circle
            class={['transition-all duration-300', props.bgClass]}
            stroke-width={props.strokeWidth}
            fill="transparent"
            r={radius.value}
            cx={center.value}
            cy={center.value}
          />
          
          {/* Progress circle */}
          <circle
            class="transition-all duration-500 ease-out"
            stroke-width={props.strokeWidth}
            fill="transparent"
            r={radius.value}
            cx={center.value}
            cy={center.value}
            style={{
              strokeDasharray: circumference.value,
              strokeDashoffset: strokeDashoffset.value,
              stroke: `url(#gradient-${uniqueId})`,
              filter: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))'
            }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id={`gradient-${uniqueId}`} x1="0%" y1="0%" x2="100%">
              <stop offset="0%" style={{ stopColor: props.startColor, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: props.endColor, stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div 
          class={{
            'absolute inset-0 flex items-center justify-center': true,
            'group-hover:scale-110 transition-transform duration-300': props.showDecoration
          }}
        >
          {slots.center ? 
            slots.center({ progress: currentProgress.value }) : 
            <span class={[textSizeClass.value, "font-medium", props.textClass]}>
              {currentProgress.value}%
            </span>
          }
        </div>
      </div>
    )
  }
})

export default RoundProgress
