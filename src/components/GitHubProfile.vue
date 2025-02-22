<template>
  <div class="mt-12 max-w-2xl mx-auto">
    <div v-if="profile" class="bg-white rounded-lg border border-slate-200 p-6 transition-all duration-200">
      <div class="flex items-start space-x-6">
        <div class="avatar-wrapper">
          <img 
            :src="profile.avatar_url" 
            :alt="profile.login"
            class="w-20 h-20 rounded-lg border-2 border-slate-200"
          >
        </div>
        <div class="flex-1">
          <h2 class="text-xl font-semibold text-slate-800">{{ profile.name }}</h2>
          <p class="text-slate-500 font-mono">@{{ profile.login }}</p>
        </div>
      </div>
      
      <div class="mt-6 grid grid-cols-3 gap-4">
        <div class="stat-box">
          <div class="text-xl font-semibold text-slate-800">{{ profile.public_repos }}</div>
          <div class="text-sm text-slate-500">Repositories</div>
        </div>
        <div class="stat-box">
          <div class="text-xl font-semibold text-slate-800">{{ profile.followers }}</div>
          <div class="text-sm text-slate-500">Followers</div>
        </div>
        <div class="stat-box">
          <div class="text-xl font-semibold text-slate-800">{{ profile.following }}</div>
          <div class="text-sm text-slate-500">Following</div>
        </div>
      </div>

      <a 
        :href="profile.html_url"
        target="_blank"
        class="mt-6 block w-full py-2.5 px-4 bg-white border border-slate-200 rounded-md text-center text-slate-700 hover:border-blue-100 hover:text-blue-500 transition-colors duration-150"
      >
        View Profile
      </a>
    </div>
    <div v-else class="text-center text-slate-600">
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

<style scoped>
.stat-box {
  background-color: white; /* bg-white */
  padding: 1rem; /* p-4 */
  border-radius: 0.375rem; /* rounded-md */
  border: 1px solid #e2e8f0; /* border border-slate-200 */
  text-align: center; /* text-center */
  transition: all 0.15s ease; /* transition-all duration-150 */
}

.stat-box:hover {
  border-color: #bee3f8; /* border-blue-100 */
  transform: translateY(-0.125rem); /* -translate-y-0.5 */
}

.avatar-wrapper {
  position: relative;
  padding: 2px;
  border-radius: 0.5rem;
  background: linear-gradient(45deg, #f1f5f9, #e2e8f0);
}

.avatar-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 0.5rem;
  padding: 2px;
  background: linear-gradient(45deg, #e2e8f0, #f1f5f9);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
  -webkit-mask-composite: xor;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.avatar-wrapper:hover::after {
  opacity: 1;
}
</style>
