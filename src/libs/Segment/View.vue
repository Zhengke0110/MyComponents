<template>
  <div
    class="segment-view bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-all duration-300">
    <!-- 页面标题 - 移除了主题切换按钮 -->
    <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
      <h1 class="text-2xl font-bold">Segment 分段控制器</h1>
    </div>

    <!-- 主要内容 -->
    <div class="container mx-auto p-6 max-w-5xl">
      <!-- 组件介绍 -->
      <section class="mb-10">
        <p class="text-lg text-gray-700 dark:text-gray-300">
          分段控制器是一种用于在预设选项中进行选择的组件，通常用于切换视图、筛选内容或设置简单的选项。
        </p>
      </section>

      <!-- 基础用法 -->
      <section class="demo-section mb-10">
        <h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">基础用法</h2>
        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div class="mb-4">
            <Segment v-model="basicSelected" :options="basicOptions" @change="handleChange" />
          </div>
          <div class="mt-6 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
            <p class="mb-2 font-medium">代码示例：</p>
            <pre class="text-xs overflow-x-auto"><code>{{ basicCode }}</code></pre>
            <p class="mt-4">当前选中: <span class="font-semibold">{{ basicSelected }}</span></p>
          </div>
        </div>
      </section>

      <!-- 带图标的分段控制器 -->
      <section class="demo-section mb-10">
        <h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">带图标的分段控制器</h2>
        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div class="mb-4">
            <Segment v-model="iconSelected" :options="iconOptions" />
          </div>
          <div class="mt-6 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
            <p class="mb-2 font-medium">代码示例：</p>
            <pre class="text-xs overflow-x-auto"><code>{{ iconCode }}</code></pre>
          </div>
        </div>
      </section>

      <!-- 不同尺寸 -->
      <section class="demo-section mb-10">
        <h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">不同尺寸</h2>
        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm space-y-6">
          <div>
            <span class="text-sm text-gray-500 dark:text-gray-400 mb-2 inline-block">小尺寸 (sm):</span>
            <Segment v-model="sizeSelected" :options="basicOptions" size="sm" />
          </div>
          <div>
            <span class="text-sm text-gray-500 dark:text-gray-400 mb-2 inline-block">中尺寸 (md - 默认):</span>
            <Segment v-model="sizeSelected" :options="basicOptions" />
          </div>
          <div>
            <span class="text-sm text-gray-500 dark:text-gray-400 mb-2 inline-block">大尺寸 (lg):</span>
            <Segment v-model="sizeSelected" :options="basicOptions" size="lg" />
          </div>
          <div class="mt-6 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
            <p class="mb-2 font-medium">代码示例：</p>
            <pre class="text-xs overflow-x-auto"><code>{{ sizeCode }}</code></pre>
          </div>
        </div>
      </section>

      <!-- 块级模式和禁用状态 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <!-- 块级模式 -->
        <section class="demo-section">
          <h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">块级模式</h2>
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div class="mb-4">
              <Segment v-model="blockSelected" :options="basicOptions" block />
            </div>
            <div class="mt-6 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
              <pre
                class="text-xs overflow-x-auto"><code>&lt;Segment v-model="selected" :options="options" block /&gt;</code></pre>
            </div>
          </div>
        </section>

        <!-- 禁用状态 -->
        <section class="demo-section">
          <h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">禁用状态</h2>
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div class="mb-4">
              <Segment v-model="disabledSelected" :options="basicOptions" disabled />
            </div>
            <div class="mt-6 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
              <pre
                class="text-xs overflow-x-auto"><code>&lt;Segment v-model="selected" :options="options" disabled /&gt;</code></pre>
            </div>
          </div>
        </section>
      </div>

      <!-- 实际应用案例 -->
      <section class="demo-section mb-10">
        <h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">实际应用案例</h2>
        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div class="mb-6">
            <h3 class="text-lg font-medium mb-3">筛选器</h3>
            <Segment v-model="filterSelected" :options="filterOptions" class="mb-4" />
            <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <transition name="fade" mode="out-in">
                <div v-if="filterSelected === 'all'" key="all" class="animate-fade-in">
                  <h3 class="font-medium mb-2">显示所有产品 ({{ allProducts.length }})</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div v-for="product in allProducts" :key="product.id"
                      class="p-2 rounded bg-white dark:bg-gray-600 flex justify-between">
                      <span>{{ product.name }}</span>
                      <span class="font-medium">¥{{ product.price }}</span>
                    </div>
                  </div>
                </div>
                <div v-else-if="filterSelected === 'low'" key="low" class="animate-fade-in">
                  <h3 class="font-medium mb-2">低价产品 ({{ lowPriceProducts.length }})</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div v-for="product in lowPriceProducts" :key="product.id"
                      class="p-2 rounded bg-white dark:bg-gray-600 flex justify-between">
                      <span>{{ product.name }}</span>
                      <span class="font-medium text-green-600 dark:text-green-400">¥{{ product.price }}</span>
                    </div>
                  </div>
                </div>
                <div v-else-if="filterSelected === 'high'" key="high" class="animate-fade-in">
                  <h3 class="font-medium mb-2">高价产品 ({{ highPriceProducts.length }})</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div v-for="product in highPriceProducts" :key="product.id"
                      class="p-2 rounded bg-white dark:bg-gray-600 flex justify-between">
                      <span>{{ product.name }}</span>
                      <span class="font-medium text-amber-600 dark:text-amber-400">¥{{ product.price }}</span>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </section>

      <!-- 内容切换功能 -->
      <section class="demo-section mb-10">
        <h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">内容切换功能</h2>
        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">点击切换不同内容区域：</p>

          <Segment v-model="tabSelected" :options="tabOptions" size="lg" block />

          <div class="mt-6 relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            <transition name="fade" mode="out-in">
              <div v-if="tabSelected === 'info'" key="info"
                class="content-panel bg-blue-50 dark:bg-blue-900/20 p-6 min-h-[200px]">
                <h3 class="text-lg font-medium text-blue-700 dark:text-blue-300 mb-4">产品信息</h3>
                <p class="text-blue-600 dark:text-blue-300 mb-2">这是产品的基本信息面板，展示了产品的关键特性和说明。</p>
                <ul class="list-disc pl-5 space-y-1 text-blue-600 dark:text-blue-300">
                  <li>高性能处理器</li>
                  <li>超长待机时间</li>
                  <li>精致铝合金外壳</li>
                  <li>智能温控系统</li>
                </ul>
              </div>
              <div v-else-if="tabSelected === 'specs'" key="specs"
                class="content-panel bg-green-50 dark:bg-green-900/20 p-6 min-h-[200px]">
                <h3 class="text-lg font-medium text-green-700 dark:text-green-300 mb-4">技术规格</h3>
                <div class="space-y-2 text-green-600 dark:text-green-300">
                  <div class="flex justify-between">
                    <span>屏幕：</span>
                    <span>6.1 英寸 OLED</span>
                  </div>
                  <div class="flex justify-between">
                    <span>处理器：</span>
                    <span>A15 仿生芯片</span>
                  </div>
                  <div class="flex justify-between">
                    <span>内存：</span>
                    <span>8GB LPDDR5</span>
                  </div>
                  <div class="flex justify-between">
                    <span>存储：</span>
                    <span>128GB/256GB/512GB</span>
                  </div>
                  <div class="flex justify-between">
                    <span>电池：</span>
                    <span>4500mAh</span>
                  </div>
                </div>
              </div>
              <div v-else-if="tabSelected === 'reviews'" key="reviews"
                class="content-panel bg-purple-50 dark:bg-purple-900/20 p-6 min-h-[200px]">
                <h3 class="text-lg font-medium text-purple-700 dark:text-purple-300 mb-4">用户评价</h3>
                <div class="space-y-3">
                  <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                    <div class="flex justify-between items-center mb-2">
                      <span class="font-medium text-purple-600 dark:text-purple-300">王小明</span>
                      <div class="flex">
                        <span v-for="i in 5" :key="i" class="text-amber-400">★</span>
                      </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">这是我用过的最好的产品之一，性能强劲，外观精美！</p>
                  </div>
                  <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                    <div class="flex justify-between items-center mb-2">
                      <span class="font-medium text-purple-600 dark:text-purple-300">李小红</span>
                      <div class="flex">
                        <span v-for="i in 4" :key="i" class="text-amber-400">★</span>
                        <span class="text-gray-300 dark:text-gray-600">★</span>
                      </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">整体不错，但电池寿命可以再提升一些。</p>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </section>

      <!-- 移除了暗黑模式适配展示部分 -->
      <section class="demo-section mb-10">
        <h2 class="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">组件适配说明</h2>
        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <p class="mb-4 text-gray-700 dark:text-gray-300">
            Segment 组件可自动适配亮色/暗黑主题，无需额外配置。主题由外部控制，组件将根据父容器环境相应调整样式。
          </p>
          <div class="mb-4">
            <Segment v-model="themeSelected" :options="themeOptions" />
          </div>
          <div class="mt-6 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm">
            <p class="mb-2 font-medium">适配代码示例：</p>
            <pre class="text-xs overflow-x-auto"><code>// Segment 组件会自动检测暗黑模式并调整样式
// 暗黑模式启用方法由您的应用主题系统决定

&lt;Segment v-model="selected" :options="options" /&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- API 文档 -->
      <section class="mb-8 rounded-lg shadow bg-white dark:bg-gray-800 overflow-hidden">
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-xl font-semibold">API 文档</h2>
        </div>

        <!-- Props -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium mb-4">Props</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    属性名</th>
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
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">options</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">SegmentOption[]</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">[]</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">选项数组，必填</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">modelValue
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string | number</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">undefined</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">选中的值，支持 v-model 双向绑定</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">size</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'sm' | 'md' | 'lg'
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'md'</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">组件尺寸</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">disabled
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否禁用</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">block</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否为块级元素（宽度 100%）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 类型定义 -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium mb-4">类型定义</h3>
          <div class="overflow-x-auto">
            <pre class="text-sm p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
export interface SegmentOption {
  label: string;   // 选项显示的文本
  value: string | number;  // 选项的值
  icon?: string;   // 可选的图标类名
}</pre>
          </div>
        </div>

        <!-- Events -->
        <div class="p-6">
          <h3 class="text-lg font-medium mb-4">事件</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    事件名</th>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    参数</th>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    说明</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    update:modelValue</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(value: string |
                    number)</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">选项变更时触发，用于 v-model 双向绑定</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">change</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(value: string |
                    number)</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">选项变更时触发</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 小结与最佳实践 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">小结与最佳实践</h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- 何时使用 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-indigo-600 dark:text-indigo-400">何时使用</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>需要在多个预设选项中进行单一选择时</li>
              <li>作为紧凑型的导航或切换界面时</li>
              <li>需要快速切换不同视图、筛选条件或模式时</li>
              <li>希望节省界面空间，替代大型标签页或下拉菜单时</li>
            </ul>
          </div>

          <!-- 何时不使用 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-rose-600 dark:text-rose-400">何时不使用</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>选项超过5个时，考虑使用下拉选择器更合适</li>
              <li>需要多选功能时，应使用复选框组或多选下拉框</li>
              <li>选项标签文字过长或空间有限时</li>
              <li>需要层级结构的导航时，应使用菜单组件</li>
            </ul>
          </div>

          <!-- 可访问性建议 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-emerald-600 dark:text-emerald-400">可访问性建议</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>组件已实现基本的键盘导航支持（Tab 和 Enter 键）</li>
              <li>添加恰当的 ARIA 属性，便于屏幕阅读器识别</li>
              <li>确保颜色对比度符合 WCAG 标准</li>
              <li>选项标签文字应简洁明了，避免使用太专业的术语</li>
            </ul>
          </div>

          <!-- 性能优化 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-blue-600 dark:text-blue-400">性能优化</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>组件内部使用了记忆化计算，避免不必要的重复渲染</li>
              <li>图标使用按需加载，减少不必要的资源消耗</li>
              <li>动态切换内容时使用 Vue 的过渡组件，优化用户体验</li>
              <li>对于大量数据的场景，切换操作应考虑懒加载</li>
            </ul>
          </div>

          <!-- 与其他组件的组合 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-purple-600 dark:text-purple-400">与其他组件的组合</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>结合内容面板，实现选项卡式界面</li>
              <li>与列表或表格组合，实现数据筛选功能</li>
              <li>与表单组件配合，作为选择器使用</li>
              <li>与图表组件结合，控制不同数据集的展示</li>
            </ul>
          </div>

          <!-- 响应式设计注意事项 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-amber-600 dark:text-amber-400">响应式设计注意事项</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>在小屏幕设备上，考虑使用 block 模式占满宽度</li>
              <li>选项过多时，考虑在移动端折叠或使用滑动布局</li>
              <li>根据屏幕尺寸调整组件大小，提高可用性</li>
              <li>图标和文本的组合在小屏幕上可能需要调整</li>
            </ul>
          </div>

          <!-- 主题定制 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-teal-600 dark:text-teal-400">主题定制</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>组件样式基于 Tailwind 设计，可通过类名覆盖实现定制</li>
              <li>支持亮色和暗色主题，自动适配系统设置</li>
              <li>动画效果可通过 CSS 变量自定义持续时间和缓动函数</li>
              <li>考虑使用品牌颜色定制活跃项的高亮样式</li>
            </ul>
          </div>

          <!-- 常见陷阱 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-red-600 dark:text-red-400">常见陷阱</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>避免在选项中使用复杂的嵌套内容，保持简洁</li>
              <li>注意处理选项变更时的边界情况，如原先选中的项被移除</li>
              <li>当选项动态变化时，确保选中状态正确同步</li>
              <li>避免频繁地改变选项数组结构，可能导致不必要的重渲染</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Segment from './Segment';

// 移除了深色模式切换相关代码

// 基础选项数据
const basicOptions = [
  { label: '每日', value: 'daily' },
  { label: '每周', value: 'weekly' },
  { label: '每月', value: 'monthly' }
];

// 带图标的选项数据 - 使用更现代化的图标
const iconOptions = [
  { label: '列表', value: 'list', icon: 'i-solar:list-bold' },
  { label: '卡片', value: 'card', icon: 'i-solar:card-bold' },
  { label: '网格', value: 'grid', icon: 'i-solar:square-top-bold' }
];

// 筛选器选项
const filterOptions = [
  { label: '所有产品', value: 'all' },
  { label: '低价产品', value: 'low' },
  { label: '高价产品', value: 'high' }
];

// 内容切换选项
const tabOptions = [
  { label: '产品信息', value: 'info' },
  { label: '技术规格', value: 'specs' },
  { label: '用户评价', value: 'reviews' }
];

// 主题展示选项
const themeOptions = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' }
];

// 各个示例的选中值
const basicSelected = ref('daily');
const iconSelected = ref('list');
const sizeSelected = ref('daily');
const blockSelected = ref('daily');
const disabledSelected = ref('daily');
const filterSelected = ref('all');
const tabSelected = ref('info');
const themeSelected = ref('option1');

// 示例产品数据
const products = [
  { id: 1, name: '笔记本电脑', price: 5999 },
  { id: 2, name: '无线鼠标', price: 99 },
  { id: 3, name: '机械键盘', price: 399 },
  { id: 4, name: '4K 显示器', price: 2499 },
  { id: 5, name: 'USB-C 转接器', price: 129 },
  { id: 6, name: '无线耳机', price: 999 },
  { id: 7, name: '电源适配器', price: 149 },
  { id: 8, name: '智能手表', price: 1599 },
];

// 筛选产品
const allProducts = computed(() => products);
const lowPriceProducts = computed(() => products.filter(p => p.price < 500));
const highPriceProducts = computed(() => products.filter(p => p.price >= 500));

// 变更处理函数
const handleChange = (value: string | number) => {
  console.log('选中的值：', value);
};

// 代码示例
const basicCode = `
import { ref } from 'vue';
import Segment from '@/components/Segment';

const selected = ref('daily');
const options = [
  { label: '每日', value: 'daily' },
  { label: '每周', value: 'weekly' },
  { label: '每月', value: 'monthly' }
];

// 模板中
<Segment v-model="selected" :options="options" />
`.trim();

const iconCode = `
const options = [
  { label: '列表', value: 'list', icon: 'i-solar:list-bold' },
  { label: '卡片', value: 'card', icon: 'i-solar:card-bold' },
  { label: '网格', value: 'grid', icon: 'i-solar:square-top-bold' }
];

<Segment v-model="selected" :options="options" />
`.trim();

const sizeCode = `
// 小尺寸
<Segment v-model="selected" :options="options" size="sm" />

// 中尺寸 (默认)
<Segment v-model="selected" :options="options" size="md" />

// 大尺寸
<Segment v-model="selected" :options="options" size="lg" />
`.trim();
</script>

<style scoped>
.demo-section {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.5s ease;
}

.demo-section:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
}

/* 内容切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.content-panel {
  transition: all 0.3s ease;
}

/* 自定义动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

/* 代码块样式 */
pre {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem;
}

.dark pre {
  background: rgba(255, 255, 255, 0.05);
}
</style>
