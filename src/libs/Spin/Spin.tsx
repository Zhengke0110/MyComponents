import { defineComponent, ref, Transition, PropType, h, VNode, Slot, onMounted, onBeforeUnmount, reactive, watch } from 'vue';

type SpinSize = 'small' | 'default' | 'large';

// 默认加载指示符
let defaultIndicator: any = null;

// 全局设置默认指示符的方法
export const setDefaultIndicator = (options: { indicator: VNode }) => {
    defaultIndicator = options.indicator;
};

export default defineComponent({
    name: 'Spin',
    props: {
        spinning: {
            type: Boolean,
            default: true,
        },
        delay: {
            type: Number,
        },
        size: {
            type: String as PropType<SpinSize>,
            default: 'default',
            validator: (val: string): boolean => ['small', 'default', 'large'].includes(val),
        },
        tip: {
            type: String,
        },
        wrapperClassName: {
            type: String,
            default: '',
        },
        indicator: {
            type: [Object, Function] as PropType<VNode | Slot>,
        },
    },
    setup(props, { slots }) {
        // 控制显示状态
        const shouldShowSpin = ref(props.spinning && !props.delay);

        // 延时计时器
        let delayTimer: ReturnType<typeof setTimeout> | null = null;

        // 监听 spinning 和 delay 变化
        watch(
            () => [props.spinning, props.delay],
            ([spinning, delay]) => {
                if (delayTimer) {
                    clearTimeout(delayTimer);
                    delayTimer = null;
                }

                if (spinning && delay) {
                    delayTimer = setTimeout(() => {
                        shouldShowSpin.value = !!spinning;
                    }, typeof delay === 'number' ? delay : 0);
                } else {
                    shouldShowSpin.value = !!spinning;
                }
            },
            { immediate: true }
        );

        // 组件卸载时清除计时器
        onBeforeUnmount(() => {
            if (delayTimer) {
                clearTimeout(delayTimer);
                delayTimer = null;
            }
        });

        // 根据大小返回适当的类名
        const getSpinSizeClass = (size: SpinSize) => {
            switch (size) {
                case 'small':
                    return 'w-5 h-5';
                case 'large':
                    return 'w-10 h-10';
                default:
                    return 'w-8 h-8';
            }
        };

        // 构建指示器
        const renderIndicator = () => {
            // 优先使用自定义指示器
            if (props.indicator) {
                if (typeof props.indicator === 'function') {
                    return props.indicator();
                }
                return props.indicator;
            }

            // 其次使用全局默认指示器
            if (defaultIndicator) {
                return defaultIndicator;
            }

            // 最后使用默认指示器
            return (
                <div class={`animate-spin rounded-full border-4 border-t-transparent ${getSpinSizeClass(props.size)} dark:border-gray-600 dark:border-t-transparent border-blue-500`}></div>
            );
        };

        // 渲染提示文本
        const renderTip = () => {
            if (slots.tip) {
                return <div class="mt-2 text-sm text-gray-600 dark:text-gray-300">{slots.tip()}</div>;
            } else if (props.tip) {
                return <div class="mt-2 text-sm text-gray-600 dark:text-gray-300">{props.tip}</div>;
            }
            return null;
        };

        return () => {
            // 如果有默认插槽，则为包装模式
            const hasChildren = slots.default;

            if (hasChildren) {
                const containerClass = [
                    'relative',
                    props.wrapperClassName,
                ].filter(Boolean).join(' ');

                return (
                    <div class={containerClass}>
                        <div class={`${!shouldShowSpin.value ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}>
                            {slots.default?.()}
                        </div>

                        {shouldShowSpin.value && (
                            <div class="absolute inset-0 flex items-center justify-center flex-col bg-white/30 dark:bg-black/30 backdrop-blur-[2px] z-10">
                                {renderIndicator()}
                                {renderTip()}
                            </div>
                        )}
                    </div>
                );
            }

            // 独立使用模式
            return (
                <Transition name="fade" appear>
                    {shouldShowSpin.value && (
                        <div class="inline-flex flex-col items-center justify-center">
                            {renderIndicator()}
                            {renderTip()}
                        </div>
                    )}
                </Transition>
            );
        };
    },
});
