import { defineComponent, ref, computed, watch, onMounted, onUnmounted, nextTick, PropType } from 'vue';
import {
  getImgElements,
  getAllImg,
  onComplateImgs,
  getMinHeight,
  getMaxHeight,
  getMinHeightColumn,
  LayoutAlgorithm,
  getBalancedColumn,
  getCompactPosition,
  supportsIntersectionObserver,
  throttle,
  calculateNaturalHeight
} from './utils';

import { WaterfallItem, ResponsiveBreakpoint } from './config'

const Waterfall = defineComponent({
  name: 'Waterfall',

  props: {
    // 数据源
    data: {
      type: Array as PropType<WaterfallItem[]>,
      required: true
    },
    // 唯一标识
    nodeKey: {
      type: String,
      required: true
    },
    // 列数
    column: {
      type: Number,
      default: 2
    },
    // 列间距
    columnSpacing: {
      type: Number,
      default: 20
    },
    // 行间距
    rowSpacing: {
      type: Number,
      default: 20
    },
    // 是否开启图片预加载
    picturePreReading: {
      type: Boolean,
      default: true
    },
    // 是否开启动画
    animation: {
      type: Boolean,
      default: true
    },
    // 布局算法
    layoutAlgorithm: {
      type: String as PropType<LayoutAlgorithm>,
      default: LayoutAlgorithm.DEFAULT,
      validator: (value: string) => {
        return Object.values(LayoutAlgorithm).includes(value as LayoutAlgorithm);
      }
    },
    // 是否开启虚拟滚动
    virtualScroll: {
      type: Boolean,
      default: false
    },
    // 虚拟滚动缓冲项数量
    virtualScrollBuffer: {
      type: Number,
      default: 5
    },
    // 响应式布局配置
    responsive: {
      type: Array as PropType<ResponsiveBreakpoint[]>,
      default: () => []
    },
    // 自动调整容器高度的延迟
    resizeDebounceTime: {
      type: Number,
      default: 200
    },
    // 自定义加载指示器类名
    loadingClass: {
      type: String,
      default: ''
    },
    // 自定义空状态类名
    emptyClass: {
      type: String,
      default: ''
    },
    // 瀑布流内容区最大高度，超出后启用滚动
    maxHeight: {
      type: [String, Number],
      default: null
    }
  } as const,

  emits: [
    'item-rendered', // 项渲染完成
    'layout-complete', // 布局完成
    'resize', // 容器大小改变
    'visible-items-change', // 可见项变化（用于虚拟滚动）
    'error' // 错误事件
  ],

  // 使用类型推导，让 Vue 自动推导出正确的类型
  setup(props, { slots, emit, expose }) {
    // 容器总高度
    const containerHeight = ref<number>(0);
    // 记录每列高度的容器 key:列 value: 列高
    const columnHeightObj = ref<Record<string, number>>({});
    // 容器实例
    const containerTarget = ref<HTMLElement | null>(null);
    // 容器总宽度 不包含 padding margin border
    const containerWidth = ref<number>(0);
    // 容器左边距，计算 item 的 left
    const containerLeft = ref<number>(0);
    // 列宽
    const columnWidth = ref<number>(0);
    // item 高度集合
    let itemHeights: number[] = [];
    // 当前布局状态
    const isLayouting = ref<boolean>(false);
    // 记录可见的项（用于虚拟滚动）
    const visibleItems = ref<Set<number>>(new Set());
    // 当前应用的响应式配置
    const currentResponsive = ref<ResponsiveBreakpoint | null>(null);
    // 是否有数据正在加载中
    const isLoading = ref<boolean>(false);
    // 是否显示加载中状态
    const showLoading = computed(() => isLoading.value && props.data.length === 0);
    // 监听滚动事件的观察者
    let intersectionObserver: IntersectionObserver | null = null;

    // 实际使用的列数（考虑响应式）
    const actualColumn = computed(() => currentResponsive.value?.column || props.column);
    // 实际使用的列间距（考虑响应式）
    const actualColumnSpacing = computed(() =>
      currentResponsive.value?.columnSpacing !== undefined
        ? currentResponsive.value.columnSpacing
        : props.columnSpacing
    );
    // 实际使用的行间距（考虑响应式）
    const actualRowSpacing = computed(() =>
      currentResponsive.value?.rowSpacing !== undefined
        ? currentResponsive.value.rowSpacing
        : props.rowSpacing
    );

    /**
     * 列间距合计
     */
    const columnSpacingTotal = computed(() => {
      return (actualColumn.value - 1) * actualColumnSpacing.value;
    });

    /**
     * 构建记录每列高度的对象
     */
    const useColumnHeightObj = () => {
      const newColumnHeightObj: Record<string, number> = {};
      for (let i = 0; i < actualColumn.value; i++) {
        newColumnHeightObj[i] = 0;
      }
      columnHeightObj.value = newColumnHeightObj;
    };

    /**
     * 计算容器宽度
     */
    const useContainerWidth = () => {
      if (!containerTarget.value) return;

      const style = getComputedStyle(containerTarget.value, null);
      const paddingLeft = parseFloat(style.paddingLeft);
      const paddingRight = parseFloat(style.paddingRight);

      // 容器左边距
      containerLeft.value = paddingLeft;

      // 容器的宽度
      containerWidth.value =
        containerTarget.value.offsetWidth - paddingLeft - paddingRight;

      // 检查并应用响应式配置
      applyResponsiveConfig();
    };

    /**
     * 应用响应式配置
     */
    const applyResponsiveConfig = () => {
      if (!props.responsive || props.responsive.length === 0) return;

      // 根据当前容器宽度选择合适的配置
      let matchedConfig: ResponsiveBreakpoint | null = null;

      // 按断点宽度降序排列
      const sortedBreakpoints = [...props.responsive].sort((a, b) => b.width - a.width);

      // 找到第一个匹配的断点
      for (const breakpoint of sortedBreakpoints) {
        if (containerWidth.value <= breakpoint.width) {
          matchedConfig = breakpoint;
        } else {
          break;
        }
      }

      // 如果找到匹配的配置并且与当前不同，则应用新配置
      if (matchedConfig &&
        (!currentResponsive.value ||
          currentResponsive.value.column !== matchedConfig.column ||
          currentResponsive.value.columnSpacing !== matchedConfig.columnSpacing ||
          currentResponsive.value.rowSpacing !== matchedConfig.rowSpacing)) {
        currentResponsive.value = matchedConfig;
        // 需要重新计算布局
        nextTick(() => {
          reset();
        });
      } else if (!matchedConfig && currentResponsive.value) {
        // 恢复到默认配置
        currentResponsive.value = null;
        nextTick(() => {
          reset();
        });
      }
    };

    /**
     * 计算列宽
     */
    const useColumnWidth = () => {
      // 计算容器宽度
      useContainerWidth();

      // 计算列宽
      columnWidth.value =
        (containerWidth.value - columnSpacingTotal.value) / actualColumn.value;
    };

    /**
     * 根据布局算法获取下一个item的位置
     */
    const getNextItemPosition = (index: number) => {
      switch (props.layoutAlgorithm) {
        case LayoutAlgorithm.BALANCED:
          // 使用均衡算法
          const balancedColumn = getBalancedColumn(columnHeightObj.value, itemHeights[index]);
          return {
            left: parseInt(balancedColumn) * (columnWidth.value + actualColumnSpacing.value) + containerLeft.value,
            top: columnHeightObj.value[balancedColumn],
            column: balancedColumn
          };

        case LayoutAlgorithm.COMPACT:
          // 使用紧凑算法
          const position = getCompactPosition(
            columnHeightObj.value,
            columnWidth.value,
            itemHeights[index],
            containerWidth.value
          );
          return {
            left: position.left + containerLeft.value,
            top: position.top,
            column: position.column
          };

        case LayoutAlgorithm.DEFAULT:
        default:
          // 使用默认算法
          const minColumn = getMinHeightColumn(columnHeightObj.value);
          if (!minColumn) return { left: containerLeft.value, top: 0, column: '0' };

          return {
            left: parseInt(minColumn) * (columnWidth.value + actualColumnSpacing.value) + containerLeft.value,
            top: getMinHeight(columnHeightObj.value) ?? 0,
            column: minColumn
          };
      }
    };

    /**
     * 指定列高度自增
     */
    const increasingHeight = (index: number, column: string) => {
      columnHeightObj.value[column] += itemHeights[index] + actualRowSpacing.value;
    };

    // 渲染位置
    const useItemLocation = () => {
      isLayouting.value = true;

      try {
        const newData = [...props.data];

        // 遍历数据源
        newData.forEach((item, index) => {
          // 避免重复运算
          if (item._style) {
            return;
          }

          // 生成 style
          item._style = { left: 0, top: 0, width: columnWidth.value };

          // 获取位置
          const position = getNextItemPosition(index);

          // 应用位置信息
          item._style.left = position.left;
          item._style.top = position.top;

          // 存储真实高度用于后续计算
          item._style.height = itemHeights[index];

          // 指定列高度自增
          increasingHeight(index, position.column);

          // 触发单项渲染完成事件
          emit('item-rendered', { item, index, position });
        });

        // 指定容器的高度
        // 添加额外的底部空间，确保容器高度足够
        containerHeight.value = getMaxHeight(columnHeightObj.value) + 50;

        // 触发布局完成事件
        emit('layout-complete', {
          containerHeight: containerHeight.value,
          itemsCount: props.data.length,
          columnHeights: { ...columnHeightObj.value }
        });
      } catch (error) {
        console.error('Layout calculation error:', error);
        emit('error', {
          type: 'layout',
          message: 'Failed to calculate layout',
          error
        });
      } finally {
        isLayouting.value = false;
      }
    };

    /**
     * 不需要图片预加载的情况下计算布局
     */
    const useItemHeight = async () => {
      itemHeights = [];
      // 获取所有瀑布流项元素
      const itemElements = Array.from(
        document.getElementsByClassName("m-waterfall-item")
      ) as HTMLElement[];

      if (itemElements.length === 0) return;

      isLoading.value = true;

      try {
        // 计算 item 高度
        for (const el of itemElements) {
          // 使用更准确的方法计算高度
          const height = await calculateNaturalHeight(el, 100);
          itemHeights.push(height);
        }

        useItemLocation();
      } catch (error) {
        console.error('Error calculating item heights:', error);
        emit('error', {
          type: 'height-calculation',
          message: 'Failed to calculate item heights',
          error
        });
      } finally {
        isLoading.value = false;
      }
    };

    /**
     * 监听图片加载完成 需要图片预加载
     */
    const waitImgComplate = () => {
      itemHeights = [];

      // 拿到所有的元素
      const itemElements = Array.from(
        document.getElementsByClassName("m-waterfall-item")
      ) as HTMLElement[];

      if (itemElements.length === 0) return;

      isLoading.value = true;

      try {
        // 获取到元素的 img 标签
        const imgElements = getImgElements(itemElements);

        // 获取所有 img标签的图片
        const allImgs = getAllImg(imgElements);

        // 等待图片加载完成
        onComplateImgs(allImgs).then(() => {
          // 图片加载完成
          itemElements.forEach((el) => {
            itemHeights.push(el.offsetHeight);
          });
          // 渲染位置
          useItemLocation();
          isLoading.value = false;
        }).catch(error => {
          console.error('Error loading images:', error);
          // 在图片加载失败时仍然尝试计算布局
          itemElements.forEach((el) => {
            itemHeights.push(el.offsetHeight);
          });
          useItemLocation();
          isLoading.value = false;

          emit('error', {
            type: 'image-loading',
            message: 'Failed to load some images',
            error
          });
        });
      } catch (error) {
        console.error('Error in image preloading:', error);
        isLoading.value = false;
        emit('error', {
          type: 'image-preloading',
          message: 'Error setting up image preloading',
          error
        });
      }
    };

    /**
     * 设置虚拟滚动
     */
    const setupVirtualScroll = () => {
      if (!props.virtualScroll || !supportsIntersectionObserver() || !containerTarget.value) {
        return;
      }

      // 如果已经有观察者，先清除
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }

      // 创建新的交叉观察者
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            const index = parseInt(entry.target.getAttribute('data-index') || '-1');
            if (index >= 0) {
              if (entry.isIntersecting) {
                visibleItems.value.add(index);
              } else {
                // 只有在项目完全离开视口时才移除
                if (entry.intersectionRatio === 0) {
                  visibleItems.value.delete(index);
                }
              }
            }
          });

          // 触发可见项变化事件
          emit('visible-items-change', Array.from(visibleItems.value));
        },
        {
          root: null, // 使用视口作为根
          rootMargin: `${props.virtualScrollBuffer * 100}px`,
          threshold: 0.0 // 任何可见度都会触发
        }
      );

      // 观察所有瀑布流项元素
      const itemElements = Array.from(
        document.getElementsByClassName("m-waterfall-item")
      ) as HTMLElement[];

      itemElements.forEach(el => {
        intersectionObserver!.observe(el);
      });
    };

    /**
     * 更新容器大小的监听函数
     */
    const updateContainerSize = throttle(() => {
      useColumnWidth();
      emit('resize', {
        width: containerWidth.value,
        height: containerHeight.value
      });
    }, props.resizeDebounceTime);

    /**
     * 重新构建瀑布流
     */
    const reset = async () => {
      return new Promise<void>((resolve) => {
        // 标记正在重置布局
        isLayouting.value = true;

        try {
          useColumnWidth();

          // 重置所有样式
          props.data.forEach((item) => {
            item._style = undefined;
          });

          // 重置容器高度和列高度
          containerHeight.value = 0;
          useColumnHeightObj();

          // 清除虚拟滚动状态
          visibleItems.value.clear();

          nextTick(() => {
            // 延迟执行以确保DOM更新
            setTimeout(() => {
              // 重新计算布局
              if (props.picturePreReading) {
                waitImgComplate();
              } else {
                useItemHeight();
              }

              // 如果启用了虚拟滚动，重新设置
              if (props.virtualScroll) {
                setupVirtualScroll();
              }

              isLayouting.value = false;
              resolve();
            }, props.animation ? 300 : 0); // 如果启用了动画，匹配过渡动画时长
          });
        } catch (error) {
          console.error('Error resetting waterfall:', error);
          isLayouting.value = false;
          emit('error', {
            type: 'reset',
            message: 'Failed to reset waterfall layout',
            error
          });
          resolve(); // 即使出错也要resolve以避免promise hanging
        }
      });
    };

    /**
     * 强制刷新指定索引项的布局
     * 用于动态高度变化的情况
     */
    const refreshItem = async (index: number) => {
      if (index < 0 || index >= props.data.length || !props.data[index]) {
        return;
      }

      // 移除该项的样式信息
      props.data[index]._style = undefined;

      // 重新计算整体布局
      // 这是简化处理，更高效的方法是只重新计算受影响的项
      await reset();
    };

    /**
     * 添加窗口调整大小监听器
     */
    const addResizeListener = () => {
      window.addEventListener('resize', updateContainerSize);
    };

    /**
     * 移除窗口调整大小监听器
     */
    const removeResizeListener = () => {
      window.removeEventListener('resize', updateContainerSize);
    };

    /**
     * 获取当前布局信息
     */
    const getLayoutInfo = () => {
      return {
        containerWidth: containerWidth.value,
        containerHeight: containerHeight.value,
        columnWidth: columnWidth.value,
        columns: actualColumn.value,
        columnHeights: { ...columnHeightObj.value }
      };
    };

    // 初始化
    onMounted(() => {
      useColumnWidth();
      addResizeListener();
    });

    // 在组件销毁时，清除所有资源
    onUnmounted(() => {
      // 清除所有 _style
      props.data.forEach((item) => {
        delete item._style;
      });

      // 清除交叉观察者
      if (intersectionObserver) {
        intersectionObserver.disconnect();
        intersectionObserver = null;
      }

      // 移除事件监听器
      removeResizeListener();
    });

    // 监听数据变化
    watch(
      () => props.data,
      (newValue) => {
        // 如果数据为空，重置容器高度
        if (newValue.length === 0) {
          containerHeight.value = 0;
          return;
        }

        nextTick(() => {
          // 第一次获取数据时，构建高度记录容器
          const resetColumnHeight = newValue.every((item) => !item._style);
          if (resetColumnHeight) {
            // 构建高度记录容器
            useColumnHeightObj();
          }

          if (props.picturePreReading) {
            waitImgComplate();
          } else {
            useItemHeight();
          }

          // 如果启用了虚拟滚动，重新设置
          if (props.virtualScroll) {
            nextTick(() => {
              setupVirtualScroll();
            });
          }
        });
      },
      {
        deep: true,
        immediate: true,
      }
    );

    // 监听列数变化
    watch(
      () => actualColumn.value,
      () => {
        if (!containerTarget.value) return;

        if (props.picturePreReading) {
          columnWidth.value = 0;
          // 数据改变后 视图变化后的回调
          reset();
        } else {
          reset();
        }
      }
    );

    // 监听虚拟滚动设置变化
    watch(
      () => props.virtualScroll,
      (newValue) => {
        if (newValue) {
          nextTick(() => {
            setupVirtualScroll();
          });
        } else if (intersectionObserver) {
          intersectionObserver.disconnect();
          intersectionObserver = null;
        }
      }
    );

    // 暴露方法给父组件
    expose({
      reset,
      refreshItem,
      getLayoutInfo,
      containerRef: containerTarget
    });

    // 判断项是否应该渲染（用于虚拟滚动）
    const shouldRenderItem = (index: number) => {
      // 如果未启用虚拟滚动，始终渲染
      if (!props.virtualScroll) return true;

      // 如果没有可见项，渲染全部
      if (visibleItems.value.size === 0) return true;

      // 如果项在可见项集合中，则渲染
      if (visibleItems.value.has(index)) return true;

      // 计算可见项的范围
      const visibleIndexes = Array.from(visibleItems.value);
      if (visibleIndexes.length === 0) return true;

      const minVisible = Math.min(...visibleIndexes);
      const maxVisible = Math.max(...visibleIndexes);

      // 判断项是否在可见区域或缓冲区内
      const buffer = props.virtualScrollBuffer;
      return (index >= minVisible - buffer && index <= maxVisible + buffer);
    };

    // 渲染加载状态
    const renderLoading = () => {
      if (props.loadingClass && slots.loading) {
        return slots.loading();
      }

      return (
        <div class="flex items-center justify-center p-4">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    // 渲染空状态
    const renderEmpty = () => {
      if (props.emptyClass && slots.empty) {
        return slots.empty();
      }

      return (
        <div class="flex items-center justify-center p-6 text-gray-500">
          暂无数据
        </div>
      );
    };

    return () => {
      // 确定容器样式
      const containerStyle: Record<string, string | number> = {
        height: `${containerHeight.value}px`,
        minHeight: props.data.length === 0 ? '100px' : 'auto',
        overflow: props.maxHeight ? 'auto' : 'hidden',
      };

      // 如果设置了最大高度
      if (props.maxHeight) {
        containerStyle.maxHeight = typeof props.maxHeight === 'number'
          ? `${props.maxHeight}px`
          : props.maxHeight;
      }

      return (
        <div
          class="relative waterfall-component"
          ref={containerTarget}
          style={containerStyle}
        >
          {/* 加载中状态 */}
          {showLoading.value && renderLoading()}

          {/* 空数据状态 */}
          {props.data.length === 0 && !showLoading.value && renderEmpty()}

          {/* 瀑布流布局内容 */}
          {columnWidth.value > 0 && props.data.length > 0 && (
            <div class="waterfall-items-container">
              {props.data.map((item, index) =>
                // 只有应该渲染的项才会显示
                shouldRenderItem(index) && (
                  <div
                    key={props.nodeKey ? item[props.nodeKey] : index}
                    class={[
                      "m-waterfall-item absolute",
                      {
                        "transition-all duration-300 ease-in-out": props.animation,
                        "hover:shadow-lg": props.animation,
                        "opacity-0": !item._style
                      },
                    ]}
                    style={{
                      width: `${columnWidth.value}px`,
                      left: `${item._style?.left ?? 0}px`,
                      top: `${item._style?.top ?? 0}px`,
                      transform: item._style ? "translateY(0)" : "translateY(20px)",
                      opacity: item._style ? 1 : 0,
                      visibility: item._style ? "visible" : "hidden",
                      backfaceVisibility: "hidden",
                      willChange: props.animation ? "transform, opacity" : "auto",
                      transformOrigin: "center center",
                    }}
                    data-index={index}
                  >
                    {slots.default?.({
                      item,
                      width: columnWidth.value,
                      index,
                      isVisible: visibleItems.value.has(index)
                    })}
                  </div>
                )
              )}
            </div>
          )}

          {/* 底部插槽 */}
          {slots.footer && !isLoading.value && props.data.length > 0 && (
            <div
              class="waterfall-footer"
              style={{
                position: 'relative',
                marginTop: `${containerHeight.value}px`
              }}
            >
              {slots.footer()}
            </div>
          )}

          {/* 加载中遮罩 - 数据加载但非首次加载时显示 */}
          {isLoading.value && props.data.length > 0 && (
            <div class="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center">
              {slots.loadingOverlay?.() || (
                <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              )}
            </div>
          )}
        </div>
      );
    };
  },
});

export default Waterfall;
