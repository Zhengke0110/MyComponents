# Dialog 对话框组件

一个灵活且可定制的 Vue 3 对话框组件，支持 TypeScript。

## 特性

- 🎨 支持多种颜色主题的自定义外观
- 🔄 平滑的过渡动画效果
- 🌓 支持暗色模式
- 🎯 完整的 TypeScript 类型支持
- 📱 响应式设计

## 安装使用

```typescript
import Dialog from '@/components/Dialog';
```

## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| modelValue | `boolean` | 必填 | 控制对话框显示状态 |
| title | `string` | - | 对话框标题（可选） |
| cancelText | `string` | '取消' | 取消按钮文本 |
| confirmText | `string` | '确定' | 确认按钮文本 |
| cancelHandler | `() => void` | - | 取消按钮点击处理函数 |
| confirmHandler | `() => void` | - | 确认按钮点击处理函数 |
| close | `() => void` | - | 关闭回调函数 |
| showClose | `boolean` | true | 是否显示标题栏关闭按钮 |
| cancelButtonColor | `ColorType` | 'gray' | 取消按钮颜色主题 |
| confirmButtonColor | `ColorType` | 'red' | 确认按钮颜色主题 |

## 颜色类型

可用的按钮颜色主题：`'red' | 'blue' | 'green' | 'yellow' | 'zinc' | 'gray'`

## 基础用法

```vue
<template>
  <Dialog
    v-model="isVisible"
    title="基础对话框"
    :confirmHandler="handleConfirm"
    :cancelHandler="handleCancel"
  >
    这是一个基础对话框的内容。
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(false);

const handleConfirm = () => {
  console.log('已确认');
};

const handleCancel = () => {
  console.log('已取消');
};
</script>
```

## 进阶示例

### 自定义按钮

```vue
<Dialog
  v-model="isVisible"
  title="自定义对话框"
  cancelText="暂不需要"
  confirmText="确认执行"
  confirmButtonColor="green"
  cancelButtonColor="blue"
  :confirmHandler="handleConfirm"
  :cancelHandler="handleCancel"
>
  带有自定义按钮文本和颜色的对话框。
</Dialog>
```

### 复杂内容

```vue
<Dialog
  v-model="isVisible"
  title="复杂对话框"
  confirmButtonColor="red"
>
  <div class="space-y-4">
    <div class="bg-gray-100 p-4 rounded-md">
      <h3 class="font-bold">重要提示</h3>
      <p>这个对话框包含复杂的内容结构。</p>
    </div>
    <ul class="list-disc list-inside">
      <li>功能特点 1</li>
      <li>功能特点 2</li>
      <li>功能特点 3</li>
    </ul>
  </div>
</Dialog>
```

### 简约对话框

```vue
<Dialog
  v-model="isVisible"
  :confirmHandler="handleConfirm"
>
  没有标题和取消按钮的简单对话框。
</Dialog>
```

## 事件

组件会触发以下事件：

- `update:modelValue`：当对话框显示状态改变时触发
- `close`：当对话框关闭时触发（通过关闭按钮、背景点击或取消/确认按钮）

## 样式设置

组件使用 Tailwind CSS 类名，并默认支持暗色模式。包含以下自定义过渡效果：
- 背景遮罩的淡入淡出效果
- 对话框内容的上滑动画

## TypeScript 类型支持

```typescript
type ColorType = 'red' | 'blue' | 'green' | 'yellow' | 'zinc' | 'gray';

interface DialogProps {
  modelValue: boolean;
  title?: string;
  cancelText?: string;
  confirmText?: string;
  cancelHandler?: () => void;
  confirmHandler?: () => void;
  close?: () => void;
  showClose?: boolean;
  cancelButtonColor?: ColorType;
  confirmButtonColor?: ColorType;
}
```

## 最佳实践

1. 使用操作按钮时，建议同时提供确认和取消的处理函数
2. 选择适合您应用程序设计的颜色主题
3. 保持对话框内容简洁明确
4. 使用标题属性清晰指示对话框的用途
5. 考虑使用关闭回调进行必要的清理操作

## 可访问性

- 支持键盘事件（ESC 键关闭）
- 合理的焦点管理
- 支持屏幕阅读器的 ARIA 属性
