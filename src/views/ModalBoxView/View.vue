<template>
  <div class="p-8 space-y-8">
    <h1 class="text-2xl font-bold mb-6">ModalBox 模态框组件示例</h1>

    <!-- 基础用法 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">基础用法</h2>
      <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        @click="basicModalVisible = true">
        打开基础模态框
      </button>
      <ModalBox v-model="basicModalVisible" theme="primary">
        <div class="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h3 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">基础模态框</h3>
          <p class="text-gray-600 mb-4 dark:text-gray-300">这是一个基础的模态框示例，使用 primary 主题色</p>
          <div class="flex justify-end">
            <button
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
              @click="basicModalVisible = false">
              关闭
            </button>
          </div>
        </div>
      </ModalBox>
    </section>

    <!-- 全屏模式 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">全屏模式</h2>
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        @click="fullscreenModalVisible = true">
        打开全屏模态框
      </button>
      <ModalBox v-model="fullscreenModalVisible" :fullscreen="true" contentClass="flex items-center justify-center"
        theme="success" :transitionDuration="300">
        <div class="w-full h-full flex flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
          <div class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 class="text-2xl font-bold">全屏模态框</h3>
            <button
              class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              @click="fullscreenModalVisible = false">
              <span class="icon-[solar--close-circle-bold] w-6 h-6"></span>
            </button>
          </div>
          <div class="flex-1 overflow-auto p-8">
            <div class="max-w-4xl mx-auto w-full">
              <p class="mb-6 text-lg">这是一个全屏模式的模态框，使用简洁的配色方案，提供更好的内容阅读体验</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div class="bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-800">
                  <h4 class="text-xl font-medium mb-3">内容区域 1</h4>
                  <p class="text-gray-600 dark:text-gray-300">全屏模态框适合展示复杂内容或需要用户全神贯注的任务</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-800">
                  <h4 class="text-xl font-medium mb-3">内容区域 2</h4>
                  <p class="text-gray-600 dark:text-gray-300">可以包含表单、图表、大型图片或视频等内容</p>
                </div>
                <div class="bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-800">
                  <h4 class="text-xl font-medium mb-3">内容区域 3</h4>
                  <p class="text-gray-600 dark:text-gray-300">使用简洁配色可以提供更好的视觉体验和内容可读性</p>
                </div>
              </div>
              <div class="flex justify-end mt-4">
                <button
                  class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-lg dark:bg-blue-600 dark:hover:bg-blue-700"
                  @click="fullscreenModalVisible = false">
                  关闭全屏
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalBox>
    </section>

    <!-- 主题颜色展示 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">主题颜色模式</h2>

      <!-- 语义化主题色卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div class="bg-white rounded-lg p-5 shadow-sm dark:bg-gray-800">
          <h3 class="font-medium mb-3 text-gray-900 dark:text-white">语义化主题 (ThemeColorType)</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm mb-3">点击查看对应的模态框效果</p>
          <div class="flex flex-wrap gap-2">
            <button v-for="color in themeColors" :key="color"
              class="px-3.5 py-2 text-white rounded-md transition-transform hover:scale-105"
              :class="getBgClassForThemeColor(color)" @click="showThemeModal(color as ThemeColorType)">
              {{ color }}
            </button>
          </div>
        </div>

        <!-- 标准颜色卡片 -->
        <div class="bg-white rounded-lg p-5 shadow-sm dark:bg-gray-800">
          <h3 class="font-medium mb-3 text-gray-900 dark:text-white">标准色 (ColorType)</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm mb-3">点击查看对应的模态框效果</p>
          <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            <button v-for="color in displayStandardColors" :key="color"
              class="px-2 py-1.5 text-white text-sm rounded truncate transition-transform hover:scale-105"
              :class="`bg-${color}-500 dark:bg-${color}-600 hover:bg-${color}-600 dark:hover:bg-${color}-700`"
              @click="showColorModal(color as ColorType)">
              {{ color }}
            </button>
          </div>
        </div>
      </div>

      <!-- 主题颜色模态框 -->
      <ModalBox v-model="themeModalVisible" :theme="currentTheme">
        <div class="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">{{ currentTheme }} 主题</h3>
            <div class="px-2.5 py-1 text-xs font-medium rounded" :class="getThemeTagClass()">
              {{ isThemeColor ? `实际颜色: ${getActualColor(currentTheme as ThemeColorType)}` : '标准颜色' }}
            </div>
          </div>
          <p class="text-gray-600 mb-4 dark:text-gray-300">
            这是使用 {{ currentTheme }} 主题的模态框，现在使用统一的黑色半透明遮罩，获得更一致的视觉体验。
          </p>
          <div class="flex justify-end">
            <button class="px-4 py-2 text-white rounded-md" :class="getThemeButtonClass()"
              @click="themeModalVisible = false">
              关闭
            </button>
          </div>
        </div>
      </ModalBox>
    </section>

    <!-- 图片查看器 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">图片查看器</h2>
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
        ModalBox 非常适合用作图片查看器，点击图片查看大图效果
      </p>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(image, index) in sampleImages" :key="index"
          class="aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          @click="showImage(image)">
          <img :src="image.thumbnailUrl" :alt="image.alt"
            class="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      <!-- 图片查看模态框 -->
      <ModalBox v-model="imageModalVisible" :fullscreen="true" contentClass="flex items-center justify-center"
        theme="info" :transitionDuration="400">
        <div class="w-screen h-screen p-4 flex flex-col items-center justify-center relative">
          <img :src="currentImage?.url" :alt="currentImage?.alt"
            class="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain select-none shadow-2xl rounded" @click.stop
            @contextmenu.prevent />

          <!-- 关闭按钮 -->
          <button
            class="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200"
            @click="imageModalVisible = false">
            <span class="icon-[solar--close-circle-bold] w-6 h-6"></span>
          </button>

          <!-- 图片描述 -->
          <div class="mt-4 px-4 py-2 bg-black/30 text-white rounded-lg">
            {{ currentImage?.alt }}
          </div>
        </div>
      </ModalBox>
    </section>

    <!-- 禁用遮罩层关闭 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">禁用遮罩层关闭</h2>
      <button
        class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700"
        @click="noOverlayCloseModalVisible = true">
        打开模态框
      </button>
      <ModalBox v-model="noOverlayCloseModalVisible" :closeOnClickOverlay="false" theme="danger"
        :transitionDuration="250">
        <div class="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <div class="flex items-center mb-4">
            <span class="icon-[solar--shield-warning-bold] w-5 h-5 text-red-500 mr-2"></span>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">禁用遮罩层关闭的模态框</h3>
          </div>
          <p class="text-gray-600 mb-4 dark:text-gray-300">
            这个模态框禁用了点击遮罩层关闭的功能，必须点击按钮才能关闭。适用于需要确认操作的场景。
          </p>
          <div class="flex justify-end">
            <button
              class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
              @click="noOverlayCloseModalVisible = false">
              我已了解，关闭
            </button>
          </div>
        </div>
      </ModalBox>
    </section>

    <!-- 自定义过渡动画 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">自定义过渡动画</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <button
            class="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700"
            @click="showTransitionModal('slow')">
            慢速动画 (600ms)
          </button>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-2">展示更缓慢的过渡效果</p>
        </div>

        <div>
          <button
            class="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700"
            @click="showTransitionModal('fast')">
            快速动画 (150ms)
          </button>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-2">展示更迅速的过渡效果</p>
        </div>
      </div>

      <!-- 自定义动画模态框 -->
      <ModalBox v-model="transitionModalVisible" :theme="transitionTheme" :transitionDuration="transitionDuration">
        <div class="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h3 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">自定义过渡动画模态框</h3>
          <p class="text-gray-600 mb-4 dark:text-gray-300">
            这个模态框使用了自定义的过渡动画速度 ({{ transitionDuration }}ms)
          </p>
          <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded mb-4">
            <code class="text-sm">:transitionDuration="{{ transitionDuration }}"</code>
          </div>
          <div class="flex justify-end">
            <button class="px-4 py-2 text-white rounded"
              :class="transitionTheme === 'warning' ? 'bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700' : 'bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700'"
              @click="transitionModalVisible = false">
              关闭
            </button>
          </div>
        </div>
      </ModalBox>
    </section>

    <!-- 接口文档展示 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">组件接口</h2>
      <div class="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-800">
        <h3 class="font-medium mb-4 text-gray-900 dark:text-white">ModalBoxProps 接口</h3>
        <div class="bg-gray-100 p-4 rounded-lg overflow-auto dark:bg-gray-700">
          <pre class="text-sm text-gray-800 dark:text-gray-200">
export interface ModalBoxProps {
  /**
   * 控制模态框的显示与隐藏
   */
  modelValue: boolean;
  
  /**
   * 模态框主题颜色，可以是预设主题或具体颜色
   * @default 'primary'
   */
  theme?: ColorType | ThemeColorType;
  
  /**
   * 是否全屏显示
   * @default false
   */
  fullscreen?: boolean;
  
  /**
   * 内容区域的自定义类名
   * @default ''
   */
  contentClass?: string;
  
  /**
   * 是否点击遮罩层关闭模态框
   * @default true
   */
  closeOnClickOverlay?: boolean;
  
  /**
   * 过渡动画持续时间（毫秒）
   * @default 200
   */
  transitionDuration?: number;
}</pre>
        </div>
      </div>
    </section>

    <!-- API 文档部分 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">详细 API 文档</h2>
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
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">控制模态框显示状态（必填）</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">theme</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ColorType | ThemeColorType</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'primary'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">模态框主题颜色</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">fullscreen</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否全屏显示模态框</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">contentClass</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">内容区域的自定义类名</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">closeOnClickOverlay</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否允许点击遮罩层关闭模态框</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">transitionDuration</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">200</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">过渡动画持续时间（毫秒）</td>
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
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">参数</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">update:modelValue</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(value: boolean)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">当模态框显示状态变化时触发</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">open</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">当模态框打开时触发</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">close</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">当模态框关闭时触发</td>
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
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">default</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">模态框的内容</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 主题颜色部分 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">主题与颜色系统</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">语义化主题</h3>
        <div class="mb-4">
          <p class="text-gray-700 dark:text-gray-300 mb-2">
            ModalBox 组件支持以下语义化主题，每个主题映射到特定的颜色：
          </p>
          <div class="overflow-x-auto">
            <table class="min-w-full border-collapse">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">主题</th>
                  <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">对应颜色</th>
                  <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">用途</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">primary</td>
                  <td class="px-4 py-2 text-gray-700 dark:text-gray-300">blue</td>
                  <td class="px-4 py-2 text-gray-700 dark:text-gray-300">主要操作、强调内容</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">secondary</td>
                  <td class="px-4 py-2 text-gray-700 dark:text-gray-300">gray</td>
                  <td class="px-4 py-2 text-gray-700 dark:text-gray-300">次要操作、中性内容</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">success</td>
                  <td class="px-4 py-2 text-gray-700 dark:text-gray-300">green</td>
                  <td class="px-4 py-2 text-gray-700 dark:text-gray-300">成功操作、积极反馈</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">warning</td>
                  <td class="px-4 py-2 text-gray-700 dark:text-gray-300">yellow</td>
                  <td class="px-4 py-2 text-gray-700 dark:text-gray-300">警告提示、需要注意</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">danger</td>
                  <td class="px-4 py-2 text-gray-700 dark:text-gray-300">red</td>
                  <td class="px-4 py-2 text-gray-700 dark:text-gray-300">危险操作、错误提示</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">info</td>
                  <td class="px-4 py-2 text-gray-700 dark:text-gray-300">sky</td>
                  <td class="px-4 py-2 text-gray-700 dark:text-gray-300">信息提示、中性通知</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 class="mb-3 mt-6 text-lg font-medium text-gray-900 dark:text-white">标准颜色系统</h3>
        <p class="text-gray-700 dark:text-gray-300 mb-2">
          除了语义化主题，组件还支持直接使用 Tailwind CSS 的标准颜色：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          <div>
            <h4 class="text-base font-medium mb-1 text-gray-900 dark:text-white">灰色系</h4>
            <ul class="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>slate, gray, zinc, neutral, stone</li>
            </ul>
          </div>
          <div>
            <h4 class="text-base font-medium mb-1 text-gray-900 dark:text-white">暖色系</h4>
            <ul class="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>red, orange, amber, yellow</li>
            </ul>
          </div>
          <div>
            <h4 class="text-base font-medium mb-1 text-gray-900 dark:text-white">绿色系</h4>
            <ul class="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>lime, green, emerald, teal</li>
            </ul>
          </div>
          <div>
            <h4 class="text-base font-medium mb-1 text-gray-900 dark:text-white">蓝色系</h4>
            <ul class="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>cyan, sky, blue, indigo</li>
            </ul>
          </div>
          <div>
            <h4 class="text-base font-medium mb-1 text-gray-900 dark:text-white">紫粉色系</h4>
            <ul class="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>violet, purple, fuchsia, pink, rose</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 小结与最佳实践 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">小结与最佳实践</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300">
            ModalBox 是一个灵活的模态框组件，适用于各种场景，如信息展示、表单提交、确认操作和图片查看等。
            以下是一些使用建议：
          </p>

          <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>根据内容的重要性和用途选择合适的主题颜色，如
              <span class="inline-block px-2 py-0.5 text-xs font-medium rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">primary</span>
              用于主要信息，
              <span class="inline-block px-2 py-0.5 text-xs font-medium rounded bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">danger</span>
              用于警告或删除确认
            </li>
            <li>为重要或复杂的内容使用
              <span class="inline-block px-2 py-0.5 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300">fullscreen</span>
              属性，提供沉浸式体验
            </li>
            <li>对于需要用户确认的重要操作，设置
              <span class="inline-block px-2 py-0.5 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300">closeOnClickOverlay: false</span>
              避免误触关闭
            </li>
            <li>通过
              <span class="inline-block px-2 py-0.5 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300">contentClass</span>
              属性添加自定义样式，增强视觉效果和用户体验
            </li>
            <li>根据内容复杂度和用户期望，调整
              <span class="inline-block px-2 py-0.5 text-xs font-medium rounded bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300">transitionDuration</span>
              实现更平滑的动画效果
            </li>
          </ul>

          <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
              <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
              全屏模式提示
            </h4>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              全屏模式下，模态框不再使用半透明遮罩，而是采用实色背景以提供更好的内容可读性。适用于内容丰富、需要用户专注的场景，如图片查看、复杂表单或数据详情展示。
            </p>
          </div>

          <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/30">
            <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">常见使用场景</h4>
            <ul class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>• 表单提交：收集用户输入数据</li>
              <li>• 确认对话框：请求用户确认重要操作</li>
              <li>• 详情展示：显示项目的详细信息</li>
              <li>• 图片查看器：以全屏模式展示图片</li>
              <li>• 通知和警告：显示重要提示信息</li>
            </ul>
          </div>

          <p class="text-gray-700 dark:text-gray-300">
            在设计模态框时，内容的层次结构和视觉引导非常重要。推荐在模态框中包含明确的标题、内容区和操作按钮区，
            并使用适当的间距和颜色对比度来提高可读性。
          </p>

          <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/30 mt-2">
            <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">模态框内容组织示例</h4>
            <pre class="text-xs overflow-auto text-gray-600 dark:text-gray-300">
&lt;ModalBox v-model="showModal" theme="primary"&gt;
  &lt;div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"&gt;
    &lt;!-- 标题区域 --&gt;
    &lt;div class="flex justify-between items-center mb-4"&gt;
      &lt;h3 class="text-lg font-medium"&gt;模态框标题&lt;/h3&gt;
      &lt;button @click="showModal = false"&gt;关闭&lt;/button&gt;
    &lt;/div&gt;
    
    &lt;!-- 内容区域 --&gt;
    &lt;div class="py-2"&gt;
      &lt;p&gt;模态框内容...&lt;/p&gt;
    &lt;/div&gt;
    
    &lt;!-- 按钮区域 --&gt;
    &lt;div class="flex justify-end gap-2 mt-4"&gt;
      &lt;button @click="showModal = false"&gt;取消&lt;/button&gt;
      &lt;button @click="handleConfirm"&gt;确认&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/ModalBox&gt;</pre>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ModalBox, { ColorType, ThemeColorType, THEME_COLOR_MAP, type ModalBoxProps } from '../../components/ModalBox';

// Modal visibility states
const basicModalVisible = ref(false);
const fullscreenModalVisible = ref(false);
const imageModalVisible = ref(false);
const noOverlayCloseModalVisible = ref(false);
const themeModalVisible = ref(false);
const transitionModalVisible = ref(false);

// 过渡动画设置
const transitionDuration = ref(600);
const transitionTheme = ref<ThemeColorType | ColorType>('warning');

// 颜色选择状态
const currentTheme = ref<ColorType | ThemeColorType>('primary');
const isThemeColor = computed(() => themeColors.includes(currentTheme.value as ThemeColorType));

// 获取主题色对应的实际颜色
const getActualColor = (theme: ThemeColorType): ColorType => {
  return THEME_COLOR_MAP[theme];
};

// 可用的主题色和标准色列表
const themeColors: ThemeColorType[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

// 为了UI整洁，只显示部分标准色
const displayStandardColors: ColorType[] = [
  'red', 'orange', 'amber', 'yellow',
  'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo',
  'violet', 'purple', 'pink', 'rose',
  'slate', 'gray'
];

const standardColors: ColorType[] = [
  'slate', 'gray', 'zinc', 'neutral', 'stone',
  'red', 'orange', 'amber', 'yellow',
  'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo',
  'violet', 'purple', 'fuchsia', 'pink', 'rose'
];

// 展示主题色模态框
const showThemeModal = (theme: ThemeColorType) => {
  currentTheme.value = theme;
  themeModalVisible.value = true;
};

// 展示标准色模态框
const showColorModal = (color: ColorType) => {
  currentTheme.value = color;
  themeModalVisible.value = true;
};

// 展示自定义过渡动画模态框
const showTransitionModal = (speed: 'slow' | 'fast') => {
  if (speed === 'slow') {
    transitionDuration.value = 600;
    transitionTheme.value = 'warning';
  } else {
    transitionDuration.value = 150;
    transitionTheme.value = 'cyan';
  }
  transitionModalVisible.value = true;
};

// 获取主题色按钮的背景类
const getBgClassForThemeColor = (theme: ThemeColorType) => {
  const color = getActualColor(theme);
  return getColorClassForButton(color);
};

// 获取模态框按钮样式
const getButtonClass = () => {
  if (isThemeColor.value) {
    const color = getActualColor(currentTheme.value as ThemeColorType);
    return getColorClassForButton(color);
  } else {
    return getColorClassForButton(currentTheme.value as ColorType);
  }
};

// 修改获取标签颜色类的方法，避免动态生成完整的类名（这会导致Tailwind无法识别）
const getThemeTagClass = () => {
  if (isThemeColor.value) {
    const color = getActualColor(currentTheme.value as ThemeColorType);
    // 使用预定义的颜色类映射
    return getColorClassForTag(color);
  } else {
    // 使用预定义的颜色类映射
    return getColorClassForTag(currentTheme.value as ColorType);
  }
};

// 预定义的颜色类映射，避免动态拼接类名
const getColorClassForTag = (color: ColorType) => {
  const colorMap: Record<ColorType, string> = {
    slate: 'bg-slate-100 dark:bg-slate-900/30 text-slate-800 dark:text-slate-300',
    gray: 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300',
    zinc: 'bg-zinc-100 dark:bg-zinc-900/30 text-zinc-800 dark:text-zinc-300',
    neutral: 'bg-neutral-100 dark:bg-neutral-900/30 text-neutral-800 dark:text-neutral-300',
    stone: 'bg-stone-100 dark:bg-stone-900/30 text-stone-800 dark:text-stone-300',

    red: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300',
    orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300',
    amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300',
    yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300',

    lime: 'bg-lime-100 dark:bg-lime-900/30 text-lime-800 dark:text-lime-300',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300',
    teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300',

    cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300',
    sky: 'bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300',
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300',

    violet: 'bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300',
    fuchsia: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-800 dark:text-fuchsia-300',
    pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300',
    rose: 'bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300'
  };

  return colorMap[color] || colorMap.blue;
};

// 修改获取按钮样式的方法，避免动态拼接类名
const getThemeButtonClass = () => {
  if (isThemeColor.value) {
    const color = getActualColor(currentTheme.value as ThemeColorType);
    // 使用预定义的按钮颜色类映射
    return getColorClassForButton(color);
  } else {
    // 使用预定义的按钮颜色类映射
    return getColorClassForButton(currentTheme.value as ColorType);
  }
};

// 预定义的按钮颜色类映射
const getColorClassForButton = (color: ColorType) => {
  const buttonColorMap: Record<ColorType, string> = {
    slate: 'bg-slate-500 dark:bg-slate-600 hover:bg-slate-600 dark:hover:bg-slate-700',
    gray: 'bg-gray-500 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-700',
    zinc: 'bg-zinc-500 dark:bg-zinc-600 hover:bg-zinc-600 dark:hover:bg-zinc-700',
    neutral: 'bg-neutral-500 dark:bg-neutral-600 hover:bg-neutral-600 dark:hover:bg-neutral-700',
    stone: 'bg-stone-500 dark:bg-stone-600 hover:bg-stone-600 dark:hover:bg-stone-700',

    red: 'bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700',
    orange: 'bg-orange-500 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-700',
    amber: 'bg-amber-500 dark:bg-amber-600 hover:bg-amber-600 dark:hover:bg-amber-700',
    yellow: 'bg-yellow-500 dark:bg-yellow-600 hover:bg-yellow-600 dark:hover:bg-yellow-700',

    lime: 'bg-lime-500 dark:bg-lime-600 hover:bg-lime-600 dark:hover:bg-lime-700',
    green: 'bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700',
    emerald: 'bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-700',
    teal: 'bg-teal-500 dark:bg-teal-600 hover:bg-teal-600 dark:hover:bg-teal-700',

    cyan: 'bg-cyan-500 dark:bg-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-700',
    sky: 'bg-sky-500 dark:bg-sky-600 hover:bg-sky-600 dark:hover:bg-sky-700',
    blue: 'bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700',
    indigo: 'bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-700',

    violet: 'bg-violet-500 dark:bg-violet-600 hover:bg-violet-600 dark:hover:bg-violet-700',
    purple: 'bg-purple-500 dark:bg-purple-600 hover:bg-purple-600 dark:hover:bg-purple-700',
    fuchsia: 'bg-fuchsia-500 dark:bg-fuchsia-600 hover:bg-fuchsia-600 dark:hover:bg-fuchsia-700',
    pink: 'bg-pink-500 dark:bg-pink-600 hover:bg-pink-600 dark:hover:bg-pink-700',
    rose: 'bg-rose-500 dark:bg-rose-600 hover:bg-rose-600 dark:hover:bg-rose-700'
  };

  return buttonColorMap[color] || buttonColorMap.blue;
};

interface ImageType {
  url: string;
  thumbnailUrl: string;
  alt: string;
}

const currentImage = ref<ImageType | null>(null);

const sampleImages = [
  {
    url: "https://picsum.photos/1200/800",
    thumbnailUrl: "https://picsum.photos/400/400",
    alt: "示例图片 1 - 自然风光",
  },
  {
    url: "https://picsum.photos/1200/801",
    thumbnailUrl: "https://picsum.photos/400/401",
    alt: "示例图片 2 - 城市景观",
  },
  {
    url: "https://picsum.photos/1200/802",
    thumbnailUrl: "https://picsum.photos/400/402",
    alt: "示例图片 3 - 抽象艺术",
  },
];

const showImage = (image: ImageType) => {
  currentImage.value = image;
  imageModalVisible.value = true;
};
</script>