<template>
  <div class="p-8 space-y-12">
    <h1 class="text-2xl font-bold text-gray-900 mb-8">Tabs Component Demo</h1>

    <!-- 基础用法 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-gray-800">基础用法</h2>
      <Tabs v-model="basicTab" :tabs="basicTabs">
        <template #first>
          <div class="p-4 text-gray-600">
            这是第一个标签页的内容
          </div>
        </template>
        <template #second>
          <div class="p-4 text-gray-600">
            这是第二个标签页的内容
          </div>
        </template>
        <template #third>
          <div class="p-4 text-gray-600">
            这是第三个标签页的内容
          </div>
        </template>
      </Tabs>
    </section>

    <!-- 自定义标签内容 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-gray-800">自定义标签内容</h2>
      <Tabs v-model="customTab" :tabs="customTabs">
        <template #tab="{ tab }">
          <div class="flex items-center gap-2">
            <i :class="tab.icon" class="w-5 h-5" />
            {{ tab.name }}
          </div>
        </template>
        <template #dashboard>
          <div class="p-4 space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h3 class="font-medium text-gray-900">仪表盘内容</h3>
              <p class="text-gray-500">展示一些统计数据...</p>
            </div>
          </div>
        </template>
        <template #profile>
          <div class="p-4 space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h3 class="font-medium text-gray-900">个人资料</h3>
              <p class="text-gray-500">用户信息展示...</p>
            </div>
          </div>
        </template>
        <template #settings>
          <div class="p-4 space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              <h3 class="font-medium text-gray-900">设置选项</h3>
              <p class="text-gray-500">系统配置...</p>
            </div>
          </div>
        </template>
      </Tabs>
    </section>

    <!-- 带徽章和禁用状态 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-gray-800">带徽章和禁用状态</h2>
      <Tabs v-model="badgeTab" :tabs="badgeTabs">
        <template #tab="{ tab }">
          <div class="flex items-center gap-2">
            {{ tab.name }}
            <span
              v-if="tab.badge"
              :class="[
                'px-2 py-0.5 text-xs rounded-full',
                tab.badge.type === 'warning'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-indigo-100 text-indigo-800',
              ]"
            >
              {{ tab.badge.text }}
            </span>
          </div>
        </template>
        <template #inbox>
          <div class="p-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              收件箱内容 (5条新消息)
            </div>
          </div>
        </template>
        <template #spam>
          <div class="p-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              垃圾箱已被禁用
            </div>
          </div>
        </template>
        <template #drafts>
          <div class="p-4">
            <div class="bg-white p-4 rounded-lg shadow-sm">
              草稿箱内容 (2条草稿)
            </div>
          </div>
        </template>
      </Tabs>
    </section>

    <!-- 动态内容切换 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-gray-800">动态内容切换</h2>
      <Tabs
        v-model="dynamicTab"
        :tabs="dynamicTabs"
        @change="handleDynamicTabChange"
      >
        <template #tab="{ tab }">
          <div class="flex items-center gap-2">
            <div
              class="w-2 h-2 rounded-full"
              :class="tab.active ? 'bg-green-500' : 'bg-gray-300'"
            ></div>
            {{ tab.name }}
          </div>
        </template>
        <template v-for="tab in dynamicTabs" :key="tab.name" #[tab.name]>
          <div class="p-4 space-y-4">
            <div
              class="animate-fade-in bg-white p-4 rounded-lg shadow-sm"
              :key="tab.name"
            >
              {{ dynamicContent }}
            </div>
          </div>
        </template>
      </Tabs>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tabs from './index.ts'
import type { TabItem } from './index'

// 基础用法
const basicTab = ref('first')
const basicTabs = ['first', 'second', 'third']

// 自定义标签内容
const customTab = ref('dashboard')
const customTabs: TabItem[] = [
  { name: 'dashboard', icon: 'i-tabler-layout-dashboard' },
  { name: 'profile', icon: 'i-tabler-user' },
  { name: 'settings', icon: 'i-tabler-settings' },
]

// 带徽章和禁用状态
const badgeTab = ref('inbox')
const badgeTabs: TabItem[] = [
  {
    name: 'inbox',
    badge: { text: '5 new', type: 'primary' },
  },
  {
    name: 'spam',
    disabled: true,
    badge: { text: 'disabled', type: 'warning' },
  },
  {
    name: 'drafts',
    badge: { text: '2', type: 'primary' },
  },
]

// 动态内容切换
const dynamicTab = ref('tab1')
const dynamicContent = ref('Tab 1 的动态内容')
const dynamicTabs: TabItem[] = [
  { name: 'tab1', active: true },
  { name: 'tab2', active: false },
  { name: 'tab3', active: false },
]

const handleDynamicTabChange = (tab: TabItem) => {
  dynamicContent.value = `${tab.name} 的动态内容 - ${new Date().toLocaleTimeString()}`
  // 更新活跃状态
  dynamicTabs.forEach(t => (t.active = t.name === tab.name))
}
</script>

<style scoped>
section {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 2rem;
}

section:last-child {
  border-bottom: none;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
