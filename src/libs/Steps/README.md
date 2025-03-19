# Steps 步骤条组件

`Steps` 组件用于引导用户按照流程完成任务的导航条，可以展示当前进展及状态。

## 组件特性

- 支持水平和垂直两种布局方向
- 提供多种尺寸选择（默认和小尺寸）
- 支持各种自定义状态（等待、进行中、完成、错误）
- 可添加自定义图标增强视觉识别性
- 支持点状步骤条，节省空间
- 响应式设计，自动适应不同屏幕尺寸
- 良好的暗色模式支持

## 基础用法

```vue
<template>
  <Steps v-model:current="current" :items="steps" />

  <div class="mt-6 flex justify-end gap-4">
    <button @click="current--" :disabled="current <= 0">上一步</button>
    <button @click="current++" :disabled="current >= steps.length - 1">
      下一步
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Steps } from './index'
import type { StepItem } from './Steps'

const current = ref(0)
const steps: StepItem[] = [
  { title: '第一步', description: '描述文本' },
  { title: '第二步', description: '描述文本' },
  { title: '第三步', description: '描述文本' },
  { title: '完成', description: '描述文本' }
]
</script>
```

## 使用自定义图标

```vue
<template>
  <Steps :items="stepsWithIcons" />
</template>

<script setup>
import { Steps } from "./index";

const stepsWithIcons = [
  { title: "登录", icon: "👤", status: "finish" },
  { title: "验证", icon: "🔑", status: "process" },
  { title: "付款", icon: "💰", status: "wait" },
  { title: "完成", icon: "✨", status: "wait" },
];
</script>
```

## 垂直步骤条

```vue
<template>
  <Steps :items="steps" direction="vertical" />
</template>
```

## 点状步骤条

```vue
<template>
  <Steps :items="steps" progressDot />
</template>
```

## 小尺寸步骤条

```vue
<template>
  <Steps :items="steps" size="small" />
</template>
```

## 错误状态示例

```vue
<template>
  <Steps :items="errorSteps" />
</template>

<script setup>
import { Steps } from "./index";

const errorSteps = [
  { title: "已完成", status: "finish" },
  { title: "出错了", status: "error" },
  { title: "等待中", status: "wait" },
];
</script>
```

## 带进度条示例

```vue
<template>
  <Steps v-model:current="progressCurrent" :items="progressSteps" />
  <div class="mt-4 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
    <div
      class="h-2 rounded-full bg-blue-500 transition-all duration-500"
      :style="{ width: `${(progressCurrent + 1) * 25}%` }"
    ></div>
  </div>
  <div class="mt-4 flex justify-between">
    <span>总进度</span>
    <span>{{ (progressCurrent + 1) * 25 }}%</span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Steps } from "./index";

const progressCurrent = ref(0);
const progressSteps = [
  { title: "第一阶段", description: "完成度25%" },
  { title: "第二阶段", description: "完成度50%" },
  { title: "第三阶段", description: "完成度75%" },
  { title: "最终阶段", description: "完成度100%" },
];
</script>
```

## 动态步骤

```vue
<template>
  <Steps v-model:current="dynamicCurrent" :items="dynamicSteps" />
  <div class="mt-4 flex gap-4">
    <button @click="addStep">添加步骤</button>
    <button @click="removeStep" :disabled="dynamicSteps.length <= 1">
      删除步骤
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Steps } from './index'
import type { StepItem } from './Steps'

const dynamicCurrent = ref(0)
const dynamicSteps = ref<StepItem[]>([
  { title: '第1步', description: '这是第一步' }
])

const addStep = () => {
  const newStep = {
    title: `第${dynamicSteps.value.length + 1}步`,
    description: `这是第${dynamicSteps.value.length + 1}步`
  }
  dynamicSteps.value.push(newStep)
}

const removeStep = () => {
  if (dynamicSteps.value.length > 1) {
    dynamicSteps.value.pop()
    if (dynamicCurrent.value >= dynamicSteps.value.length) {
      dynamicCurrent.value = dynamicSteps.value.length - 1
    }
  }
}
</script>
```

## API

### Props

| 属性           | 说明                        | 类型                                         | 默认值         |
| -------------- | --------------------------- | -------------------------------------------- | -------------- |
| current        | 指定当前步骤，从 0 开始记数 | `number`                                     | `0`            |
| direction      | 指定步骤条方向              | `'horizontal' \| 'vertical'`                 | `'horizontal'` |
| items          | 步骤配置项数组              | `StepItem[]`                                 | `[]`           |
| initial        | 起始序号，从 0 开始记数     | `number`                                     | `0`            |
| labelPlacement | 标签放置位置                | `string`                                     | `'horizontal'` |
| size           | 指定大小                    | `'default' \| 'small'`                       | `'default'`    |
| status         | 指定当前步骤的状态          | `'wait' \| 'process' \| 'finish' \| 'error'` | `'process'`    |
| progressDot    | 点状步骤条                  | `boolean`                                    | `false`        |
| responsive     | 是否支持响应式              | `boolean`                                    | `true`         |

### StepItem 类型

```typescript
interface StepItem {
  title: string;               // 步骤标题
  description?: string;        // 步骤的详细描述
  status?: StepStatus;         // 步骤的状态
  icon?: string;               // 步骤图标
  disabled?: boolean;          // 禁用点击
  subTitle?: string;           // 子标题
}

type StepStatus = 'wait' | 'process' | 'finish' | 'error';
```

### 事件

| 事件名称       | 说明                                          | 回调参数                    |
| -------------- | --------------------------------------------- | --------------------------- |
| change         | 点击切换步骤时触发                            | `(current: number) => void` |
| update:current | 当前步骤改变时触发，支持 v-model:current 绑定 | `(current: number) => void` |

## 设计指南

### 何时使用

- 当任务需要分步骤完成时，使用步骤条引导用户。
- 当需要展示任务进度和完成状态时。
- 适用于注册流程、表单填写、结算流程等多步骤操作。
- 当需要清晰展示用户当前所处流程阶段时。

### 最佳实践

1. **步骤数量控制**：步骤数量建议控制在2-5个，过多步骤可能导致用户疲惫。

2. **标题与描述**：

   - 使用简短、明确的标题
   - 必要时添加描述文本提供更多上下文信息
   - 描述文本应简明扼要，避免冗长

3. **状态明确**：

   - 已完成步骤应明确标识
   - 当前步骤应突出显示
   - 错误状态需要明显提示

4. **交互设计**：

   - 提供清晰的导航控制（前进/后退按钮）
   - 根据业务需求，决定是否允许跳步
   - 错误状态发生时，给予明确的修正指导

5. **响应式考量**：
   - 在小屏设备上，考虑使用点状步骤条节省空间
   - 垂直方向适合展示更详细的步骤信息

### 无障碍设计

- 确保颜色对比度符合WCAG标准
- 不仅依赖颜色传达状态信息，同时使用图标和文本
- 添加适当的ARIA属性，使屏幕阅读器能正确解读步骤信息
- 支持键盘导航

## 注意事项

- 步骤过多时，考虑拆分或使用其他导航方式
- 在移动设备上，水平方向可能会导致步骤显示不全，可考虑使用垂直方向或点状步骤条
- 动态添加/删除步骤时需要注意当前步骤索引的有效性
- 错误状态的处理需结合具体业务场景，提供明确的错误提示和解决方案

## 相关组件

- **Progress**：用于展示操作的进度
- **Pagination**：当步骤较多时，可考虑使用分页组件
- **Form**：通常与表单组件结合使用，实现分步表单
- **Result**：可在流程最后一步展示结果组件
