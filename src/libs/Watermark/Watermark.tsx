import { defineComponent, ref, onMounted, watch, onUnmounted, computed, PropType, nextTick } from 'vue';

// 水印字体属性接口
interface WatermarkFont {
    color: string;
    fontSize: number;
    fontWeight: 'normal' | 'light' | 'weight' | number;
    fontFamily: string;
    fontStyle: 'none' | 'normal' | 'italic' | 'oblique';
}

// 默认字体设置
const defaultFont: WatermarkFont = {
    color: 'rgba(0, 0, 0, 0.25)', // 增加不透明度，让水印更明显
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontStyle: 'normal',
};

// 暗色模式默认字体设置
const darkDefaultFont: WatermarkFont = {
    ...defaultFont,
    color: 'rgba(255, 255, 255, 0.25)', // 增加不透明度，让暗色模式下的水印更明显
};

export default defineComponent({
    name: 'Watermark',

    props: {
        // 水印宽度
        width: {
            type: Number,
            default: 120,
        },
        // 水印高度
        height: {
            type: Number,
            default: 64,
        },
        // 旋转角度
        rotate: {
            type: Number,
            default: -22,
        },
        // 水印层级
        zIndex: {
            type: Number,
            default: 9,
        },
        // 水印图片
        image: {
            type: String,
            default: '',
        },
        // 水印文字内容
        content: {
            type: [String, Array] as PropType<string | string[]>,
            default: '',
        },
        // 字体样式
        font: {
            type: Object as PropType<Partial<WatermarkFont>>,
            default: () => ({}),
        },
        // 暗色模式字体样式
        darkFont: {
            type: Object as PropType<Partial<WatermarkFont>>,
            default: () => ({}),
        },
        // 水印之间的间距
        gap: {
            type: Array as unknown as PropType<[number, number]>,
            default: () => [100, 100],
        },
        // 水印偏移量
        offset: {
            type: Array as unknown as PropType<[number, number]>,
            default: undefined,
        },
        // 是否使用全局暗色模式 (可从外部传入)
        isDarkMode: {
            type: Boolean,
            default: undefined,
        },
        // 是否启用防篡改监控
        monitor: {
            type: Boolean,
            default: true,
        },
        // 水印容器类名
        containerClassName: {
            type: String,
            default: '',
        },
        // 是否始终跟随页面滚动（fixed 定位）
        followScroll: {
            type: Boolean,
            default: false,
        },
        // 自定义渲染透明度
        opacity: {
            type: Number,
            default: 1,
        },
        // 是否开启动画
        enableAnimation: {
            type: Boolean,
            default: false,
        },
        // 动画持续时间（毫秒）
        animationDuration: {
            type: Number,
            default: 3000,
        },
    },

    setup(props, { slots }) {
        // 容器引用
        const watermarkRef = ref<HTMLDivElement | null>(null);
        // 水印层引用
        const watermarkLayerRef = ref<HTMLDivElement | null>(null);
        // 水印画布
        const canvas = ref<HTMLCanvasElement | null>(null);
        // 水印基准URL
        const base64Url = ref<string>('');
        // 安全定时器
        const reRenderId = ref<number | null>(null);
        // 监控防篡改的 MutationObserver
        const observer = ref<MutationObserver | null>(null);

        // 计算有效的字体设置
        const effectiveFont = computed(() => {
            const darkMode = props.isDarkMode !== undefined
                ? props.isDarkMode
                : typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

            const baseFont = darkMode ? darkDefaultFont : defaultFont;
            const customFont = darkMode ? props.darkFont : props.font;

            return {
                ...baseFont,
                ...customFont,
            };
        });

        // 计算有效的偏移量
        const effectiveOffset = computed<[number, number]>(() => {
            if (props.offset) {
                return props.offset;
            }
            return [props.gap[0] / 2, props.gap[1] / 2];
        });

        // 绘制水印
        const renderWatermark = () => {
            if (!watermarkRef.value) return;

            const containerWidth = watermarkRef.value.offsetWidth;
            const containerHeight = watermarkRef.value.offsetHeight;

            if (!containerWidth || !containerHeight) {
                // 等待容器尺寸计算完成
                if (reRenderId.value !== null) {
                    window.cancelAnimationFrame(reRenderId.value);
                }
                reRenderId.value = window.requestAnimationFrame(renderWatermark);
                return;
            }

            // 创建或重用画布
            const ctx = getCanvasContext();
            if (!ctx || !canvas.value) return;

            const canvasWidth = getMarkSize(props.width, props.content, effectiveFont.value);
            const canvasHeight = getMarkSize(props.height, props.content, effectiveFont.value);

            const gapX = props.gap[0];
            const gapY = props.gap[1];
            const offsetLeft = effectiveOffset.value[0];
            const offsetTop = effectiveOffset.value[1];

            // 设置画布尺寸
            canvas.value.width = canvasWidth;
            canvas.value.height = canvasHeight;

            // 清空画布
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            // 设置透明度
            ctx.globalAlpha = props.opacity;

            // 旋转画布
            if (props.rotate !== 0) {
                ctx.translate(canvasWidth / 2, canvasHeight / 2);
                ctx.rotate((props.rotate * Math.PI) / 180);
                ctx.translate(-canvasWidth / 2, -canvasHeight / 2);
            }

            // 根据图片或文字内容绘制水印
            if (props.image) {
                renderImage(ctx, canvasWidth, canvasHeight);
            } else if (props.content) {
                renderText(ctx, canvasWidth, canvasHeight);
            }

            // 将画布内容转为 base64 URL
            base64Url.value = canvas.value.toDataURL();

            // 设置水印层的样式
            if (watermarkLayerRef.value) {
                const layerStyle = watermarkLayerRef.value.style;

                layerStyle.zIndex = `${props.zIndex}`;
                layerStyle.position = props.followScroll ? 'fixed' : 'absolute';
                layerStyle.top = '0';
                layerStyle.left = '0';
                layerStyle.width = '100%';
                layerStyle.height = '100%';
                layerStyle.backgroundImage = `url('${base64Url.value}')`;
                layerStyle.backgroundRepeat = 'repeat';
                layerStyle.backgroundPosition = `${offsetLeft}px ${offsetTop}px`;
                layerStyle.pointerEvents = 'none';

                // 设置背景大小
                const sizeX = canvasWidth + gapX;
                const sizeY = canvasHeight + gapY;
                layerStyle.backgroundSize = `${sizeX}px ${sizeY}px`;

                // 添加动画效果（如果启用）
                if (props.enableAnimation) {
                    layerStyle.animation = `watermark-move ${props.animationDuration}ms linear infinite`;
                } else {
                    layerStyle.animation = 'none';
                }
            }

            // 应用后开始监控防篡改
            if (props.monitor) {
                startMonitoring();
            }
        };

        // 获取画布上下文
        const getCanvasContext = () => {
            if (!canvas.value) {
                canvas.value = document.createElement('canvas');
            }
            return canvas.value.getContext('2d');
        };

        // 计算水印尺寸
        const getMarkSize = (
            size: number,
            content: string | string[] | undefined,
            font: WatermarkFont,
        ): number => {
            if (content && typeof content === 'string') {
                return size;
            }
            return size;
        };

        // 绘制图片水印
        const renderImage = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
            // 优先使用内联SVG作为备选，防止外部图片加载失败
            const fallbackImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='${Math.floor(width / 8)}' font-weight='bold' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3ELOGO%3C/text%3E%3C/svg%3E`;

            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.referrerPolicy = 'no-referrer';
            img.src = props.image;

            // 添加加载超时
            let isLoaded = false;
            const timeout = setTimeout(() => {
                if (!isLoaded) {
                    console.warn('Watermark image load timeout, using fallback');
                    loadFallbackImage();
                }
            }, 3000); // 3秒超时

            img.onload = () => {
                isLoaded = true;
                clearTimeout(timeout);
                if (!canvas.value || !ctx) return;

                try {
                    ctx.drawImage(img, 0, 0, width, height);
                    updateWatermarkBase64();
                } catch (error) {
                    console.error('Failed to draw image:', error);
                    loadFallbackImage();
                }
            };

            img.onerror = () => {
                isLoaded = true;
                clearTimeout(timeout);
                console.warn('Watermark image load error, using fallback');
                loadFallbackImage();
            };

            // 加载备选图片
            const loadFallbackImage = () => {
                const fallbackImg = new Image();
                fallbackImg.onload = () => {
                    if (!canvas.value || !ctx) return;
                    ctx.drawImage(fallbackImg, 0, 0, width, height);
                    updateWatermarkBase64();
                };
                fallbackImg.src = fallbackImage;
            };

            // 更新水印的base64图像
            const updateWatermarkBase64 = () => {
                if (!canvas.value) return;
                base64Url.value = canvas.value.toDataURL();
                if (watermarkLayerRef.value) {
                    watermarkLayerRef.value.style.backgroundImage = `url('${base64Url.value}')`;
                }
            };
        };

        // 绘制文字水印
        const renderText = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
            if (!props.content) return;

            // 设置字体样式
            const { color, fontSize, fontFamily, fontWeight, fontStyle } = effectiveFont.value;
            ctx.fillStyle = color;
            ctx.font = `${fontStyle !== 'none' ? fontStyle : ''} ${fontWeight} ${fontSize}px ${fontFamily}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // 如果内容是字符串数组，则逐行绘制
            if (Array.isArray(props.content)) {
                const lineHeight = fontSize * 1.5;
                const totalHeight = props.content.length * lineHeight;
                const startY = (height - totalHeight) / 2 + lineHeight / 2;

                props.content.forEach((text, index) => {
                    ctx.fillText(text, width / 2, startY + index * lineHeight);
                });
            } else {
                // 单行文本
                ctx.fillText(props.content, width / 2, height / 2);
            }
        };

        // 启动防篡改监控
        const startMonitoring = () => {
            if (observer.value || !props.monitor || !watermarkRef.value || !watermarkLayerRef.value) return;

            // 停止之前的监控
            stopMonitoring();

            // 创建 MutationObserver 实例
            observer.value = new MutationObserver((mutations) => {
                let needsRestore = false;

                for (const mutation of mutations) {
                    if (mutation.type === 'childList') {
                        // 水印层被移除，需要恢复
                        if (mutation.removedNodes.length && Array.from(mutation.removedNodes).includes(watermarkLayerRef.value!)) {
                            needsRestore = true;
                            break;
                        }
                    } else if (mutation.type === 'attributes' && mutation.target === watermarkLayerRef.value) {
                        // 水印层属性被修改，需要恢复
                        needsRestore = true;
                        break;
                    }
                }

                if (needsRestore) {
                    // 恢复水印
                    renderWatermark();
                }
            });

            // 开始监视容器及水印层
            observer.value.observe(watermarkRef.value, {
                childList: true,
                attributes: true,
                subtree: true,
                attributeFilter: ['style'],
            });
        };

        // 停止监控
        const stopMonitoring = () => {
            if (observer.value) {
                observer.value.disconnect();
                observer.value = null;
            }
        };

        // 组件挂载时初始化水印
        onMounted(() => {
            renderWatermark();

            // 添加窗口大小变化监听器
            window.addEventListener('resize', renderWatermark);
        });

        // 监听属性变化
        watch(
            () => [
                props.width,
                props.height,
                props.rotate,
                props.image,
                props.content,
                props.gap,
                props.offset,
                props.zIndex,
                props.font,
                props.darkFont,
                props.isDarkMode,
                props.opacity,
                props.followScroll,
                props.enableAnimation,
            ],
            () => {
                renderWatermark();
            },
            { deep: true },
        );

        // 监听暗色模式的变化
        if (typeof window !== 'undefined') {
            const observer = new MutationObserver(() => {
                nextTick(() => {
                    renderWatermark();
                });
            });

            onMounted(() => {
                observer.observe(document.documentElement, {
                    attributes: true,
                    attributeFilter: ['class'],
                });
            });

            onUnmounted(() => {
                observer.disconnect();
            });
        }

        // 组件卸载时清理资源
        onUnmounted(() => {
            if (reRenderId.value !== null) {
                window.cancelAnimationFrame(reRenderId.value);
            }
            stopMonitoring();
            window.removeEventListener('resize', renderWatermark);
        });

        return () => (
            <div
                ref={watermarkRef}
                class={`relative overflow-hidden ${props.containerClassName}`}
                style={{ position: 'relative' }}
            >
                {slots.default?.()}
                <div
                    ref={watermarkLayerRef}
                    class="watermark-layer"
                />
                {/* 添加水印动画的样式 */}
                <style scoped>{`
          @keyframes watermark-move {
            from {
              background-position: ${effectiveOffset.value[0]}px ${effectiveOffset.value[1]}px;
            }
            to {
              background-position: ${effectiveOffset.value[0] + props.width}px ${effectiveOffset.value[1] + props.height}px;
            }
          }
        `}</style>
            </div>
        );
    },
});
