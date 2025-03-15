# ButtonGroups 按钮组组件

ButtonGroups 是一个多功能的 Vue 组件，用于将相关操作以视觉上连贯的按钮集合方式呈现。它支持多种样式、尺寸、方向和交互状态，适用于导航栏、工具栏、筛选器和分段控制器等场景。


## 功能特点

- 多种视觉变体：solid（实心）、outline（轮廓）、soft（柔和）、ghost（幽灵）
- 丰富的尺寸选择：从超小 (xs) 到超大 (xl)
- 支持水平和垂直方向排列
- 完整的颜色面板支持，包括语义化颜色选项
- 支持纯图标和图标+文本按钮
- 交互式状态管理
- 默认支持无障碍访问，包含屏幕阅读器支持
- 深色模式兼容
- 响应式设计支持


## 基本用法

### 导入

```javascript
// 导入组件
import { ButtonGroups } from "lib/ButtonGroups";
```

### 简单按钮组

```vue
<template>
  <ButtonGroups :items="items" />
</template>

<script setup>
import { ref } from "vue";
import { ButtonGroups } from "@your-org/component-library";

const items = [
  { key: 1, label: "年" },
  { key: 2, label: "月" },
  { key: 3, label: "日" },
];
</script>
```

### 图标按钮组

```vue
<template>
  <ButtonGroups :items="iconItems" :rounded="true" />
</template>

<script setup>
import { ref } from "vue";
import { ButtonGroups } from "@your-org/component-library";

const iconItems = [
  {
    key: "prev",
    icon: "icon-[material-symbols--chevron-left-rounded]",
    srOnly: "上一页",
  },
  {
    key: "next",
    icon: "icon-[material-symbols--chevron-right-rounded]",
    srOnly: "下一页",
  },
];
</script>
```

## 属性

| 属性名        | 类型              | 默认值       | 描述                                             |
| ------------- | ----------------- | ------------ | ------------------------------------------------ |
| items         | ButtonGroupItem[] | 必填         | 要显示的按钮项数组                               |
| size          | string            | 'md'         | 按钮尺寸: 'xs', 'sm', 'md', 'lg', 或 'xl'        |
| type          | string            | 'blue'       | 按钮颜色或语义类型                               |
| variant       | string            | 'solid'      | 视觉样式: 'solid', 'outline', 'soft', 或 'ghost' |
| direction     | string            | 'horizontal' | 布局方向: 'horizontal' 或 'vertical'             |
| withGap       | boolean           | false        | 是否在按钮之间添加间距                           |
| rounded       | boolean           | false        | 应用完全圆角样式（对图标按钮特别有用）           |
| selectedIndex | number            | -1           | 选中按钮的索引，-1 表示没有选中项                |
| className     | string            | ''           | 要应用到容器的额外 CSS 类                        |

### ButtonGroupItem 类型

```typescript
interface ButtonGroupItem {
  key: string | number;      // 按钮的唯一标识符
  label?: string;            // 显示的文本（如果提供了图标，则为可选）
  icon?: string;             // 图标类名（可选）
  srOnly?: string;           // 屏幕阅读器文本（用于无障碍访问）
  disabled?: boolean;        // 按钮是否禁用
}
```

## 事件

| 事件名称 | 参数            | 描述                                 |
| -------- | --------------- | ------------------------------------ |
| change   | (index: number) | 当选择变更时触发，返回被选中项的索引 |

## 示例

### 不同尺寸

```vue
<template>
  <div class="space-y-4">
    <ButtonGroups :items="items" size="xs" />
    <ButtonGroups :items="items" size="sm" />
    <ButtonGroups :items="items" size="md" />
    <ButtonGroups :items="items" size="lg" />
    <ButtonGroups :items="items" size="xl" />
  </div>
</template>
```

### 不同变体

```vue
<template>
  <div class="space-y-4">
    <ButtonGroups :items="items" variant="solid" />
    <ButtonGroups :items="items" variant="outline" />
    <ButtonGroups :items="items" variant="soft" />
    <ButtonGroups :items="items" variant="ghost" />
  </div>
</template>
```

### 不同颜色

```vue
<template>
  <div class="space-y-4">
    <!-- 直接颜色名称 -->
    <ButtonGroups :items="items" type="blue" />
    <ButtonGroups :items="items" type="green" />
    <ButtonGroups :items="items" type="red" />

    <!-- 语义化颜色类型 -->
    <ButtonGroups :items="items" type="primary" />
    <ButtonGroups :items="items" type="success" />
    <ButtonGroups :items="items" type="warning" />
    <ButtonGroups :items="items" type="danger" />
  </div>
</template>
```

### 布局选项

```vue
<template>
  <div class="space-y-6">
    <!-- 水平带间距 -->
    <ButtonGroups :items="items" :with-gap="true" />

    <!-- 垂直方向 -->
    <ButtonGroups :items="items" direction="vertical" />

    <!-- 圆角样式（适合图标按钮） -->
    <ButtonGroups :items="iconItems" :rounded="true" />

    <!-- 选项组合 -->
    <ButtonGroups
      :items="iconItems"
      direction="vertical"
      :with-gap="true"
      :rounded="true"
      variant="soft"
      type="primary"
    />
  </div>
</template>
```

### 交互式状态管理

```vue
<template>
  <div class="space-y-4">
    <ButtonGroups
      :items="items"
      :selected-index="selectedIndex"
      @change="handleSelectedChange"
    />

    <div>
      当前选择: {{ selectedIndex >= 0 ? items[selectedIndex].label : "无" }}
    </div>

    <div class="flex space-x-2">
      <button @click="selectedIndex = -1">清除选择</button>
      <button @click="selectedIndex = (selectedIndex + 1) % items.length">
        选择下一项
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ButtonGroups } from "@your-org/component-library";

const items = [
  { key: 1, label: "选项 1" },
  { key: 2, label: "选项 2" },
  { key: 3, label: "选项 3" },
];

const selectedIndex = ref(0);

const handleSelectedChange = (index) => {
  selectedIndex.value = index;
};
</script>
```

### 禁用按钮

```vue
<template>
  <ButtonGroups :items="disabledItems" />
</template>

<script setup>
import { ref } from "vue";
import { ButtonGroups } from "@your-org/component-library";

const disabledItems = [
  { key: "option1", label: "启用" },
  { key: "option2", label: "禁用", disabled: true },
  { key: "option3", label: "启用" },
];
</script>
```

### 动态项目

```vue
<template>
  <div class="space-y-4">
    <ButtonGroups
      :items="dynamicItems"
      :selected-index="selectedIndex"
      @change="handleChange"
    />

    <div class="flex space-x-2">
      <button @click="addItem">添加项目</button>
      <button @click="removeItem" :disabled="dynamicItems.length <= 1">
        删除最后一项
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ButtonGroups } from "@your-org/component-library";

const dynamicItems = ref([{ key: "tab1", label: "选项 1" }]);
let counter = 2;
const selectedIndex = ref(0);

const handleChange = (index) => {
  selectedIndex.value = index;
};

const addItem = () => {
  dynamicItems.value.push({
    key: `tab${counter}`,
    label: `选项 ${counter}`,
  });
  counter++;
};

const removeItem = () => {
  if (dynamicItems.value.length > 1) {
    dynamicItems.value.pop();
    if (selectedIndex.value >= dynamicItems.value.length) {
      selectedIndex.value = dynamicItems.value.length - 1;
    }
  }
};
</script>
```

## 常见使用场景

### 工具栏

```vue
<template>
  <ButtonGroups
    :items="toolbarItems"
    variant="ghost"
    :rounded="true"
    size="sm"
  />
</template>

<script setup>
import { ref } from "vue";
import { ButtonGroups } from "@your-org/component-library";

const toolbarItems = [
  { key: "bold", icon: "icon-[material-symbols--format-bold]", srOnly: "加粗" },
  {
    key: "italic",
    icon: "icon-[material-symbols--format-italic]",
    srOnly: "斜体",
  },
  {
    key: "underline",
    icon: "icon-[material-symbols--format-underlined]",
    srOnly: "下划线",
  },
  {
    key: "color",
    icon: "icon-[material-symbols--palette-outline]",
    srOnly: "文本颜色",
  },
];
</script>
```

### 导航

```vue
<template>
  <ButtonGroups
    :items="navItems"
    variant="soft"
    type="primary"
    :selected-index="currentPage"
    @change="handleNavigation"
  />
</template>

<script setup>
import { ref } from "vue";
import { ButtonGroups } from "@your-org/component-library";

const navItems = [
  { key: "home", label: "首页", icon: "icon-[material-symbols--home-outline]" },
  {
    key: "explore",
    label: "探索",
    icon: "icon-[material-symbols--explore-outline]",
  },
  {
    key: "profile",
    label: "个人",
    icon: "icon-[material-symbols--person-outline]",
  },
];

const currentPage = ref(0);

const handleNavigation = (index) => {
  currentPage.value = index;
  // 在真实应用中，这里可能会进行路由跳转
  console.log(`导航至 ${navItems[index].key}`);
};
</script>
```

### 视图切换器

```vue
<template>
  <div class="space-y-4">
    <ButtonGroups
      :items="viewModeItems"
      :selected-index="viewMode"
      @change="handleViewModeChange"
      variant="outline"
      size="xs"
      :rounded="true"
    />

    <!-- 基于选定视图模式变化的内容 -->
    <div class="rounded border p-4">
      <div v-if="viewMode === 0">列表视图内容</div>
      <div v-else-if="viewMode === 1">网格视图内容</div>
      <div v-else>表格视图内容</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ButtonGroups } from "@your-org/component-library";

const viewModeItems = [
  {
    key: "list",
    icon: "icon-[material-symbols--format-list-bulleted]",
    srOnly: "列表视图",
  },
  {
    key: "grid",
    icon: "icon-[material-symbols--grid-view]",
    srOnly: "网格视图",
  },
  {
    key: "table",
    icon: "icon-[material-symbols--table-rows]",
    srOnly: "表格视图",
  },
];

const viewMode = ref(0);

const handleViewModeChange = (index) => {
  viewMode.value = index;
};
</script>
```

## 无障碍访问

- 对于仅图标按钮，始终包含 `srOnly` 属性提供屏幕阅读器描述文本
- 组件使用适当的 ARIA 属性（`role="group"`）
- 选中状态通过在明暗模式下都有效的视觉指示器进行管理
- 焦点状态可见，键盘导航正常工作

## 最佳实践

- 仅将相关操作组合在一起
- 使用清晰简洁的标签
- 保持应用中一致的样式
- 为常用操作提供键盘快捷键
- 考虑使用语义化颜色类型（primary、success 等）以保持一致的含义
- 根据操作组的重要性选择适当的变体：
  - `solid` 用于主要操作
  - `outline` 或 `soft` 用于次要操作
  - `ghost` 用于第三级操作

## 浏览器支持

该组件适用于所有现代浏览器，已在以下环境测试：

- Chrome、Firefox、Safari、Edge（最新版本）
- iOS 和 Android 上的移动浏览器

## 许可证

[您选择的许可证]
