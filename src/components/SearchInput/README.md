# SearchInput 搜索输入框组件

一个功能丰富的搜索输入框组件，支持即时搜索、搜索历史记录和自定义样式。

## 功能特点

- 🔍 支持即时搜索和延迟搜索
- 📜 可选的搜索历史记录功能
- 🎨 多种主题颜色选择
- 📏 不同尺寸规格（小、中、大）
- 🚫 清除按钮功能
- ⌨️ 完善的键盘支持
- 🌓 自适应亮色/暗色主题

## 基础用法

```vue
<template>
  <SearchInput 
    v-model="searchText" 
    placeholder="搜索..." 
    @search="handleSearch"
  />
</template>

<script setup>
import { ref } from 'vue'
import { SearchInput } from '@/components/SearchInput'

const searchText = ref('')
const handleSearch = (value) => {
  console.log('搜索内容:', value)
}
</script>
```

## API

### Props

| 属性名 | 类型 | 默认值 | 说明 |
| ----- | ---- | ------ | ---- |
| modelValue | string | '' | 输入框的值，支持 v-model 双向绑定 |
| placeholder | string | '搜索' | 输入框的占位符文本 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 输入框大小 |
| theme | ColorType | 'gray' | 主题颜色 |
| debounce | number | 300 | 搜索延迟时间（毫秒） |
| disabled | boolean | false | 是否禁用输入框 |
| autofocus | boolean | false | 是否自动聚焦 |
| showClear | boolean | true | 是否显示清除按钮 |
| showSearchHistory | boolean | false | 是否显示搜索历史 |
| maxHistoryItems | number | 5 | 最大历史记录数量 |
| historyStorageKey | string | 'search_history' | 历史记录本地存储键名 |

### 事件

| 事件名 | 参数 | 说明 |
| ------ | ---- | ---- |
| update:modelValue | (value: string) | 输入值变化时触发 |
| search | (value: string) | 触发搜索时触发 |
| clear | - | 清除搜索内容时触发 |
| focus | (event: FocusEvent) | 输入框获得焦点时触发 |
| blur | (event: FocusEvent) | 输入框失去焦点时触发 |
| history-select | (value: string) | 从历史记录中选择项目时触发 |
| history-clear | - | 清空历史记录时触发 |

### 插槽

| 插槽名 | 说明 |
| ------ | ---- |
| prefix | 输入框前置内容，默认为搜索图标 |
| suffix | 输入框后置内容 |

## 示例

### 不同尺寸

```vue
<template>
  <SearchInput v-model="searchText" size="sm" placeholder="小尺寸搜索框" />
  <SearchInput v-model="searchText" size="md" placeholder="默认尺寸搜索框" />
  <SearchInput v-model="searchText" size="lg" placeholder="大尺寸搜索框" />
</template>
```

### 自定义主题

```vue
<template>
  <SearchInput v-model="searchText" theme="blue" placeholder="蓝色主题" />
  <SearchInput v-model="searchText" theme="indigo" placeholder="靛蓝主题" />
  <SearchInput v-model="searchText" theme="red" placeholder="红色主题" />
</template>
```

### 搜索历史功能

```vue
<template>
  <SearchInput 
    v-model="searchText" 
    :showSearchHistory="true" 
    historyStorageKey="my_search_history"
    :maxHistoryItems="10"
    @history-select="handleHistorySelect"
    @history-clear="handleHistoryClear"
  />
</template>

<script setup>
import { ref } from 'vue'

const searchText = ref('')
const handleHistorySelect = (value) => {
  console.log('从历史记录中选择:', value)
}
const handleHistoryClear = () => {
  console.log('历史记录已清空')
}
</script>
```

### 自定义图标

```vue
<template>
  <SearchInput v-model="searchText">
    <template #prefix>
      <span class="icon-[custom--search] h-5 w-5" />
    </template>
    <template #suffix>
      <button class="text-gray-400 hover:text-gray-600">
        <span class="icon-[custom--filter] h-4 w-4" />
      </button>
    </template>
  </SearchInput>
</template>
```

## 小结与最佳实践

### 何时使用

- 当需要在页面上提供搜索功能时
- 用户需要在大量数据中快速查找内容
- 需要记录用户搜索历史时

### 何时不使用

- 当功能需要非常复杂的筛选条件时，考虑使用专门的筛选组件
- 当输入表单只需简单文本输入时，使用标准的TextInput组件更合适

### 可访问性建议

- 确保搜索框有清晰的标签或占位符，说明其用途
- 键盘导航应完整支持搜索历史交互
- 对于必要的搜索功能，添加适当的ARIA属性

### 性能优化

- 合理设置debounce值，避免频繁触发搜索
- 历史记录存储考虑限制数量，避免本地存储过大
- 当需要搜索大量远程数据时，考虑结合服务端分页

### 与其他组件的组合

- 与Dropdown组件结合可以实现自动完成功能
- 与Message组件结合可以显示搜索结果状态
- 与Table或List组件结合展示搜索结果

### 响应式设计注意事项

- 在移动设备上考虑自动聚焦并展开键盘
- 小屏幕上可能需要调整尺寸或设计为全宽展示
- 历史记录下拉菜单应适应不同屏幕宽度

### 国际化与本地化

- 占位符和按钮文本应支持多语言
- 搜索历史记录存储应考虑不同语言的字符编码
- 对于RTL(从右到左)语言，布局方向需要适当调整

### 安全性考虑

- 搜索历史存储在本地时，避免包含敏感信息
- 对输入内容进行适当的过滤和验证，防止XSS攻击
- 如果搜索结果包含用户输入内容的回显，确保进行适当的转义

