<template>
  <div class="segment-view p-6">
    <h1 class="text-2xl font-bold mb-8">Segment 分段控制器</h1>

    <div class="space-y-12">
      <!-- 基础用法 -->
      <section class="demo-section">
        <h2 class="text-xl font-semibold mb-4">基础用法</h2>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <Segment
            v-model="basicSelected"
            :options="basicOptions"
            @change="handleChange"
          />
          <div class="mt-4 text-sm text-gray-500">
            当前选中: {{ basicSelected }}
          </div>
        </div>
      </section>

      <!-- 带图标的分段控制器 -->
      <section class="demo-section">
        <h2 class="text-xl font-semibold mb-4">带图标的分段控制器</h2>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <Segment v-model="iconSelected" :options="iconOptions" />
        </div>
      </section>

      <!-- 不同尺寸 -->
      <section class="demo-section">
        <h2 class="text-xl font-semibold mb-4">不同尺寸</h2>
        <div class="bg-white p-6 rounded-lg shadow-sm space-y-6">
          <div>
            <span class="text-sm text-gray-500 mb-2 inline-block">小尺寸 (sm):</span>
            <Segment v-model="sizeSelected" :options="basicOptions" size="sm" />
          </div>
          <div>
            <span class="text-sm text-gray-500 mb-2 inline-block">中尺寸 (md - 默认):</span>
            <Segment v-model="sizeSelected" :options="basicOptions" />
          </div>
          <div>
            <span class="text-sm text-gray-500 mb-2 inline-block">大尺寸 (lg):</span>
            <Segment v-model="sizeSelected" :options="basicOptions" size="lg" />
          </div>
        </div>
      </section>

      <!-- 块级模式 -->
      <section class="demo-section">
        <h2 class="text-xl font-semibold mb-4">块级模式</h2>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <Segment v-model="blockSelected" :options="basicOptions" block />
        </div>
      </section>

      <!-- 禁用状态 -->
      <section class="demo-section">
        <h2 class="text-xl font-semibold mb-4">禁用状态</h2>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <Segment
            v-model="disabledSelected"
            :options="basicOptions"
            disabled
          />
        </div>
      </section>

      <!-- 动画展示 -->
      <section class="demo-section">
        <h2 class="text-xl font-semibold mb-4">切换动画</h2>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <p class="mb-4 text-sm text-gray-600">点击下方选项查看切换动画效果</p>
          <div class="mb-6">
            <Segment v-model="animationSelected" :options="animationOptions" size="lg" />
          </div>
          
          <!-- 内容过渡动画 -->
          <div class="relative h-40 overflow-hidden rounded-lg border border-gray-200">
            <transition name="fade" mode="out-in">
              <div v-if="animationSelected === 'option1'" class="content-panel bg-blue-50 p-6 h-full">
                <h3 class="text-blue-700 mb-2">选项一内容</h3>
                <p class="text-blue-600">这是选项一的说明内容，切换选项可以看到动画效果。</p>
              </div>
              <div v-else-if="animationSelected === 'option2'" class="content-panel bg-green-50 p-6 h-full">
                <h3 class="text-green-700 mb-2">选项二内容</h3>
                <p class="text-green-600">这是选项二的说明内容，可以看到平滑的过渡动画。</p>
              </div>
              <div v-else class="content-panel bg-purple-50 p-6 h-full">
                <h3 class="text-purple-700 mb-2">选项三内容</h3>
                <p class="text-purple-600">这是选项三的说明内容，展示了淡入淡出效果。</p>
              </div>
            </transition>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Segment from '../../components/Segment'; // 确保路径正确

// 基础选项数据
const basicOptions = [
  { label: '每日', value: 'daily' },
  { label: '每周', value: 'weekly' },
  { label: '每月', value: 'monthly' }
];

// 带图标的选项数据 - 使用通用图标类名，请根据实际项目调整
const iconOptions = [
  { label: '列表', value: 'list', icon: 'icon-list' },
  { label: '卡片', value: 'card', icon: 'icon-card' },
  { label: '网格', value: 'grid', icon: 'icon-grid' }
];

// 动画效果展示选项
const animationOptions = [
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
const animationSelected = ref('option1');

// 变更处理函数
const handleChange = (value: string | number) => {
  console.log('选中的值：', value);
};
</script>

<style scoped>
.segment-view {
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s ease, transform 0.5s ease;
  margin-bottom: 2rem;
}

.demo-section:hover {
  transform: translateY(-2px);
}

/* 内容面板过渡 */
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
</style>
