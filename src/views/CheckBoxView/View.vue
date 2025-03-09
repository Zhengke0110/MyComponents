<template>
  <div class="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
    <h1 class="mb-8 text-3xl font-bold">CheckBox 复选框组件</h1>

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

    <!-- 基础用法 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        基础用法
      </h2>
      <div class="space-y-4">
        <CheckBox id="basic-checkbox" v-model="checkState.basic" label="基础复选框" />
        <div class="text-sm text-gray-600 dark:text-gray-400">
          当前状态: {{ checkState.basic ? '已选中' : '未选中' }}
        </div>
      </div>
    </section>

    <!-- 语义化主题 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        语义化主题
      </h2>
      <div class="flex flex-wrap gap-8">
        <CheckBox id="theme-primary" v-model="checkState.primary" theme="primary" label="主要" />
        <CheckBox id="theme-secondary" v-model="checkState.secondary" theme="secondary" label="次要" />
        <CheckBox id="theme-success" v-model="checkState.success" theme="success" label="成功" />
        <CheckBox id="theme-warning" v-model="checkState.warning" theme="warning" label="警告" />
        <CheckBox id="theme-danger" v-model="checkState.danger" theme="danger" label="危险" />
        <CheckBox id="theme-info" v-model="checkState.info" theme="info" label="信息" />
      </div>
    </section>

    <!-- 颜色选择 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        颜色选择
      </h2>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            灰色系
          </h3>
          <div class="space-y-3">
            <CheckBox id="color-slate" v-model="checkState.slate" color="slate" label="石板灰" />
            <CheckBox id="color-gray" v-model="checkState.gray" color="gray" label="灰色" />
            <CheckBox id="color-zinc" v-model="checkState.zinc" color="zinc" label="锌灰" />
            <CheckBox id="color-neutral" v-model="checkState.neutral" color="neutral" label="中性灰" />
            <CheckBox id="color-stone" v-model="checkState.stone" color="stone" label="石灰" />
          </div>
        </div>

        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            暖色系
          </h3>
          <div class="space-y-3">
            <CheckBox id="color-red" v-model="checkState.red" color="red" label="红色" />
            <CheckBox id="color-orange" v-model="checkState.orange" color="orange" label="橙色" />
            <CheckBox id="color-amber" v-model="checkState.amber" color="amber" label="琥珀色" />
            <CheckBox id="color-yellow" v-model="checkState.yellow" color="yellow" label="黄色" />
          </div>
        </div>

        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            绿色系
          </h3>
          <div class="space-y-3">
            <CheckBox id="color-lime" v-model="checkState.lime" color="lime" label="青柠色" />
            <CheckBox id="color-green" v-model="checkState.green" color="green" label="绿色" />
            <CheckBox id="color-emerald" v-model="checkState.emerald" color="emerald" label="翠绿色" />
            <CheckBox id="color-teal" v-model="checkState.teal" color="teal" label="蓝绿色" />
          </div>
        </div>

        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            蓝色系
          </h3>
          <div class="space-y-3">
            <CheckBox id="color-cyan" v-model="checkState.cyan" color="cyan" label="青色" />
            <CheckBox id="color-sky" v-model="checkState.sky" color="sky" label="天蓝色" />
            <CheckBox id="color-blue" v-model="checkState.blue" color="blue" label="蓝色" />
            <CheckBox id="color-indigo" v-model="checkState.indigo" color="indigo" label="靛青色" />
          </div>
        </div>

        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            紫粉色系
          </h3>
          <div class="space-y-3">
            <CheckBox id="color-violet" v-model="checkState.violet" color="violet" label="紫罗兰" />
            <CheckBox id="color-purple" v-model="checkState.purple" color="purple" label="紫色" />
            <CheckBox id="color-fuchsia" v-model="checkState.fuchsia" color="fuchsia" label="品红色" />
            <CheckBox id="color-pink" v-model="checkState.pink" color="pink" label="粉色" />
            <CheckBox id="color-rose" v-model="checkState.rose" color="rose" label="玫瑰色" />
          </div>
        </div>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        不同尺寸
      </h2>
      <div class="space-y-4">
        <CheckBox id="size-sm" v-model="checkState.size" size="sm" theme="primary" label="小尺寸 (SM)" />
        <CheckBox id="size-md" v-model="checkState.size" size="md" theme="primary" label="中等尺寸 (MD)" />
        <CheckBox id="size-lg" v-model="checkState.size" size="lg" theme="primary" label="大尺寸 (LG)" />
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        禁用状态
      </h2>
      <div class="space-y-4">
        <CheckBox id="disabled-unchecked" v-model="checkState.disabledUnchecked" disabled label="禁用状态（未选中）" />
        <CheckBox id="disabled-checked" v-model="checkState.disabledChecked" disabled label="禁用状态（已选中）" />
      </div>
    </section>

    <!-- 不确定状态 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        不确定状态
      </h2>
      <div class="space-y-4">
        <div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          <CheckBox id="parent-checkbox" v-model="parentSelected" :indeterminate="indeterminate" theme="primary"
            label="全选" />
          <div class="mt-2 ml-6 space-y-2">
            <CheckBox v-for="(item, index) in items" :key="index" :id="`child-checkbox-${index}`" v-model="item.checked"
              :label="item.label" @change="updateParentState" />
          </div>
        </div>
      </div>
    </section>

    <!-- 带描述的复选框 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        带描述的复选框
      </h2>
      <div class="space-y-4">
        <CheckBox id="with-description" v-model="checkState.withDescription" theme="primary" label="接收通知"
          description="我们会在您的账户有重要更新时通过电子邮件通知您。" />
        <CheckBox id="with-description-2" v-model="checkState.withDescription2" theme="success" label="订阅每周简报"
          description="每周获取行业资讯和产品更新，保持最新动态。" />
      </div>
    </section>

    <!-- 布局方向 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        布局方向
      </h2>
      <div class="space-y-6">
        <div>
          <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">
            水平布局（默认）
          </h3>
          <CheckBox id="horizontal-layout" v-model="checkState.horizontal" theme="primary" label="水平布局" />
        </div>
        <div>
          <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">
            垂直布局
          </h3>
          <CheckBox id="vertical-layout" v-model="checkState.vertical" theme="primary" layout="vertical" label="垂直布局"
            description="标签在上，复选框在下" />
        </div>
      </div>
    </section>

    <!-- 内联复选框 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        内联复选框
      </h2>
      <div>
        <p class="mb-4 text-gray-700 dark:text-gray-300">
          使用 <code>inline</code> 属性可以让复选框在一行内显示：
        </p>
        <div class="flex flex-wrap gap-6">
          <CheckBox id="inline-1" v-model="checkState.inline1" inline theme="primary" label="选项1" />
          <CheckBox id="inline-2" v-model="checkState.inline2" inline theme="primary" label="选项2" />
          <CheckBox id="inline-3" v-model="checkState.inline3" inline theme="primary" label="选项3" />
        </div>
      </div>
    </section>

    <!-- 暗色模式适配 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        暗色模式适配
      </h2>
      <div class="space-y-6">
        <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            暗色模式下的复选框适配
          </h3>
          <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
            复选框组件自动适应亮/暗主题，在不同主题下提供一致的用户体验
          </p>
          <div class="space-y-4">
            <CheckBox id="dark-theme-1" v-model="checkState.darkTheme1" theme="primary" label="主要主题复选框" />
            <CheckBox id="dark-theme-2" v-model="checkState.darkTheme2" theme="success" label="成功主题复选框" />
            <CheckBox id="dark-theme-3" v-model="checkState.darkTheme3" theme="danger" label="危险主题复选框" />
          </div>
        </div>

        <div class="rounded-lg bg-gray-900 p-6">
          <h3 class="mb-3 text-lg font-medium text-white">深色背景上的复选框</h3>
          <p class="mb-3 text-sm text-gray-300">复选框在深色背景上的表现</p>
          <div class="space-y-4">
            <CheckBox id="dark-bg-1" v-model="checkState.darkBg1" theme="primary" darkMode label="主要主题复选框" />
            <CheckBox id="dark-bg-2" v-model="checkState.darkBg2" color="emerald" darkMode label="翠绿色复选框" />
            <CheckBox id="dark-bg-3" v-model="checkState.darkBg3" color="amber" darkMode label="琥珀色复选框" />
          </div>
        </div>
      </div>
    </section>

    <!-- 实际应用场景 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        实际应用场景
      </h2>

      <!-- 隐私设置场景 -->
      <div
        class="mb-6 max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          隐私设置
        </h3>
        <div class="space-y-6">
          <CheckBox id="privacy-1" v-model="privacySettings.receiveEmails" theme="primary" label="接收营销邮件"
            description="我们将向您发送产品更新和特别优惠信息。" />
          <CheckBox id="privacy-2" v-model="privacySettings.shareData" theme="primary" label="同意数据分享"
            description="允许我们与合作伙伴共享您的使用数据以改进服务质量。" />
          <CheckBox id="privacy-3" v-model="privacySettings.cookieTracking" theme="primary" label="允许Cookie跟踪"
            description="我们使用Cookie来个性化您的体验并收集使用数据。" />
          <div class="flex justify-end">
            <button
              class="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
              保存设置
            </button>
          </div>
        </div>
      </div>

      <!-- To-Do列表场景 -->
      <div
        class="mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          待办事项列表
        </h3>
        <div class="space-y-3">
          <div v-for="(task, index) in tasks" :key="index" class="flex items-center gap-3">
            <CheckBox :id="`todo-${index}`" v-model="task.completed" :theme="task.completed ? 'success' : 'primary'" />
            <span :class="{ 'line-through text-gray-400': task.completed }">
              {{ task.text }}
            </span>
          </div>
          <div class="flex items-center justify-between pt-2">
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {{tasks.filter(t => t.completed).length}}/{{ tasks.length }} 已完成
            </span>
            <button @click="resetTasks"
              class="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
              重置
            </button>
          </div>
        </div>
      </div>

      <!-- 多选表单场景 -->
      <div
        class="max-w-lg rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          兴趣爱好调查
        </h3>
        <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
          请选择您感兴趣的所有主题，以便我们为您推荐相关内容。
        </p>
        <div class="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <CheckBox v-for="(hobby, index) in hobbies" :key="index" :id="`hobby-${index}`" v-model="hobby.selected"
            color="indigo" :label="hobby.name" />
        </div>
        <div class="flex justify-end">
          <button
            class="rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700">
            提交选择
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch, onMounted, onBeforeUnmount } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { CheckBox } from "../../components/CheckBox";

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

// 复选框状态管理
const checkState = reactive({
  basic: true,
  primary: true,
  secondary: false,
  success: true,
  warning: false,
  danger: true,
  info: false,

  // 颜色系列
  slate: false,
  gray: true,
  zinc: false,
  neutral: true,
  stone: false,
  red: true,
  orange: false,
  amber: true,
  yellow: false,
  lime: true,
  green: false,
  emerald: true,
  teal: false,
  cyan: true,
  sky: false,
  blue: true,
  indigo: false,
  violet: true,
  purple: false,
  fuchsia: true,
  pink: false,
  rose: true,

  // 尺寸
  size: true,

  // 禁用状态
  disabledUnchecked: false,
  disabledChecked: true,

  // 描述
  withDescription: true,
  withDescription2: false,

  // 布局方向
  horizontal: true,
  vertical: true,

  // 内联
  inline1: true,
  inline2: false,
  inline3: true,

  // 暗色主题
  darkTheme1: true,
  darkTheme2: false,
  darkTheme3: true,

  // 深色背景
  darkBg1: true,
  darkBg2: false,
  darkBg3: true,
});

// 不确定状态示例
const items = reactive([
  { label: '选项1', checked: false },
  { label: '选项2', checked: false },
  { label: '选项3', checked: false },
]);
const parentSelected = ref(false);
const indeterminate = ref(false);

// 更新父复选框状态
const updateParentState = () => {
  const checkedCount = items.filter(item => item.checked).length;
  parentSelected.value = checkedCount === items.length;
  indeterminate.value = checkedCount > 0 && checkedCount < items.length;
};

// 监听父复选框变化
watch(parentSelected, (newVal) => {
  items.forEach(item => {
    item.checked = newVal;
  });
  indeterminate.value = false;
});

// 隐私设置示例
const privacySettings = reactive({
  receiveEmails: true,
  shareData: false,
  cookieTracking: true,
});

// To-Do 列表示例
const tasks = reactive([
  { text: '完成项目报告', completed: true },
  { text: '准备明天的会议', completed: false },
  { text: '更新网站内容', completed: false },
  { text: '回复重要邮件', completed: false },
  { text: '计划下周安排', completed: true },
]);

const resetTasks = () => {
  tasks.forEach(task => {
    task.completed = false;
  });
};

// 兴趣爱好示例
const hobbies = reactive([
  { name: '科技', selected: true },
  { name: '设计', selected: false },
  { name: '摄影', selected: true },
  { name: '旅行', selected: false },
  { name: '音乐', selected: true },
  { name: '影视', selected: false },
  { name: '阅读', selected: true },
  { name: '烹饪', selected: false },
]);

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

/* 代码样式 */
code {
  padding: 0.1rem 0.3rem;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  font-family: monospace;
  font-size: 0.875em;
}

.dark code {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>