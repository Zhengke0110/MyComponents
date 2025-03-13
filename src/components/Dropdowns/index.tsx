import { defineComponent, computed, ref, watch, nextTick, PropType } from 'vue';
import { useEventListener, onClickOutside } from "@vueuse/core";
import type { DropdownItem } from './types';
import {ColorType} from './constant'
export { DropdownItem , type ColorType} 
export default defineComponent({
  name: 'Dropdowns',
  props: {
    label: { type: String, required: true },
    items: { type: Array as PropType<DropdownItem[]>, required: true },
    size: { type: String as PropType<'sm' | 'md' | 'lg'>, default: 'md' },
    theme: { type: String as PropType<string>, default: 'gray' },
    variant: { type: String as PropType<'solid' | 'outline'>, default: 'solid' },
  },
  emits: ['select', 'open', 'close'],

  setup(props, { emit }) {
    const containerRef = ref<HTMLElement | null>(null);
    const isOpen = ref(false);
    const currentFocus = ref(-1);

    // 基础样式类
    const buttonBaseClass = computed(() => ({
      sm: 'px-2.5 py-1.5 text-sm',
      md: 'px-3 py-2',
      lg: 'px-4 py-2.5 text-lg',
    }[props.size]));

    // 按钮主题样式
    const buttonThemeClass = computed(() => {
      const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200';
      const themeClasses = props.variant === 'outline'
        ? `bg-white dark:bg-gray-800 text-${props.theme}-600 dark:text-${props.theme}-400 border border-${props.theme}-200 dark:border-${props.theme}-700 hover:bg-${props.theme}-50 dark:hover:bg-${props.theme}-900/30`
        : `bg-${props.theme}-500 dark:bg-${props.theme}-600 text-white hover:bg-${props.theme}-600 dark:hover:bg-${props.theme}-700`;
      
      return `${baseClasses} ${buttonBaseClass.value} ${themeClasses}`;
    });

    // 下拉菜单样式
    const dropdownClass = computed(() => [
      'absolute z-50 w-56 mt-2 origin-top-left rounded-lg shadow-lg',
      'bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/10',
      isOpen.value ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95 pointer-events-none'
    ]);

    // 菜单项样式
    const getItemClass = (item: DropdownItem, index: number) => {
      if (item.type === 'divider') return 'h-px my-1 bg-gray-200 dark:bg-gray-700';

      const baseClass = 'group flex items-center w-full px-4 py-2 text-sm transition-colors duration-150';
      const stateClass = item.disabled
        ? 'cursor-not-allowed opacity-50'
        : currentFocus.value === index
          ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50';
      
      return `${baseClass} ${stateClass}`;
    };

    const toggle = () => {
      isOpen.value ? close() : open();
    };

    const open = () => {
      isOpen.value = true;
      emit('open');
    };

    const close = () => {
      isOpen.value = false;
      currentFocus.value = -1;
      emit('close');
    };

    const handleSelect = (item: DropdownItem) => {
      if (item.disabled || item.type === 'divider') return;
      emit('select', item);
      close();
    };

    // 事件监听器
    onClickOutside(containerRef, close);

    useEventListener('keydown', (e: KeyboardEvent) => {
      if (!isOpen.value) return;

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          close();
          break;
        case 'ArrowDown':
          e.preventDefault();
          currentFocus.value = (currentFocus.value + 1) % props.items.length;
          break;
        case 'ArrowUp':
          e.preventDefault();
          currentFocus.value = (currentFocus.value - 1 + props.items.length) % props.items.length;
          break;
        case 'Enter':
          e.preventDefault();
          if (currentFocus.value >= 0) {
            const item = props.items[currentFocus.value];
            handleSelect(item);
          }
          break;
      }
    });

    return () => (
      <div ref={containerRef} class="relative inline-block text-left">
        <button
          type="button"
          class={buttonThemeClass.value}
          onClick={toggle}
          aria-haspopup="true"
          aria-expanded={isOpen.value}
        >
          {props.label}
          <span class={`transition-transform duration-200 ${isOpen.value ? 'rotate-180' : ''}`}>
            <i class="i-heroicons-chevron-down-20-solid size-5" />
          </span>
        </button>

        <div class={dropdownClass.value}>
          <div class="py-1">
            {props.items.map((item, index) => (
              item.type === 'divider' ? (
                <div key={item.id} class={getItemClass(item, index)} role="separator" />
              ) : (
                <button
                  key={item.id}
                  class={getItemClass(item, index)}
                  disabled={item.disabled}
                  onClick={() => handleSelect(item)}
                >
                  {item.icon && (
                    <i class={`${item.icon} size-5 mr-3 text-gray-400 dark:text-gray-500`} />
                  )}
                  <span>{item.label}</span>
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    );
  }
});
