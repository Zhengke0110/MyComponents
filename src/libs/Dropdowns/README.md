# Dropdowns 下拉菜单

一个灵活而强大的下拉菜单组件，支持多种样式、尺寸和主题色。

## 特性

- 支持不同尺寸（小、中、大）
- 支持底部弹出位置，带智能安全区域调整
- 支持主题色系统，与 Tailwind CSS 颜色保持一致
- 支持自动适配暗色模式
- 支持键盘导航
- 支持禁用项目
- 支持危险操作样式
- 支持自定义样式
- 支持链接和按钮项目类型
- 支持分割线

## 基础用法

```vue
<template>
  <Dropdowns
    label="选项"
    :items="[
      { id: '1', type: 'button', label: '编辑', icon: 'icon-[solar--pen-broken]' },
      { id: '2', type: 'button', label: '复制', icon: 'icon-[solar--copy-broken]' },
      { id: 'div1', type: 'divider' },
      { id: '3', type: 'link', label: '查看详情', href: '#', icon: 'icon-[solar--link-broken]' },
    ]"
    @select="handleSelect"
  />
</template>

<script setup>
import { Dropdowns } from '@your-library/components'

const handleSelect = (item) => {
  console.log('选中项目:', item)
}
</script>
```

## 不同尺寸

```vue
<template>
  <Dropdowns label="小尺寸" size="sm" :items="items" />
  <Dropdowns label="中尺寸" size="md" :items="items" /> <!-- 默认 -->
  <Dropdowns label="大尺寸" size="lg" :items="items" />
</template>
```

## 主题色

支持所有 Tailwind CSS 颜色：

```vue
<template>
  <Dropdowns label="蓝色" theme="blue" :items="items" />
  <Dropdowns label="绿色" theme="green" :items="items" />
  <Dropdowns label="红色" theme="red" :items="items" />
  <!-- 其他颜色... -->
</template>
```

## 不同变体

```vue
<template>
  <Dropdowns label="实心" theme="blue" variant="solid" :items="items" />
  <Dropdowns label="轮廓" theme="blue" variant="outline" :items="items" />
</template>
```

## 暗色模式

组件会自动适配 Tailwind CSS 的暗色模式:

```vue
<template>
  <!-- 在暗色模式下自动适配 -->
  <div class="dark">
    <Dropdowns label="系统设置" :items="items" theme="blue" />
  </div>
</template>
```

## 弹出位置

```vue
<template>
  <Dropdowns label="下方" placement="bottom" :items="items" /> <!-- 默认 -->
  <Dropdowns label="上方" placement="top" :items="items" />
  <Dropdowns label="左侧" placement="left" :items="items" />
  <Dropdowns label="右侧" placement="right" :items="items" />
</template>
```

## 危险操作

```vue
<template>
  <Dropdowns
    label="项目操作"
    :items="[
      { id: '1', type: 'button', label: '编辑', icon: 'icon-[solar--pen-broken]' },
      { id: 'div1', type: 'divider' },
      { id: '2', type: 'button', label: '删除', icon: 'icon-[material-symbols--restore-from-trash-outline-rounded]', danger: true },
    ]"
  />
</template>
```

## 禁用项目

```vue
<template>
  <Dropdowns
    label="设置"
    :items="[
      { id: '1', type: 'button', label: '可用选项' },
      { id: '2', type: 'button', label: '禁用选项', disabled: true },
    ]"
  />
</template>
```

## 自定义样式

```vue
<template>
  <Dropdowns
    label="自定义按钮"
    :items="items"
    button-class="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
    icon-class="icon-[solar--alt-arrow-down-broken]"
  />
</template>
```

## 安全区域自动调整

组件可以智能检测视口边界，自动调整显示位置和大小，确保菜单内容完全可见：

```vue
<template>
  <!-- 启用安全区域自动调整（默认开启） -->
  <Dropdowns
    label="智能弹出"
    :items="items"
    :auto-adjust="true"
  />
  
  <!-- 禁用自动调整 -->
  <Dropdowns
    label="固定弹出"
    :items="items"
    :auto-adjust="false"
  />
</template>
```

当菜单接近屏幕边缘时，组件会：

1. 自动调整水平对齐方向（左对齐或右对齐）
2. 限制最大高度以适应底部空间
3. 当内容高度超过可用空间时，启用垂直滚动
4. 保持菜单内容完全可见，确保良好的用户体验

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| label | string | | 按钮上显示的文本 |
| items | DropdownItem[] | | 下拉菜单项数组 |
| buttonClass | string | | 自定义按钮类名 |
| iconClass | string | | 自定义图标类名 |
| triggerIcon | string | | 按钮左侧图标类名 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 按钮和菜单尺寸 |
| theme | ColorType | 'gray' | 主题颜色 |
| variant | 'solid' \| 'outline' | 'solid' | 按钮样式变体 |
| autoAdjust | boolean | true | 是否自动调整菜单位置以适应视口 |

## 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| select | (item: DropdownItem) | 当选择菜单项时触发 |
| open | | 当菜单打开时触发 |
| close | | 当菜单关闭时触发 |

## DropdownItem 类型

```typescript
interface DropdownItem {
  id: string | number;         // 唯一标识符
  type: "link" | "button" | "divider";  // 项目类型
  label?: string;              // 显示文本
  href?: string;               // 链接地址（仅 type="link" 时有效）
  icon?: string;               // 左侧图标类名
  endIcon?: string;            // 右侧图标类名
  iconClass?: string;          // 图标自定义类名
  disabled?: boolean;          // 是否禁用
  danger?: boolean;            // 是否为危险操作
  onClick?: () => void;        // 点击事件处理函数
}
```

## 键盘导航

下拉菜单支持完整的键盘导航：

| 按键 | 功能 |
|------|------|
| 回车/空格 | 打开/关闭下拉菜单或选择当前项目 |
| 方向键上/下 | 在菜单项之间移动焦点 |
| Esc | 关闭下拉菜单 |
| Tab | 移动到下一个焦点元素（会关闭下拉菜单） |

## 主题色系统

组件支持与 Tailwind CSS 一致的颜色系统，可以使用以下颜色主题：

- 灰色系列: slate, gray, zinc, neutral, stone
- 暖色系列: red, orange, amber, yellow
- 绿色系列: lime, green, emerald, teal
- 蓝色系列: cyan, sky, blue, indigo
- 紫粉系列: violet, purple, fuchsia, pink, rose

每种颜色都有 solid 和 outline 两种变体，适用于不同的设计需求。

## 与暗色模式结合

通过设置 `dark` 属性，可以轻松让组件适配暗色主题：

```vue
<template>
  <div class="dark:bg-gray-900 p-8">
    <Dropdowns
      label="系统设置"
      :items="menuItems"
      theme="blue"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const menuItems = [
  // ...菜单项
]
</script>
```

## 最佳实践

1. **保持菜单项简洁**：每个下拉菜单应该包含不超过 10 个选项，避免过长的菜单
2. **相关操作分组**：使用分割线将相关操作分组，提高可读性
3. **危险操作警示**：对于删除等危险操作，使用 `danger: true` 属性进行视觉警示
4. **提供键盘支持**：确保你的应用可以通过键盘完全操作下拉菜单
5. **适当的图标**：使用图标增强可视化提示，但不要过度使用
