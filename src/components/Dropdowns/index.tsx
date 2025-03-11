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
import { DROPDOWN_CONFIGS, THEME_BUTTON_CLASSES, ColorType } from './constant';

const Dropdowns = defineComponent({
  name: 'Dropdowns',
  props: {
    label: { type: String, required: true },
    items: { type: Array as PropType<DropdownItem[]>, required: true },
    buttonClass: { type: String, default: '' },
    iconClass: { type: String, default: '' },
    triggerIcon: { type: String, default: '' },
    size: { type: String as PropType<DropdownProps['size']>, default: 'md' },
    // 默认和唯一的弹出位置是底部
    placement: { type: String as PropType<DropdownProps['placement']>, default: 'bottom' },
    theme: { type: String as PropType<ColorType>, default: undefined },
    variant: { type: String as PropType<'solid' | 'outline'>, default: 'solid' },
    dark: { type: Boolean, default: false },
    autoAdjust: { type: Boolean, default: true }, // 自动调整位置开关
  },
  emits: ['select', 'open', 'close'],

  setup(props, { emit }) {
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

    // 安全边距
    const SAFE_PADDING = 16; // 距离窗口边缘的安全距离

    // Click outside handling
    onClickOutside(containerRef, () => {
      if (isOpen.value) close();
    });

    // 根据主题计算按钮样式
    const buttonThemeClasses = computed(() => {
      if (!props.theme) return '';

      const themeConfig = THEME_BUTTON_CLASSES[props.theme];
      const mode = props.dark ? 'dark' : 'light';
      const variant = props.variant === 'outline' ? 'outline' : 'solid';

      if (mode === 'dark') {
        return `${themeConfig.dark[variant]} ${themeConfig.dark.hover} ${themeConfig.dark.focusRing}`;
      } else {
        return `${themeConfig[variant]} ${themeConfig.hover} ${themeConfig.focusRing}`;
      }
    });

    // 计算按钮类名
    const buttonClasses = computed(() => {
      if (props.buttonClass) return props.buttonClass;

      return props.theme
        ? buttonThemeClasses.value
        : `${props.dark ? 'bg-gray-700 text-gray-100 ring-1 ring-gray-600 hover:bg-gray-600' : 'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'}`;
    });

    // 计算下拉菜单背景颜色
    const dropdownBgClass = computed(() => {
      return props.dark ? 'bg-gray-800 ring-gray-700' : 'bg-white ring-black/5';
    });

    // 简化后的下拉菜单位置计算 - 只考虑底部弹出
    const dropdownStyle = computed(() => {
      if (!isOpen.value) return { display: 'none' };

      // 基本样式 (底部弹出)
      return {
        position: 'absolute' as const,
        top: '100%',
        left: '0',
        marginTop: '0.5rem',
        minWidth: '100%',
        zIndex: 50,
        transformOrigin: 'top left'
      };
    });

    // 重新实现安全区域调整 - 只考虑底部弹出的情况
    const adjustDropdownPosition = () => {
      if (!props.autoAdjust || !dropdownRef.value || !containerRef.value) return;

      // 获取必要的元素尺寸和位置
      const dropdown = dropdownRef.value.getBoundingClientRect();
      const container = containerRef.value.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // 计算水平方向溢出
      const overflowRight = container.left + dropdown.width > viewportWidth - SAFE_PADDING;

      // 处理水平方向溢出 - 向左对齐
      if (overflowRight) {
        dropdownRef.value.style.left = 'auto';
        dropdownRef.value.style.right = '0';
      } else {
        // 重置样式，确保不受先前调整的影响
        dropdownRef.value.style.left = '0';
        dropdownRef.value.style.right = 'auto';
      }

      // 处理垂直方向溢出 - 最大高度调整
      const bottomSpace = viewportHeight - container.bottom - SAFE_PADDING;
      const maxHeight = dropdown.height > bottomSpace ? bottomSpace : 'none';

      if (dropdown.height > bottomSpace) {
        dropdownRef.value.style.maxHeight = `${bottomSpace}px`;
        dropdownRef.value.style.overflowY = 'auto';
      } else {
        // 重置垂直方向样式
        dropdownRef.value.style.maxHeight = '';
        dropdownRef.value.style.overflowY = '';
      }
    };

    // Methods
    const open = () => {
      isOpen.value = true;
      currentFocus.value = props.items.findIndex(
        (item) => item.type !== "divider" && !item.disabled
      );

      nextTick(() => {
        if (props.autoAdjust) {
          adjustDropdownPosition();
        }
      });

      emit("open");
    };

    const close = () => {
      isOpen.value = false;
      currentFocus.value = -1;
      emit("close");
    };

    // 监视窗口变化，重新计算位置
    watch(
      [windowWidth, windowHeight, scrollX, scrollY, isOpen],
      () => {
        if (isOpen.value && props.autoAdjust) {
          nextTick(() => {
            adjustDropdownPosition();
          });
        }
      },
      { immediate: false }
    );

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
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            DROPDOWN_CONFIGS.sizeClasses[props.size as keyof typeof DROPDOWN_CONFIGS.sizeClasses],
            buttonClasses.value,
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
            isOpen.value ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none',
          ]}
          data-placement="bottom"
        >
          <div class={`overflow-hidden rounded-lg shadow-lg ring-1 ${dropdownBgClass.value}`}>
            <div class="py-1">
              {props.items.map((item, index) => {
                if (item.type === 'divider') {
                  return (
                    <div
                      key={item.id}
                      class={props.dark ? "my-1 h-px bg-gray-700" : "my-1 h-px bg-gray-200"}
                      role="separator"
                    />
                  );
                }

                const baseItemClass = props.dark
                  ? 'text-gray-300 hover:bg-gray-700 focus:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-50 focus:bg-gray-50';

                const dangerClass = item.danger && !item.disabled
                  ? props.dark
                    ? 'text-red-400 hover:text-red-300 hover:bg-red-900/30'
                    : 'text-red-600 hover:text-red-700 hover:bg-red-50'
                  : '';

                const itemProps = {
                  key: item.id,
                  href: item.type === 'link' ? item.href : undefined,
                  class: [
                    'group relative flex w-full items-center px-4 py-2',
                    DROPDOWN_CONFIGS.itemSizeClasses[props.size as keyof typeof DROPDOWN_CONFIGS.itemSizeClasses],
                    'transition-all duration-200',
                    'focus:outline-none',
                    currentFocus.value === index
                      ? props.dark ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'
                      : baseItemClass,
                    item.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
                    dangerClass,
                  ],
                  onClick: () => !item.disabled && handleItemClick(item),
                  onMouseover: () => !item.disabled && (currentFocus.value = index),
                  disabled: item.disabled,
                  tabindex: isOpen.value && !item.disabled ? 0 : -1,
                  role: item.type === 'link' ? 'menuitem' : 'button',
                };

                const content = (
                  <>
                    <span class="flex items-center gap-2 truncate">
                      {item.icon && (
                        <i class={[
                          item.icon,
                          DROPDOWN_CONFIGS.iconSizeClasses.item[props.size as keyof typeof DROPDOWN_CONFIGS.iconSizeClasses.item],
                          item.iconClass || (props.dark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-400 group-hover:text-gray-500'),
                        ]} />
                      )}
                      <span>{item.label}</span>
                    </span>
                    {item.endIcon && (
                      <i class={[
                        item.endIcon,
                        DROPDOWN_CONFIGS.iconSizeClasses.item[props.size as keyof typeof DROPDOWN_CONFIGS.iconSizeClasses.item],
                        'ml-auto',
                        item.iconClass || (props.dark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-400 group-hover:text-gray-500'),
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
