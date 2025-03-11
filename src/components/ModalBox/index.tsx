import { computed, defineComponent, ref, Teleport, Transition, watch, PropType } from 'vue';
// 所有可用的颜色类型
export type ColorType =
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系

// 常用的主题色类型 (用于简化部分组件的类型定义)
export type ThemeColorType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

// 主题色对应的实际颜色
export const THEME_COLOR_MAP: Record<ThemeColorType, ColorType> = {
  primary: 'indigo',
  secondary: 'gray',
  success: 'green',
  warning: 'yellow',
  danger: 'red',
  info: 'blue'
};


export interface ModalBoxProps {
  modelValue: boolean;
  closeOnClickOverlay?: boolean;
  fullscreen?: boolean;
  contentClass?: string;
  theme?: ColorType | ThemeColorType; // 主题属性
}

export default defineComponent({
  name: 'ModalBox',
  props: {
    modelValue: { type: Boolean, required: true },
    closeOnClickOverlay: { type: Boolean, default: true },
    fullscreen: { type: Boolean, default: false },
    contentClass: { type: String, default: '' },
    theme: {
      type: String as PropType<ModalBoxProps['theme']>,
      default: 'gray',
      validator: (value: string) => {
        // 验证主题是否是有效的 ColorType 或 ThemeColorType
        const validColors: string[] = [
          // 灰色系
          'slate', 'gray', 'zinc', 'neutral', 'stone',
          // 暖色系
          'red', 'orange', 'amber', 'yellow',
          // 绿色系
          'lime', 'green', 'emerald', 'teal',
          // 蓝色系
          'cyan', 'sky', 'blue', 'indigo',
          // 紫粉色系
          'violet', 'purple', 'fuchsia', 'pink', 'rose',
          // 主题色
          'primary', 'secondary', 'success', 'warning', 'danger', 'info'
        ];
        return validColors.includes(value);
      }
    }
  },
  emits: ['update:modelValue', 'close'],
  setup(props, { emit, slots }) {
    const isFullscreen = ref(props.fullscreen);

    watch(
      () => props.fullscreen,
      (newVal) => {
        isFullscreen.value = newVal;
      }
    );

    // 计算实际的颜色值
    const actualColor = computed(() => {
      const theme = props.theme || 'gray';
      // 如果是主题色类型，则从映射表中获取真实颜色
      if (theme in THEME_COLOR_MAP) {
        return THEME_COLOR_MAP[theme as ThemeColorType];
      }
      // 否则直接使用颜色值
      return theme as ColorType;
    });

    const themeClasses = computed(() => {
      const color = actualColor.value;
      return {
        overlay: `bg-${color}-900/75`,
        closeButtonFullscreen: `bg-${color}-800/30 hover:bg-${color}-800/40`,
        closeButtonNormal: `bg-${color}-200/30 hover:bg-${color}-200/40`
      };
    });

    const transitionClasses = computed(() =>
      isFullscreen.value
        ? {
          enterActive: 'transition-all duration-500 ease-in-out',
          leaveActive: 'transition-all duration-500 ease-in-out',
          enterFrom: 'opacity-0 scale-50',
          leaveTo: 'opacity-0 scale-110',
        }
        : {
          enterActive: 'transition-all duration-300 ease-out',
          leaveActive: 'transition-all duration-300 ease-out',
          enterFrom: 'opacity-0 scale-95',
          leaveTo: 'opacity-0 scale-95',
        }
    );

    const handleClose = () => {
      emit('update:modelValue', false);
      emit('close');
    };

    const handleOverlayClick = (event: MouseEvent) => {
      if (props.closeOnClickOverlay && event.target === event.currentTarget) {
        handleClose();
      }
    };

    return () => (
      <Teleport to="body">
        <Transition
          enterActiveClass="transition-all duration-300"
          leaveActiveClass="transition-all duration-300"
          enterFromClass="opacity-0"
          leaveToClass="opacity-0"
        >
          {props.modelValue && (
            <div
              class={[
                "fixed inset-0 flex items-center justify-center z-[1000] backdrop-blur-sm",
                themeClasses.value.overlay
              ]}
              onClick={handleOverlayClick}
            >
              <Transition
                enterActiveClass={transitionClasses.value.enterActive}
                leaveActiveClass={transitionClasses.value.leaveActive}
                enterFromClass={transitionClasses.value.enterFrom}
                leaveToClass={transitionClasses.value.leaveTo}
                mode="out-in"
              >
                <div
                  class={[
                    'relative bg-transparent rounded-lg',
                    props.contentClass,
                    isFullscreen.value
                      ? 'w-screen h-screen'
                      : 'w-auto h-auto max-w-[90vw] max-h-[90vh]'
                  ]}
                >
                  <button
                    class={[
                      'absolute transition-all duration-300 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer group z-50',
                      isFullscreen.value
                        ? `top-4 right-4 ${themeClasses.value.closeButtonFullscreen}`
                        : `-top-10 -right-10 ${themeClasses.value.closeButtonNormal}`
                    ]}
                    onClick={handleClose}
                  >
                    <div class="relative w-4 h-4">
                      <div class={`
                        absolute top-1/2 left-0 w-full h-0.5 bg-white transform
                        transition-transform duration-200
                        group-hover:scale-x-110
                        rotate-45
                      `}></div>
                      <div class={`
                        absolute top-1/2 left-0 w-full h-0.5 bg-white transform
                        transition-transform duration-200
                        group-hover:scale-x-110
                        -rotate-45
                      `}></div>
                    </div>
                  </button>
                  {slots.default?.()}
                </div>
              </Transition>
            </div>
          )}
        </Transition>
      </Teleport>
    );
  }
});
