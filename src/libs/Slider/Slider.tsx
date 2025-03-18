import { computed, defineComponent, ref, watch, onMounted, nextTick, PropType, h } from 'vue';
import { JSX } from 'vue/jsx-runtime';

type Mark = {
    style?: Record<string, any>;
    label?: string | JSX.Element;
};

type Marks = Record<number, string | JSX.Element | Mark | (() => JSX.Element)>;

export default defineComponent({
    name: 'Slider',
    inheritAttrs: false, // 禁止自动继承属性，避免不正确的属性传递
    props: {
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        step: {
            type: [Number, Object] as PropType<number | null>,
            default: 1
        },
        modelValue: {
            type: [Number, Array] as PropType<number | number[]>,
            default: 0
        },
        range: {
            type: Boolean,
            default: false
        },
        vertical: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        reverse: {
            type: Boolean,
            default: false
        },
        dots: {
            type: Boolean,
            default: false
        },
        included: {
            type: Boolean,
            default: true
        },
        marks: {
            type: Object as PropType<Marks>,
            default: () => ({})
        },
        tipFormatter: {
            type: [Function, Object, String, null] as PropType<((value: number) => string | null) | null | any>,
            default: function (value: number) {
                return String(value);
            }
            // 移除验证器，让组件更宽容地接受不同类型
        },
        tooltipPlacement: {
            type: String,
            default: ''
        },
        tooltipOpen: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue', 'change', 'afterChange'],
    setup(props, { emit, attrs }) {
        // 内部状态管理
        const sliderRef = ref<HTMLDivElement | null>(null);
        const isDragging = ref(false);
        const activeThumbIndex = ref(0);
        const hovering = ref(false);
        const tooltipVisible = ref(props.tooltipOpen);

        // 计算当前值
        const currentValue = computed(() => {
            if (props.range && !Array.isArray(props.modelValue)) {
                return [props.min, props.modelValue as number];
            }
            return props.modelValue;
        });

        // 将值转换为百分比
        const valueToPercent = (value: number) => {
            const range = props.max - props.min;
            if (range === 0) return 0;
            return ((value - props.min) / range) * 100;
        };

        // 将百分比转换为值
        const percentToValue = (percent: number) => {
            const range = props.max - props.min;
            let value = (percent / 100) * range + props.min;

            // 如果设置了步长，则按步长取整
            if (props.step && props.step > 0) {
                value = Math.round(value / props.step) * props.step;
            }

            return Math.max(props.min, Math.min(props.max, value));
        };

        // 计算滑块位置的百分比
        const thumbPercents = computed(() => {
            if (Array.isArray(currentValue.value)) {
                return currentValue.value.map(valueToPercent);
            }
            return [valueToPercent(currentValue.value as number)];
        });

        // 计算轨道填充的样式
        const trackStyle = computed(() => {
            if (props.reverse) {
                if (props.vertical) {
                    if (props.range) {
                        return {
                            bottom: `${100 - Math.max(...thumbPercents.value)}%`,
                            height: `${Math.abs(thumbPercents.value[1] - thumbPercents.value[0])}%`
                        };
                    }
                    return {
                        bottom: `${100 - thumbPercents.value[0]}%`,
                        height: `${thumbPercents.value[0]}%`
                    };
                }

                if (props.range) {
                    return {
                        right: `${100 - Math.max(...thumbPercents.value)}%`,
                        width: `${Math.abs(thumbPercents.value[1] - thumbPercents.value[0])}%`
                    };
                }
                return {
                    right: `${100 - thumbPercents.value[0]}%`,
                    width: `${thumbPercents.value[0]}%`
                };
            }

            if (props.vertical) {
                if (props.range) {
                    return {
                        bottom: `${Math.min(...thumbPercents.value)}%`,
                        height: `${Math.abs(thumbPercents.value[1] - thumbPercents.value[0])}%`
                    };
                }
                return {
                    bottom: '0%',
                    height: `${thumbPercents.value[0]}%`
                };
            }

            if (props.range) {
                return {
                    left: `${Math.min(...thumbPercents.value)}%`,
                    width: `${Math.abs(thumbPercents.value[1] - thumbPercents.value[0])}%`
                };
            }
            return {
                left: '0%',
                width: `${thumbPercents.value[0]}%`
            };
        });

        // 计算滑块的样式
        const getThumbStyle = (index: number) => {
            const percent = thumbPercents.value[index];
            if (props.vertical) {
                return props.reverse
                    ? { top: `${100 - percent}%` }
                    : { bottom: `${percent}%` };
            }
            return props.reverse
                ? { right: `${percent}%` }
                : { left: `${percent}%` };
        };

        // 计算提示工具的位置
        const getTooltipPlacement = () => {
            if (props.tooltipPlacement) return props.tooltipPlacement;
            return props.vertical ? 'right' : 'top';
        };

        // 处理拖动事件
        const handleSliderClick = (e: MouseEvent) => {
            if (props.disabled) return;

            const sliderRect = sliderRef.value!.getBoundingClientRect();
            let percent;

            if (props.vertical) {
                const offsetY = e.clientY - sliderRect.top;
                percent = props.reverse
                    ? offsetY / sliderRect.height * 100
                    : (1 - offsetY / sliderRect.height) * 100;
            } else {
                const offsetX = e.clientX - sliderRect.left;
                percent = props.reverse
                    ? (1 - offsetX / sliderRect.width) * 100
                    : offsetX / sliderRect.width * 100;
            }

            const newValue = percentToValue(percent);

            if (props.range) {
                const values = [...(currentValue.value as number[])];
                // 找出最接近点击位置的滑块
                const dist1 = Math.abs(values[0] - newValue);
                const dist2 = Math.abs(values[1] - newValue);
                if (dist1 < dist2) {
                    values[0] = newValue;
                } else {
                    values[1] = newValue;
                }

                emit('update:modelValue', values);
                emit('change', values);
            } else {
                emit('update:modelValue', newValue);
                emit('change', newValue);
            }
        };

        // 开始拖动
        const handleThumbMouseDown = (e: MouseEvent, index: number) => {
            if (props.disabled) return;

            e.preventDefault();
            activeThumbIndex.value = index;
            isDragging.value = true;
            tooltipVisible.value = true;

            const onMouseMove = (moveEvent: MouseEvent) => {
                const sliderRect = sliderRef.value!.getBoundingClientRect();
                let percent;

                if (props.vertical) {
                    const offsetY = moveEvent.clientY - sliderRect.top;
                    percent = props.reverse
                        ? offsetY / sliderRect.height * 100
                        : (1 - offsetY / sliderRect.height) * 100;
                } else {
                    const offsetX = moveEvent.clientX - sliderRect.left;
                    percent = props.reverse
                        ? (1 - offsetX / sliderRect.width) * 100
                        : offsetX / sliderRect.width * 100;
                }

                const newValue = percentToValue(percent);

                if (props.range) {
                    const values = [...(currentValue.value as number[])];
                    values[index] = newValue;

                    // 确保值的顺序
                    if (index === 0 && values[0] > values[1]) {
                        values[0] = values[1];
                    } else if (index === 1 && values[1] < values[0]) {
                        values[1] = values[0];
                    }

                    emit('update:modelValue', values);
                    emit('change', values);
                } else {
                    emit('update:modelValue', newValue);
                    emit('change', newValue);
                }
            };

            const onMouseUp = () => {
                isDragging.value = false;
                if (!hovering.value && !props.tooltipOpen) {
                    tooltipVisible.value = false;
                }

                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);

                if (props.range) {
                    emit('afterChange', currentValue.value);
                } else {
                    emit('afterChange', currentValue.value);
                }
            };

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };

        // 鼠标进入/离开处理
        const handleMouseEnter = () => {
            hovering.value = true;
            if (!props.tooltipOpen) {
                tooltipVisible.value = true;
            }
        };

        const handleMouseLeave = () => {
            hovering.value = false;
            if (!isDragging.value && !props.tooltipOpen) {
                tooltipVisible.value = false;
            }
        };

        // 渲染刻度标记
        const renderMarks = () => {
            if (!props.marks || Object.keys(props.marks).length === 0) return null;

            // 获取两端标记值
            const markValues = Object.keys(props.marks).map(Number);
            const minMarkValue = Math.min(...markValues);
            const maxMarkValue = Math.max(...markValues);

            return (
                <div class={`absolute top-0 left-0 w-full h-full pointer-events-none ${props.vertical ? 'h-full w-auto' : 'w-full h-auto'}`}>
                    {Object.entries(props.marks).map(([markValue, mark]) => {
                        const markNum = parseFloat(markValue);
                        const percent = valueToPercent(markNum);

                        // 判断是否为端点标记
                        const isEndPoint = markNum === minMarkValue || markNum === maxMarkValue;

                        // 设置水平和垂直方向的标记位置
                        // 对于两端的标记特殊处理，其他的标记正常显示
                        let markPosition;
                        let specialAlignment = '';

                        if (props.vertical) {
                            if (props.reverse) {
                                markPosition = {
                                    top: `${100 - percent}%`,
                                    left: '100%',
                                    marginLeft: '10px'
                                };
                            } else {
                                markPosition = {
                                    bottom: `${percent}%`,
                                    left: '100%',
                                    marginLeft: '10px'
                                };
                            }
                        } else {
                            // 水平方向
                            if (markNum === minMarkValue) {
                                // 最左侧标记
                                markPosition = props.reverse
                                    ? { right: `${percent}%`, top: '50%', transform: 'translateY(-50%)' }
                                    : { left: `${percent}%`, top: '50%', marginLeft: '-20px', transform: 'translateY(-50%)' };
                                specialAlignment = props.reverse ? 'text-right' : 'text-left';
                            } else if (markNum === maxMarkValue) {
                                // 最右侧标记
                                markPosition = props.reverse
                                    ? { right: `${percent}%`, top: '50%', marginRight: '-20px', transform: 'translateY(-50%)' }
                                    : { left: `${percent}%`, top: '50%', marginLeft: '20px', transform: 'translateY(-50%)' };
                                specialAlignment = props.reverse ? 'text-left' : 'text-right';
                            } else {
                                // 中间标记保持原来的位置
                                markPosition = props.reverse
                                    ? { right: `${percent}%`, top: '100%', marginTop: '8px' }
                                    : { left: `${percent}%`, top: '100%', marginTop: '8px' };
                            }
                        }

                        let markContent;
                        if (typeof mark === 'function') {
                            markContent = mark();
                        } else if (typeof mark === 'object' && mark !== null && 'label' in mark) {
                            markContent = mark.label;
                        } else {
                            markContent = mark;
                        }

                        let markStyle = {};
                        if (typeof mark === 'object' && mark !== null && 'style' in mark) {
                            markStyle = mark.style || {};
                        }

                        // 设置不同的标记样式
                        const markClasses = isEndPoint && !props.vertical
                            ? `absolute select-none whitespace-nowrap ${specialAlignment}`
                            : props.vertical
                                ? "absolute transform -translate-y-1/2 select-none whitespace-nowrap"
                                : "absolute transform -translate-x-1/2 select-none whitespace-nowrap";

                        return (
                            <div
                                key={markValue}
                                class={markClasses}
                                style={{ ...markPosition, ...markStyle }}
                            >
                                <div class={`text-xs dark:text-gray-300 text-gray-500 transition-colors duration-200`}>
                                    {markContent}
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        };

        // 渲染刻度点
        const renderDots = () => {
            if (!props.dots) return null;

            const dots = [];
            const range = props.max - props.min;
            const step = props.step as number;

            // 确保步长是有效值
            if (!step || step <= 0) return null;

            // 计算步长点的数量
            const numSteps = Math.floor(range / step);

            for (let i = 0; i <= numSteps; i++) {
                const value = props.min + i * step;
                const percent = valueToPercent(value);

                // 判断点是否处于激活状态
                let isActive = false;

                if (Array.isArray(currentValue.value)) {
                    // 范围滑块：点位于范围内应该高亮
                    const [minVal, maxVal] = [
                        Math.min(currentValue.value[0], currentValue.value[1]),
                        Math.max(currentValue.value[0], currentValue.value[1])
                    ];

                    isActive = value >= minVal && value <= maxVal;
                } else {
                    // 单滑块：当前值大于等于点的值时，点应该高亮
                    const currentVal = currentValue.value as number;

                    if (props.reverse) {
                        // 反向模式下，值大于等于当前值的点应该高亮
                        isActive = value >= currentVal;
                    } else {
                        // 常规模式下，值小于等于当前值的点应该高亮
                        isActive = value <= currentVal;
                    }
                }

                // 计算点的位置
                const dotPosition = props.vertical
                    ? props.reverse
                        ? { top: `${100 - percent}%` }
                        : { bottom: `${percent}%` }
                    : props.reverse
                        ? { right: `${percent}%` }
                        : { left: `${percent}%` };

                // 通过使用 key，确保每个点在值变化时能够正确更新
                const dotKey = `dot-${i}-${isActive ? 'active' : 'inactive'}`;

                // 创建点元素，使用计算属性确保状态改变时组件会重新渲染
                dots.push(
                    <div
                        key={dotKey}
                        class={`
                          absolute w-1.5 h-1.5 transform -translate-x-1/2 -translate-y-1/2 rounded-full 
                          ${isActive
                                ? 'bg-blue-500 dark:bg-blue-400 shadow-md shadow-blue-300/50 dark:shadow-blue-900/50 scale-125'
                                : 'bg-gray-300 dark:bg-gray-600 scale-100'
                            }
                          transition-all duration-300 ease-in-out
                        `}
                        style={dotPosition}
                        title={`${value}`}
                    />
                );
            }

            return dots;
        };

        // 自动聚焦功能
        onMounted(() => {
            if (props.autofocus && sliderRef.value) {
                nextTick(() => {
                    sliderRef.value?.focus();
                });
            }
        });

        // 监听 modelValue 变化以保持内部状态同步
        watch(() => props.modelValue, () => {
            if (props.range && !Array.isArray(props.modelValue)) {
                emit('update:modelValue', [props.min, props.modelValue as number]);
            }
        });

        // 在 setup 中增加对 currentValue 的监听，确保点状态更新
        watch(currentValue, () => {
            // 强制重新渲染组件，确保点状态更新
            nextTick(() => {
                if (sliderRef.value) {
                    // 触发重绘
                    const currentDisplay = sliderRef.value.style.display;
                    sliderRef.value.style.display = 'none';
                    // 触发重排
                    void sliderRef.value.offsetHeight;
                    sliderRef.value.style.display = currentDisplay;
                }
            });
        }, { deep: true });

        // 改进 safeTipFormatter，更健壮地处理各种情况
        const safeTipFormatter = (value: number): string => {
            try {
                // 如果是 null，直接返回字符串形式的值
                if (props.tipFormatter === null) {
                    return String(value);
                }

                // 如果是函数，尝试调用它
                if (typeof props.tipFormatter === 'function') {
                    try {
                        const result = props.tipFormatter(value);
                        return result === null ? String(value) : String(result);
                    } catch (error) {
                        console.warn('Slider: tipFormatter function error', error);
                        return String(value);
                    }
                }

                // 对于其他情况，简单地返回字符串形式的值
                return String(value);
            } catch (error) {
                console.error('Slider: unexpected tipFormatter error', error);
                return String(value);
            }
        };

        // 使用响应式数据包装renderDots，确保点会随值的变化而更新
        const computedDots = computed(() => renderDots());

        return () => (
            <div
                ref={sliderRef}
                class={`
          relative 
          ${props.vertical ? 'h-48 w-6' : 'h-6 w-full'} 
          ${props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
          transition-opacity duration-200
          outline-none
          select-none
          ${props.marks && Object.keys(props.marks).length > 0 ? (props.vertical ? 'mr-8' : 'mx-6') : ''}
        `}
                tabindex={props.disabled ? undefined : 0}
                onClick={handleSliderClick}
                onMouseenter={handleMouseEnter}
                onMouseleave={handleMouseLeave}
            >
                {/* 轨道 */}
                <div
                    class={`
            absolute 
            ${props.vertical ? 'w-1 h-full left-1/2 transform -translate-x-1/2' : 'h-1 w-full top-1/2 transform -translate-y-1/2'} 
            bg-gray-200 dark:bg-gray-700 
            rounded-full
          `}
                >
                    {/* 轨道填充部分 */}
                    <div
                        class={`
              absolute 
              ${!props.included ? 'opacity-0' : ''} 
              ${props.disabled ? 'bg-gray-400 dark:bg-gray-500' : 'bg-blue-500 dark:bg-blue-400'} 
              rounded-full
              transition-all duration-200
            `}
                        style={trackStyle.value}
                    />
                </div>

                {/* 刻度点 - 使用计算属性确保动态更新 */}
                {computedDots.value}

                {/* 刻度标记 */}
                {renderMarks()}

                {/* 滑块 */}
                {thumbPercents.value.map((_, index) => (
                    <div
                        key={index}
                        class={`
              absolute 
              ${props.vertical ? 'left-1/2' : 'top-1/2'} 
              transform ${props.vertical ? '-translate-x-1/2' : '-translate-y-1/2'}
              w-4 h-4 
              ${props.disabled ? 'bg-gray-400 dark:bg-gray-500' : 'bg-white dark:bg-gray-800'} 
              border-2 
              ${props.disabled ? 'border-gray-300 dark:border-gray-600' : 'border-blue-500 dark:border-blue-400'} 
              rounded-full 
              shadow-md 
              cursor-grab 
              ${isDragging.value && activeThumbIndex.value === index ? 'cursor-grabbing scale-110' : ''} 
              transition-transform duration-200
              hover:scale-110
              focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700
              z-10
            `}
                        style={getThumbStyle(index)}
                        onMousedown={(e) => handleThumbMouseDown(e, index)}
                        tabindex={props.disabled ? undefined : 0}
                    >
                        {/* 提示工具 */}
                        {tooltipVisible.value && (
                            <div
                                class={`
                  absolute 
                  ${getTooltipPlacement() === 'top' ? 'bottom-full mb-2' : ''} 
                  ${getTooltipPlacement() === 'bottom' ? 'top-full mt-2' : ''} 
                  ${getTooltipPlacement() === 'left' ? 'right-full mr-2' : ''} 
                  ${getTooltipPlacement() === 'right' ? 'left-full ml-2' : ''} 
                  transform -translate-x-1/2 
                  px-2 py-1 
                  text-xs text-white 
                  bg-gray-700 dark:bg-gray-900 
                  rounded 
                  whitespace-nowrap 
                  z-20
                  opacity-100
                  transition-opacity duration-200
                `}
                            >
                                {safeTipFormatter(Array.isArray(currentValue.value)
                                    ? currentValue.value[index]
                                    : currentValue.value as number)}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }
});
