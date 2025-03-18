<template>
  <div class="p-8 space-y-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
    <!-- 基础用法 -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent transform transition-all duration-300">
        基础步骤条
      </h2>
      <div class="transform transition-all duration-500 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-xl hover:shadow-2xl dark:shadow-gray-900/30 backdrop-blur-lg border border-gray-100 dark:border-gray-700">
        <Steps 
          v-model:current="basicCurrent" 
          :items="basicSteps"
          class="transition-all duration-300" 
        />
        <div class="mt-8 flex gap-4 justify-end">
          <button 
            @click="basicCurrent--" 
            :disabled="basicCurrent <= 0"
            class="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg hover:shadow-blue-500/25 dark:shadow-none"
          >
            上一步
          </button>
          <button 
            @click="basicCurrent++" 
            :disabled="basicCurrent >= 3"
            class="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-lg transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg hover:shadow-blue-500/25 dark:shadow-none"
          >
            下一步
          </button>
        </div>
      </div>
    </section>

    <!-- 可点击切换 -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        可点击切换
      </h2>
      <div class="transform transition-all duration-500 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-xl backdrop-blur-lg border border-gray-100 dark:border-gray-700">
        <Steps 
          v-model:current="clickableCurrent" 
          :items="clickableSteps"
          class="transition-all duration-300" 
        />
      </div>
    </section>

    <!-- 带进度条的步骤 -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        带进度的步骤
      </h2>
      <div class="transform transition-all duration-500 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-xl backdrop-blur-lg border border-gray-100 dark:border-gray-700">
        <Steps 
          v-model:current="progressCurrent" 
          :items="progressSteps"
          class="transition-all duration-300 mb-8" 
        />
        <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div 
            class="bg-blue-500 h-2 rounded-full transition-all duration-500"
            :style="{ width: `${(progressCurrent + 1) * 25}%` }"
          ></div>
        </div>
        <div class="mt-8 flex justify-between">
          <span class="text-sm text-gray-500 dark:text-gray-400">总进度</span>
          <span class="text-sm font-medium text-blue-500">{{ (progressCurrent + 1) * 25 }}%</span>
        </div>
      </div>
    </section>

    <!-- 不同尺寸对比 -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        尺寸对比
      </h2>
      <div class="space-y-8 transform transition-all duration-500 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-xl backdrop-blur-lg border border-gray-100 dark:border-gray-700">
        <Steps :items="basicSteps" size="default" class="transition-all duration-300" />
        <Steps :items="basicSteps" size="small" class="transition-all duration-300" />
      </div>
    </section>

    <!-- 动态步骤 -->
    <section class="space-y-6">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
        动态步骤
      </h2>
      <div class="transform transition-all duration-500 p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 shadow-xl backdrop-blur-lg border border-gray-100 dark:border-gray-700">
        <Steps 
          v-model:current="dynamicCurrent" 
          :items="dynamicSteps"
          class="transition-all duration-300 mb-6" 
        />
        <div class="flex gap-4">
          <button 
            @click="addStep" 
            class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
          >
            添加步骤
          </button>
          <button 
            @click="removeStep" 
            class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
            :disabled="dynamicSteps.length <= 1"
          >
            删除步骤
          </button>
        </div>
      </div>
    </section>

    <!-- 垂直步骤条 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold dark:text-white">垂直方向</h2>
      <div class="card-wrapper">
        <Steps :items="verticalSteps" direction="vertical"
          class="hover:shadow-lg transition-all duration-300 p-4 rounded-lg bg-white dark:bg-gray-800" />
      </div>
    </section>

    <!-- 自定义图标 -->
    <section class="space-y-4">
      <h2
        class="text-2xl font-bold text-gray-800 dark:text-white transform transition-all duration-300 hover:scale-105">
        自定义图标</h2>
      <div
        class="transform hover:scale-[1.02] transition-all duration-300 p-6 rounded-xl bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-xl backdrop-blur-sm">
        <Steps :items="iconSteps" class="transition-all duration-300" />
      </div>
    </section>

    <!-- 点状步骤条 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold dark:text-white">点状步骤条</h2>
      <div class="card-wrapper">
        <Steps :items="basicSteps" progressDot
          class="hover:shadow-lg transition-all duration-300 p-4 rounded-lg bg-white dark:bg-gray-800" />
      </div>
    </section>

    <!-- 迷你版本 -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold dark:text-white">迷你版本</h2>
      <div class="card-wrapper">
        <Steps :items="basicSteps" size="small"
          class="hover:shadow-lg transition-all duration-300 p-4 rounded-lg bg-white dark:bg-gray-800" />
      </div>
    </section>

    <!-- 错误状态 -->
    <section class="space-y-4">
      <h2
        class="text-2xl font-bold text-gray-800 dark:text-white transform transition-all duration-300 hover:scale-105">
        错误状态</h2>
      <div
        class="transform hover:scale-[1.02] transition-all duration-300 p-6 rounded-xl bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-xl backdrop-blur-sm">
        <Steps :items="errorSteps" class="transition-all duration-300" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Steps from './Steps'
import type { StepItem } from './Steps'

const basicCurrent = ref(1)
const clickableCurrent = ref(0)
const progressCurrent = ref(0)
const dynamicCurrent = ref(0)

const basicSteps: StepItem[] = [
  { title: '填写信息', description: '请填写基本信息' },
  { title: '上传文件', description: '上传相关文件' },
  { title: '完成验证', description: '验证信息' },
  { title: '完成', description: '提交成功' }
]

// 可点击切换的步骤
const clickableSteps: StepItem[] = [
  { title: '选择套餐', description: '选择合适的套餐方案', icon: '📦' },
  { title: '确认订单', description: '确认订单信息', icon: '📝' },
  { title: '付款', description: '选择支付方式并完成支付', icon: '💳' },
  { title: '完成', description: '订单完成', icon: '🎉' }
]

// 带进度的步骤
const progressSteps: StepItem[] = [
  { title: '第一阶段', description: '完成度25%' },
  { title: '第二阶段', description: '完成度50%' },
  { title: '第三阶段', description: '完成度75%' },
  { title: '最终阶段', description: '完成度100%' }
]

const verticalSteps: StepItem[] = [
  { title: '已完成', description: '这是一段描述文本', status: 'finish' },
  { title: '进行中', description: '这是一段描述文本', status: 'process' },
  { title: '等待中', description: '这是一段描述文本', status: 'wait' }
]

const iconSteps: StepItem[] = [
  { title: '登录', icon: '👤', status: 'finish' },
  { title: '验证', icon: '🔑', status: 'process' },
  { title: '付款', icon: '💰', status: 'wait' },
  { title: '完成', icon: '✨', status: 'wait' }
]

const errorSteps: StepItem[] = [
  { title: '已完成', status: 'finish' },
  { title: '出错了', status: 'error' },
  { title: '等待中', status: 'wait' }
]

// 动态步骤
const dynamicSteps = ref<StepItem[]>([
  { title: '第1步', description: '这是第一步' }
])

const addStep = () => {
  const newStep = {
    title: `第${dynamicSteps.value.length + 1}步`,
    description: `这是第${dynamicSteps.value.length + 1}步`
  }
  dynamicSteps.value.push(newStep)
}

const removeStep = () => {
  if (dynamicSteps.value.length > 1) {
    dynamicSteps.value.pop()
    if (dynamicCurrent.value >= dynamicSteps.value.length) {
      dynamicCurrent.value = dynamicSteps.value.length - 1
    }
  }
}
</script>