# CodePreview 代码预览组件

CodePreview 是一个功能丰富的代码预览组件，用于展示代码示例和实时效果。它支持语法高亮、深色/浅色主题、代码折叠和一键复制功能。

## 功能特点

- ✨ 支持多种编程语言的语法高亮
- 🌗 深色模式和浅色模式无缝切换
- 📋 增强的一键复制功能，兼容各种浏览器
- 🔍 代码区域可折叠，提高空间利用率
- 🎭 支持自定义标题和描述信息
- 📱 响应式设计，适配各种屏幕尺寸

## 安装

确保您的项目中已安装以下依赖：

```bash
npm install highlight.js @vueuse/core clipboard-polyfill
```

## 基本使用

```vue
<template>
  <CodePreview :code="myCode" theme="light">
    <!-- 您的演示内容 -->
    <div class="demo-content">
      <h3>示例内容</h3>
      <button @click="count++">点击我: {{ count }}</button>
    </div>
  </CodePreview>
</template>

<script setup>
import { ref } from 'vue';
import CodePreview from '../components/CodePreview';

const count = ref(0);

// 使用Markdown风格的代码块
const myCode = `\`\`\`html
<div class="demo-content">
  <h3>示例内容</h3>
  <button @click="count++">点击我: {{ count }}</button>
</div>
\`\`\``;
</script>
```

## 属性 (Props)

| 属性名 | 类型 | 默认值 | 描述 |
| ------ | ---- | ------ | ---- |
| code | String | '' | 要展示的代码，支持Markdown代码块语法 |
| language | String | 'html' | 代码的语言，当使用Markdown代码块时会被自动识别 |
| theme | 'light' \| 'dark' | 'light' | 组件的主题 |
| initiallyExpanded | Boolean | true | 是否默认展开代码区域 |
| title | String | '' | 组件标题 (可选) |
| description | String | '' | 组件描述 (可选) |

## 插槽 (Slots)

| 插槽名 | 描述 |
| ------ | ---- |
| default | 实际演示的组件内容 |

## 主题切换

组件支持深色和浅色两种主题模式，可以通过`theme`属性动态切换：

```vue
<template>
  <button @click="toggleTheme">切换主题</button>
  <CodePreview :code="myCode" :theme="currentTheme">
    <!-- 内容 -->
  </CodePreview>
</template>

<script setup>
import { ref, computed } from 'vue';

const isDarkMode = ref(false);
const currentTheme = computed(() => isDarkMode.value ? 'dark' : 'light');

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value;
}
</script>
```

## 代码格式

组件支持通过Markdown风格的代码块来指定语言：

```js
const htmlCode = `\`\`\`html
<div>HTML代码</div>
\`\`\``;

const jsCode = `\`\`\`javascript
function example() {
  console.log('JavaScript代码');
}
\`\`\``;

const vueCode = `\`\`\`vue
<template>
  <div>Vue组件</div>
</template>
\`\`\``;
```

## 自定义样式

组件使用Tailwind CSS进行样式设计，您可以通过传递标题和描述属性来增强展示效果：

```vue
<CodePreview 
  :code="myCode" 
  title="按钮组件" 
  description="一个简单的可点击按钮示例">
  <!-- 内容 -->
</CodePreview>
```

## 注意事项

- 确保已正确安装highlight.js、@vueuse/core和clipboard-polyfill依赖
- 代码复制功能使用clipboard-polyfill增强，提供了更好的浏览器兼容性
- 对于较长的代码示例，建议默认折叠代码区域(`initiallyExpanded={false}`)
