<template>
    <div class="p-8 space-y-12">
        <h1 class="text-3xl font-bold mb-8">Tooltip 文字提示组件</h1>
        <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Tooltip 组件用于在用户悬停在元素上时显示提示信息，提高用户体验和界面可用性。支持自定义内容、多种显示位置和暗黑模式。
        </p>

        <!-- 基础用法 -->
        <section>
            <h2 class="text-xl font-bold mb-4">基础用法</h2>
            <div class="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
                <div class="flex items-center gap-4">
                    <Tooltip content="这是一个简单的提示">
                        <template #trigger>
                            <Button>悬停查看提示</Button>
                        </template>
                    </Tooltip>

                    <Tooltip content="默认使用问号图标作为触发器">
                        <!-- 使用默认问号图标 -->
                    </Tooltip>
                </div>
                <div class="mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700">
                    <pre class="text-sm">{{ codeBasic }}</pre>
                </div>
            </div>
        </section>

        <!-- 不同方向的提示 -->
        <section>
            <h2 class="text-xl font-bold mb-4">提示方向</h2>
            <div class="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
                <div class="flex flex-wrap gap-4">
                    <Tooltip content="上方提示" position="top">
                        <template #trigger>
                            <Button type="secondary">上方显示</Button>
                        </template>
                    </Tooltip>

                    <Tooltip content="下方提示" position="bottom">
                        <template #trigger>
                            <Button type="secondary">下方显示</Button>
                        </template>
                    </Tooltip>
                    
                    <div class="w-full mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <p>注意：当空间不足时，Tooltip 会自动切换到合适的方向</p>
                    </div>
                </div>
                <div class="mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700">
                    <pre class="text-sm">{{ codePositions }}</pre>
                </div>
            </div>
        </section>

        <!-- 自定义内容 -->
        <section>
            <h2 class="text-xl font-bold mb-4">自定义内容</h2>
            <div class="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
                <div class="flex items-center gap-4">
                    <Tooltip position="bottom">
                        <template #trigger>
                            <Button type="success">产品详情</Button>
                        </template>
                        <template #content>
                            <div class="flex flex-col gap-2">
                                <h3 class="font-bold border-b pb-2">高级智能手表</h3>
                                <p>全新一代智能手表，支持健康监测和运动追踪</p>
                                <div class="flex items-center gap-2">
                                    <span>⭐️</span>
                                    <span>4.8 评分 (128条评价)</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span>📅</span>
                                    <span>2024-05-10 发布</span>
                                </div>
                                <div class="flex items中心 gap-2 text-green-600 font-medium">
                                    <span>💰</span>
                                    <span>¥1,299</span>
                                </div>
                            </div>
                        </template>
                    </Tooltip>

                    <Tooltip position="bottom">
                        <template #trigger>
                            <Button type="warning">用户信息</Button>
                        </template>
                        <template #content>
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                    JD
                                </div>
                                <div>
                                    <div class="font-medium">John Doe</div>
                                    <div class="text-xs text-gray-500 dark:text-gray-400">产品设计师</div>
                                </div>
                            </div>
                        </template>
                    </Tooltip>
                </div>
                <div class="mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700">
                    <pre class="text-sm">{{ codeCustomContent }}</pre>
                </div>
            </div>
        </section>

        <!-- 自定义触发器 -->
        <section>
            <h2 class="text-xl font-bold mb-4">自定义触发器</h2>
            <div class="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
                <div class="flex gap-6 items-center flex-wrap">
                    <Tooltip content="图标触发的提示">
                        <template #trigger>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 text-blue-500 hover:text-blue-600 cursor-pointer"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                />
                            </svg>
                        </template>
                    </Tooltip>

                    <Tooltip content="文本链接提示">
                        <template #trigger>
                            <span class="text-blue-500 hover:text-blue-600 cursor-pointer underline">
                                帮助文档
                            </span>
                        </template>
                    </Tooltip>

                    <Tooltip content="图片作为触发器">
                        <template #trigger>
                            <div class="w-10 h-10 rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                                <img src="https://placekitten.com/100/100" alt="猫咪图片" class="w-full h-full object-cover" />
                            </div>
                        </template>
                    </Tooltip>

                    <Tooltip content="自定义按钮作为触发器">
                        <template #trigger>
                            <button class="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
                                自定义按钮
                            </button>
                        </template>
                    </Tooltip>

                    <Tooltip content="默认触发器">
                        <!-- 使用默认的问号图标 -->
                    </Tooltip>
                </div>
                <div class="mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700">
                    <pre class="text-sm">{{ codeCustomTrigger }}</pre>
                </div>
            </div>
        </section>

        <!-- 不同偏移距离 -->
        <section>
            <h2 class="text-xl font-bold mb-4">不同偏移距离</h2>
            <div class="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
                <div class="flex gap-4 items-center flex-wrap">
                    <Tooltip content="默认偏移 (10px)" position="top">
                        <template #trigger>
                            <Button type="info">默认偏移</Button>
                        </template>
                    </Tooltip>

                    <Tooltip content="较大偏移 (20px)" position="top" :offset="20">
                        <template #trigger>
                            <Button type="info">较大偏移 (20px)</Button>
                        </template>
                    </Tooltip>

                    <Tooltip content="更大偏移 (30px)" position="top" :offset="30">
                        <template #trigger>
                            <Button type="info">更大偏移 (30px)</Button>
                        </template>
                    </Tooltip>

                    <div class="w-full mt-3">
                        <div class="flex gap-4 items-center">
                            <Tooltip content="下方默认偏移 (10px)" position="bottom">
                                <template #trigger>
                                    <Button type="secondary">下方默认偏移</Button>
                                </template>
                            </Tooltip>

                            <Tooltip content="下方较大偏移 (20px)" position="bottom" :offset="20">
                                <template #trigger>
                                    <Button type="secondary">下方较大偏移 (20px)</Button>
                                </template>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div class="mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700">
                    <pre class="text-sm">{{ codeOffset }}</pre>
                </div>
            </div>
        </section>

        <!-- 智能位置调整 -->
        <section>
            <h2 class="text-xl font-bold mb-4">智能位置调整</h2>
            <div class="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
                <div class="flex items-center mb-4">
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        当屏幕空间不足时，Tooltip 会智能调整显示位置，确保内容始终可见。尝试将窗口滚动到边缘，或调整浏览器大小，观察提示框的位置变化。
                    </p>
                </div>
                <div class="h-48 flex items-start">
                    <div class="mt-2">
                        <Tooltip content="我在顶部时会自动避免被截断" position="top">
                            <template #trigger>
                                <Button type="warning">靠近顶部的元素</Button>
                            </template>
                        </Tooltip>
                    </div>
                </div>
                <div class="flex justify-end">
                    <Tooltip content="我会避免超出右侧边界" position="top">
                        <template #trigger>
                            <Button type="warning">靠近右侧的元素</Button>
                        </template>
                    </Tooltip>
                </div>
                <div class="mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700">
                    <pre class="text-sm">{{ codeSmartPosition }}</pre>
                </div>
            </div>
        </section>

        <!-- 复杂场景应用 -->
        <section>
            <h2 class="text-xl font-bold mb-4">复杂场景应用</h2>
            <div class="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
                <div class="flex flex-col gap-4">
                    <!-- 表单中的帮助提示 -->
                    <div class="flex items-center gap-2">
                        <label for="username" class="min-w-32 text-gray-700 dark:text-gray-300">用户名</label>
                        <input id="username" type="text" class="px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600" placeholder="请输入用户名" />
                        <Tooltip content="用户名长度需要在3-20个字符之间，只能包含字母、数字和下划线">
                            <template #trigger>
                                <span class="cursor-pointer text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </template>
                        </Tooltip>
                    </div>

                    <!-- 表格中的数据说明 -->
                    <div class="mt-4">
                        <table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                            <thead>
                                <tr class="bg-gray-100 dark:bg-gray-700">
                                    <th class="p-2 border border-gray-300 dark:border-gray-600 text-left">产品名称</th>
                                    <th class="p-2 border border-gray-300 dark:border-gray-600 text-left">
                                        <div class="flex items-center gap-1">
                                            <span>库存状态</span>
                                            <Tooltip content="绿色表示库存充足，黄色表示库存较低，红色表示缺货">
                                                <template #trigger>
                                                    <span class="cursor-pointer text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </span>
                                                </template>
                                            </Tooltip>
                                        </div>
                                    </th>
                                    <th class="p-2 border border-gray-300 dark:border-gray-600 text-left">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border border-gray-300 dark:border-gray-600">智能手表 Pro</td>
                                    <td class="p-2 border border-gray-300 dark:border-gray-600">
                                        <span class="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                                    </td>
                                    <td class="p-2 border border-gray-300 dark:border-gray-600">
                                        <Tooltip content="点击查看详细库存信息和历史变动">
                                            <template #trigger>
                                                <Button type="secondary" size="sm">查看详情</Button>
                                            </template>
                                        </Tooltip>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-2 border border-gray-300 dark:border-gray-600">无线耳机</td>
                                    <td class="p-2 border border-gray-300 dark:border-gray-600">
                                        <span class="inline-block w-3 h-3 rounded-full bg黄色-500"></span>
                                    </td>
                                    <td class="p-2 border border-gray-300 dark:border-gray-600">
                                        <Tooltip content="点击查看详细库存信息和历史变动">
                                            <template #trigger>
                                                <Button type="secondary" size="sm">查看详情</Button>
                                            </template>
                                        </Tooltip>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700">
                    <pre class="text-sm">{{ codeComplexScenario }}</pre>
                </div>
            </div>
        </section>

        <!-- 深色模式切换 -->
        <section>
            <h2 class="text-xl font-bold mb-4">深色模式切换</h2>
            <div class="bg-gray-50 p-6 rounded-lg dark:bg-gray-800">
                <div class="flex items-center gap-4">
                    <Button 
                        @click="toggleDarkMode" 
                        type="info"
                        class="flex items-center gap-2"
                    >
                        <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        切换{{ isDarkMode ? '浅色' : '深色' }}模式
                    </Button>
                    <Tooltip content="Tooltip 会自动适应当前主题模式，无需额外配置">
                        <template #trigger>
                            <span class="text-blue-500 hover:text-blue-600 cursor-pointer">
                                查看效果
                            </span>
                        </template>
                    </Tooltip>
                </div>
                <div class="mt-6 p-4 bg-white dark:bg-gray-900 rounded border dark:border-gray-700">
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        Tooltip 组件会自动检测并适应当前的主题模式，当网站切换到深色模式时，提示框会相应地调整颜色和样式。
                    </p>
                    
                    <div class="flex gap-4">
                        <Tooltip content="深色模式下我会更换颜色">
                            <template #trigger>
                                <Button>查看深色模式适配</Button>
                            </template>
                        </Tooltip>
                        
                        <Tooltip position="bottom">
                            <template #trigger>
                                <Button type="secondary">自定义内容示例</Button>
                            </template>
                            <template #content>
                                <div class="flex flex-col gap-2">
                                    <h3 class="font-bold">深色模式支持</h3>
                                    <p>此提示框在深色模式下会自动调整样式</p>
                                    <div class="p-2 bg-gray-100 dark:bg-gray-700 rounded">
                                        <code class="text-xs">自动适配主题</code>
                                    </div>
                                </div>
                            </template>
                        </Tooltip>
                    </div>
                </div>
                <div class="mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700">
                    <pre class="text-sm">{{ codeDarkMode }}</pre>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../../components/Button';
import Tooltip from '../../components/Tooltip';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

// 示例代码片段
const codeBasic = `<Tooltip content="这是一个简单的提示">
  <template #trigger>
    <Button>悬停查看提示</Button>
  </template>
</Tooltip>

<!-- 使用默认问号图标 -->
<Tooltip content="默认使用问号图标作为触发器">
  <!-- 使用默认问号图标 -->
</Tooltip>`;

const codePositions = `<Tooltip content="上方提示" position="top">
  <template #trigger>
    <Button type="secondary">上方显示</Button>
  </template>
</Tooltip>

<Tooltip content="下方提示" position="bottom">
  <template #trigger>
    <Button type="secondary">下方显示</Button>
  </template>
</Tooltip>

<!-- 当空间不足时，会自动切换方向 -->`;

const codeCustomContent = `<Tooltip position="bottom">
  <template #trigger>
    <Button type="success">产品详情</Button>
  </template>
  <template #content>
    <div class="flex flex-col gap-2">
      <h3 class="font-bold border-b pb-2">高级智能手表</h3>
      <p>全新一代智能手表，支持健康监测和运动追踪</p>
      <div class="flex items-center gap-2">
        <span>⭐️</span>
        <span>4.8 评分 (128条评价)</span>
      </div>
      <div class="flex items中心 gap-2">
        <span>📅</span>
        <span>2024-05-10 发布</span>
      </div>
      <div class="flex items中心 gap-2 text-green-600 font-medium">
        <span>💰</span>
        <span>¥1,299</span>
      </div>
    </div>
  </template>
</Tooltip>`;

const codeCustomTrigger = `<!-- 图标触发器 -->
<Tooltip content="图标触发的提示">
  <template #trigger>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-blue-500 hover:text-blue-600 cursor-pointer"
    >
      <!-- 图标路径 -->
    </svg>
  </template>
</Tooltip>

<!-- 文本触发器 -->
<Tooltip content="文本链接提示">
  <template #trigger>
    <span class="text-blue-500 hover:text-blue-600 cursor-pointer underline">
      帮助文档
    </span>
  </template>
</Tooltip>

<!-- 图片触发器 -->
<Tooltip content="图片作为触发器">
  <template #trigger>
    <div class="w-10 h-10 rounded overflow-hidden cursor-pointer hover:opacity-80">
      <img src="..." alt="触发图片" class="w-full h-full object-cover" />
    </div>
  </template>
</Tooltip>

<!-- 默认触发器 -->
<Tooltip content="默认触发器">
  <!-- 使用默认的问号图标 -->
</Tooltip>`;

const codeOffset = `<!-- 上方不同偏移距离 -->
<Tooltip content="默认偏移 (10px)" position="top">
  <template #trigger>
    <Button type="info">默认偏移</Button>
  </template>
</Tooltip>

<Tooltip content="较大偏移 (20px)" position="top" :offset="20">
  <template #trigger>
    <Button type="info">较大偏移 (20px)</Button>
  </template>
</Tooltip>

<!-- 下方不同偏移距离 -->
<Tooltip content="下方默认偏移 (10px)" position="bottom">
  <template #trigger>
    <Button type="secondary">下方默认偏移</Button>
  </template>
</Tooltip>

<Tooltip content="下方较大偏移 (20px)" position="bottom" :offset="20">
  <template #trigger>
    <Button type="secondary">下方较大偏移 (20px)</Button>
  </template>
</Tooltip>`;

const codeSmartPosition = `<!-- 靠近边缘时的智能调整 -->
<Tooltip content="我在顶部时会自动避免被截断" position="top">
  <template #trigger>
    <Button type="warning">靠近顶部的元素</Button>
  </template>
</Tooltip>

<Tooltip content="我会避免超出右侧边界" position="top">
  <template #trigger>
    <Button type="warning">靠近右侧的元素</Button>
  </template>
</Tooltip>`;

const codeComplexScenario = `<!-- 表单帮助信息 -->
<div class="flex items-center gap-2">
  <label for="username">用户名</label>
  <input id="username" type="text" class="px-3 py-2 border rounded" />
  <Tooltip content="用户名长度需要在3-20个字符之间，只能包含字母、数字和下划线">
    <template #trigger>
      <span class="cursor-pointer text-gray-500">
        <svg><!-- 信息图标 --></svg>
      </span>
    </template>
  </Tooltip>
</div>

<!-- 表格中的提示 -->
<table class="min-w-full border-collapse border">
  <thead>
    <tr>
      <th>产品名称</th>
      <th>
        <div class="flex items-center gap-1">
          <span>库存状态</span>
          <Tooltip content="绿色表示库存充足，黄色表示库存较低，红色表示缺货">
            <template #trigger>
              <span class="cursor-pointer text-gray-500">
                <svg><!-- 信息图标 --></svg>
              </span>
            </template>
          </Tooltip>
        </div>
      </th>
      <th>操作</th>
    </tr>
  </thead>
  <!-- 表格内容... -->
</table>`;

const codeDarkMode = `<!-- 深色模式自动适配 -->
<Tooltip content="深色模式下我会更换颜色">
  <template #trigger>
    <Button>查看深色模式适配</Button>
  </template>
</Tooltip>

<Tooltip position="bottom">
  <template #trigger>
    <Button type="secondary">自定义内容示例</Button>
  </template>
  <template #content>
    <div class="flex flex-col gap-2">
      <h3 class="font-bold">深色模式支持</h3>
      <p>此提示框在深色模式下会自动调整样式</p>
      <div class="p-2 bg-gray-100 dark:bg-gray-700 rounded">
        <code class="text-xs">自动适配主题</code>
      </div>
    </div>
  </template>
</Tooltip>`;
</script>

<style scoped>

/* 处理代码高亮显示 */
pre {
    white-space: pre-wrap;
    word-break: break-word;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style>