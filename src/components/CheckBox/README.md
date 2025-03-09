# CheckBox 复选框组件

一个可自定义的复选框组件，支持多种尺寸、颜色和布局方式。

## 特性

- 支持多种尺寸（sm/md/lg）
- 支持多种颜色主题
- 支持预定义的主题色（primary、secondary、success 等）
- 支持水平/垂直布局
- 支持禁用状态
- 支持不确定状态
- 支持描述文本
- 支持自定义样式类
- 支持暗色模式
- 完全基于 Tailwind CSS
- 类型安全，完全使用 TypeScript 开发

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| modelValue | boolean | - | 复选框的值（必填） |
| id | string | - | 复选框的唯一标识（必填） |
| name | string | '' | 复选框的 name 属性 |
| label | string | - | 复选框的标签文本（必填） |
| description | string | '' | 复选框的描述文本 |
| disabled | boolean | false | 是否禁用 |
| color | ColorType | 'indigo' | 复选框的颜色，必须是 ColorType 中定义的值 |
| theme | ThemeColorType | undefined | 预定义的主题色，优先级高于 color 属性 |
| layout | 'horizontal' \| 'vertical' | 'horizontal' | 布局方式 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 复选框的尺寸 |
| inline | boolean | false | 是否内联显示 |
| indeterminate | boolean | false | 是否为不确定状态 |
| wrapperClass | string | '' | 包装器额外的 class |
| labelClass | string | '' | 标签额外的 class |
| darkMode | boolean | false | 是否强制使用暗色模式 |
| followSystem | boolean | true | 是否跟随系统设置暗色模式 |

## 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| update:modelValue | (value: boolean) | 值更新时触发 |
| change | (event: Event) | 值变化时触发 |
| focus | (event: FocusEvent) | 获得焦点时触发 |
| blur | (event: FocusEvent) | 失去焦点时触发 |
| click | (event: MouseEvent) | 点击时触发 |

## 类型定义

组件使用 TypeScript 定义了完整的类型接口，可以直接导入使用：

```ts
import { CheckBoxProps, CheckBoxEmits } from './components/CheckBox';

// 在自定义组件中使用这些类型
const myProps: CheckBoxProps = {
  id: 'custom-checkbox',
  modelValue: false,
  label: '自定义复选框',
  color: 'violet',
  // ... 其他属性
};
```

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
import CheckBox from '@/components/CheckBox'
const checked = ref(false)
</script>
```

### 使用主题色

```vue
<template>
  <div class="space-y-4">
    <CheckBox
      v-model="checked"
      id="primary"
      label="Primary 主题"
      theme="primary"
    />
    <CheckBox
      v-model="checked"
      id="success"
      label="Success 主题"
      theme="success"
    />
    <CheckBox
      v-model="checked"
      id="danger"
      label="Danger 主题"
      theme="danger"
    />
  </div>
</template>
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

### 直接指定颜色

```vue
<template>
  <div class="space-y-4">
    <CheckBox
      v-model="checked"
      id="indigo"
      label="靛蓝色"
      color="indigo"
    />
    <CheckBox
      v-model="checked"
      id="red"
      label="红色"
      color="red"
    />
    <CheckBox
      v-model="checked"
      id="green"
      label="绿色"
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

### 暗色模式

#### 强制使用暗色模式

```vue
<template>
  <div class="bg-gray-900 p-6 rounded-lg">
    <CheckBox
      v-model="checked"
      id="dark-mode"
      label="暗色模式复选框"
      :darkMode="true"
      :followSystem="false"
      color="blue"
    />
  </div>
</template>
```

#### 跟随系统设置

```vue
<template>
  <CheckBox
    v-model="checked"
    id="system-dark"
    label="跟随系统设置"
    :followSystem="true"
    color="green"
  />
</template>
```

## 组件设计原则

1. **可组合性** - 组件接受多种属性配置，可以灵活组合
2. **一致性** - 颜色、尺寸等遵循整个组件库的统一规范
3. **可访问性** - 支持键盘操作和屏幕阅读器
4. **类型安全** - 使用 TypeScript 接口确保类型安全
5. **代码分层** - 将样式、逻辑和类型分开管理
6. **暗色适配** - 支持暗色模式，提供良好的视觉体验

## 注意事项

1. 必须提供唯一的 `id` 属性
2. 使用 `v-model` 进行双向绑定
3. 颜色主题遵循 Tailwind CSS 的命名规范
4. 组件依赖 Tailwind CSS，确保项目中正确配置
5. 暗色模式可以通过 `darkMode` 属性强制开启，也可以通过 `followSystem` 属性跟随系统设置
6. 对于复杂表单，可以配合表单验证组件使用
