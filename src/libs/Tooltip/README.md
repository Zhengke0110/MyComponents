# Tooltip 文字提示组件

Tooltip 组件用于在用户悬停在元素上时显示提示信息，提高用户体验和界面可用性。组件支持暗黑模式、智能位置调整和自定义内容。

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
    <button>上方显示</button>
  </template>
</Tooltip>

<Tooltip content="下方提示" position="bottom">
  <template #trigger>
    <button>下方显示</button>
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
    <div class="flex flex-col gap-2">
      <h3 class="font-bold border-b pb-2">产品详情</h3>
      <p>这是一个自定义的详细信息面板</p>
      <div class="flex items-center gap-2">
        <span>⭐️</span>
        <span>5.0 评分</span>
      </div>
    </div>
  </template>
</Tooltip>
```

### 自定义触发器

默认触发器为问号图标，可以通过 `trigger` 插槽自定义为任何元素。

```vue
<!-- 图标触发器 -->
<Tooltip content="图标触发的提示">
  <template #trigger>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-blue-500 hover:text-blue-600 cursor-pointer"
    >
      <!-- 图标路径 -->
    </svg>
  </template>
</Tooltip>

<!-- 文本触发器 -->
<Tooltip content="文本链接提示">
  <template #trigger>
    <span class="text-blue-500 hover:text-blue-600 cursor-pointer underline">
      帮助文档
    </span>
  </template>
</Tooltip>

<!-- 默认触发器 -->
<Tooltip content="默认触发器">
  <!-- 使用默认的问号图标 -->
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
    <button>较大偏移 (20px)</button>
  </template>
</Tooltip>

<Tooltip content="更大偏移 (30px)" position="top" :offset="30">
  <template #trigger>
    <button>更大偏移 (30px)</button>
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

### 深色模式支持

Tooltip 组件自动适配系统或网站的深色模式设置，无需额外配置。如果页面使用 Tailwind CSS 的 `dark` 类切换深色模式，Tooltip 会自动跟随变化。

```vue
<!-- 深色模式下会自动调整样式 -->
<Tooltip content="提示会自动适应当前主题模式">
  <template #trigger>
    <span class="cursor-pointer">查看效果</span>
  </template>
</Tooltip>
```

## 实现细节

- 使用 Vue 3 Teleport 确保提示框渲染在 `body` 元素内，避免被父元素的 `overflow: hidden` 截断
- 智能边界检测确保提示始终在可视区域内显示
- 平滑的过渡动画增强用户体验
- 完全支持 Tailwind CSS 的深色模式
- 自动箭头指向，视觉上连接提示框与触发元素
