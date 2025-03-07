# TextInput 文本输入框组件

TextInput 是一个功能丰富的文本输入组件，支持单行文本、多行文本、各种状态展示以及自定义主题颜色。

## 功能特点

- 💡 支持单行输入和多行文本区域
- 🎨 多种主题颜色选择
- 📏 三种尺寸规格（小、中、大）
- 🔍 支持前缀和后缀图标
- 🚫 具备错误状态展示
- 🔄 清除按钮功能
- ⌨️ 支持各种输入类型（文本、密码、数字等）
- ♿ 符合可访问性标准
- 🌓 支持亮色/暗色模式

## 基础用法

```tsx
import { TextInput } from '@/components/TextInput'
import { ref } from 'vue'

// 在组件中使用
const username = ref('')

// 模板中使用
<TextInput 
  v-model="username" 
  id="username" 
  label="用户名"
  placeholder="请输入用户名"
/>
```

## API

### 属性

| 属性名 | 类型 | 默认值 | 说明 |
| ----- | ----- | ----- | ----- |
| modelValue | string | - | 输入框的值，支持 v-model 双向绑定 |
| id | string | - | 输入框的唯一标识，必填 |
| name | string | - | 输入框的名称 |
| label | string | - | 输入框的标签文本 |
| type | string | 'text' | 输入框类型，如 'text', 'password', 'number' 等 |
| placeholder | string | '' | 输入框的占位符文本 |
| disabled | boolean | false | 是否禁用输入框 |
| required | boolean | false | 是否为必填项 |
| description | string | - | 输入框下方的描述文本 |
| error | string | - | 错误信息，设置后会显示错误状态 |
| color | ColorType | 'indigo' | 主题颜色 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 输入框大小 |
| wrapperClass | string | '' | 容器元素的自定义类名 |
| labelClass | string | '' | 标签元素的自定义类名 |
| multiline | boolean | false | 是否为多行文本区域 |
| rows | number | 3 | 多行文本区域的行数 |

### 事件

| 事件名 | 参数 | 说明 |
| ----- | ----- | ----- |
| update:modelValue | string | 输入值改变时触发 |
| focus | FocusEvent | 输入框获得焦点时触发 |
| blur | FocusEvent | 输入框失去焦点时触发 |

### 插槽

| 插槽名 | 说明 |
| ----- | ----- |
| prefix | 输入框前缀内容，通常用于放置图标 |
| suffix | 输入框后缀内容，通常用于放置图标 |

### 颜色主题

组件支持以下颜色主题：
slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

## 示例

### 不同尺寸

```tsx
<TextInput v-model="value" id="small" size="sm" label="小输入框" />
<TextInput v-model="value" id="medium" size="md" label="中输入框" />
<TextInput v-model="value" id="large" size="lg" label="大输入框" />
```

### 带图标

```tsx
<TextInput v-model="value" id="search" label="搜索">
  <template #prefix>
    <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  </template>
</TextInput>
```

### 多行文本

```tsx
<TextInput
  v-model="comment"
  id="comment"
  multiline
  rows={5}
  label="评论"
  placeholder="请输入您的评论"
/>
```

### 错误状态

```tsx
<TextInput
  v-model="email"
  id="email"
  type="email"
  label="邮箱"
  error="请输入有效的邮箱地址"
/>
```
