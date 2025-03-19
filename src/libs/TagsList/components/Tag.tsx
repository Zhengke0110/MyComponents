import { computed, defineComponent, type PropType } from 'vue'
import { ColorType, THEME_COLOR_MAP, COLOR_MAP } from '../config'


export type TagSize = 'sm' | 'md' | 'lg'


// 颜色映射表的键数组
const TAILWIND_COLORS = Object.keys(COLOR_MAP)

// 支持主题颜色
const getThemeColor = (color: string): string => {
  if (color in THEME_COLOR_MAP) {
    return THEME_COLOR_MAP[color as keyof typeof THEME_COLOR_MAP];
  }
  return color;
}

export interface TagProps {
  text: string
  index: number
  color?: ColorType
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
      type: String as PropType<ColorType>,
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
      return getThemeColor(props.color || 'blue')
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

    // 使用CSS变量实现动态颜色切换
    const colorVars = computed(() => {
      const colorKey = tagColor.value as keyof typeof COLOR_MAP
      const colorObj = COLOR_MAP[colorKey] || COLOR_MAP.blue

      return {
        '--tag-bg-light': colorObj.light.bg,
        '--tag-text-light': colorObj.light.text,
        '--tag-border-light': colorObj.light.border,
        '--tag-bg-dark': colorObj.dark.bg,
        '--tag-text-dark': colorObj.dark.text,
        '--tag-border-dark': colorObj.dark.border,
      }
    })

    return () => (
      <div
        class={[
          'inline-flex items-center rounded-md gap-1',
          sizeClasses.value,
          'transition duration-200 ease-in-out',
          // 使用CSS变量实现深色模式自动切换
          'bg-[var(--tag-bg-light)] text-[var(--tag-text-light)] border border-[var(--tag-border-light)]',
          'dark:bg-[var(--tag-bg-dark)] dark:text-[var(--tag-text-dark)] dark:border-[var(--tag-border-dark)]',
        ]}
        style={colorVars.value}
      >
        <span class="truncate max-w-[150px] font-medium">{props.text}</span>
        <button
          type="button"
          onClick={handleRemove}
          class="ml-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10
                focus:outline-none focus:ring-1 focus:ring-current focus:ring-opacity-50
                w-4 h-4 flex items-center justify-center transition-all duration-150"
          aria-label="删除标签"
        >
          <svg
            class="w-3 h-3"
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
