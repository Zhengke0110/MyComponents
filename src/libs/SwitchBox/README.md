# SwitchBox 开关组件

`SwitchBox` 组件是一种用于在两种状态之间进行切换的交互控件。相比复选框，开关组件更直观、更优雅，能够立即触发状态变化，为用户提供即时的视觉反馈。

## 组件特性

- 支持自定义开启和关闭状态的值
- 提供两种尺寸选择（默认和小尺寸）
- 支持禁用状态和加载状态
- 可添加自定义文字标签，增强视觉识别性
- 支持自动获取焦点
- 响应式设计，提供良好的交互体验
- 良好的暗色模式支持
- 支持自定义插槽

## 基础用法

```vue
<template>
  <SwitchBox v-model="switchValue" />
  <span>当前状态: {{ switchValue ? '开启' : '关闭' }}</span>
</template>

<script setup>
import { ref } from 'vue'
import { SwitchBox } from './index'

const switchValue = ref(false)
</script>
```

## 添加文字标签

```vue
<template>
  <SwitchBox v-model="switchValue" checkedChildren="开" unCheckedChildren="关" />
</template>

<script setup>
import { ref } from 'vue'
import { SwitchBox } from './index'

const switchValue = ref(false)
</script>
```

## 不同尺寸

```vue
<template>
  <SwitchBox v-model="switchValue" size="default" />
  <SwitchBox v-model="switchValue" size="small" />
</template>
```

## 禁用状态

```vue
<template>
  <SwitchBox v-model="switchValue" disabled />
</template>
```

## 加载状态

```vue
<template>
  <SwitchBox v-model="switchValue" loading />
</template>
```

## 自定义值

```vue
<template>
  <SwitchBox 
    v-model="customValue" 
    :checkedValue="'active'" 
    :unCheckedValue="'inactive'" 
  />
  <span>当前值: {{ customValue }}</span>
</template>

<script setup>
import { ref } from 'vue'
import { SwitchBox } from './index'

const customValue = ref('inactive')
</script>
```

## 与表单集成

```vue
<template>
  <div class="space-y-2">
    <div class="flex items-center justify-between">
      <span>通知设置</span>
      <SwitchBox v-model="notificationEnabled" />
    </div>
    <div class="pl-4 space-y-2" :class="{ 'opacity-50': !notificationEnabled }">
      <div class="flex items-center justify-between">
        <span>电子邮件通知</span>
        <SwitchBox v-model="emailNotification" size="small" :disabled="!notificationEnabled" />
      </div>
      <div class="flex items-center justify-between">
        <span>短信通知</span>
        <SwitchBox v-model="smsNotification" size="small" :disabled="!notificationEnabled" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SwitchBox } from './index'

const notificationEnabled = ref(true)
const emailNotification = ref(true)
const smsNotification = ref(false)
</script>
```

## 使用自定义插槽

```vue
<template>
  <SwitchBox v-model="switchValue">
    <template #checkedChildren>
      <span class="animate-pulse">YES</span>
    </template>
    <template #unCheckedChildren>
      <span class="animate-pulse">NO</span>
    </template>
  </SwitchBox>
</template>
```

## API

### Props

| 属性             | 说明                 | 类型                         | 默认值      |
| ---------------- | -------------------- | ---------------------------- | ----------- |
| modelValue       | 开关的当前值         | `boolean \| string \| number` | `false`     |
| checkedValue     | 选中时的值           | `boolean \| string \| number` | `true`      |
| unCheckedValue   | 未选中时的值         | `boolean \| string \| number` | `false`     |
| disabled         | 是否禁用             | `boolean`                    | `false`     |
| loading          | 是否为加载中状态     | `boolean`                    | `false`     |
| size             | 开关大小             | `'small' \| 'default'`       | `'default'` |
| autofocus        | 是否自动获取焦点     | `boolean`                    | `false`     |
| id               | 开关的唯一标识       | `string`                     | `undefined` |
| name             | 开关的名称           | `string`                     | `undefined` |
| checkedChildren  | 选中时显示的文字     | `string`                     | `''`        |
| unCheckedChildren| 未选中时显示的文字   | `string`                     | `''`        |

### 事件

| 事件名称          | 说明                 | 回调参数                                     |
| ----------------- | -------------------- | -------------------------------------------- |
| update:modelValue | 值变化时触发         | `(value: boolean \| string \| number) => void` |
| change            | 值变化时触发         | `(value: boolean \| string \| number, event: Event) => void` |
| click             | 点击开关时触发       | `(value: boolean \| string \| number, event: MouseEvent) => void` |

### 插槽

| 插槽名称          | 说明                 |
| ----------------- | -------------------- |
| checkedChildren   | 选中状态下的内容     |
| unCheckedChildren | 未选中状态下的内容   |

## 设计指南

### 何时使用

- 需要表示开/关状态时
- 需要立即生效的控件
- 在表单或设置中需要二元选择时
- 作为复选框的替代，提供更直观的状态表示

### 最佳实践

1. **清晰的状态区分**：
   - 使用高对比度颜色表示开/关状态
   - 确保开关状态在各种背景下都清晰可辨

2. **适当的上下文**：
   - 在开关旁提供明确的标签，说明其控制的功能
   - 对于重要设置，可考虑添加简短描述文本

3. **即时反馈**：
   - 确保状态变化时有明显的视觉反馈
   - 对于需要处理时间的操作，使用加载状态

4. **交互体验**：
   - 确保开关有足够大的可点击区域
   - 支持键盘操作，提高可访问性
   - 悬停状态提供适当的视觉提示

5. **响应式设计**：
   - 在小屏幕设备上确保开关易于点击
   - 文字标签应根据需要自适应

### 无障碍设计

- 确保颜色对比度符合WCAG标准
- 不仅依赖颜色传达状态信息，同时使用图标和文本
- 添加适当的ARIA属性，支持屏幕阅读器
- 支持键盘导航和操作

## 注意事项

- 在一组开关中保持样式的一致性
- 避免在同一界面使用过多不同样式的开关
- 开关通常用于即时生效的设置，如需延迟生效，考虑使用其他控件
- 对于需要确认的重要操作，可能需要额外的确认机制
- 禁用状态应明确表示，但不应完全隐藏

## 相关组件

- **Checkbox**：当用户需要进行多项选择或单个是/否选择时
- **Radio**：当用户需要从多个选项中选择一个时
- **Select**：当选项较多时，可考虑使用下拉选择框
