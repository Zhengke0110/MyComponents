import { defineComponent, Transition, computed, PropType } from 'vue';
import type { ExtractPropTypes } from 'vue';

export type ColorType = 'red' | 'blue' | 'green' | 'yellow' | 'zinc' | 'gray';

const dialogProps = {
  modelValue: { type: Boolean, required: true },
  title: { type: String },
  cancelText: { type: String, default: '取消' },
  confirmText: { type: String, default: '确定' },
  cancelHandler: { type: Function as PropType<() => void> },
  confirmHandler: { type: Function as PropType<() => void> },
  showClose: { type: Boolean, default: true },
  cancelButtonColor: { type: String as PropType<ColorType>, default: 'gray' },
  confirmButtonColor: { type: String as PropType<ColorType>, default: 'red' }
} as const;

const colorMap = {
  red: {
    cancel: 'ring-1 ring-inset ring-red-300 dark:ring-red-700 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50',
    confirm: 'bg-red-600 dark:bg-red-700 text-white hover:bg-red-500 dark:hover:bg-red-600'
  },
  blue: {
    cancel: 'ring-1 ring-inset ring-blue-300 dark:ring-blue-700 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50',
    confirm: 'bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-500 dark:hover:bg-blue-600'
  },
  green: {
    cancel: 'ring-1 ring-inset ring-green-300 dark:ring-green-700 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/50',
    confirm: 'bg-green-600 dark:bg-green-700 text-white hover:bg-green-500 dark:hover:bg-green-600'
  },
  yellow: {
    cancel: 'ring-1 ring-inset ring-yellow-300 dark:ring-yellow-700 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/50',
    confirm: 'bg-yellow-600 dark:bg-yellow-700 text-white hover:bg-yellow-500 dark:hover:bg-yellow-600'
  },
  zinc: {
    cancel: 'ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 text-zinc-700 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50',
    confirm: 'bg-zinc-600 dark:bg-zinc-700 text-white hover:bg-zinc-500 dark:hover:bg-zinc-600'
  },
  gray: {
    cancel: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900/50',
    confirm: 'bg-gray-600 dark:bg-gray-700 text-white hover:bg-gray-500 dark:hover:bg-gray-600'
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
    };

    const onCancelClick = () => {
      props.cancelHandler?.();
      close();
    };

    const onConfirmClick = () => {
      props.confirmHandler?.();
      close();
    };

    const getCancelButtonClasses = computed(() => [
      'rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800',
      colorMap[props.cancelButtonColor]?.cancel || colorMap.gray.cancel
    ]);

    const getConfirmButtonClasses = computed(() => [
      'rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800',
      colorMap[props.confirmButtonColor]?.confirm || colorMap.red.confirm
    ]);

    return () => (
      <div>
        <Transition
          enterActiveClass="transition-opacity duration-300 ease-out"
          enterFromClass="opacity-0"
          enterToClass="opacity-100"
          leaveActiveClass="transition-opacity duration-200 ease-in"
          leaveFromClass="opacity-100"
          leaveToClass="opacity-0"
        >
          {props.modelValue && (
            <div
              class="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-40"
              onClick={close}
            />
          )}
        </Transition>

        <Transition
          enterActiveClass="transition-all duration-300 ease-out"
          enterFromClass="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterToClass="opacity-100 translate-y-0 sm:scale-100"
          leaveActiveClass="transition-all duration-200 ease-in"
          leaveFromClass="opacity-100 translate-y-0 sm:scale-100"
          leaveToClass="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          {props.modelValue && (
            <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div class="relative w-full max-w-lg rounded-xl bg-white dark:bg-gray-800 p-6 shadow-xl">
                {props.title && (
                  <div class="flex items-center justify-between pb-2 mb-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {props.title}
                    </h3>
                    {props.showClose && (
                      <button
                        onClick={close}
                        class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
                      >
                        <span class="icon-[heroicons--x-mark-20-solid] size-5" />
                      </button>
                    )}
                  </div>
                )}

                <div class="text-gray-600 dark:text-gray-300">
                  {slots.default?.()}
                </div>

                {(props.cancelHandler || props.confirmHandler) && (
                  <div class="mt-6 flex justify-end gap-3">
                    {props.cancelHandler && (
                      <button
                        type="button"
                        class={getCancelButtonClasses.value}
                        onClick={onCancelClick}
                      >
                        {props.cancelText}
                      </button>
                    )}
                    {props.confirmHandler && (
                      <button
                        type="button"
                        class={getConfirmButtonClasses.value}
                        onClick={onConfirmClick}
                      >
                        {props.confirmText}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </Transition>
      </div>
    );
  }
});
