<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200">
    <!-- Theme Toggle -->
    <div class="absolute top-4 right-4 z-10">
      <button @click="toggleDarkMode"
        class="p-2 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600">
        <svg v-if="isDarkMode" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd" />
        </svg>
        <svg v-else class="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    </div>

    <!-- Hero Section -->
    <div
      class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 shadow-sm dark:shadow-slate-700/20 transition-colors duration-200">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 animate-fade-in">
          组件库
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-fade-in-delayed">
          现代、易用、可定制的 Vue 应用程序 UI 组件
        </p>
      </div>
    </div>

    <!-- Components Section -->
    <div class="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <!-- Search and Filter -->
      <div class="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div class="relative w-full sm:w-64">
          <input v-model="searchQuery" type="text" placeholder="搜索组件..."
            class="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200">
          <svg class="absolute right-3 top-2.5 w-5 h-5 text-slate-400 dark:text-slate-400" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div
          class="bg-white dark:bg-slate-700 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600 flex overflow-hidden transition-colors duration-200">
          <button @click="viewMode = 'grid'"
            :class="['px-4 py-2 transition', viewMode === 'grid' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600']">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button @click="viewMode = 'list'"
            :class="['px-4 py-2 transition', viewMode === 'list' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600']">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Component Cards -->
      <div :class="viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'">
        <router-link v-for="route in filteredRoutes" :key="route.path" :to="route.path" :class="[
          'block bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 overflow-hidden transition-all duration-200 hover:shadow-md dark:hover:shadow-slate-700/20',
          viewMode === 'grid' ? 'hover:translate-y-[-4px]' : '',
        ]">
          <div :class="[
            'p-5',
            viewMode === 'list' ? 'flex items-center justify-between' : ''
          ]">
            <div>
              <span class="text-xs font-medium text-blue-500 dark:text-blue-300 uppercase tracking-wider">组件</span>
              <h2
                class="text-lg font-medium text-slate-800 dark:text-white mt-1 group-hover:text-blue-500 dark:group-hover:text-blue-300">
                {{ route.name }}
              </h2>
              <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">探索此组件的功能和使用示例</p>
            </div>
            <div :class="viewMode === 'list' ? 'ml-4' : 'mt-4 flex justify-between items-center'">
              <div class="flex space-x-2">
                <span
                  class="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300 text-xs rounded-full">UI</span>
                <span
                  class="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">Vue</span>
              </div>
              <svg
                class="w-5 h-5 text-blue-500 dark:text-blue-300 transform transition-transform duration-150 ease-in-out"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Empty State -->
      <div v-if="filteredRoutes.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 mx-auto text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-lg font-medium text-slate-700 dark:text-slate-300 mt-4">未找到组件</h3>
        <p class="text-slate-500 dark:text-slate-400 mt-1">请尝试调整搜索关键词</p>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-8 transition-colors duration-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center">
          <h2 class="text-xl font-semibold text-slate-800 dark:text-white mb-4">与开发者联系</h2>
          <div
            class="w-full max-w-md bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600 transition-colors duration-200">
            <GitHubProfile class="animate-fade-in" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import GitHubProfile from '@/components/GitHubProfile.vue'

const router = useRouter()
const searchQuery = ref('')
const viewMode = ref('grid') // 'grid' or 'list'
const isDarkMode = ref(false)

// 获取并设置初始深色模式状态
onMounted(() => {
  // 检查系统偏好
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkMode.value = true
  }

  // 检查localStorage中保存的偏好
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme) {
    isDarkMode.value = storedTheme === 'dark'
  }

  // 应用深色模式
  applyDarkMode()
})

// 切换深色模式
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
  applyDarkMode()
}

// 应用深色模式
const applyDarkMode = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// 监听系统主题变化
onMounted(() => {
  if (window.matchMedia) {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    colorSchemeQuery.addEventListener('change', (e) => {
      // 只有当用户没有明确设置主题时才跟随系统
      if (!localStorage.getItem('theme')) {
        isDarkMode.value = e.matches
        applyDarkMode()
      }
    })
  }
})

const componentRoutes = ref(
  router.getRoutes()
    .filter(route => {
      // 过滤掉 home、not-found 和重定向路由
      return !['home', 'not-found', 'Main'].includes(route.name as string)
        && !route.redirect
        && route.name
    })
)

const filteredRoutes = computed(() => {
  if (!searchQuery.value) return componentRoutes.value

  const query = searchQuery.value.toLowerCase()
  return componentRoutes.value.filter(route =>
    (route.name as string).toLowerCase().includes(query)
  )
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

.animate-fade-in-delayed {
  animation: fadeIn 0.6s ease-in-out 0.2s both;
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
