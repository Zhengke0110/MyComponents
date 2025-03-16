# Card 卡片组件

Card卡片组件用于展示内容，提供结构化的信息容器，支持多种变体样式，适合展示文字、图片等多种内容。

## 功能特性

- 🎨 多种预设样式变体
- 📱 响应式设计，适配移动端和桌面端
- 🌗 支持暗色模式
- 🔄 加载状态展示
- 🎭 悬浮交互效果
- 🧩 可定制的插槽系统

## 安装

```bash
# 如果您使用的是组件库内部的组件
# 无需安装，直接导入即可使用
```

## 基础用法

### 导入组件

```js
// 全局导入
import { Card } from '@/lib/Card';

// 或按需导入
import Card from '@/lib/Card/Card';
```

### 基础卡片

最简单的卡片用法，包含一个内容区域。

```vue
<Card>
  <div>这是一个基础卡片的内容</div>
</Card>
```

### 带标题的卡片

通过设置`title`属性或使用`header`插槽添加标题。

```vue
<Card title="卡片标题" variant="with-header">
  <div>这是带标题卡片的内容</div>
</Card>

<!-- 或使用header插槽 -->
<Card variant="with-header">
  <template #header>
    <div class="flex justify-between items-center">
      <h3>自定义标题</h3>
      <button>操作按钮</button>
    </div>
  </template>
  <div>卡片内容</div>
</Card>
```

### 带底部的卡片

通过设置`footerText`属性或使用`footer`插槽添加底部内容。

```vue
<Card variant="with-footer" footerText="卡片底部信息">
  <div>这是带底部卡片的内容</div>
</Card>

<!-- 或使用footer插槽 -->
<Card variant="with-footer">
  <div>卡片内容</div>
  <template #footer>
    <div class="flex justify-end space-x-2">
      <button>取消</button>
      <button>确定</button>
    </div>
  </template>
</Card>
```

### 完整卡片

包含标题、内容和底部的完整卡片。

```vue
<Card 
  variant="complete" 
  title="完整卡片" 
  footerText="底部信息" 
  hoverable
>
  <div>这是完整卡片的内容区域</div>
</Card>
```

## 卡片变体

Card组件提供了多种预设的变体样式，可通过`variant`属性指定。

| 变体名称 | 描述 |
|---------|------|
| basic | 基础卡片，无特殊样式 |
| with-header | 带有标题区域的卡片 |
| with-footer | 带有底部区域的卡片 |
| complete | 带有标题和底部的完整卡片 |
| alternate-header | 带有不同背景色的标题区域 |
| alternate-footer | 带有不同背景色的底部区域 |
| light-bg | 浅色背景的卡片 |
| gray-bg | 灰色背景的卡片 |
| mobile-full | 在移动设备上全宽显示的卡片 |
| mobile-light-bg | 移动设备上全宽显示并使用浅色背景的卡片 |

## 交互式卡片

### 悬浮效果

添加`hoverable`属性使卡片在鼠标悬停时显示提升效果。

```vue
<Card hoverable>
  <div>鼠标悬停时会有上浮和阴影效果</div>
</Card>
```

### 可点击卡片

添加`clickable`属性和`@click`事件处理程序使卡片可点击。

```vue
<Card hoverable clickable @click="handleCardClick">
  <div>这是一个可点击的卡片</div>
</Card>
```

### 加载状态

使用`loading`属性显示卡片的加载状态。

```vue
<Card loading>
  <div>加载中的内容...</div>
</Card>
```

## 自定义样式

### 自定义背景色

使用`bgColor`属性设置自定义背景色。

```vue
<Card bgColor="bg-blue-50 dark:bg-blue-900/20">
  <div>自定义背景色的卡片</div>
</Card>
```

### 自定义阴影大小

使用`shadowSize`属性调整卡片阴影大小。

```vue
<Card shadowSize="lg">
  <div>大号阴影的卡片</div>
</Card>
```

## API 参考

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|-------|------|-------|------|
| variant | CardVariant | 'basic' | 卡片变体类型 |
| title | string | '' | 卡片标题文本 |
| footerText | string | '' | 卡片底部文本 |
| bgColor | string | '' | 自定义背景色 CSS 类名 |
| hoverable | boolean | false | 是否启用悬浮效果 |
| clickable | boolean | false | 是否可点击 |
| loading | boolean | false | 是否显示加载状态 |
| borderColor | string | '' | 自定义边框颜色 |
| shadowSize | 'none' \| 'sm' \| 'md' \| 'lg' | 'sm' | 卡片阴影大小 |
| animated | boolean | true | 是否启用过渡动画 |

### Slots

| 插槽名 | 说明 |
|-------|------|
| default | 卡片的默认内容区域 |
| header | 卡片的头部区域，不提供时使用title属性 |
| footer | 卡片的底部区域，不提供时使用footerText属性 |

### Events

| 事件名 | 说明 | 参数 |
|-------|------|------|
| click | 卡片被点击时触发（仅当clickable=true时） | MouseEvent |

## 设计原则与最佳实践

### 设计原则

- 使用卡片组织相关内容，增强内容的可读性和层次结构
- 根据内容的重要性选择适当的卡片样式和变体
- 不要在卡片中放置过多内容，保持简洁
- 使用暗黑模式时，确保内容在不同主题下都有良好的可读性
- 适当使用动画和交互效果，增强用户体验

### 推荐做法

- 为每个卡片提供明确的内容层次结构
- 根据内容类型选择适当的卡片变体
- 在卡片内部保持足够的内边距
- 使用适当的阴影来表达卡片的层级关系
- 针对交互式卡片添加适当的状态指示
- 保持卡片内容的对齐和排版一致性

### 避免做法

- 在一个页面中混用多种风格的卡片
- 在卡片中使用与周围环境冲突的颜色
- 在卡片内放置过多的操作按钮
- 忽略卡片在移动设备上的响应式布局
- 嵌套过多层级的卡片
- 使用过大的阴影造成视觉干扰

## 常见用例

- **内容展示** - 使用基础卡片展示结构化内容
- **信息分组** - 使用卡片将相关信息聚合在一起
- **交互操作** - 使用可点击卡片引导用户操作
- **仪表盘** - 使用卡片布局设计数据仪表盘
- **多媒体展示** - 结合图片和文字创建丰富的媒体卡片

## TypeScript 类型

```typescript
export type CardVariant = 
  | 'basic'               // 基础卡片
  | 'mobile-full'         // 移动端全宽卡片
  | 'with-header'         // 带标题卡片
  | 'with-footer'         // 带底部卡片
  | 'complete'            // 完整卡片（标题+内容+底部）
  | 'alternate-footer'    // 带不同底色的底部
  | 'alternate-header'    // 带不同底色的标题
  | 'light-bg'            // 浅色背景
  | 'gray-bg'             // 灰色背景
  | 'mobile-light-bg';    // 移动端全宽浅灰背景
```

## 更多示例

### 图片卡片

```vue
<Card animated>
  <template #header>
    <div class="relative h-40 -mx-4 -mt-5 mb-2 overflow-hidden">
      <img src="https://example.com/image.jpg"
        class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        alt="图片描述" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <h3 class="absolute bottom-4 left-4 text-white text-xl font-bold">卡片标题</h3>
    </div>
  </template>
  <div>卡片内容区域</div>
</Card>
```

### 带标签的卡片

```vue
<Card variant="complete" title="带标签的卡片">
  <div>
    <p>卡片内容</p>
    <div class="mt-2 flex space-x-2">
      <span class="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
        标签1
      </span>
      <span class="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300">
        标签2
      </span>
    </div>
  </div>
</Card>
```

## 无障碍性

- 确保可点击的卡片具有适当的焦点状态
- 为图片添加alt文本
- 保持足够的色彩对比度以确保可读性

## 兼容性

- 支持所有现代浏览器
- 提供响应式设计，适配各种屏幕尺寸
- 支持键盘导航