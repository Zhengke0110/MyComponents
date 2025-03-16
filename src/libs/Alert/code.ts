// 基础用法示例代码
export const basicAlertCode = `\`\`\`vue
<template>
  <Alert message="这是一个基础的信息提示框" />
</template>
\`\`\``;

// 不同类型示例代码
export const typeAlertCode = `\`\`\`vue
<template>
  <Alert type="info" message="这是一个信息提示框" />
  <Alert type="success" message="这是一个成功提示框" />
  <Alert type="warning" message="这是一个警告提示框" />
  <Alert type="danger" message="这是一个危险提示框" />
</template>
\`\`\``;

// 带标题的提示框示例代码
export const titleAlertCode = `\`\`\`vue
<template>
  <Alert type="success" title="成功" message="操作已成功完成" />
  <Alert type="warning" title="注意" message="此操作需要谨慎处理" />
</template>
\`\`\``;

// 带动画的提示框示例代码
export const animatedAlertCode = `\`\`\`vue
<template>
  <transition 
    enter-from-class="opacity-0 -translate-y-4"
    enter-active-class="transition-all duration-300 ease-out"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-to-class="opacity-0 translate-y-4">
    <Alert v-if="showAnimatedAlert" type="info" title="动画提示" message="这个提示框有淡入上滑的动画效果" />
  </transition>
</template>

<script setup>
import { ref } from 'vue';
const showAnimatedAlert = ref(true);
</script>
\`\`\``;

// 自定义颜色示例代码
export const colorAlertCode = `\`\`\`vue
<template>
  <Alert color="purple" message="这是紫色提示框" />
  <Alert color="teal" message="这是蓝绿色提示框" />
  <Alert color="pink" message="这是粉色提示框" />
</template>
\`\`\``;

// 可关闭与不可关闭示例代码
export const closableAlertCode = `\`\`\`vue
<template>
  <Alert message="这是可关闭的提示框（默认）" @close="handleClose" />
  <Alert message="这是不可关闭的提示框" :closable="false" />
</template>

<script setup>
const handleClose = () => {
  console.log('Alert closed');
};
</script>
\`\`\``;

// 无图标示例代码
export const noIconAlertCode = `\`\`\`vue
<template>
  <Alert message="这是没有图标的提示框" :showIcon="false" />
</template>
\`\`\``;

// 无边框示例代码
export const noBorderAlertCode = `\`\`\`vue
<template>
  <Alert message="这是没有边框的提示框" :bordered="false" />
</template>
\`\`\``;

// 自定义样式示例代码
export const customStyleAlertCode = `\`\`\`vue
<template>
  <Alert 
    message="这是应用了渐变背景的提示框" 
    customClass="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900" 
  />
  <Alert 
    message="这是应用了阴影效果的提示框" 
    customClass="shadow-lg border-indigo-300 dark:border-indigo-700" 
  />
</template>
\`\`\``;

// 悬浮效果示例代码
export const hoverAlertCode = `\`\`\`vue
<template>
  <div class="group cursor-pointer">
    <Alert 
      message="鼠标悬浮在此处查看效果" 
      customClass="transition-all duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg" 
    />
  </div>
</template>
\`\`\``;

// 自定义图标示例代码
export const customIconAlertCode = `\`\`\`vue
<template>
  <Alert type="info" message="这是自定义图标的提示框">
    <template #icon>
      <i class="icon-[mdi--star] size-5 text-amber-500 animate-spin-slow"></i>
    </template>
  </Alert>
</template>

<style>
@keyframes spin-slow {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
</style>
\`\`\``;

// 使用默认插槽示例代码
export const defaultSlotAlertCode = `\`\`\`vue
<template>
  <Alert type="info">
    <div>
      这是通过<span class="font-bold">默认插槽</span>定义的内容
      <a href="#" class="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
        点击这里
      </a>
      了解更多信息
    </div>
  </Alert>
</template>
\`\`\``;

// 使用额外内容插槽示例代码
export const extraSlotAlertCode = `\`\`\`vue
<template>
  <Alert type="warning" title="提示" message="您的账户即将到期">
    <template #extra>
      <div class="flex space-x-2">
        <button class="px-4 py-1 bg-amber-100 hover:bg-amber-200 dark:bg-amber-900 dark:hover:bg-amber-800 rounded text-amber-800 dark:text-amber-200 transition-colors">
          立即续费
        </button>
        <button class="px-4 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded transition-colors">
          了解详情
        </button>
      </div>
    </template>
  </Alert>
</template>
\`\`\``;

// 自动关闭示例代码
export const autoCloseAlertCode = `\`\`\`vue
<template>
  <transition 
    enter-from-class="opacity-0 translate-y-4"
    enter-active-class="transition-all duration-500 ease-out"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-to-class="opacity-0 translate-y-4">
    <Alert 
      v-if="autoCloseVisible" 
      type="success" 
      message="这个提示框将在3秒后自动关闭" 
      :duration="3000"
      @close="autoCloseVisible = false" 
    />
  </transition>
</template>

<script setup>
import { ref } from 'vue';
const autoCloseVisible = ref(true);
</script>
\`\`\``;

// 交互式动画示例代码
export const shakeAlertCode = `\`\`\`vue
<template>
  <div class="cursor-pointer" @click="shakeAlert">
    <Alert 
      ref="shakingAlert" 
      type="danger" 
      title="互动提示" 
      message="点击这个提示框会产生晃动效果！" 
      :closable="false" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const shakingAlert = ref(null);
let shakeTimer = null;

const shakeAlert = () => {
  if (shakingAlert.value && shakingAlert.value.$el) {
    // 先清除之前可能存在的定时器
    if (shakeTimer !== null) {
      clearTimeout(shakeTimer);
    }

    // 添加动画类名
    shakingAlert.value.$el.classList.add('animate-shake');

    // 设置新的定时器并保存引用
    shakeTimer = setTimeout(() => {
      shakingAlert.value.$el.classList.remove('animate-shake');
      shakeTimer = null;
    }, 500);
  }
};
</script>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
}

.animate-shake {
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
</style>
\`\`\``;

// 多重组合效果示例代码
export const notificationStackCode = `\`\`\`vue
<template>
  <!-- 控制按钮 -->
  <div class="mb-4 flex flex-wrap gap-2">
    <button 
      v-for="(type, index) in ['info', 'success', 'warning', 'danger']"
      :key="index" 
      @click="triggerNotification(type)"
      class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
      显示{{ typeLabels[type] }}通知
    </button>
  </div>
  
  <!-- 通知容器 -->
  <div class="notification-container fixed bottom-4 right-4 z-10 space-y-2 w-80">
    <transition-group 
      enter-from-class="opacity-0 translate-x-8"
      enter-active-class="transition-all duration-300 ease-out"
      enter-to-class="opacity-100 translate-x-0"
      leave-from-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-to-class="opacity-0 translate-x-8">
      <Alert 
        v-for="alert in notifications" 
        :key="alert.id" 
        :type="alert.type" 
        :message="alert.message"
        @close="removeNotification(alert.id)" 
      />
    </transition-group>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 类型标签映射
const typeLabels = {
  'info': '信息',
  'success': '成功',
  'warning': '警告',
  'danger': '危险'
};

// 通知栈
const notifications = ref([]);
let notificationId = 0;

const triggerNotification = (type) => {
  const messages = {
    'info': '这是一条信息通知',
    'success': '操作已成功完成',
    'warning': '请注意此操作的风险',
    'danger': '系统检测到错误'
  };

  // 添加新通知
  notifications.value.push({
    id: notificationId++,
    type,
    message: messages[type]
  });

  // 5秒后自动移除
  setTimeout(() => {
    removeNotification(notificationId - 1);
  }, 5000);
};

const removeNotification = (id) => {
  notifications.value = notifications.value.filter(alert => alert.id !== id);
};
</script>
\`\`\``;
