<template>
  <div class="p-8 space-y-8">
    <!-- Basic Usage -->
    <section>
      <h2 class="text-xl font-semibold mb-4">基础用法</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="basicColor" @change="handleColorChange" />
          <p class="text-sm text-gray-500">当前颜色值: {{ basicColor }}</p>
        </div>
      </div>
    </section>

    <!-- Different Positions -->
    <section>
      <h2 class="text-xl font-semibold mb-4">不同弹出位置</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="topColor" position="top" />
          <p class="text-sm text-gray-500">顶部弹出</p>
        </div>
        <div class="space-y-2">
          <ColorInput v-model="bottomColor" position="bottom" />
          <p class="text-sm text-gray-500">底部弹出（默认）</p>
        </div>
      </div>
    </section>

    <!-- Custom Colors -->
    <section>
      <h2 class="text-xl font-semibold mb-4">自定义颜色列表</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="customListColor" :colors="customColors" />
          <p class="text-sm text-gray-500">使用自定义颜色列表</p>
        </div>
      </div>
    </section>

    <!-- Different Output Formats -->
    <section>
      <h2 class="text-xl font-semibold mb-4">不同输出格式</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="hexColor" :color-options="{ outputFormat: 'hex' }" />
          <p class="text-sm text-gray-500">HEX 格式: {{ hexColor }}</p>
        </div>
        <div class="space-y-2">
          <ColorInput v-model="oxColor" :color-options="{ outputFormat: '0x' }" />
          <p class="text-sm text-gray-500">0x 格式: {{ oxColor }}</p>
        </div>
      </div>
    </section>

    <!-- Disabled Custom Input -->
    <section>
      <h2 class="text-xl font-semibold mb-4">禁用自定义输入</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-2">
          <ColorInput v-model="noCustomColor" :allow-custom="false" />
          <p class="text-sm text-gray-500">仅允许从预设颜色中选择</p>
        </div>
      </div>
    </section>

    <!-- Integration Example -->
    <section>
      <h2 class="text-xl font-semibold mb-4">实际应用示例</h2>
      <div class="flex items-start gap-8">
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <ColorInput v-model="themeColor" />
            <div
              class="p-4 rounded-lg transition-colors"
              :style="{ backgroundColor: themeColor }"
            >
              <p class="text-lg font-medium" :style="{ color: getContrastColor(themeColor) }">
                示例文本
              </p>
            </div>
          </div>
          <p class="text-sm text-gray-500">主题色应用示例</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorInput } from '../../components/ColorInput'

// Basic usage
const basicColor = ref('#FF5722')
const handleColorChange = (color: string) => {
  console.log('Color changed:', color)
}

// Different positions
const topColor = ref('#2196F3')
const bottomColor = ref('#4CAF50')

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
const themeColor = ref('#3F51B5')

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

<style scoped>

</style>