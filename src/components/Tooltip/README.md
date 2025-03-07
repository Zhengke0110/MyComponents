# Tooltip 文字提示组件

Tooltip 组件用于在用户悬停在元素上时显示提示信息，提高用户体验和界面可用性。

## 基本用法

```vue
<Tooltip content="这是一个提示文本">
  <template #trigger>
    <button>悬停查看提示</button>
  </template>
</Tooltip>
```

## API

### 属性

| 属性名   | 类型                    | 默认值  | 描述               |
| -------- | ----------------------- | ------- | ------------------ |
| content  | string                  | ''      | 提示文本内容       |
| position | 'top' \| 'bottom'       | 'top'   | 提示框显示位置     |
| offset   | number                  | 10      | 提示框与触发元素的偏移距离 |

### 插槽

| 插槽名   | 描述                                       |
| -------- | ------------------------------------------ |
| trigger  | 触发提示的元素，默认为问号图标按钮         |
| content  | 提示框内容，默认显示 content 属性设置的文本 |

## 示例

### 基础提示

最简单的用法，鼠标悬停时显示提示文本。

```vue
<Tooltip content="这是一个简单的提示">
  <template #trigger>
    <button>悬停查看提示</button>
  </template>
</Tooltip>
```

### 不同方向的提示

通过 `position` 属性控制提示显示的方向（上方或下方）。

```vue
<Tooltip content="上方提示" position="top">
  <template #trigger>
    <button>上</button>
  </template>
</Tooltip>

<Tooltip content="下方提示" position="bottom">
  <template #trigger>
    <button>下</button>
  </template>
</Tooltip>
```

### 自定义内容

通过 `content` 插槽可以自定义提示内容的样式和结构。

```vue
<Tooltip position="bottom">
  <template #trigger>
    <button>查看详细信息</button>
  </template>
  <template #content>
    <div>
      <h3 class="font-bold">产品详情</h3>
      <p>这是一个自定义的详细信息面板</p>
    </div>
  </template>
</Tooltip>
```

### 自定义触发器

默认触发器为问号图标，可以通过 `trigger` 插槽自定义。

```vue
<Tooltip content="图标触发的提示">
  <template #trigger>
    <svg><!-- 自定义图标 --></svg>
  </template>
</Tooltip>
```

### 不同偏移距离

通过 `offset` 属性调整提示框与触发元素的距离。

```vue
<Tooltip content="默认偏移 (10px)" position="top">
  <template #trigger>
    <button>默认偏移</button>
  </template>
</Tooltip>

<Tooltip content="较大偏移 (20px)" position="top" :offset="20">
  <template #trigger>
    <button>较大偏移</button>
  </template>
</Tooltip>
```

### 智能位置调整

当屏幕空间不足时，Tooltip 会自动切换方向显示，确保内容始终可见。

```vue
<Tooltip content="我会根据可用空间自动调整位置" position="top">
  <template #trigger>
    <button>智能位置调整</button>
  </template>
</Tooltip>
```
