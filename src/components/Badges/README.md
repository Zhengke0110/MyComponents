# Badge 徽章组件

轻量级的状态标记、分类和标签展示组件。

## 功能特性

- 丰富的颜色方案：支持8种预设颜色
- 三种样式变体：solid（实心）、soft（柔和）、outline（描边）
- 灵活的尺寸选项：支持sm、md、lg三种规格
- 多样的圆角设置：从方正到圆形的四种圆角选项
- 可交互能力：支持点击事件
- 可定制内容：支持前缀和后缀插槽

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

### 样式变体
```vue
<template>
  <Badge text="默认" variant="soft" />
  <Badge text="实心" variant="solid" />
  <Badge text="描边" variant="outline" />
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
| color | 颜色主题 | 'red' \| 'orange' \| 'yellow' \| 'green' \| 'blue' \| 'indigo' \| 'purple' \| 'gray' | 'blue' |
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
- solid变体：使用500色阶作为背景，白色文字
- soft变体：使用100色阶作为背景，700色阶作为文字
- outline变体：使用500色阶作为边框，700色阶作为文字

### 尺寸规格
- sm：文字xs(12px)，内边距1.5
- md：文字sm(14px)，内边距2
- lg：文字base(16px)，内边距2.5

### 圆角大小
- sm：rounded (0.25rem)
- md：rounded-md (0.375rem)
- lg：rounded-lg (0.5rem)
- full：rounded-full (9999px)
