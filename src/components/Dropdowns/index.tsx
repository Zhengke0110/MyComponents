import { defineComponent, computed, ref, watch, nextTick, PropType, h, TransitionGroup, Fragment } from 'vue';
import {
  useEventListener,
  onClickOutside,
  useWindowSize,
  useElementBounding,
  useWindowScroll,
  useFocus,
  useDocumentVisibility,
} from "@vueuse/core";
import type { DropdownItem, DropdownProps } from './constant';
import { DROPDOWN_CONFIGS } from './constant';

const Dropdowns = defineComponent({
  name: 'Dropdowns',
  props: {
    label: { type: String, required: true },
    items: { type: Array as PropType<DropdownItem[]>, required: true },
    buttonClass: { type: String, default: '' },
    iconClass: { type: String, default: '' },
    triggerIcon: { type: String, default: '' },
    size: { type: String as PropType<DropdownProps['size']>, default: 'md' },
    placement: { type: String as PropType<DropdownProps['placement']>, default: 'bottom' },
  },
  emits: ['select', 'open', 'close'],
  
  setup(props, { emit }) {
    // ...existing refs code from Dropdowns.vue...
    const containerRef = ref<HTMLElement | null>(null);
    const triggerRef = ref<HTMLElement | null>(null);
    const dropdownRef = ref<HTMLElement | null>(null);
    const isOpen = ref(false);
    const currentFocus = ref(-1);

    // VueUse hooks
    const { width: windowWidth, height: windowHeight } = useWindowSize();
    const triggerBounds = useElementBounding(triggerRef);
    const dropdownBounds = useElementBounding(dropdownRef);
    const { x: scrollX, y: scrollY } = useWindowScroll();
    const { focused } = useFocus(triggerRef, { initialValue: false });
    const visibility = useDocumentVisibility();

    // Click outside handling
    onClickOutside(containerRef, () => {
      if (isOpen.value) close();
    });

    // ...existing computed and methods code from Dropdowns.vue...
    const dropdownStyle = computed(() => {
      if (!isOpen.value) return { display: 'none' };
      
      return {
        position: 'absolute' as const,
        top: '100%',
        left: '0',
        marginTop: '0.5rem',
        minWidth: '100%',
        zIndex: 50
      };
    });

    // Methods
    const open = () => {
      isOpen.value = true;
      currentFocus.value = props.items.findIndex(
        (item) => item.type !== "divider" && !item.disabled
      );
      emit("open");
    };

    const close = () => {
      isOpen.value = false;
      currentFocus.value = -1;
      emit("close");
    };

    const toggle = () => {
      isOpen.value ? close() : open();
    };

    const navigateItems = (direction: number) => {
      const enabledItems = props.items.reduce<number[]>((acc, item, index) => {
        if (item.type !== "divider" && !item.disabled) {
          acc.push(index);
        }
        return acc;
      }, []);

      if (enabledItems.length === 0) return;

      const currentIndex = enabledItems.indexOf(currentFocus.value);
      const nextIndex =
        currentIndex === -1
          ? 0
          : (currentIndex + direction + enabledItems.length) % enabledItems.length;

      currentFocus.value = enabledItems[nextIndex];
    };

    const handleItemClick = (item: DropdownItem) => {
      if (item.disabled) return;
      if (item.onClick) item.onClick();
      emit("select", item);
      close();
    };

    // Event handlers and watchers
    useEventListener(containerRef, "keydown", (e: KeyboardEvent) => {
      if (!isOpen.value) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          navigateItems(1);
          break;
        case "ArrowUp":
          e.preventDefault();
          navigateItems(-1);
          break;
        case "Enter":
          e.preventDefault();
          if (currentFocus.value >= 0) {
            const item = props.items[currentFocus.value];
            if (item && !item.disabled) {
              handleItemClick(item);
            }
          }
          break;
        case "Escape":
          e.preventDefault();
          close();
          break;
      }
    });

    watch([scrollX, scrollY, windowWidth, windowHeight], () => {
      if (isOpen.value) {
        nextTick(() => {
          const style = dropdownStyle.value;
          if (dropdownRef.value) {
            Object.assign(dropdownRef.value.style, style);
          }
        });
      }
    });

    // Render function
    return () => (
      <div ref={containerRef} class="relative inline-block text-left">
        <button
          ref={triggerRef}
          type="button"
          class={[
            'inline-flex items-center justify-center gap-x-2 rounded-md font-medium',
            'transition-all duration-200 ease-out',
            'focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2',
            DROPDOWN_CONFIGS.sizeClasses[props.size as keyof typeof DROPDOWN_CONFIGS.sizeClasses],
            props.buttonClass ||
              'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
          ]}
          onClick={toggle}
          aria-haspopup="true"
          aria-expanded={isOpen.value}
        >
          {props.triggerIcon && (
            <i class={[props.triggerIcon, DROPDOWN_CONFIGS.iconSizeClasses.trigger[props.size as keyof typeof DROPDOWN_CONFIGS.iconSizeClasses.trigger]]} />
          )}
          {props.label}
          <i
            class={[
              props.iconClass || 'i-tabler-chevron-down',
              DROPDOWN_CONFIGS.iconSizeClasses.trigger[props.size as keyof typeof DROPDOWN_CONFIGS.iconSizeClasses.trigger],
              isOpen.value ? 'rotate-180' : '',
              'transform transition-transform duration-300 ease-out',
            ]}
          />
        </button>

        <div
          ref={dropdownRef}
          style={dropdownStyle.value}
          class={[
            'origin-top-right transition-all duration-200',
            DROPDOWN_CONFIGS.dropdownSizeClasses[props.size as keyof typeof DROPDOWN_CONFIGS.dropdownSizeClasses],
          ]}
        >
          <div class="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5">
            <div class="py-1">
              {props.items.map((item, index) => {
                if (item.type === 'divider') {
                  return (
                    <div
                      key={item.id}
                      class="my-1 h-px bg-gray-200"
                      role="separator"
                    />
                  );
                }

                const itemProps = {
                  key: item.id,
                  href: item.type === 'link' ? item.href : undefined,
                  class: [
                    'group relative flex w-full items-center px-4 py-2',
                    DROPDOWN_CONFIGS.itemSizeClasses[props.size as keyof typeof DROPDOWN_CONFIGS.itemSizeClasses],
                    'transition-all duration-200',
                    'focus:outline-none focus:bg-gray-50',
                    currentFocus.value === index ? 'bg-gray-50 text-gray-900' : 'text-gray-700',
                    item.disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50 active:bg-gray-100',
                    item.danger && !item.disabled ? 'text-red-600 hover:text-red-700 hover:bg-red-50' : '',
                  ],
                  onClick: () => !item.disabled && handleItemClick(item),
                  onMouseover: () => !item.disabled && (currentFocus.value = index),
                  disabled: item.disabled,
                  tabindex: isOpen.value && !item.disabled ? 0 : -1,
                };

                const content = (
                  <>
                    <span class="flex items-center gap-2 truncate">
                      {item.icon && (
                        <i class={[
                          item.icon,
                          DROPDOWN_CONFIGS.iconSizeClasses.item[props.size as keyof typeof DROPDOWN_CONFIGS.iconSizeClasses.item],
                          item.iconClass || 'text-gray-400 group-hover:text-gray-500',
                        ]} />
                      )}
                      <span>{item.label}</span>
                    </span>
                    {item.endIcon && (
                      <i class={[
                        item.endIcon,
                        DROPDOWN_CONFIGS.iconSizeClasses.item[props.size as keyof typeof DROPDOWN_CONFIGS.iconSizeClasses.item],
                        'ml-auto',
                        item.iconClass || 'text-gray-400 group-hover:text-gray-500',
                      ]} />
                    )}
                  </>
                );

                return item.type === 'button'
                  ? <button {...itemProps}>{content}</button>
                  : <a {...itemProps}>{content}</a>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default Dropdowns;
export * from './constant';
