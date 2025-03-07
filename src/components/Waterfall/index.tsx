import { defineComponent, ref, computed, watch, onMounted, onUnmounted, nextTick, PropType } from 'vue';
import {
  getImgElements,
  getAllImg,
  onComplateImgs,
  getMinHeight,
  getMaxHeight,
  getMinHeightColumn,
} from './utils';

// 定义WaterfallItem接口
interface WaterfallItem {
  _style?: {
    left: number;
    top: number;
  };
  [key: string]: any;
}

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
    }
  },
  
  setup(props, { slots, expose }) {
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
    
    /**
     * 列间距合计
     */
    const columnSpacingTotal = computed(() => {
      return (props.column - 1) * props.columnSpacing;
    });
    
    /**
     * 构建记录每列高度的对象
     */
    const useColumnHeightObj = () => {
      const newColumnHeightObj: Record<string, number> = {};
      for (let i = 0; i < props.column; i++) {
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
    };
    
    /**
     * 计算列宽
     */
    const useColumnWidth = () => {
      // 计算容器宽度
      useContainerWidth();
      
      // 计算列宽
      columnWidth.value =
        (containerWidth.value - columnSpacingTotal.value) / props.column;
    };
    
    /**
     * 返回下一个 item 的 left
     */
    const getItemLeft = () => {
      // 拿到最小宽度的列
      const column = getMinHeightColumn(columnHeightObj.value);
      if (!column) return containerLeft.value;
      
      const columnIndex = parseFloat(column);
      return columnIndex * (columnWidth.value + props.columnSpacing) + containerLeft.value;
    };
    
    /**
     * 返回下一个 item 的 top
     */
    const getItemTop = () => {
      return getMinHeight(columnHeightObj.value) ?? 0;
    };
    
    /**
     * 指定列高度自增
     */
    const increasingHeight = (index: number) => {
      // 最小高度所在列
      const minHeightColumn = getMinHeightColumn(columnHeightObj.value);
      if (!minHeightColumn) return;
      
      // 使该列自增
      columnHeightObj.value[minHeightColumn] +=
        itemHeights[index] + props.rowSpacing;
    };
    
    // 渲染位置
    const useItemLocation = () => {
      const newData = [...props.data];
      
      // 遍历数据源
      newData.forEach((item, index) => {
        // 避免重复运算
        if (item._style) {
          return;
        }
        
        // 生成 style
        item._style = { left: 0, top: 0 };
        
        // left
        item._style.left = getItemLeft();
        
        // top
        item._style.top = getItemTop();
        
        // 指定列高度自增
        increasingHeight(index);
      });
      
      // 指定容器的高度
      // 添加额外的底部空间，确保容器高度足够
      containerHeight.value = getMaxHeight(columnHeightObj.value) + 50;
    };
    
    /**
     * 不需要图片预加载
     */
    const useItemHeight = () => {
      itemHeights = [];
      // 获取所有瀑布流项元素
      const itemElements = Array.from(
        document.getElementsByClassName("m-waterfall-item")
      ) as HTMLElement[];
      
      // 计算 item 高度
      itemElements.forEach((el) => {
        itemHeights.push(el.offsetHeight);
      });
      
      useItemLocation();
    };
    
    /**
     * 监听图片加载完成 需要图片预加载
     * */
    const waitImgComplate = () => {
      itemHeights = [];
      
      // 拿到所有的元素
      const itemElements = Array.from(
        document.getElementsByClassName("m-waterfall-item")
      ) as HTMLElement[];
      
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
      });
    };
    
    /**
     * 重新构建瀑布流
     */
    const reset = () => {
      return new Promise<void>((resolve) => {
        useColumnWidth();
        props.data.forEach((item) => {
          item._style = undefined;
        });
        
        // 重置容器高度，避免高度计算错误导致的重叠
        containerHeight.value = 0;
        
        nextTick(() => {
          setTimeout(() => {
            resolve();
          }, 300); // 匹配过渡动画时长
        });
      });
    };
    
    // 初始化
    onMounted(() => {
      useColumnWidth();
    });
    
    // 在组件销毁时，清除所有 _style
    onUnmounted(() => {
      props.data.forEach((item) => {
        delete item._style;
      });
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
        });
      },
      {
        deep: true,
        immediate: true,
      }
    );
    
    // 监听列数变化
    watch(
      () => props.column,
      () => {
        if (props.picturePreReading) {
          columnWidth.value = 0;
          // 数据改变后 视图变化后的回调
          reset();
        } else {
          reset();
        }
      }
    );
    
    // 暴露方法给父组件
    expose({
      reset,
    });
    
    return () => (
      <div
        class="relative waterfall-component"
        ref={containerTarget}
        style={{
          height: `${containerHeight.value}px`,
          minHeight: props.data.length === 0 ? '100px' : 'auto', // 确保空状态下也有高度
          overflow: 'hidden', // 防止溢出
        }}
      >
        {columnWidth.value > 0 && props.data.length > 0 ? (
          props.data.map((item, index) => (
            <div
              key={props.nodeKey ? item[props.nodeKey] : index}
              class={[
                "m-waterfall-item absolute transition-all duration-300 ease-in-out hover:shadow-lg",
                { "opacity-0": !item._style },
              ]}
              style={{
                width: `${columnWidth.value}px`,
                left: `${item._style?.left ?? 0}px`,
                top: `${item._style?.top ?? 0}px`,
                transform: item._style ? "translateY(0)" : "translateY(20px)",
                opacity: item._style ? 1 : 0,
                backfaceVisibility: "hidden",
                willChange: "transform, opacity",
                transformOrigin: "center center",
              }}
            >
              {slots.default?.({ item, width: columnWidth.value, index })}
            </div>
          ))
        ) : (
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
        )}
      </div>
    );
  },
});

export default Waterfall;
