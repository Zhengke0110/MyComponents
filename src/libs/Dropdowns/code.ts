// 基础用法代码示例
export const basicUsageCode = `\`\`\`vue
<template>
  <Dropdowns
    label="选项菜单"
    :items="menuItems"
    @select="handleSelect"
  />
</template>

<script setup>
import { ref } from 'vue';

const menuItems = [
  {
    id: "1",
    type: "button",
    label: "编辑",
    icon: "icon-[solar--clapperboard-edit-broken]",
  },
  {
    id: "2",
    type: "button",
    label: "复制",
    icon: "icon-[solar--copy-broken]",
  },
  { id: "div1", type: "divider" },
  {
    id: "3",
    type: "link",
    label: "了解更多",
    href: "https://example.com",
    icon: "icon-[solar--link-bold-duotone]",
  },
];

const handleSelect = (item) => {
  console.log('选中项目:', item);
};
</script>
\`\`\``;

// 不同尺寸代码示例
export const sizeVariantsCode = `\`\`\`vue
<template>
  <div class="flex gap-4">
    <Dropdowns 
      label="小尺寸" 
      size="sm" 
      :items="menuItems" 
    />
    
    <Dropdowns 
      label="中尺寸" 
      size="md" 
      :items="menuItems" 
    />
    
    <Dropdowns 
      label="大尺寸" 
      size="lg" 
      :items="menuItems" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuItems = [
  {
    id: "1",
    type: "button",
    label: "菜单选项",
    icon: "icon-[solar--settings-broken]",
  },
  // ...更多菜单项
];
</script>
\`\`\``;

// 颜色主题代码示例
export const themeColorsCode = `\`\`\`vue
<template>
  <div class="flex gap-4">
    <Dropdowns 
      label="蓝色" 
      theme="blue" 
      :items="menuItems" 
    />
    
    <Dropdowns 
      label="绿色" 
      theme="green" 
      :items="menuItems" 
    />
    
    <Dropdowns 
      label="红色" 
      theme="red" 
      :items="menuItems" 
    />
    
    <Dropdowns 
      label="琥珀色" 
      theme="amber" 
      :items="menuItems" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuItems = [
  {
    id: "1",
    type: "button",
    label: "设置",
    icon: "icon-[solar--settings-broken]",
  },
  // ...更多菜单项
];
</script>
\`\`\``;

// 不同变体代码示例
export const variantStylesCode = `\`\`\`vue
<template>
  <div class="flex gap-4">
    <Dropdowns 
      label="实心" 
      theme="blue" 
      variant="solid" 
      :items="menuItems" 
    />
    
    <Dropdowns 
      label="轮廓" 
      theme="blue" 
      variant="outline" 
      :items="menuItems" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuItems = [
  {
    id: "1",
    type: "button",
    label: "默认选项",
  },
  {
    id: "2",
    type: "button",
    label: "其他选项",
  },
];
</script>
\`\`\``;

// 危险操作代码示例
export const dangerActionsCode = `\`\`\`vue
<template>
  <Dropdowns
    label="项目操作"
    :items="[
      { id: '1', type: 'button', label: '编辑', icon: 'icon-[solar--pen-broken]' },
      { id: 'div1', type: 'divider' },
      { id: '2', type: 'button', label: '删除', icon: 'icon-[solar--trash-bin-broken]', danger: true },
    ]"
    @select="handleSelect"
  />
</template>

<script setup>
import { ref } from 'vue';

const handleSelect = (item) => {
  if (item.danger) {
    // 显示二次确认
    console.log('请确认是否要执行危险操作:', item.label);
  } else {
    console.log('选中项目:', item.label);
  }
};
</script>
\`\`\``;

// 禁用项目代码示例
export const disabledItemsCode = `\`\`\`vue
<template>
  <Dropdowns
    label="设置选项"
    :items="menuItems"
  />
</template>

<script setup>
import { ref } from 'vue';

const menuItems = [
  { id: '1', type: 'button', label: '可用选项', icon: 'icon-[solar--check-circle-broken]' },
  { id: '2', type: 'button', label: '禁用选项', icon: 'icon-[solar--close-circle-broken]', disabled: true },
  { id: '3', type: 'button', label: '另一个可用选项', icon: 'icon-[solar--star-broken]' },
];
</script>
\`\`\``;

// 自定义样式代码示例
export const customStylesCode = `\`\`\`vue
<template>
  <Dropdowns
    label="自定义按钮"
    :items="menuItems"
    button-class="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
    icon-class="icon-[solar--alt-arrow-down-broken]"
  />
</template>

<script setup>
import { ref } from 'vue';

const menuItems = [
  // 菜单项列表
  { id: '1', type: 'button', label: '选项1' },
  { id: '2', type: 'button', label: '选项2' },
  { id: '3', type: 'button', label: '选项3' },
];
</script>
\`\`\``;

// 弹出位置代码示例
export const placementCode = `\`\`\`vue
<template>
  <div class="flex gap-4">
    <Dropdowns 
      label="默认位置" 
      :items="menuItems" 
    />

    <Dropdowns 
      label="自动调整位置" 
      :items="menuItems"
      :auto-adjust="true"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const menuItems = [
  { id: '1', type: 'button', label: '选项1' },
  { id: '2', type: 'button', label: '选项2' },
  { id: '3', type: 'button', label: '选项3' },
];
</script>
\`\`\``;
