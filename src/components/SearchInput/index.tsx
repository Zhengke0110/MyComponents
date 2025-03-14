import { computed, defineComponent, ref, type PropType } from 'vue'
import { useThrottleFn } from "@vueuse/core"

import { COLOR_STYLE_MAP, ColorType } from './config'

export type SearchInputSize = 'sm' | 'md' | 'lg'

export interface SearchInputProps {
  modelValue?: string
  label?: string
  showLabel?: boolean
  placeholder?: string
  type?: string
  id?: string
  name?: string
  size?: SearchInputSize
  theme?: ColorType | 'default'
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
      type: String as PropType<ColorType | 'default'>,
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
    const isHovered = ref(false);

    // 获取实际颜色
    const actualColorKey = computed(() => {
      return props.theme || 'default';
    });

    // 获取颜色样式对象
    const colorStyle = computed(() => {
      return COLOR_STYLE_MAP[actualColorKey.value as keyof typeof COLOR_STYLE_MAP] || COLOR_STYLE_MAP.default;
    });

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

    // 容器背景样式
    const containerBgClass = computed(() => {
      if (props.disabled) {
        return 'bg-gray-100/50 dark:bg-gray-800/50';
      }
      return colorStyle.value.container.base;
    });

    // 边框样式
    const borderClass = computed(() => {
      const baseClasses = 'border';

      if (props.disabled) {
        return `${baseClasses} ${colorStyle.value.container.disabled}`;
      }

      if (isFocused.value) {
        return `${baseClasses} ${colorStyle.value.container.focus}`;
      }

      return `${baseClasses} ${colorStyle.value.container.normal}`;
    });

    // 按钮颜色
    const buttonColorClass = computed(() => {
      if (props.disabled) {
        return 'text-gray-400 dark:text-gray-500';
      }
      return colorStyle.value.button;
    });

    // 标签颜色
    const labelColorClass = computed(() => {
      if (props.disabled) {
        return 'text-gray-400 dark:text-gray-500';
      }
      return colorStyle.value.label;
    });

    // 输入框文本颜色
    const inputColorClass = computed(() => {
      if (props.disabled) {
        return 'text-gray-500 dark:text-gray-400 placeholder:text-gray-400 dark:placeholder:text-gray-500';
      }
      return colorStyle.value.input;
    });

    // 动画效果 - 只使用Tailwind提供的transition类
    const animationClass = computed(() => {
      return props.animate ? 'transition-colors duration-200' : '';
    });

    // 圆角样式
    const roundedClass = computed(() => {
      return props.rounded ? 'rounded-full' : 'rounded-md';
    });

    // 分隔线样式
    const dividerClass = computed(() => {
      return colorStyle.value.divider;
    });

    // 图标样式
    const iconClass = computed(() => {
      switch (props.size) {
        case 'sm': return 'h-3.5 w-3.5';
        case 'lg': return 'h-5 w-5';
        default: return 'h-4 w-4';
      }
    });

    // 渲染函数
    return () => (
      <div class="flex w-full justify-start items-center">
        {props.showLabel && (
          <label
            for={props.id}
            class={[
              "block text-sm mr-2",
              labelColorClass.value,
              props.animate ? 'transition-colors' : ''
            ]}
          >
            {props.label}
          </label>
        )}
        <div class="flex-1">
          <div
            class={[
              'flex relative overflow-hidden',
              containerBgClass.value,
              borderClass.value,
              roundedClass.value,
              animationClass.value,
              props.disabled && 'opacity-75 cursor-not-allowed'
            ]}
            onMouseenter={() => isHovered.value = true}
            onMouseleave={() => isHovered.value = false}
          >
            <input
              ref={inputRef}
              type={props.type}
              id={props.id}
              name={props.name}
              value={props.modelValue}
              disabled={props.disabled}
              class={[
                "block min-w-0 grow px-3 focus:outline-none bg-transparent",
                inputColorClass.value,
                sizeClass.value,
                props.animate ? 'transition-colors' : '',
                props.disabled && 'cursor-not-allowed'
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
                  "flex items-center justify-center px-2 focus:outline-none",
                  buttonColorClass.value,
                  props.animate ? 'transition-colors hover:opacity-80 active:opacity-100' : ''
                ]}
                onClick={clearInput}
                title="清除"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class={iconClass.value}
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

            {props.modelValue && !props.disabled && (
              <div class={`w-px h-5 my-auto ${dividerClass.value}`}></div>
            )}

            <button
              type="button"
              disabled={props.disabled}
              class={[
                "flex items-center justify-center px-3 focus:outline-none",
                buttonColorClass.value,
                sizeClass.value,
                props.animate ? 'transition-colors hover:opacity-80 active:opacity-100' : '',
                props.disabled && 'cursor-not-allowed'
              ]}
              onClick={() => !props.disabled && emit('search')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class={iconClass.value}
                viewBox="0 0 24 24"
                stroke-width="2.2"
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
