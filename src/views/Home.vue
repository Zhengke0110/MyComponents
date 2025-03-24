<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">

    <!-- Hero Section with improved design -->
    <div class="relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-800/20 dark:to-purple-800/20">
      </div>
      <div class="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>

      <div class="relative py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-12">
            <h1
              class="animate-title text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
              组件库
            </h1>
            <p
              class="animate-fade-up text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              现代、易用、可定制的 Vue 应用程序 UI 组件，致力于提供优雅的用户体验
            </p>

            <div class="mt-8 animate-fade-up animation-delay-150">
              <div
                class="inline-flex space-x-3 p-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-full border border-slate-200 dark:border-slate-700">
                <span class="py-2 px-4 text-sm font-medium text-slate-800 dark:text-white">组件总数: {{
                  componentRoutes.length }}</span>
                <span class="py-2 px-4 rounded-full bg-blue-500 text-white text-sm font-medium shadow-sm">基于 Vue
                  3</span>
              </div>
            </div>
          </div>

          <div class="relative flex justify-center animate-fade-up animation-delay-300">
            <div
              class="h-16 w-full max-w-3xl rounded-full bg-white/30 dark:bg-slate-800/30 backdrop-blur border border-white/50 dark:border-slate-700/50 shadow-xl flex items-center justify-center overflow-hidden">
              <div class="animate-marquee whitespace-nowrap">
                <span v-for="(route, index) in componentRoutes.slice(0, 15)" :key="index"
                  class="mx-2 py-1 px-3 text-xs font-medium rounded-full bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 shadow-sm">
                  {{ route.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Components Section with improved cards -->
    <div class="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 animate-fade-in animation-delay-500">
      <!-- Search and Filter with modern design -->
      <div class="mb-12 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div class="relative w-full sm:w-72 group">
          <input v-model="searchQuery" type="text" placeholder="搜索组件..."
            class="w-full px-5 py-3 pl-12 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200 shadow-sm group-hover:shadow-md">
          <svg
            class="absolute left-4 top-3.5 w-5 h-5 text-slate-400 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div
          class="bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-slate-200 dark:border-slate-600 flex overflow-hidden transition-colors duration-200">
          <button @click="viewMode = 'grid'"
            :class="['px-5 py-3 transition-all duration-200 flex items-center gap-2', viewMode === 'grid' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600']">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span class="hidden sm:inline">网格视图</span>
          </button>
          <button @click="viewMode = 'list'"
            :class="['px-5 py-3 transition-all duration-200 flex items-center gap-2', viewMode === 'list' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600']">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span class="hidden sm:inline">列表视图</span>
          </button>
        </div>
      </div>

      <!-- Category selector -->
      <div class="flex flex-wrap gap-2 mb-8 max-w-4xl mx-auto justify-center">
        <button @click="selectedCategory = '全部'" :class="[
          'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
          selectedCategory === '全部'
            ? 'bg-blue-500 text-white shadow-md shadow-blue-500/15'
            : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
        ]">
          全部
        </button>
        <button @click="selectedCategory = '表单'" :class="[
          'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
          selectedCategory === '表单'
            ? 'bg-blue-500 text-white shadow-md shadow-blue-500/15'
            : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
        ]">
          表单
        </button>
        <button @click="selectedCategory = '反馈'" :class="[
          'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
          selectedCategory === '反馈'
            ? 'bg-blue-500 text白 shadow-md shadow-blue-500/15'
            : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
        ]">
          反馈
        </button>
        <button @click="selectedCategory = '展示'" :class="[
          'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
          selectedCategory === '展示'
            ? 'bg-blue-500 text-white shadow-md shadow-blue-500/15'
            : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
        ]">
          展示
        </button>
        <button @click="selectedCategory = '导航'" :class="[
          'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
          selectedCategory === '导航'
            ? 'bg-blue-500 text-white shadow-md shadow-blue-500/15'
            : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
        ]">
          导航
        </button>
      </div>

      <!-- Component Cards with animation -->
      <div :class="[
        viewMode === 'grid'
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          : 'space-y-4'
      ]">
        <transition-group name="component-list">
          <router-link v-for="(route, index) in displayedRoutes" :key="route.path" :to="route.path"
            :style="{ animationDelay: `${index * 50}ms` }" :class="[
              'component-item block bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 overflow-hidden transition-all duration-300 group',
              viewMode === 'grid'
                ? 'hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/30 hover:-translate-y-1'
                : 'hover:shadow-md',
            ]">
            <div :class="[
              'p-6',
              viewMode === 'list' ? 'flex items-center justify-between' : ''
            ]">
              <div>
                <div class="flex items-center space-x-2 mb-3">
                  <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span
                    class="text-xs font-semibold tracking-wider text-blue-500 dark:text-blue-400 uppercase">组件</span>
                </div>
                <h2
                  class="text-xl font-bold text-slate-800 dark:text-white mt-1 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-200">
                  {{ route.name }}
                </h2>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">{{ route.meta?.description }}
                </p>
              </div>
              <div :class="viewMode === 'list' ? 'ml-6 shrink-0' : 'mt-5 flex justify-between items-center'">
                <div class="flex space-x-2">
                  <span
                    class="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">{{
                      getCategoryByName(route.name as string) }}</span>
                  <span
                    class="px-2 py-1 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300 text-xs rounded-full">Vue</span>
                </div>
                <svg
                  class="w-5 h-5 text-blue-500 dark:text-blue-300 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </router-link>
        </transition-group>
      </div>

      <!-- Empty State with animation -->
      <div v-if="displayedRoutes.length === 0" class="text-center py-16 animate-fade-in">
        <div
          class="w-20 h-20 mx-auto mb-6 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
          <svg class="w-10 h-10 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-2">未找到组件</h3>
        <p class="text-slate-500 dark:text-slate-400 mb-8">尝试调整搜索条件或选择不同的分类</p>
        <button @click="resetFilters"
          class="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          重置筛选条件
        </button>
      </div>
    </div>

    <!-- Enhanced Footer with modern design -->
    <div
      class="relative border-t border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 py-24 transition-colors duration-300">
      <!-- Background decorations -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
        <div class="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div class="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-4 animate-fade-in">与开发者联系
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div class="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10">
          <!-- GitHub Profile Card -->
          <div class="w-full max-w-xl animate-slide-up">
            <div class="relative group">
              <!-- Card decorations -->
              <div
                class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-500">
              </div>
              <div
                class="relative bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
                <div class="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div class="pt-16">
                  <GitHubProfile />
                </div>
              </div>
            </div>
          </div>

          <!-- Information Card -->
          <div class="w-full max-w-md animate-slide-up animation-delay-200">
            <div
              class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-slate-200 dark:border-slate-700 h-full flex flex-col">
              <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-6">组件库项目</h3>

              <div class="space-y-6 flex-grow">
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
                    <svg class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-slate-800 dark:text-white">基于 Vue 3</h4>
                    <p class="mt-1 text-slate-600 dark:text-slate-300">利用 Vue 3 的组合式 API 和响应式系统构建</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 rounded-lg p-3">
                    <svg class="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-slate-800 dark:text白">美观且可定制</h4>
                    <p class="mt-1 text-slate-600 dark:text-slate-300">支持明暗主题切换，自带精美的过渡和动画效果</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-green-100 dark:bg-green-900/30 rounded-lg p-3">
                    <svg class="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-semibold text-slate-800 dark:text白">持续开发中</h4>
                    <p class="mt-1 text-slate-600 dark:text-slate-300">不断添加新的组件和改进现有功能</p>
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <a href="https://github.com/Zhengke0110" target="_blank"
                  class="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600 hover:from-slate-700 hover:to-slate-600 dark:hover:from-slate-600 dark:hover:to-slate-500 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
                  <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                  访问 GitHub 仓库
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import GitHubProfile from '@/components/GitHubProfile.vue'

const router = useRouter()
const searchQuery = ref('')
const viewMode = ref('grid') // 'grid' or 'list'
const selectedCategory = ref('全部')

// 获取组件路由
const componentRoutes = computed(() =>
  router.getRoutes()
    .filter(route => {
      // 过滤掉 home、not-found 和重定向路由
      return !['home', 'not-found', 'Main', "Guide"].includes(route.name as string)
        && !route.redirect
        && route.name
    })
)

// 根据类别和搜索过滤路由
const displayedRoutes = computed(() => {
  let routes = componentRoutes.value

  // 应用搜索过滤
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    routes = routes.filter(route =>
      (route.name as string).toLowerCase().includes(query) ||
      (route.meta?.description as string)?.toLowerCase().includes(query)
    )
  }

  // 应用类别过滤
  if (selectedCategory.value !== '全部') {
    routes = routes.filter(route =>
      getCategoryByName(route.name as string) === selectedCategory.value
    )
  }

  return routes
})

// 根据组件名获取组件类别
const getCategoryByName = (name: string) => {
  const formComponents = ['Button', 'ButtonGroups', 'CheckBox', 'ColorInput', 'RadioBox', 'Rate', 'SelectMenus', 'Slider', 'SwitchBox', 'TextInput', 'TimePicker', 'Upload']
  const feedbackComponents = ['Alert', 'Dialog', 'Drawer', 'Message', 'ModalBox', 'Notification', 'Popover', 'Progress', 'Result', 'Spin', 'Tooltip']
  const displayComponents = ['Avatar', 'Badge', 'Card', 'Carousel', 'Comment', 'Divider', 'Empty', 'ImagePreview', 'TagsList', 'Timeline', 'Waterfall', 'Watermark']
  const navigationComponents = ['Calendars', 'Dropdowns', 'Pagination', 'Segment', 'Steps', 'Tab']

  if (formComponents.includes(name)) return '表单'
  if (feedbackComponents.includes(name)) return '反馈'
  if (displayComponents.includes(name)) return '展示'
  if (navigationComponents.includes(name)) return '导航'
  return '其他'
}

// 重置筛选条件
const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = '全部'
}
</script>

<style scoped>
/* Basic animations */
.animate-fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

.animate-fade-up {
  animation: fadeUp 0.6s ease-in-out forwards;
  opacity: 0;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-title {
  animation: titleAnimation 1s ease-in-out forwards;
  opacity: 0;
}

/* Marquee animation */
.animate-marquee {
  animation: marquee 25s linear infinite;
}

/* Animation delays */
.animation-delay-150 {
  animation-delay: 150ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

/* Component list transitions */
.component-list-enter-active,
.component-list-leave-active {
  transition: all 0.4s ease;
}

.component-list-enter-from,
.component-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.component-item {
  animation: fadeIn 0.5s ease-in-out forwards;
  opacity: 0;
}

/* Keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes titleAnimation {
  0% {
    opacity: 0;
    transform: translateY(-20px);
    letter-spacing: -0.5rem;
  }

  50% {
    letter-spacing: 0.25rem;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    letter-spacing: 0;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(120%);
  }

  100% {
    transform: translateX(-120%);
  }
}

/* Grid pattern background */
.bg-grid-pattern {
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
