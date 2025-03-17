<template>
    <div class="p-6 transition-colors bg-white dark:bg-gray-900 min-h-screen">
        <h1
            class="text-3xl font-bold mb-8 text-gray-800 dark:text-white transition-colors tracking-tight flex items-center">
            <span class="bg-gradient-to-r from-blue-500 to-purple-600 h-8 w-2 rounded-full mr-3"></span>
            图片预览组件展示
        </h1>

        <!-- 图片预览组件 -->
        <ImagePreview :images="images" v-model:visible="showPreview" v-model:current="currentIndex"
            :zoom="zoomConfig" />

        <!-- 展示区域 -->
        <div class="mb-12">
            <h2 class="text-xl font-semibold mb-5 text-gray-700 dark:text-gray-200 transition-colors flex items-center">
                <span
                    class="inline-block w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>
                点击图片预览
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div v-for="(image, index) in images" :key="image.url"
                    class="relative group rounded-xl cursor-pointer overflow-hidden modern-card transition-all duration-500 hover:-translate-y-1 shadow-lg dark:shadow-gray-800/20"
                    @click="openPreview(index)">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    </div>
                    <img :src="image.thumbnailUrl || image.url" :alt="image.alt"
                        class="w-full h-52 object-cover transition-all duration-500 group-hover:scale-110 brightness-90 group-hover:brightness-110"
                        @error="handleImageError" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-80 z-10">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div class="text-white font-medium tracking-wide mb-1">{{ image.alt }}</div>
                        <div class="flex items-center">
                            <div class="text-white/70 text-sm">点击预览</div>
                            <div
                                class="ml-auto bg-white/20 backdrop-blur-sm rounded-full p-1.5 transform translate-x-8 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="text-white">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 功能说明区域 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div
                class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-900/30 transition-colors border border-gray-100 dark:border-gray-800/50 relative overflow-hidden group">
                <div
                    class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <div
                    class="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500">
                </div>

                <h2
                    class="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors flex items-center relative z-10">
                    <span class="text-blue-500 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                            </path>
                        </svg>
                    </span>
                    功能亮点
                </h2>
                <ul class="space-y-3 text-gray-700 dark:text-gray-300 transition-colors pl-2 relative z-10">
                    <li class="flex items-center group/item">
                        <span
                            class="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 mr-3 group-hover/item:bg-blue-500/30 dark:group-hover/item:bg-blue-500/40 transition-colors">✓</span>
                        <span class="group-hover/item:translate-x-1 transition-transform">支持暗色/亮色模式自适应</span>
                    </li>
                    <li class="flex items-center group/item">
                        <span
                            class="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 mr-3 group-hover/item:bg-blue-500/30 dark:group-hover/item:bg-blue-500/40 transition-colors">✓</span>
                        <span class="group-hover/item:translate-x-1 transition-transform">图片缩放、旋转功能</span>
                    </li>
                    <li class="flex items-center group/item">
                        <span
                            class="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 mr-3 group-hover/item:bg-blue-500/30 dark:group-hover/item:bg-blue-500/40 transition-colors">✓</span>
                        <span class="group-hover/item:translate-x-1 transition-transform">图片拖拽移动</span>
                    </li>
                    <li class="flex items-center group/item">
                        <span
                            class="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 mr-3 group-hover/item:bg-blue-500/30 dark:group-hover/item:bg-blue-500/40 transition-colors">✓</span>
                        <span class="group-hover/item:translate-x-1 transition-transform">键盘快捷键支持</span>
                    </li>
                    <li class="flex items-center group/item">
                        <span
                            class="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 mr-3 group-hover/item:bg-blue-500/30 dark:group-hover/item:bg-blue-500/40 transition-colors">✓</span>
                        <span class="group-hover/item:translate-x-1 transition-transform">缩略图导航栏</span>
                    </li>
                    <li class="flex items-center group/item">
                        <span
                            class="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 mr-3 group-hover/item:bg-blue-500/30 dark:group-hover/item:bg-blue-500/40 transition-colors">✓</span>
                        <span class="group-hover/item:translate-x-1 transition-transform">加载状态与错误处理</span>
                    </li>
                </ul>
            </div>

            <div
                class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900 p-6 rounded-xl shadow-lg dark:shadow-gray-900/30 transition-colors border border-gray-100 dark:border-gray-800/50 relative overflow-hidden group">
                <div
                    class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <div
                    class="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500">
                </div>

                <h2
                    class="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors flex items-center relative z-10">
                    <span class="text-blue-500 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    </span>
                    键盘快捷键
                </h2>
                <div class="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 transition-colors relative z-10">
                    <div
                        class="flex items-center p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors group/btn">
                        <span
                            class="bg-gray-200 dark:bg-gray-700 w-8 h-8 flex items-center justify-center rounded-md mr-3 text-sm font-mono transition-colors shadow-sm group-hover/btn:bg-blue-500/20 dark:group-hover/btn:bg-blue-500/30">←</span>
                        <span class="group-hover/btn:translate-x-1 transition-transform">上一张图片</span>
                    </div>
                    <div
                        class="flex items-center p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors group/btn">
                        <span
                            class="bg-gray-200 dark:bg-gray-700 w-8 h-8 flex items-center justify-center rounded-md mr-3 text-sm font-mono transition-colors shadow-sm group-hover/btn:bg-blue-500/20 dark:group-hover/btn:bg-blue-500/30">→</span>
                        <span class="group-hover/btn:translate-x-1 transition-transform">下一张图片</span>
                    </div>
                    <div
                        class="flex items-center p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors group/btn">
                        <span
                            class="bg-gray-200 dark:bg-gray-700 w-8 h-8 flex items-center justify-center rounded-md mr-3 text-sm font-mono transition-colors shadow-sm group-hover/btn:bg-blue-500/20 dark:group-hover/btn:bg-blue-500/30">+</span>
                        <span class="group-hover/btn:translate-x-1 transition-transform">放大图片</span>
                    </div>
                    <div
                        class="flex items-center p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors group/btn">
                        <span
                            class="bg-gray-200 dark:bg-gray-700 w-8 h-8 flex items-center justify-center rounded-md mr-3 text-sm font-mono transition-colors shadow-sm group-hover/btn:bg-blue-500/20 dark:group-hover/btn:bg-blue-500/30">-</span>
                        <span class="group-hover/btn:translate-x-1 transition-transform">缩小图片</span>
                    </div>
                    <div
                        class="flex items-center p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors group/btn">
                        <span
                            class="bg-gray-200 dark:bg-gray-700 w-8 h-8 flex items-center justify-center rounded-md mr-3 text-sm font-mono transition-colors shadow-sm group-hover/btn:bg-blue-500/20 dark:group-hover/btn:bg-blue-500/30">r</span>
                        <span class="group-hover/btn:translate-x-1 transition-transform">旋转图片</span>
                    </div>
                    <div
                        class="flex items-center p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors group/btn">
                        <span
                            class="bg-gray-200 dark:bg-gray-700 w-8 h-8 flex items-center justify-center rounded-md mr-3 text-sm font-mono transition-colors shadow-sm group-hover/btn:bg-blue-500/20 dark:group-hover/btn:bg-blue-500/30">Esc</span>
                        <span class="group-hover/btn:translate-x-1 transition-transform">关闭预览</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 功能区域按钮 -->
        <div class="mt-10 flex flex-wrap gap-4">
            <button
                class="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 group"
                @click="openPreview(0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="group-hover:scale-110 transition-transform">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <span>预览全部图片</span>
            </button>
            <button
                class="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 group"
                @click="openPreview(4)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="group-hover:scale-110 transition-transform">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>查看加载错误状态</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import ImagePreview from './ImagePreview';

// 定义图片接口
interface Image {
    url: string;
    alt: string;
    thumbnailUrl?: string;
}

// 定义缩放配置接口
interface ZoomConfig {
    minScale: number;
    maxScale: number;
    step: number;
}

// 示例图片
const images = ref<Image[]>([
    {
        url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        alt: '城市风光',
        thumbnailUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        alt: '山水自然',
        thumbnailUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        alt: '森林',
        thumbnailUrl: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        alt: '海洋风光',
        thumbnailUrl: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'
    },
    {
        url: '/invalid-image-url.jpg',
        alt: '加载失败的图片',
    }
]);

const showPreview = ref<boolean>(false);
const currentIndex = ref<number>(0);

// 自定义缩放配置
const zoomConfig: ZoomConfig = {
    minScale: 0.2,
    maxScale: 5,
    step: 0.5
};

const openPreview = (index: number): void => {
    currentIndex.value = index;
    showPreview.value = true;
};

const handleImageError = function (e: Event): void {
    const target = e.target as HTMLImageElement;
    const originalSrc = target.getAttribute('data-original-src') || target.src;

    // 确保这个处理程序只触发一次
    // 移除当前绑定的错误事件处理器
    target.onerror = null;

    console.log(`图片 ${originalSrc} 加载失败，不再重试`);

    // 保存原始src以便于识别
    target.setAttribute('data-original-src', originalSrc);

    // 立即设置为占位图，但防止这个操作触发新的错误事件
    setTimeout(() => {
        target.src = 'https://via.placeholder.com/300x200?text=加载失败';
    }, 0);
};

// 组件挂载时的钩子
onMounted(() => {
    // 清空不必要的初始化代码
});
</script>

<style>
/* 可以添加一些额外的动画样式 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* 添加骨架屏淡入淡出效果 */
@keyframes pulse {
    0% {
        opacity: 0.6;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.6;
    }
}

.skeleton {
    animation: pulse 1.5s infinite;
    background-color: rgba(200, 200, 200, 0.3);
}

/* 暗色模式下调整骨架屏颜色 */
.dark .skeleton {
    background-color: rgba(60, 60, 60, 0.4);
}

/* 从底部弹出的过渡效果 */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(10px);
    opacity: 0;
}

/* 新增现代卡片样式 */
.modern-card {
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s, box-shadow 0.5s;
}

.modern-card:hover {
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
}

.dark .modern-card {
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
}

.dark .modern-card:hover {
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
}
</style>
