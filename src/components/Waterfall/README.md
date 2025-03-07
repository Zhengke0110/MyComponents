# Waterfall 瀑布流组件

瀑布流组件是一种常见的布局方式，用于以错落有致的方式展示不同高度的内容卡片。该组件自动计算并排列内容，使整体布局更加紧凑美观。特别适合展示图片、商品卡片等不规则高度的内容。

## 功能特点

- ✨ 自动计算并均衡排列内容，形成视觉美观的瀑布流布局
- 🖼️ 支持图片预加载，确保布局计算精确
- 📱 灵活的列数配置，适应不同屏幕尺寸
- 🎭 平滑的过渡动画效果
- ⚡ 高性能的渲染和重排算法
- 🔄 提供重置方法，支持动态调整布局

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
import { ref } from 'vue';
import Waterfall from 'your-component-library/Waterfall';

const items = ref([
  { id: 1, title: '标题1', description: '描述1', image: 'image1.jpg' },
  { id: 2, title: '标题2', description: '描述2', image: 'image2.jpg' },
  { id: 3, title: '标题3', description: '描述3', image: 'image3.jpg' },
  // 更多数据项...
]);
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
import { ref } from 'vue';
import Waterfall from 'your-component-library/Waterfall';

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
    <Waterfall
      ref="waterfallRef"
      :data="items"
      nodeKey="id"
      :column="3"
    >
      <template #default="{ item }">
        <!-- 卡片内容 -->
      </template>
    </Waterfall>
    
    <div class="load-more">
      <button @click="loadMore">加载更多</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Waterfall from 'your-component-library/Waterfall';

const waterfallRef = ref(null);
const items = ref([]);
const page = ref(1);

const loadMore = async () => {
  page.value++;
  const newItems = await fetchItems(page.value);
  items.value = [...items.value, ...newItems];
};

// 初始化加载
onMounted(() => {
  loadMore();
});
</script>
```

## API

### Props

| 属性名 | 类型 | 默认值 | 说明 |
| ----- | ---- | ------ | ---- |
| data | Array | [] | 瀑布流数据源，数组中的每个对象代表一个瀑布流项 |
| nodeKey | String | - | 数据中用作唯一标识的字段名，用于优化重渲染 |
| column | Number | 2 | 瀑布流列数 |
| columnSpacing | Number | 20 | 列间距（单位：像素） |
| rowSpacing | Number | 20 | 行间距（单位：像素） |
| picturePreReading | Boolean | true | 是否开启图片预加载，开启后会等待图片加载完成再计算布局 |
| animation | Boolean | true | 是否启用动画效果 |

### Slots

| 插槽名 | 说明 | 插槽属性 |
| ----- | ---- | ------- |
| default | 瀑布流项的内容 | { item: 当前项数据, width: 项宽度, index: 项索引 } |

### 方法

通过模板引用可以访问组件实例方法：

| 方法名 | 参数 | 返回值 | 说明 |
| ----- | ---- | ------ | ---- |
| reset | - | Promise<void> | 重置瀑布流布局，当容器尺寸变化或需要强制重新计算布局时使用 |

## 注意事项

1. `data` 数组中的对象会被组件内部添加 `_style` 属性用于布局计算，请避免使用相同名称的属性。
2. 当容器宽度发生变化时，建议调用 `reset()` 方法重新计算布局。
3. 如果瀑布流项包含图片，建议保持 `picturePreReading` 为 `true`，以确保准确计算高度。
4. 为了获得最佳性能，请确保 `nodeKey` 对应的值在数据中是唯一的。
5. 在移动设备上，可根据屏幕宽度动态调整 `column` 值以获得最佳展示效果。
6. 针对大量数据，建议实现虚拟滚动或分页加载，以提高性能。

## 自定义样式

组件默认应用了基本的过渡动画和悬停效果，您可以通过覆盖 `.m-waterfall-item` 类来自定义样式：

```css
.m-waterfall-item {
  /* 自定义样式 */
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.m-waterfall-item:hover {
  transform: translateY(-10px) !important;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
```
