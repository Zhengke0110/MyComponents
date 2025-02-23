import { defineComponent, PropType, StyleValue, Transition } from 'vue';
import { usePopover, type PlacementType } from '../../lib/Popover';
import './styles.css'; // 引入外部样式文件

export default defineComponent({
  name: 'Popover',
  props: {
    placement: {
      type: String as PropType<PlacementType>,
      default: 'bottom',
    },
    offset: { type: Number, default: 8 },
    delay: { type: Number, default: 300 },
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
    },
    arrow: { type: Boolean, default: false },
    customClass: { type: String, default: '' },
    contentClass: { type: String, default: '' },
    closeOnContentClick: { type: Boolean, default: false },
    showDelay: { type: Number, default: 0 },
    hideDelay: { type: Number, default: 300 },
    persistent: { type: Boolean, default: false },
  },
  emits: ['show', 'hide'],
  setup(props, { slots, emit }) {
    const {
      containerRef,
      triggerRef,
      popoverRef,
      isVisible,
      getArrowPositionClass,
      getAnimationClass,
      popoverStyle,
    } = usePopover(props, (event) => emit(event));

    return () => (
      <div ref={containerRef} class="relative inline-block">
        <div ref={triggerRef} class="inline-block">
          {slots.reference?.()}
        </div>
        <Transition
          enterActiveClass={`transform-gpu transition-all duration-300 ease-out ${getAnimationClass.value}`}
          leaveActiveClass="transform-gpu transition-all duration-200 ease-in-back"
          enterFromClass="opacity-0 scale-95 blur-sm"
          leaveToClass="opacity-0 scale-95 blur-sm"
        >
          {isVisible.value && (
            <div
              ref={popoverRef}
              class={[
                'absolute z-50',
                'backdrop-blur-lg',
                'border border-gray-200/50 dark:border-zinc-700/50',
                'shadow-lg shadow-gray-200/20 dark:shadow-zinc-900/30',
                'rounded-xl',
                'transform-gpu',
                'popover-animate',
                props.customClass, // 移到默认背景色之前
                'bg-white/90 dark:bg-zinc-800/90', // 移到最后，允许被自定义类覆盖
              ].filter(Boolean)}
              style={popoverStyle.value as StyleValue}
            >
              <div class={['p-2', props.contentClass].filter(Boolean)}>
                {slots.default?.()}
              </div>
              {props.arrow && (
                <div
                  class={[
                    'absolute w-4 h-4 rotate-45 border',
                    'bg-inherit', // 移动到最后，继承父元素的背景色
                    getArrowPositionClass.value,
                  ]}
                />
              )}
            </div>
          )}
        </Transition>
      </div>
    );
  },
});
