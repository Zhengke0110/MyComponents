import { computed, defineComponent, ref, type PropType } from 'vue'
import { useThrottleFn } from "@vueuse/core"

export type SearchInputSize = 'sm' | 'md' | 'lg'
export type SearchInputTheme = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

export interface SearchInputProps {
  modelValue?: string
  label?: string
  showLabel?: boolean
  placeholder?: string
  type?: string
  id?: string
  name?: string
  size?: SearchInputSize
  theme?: SearchInputTheme
  disabled?: boolean
  animate?: boolean
  rounded?: boolean
}

export const SearchInput = defineComponent({
  name: 'SearchInput',
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Search"
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: "Search..."
    },
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
      default: "search"
    },
    name: {
      type: String,
      default: "search"
    },
    size: {
      type: String as PropType<SearchInputSize>,
      default: "md"
    },
    theme: {
      type: String as PropType<SearchInputTheme>,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    animate: {
      type: Boolean,
      default: true
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'search', 'keypress', 'clear', 'focus', 'blur'],
  setup(props, { emit }) {
    const inputRef = ref<HTMLInputElement | null>(null);
    const isFocused = ref(false);
    
    const handleInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit('update:modelValue', target.value);
    }

    const handleKeyPress = useThrottleFn((event: KeyboardEvent) => {
      emit('keypress', event);
      if (event.key === "Enter") {
        emit('search');
      }
    }, 300);

    const clearInput = () => {
      emit('update:modelValue', '');
      emit('clear');
      // 清除后自动聚焦
      if (inputRef.value) {
        inputRef.value.focus();
      }
    }

    const handleFocus = () => {
      isFocused.value = true;
      emit('focus');
    }

    const handleBlur = () => {
      isFocused.value = false;
      emit('blur');
    }
    
    // 大小样式
    const sizeClass = computed(() => {
      return {
        'text-xs py-1': props.size === 'sm',
        'text-sm py-1.5': props.size === 'md',
        'text-base py-2': props.size === 'lg'
      }
    });

    // 主题样式
    const themeClass = computed(() => {
      const baseClasses = 'focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 transition-all duration-200';
      const themes = {
        default: `${baseClasses} outline-gray-300 focus-within:outline-indigo-600`,
        primary: `${baseClasses} outline-indigo-300 focus-within:outline-indigo-600`,
        success: `${baseClasses} outline-green-300 focus-within:outline-green-600`,
        warning: `${baseClasses} outline-yellow-300 focus-within:outline-yellow-600`,
        error: `${baseClasses} outline-red-300 focus-within:outline-red-600`,
        info: `${baseClasses} outline-blue-300 focus-within:outline-blue-600`
      };
      
      return themes[props.theme] || themes.default;
    });

    // 按钮颜色
    const buttonColorClass = computed(() => {
      const colors = {
        default: 'text-gray-500 hover:text-gray-700',
        primary: 'text-indigo-500 hover:text-indigo-700',
        success: 'text-green-500 hover:text-green-700',
        warning: 'text-yellow-600 hover:text-yellow-800',
        error: 'text-red-500 hover:text-red-700',
        info: 'text-blue-500 hover:text-blue-700'
      };
      
      return colors[props.theme] || colors.default;
    });

    // 动画效果
    const animationClass = computed(() => {
      return props.animate ? 'transition-all duration-200' : '';
    });

    // 圆角样式
    const roundedClass = computed(() => {
      return props.rounded ? 'rounded-full' : 'rounded-md';
    });

    return () => (
      <div class={`flex w-full justify-start items-center ${props.disabled ? 'opacity-60' : ''}`}>
        {props.showLabel && (
          <label
            for={props.id}
            class="block text-sm font-medium text-gray-900 mr-2"
          >
            {props.label}
          </label>
        )}
        <div class="flex-1">
          <div
            class={[
              'flex bg-white outline outline-1 -outline-offset-1', 
              themeClass.value,
              roundedClass.value,
              animationClass.value,
              isFocused.value && 'ring-1 ring-offset-0',
              props.disabled && 'bg-gray-100 cursor-not-allowed'
            ]}
          >
            <input
              ref={inputRef}
              type={props.type}
              id={props.id}
              name={props.name}
              value={props.modelValue}
              disabled={props.disabled}
              class={[
                "block min-w-0 grow px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none",
                sizeClass.value,
                animationClass.value,
                props.disabled && 'bg-gray-100 cursor-not-allowed'
              ]}
              placeholder={props.placeholder}
              onInput={handleInput}
              onKeypress={handleKeyPress}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            
            {props.modelValue && !props.disabled && (
              <button
                type="button"
                class={[
                  "flex items-center justify-center px-2 transition-all duration-200 focus:outline-none", 
                  buttonColorClass.value,
                  props.animate ? 'hover:scale-110 active:scale-95' : ''
                ]}
                onClick={clearInput}
                title="清除"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            )}
            
            {props.modelValue && !props.disabled && <div class="w-px h-5 my-auto bg-gray-200"></div>}
            
            <button
              type="button"
              disabled={props.disabled}
              class={[
                "flex items-center justify-center px-3 focus:outline-none transition-all duration-200",
                buttonColorClass.value,
                sizeClass.value,
                props.animate ? 'hover:scale-110 active:scale-95' : '',
                props.disabled && 'cursor-not-allowed'
              ]}
              onClick={() => !props.disabled && emit('search')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class={[
                  props.size === 'sm' ? 'h-4 w-4' : '',
                  props.size === 'md' ? 'h-5 w-5' : '',
                  props.size === 'lg' ? 'h-6 w-6' : '',
                ]}
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }
})

export default SearchInput
