<template>
  <div class="p-8 space-y-8 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <h1 class="text-2xl font-bold">ColorInput 颜色选择器</h1>

    <!-- Basic Usage -->
    <section>
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">基础用法</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="basicColor" @change="handleColorChange" />
          <p class="text-sm text-gray-500 dark:text-gray-400">当前颜色值: {{ basicColor }}</p>
        </div>
      </div>
    </section>

    <!-- Different Positions -->
    <section>
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">不同弹出位置</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="topColor" position="top" />
          <p class="text-sm text-gray-500 dark:text-gray-400">顶部弹出</p>
        </div>
        <div class="space-y-2">
          <ColorInput v-model="bottomColor" position="bottom" />
          <p class="text-sm text-gray-500 dark:text-gray-400">底部弹出（默认）</p>
        </div>
      </div>
    </section>

    <!-- Theme Colors -->
    <section>
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">主题色选择</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="themeBasedColor" color="blue" :selected-intensity="500" />
          <p class="text-sm text-gray-500 dark:text-gray-400">使用主题色系统</p>
        </div>
        <div class="space-y-2">
          <ColorInput v-model="themeCustomColor" color="indigo" :selected-intensity="700" />
          <p class="text-sm text-gray-500 dark:text-gray-400">自定义主题色和强度</p>
        </div>
      </div>
    </section>

    <!-- Dark Mode -->
    <section class="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-700">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        {{ isDark ? '暗色模式' : '亮色模式' }}
      </h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="darkModeColor" color="blue" :selected-intensity="500" />
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ isDark ? '暗色模式基础用法' : '亮色模式基础用法' }}
          </p>
        </div>
        <div class="space-y-2">
          <ColorInput v-model="darkThemeColor" color="purple" :selected-intensity="600" />
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ isDark ? '暗色模式 + 主题色' : '亮色模式 + 主题色' }}
          </p>
        </div>
      </div>
    </section>

    <!-- Custom Colors -->
    <section>
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">自定义颜色列表</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="customListColor" :colors="customColors" />
          <p class="text-sm text-gray-500 dark:text-gray-400">使用自定义颜色列表</p>
        </div>
      </div>
    </section>

    <!-- Different Output Formats -->
    <section>
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">不同输出格式</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="hexColor" :color-options="{ outputFormat: 'hex' }" />
          <p class="text-sm text-gray-500 dark:text-gray-400">HEX 格式: {{ hexColor }}</p>
        </div>
        <div class="space-y-2">
          <ColorInput v-model="oxColor" :color-options="{ outputFormat: '0x' }" />
          <p class="text-sm text-gray-500 dark:text-gray-400">0x 格式: {{ oxColor }}</p>
        </div>
      </div>
    </section>

    <!-- Disabled Custom Input -->
    <section>
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">禁用自定义输入</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="noCustomColor" :allow-custom="false" />
          <p class="text-sm text-gray-500 dark:text-gray-400">仅允许从预设颜色中选择</p>
        </div>
      </div>
    </section>

    <!-- Integration Example -->
    <section>
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">实际应用示例</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <ColorInput v-model="themeColor" position="top" :theme="true" />
            <div class="p-4 rounded-lg transition-colors" :style="{ backgroundColor: themeColor }"
              :class="isDark ? 'border border-gray-700' : ''">
              <p class="text-lg font-medium" :style="{ color: getContrastColor(themeColor) }">
                示例文本
              </p>
            </div>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">主题色应用示例</p>
        </div>
      </div>
    </section>

    <!-- Page Footer -->
    <footer class="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
      <p class="text-sm">颜色选择器组件 - 支持暗色模式和主题色系统</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorInput } from '../../components/ColorInput'
import { isDark } from '../../utils/theme'

// Basic usage
const basicColor = ref('#FF5722')
const handleColorChange = (color: string) => {
  console.log('Color changed:', color)
}

// Different positions
const topColor = ref('#2196F3')
const bottomColor = ref('#4CAF50')

// Theme colors
const themeBasedColor = ref('#3B82F6')  // blue-500
const themeCustomColor = ref('#4338CA')  // indigo-700

// Dark mode with theme colors
const darkModeColor = ref('#3B82F6')    // blue-500
const darkThemeColor = ref('#9333EA')    // purple-600

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
  const color = hexColor.replace('#', '')
  const r = parseInt(color.substr(0, 2), 16)
  const g = parseInt(color.substr(2, 2), 16)
  const b = parseInt(color.substr(4, 2), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? '#000000' : '#FFFFFF'
}
</script>

<style scoped></style>