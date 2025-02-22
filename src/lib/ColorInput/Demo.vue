<template>
  <div class="p-8 space-y-12">
    <!-- 基础用法 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">基础用法</h2>
      <div class="flex items-center gap-8">
        <div class="space-y-2">
          <p class="text-sm text-gray-600">默认颜色选择器：</p>
          <ColorInput v-model="basicColor" @change="handleColorChange" />
          <p class="mt-2 text-sm text-gray-500">
            已选择颜色: {{ basicColor }}
          </p>
        </div>
      </div>
    </section>

    <!-- 不同颜色格式 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">不同颜色格式</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="space-y-2">
          <p class="text-sm text-gray-600">HEX 格式 (#ffffff)：</p>
          <ColorInput
            v-model="hexColor"
            :color-options="{ outputFormat: 'hex' }"
          />
          <p class="mt-2 text-sm text-gray-500">值：{{ hexColor }}</p>
        </div>

        <div class="space-y-2">
          <p class="text-sm text-gray-600">0x 格式 (0xffffff)：</p>
          <ColorInput
            v-model="oxColor"
            :color-options="{ outputFormat: '0x' }"
          />
          <p class="mt-2 text-sm text-gray-500">值：{{ oxColor }}</p>
        </div>

        <div class="space-y-2">
          <p class="text-sm text-gray-600">RGB 格式：</p>
          <ColorInput
            v-model="rgbColor"
            :color-options="{ outputFormat: 'rgb' }"
          />
          <p class="mt-2 text-sm text-gray-500">值：{{ rgbColor }}</p>
        </div>
      </div>
    </section>

    <!-- 自定义颜色列表 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">自定义颜色列表</h2>
      <div class="space-y-2">
        <p class="text-sm text-gray-600">使用自定义颜色列表：</p>
        <ColorInput
          v-model="customListColor"
          :colors="customColors"
        />
        <p class="mt-2 text-sm text-gray-500">
          选择的颜色: {{ customListColor }}
        </p>
      </div>
    </section>

    <!-- 不同位置 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">弹出位置</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-2">
          <p class="text-sm text-gray-600">向上弹出：</p>
          <ColorInput
            v-model="topPositionColor"
            position="top"
          />
        </div>

        <div class="space-y-2">
          <p class="text-sm text-gray-600">向下弹出（默认）：</p>
          <ColorInput
            v-model="bottomPositionColor"
            position="bottom"
          />
        </div>
      </div>
    </section>

    <!-- 禁用自定义输入 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">禁用自定义输入</h2>
      <div class="space-y-2">
        <p class="text-sm text-gray-600">仅允许从预设颜色中选择：</p>
        <ColorInput
          v-model="noCustomColor"
          :allow-custom="false"
        />
        <p class="mt-2 text-sm text-gray-500">
          选择的颜色: {{ noCustomColor }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ColorInput from './index.ts';

// 基础用法
const basicColor = ref('#2196f3');

// 不同颜色格式
const hexColor = ref('#ff0000');
const oxColor = ref('0x00ff00');
const rgbColor = ref('rgb(0, 0, 255)');

// 自定义颜色列表
const customListColor = ref('#ff0000');
const customColors = [
  '#ff0000',
  '#00ff00',
  '#0000ff',
  '#ffff00',
  '#ff00ff',
  '#00ffff',
  '#000000',
  '#ffffff',
];

// 不同位置
const topPositionColor = ref('#9c27b0');
const bottomPositionColor = ref('#4caf50');

// 禁用自定义输入
const noCustomColor = ref('#e91e63');

// 事件处理
const handleColorChange = (color: string) => {
  console.log('Color changed:', color);
};
</script>
