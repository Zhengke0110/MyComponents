# Popover 弹出框

一个轻量级的弹出框组件，支持多种触发方式和位置。

## 特性
- 支持悬浮和点击两种触发方式
- 12个不同的弹出位置
- 自定义样式和内容
- 支持显示箭头
- 可配置显示/隐藏延迟
- 支持暗色模式
- 内置多种颜色主题和变体风格

## 基础用法

```vue
<template>
  <!-- 基础悬浮触发 -->
  <Popover>
    <template #reference>
      <Button>默认悬浮</Button>
    </template>
    这是一个基础的 Popover
  </Popover>

  <!-- 点击触发 -->
  <Popover trigger="click">
    <template #reference>
      <Button>点击触发</Button>
    </template>
    点击触发的 Popover
  </Popover>
</template>
```

## 不同位置

```vue
<template>
  <Popover placement="top" arrow>
    <template #reference>
      <Button>上方显示</Button>
    </template>
    顶部 Popover
  </Popover>

  <Popover placement="right" arrow>
    <template #reference>
      <Button>右侧显示</Button>
    </template>
    右侧 Popover
  </Popover>
</template>
```

## 自定义内容与样式

```vue
<template>
  <!-- 复杂内容 -->
  <Popover content-class="w-64" persistent trigger="click">
    <template #reference>
      <Button>复杂内容</Button>
    </template>
    <div class="space-y-2">
      <h3 class="font-bold">自定义标题</h3>
      <p>这里可以放置更复杂的内容，包括多行文本、图片等。</p>
      <div class="flex justify-end">
        <Button size="sm">操作按钮</Button>
      </div>
    </div>
  </Popover>

  <!-- 自定义样式 -->
  <Popover customClass="bg-blue-50 dark:bg-blue-900/50" arrow>
    <template #reference>
      <Button>自定义样式</Button>
    </template>
    自定义背景色的 Popover
  </Popover>
  
  <!-- 使用背景色属性自定义样式 -->
  <Popover 
    backgroundColor="rgba(219, 234, 254, 0.9)" 
    darkBackgroundColor="rgba(30, 64, 175, 0.5)"
    arrow
  >
    <template #reference>
      <Button>使用属性自定义样式</Button>
    </template>
    使用背景色属性设置背景色
  </Popover>
  
  <!-- 使用主题和变体 -->
  <Popover theme="blue" variant="glass" arrow>
    <template #reference>
      <Button>主题样式</Button>
    </template>
    使用预设主题的 Popover
  </Popover>
</template>
```

## 配置项

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| placement | string | 'bottom' | 弹出位置，可选值：`top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end` |
| trigger | string | 'hover' | 触发方式，可选值：`hover/click` |
| offset | number | 8 | 弹出框偏移距离 |
| arrow | boolean | false | 是否显示箭头 |
| customClass | string | '' | 自定义弹出框 class |
| contentClass | string | '' | 自定义内容区域 class |
| closeOnContentClick | boolean | false | 点击内容区域是否关闭 |
| showDelay | number | 0 | 显示延迟时间(ms) |
| hideDelay | number | 300 | 隐藏延迟时间(ms) |
| persistent | boolean | false | 是否保持显示状态 |
| backgroundColor | string | 'rgba(255, 255, 255, 0.9)' | 自定义背景色（亮色模式） |
| darkBackgroundColor | string | 'rgba(39, 39, 42, 0.9)' | 自定义背景色（暗色模式） |
| theme | string | undefined | 使用预设主题，可选值: 'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose' |
| variant | string | 'solid' | 主题变体，可选值: 'solid', 'light', 'glass' |

### 事件

| 事件名 | 说明 | 参数 |
|--------|------|------|
| show | 显示时触发 | - |
| hide | 隐藏时触发 | - |

### 插槽

| 插槽名 | 说明 |
|--------|------|
| reference | 触发元素 |
| default | 弹出框内容 |
