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
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import GlobalHeader from '../GlobalHeader';
</script>
