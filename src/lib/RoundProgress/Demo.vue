<template>
  <div class="p-6 space-y-8">
    <!-- 基础用法展示 -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold">基础用法</h3>
      <div class="flex space-x-8">
        <RoundProgress :progress="75" />
        <RoundProgress :progress="45" :show-decoration="false" />
        <RoundProgress :progress="90" :size="48" :stroke-width="4" />
      </div>
    </section>

    <!-- 自定义颜色展示 -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold">自定义颜色</h3>
      <div class="flex space-x-8">
        <RoundProgress 
          :progress="80" 
          start-color="#10B981" 
          end-color="#059669"
        />
        <RoundProgress 
          :progress="65" 
          start-color="#F59E0B" 
          end-color="#D97706"
        />
        <RoundProgress 
          :progress="40" 
          start-color="#EF4444" 
          end-color="#DC2626"
        />
      </div>
    </section>

    <!-- 不同尺寸展示 -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold">不同尺寸</h3>
      <div class="flex items-center space-x-8">
        <RoundProgress :progress="70" :size="64" :stroke-width="6" />
        <RoundProgress :progress="70" :size="96" :stroke-width="8" />
        <RoundProgress :progress="70" :size="128" :stroke-width="10" />
      </div>
    </section>

    <!-- 自定义内容插槽 -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold">自定义内容</h3>
      <div class="flex space-x-8">
        <RoundProgress :progress="88" :size="100">
          <template #center="{ progress }">
            <div class="text-center">
              <div class="text-xl font-bold text-indigo-600">{{ progress }}</div>
              <div class="text-xs text-indigo-400">分数</div>
            </div>
          </template>
        </RoundProgress>
        <RoundProgress :progress="progress" :size="100">
          <template #center>
            <button 
              class="text-sm text-gray-600 hover:text-indigo-600"
              @click="startProgress"
            >
              {{ isAnimating ? '进行中...' : '点击开始' }}
            </button>
          </template>
        </RoundProgress>
      </div>
    </section>

    <!-- 动画控制展示 -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold">动画时长</h3>
      <div class="flex space-x-8">
        <RoundProgress :progress="85" :duration="500" />
        <RoundProgress :progress="85" :duration="1000" />
        <RoundProgress :progress="85" :duration="2000" />
      </div>
    </section>

    <!-- 自定义样式类 -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold">自定义样式</h3>
      <div class="flex space-x-8">
        <RoundProgress 
          :progress="60" 
          text-class="text-emerald-600"
          bg-class="stroke-emerald-100"
        />
        <RoundProgress 
          :progress="60" 
          text-class="text-amber-600"
          bg-class="stroke-amber-100"
        />
        <RoundProgress 
          :progress="60" 
          text-class="text-rose-600"
          bg-class="stroke-rose-100"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RoundProgress from './index.ts';

const progress = ref(0);
const isAnimating = ref(false);

const startProgress = () => {
  if (isAnimating.value) return;
  
  isAnimating.value = true;
  progress.value = 0;
  
  const interval = setInterval(() => {
    progress.value += 1;
    if (progress.value >= 100) {
      clearInterval(interval);
      isAnimating.value = false;
      setTimeout(() => {
        progress.value = 0;
      }, 1000);
    }
  }, 30);
};
</script>

<style scoped>
section {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 2rem;
}

section:last-child {
  border-bottom: none;
}
</style>
