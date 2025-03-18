# Segment 分段控制器

分段控制器是一种用于在预设选项中进行选择的组件，通常用于切换视图、筛选内容或设置简单的选项。

## 基本用法

```tsx
import { ref } from 'vue';
import Segment from '@/libs/Segment';

const selected = ref('daily');
const options = [
  { label: '每日', value: 'daily' },
  { label: '每周', value: 'weekly' },
  { label: '每月', value: 'monthly' }
];

// 在模板中
<Segment v-model="selected" :options="options" />
```

## 带图标

可以为选项添加图标，使界面更加直观。

```tsx
const options = [
  { label: '列表', value: 'list', icon: 'i-tabler-list' },
  { label: '卡片', value: 'card', icon: 'i-tabler-cards' },
  { label: '网格', value: 'grid', icon: 'i-tabler-grid-dots' }
];

<Segment v-model="selected" :options="options" />
```

## 深色模式

组件支持 Tailwind CSS 的深色模式。在启用深色模式的网站中会自动适配深色主题样式。

```tsx
// 使用 Tailwind 的 dark 类模式
<div class="dark">
  <Segment v-model="selected" :options="options" />
</div>

// 或者使用媒体查询方式 (如果您的 tailwind.config.js 配置为 darkMode: 'media')
// 自动根据系统深色模式进行适配
<Segment v-model="selected" :options="options" />
```

## API

### Props

| 属性名 | 类型 | 默认值 | 说明 |
| ----- | ----- | ----- | ----- |
| modelValue / v-model | `string \| number` | - | 当前选中项的值 |
| options | `SegmentOption[]` | `[]` | 分段控制器的选项列表 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 控制器大小 |
| disabled | `boolean` | `false` | 是否禁用 |
| block | `boolean` | `false` | 是否为块级元素（宽度100%） |

### SegmentOption 类型

```typescript
interface SegmentOption {
  label: string;       // 显示的文本
  value: string | number;  // 唯一标识值
  icon?: string;       // 可选的图标类名
}
```

### 事件

| 事件名 | 参数 | 说明 |
| ----- | ----- | ----- |
| update:modelValue | `(value: string \| number) => void` | 选中值变化时触发 |
| change | `(value: string \| number) => void` | 选中值变化时触发 |

## 特性

1. **动画效果**：组件内置了平滑的选择动画，提高用户体验
2. **键盘可访问性**：支持键盘操作，可通过空格键或回车键选择选项
3. **尺寸多样化**：提供小、中、大三种尺寸，适应不同场景
4. **图标支持**：可以为每个选项添加图标，使界面更加直观
5. **块级模式**：可设置为块级元素，自适应父容器宽度
6. **禁用状态**：支持整个组件禁用
7. **深色模式**：完美支持 Tailwind CSS 的深色模式

## 设计原则

- **简洁明了**：分段控制器应保持选项少而精，通常不超过5个选项
- **功能对等**：各选项应当具有同等的重要性和功能层级
- **视觉平衡**：在使用图标时，所有选项应保持一致的样式风格
