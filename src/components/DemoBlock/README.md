# DemoBlock 组件

DemoBlock 是一个用于展示组件示例的容器组件，它提供了代码展示、代码复制等功能，常用于组件文档系统中。

## 特性

- 🎯 组件演示展示区域
- 📝 支持展示组件标题和描述
- 💻 代码查看和收起功能
- 📋 代码复制功能
- 🎨 代码语法高亮
- 🔄 支持多种代码格式（Markdown 和普通代码）

## 使用示例

```vue
<template>
  <DemoBlock
    title="基础用法"
    description="这是一个基础的按钮示例"
  >
    <template #default>
      <button>点击我</button>
    </template>
    
    <template #code>
      ```vue
      <template>
        <button>点击我</button>
      </template>
      ```
    </template>
  </DemoBlock>
</template>

<script setup lang="ts">
import { DemoBlock } from '@/components'
</script>
```

## API

### Props

| 属性名      | 类型     | 默认值 | 说明         | 必填  |
|------------|----------|--------|-------------|-------|
| title      | string   | -      | 示例标题     | 是    |
| description| string   | ''     | 示例描述     | 否    |

### Slots

| 插槽名   | 说明                                          |
|---------|----------------------------------------------|
| default | 用于展示组件示例的默认插槽                      |
| code    | 用于展示示例代码的插槽，支持 Markdown 代码块格式 |

## 代码展示功能

DemoBlock 组件支持以下功能：

1. 代码格式化：自动处理代码缩进和换行
2. 语法高亮：使用 highlight.js 进行代码高亮
3. 支持多种编程语言
4. 代码复制功能，复制成功后有反馈提示

## 注意事项

1. code 插槽中的代码可以使用 Markdown 代码块格式或普通代码字符串
2. 建议将较长的示例代码放在单独的文件中引入
3. 代码块支持的语言取决于 highlight.js 的配置

## 样式定制

组件使用 Tailwind CSS 进行样式设计，可以通过以下类名进行样式覆盖：

- 外层容器：`mb-8 border rounded-lg overflow-hidden`
- 标题区域：`border-b bg-gray-50 p-4`
- 示例展示区域：`p-6 bg-white`
- 代码区域：`border-t`

## 示例代码

### 基础用法

```vue
<DemoBlock title="基础示例">
  <div>示例内容</div>
  
  <template #code>
    ```vue
    <div>示例内容</div>
    ```
  </template>
</DemoBlock>
```

### 带描述的示例

```vue
<DemoBlock
  title="带描述的示例"
  description="这里是示例的详细描述信息"
>
  <div>示例内容</div>
  
  <template #code>
    ```vue
    <div>示例内容</div>
    ```
  </template>
</DemoBlock>
```
