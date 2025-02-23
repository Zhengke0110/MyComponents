import { computed, defineComponent, TransitionGroup } from 'vue';
import type { PropType } from 'vue';

type ThemeType = 'primary' | 'success' | 'warning' | 'danger' | 'info';

const themeColors: Record<ThemeType, { border: string; text: string; hover: string }> = {
  primary: {
    border: 'border-indigo-500',
    text: 'text-indigo-600',
    hover: 'hover:border-indigo-300 hover:text-indigo-700'
  },
  success: {
    border: 'border-green-500',
    text: 'text-green-600',
    hover: 'hover:border-green-300 hover:text-green-700'
  },
  warning: {
    border: 'border-yellow-500',
    text: 'text-yellow-600',
    hover: 'hover:border-yellow-300 hover:text-yellow-700'
  },
  danger: {
    border: 'border-red-500',
    text: 'text-red-600',
    hover: 'hover:border-red-300 hover:text-red-700'
  },
  info: {
    border: 'border-blue-500',
    text: 'text-blue-600',
    hover: 'hover:border-blue-300 hover:text-blue-700'
  }
};

export interface PaginationProps {
  total: number;
  current: number;
  pageSize?: number;
  disabled?: boolean;
  showQuickJumper?: boolean;
  theme?: ThemeType;
}

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
      type: String as PropType<ThemeType>,
      default: 'primary'
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
      const range: (number | string)[] = [];

      for (let i = Math.max(2, current - delta); i <= Math.min(count - 1, current + delta); i++) {
        range.push(i);
      }

      if (current - delta > 2) range.unshift('...');
      if (current + delta < count - 1) range.push('...');

      range.unshift(1);
      if (count > 1) range.push(count);

      return range;
    });

    const handlePageChange = (page: number) => {
      if (props.disabled || page === props.current) return;
      if (page >= 1 && page <= pageCount.value) {
        emit('update:current', page);
        emit('change', page);
      }
    };

    const handleQuickJump = (event: Event) => {
      const value = Number((event.target as HTMLInputElement).value);
      if (!isNaN(value) && value >= 1 && value <= pageCount.value) {
        handlePageChange(value);
      }
    };

    const themeClasses = computed(() => themeColors[props.theme]);

    return () => (
      <nav class="flex items-center justify-between border-t border-gray-200 mt-2 px-4 sm:px-0">
        <div class="-mt-px flex w-0 flex-1">
          <button
            disabled={isFirstPage.value || props.disabled}
            class={[
              'inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium transition-colors duration-200 ease-in-out',
              isFirstPage.value || props.disabled
                ? 'text-gray-300 cursor-not-allowed'
                : `text-gray-500 ${themeClasses.value.hover}`
            ]}
            onClick={() => handlePageChange(props.current - 1)}
          >
            <i class="i-tabler-arrow-move-left size-5 mr-3" />
            Previous
          </button>
        </div>

        <div class="hidden md:-mt-px md:flex">
          <TransitionGroup name="fade">
            {displayedPages.value.map(page => (
              <button
                key={page}
                class={[
                  'inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium transition-all duration-200 ease-in-out',
                  props.current === page
                    ? `${themeClasses.value.border} ${themeClasses.value.text}`
                    : `border-transparent text-gray-500 ${themeClasses.value.hover}`,
                  props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                ]}
                disabled={props.disabled}
                onClick={() => typeof page === 'number' && handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </TransitionGroup>
        </div>

        {props.showQuickJumper && (
          <div class="hidden md:flex items-center">
            <input
              type="number"
              value={props.current}
              disabled={props.disabled}
              min="1"
              max={pageCount.value}
              class={[
                'w-16 px-2 py-1 text-sm border rounded-md',
                `focus:ring-1 focus:${themeClasses.value.border} focus:border-${props.theme}-500`
              ]}
              onChange={handleQuickJump}
            />
          </div>
        )}

        <div class="-mt-px flex w-0 flex-1 justify-end">
          <button
            disabled={isLastPage.value || props.disabled}
            class={[
              'inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium transition-colors duration-200 ease-in-out',
              isLastPage.value || props.disabled
                ? 'text-gray-300 cursor-not-allowed'
                : `text-gray-500 ${themeClasses.value.hover}`
            ]}
            onClick={() => handlePageChange(props.current + 1)}
          >
            Next
            <i class="i-tabler-arrow-move-right size-5 ml-3" />
          </button>
        </div>

        <style scoped>{`
          .fade-enter-active,
          .fade-leave-active {
            transition: all 0.3s ease;
          }

          .fade-enter-from,
          .fade-leave-to {
            opacity: 0;
            transform: translateY(30px);
          }

          .fade-move {
            transition: transform 0.3s ease;
          }
        `}</style>
      </nav>
    );
  }
});
