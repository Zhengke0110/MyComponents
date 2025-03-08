# Badge 徽章组件

轻量级的状态标记、分类和标签展示组件。

## 功能特性

- 丰富的颜色方案：支持所有 Tailwind CSS 预设颜色
- 语义化主题支持：提供 primary、success 等语义化主题
- 三种样式变体：solid（实心）、soft（柔和）、outline（描边）
- 灵活的尺寸选项：支持sm、md、lg三种规格
- 多样的圆角设置：从方正到圆形的四种圆角选项
- 可交互能力：支持点击事件
- 可定制内容：支持前缀和后缀插槽
- 暗色主题：支持亮色、暗色和自动切换模式

## 代码示例

### 基础用法
```vue
<template>
  <Badge text="默认" />
  <Badge text="成功" color="green" />
  <Badge text="警告" color="yellow" />
  <Badge text="危险" color="red" />
</template>
```

### 使用主题
```vue
<template>
  <Badge text="主要" theme="primary" />
  <Badge text="成功" theme="success" />
  <Badge text="警告" theme="warning" />
  <Badge text="危险" theme="danger" />
  <Badge text="信息" theme="info" />
  <Badge text="次要" theme="secondary" />
</template>
```

### 样式变体
```vue
<template>
  <Badge text="默认" variant="soft" />
  <Badge text="实心" variant="solid" />
  <Badge text="描边" variant="outline" />
</template>
```

### 暗色主题
```vue
<template>
  <!-- 强制使用亮色主题 -->
  <Badge text="亮色主题" mode="light" />
  
  <!-- 强制使用暗色主题 -->
  <Badge text="暗色主题" mode="dark" />
  
  <!-- 自动适应系统主题（默认） -->
  <Badge text="自动主题" mode="auto" />
  
  <!-- 不同变体的暗色主题 -->
  <div class="dark">
    <Badge text="暗色实心" variant="solid" />
    <Badge text="暗色柔和" variant="soft" />
    <Badge text="暗色描边" variant="outline" />
  </div>
</template>
```

### 尺寸与圆角
```vue
<template>
  <Badge text="小号" size="sm" />
  <Badge text="中号" size="md" />
  <Badge text="大号" size="lg" />
  
  <Badge text="圆形" rounded="full" />
</template>
```

### 交互与图标
```vue
<template>
  <Badge 
    text="可点击" 
    clickable 
    @click="handleClick"
  >
    <template #prefix>
      <div class="icon-[solar--star-bold] mr-1 h-4 w-4" />
    </template>
  </Badge>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| text | 徽章显示的文本内容 | string | - |
| color | 颜色 | ColorType | 'blue' |
| theme | 语义化主题 | 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info' | - |
| mode | 明暗主题模式 | 'light' \| 'dark' \| 'auto' | 'auto' |
| variant | 样式变体 | 'solid' \| 'soft' \| 'outline' | 'soft' |
| size | 尺寸 | 'sm' \| 'md' \| 'lg' | 'md' |
| rounded | 圆角大小 | 'sm' \| 'md' \| 'lg' \| 'full' | 'md' |
| title | 鼠标悬停提示文本 | string | - |
| clickable | 是否可点击 | boolean | false |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击徽章时触发 | (text: string) |

### Slots

| 插槽名 | 说明 | 作用域参数 |
|--------|------|------------|
| prefix | 徽章内容前置元素 | - |
| suffix | 徽章内容后置元素 | - |

## 设计变量

### 颜色方案
- solid变体：使用500色阶作为背景，白色文字（暗色模式下使用600色阶）
- soft变体：使用50色阶作为背景，800色阶作为文字，添加轻微的环形边框增强层次感（暗色模式下使用900/20半透明背景和300色阶文字）
- outline变体：使用500色阶作为边框，700色阶作为文字（暗色模式下调整透明度和颜色）

### 主题映射
- primary: indigo
- secondary: gray
- success: green
- warning: yellow
- danger: red
- info: blue

### 支持的颜色
这个组件支持所有 Tailwind CSS 预设颜色：
- 灰色系：slate、gray、zinc、neutral、stone
- 暖色系：red、orange、amber、yellow
- 绿色系：lime、green、emerald、teal
- 蓝色系：cyan、sky、blue、indigo
- 紫粉色系：violet、purple、fuchsia、pink、rose

### 尺寸规格
- sm：文字xs(12px)，内边距1.5
- md：文字sm(14px)，内边距2
- lg：文字base(16px)，内边距2.5

### 圆角大小
- sm：rounded (0.25rem)
- md：rounded-md (0.375rem)
- lg：rounded-lg (0.5rem)
- full：rounded-full (9999px)

### 暗色模式
- 自动(auto)：使用 Tailwind 的 dark: 前缀，根据系统或页面主题自动切换
- 亮色(light)：强制使用亮色主题样式
- 暗色(dark)：强制使用暗色主题样式
