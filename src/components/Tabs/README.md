# Tabs 选项卡组件

选项卡组件允许用户在不同内容区域之间进行切换，提供了响应式设计，在移动设备上会自动转换为下拉菜单形式。

## 功能特点

- 响应式设计：在小屏幕设备上转换为下拉选择形式
- 自定义标签内容：支持通过插槽自定义标签显示
- 禁用状态：支持禁用特定选项卡
- 动画过渡：内容切换时具有平滑的过渡效果
- 事件处理：提供选项卡变更时的事件回调

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
| ----- | ---- | ----- | ---- |
| modelValue | string | undefined | 当前选中的标签，支持v-model绑定 |
| tabs | (TabItem \| string)[] | [] | 标签项数组，可以是字符串数组或TabItem对象数组 |
| showContent | boolean | true | 是否显示标签内容区域 |
| defaultTab | string | '' | 默认选中的标签名（当没有modelValue时生效） |
| activeColor | string | 'indigo' | 激活状态的主题颜色，支持 tailwindcss 的颜色名称 |
| hoverColor | string | 'gray' | 悬停状态的主题颜色，支持 tailwindcss 的颜色名称 |
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
import Tabs from '@/components/Tabs';

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
import Tabs from '@/components/Tabs';

const activeTab = ref('dashboard');
const tabs = [
  { name: 'dashboard', label: '仪表盘', icon: 'i-carbon-dashboard' },
  { name: 'profile', label: '个人资料', icon: 'i-carbon-user-profile' },
  { name: 'settings', label: '设置', icon: 'i-carbon-settings' },
];
</script>
```

### 禁用特定标签

设置标签的禁用状态：

```vue
<template>
  <Tabs v-model="activeTab" :tabs="tabs">
    <template #tab1>可用标签内容</template>
    <template #tab2>禁用标签内容不可见</template>
  </Tabs>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from '@/components/Tabs';

const activeTab = ref('tab1');
const tabs = [
  { name: 'tab1', content: '标签1' },
  { name: 'tab2', content: '标签2', disabled: true },
];
</script>
```

### 设置默认标签

使用 defaultTab 属性设置默认选中的标签：

```vue
<template>
  <Tabs :tabs="tabs" default-tab="tab2">
    <template #tab1>标签1内容</template>
    <template #tab2>默认显示的标签2内容</template>
    <template #tab3>标签3内容</template>
  </Tabs>
</template>

<script setup>
import Tabs from '@/components/Tabs';

const tabs = ['tab1', 'tab2', 'tab3'];
</script>
```

### 自定义主题颜色

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

  <!-- 绿色主题 -->
  <Tabs 
    v-model="activeTab" 
    :tabs="tabs"
    active-color="emerald"
    hover-color="emerald"
  >
    <template #tab1>绿色主题内容</template>
    <template #tab2>绿色主题内容</template>
  </Tabs>
</template>

<script setup>
import { ref } from 'vue';
import Tabs from '@/components/Tabs';

const activeTab = ref('tab1');
const tabs = ['tab1', 'tab2'];
</script>
```

支持的颜色值包括 Tailwind CSS 提供的所有颜色：
- red
- blue
- green
- yellow
- purple
- pink
- indigo
- emerald
等...

### 使用预设主题

Tabs组件提供了多种预设主题，可以通过`theme`属性设置：

```vue
<template>
  <!-- 成功主题 - 绿色 -->
  <Tabs 
    v-model="activeTab" 
    :tabs="tabs"
    theme="success"
  >
    <template #tab1>绿色主题内容</template>
    <template #tab2>绿色主题内容</template>
  </Tabs>

  <!-- 危险主题 - 红色 -->
  <Tabs 
    v-model="activeTab" 
    :tabs="tabs"
    theme="danger"
  >
    <template #tab1>红色主题内容</template>
    <template #tab2>红色主题内容</template>
  </Tabs>
</template>

<script setup>
import { ref } from 'vue';
import { Tabs, TabTheme } from '@/components/Tabs';

const activeTab = ref('tab1');
const tabs = ['tab1', 'tab2'];
</script>
```

支持的主题选项包括：
- `primary`: 蓝色主题
- `secondary`: 灰色主题
- `success`: 绿色主题
- `danger`: 红色主题
- `warning`: 黄色主题
- `info`: 靛蓝色主题（默认）

## 最佳实践

1. 标签数量建议保持在2-7个之间，过多的标签会影响用户体验
2. 标签名称应简洁明了，建议不超过4个汉字
3. 在移动端会自动转换为下拉选择形式，无需额外适配
4. 可以通过自定义插槽实现更丰富的标签内容展示

## 注意事项

1. modelValue 和 defaultTab 不要同时使用，modelValue 的优先级更高
2. 禁用的标签不会触发任何事件
3. 标签页切换时会保持内容区域的最小高度，避免页面跳动
4. 确保每个标签名称的唯一性，这将用作插槽名和标识符
