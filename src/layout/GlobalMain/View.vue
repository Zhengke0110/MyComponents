<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300" ref="mainContainer"
        @mousemove="trackMouse" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
        <!-- Decorative particles -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Particles -->
            <div v-for="(particle, idx) in particles" :key="idx"
                class="absolute rounded-full bg-blue-400/30 dark:bg-blue-400/50 transition-all duration-300" :style="{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    opacity: particle.opacity * (isHovering ? 1.5 : 1),
                    transform: `translateY(${scrollY * particle.speed * 0.05}px)`
                }">
            </div>

            <!-- Dynamic blur halo effect - follows mouse -->
            <div class="pointer-events-none absolute inset-0 opacity-0 dark:opacity-0 transition-opacity duration-500"
                :class="{ 'opacity-50 dark:opacity-40': isHovering }" :style="{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                                 rgba(59, 130, 246, 0.1), transparent 40%)`
                }">
            </div>
        </div>

        <GlobalHeader class="w-full"></GlobalHeader>

        <!-- Main content with proper z-index -->
        <main class="container mx-auto px-4 py-6 sm:px-6 lg:px-8 pt-20 relative z-10">
            <RouterView></RouterView>
        </main>

        <!-- Footer with dark mode support -->
        <footer class="mt-auto py-6 text-center text-sm text-gray-500 dark:text-gray-400 relative z-10">
            <div class="container mx-auto">
                &copy; {{ new Date().getFullYear() }} 组件库示例 | 基于 Vue3 + TS + Tailwind CSS
            </div>
        </footer>

        <!-- Dark Mode Toggle Button with Tailwind classes -->
        <div class="fixed bottom-6 right-6 z-20">
            <button @click="toggleDark"
                class="p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <!-- Sun icon for light mode -->
                <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="size-6 text-yellow-500" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2">
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
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="size-6 text-indigo-600 dark:text-indigo-400"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import GlobalHeader from '../GlobalHeader';
import { onMounted, ref, onUnmounted } from 'vue';
import { isDark, toggleDark } from '../../utils/theme'

// Main container reference
const mainContainer = ref<HTMLElement | null>(null);

// Mouse tracking for halo effect
const mousePosition = ref({ x: 0, y: 0 });
const isHovering = ref(false);

// Scroll position
const scrollY = ref(0);

// Generate decorative particles with optimized settings
const particles = ref(Array.from({ length: 12 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1.5 + Math.random() * 4,
    opacity: 0.1 + Math.random() * 0.2,
    speed: 0.2 + Math.random() * 0.6
})));

// Track mouse position to implement halo effect
const trackMouse = (e: MouseEvent) => {
    if (mainContainer.value) {
        const rect = mainContainer.value.getBoundingClientRect();
        mousePosition.value = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
};

// Handle scroll event with throttling for better performance
let ticking = false;
const handleScroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            scrollY.value = window.scrollY;
            ticking = false;
        });
        ticking = true;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize scroll state
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
