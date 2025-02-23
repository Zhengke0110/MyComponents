# CheckBox 复选框组件

一个可自定义的复选框组件，支持多种尺寸、颜色和布局方式。

## 特性

- 支持多种尺寸（sm/md/lg）
- 支持多种颜色主题
- 支持水平/垂直布局
- 支持禁用状态
- 支持不确定状态
- 支持描述文本
- 支持自定义样式类
- 完全基于 Tailwind CSS

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| modelValue | boolean | - | 复选框的值（必填） |
| id | string | - | 复选框的唯一标识（必填） |
| name | string | '' | 复选框的 name 属性 |
| label | string | - | 复选框的标签文本（必填） |
| description | string | '' | 复选框的描述文本 |
| disabled | boolean | false | 是否禁用 |
| color | ColorType | 'indigo' | 复选框的颜色主题 |
| layout | 'horizontal' \| 'vertical' | 'horizontal' | 布局方式 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 复选框的尺寸 |
| inline | boolean | false | 是否内联显示 |
| indeterminate | boolean | false | 是否为不确定状态 |
| wrapperClass | string | '' | 包装器额外的 class |
| labelClass | string | '' | 标签额外的 class |

## 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| update:modelValue | (value: boolean) | 值更新时触发 |
| change | (event: Event) | 值变化时触发 |
| focus | (event: FocusEvent) | 获得焦点时触发 |
| blur | (event: FocusEvent) | 失去焦点时触发 |
| click | (event: MouseEvent) | 点击时触发 |

## 使用示例

### 基础用法

```vue
<template>
  <CheckBox
    v-model="checked"
    id="basic"
    label="同意服务条款"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
</script>
```

### 不同尺寸

```vue
<template>
  <div class="space-y-4">
    <CheckBox
      v-model="checked"
      id="small"
      label="小尺寸"
      size="sm"
    />
    <CheckBox
      v-model="checked"
      id="medium"
      label="中等尺寸"
      size="md"
    />
    <CheckBox
      v-model="checked"
      id="large"
      label="大尺寸"
      size="lg"
    />
  </div>
</template>
```

### 不同颜色主题

```vue
<template>
  <div class="space-y-4">
    <CheckBox
      v-model="checked"
      id="indigo"
      label="靛蓝色主题"
      color="indigo"
    />
    <CheckBox
      v-model="checked"
      id="red"
      label="红色主题"
      color="red"
    />
    <CheckBox
      v-model="checked"
      id="green"
      label="绿色主题"
      color="green"
    />
  </div>
</template>
```

### 带描述文本

```vue
<template>
  <CheckBox
    v-model="checked"
    id="with-desc"
    label="接收通知"
    description="我们会定期向您发送重要更新和优惠信息"
  />
</template>
```

### 禁用状态

```vue
<template>
  <div class="space-y-4">
    <CheckBox
      v-model="checked"
      id="disabled-unchecked"
      label="禁用未选中"
      disabled
    />
    <CheckBox
      v-model="checkedDisabled"
      id="disabled-checked"
      label="禁用已选中"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
const checkedDisabled = ref(true)
</script>
```

### 不确定状态

```vue
<template>
  <CheckBox
    v-model="checked"
    id="indeterminate"
    label="全选"
    :indeterminate="indeterminate"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
const indeterminate = ref(true)

const handleChange = () => {
  indeterminate.value = false
}
</script>
```

### 垂直布局带描述

```vue
<template>
  <CheckBox
    v-model="checked"
    id="vertical"
    label="订阅电子报"
    description="每周获取最新的产品更新和行业新闻"
    layout="vertical"
  />
</template>
```

### 自定义样式

```vue
<template>
  <CheckBox
    v-model="checked"
    id="custom"
    label="自定义样式"
    wrapperClass="bg-gray-50 p-4 rounded-lg"
    labelClass="text-blue-600"
  />
</template>
```

## 注意事项

1. 必须提供唯一的 `id` 属性
2. 使用 `v-model` 进行双向绑定
3. 颜色主题遵循 Tailwind CSS 的命名规范
4. 组件依赖 Tailwind CSS，确保项目中正确配置
