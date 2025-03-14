# Pagination 分页组件

一个灵活的分页组件，支持快速导航、自定义主题和暗色模式。

## 功能特点

- 上一页/下一页导航
- 页码显示与省略号
- 快速跳转到指定页
- 禁用状态
- 平滑过渡动画效果
- 支持 Tailwind CSS 所有颜色主题
- 内置暗色模式支持
- 静态类名实现（完全兼容 Tailwind CSS 的优化）

## 基础用法

```vue
<template>
  <Pagination
    :total="100"
    v-model:current="currentPage"
    @change="handlePageChange"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Pagination } from '@your-library/components'

const currentPage = ref(1)
const handlePageChange = (page) => {
  console.log(`页面已切换到第 ${page} 页`)
}
</script>
```

## 不同颜色主题

组件支持所有 Tailwind CSS 颜色：

```vue
<template>
  <Pagination :total="100" :current="1" theme="indigo" /> <!-- 默认主题 -->
  <Pagination :total="100" :current="1" theme="blue" />
  <Pagination :total="100" :current="1" theme="red" />
  <Pagination :total="100" :current="1" theme="green" />
  <Pagination :total="100" :current="1" theme="purple" />
</template>
```

## 快速页面跳转

```vue
<template>
  <Pagination :total="500" v-model:current="currentPage" :show-quick-jumper="true" />
</template>
```

## 自定义页面大小

```vue
<template>
  <Pagination :total="200" v-model:current="currentPage" :page-size="10" />
</template>
```

## 禁用状态

```vue
<template>
  <Pagination :total="100" :current="1" :disabled="true" />
</template>
```

## 暗色模式

```vue
<template>
  <Pagination :total="100" :current="1" :dark="isDarkMode" />
</template>

<script setup>
import { ref } from 'vue'
const isDarkMode = ref(true)
</script>
```

也可以与 Tailwind CSS 的暗色模式结合：

```vue
<template>
  <div class="dark">
    <Pagination :total="100" :current="1" />
  </div>
</template>
```

## 组件属性

| 属性名 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| total | number | - | 总条目数（必填） |
| current | number | - | 当前页码（必填） |
| pageSize | number | 20 | 每页条目数 |
| disabled | boolean | false | 是否禁用分页 |
| showQuickJumper | boolean | false | 是否显示快速跳转 |
| theme | ColorType | 'indigo' | 颜色主题 |
| dark | boolean | false | 是否强制使用暗色模式 |

## 支持的颜色主题

组件支持所有 Tailwind CSS 颜色：

- 灰色系：slate, gray, zinc, neutral, stone
- 暖色系：red, orange, amber, yellow
- 绿色系：lime, green, emerald, teal
- 蓝色系：cyan, sky, blue, indigo
- 紫粉系：violet, purple, fuchsia, pink, rose

## 事件

| 事件名 | 参数 | 说明 |
|------|------------|-------------|
| update:current | (page: number) | 页码变化时触发，支持 v-model:current |
| change | (page: number) | 页码变化时触发 |

## 高级用法

### 与 Tailwind 暗色模式结合

```vue
<template>
  <div class="dark:bg-gray-900 p-6">
    <!-- 自动适应暗色模式 -->
    <Pagination 
      :total="100" 
      v-model:current="currentPage" 
      theme="blue" 
      :dark="false"
    />
    
    <!-- 手动设置暗色模式 -->
    <Pagination 
      :total="100" 
      v-model:current="currentPage" 
      theme="blue" 
      :dark="true"
    />
  </div>
</template>
```

### 完整功能示例

```vue
<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="p-4 bg-white dark:bg-gray-800 rounded-lg">
      <Pagination
        :total="total"
        v-model:current="currentPage"
        :page-size="pageSize"
        :disabled="isLoading"
        :show-quick-jumper="true"
        :theme="colorTheme"
        :dark="isDark"
        @change="handlePageChange"
      />
      
      <div class="mt-4">
        <span class="text-sm text-gray-600 dark:text-gray-400">
          共 {{ total }} 条，每页 {{ pageSize }} 条，当前第 {{ currentPage }} 页
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Pagination } from '@your-library/components'

const total = ref(256)
const currentPage = ref(1)
const pageSize = ref(20)
const isLoading = ref(false)
const colorTheme = ref('blue')
const isDark = ref(false)

const handlePageChange = (page) => {
  isLoading.value = true
  // 模拟加载数据
  setTimeout(() => {
    console.log(`加载第 ${page} 页数据`)
    isLoading.value = false
  }, 300)
}
</script>
```

## 与其他组件组合使用

Pagination 可以很好地与表格组件或列表组件结合使用：

```vue
<template>
  <div class="space-y-4">
    <!-- 数据表格 -->
    <DataTable :data="tableData" :columns="columns" :loading="loading" />
    
    <!-- 分页组件 -->
    <div class="flex justify-between items-center">
      <span class="text-sm text-gray-600 dark:text-gray-400">
        共 {{ total }} 条记录
      </span>
      
      <Pagination
        :total="total"
        v-model:current="currentPage"
        :page-size="pageSize"
        :disabled="loading"
        :show-quick-jumper="true"
        theme="indigo"
        @change="fetchData"
      />
    </div>
  </div>
</template>
```

## 实现说明

Pagination 组件使用了静态类名映射而不是动态生成类名，这样可以确保 Tailwind CSS 能够正确地识别和生成所有所需的类，避免了生产环境中样式丢失的问题。

暗色模式采用 Tailwind CSS 的 `dark:` 变体前缀实现，既支持 CSS 媒体查询的自动模式，也支持通过添加 `.dark` 类的手动模式。
