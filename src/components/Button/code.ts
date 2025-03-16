// 基础用法代码示例
export const basicUsageCode = `\`\`\`vue
<template>
  <Button>默认按钮</Button>
  <Button type="red">红色按钮</Button>
  <Button type="green">绿色按钮</Button>
  <Button type="yellow">黄色按钮</Button>
</template>
\`\`\``;

// 语义化类型代码示例
export const semanticTypesCode = `\`\`\`vue
<template>
  <Button type="primary">主要按钮</Button>
  <Button type="secondary">次要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
  <Button type="info">信息按钮</Button>
</template>
\`\`\``;

// 按钮变体代码示例
export const buttonVariantsCode = {
  solid: `\`\`\`vue
<template>
  <Button variant="solid" type="primary">主要</Button>
  <Button variant="solid" type="secondary">次要</Button>
  <Button variant="solid" type="success">成功</Button>
  <Button variant="solid" type="warning">警告</Button>
  <Button variant="solid" type="danger">危险</Button>
  <Button variant="solid" type="info">信息</Button>
</template>
\`\`\``,
  
  soft: `\`\`\`vue
<template>
  <Button variant="soft" type="primary">主要</Button>
  <Button variant="soft" type="secondary">次要</Button>
  <Button variant="soft" type="success">成功</Button>
  <Button variant="soft" type="warning">警告</Button>
  <Button variant="soft" type="danger">危险</Button>
  <Button variant="soft" type="info">信息</Button>
</template>
\`\`\``,
  
  outline: `\`\`\`vue
<template>
  <Button variant="outline" type="primary">主要</Button>
  <Button variant="outline" type="secondary">次要</Button>
  <Button variant="outline" type="success">成功</Button>
  <Button variant="outline" type="warning">警告</Button>
  <Button variant="outline" type="danger">危险</Button>
  <Button variant="outline" type="info">信息</Button>
</template>
\`\`\``,
  
  ghost: `\`\`\`vue
<template>
  <Button variant="ghost" type="primary">主要</Button>
  <Button variant="ghost" type="secondary">次要</Button>
  <Button variant="ghost" type="success">成功</Button>
  <Button variant="ghost" type="warning">警告</Button>
  <Button variant="ghost" type="danger">危险</Button>
  <Button variant="ghost" type="info">信息</Button>
</template>
\`\`\``,
};

// 按钮尺寸代码示例
export const buttonSizesCode = `\`\`\`vue
<template>
  <Button size="xs" type="primary">超小</Button>
  <Button size="sm" type="primary">小型</Button>
  <Button size="md" type="primary">中等</Button>
  <Button size="lg" type="primary">大型</Button>
  <Button size="xl" type="primary">超大</Button>
</template>
\`\`\``;

// 带图标按钮代码示例
export const buttonWithIconCode = `\`\`\`vue
<template>
  <Button type="primary" icon="icon-[carbon--add]">添加</Button>
  <Button type="success" icon="icon-[carbon--checkmark]">确认</Button>
  <Button type="danger" icon="icon-[carbon--trash-can]">删除</Button>
  <Button type="warning" icon="icon-[carbon--warning]">警告</Button>

  <!-- 仅图标按钮 -->
  <Button type="primary" icon="icon-[carbon--add]" />
</template>
\`\`\``;

// 按钮状态代码示例
export const buttonStatesCode = `\`\`\`vue
<template>
  <Button>默认状态</Button>
  <Button disabled>禁用状态</Button>
  <Button loading>加载中</Button>
</template>
\`\`\``;

// 块级按钮代码示例
export const blockButtonCode = `\`\`\`vue
<template>
  <Button block type="primary">块级按钮</Button>
</template>
\`\`\``;

// 色彩展示代码示例
export const colorTypeShowcaseCode = `\`\`\`vue
<template>
  <div class="space-y-4">
    <!-- 灰色系 -->
    <div class="flex flex-wrap gap-2">
      <Button type="slate">Slate</Button>
      <Button type="gray">Gray</Button>
      <Button type="zinc">Zinc</Button>
      <Button type="neutral">Neutral</Button>
      <Button type="stone">Stone</Button>
    </div>
    
    <!-- 暖色系 -->
    <div class="flex flex-wrap gap-2">
      <Button type="red">Red</Button>
      <Button type="orange">Orange</Button>
      <Button type="amber">Amber</Button>
      <Button type="yellow">Yellow</Button>
    </div>
    
    <!-- 绿色系 -->
    <div class="flex flex-wrap gap-2">
      <Button type="lime">Lime</Button>
      <Button type="green">Green</Button>
      <Button type="emerald">Emerald</Button>
      <Button type="teal">Teal</Button>
    </div>
    
    <!-- 蓝色系 -->
    <div class="flex flex-wrap gap-2">
      <Button type="cyan">Cyan</Button>
      <Button type="sky">Sky</Button>
      <Button type="blue">Blue</Button>
      <Button type="indigo">Indigo</Button>
    </div>
    
    <!-- 紫粉色系 -->
    <div class="flex flex-wrap gap-2">
      <Button type="violet">Violet</Button>
      <Button type="purple">Purple</Button>
      <Button type="fuchsia">Fuchsia</Button>
      <Button type="pink">Pink</Button>
      <Button type="rose">Rose</Button>
    </div>
  </div>
</template>
\`\`\``;
