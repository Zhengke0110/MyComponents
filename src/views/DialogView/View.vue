<template>
  <div class="p-8 space-y-8 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
    <h1 class="text-2xl font-bold">Dialog 对话框</h1>

    <!-- Basic Dialog -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">基础对话框</h2>
      <button
        class="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg transition-colors hover:bg-blue-600 dark:hover:bg-blue-700"
        @click="basicVisible = true">
        打开基础对话框
      </button>
      <Dialog v-model="basicVisible" title="基础对话框" :confirmHandler="handleBasicConfirm"
        :cancelHandler="handleBasicCancel">
        <p class="text-gray-600 dark:text-gray-300">
          这是一个基础对话框，自动适配暗色模式。支持自定义按钮和交互处理。
        </p>
      </Dialog>
    </section>

    <!-- Button Colors -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">按钮颜色主题</h2>
      <div class="flex flex-wrap gap-4">
        <button v-for="color in colorTypes" :key="color" class="px-4 py-2 text-white rounded-lg transition-colors"
          :class="{
            'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700': color === 'blue',
            'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700': color === 'green',
            'bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700': color === 'red',
            'bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700': color === 'yellow',
            'bg-zinc-500 hover:bg-zinc-600 dark:bg-zinc-600 dark:hover:bg-zinc-700': color === 'zinc',
            'bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700': color === 'gray'
          }" @click="openColorDialog(color)">
          {{ color }}
        </button>
      </div>
      <Dialog v-model="colorDialogVisible" :title="`${currentColor} 主题对话框`" :confirmButtonColor="currentColor"
        :cancelButtonColor="currentColor" :confirmHandler="handleColorConfirm" :cancelHandler="handleColorCancel">
        <div class="space-y-4">
          <p class="text-gray-600 dark:text-gray-300">
            这是一个使用 {{ currentColor }} 主题色的对话框示例。按钮颜色会随主题变化。
          </p>
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p class="text-sm text-gray-500 dark:text-gray-400">
              当前选择的主题色: {{ currentColor }}
            </p>
          </div>
        </div>
      </Dialog>
    </section>

    <!-- Complex Content -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">复杂内容展示</h2>
      <button
        class="px-4 py-2 bg-red-500 dark:bg-red-600 text-white rounded-lg transition-colors hover:bg-red-600 dark:hover:bg-red-700"
        @click="complexVisible = true">
        打开复杂对话框
      </button>
      <Dialog v-model="complexVisible" title="复杂内容对话框" confirmButtonColor="red" :confirmHandler="handleComplexConfirm"
        :cancelHandler="handleComplexCancel">
        <div class="space-y-4">
          <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-2">重要提示</h3>
            <p class="text-gray-600 dark:text-gray-300">这个对话框展示了复杂的内容布局。</p>
          </div>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>支持多种内容布局</li>
            <li>自动适配暗色模式</li>
            <li>响应式设计</li>
          </ul>
          <div class="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
            <p class="text-yellow-800 dark:text-yellow-200 flex items-center gap-2">
              <span class="icon-[heroicons--exclamation-triangle-20-solid]" />
              注意：这是一条重要提示信息
            </p>
          </div>
        </div>
      </Dialog>
    </section>

    <!-- Simple Dialog -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">简约对话框</h2>
      <button
        class="px-4 py-2 bg-gray-500 dark:bg-gray-600 text-white rounded-lg transition-colors hover:bg-gray-600 dark:hover:bg-gray-700"
        @click="simpleVisible = true">
        打开简约对话框
      </button>
      <Dialog v-model="simpleVisible" :confirmHandler="handleSimpleConfirm">
        <p class="text-gray-600 dark:text-gray-300">
          这是一个没有标题的简约对话框，只有确认按钮。
        </p>
      </Dialog>
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
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">控制对话框的显示状态</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">title</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">对话框标题</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">cancelText</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'取消'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">取消按钮文本</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">confirmText</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'确定'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">确认按钮文本</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">confirmButtonColor</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ColorType</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'red'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">确认按钮颜色</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">cancelButtonColor</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ColorType</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'gray'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">取消按钮颜色</td>
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
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(value: boolean)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">对话框显示状态变化时触发</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">插槽 (Slots)</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">插槽名</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">default</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">对话框的主要内容</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 小结与最佳实践 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">小结与最佳实践</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300">
            Dialog 组件是一个功能完整的对话框组件，支持多种自定义选项和交互方式。
            以下是一些使用建议：
          </p>

          <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>根据操作的重要性选择不同的按钮颜色，如使用
              <span class="text-red-500 font-medium">红色按钮</span>
              表示危险操作
            </li>
            <li>保持对话框内容简洁明确，避免内容过于复杂</li>
            <li>合理使用标题说明对话框用途</li>
            <li>为重要操作提供确认和取消两个选项</li>
            <li>注意响应式布局，确保在不同设备上的显示效果</li>
          </ul>

          <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
              <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
              暗色模式提示
            </h4>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              Dialog 组件已内置支持暗色模式，会自动响应系统主题设置。通过 Tailwind CSS 的
              <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">dark:</code> 
              变体实现样式切换。
            </p>
          </div>

          <p class="text-gray-700 dark:text-gray-300">
            在实际应用中，合理使用对话框可以提升用户体验，但也要注意避免过度使用，以免影响用户操作流程的连贯性。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Dialog from '@/components/Dialog';
import { ref } from 'vue';
import type { ColorType } from '@/components/Dialog';

// Color types array
const colorTypes: ColorType[] = ['blue', 'green', 'red', 'yellow', 'zinc', 'gray'];

// Visibility states
const basicVisible = ref(false);
const colorDialogVisible = ref(false);
const complexVisible = ref(false);
const simpleVisible = ref(false);

// Color theme handling
const currentColor = ref<ColorType>('blue');
const openColorDialog = (color: ColorType) => {
  currentColor.value = color;
  colorDialogVisible.value = true;
};

// Event handlers
const handleBasicConfirm = () => {
  console.log('Basic dialog confirmed');
};

const handleBasicCancel = () => {
  console.log('Basic dialog cancelled');
};

const handleColorConfirm = () => {
  console.log(`${currentColor.value} theme dialog confirmed`)
}

const handleColorCancel = () => {
  console.log(`${currentColor.value} theme dialog cancelled`)
}

const handleComplexConfirm = () => {
  console.log('Complex dialog confirmed');
};

const handleComplexCancel = () => {
  console.log('Complex dialog cancelled');
};

const handleSimpleConfirm = () => {
  console.log('Simple dialog confirmed');
};
</script>

<style scoped>
button {
  transition: opacity 0.2s;
}

button:hover {
  opacity: 0.8;
}
</style>