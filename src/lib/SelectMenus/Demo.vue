<template>
  <div class="p-8 space-y-8">
    <h1 class="text-2xl font-bold text-gray-900 mb-8">SelectMenus Demo</h1>

    <!-- 基础用法 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-gray-800">基础用法</h2>
      <div class="flex items-start gap-4">
        <SelectMenus
          v-model="basicSelected"
          :options="basicOptions"
          label="基础选择"
          placeholder="请选择..."
        />
        <div class="text-sm text-gray-500">
          Selected: {{ basicSelected?.name || 'None' }}
        </div>
      </div>
    </section>

    <!-- 带图标的选项 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-gray-800">带图标的选项</h2>
      <div class="flex items-start gap-4">
        <SelectMenus
          v-model="iconSelected"
          :options="iconOptions"
          label="选择应用"
          placeholder="选择应用..."
        />
      </div>
    </section>

    <!-- 纯图标模式 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-gray-800">纯图标模式</h2>
      <div class="flex items-start gap-4">
        <SelectMenus
          v-model="themeSelected"
          :options="themeOptions"
          label="主题选择"
        />
      </div>
    </section>

    <!-- 带头像的选项 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-gray-800">带头像的选项</h2>
      <div class="flex items-start gap-4">
        <SelectMenus
          v-model="userSelected"
          :options="userOptions"
          label="选择用户"
          placeholder="选择用户..."
        />
      </div>
    </section>

    <!-- 带描述的选项 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-gray-800">带描述的选项</h2>
      <div class="flex items-start gap-4">
        <SelectMenus
          v-model="planSelected"
          :options="planOptions"
          label="选择方案"
          placeholder="选择方案..."
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SelectMenus, { type SelectOption } from './SelectMenus.vue'

// 基础选项
const basicOptions = [
  { id: 1, name: '选项 1' },
  { id: 2, name: '选项 2' },
  { id: 3, name: '选项 3' },
]
const basicSelected = ref<SelectOption>()

// 带图标的选项
const iconOptions = [
  { id: 1, name: 'Dashboard', icon: 'i-tabler-layout-dashboard' },
  { id: 2, name: 'Settings', icon: 'i-tabler-settings' },
  { id: 3, name: 'Profile', icon: 'i-tabler-user' },
  { id: 4, name: 'Messages', icon: 'i-tabler-messages' },
  { id: 5, name: 'Analytics', icon: 'i-tabler-chart-bar' },
]
const iconSelected = ref<SelectOption>()

// 纯图标主题选项
const themeOptions = [
  { id: 'light', icon: 'i-tabler-sun' },
  { id: 'dark', icon: 'i-tabler-moon' },
  { id: 'system', icon: 'i-tabler-device-laptop' },
]
const themeSelected = ref<SelectOption>()

// 带头像的用户选项
const userOptions = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Frontend Developer',
    avatar: 'https://avatars.githubusercontent.com/u/1?v=4'
  },
  {
    id: 2,
    name: 'Jane Smith',
    description: 'UI Designer',
    avatar: 'https://avatars.githubusercontent.com/u/2?v=4'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    description: 'Product Manager',
    avatar: 'https://avatars.githubusercontent.com/u/3?v=4'
  },
]
const userSelected = ref<SelectOption>()

// 带描述的方案选项
const planOptions = [
  {
    id: 'basic',
    name: '基础版',
    description: '适合个人用户',
    icon: 'i-tabler-user'
  },
  {
    id: 'pro',
    name: '专业版',
    description: '适合小型团队',
    icon: 'i-tabler-users'
  },
  {
    id: 'enterprise',
    name: '企业版',
    description: '适合大型企业',
    icon: 'i-tabler-building'
  },
]
const planSelected = ref<SelectOption>()
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
