import { computed, defineComponent, ref, PropType, onMounted } from 'vue';

export default defineComponent({
    name: 'SwitchBox',
    props: {
        modelValue: {
            type: [Boolean, String, Number],
            default: false,
        },
        checkedValue: {
            type: [Boolean, String, Number],
            default: true,
        },
        unCheckedValue: {
            type: [Boolean, String, Number],
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String as PropType<'small' | 'default'>,
            default: 'default',
            validator: (val: string) => ['small', 'default'].includes(val),
        },
        autofocus: {
            type: Boolean,
            default: false,
        },
        id: {
            type: String,
            default: undefined,
        },
        name: {
            type: String,
            default: undefined,
        },
        checkedChildren: {
            type: String,
            default: '',
        },
        unCheckedChildren: {
            type: String,
            default: '',
        },
    },
    emits: [
        'update:modelValue',
        'change',
        'click',
    ],
    setup(props, { emit, slots }) {
        const switchRef = ref<HTMLButtonElement | null>(null);
        const isChecked = computed(() => props.modelValue === props.checkedValue);
        const isFocused = ref(false);
        const isHovered = ref(false);

        // 检查是否有文字内容
        const hasCheckedChildren = computed(() => !!slots.checkedChildren || !!props.checkedChildren);
        const hasUnCheckedChildren = computed(() => !!slots.unCheckedChildren || !!props.unCheckedChildren);
        const hasChildren = computed(() => hasCheckedChildren.value || hasUnCheckedChildren.value);

        // 处理尺寸相关的样式
        const switchSizeClasses = computed(() => {
            const baseClass = 'inline-flex items-center relative rounded-full transition-all duration-300 ease-in-out focus:outline-none';

            if (props.size === 'small') {
                return [
                    baseClass,
                    hasChildren.value
                        ? 'h-6 min-w-[3.25rem] px-1'
                        : 'h-5 w-9',
                ].join(' ');
            }

            return [
                baseClass,
                hasChildren.value
                    ? 'h-7 min-w-[3.75rem] px-1'
                    : 'h-6 w-12',
            ].join(' ');
        });

        // 处理轨道样式 - 增强对比度
        const trackClasses = computed(() => {
            const baseClass = 'absolute inset-0 rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] border';

            if (props.disabled) {
                return `${baseClass} ${isChecked.value
                    ? 'bg-opacity-70 bg-blue-500 dark:bg-opacity-50 dark:bg-blue-500 border-blue-400 dark:border-blue-600'
                    : 'bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600'}`;
            }

            let bgClass = isChecked.value
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 border-blue-500 dark:border-blue-500 shadow-inner shadow-blue-800/10'
                : 'bg-gray-200 dark:bg-gray-600 border-gray-300 dark:border-gray-500';

            if (isHovered.value && !props.loading) {
                bgClass = isChecked.value
                    ? 'bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-600 dark:to-blue-700 shadow-inner shadow-white/10 border-blue-600 dark:border-blue-600'
                    : 'bg-gray-300 dark:bg-gray-500 border-gray-400 dark:border-gray-400';
            }

            return `${baseClass} ${bgClass}`;
        });

        // 处理开关圆点样式
        const thumbClasses = computed(() => {
            const baseClass = 'absolute rounded-full transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] border';

            // 基本大小和颜色
            let sizeAndColor = props.size === 'small'
                ? 'h-4 w-4 bg-white dark:bg-gray-50 border-gray-200 dark:border-gray-400'
                : 'h-5 w-5 bg-white dark:bg-gray-50 border-gray-200 dark:border-gray-400';

            // 带阴影效果
            const shadowEffect = isChecked.value
                ? 'shadow-md shadow-blue-900/20 dark:shadow-blue-500/30'
                : 'shadow-md shadow-gray-400/30 dark:shadow-gray-900/40';

            // 计算位置
            let position;
            if (hasChildren.value) {
                position = isChecked.value
                    ? props.size === 'small' ? 'right-1 left-auto' : 'right-1.5 left-auto'
                    : props.size === 'small' ? 'left-1 right-auto' : 'left-1.5 right-auto';
            } else {
                position = isChecked.value
                    ? props.size === 'small' ? 'translate-x-4' : 'translate-x-6'
                    : 'translate-x-1';
            }

            // 悬停时轻微放大和额外样式
            const hoverEffect = (isHovered.value && !props.disabled && !props.loading)
                ? isChecked.value
                    ? 'scale-110 ring-2 ring-blue-200 dark:ring-blue-700/30'
                    : 'scale-110 ring-2 ring-gray-200 dark:ring-gray-700/30'
                : '';

            // 加载中显示内容
            const loadingClass = props.loading ? 'flex items-center justify-center' : '';

            // 垂直居中
            const alignClass = hasChildren.value ? 'top-1/2 -translate-y-1/2' : 'top-1/2 -translate-y-1/2';

            return `${baseClass} ${sizeAndColor} ${shadowEffect} ${position} ${hoverEffect} ${loadingClass} ${alignClass}`;
        });

        // 处理文字标签样式 - 增强文字对比度
        const labelClasses = computed(() => {
            const baseClass = 'relative z-10 transition-all duration-300 font-medium';
            const sizeClass = props.size === 'small' ? 'text-[10px]' : 'text-xs';

            // 文字颜色和位置与不透明度
            const checkedClass = isChecked.value
                ? 'opacity-100 pl-2 pr-6 text-white dark:text-white'
                : 'opacity-0 absolute';

            // 未选中状态的文字使用更暗的颜色以增加对比度
            const uncheckedClass = !isChecked.value
                ? 'opacity-100 pr-2 pl-6 text-right text-gray-700 dark:text-gray-200'
                : 'opacity-0 absolute';

            return {
                checked: `${baseClass} ${sizeClass} ${checkedClass}`,
                unchecked: `${baseClass} ${sizeClass} ${uncheckedClass}`,
            };
        });

        // 根据状态设置类名
        const stateClasses = computed(() => {
            const classes = ['relative'];

            if (props.disabled) {
                classes.push('cursor-not-allowed opacity-60');
            } else if (props.loading) {
                classes.push('cursor-wait');
            } else {
                classes.push('cursor-pointer');
            }

            // 焦点效果
            if (isFocused.value) {
                classes.push(isChecked.value
                    ? 'ring-2 ring-blue-300 dark:ring-blue-400/30'
                    : 'ring-2 ring-gray-300 dark:ring-gray-500/30');
            }

            return classes.join(' ');
        });

        // 加载动画 - 使用更精致的加载指示器
        const renderLoading = () => {
            const spinClass = props.size === 'small' ? 'h-2.5 w-2.5' : 'h-3 w-3';
            return (
                <svg
                    class={`animate-spin ${spinClass} ${isChecked.value ? 'text-blue-200 dark:text-blue-300' : 'text-gray-400 dark:text-gray-300'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    ></circle>
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            );
        };

        // 添加不带文字时显示的ON/OFF图标标识 - 增强对比度
        const renderLabels = () => {
            if (hasCheckedChildren.value || hasUnCheckedChildren.value) {
                return null;
            }

            return (
                <div class="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
                    <span
                        class={`text-[8px] font-bold transition-opacity duration-300 ${isChecked.value ? 'opacity-0' : 'opacity-80'} text-gray-600 dark:text-gray-300`}>
                        OFF
                    </span>
                    <span
                        class={`text-[8px] font-bold transition-opacity duration-300 ${isChecked.value ? 'opacity-80' : 'opacity-0'} text-white dark:text-white`}>
                        ON
                    </span>
                </div>
            );
        };

        // 事件处理
        const handleClick = (event: MouseEvent) => {
            if (props.disabled || props.loading) return;

            const newValue = isChecked.value ? props.unCheckedValue : props.checkedValue;

            emit('update:modelValue', newValue);
            emit('change', newValue, event);
            emit('click', newValue, event);
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (props.disabled || props.loading) return;

            if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault();
                const newValue = isChecked.value ? props.unCheckedValue : props.checkedValue;

                emit('update:modelValue', newValue);
                emit('change', newValue, event);
            }
        };

        const handleFocus = () => {
            isFocused.value = true;
        };

        const handleBlur = () => {
            isFocused.value = false;
        };

        const handleMouseEnter = () => {
            isHovered.value = true;
        };

        const handleMouseLeave = () => {
            isHovered.value = false;
        };

        onMounted(() => {
            if (props.autofocus && switchRef.value) {
                switchRef.value.focus();
            }
        });

        return () => (
            <button
                ref={switchRef}
                type="button"
                role="switch"
                id={props.id}
                aria-checked={isChecked.value}
                aria-disabled={props.disabled}
                tabindex={props.disabled ? -1 : 0}
                class={switchSizeClasses.value}
                onClick={handleClick}
                onKeydown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseenter={handleMouseEnter}
                onMouseleave={handleMouseLeave}
                disabled={props.disabled}
            >
                <div class={stateClasses.value}>
                    <div class={trackClasses.value}></div>

                    {/* 选中状态的文本内容 */}
                    {(hasCheckedChildren.value) && (
                        <div class={`flex items-center h-full ${labelClasses.value.checked}`}>
                            {slots.checkedChildren?.() || props.checkedChildren}
                        </div>
                    )}

                    {/* 未选中状态的文本内容 */}
                    {(hasUnCheckedChildren.value) && (
                        <div class={`flex items-center justify-end h-full w-full ${labelClasses.value.unchecked}`}>
                            {slots.unCheckedChildren?.() || props.unCheckedChildren}
                        </div>
                    )}

                    {/* 滑块 */}
                    <div class={thumbClasses.value}>
                        {props.loading && renderLoading()}
                    </div>

                    {/* 添加不带文字时显示的ON/OFF图标标识 - 使用函数渲染 */}
                    {renderLabels()}
                </div>
            </button>
        );
    }
});
