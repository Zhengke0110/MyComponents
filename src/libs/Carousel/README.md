# Carousel 走马灯组件

轻量级、功能丰富的内容轮播组件，支持多种动画效果和交互方式。适用于图片轮播、产品展示、内容推荐等场景。

## 功能特性

- **多种动画效果**：支持滑动（slide）、淡入淡出（fade）、缩放（zoom）和翻转（flip）等动画效果
- **灵活的控制方式**：提供箭头导航、指示器、触摸滑动和键盘控制等多种控制方式
- **高度可定制**：支持自定义指示器样式、箭头显示规则、自动播放设置等
- **响应式设计**：适配不同屏幕尺寸，移动设备触摸友好
- **性能优化**：支持图片懒加载，确保大量图片轮播时的流畅体验
- **可访问性**：符合 ARIA 规范，提供键盘导航支持
- **暗色主题**：使用 Tailwind CSS 的 dark 类支持自动暗色主题适配

## 安装与引入

```javascript
// 在项目中引入组件
import { Carousel, CarouselItem } from "./path/to/Carousel";

// 在组件中注册
export default {
  components: {
    Carousel,
    CarouselItem,
  },
};
```

## 基础用法

### 基础轮播

```vue
<template>
  <div class="h-64 w-full">
    <Carousel>
      <CarouselItem v-for="(item, index) in items" :key="index">
        <div class="flex h-full w-full items-center justify-center">
          {{ item }}
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref(["内容1", "内容2", "内容3"]);
</script>
```

### 图片轮播

```vue
<template>
  <div class="h-64 w-full">
    <Carousel animation-type="fade">
      <CarouselItem v-for="(image, index) in images" :key="index">
        <img :src="image.url" class="h-full w-full object-cover" />
      </CarouselItem>
    </Carousel>
  </div>
</template>
```

### 卡片轮播

```vue
<template>
  <div class="h-72 w-full">
    <Carousel :interval="4000" indicator-position="outside">
      <CarouselItem v-for="(card, index) in cards" :key="index">
        <div
          class="h-full w-full rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
        >
          <h3 class="text-xl font-bold">{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>
```

## API

### Carousel Props

| 参数              | 说明                 | 类型                                  | 默认值   |
| ----------------- | -------------------- | ------------------------------------- | -------- |
| autoplay          | 是否自动播放         | boolean                               | true     |
| interval          | 自动播放间隔（毫秒） | number                                | 3000     |
| loop              | 是否循环播放         | boolean                               | true     |
| initialIndex      | 初始激活的索引       | number                                | 0        |
| indicatorPosition | 指示器位置           | 'inside' \| 'outside' \| 'none'       | 'inside' |
| indicatorTrigger  | 指示器触发方式       | 'click' \| 'hover'                    | 'click'  |
| arrow             | 箭头显示方式         | 'always' \| 'hover' \| 'never'        | 'hover'  |
| animationType     | 动画类型             | 'slide' \| 'fade' \| 'zoom' \| 'flip' | 'slide'  |
| animationDuration | 动画持续时间（毫秒） | number                                | 300      |
| lazyLoad          | 是否懒加载子项内容   | boolean                               | false    |
| touchEnabled      | 是否启用触摸滑动     | boolean                               | true     |
| swipeThreshold    | 滑动阈值（像素）     | number                                | 50       |
| keyboardEnabled   | 是否启用键盘导航     | boolean                               | true     |
| pauseOnHover      | 是否悬停暂停         | boolean                               | true     |
| indicatorStyle    | 自定义指示器样式     | object                                | {}       |
| height            | 走马灯高度           | string                                | '100%'   |

### Carousel Events

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| change | 幻灯片切换时触发   | 当前索引 |
| prev   | 切换到上一张时触发 | 无       |
| next   | 切换到下一张时触发 | 无       |

### CarouselItem Props

| 参数        | 说明                      | 类型   | 默认值     |
| ----------- | ------------------------- | ------ | ---------- |
| customClass | 自定义类名                | string | ''         |
| imageUrl    | 图片URL（如果是图片轮播） | string | ''         |
| imageAlt    | 图片alt文本               | string | '轮播图片' |

## 高级用法

### 自定义指示器样式

可以通过 `indicator-style` 属性自定义指示器的样式：

```vue
<template>
  <Carousel
    :indicator-style="{
      '--indicator-active-color': '#2563eb',
      '--indicator-color': '#e5e7eb',
      borderRadius: '0',
      width: '24px',
      height: '4px',
    }"
  >
    <!-- 轮播内容 -->
  </Carousel>
</template>
```

### 触摸滑动与键盘导航

```vue
<template>
  <Carousel
    :touch-enabled="true"
    :keyboard-enabled="true"
    :swipe-threshold="50"
  >
    <!-- 轮播内容 -->
  </Carousel>
</template>
```

### 不同动画效果

```vue
<!-- 滑动效果 -->
<Carousel animation-type="slide" :animation-duration="500">
  <!-- 内容 -->
</Carousel>

<!-- 淡入淡出效果 -->
<Carousel animation-type="fade" :animation-duration="800">
  <!-- 内容 -->
</Carousel>

<!-- 缩放效果 -->
<Carousel animation-type="zoom" :animation-duration="700">
  <!-- 内容 -->
</Carousel>

<!-- 翻转效果 -->
<Carousel animation-type="flip" :animation-duration="1000">
  <!-- 内容 -->
</Carousel>
```

## 最佳实践

1. **根据内容选择合适的动画类型**：

   - 图片轮播：推荐使用 `fade` 或 `zoom` 动画
   - 内容卡片轮播：推荐使用 `slide` 动画

2. **针对移动设备优化**：

   - 启用 `touchEnabled` 属性
   - 设置合适的 `swipeThreshold` 值

3. **性能优化**：

   - 对于多图片轮播，启用 `lazyLoad` 属性
   - 设置合理的 `interval` 值（3000-5000ms）

4. **提升用户体验**：

   - 使用 `pauseOnHover` 让用户有足够时间查看内容
   - 根据内容选择合适的 `indicatorPosition` 和 `arrow` 设置

5. **可访问性考虑**：
   - 启用 `keyboardEnabled` 支持键盘导航
   - 为图片提供有意义的 `alt` 属性

## 暗色模式支持

Carousel 组件完全支持暗色模式，无需额外配置。只要在应用根元素上添加 `.dark` 类，组件就会自动切换为暗色样式。

```html
<div class="dark">
  <Carousel>
    <!-- 轮播内容会自动适配暗色模式 -->
  </Carousel>
</div>
```

## 注意事项

1. 组件高度默认为 '100%'，需要在父容器中设置具体高度
2. 在 SSR 环境中使用时，请确保组件只在客户端渲染
3. 若需处理大量图片，建议启用懒加载功能
4. 动画效果会影响性能，请根据目标设备选择合适的动画类型和持续时间
