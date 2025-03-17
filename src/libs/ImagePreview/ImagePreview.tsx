import { defineComponent, ref, PropType, Teleport, computed, watch, nextTick, toRef, onMounted, onBeforeUnmount, inject } from 'vue';
import './style.css';

// 定义图片数据接口
export interface ImageItem {
  url: string;
  alt?: string;
  thumbnailUrl?: string;
}

export default defineComponent({
  name: 'ImagePreview',
  props: {
    // 图片列表
    images: {
      type: Array as PropType<ImageItem[]>,
      required: true,
    },
    // 是否可见
    visible: {
      type: Boolean,
      default: false,
    },
    // 当前索引
    current: {
      type: Number,
      default: 0,
    },
    // 点击遮罩层是否关闭
    maskClosable: {
      type: Boolean,
      default: true,
    },
    // 切换时是否有动画
    animated: {
      type: Boolean,
      default: true,
    },
    // 自定义z-index
    zIndex: {
      type: Number,
      default: 1000,
    },
    // 缩放配置
    zoom: {
      type: Object,
      default: () => ({ minScale: 0.5, maxScale: 3, step: 0.5 }),
    },
  },
  emits: ['update:visible', 'update:current', 'close', 'change'],

  setup(props, { emit }) {
    // 内部状态
    const isVisible = ref(props.visible);
    const currentIndex = ref(props.current);
    const scale = ref(1);
    const rotating = ref(0);
    const isMoving = ref(false);
    const startX = ref(0);
    const startY = ref(0);
    const moveX = ref(0);
    const moveY = ref(0);
    const loading = ref(true);
    const hasError = ref(false);

    // 注入失败图片URL列表
    const failedImageUrls = inject<Set<string>>('failedImageUrls', new Set());

    // 监听外部属性变化
    watch(() => props.visible, (val) => {
      isVisible.value = val;
      if (val) {
        document.body.style.overflow = 'hidden';
        nextTick(() => {
          resetImageStatus();
        });
      } else {
        document.body.style.overflow = '';
      }
    });

    watch(() => props.current, (val) => {
      currentIndex.value = val;
    });

    // 计算属性
    const currentImage = computed(() => {
      return props.images[currentIndex.value] || null;
    });

    // 检查当前图片是否已失败
    const isCurrentImageFailed = computed(() => {
      if (!currentImage.value) return false;
      return failedImageUrls.has(currentImage.value.url);
    });

    const imageStyle = computed(() => {
      return {
        transform: `scale(${scale.value}) rotate(${rotating.value}deg) translate(${moveX.value}px, ${moveY.value}px)`,
        transition: isMoving.value ? 'none' : 'transform 0.3s',
      }
    });

    // 方法
    const handleClose = () => {
      isVisible.value = false;
      emit('update:visible', false);
      emit('close');
    };

    const prev = () => {
      if (currentIndex.value > 0) {
        currentIndex.value -= 1;
        emit('update:current', currentIndex.value);
        emit('change', currentIndex.value);
        resetImageStatus();
      }
    };

    const next = () => {
      if (currentIndex.value < props.images.length - 1) {
        currentIndex.value += 1;
        emit('update:current', currentIndex.value);
        emit('change', currentIndex.value);
        resetImageStatus();
      }
    };

    const resetImageStatus = () => {
      scale.value = 1;
      rotating.value = 0;
      moveX.value = 0;
      moveY.value = 0;
      loading.value = true;
      hasError.value = false;
    };

    const handleImageLoad = () => {
      loading.value = false;
    };

    // 增强图片错误处理
    const handleImageError = () => {
      loading.value = false;
      hasError.value = true;
      
      // 如果有当前图片，将其URL添加到失败列表中
      if (currentImage.value) {
        failedImageUrls.add(currentImage.value.url);
        
        // 尝试持久化存储失败URL
        try {
          const storedFailedUrls = JSON.parse(localStorage.getItem('failedImageUrls') || '[]');
          if (!storedFailedUrls.includes(currentImage.value.url)) {
            storedFailedUrls.push(currentImage.value.url);
            localStorage.setItem('failedImageUrls', JSON.stringify(storedFailedUrls));
          }
        } catch (error) {
          console.error('无法存储失败的图片URL:', error);
        }
      }
    };

    // 检查图片是否已知失败
    const checkImageBeforeLoad = () => {
      if (currentImage.value && failedImageUrls.has(currentImage.value.url)) {
        // 如果图片已知失败，直接标记为错误，不发送请求
        loading.value = false;
        hasError.value = true;
        return false;
      }
      return true;
    };

    // 监听图片切换以检查失败状态
    watch(currentImage, () => {
      if (currentImage.value) {
        checkImageBeforeLoad();
      }
    });

    const handleZoomIn = () => {
      if (scale.value < props.zoom.maxScale) {
        scale.value += props.zoom.step;
      }
    };

    const handleZoomOut = () => {
      if (scale.value > props.zoom.minScale) {
        scale.value -= props.zoom.step;
      }
    };

    const handleRotateLeft = () => {
      rotating.value = (rotating.value - 90) % 360;
    };

    const handleRotateRight = () => {
      rotating.value = (rotating.value + 90) % 360;
    };

    const handleReset = () => {
      resetImageStatus();
    };

    // 拖拽图片
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      isMoving.value = true;
      startX.value = e.clientX;
      startY.value = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMoving.value) return;

      const deltaX = e.clientX - startX.value;
      const deltaY = e.clientY - startY.value;

      moveX.value += deltaX / scale.value;
      moveY.value += deltaY / scale.value;

      startX.value = e.clientX;
      startY.value = e.clientY;
    };

    const handleMouseUp = () => {
      isMoving.value = false;
    };

    // 键盘事件处理
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVisible.value) return;

      switch (e.key) {
        case 'Escape':
          handleClose();
          break;
        case 'ArrowLeft':
          prev();
          break;
        case 'ArrowRight':
          next();
          break;
        case '+':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case 'r':
          handleRotateRight();
          break;
      }
    };

    // 添加/移除全局事件监听
    onMounted(() => {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.overflow = '';
    });

    return {
      isVisible,
      currentIndex,
      currentImage,
      imageStyle,
      loading,
      hasError,
      scale,
      rotating,
      handleClose,
      prev,
      next,
      handleImageLoad,
      handleImageError,
      handleZoomIn,
      handleZoomOut,
      handleRotateLeft,
      handleRotateRight,
      handleReset,
      handleMouseDown,
      resetImageStatus,
      isCurrentImageFailed,
      checkImageBeforeLoad,
    };
  },

  render() {
    if (!this.isVisible) return null;

    return (
      <Teleport to="body">
        <div
          class="fixed inset-0 z-[var(--z-index)] flex items-center justify-center backdrop-blur-sm transition-all duration-300 ease-out"
          style={{ '--z-index': this.zIndex }}
          onClick={this.maskClosable ? this.handleClose : undefined}
        >
          {/* 背景层 */}
          <div class="absolute inset-0 bg-black/70 dark:bg-black/85 animate-fadeIn"></div>
          
          {/* 顶部工具栏 */}
          <div class="absolute top-0 left-0 right-0 h-16 flex justify-between items-center px-6 z-10">
            <div class="text-white/80 text-sm font-medium tracking-wider">
              {this.currentImage?.alt || `图片 ${this.currentIndex + 1}`}
            </div>
            <button
              class="w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-neo-sm"
              onClick={(e) => { e.stopPropagation(); this.handleClose(); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 图片展示区域 */}
          <div
            class="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {this.currentImage && (
              <div class="relative max-w-full max-h-full overflow-hidden transition-all duration-300 ease-out">
                {this.loading && !this.isCurrentImageFailed && (
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="loading-spinner"></div>
                  </div>
                )}

                {(this.hasError || this.isCurrentImageFailed) && (
                  <div class="absolute inset-0 flex flex-col items-center justify-center text-white/90 animate-fadeIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-6 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="mt-3 font-medium tracking-wide">图片加载失败</p>
                  </div>
                )}

                {/* 仅在图片未标记为已失败时加载图片 */}
                {!this.isCurrentImageFailed && (
                  <img
                    src={this.currentImage.url}
                    alt={this.currentImage.alt || '图片预览'}
                    class={[
                      'max-w-full max-h-full object-contain transition-opacity duration-500',
                      this.loading || this.hasError ? 'opacity-0' : 'opacity-100',
                      !this.loading && !this.hasError ? 'shadow-2xl' : ''
                    ]}
                    style={this.imageStyle}
                    onLoad={this.handleImageLoad}
                    onError={this.handleImageError}
                    onMousedown={this.handleMouseDown}
                  />
                )}
              </div>
            )}
          </div>

          {/* 左右箭头 */}
          {this.currentIndex > 0 && (
            <button
              class="absolute left-5 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 shadow-neo group"
              onClick={(e) => { e.stopPropagation(); this.prev(); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:-translate-x-0.5 transition-transform duration-200">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {this.currentIndex < this.images.length - 1 && (
            <button
              class="absolute right-5 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 shadow-neo group"
              onClick={(e) => { e.stopPropagation(); this.next(); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-0.5 transition-transform duration-200">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          {/* 底部工具栏 */}
          <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2 backdrop-blur-md bg-white/10 rounded-full px-2 py-1.5 shadow-neo">
            <button
              class="w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); this.handleZoomOut(); }}
              title="缩小"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" />
              </svg>
            </button>

            <div class="text-white/70 text-xs mx-1">{Math.round(this.scale * 100)}%</div>

            <button
              class="w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); this.handleZoomIn(); }}
              title="放大"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>

            <div class="w-px h-6 bg-white/20 mx-1"></div>

            <button
              class="w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); this.handleRotateLeft(); }}
              title="向左旋转"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-9 9z" />
                <path d="M9 9L3 12l6 3" />
              </svg>
            </button>

            <button
              class="w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); this.handleRotateRight(); }}
              title="向右旋转"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9z" />
                <path d="M15 9l6 3-6 3" />
              </svg>
            </button>

            <div class="w-px h-6 bg-white/20 mx-1"></div>

            <button
              class="w-10 h-10 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
              onClick={(e) => { e.stopPropagation(); this.handleReset(); }}
              title="重置"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </button>
          </div>

          {/* 底部缩略图 */}
          {this.images.length > 1 && (
            <div class="absolute bottom-24 left-0 right-0 flex justify-center">
              <div class="overflow-x-auto py-2 px-6 max-w-full">
                <div class="flex space-x-3 thumbnails-container">
                  {this.images.map((image, index) => (
                    <div
                      key={image.url + index}
                      class={[
                        'relative thumbnail-item',
                        index === this.currentIndex ? 'active' : ''
                      ]}
                      onClick={(e) => {
                        e.stopPropagation();
                        this.currentIndex = index;
                        this.$emit('update:current', index);
                        this.$emit('change', index);
                        this.resetImageStatus();
                      }}
                    >
                      <div class="w-20 h-20 overflow-hidden rounded-lg">
                        <img
                          src={image.thumbnailUrl || image.url}
                          alt={image.alt || `图片${index + 1}`}
                          class="w-full h-full object-cover"
                        />
                      </div>
                      <div class="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 scale-x-0 transition-transform duration-200 origin-left thumbnail-indicator"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 页码指示器 */}
          <div class="absolute top-5 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full backdrop-blur-md bg-white/10 text-white/90 text-xs font-medium tracking-wider shadow-neo-sm">
            {this.currentIndex + 1} / {this.images.length}
          </div>
        </div>
      </Teleport>
    );
  }
});
