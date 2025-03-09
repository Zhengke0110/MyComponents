<template>
  <div class="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
    <h1 class="mb-8 text-3xl font-bold">Button 按钮组件</h1>

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

    <!-- 展示不同主题下按钮 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        亮色/暗色主题下的按钮
      </h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <!-- 亮色模式按钮展示 -->
        <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 class="mb-4 text-lg font-medium text-gray-900">亮色模式按钮</h3>
          <div class="flex flex-wrap gap-3">
            <!-- ...existing button components for light mode... -->
          </div>
        </div>

        <!-- 暗色模式按钮展示 -->
        <div class="rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm">
          <h3 class="mb-4 text-lg font-medium text-white">暗色模式按钮</h3>
          <div class="flex flex-wrap gap-3">
            <!-- ...existing button components for dark mode... -->
          </div>
        </div>
      </div>
    </section>

    <!-- 基础用法 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        基础用法
      </h2>
      <div class="flex flex-wrap gap-4">
        <Button>默认按钮</Button>
        <Button color="red">红色按钮</Button>
        <Button color="green">绿色按钮</Button>
        <Button color="yellow">黄色按钮</Button>
      </div>
    </section>

    <!-- 语义化主题 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        语义化主题
      </h2>
      <div class="flex flex-wrap gap-4">
        <Button theme="primary">主要按钮</Button>
        <Button theme="secondary">次要按钮</Button>
        <Button theme="success">成功按钮</Button>
        <Button theme="warning">警告按钮</Button>
        <Button theme="danger">危险按钮</Button>
        <Button theme="info">信息按钮</Button>
      </div>
    </section>

    <!-- 按钮变体 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        按钮变体
      </h2>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        实心按钮 (solid)
      </h3>
      <div class="mb-4 flex flex-wrap gap-4">
        <Button variant="solid" theme="primary">主要</Button>
        <Button variant="solid" theme="secondary">次要</Button>
        <Button variant="solid" theme="success">成功</Button>
        <Button variant="solid" theme="warning">警告</Button>
        <Button variant="solid" theme="danger">危险</Button>
        <Button variant="solid" theme="info">信息</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        柔和按钮 (soft)
      </h3>
      <div class="mb-4 flex flex-wrap gap-4">
        <Button variant="soft" theme="primary">主要</Button>
        <Button variant="soft" theme="secondary">次要</Button>
        <Button variant="soft" theme="success">成功</Button>
        <Button variant="soft" theme="warning">警告</Button>
        <Button variant="soft" theme="danger">危险</Button>
        <Button variant="soft" theme="info">信息</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        描边按钮 (outline)
      </h3>
      <div class="mb-4 flex flex-wrap gap-4">
        <Button variant="outline" theme="primary">主要</Button>
        <Button variant="outline" theme="secondary">次要</Button>
        <Button variant="outline" theme="success">成功</Button>
        <Button variant="outline" theme="warning">警告</Button>
        <Button variant="outline" theme="danger">危险</Button>
        <Button variant="outline" theme="info">信息</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        幽灵按钮 (ghost)
      </h3>
      <div class="flex flex-wrap gap-4">
        <Button variant="ghost" theme="primary">主要</Button>
        <Button variant="ghost" theme="secondary">次要</Button>
        <Button variant="ghost" theme="success">成功</Button>
        <Button variant="ghost" theme="warning">警告</Button>
        <Button variant="ghost" theme="danger">危险</Button>
        <Button variant="ghost" theme="info">信息</Button>
      </div>
    </section>

    <!-- 按钮尺寸 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        按钮尺寸
      </h2>
      <div class="flex flex-wrap items-center gap-4">
        <Button size="xs" theme="primary">超小</Button>
        <Button size="sm" theme="primary">小型</Button>
        <Button size="md" theme="primary">中等</Button>
        <Button size="lg" theme="primary">大型</Button>
        <Button size="xl" theme="primary">超大</Button>
      </div>
    </section>

    <!-- 带图标的按钮 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        带图标的按钮
      </h2>
      <div class="mb-4 flex flex-wrap items-center gap-4">
        <Button theme="primary" icon="icon-[carbon--add]">添加</Button>
        <Button theme="success" icon="icon-[carbon--checkmark]">确认</Button>
        <Button theme="danger" icon="icon-[carbon--trash-can]">删除</Button>
        <Button theme="warning" icon="icon-[carbon--warning]">警告</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        仅图标按钮
      </h3>
      <div class="flex flex-wrap items-center gap-4">
        <Button theme="primary" icon="icon-[carbon--add]" />
        <Button theme="success" icon="icon-[carbon--checkmark]" />
        <Button theme="danger" icon="icon-[carbon--trash-can]" />
        <Button theme="warning" icon="icon-[carbon--warning]" />
      </div>
    </section>

    <!-- 状态按钮 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        状态按钮
      </h2>
      <div class="flex flex-wrap items-center gap-4">
        <Button theme="primary">正常</Button>
        <Button theme="primary" disabled>禁用</Button>
        <Button theme="primary" loading>加载中</Button>
      </div>
    </section>

    <!-- 块级按钮 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        块级按钮
      </h2>
      <div class="max-w-md space-y-4">
        <Button theme="primary" block>块级按钮</Button>
        <Button theme="success" block>块级按钮</Button>
        <Button theme="warning" block>块级按钮</Button>
      </div>
    </section>

    <!-- 暗色主题展示 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        暗色模式适配
      </h2>

      <div class="mb-6 rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
          暗色模式下的按钮样式
        </h3>
        <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
          按钮组件自动适应当前页面的亮暗设置，提供了最佳的视觉体验
        </p>

        <div class="space-y-6">
          <div>
            <h4 class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              实心按钮
            </h4>
            <div class="flex flex-wrap gap-3">
              <Button variant="solid" theme="primary">主要</Button>
              <Button variant="solid" theme="success">成功</Button>
              <Button variant="solid" theme="warning">警告</Button>
              <Button variant="solid" theme="danger">危险</Button>
            </div>
          </div>

          <div>
            <h4 class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              柔和按钮
            </h4>
            <div class="flex flex-wrap gap-3">
              <Button variant="soft" theme="primary">主要</Button>
              <Button variant="soft" theme="success">成功</Button>
              <Button variant="soft" theme="warning">警告</Button>
              <Button variant="soft" theme="danger">危险</Button>
            </div>
          </div>

          <div>
            <h4 class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              描边按钮
            </h4>
            <div class="flex flex-wrap gap-3">
              <Button variant="outline" theme="primary">主要</Button>
              <Button variant="outline" theme="success">成功</Button>
              <Button variant="outline" theme="warning">警告</Button>
              <Button variant="outline" theme="danger">危险</Button>
            </div>
          </div>

          <div>
            <h4 class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              幽灵按钮
            </h4>
            <div class="flex flex-wrap gap-3">
              <Button variant="ghost" theme="primary">主要</Button>
              <Button variant="ghost" theme="success">成功</Button>
              <Button variant="ghost" theme="warning">警告</Button>
              <Button variant="ghost" theme="danger">危险</Button>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-6 rounded-lg bg-gray-900 p-6">
        <h3 class="mb-3 text-lg font-medium text-white">深色背景上的按钮</h3>
        <p class="mb-3 text-sm text-gray-300">不同变体在深色背景上的表现</p>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div class="space-y-2">
            <h4 class="mb-2 text-sm font-medium text-gray-300">实心 & 柔和</h4>
            <div class="flex flex-wrap gap-3">
              <Button variant="solid" theme="primary">实心</Button>
              <Button variant="soft" theme="success">柔和</Button>
              <Button variant="solid" color="purple">紫色</Button>
              <Button variant="soft" color="amber">琥珀色</Button>
            </div>
          </div>

          <div class="space-y-2">
            <h4 class="mb-2 text-sm font-medium text-gray-300">描边 & 幽灵</h4>
            <div class="flex flex-wrap gap-3">
              <Button variant="outline" theme="warning">描边</Button>
              <Button variant="ghost" theme="danger">幽灵</Button>
              <Button variant="outline" color="rose">玫瑰色</Button>
              <Button variant="ghost" color="emerald">翠绿色</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ColorType 所有颜色展示 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        所有颜色按钮
      </h2>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        灰色系
      </h3>
      <div class="mb-6 flex flex-wrap gap-3">
        <Button color="slate">石板灰</Button>
        <Button color="gray">灰色</Button>
        <Button color="zinc">锌灰</Button>
        <Button color="neutral">中性灰</Button>
        <Button color="stone">石灰</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        暖色系
      </h3>
      <div class="mb-6 flex flex-wrap gap-3">
        <Button color="red">红色</Button>
        <Button color="orange">橙色</Button>
        <Button color="amber">琥珀色</Button>
        <Button color="yellow">黄色</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        绿色系
      </h3>
      <div class="mb-6 flex flex-wrap gap-3">
        <Button color="lime">青柠色</Button>
        <Button color="green">绿色</Button>
        <Button color="emerald">翠绿色</Button>
        <Button color="teal">蓝绿色</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        蓝色系
      </h3>
      <div class="mb-6 flex flex-wrap gap-3">
        <Button color="cyan">青色</Button>
        <Button color="sky">天蓝色</Button>
        <Button color="blue">蓝色</Button>
        <Button color="indigo">靛青色</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        紫粉色系
      </h3>
      <div class="mb-6 flex flex-wrap gap-3">
        <Button color="violet">紫罗兰</Button>
        <Button color="purple">紫色</Button>
        <Button color="fuchsia">品红色</Button>
        <Button color="pink">粉色</Button>
        <Button color="rose">玫瑰色</Button>
      </div>

      <div class="mt-8 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          不同变体的颜色展示
        </h3>

        <div class="space-y-6">
          <div v-for="(variant, idx) in [
            'solid',
            'soft',
            'outline',
            'ghost',
          ] as const" :key="idx">
            <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">
              {{ variantNames[variant] }}
            </h4>
            <div class="flex flex-wrap gap-3">
              <Button :variant="variant" color="blue">蓝色</Button>
              <Button :variant="variant" color="emerald">翠绿色</Button>
              <Button :variant="variant" color="amber">琥珀色</Button>
              <Button :variant="variant" color="rose">玫瑰色</Button>
              <Button :variant="variant" color="purple">紫色</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实际应用场景 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        实际应用场景
      </h2>

      <!-- 表单场景 -->
      <div
        class="mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          表单提交
        </h3>
        <div class="space-y-4">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">用户名</label>
            <input type="text"
              class="w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">密码</label>
            <input type="password"
              class="w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          </div>
          <div class="flex items-center justify-end space-x-3">
            <Button variant="ghost" theme="secondary">取消</Button>
            <Button variant="solid" theme="primary">登录</Button>
          </div>
        </div>
      </div>

      <!-- 对话框场景 -->
      <div
        class="mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
          确认操作
        </h3>
        <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
          确定要删除此项目吗？此操作无法撤销。
        </p>
        <div class="flex items-center justify-end space-x-3">
          <Button variant="ghost" theme="secondary">取消</Button>
          <Button variant="solid" theme="danger" icon="icon-[carbon--trash-can]">删除</Button>
        </div>
      </div>

      <!-- 工具栏场景 -->
      <div class="max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
          编辑器工具栏
        </h3>
        <div class="flex flex-wrap gap-2">
          <Button variant="ghost" icon="icon-[material-symbols--format-bold-rounded]" />
          <Button variant="ghost" icon="icon-[material-symbols--format-italic-rounded]" />
          <Button variant="ghost" icon="icon-[material-symbols--format-underlined-rounded]" />
          <Button variant="ghost" icon="icon-[material-symbols--strikethrough-s-rounded]" />
          <div class="mx-2 h-8 border-l border-gray-300 dark:border-gray-600"></div>
          <Button variant="ghost" icon="icon-[material-symbols--align-horizontal-left-rounded]" />
          <Button variant="ghost" icon="icon-[material-symbols--align-horizontal-center-rounded]" />
          <Button variant="ghost" icon="icon-[material-symbols--align-horizontal-right-rounded]" />
          <div class="mx-2 h-8 border-l border-gray-300 dark:border-gray-600"></div>
          <Button variant="soft" color="indigo" icon="icon-[carbon--save]">保存</Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { Button } from "../../components/Button";
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

// 变体名称映射
const variantNames = {
  solid: "实心按钮 (solid)",
  soft: "柔和按钮 (soft)",
  outline: "描边按钮 (outline)",
  ghost: "幽灵按钮 (ghost)",
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
