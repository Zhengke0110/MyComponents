<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <GlobalHeader class="w-full"></GlobalHeader>
        <!-- 添加足够的内边距以避免内容被固定Header覆盖 -->
        <main class="container mx-auto px-4 py-6 sm:px-6 lg:px-8 pt-20">
            <RouterView></RouterView>
        </main>
        <footer class="mt-auto py-6 text-center text-sm text-gray-500 dark:text-gray-400">
            <div class="container mx-auto">
                &copy; {{ new Date().getFullYear() }} 组件库示例 | 基于 Vue3 + TS + Tailwind CSS
            </div>
        </footer>
        <!-- Dark Mode Toggle -->
        <div class="fixed bottom-6 right-6">
            <button @click="toggleDark"
                class="p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all">
                <!-- Sun icon for light mode -->
                <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="size-6 text-yellow-500"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <!-- Moon icon for dark mode -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="size-6 text-indigo-600" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </button>
        </div>
    </div>

</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import GlobalHeader from '../GlobalHeader';
import { onMounted, ref } from 'vue';
import {isDark,toggleDark} from '../../utils/theme'
</script>
