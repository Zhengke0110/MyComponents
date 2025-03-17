import { defineComponent, computed, PropType, Transition } from 'vue';
import type { ColorType, ThemeColorType, ModalBoxProps } from './types';
import { THEME_COLOR_MAP } from './constant';

export { ColorType, ThemeColorType, THEME_COLOR_MAP, type ModalBoxProps };

export default defineComponent({
  name: 'ModalBox',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    theme: {
      type: String as PropType<ColorType | ThemeColorType>,
      default: 'primary',
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    contentClass: {
      type: String,
      default: '',
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    transitionDuration: {
      type: Number,
      default: 200,
    },
  } as const,
  emits: ['update:modelValue', 'open', 'close'],

  setup(props: ModalBoxProps, { emit, slots }) {
    const isVisible = computed(() => props.modelValue);

    // 计算动画持续时间的样式
    const transitionStyle = computed(() => ({
      '--transition-duration': `${props.transitionDuration || 200}ms`,
    }));

    const modalClass = computed(() => [
      'relative transform-gpu',
      props.fullscreen ? 'w-screen h-screen' : 'max-w-3xl mx-auto',
      props.contentClass,
    ]);

    const handleOverlayClick = () => {
      if (props.closeOnClickOverlay) {
        emit('update:modelValue', false);
        emit('close');
      }
    };

    // 显示时触发 open 事件
    const handleAfterEnter = () => {
      emit('open');
    };

    // 根据模式选择不同的遮罩层样式
    const overlayClass = computed(() => {
      // 全屏模式使用实色背景，非全屏模式使用半透明背景
      return props.fullscreen 
        ? 'bg-white dark:bg-gray-900' // 全屏模式使用浅色/深色实色背景
        : 'bg-black/60 dark:bg-black/70'; // 普通模式使用黑色半透明遮罩
    });

    return () => (
      <Transition
        enterActiveClass="transition-opacity duration-300 ease-out"
        enterFromClass="opacity-0"
        enterToClass="opacity-100"
        leaveActiveClass="transition-opacity duration-200 ease-in"
        leaveFromClass="opacity-100"
        leaveToClass="opacity-0"
        onAfterEnter={handleAfterEnter}
      >
        {isVisible.value && (
          <div class="fixed inset-0 z-50 overflow-auto" style={transitionStyle.value}>
            {/* 背景遮罩 - 根据全屏模式使用不同的样式 */}
            <div
              class={['fixed inset-0 z-0', overlayClass.value]}
              onClick={handleOverlayClick}
            />

            {/* 模态框容器 */}
            <div class="fixed inset-0 z-10 overflow-hidden">
              <div class={`flex min-h-full items-center justify-center ${!props.fullscreen ? 'p-4' : ''}`}>
                <Transition
                  enterActiveClass="transform-gpu transition-all ease-out"
                  enterFromClass="opacity-0 scale-95 blur-[1px]"
                  enterToClass="opacity-100 scale-100 blur-0"
                  leaveActiveClass="transform-gpu transition-all ease-in"
                  leaveFromClass="opacity-100 scale-100 blur-0"
                  leaveToClass="opacity-0 scale-95 blur-[1px]"
                >
                  {isVisible.value && (
                    <div 
                      class={modalClass.value} 
                      style={{
                        transitionDuration: `${props.transitionDuration || 200}ms`,
                      }}
                    >
                      {slots.default?.()}
                    </div>
                  )}
                </Transition>
              </div>
            </div>
          </div>
        )}
      </Transition>
    );
  },
});
