import { defineComponent, PropType, computed, provide, inject, ref, Ref, VNode, h, watch } from 'vue';

// 定义类型
type TimelineMode = 'left' | 'right' | 'alternate';
type TimelineItemPosition = 'left' | 'right';
type TimelineItemColor = 'blue' | 'red' | 'green' | string;

// 创建上下文符号
const TimelineSymbol = Symbol('timeline');

/**
 * TimelineItem 组件 - 时间轴的单个节点
 */
export const TimelineItem = defineComponent({
    name: 'TimelineItem',
    props: {
        // 圆圈颜色：blue, red, green 或自定义色值
        color: {
            type: String as PropType<TimelineItemColor>,
            default: 'blue'
        },
        // 自定义时间轴点
        dot: {
            type: [String, Object] as PropType<string | VNode>,
            default: undefined
        },
        // 设置标签
        label: {
            type: [String, Object] as PropType<string | VNode>,
            default: undefined
        },
        // 自定义节点位置
        position: {
            type: String as PropType<TimelineItemPosition>,
            default: undefined
        }
    },
    setup(props, { slots }) {
        // 注入上下文
        const timelineContext = inject<{
            mode: Ref<TimelineMode>,
            reverse: Ref<boolean>,
            currentIndex: Ref<number>,
            itemCount: Ref<number>
        }>(TimelineSymbol, {
            mode: ref('left' as TimelineMode),
            reverse: ref(false),
            currentIndex: ref(0),
            itemCount: ref(0)
        });

        // 计算当前项目的位置
        const itemPosition = computed(() => {
            if (props.position) {
                return props.position;
            }
            if (timelineContext.mode.value === 'alternate') {
                // 交替模式下，根据索引计算位置
                // 实际应用中，可以通过父组件提供索引来实现
                const index = timelineContext.currentIndex.value;
                return index % 2 === 0 ? 'left' : 'right';
            }
            return timelineContext.mode.value;
        });

        // 获取颜色类名
        const getColorClass = () => {
            // 预定义颜色映射
            const predefinedColors: Record<string, string> = {
                blue: 'bg-blue-500 dark:bg-blue-400',
                red: 'bg-red-500 dark:bg-red-400',
                green: 'bg-green-500 dark:bg-green-400'
            };

            return predefinedColors[props.color] || '';
        };

        // 自定义颜色样式
        const dotStyle = computed(() => {
            const predefinedColors: Record<string, boolean> = {
                blue: true,
                red: true,
                green: true
            };

            if (!predefinedColors[props.color] && props.color) {
                return { backgroundColor: props.color };
            }
            return {};
        });

        // 判断是否是第一个项目
        const isFirst = computed(() => timelineContext.currentIndex.value === 0);

        // 判断是否是最后一个项目
        const isLast = computed(() => {
            return timelineContext.currentIndex.value === timelineContext.itemCount.value - 1;
        });

        return () => {
            // 渲染自定义或默认的节点点 - 优化样式
            const dotEl = slots.dot ? (
                slots.dot()
            ) : (
                <div
                    class={`h-5 w-5 rounded-full border-4 border-white dark:border-gray-800 shadow-sm ${getColorClass()} transition-all duration-300 ease-in-out relative z-20`}
                    style={dotStyle.value}
                ></div>
            );

            // 渲染标签 - 添加最小宽度确保有足够空间显示文字
            const labelEl = props.label && (
                <div class={`timeline-label text-sm ${itemPosition.value === 'left' ? 'text-right mr-4' : 'text-left ml-4'
                    } text-gray-600 dark:text-gray-300 transition-colors duration-300 ease-in-out whitespace-nowrap overflow-hidden text-ellipsis min-w-[80px] max-w-[150px]`}>
                    {typeof props.label === 'string' ? props.label : props.label}
                </div>
            );

            // 渲染每个项目 - 添加hover效果
            return (
                <div
                    class={`timeline-item relative flex mb-8 last:mb-0 transition-all duration-300 ease-in-out ${itemPosition.value === 'right' ? 'flex-row-reverse' : ''
                        } timeline-item-hover-effect`}
                    data-first={isFirst.value}
                    data-last={isLast.value}
                >
                    {labelEl}
                    <div class="timeline-item-head flex-none flex items-center justify-center z-10 transition-transform duration-300 ease-in-out hover:scale-110 relative">
                        {dotEl}
                    </div>
                    <div class={`timeline-item-content flex-auto pb-6 ${itemPosition.value === 'left' ? 'pl-6' : 'pr-6'
                        } transition-all duration-300 ease-in-out`}>
                        {slots.default?.()}
                    </div>
                </div>
            );
        };
    }
});

/**
 * Timeline 组件 - 时间轴容器
 */
export const Timeline = defineComponent({
    name: 'Timeline',
    props: {
        // 设置模式，可以改变时间轴和内容的相对位置
        mode: {
            type: String as PropType<TimelineMode>,
            default: 'left',
            validator: (val: string) => ['left', 'right', 'alternate'].includes(val)
        },
        // 指定最后一个幽灵节点是否存在或内容
        pending: {
            type: [Boolean, String, Object] as PropType<boolean | string | VNode>,
            default: false
        },
        // 指定幽灵节点的时间图点
        pendingDot: {
            type: [String, Object] as PropType<string | VNode>,
            default: undefined
        },
        // 节点排序，是否倒序
        reverse: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { slots }) {
        // 创建响应式引用
        const modeRef = ref(props.mode);
        const reverseRef = ref(props.reverse);
        const currentIndex = ref(0);
        const itemCount = ref(0);
        const forceUpdate = ref(0);

        // 立即同步props到内部的响应式引用
        reverseRef.value = props.reverse;

        // 监听props变化，同步到内部的响应式引用并强制更新
        watch(() => props.mode, (newVal) => {
            modeRef.value = newVal;
            forceUpdate.value++;
        }, { immediate: true });

        watch(() => props.reverse, (newVal) => {
            reverseRef.value = newVal;
            forceUpdate.value++;
            // 确保在reverseRef更新后重新获取items并渲染
            setTimeout(() => {
                forceUpdate.value++;
            }, 0);
        }, { immediate: true });

        // 提供上下文
        provide(TimelineSymbol, {
            mode: modeRef,
            reverse: reverseRef,
            currentIndex,
            itemCount
        });

        // 计算待处理节点
        const pendingNode = computed(() => {
            if (!props.pending) return null;

            // 默认的待处理图标
            const pendingDot = props.pendingDot || (
                <i class="icon-[line-md--loading-alt-loop] text-blue-500 animate-spin"></i>
            );

            // 创建待处理节点
            return (
                <TimelineItem dot={pendingDot} class="timeline-item-pending" key="timeline-pending-item">
                    {typeof props.pending === 'boolean' ? null : props.pending}
                </TimelineItem>
            );
        });

        // 获取并处理时间轴项
        const getItems = () => {
            // 将forceUpdate引入计算，确保在其变化时重新执行
            const updateTrigger = forceUpdate.value;

            // 获取子元素并过滤
            const items = slots.default?.() || [];
            const filteredItems = items.filter(item =>
                item.type &&
                (item.type === TimelineItem ||
                    (typeof item.type === 'object' &&
                        'name' in item.type && item.type.name === 'TimelineItem'))
            );

            // 设置项目总数
            itemCount.value = filteredItems.length;

            // 根据反转属性调整顺序（直接使用props.reverse确保最新值）
            let orderedItems = [...filteredItems];
            if (props.reverse) {
                orderedItems.reverse();
            }

            // 创建带有明确key的新VNodes
            const itemsWithKeys = orderedItems.map((item, index) => {
                currentIndex.value = index;

                // 使用h函数创建新的VNode，确保key属性被正确设置
                return h(TimelineItem, {
                    ...item.props,
                    key: `timeline-item-${index}`,
                },
                    // 传递原始VNode的子元素和插槽
                    {
                        default: item.children && typeof item.children === 'object' ?
                            (item.children as any).default : undefined,
                        dot: item.children && typeof item.children === 'object' ?
                            (item.children as any).dot : undefined
                    });
            });

            // 因为h函数创建的VNode可能没有正确处理key，
            // 我们改为直接渲染一个div数组，每个div有明确的key并包含一个TimelineItem
            const itemsWithKeysAndWrapper = itemsWithKeys.map((item, index) => {
                return (
                    <div key={`timeline-item-wrapper-${index}`}>
                        {item}
                    </div>
                );
            });

            // 添加待处理节点
            if (pendingNode.value) {
                const pendingNodeWithKey = h(TimelineItem, {
                    ...pendingNode.value.props,
                    key: 'timeline-pending-item'
                }, {
                    default: pendingNode.value.children && typeof pendingNode.value === 'object' ?
                        (pendingNode.value.children as any).default :
                        undefined,
                    dot: () => props.pendingDot || <i class="icon-[line-md--loading-alt-loop] text-blue-500 animate-spin"></i>
                });

                const pendingNodeWithWrapper = (
                    <div key="timeline-pending-wrapper">
                        {pendingNodeWithKey}
                    </div>
                );

                const result = [...itemsWithKeysAndWrapper];
                if (!props.reverse) {
                    result.push(pendingNodeWithWrapper);
                } else {
                    result.unshift(pendingNodeWithWrapper);
                }
                return result;
            }

            return itemsWithKeysAndWrapper;
        };

        return () => {
            // 使用forceUpdate来触发重新渲染
            forceUpdate.value;

            const timelineItems = getItems();

            // 返回带有reverse属性标记的组件
            return (
                <div
                    class={`timeline relative pl-0 transition-all duration-300 ease-in-out`}
                    data-mode={props.mode}
                    data-reverse={props.reverse.toString()}
                >
                    <div class="timeline-items relative z-10">
                        {timelineItems}
                    </div>
                </div>
            );
        };
    }
});

// CSS 样式 - 更新样式以支持高亮效果
const timelineStyles = `
.timeline {
    position: relative;
    padding-bottom: 20px;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: #e2e8f0;
    z-index: 1;
    transition: all 0.3s ease;
}

.dark .timeline::before {
    background-color: #374151;
}

.timeline[data-mode="left"]::before {
    left: 16px;
    transform: none;
}

.timeline[data-mode="right"]::before {
    left: auto;
    right: 16px;
    transform: none;
}

.timeline-item {
    position: relative;
}

/* 添加伪元素用于每个节点自己的时间线，方便hover高亮 */
.timeline-item::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #e2e8f0;
    z-index: 1;
    transition: all 0.3s ease;
    height: 100%;
}

.dark .timeline-item::before {
    background-color: #374151;
}

.timeline[data-mode="left"] .timeline-item::before {
    left: 16px;
}

.timeline[data-mode="right"] .timeline-item::before {
    right: 16px;
}

.timeline[data-mode="alternate"] .timeline-item:nth-child(odd)::before {
    left: 50%;
    transform: translateX(-50%);
}

.timeline[data-mode="alternate"] .timeline-item:nth-child(even)::before {
    left: 50%;
    transform: translateX(-50%);
}

/* Hover高亮效果 */
.timeline-item-hover-effect:hover::before {
    background-color: #3b82f6;
    width: 3px;
}

.dark .timeline-item-hover-effect:hover::before {
    background-color: #60a5fa;
}

/* 节点样式 */
.timeline-item-head {
    position: relative;
    background-color: white;
    border-radius: 50%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    transition: all 0.3s ease;
}

.timeline-item-head > * {
    position: relative;
    z-index: 3;
    transition: all 0.3s ease;
}

.dark .timeline-item-head {
    background-color: #1f2937;
}

/* 标签样式，确保文字在一行显示且有足够宽度 */
.timeline-label {
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 80px;
    max-width: 150px;
    transition: all 0.3s ease;
}

/* Hover时标签样式变化 */
.timeline-item:hover .timeline-label {
    color: #3b82f6;
}

.dark .timeline-item:hover .timeline-label {
    color: #60a5fa;
}

/* Hover时头部样式变化 */
.timeline-item:hover .timeline-item-head {
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.dark .timeline-item:hover .timeline-item-head {
    box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.2);
}

.timeline-item-enter-active,
.timeline-item-leave-active {
    transition: all 0.5s ease;
}

.timeline-item-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.timeline-item-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

/* 内容区域在悬停时的效果 */
.timeline-item:hover .timeline-item-content > * {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.timeline-item-content > * {
    transition: all 0.3s ease;
}
`;

// 将样式添加到文档
const styleEl = document.createElement('style');
styleEl.innerHTML = timelineStyles;
document.head.appendChild(styleEl);

// 导出组件
export default {
    Timeline,
    TimelineItem
};
