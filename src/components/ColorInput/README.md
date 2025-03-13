# ColorInput 颜色选择器

一个简洁、易用的颜色选择器组件，支持预设颜色和自定义颜色输入，适配暗黑模式。

## 特性

- 支持预设颜色快速选择
- 支持自定义颜色输入
- 支持键盘导航
- 支持多种颜色格式（hex、0x）
- 支持弹出层位置自定义
- 支持主题色选择和各种强度
- 自动适配明亮/暗黑模式
- 响应式设计和优雅的动画效果

## 基础用法

```vue
<template>
  <ColorInput v-model="color" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorInput } from '@your-library/components'

const color = ref('#000000')
</script>
```

## 进阶用法

### 自定义预设颜色

```vue
<template>
  <ColorInput
    v-model="color"
    :colors="['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF']"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const color = ref('#FF0000')
</script>
```

### 0x 格式输出

```vue
<template>
  <ColorInput
    v-model="color"
    :colorOptions="{ outputFormat: '0x' }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const color = ref('0x000000')
</script>
```

### 禁用自定义颜色输入

```vue
<template>
  <ColorInput
    v-model="color"
    :allowCustom="false"
  />
</template>
```

### 更改弹出位置

```vue
<template>
  <ColorInput
    v-model="color"
    position="top"
  />
</template>
```

### 指定初始颜色类型

```vue
<template>
  <ColorInput
    v-model="color"
    color="emerald"
  />
</template>
```

### 设置默认颜色强度

```vue
<template>
  <ColorInput
    v-model="color"
    color="blue"
    :selectedIntensity="600"
  />
</template>
```

### 暗黑模式适配

组件会自动适配暗黑模式，无需额外配置。只需确保您的项目已正确设置 Tailwind CSS 的暗黑模式。

```html
<!-- 在HTML中添加dark类以启用暗黑模式 -->
<html class="dark">
  <!-- ... -->
</html>
```

## Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| modelValue | string | '#000000' | 当前选中的颜色值 |
| position | 'top' \| 'bottom' | 'bottom' | 颜色选择面板的弹出位置 |
| colors | string[] | [...] | 预设颜色列表 |
| allowCustom | boolean | true | 是否允许自定义颜色输入 |
| colorOptions | { outputFormat: 'hex' \| '0x' } | { outputFormat: 'hex' } | 颜色输出格式配置 |
| color | ColorType | 'blue' | 默认的颜色类型 |
| selectedIntensity | number | 500 | 默认的颜色强度（50-900） |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| update:modelValue | (color: string) | 颜色值更新时触发 |
| change | (color: string) | 颜色改变时触发 |

## 键盘操作

| 按键 | 功能 |
|------|------|
| 方向键 | 在颜色格子间移动焦点 |
| Enter/Space | 选择当前焦点的颜色 |
| Home | 移动到第一个颜色 |
| End | 移动到最后一个颜色 |
| Escape | 关闭颜色选择面板 |

## 主题色系统

组件支持以下主题色类型：

- 灰色系列: slate, gray, zinc, neutral, stone
- 暖色系列: red, orange, amber, yellow
- 绿色系列: lime, green, emerald, teal
- 蓝色系列: cyan, sky, blue, indigo
- 紫粉系列: violet, purple, fuchsia, pink, rose

每种颜色都有 10 个强度等级：50, 100, 200, 300, 400, 500, 600, 700, 800, 900。

默认强度为 500，可以通过 `selectedIntensity` 属性修改。
