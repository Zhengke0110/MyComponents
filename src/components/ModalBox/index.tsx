import { computed, defineComponent, ref, Teleport, Transition, watch } from 'vue';

export interface ModalBoxProps {
  modelValue: boolean;
  closeOnClickOverlay?: boolean;
  fullscreen?: boolean;
  contentClass?: string;
}

export default defineComponent({
  name: 'ModalBox',
  props: {
    modelValue: { type: Boolean, required: true },
    closeOnClickOverlay: { type: Boolean, default: true },
    fullscreen: { type: Boolean, default: false },
    contentClass: { type: String, default: '' }
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
              class="fixed inset-0 bg-black/75 flex items-center justify-center z-[1000] backdrop-blur-sm"
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
                      ? 'w-screen h-screen'  // 修改这里：全屏时使用视窗宽高
                      : 'w-auto h-auto max-w-[90vw] max-h-[90vh]'
                  ]}
                >
                  <button
                    class={[
                      'absolute transition-all duration-300 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer group z-50',
                      isFullscreen.value
                        ? 'top-4 right-4 bg-black/20 hover:bg-black/30'
                        : '-top-10 -right-10 bg-white/20 hover:bg-white/30'
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
