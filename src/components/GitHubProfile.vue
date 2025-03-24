<template>
  <div class="mt-12 max-w-2xl mx-auto">
    <div v-if="profile"
      class="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 transition-all duration-200">
      <div class="flex items-start space-x-6">
        <div
          class="relative p-0.5 rounded-lg bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 group">
          <img :src="profile.avatar_url" :alt="profile.login"
            class="w-20 h-20 rounded-lg border-2 border-slate-200 dark:border-slate-700 relative z-10">
          <div
            class="absolute inset-0 rounded-lg p-0.5 bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
          </div>
        </div>
        <div class="flex-1">
          <h2 class="text-xl font-semibold text-slate-800 dark:text-slate-100">{{ profile.name }}</h2>
          <p class="text-slate-500 dark:text-slate-400 font-mono">@{{ profile.login }}</p>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-3 gap-4">
        <div
          class="bg-white dark:bg-slate-700 p-4 rounded-md border border-slate-200 dark:border-slate-600 text-center transition-all duration-150 hover:border-blue-100 dark:hover:border-blue-500 hover:-translate-y-0.5">
          <div class="text-xl font-semibold text-slate-800 dark:text-slate-100">{{ profile.public_repos }}</div>
          <div class="text-sm text-slate-500 dark:text-slate-400">Repositories</div>
        </div>
        <div
          class="bg-white dark:bg-slate-700 p-4 rounded-md border border-slate-200 dark:border-slate-600 text-center transition-all duration-150 hover:border-blue-100 dark:hover:border-blue-500 hover:-translate-y-0.5">
          <div class="text-xl font-semibold text-slate-800 dark:text-slate-100">{{ profile.followers }}</div>
          <div class="text-sm text-slate-500 dark:text-slate-400">Followers</div>
        </div>
        <div
          class="bg-white dark:bg-slate-700 p-4 rounded-md border border-slate-200 dark:border-slate-600 text-center transition-all duration-150 hover:border-blue-100 dark:hover:border-blue-500 hover:-translate-y-0.5">
          <div class="text-xl font-semibold text-slate-800 dark:text-slate-100">{{ profile.following }}</div>
          <div class="text-sm text-slate-500 dark:text-slate-400">Following</div>
        </div>
      </div>

      <a :href="profile.html_url" target="_blank"
        class="mt-6 block w-full py-2.5 px-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md text-center text-slate-700 dark:text-slate-200 hover:border-blue-100 dark:hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-150">
        View Profile
      </a>
    </div>
    <div v-else class="text-center text-slate-600 dark:text-slate-400">
      Loading profile data...
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
}

const profile = ref<GitHubProfile | null>(null)

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/users/Zhengke0110')
    profile.value = await response.json()
  } catch (error) {
    console.error('Failed to fetch GitHub profile:', error)
  }
})
</script>
