import { defineComponent, PropType, Transition } from 'vue';
import { ref, computed, watch } from "vue";
import { useEventListener, useWindowScroll } from "@vueuse/core";
import './styles.css';
import { SelectOption, ColorType, SelectMenuTheme, defaultColor, getColorClasses } from './config'

// Export types and enums for component consumers
export { SelectMenuTheme, type SelectOption };

export interface SelectMenuProps {
  modelValue?: SelectOption;
  options: SelectOption[];
  label?: string;
  placeholder?: string;
  color?: ColorType;
}

export interface SelectMenuEmits {
  (e: "update:modelValue", value: SelectOption | null): void;
}

export function useSelectMenu(props: SelectMenuProps, emit: SelectMenuEmits) {
  const isOpen = ref(false);
  const highlightedIndex = ref(-1);
  const containerRef = ref<HTMLElement | null>(null);

  // Generate unique IDs for accessibility
  const listboxId = computed(
    () => `listbox-${Math.random().toString(36).substr(2, 9)}`
  );

  const getOptionId = (index: number) => `option-${listboxId.value}-${index}`;

  const highlightedId = computed(() =>
    highlightedIndex.value >= 0
      ? getOptionId(highlightedIndex.value)
      : undefined
  );

  // Enhanced keyboard navigation
  const navigateOptions = (direction: "next" | "prev") => {
    if (!isOpen.value) {
      isOpen.value = true;
      highlightedIndex.value = props.modelValue
        ? props.options.findIndex((opt) => opt.id === props.modelValue?.id)
        : 0;
      return;
    }

    const newIndex =
      direction === "next"
        ? (highlightedIndex.value + 1) % props.options.length
        : highlightedIndex.value <= 0
          ? props.options.length - 1
          : highlightedIndex.value - 1;

    highlightedIndex.value = newIndex;

    // Improved scroll into view with smooth behavior
    const highlightedElement = document.getElementById(getOptionId(newIndex));
    if (highlightedElement) {
      highlightedElement.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  };

  const selectHighlighted = () => {
    if (isOpen.value && highlightedIndex.value >= 0) {
      selectOption(props.options[highlightedIndex.value]);
    }
  };

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
      highlightedIndex.value = props.options.findIndex(
        (opt) => opt.id === props.modelValue?.id
      );
    }
  };

  const selectOption = (option: SelectOption) => {
    emit("update:modelValue", option);
    closeDropdown();
  };

  const closeDropdown = () => {
    isOpen.value = false;
    highlightedIndex.value = -1;
  };

  const isSelected = (option: SelectOption) =>
    props.modelValue?.id === option.id;

  // Close dropdown when clicking outside
  useEventListener(document, "click", (event) => {
    const target = event.target as HTMLElement;
    if (!containerRef.value?.contains(target)) {
      closeDropdown();
    }
  });

  // Close dropdown when scrolling window
  const { y: scrollY } = useWindowScroll();
  watch(scrollY, () => {
    if (isOpen.value) closeDropdown();
  });

  // Auto-focus management
  watch(isOpen, (newValue) => {
    if (newValue && containerRef.value) {
      containerRef.value.focus();
    }
  });

  return {
    isOpen,
    highlightedIndex,
    containerRef,
    listboxId,
    highlightedId,
    getOptionId,
    navigateOptions,
    selectHighlighted,
    toggleDropdown,
    selectOption,
    closeDropdown,
    isSelected,
  };
}

const SelectMenus = defineComponent({
  name: 'SelectMenus',
  props: {
    modelValue: {
      type: Object as PropType<SelectOption>,
      default: undefined
    },
    options: {
      type: Array as PropType<SelectOption[]>,
      required: true
    },
    label: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    },
    theme: {
      type: String as PropType<SelectMenuTheme>,
      default: SelectMenuTheme.Indigo
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const {
      isOpen,
      highlightedIndex,
      containerRef,
      listboxId,
      highlightedId,
      getOptionId,
      navigateOptions,
      selectHighlighted,
      toggleDropdown,
      selectOption,
      closeDropdown,
      isSelected,
    } = useSelectMenu(props as any, emit);

    // 使用映射方式获取颜色类
    const colorClasses = computed(() => {
      return getColorClasses(props.theme || defaultColor);
    });

    // 滚动条样式变量
    const scrollbarVars = computed(() => {
      const theme = props.theme || defaultColor;
      // 为暗黑模式和亮色模式定义不同的滚动条颜色
      const vars: Record<string, string> = {
        '--scrollbar-thumb': 'rgb(203, 213, 225)',   // slate-200
        '--scrollbar-track': 'transparent',
        '--scrollbar-thumb-hover': 'rgb(148, 163, 184)'  // slate-300
      };

      if (theme === 'indigo') {
        vars['--scrollbar-thumb'] = 'rgb(199, 210, 254)'; // indigo-200
        vars['--scrollbar-thumb-hover'] = 'rgb(165, 180, 252)'; // indigo-300
      }

      return vars;
    });

    return () => (
      <div
        class="relative w-[140px] group outline-none focus-visible:outline-none"
        onKeydown={(e) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            navigateOptions('next');
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            navigateOptions('prev');
          } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectHighlighted();
          } else if (e.key === 'Escape') {
            closeDropdown();
          } else if (e.key === 'Tab') {
            closeDropdown();
          }
        }}
        tabindex="0"
        ref={containerRef}
      >
        {/* Focus ring indicator */}
        <div
          class={`absolute -inset-1 rounded-xl opacity-0 transition-opacity duration-200 pointer-events-none group-focus-visible:opacity-100 ${colorClasses.value.focusBg}`}
          aria-hidden="true"
        ></div>

        {/* Label with improved focus effect */}
        {props.label && (
          <label
            class={`relative block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 transition-all duration-200 ease-out group-focus-visible:translate-x-0.5 ${isOpen.value ? colorClasses.value.labelActive : ''}`}
          >
            {props.label}
          </label>
        )}

        {/* Main button with updated styles */}
        <button
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isOpen.value}
          aria-controls={listboxId.value}
          class={[
            "relative w-full flex items-center justify-between px-4 py-2.5 shadow-sm border rounded-xl transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed outline-none focus:outline-none",
            isOpen.value
              ? `bg-white dark:bg-gray-800 shadow-md ${colorClasses.value.borderActive} ${colorClasses.value.ringActive}`
              : 'bg-gray-50/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 backdrop-blur-sm hover:border-gray-300 dark:hover:border-gray-600',
            colorClasses.value.hoverBg
          ]}
          data-state={isOpen.value ? 'open' : 'closed'}
        >
          <div class="flex items-center gap-3 min-w-0">
            {(props.modelValue?.icon || props.modelValue?.avatar) && (
              <div class="relative">
                {props.modelValue?.icon ? (
                  <i
                    class={[
                      props.modelValue.icon,
                      'w-5 h-5 transition-transform duration-200 group-hover:scale-110',
                      colorClasses.value.iconColor
                    ]}
                  />
                ) : props.modelValue?.avatar ? (
                  <img
                    src={props.modelValue.avatar}
                    alt={props.modelValue?.name}
                    class="w-7 h-7 rounded-full object-cover ring-2 ring-white dark:ring-gray-700 shadow-sm transition-transform duration-200 group-hover:scale-110"
                  />
                ) : null}
                <div
                  class={`absolute -inset-0.5 rounded-full animate-pulse group-hover:animate-none bg-${props.theme}-500/10 dark:bg-${props.theme}-500/20`}
                  style={{
                    backgroundColor: isOpen.value ? `var(--tw-${props.theme}-500-opacity-10, rgba(99, 102, 241, 0.1))` : '',
                  }}
                ></div>
              </div>
            )}
            {(props.modelValue?.name || props.placeholder) && (
              <span
                class={[
                  "truncate text-sm font-medium",
                  props.modelValue?.name ? 'text-gray-700 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'
                ]}
              >
                {props.modelValue?.name || props.placeholder}
              </span>
            )}
          </div>
          <i
            class={[
              "icon-[material-symbols--keyboard-arrow-down-rounded] transform transition-all duration-200",
              isOpen.value ? `${colorClasses.value.iconColor} rotate-180` : 'text-gray-400 dark:text-gray-500'
            ]}
          />
        </button>

        {/* Dropdown with improved styles */}
        <Transition
          enterActiveClass="transform-gpu transition-all duration-300 ease-out-back"
          enterFromClass="opacity-0 -translate-y-1 scale-95 blur-sm"
          enterToClass="opacity-100 translate-y-0 scale-100 blur-0"
          leaveActiveClass="transform-gpu transition-all duration-200 ease-in-back"
          leaveFromClass="opacity-100 translate-y-0 scale-100 blur-0"
          leaveToClass="opacity-0 -translate-y-1 scale-95 blur-sm"
        >
          {isOpen.value && (
            <div class="absolute z-50 w-full mt-2">
              <div class="relative select-menu-container">
                {/* Top shadow */}
                <div
                  class="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-white to-transparent dark:from-gray-800 dark:to-transparent pointer-events-none z-10 rounded-t-xl"
                ></div>

                <ul
                  id={listboxId.value}
                  role="listbox"
                  class="relative max-h-64 overflow-auto rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg divide-y divide-gray-100 dark:divide-gray-700 scrollbar-thin focus:outline-none"
                  style={scrollbarVars.value}
                  aria-activedescendant={highlightedId.value}
                >
                  {props.options.map((option, index) => (
                    <li
                      key={option.id}
                      id={getOptionId(index)}
                      onClick={() => selectOption(option)}
                      onMousemove={() => highlightedIndex.value = index}
                      class={[
                        'px-4 py-2.5 flex items-center gap-3 text-sm',
                        'transition-all duration-150 ease-out',
                        'cursor-pointer select-none group/item relative',
                        'outline-none focus:outline-none',
                        highlightedIndex.value !== index && 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50',
                        isSelected(option) ? 'font-medium' : 'font-normal',
                        !option.name ? 'justify-center' : '',
                        highlightedIndex.value === index ? colorClasses.value.highlight : ''
                      ]}
                      role="option"
                      aria-selected={isSelected(option)}
                    >
                      {/* Highlight indicator */}
                      {highlightedIndex.value === index && (
                        <div
                          class={`absolute left-0 top-[10%] bottom-[10%] w-0.5 highlighted-indicator ${colorClasses.value.indicator}`}
                        ></div>
                      )}

                      {/* Option content */}
                      {(option.icon || option.avatar) && (
                        <div class="relative flex-shrink-0">
                          {option.icon ? (
                            <i
                              class={[
                                option.icon,
                                'w-5 h-5 transition-all duration-200 group-hover/item:scale-110',
                                highlightedIndex.value !== index ? 'text-gray-500 dark:text-gray-400' : colorClasses.value.iconColor
                              ]}
                            />
                          ) : option.avatar ? (
                            <img
                              src={option.avatar}
                              alt={option.name}
                              class={[
                                'w-7 h-7 rounded-full object-cover shadow-sm ring-2',
                                'transition-all duration-200',
                                'group-hover/item:scale-105',
                                highlightedIndex.value !== index ? 'ring-white dark:ring-gray-700' : colorClasses.value.activeRing
                              ]}
                            />
                          ) : null}
                          {/* Selection indicator for icon-only options */}
                          {isSelected(option) && !option.name && (
                            <div
                              class={`absolute -right-0.5 -bottom-0.5 w-3.5 h-3.5 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm ring-1 ${colorClasses.value.checkIconRing}`}
                            >
                              <i
                                class={`icon-[material-symbols--check-rounded] w-3 h-3 ${colorClasses.value.iconColor}`}
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {/* Option text */}
                      {option.name && (
                        <div class="flex-1 min-w-0">
                          <span class="block truncate">{option.name}</span>
                          {option.description && (
                            <span
                              class="block truncate text-xs text-gray-400 dark:text-gray-500 transition-colors duration-200 group-hover/item:text-gray-500 dark:group-hover/item:text-gray-400"
                            >
                              {option.description}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Check icon with animation (only for options with name) */}
                      {isSelected(option) && option.name && (
                        <i
                          class={`icon-[material-symbols--check-rounded] opacity-0 scale-50 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:scale-100 ${colorClasses.value.iconColor}`}
                        />
                      )}
                    </li>
                  ))}
                </ul>

                {/* Bottom shadow */}
                <div
                  class="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-white to-transparent dark:from-gray-800 dark:to-transparent pointer-events-none z-10 rounded-b-xl"
                ></div>
              </div>
            </div>
          )}
        </Transition>
      </div>
    );
  }
});

export default SelectMenus;
