<template>
  <div class="p-8 space-y-8 min-h-screen transition-colors duration-300" 
       :class="darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'">
    <!-- Theme Switcher -->
    <div class="mb-8 flex items-center justify-between">
      <h1 class="text-2xl font-bold">ColorInput 颜色选择器</h1>
      <div class="flex items-center gap-2">
        <span :class="darkMode ? 'text-gray-300' : 'text-gray-500'">暗色模式：</span>
        <button 
          @click="toggleDarkMode" 
          class="h-8 px-3 rounded flex items-center justify-center transition-colors"
          :class="darkMode ? 'bg-gray-800 text-white border border-gray-700' : 'bg-gray-200 text-gray-800'"
        >
          <span class="text-sm">{{ darkMode ? '开启' : '关闭' }}</span>
        </button>
      </div>
    </div>

    <!-- Basic Usage -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="darkMode ? 'text-gray-100' : 'text-gray-800'">基础用法</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="basicColor" @change="handleColorChange" :dark="darkMode" />
          <p :class="darkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">当前颜色值: {{ basicColor }}</p>
        </div>
      </div>
    </section>

    <!-- Different Positions -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="darkMode ? 'text-gray-100' : 'text-gray-800'">不同弹出位置</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="topColor" position="top" :dark="darkMode" />
          <p :class="darkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">顶部弹出</p>
        </div>
        <div class="space-y-2">
          <ColorInput v-model="bottomColor" position="bottom" :dark="darkMode" />
          <p :class="darkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">底部弹出（默认）</p>
        </div>
      </div>
    </section>

    <!-- Theme Colors -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="darkMode ? 'text-gray-100' : 'text-gray-800'">主题色选择</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="themeBasedColor" :theme="true" :dark="darkMode" />
          <p :class="darkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">使用主题色系统</p>
        </div>
        <div class="space-y-2">
          <ColorInput 
            v-model="themeCustomColor" 
            :theme="true"
            :theme-colors="['blue', 'red', 'green', 'amber', 'indigo', 'purple']" 
            :selected-intensity="700" 
            :dark="darkMode"
          />
          <p :class="darkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">自定义主题色和强度</p>
        </div>
      </div>
    </section>

    <!-- Dark Mode -->
    <section :class="[
      'p-6 rounded-xl transition-colors', 
      darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100'
    ]">
      <h2 class="text-xl font-semibold mb-4" :class="darkMode ? 'text-white' : 'text-gray-800'">
        {{ darkMode ? '暗色模式' : '亮色模式' }}
      </h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="darkModeColor" :dark="darkMode" />
          <p class="text-sm" :class="darkMode ? 'text-gray-400' : 'text-gray-500'">
            {{ darkMode ? '暗色模式基础用法' : '亮色模式基础用法' }}
          </p>
        </div>
        <div class="space-y-2">
          <ColorInput v-model="darkThemeColor" :theme="true" :dark="darkMode" />
          <p class="text-sm" :class="darkMode ? 'text-gray-400' : 'text-gray-500'">
            {{ darkMode ? '暗色模式 + 主题色' : '亮色模式 + 主题色' }}
          </p>
        </div>
      </div>
    </section>

    <!-- Custom Colors -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="darkMode ? 'text-gray-100' : 'text-gray-800'">自定义颜色列表</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="customListColor" :colors="customColors" :dark="darkMode" />
          <p :class="darkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">使用自定义颜色列表</p>
        </div>
      </div>
    </section>

    <!-- Different Output Formats -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="darkMode ? 'text-gray-100' : 'text-gray-800'">不同输出格式</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="hexColor" :color-options="{ outputFormat: 'hex' }" :dark="darkMode" />
          <p :class="darkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">HEX 格式: {{ hexColor }}</p>
        </div>
        <div class="space-y-2">
          <ColorInput v-model="oxColor" :color-options="{ outputFormat: '0x' }" :dark="darkMode" />
          <p :class="darkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">0x 格式: {{ oxColor }}</p>
        </div>
      </div>
    </section>

    <!-- Disabled Custom Input -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="darkMode ? 'text-gray-100' : 'text-gray-800'">禁用自定义输入</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="noCustomColor" :allow-custom="false" :dark="darkMode" />
          <p :class="darkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">仅允许从预设颜色中选择</p>
        </div>
      </div>
    </section>

    <!-- Integration Example -->
    <section>
      <h2 class="text-xl font-semibold mb-4" :class="darkMode ? 'text-gray-100' : 'text-gray-800'">实际应用示例</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <ColorInput v-model="themeColor" position="top" :theme="true" :dark="darkMode" />
            <div 
              class="p-4 rounded-lg transition-colors" 
              :style="{ backgroundColor: themeColor }"
              :class="darkMode ? 'border border-gray-700' : ''"
            >
              <p class="text-lg font-medium" :style="{ color: getContrastColor(themeColor) }">
                示例文本
              </p>
            </div>
          </div>
          <p :class="darkMode ? 'text-gray-400' : 'text-gray-500'" class="text-sm">主题色应用示例</p>
        </div>
      </div>
    </section>

    <!-- Page Footer -->
    <footer class="mt-12 pt-6 border-t" :class="darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'">
      <p class="text-sm">颜色选择器组件 - 支持暗色模式和主题色系统</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorInput } from '../../components/ColorInput'

// 暗色模式状态
const darkMode = ref(false)

// 切换暗色模式
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
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
</script>

<style scoped></style>