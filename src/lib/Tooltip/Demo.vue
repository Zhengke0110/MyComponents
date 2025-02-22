<template>
  <div class="p-8 space-y-12">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <GenericTooltip content="这是一个简单的提示">
        <template #trigger>
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            悬停查看提示
          </button>
        </template>
      </GenericTooltip>
    </section>

    <!-- 不同方向的提示 -->
    <section>
      <h2 class="text-xl font-bold mb-4">不同方向的提示</h2>
      <div class="flex gap-4">
        <GenericTooltip content="上方提示" position="top">
          <template #trigger>
            <button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              上
            </button>
          </template>
        </GenericTooltip>

        <GenericTooltip content="右侧提示" position="right">
          <template #trigger>
            <button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              右
            </button>
          </template>
        </GenericTooltip>

        <GenericTooltip content="下方提示" position="bottom">
          <template #trigger>
            <button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              下
            </button>
          </template>
        </GenericTooltip>

        <GenericTooltip content="左侧提示" position="left">
          <template #trigger>
            <button class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              左
            </button>
          </template>
        </GenericTooltip>
      </div>
    </section>

    <!-- 自定义内容 -->
    <section>
      <h2 class="text-xl font-bold mb-4">自定义内容</h2>
      <GenericTooltip position="right">
        <template #trigger>
          <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            查看详细信息
          </button>
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
      </GenericTooltip>
    </section>

    <!-- 自定义触发器 -->
    <section>
      <h2 class="text-xl font-bold mb-4">自定义触发器</h2>
      <div class="flex gap-4">
        <GenericTooltip content="图标触发的提示">
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
        </GenericTooltip>

        <GenericTooltip content="文本链接提示">
          <template #trigger>
            <span class="text-blue-500 hover:text-blue-600 cursor-pointer underline">
              帮助文档
            </span>
          </template>
        </GenericTooltip>
      </div>
    </section>

    <!-- 不同偏移距离 -->
    <section>
      <h2 class="text-xl font-bold mb-4">不同偏移距离</h2>
      <div class="flex gap-4 items-center">
        <GenericTooltip content="默认偏移 (10px)" position="top">
          <template #trigger>
            <button class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              默认偏移
            </button>
          </template>
        </GenericTooltip>

        <GenericTooltip content="较大偏移 (20px)" position="top" :offset="20">
          <template #trigger>
            <button class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              较大偏移
            </button>
          </template>
        </GenericTooltip>

        <GenericTooltip content="更大偏移 (30px)" position="top" :offset="30">
          <template #trigger>
            <button class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              更大偏移
            </button>
          </template>
        </GenericTooltip>
      </div>
    </section>

    <!-- 深色模式切换 -->
    <section>
      <h2 class="text-xl font-bold mb-4">深色模式切换</h2>
      <div class="flex items-center gap-4">
        <button
          @click="toggleDarkMode"
          class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-800"
        >
          切换{{ isDarkMode ? '浅色' : '深色' }}模式
        </button>
        <GenericTooltip content="主题会自动适应深色/浅色模式">
          <template #trigger>
            <span class="text-blue-500 hover:text-blue-600 cursor-pointer">
              查看效果
            </span>
          </template>
        </GenericTooltip>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GenericTooltip from './index.ts';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
</script>

<style>
html.dark {
  background-color: #1a1a1a;
  color: #ffffff;
}
</style>
