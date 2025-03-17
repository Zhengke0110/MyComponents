import { defineComponent, ref, onMounted, onBeforeUnmount, watch, PropType, provide, computed } from 'vue';

export default defineComponent({
    name: 'Carousel',
    props: {
        // 自动播放
        autoplay: {
            type: Boolean,
            default: true
        },
        // 自动播放间隔，单位毫秒
        interval: {
            type: Number,
            default: 3000
        },
        // 是否无限循环
        loop: {
            type: Boolean,
            default: true
        },
        // 初始激活的索引
        initialIndex: {
            type: Number,
            default: 0
        },
        // 指示器位置：inside, outside, none
        indicatorPosition: {
            type: String as PropType<'inside' | 'outside' | 'none'>,
            default: 'inside'
        },
        // 指示器触发方式
        indicatorTrigger: {
            type: String as PropType<'click' | 'hover'>,
            default: 'click'
        },
        // 是否显示箭头
        arrow: {
            type: String as PropType<'always' | 'hover' | 'never'>,
            default: 'hover'
        },
        // 动画类型
        animationType: {
            type: String as PropType<'slide' | 'fade' | 'zoom' | 'flip'>,
            default: 'slide'
        },
        // 动画持续时间
        animationDuration: {
            type: Number,
            default: 300
        },
        // 新增: 懒加载
        lazyLoad: {
            type: Boolean,
            default: false
        },
        // 新增: 触摸滑动
        touchEnabled: {
            type: Boolean,
            default: true
        },
        // 新增: 滑动阈值 (像素)
        swipeThreshold: {
            type: Number,
            default: 50
        },
        // 新增: 键盘导航
        keyboardEnabled: {
            type: Boolean,
            default: true
        },
        // 新增: 暂停自动播放悬停
        pauseOnHover: {
            type: Boolean,
            default: true
        },
        // 新增: 自定义指示器样式
        indicatorStyle: {
            type: Object as PropType<Record<string, string>>,
            default: () => ({})
        },
        // 新增: 高度
        height: {
            type: String,
            default: '100%'
        }
    },
    emits: ['change', 'prev', 'next'],
    setup(props, { slots, emit }) {
        // 确保组件初始状态使用 props.initialIndex
        const activeIndex = ref(props.initialIndex);
        const items = ref<HTMLElement[]>([]);
        const containerRef = ref<HTMLElement | null>(null);
        const itemCount = ref(0);
        const timer = ref<NodeJS.Timeout | null>(null);
        const isHovering = ref(false);
        const isTransitioning = ref(false);

        // 新增: 触摸相关状态
        const touchStartX = ref(0);
        const touchEndX = ref(0);
        const isTouching = ref(false);

        // 控制显示方向
        const direction = ref<'ltr' | 'rtl'>('ltr');

        // 添加子项
        const addItem = (item: HTMLElement) => {
            items.value.push(item);
            itemCount.value = items.value.length;
        };

        // 移除子项
        const removeItem = (uid: number) => {
            const index = items.value.findIndex((item, idx) => idx === uid);
            if (index !== -1) {
                items.value.splice(index, 1);
                itemCount.value = items.value.length;
            }
        };

        // 设置激活的索引
        const setActiveItem = (index: number) => {
            if (itemCount.value === 0 || isTransitioning.value) return;

            // 防止快速切换导致的动画问题
            isTransitioning.value = true;
            setTimeout(() => {
                isTransitioning.value = false;
            }, props.animationDuration + 50);

            // 处理循环逻辑
            if (index < 0) {
                activeIndex.value = props.loop ? itemCount.value - 1 : 0;
            } else if (index >= itemCount.value) {
                activeIndex.value = props.loop ? 0 : itemCount.value - 1;
            } else {
                activeIndex.value = index;
            }

            emit('change', activeIndex.value);
        };

        // 下一项
        const next = () => {
            direction.value = 'ltr';
            setActiveItem(activeIndex.value + 1);
            emit('next');
        };

        // 上一项
        const prev = () => {
            direction.value = 'rtl';
            setActiveItem(activeIndex.value - 1);
            emit('prev');
        };

        // 自动播放
        const startTimer = () => {
            if (props.autoplay && props.interval > 0 && !timer.value) {
                timer.value = setInterval(() => {
                    if ((!props.pauseOnHover || !isHovering.value) && !isTouching.value) {
                        next();
                    }
                }, props.interval);
            }
        };

        // 停止自动播放
        const stopTimer = () => {
            if (timer.value) {
                clearInterval(timer.value);
                timer.value = null;
            }
        };

        // 监听鼠标事件
        const handleMouseEnter = () => {
            isHovering.value = true;
            if (props.autoplay && props.pauseOnHover) {
                stopTimer();
            }
        };

        const handleMouseLeave = () => {
            isHovering.value = false;
            startTimer();
        };

        // 新增: 触摸事件处理
        const handleTouchStart = (e: TouchEvent) => {
            if (!props.touchEnabled) return;

            isTouching.value = true;
            touchStartX.value = e.touches[0].clientX;
            touchEndX.value = touchStartX.value;

            // 暂停自动播放
            stopTimer();
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!props.touchEnabled || !isTouching.value) return;
            touchEndX.value = e.touches[0].clientX;
        };

        const handleTouchEnd = () => {
            if (!props.touchEnabled || !isTouching.value) return;

            const diff = touchStartX.value - touchEndX.value;

            if (Math.abs(diff) > props.swipeThreshold) {
                if (diff > 0) {
                    next(); // 向左滑动，显示下一项
                } else {
                    prev(); // 向右滑动，显示上一项
                }
            }

            isTouching.value = false;
            startTimer();
        };

        // 新增: 键盘导航
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!props.keyboardEnabled) return;

            if (e.key === 'ArrowLeft') {
                prev();
            } else if (e.key === 'ArrowRight') {
                next();
            }
        };

        // 挂载时初始化
        onMounted(() => {
            startTimer();

            // 新增: 添加键盘事件监听
            if (props.keyboardEnabled) {
                window.addEventListener('keydown', handleKeyDown);
            }

            // 初始聚焦以支持键盘导航
            if (containerRef.value) {
                containerRef.value.setAttribute('tabindex', '0');
            }
        });

        // 卸载前清理
        onBeforeUnmount(() => {
            stopTimer();
            if (props.keyboardEnabled) {
                window.removeEventListener('keydown', handleKeyDown);
            }
        });

        // 监听属性变化
        watch(() => props.autoplay, (newValue) => {
            if (newValue) {
                startTimer();
            } else {
                stopTimer();
            }
        });

        // 监听初始索引变化
        watch(() => props.initialIndex, (newValue) => {
            setActiveItem(newValue);
        });

        // 监听键盘导航属性变化
        watch(() => props.keyboardEnabled, (newValue) => {
            if (newValue) {
                window.addEventListener('keydown', handleKeyDown);
            } else {
                window.removeEventListener('keydown', handleKeyDown);
            }
        });

        // 提供给子组件的上下文，确保 activeIndex 是响应式的
        provide('carousel', {
            activeIndex,
            addItem,
            removeItem,
            itemCount,
            animationType: computed(() => props.animationType),
            animationDuration: computed(() => props.animationDuration),
            direction: computed(() => direction.value),
            lazyLoad: computed(() => props.lazyLoad)
        });

        // 计算自定义样式
        const computedIndicatorStyle = computed(() => {
            return {
                ...props.indicatorStyle
            };
        });

        return () => (
            <div
                class={`carousel relative overflow-hidden w-full transition-all
                  bg-white dark:bg-gray-800 shadow-md group`}
                style={{ height: props.height }}
                ref={containerRef}
                onMouseenter={handleMouseEnter}
                onMouseleave={handleMouseLeave}
                onTouchstart={handleTouchStart}
                onTouchmove={handleTouchMove}
                onTouchend={handleTouchEnd}
                tabindex="0"
                role="region"
                aria-roledescription="carousel"
                aria-label="图片轮播"
            >
                <div class="carousel-items relative w-full h-full">
                    {slots.default?.()}
                </div>

                {/* 前进/后退箭头 */}
                {props.arrow !== 'never' && (
                    <>
                        <button
                            type="button"
                            onClick={prev}
                            class={`carousel-arrow carousel-arrow-left absolute top-1/2 left-2 transform -translate-y-1/2
                            bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/50
                            rounded-full p-2 text-gray-800 dark:text-gray-200 transition-all duration-300
                            ${props.arrow === 'always' ? 'opacity-100' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}
                            aria-label="上一页"
                            style={{ top: '50%', transform: 'translateY(-50%)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={next}
                            class={`carousel-arrow carousel-arrow-right absolute top-1/2 right-2 transform -translate-y-1/2
                            bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/50
                            rounded-full p-2 text-gray-800 dark:text-gray-200 transition-all duration-300
                            ${props.arrow === 'always' ? 'opacity-100' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}
                            aria-label="下一页"
                            style={{ top: '50%', transform: 'translateY(-50%)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                {/* 指示器 - 确保正确绑定 activeIndex */}
                {props.indicatorPosition !== 'none' && (
                    <div
                        class={`carousel-indicators flex justify-center items-center gap-2 z-20
                              ${props.indicatorPosition === 'outside'
                                ? 'mt-4 py-2'
                                : 'absolute left-0 right-0 bottom-4'}`}
                        role="tablist"
                        aria-label="轮播指示器"
                    >
                        {Array.from({ length: itemCount.value }).map((_, index) => (
                            <button
                                key={`indicator-${index}`}
                                type="button"
                                class={`carousel-indicator rounded-full transition-all duration-300 
                                      ${index === activeIndex.value
                                        ? 'bg-primary-500 dark:bg-primary-400 w-6 h-2.5 shadow-md active-indicator'
                                        : 'bg-gray-300 dark:bg-gray-600 w-2.5 h-2.5 hover:bg-gray-400 dark:hover:bg-gray-500'}`}
                                style={computedIndicatorStyle.value}
                                onClick={() => setActiveItem(index)}
                                onMouseenter={() => {
                                    if (props.indicatorTrigger === 'hover') {
                                        setActiveItem(index);
                                    }
                                }}
                                aria-label={`滑动到第 ${index + 1} 项`}
                                aria-selected={index === activeIndex.value ? 'true' : 'false'}
                                role="tab"
                            ></button>
                        ))}
                    </div>
                )}
            </div>
        );
    }
});
