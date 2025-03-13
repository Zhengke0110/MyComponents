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

    <!-- API 文档部分 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">组件API</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">属性 (Props)</h3>
        <div class="mb-6 overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">属性名</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">类型</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">默认值</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">modelValue</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'#000000'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">当前选中的颜色值</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">position</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'top' | 'bottom'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'bottom'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">颜色选择面板的弹出位置</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">colors</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string[]</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">[...]</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">预设颜色列表</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">allowCustom</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否允许自定义颜色输入</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">colorOptions</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ColorOptions</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">{ outputFormat: 'hex' }</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">颜色输出格式配置</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">color</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ColorType</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'blue'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">默认的颜色类型</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">selectedIntensity</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">500</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">默认的颜色强度（50-900）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">事件 (Events)</h3>
        <div class="mb-6 overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">事件名</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">回调参数</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">update:modelValue</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(color: string)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">颜色值更新时触发</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">change</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(color: string)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">颜色改变时触发</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="mt-6 mb-4 text-lg font-medium text-gray-900 dark:text-white">类型定义</h3>
        <div class="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-700/30">
          <p class="mb-2 text-sm text-gray-700 dark:text-gray-300">ColorInput 组件使用以下 TypeScript 类型：</p>
          <pre class="overflow-x-auto rounded bg-gray-100 p-3 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
interface ColorOptions {
  outputFormat: "hex" | "0x";
}

interface ColorInputProps {
  modelValue?: string;
  position?: "top" | "bottom";
  colors?: string[];
  allowCustom?: boolean;
  colorOptions?: ColorOptions;
  color?: ColorType;
  selectedIntensity?: ColorIntensity;
}</pre>
        </div>
      </div>
    </section>

    <!-- 小结与最佳实践 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">小结与最佳实践</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300">
            ColorInput 是一个功能丰富的颜色选择器组件，支持多种颜色格式、预设颜色和主题色选择。
            以下是一些使用建议：
          </p>

          <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>使用 <code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800/60">colorOptions</code> 
                选择合适的颜色输出格式</li>
            <li>提供预设颜色列表以简化用户选择</li>
            <li>搭配主题色系统实现一致的设计风格</li>
            <li>合理使用位置属性避免遮挡重要内容</li>
            <li>适时禁用自定义输入以确保颜色选择的规范性</li>
          </ul>

          <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
              <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
              暗色模式提示
            </h4>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              ColorInput 组件自动适配明暗主题，确保在不同主题下提供一致的用户体验。颜色选择面板会根据主题自动调整背景色和文字颜色。
            </p>
          </div>

          <div class="rounded-lg border border-amber-100 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-900/20">
            <h4 class="mb-2 flex items-center text-amber-800 dark:text-amber-300">
              <span class="icon-[material-symbols--tips-and-updates-outline-rounded] mr-2 h-5 w-5"></span>
              键盘可访问性提示
            </h4>
            <p class="text-sm text-amber-700 dark:text-amber-300">
              组件支持完整的键盘导航，包括方向键选择颜色、Enter 确认、Escape 关闭面板等。
              为提高可访问性，颜色选择器提供了清晰的焦点指示和 ARIA 属性支持。
            </p>
          </div>

          <p class="text-gray-700 dark:text-gray-300">
            在实际应用中，ColorInput 组件可以灵活地用于主题定制、样式编辑器等场景，
            通过合理配置提供直观的颜色选择体验。
          </p>
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