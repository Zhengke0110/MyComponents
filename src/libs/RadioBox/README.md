# RadioBox 单选框组件

RadioBox 是一个用于在多个选项中选择单一值的 Vue 3 组件。它提供了丰富的样式选项和灵活的配置，适用于各种表单场景。

## 目录

- [简介](#简介)
- [安装](#安装)
- [基础用法](#基础用法)
- [组件功能](#组件功能)
- [API 文档](#api-文档)
- [使用示例](#使用示例)
- [最佳实践](#最佳实践)

## 简介

单选框（RadioBox）用于在一组选项中选择单个选项。相比下拉选择组件，RadioBox 展示所有选项，使用户可以直观地进行比较和选择。

**适用场景**：
- 选项数量较少（通常不超过5个）
- 用户需要同时看到所有选项
- 需要快速做出选择和对比

## 基础用法

```vue
<template>
  <div>
    <!-- 基础单选框 -->
    <Radio v-model="checked" :value="true">单选框</Radio>
    
    <!-- 单选框组 -->
    <RadioGroup v-model="fruit">
      <Radio value="apple">苹果</Radio>
      <Radio value="banana">香蕉</Radio>
      <Radio value="orange">橙子</Radio>
    </RadioGroup>
    
    <!-- 使用配置选项 -->
    <RadioGroup
      v-model="selectedFruit"
      :options="fruitOptions"
      color="green"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Radio, RadioGroup } from '@your-library/component-library';

const checked = ref(false);
const fruit = ref('apple');
const selectedFruit = ref('banana');

const fruitOptions = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape', disabled: true },
];
</script>
```

## 组件功能

### 1. 丰富的样式选择

- **多彩主题**：支持多种预设颜色，包括灰色、暖色、绿色、蓝色和紫粉色系列
- **按钮样式**：除了传统单选框外，还提供了按钮形式的单选项
- **尺寸选择**：支持大、中、小三种尺寸（仅按钮样式生效）

### 2. 灵活的配置方式

- **简单模式**：直接使用 Radio 组件
- **组合模式**：使用 RadioGroup 包裹多个 Radio
- **配置模式**：通过 options 属性配置选项

### 3. 深色模式支持

组件完全兼容 Tailwind 的 dark 模式，可以无缝适配深色主题。

### 4. 状态与交互

- 支持选中/未选中状态
- 支持禁用状态
- 提供焦点管理和键盘导航

## API 文档

### Radio 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue(v-model) | 指定当前是否选中 | boolean \| string \| number | undefined |
| value | 根据 value 进行比较，判断是否选中 | boolean \| string \| number | undefined |
| disabled | 禁用状态 | boolean | false |
| name | input[type="radio"] 的 name 属性 | string | undefined |
| autofocus | 自动获取焦点 | boolean | false |
| color | 单选框颜色 | ColorType | 'blue' |

### Radio 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中状态变化时的回调 | Event: Event |
| focus | 获得焦点时触发 | Event: FocusEvent |
| blur | 失去焦点时触发 | Event: FocusEvent |

### Radio 方法

| 方法名 | 说明 |
| --- | --- |
| focus() | 使单选框获取焦点 |
| blur() | 使单选框失去焦点 |

### RadioGroup 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue(v-model) | 用于设置当前选中的值 | any | undefined |
| disabled | 禁用所有子单选器 | boolean | false |
| name | RadioGroup 下所有 input[type="radio"] 的 name 属性 | string | undefined |
| size | 单选框组尺寸，仅对按钮样式生效 | 'large' \| 'default' \| 'small' | 'default' |
| optionType | 用于设置 Radio 的类型 | 'default' \| 'button' | 'default' |
| buttonStyle | 按钮风格样式，仅在 optionType 为 button 时有效 | 'outline' \| 'solid' | 'outline' |
| options | 以配置形式设置子元素 | string[] \| number[] \| Array<{ label: string, value: string \| number, disabled?: boolean }> | [] |
| color | 单选框颜色 | ColorType | 'blue' |

### RadioGroup 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选项变化时的回调 | { target: { value } } |

### 颜色类型 (ColorType)

支持以下颜色系列:
- 灰色系: slate, gray, zinc, neutral, stone
- 暖色系: red, orange, amber, yellow
- 绿色系: lime, green, emerald, teal
- 蓝色系: cyan, sky, blue, indigo
- 紫粉色系: violet, purple, fuchsia, pink, rose

## 使用示例

### 基础单选框

```vue
<Radio v-model="checked" :value="true">同意条款</Radio>
```

### 不同颜色的单选框

```vue
<Radio v-model="color" value="red" color="red">红色</Radio>
<Radio v-model="color" value="blue" color="blue">蓝色</Radio>
<Radio v-model="color" value="green" color="green">绿色</Radio>
```

### 禁用状态

```vue
<Radio disabled :value="1">禁用未选中</Radio>
<Radio disabled :value="1" v-model="disabledChecked">禁用已选中</Radio>
```

### 单选框组

```vue
<RadioGroup v-model="fruit" color="blue">
  <Radio value="apple">苹果</Radio>
  <Radio value="banana">香蕉</Radio>
  <Radio value="orange">橙子</Radio>
  <Radio value="grape" disabled>葡萄</Radio>
</RadioGroup>
```

### 使用 options 配置

```vue
<RadioGroup
  v-model="selectedFruit"
  :options="fruitOptions"
  color="green"
/>

<script setup>
const fruitOptions = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape', disabled: true },
];
</script>
```

### 按钮样式

```vue
<RadioGroup v-model="size" optionType="button" color="blue">
  <Radio value="large">大号</Radio>
  <Radio value="default">默认</Radio>
  <Radio value="small">小号</Radio>
</RadioGroup>
```

### 填充按钮样式

```vue
<RadioGroup v-model="size" optionType="button" buttonStyle="solid" color="indigo">
  <Radio value="large">大号</Radio>
  <Radio value="default">默认</Radio>
  <Radio value="small">小号</Radio>
</RadioGroup>
```

### 不同布局方式

```vue
<!-- 水平布局 -->
<RadioGroup v-model="layout" class="flex flex-row gap-6">
  <Radio value="horizontal">水平</Radio>
  <Radio value="vertical">垂直</Radio>
  <Radio value="grid">网格</Radio>
</RadioGroup>

<!-- 垂直布局 -->
<RadioGroup v-model="layout" class="flex flex-col gap-4">
  <Radio value="horizontal">水平</Radio>
  <Radio value="vertical">垂直</Radio>
  <Radio value="grid">网格</Radio>
</RadioGroup>

<!-- 网格布局 -->
<RadioGroup v-model="layout" class="grid grid-cols-2 sm:grid-cols-3 gap-4">
  <Radio value="horizontal">水平布局</Radio>
  <Radio value="vertical">垂直布局</Radio>
  <Radio value="grid">网格布局</Radio>
  <Radio value="flex">弹性布局</Radio>
  <Radio value="responsive">响应式布局</Radio>
</RadioGroup>
```

## 最佳实践

### 何时使用 RadioBox

- 当用户需要在多个选项中选择单个状态时
- 选项数量较少（一般不超过5个），且用户需要一目了然地看到所有选项时
- 相比下拉选择框，RadioBox 能让用户更直观地对比不同选项

### 设计建议

1. **选项描述要简洁明了**  
   RadioBox 的标签文本应简短明确，便于用户快速理解和选择。

2. **设置合理的默认选项**  
   如果有明确的推荐选项，应将其设为默认选中状态。

3. **合理布局**  
   选项较多时应考虑使用多行或网格布局；选项较少时可使用水平排列。

4. **按钮样式与普通样式的选择**  
   针对不同的交互场景选择适合的样式：普通 RadioBox 适合常规表单，按钮样式适合更突出的选择项。

5. **统一的颜色风格**  
   根据界面整体风格选择合适的颜色，保持色彩一致性。

### RadioBox vs Select

在选择是使用 RadioBox 还是 Select(下拉选择)时，可以参考以下指引：
- 选项少于5个时，优先考虑使用 RadioBox
- 选项超过5个时，优先考虑使用 Select 以节省空间
- 如果需要用户直接比较各选项，使用 RadioBox 更合适
- 如果界面空间有限，即使选项较少也可以使用 Select

## 贡献

欢迎提交 issues 和 pull requests 来帮助我们改进这个组件。

## 许可证

MIT