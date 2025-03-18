# SelectMenus 下拉选择组件

一个交互丰富的下拉选择组件，具有精美的样式、流畅的动画效果和完善的键盘导航支持。支持亮色和暗色模式。

## 功能特点

- 支持纯文本选项
- 支持图标和头像展示
- 支持选项描述文本
- 完善的键盘导航（方向键、Enter、Space、Escape）
- 流畅的过渡动画效果
- 焦点管理和无障碍访问支持
- 支持暗黑模式
- 支持多种预定义主题颜色

## 使用方法

### 基本用法

```vue
<SelectMenus
  v-model="selection"
  :options="options"
  label="选择选项"
  placeholder="请选择"
/>
```

### 使用主题枚举

组件支持通过 `theme` 属性使用预定义的主题颜色：

```vue
<SelectMenus
  v-model="selection"
  :options="options"
  label="选择选项"
  :theme="SelectMenuTheme.Blue"
/>
```

首先需要导入主题枚举：

```js
import SelectMenus, { SelectMenuTheme } from '路径/SelectMenus';
```

### 选项配置示例

```js
// 基本选项
const basicOptions = [
  { id: 1, name: '选项一' },
  { id: 2, name: '选项二' },
  { id: 3, name: '选项三' }
];

// 带图标的选项
const iconOptions = [
  { id: 'low', name: '低优先级', icon: 'icon-[material-symbols--arrow-downward]' },
  { id: 'medium', name: '中等优先级', icon: 'icon-[material-symbols--stat-minus-1]' },
  { id: 'high', name: '高优先级', icon: 'icon-[material-symbols--arrow-upward]' }
];

// 带头像的选项
const userOptions = [
  { id: 'user1', name: '张三', avatar: 'https://example.com/avatar1.jpg' },
  { id: 'user2', name: '李四', avatar: 'https://example.com/avatar2.jpg' }
];

// 带描述的选项
const descOptions = [
  { 
    id: 'dev', 
    name: '开发环境', 
    icon: 'icon-[material-symbols--code]', 
    description: '用于本地开发测试' 
  },
  { 
    id: 'prod', 
    name: '生产环境', 
    icon: 'icon-[material-symbols--webhook]', 
    description: '用于线上正式环境' 
  }
];
```

### 暗黑模式支持

组件自动适配 Tailwind CSS 的暗黑模式。只需在您的 HTML 或父级容器上添加 `dark` 类，组件就会切换到暗黑模式样式：

```html
<div class="dark">
  <SelectMenus v-model="selection" :options="options" />
</div>
```

### 动态主题切换

您可以动态更改组件的主题：

```vue
<template>
  <div>
    <div class="mb-4">
      <label>选择主题:</label>
      <select v-model="currentTheme">
        <option v-for="theme in themeOptions" :value="theme.value">
          {{ theme.name }}
        </option>
      </select>
    </div>
    
    <SelectMenus
      v-model="selection"
      :options="options"
      :theme="currentTheme"
      label="动态主题示例"
      placeholder="请选择"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SelectMenus, { SelectMenuTheme } from '路径/SelectMenus';

const options = [
  { id: 1, name: '选项一' },
  { id: 2, name: '选项二' },
  { id: 3, name: '选项三' }
];

const themeOptions = [
  { name: '靛蓝色 (默认)', value: SelectMenuTheme.Indigo },
  { name: '蓝色', value: SelectMenuTheme.Blue },
  { name: '绿色', value: SelectMenuTheme.Green },
  { name: '红色', value: SelectMenuTheme.Red }
];

const currentTheme = ref(SelectMenuTheme.Indigo);
const selection = ref(null);
</script>
```

## 可用主题

组件内置以下预定义主题：

```typescript
export enum SelectMenuTheme {
  Indigo = 'indigo',   // 默认
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  Purple = 'purple',
  Amber = 'amber',
  Pink = 'pink',
  Cyan = 'cyan',
  Emerald = 'emerald',
  Violet = 'violet',
  Teal = 'teal',
  Rose = 'rose',
  Sky = 'sky',
  Orange = 'orange',
}
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `SelectOption \| undefined` | `undefined` | 当前选中的选项值 |
| options | `SelectOption[]` | 必填 | 选项列表 |
| label | `string \| undefined` | `undefined` | 下拉框标签文本 |
| placeholder | `string \| undefined` | `undefined` | 未选择时的占位文本 |
| theme | `SelectMenuTheme` | `SelectMenuTheme.Indigo` | 主题颜色名称 |

## 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| update:modelValue | `SelectOption \| null` | 选择值变更时触发 |

## 类型定义

```typescript
export interface SelectOption {
    id: number | string;
    name?: string;
    icon?: string;
    avatar?: string;
    description?: string;
    [key: string]: any;
}

export enum SelectMenuTheme {
    Indigo = 'indigo',
    Blue = 'blue',
    Green = 'green',
    Red = 'red',
    Purple = 'purple',
    Amber = 'amber',
    Pink = 'pink',
    Cyan = 'cyan',
    Emerald = 'emerald',
    Violet = 'violet',
    Teal = 'teal',
    Rose = 'rose',
    Sky = 'sky',
    Orange = 'orange',
}
```

## 键盘操作

| 按键 | 功能 |
| --- | --- |
| 向下箭头 ↓ | 展开下拉菜单 / 选择下一个选项 |
| 向上箭头 ↑ | 展开下拉菜单 / 选择上一个选项 |
| Enter / Space | 选择当前高亮的选项 |
| Escape | 关闭下拉菜单 |
| Tab | 关闭下拉菜单并移动焦点 |

## 无障碍访问

组件实现了ARIA属性，支持屏幕阅读器和键盘导航：

- 使用了适当的`role`属性（listbox、option）
- 实现了`aria-selected`、`aria-expanded`、`aria-activedescendant`等属性
- 支持完整的键盘导航
- 自动滚动到视图中的高亮选项

## 实现细节

- 使用Tailwind CSS实现样式
- 支持暗黑模式 (dark:)
- 使用预定义的主题映射而不是动态类名（解决Tailwind的动态类问题）
- 平滑的过渡动画
- 使用Vue 3的Composition API

