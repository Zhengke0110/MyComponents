// 基础使用代码示例
export const basicDividerCode = `\`\`\`vue
<template>
  <Divider />
</template>
\`\`\``;

// 带文字的分割线代码示例
export const withTextDividerCode = `\`\`\`vue
<template>
  <Divider>默认居中</Divider>
  <Divider align="left">左对齐</Divider>
  <Divider align="right">右对齐</Divider>
</template>
\`\`\``;

// 自定义样式代码示例
export const customStyleDividerCode = `\`\`\`vue
<template>
  <Divider dashed />
  <Divider :borderWidth="2" borderColor="#1890ff">自定义颜色和宽度</Divider>
  <Divider dashed plain>虚线和普通文本</Divider>
</template>
\`\`\``;

// 垂直分割线代码示例
export const verticalDividerCode = `\`\`\`vue
<template>
  <div class="h-10 flex items-center">
    文本
    <Divider type="vertical" />
    <a href="#" class="text-blue-500">链接</a>
    <Divider type="vertical" />
    <a href="#" class="text-blue-500">链接</a>
  </div>
</template>
\`\`\``;

// 带动画效果代码示例
export const animatedDividerCode = `\`\`\`vue
<template>
  <Divider animated>鼠标悬停动画</Divider>
  <Divider animated="always">持续动画</Divider>
  <Divider animated="hover">交互动画</Divider>
</template>
\`\`\``;

// 方向与边距代码示例
export const orientationDividerCode = `\`\`\`vue
<template>
  <Divider orientation="left" :orientationMargin="20">左侧定制边距</Divider>
  <Divider orientation="right" orientationMargin="40px">右侧定制边距</Divider>
</template>
\`\`\``;

// 主题设置代码示例
export const themeDividerCode = `\`\`\`vue
<template>
  <Divider theme="light">浅色主题</Divider>
  <Divider theme="dark">深色主题</Divider>
  <Divider theme="auto">自动主题（跟随系统）</Divider>
</template>
\`\`\``;
