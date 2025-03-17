import { defineComponent, ref, inject, computed, onMounted, onBeforeUnmount, Ref } from 'vue';

export default defineComponent({
    name: 'CarouselItem',
    props: {
        // 自定义类名
        customClass: {
            type: String,
            default: ''
        },
        // 图片URL（如果是图片轮播）
        imageUrl: {
            type: String,
            default: ''
        },
        // 图片alt文本
        imageAlt: {
            type: String,
            default: '轮播图片'
        }
    },
    setup(props, { slots }) {
        const carousel = inject('carousel', {
            activeIndex: ref(0),
            addItem: (_: any) => { },
            removeItem: (_: any) => { },
            itemCount: ref(0),
            animationType: computed(() => 'slide'),
            animationDuration: computed(() => 300),
            direction: computed(() => 'ltr' as const),
            lazyLoad: computed(() => false)
        });

        const uid = ref(0);
        const loaded = ref(false);
        const itemRef = ref<HTMLElement | null>(null);

        // 判断是否为当前激活的项
        const isActive = computed(() => carousel.activeIndex.value === uid.value);

        // 判断是否应该加载（懒加载逻辑）
        const shouldLoad = computed(() => {
            if (!carousel.lazyLoad.value) return true;
            const active = carousel.activeIndex.value;
            // 加载当前、前一个和后一个项
            return uid.value === active ||
                uid.value === (active + 1) % carousel.itemCount.value ||
                uid.value === (active - 1 + carousel.itemCount.value) % carousel.itemCount.value;
        });

        // 计算item的样式
        const itemStyle = computed(() => {
            const duration = carousel.animationDuration.value;

            // 基础样式
            const style = {
                transition: `all ${duration}ms ease`,
                position: 'absolute' as const,
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                visibility: isActive.value ? 'visible' as const : 'hidden' as const,
                zIndex: isActive.value ? 10 : 0
            };

            if (carousel.animationType.value === 'fade') {
                return {
                    ...style,
                    opacity: isActive.value ? 1 : 0
                };
            }

            if (carousel.animationType.value === 'zoom') {
                return {
                    ...style,
                    opacity: isActive.value ? 1 : 0,
                    transform: isActive.value ? 'scale(1)' : 'scale(0.85)'
                };
            }

            if (carousel.animationType.value === 'flip') {
                return {
                    ...style,
                    backfaceVisibility: 'hidden' as const,
                    transform: isActive.value
                        ? 'rotateY(0deg)'
                        : `rotateY(${carousel.direction.value === 'ltr' ? '180deg' : '-180deg'})`
                };
            }

            // 默认滑动效果
            const direction = carousel.direction.value;
            const translate = isActive.value
                ? 'translate3d(0, 0, 0)'
                : `translate3d(${direction === 'ltr' ? '100%' : '-100%'}, 0, 0)`;

            return {
                ...style,
                transform: translate
            };
        });

        onMounted(() => {
            if (itemRef.value) {
                // 在挂载时将自己添加到轮播组件的管理
                carousel.addItem(itemRef.value);
                // 保存自己的位置索引
                uid.value = carousel.itemCount.value - 1;

                // 如果不是懒加载或者应该加载，立即设置为已加载
                if (!carousel.lazyLoad.value || shouldLoad.value) {
                    loaded.value = true;
                }
            }
        });

        onBeforeUnmount(() => {
            carousel.removeItem(uid.value);
        });

        // 监听是否应该加载
        if (carousel.lazyLoad) {
            computed(() => {
                if (shouldLoad.value) {
                    loaded.value = true;
                }
            });
        }

        return () => (
            <div
                ref={itemRef}
                class={`carousel-item ${props.customClass}`}
                style={itemStyle.value}
                role="tabpanel"
                aria-hidden={!isActive.value}
            >
                {props.imageUrl && loaded.value ? (
                    <img
                        src={props.imageUrl}
                        alt={props.imageAlt}
                        class="w-full h-full object-cover"
                        loading={carousel.lazyLoad.value ? "lazy" as const : "eager" as const}
                    />
                ) : null}
                {slots.default?.()}
            </div>
        );
    }
});
