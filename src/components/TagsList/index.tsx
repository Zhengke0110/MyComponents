import { computed, defineComponent, ref, type PropType, Transition, TransitionGroup, h } from 'vue'
import Tag from './components/Tag'
import type { TagSize } from './components/Tag'
export type ThemeColor = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 
                         'red' | 'orange' | 'amber' | 'yellow' | 'lime' |
                         'green' | 'emerald' | 'teal' | 'cyan' | 'sky' |
                         'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' |
                         'pink' | 'rose'

export { TagSize }

export interface TagsListProps {
  modelValue: string[]
  color?: ThemeColor
  size?: TagSize
  placeholder?: string
  maxTags?: number
  validation?: (tag: string) => boolean | string
  allowDuplicates?: boolean
  randomColors?: boolean
}

export const TagsList = defineComponent({
  name: 'TagsList',
  props: {
    modelValue: {
      type: Array as PropType<string[]>,
      required: true
    },
    color: {
      type: String as PropType<ThemeColor>,
      default: 'blue',
      validator: (value: string) => {
        const allowedColors: ThemeColor[] = [
          'slate', 'gray', 'zinc', 'neutral', 'stone',
          'red', 'orange', 'amber', 'yellow', 'lime',
          'green', 'emerald', 'teal', 'cyan', 'sky',
          'blue', 'indigo', 'violet', 'purple', 'fuchsia',
          'pink', 'rose'
        ]
        return allowedColors.includes(value as ThemeColor)
      }
    },
    size: {
      type: String as PropType<TagSize>,
      default: 'md'
    },
    placeholder: {
      type: String,
      default: '请输入标签'
    },
    maxTags: {
      type: Number,
      default: Infinity
    },
    validation: {
      type: Function as PropType<(tag: string) => boolean | string>,
      default: undefined
    },
    allowDuplicates: {
      type: Boolean,
      default: false
    },
    randomColors: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'error'],
  setup(props, { emit }) {
    const newTag = ref('')
    const isFocused = ref(false)
    const hasError = ref(false)
    const errorMessage = ref('')

    const inputSize = computed(() => ({
      sm: 'px-2 py-1 text-sm',
      md: 'p-2',
      lg: 'px-4 py-3 text-lg',
    }[props.size]))

    const containerClass = computed(() => ({
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    }[props.size]))

    // 获取主题颜色相关的样式
    const themeStyles = computed(() => {
      const color = props.color || 'blue'
      return {
        '--theme-color': color,
        '--theme-ring': `${color}-500`,
        '--theme-border-focus': `${color}-500`,
        '--theme-border': `${color}-200`
      }
    })

    const setError = (message: string) => {
      hasError.value = true
      errorMessage.value = message
      emit('error', message)
      
      setTimeout(() => {
        hasError.value = false
        errorMessage.value = ''
      }, 3000)
    }

    const validateAndAddTag = (tag: string): boolean => {
      hasError.value = false
      errorMessage.value = ''

      if (!tag.trim()) {
        setError('标签不能为空')
        return false
      }

      if (!props.allowDuplicates && props.modelValue.includes(tag)) {
        setError('标签已存在')
        return false
      }

      if (props.modelValue.length >= props.maxTags) {
        setError(`最多只能添加 ${props.maxTags} 个标签`)
        return false
      }

      if (props.validation) {
        const validationResult = props.validation(tag)
        if (validationResult !== true) {
          setError(typeof validationResult === 'string' ? validationResult : '标签验证失败')
          return false
        }
      }

      return true
    }

    const addTag = () => {
      const tag = newTag.value.trim()
      if (validateAndAddTag(tag)) {
        emit('update:modelValue', [...props.modelValue, tag])
        newTag.value = ''
      }
    }

    const removeTag = (index: number) => {
      const newTags = [...props.modelValue]
      newTags.splice(index, 1)
      emit('update:modelValue', newTags)
    }

    const removeLastTag = (event: KeyboardEvent) => {
      if (event.key === 'Backspace' && newTag.value === '' && props.modelValue.length > 0) {
        removeTag(props.modelValue.length - 1)
      }
    }

    return () => (
      <div 
        class={['flex flex-col', containerClass.value]} 
        style={themeStyles.value}
      >
        <div class="flex items-center mb-2 relative">
          <input
            value={newTag.value}
            onInput={(e: Event) => { newTag.value = (e.target as HTMLInputElement).value }}
            onKeydown={(e: KeyboardEvent) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                addTag()
              } else if (e.key === 'Backspace') {
                removeLastTag(e)
              }
            }}
            onFocus={() => { isFocused.value = true }}
            onBlur={() => { isFocused.value = false }}
            placeholder={props.placeholder}
            class={[
              'border rounded w-full transition-all duration-300 ease-in-out',
              'focus:outline-none focus:ring-2',
              'theme-input input-animation',
              inputSize.value,
              { 'border-red-400': hasError.value },
              { 'input-focused': isFocused.value }
            ]}
          />

          <Transition
            enterActiveClass="transition duration-200 ease-out"
            enterFromClass="transform scale-95 opacity-0"
            enterToClass="transform scale-100 opacity-100"
            leaveActiveClass="transition duration-150 ease-in"
            leaveFromClass="transform scale-100 opacity-100"
            leaveToClass="transform scale-95 opacity-0"
          >
            {hasError.value && (
              <div class="absolute left-0 -bottom-7 flex items-center space-x-1 text-sm text-red-500 bg-red-50 px-2 py-1 rounded-md shadow-sm">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errorMessage.value}</span>
              </div>
            )}
          </Transition>
        </div>

        <div class="flex flex-wrap gap-2">
          {h(TransitionGroup, 
            { 
              name: 'tag',
              tag: 'div',
              class: 'flex flex-wrap gap-2'
            }, 
            () => props.modelValue.map((tag, index) => (
              h(Tag, {
                key: `${tag}-${index}`, // Explicit key for each child
                text: tag,
                index: index,
                color: props.color,
                size: props.size,
                randomColor: props.randomColors,
                class: 'transition-all duration-200 ease-in-out',
                onRemove: removeTag
              })
            ))
          )}
        </div>
        <style scoped>{`
          .tag-enter-active,
          .tag-leave-active {
            transition: all 0.3s ease;
          }
          
          .tag-enter-from,
          .tag-leave-to {
            opacity: 0;
            transform: translateX(-10px);
          }
          
          .tag-move {
            transition: transform 0.3s ease;
          }
          
          .theme-input {
            border-color: var(--theme-border);
          }
          
          .input-focused,
          .input-animation:focus {
            border-color: var(--theme-border-focus);
            box-shadow: 0 0 0 2px rgba(var(--theme-ring), 0.25);
          }
        `}</style>
      </div>
    )
  }
})

export default TagsList
