# Waterfall 瀑布流组件

瀑布流组件是一种常见的布局方式，用于以错落有致的方式展示不同高度的内容卡片。该组件自动计算并排列内容，使整体布局更加紧凑美观。特别适合展示图片、商品卡片等不规则高度的内容。

## 功能特点

- ✨ 自动计算并均衡排列内容，形成视觉美观的瀑布流布局
- 🖼️ 支持图片预加载，确保布局计算精确
- 📱 灵活的列数配置，适应不同屏幕尺寸
- 🎭 平滑的过渡动画效果
- ⚡ 高性能的渲染和重排算法
- 🔄 提供重置方法，支持动态调整布局
- 📊 多种布局算法（默认、均衡、紧凑）
- 📱 响应式断点配置，自动适应不同设备
- 🔍 支持虚拟滚动，提升大数据量性能
- 🛠️ 丰富的自定义插槽和事件

## 基本用法

```vue
<template>
  <div class="container">
    <Waterfall
      :data="items"
      nodeKey="id"
      :column="3"
      :columnSpacing="15"
      :rowSpacing="20"
    >
      <template #default="{ item, width }">
        <div class="card">
          <img :src="item.image" :alt="item.title" style="width: 100%" />
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </template>
    </Waterfall>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Waterfall from "your-component-library/Waterfall";

const items = ref([
  { id: 1, title: "标题1", description: "描述1", image: "image1.jpg" },
  { id: 2, title: "标题2", description: "描述2", image: "image2.jpg" },
  { id: 3, title: "标题3", description: "描述3", image: "image3.jpg" },
  // 更多数据项...
]);
</script>
```

## 使用不同布局算法

```vue
<template>
  <div class="container">
    <div class="algorithm-selector">
      <button
        @click="algorithm = 'default'"
        :class="{ active: algorithm === 'default' }"
      >
        默认算法
      </button>
      <button
        @click="algorithm = 'balanced'"
        :class="{ active: algorithm === 'balanced' }"
      >
        均衡算法
      </button>
      <button
        @click="algorithm = 'compact'"
        :class="{ active: algorithm === 'compact' }"
      >
        紧凑算法
      </button>
    </div>

    <Waterfall
      ref="waterfallRef"
      :data="items"
      nodeKey="id"
      :column="3"
      :layoutAlgorithm="algorithm"
    >
      <template #default="{ item, width }">
        <!-- 卡片内容 -->
      </template>
    </Waterfall>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Waterfall, { LayoutAlgorithm } from "your-component-library/Waterfall";

const waterfallRef = ref(null);
const algorithm = ref(LayoutAlgorithm.DEFAULT);
const items = ref([
  // 数据项...
]);
</script>
```

## 响应式布局配置

```vue
<template>
  <Waterfall
    :data="items"
    nodeKey="id"
    :column="3"
    :responsive="[
      { width: 1440, column: 5, columnSpacing: 20 },
      { width: 1200, column: 4, columnSpacing: 20 },
      { width: 768, column: 3, columnSpacing: 15 },
      { width: 576, column: 2, columnSpacing: 10 },
    ]"
  >
    <template #default="{ item }">
      <!-- 卡片内容 -->
    </template>
  </Waterfall>
</template>
```

## 使用虚拟滚动优化性能

```vue
<template>
  <Waterfall
    :data="largeDataSet"
    nodeKey="id"
    :column="3"
    :virtualScroll="true"
    :virtualScrollBuffer="8"
    :maxHeight="600"
  >
    <template #default="{ item, isVisible }">
      <div class="card">
        <!-- 当项可见时才加载图片，优化性能 -->
        <img
          v-if="isVisible"
          :src="item.image"
          :alt="item.title"
          style="width: 100%"
        />
        <div
          v-else
          class="placeholder"
          :style="{ height: item.placeholderHeight + 'px' }"
        ></div>
        <div class="card-content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </template>

    <template #loadingOverlay>
      <div class="custom-loader">加载中...</div>
    </template>
  </Waterfall>
</template>

<script setup>
import { ref } from "vue";
import Waterfall from "your-component-library/Waterfall";

// 生成大量数据
const largeDataSet = ref(
  Array.from({ length: 500 }, (_, i) => ({
    id: i,
    title: `标题${i}`,
    description: `描述${i}`,
    image: `https://picsum.photos/500/300?random=${i}`,
    placeholderHeight: Math.floor(Math.random() * 200) + 100,
  })),
);
</script>
```

## 响应式布局示例

```vue
<template>
  <div class="container">
    <div class="control-panel">
      <button @click="changeColumn(2)">2列布局</button>
      <button @click="changeColumn(3)">3列布局</button>
      <button @click="changeColumn(4)">4列布局</button>
    </div>

    <Waterfall
      ref="waterfallRef"
      :data="items"
      nodeKey="id"
      :column="columnCount"
      :columnSpacing="15"
      :rowSpacing="20"
    >
      <template #default="{ item, width, index }">
        <div class="card">
          <img :src="item.image" :alt="item.title" style="width: 100%" />
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>项目 #{{ index + 1 }}</p>
          </div>
        </div>
      </template>
    </Waterfall>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Waterfall from "your-component-library/Waterfall";

const waterfallRef = ref(null);
const columnCount = ref(3);
const items = ref([
  // 数据项...
]);

const changeColumn = (count) => {
  columnCount.value = count;
  // 在列数变化后，组件会自动重新布局
};
</script>
```

## 动态加载数据

```vue
<template>
  <div class="container">
    <Waterfall ref="waterfallRef" :data="items" nodeKey="id" :column="3">
      <template #default="{ item }">
        <!-- 卡片内容 -->
      </template>

      <template #footer>
        <div class="load-more-trigger" ref="loadMoreTriggerRef">
          <div v-if="loading" class="loading-indicator">加载中...</div>
          <div v-else-if="hasMore" class="load-more-hint">下拉加载更多</div>
          <div v-else class="end-message">已加载全部数据</div>
        </div>
      </template>
    </Waterfall>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Waterfall from "your-component-library/Waterfall";

const waterfallRef = ref(null);
const loadMoreTriggerRef = ref(null);
const items = ref([]);
const page = ref(1);
const loading = ref(false);
const hasMore = ref(true);

const loadMore = async () => {
  if (loading.value || !hasMore.value) return;

  loading.value = true;
  try {
    const newItems = await fetchItems(page.value);
    if (newItems.length === 0) {
      hasMore.value = false;
    } else {
      page.value++;
      items.value = [...items.value, ...newItems];
    }
  } catch (error) {
    console.error("Failed to load more items:", error);
  } finally {
    loading.value = false;
  }
};

// 使用Intersection Observer监听加载更多触发器
let observer = null;
onMounted(() => {
  // 初始化加载
  loadMore();

  // 设置无限滚动
  if ("IntersectionObserver" in window && loadMoreTriggerRef.value) {
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading.value) {
        loadMore();
      }
    });
    observer.observe(loadMoreTriggerRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
```

## API

### Props

| 属性名              | 类型          | 默认值    | 说明                                                                      |
| ------------------- | ------------- | --------- | ------------------------------------------------------------------------- |
| data                | Array         | []        | 瀑布流数据源，数组中的每个对象代表一个瀑布流项                            |
| nodeKey             | String        | -         | 数据中用作唯一标识的字段名，用于优化重渲染                                |
| column              | Number        | 2         | 瀑布流列数                                                                |
| columnSpacing       | Number        | 20        | 列间距（单位：像素）                                                      |
| rowSpacing          | Number        | 20        | 行间距（单位：像素）                                                      |
| picturePreReading   | Boolean       | true      | 是否开启图片预加载，开启后会等待图片加载完成再计算布局                    |
| animation           | Boolean       | true      | 是否启用动画效果                                                          |
| layoutAlgorithm     | String        | 'default' | 布局算法，可选值：'default'(默认)、'balanced'(均衡)、'compact'(紧凑)      |
| virtualScroll       | Boolean       | false     | 是否开启虚拟滚动                                                          |
| virtualScrollBuffer | Number        | 5         | 虚拟滚动缓冲项数量                                                        |
| responsive          | Array         | []        | 响应式配置断点，格式为 `[{ width, column, columnSpacing?, rowSpacing? }]` |
| resizeDebounceTime  | Number        | 200       | 窗口大小改变时的防抖延迟，单位毫秒                                        |
| loadingClass        | String        | ''        | 自定义加载状态类名                                                        |
| emptyClass          | String        | ''        | 自定义空状态类名                                                          |
| maxHeight           | String/Number | null      | 瀑布流最大高度，超出后显示滚动条                                          |

### Slots

| 插槽名         | 说明                           | 插槽属性                                                                          |
| -------------- | ------------------------------ | --------------------------------------------------------------------------------- |
| default        | 瀑布流项的内容                 | { item: 当前项数据, width: 项宽度, index: 项索引, isVisible: 是否可见(虚拟滚动) } |
| loading        | 首次加载状态                   | -                                                                                 |
| loadingOverlay | 加载叠加层                     | -                                                                                 |
| empty          | 空状态                         | -                                                                                 |
| footer         | 底部内容，常用于加载更多触发器 | -                                                                                 |

### 事件

| 事件名               | 参数                                           | 说明                               |
| -------------------- | ---------------------------------------------- | ---------------------------------- |
| item-rendered        | { item, index, position }                      | 某一项渲染完成时触发               |
| layout-complete      | { containerHeight, itemsCount, columnHeights } | 布局计算完成时触发                 |
| resize               | { width, height }                              | 容器大小改变时触发                 |
| visible-items-change | number[]                                       | 可见项变化时触发（虚拟滚动模式下） |
| error                | { type, message, error }                       | 发生错误时触发                     |

### 方法

通过模板引用可以访问组件实例方法：

| 方法名        | 参数          | 返回值        | 说明                                                       |
| ------------- | ------------- | ------------- | ---------------------------------------------------------- |
| reset         | -             | Promise<void> | 重置瀑布流布局，当容器尺寸变化或需要强制重新计算布局时使用 |
| refreshItem   | index: number | Promise<void> | 刷新指定索引的项，用于动态高度变化的场景                   |
| getLayoutInfo | -             | Object        | 获取当前布局信息，包含容器宽度、高度、列宽等数据           |

## 注意事项

1. `data` 数组中的对象会被组件内部添加 `_style` 属性用于布局计算，请避免使用相同名称的属性。
2. 当容器宽度发生变化时，组件会自动重新计算布局，也可以手动调用 `reset()` 方法。
3. 如果瀑布流项包含图片，建议保持 `picturePreReading` 为 `true`，以确保准确计算高度。
4. 为了获得最佳性能，请确保 `nodeKey` 对应的值在数据中是唯一的。
5. 使用虚拟滚动可以显著提高大数据量下的性能，但需要设置合理的 `maxHeight`。
6. 不同的布局算法适用于不同场景：
   - `default`: 最基础的算法，将项放置在最短列
   - `balanced`: 尝试平衡所有列的高度，使布局更均匀
   - `compact`: 尝试最大化填充可用空间，减少空白

## 响应式配置示例

```js
// 响应式断点配置示例
const responsiveConfig = [
  { width: 1920, column: 6, columnSpacing: 24, rowSpacing: 24 }, // 大型显示器
  { width: 1440, column: 5, columnSpacing: 20, rowSpacing: 20 }, // 桌面显示器
  { width: 1200, column: 4, columnSpacing: 16, rowSpacing: 16 }, // 小型桌面显示器
  { width: 992, column: 3, columnSpacing: 16, rowSpacing: 16 }, // 平板横屏
  { width: 768, column: 2, columnSpacing: 12, rowSpacing: 12 }, // 平板竖屏
  { width: 576, column: 1, columnSpacing: 0, rowSpacing: 12 }, // 手机
];
```

## 自定义样式

组件默认应用了基本的过渡动画和悬停效果，您可以通过覆盖以下类来自定义样式：

```css
/* 瀑布流容器 */
.waterfall-component {
  /* 自定义容器样式 */
}

/* 单个瀑布流项 */
.m-waterfall-item {
  /* 自定义项样式 */
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.m-waterfall-item:hover {
  transform: translateY(-10px) !important;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* 底部区域 */
.waterfall-footer {
  /* 自定义底部样式 */
  padding: 20px 0;
}
```
