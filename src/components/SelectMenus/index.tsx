import { defineComponent, PropType, Transition, CSSProperties } from 'vue';
import { ref, computed, watch } from "vue";
import { useEventListener, useWindowScroll } from "@vueuse/core";

// Color definitions for themes - these map to Tailwind color values
const themeColorMap = {
  indigo: {
    '50': '#eef2ff',
    '100': '#e0e7ff',
    '200': '#c7d2fe',
    '300': '#a5b4fc',
    '500': '#6366f1',
    '600': '#4f46e5',
    '900': '#312e81',
  },
  blue: {
    '50': '#eff6ff',
    '100': '#dbeafe',
    '200': '#bfdbfe',
    '300': '#93c5fd',
    '500': '#3b82f6',
    '600': '#2563eb',
    '900': '#1e3a8a',
  },
  green: {
    '50': '#f0fdf4',
    '100': '#dcfce7',
    '200': '#bbf7d0',
    '300': '#86efac',
    '500': '#22c55e',
    '600': '#16a34a',
    '900': '#14532d',
  },
  red: {
    '50': '#fef2f2',
    '100': '#fee2e2',
    '200': '#fecaca',
    '300': '#fca5a5',
    '500': '#ef4444',
    '600': '#dc2626',
    '900': '#7f1d1d',
  },
  purple: {
    '50': '#faf5ff',
    '100': '#f3e8ff',
    '200': '#e9d5ff',
    '300': '#d8b4fe',
    '500': '#a855f7',
    '600': '#9333ea',
    '900': '#581c87',
  },
  amber: {
    '50': '#fffbeb',
    '100': '#fef3c7',
    '200': '#fde68a',
    '300': '#fcd34d',
    '500': '#f59e0b',
    '600': '#d97706',
    '900': '#78350f',
  },
  pink: {
    '50': '#fdf2f8',
    '100': '#fce7f3',
    '200': '#fbcfe8',
    '300': '#f9a8d4',
    '500': '#ec4899',
    '600': '#db2777',
    '900': '#831843',
  },
  cyan: {
    '50': '#ecfeff',
    '100': '#cffafe',
    '200': '#a5f3fc',
    '300': '#67e8f9',
    '500': '#06b6d4',
    '600': '#0891b2',
    '900': '#164e63',
  },
  emerald: {
    '50': '#ecfdf5',
    '100': '#d1fae5',
    '200': '#a7f3d0',
    '300': '#6ee7b7',
    '500': '#10b981',
    '600': '#059669',
    '900': '#064e3b',
  },
  violet: {
    '50': '#f5f3ff',
    '100': '#ede9fe',
    '200': '#ddd6fe',
    '300': '#c4b5fd',
    '500': '#8b5cf6',
    '600': '#7c3aed',
    '900': '#4c1d95',
  },
  teal: {
    '50': '#f0fdfa',
    '100': '#ccfbf1',
    '200': '#99f6e4',
    '300': '#5eead4',
    '500': '#14b8a6',
    '600': '#0d9488',
    '900': '#134e4a',
  },
  sky: {
    '50': '#f0f9ff',
    '100': '#e0f2fe',
    '200': '#bae6fd',
    '300': '#7dd3fc',
    '500': '#0ea5e9',
    '600': '#0284c7',
    '900': '#0c4a6e',
  },
  orange: {
    '50': '#fff7ed',
    '100': '#ffedd5',
    '200': '#fed7aa',
    '300': '#fdba74',
    '500': '#f97316',
    '600': '#ea580c',
    '900': '#7c2d12',
  },
};

export interface SelectOption {
    id: number | string;
    name?: string;
    icon?: string;
    avatar?: string;
    description?: string;
    [key: string]: any;
}

// Define valid theme colors to ensure they work with Tailwind CSS
export enum SelectMenuTheme {
  Indigo = 'indigo',  // Default
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  Purple = 'purple',
  Amber = 'amber',
  Pink = 'pink',
  Cyan = 'cyan',
  Emerald = 'emerald',
  Violet = 'violet',
  Teal = 'teal',
  Sky = 'sky',
  Orange = 'orange'
}

// Helper function to check if a string is a valid theme
export function isValidTheme(theme: string): theme is SelectMenuTheme {
  return Object.values(SelectMenuTheme).includes(theme as SelectMenuTheme);
}

export interface SelectMenuProps {
    modelValue?: SelectOption;
    options: SelectOption[];
    label?: string;
    placeholder?: string;
    theme?: SelectMenuTheme; // Now using enum type for better type safety
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
import './styles.css';

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
      default: SelectMenuTheme.Indigo,
      validator: (value: string) => {
        if (!isValidTheme(value)) {
          console.warn(`"${value}" is not a valid theme. Using default theme instead.`);
          return false;
        }
        return true;
      }
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
    } = useSelectMenu(props as SelectMenuProps, emit);
    
    // Use safe theme value
    const safeTheme = computed(() => {
      return isValidTheme(props.theme) ? props.theme : SelectMenuTheme.Indigo;
    });
    
    // Get the color values for the current theme
    const themeColors = computed(() => {
      return themeColorMap[safeTheme.value] || themeColorMap.indigo;
    });
    
    // Generate styles instead of dynamic classes
    const themeStyles = computed(() => {
      return {
        focusRingBg: { backgroundColor: `${themeColors.value['50']}80` }, // 50% opacity
        focusText: { color: themeColors.value['600'] },
        hoverBorderColor: themeColors.value['300'],
        hoverBg: { backgroundColor: `${themeColors.value['50']}80` },
        focusBorder: themeColors.value['500'],
        focusRingColor: `${themeColors.value['500']}1a`, // 10% opacity
        iconColor: { color: themeColors.value['600'] },
        avatarRing: { borderColor: `${themeColors.value['200']}80` }, // 50% opacity
        pulseBg: { backgroundColor: `${themeColors.value['500']}1a` }, // 10% opacity
        highlightedBg: { backgroundColor: themeColors.value['50'] },
        highlightedText: { color: themeColors.value['900'] },
        indicator: { backgroundColor: themeColors.value['500'] },
        scrollbarThumb: themeColors.value['200'],
        ringColor: themeColors.value['100'],
      };
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
          class="absolute -inset-1 rounded-xl opacity-0 transition-opacity duration-200 pointer-events-none group-focus-visible:opacity-100"
          style={themeStyles.value.focusRingBg}
          aria-hidden="true"
        ></div>

        {/* Label with improved focus effect */}
        {props.label && (
          <label
            class="relative block mb-1.5 text-sm font-medium text-gray-700 transition-all duration-200 ease-out group-focus-visible:translate-x-0.5"
            style={[
              { transition: 'all 0.2s ease-out' },
              { ...(isOpen.value && themeStyles.value.focusText) }
            ]}
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
            "relative w-full flex items-center justify-between px-4 py-2.5 bg-white shadow-sm border border-gray-200 rounded-xl transition-all duration-200 ease-out hover:bg-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed outline-none focus:outline-none",
            isOpen.value ? 'bg-white shadow-md' : 'bg-gray-50/80 backdrop-blur-sm',
          ]}
          style={[
            { 
              transition: 'all 0.2s ease-out',
            },
            isOpen.value && {
              borderColor: themeStyles.value.focusBorder,
              boxShadow: `0 0 0 4px ${themeStyles.value.focusRingColor}`
            }
          ]}
          onMouseenter={(e) => {
            const target = e.currentTarget as HTMLElement;
            target.style.borderColor = themeStyles.value.hoverBorderColor;
            target.style.backgroundColor = themeStyles.value.hoverBg.backgroundColor;
          }}
          onMouseleave={(e) => {
            if (!isOpen.value) {
              const target = e.currentTarget as HTMLElement;
              target.style.borderColor = '';
              target.style.backgroundColor = '';
            }
          }}
          data-state={isOpen.value ? 'open' : 'closed'}
        >
          <div class="flex items-center gap-3 min-w-0">
            {(props.modelValue?.icon || props.modelValue?.avatar) && (
              <div class="relative">
                {props.modelValue?.icon ? (
                  <i
                    class={[
                      props.modelValue.icon,
                      'w-5 h-5 transition-transform duration-200 group-hover/button:scale-110',
                    ]}
                    style={themeStyles.value.iconColor}
                  />
                ) : props.modelValue?.avatar ? (
                  <img
                    src={props.modelValue.avatar}
                    alt={props.modelValue?.name}
                    class="w-7 h-7 rounded-full object-cover ring-2 ring-white shadow-sm transition-transform duration-200 group-hover/button:scale-110"
                  />
                ) : null}
                <div
                  class="absolute -inset-0.5 rounded-full animate-pulse group-hover/button:animate-none"
                  style={themeStyles.value.pulseBg}
                ></div>
              </div>
            )}
            {(props.modelValue?.name || props.placeholder) && (
              <span
                class={[
                  "truncate text-sm font-medium",
                  props.modelValue?.name ? 'text-gray-700' : 'text-gray-500'
                ]}
              >
                {props.modelValue?.name || props.placeholder}
              </span>
            )}
          </div>
          <i
            class="icon-[material-symbols--keyboard-arrow-down-rounded] transform transition-all duration-200"
            style={[
              { transition: 'all 0.2s' },
              isOpen.value ? { 
                transform: 'rotate(180deg)',
                ...themeStyles.value.focusText
              } : { color: '#9ca3af' }
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
                  class="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-white to-transparent pointer-events-none z-10 rounded-t-xl"
                ></div>

                <ul
                  id={listboxId.value}
                  role="listbox"
                  class="relative max-h-64 overflow-auto rounded-xl bg-white border border-gray-200 shadow-lg divide-y divide-gray-100 scrollbar-thin focus:outline-none"
                  style={{
                    '--scrollbar-thumb': themeStyles.value.scrollbarThumb,
                    '--scrollbar-track': 'transparent',
                  } as any}
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
                        highlightedIndex.value !== index && 'text-gray-700 hover:bg-gray-50',
                        isSelected(option) ? 'font-medium' : 'font-normal',
                        !option.name ? 'justify-center' : '',
                      ]}
                      style={highlightedIndex.value === index ? {
                        ...themeStyles.value.highlightedBg,
                        ...themeStyles.value.highlightedText
                      } : {}}
                      role="option"
                      aria-selected={isSelected(option)}
                    >
                      {/* Highlight indicator */}
                      {highlightedIndex.value === index && (
                        <div
                          class="absolute left-0 top-[10%] bottom-[10%] w-0.5 highlighted-indicator"
                          style={themeStyles.value.indicator}
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
                                highlightedIndex.value !== index && 'text-gray-500',
                              ]}
                              style={highlightedIndex.value === index ? themeStyles.value.iconColor : {}}
                            />
                          ) : option.avatar ? (
                            <img
                              src={option.avatar}
                              alt={option.name}
                              class={[
                                'w-7 h-7 rounded-full object-cover shadow-sm ring-2',
                                'transition-all duration-200',
                                'group-hover/item:scale-105',
                                highlightedIndex.value !== index && 'ring-white',
                              ]}
                              style={highlightedIndex.value === index ? {
                                '--tw-ring-color': themeStyles.value.avatarRing.borderColor,
                              } as any : {}}
                            />
                          ) : null}
                          {/* Selection indicator for icon-only options */}
                          {isSelected(option) && !option.name && (
                            <div
                              class="absolute -right-0.5 -bottom-0.5 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-sm ring-1"
                              style={{ '--tw-ring-color': themeStyles.value.ringColor } as any}
                            >
                              <i 
                                class="icon-[material-symbols--check-rounded] w-3 h-3" 
                                style={themeStyles.value.iconColor}
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
                              class="block truncate text-xs text-gray-400 transition-colors duration-200 group-hover/item:text-gray-500"
                            >
                              {option.description}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Check icon with animation (only for options with name) */}
                      {isSelected(option) && option.name && (
                        <i
                          class="icon-[material-symbols--check-rounded] opacity-0 scale-50 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:scale-100"
                          style={themeStyles.value.iconColor}
                        />
                      )}
                    </li>
                  ))}
                </ul>

                {/* Bottom shadow */}
                <div
                  class="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none z-10 rounded-b-xl"
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
