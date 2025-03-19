# Tabs 选项卡组件

选项卡组件允许用户在不同内容区域之间进行切换，提供了响应式设计，在移动设备上会自动转换为下拉菜单形式。支持亮色和暗色模式。

## 功能特点

- 响应式设计：在小屏幕设备上转换为下拉选择形式
- 自定义标签内容：支持通过插槽自定义标签显示
- 禁用状态：支持禁用特定选项卡
- 动画过渡：内容切换时具有平滑的过渡效果
- 事件处理：提供选项卡变更时的事件回调
- 明暗模式：完全支持 Tailwind CSS 的 dark 模式
- 自动适配：无需额外逻辑即可在明暗模式之间切换

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
| ----- | ---- | ----- | ---- |
| modelValue | string | undefined | 当前选中的标签，支持v-model绑定 |
| tabs | (TabItem \| string)[] | [] | 标签项数组，可以是字符串数组或TabItem对象数组 |
| showContent | boolean | true | 是否显示标签内容区域 |
| defaultTab | string | '' | 默认选中的标签名（当没有modelValue时生效） |
| activeColor | ColorType | undefined | 激活状态的主题颜色，支持 tailwindcss 的颜色名称 |
| hoverColor | ColorType | activeColor值 | 悬停状态的主题颜色 |
| theme | TabTheme | 'info' | 主题样式，支持预设的多种主题 |

## TabItem接口

```typescript
interface TabItem {
  name: string;      // 选项卡名称（必需）
  href?: string;     // 选项卡链接，默认为 #name
  disabled?: boolean; // 是否禁用，默认为false
  content?: string;  // 选项卡内容
  [key: string]: any; // 其他自定义属性
}
```

## TabTheme枚举

```typescript
enum TabTheme {
  Primary = "primary",   // 蓝色
  Secondary = "secondary", // 灰色
  Success = "success",   // 绿色
  Danger = "danger",     // 红色
  Warning = "warning",   // 黄色
  Info = "info",         // 靛蓝色（默认）
}
```

## 颜色支持

Tabs 组件支持所有 Tailwind CSS 的颜色：

```typescript
type ColorType = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系
```

## 事件

| 事件名 | 说明 | 参数 |
| ----- | ---- | ---- |
| update:modelValue | 选项卡变更时触发，用于v-model | 新选中的选项卡名称（string） |
| change | 选项卡变更时触发 | 选中的选项卡对象（TabItem） |
| click | 点击选项卡时触发 | 点击的选项卡对象（TabItem） |

## 插槽

| 插槽名 | 说明 | 作用域变量 |
| ----- | ---- | --------- |
| tab | 自定义标签显示内容 | { tab: TabItem } |
| [tab.name] | 每个标签对应的内容插槽 | { tab: TabItem } |

## 使用示例

### 基础用法

最简单的标签页使用方式：

```vue
<template>
  <Tabs v-model="activeTab" :tabs="tabs">
    <template #first>第一个标签的内容</template>
    <template #second>第二个标签的内容</template>
    <template #third>第三个标签的内容</template>
  </Tabs>
</template>

<script setup>
import { ref } from 'vue';
import { Tabs } from '@/components/Tabs';

const activeTab = ref('first');
const tabs = ['first', 'second', 'third'];
</script>
```

### 带图标的自定义标签

使用自定义插槽实现带图标的标签：

```vue
<template>
  <Tabs v-model="activeTab" :tabs="tabs">
    <template #tab="{ tab }">
      <div class="flex items-center gap-2">
        <i :class="tab.icon"></i>
        {{ tab.label }}
      </div>
    </template>
    <template #dashboard>
      <div class="p-4">仪表盘内容</div>
    </template>
  </Tabs>
</template>

<script setup>
import { ref } from 'vue';
import { Tabs } from '@/components/Tabs';

const activeTab = ref('dashboard');
const tabs = [
  { name: 'dashboard', label: '仪表盘', icon: 'icon-[tabler--dashboard]' },
  { name: 'profile', label: '个人资料', icon: 'icon-[tabler--user-cog]' },
  { name: 'settings', label: '设置', icon: 'icon-[tabler--settings]' },
];
</script>
```

### 自定义颜色

可以通过 `activeColor` 和 `hoverColor` 属性设置不同的主题色：

```vue
<template>
  <!-- 红色主题 -->
  <Tabs 
    v-model="activeTab" 
    :tabs="tabs"
    active-color="red"
    hover-color="red"
  >
    <template #tab1>红色主题内容</template>
    <template #tab2>红色主题内容</template>
  </Tabs>
</template>

<script setup>
import { ref } from 'vue';
import { Tabs } from '@/components/Tabs';

const activeTab = ref('tab1');
const tabs = ['tab1', 'tab2'];
</script>
```

### 使用预设主题

Tabs组件提供了多种预设主题，可以通过`theme`属性设置：

```vue
<template>
  <!-- 成功主题 - 绿色 -->
  <Tabs 
    v-model="activeTab" 
    :tabs="tabs"
    :theme="TabTheme.Success"
  >
    <template #tab1>绿色主题内容</template>
    <template #tab2>绿色主题内容</template>
  </Tabs>
</template>

<script setup>
import { ref } from 'vue';
import { Tabs, TabTheme } from '@/components/Tabs';

const activeTab = ref('tab1');
const tabs = ['tab1', 'tab2'];
</script>
```

### 暗色模式支持

组件自动适配 tailwindcss 的暗色模式：

```html
<!-- 在父元素上添加 dark 类或使用 tailwindcss 的暗色模式配置 -->
<div class="dark">
  <Tabs v-model="activeTab" :tabs="tabs" theme="primary">
    <template #tab1>自动适应暗色模式的内容</template>
    <template #tab2>自动适应暗色模式的内容</template>
  </Tabs>
</div>
```

### 移动端适配

在小屏幕设备上，选项卡会自动转换成下拉菜单形式：

```vue
<template>
  <Tabs v-model="activeTab" :tabs="tabs">
    <template #tab1>内容会在小屏幕上自动适配</template>
    <template #tab2>无需额外编写响应式代码</template>
  </Tabs>
</template>
```

### 禁用特定标签

通过传入对象数组设置禁用状态：

```vue
<template>
  <Tabs v-model="activeTab" :tabs="disabledTabs">
    <template #tab1>可用标签内容</template>
    <template #tab2>可用标签内容</template>
    <template #tab3>禁用标签内容</template>
  </Tabs>
</template>

<script setup>
import { ref } from 'vue';
import { Tabs } from '@/components/Tabs';

const activeTab = ref('tab1');
const disabledTabs = [
  { name: 'tab1', content: '标签1' },
  { name: 'tab2', content: '标签2' },
  { name: 'tab3', content: '标签3', disabled: true },
];
</script>
```

## 过渡动画

Tabs 组件支持内容切换时的平滑过渡动画：
- 透明度渐变
- 轻微位移效果
- 确保内容区域最小高度，防止切换时页面跳动

## 最佳实践

1. 标签数量建议保持在2-7个之间，过多的标签会影响用户体验
2. 标签名称应简洁明了，建议不超过4个汉字
3. 在移动端会自动转换为下拉选择形式，无需额外适配
4. 可以通过自定义插槽实现更丰富的标签内容展示
5. 暗色模式自动适应，无需额外配置

## 注意事项

1. modelValue 和 defaultTab 不要同时使用，modelValue 的优先级更高
2. 禁用的标签不会触发任何事件
3. 标签页切换时会保持内容区域的最小高度，避免页面跳动
4. 确保每个标签名称的唯一性，这将用作插槽名和标识符
5. 使用暗色模式时，确保页面或父元素上有正确的 `dark` 类或按照 tailwindcss 配置启用暗色模式
