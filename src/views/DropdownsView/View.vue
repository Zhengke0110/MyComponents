<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import Dropdowns, { ColorType } from '../../components/Dropdowns'
import type { DropdownItem } from '../../components/Dropdowns'


// 使用 vueuse/core 的暗色模式钩子
const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: ''
});
const toggleDark = useToggle(isDark);

// 检查系统颜色偏好
const preferredDark = ref(false);
if (window.matchMedia) {
  preferredDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const baseItems: DropdownItem[] = [
  {
    id: '1',
    type: 'button',
    label: 'Edit',
    icon: 'icon-[solar--clapperboard-edit-broken]',
    onClick: () => console.log('Edit clicked')
  },
  {
    id: '2',
    type: 'button',
    label: 'Duplicate',
    icon: 'icon-[solar--copy-broken]'
  },
  { id: 'div1', type: 'divider' },
  {
    id: '3',
    type: 'link',
    label: 'Learn more',
    href: 'https://example.com',
    icon: 'icon-[solar--link-bold-duotone]'
  }
]

const sizeItems: DropdownItem[] = [
  {
    id: '1',
    type: 'button',
    label: 'Small option',
    icon: 'icon-[solar--settings-broken]'
  },
  {
    id: '2',
    type: 'button',
    label: 'Another option',
    icon: 'icon-[solar--user-broken]'
  }
]

const dangerItems: DropdownItem[] = [
  {
    id: '1',
    type: 'button',
    label: 'Archive project',
    icon: 'icon-[solar--archive-check-broken]'
  },
  { id: 'div1', type: 'divider' },
  {
    id: '2',
    type: 'button',
    label: 'Delete project',
    icon: 'icon-[solar--trash-bin-trash-broken]',
    danger: true
  }
]

const disabledItems: DropdownItem[] = [
  {
    id: '1',
    type: 'button',
    label: 'Available option',
    icon: 'icon-[solar--check-read-line-duotone]'
  },
  {
    id: '2',
    type: 'button',
    label: 'Disabled option',
    icon: 'icon-[solar--lock-keyhole-broken]',
    disabled: true
  }
]

// 主题配置
const themeItems: DropdownItem[] = [
  {
    id: '1',
    type: 'button',
    label: 'System settings',
    icon: 'icon-[solar--settings-minimalistic-broken]',
  },
  {
    id: '2',
    type: 'button',
    label: 'User profile',
    icon: 'icon-[solar--user-rounded-broken]',
  },
  { id: 'div1', type: 'divider' },
  {
    id: '3',
    type: 'button',
    label: 'Logout',
    icon: 'icon-[solar--logout-3-broken]',
  }
];

// 可用的颜色主题
const availableThemes: ColorType[] = [
  'blue', 'indigo', 'purple', 'pink', 'red', 'orange',
  'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'gray', 'slate'
];

const handleSelect = (item: DropdownItem) => {
  console.log('Selected item:', item)
}

// 安全区域适配演示项
const safeAreaItems: DropdownItem[] = [
  {
    id: '1',
    type: 'button',
    label: '这是一个较长的菜单项，用于测试空间不足的情况',
    icon: 'icon-[solar--document-text-broken]',
  },
  {
    id: '2',
    type: 'button',
    label: '另一个长菜单项，模拟内容溢出',
    icon: 'icon-[solar--minimalistic-magnifer-broken]',
  },
  { id: 'div1', type: 'divider' },
  {
    id: '3',
    type: 'button',
    label: '第三个选项',
    icon: 'icon-[solar--widget-3-broken]',
  },
  {
    id: '4',
    type: 'button',
    label: '第四个选项，测试自动调整位置',
    icon: 'icon-[solar--bookmark-square-broken]',
  }
]

// 确保暗色模式正确应用
onMounted(() => {
  // 初始应用暗色模式
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark-mode');
  }

  // 自动检测并添加使用暗色模式的标记类
  document.documentElement.classList.add('using-dark-mode');
});

// 监听暗色模式变化
watch(isDark, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark-mode');
  }

  // 强制触发重新渲染
  setTimeout(() => {
    document.body.style.transition = 'background-color 0.3s ease';
    if (newVal) {
      document.body.style.backgroundColor = '#1f2937';
    } else {
      document.body.style.backgroundColor = '';
    }
  }, 0);
});

// 清理函数
onBeforeUnmount(() => {
  document.documentElement.classList.remove('using-dark-mode');
});
</script>

<template>
  <div class="p-6 min-h-screen transition-colors duration-300"
    :class="isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'">
    <!-- Header with Dark Mode Toggle -->
    <div class="mb-8 flex items-center justify-between">
      <h1 class="text-2xl font-bold">Dropdowns 下拉菜单</h1>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <span class="text-sm">暗色模式</span>
          <div
            class="relative inline-block h-6 w-11 cursor-pointer rounded-full bg-gray-200 transition-colors duration-200 ease-in-out dark:bg-blue-600"
            @click="toggleDark()">
            <span :class="[
              'absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-in-out',
              isDark ? 'translate-x-5' : 'translate-x-0'
            ]"></span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button
            class="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 bg-blue-500 hover:bg-blue-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-medium"
            @click="toggleDark()">
            <span :class="[
              isDark ? 'icon-[material-symbols--wb-sunny-outline-rounded]' : 'icon-[material-symbols--dark-mode-outline-rounded]',
              'size-5'
            ]"></span>
            <span>{{ isDark ? "切换到亮色模式" : "切换到暗色模式" }}</span>
          </button>

          <button
            class="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium"
            @click="preferredDark ? toggleDark(false) : toggleDark(true)">
            <span class="icon-[material-symbols--settings-outline-rounded] size-5"></span>
            <span>系统偏好</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Basic Usage -->
    <section class="space-y-4 mb-8">
      <h2 class="text-xl font-semibold">基础用法</h2>
      <div class="flex flex-wrap gap-4">
        <Dropdowns label="Options" :items="baseItems" @select="handleSelect" :dark="isDark" />
      </div>
    </section>

    <!-- Different Sizes -->
    <section class="space-y-4 mb-8">
      <h2 class="text-xl font-semibold">不同尺寸</h2>
      <div class="flex items-center flex-wrap gap-4">
        <Dropdowns label="Small" size="sm" :items="sizeItems" :dark="isDark" />
        <Dropdowns label="Medium" size="md" :items="sizeItems" :dark="isDark" />
        <Dropdowns label="Large" size="lg" :items="sizeItems" :dark="isDark" />
      </div>
    </section>

    <!-- Theme Colors -->
    <section class="space-y-4 mb-8">
      <h2 class="text-xl font-semibold">主题色</h2>
      <div class="flex flex-wrap gap-4">
        <Dropdowns v-for="color in availableThemes.slice(0, 8)" :key="color" :label="color" :items="themeItems"
          :theme="color" :dark="isDark" />
      </div>
    </section>

    <!-- Different Variants -->
    <section class="space-y-4 mb-8">
      <h2 class="text-xl font-semibold">不同变体</h2>
      <div class="flex flex-wrap gap-4">
        <Dropdowns label="Solid Blue" :items="themeItems" theme="blue" variant="solid" :dark="isDark" />
        <Dropdowns label="Outline Blue" :items="themeItems" theme="blue" variant="outline" :dark="isDark" />
        <Dropdowns label="Solid Red" :items="themeItems" theme="red" variant="solid" :dark="isDark" />
        <Dropdowns label="Outline Red" :items="themeItems" theme="red" variant="outline" :dark="isDark" />
      </div>
    </section>

    <!-- Custom Styling -->
    <section class="space-y-4 mb-8">
      <h2 class="text-xl font-semibold">自定义样式</h2>
      <Dropdowns label="Custom Button" :items="baseItems"
        button-class="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-md"
        icon-class="icon-[solar--alt-arrow-down-broken]" :dark="isDark" />
    </section>

    <!-- With Disabled Items -->
    <section class="space-y-4 mb-8">
      <h2 class="text-xl font-semibold">禁用项目</h2>
      <Dropdowns label="Settings" :items="disabledItems" :dark="isDark" />
    </section>

    <!-- Danger Actions -->
    <section class="space-y-4 mb-8">
      <h2 class="text-xl font-semibold">危险操作</h2>
      <Dropdowns label="Project Actions" :items="dangerItems" theme="red" :dark="isDark" />
    </section>

    <!-- 替换原来的多位置演示区域为单一的底部弹出位置演示 -->
    <section class="space-y-4 mb-8">
      <h2 class="text-xl font-semibold">底部弹出</h2>
      <div class="flex flex-wrap gap-8">
        <Dropdowns label="默认底部弹出" :items="sizeItems" theme="blue" :dark="isDark" />
      </div>
    </section>

    <!-- Safe Area Adaptation -->
    <section class="space-y-4 mb-8">
      <h2 class="text-xl font-semibold">安全区域自动调整</h2>
      <p class="mb-4 text-sm" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
        当下拉菜单内容过长或靠近边缘时，会自动调整显示位置和大小，避免内容被截断。
      </p>

      <div class="grid grid-cols-3 gap-4">
        <div class="flex justify-start">
          <Dropdowns label="左侧（测试水平溢出）" :items="safeAreaItems" theme="indigo" :dark="isDark" :auto-adjust="true" />
        </div>

        <div class="flex justify-center">
          <Dropdowns label="居中" :items="safeAreaItems" theme="emerald" :dark="isDark" :auto-adjust="true" />
        </div>

        <div class="flex justify-end">
          <Dropdowns label="右侧（测试水平溢出）" :items="safeAreaItems" theme="rose" :dark="isDark" :auto-adjust="true" />
        </div>
      </div>

      <div class="mt-12 flex justify-between">
        <!-- 关闭自动调整的对比 -->
        <Dropdowns label="禁用自动调整" :items="safeAreaItems" theme="red" :dark="isDark" :auto-adjust="false" />

        <div class="flex gap-2">
          <span :class="isDark ? 'text-gray-300' : 'text-gray-600'">状态:</span>
          <span class="px-2 py-1 text-xs font-medium rounded"
            :class="isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'">
            自动调整开启
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

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
