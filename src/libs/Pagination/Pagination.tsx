import { computed, defineComponent, h, TransitionGroup, ref } from 'vue';
import type { PropType } from 'vue';
import { COLOR_CLASSES, ColorType } from './confg'
export interface PaginationProps {
  total: number;
  current: number;
  pageSize?: number;
  disabled?: boolean;
  showQuickJumper?: boolean;
  theme?: ColorType;
  dark?: boolean;
}

const PageButton = defineComponent({
  name: 'PageButton',
  props: {
    item: {
      type: Object as PropType<{ value: number | string; key: string }>,
      required: true
    },
    current: Number,
    disabled: Boolean,
    themeColor: String as PropType<ColorType>,
    onClick: Function as PropType<(value: number) => void>
  },
  setup(props) {
    const colorClasses = computed(() => {
      return COLOR_CLASSES[props.themeColor as ColorType] || COLOR_CLASSES.indigo;
    });

    return () => (
      <button
        class={[
          'inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium transition-all duration-200 ease-in-out',
          props.current === props.item.value
            ? colorClasses.value.active
            : `border-transparent text-gray-500 dark:text-gray-400 ${colorClasses.value.hover}`,
          props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        ]}
        disabled={props.disabled}
        onClick={() => typeof props.item.value === 'number' && props.onClick?.(props.item.value)}
      >
        {props.item.value}
      </button>
    );
  }
});

export default defineComponent({
  name: 'Pagination',
  props: {
    total: {
      type: Number as PropType<number>,
      required: true
    },
    current: {
      type: Number as PropType<number>,
      required: true
    },
    pageSize: {
      type: Number as PropType<number>,
      default: 20
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    showQuickJumper: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    theme: {
      type: String as PropType<ColorType>,
      default: 'indigo'
    },
    dark: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  emits: ['update:current', 'change'],
  setup(props, { emit }) {
    const pageCount = computed(() => Math.ceil(props.total / props.pageSize));
    const isFirstPage = computed(() => props.current <= 1);
    const isLastPage = computed(() => props.current >= pageCount.value);

    const displayedPages = computed(() => {
      const count = pageCount.value;
      const current = props.current;
      const delta = 2;
      const range = [];

      for (let i = Math.max(2, current - delta); i <= Math.min(count - 1, current + delta); i++) {
        range.push({ value: i, key: `page-${i}` });
      }

      if (current - delta > 2) range.unshift({ value: '...', key: 'ellipsis-start' });
      if (current + delta < count - 1) range.push({ value: '...', key: 'ellipsis-end' });

      range.unshift({ value: 1, key: 'page-1' });
      if (count > 1) range.push({ value: count, key: `page-${count}` });

      return range;
    });

    const handlePageChange = (page: number) => {
      if (props.disabled || page === props.current) return;
      if (page >= 1 && page <= pageCount.value) {
        emit('update:current', page);
        emit('change', page);
      }
    };

    const jumpInputValue = ref<string>(props.current.toString());
    const isJumpFocused = ref(false);

    const handleQuickJump = (event: Event) => {
      const value = Number((event.target as HTMLInputElement).value);
      if (!isNaN(value) && value >= 1 && value <= pageCount.value) {
        handlePageChange(value);
      }
      // 重置输入框值为当前页码
      jumpInputValue.value = props.current.toString();
    };

    const handleJumpKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        const value = Number(jumpInputValue.value);
        if (!isNaN(value) && value >= 1 && value <= pageCount.value) {
          handlePageChange(value);
          (event.target as HTMLInputElement).blur();
        }
      }
    };

    const colorClasses = computed(() => {
      return COLOR_CLASSES[props.theme] || COLOR_CLASSES.indigo;
    });

    return () => (
      <nav class={[
        "flex items-center justify-between border-t border-gray-200 dark:border-gray-700 mt-2 px-4 sm:px-0",
        props.dark ? 'dark' : ''
      ]}>
        <div class="-mt-px flex w-0 flex-1">
          <button
            disabled={isFirstPage.value || props.disabled}
            class={[
              'inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium transition-colors duration-200 ease-in-out',
              isFirstPage.value || props.disabled
                ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                : `text-gray-500 dark:text-gray-400 ${colorClasses.value.hover}`
            ]}
            onClick={() => handlePageChange(props.current - 1)}
          >
            <i class="icon-[line-md--arrow-small-left] size-6 mr-3" />
            Previous
          </button>
        </div>

        <div class="hidden md:-mt-px md:flex items-center">
          {h(TransitionGroup,
            {
              name: 'fade',
              tag: 'div',
              class: 'flex'
            },
            () => displayedPages.value.map(item =>
              h(PageButton, {
                key: item.key,
                item,
                current: props.current,
                disabled: props.disabled,
                themeColor: props.theme,
                onClick: handlePageChange
              })
            )
          )}

          {props.showQuickJumper && (
            <div class="flex items-center border-t-2 border-transparent ml-4">
              <div
                class={[
                  "relative flex items-center gap-1 px-3 pt-4 text-sm transition-colors duration-200",
                  isJumpFocused.value ? `border-t-2 -mt-0.5 ${colorClasses.value.active}` : "-mt-px border-transparent"
                ]}
              >
                <span class="text-gray-600 dark:text-gray-400">前往</span>
                <div class="relative">
                  <input
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    value={jumpInputValue.value}
                    onInput={(e) => {
                      // 仅允许数字输入
                      jumpInputValue.value = (e.target as HTMLInputElement).value.replace(/\D/g, '');
                    }}
                    onKeydown={handleJumpKeyDown}
                    onFocus={() => { isJumpFocused.value = true; jumpInputValue.value = ''; }}
                    onBlur={(e) => {
                      isJumpFocused.value = false;
                      handleQuickJump(e);
                    }}
                    disabled={props.disabled}
                    min="1"
                    max={pageCount.value}
                    class={[
                      'w-10 h-7 px-2 text-center rounded',
                      'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600',
                      'focus:outline-none focus:ring-1',
                      props.disabled ? 'bg-gray-100 dark:bg-gray-800/50 cursor-not-allowed opacity-60' : '',
                      colorClasses.value.focus
                    ]}
                  />
                  <div 
                    class={[
                      "absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs rounded px-1.5 py-0.5 whitespace-nowrap",
                      "transition-opacity duration-200 ease-in-out",
                      isJumpFocused.value ? "opacity-100" : "opacity-0 pointer-events-none",
                      `bg-${props.theme}-50 text-${props.theme}-800 dark:bg-${props.theme}-900/30 dark:text-${props.theme}-300`
                    ]}
                  >
                    共 {pageCount.value} 页
                  </div>
                </div>
                <span class="text-gray-600 dark:text-gray-400">页</span>
              </div>
            </div>
          )}
        </div>

        <div class="-mt-px flex w-0 flex-1 justify-end">
          <button
            disabled={isLastPage.value || props.disabled}
            class={[
              'inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium transition-colors duration-200 ease-in-out',
              isLastPage.value || props.disabled
                ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                : `text-gray-500 dark:text-gray-400 ${colorClasses.value.hover}`
            ]}
            onClick={() => handlePageChange(props.current + 1)}
          >
            Next
            <i class="icon-[line-md--arrow-small-right] size-6 ml-3" />
          </button>
        </div>

        <style scoped>{`
          .fade-enter-active,
          .fade-leave-active {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .fade-enter-from,
          .fade-leave-to {
            opacity: 0;
            transform: translateY(10px);
          }

          .fade-move {
            transition: transform 0.3s ease;
          }
          
          /* 为数字输入框添加更好的样式 */
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          
          input[type=number] {
            -moz-appearance: textfield;
          }
        `}</style>
      </nav>
    );
  }
});
