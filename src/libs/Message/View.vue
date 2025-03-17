<template>
  <div class="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
    <h1 class="mb-8 text-3xl font-bold">Message 消息组件</h1>

    <!-- Basic message types -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">基础消息类型</h2>
      <div class="flex flex-wrap gap-4">
        <button @click="showMessage('success')"
          class="rounded-md bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700">
          成功消息
        </button>
        <button @click="showMessage('warning')"
          class="rounded-md bg-yellow-600 px-4 py-2 text-white transition-colors hover:bg-yellow-700">
          警告消息
        </button>
        <button @click="showMessage('error')"
          class="rounded-md bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700">
          错误消息
        </button>
        <button @click="showMessage('info')"
          class="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
          提示消息
        </button>
      </div>
    </section>

    <!-- Duration options -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">持续时间选项</h2>
      <div class="flex flex-wrap gap-4">
        <button @click="showDurationMessage(1000)"
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">
          1 秒
        </button>
        <button @click="showDurationMessage(3000)"
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">
          3 秒（默认）
        </button>
        <button @click="showDurationMessage(5000)"
          class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">
          5 秒
        </button>
      </div>
    </section>

    <!-- Closable messages -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">可关闭的消息</h2>
      <div class="flex flex-wrap gap-4">
        <button @click="showClosableMessage(true)"
          class="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors">
          可关闭消息
        </button>
        <button @click="showClosableMessage(false)"
          class="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors">
          不可关闭消息
        </button>
      </div>
    </section>

    <!-- Multiple messages demo -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">多消息堆叠展示</h2>
      <div class="flex flex-wrap gap-4">
        <button @click="showMultipleMessages"
          class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors">
          显示多条消息
        </button>
      </div>
    </section>

    <!-- Callback demo -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">回调函数示例</h2>
      <div class="flex flex-wrap gap-4">
        <button @click="showCallbackMessage"
          class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors">
          显示带回调的消息
        </button>
      </div>
    </section>

    <!-- API 文档部分 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">组件API</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">静态方法</h3>
        <div class="mb-6 overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">方法名</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">参数</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">返回值</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">Message.success</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(content: string, options?: MessageOptions)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">MessageInstance</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示成功消息</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">Message.warning</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(content: string, options?: MessageOptions)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">MessageInstance</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示警告消息</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">Message.error</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(content: string, options?: MessageOptions)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">MessageInstance</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示错误消息</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">Message.info</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(content: string, options?: MessageOptions)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">MessageInstance</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示普通消息</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">配置项 (Options)</h3>
        <div class="mb-6 overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">参数名</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">类型</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">默认值</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">说明</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">duration</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">3000</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示时间(毫秒)</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">closable</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示关闭按钮</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">onClose</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">() => void</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">关闭时的回调函数</td>
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
            Message 组件是一个轻量级的全局消息提示组件，用于在页面顶部显示重要的提示信息。
            以下是一些使用建议：
          </p>

          <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>根据消息的重要程度选择不同的类型：
              <div class="mt-2 flex gap-2">
                <span
                  class="inline-flex items-center gap-1 rounded-md bg-green-50 px-2 py-1 text-sm text-green-700 dark:bg-green-500/10 dark:text-green-400">
                  <i class="i-heroicons-check-circle-20-solid w-4 h-4" />
                  success 用于成功操作
                </span>
                <span
                  class="inline-flex items-center gap-1 rounded-md bg-red-50 px-2 py-1 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-400">
                  <i class="i-heroicons-x-circle-20-solid w-4 h-4" />
                  error 用于错误提示
                </span>
              </div>
            </li>
            <li>合理设置显示时间:
              <ul class="mt-2 ml-4 space-y-1 text-sm">
                <li>- 重要信息：设置较长时间或需要手动关闭</li>
                <li>- 普通提示：使用默认 3 秒即可</li>
              </ul>
            </li>
            <li>避免同时显示过多消息，建议最多同时显示 3-4 条</li>
            <li>消息内容应简明扼要，通常不超过 20 个字</li>
          </ul>

          <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
              <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
              暗色模式提示
            </h4>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              Message 组件自动适配暗色模式，通过 Tailwind CSS 的 dark 变体实现。确保在你的项目中正确配置了暗色模式支持。
            </p>
          </div>

          <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/30">
            <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">动画效果</h4>
            <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>• 入场：顶部滑入 + 淡入</li>
              <li>• 退出：向上滑出 + 淡出</li>
              <li>• 堆叠：自动计算位置，平滑过渡</li>
            </ul>
          </div>

          <p class="text-gray-700 dark:text-gray-300">
            合理使用消息提示可以提升用户体验，但过度使用反而会造成干扰。请根据实际场景需要选择合适的提示方式。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Message from './index'

// Basic message demos
const showMessage = (type: 'success' | 'warning' | 'error' | 'info') => {
  const messages = {
    success: '操作成功完成！',
    warning: '请谨慎操作。',
    error: '处理请求时出错。',
    info: '这是一条信息提示。'
  }
  Message[type](messages[type])
}

// Duration demo
const showDurationMessage = (duration: number) => {
  Message.info(`此消息将在 ${duration / 1000} 秒后消失。`, { duration })
}

// Closable demo
const showClosableMessage = (closable: boolean) => {
  Message.info(
    closable ? '此消息可以手动关闭' : '此消息不能手动关闭',
    { closable }
  )
}

// Multiple messages demo
const showMultipleMessages = () => {
  Message.info('第一条消息')
  setTimeout(() => Message.success('第二条消息'), 300)
  setTimeout(() => Message.warning('第三条消息'), 600)
}

// Callback demo
const showCallbackMessage = () => {
  Message.success('操作完成！此消息关闭时将触发回调。', {
    closable: true,
    onClose: () => {
      setTimeout(() => {
        Message.info('前一条消息已关闭！')
      }, 500)
    }
  })
}
</script>

<style>
/* Remove dark mode related styles as they will be handled by Tailwind */
</style>