<template>
  <div class="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-semibold text-center text-slate-800 mb-10">
        Component Library
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <router-link v-for="route in componentRoutes" :key="route.path" :to="route.path"
          class="group bg-white p-5 rounded-md border border-slate-200 hover:border-blue-100 transition-colors duration-150">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-medium text-slate-700 group-hover:text-blue-500">
              {{ route.name }}
            </h2>
            <svg
              class="w-4 h-4 text-slate-400 group-hover:text-blue-400 transform transition-transform duration-150 ease-in-out group-hover:translate-x-0.5"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </router-link>
      </div>

      <GitHubProfile />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import GitHubProfile from '@/components/GitHubProfile.vue'

const router = useRouter()
const componentRoutes = ref(
  router.getRoutes()
    .filter(route => {
      // 过滤掉 home、not-found 和重定向路由
      return !['home', 'not-found', 'Main'].includes(route.name as string)
        && !route.redirect
        && route.name
    })
)
</script>
