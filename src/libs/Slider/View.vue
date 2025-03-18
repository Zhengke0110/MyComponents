<template>
    <div class="p-8 transition-colors duration-500 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
            <span class="mr-3 text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
            </span>
            滑动输入条 Slider
        </h1>
        <p class="mb-10 text-gray-600 dark:text-gray-300 max-w-3xl">
            滑动输入条是一种用于在连续或间断的区间内选择特定值的交互式控件。支持单点选择、范围选择、垂直布局、反向模式等多种功能。
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- 基础用法展示区 -->
            <section class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
                    基础用法
                </h2>
                <div class="space-y-8 mb-4">
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">默认滑块</p>
                        <div class="px-2 sm:px-5">
                            <Slider v-model="basicValue" :tip-formatter="formatDefault" />
                        </div>
                        <div class="mt-4 transition-all duration-500">
                            <span
                                class="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-300">
                                当前值: {{ basicValue }}
                            </span>
                        </div>
                    </div>

                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">禁用状态</p>
                        <div class="px-2 sm:px-5">
                            <Slider v-model="basicValue" disabled :tip-formatter="formatDefault" />
                        </div>
                    </div>

                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">带有步长的滑块</p>
                        <div class="px-2 sm:px-5">
                            <Slider v-model="stepValue" :step="10" :tip-formatter="formatDefault" />
                        </div>
                        <div class="flex justify-between px-3 mt-2">
                            <span class="text-xs text-gray-500 dark:text-gray-400">0</span>
                            <span class="text-xs text-gray-500 dark:text-gray-400">100</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 带标记和点的滑块 -->
            <section class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-green-500 dark:bg-green-400 rounded-full mr-3"></div>
                    标记与刻度
                </h2>
                <div class="space-y-12">
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">温度刻度</p>
                        <div class="px-2 sm:px-5 pt-4">
                            <Slider v-model="marksValue" :marks="temperatureMarks" :tooltip-open="true" />
                        </div>
                        <div class="mt-6 flex justify-center">
                            <div class="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500"
                                :class="getTemperatureClass(marksValue)">
                                <span class="font-bold" :class="marksValue > 60 ? 'text-white' : 'text-gray-800'">{{
                                    marksValue }}°C</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">带点的滑块</p>
                        <div class="px-2 sm:px-5">
                            <Slider v-model="dotsValue" :step="10" :dots="true" :marks="dotsMarks" />
                        </div>
                        <div class="mt-4 flex justify-end">
                            <div class="grid grid-cols-5 gap-1">
                                <div v-for="n in 10" :key="n" class="w-2 h-6 rounded-sm transition-all duration-300"
                                    :class="n * 10 <= dotsValue ? 'bg-blue-500 dark:bg-blue-400' : 'bg-gray-200 dark:bg-gray-600'">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 范围选择 -->
            <section class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-purple-500 dark:bg-purple-400 rounded-full mr-3"></div>
                    范围选择
                </h2>
                <div class="space-y-10">
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">基础范围选择</p>
                        <div class="px-2 sm:px-5">
                            <Slider v-model="rangeValue" :range="true" :tip-formatter="formatDefault" />
                        </div>
                        <div class="mt-4 flex justify-between">
                            <span
                                class="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 rounded text-purple-700 dark:text-purple-300">
                                {{ rangeValue[0] }}
                            </span>
                            <div class="text-gray-400 dark:text-gray-500">至</div>
                            <span
                                class="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 rounded text-purple-700 dark:text-purple-300">
                                {{ rangeValue[1] }}
                            </span>
                        </div>
                    </div>

                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">价格范围</p>
                        <div class="px-2 sm:px-5">
                            <Slider v-model="priceRange" :range="true" :tip-formatter="formatPrice"
                                :marks="priceMarks" />
                        </div>
                        <div class="mt-6 flex flex-wrap gap-4 justify-center">
                            <div v-for="product in filteredProducts" :key="product.id"
                                class="w-20 h-24 bg-white dark:bg-gray-700 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center justify-between p-2">
                                <div
                                    class="w-14 h-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-800 rounded">
                                </div>
                                <span class="font-medium text-gray-900 dark:text-gray-100">¥{{ product.price }}</span>
                                <span class="text-xs text-gray-500 dark:text-gray-400">商品{{ product.id }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 垂直与反向模式 -->
            <section class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-yellow-500 dark:bg-yellow-400 rounded-full mr-3"></div>
                    垂直与反向
                </h2>

                <div class="flex justify-around mb-6 h-48"> <!-- 固定高度避免溢出 -->
                    <div class="flex flex-col items-center">
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">垂直滑块</p>
                        <Slider v-model="verticalValue" vertical />
                        <div class="mt-2 text-sm text-center text-gray-700 dark:text-gray-300">{{ verticalValue }}</div>
                    </div>

                    <div class="flex flex-col items-center">
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">带标记</p>
                        <Slider v-model="verticalMarksValue" vertical :marks="verticalMarks" />
                    </div>

                    <div class="flex flex-col items-center">
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">垂直范围</p>
                        <Slider v-model="verticalRangeValue" vertical :range="true" />
                    </div>
                </div>

                <div class="mt-10">
                    <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">反向滑块</p>
                    <div class="flex items-center px-2 sm:px-5">
                        <span class="mr-2 text-sm text-gray-600 dark:text-gray-300">100</span>
                        <Slider v-model="reverseValue" class="flex-1" :reverse="true" />
                        <span class="ml-2 text-sm text-gray-600 dark:text-gray-300">0</span>
                    </div>
                </div>
            </section>

            <!-- 动态效果展示 -->
            <section class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden col-span-1 lg:col-span-2">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-red-500 dark:bg-red-400 rounded-full mr-3"></div>
                    交互式示例
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 音量控制 -->
                    <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                        <h3 class="text-lg font-medium mb-6 text-gray-800 dark:text-gray-200">音量控制</h3>
                        <div class="flex items-center space-x-3">
                            <button
                                class="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 11-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                            <Slider v-model="volumeValue" :tip-formatter="formatPercent" />
                            <button
                                class="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div class="mt-12 flex justify-center">
                            <div class="relative w-28 h-28 sm:w-32 sm:h-32">
                                <!-- 外环 -->
                                <svg class="w-full h-full transform rotate-180" viewBox="0 0 120 120">
                                    <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" stroke-width="12"
                                        class="text-blue-100 dark:text-blue-900 transition-colors duration-300" />
                                    <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" stroke-width="12"
                                        stroke-dasharray="339.292" :stroke-dashoffset="339.292 * (1 - volumeValue / 100)"
                                        class="text-blue-500 dark:text-blue-400 transition-all duration-500" />
                                </svg>
                                <!-- 内圆 -->
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div
                                        class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-inner transition-colors duration-300">
                                        <span class="text-lg sm:text-2xl font-bold text-blue-500 dark:text-blue-400">{{
                                            volumeValue }}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 动态点演示 -->
                    <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                        <h3 class="text-lg font-medium mb-6 text-gray-800 dark:text-gray-200">自动动画</h3>
                        <div class="px-2">
                            <Slider v-model="animatedValue" :step="10" :dots="true" />
                        </div>

                        <div class="mt-6 flex justify-between items-center">
                            <span class="text-sm text-gray-600 dark:text-gray-300">当前值: {{ animatedValue }}</span>
                            <button @click="toggleAnimation"
                                class="px-3 py-1.5 text-sm font-medium rounded transition-colors duration-300"
                                :class="isAnimating ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'">
                                {{ isAnimating ? '停止' : '播放' }} 动画
                            </button>
                        </div>

                        <div class="mt-8 flex justify-center">
                            <div class="grid grid-cols-10 gap-1 sm:gap-2">
                                <div v-for="i in 10" :key="i"
                                    class="w-4 sm:w-5 h-8 rounded transition-all duration-300 transform" :class="[
                                        i * 10 <= animatedValue ? 'bg-blue-500 dark:bg-blue-400 scale-y-100' : 'bg-gray-200 dark:bg-gray-600 scale-y-50',
                                        i * 10 === animatedValue ? 'scale-y-110' : ''
                                    ]" :style="{ transitionDelay: `${i * 30}ms` }">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 暗色模式适配展示 -->
            <section class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden col-span-1 lg:col-span-2">
                <h2 class="text-xl font-semibold mb-8 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-3"></div>
                    主题模式展示
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 rounded-xl shadow-sm">
                        <div class="flex justify-between items-center mb-6">
                            <span class="text-gray-800 font-medium">亮色模式</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>

                        <div class="space-y-6 px-2">
                            <Slider v-model="lightThemeValue1" class="slider-blue" />
                            <Slider v-model="lightThemeValue2" :range="true" class="slider-green" />
                            <div class="flex items-center space-x-4">
                                <div class="w-4 h-4 rounded-full bg-indigo-500"></div>
                                <Slider v-model="lightThemeValue3" class="flex-1 slider-indigo" />
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-900 p-6 rounded-xl shadow-sm">
                        <div class="flex justify-between items-center mb-6">
                            <span class="text-gray-200 font-medium">暗色模式</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        </div>

                        <div class="space-y-6 px-2">
                            <Slider v-model="darkThemeValue1" class="slider-blue" />
                            <Slider v-model="darkThemeValue2" :range="true" class="slider-green" />
                            <div class="flex items-center space-x-4">
                                <div class="w-4 h-4 rounded-full bg-indigo-400"></div>
                                <Slider v-model="darkThemeValue3" class="flex-1 slider-indigo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import Slider from './Slider';

// 基础滑块
const basicValue = ref(30);
const stepValue = ref(40);

// 带标记的滑块
const marksValue = ref(37);
const temperatureMarks = {
    0: '0°C',
    26: '26°C',
    37: {
        style: { color: '#3b82f6', fontWeight: '600' },
        label: '37°C'
    },
    100: {
        style: { color: '#ef4444', fontWeight: '600' },
        label: '100°C'
    }
};

// 带点的滑块
const dotsValue = ref(70);
const dotsMarks = {
    0: '0%',
    100: '100%'
};

// 范围滑块
const rangeValue = ref([20, 75]);
const priceRange = ref([100, 500]);
const priceMarks = {
    0: '¥0',
    200: '¥200',
    500: '¥500',
    1000: '¥1000'
};

// 产品模拟数据
const allProducts = [
    { id: 1, price: 99, title: '商品1' },
    { id: 2, price: 199, title: '商品2' },
    { id: 3, price: 299, title: '商品3' },
    { id: 4, price: 399, title: '商品4' },
    { id: 5, price: 499, title: '商品5' },
    { id: 6, price: 599, title: '商品6' },
];

// 根据价格筛选商品
const filteredProducts = computed(() => {
    return allProducts.filter(product =>
        product.price >= priceRange.value[0] && product.price <= priceRange.value[1]
    );
});

// 垂直滑块
const verticalValue = ref(30);
const verticalMarksValue = ref(50);
const verticalRangeValue = ref([25, 75]);
const verticalMarks = {
    0: '0',
    50: '50',
    100: '100'
};

// 反向滑块
const reverseValue = ref(70);

// 音量控制示例
const volumeValue = ref(60);
const formatPercent = (value: number) => `${value}%`;

// 自动动画示例
const animatedValue = ref(30);
const isAnimating = ref(false);
let animationTimer: number | null = null;
let animationDirection = 1;

// 控制动画
const toggleAnimation = () => {
    if (isAnimating.value) {
        // 停止动画
        if (animationTimer !== null) {
            clearInterval(animationTimer);
            animationTimer = null;
        }
        isAnimating.value = false;
    } else {
        // 开始动画
        isAnimating.value = true;
        animationTimer = window.setInterval(() => {
            if (animatedValue.value >= 100) animationDirection = -1;
            if (animatedValue.value <= 0) animationDirection = 1;

            animatedValue.value += 10 * animationDirection;
        }, 600);
    }
};

// 组件卸载时清除定时器
onUnmounted(() => {
    if (animationTimer !== null) {
        clearInterval(animationTimer);
    }
});

// 温度颜色计算
const getTemperatureClass = (temp: number) => {
    if (temp < 20) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
    if (temp < 40) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
    if (temp < 70) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
    return 'bg-red-500 text-white dark:bg-red-600';
};

// 价格格式化
const formatPrice = (value: number) => `¥${value}`;

// 格式化函数
const formatDefault = (value: number) => `${value}`;
const formatAge = (value: number) => `${value}岁`;

// 主题展示用值
const lightThemeValue1 = ref(30);
const lightThemeValue2 = ref([20, 60]);
const lightThemeValue3 = ref(75);
const darkThemeValue1 = ref(40);
const darkThemeValue2 = ref([30, 70]);
const darkThemeValue3 = ref(85);
</script>

<style scoped>
/* 自定义滑块颜色 - 仅修改填充部分的颜色 */
.slider-blue .bg-blue-500 {
    background-color: #3b82f6; /* bg-blue-500 */
}

.slider-blue .bg-blue-500.dark {
    background-color: #60a5fa; /* dark:bg-blue-400 */
}

.slider-green .bg-blue-500 {
    background-color: #22c55e; /* bg-green-500 */
}

.slider-green .bg-blue-500.dark {
    background-color: #34d399; /* dark:bg-green-400 */
}

.slider-indigo .bg-blue-500 {
    background-color: #6366f1; /* bg-indigo-500 */
}

.slider-indigo .bg-blue-500.dark {
    background-color: #818cf8; /* dark:bg-indigo-400 */
}
</style>