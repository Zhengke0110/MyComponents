<template>
    <div class="p-8 space-y-12">
        <h1 class="text-3xl font-bold mb-8">Tooltip 文字提示组件</h1>

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
                <div class="flex items-center">
                    <Tooltip position="bottom">
                        <template #trigger>
                            <Button type="success">查看详细信息</Button>
                        </template>
                        <template #content>
                            <div class="flex flex-col gap-2">
                                <h3 class="font-bold border-b pb-2">产品详情</h3>
                                <p>这是一个自定义的详细信息面板</p>
                                <div class="flex items-center gap-2">
                                    <span>⭐️</span>
                                    <span>5.0 评分</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span>📅</span>
                                    <span>2024-01-01</span>
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
                <div class="flex gap-6 items-center">
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

                    <Tooltip content="默认触发器">
                        <!-- 使用默认触发器 -->
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
                <div class="flex gap-4 items-center">
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
                        当屏幕空间不足时，Tooltip 会智能调整显示位置，确保内容始终可见。尝试将窗口滚动到边缘，观察提示框的位置变化。
                    </p>
                </div>
                <div class="flex gap-4">
                    <Tooltip content="我会根据可用空间自动调整位置" position="top">
                        <template #trigger>
                            <Button type="warning">智能位置调整</Button>
                        </template>
                    </Tooltip>
                </div>
                <div class="mt-4 bg-gray-100 p-3 rounded dark:bg-gray-700">
                    <pre class="text-sm">{{ codeSmartPosition }}</pre>
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
                        type="ghost"
                        icon="icon-[mingcute--moon-line]"
                    >
                        切换{{ isDarkMode ? '浅色' : '深色' }}模式
                    </Button>
                    <Tooltip content="提示会自动适应当前主题模式">
                        <template #trigger>
                            <span class="text-blue-500 hover:text-blue-600 cursor-pointer">
                                查看效果
                            </span>
                        </template>
                    </Tooltip>
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
</Tooltip>`;

const codeCustomContent = `<Tooltip position="bottom">
  <template #trigger>
    <Button type="success">查看详细信息</Button>
  </template>
  <template #content>
    <div class="flex flex-col gap-2">
      <h3 class="font-bold border-b pb-2">产品详情</h3>
      <p>这是一个自定义的详细信息面板</p>
      <div class="flex items-center gap-2">
        <span>⭐️</span>
        <span>5.0 评分</span>
      </div>
      <div class="flex items中心 gap-2">
        <span>📅</span>
        <span>2024-01-01</span>
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

<!-- 默认触发器 -->
<Tooltip content="默认触发器">
  <!-- 使用默认的问号图标 -->
</Tooltip>`;

const codeOffset = `<Tooltip content="默认偏移 (10px)" position="top">
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
</Tooltip>`;

const codeSmartPosition = `<Tooltip content="我会根据可用空间自动调整位置" position="top">
  <template #trigger>
    <Button type="warning">智能位置调整</Button>
  </template>
</Tooltip>`;
</script>

<style scoped>
html.dark {
    background-color: #1a1a1a;
    color: #ffffff;
}
</style>