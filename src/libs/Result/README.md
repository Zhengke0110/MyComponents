# Result 结果组件

一个用于反馈操作结果的组件，当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 功能特性

- 支持多种状态：成功、错误、信息、警告、404、403、500
- 自定义标题和副标题
- 提供额外操作区域
- 支持自定义图标
- 完全兼容深色模式
- 内置动画效果

## 安装使用

```javascript
import { Result } from 'libs/Result';
```

## 基础用法

最基本的成功结果页：

```vue
<template>
  <Result 
    status="success"
    title="操作成功"
    subTitle="请等待系统跳转"
  >
    <template #extra>
      <button class="px-4 py-2 bg-green-500 text-white rounded">返回首页</button>
    </template>
  </Result>
</template>
```

## 不同状态示例

### 成功状态

```vue
<Result status="success" title="操作成功" subTitle="请等待系统跳转">
  <template #extra>
    <button class="px-4 py-2 bg-green-500 text-white rounded">返回首页</button>
  </template>
</Result>
```

### 错误状态

```vue
<Result status="error" title="提交失败" subTitle="请检查网络连接后重试">
  <template #extra>
    <button class="px-4 py-2 bg-red-500 text-white rounded">重新提交</button>
  </template>
</Result>
```

### 信息状态

```vue
<Result status="info" title="提示信息" subTitle="这是一条重要的提示信息">
  <template #extra>
    <button class="px-4 py-2 bg-blue-500 text-white rounded">了解详情</button>
  </template>
</Result>
```

### 警告状态

```vue
<Result status="warning" title="警告" subTitle="您的操作可能导致数据丢失">
  <template #extra>
    <div class="flex space-x-2">
      <button class="px-4 py-2 bg-yellow-500 text-white rounded">继续操作</button>
      <button class="px-4 py-2 border border-gray-300 rounded">取消</button>
    </div>
  </template>
</Result>
```

### 404 状态

```vue
<Result status="404" title="页面不存在" subTitle="您访问的页面不存在">
  <template #extra>
    <button class="px-4 py-2 bg-gray-500 text-white rounded">返回首页</button>
  </template>
</Result>
```

### 403 状态

```vue
<Result status="403" title="无权限" subTitle="您没有权限访问此页面">
  <template #extra>
    <button class="px-4 py-2 bg-gray-500 text-white rounded">申请权限</button>
  </template>
</Result>
```

### 500 状态

```vue
<Result status="500" title="服务器错误" subTitle="抱歉，服务器出现了问题">
  <template #extra>
    <button class="px-4 py-2 bg-gray-500 text-white rounded">刷新页面</button>
  </template>
</Result>
```

## 自定义内容

Result 组件支持自定义内容，包括自定义图标、标题、副标题和额外操作区域：

```vue
<Result status="success" title="任务完成">
  <!-- 自定义图标 -->
  <template #icon>
    <div class="text-green-500 dark:text-green-400 animate-bounce-subtle">
      <svg class="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
        <!-- SVG路径 -->
      </svg>
    </div>
  </template>
  
  <!-- 自定义副标题 -->
  <template #subTitle>
    <div class="flex flex-col items-center">
      <p class="text-gray-600 dark:text-gray-300">
        数据处理已完成，共处理了 <span class="text-green-500 font-bold animate-pulse">2,584</span> 条记录
      </p>
      <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2 dark:bg-gray-700">
        <div class="bg-green-500 h-2.5 rounded-full" style="width: 100%"></div>
      </div>
    </div>
  </template>
  
  <!-- 自定义额外操作 -->
  <template #extra>
    <div class="flex flex-col space-y-2">
      <button class="px-4 py-2 bg-green-500 text-white rounded">下载报告</button>
      <button class="px-4 py-2 border border-gray-300 rounded">查看详细日志</button>
    </div>
  </template>
</Result>
```

## 复杂交互示例

您可以在 Result 组件中添加更复杂的交互内容：

```vue
<Result status="info" title="订单提交成功">
  <template #subTitle>
    <div class="flex flex-col items-center w-full max-w-md">
      <div class="w-full flex justify-between items-center mb-2">
        <span>订单号:</span>
        <span class="font-mono font-medium">ORD20230512-8956</span>
      </div>
      <div class="w-full flex justify-between items-center mb-2">
        <span>支付金额:</span>
        <span class="font-medium text-blue-600">¥ 2,598.00</span>
      </div>
      <!-- 订单进度条 -->
      <div class="w-full bg-gray-200 h-1 my-4 relative">
        <!-- 进度点 -->
      </div>
      <div class="w-full flex justify-between text-sm">
        <span>提交订单</span>
        <span>确认支付</span>
        <span>备货中</span>
        <span>已发货</span>
      </div>
    </div>
  </template>
</Result>
```

## API 文档

### Props 属性

| 参数      | 说明                         | 类型                                                            | 默认值  |
| --------- | ---------------------------- | --------------------------------------------------------------- | ------- |
| status    | 结果的状态，决定图标和颜色   | 'success' \| 'error' \| 'info' \| 'warning' \| '404' \| '403' \| '500' | 'info'  |
| title     | 标题文本                     | string                                                          | ''      |
| subTitle  | 副标题文本                   | string                                                          | ''      |

### Slots 插槽

| 名称      | 说明           |
| --------- | -------------- |
| default   | 默认内容，一般不使用 |
| icon      | 自定义图标     |
| title     | 自定义标题内容 |
| subTitle  | 自定义副标题内容 |
| extra     | 操作区域       |

## 样式定制

Result 组件支持通过 Tailwind CSS 类进行样式定制，并内置深色模式支持：

- 使用 `dark:` 前缀的类名适配深色模式
- 每种状态都有对应的颜色主题（如成功为绿色、错误为红色等）
- 组件内置过渡动画，包括淡入、缩放等效果

## 无障碍性

Result 组件遵循以下无障碍性原则：

- 使用语义化的色彩来表示不同状态，增强可识别性
- 提供清晰的文本说明，确保屏幕阅读器可以正确解读
- 确保操作区域的按钮有足够大的点击区域

## 小结与最佳实践

### 使用场景

- 当需要向用户反馈一系列操作的处理结果时
- 当操作流程结束后需要展示结果和建议操作时
- 当需要展示系统异常或提示信息时

### 设计原则

- **明确性**：结果状态应当明确、直观，用户能够一目了然
- **引导性**：提供清晰的后续操作指引，减少用户犹豫
- **简洁性**：信息展示应当简洁有效，避免冗余

### 最佳实践

- 根据不同场景选择合适的状态类型，如成功操作用 `success`，错误提示用 `error` 等
- 提供有意义的标题和副标题，简明扼要地描述结果和原因
- 在 `extra` 插槽中提供明确的后续操作按钮，引导用户继续
- 对于错误状态，应当提供错误原因和可能的解决方案
- 对于状态码页面（如 404、403、500），应当提供返回首页或其他导航选项

## 常见问题

### 如何根据异步操作结果动态显示不同状态？

```vue
<template>
  <Result 
    :status="requestStatus"
    :title="statusTitle"
    :subTitle="statusSubTitle"
  >
    <template #extra>
      <button @click="handleRetry" class="px-4 py-2 rounded text-white" 
        :class="requestStatus === 'error' ? 'bg-red-500' : 'bg-green-500'">
        {{ requestStatus === 'error' ? '重试' : '确定' }}
      </button>
    </template>
  </Result>
</template>

<script setup>
import { ref, computed } from 'vue';

const requestStatus = ref('info');  // 'success', 'error', 'info', 'warning'
const responseData = ref(null);

const statusTitle = computed(() => {
  switch(requestStatus.value) {
    case 'success': return '操作成功';
    case 'error': return '操作失败';
    case 'warning': return '操作警告';
    default: return '处理中';
  }
});

const statusSubTitle = computed(() => {
  switch(requestStatus.value) {
    case 'success': return '您的操作已完成';
    case 'error': return '请检查网络连接后重试';
    case 'warning': return '操作可能存在风险';
    default: return '正在处理您的请求...';
  }
});

const fetchData = async () => {
  requestStatus.value = 'info';
  try {
    // 异步请求
    const response = await api.fetchSomething();
    responseData.value = response.data;
    requestStatus.value = 'success';
  } catch (error) {
    requestStatus.value = 'error';
  }
};

const handleRetry = () => {
  fetchData();
};

// 初始加载
fetchData();
</script>
```

### 如何在 TypeScript 中获得完整的类型支持？

```typescript
import { Result } from 'your-component-library';
import { defineComponent, ref } from 'vue';

type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500';

export default defineComponent({
  components: { Result },
  setup() {
    const status = ref<ResultStatus>('success');
    
    return { status };
  }
});
```
