import { defineComponent, Transition, computed, PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

type ColorType = 'red' | 'blue' | 'green' | 'yellow' | 'zinc' | 'gray';

const dialogProps = {
  modelValue: { type: Boolean, required: true },
  title: { type: String },
  cancelText: { type: String, default: '取消' },
  confirmText: { type: String, default: '确定' },
  cancelHandler: { type: Function as PropType<() => void> },
  confirmHandler: { type: Function as PropType<() => void> },
  close: { type: Function as PropType<() => void> },
  showClose: { type: Boolean, default: true },
  cancelButtonColor: { type: String as PropType<ColorType>, default: 'gray' },
  confirmButtonColor: { type: String as PropType<ColorType>, default: 'red' }
} as const;

const colorMap = {
  red: {
    cancel: 'ring-1 ring-inset ring-red-300 text-red-700 hover:bg-red-50 focus:ring-red-500',
    confirm: 'bg-red-600 text-white hover:bg-red-500 focus:ring-red-500'
  },
  blue: {
    cancel: 'ring-1 ring-inset ring-blue-300 text-blue-700 hover:bg-blue-50 focus:ring-blue-500',
    confirm: 'bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-500'
  },
  green: {
    cancel: 'ring-1 ring-inset ring-green-300 text-green-700 hover:bg-green-50 focus:ring-green-500',
    confirm: 'bg-green-600 text-white hover:bg-green-500 focus:ring-green-500'
  },
  yellow: {
    cancel: 'ring-1 ring-inset ring-yellow-300 text-yellow-700 hover:bg-yellow-50 focus:ring-yellow-500',
    confirm: 'bg-yellow-600 text-white hover:bg-yellow-500 focus:ring-yellow-500'
  },
  zinc: {
    cancel: 'ring-1 ring-inset ring-zinc-300 text-zinc-700 hover:bg-zinc-50 focus:ring-zinc-500',
    confirm: 'bg-zinc-600 text-white hover:bg-zinc-500 focus:ring-zinc-500'
  },
  gray: {
    cancel: 'ring-1 ring-inset ring-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    confirm: 'bg-gray-600 text-white hover:bg-gray-500 focus:ring-gray-500'
  }
} as const;

export type DialogProps = ExtractPropTypes<typeof dialogProps>;

export default defineComponent({
  name: 'Dialog',
  props: dialogProps,
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const close = () => {
      emit('update:modelValue', false);
      props.close?.();
    };

    const onCancelClick = () => {
      props.cancelHandler?.();
      close();
    };

    const onConfirmClick = () => {
      props.confirmHandler?.();
      close();
    };

    const getCancelButtonClasses = computed(() => 
      colorMap[props.cancelButtonColor]?.cancel || colorMap.gray.cancel
    );

    const getConfirmButtonClasses = computed(() => 
      colorMap[props.confirmButtonColor]?.confirm || colorMap.red.confirm
    );

    return () => (
      <div>
        <Transition name="fade">
          {props.modelValue && (
            <div
              onClick={close}
              class="fixed inset-0 bg-zinc-900/80 backdrop-blur-sm z-40"
            />
          )}
        </Transition>
        <Transition name="up">
          {props.modelValue && (
            <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[80%] max-h-[80%] overflow-auto z-50 p-6 rounded-lg border shadow-lg dark:border-zinc-600 bg-white dark:bg-zinc-800 xl:min-w-[35%]">
              {props.title && (
                <div class="flex items-center justify-between text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-4 border-b border-zinc-200 dark:border-zinc-700 pb-2">
                  {props.title}
                  {props.showClose && (
                    <button
                      onClick={close}
                      class="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                    >
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              )}
              <div class="text-base text-zinc-900 dark:text-zinc-200 mb-6">
                {slots.default?.()}
              </div>
              {(props.cancelHandler || props.confirmHandler) && (
                <div class="flex justify-end gap-2">
                  {props.cancelHandler && (
                    <button
                      type="button"
                      class={[
                        'rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
                        getCancelButtonClasses.value
                      ]}
                      onClick={onCancelClick}
                    >
                      {props.cancelText}
                    </button>
                  )}
                  {props.confirmHandler && (
                    <button
                      type="button"
                      class={[
                        'rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
                        getConfirmButtonClasses.value
                      ]}
                      onClick={onConfirmClick}
                    >
                      {props.confirmText}
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </Transition>

        <style>{`
          .fade-enter-active,
          .fade-leave-active {
            transition: opacity 0.3s ease;
          }

          .fade-enter-from,
          .fade-leave-to {
            opacity: 0;
          }

          .up-enter-active,
          .up-leave-active {
            transition: all 0.3s ease;
          }

          .up-enter-from,
          .up-leave-to {
            opacity: 0;
            transform: translateY(20px);
          }

          button {
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
          }
        `}</style>
      </div>
    );
  }
});
