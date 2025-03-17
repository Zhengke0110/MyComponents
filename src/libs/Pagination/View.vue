<template>
  <div class="p-6 min-h-screen transition-all duration-300">
    <!-- 顶部标题 -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Pagination 分页组件</h1>
    </div>

    <!-- 基础用法 -->
    <section class="space-y-4 mb-10">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">基础用法</h2>
      <div class="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
          最基本的分页组件使用方式：
        </p>
        <Pagination v-model:current="basicPagination.current.value" :total="basicPagination.total"
          :page-size="basicPagination.pageSize" />
        <div class="mt-4 py-2 px-3 bg-gray-50 dark:bg-gray-700/50 rounded text-sm">
          <p class="text-gray-700 dark:text-gray-300">当前页: {{ basicPagination.current.value }}</p>
          <p class="text-gray-700 dark:text-gray-300">总条目: {{ basicPagination.total }}</p>
          <p class="text-gray-700 dark:text-gray-300">每页条数: {{ basicPagination.pageSize }}</p>
        </div>
        <div class="mt-4 py-2 px-3 bg-gray-50 dark:bg-gray-700/50 rounded text-sm">
          <pre class="text-gray-700 dark:text-gray-300">{{ basicPaginationCode }}</pre>
        </div>
      </div>
    </section>

    <!-- 主题色展示 -->
    <section class="space-y-4 mb-10">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">颜色主题</h2>
      <div class="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
          支持所有 Tailwind CSS 颜色主题：
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-6">
          <button v-for="theme in availableThemes" :key="theme" @click="selectedTheme = theme"
            :style="getThemeButtonStyles(theme)"
            class="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 hover:shadow-sm border">
            {{ theme }}
          </button>
        </div>

        <Pagination v-model:current="themePagination.current.value" :total="themePagination.total"
          :theme="selectedTheme" />
      </div>
    </section>

    <!-- 快速跳转 -->
    <section class="space-y-4 mb-10">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">快速跳转</h2>
      <div class="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
          启用快速跳转功能，支持直接输入页码：
        </p>
        <Pagination v-model:current="quickJumpPagination.current.value" :total="quickJumpPagination.total"
          :show-quick-jumper="true" theme="blue" />
      </div>
    </section>

    <!-- 自定义每页条数 -->
    <section class="space-y-4 mb-10">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">自定义每页条数</h2>
      <div class="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <div class="flex flex-wrap items-center gap-4 mb-6">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">每页条数:</span>
            <select v-model="customSizePagination.pageSize.value"
              class="px-3 py-1.5 rounded-md text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200">
              <option v-for="size in [10, 20, 50, 100]" :key="size" :value="size">
                {{ size }}
              </option>
            </select>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">总条目:</span>
            <input type="number" v-model.number="customSizePagination.total.value" min="0"
              class="w-24 px-3 py-1.5 rounded-md text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200" />
          </div>
        </div>

        <Pagination v-model:current="customSizePagination.current.value" :total="customSizePagination.total.value"
          :page-size="customSizePagination.pageSize.value" :show-quick-jumper="true" theme="emerald" />
      </div>
    </section>

    <!-- 加载状态 -->
    <section class="space-y-4 mb-10">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">加载状态</h2>
      <div class="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
          分页切换时的加载状态演示：
        </p>
        <div :class="{ 'opacity-60 pointer-events-none': loadingPagination.loading.value }"
          class="transition-opacity duration-300">
          <Pagination v-model:current="loadingPagination.current.value" :total="loadingPagination.total"
            :disabled="loadingPagination.loading.value" theme="purple" @change="handleLoadingPageChange" />
          <div v-if="loadingPagination.loading.value"
            class="mt-3 flex items-center justify-center gap-2 text-sm text-purple-600 dark:text-purple-400">
            <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
            <span>加载中...</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 表格集成 -->
    <section class="space-y-4 mb-10">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">表格集成示例</h2>
      <div class="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <div :class="{ 'opacity-60': tablePagination.loading.value }" class="transition-opacity duration-300">
          <!-- 简单表格 -->
          <div class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    ID</th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    姓名</th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    邮箱</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr v-for="item in tableData" :key="item.id"
                  class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{{ item.id }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{{ item.name }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{{ item.email }}</td>
                </tr>
                <tr v-if="tablePagination.loading.value" v-for="i in 3" :key="`skeleton-${i}`">
                  <td colspan="3" class="px-6 py-4 whitespace-nowrap">
                    <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 分页控制器 -->
          <div class="mt-4 flex items-center justify-between">
            <span class="text-sm text-gray-700 dark:text-gray-300">
              显示 {{ ((tablePagination.current.value - 1) * tablePagination.pageSize.value) + 1 }}-{{
                Math.min(tablePagination.current.value * tablePagination.pageSize.value, tablePagination.total.value) }}
              条，共 {{ tablePagination.total.value }} 条记录
            </span>

            <Pagination v-model:current="tablePagination.current.value" :total="tablePagination.total.value"
              :page-size="tablePagination.pageSize.value" :disabled="tablePagination.loading.value" theme="indigo"
              @change="handleTablePageChange" />
          </div>
        </div>
      </div>
    </section>

    <!-- 小结与最佳实践 -->
    <section class="space-y-4 mb-10">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">小结与最佳实践</h2>
      <div class="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">设计原则</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
          <li>分页组件应保持简洁，占据适当空间，不应喧宾夺主</li>
          <li>当数据量较大时，提供快速跳转功能，帮助用户快速定位</li>
          <li>明确显示当前页码，以及总页数和总条目数</li>
          <li>使用与应用整体设计风格一致的主题颜色</li>
        </ul>

        <h3 class="text-lg font-medium text-gray-900 dark:text-white mt-6 mb-2">使用场景</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
          <li>表格数据分页展示</li>
          <li>搜索结果分页浏览</li>
          <li>内容列表延迟加载</li>
          <li>需要分批展示大量数据的任何场景</li>
        </ul>

        <h3 class="text-lg font-medium text-gray-900 dark:text-white mt-6 mb-2">注意事项</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
          <li>确保 <code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">total</code> 和 <code
              class="text-sm bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">current</code> 属性保持同步</li>
          <li>根据内容性质合理设置 <code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">pageSize</code>，避免频繁切换页面
          </li>
          <li>在加载数据时，可以临时设置 <code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">disabled</code> 为
            <code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">true</code> 以防止用户操作
          </li>
          <li>大数据量时建议使用 <code class="text-sm bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">showQuickJumper</code>
            提供快速跳转功能</li>
          <li>确保在移动设备上分页组件仍有足够的点击区域</li>
        </ul>

        <h3 class="text-lg font-medium text-gray-900 dark:text-white mt-6 mb-2">可访问性建议</h3>
        <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
          <li>使用足够的对比度确保分页按钮在各种视觉条件下可见</li>
          <li>确保键盘用户可以通过 Tab 键导航所有分页按钮</li>
          <li>在屏幕阅读器中提供明确的当前页面状态信息</li>
        </ul>
      </div>
    </section>

    <!-- API文档 -->
    <section class="space-y-4 mb-10">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">API 文档</h2>
      <div
        class="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm space-y-6">
        <!-- Props 部分 -->
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Props</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th scope="col"
                    class="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    属性名</th>
                  <th scope="col"
                    class="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    类型</th>
                  <th scope="col"
                    class="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    默认值</th>
                  <th scope="col"
                    class="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    说明</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-medium">current</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">number</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">当前页码，支持 v-model:current 双向绑定</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-medium">total</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">number</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">总条目数（必填）</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-medium">pageSize</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">number</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">20</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">每页条目数</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-medium">disabled</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">是否禁用分页组件</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-medium">showQuickJumper</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">是否显示快速跳转输入框</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-medium">theme</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">ColorType</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">'indigo'</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">主题颜色，支持所有 Tailwind 颜色</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-medium">dark</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">是否强制使用暗色模式</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 事件部分 -->
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">事件</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th scope="col"
                    class="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    事件名</th>
                  <th scope="col"
                    class="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    参数</th>
                  <th scope="col"
                    class="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    说明</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-medium">update:current</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">(page: number)</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">当前页码变化时触发，支持 v-model:current 双向绑定</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 text-sm text-gray-900 dark:text-white font-medium">change</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">(page: number)</td>
                  <td class="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">页码变化时触发</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 颜色主题部分 -->
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">支持的颜色主题</h3>
          <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p>组件支持所有 Tailwind CSS 颜色，具体包括：</p>
            <ul class="pl-5 list-disc space-y-1">
              <li><span class="font-medium">灰色系：</span>slate, gray, zinc, neutral, stone</li>
              <li><span class="font-medium">暖色系：</span>red, orange, amber, yellow</li>
              <li><span class="font-medium">绿色系：</span>lime, green, emerald, teal</li>
              <li><span class="font-medium">蓝色系：</span>cyan, sky, blue, indigo</li>
              <li><span class="font-medium">紫粉系：</span>violet, purple, fuchsia, pink, rose</li>
            </ul>
          </div>
        </div>

        <!-- 类型定义部分 -->
        <div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">TypeScript 类型定义</h3>
          <div class="bg-gray-50 dark:bg-gray-800/50 overflow-x-auto rounded-md p-4">
            <pre class="text-xs text-gray-800 dark:text-gray-300"><code>// ColorType 类型定义
type ColorType = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉系

// 组件 Props 类型定义
interface PaginationProps {
  total: number;            // 总条目数
  current: number;          // 当前页码
  pageSize?: number;        // 每页条目数
  disabled?: boolean;       // 是否禁用
  showQuickJumper?: boolean; // 是否显示快速跳转
  theme?: ColorType;        // 颜色主题
  dark?: boolean;           // 是否强制使用暗色模式
}</code></pre>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Pagination from './Pagination'
import { type ColorType } from './confg'

// 基础用法示例数据
const basicPagination = {
  current: ref(1),
  total: 100,
  pageSize: 10
};

// 快速跳转示例数据
const quickJumpPagination = {
  current: ref(15),
  total: 500,
  pageSize: 20
};

// 动态页面大小示例数据
const customSizePagination = {
  current: ref(1),
  pageSize: ref(10),
  total: ref(200)
};

// 不同主题示例数据
const themePagination = {
  current: ref(3),
  total: 100,
  theme: ref<ColorType>('indigo')
};

// 加载状态示例数据
const loadingPagination = {
  current: ref(1),
  total: 100,
  loading: ref(false)
};

// 表格集成示例数据
const tableData = ref<Array<{ id: number; name: string; email: string }>>([]);
const tablePagination = {
  current: ref(1),
  pageSize: ref(10),
  total: ref(235),
  loading: ref(false)
};

// 可用的颜色主题
const availableThemes: ColorType[] = [
  'slate', 'gray', 'zinc', 'neutral', 'stone',  // 灰色系
  'red', 'orange', 'amber', 'yellow',           // 暖色系
  'lime', 'green', 'emerald', 'teal',           // 绿色系
  'cyan', 'sky', 'blue', 'indigo',              // 蓝色系
  'violet', 'purple', 'fuchsia', 'pink', 'rose' // 紫粉色系
];

// 选择主题
const selectedTheme = ref<ColorType>('indigo');

// 生成模拟表格数据
const generateTableData = (page: number, pageSize: number) => {
  tablePagination.loading.value = true;
  setTimeout(() => {
    const startIndex = (page - 1) * pageSize;
    tableData.value = Array(pageSize).fill(0).map((_, i) => ({
      id: startIndex + i + 1,
      name: `User ${startIndex + i + 1}`,
      email: `user${startIndex + i + 1}@example.com`
    }));
    tablePagination.loading.value = false;
  }, 500);
};

// 页码变化处理函数
const handleTablePageChange = (page: number) => {
  tablePagination.current.value = page;
  generateTableData(page, tablePagination.pageSize.value);
};

// 模拟加载效果
const handleLoadingPageChange = (page: number) => {
  loadingPagination.loading.value = true;
  loadingPagination.current.value = page;
  setTimeout(() => {
    loadingPagination.loading.value = false;
  }, 800);
};

// 初始化
onMounted(() => {
  generateTableData(tablePagination.current.value, tablePagination.pageSize.value);
});

const basicPaginationCode = `<Pagination
  v-model:current="currentPage"
  :total="100"
  :page-size="10"
  @change="handlePageChange"
/>`

// 主题颜色映射
const themeColorMap = {
  // 灰色系
  slate: { bg: '#f8fafc', text: '#475569', darkBg: '#1e293b', darkText: '#94a3b8', border: '#e2e8f0', darkBorder: '#334155', activeBg: '#f1f5f9', darkActiveBg: '#0f172a', activeText: '#334155', darkActiveText: '#cbd5e1' },
  gray: { bg: '#f9fafb', text: '#4b5563', darkBg: '#1f2937', darkText: '#9ca3af', border: '#e5e7eb', darkBorder: '#374151', activeBg: '#f3f4f6', darkActiveBg: '#111827', activeText: '#374151', darkActiveText: '#d1d5db' },
  zinc: { bg: '#fafafa', text: '#52525b', darkBg: '#27272a', darkText: '#a1a1aa', border: '#e4e4e7', darkBorder: '#3f3f46', activeBg: '#f4f4f5', darkActiveBg: '#18181b', activeText: '#3f3f46', darkActiveText: '#d4d4d8' },
  neutral: { bg: '#fafafa', text: '#525252', darkBg: '#262626', darkText: '#a3a3a3', border: '#e5e5e5', darkBorder: '#404040', activeBg: '#f5f5f5', darkActiveBg: '#171717', activeText: '#404040', darkActiveText: '#d4d4d4' },
  stone: { bg: '#fafaf9', text: '#57534e', darkBg: '#292524', darkText: '#a8a29e', border: '#e7e5e4', darkBorder: '#44403c', activeBg: '#f5f5f4', darkActiveBg: '#1c1917', activeText: '#44403c', darkActiveText: '#d6d3d1' },

  // 暖色系
  red: { bg: '#fef2f2', text: '#dc2626', darkBg: '#7f1d1d', darkText: '#ef4444', border: '#fee2e2', darkBorder: '#991b1b', activeBg: '#fee2e2', darkActiveBg: '#450a0a', activeText: '#b91c1c', darkActiveText: '#fca5a5' },
  orange: { bg: '#fff7ed', text: '#ea580c', darkBg: '#7c2d12', darkText: '#f97316', border: '#ffedd5', darkBorder: '#9a3412', activeBg: '#ffedd5', darkActiveBg: '#431407', activeText: '#c2410c', darkActiveText: '#fdba74' },
  amber: { bg: '#fffbeb', text: '#d97706', darkBg: '#78350f', darkText: '#f59e0b', border: '#fef3c7', darkBorder: '#92400e', activeBg: '#fef3c7', darkActiveBg: '#451a03', activeText: '#b45309', darkActiveText: '#fcd34d' },
  yellow: { bg: '#fefce8', text: '#ca8a04', darkBg: '#713f12', darkText: '#eab308', border: '#fef9c3', darkBorder: '#854d0e', activeBg: '#fef9c3', darkActiveBg: '#422006', activeText: '#a16207', darkActiveText: '#fde047' },

  // 绿色系
  lime: { bg: '#f7fee7', text: '#65a30d', darkBg: '#365314', darkText: '#84cc16', border: '#ecfccb', darkBorder: '#4d7c0f', activeBg: '#ecfccb', darkActiveBg: '#1a2e05', activeText: '#4d7c0f', darkActiveText: '#bef264' },
  green: { bg: '#f0fdf4', text: '#16a34a', darkBg: '#14532d', darkText: '#22c55e', border: '#dcfce7', darkBorder: '#15803d', activeBg: '#dcfce7', darkActiveBg: '#052e16', activeText: '#15803d', darkActiveText: '#86efac' },
  emerald: { bg: '#ecfdf5', text: '#059669', darkBg: '#064e3b', darkText: '#10b981', border: '#d1fae5', darkBorder: '#047857', activeBg: '#d1fae5', darkActiveBg: '#022c22', activeText: '#047857', darkActiveText: '#6ee7b7' },
  teal: { bg: '#f0fdfa', text: '#0d9488', darkBg: '#134e4a', darkText: '#14b8a6', border: '#ccfbf1', darkBorder: '#0f766e', activeBg: '#ccfbf1', darkActiveBg: '#042f2e', activeText: '#0f766e', darkActiveText: '#5eead4' },

  // 蓝色系
  cyan: { bg: '#ecfeff', text: '#0891b2', darkBg: '#164e63', darkText: '#06b6d4', border: '#cffafe', darkBorder: '#0e7490', activeBg: '#cffafe', darkActiveBg: '#083344', activeText: '#0e7490', darkActiveText: '#67e8f9' },
  sky: { bg: '#f0f9ff', text: '#0284c7', darkBg: '#0c4a6e', darkText: '#0ea5e9', border: '#e0f2fe', darkBorder: '#0369a1', activeBg: '#e0f2fe', darkActiveBg: '#082f49', activeText: '#0369a1', darkActiveText: '#7dd3fc' },
  blue: { bg: '#eff6ff', text: '#2563eb', darkBg: '#1e3a8a', darkText: '#3b82f6', border: '#dbeafe', darkBorder: '#1d4ed8', activeBg: '#dbeafe', darkActiveBg: '#172554', activeText: '#1d4ed8', darkActiveText: '#93c5fd' },
  indigo: { bg: '#eef2ff', text: '#4f46e5', darkBg: '#312e81', darkText: '#6366f1', border: '#e0e7ff', darkBorder: '#4338ca', activeBg: '#e0e7ff', darkActiveBg: '#1e1b4b', activeText: '#4338ca', darkActiveText: '#a5b4fc' },

  // 紫粉系
  violet: { bg: '#f5f3ff', text: '#7c3aed', darkBg: '#4c1d95', darkText: '#8b5cf6', border: '#ede9fe', darkBorder: '#6d28d9', activeBg: '#ede9fe', darkActiveBg: '#2e1065', activeText: '#6d28d9', darkActiveText: '#c4b5fd' },
  purple: { bg: '#faf5ff', text: '#9333ea', darkBg: '#581c87', darkText: '#a855f7', border: '#f3e8ff', darkBorder: '#7e22ce', activeBg: '#f3e8ff', darkActiveBg: '#3b0764', activeText: '#7e22ce', darkActiveText: '#d8b4fe' },
  fuchsia: { bg: '#fdf4ff', text: '#c026d3', darkBg: '#701a75', darkText: '#d946ef', border: '#fae8ff', darkBorder: '#a21caf', activeBg: '#fae8ff', darkActiveBg: '#4a044e', activeText: '#a21caf', darkActiveText: '#e879f9' },
  pink: { bg: '#fdf2f8', text: '#db2777', darkBg: '#831843', darkText: '#ec4899', border: '#fce7f3', darkBorder: '#be185d', activeBg: '#fce7f3', darkActiveBg: '#500724', activeText: '#be185d', darkActiveText: '#f9a8d4' },
  rose: { bg: '#fff1f2', text: '#e11d48', darkBg: '#881337', darkText: '#f43f5e', border: '#ffe4e6', darkBorder: '#be123c', activeBg: '#ffe4e6', darkActiveBg: '#4c0519', activeText: '#be123c', darkActiveText: '#fda4af' }
};

// 获取主题按钮样式
const getThemeButtonStyles = (theme: ColorType) => {
  const colors = themeColorMap[theme];
  const isSelected = selectedTheme.value === theme;

  return {
    backgroundColor: isSelected ? colors.activeBg : colors.bg,
    color: isSelected ? colors.activeText : colors.text,
    borderColor: isSelected ? colors.activeText : colors.border,
    '.dark &': {
      backgroundColor: isSelected ? colors.darkActiveBg : colors.darkBg,
      color: isSelected ? colors.darkActiveText : colors.darkText,
      borderColor: isSelected ? colors.darkActiveText : colors.darkBorder,
    }
  };
};
</script>

<style scoped>
/* 优化过渡效果 */
button {
  position: relative;
  transition: all 0.2s ease-in-out;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

/* 暗色模式转换过渡 */
:root {
  --transition-duration: 300ms;
}

.dark button,
.dark div,
.dark h1,
.dark h2,
.dark h3,
.dark p,
.dark span {
  transition: background-color var(--transition-duration) ease-in-out,
    color var(--transition-duration) ease-in-out,
    border-color var(--transition-duration) ease-in-out;
}

/* 保留原有的pulse动画 */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}
</style>