import { computed, defineComponent, type PropType } from 'vue'
import type { ThemeColor } from '../index'

export type TagSize = 'sm' | 'md' | 'lg'

// 定义 Tailwind 颜色映射到实际颜色值
const COLOR_MAP = {
  slate: { bg: '#f1f5f9', text: '#334155', hover: '#e2e8f0', ring: '#64748b' },
  gray: { bg: '#f3f4f6', text: '#374151', hover: '#e5e7eb', ring: '#6b7280' },
  zinc: { bg: '#f4f4f5', text: '#3f3f46', hover: '#e4e4e7', ring: '#71717a' },
  neutral: { bg: '#f5f5f5', text: '#404040', hover: '#e5e5e5', ring: '#737373' },
  stone: { bg: '#f5f5f4', text: '#44403c', hover: '#e7e5e4', ring: '#78716c' },
  red: { bg: '#fee2e2', text: '#b91c1c', hover: '#fecaca', ring: '#ef4444' },
  orange: { bg: '#ffedd5', text: '#c2410c', hover: '#fed7aa', ring: '#f97316' },
  amber: { bg: '#fef3c7', text: '#b45309', hover: '#fde68a', ring: '#f59e0b' },
  yellow: { bg: '#fef9c3', text: '#a16207', hover: '#fef08a', ring: '#eab308' },
  lime: { bg: '#ecfccb', text: '#4d7c0f', hover: '#d9f99d', ring: '#84cc16' },
  green: { bg: '#dcfce7', text: '#15803d', hover: '#bbf7d0', ring: '#22c55e' },
  emerald: { bg: '#d1fae5', text: '#047857', hover: '#a7f3d0', ring: '#10b981' },
  teal: { bg: '#ccfbf1', text: '#0f766e', hover: '#99f6e4', ring: '#14b8a6' },
  cyan: { bg: '#cffafe', text: '#0e7490', hover: '#a5f3fc', ring: '#06b6d4' },
  sky: { bg: '#e0f2fe', text: '#0369a1', hover: '#bae6fd', ring: '#0ea5e9' },
  blue: { bg: '#dbeafe', text: '#1d4ed8', hover: '#bfdbfe', ring: '#3b82f6' },
  indigo: { bg: '#e0e7ff', text: '#4338ca', hover: '#c7d2fe', ring: '#6366f1' },
  violet: { bg: '#ede9fe', text: '#6d28d9', hover: '#ddd6fe', ring: '#8b5cf6' },
  purple: { bg: '#f3e8ff', text: '#7e22ce', hover: '#e9d5ff', ring: '#a855f7' },
  fuchsia: { bg: '#fae8ff', text: '#a21caf', hover: '#f5d0fe', ring: '#d946ef' },
  pink: { bg: '#fce7f3', text: '#be185d', hover: '#fbcfe8', ring: '#ec4899' },
  rose: { bg: '#ffe4e6', text: '#be123c', hover: '#fecdd3', ring: '#f43f5e' }
}

// 定义 Tailwind 颜色列表
const TAILWIND_COLORS = Object.keys(COLOR_MAP)

export interface TagProps {
  text: string
  index: number
  color?: ThemeColor
  size?: TagSize
  randomColor?: boolean
}

export const Tag = defineComponent({
  name: 'Tag',
  props: {
    text: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    color: {
      type: String as PropType<ThemeColor>,
      default: 'blue'
    },
    size: {
      type: String as PropType<TagSize>,
      default: 'md'
    },
    randomColor: {
      type: Boolean,
      default: false
    }
  },
  emits: ['remove'],
  setup(props: TagProps, { emit }) {
    // 生成基于标签文本的稳定随机颜色
    const getStableRandomColor = (text: string): string => {
      const hashCode = Array.from(text).reduce(
        (hash, char) => ((hash << 5) - hash) + char.charCodeAt(0), 0
      )
      const colorIndex = Math.abs(hashCode) % TAILWIND_COLORS.length
      return TAILWIND_COLORS[colorIndex]
    }

    const tagColor = computed(() => {
      if (props.randomColor) {
        return getStableRandomColor(props.text)
      }
      return props.color
    })
    
    // 优化尺寸类，调整padding和字体大小
    const sizeClasses = computed(() => ({
      sm: 'text-xs py-0.5 px-2',
      md: 'text-sm py-0.5 px-2.5',
      lg: 'text-base py-1 px-3'
    }[props.size || 'md']))

    const handleRemove = () => {
      emit('remove', props.index)
    }
    
    // 使用内联样式代替动态类名
    const tagStyle = computed(() => {
      const color = tagColor.value
      const colorValues = COLOR_MAP[color as keyof typeof COLOR_MAP] || COLOR_MAP.blue
      
      return {
        backgroundColor: colorValues.bg,
        color: colorValues.text,
        '--hover-bg': colorValues.hover,
        '--ring-color': colorValues.ring,
        // 添加边框和优化阴影
        border: `1px solid ${colorValues.hover}`,
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px'
      }
    })

    const buttonStyle = computed(() => {
      return {
        '--button-text': (COLOR_MAP[tagColor.value as keyof typeof COLOR_MAP] || COLOR_MAP.blue).text,
      }
    })

    return () => (
      <div
        class={[
          'inline-flex items-center rounded-md gap-1', // 修改为圆角较小的风格
          sizeClasses.value,
          'transition-all duration-200 ease-in-out',
        ]}
        style={tagStyle.value}
      >
        <span class="truncate max-w-[150px] font-medium">{props.text}</span>
        <button
          type="button"
          onClick={handleRemove}
          class="ml-1 rounded-md focus:outline-none transition-colors duration-200 p-0.5 hover-effect"
          style={buttonStyle.value}
        >
          <svg
            class="w-3 h-3" // 减小删除图标的尺寸
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    )
  }
})

export default Tag
