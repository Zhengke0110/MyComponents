# TextInput 文本输入框组件

TextInput 是一个功能丰富的文本输入组件，支持单行文本、多行文本、各种状态展示以及自定义主题颜色。

## 功能特点

- 💡 支持单行输入和多行文本区域
- 🎨 多种主题颜色选择（22种 Tailwind 颜色）
- 📏 三种尺寸规格（小、中、大）
- 🔍 支持前缀和后缀图标
- 🚫 具备错误状态展示
- 🔄 实时清除按钮功能
- ⌨️ 支持各种输入类型（文本、密码、数字等）
- 🌓 完美支持深色/浅色模式
- 🔄 优化的过渡动画
- ♿ 符合可访问性标准

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

## 深色模式支持

TextInput 组件现在完美支持 Tailwind CSS 的深色模式。只需在 HTML 根元素添加 `dark` 类即可启用深色模式，组件会自动调整所有颜色、背景和边框以提供最佳的视觉体验。

```html
<!-- 手动切换深色模式 -->
<script>
  // 切换深色模式
  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }
  
  // 根据系统偏好设置
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  }
</script>

<!-- 深色模式切换按钮示例 -->
<button 
  @click="toggleDarkMode" 
  class="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
>
  切换模式
</button>
```

### 内部实现原理

组件内部使用了计算属性和内联样式的结合，解决了 Tailwind CSS 不支持动态颜色类的限制：

- 为每种颜色创建了浅色/深色模式下的颜色映射表
- 使用 `document.documentElement.classList.contains('dark')` 检测当前模式
- 使用 Tailwind 的 `dark:` 前缀类处理文本、边框等静态样式
- 对于需要动态计算的样式（如颜色变化），采用内联样式方式

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

组件支持以下所有 Tailwind 颜色主题，在浅色和深色模式下均提供良好的显示效果：
- 灰度系列: slate, gray, zinc, neutral, stone
- 彩色系列: red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

## 使用示例

### 基础输入框

```tsx
<TextInput v-model="username" id="username" label="用户名" />
<TextInput v-model="password" id="password" type="password" label="密码" />
<TextInput v-model="number" id="number" type="number" label="数字" />
```

### 不同尺寸

```tsx
<TextInput v-model="value" id="small" size="sm" label="小输入框" />
<TextInput v-model="value" id="medium" size="md" label="中输入框" />
<TextInput v-model="value" id="large" size="lg" label="大输入框" />
```

### 带图标

```tsx
<!-- 前缀图标 -->
<TextInput v-model="search" id="search" label="搜索">
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

<!-- 后缀图标 -->
<TextInput v-model="link" id="link" color="sky" label="链接">
  <template #suffix>
    <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
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
<!-- 基础多行文本 -->
<TextInput
  v-model="comment"
  id="comment"
  multiline
  rows="5"
  label="评论"
  placeholder="请输入您的评论"
/>

<!-- 带图标的多行文本 -->
<TextInput
  v-model="note"
  id="note"
  multiline
  color="purple"
  label="笔记"
  rows="3"
>
  <template #prefix>
    <svg class="size-5 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  </template>
</TextInput>
```

### 错误状态与描述信息

```tsx
<!-- 错误状态 -->
<TextInput
  v-model="email"
  id="email"
  type="email"
  label="邮箱"
  error="请输入有效的邮箱地址"
/>

<!-- 帮助描述 -->
<TextInput
  v-model="username"
  id="username"
  label="用户名"
  description="用户名将用于登录和展示"
/>

<!-- 必填项 -->
<TextInput
  v-model="fullName"
  id="fullName"
  label="姓名"
  required
/>
```

### 深色模式

深色模式的展示需要在根元素上添加 `dark` 类，此时组件会自动使用适合深色背景的样式：

```html
<!-- 深色模式下的输入框 -->
<div class="bg-gray-900 p-6">
  <TextInput
    v-model="darkModeInput"
    id="dark-mode-input"
    label="深色模式输入框"
    placeholder="在深色模式下输入文本"
    color="blue"
    labelClass="text-white"
  />
</div>

<!-- 在深色背景中使用浅色输入框 -->
<div class="bg-gray-800 p-6">
  <TextInput
    v-model="contrastInput"
    id="contrast-input"
    color="amber"
    label="对比色输入框"
    placeholder="在深色背景中的输入框"
    labelClass="text-white"
  />
</div>
```

### 完整表单示例

```tsx
<form @submit.prevent="submitForm" class="space-y-4 max-w-md">
  <TextInput
    v-model="form.email"
    id="form-email"
    type="email"
    label="邮箱"
    placeholder="请输入邮箱地址"
    required
    :error="formErrors.email"
  />
  
  <TextInput
    v-model="form.password"
    id="form-password"
    type="password"
    label="密码"
    placeholder="至少8位字符"
    required
    :error="formErrors.password"
  />
  
  <TextInput
    v-model="form.bio"
    id="form-bio"
    multiline
    rows="3"
    label="个人简介"
    placeholder="简单介绍一下自己"
    :error="formErrors.bio"
  />
  
  <button 
    type="submit"
    class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-md transition-colors"
  >
    提交
  </button>
</form>
```
