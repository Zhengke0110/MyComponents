<template>
  <div
    class="p-8 space-y-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
    <!-- 基础用法 -->
    <section class="space-y-6">
      <h2
        class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent transform transition-all duration-300">
        基础步骤条
      </h2>
      <div
        class="transform transition-all duration-500 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-xl hover:shadow-2xl dark:shadow-gray-900/30 backdrop-blur-lg border border-gray-100 dark:border-gray-700">
        <Steps v-model:current="basicCurrent" :items="basicSteps" class="transition-all duration-300" />
        <div class="mt-8 flex gap-4 justify-end">
          <button @click="basicCurrent--" :disabled="basicCurrent <= 0"
            class="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg hover:shadow-blue-500/25 dark:shadow-none">
            上一步
          </button>
          <button @click="basicCurrent++" :disabled="basicCurrent >= 3"
            class="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg hover:shadow-blue-500/25 dark:shadow-none">
            下一步
          </button>
        </div>
      </div>
    </section>

    <!-- 可点击切换 -->
    <section class="space-y-6">
      <h2
        class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        可点击切换
      </h2>
      <div
        class="transform transition-all duration-500 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-xl backdrop-blur-lg border border-gray-100 dark:border-gray-700">
        <Steps v-model:current="clickableCurrent" :items="clickableSteps" class="transition-all duration-300" />
      </div>
    </section>

    <!-- 带进度条的步骤 -->
    <section class="space-y-6">
      <h2
        class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        带进度的步骤
      </h2>
      <div
        class="transform transition-all duration-500 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-xl backdrop-blur-lg border border-gray-100 dark:border-gray-700">
        <Steps v-model:current="progressCurrent" :items="progressSteps" class="transition-all duration-300 mb-8" />
        <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div class="bg-blue-500 h-2 rounded-full transition-all duration-500"
            :style="{ width: `${(progressCurrent + 1) * 25}%` }"></div>
        </div>
        <div class="mt-8 flex justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-400">总进度</span>
          <span class="text-sm font-medium text-blue-500">{{ (progressCurrent + 1) * 25 }}%</span>
        </div>
      </div>
    </section>

    <!-- 不同尺寸对比 -->
    <section class="space-y-6">
      <h2
        class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        尺寸对比
      </h2>
      <div
        class="space-y-8 transform transition-all duration-500 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-xl backdrop-blur-lg border border-gray-100 dark:border-gray-700">
        <Steps :items="basicSteps" size="default" class="transition-all duration-300" />
        <Steps :items="basicSteps" size="small" class="transition-all duration-300" />
      </div>
    </section>

    <!-- 动态步骤 -->
    <section class="space-y-6">
      <h2
        class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        动态步骤
      </h2>
      <div
        class="transform transition-all duration-500 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-xl backdrop-blur-lg border border-gray-100 dark:border-gray-700">
        <Steps v-model:current="dynamicCurrent" :items="dynamicSteps" class="transition-all duration-300 mb-6" />
        <div class="flex gap-4">
          <button @click="addStep"
            class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300">
            添加步骤
          </button>
          <button @click="removeStep"
            class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
            :disabled="dynamicSteps.length <= 1">
            删除步骤
          </button>
        </div>
      </div>
    </section>

    <!-- 垂直步骤条 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold dark:text-white">垂直方向</h2>
      <div class="card-wrapper">
        <Steps :items="verticalSteps" direction="vertical"
          class="hover:shadow-lg transition-all duration-300 p-4 rounded-lg bg-white dark:bg-gray-800" />
      </div>
    </section>

    <!-- 自定义图标 -->
    <section class="space-y-4">
      <h2
        class="text-2xl font-bold text-gray-800 dark:text-white transform transition-all duration-300 hover:scale-105">
        自定义图标</h2>
      <div
        class="transform hover:scale-[1.02] transition-all duration-300 p-6 rounded-xl bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-xl backdrop-blur-sm">
        <Steps :items="iconSteps" class="transition-all duration-300" />
      </div>
    </section>

    <!-- 点状步骤条 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold dark:text-white">点状步骤条</h2>
      <div class="card-wrapper">
        <Steps :items="basicSteps" progressDot
          class="hover:shadow-lg transition-all duration-300 p-4 rounded-lg bg-white dark:bg-gray-800" />
      </div>
    </section>

    <!-- 迷你版本 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold dark:text-white">迷你版本</h2>
      <div class="card-wrapper">
        <Steps :items="basicSteps" size="small"
          class="hover:shadow-lg transition-all duration-300 p-4 rounded-lg bg-white dark:bg-gray-800" />
      </div>
    </section>

    <!-- 错误状态 -->
    <section class="space-y-4">
      <h2
        class="text-2xl font-bold text-gray-800 dark:text-white transform transition-all duration-300 hover:scale-105">
        错误状态</h2>
      <div
        class="transform hover:scale-[1.02] transition-all duration-300 p-6 rounded-xl bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-xl backdrop-blur-sm">
        <Steps :items="errorSteps" class="transition-all duration-300" />
      </div>
    </section>

    <!-- 小结与最佳实践 -->
    <section class="space-y-6">
      <h2
        class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        小结与最佳实践
      </h2>
      <div
        class="transform transition-all duration-500 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-xl backdrop-blur-lg border border-gray-100 dark:border-gray-700">
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
              <div class="w-1.5 h-6 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
              何时使用步骤条
            </h3>
            <ul class="space-y-2 pl-6 list-disc text-gray-600 dark:text-gray-300">
              <li>当一个任务需要分步骤完成时，使用步骤条引导用户</li>
              <li>当需要展示任务的进度和完成状态时</li>
              <li>适用于注册流程、表单填写、购物结算等多步骤操作</li>
              <li>需要向用户清晰展示当前处于流程哪个阶段时</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
              <div class="w-1.5 h-6 bg-green-500 dark:bg-green-400 rounded-full mr-3"></div>
              设计建议
            </h3>
            <ul class="space-y-2 pl-6 list-disc text-gray-600 dark:text-gray-300">
              <li>步骤数量建议控制在 2-5 个，过多的步骤会使用户感到疲惫</li>
              <li>每个步骤建议使用简短、明确的标题，必要时可添加描述</li>
              <li>为重要步骤提供适当的图标，增强视觉识别度</li>
              <li>在复杂流程中，可使用垂直方向的步骤条来展示更多细节</li>
              <li>应明确标识当前步骤，以及已完成和待完成的步骤</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
              <div class="w-1.5 h-6 bg-purple-500 dark:bg-purple-400 rounded-full mr-3"></div>
              交互建议
            </h3>
            <ul class="space-y-2 pl-6 list-disc text-gray-600 dark:text-gray-300">
              <li>必要时可以允许用户点击步骤标题直接跳转到对应步骤</li>
              <li>对于禁用状态的步骤，应清晰地标识并禁止点击</li>
              <li>在每个步骤中提供清晰的前进和后退操作</li>
              <li>可以结合进度指示器，让用户了解整体完成进度</li>
              <li>在步骤切换时，可以添加适当的过渡动画增强用户体验</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
              <div class="w-1.5 h-6 bg-yellow-500 dark:bg-yellow-400 rounded-full mr-3"></div>
              无障碍设计
            </h3>
            <ul class="space-y-2 pl-6 list-disc text-gray-600 dark:text-gray-300">
              <li>确保颜色对比度符合 WCAG 标准，使步骤状态对视力障碍用户可辨识</li>
              <li>不要仅依赖颜色传达步骤状态，同时使用图标和文本</li>
              <li>添加适当的 ARIA 属性，使屏幕阅读器可以正确解读步骤信息</li>
              <li>考虑键盘导航支持，让用户可以通过键盘在步骤间切换</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
              <div class="w-1.5 h-6 bg-red-500 dark:bg-red-400 rounded-full mr-3"></div>
              常见错误
            </h3>
            <ul class="space-y-2 pl-6 list-disc text-gray-600 dark:text-gray-300">
              <li>步骤数量过多，导致用户感到流程过于复杂</li>
              <li>步骤之间的关系不明确，缺乏连贯性</li>
              <li>错误状态处理不当，未给予用户明确的错误提示和修正指导</li>
              <li>未考虑响应式设计，在小屏幕设备上展示不佳</li>
              <li>未在合适位置添加返回或跳过选项，降低了用户体验</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- API文档 -->
    <section class="space-y-6">
      <h2
        class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        API 文档
      </h2>
      <div
        class="transform transition-all duration-500 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-xl backdrop-blur-lg border border-gray-100 dark:border-gray-700">
        <div class="space-y-8">
          <!-- 属性表格 -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">组件属性</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      属性</th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      类型</th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      默认值</th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      说明</th>
                  </tr>
                </thead>
                <tbody class="bg-white/50 dark:bg-gray-800/50 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">current
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">number</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">指定当前步骤，从 0 开始记数</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                      direction</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">string</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">'horizontal'</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                      指定步骤条方向。目前支持水平（horizontal）和垂直（vertical）两种方向</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">items
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">StepItem[]</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">[]</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">配置选项，参考下表 StepItem 项</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">initial
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">number</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">0</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">起始序号，从 0 开始记数</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                      labelPlacement</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">string</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">'horizontal'</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">指定标签放置位置</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">size
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">string</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">'default'</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">指定大小，可选 'default' 或 'small'</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">status
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">string</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">'process'</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">指定当前步骤的状态，可选
                      'wait'、'process'、'finish'、'error'</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                      progressDot</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">boolean</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">false</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">点状步骤条，启用后将以点状样式显示</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                      responsive</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">boolean</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">true</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">是否支持响应式</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- StepItem 类型说明 -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">StepItem 项说明</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      属性</th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      类型</th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      默认值</th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      说明</th>
                  </tr>
                </thead>
                <tbody class="bg-white/50 dark:bg-gray-800/50 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">title
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">string</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">-</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">步骤标题</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                      description</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">string</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">-</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">步骤的详细描述</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">status
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">string</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">-</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                      步骤的状态，可选：'wait'、'process'、'finish'、'error'</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">icon
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">string</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">-</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">步骤图标</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                      disabled</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">boolean</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">false</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">禁用点击</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                      subTitle</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">string</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">-</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">子标题</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 事件 -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">事件</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      事件名称</th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      说明</th>
                    <th scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      回调参数</th>
                  </tr>
                </thead>
                <tbody class="bg-white/50 dark:bg-gray-800/50 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">change
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">点击切换步骤时触发</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">current: number
                    </td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                      update:current</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">当前步骤改变时触发，支持 v-model:current 绑定</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">current: number
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- 使用示例 -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">基础使用示例</h3>
            <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-auto">
              <pre class="text-sm text-gray-700 dark:text-gray-300">
&lt;template&gt;
  &lt;Steps 
    v-model:current="current" 
    :items="steps"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import Steps from './Steps'
import type { StepItem } from './Steps'

const current = ref(1)

const steps: StepItem[] = [
  { title: '步骤一', description: '这是第一步' },
  { title: '步骤二', description: '这是第二步' },
  { title: '步骤三', description: '这是第三步' }
]
&lt;/script&gt;</pre>
            </div>
          </div>

          <!-- 样式定制 -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">样式定制</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Steps 组件主要使用 Tailwind CSS 类进行样式控制，可以通过以下方式进行样式自定义：
            </p>
            <ul class="space-y-2 pl-6 list-disc text-gray-600 dark:text-gray-300">
              <li>通过 class 属性添加自定义类名，覆盖默认样式</li>
              <li>调整主题色彩，步骤条会自动适应主题</li>
              <li>对于需要高度自定义的场景，可以使用自定义图标</li>
            </ul>
          </div>

          <!-- 最佳实践提示 -->
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 class="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">最佳实践提示</h3>
            <ul class="space-y-2 pl-4 list-disc text-blue-700 dark:text-blue-300">
              <li>结合 router 使用时，可以通过路由参数控制当前步骤</li>
              <li>在表单校验场景，可根据表单验证结果设置步骤状态</li>
              <li>长流程可考虑使用垂直步骤条增强可读性</li>
              <li>处理错误状态时，应提供明确的错误提示和修正指引</li>
              <li>在移动端使用时，考虑使用点状步骤条节省空间</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Steps from './Steps'
import type { StepItem } from './Steps'

const basicCurrent = ref(1)
const clickableCurrent = ref(0)
const progressCurrent = ref(0)
const dynamicCurrent = ref(0)

const basicSteps: StepItem[] = [
  { title: '填写信息', description: '请填写基本信息' },
  { title: '上传文件', description: '上传相关文件' },
  { title: '完成验证', description: '验证信息' },
  { title: '完成', description: '提交成功' }
]

// 可点击切换的步骤
const clickableSteps: StepItem[] = [
  { title: '选择套餐', description: '选择合适的套餐方案', icon: '📦' },
  { title: '确认订单', description: '确认订单信息', icon: '📝' },
  { title: '付款', description: '选择支付方式并完成支付', icon: '💳' },
  { title: '完成', description: '订单完成', icon: '🎉' }
]

// 带进度的步骤
const progressSteps: StepItem[] = [
  { title: '第一阶段', description: '完成度25%' },
  { title: '第二阶段', description: '完成度50%' },
  { title: '第三阶段', description: '完成度75%' },
  { title: '最终阶段', description: '完成度100%' }
]

const verticalSteps: StepItem[] = [
  { title: '已完成', description: '这是一段描述文本', status: 'finish' },
  { title: '进行中', description: '这是一段描述文本', status: 'process' },
  { title: '等待中', description: '这是一段描述文本', status: 'wait' }
]

const iconSteps: StepItem[] = [
  { title: '登录', icon: '👤', status: 'finish' },
  { title: '验证', icon: '🔑', status: 'process' },
  { title: '付款', icon: '💰', status: 'wait' },
  { title: '完成', icon: '✨', status: 'wait' }
]

const errorSteps: StepItem[] = [
  { title: '已完成', status: 'finish' },
  { title: '出错了', status: 'error' },
  { title: '等待中', status: 'wait' }
]

// 动态步骤
const dynamicSteps = ref<StepItem[]>([
  { title: '第1步', description: '这是第一步' }
])

const addStep = () => {
  const newStep = {
    title: `第${dynamicSteps.value.length + 1}步`,
    description: `这是第${dynamicSteps.value.length + 1}步`
  }
  dynamicSteps.value.push(newStep)
}

const removeStep = () => {
  if (dynamicSteps.value.length > 1) {
    dynamicSteps.value.pop()
    if (dynamicCurrent.value >= dynamicSteps.value.length) {
      dynamicCurrent.value = dynamicSteps.value.length - 1
    }
  }
}
</script>