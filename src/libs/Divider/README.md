# Divider 分割线组件

区隔内容的分割线，用于分隔不同章节的文本段落以及行内文字/链接等内容。

## 功能特性

- 支持水平和垂直两种分割线方向
- 支持添加文字的分割线，可设置文字位置（左、中、右）
- 支持实线和虚线样式
- 支持自定义边框宽度、颜色和样式
- 支持三种动画模式：无动画、悬停动画、持续动画
- 支持深色/浅色主题切换，兼容Tailwind CSS的暗色模式
- 支持文字定位与边距调整
- 符合WCAG可访问性标准，内置ARIA属性支持

## 代码示例

### 基础用法

```vue
<template>
  <!-- 基础水平分割线 -->
  <Divider />
  
  <!-- 带文字的分割线 -->
  <Divider>分割文本</Divider>
</template>
```

### 文字位置调整

```vue
<template>
  <Divider>默认居中</Divider>
  <Divider align="left">左对齐</Divider>
  <Divider align="right">右对齐</Divider>
  
  <!-- 使用orientation和orientationMargin精确控制 -->
  <Divider orientation="left" :orientationMargin="20">左侧定制边距</Divider>
  <Divider orientation="right" orientationMargin="40px">右侧定制边距</Divider>
</template>
```

### 自定义样式

```vue
<template>
  <!-- 虚线样式 -->
  <Divider dashed />
  
  <!-- 自定义颜色和宽度 -->
  <Divider :borderWidth="2" borderColor="#1890ff">自定义样式</Divider>
  
  <!-- 组合样式 -->
  <Divider dashed plain>虚线和普通文本</Divider>
</template>
```

### 垂直分割线

```vue
<template>
  <div class="h-10 flex items-center">
    文本
    <Divider type="vertical" />
    <a href="#">链接一</a>
    <Divider type="vertical" />
    <a href="#">链接二</a>
  </div>
</template>
```

### 动画效果

```vue
<template>
  <Divider animated>鼠标悬停查看动画</Divider>
  <Divider animated="hover">交互动画</Divider>
  <Divider animated="always">持续动画</Divider>
</template>
```

### 主题切换

```vue
<template>
  <Divider theme="light">浅色主题</Divider>
  <Divider theme="dark">深色主题</Divider>
  <Divider theme="auto">自动主题（跟随系统）</Divider>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 分割线类型 | 'horizontal' \| 'vertical' | 'horizontal' |
| align | 文本对齐方式 | 'left' \| 'right' \| 'center' | 'center' |
| dashed | 是否虚线 | boolean | false |
| plain | 文字是否为普通样式 | boolean | false |
| borderWidth | 分割线宽度 | number \| string | 1 |
| className | 自定义容器类名 | string | '' |
| textClassName | 自定义文本类名 | string | '' |
| borderStyle | 边框样式 | string | 'solid' |
| borderColor | 边框颜色 | string | '' |
| animated | 动画效果类型 | boolean \| 'hover' \| 'always' | false |
| animationDuration | 动画持续时间（毫秒） | number | 300 |
| theme | 主题样式 | 'light' \| 'dark' \| 'auto' | 'auto' |
| orientation | 文本定位方向 | 'center' \| 'left' \| 'right' | 'center' |
| orientationMargin | 文本定位边距 | string \| number | 0 |
| styles | 自定义行内样式 | CSSProperties | {} |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 分割线中间的内容 |

## 设计变量

### 分割线类型
- horizontal（水平线）：用于分隔段落或内容区块
- vertical（垂直线）：用于分隔行内元素，如操作按钮组

### 文本位置
- center：文字居中（默认）
- left：文字居左
- right：文字居右
- 支持通过orientationMargin进一步微调文本位置

### 边框样式
- solid：实线（默认）
- dashed：虚线
- 可通过borderStyle属性设置任何有效的CSS border-style

### 文本样式
- 默认：中等加粗
- plain：普通文本，无加粗

### 动画效果
- animated=true：鼠标悬停时有轻微的透明度和放大变化
- animated="hover"：类似true，悬停触发动画
- animated="always"：持续的脉动动画，不需用户交互

### 深色模式适配
当theme设置为"auto"时，组件会根据页面是否有.dark类自动切换样式：
- 浅色模式：使用rgba(0, 0, 0, 0.1)作为分割线颜色
- 深色模式：使用rgba(255, 255, 255, 0.1)作为分割线颜色

## 可访问性支持

Divider组件内置了以下ARIA属性支持：
- role="separator"：标识元素为分隔符
- aria-orientation="horizontal|vertical"：声明分隔符的方向

这使得屏幕阅读器能够正确识别和解释分割线的作用，提高了组件的无障碍使用体验。

## 最佳实践

1. **内容结构化**：使用水平分割线分隔不同主题的内容区块，帮助用户识别内容的层次结构

2. **视觉平衡**：
   - 保持页面中分割线样式的一致性
   - 优先使用细线（1px）分割线，保持界面的轻量感
   - 对相关内容组使用相同样式的分割线

3. **深色模式考量**：
   - 在深色模式下适当降低分割线的对比度
   - 使用theme="auto"实现自动主题切换

4. **辅助导航**：
   - 为长文本内容设置带文字的分割线，提高内容的可读性
   - 在信息密集的界面使用dashed虚线样式，减轻视觉负担

5. **操作区分隔**：
   - 使用垂直分割线（type="vertical"）分隔行内操作元素
   - 在表格的操作列等UI元素中使用垂直分割线区分不同操作

分割线虽然是一个简单的组件，但合理使用可以有效提升内容的可读性和页面的整体层次感。
