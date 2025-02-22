<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h3 class="mb-4 text-lg font-medium">基础用法</h3>
      <Segment
        v-model:value="basicSelected"
        :options="basicOptions"
        @change="handleChange"
      />
    </section>

    <!-- 带图标的分段控制器 -->
    <section>
      <h3 class="mb-4 text-lg font-medium">带图标的分段控制器</h3>
      <Segment v-model:value="iconSelected" :options="iconOptions" />
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h3 class="mb-4 text-lg font-medium">不同尺寸</h3>
      <div class="space-y-4">
        <Segment v-model:value="sizeSelected" :options="basicOptions" size="sm" />
        <Segment v-model:value="sizeSelected" :options="basicOptions" size="md" />
        <Segment v-model:value="sizeSelected" :options="basicOptions" size="lg" />
      </div>
    </section>

    <!-- 块级模式 -->
    <section>
      <h3 class="mb-4 text-lg font-medium">块级模式</h3>
      <Segment v-model:value="blockSelected" :options="basicOptions" block />
    </section>

    <!-- 禁用状态 -->
    <section>
      <h3 class="mb-4 text-lg font-medium">禁用状态</h3>
      <Segment
        v-model:value="disabledSelected"
        :options="basicOptions"
        disabled
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Segment from './index.ts';

// 基础选项数据
const basicOptions = [
  { label: '每日', value: 'daily' },
  { label: '每周', value: 'weekly' },
  { label: '每月', value: 'monthly' }
];

// 带图标的选项数据
const iconOptions = [
  { label: '列表', value: 'list', icon: 'i-tabler-list' },
  { label: '卡片', value: 'card', icon: 'i-tabler-cards' },
  { label: '网格', value: 'grid', icon: 'i-tabler-grid-dots' }
];

// 各个示例的选中值
const basicSelected = ref('daily');
const iconSelected = ref('list');
const sizeSelected = ref('daily');
const blockSelected = ref('daily');
const disabledSelected = ref('daily');

// 变更处理函数
const handleChange = (value: string | number) => {
  console.log('选中的值：', value);
};
</script>

<style scoped>
section {
  max-width: 600px;
}
</style>
