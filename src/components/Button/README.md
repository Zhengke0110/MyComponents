# Button 按钮组件

按钮组件用于触发操作或事件，例如表单提交、对话框确认等。

## 功能特性

- 丰富的颜色方案：支持所有 Tailwind CSS 预设颜色
- 语义化类型支持：提供 primary、success 等语义化类型
- 四种样式变体：solid（实心）、soft（柔和）、outline（描边）、ghost（幽灵）
- 灵活的尺寸选项：支持xs、sm、md、lg、xl五种规格
- 支持图标按钮：可以单独使用图标或文字和图标组合
- 状态控制：支持加载中、禁用等状态
- 暗色模式自适应：使用tailwindcss的dark类完美适配明暗主题切换

## 代码示例

### 基础用法
```vue
<template>
  <Button>默认按钮</Button>
  <Button type="red">红色按钮</Button>
  <Button type="green">绿色按钮</Button>
  <Button type="yellow">黄色按钮</Button>
</template>
```

### 使用语义化类型
```vue
<template>
  <Button type="primary">主要按钮</Button>
  <Button type="secondary">次要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
  <Button type="info">信息按钮</Button>
</template>
```

### 按钮变体
```vue
<template>
  <!-- 实心按钮 -->
  <Button variant="solid" type="primary">主要按钮</Button>
  
  <!-- 柔和按钮 -->
  <Button variant="soft" type="success">成功按钮</Button>
  
  <!-- 描边按钮 -->
  <Button variant="outline" type="warning">警告按钮</Button>
  
  <!-- 幽灵按钮 -->
  <Button variant="ghost" type="danger">危险按钮</Button>
</template>
```

### 尺寸与图标
```vue
<template>
  <Button size="xs">超小按钮</Button>
  <Button size="sm">小型按钮</Button>
  <Button size="md">默认尺寸</Button>
  <Button size="lg">大型按钮</Button>
  <Button size="xl">超大按钮</Button>
  
  <!-- 带图标的按钮 -->
  <Button icon="icon-[carbon--add]">添加</Button>
  
  <!-- 仅图标按钮 -->
  <Button icon="icon-[carbon--checkmark]" />
</template>
```

### 状态与块级按钮
```vue
<template>
  <Button disabled>禁用按钮</Button>
  <Button loading>加载中</Button>
  
  <!-- 块级按钮 -->
  <Button block>块级按钮</Button>
</template>
```

### 暗色模式支持
按钮组件自动适应系统或网站的暗色模式设置，无需额外配置。
```vue
<template>
  <div class="dark">
    <!-- 这些按钮在暗色模式下会自动应用对应的样式 -->
    <Button type="primary">暗色模式按钮</Button>
    <Button variant="outline" type="success">暗色描边按钮</Button>
  </div>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 按钮变体样式 | 'solid' \| 'outline' \| 'soft' \| 'ghost' | 'solid' |
| size | 按钮尺寸 | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' |
| type | 颜色或语义化类型 | ColorType \| ButtonTypeValue | 'blue' |
| icon | 图标类名 | string | - |
| iconColor | 图标颜色 | string | - |
| loading | 加载状态 | boolean | false |
| disabled | 禁用状态 | boolean | false |
| isActiveAnim | 是否启用点击动画 | boolean | true |
| block | 是否为块级按钮 | boolean | false |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击按钮时触发 | (event: MouseEvent) |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 按钮内容 |

## 设计变量

### 变体样式
- solid: 纯色背景，白色文字
- outline: 有边框无背景，文字颜色与边框相同
- soft: 浅色背景，深色文字
- ghost: 无背景无边框，鼠标悬停时显示浅色背景

### 类型映射
- primary: indigo
- secondary: gray
- success: green
- warning: yellow
- danger: red
- info: blue

### 尺寸规格
- xs: 文本xs(12px), 内边距x-2.5 y-1
- sm: 文本sm(14px), 内边距x-3.5 y-1.5
- md: 文本base(16px), 内边距x-4.5 y-2
- lg: 文本lg(18px), 内边距x-5.5 y-2.5
- xl: 文本xl(20px), 内边距x-6.5 y-3

### 动画效果
- 点击动画: 点击时缩小至98%，悬停时放大至103%
- 过渡效果: 所有状态变化都应用了平滑过渡

### 暗色模式适配
所有按钮变体都有对应的暗色模式样式，通过Tailwind CSS的dark类选择器实现。主要适配内容包括：
- solid变体: 略微加深的背景色
- outline变体: 适当降低的边框亮度和专用的文字颜色
- soft变体: 更高对比度的背景和文字颜色
- ghost变体: 半透明悬停效果和更亮的文字颜色
