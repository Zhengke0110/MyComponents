<template>
  <div class="p-8 space-y-8 min-h-screen transition-colors duration-300" 
       :class="isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'">
    <!-- Theme Switcher -->
    <div class="mb-8 flex items-center justify-between">
      <h1 class="text-2xl font-bold">ColorInput 颜色选择器</h1>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <span class="text-sm">暗色模式</span>
          <div class="relative inline-block h-6 w-11 cursor-pointer rounded-full bg-gray-200 transition-colors duration-200 ease-in-out dark:bg-blue-600"
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
                <span>{{ isDark ? '切换到亮色模式' : '切换到暗色模式' }}</span>
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
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="isDark ? 'text-gray-100' : 'text-gray-800'">基础用法</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="basicColor" @change="handleColorChange" :dark="isDark" />
          <p :class="isDark ? 'text-gray-400' : 'text-gray-500'" class="text-sm">当前颜色值: {{ basicColor }}</p>
        </div>
      </div>
    </section>

    <!-- Different Positions -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="isDark ? 'text-gray-100' : 'text-gray-800'">不同弹出位置</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="topColor" position="top" :dark="isDark" />
          <p :class="isDark ? 'text-gray-400' : 'text-gray-500'" class="text-sm">顶部弹出</p>
        </div>
        <div class="space-y-2">
          <ColorInput v-model="bottomColor" position="bottom" :dark="isDark" />
          <p :class="isDark ? 'text-gray-400' : 'text-gray-500'" class="text-sm">底部弹出（默认）</p>
        </div>
      </div>
    </section>

    <!-- Theme Colors -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="isDark ? 'text-gray-100' : 'text-gray-800'">主题色选择</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="themeBasedColor" :theme="true" :dark="isDark" />
          <p :class="isDark ? 'text-gray-400' : 'text-gray-500'" class="text-sm">使用主题色系统</p>
        </div>
        <div class="space-y-2">
          <ColorInput 
            v-model="themeCustomColor" 
            :theme="true"
            :theme-colors="['blue', 'red', 'green', 'amber', 'indigo', 'purple']" 
            :selected-intensity="700" 
            :dark="isDark"
          />
          <p :class="isDark ? 'text-gray-400' : 'text-gray-500'" class="text-sm">自定义主题色和强度</p>
        </div>
      </div>
    </section>

    <!-- Dark Mode -->
    <section :class="[
      'p-6 rounded-xl transition-colors', 
      isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100'
    ]">
      <h2 class="text-xl font-semibold mb-4" :class="isDark ? 'text-white' : 'text-gray-800'">
        {{ isDark ? '暗色模式' : '亮色模式' }}
      </h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="darkModeColor" :dark="isDark" />
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-500'">
            {{ isDark ? '暗色模式基础用法' : '亮色模式基础用法' }}
          </p>
        </div>
        <div class="space-y-2">
          <ColorInput v-model="darkThemeColor" :theme="true" :dark="isDark" />
          <p class="text-sm" :class="isDark ? 'text-gray-400' : 'text-gray-500'">
            {{ isDark ? '暗色模式 + 主题色' : '亮色模式 + 主题色' }}
          </p>
        </div>
      </div>
    </section>

    <!-- Custom Colors -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="isDark ? 'text-gray-100' : 'text-gray-800'">自定义颜色列表</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="customListColor" :colors="customColors" :dark="isDark" />
          <p :class="isDark ? 'text-gray-400' : 'text-gray-500'" class="text-sm">使用自定义颜色列表</p>
        </div>
      </div>
    </section>

    <!-- Different Output Formats -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="isDark ? 'text-gray-100' : 'text-gray-800'">不同输出格式</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="hexColor" :color-options="{ outputFormat: 'hex' }" :dark="isDark" />
          <p :class="isDark ? 'text-gray-400' : 'text-gray-500'" class="text-sm">HEX 格式: {{ hexColor }}</p>
        </div>
        <div class="space-y-2">
          <ColorInput v-model="oxColor" :color-options="{ outputFormat: '0x' }" :dark="isDark" />
          <p :class="isDark ? 'text-gray-400' : 'text-gray-500'" class="text-sm">0x 格式: {{ oxColor }}</p>
        </div>
      </div>
    </section>

    <!-- Disabled Custom Input -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="isDark ? 'text-gray-100' : 'text-gray-800'">禁用自定义输入</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="noCustomColor" :allow-custom="false" :dark="isDark" />
          <p :class="isDark ? 'text-gray-400' : 'text-gray-500'" class="text-sm">仅允许从预设颜色中选择</p>
        </div>
      </div>
    </section>

    <!-- Integration Example -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="isDark ? 'text-gray-100' : 'text-gray-800'">实际应用示例</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <ColorInput v-model="themeColor" position="top" :theme="true" :dark="isDark" />
            <div 
              class="p-4 rounded-lg transition-colors" 
              :style="{ backgroundColor: themeColor }"
              :class="isDark ? 'border border-gray-700' : ''"
            >
              <p class="text-lg font-medium" :style="{ color: getContrastColor(themeColor) }">
                示例文本
              </p>
            </div>
          </div>
          <p :class="isDark ? 'text-gray-400' : 'text-gray-500'" class="text-sm">主题色应用示例</p>
        </div>
      </div>
    </section>

    <!-- Page Footer -->
    <footer class="mt-12 pt-6 border-t" :class="isDark ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'">
      <p class="text-sm">颜色选择器组件 - 支持暗色模式和主题色系统</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { ColorInput } from '../../components/ColorInput'
import { useDark, useToggle } from '@vueuse/core'

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

// Basic usage
const basicColor = ref('#FF5722')
const handleColorChange = (color: string) => {
  console.log('Color changed:', color)
}

// Different positions
const topColor = ref('#2196F3')
const bottomColor = ref('#4CAF50')

// Theme colors
const themeBasedColor = ref('#3B82F6') // blue-500
const themeCustomColor = ref('#1D4ED8') // blue-700

// Dark mode
const darkModeColor = ref('#60A5FA')
const darkThemeColor = ref('#A78BFA')

// Custom colors
const customColors = [
  '#FF0000', '#00FF00', '#0000FF',
  '#FFFF00', '#FF00FF', '#00FFFF',
  '#000000', '#FFFFFF', '#808080'
]
const customListColor = ref('#FF0000')

// Different output formats
const hexColor = ref('#9C27B0')
const oxColor = ref('0xFF5722')

// Disabled custom input
const noCustomColor = ref('#E91E63')

// Integration example
const themeColor = ref('#3B82F6')

// Helper function to determine text color based on background
const getContrastColor = (hexColor: string): string => {
  // Remove the hash if present
  const color = hexColor.replace('#', '')

  // Convert to RGB
  const r = parseInt(color.substr(0, 2), 16)
  const g = parseInt(color.substr(2, 2), 16)
  const b = parseInt(color.substr(4, 2), 16)

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  // Return black or white based on luminance
  return luminance > 0.5 ? '#000000' : '#FFFFFF'
}

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

<style scoped></style>