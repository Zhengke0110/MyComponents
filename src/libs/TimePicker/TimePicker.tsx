import { defineComponent, ref, computed, watch, PropType, onMounted, onBeforeUnmount, Teleport, Transition, h, nextTick } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// 注册 dayjs 插件
dayjs.extend(customParseFormat);

// 禁用时间类型
type DisabledTime = (now: Dayjs) => {
    disabledHours?: () => number[];
    disabledMinutes?: (selectedHour: number) => number[];
    disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
};

// 时间单位类型
type TimeUnit = 'hour' | 'minute' | 'second' | 'ampm';

// 弹出位置类型
type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';

// 状态类型
type Status = 'error' | 'warning' | '';

// 时间选项接口
interface TimeOption {
    label: string;
    value: number;
    disabled: boolean;
}

/**
 * TimePicker 组件
 */
export const TimePicker = defineComponent({
    name: 'TimePicker',
    props: {
        // 是否展示清除按钮
        allowClear: {
            type: Boolean,
            default: true,
        },
        // 自动获取焦点
        autofocus: {
            type: Boolean,
            default: false,
        },
        // 是否有边框
        bordered: {
            type: Boolean,
            default: true,
        },
        // 清除按钮的提示文案
        clearText: {
            type: String,
            default: '清除',
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false,
        },
        // 不可选择的时间
        disabledTime: {
            type: Function as PropType<DisabledTime>,
            default: undefined,
        },
        // 展示的时间格式
        format: {
            type: String,
            default: 'HH:mm:ss',
        },
        // 定义浮层的容器
        getPopupContainer: {
            type: Function as PropType<(trigger: HTMLElement) => HTMLElement>,
            default: undefined,
        },
        // 隐藏禁止选择的选项
        hideDisabledOptions: {
            type: Boolean,
            default: false,
        },
        // 小时选项间隔
        hourStep: {
            type: Number,
            default: 1,
        },
        // 设置输入框为只读
        inputReadOnly: {
            type: Boolean,
            default: false,
        },
        // 分钟选项间隔
        minuteStep: {
            type: Number,
            default: 1,
        },
        // 面板是否打开
        open: {
            type: Boolean,
            default: undefined,
        },
        // 占位符
        placeholder: {
            type: String,
            default: '请选择时间',
        },
        // 选择框弹出的位置
        placement: {
            type: String as PropType<Placement>,
            default: 'bottomLeft',
        },
        // 弹出层类名
        popupClassName: {
            type: String,
            default: '',
        },
        // 弹出层样式对象
        popupStyle: {
            type: Object,
            default: () => ({}),
        },
        // 秒选项间隔
        secondStep: {
            type: Number,
            default: 1,
        },
        // 面板是否显示"此刻"按钮
        showNow: {
            type: Boolean,
            default: true,
        },
        // 设置校验状态
        status: {
            type: String as PropType<Status>,
            default: '',
        },
        // 使用 12 小时制
        use12Hours: {
            type: Boolean,
            default: false,
        },
        // 当前时间
        value: {
            type: [Object, String] as PropType<Dayjs | string>,
            default: undefined,
        },
        // 绑定值的格式
        valueFormat: {
            type: String,
            default: '',
        },
        // v-model 绑定值
        modelValue: {
            type: [Object, String] as PropType<Dayjs | string>,
            default: undefined,
        },
    },
    emits: ['change', 'update:modelValue', 'openChange'],
    setup(props, { emit, slots, expose }) {
        // 内部状态
        const innerOpen = ref(false);
        const innerValue = ref<Dayjs | null>(null);
        const inputRef = ref<HTMLInputElement | null>(null);
        const timePickerRef = ref<HTMLDivElement | null>(null);
        const popperRef = ref<HTMLDivElement | null>(null);
        const activePanel = ref<TimeUnit>('hour');
        const hoveredValue = ref<string | null>(null);

        // 计算是否使用受控模式打开弹窗
        const isOpenControlled = computed(() => props.open !== undefined);

        // 计算实际的 open 状态
        const isOpen = computed(() => (isOpenControlled.value ? props.open : innerOpen.value));

        // 计算格式化字符串
        const formatString = computed(() => {
            if (props.use12Hours && props.format === 'HH:mm:ss') {
                return 'hh:mm:ss a';
            }
            return props.format;
        });

        // 初始化值
        watch(
            () => props.modelValue || props.value,
            (val) => {
                if (val) {
                    try {
                        if (typeof val === 'string') {
                            innerValue.value = props.valueFormat
                                ? dayjs(val, props.valueFormat)
                                : dayjs(val, formatString.value);
                        } else {
                            innerValue.value = val;
                        }
                    } catch (e) {
                        console.error('Invalid time value:', val);
                        innerValue.value = null;
                    }
                } else {
                    innerValue.value = null;
                }
            },
            { immediate: true }
        );

        // 生成时间选项
        const generateOptions = (
            unit: 'hour' | 'minute' | 'second',
            step: number = 1,
            disabledFn?: (value: number) => boolean
        ): TimeOption[] => {
            const options: TimeOption[] = [];

            const max = unit === 'hour' ? (props.use12Hours ? 11 : 23) : 59;
            const min = unit === 'hour' && props.use12Hours ? 0 : 0;

            for (let i = min; i <= max; i += step) {
                const disabled = disabledFn ? disabledFn(i) : false;

                if (props.hideDisabledOptions && disabled) {
                    continue;
                }

                let label = i.toString().padStart(2, '0');
                if (unit === 'hour' && props.use12Hours) {
                    label = i === 0 ? '12' : i.toString();
                }

                options.push({
                    label,
                    value: i,
                    disabled,
                });
            }

            return options;
        };

        // 计算小时选项
        const hourOptions = computed(() => {
            let disabledHours: number[] = [];

            if (props.disabledTime && innerValue.value) {
                const disabledTimeFn = props.disabledTime(innerValue.value);
                if (disabledTimeFn.disabledHours) {
                    disabledHours = disabledTimeFn.disabledHours();
                }
            }

            return generateOptions(
                'hour',
                props.hourStep,
                (hour) => disabledHours.includes(hour)
            );
        });

        // 计算分钟选项
        const minuteOptions = computed(() => {
            let disabledMinutes: number[] = [];

            if (props.disabledTime && innerValue.value) {
                const hour = innerValue.value.hour();
                const disabledTimeFn = props.disabledTime(innerValue.value);
                if (disabledTimeFn.disabledMinutes) {
                    disabledMinutes = disabledTimeFn.disabledMinutes(hour);
                }
            }

            return generateOptions(
                'minute',
                props.minuteStep,
                (minute) => disabledMinutes.includes(minute)
            );
        });

        // 计算秒选项
        const secondOptions = computed(() => {
            let disabledSeconds: number[] = [];

            if (props.disabledTime && innerValue.value) {
                const hour = innerValue.value.hour();
                const minute = innerValue.value.minute();
                const disabledTimeFn = props.disabledTime(innerValue.value);
                if (disabledTimeFn.disabledSeconds) {
                    disabledSeconds = disabledTimeFn.disabledSeconds(hour, minute);
                }
            }

            return generateOptions(
                'second',
                props.secondStep,
                (second) => disabledSeconds.includes(second)
            );
        });

        // 计算上午/下午选项
        const ampmOptions = computed(() => {
            return [
                { label: '上午', value: 0, disabled: false },
                { label: '下午', value: 1, disabled: false },
            ];
        });

        // 格式化显示值
        const displayValue = computed(() => {
            if (!innerValue.value) return '';
            return innerValue.value.format(formatString.value);
        });

        // 处理输入框点击
        const handleInputClick = () => {
            if (props.disabled) return;
            if (!isOpenControlled.value) {
                innerOpen.value = true;
            }
            emit('openChange', true);
        };

        // 处理聚焦
        const handleFocus = () => {
            if (props.disabled || props.inputReadOnly) return;
            if (props.autofocus && !isOpen.value) {
                handleInputClick();
            }
        };

        // 处理清除
        const handleClear = (e: Event) => {
            e.stopPropagation();

            const prevValue = innerValue.value;
            innerValue.value = null;

            // 触发变更事件
            emitChange(null);

            if (!isOpenControlled.value) {
                innerOpen.value = false;
            }
            emit('openChange', false);
        };

        // 处理时间选择
        const handleTimeSelect = (value: number, unit: TimeUnit) => {
            if (!innerValue.value) {
                innerValue.value = dayjs();
            }

            let newValue = innerValue.value.clone();

            if (unit === 'hour') {
                if (props.use12Hours) {
                    const isPM = newValue.hour() >= 12;
                    const hour = value + (isPM ? 12 : 0);
                    newValue = newValue.hour(hour);
                } else {
                    newValue = newValue.hour(value);
                }
                activePanel.value = 'minute';
            } else if (unit === 'minute') {
                newValue = newValue.minute(value);
                activePanel.value = 'second';
            } else if (unit === 'second') {
                newValue = newValue.second(value);
                activePanel.value = props.use12Hours ? 'ampm' : 'hour';
            } else if (unit === 'ampm') {
                const hour = newValue.hour() % 12;
                newValue = newValue.hour(value === 1 ? hour + 12 : hour);
                activePanel.value = 'hour';
            }

            innerValue.value = newValue;

            // 如果所有面板都已选择，自动关闭面板并触发变更事件
            if (unit === 'second' && !props.use12Hours) {
                closePanel();
                emitChange(newValue);
            } else if (unit === 'ampm' && props.use12Hours) {
                closePanel();
                emitChange(newValue);
            }
        };

        // 处理当前时间选择
        const handleNowClick = () => {
            const now = dayjs();
            innerValue.value = now;
            emitChange(now);
            closePanel();
        };

        // 处理面板确认
        const handleConfirm = () => {
            if (innerValue.value) {
                emitChange(innerValue.value);
            }
            closePanel();
        };

        // 关闭面板
        const closePanel = () => {
            if (!isOpenControlled.value) {
                innerOpen.value = false;
            }
            emit('openChange', false);
        };

        // 触发变更事件
        const emitChange = (value: Dayjs | null) => {
            if (value === null) {
                emit('change', null, '');
                emit('update:modelValue', null);
                return;
            }

            const timeString = value.format(formatString.value);

            if (props.valueFormat) {
                const formattedValue = value.format(props.valueFormat);
                emit('change', formattedValue, timeString);
                emit('update:modelValue', formattedValue);
            } else {
                emit('change', value, timeString);
                emit('update:modelValue', value);
            }
        };

        // 处理点击外部事件
        const handleClickOutside = (e: MouseEvent) => {
            if (
                isOpen.value &&
                timePickerRef.value &&
                !timePickerRef.value.contains(e.target as Node) &&
                popperRef.value &&
                !popperRef.value.contains(e.target as Node)
            ) {
                closePanel();
            }
        };

        // 计算弹窗位置样式
        const popupPositionStyle = computed(() => {
            if (!timePickerRef.value || !isOpen.value) return {};

            const rect = timePickerRef.value.getBoundingClientRect();
            const style: Record<string, any> = { ...props.popupStyle };

            // 基本位置设置
            if (props.placement.startsWith('bottom')) {
                style.top = `${rect.bottom}px`;
            } else {
                style.bottom = `${window.innerHeight - rect.top}px`;
            }

            if (props.placement.endsWith('Left')) {
                style.left = `${rect.left}px`;
            } else {
                style.right = `${window.innerWidth - rect.right}px`;
            }

            return style;
        });

        // 计算状态类名
        const statusClass = computed(() => {
            if (!props.status) return '';
            return `time-picker-${props.status}`;
        });

        // 计算选中时间在面板中的位置以滚动到可视区域
        const scrollToSelected = (unit: TimeUnit) => {
            if (!innerValue.value) return;

            nextTick(() => {
                const containerSelector = `.time-panel-${unit}`;
                const itemSelector = `.time-option-${unit}-selected`;

                const container = popperRef.value?.querySelector(containerSelector);
                const selectedItem = popperRef.value?.querySelector(itemSelector);

                if (container && selectedItem) {
                    const containerRect = container.getBoundingClientRect();
                    const selectedRect = selectedItem.getBoundingClientRect();

                    container.scrollTop = selectedRect.top - containerRect.top - containerRect.height / 2 + selectedRect.height / 2;
                }
            });
        };

        // 监听面板激活状态变化，自动滚动到选中项
        watch(activePanel, (panel) => {
            scrollToSelected(panel);
        });

        // 监听弹窗开关状态变化
        watch(isOpen, (open) => {
            if (open) {
                // 打开时，默认显示小时面板
                activePanel.value = 'hour';

                // 添加点击外部事件监听
                document.addEventListener('mousedown', handleClickOutside);

                // 延迟滚动到选中项
                nextTick(() => {
                    scrollToSelected(activePanel.value);
                });
            } else {
                // 关闭时，移除点击外部事件监听
                document.removeEventListener('mousedown', handleClickOutside);
            }
        });

        // 生命周期钩子
        onMounted(() => {
            if (props.autofocus && inputRef.value) {
                inputRef.value.focus();
            }

            // 初始添加点击外部事件监听
            if (isOpen.value) {
                document.addEventListener('mousedown', handleClickOutside);
            }
        });

        onBeforeUnmount(() => {
            // 移除点击外部事件监听
            document.removeEventListener('mousedown', handleClickOutside);
        });

        // 暴露方法
        expose({
            focus: () => {
                inputRef.value?.focus();
            },
            blur: () => {
                inputRef.value?.blur();
            }
        });

        // 渲染小时面板
        const renderHourPanel = () => {
            return (
                <div
                    class={`time-panel time-panel-hour max-h-56 overflow-y-auto ${activePanel.value === 'hour' ? 'block' : 'hidden'}`}
                >
                    <div class="time-panel-inner p-1">
                        {hourOptions.value.map(option => (
                            <div
                                key={`hour-${option.value}`}
                                class={`
                  time-option time-option-hour
                  px-3 py-1 rounded-md mb-1 cursor-pointer text-center text-sm
                  ${option.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'}
                  ${innerValue.value && (props.use12Hours ? innerValue.value.hour() % 12 : innerValue.value.hour()) === option.value ?
                                        'time-option-hour-selected bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'}
                  transition-all duration-200 transform hover:scale-[1.02]
                `}
                                onClick={() => !option.disabled && handleTimeSelect(option.value, 'hour')}
                                onMouseenter={() => hoveredValue.value = `小时: ${option.label}`}
                                onMouseleave={() => hoveredValue.value = null}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            );
        };

        // 渲染分钟面板
        const renderMinutePanel = () => {
            return (
                <div
                    class={`time-panel time-panel-minute max-h-56 overflow-y-auto ${activePanel.value === 'minute' ? 'block' : 'hidden'}`}
                >
                    <div class="time-panel-inner p-1">
                        {minuteOptions.value.map(option => (
                            <div
                                key={`minute-${option.value}`}
                                class={`
                  time-option time-option-minute
                  px-3 py-1 rounded-md mb-1 cursor-pointer text-center text-sm
                  ${option.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'}
                  ${innerValue.value && innerValue.value.minute() === option.value ?
                                        'time-option-minute-selected bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'}
                  transition-all duration-200 transform hover:scale-[1.02]
                `}
                                onClick={() => !option.disabled && handleTimeSelect(option.value, 'minute')}
                                onMouseenter={() => hoveredValue.value = `分钟: ${option.label}`}
                                onMouseleave={() => hoveredValue.value = null}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            );
        };

        // 渲染秒面板
        const renderSecondPanel = () => {
            return (
                <div
                    class={`time-panel time-panel-second max-h-56 overflow-y-auto ${activePanel.value === 'second' ? 'block' : 'hidden'}`}
                >
                    <div class="time-panel-inner p-1">
                        {secondOptions.value.map(option => (
                            <div
                                key={`second-${option.value}`}
                                class={`
                  time-option time-option-second
                  px-3 py-1 rounded-md mb-1 cursor-pointer text-center text-sm
                  ${option.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'}
                  ${innerValue.value && innerValue.value.second() === option.value ?
                                        'time-option-second-selected bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'}
                  transition-all duration-200 transform hover:scale-[1.02]
                `}
                                onClick={() => !option.disabled && handleTimeSelect(option.value, 'second')}
                                onMouseenter={() => hoveredValue.value = `秒: ${option.label}`}
                                onMouseleave={() => hoveredValue.value = null}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            );
        };

        // 渲染上午/下午面板
        const renderAmPmPanel = () => {
            if (!props.use12Hours) return null;

            return (
                <div
                    class={`time-panel time-panel-ampm max-h-56 overflow-y-auto ${activePanel.value === 'ampm' ? 'block' : 'hidden'}`}
                >
                    <div class="time-panel-inner p-1">
                        {ampmOptions.value.map(option => (
                            <div
                                key={`ampm-${option.value}`}
                                class={`
                  time-option time-option-ampm
                  px-3 py-1 rounded-md mb-1 cursor-pointer text-center text-sm
                  ${option.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'}
                  ${innerValue.value && (innerValue.value.hour() >= 12 ? 1 : 0) === option.value ?
                                        'time-option-ampm-selected bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300'}
                  transition-all duration-200 transform hover:scale-[1.02]
                `}
                                onClick={() => !option.disabled && handleTimeSelect(option.value, 'ampm')}
                                onMouseenter={() => hoveredValue.value = option.label}
                                onMouseleave={() => hoveredValue.value = null}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            );
        };

        // 渲染顶部选项卡
        const renderTabs = () => {
            return (
                <div class="time-tabs flex border-b border-gray-200 dark:border-gray-700 mb-2">
                    <div
                        class={`
              time-tab time-tab-hour 
              px-3 py-2 font-medium text-sm cursor-pointer relative
              ${activePanel.value === 'hour' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'}
              transition-colors duration-200
            `}
                        onClick={() => (activePanel.value = 'hour')}
                    >
                        时
                        {activePanel.value === 'hour' && (
                            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400 rounded-t transition-all duration-300"></div>
                        )}
                    </div>
                    <div
                        class={`
              time-tab time-tab-minute 
              px-3 py-2 font-medium text-sm cursor-pointer relative
              ${activePanel.value === 'minute' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'}
              transition-colors duration-200
            `}
                        onClick={() => (activePanel.value = 'minute')}
                    >
                        分
                        {activePanel.value === 'minute' && (
                            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400 rounded-t transition-all duration-300"></div>
                        )}
                    </div>
                    <div
                        class={`
              time-tab time-tab-second 
              px-3 py-2 font-medium text-sm cursor-pointer relative
              ${activePanel.value === 'second' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'}
              transition-colors duration-200
            `}
                        onClick={() => (activePanel.value = 'second')}
                    >
                        秒
                        {activePanel.value === 'second' && (
                            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400 rounded-t transition-all duration-300"></div>
                        )}
                    </div>
                    {props.use12Hours && (
                        <div
                            class={`
                time-tab time-tab-ampm 
                px-3 py-2 font-medium text-sm cursor-pointer relative
                ${activePanel.value === 'ampm' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'}
                transition-colors duration-200
              `}
                            onClick={() => (activePanel.value = 'ampm')}
                        >
                            {innerValue.value && innerValue.value.hour() >= 12 ? '下午' : '上午'}
                            {activePanel.value === 'ampm' && (
                                <div class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 dark:bg-blue-400 rounded-t transition-all duration-300"></div>
                            )}
                        </div>
                    )}
                </div>
            );
        };

        // 渲染底部操作按钮
        const renderFooter = () => {
            return (
                <div class="time-footer flex justify-between items-center pt-2 pb-1 px-2 border-t border-gray-200 dark:border-gray-700 mt-2">
                    {props.showNow && (
                        <button
                            type="button"
                            class="time-now-btn text-xs px-2 py-1 rounded text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                            onClick={handleNowClick}
                        >
                            <i class="icon-[carbon--time] mr-1 text-xs" />
                            此刻
                        </button>
                    )}

                    {slots.renderExtraFooter && (
                        <div class="time-extra-footer">
                            {slots.renderExtraFooter()}
                        </div>
                    )}

                    <div class="ml-auto">
                        <button
                            type="button"
                            class="time-ok-btn px-3 py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-xs rounded shadow-sm hover:shadow transition-all duration-200"
                            onClick={handleConfirm}
                        >
                            确定
                        </button>
                    </div>
                </div>
            );
        };

        // 渲染面板的悬停提示
        const renderHoverTip = () => {
            if (!hoveredValue.value) return null;

            return (
                <div class="absolute top-1 right-2 text-xs bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-gray-500 dark:text-gray-400 transition-opacity duration-200 opacity-80">
                    {hoveredValue.value}
                </div>
            );
        };

        // 渲染弹出内容
        const renderPopup = () => {
            if (!isOpen.value) return null;

            const container = props.getPopupContainer
                ? props.getPopupContainer(timePickerRef.value as HTMLElement)
                : document.body;

            return (
                <Teleport to={container}>
                    <Transition name="time-picker-dropdown">
                        <div
                            v-show={isOpen.value}
                            ref={popperRef}
                            class={`
                time-picker-dropdown 
                absolute z-50 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700
                min-w-[180px] w-max py-2 px-2
                transition-all duration-300 transform
                ${props.popupClassName}
              `}
                            style={popupPositionStyle.value}
                        >
                            {renderHoverTip()}
                            {renderTabs()}
                            <div class="time-panels-container relative">
                                {renderHourPanel()}
                                {renderMinutePanel()}
                                {renderSecondPanel()}
                                {renderAmPmPanel()}
                            </div>
                            {renderFooter()}
                        </div>
                    </Transition>
                </Teleport>
            );
        };

        return () => (
            <div
                ref={timePickerRef}
                class={`
          time-picker 
          inline-flex relative
          ${props.disabled ? 'opacity-60 cursor-not-allowed' : ''}
          ${statusClass.value}
        `}
            >
                <div
                    class={`
            time-picker-input-wrapper 
            relative flex items-center w-full
            ${props.bordered ? 'border rounded' : ''}
            ${props.disabled ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}
            ${isOpen.value && !props.disabled ? 'border-blue-500 dark:border-blue-500 ring-1 ring-blue-500 shadow-sm' : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500'}
            ${props.status === 'error' ? 'border-red-500 dark:border-red-500 hover:border-red-600 dark:hover:border-red-600' : ''}
            ${props.status === 'warning' ? 'border-yellow-500 dark:border-yellow-500 hover:border-yellow-600 dark:hover:border-yellow-600' : ''}
            transition-all duration-200
          `}
                    onClick={handleInputClick}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        class={`
              time-picker-input
              py-1.5 px-3 w-full outline-none text-sm rounded
              ${props.disabled ? 'bg-gray-100 dark:bg-gray-800 cursor-not-allowed' : 'bg-white dark:bg-gray-900'}
              ${props.disabled ? 'text-gray-500 dark:text-gray-500' : 'text-gray-900 dark:text-gray-100'}
              transition-colors duration-200
            `}
                        value={displayValue.value}
                        placeholder={props.placeholder}
                        disabled={props.disabled}
                        readonly={true}
                        onFocus={handleFocus}
                    />

                    <div class="time-picker-suffix flex items-center pr-2">
                        {props.allowClear && innerValue.value && !props.disabled && (
                            <span
                                class="time-picker-clear-btn flex items-center justify-center p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer mr-1 transition-colors duration-200"
                                onClick={handleClear}
                                title={props.clearText}
                            >
                                {slots.clearIcon ? (
                                    slots.clearIcon()
                                ) : (
                                    <i class="icon-[carbon--close] text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 text-xs" />
                                )}
                            </span>
                        )}

                        <span class="time-picker-suffix-icon text-gray-400 dark:text-gray-500">
                            {slots.suffixIcon ? (
                                slots.suffixIcon()
                            ) : (
                                <i class="icon-[carbon--time] text-sm" />
                            )}
                        </span>
                    </div>
                </div>

                {renderPopup()}
            </div>
        );
    },
});

// 添加 CSS 过渡效果样式
const timePickerStyles = `
.time-picker-dropdown-enter-active,
.time-picker-dropdown-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.time-picker-dropdown-enter-from,
.time-picker-dropdown-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* 优化滚动条样式 */
.time-panel::-webkit-scrollbar {
  width: 5px;
}

.time-panel::-webkit-scrollbar-track {
  background: transparent;
}

.time-panel::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}

.dark .time-panel::-webkit-scrollbar-thumb {
  background-color: rgba(75, 85, 99, 0.5);
}

/* 添加选中项的动画效果 */
.time-option.time-option-hour-selected,
.time-option.time-option-minute-selected,
.time-option.time-option-second-selected,
.time-option.time-option-ampm-selected {
  animation: pulse 0.8s ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 5px rgba(59, 130, 246, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

/* 时间选项区域的动画和过渡效果 */
.time-panel {
  transition: opacity 0.3s, transform 0.3s;
}

.time-panel:not(.block) {
  opacity: 0;
  transform: translateX(10px);
  pointer-events: none;
}

.time-panel.block {
  opacity: 1;
  transform: translateX(0);
}

/* 时间选项悬停效果 */
.time-option:hover {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.dark .time-option:hover {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

/* 错误和警告状态样式 */
.time-picker-error .time-picker-input-wrapper {
  border-color: #ef4444;
}

.time-picker-warning .time-picker-input-wrapper {
  border-color: #f59e0b;
}

.dark .time-picker-error .time-picker-input-wrapper {
  border-color: #f87171;
}

.dark .time-picker-warning .time-picker-input-wrapper {
  border-color: #fbbf24;
}

/* 增强面板阴影效果 */
.time-picker-dropdown {
  box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08),
              0 9px 28px 0 rgba(0, 0, 0, 0.05),
              0 12px 48px 16px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  overflow: hidden;
}

.dark .time-picker-dropdown {
  box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.4),
              0 9px 28px 0 rgba(0, 0, 0, 0.3),
              0 12px 48px 16px rgba(0, 0, 0, 0.2);
}

/* 提高选项触感和可视度 */
.time-option {
  position: relative;
  z-index: 1;
}

.time-option::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.375rem;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.2s;
}

.time-option:hover::after {
  opacity: 1;
}

/* 改进tab切换样式 */
.time-tab {
  position: relative;
  overflow: hidden;
}

.time-tab::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: transparent;
  transition: all 0.3s;
  transform: translateY(2px);
}

.time-tab:hover::before {
  background-color: rgba(59, 130, 246, 0.3);
  transform: translateY(0);
}

.dark .time-tab:hover::before {
  background-color: rgba(96, 165, 250, 0.3);
}
`;

// 将样式添加到文档头部
if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = timePickerStyles;
    document.head.appendChild(styleElement);
}

// 导出组件
export default {
    TimePicker
};
