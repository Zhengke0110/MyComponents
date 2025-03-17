# Notification 通知提醒框

全局展示通知提醒信息。

## 何时使用

- 需要在页面角落显示通知消息时
- 需要显示系统主动推送的消息时
- 需要有较强提示性且不会打断用户操作的场景

## 代码演示

### 基础用法

```vue
<template>
  <div>
    <button @click="openNotification">显示通知</button>
  </div>
</template>

<script setup lang="ts">
import { Notification } from 'your-library-name';

const openNotification = () => {
  Notification.info({
    title: '通知标题',
    message: '这是一条通知消息',
    duration: 4500
  });
};
</script>
```

### 不同类型的通知

```vue
<template>
  <div>
    <button @click="showInfo">信息</button>
    <button @click="showSuccess">成功</button>
    <button @click="showWarning">警告</button>
    <button @click="showError">错误</button>
  </div>
</template>

<script setup lang="ts">
import { Notification } from 'your-library-name';

const showInfo = () => {
  Notification.info({
    title: '信息',
    message: '这是一条信息通知'
  });
};

const showSuccess = () => {
  Notification.success({
    title: '成功',
    message: '这是一条成功通知'
  });
};

const showWarning = () => {
  Notification.warning({
    title: '警告',
    message: '这是一条警告通知'
  });
};

const showError = () => {
  Notification.error({
    title: '错误',
    message: '这是一条错误通知'
  });
};
</script>
```

### 自定义持续时间

```vue
<script setup lang="ts">
import { Notification } from 'your-library-name';

// 自动关闭时间为 10 秒
Notification.info({
  title: '自定义持续时间',
  message: '这条通知将会在 10 秒后自动关闭',
  duration: 10000  // 单位为毫秒
});

// 不会自动关闭
Notification.info({
  title: '不会自动关闭',
  message: '这条通知不会自动关闭',
  duration: 0  // 设置为 0 则不自动关闭
});
</script>
```

### 带有操作的通知

```vue
<script setup lang="ts">
import { Notification } from 'your-library-name';

Notification.info({
  title: '带操作按钮的通知',
  message: '这条通知包含一个操作按钮',
  duration: 0,
  action: {
    text: '查看详情',
    onClick: () => {
      console.log('点击了操作按钮');
    }
  }
});
</script>
```

## API

### 全局方法

组件提供了以下全局方法：

- `Notification.info(config)`
- `Notification.success(config)`
- `Notification.warning(config)`
- `Notification.error(config)`
- `Notification.open(config)`
- `Notification.destroyAll()`
- `Notification.remove(id: string)`

### 配置项

通过 `Notification.config(options)` 可以进行全局配置：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxCount | 最大显示数量 | number | 10 |

### 通知项配置

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 通知标题 | string | - |
| message | 通知内容 | string | - |
| type | 通知类型 | 'info' \| 'success' \| 'warning' \| 'error' | - |
| duration | 自动关闭的延时，单位毫秒，设为 0 则不自动关闭 | number | 4500 |
| closable | 是否显示关闭按钮 | boolean | true |
| onClose | 关闭时的回调函数 | function | - |
| action | 操作按钮配置 | { text: string, onClick: () => void } | - |

### 返回值

调用 `Notification` 方法会返回一个唯一的 ID，可以用于手动关闭该通知：

```typescript
const notificationId = Notification.info({ title: '通知', message: '消息内容' });

// 关闭指定通知
setTimeout(() => {
  Notification.remove(notificationId);
}, 2000);
```

## 在 Vue 应用中注册

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import { Notification } from 'libs/Notification';

const app = createApp(App);
app.use(Notification); // 注册组件
app.mount('#app');
```

## 在组件中使用

注册后，可以通过全局的 `this.$notification` 访问：

```vue
<script setup>
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

function showNotification() {
  proxy.$notification.info({
    title: '通知',
    message: '通过全局实例方法调用'
  });
}
</script>
```

## 最佳实践

### 通知内容简明扼要

通知内容应简洁明了，避免过长的文本。如果需要展示更多内容，可以通过操作按钮引导用户跳转到详情页面。

### 合理使用通知类型

根据消息的重要性和性质选择合适的通知类型：
- `info`：一般信息提示
- `success`：成功操作后的反馈
- `warning`：警告信息，需要用户关注
- `error`：错误信息，操作失败的反馈

### 控制通知数量和频率

避免同时显示过多通知或频繁弹出通知，以免干扰用户体验。可以通过 `maxCount` 配置项控制最大显示数量。

### 适当设置自动关闭时间

对于重要的消息可以设置较长的显示时间或禁用自动关闭，而对于一般信息则可以使用默认的关闭时间。
