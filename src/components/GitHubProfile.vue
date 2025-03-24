<template>
  <div class="mt-12 max-w-2xl mx-auto">
    <!-- Profile card with loading and error states -->
    <div v-if="loading"
      class="animate-pulse bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
      <div class="flex items-start space-x-6">
        <div class="w-20 h-20 rounded-lg bg-slate-200 dark:bg-slate-700"></div>
        <div class="flex-1">
          <div class="h-6 w-32 bg-slate-200 dark:bg-slate-700 rounded mb-2"></div>
          <div class="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded"></div>
        </div>
      </div>
      <div class="mt-6 grid grid-cols-3 gap-4">
        <div class="h-16 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
        <div class="h-16 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
        <div class="h-16 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
      </div>
    </div>

    <div v-else-if="error"
      class="bg-white dark:bg-slate-800 rounded-lg border border-red-200 dark:border-red-900 p-6 transition-all duration-200">
      <div class="flex items-center justify-center text-red-500 dark:text-red-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span>Failed to load GitHub profile. Please try again later.</span>
      </div>
    </div>

    <div v-else-if="profile"
      class="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn">
      <div class="flex flex-col md:flex-row md:items-start md:space-x-6">
        <div
          class="relative p-1 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 group transform transition-transform duration-300 hover:scale-105 mb-4 md:mb-0">
          <img :src="profile.avatar_url" :alt="profile.login"
            class="w-24 h-24 md:w-28 md:h-28 rounded-lg border-2 border-white dark:border-slate-800 relative z-10">
          <div
            class="absolute inset-0 rounded-xl p-1 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 blur-sm">
          </div>
        </div>
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-100">{{ profile.name }}</h2>
          <p class="text-slate-500 dark:text-slate-400 font-mono mb-3">@{{ profile.login }}</p>
          <p v-if="profile.bio" class="text-slate-600 dark:text-slate-300 text-sm mb-3 italic">{{ profile.bio }}</p>
          <div class="flex items-center text-sm text-slate-500 dark:text-slate-400" v-if="profile.location">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ profile.location }}
          </div>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-3 gap-4">
        <div
          class="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-600 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
          <div
            class="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {{ profile.public_repos }}</div>
          <div class="text-sm text-slate-500 dark:text-slate-400">Repositories</div>
        </div>
        <div
          class="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-600 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
          <div
            class="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {{ profile.followers }}</div>
          <div class="text-sm text-slate-500 dark:text-slate-400">Followers</div>
        </div>
        <div
          class="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-600 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
          <div
            class="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            {{ profile.following }}</div>
          <div class="text-sm text-slate-500 dark:text-slate-400">Following</div>
        </div>
      </div>

      <a :href="profile.html_url" target="_blank"
        class="mt-8 block w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg text-center text-white font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-0.5">
        <span class="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View on GitHub
        </span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface GitHubProfile {
  login: string
  name: string
  avatar_url: string
  html_url: string
  public_repos: number
  followers: number
  following: number
  bio?: string
  location?: string
}

const profile = ref<GitHubProfile | null>(null)
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/users/Zhengke0110')
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    profile.value = await response.json()
  } catch (err) {
    console.error('Failed to fetch GitHub profile:', err)
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
/* Add animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out;
}
</style>
