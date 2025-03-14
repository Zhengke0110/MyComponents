# TagsList 标签列表组件

TagsList 是一个用于管理标签列表的组件，支持添加、删除标签，并提供了丰富的自定义选项。

## 功能特点

- 支持添加和删除标签
- 自定义标签颜色主题
- 多种尺寸选择（小、中、大）
- 标签数量限制
- 自定义验证规则
- 支持或禁止重复标签
- 随机颜色标签选项
- 错误提示和动画效果
- **深色模式自适应** (新增功能)

## 基本用法

```tsx
import { ref } from 'vue'
import { TagsList } from '路径/到/组件库'

// 在组件中使用
const tags = ref(['Vue', 'React', 'Angular'])

// 模板中
<TagsList v-model="tags" />
```

## API

### Props

| 属性名 | 类型 | 默认值 | 说明 |
| ------ | ---- | ------ | ---- |
| modelValue | `string[]` | 必填 | 标签数组，支持v-model绑定 |
| color | `ThemeColor` | `'blue'` | 标签颜色主题，支持多种颜色 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 标签尺寸 |
| placeholder | `string` | `'请输入标签'` | 输入框占位文本 |
| maxTags | `number` | `Infinity` | 最大标签数量 |
| validation | `(tag: string) => boolean \| string` | - | 自定义验证函数，返回true表示验证通过，返回字符串表示错误信息 |
| allowDuplicates | `boolean` | `false` | 是否允许添加重复标签 |
| randomColors | `boolean` | `false` | 是否为每个标签随机分配颜色 |

### 事件

| 事件名 | 参数 | 说明 |
| ------ | ---- | ---- |
| update:modelValue | `(tags: string[])` | 当标签列表变化时触发 |
| error | `(message: string)` | 当验证失败时触发，返回错误信息 |

### 可用的颜色主题 (ThemeColor)

组件支持以下Tailwind颜色主题：
`slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

## 示例

### 基础用法

```tsx
<TagsList v-model="tags" />
```

### 自定义颜色和尺寸

```tsx
<TagsList v-model="tags" color="green" size="lg" />
```

### 限制标签数量

```tsx
<TagsList v-model="tags" :maxTags="5" />
```

### 自定义验证

```tsx
<TagsList 
  v-model="tags" 
  :validation="(tag) => tag.length >= 2 || '标签长度至少为2'" 
/>
```

### 允许重复标签

```tsx
<TagsList v-model="tags" :allowDuplicates="true" />
```

### 随机颜色标签

```tsx
<TagsList v-model="tags" :randomColors="true" />
```

## 深色模式支持

组件自动适配深色模式，当您的应用处于深色模式时（通过 Tailwind CSS 的 `dark:` 类前缀控制），组件会自动调整颜色和样式。

### 启用深色模式

在您的 Tailwind 配置中启用深色模式:

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // 使用 class 控制深色模式
  // 或
  darkMode: 'media', // 使用系统偏好设置
  // ...其余配置
}
```

### 深色模式下的样式

在深色模式下，组件会自动：
- 调整标签的背景透明度和颜色
- 优化边框和文本对比度
- 调整输入框和错误提示的颜色

无需额外配置，只要您的应用支持 Tailwind 的深色模式，组件就会响应式地适配。
