# Button 按钮组件

按钮组件用于触发操作或事件，例如表单提交、对话框确认等。

## 功能特性

- 丰富的颜色方案：支持所有 Tailwind CSS 预设颜色
- 语义化主题支持：提供 primary、success 等语义化主题
- 四种样式变体：solid（实心）、soft（柔和）、outline（描边）、ghost（幽灵）
- 灵活的尺寸选项：支持xs、sm、md、lg、xl五种规格
- 支持图标按钮：可以单独使用图标或文字和图标组合
- 状态控制：支持加载中、禁用等状态
- 适配暗色主题：所有按钮在暗色模式下都有正确的样式适配

## 代码示例

### 基础用法
```vue
<template>
  <Button>默认按钮</Button>
  <Button color="red">红色按钮</Button>
  <Button color="green">绿色按钮</Button>
  <Button color="yellow">黄色按钮</Button>
</template>
```

### 使用主题
```vue
<template>
  <Button theme="primary">主要按钮</Button>
  <Button theme="secondary">次要按钮</Button>
  <Button theme="success">成功按钮</Button>
  <Button theme="warning">警告按钮</Button>
  <Button theme="danger">危险按钮</Button>
  <Button theme="info">信息按钮</Button>
</template>
```

### 按钮变体
```vue
<template>
  <!-- 实心按钮 -->
  <Button variant="solid" theme="primary">主要按钮</Button>
  
  <!-- 柔和按钮 -->
  <Button variant="soft" theme="success">成功按钮</Button>
  
  <!-- 描边按钮 -->
  <Button variant="outline" theme="warning">警告按钮</Button>
  
  <!-- 幽灵按钮 -->
  <Button variant="ghost" theme="danger">危险按钮</Button>
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

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 按钮变体样式 | 'solid' \| 'outline' \| 'soft' \| 'ghost' | 'solid' |
| size | 按钮尺寸 | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' |
| color | 颜色 | ColorType | 'blue' |
| theme | 语义化主题 | 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info' | - |
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

### 主题映射
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

### 暗色模式适配
所有按钮变体都有对应的暗色模式样式，确保在暗色环境下具有良好的可读性和视觉表现。
