<template>
  <div class="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
    <h1 class="mb-8 text-3xl font-bold">Message 消息组件</h1>

    <!-- 暗色模式切换 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        暗色模式切换
      </h2>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <span class="text-sm">暗色模式</span>
          <div
            class="relative inline-block h-6 w-11 cursor-pointer rounded-full bg-gray-200 transition-colors duration-200 ease-in-out dark:bg-blue-600"
            @click="toggleDark()">
            <span :class="[
              'absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-in-out',
              isDark ? 'translate-x-5' : 'translate-x-0',
            ]"></span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button
            class="flex items-center space-x-2 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-blue-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            @click="toggleDark()">
            <span :class="[
              isDark
                ? 'icon-[material-symbols--wb-sunny-outline-rounded]'
                : 'icon-[material-symbols--dark-mode-outline-rounded]',
              'size-5',
            ]"></span>
            <span>{{ isDark ? "切换到亮色模式" : "切换到暗色模式" }}</span>
          </button>

          <button
            class="flex items-center space-x-2 rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-800 transition-all duration-300 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            @click="preferredDark ? toggleDark(false) : toggleDark(true)">
            <span class="icon-[material-symbols--settings-outline-rounded] size-5"></span>
            <span>系统偏好</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Basic message types -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">基础消息类型</h2>
      <div class="flex flex-wrap gap-4">
        <button 
          @click="showMessage('success')" 
          class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
          成功消息
        </button>
        <button 
          @click="showMessage('warning')" 
          class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md transition-colors">
          警告消息
        </button>
        <button 
          @click="showMessage('error')" 
          class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors">
          错误消息
        </button>
        <button 
          @click="showMessage('info')" 
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
          提示消息
        </button>
      </div>
    </section>

    <!-- Position options -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">位置选项</h2>
      <div class="flex flex-wrap gap-4">
        <button 
          @click="showPositionedMessage('top')" 
          class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors">
          顶部位置
        </button>
        <button 
          @click="showPositionedMessage('bottom')" 
          class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors">
          底部位置
        </button>
      </div>
    </section>

    <!-- Duration options -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">持续时间选项</h2>
      <div class="flex flex-wrap gap-4">
        <button 
          @click="showDurationMessage(1000)" 
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">
          1 秒
        </button>
        <button 
          @click="showDurationMessage(3000)" 
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">
          3 秒（默认）
        </button>
        <button 
          @click="showDurationMessage(5000)" 
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">
          5 秒
        </button>
      </div>
    </section>

    <!-- Closable messages -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">可关闭的消息</h2>
      <div class="flex flex-wrap gap-4">
        <button 
          @click="showClosableMessage(true)" 
          class="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors">
          可关闭消息
        </button>
        <button 
          @click="showClosableMessage(false)" 
          class="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors">
          不可关闭消息
        </button>
      </div>
    </section>

    <!-- Custom theme colors -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">自定义主题颜色</h2>
      <div class="flex flex-wrap gap-4">
        <button 
          @click="showThemedMessage(THEME_COLOR_MAP.primary)" 
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
          主要主题
        </button>
        <button 
          @click="showThemedMessage(THEME_COLOR_MAP.secondary)" 
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">
          次要主题
        </button>
        <button 
          @click="showThemedMessage(THEME_COLOR_MAP.warning)" 
          class="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors">
          强调主题
        </button>
      </div>
    </section>

    <!-- Advanced usage with callbacks -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">回调函数高级用法</h2>
      <div class="flex flex-wrap gap-4">
        <button 
          @click="showCallbackMessage" 
          class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors">
          显示带回调的消息
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { Message, ColorType,THEME_COLOR_MAP } from '../../components/Message';
import { useDark, useToggle } from "@vueuse/core";

// 使用 vueuse/core 的暗色模式钩子
const isDark = useDark({
  selector: "html",
  attribute: "class",
  valueDark: "dark",
  valueLight: "",
});
const toggleDark = useToggle(isDark);

// 检查系统颜色偏好
const preferredDark = ref(false);
if (window.matchMedia) {
  preferredDark.value = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
}

// Basic message demos
const showMessage = (type: 'success' | 'warning' | 'error' | 'info') => {
  const messages = {
    success: '操作成功完成！',
    warning: '请谨慎操作。',
    error: '处理请求时出错。',
    info: '这是一条信息提示。'
  };
  
  Message[type](messages[type]);
};

// Position demo
const showPositionedMessage = (position: 'top' | 'bottom') => {
  Message.info(`此消息显示在屏幕${position === 'top' ? '顶部' : '底部'}。`, { position });
};

// Duration demo
const showDurationMessage = (duration: number) => {
  Message.info(`此消息将在 ${duration/1000} 秒后消失。`, { duration });
};

// Closable demo
const showClosableMessage = (closable: boolean) => {
  const message = closable 
    ? '此消息可以手动关闭（点击我或X按钮）' 
    : '此消息不能手动关闭';
  
  Message.info(message, { closable });
};

// Custom theme demo
const showThemedMessage = (color: ColorType) => {
  Message.theme(`这是一个自定义的 ${color} 主题消息。`, color);
};

// Callback demo
const showCallbackMessage = () => {
  Message.success('操作完成！此消息关闭时将触发回调。', {
    closable: true,
    onClose: () => {
      setTimeout(() => {
        Message.info('前一条消息已关闭！');
      }, 500);
    }
  });
};

// 确保暗色模式正确应用
onMounted(() => {
  // 初始应用暗色模式
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark-mode");
  }

  // 自动检测并添加使用暗色模式的标记类
  document.documentElement.classList.add("using-dark-mode");
});

// 监听暗色模式变化
watch(isDark, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark-mode");
  }

  // 强制触发重新渲染
  setTimeout(() => {
    document.body.style.transition = "background-color 0.3s ease";
    if (newVal) {
      document.body.style.backgroundColor = "#1f2937";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, 0);
});

// 清理函数
onBeforeUnmount(() => {
  document.documentElement.classList.remove("using-dark-mode");
});
</script>

<style>
/* 确保暗模式生效的基本样式 */
:root {
  color-scheme: light;
}

:root.dark,
html.dark {
  color-scheme: dark;
  background-color: #1f2937;
  /* gray-800 */
}

body.dark-mode {
  background-color: #1f2937;
  /* gray-800 */
}

/* 确保所有标题和文本在暗色模式下显示为白色 */
.dark h1,
.dark h2,
.dark h3,
.dark h4,
.dark h5,
.dark h6,
.dark .text-gray-900 {
  color: white !important;
}

/* 暗色模式下其他文本颜色适配 */
.dark .text-gray-700 {
  color: #d1d5db !important;
  /* gray-300 */
}

.dark .text-gray-600 {
  color: #9ca3af !important;
  /* gray-400 */
}

/* 强制背景色适配暗色模式 */
.dark .bg-white {
  background-color: #1f2937 !important;
  /* gray-800 */
}

/* 强制边框颜色适配暗色模式 */
.dark .border-gray-200 {
  border-color: #374151 !important;
  /* gray-700 */
}

/* 系统暗色模式自动适配 */
@media (prefers-color-scheme: dark) {
  :root.using-dark-mode:not(.light) {
    background-color: #1f2937;
  }

  :root:not(.using-dark-mode) {
    color-scheme: dark;
  }
}
</style>