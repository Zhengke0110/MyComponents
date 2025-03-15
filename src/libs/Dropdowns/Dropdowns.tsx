import { defineComponent, computed, ref, watch, nextTick, PropType } from 'vue';
import { useEventListener, onClickOutside } from "@vueuse/core";
import type { DropdownItem } from './types';
import type { ColorType } from './constant'; 
import { THEME_BUTTON_CLASSES } from './constant'; 

export default defineComponent({
  name: 'Dropdowns',
  props: {
    label: { type: String, required: true },
    items: { type: Array as PropType<DropdownItem[]>, required: true },
    size: { type: String as PropType<'sm' | 'md' | 'lg'>, default: 'md' },
    theme: { type: String as PropType<ColorType>, default: 'gray' },
    variant: { type: String as PropType<'solid' | 'outline'>, default: 'solid' },
    buttonClass: { type: String, default: '' },
    autoAdjust: { type: Boolean, default: true },
  },
  emits: ['select', 'open', 'close'],

  setup(props, { emit }) {
    const containerRef = ref<HTMLElement | null>(null);
    const dropdownRef = ref<HTMLElement | null>(null);
    const isOpen = ref(false);
    const currentFocus = ref(-1);

    // 基础样式类
    const buttonBaseClass = computed(() => ({
      sm: 'px-2.5 py-1.5 text-sm',
      md: 'px-3 py-2',
      lg: 'px-4 py-2.5 text-lg',
    }[props.size]));

    // 使用映射表获取按钮主题样式
    const buttonThemeClass = computed(() => {
      const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200';
      const theme = props.theme as ColorType;
      const variant = props.variant;
      
      // 使用映射表获取颜色类
      const colorClasses = THEME_BUTTON_CLASSES[theme] 
        ? `${THEME_BUTTON_CLASSES[theme][variant]} ${THEME_BUTTON_CLASSES[theme].hover}`
        : variant === 'outline' 
          ? 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
          : 'bg-gray-500 dark:bg-gray-600 text-white hover:bg-gray-600 dark:hover:bg-gray-700';
      
      return `${baseClasses} ${buttonBaseClass.value} ${colorClasses} ${props.buttonClass}`;
    });

    // 下拉菜单样式
    const dropdownClass = computed(() => [
      'absolute z-50 w-56 mt-2 origin-top-left rounded-lg shadow-lg',
      'bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/10',
      'transition-all duration-200 ease-out transform',
      isOpen.value ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
    ]);

    // 菜单项样式
    const getItemClass = (item: DropdownItem, index: number) => {
      if (item.type === 'divider') return 'h-px my-1 bg-gray-200 dark:bg-gray-700';

      const baseClass = 'group flex items-center w-full px-4 py-2 text-sm transition-colors duration-150';
      
      // 处理危险操作样式
      const dangerClass = item.danger 
        ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
        : '';
        
      const stateClass = item.disabled
        ? 'cursor-not-allowed opacity-50'
        : currentFocus.value === index
          ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
          : `text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 ${dangerClass}`;
      
      return `${baseClass} ${stateClass}`;
    };

    // 安全区域自动调整
    const updateDropdownPosition = () => {
      if (!props.autoAdjust || !dropdownRef.value || !containerRef.value) return;
      
      nextTick(() => {
        const dropdown = dropdownRef.value as HTMLElement;
        const container = containerRef.value as HTMLElement;
        const rect = container.getBoundingClientRect();
        
        // 计算可用空间
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const spaceRight = viewportWidth - rect.right;
        const spaceBottom = viewportHeight - rect.bottom;
        
        // 水平调整
        if (spaceRight < 200 && rect.left > spaceRight) {
          dropdown.style.left = 'auto';
          dropdown.style.right = '0';
        } else {
          dropdown.style.left = '0';
          dropdown.style.right = 'auto';
        }
        
        // 垂直调整
        if (spaceBottom < 300) {
          dropdown.style.maxHeight = `${spaceBottom - 20}px`;
          dropdown.classList.add('overflow-y-auto');
        }
      });
    };

    const toggle = () => {
      isOpen.value ? close() : open();
    };

    const open = () => {
      isOpen.value = true;
      updateDropdownPosition();
      emit('open');
    };

    const close = () => {
      isOpen.value = false;
      currentFocus.value = -1;
      emit('close');
    };

    const handleSelect = (item: DropdownItem) => {
      if (item.disabled || item.type === 'divider') return;
      
      if (item.onClick) {
        item.onClick();
      }
      
      emit('select', item);
      close();
    };

    // 处理链接类型项目
    const renderItem = (item: DropdownItem, index: number) => {
      if (item.type === 'divider') {
        return <div key={item.id} class={getItemClass(item, index)} role="separator" />;
      }
      
      // 添加危险图标样式
      const iconClass = item.danger 
        ? `${item.icon} size-5 mr-3 text-red-500 dark:text-red-400`
        : `${item.icon} size-5 mr-3 text-gray-400 dark:text-gray-500`;
      
      if (item.type === 'link' && item.href) {
        return (
          <a
            key={item.id}
            href={item.href}
            class={getItemClass(item, index)}
            onClick={(e) => !item.disabled && handleSelect(item)}
          >
            {item.icon && (
              <i class={iconClass} />
            )}
            <span>{item.label}</span>
          </a>
        );
      }
      
      return (
        <button
          key={item.id}
          class={getItemClass(item, index)}
          disabled={item.disabled}
          onClick={() => handleSelect(item)}
        >
          {item.icon && (
            <i class={iconClass} />
          )}
          <span>{item.label}</span>
        </button>
      );
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

    // 监视窗口大小变化
    useEventListener('resize', updateDropdownPosition);

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
            <i class="icon-[material-symbols--keyboard-arrow-down-rounded] size-8 align-middle" />
          </span>
        </button>

        <div ref={dropdownRef} class={dropdownClass.value}>
          <div class="py-1">
            {props.items.map((item, index) => renderItem(item, index))}
          </div>
        </div>
      </div>
    );
  }
});
