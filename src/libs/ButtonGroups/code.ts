// 基本用法代码示例
export const basicUsageCode = `\`\`\`vue
<template>
  <ButtonGroups :items="items" />
</template>

<script setup>
const items = [
  { key: 1, label: '选项一' },
  { key: 2, label: '选项二' },
  { key: 3, label: '选项三' },
];
</script>
\`\`\``;

// 颜色设置代码示例
export const colorTypesCode = {
  basic: `\`\`\`vue
<template>
  <!-- 基础颜色 -->
  <ButtonGroups :items="items" type="blue" /> <!-- 默认值 -->
  <ButtonGroups :items="items" type="green" />
  <ButtonGroups :items="items" type="red" />
  <ButtonGroups :items="items" type="purple" />
</template>
\`\`\``,
  
  semantic: `\`\`\`vue
<template>
  <!-- 语义化颜色 -->
  <ButtonGroups :items="items" type="primary" />  <!-- 映射到 indigo -->
  <ButtonGroups :items="items" type="success" />  <!-- 映射到 green -->
  <ButtonGroups :items="items" type="warning" />  <!-- 映射到 yellow -->
  <ButtonGroups :items="items" type="danger" />   <!-- 映射到 red -->
</template>
\`\`\``
};

// 变体样式代码示例
export const variantStylesCode = {
  solid: `\`\`\`vue
<template>
  <ButtonGroups :items="items" variant="solid" />
</template>
\`\`\``,
  
  outline: `\`\`\`vue
<template>
  <ButtonGroups :items="items" variant="outline" />
</template>
\`\`\``,
  
  soft: `\`\`\`vue
<template>
  <ButtonGroups :items="items" variant="soft" />
</template>
\`\`\``,
  
  ghost: `\`\`\`vue
<template>
  <ButtonGroups :items="items" variant="ghost" />
</template>
\`\`\``
};

// 尺寸选项代码示例
export const sizeOptionsCode = `\`\`\`vue
<template>
  <ButtonGroups :items="items" size="xs" />
  <ButtonGroups :items="items" size="sm" />
  <ButtonGroups :items="items" size="md" /> <!-- 默认值 -->
  <ButtonGroups :items="items" size="lg" />
  <ButtonGroups :items="items" size="xl" />
</template>
\`\`\``;

// 圆角设置代码示例
export const roundedOptionsCode = `\`\`\`vue
<template>
  <ButtonGroups :items="items" :rounded="false" /> <!-- 直角 -->
  <ButtonGroups :items="items" :rounded="true" />  <!-- 圆角 -->
</template>
\`\`\``;

// 状态选项代码示例
export const stateOptionsCode = `\`\`\`vue
<template>
  <ButtonGroups :items="items" :selected-index="0" />
</template>
\`\`\``;

// 带图标按钮组代码示例
export const withIconsCode = `\`\`\`vue
<template>
  <ButtonGroups :items="iconItems" />
</template>

<script setup>
const iconItems = [
  { key: 1, label: '列表', icon: 'icon-[carbon--list]' },
  { key: 2, label: '网格', icon: 'icon-[carbon--grid]' },
  { key: 3, label: '表格', icon: 'icon-[carbon--table]' }
];
</script>
\`\`\``;

// 交互式状态代码示例
export const interactiveStateCode = `\`\`\`vue
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
      <Button @click="selectedIndex = -1">清除选择</Button>
      <Button @click="selectedIndex = (selectedIndex + 1) % items.length">
        选择下一项
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
\`\`\``;

// 禁用状态代码示例
export const disabledItemsCode = `\`\`\`vue
<template>
  <ButtonGroups :items="disabledItems" />
</template>

<script setup>
const disabledItems = [
  { key: 1, label: "选项 1" },
  { key: 2, label: "选项 2", disabled: true },
  { key: 3, label: "选项 3" },
];
</script>
\`\`\``;

// 组合使用案例
export const combinationExampleCode = `\`\`\`vue
<template>
  <ButtonGroups 
    :items="viewModeItems"
    type="primary"
    variant="soft"
    :selected-index="selected"
    @change="selected = $event"
  />
</template>

<script setup>
import { ref } from "vue";

const viewModeItems = [
  { key: "list", label: "列表", icon: "icon-[carbon--list]" },
  { key: "grid", label: "网格", icon: "icon-[carbon--grid]" },
  { key: "table", label: "表格", icon: "icon-[carbon--table]" }
];

const selected = ref(0);
</script>
\`\`\``;
