# RoundProgress 环形进度条组件

一个基于 Vue 3 + TSX + TypeScript + Tailwind CSS 的现代化环形进度条组件。

## 特性

- 🎨 自定义颜色和渐变
- 📏 可调整大小和线条宽度
- ✨ 平滑动画效果
- 🎯 精确的进度显示
- 💫 可选装饰效果
- 📱 响应式设计
- 🔧 丰富的自定义选项

## 使用方法

```tsx
import { RoundProgress } from './components/RoundProgress';

// 基础用法
<RoundProgress :progress="75" />

// 自定义大小和颜色
<RoundProgress 
  :progress="65"
  :size="100"
  start-color="#10B981"
  end-color="#059669"
/>

// 使用自定义内容
<RoundProgress :progress="88" :size="120">
  <template #center="{ progress }">
    <div class="text-center">
      <div class="text-2xl font-bold text-indigo-600">{progress}</div>
      <div class="text-xs text-indigo-400">分数</div>
    </div>
  </template>
</RoundProgress>
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|------|------|---------|-------------|
| `progress` | `number` | - | 进度值 (0-100) |
| `size` | `number` | `32` | 组件尺寸（像素） |
| `strokeWidth` | `number` | `3` | 进度圆环宽度 |
| `startColor` | `string` | `'#4f46e5'` | 渐变起始颜色 |
| `endColor` | `string` | `'#7c3aed'` | 渐变结束颜色 |
| `showDecoration` | `boolean` | `false` | 是否显示阴影装饰 |
| `duration` | `number` | `1000` | 动画持续时间（毫秒） |
| `textClass` | `string` | `'text-gray-700'` | 中心文本的样式类 |
| `bgClass` | `string` | `'stroke-gray-200'` | 背景圆环的样式类 |

## 插槽

### center

自定义进度圆环中心的内容。

```tsx
<RoundProgress :progress="75">
  <template #center="{ progress }">
    <div>{progress}%</div>
  </template>
</RoundProgress>
```

## 示例

### 基础用法

```tsx
<RoundProgress :progress="75" />
```

### 自定义尺寸

```tsx
<RoundProgress :progress="75" :size="100" :strokeWidth="8" />
```

### 自定义颜色

```tsx
<RoundProgress 
  :progress="75"
  startColor="#F59E0B"
  endColor="#D97706"
/>
```

### 带装饰效果

```tsx
<RoundProgress :progress="75" :showDecoration="true" />
```

### 自定义文本样式

```tsx
<RoundProgress :progress="75" textClass="text-blue-600 font-bold" />
```
