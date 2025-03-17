<template>
    <div class="carousel-showcase p-6 space-y-12 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white">Carousel 走马灯组件</h1>
        <p class="text-gray-600 dark:text-gray-300">
            旋转木马，一组轮播的区域。适用于一组平级内容的展示，或当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。常用于图片或卡片轮播。
        </p>

        <!-- 基础用法展示 -->
        <section class="showcase-section">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">基础用法</h2>
            <div class="h-64 w-full">
                <Carousel class="h-full">
                    <CarouselItem v-for="(color, index) in baseColors" :key="index">
                        <div :class="`w-full h-full flex items-center justify-center text-white ${color.bg}`">
                            <span class="text-2xl font-bold">{{ index + 1 }}</span>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
            <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">默认配置的走马灯，支持自动轮播和无限循环。</p>
        </section>

        <!-- 不同指示器位置 -->
        <section class="showcase-section">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">指示器位置</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">内部指示器 (inside)</h3>
                    <div class="h-48 w-full">
                        <Carousel class="h-full" indicator-position="inside">
                            <CarouselItem v-for="(item, index) in imageItems.slice(0, 3)" :key="index">
                                <div class="w-full h-full">
                                    <img :src="item.url" class="w-full h-full object-cover" />
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">外部指示器 (outside)</h3>
                    <div class="h-48 w-full">
                        <Carousel class="h-full" indicator-position="outside">
                            <CarouselItem v-for="(item, index) in imageItems.slice(0, 3)" :key="index">
                                <div class="w-full h-full">
                                    <img :src="item.url" class="w-full h-full object-cover" />
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>

        <!-- 箭头控制展示 -->
        <section class="showcase-section">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">箭头控制</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">总是显示 (always)</h3>
                    <div class="h-40 w-full">
                        <Carousel class="h-full" arrow="always">
                            <CarouselItem v-for="(color, index) in baseColors.slice(0, 3)" :key="index">
                                <div :class="`w-full h-full flex items-center justify-center text-white ${color.bg}`">
                                    <span class="text-xl">{{ color.name }}</span>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">悬停显示 (hover)</h3>
                    <div class="h-40 w-full">
                        <Carousel class="h-full" arrow="hover">
                            <CarouselItem v-for="(color, index) in baseColors.slice(0, 3)" :key="index">
                                <div :class="`w-full h-full flex items-center justify-center text-white ${color.bg}`">
                                    <span class="text-xl">{{ color.name }}</span>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">永不显示 (never)</h3>
                    <div class="h-40 w-full">
                        <Carousel class="h-full" arrow="never">
                            <CarouselItem v-for="(color, index) in baseColors.slice(0, 3)" :key="index">
                                <div :class="`w-full h-full flex items-center justify-center text-white ${color.bg}`">
                                    <span class="text-xl">{{ color.name }}</span>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>

        <!-- 动画类型展示 -->
        <section class="showcase-section">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">动画效果</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">滑动效果 (slide)</h3>
                    <div class="h-48 w-full">
                        <Carousel class="h-full" animation-type="slide" :animation-duration="500">
                            <CarouselItem v-for="(item, index) in cardItems.slice(0, 4)" :key="index">
                                <div
                                    class="w-full h-full p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg flex flex-col items-center justify-center">
                                    <div class="text-3xl mb-2" v-html="item.icon"></div>
                                    <h4 class="text-lg font-medium text-gray-900 dark:text-white">{{ item.title }}</h4>
                                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ item.description }}</p>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">淡入淡出效果 (fade)</h3>
                    <div class="h-48 w-full">
                        <Carousel class="h-full" animation-type="fade" :animation-duration="800">
                            <CarouselItem v-for="(item, index) in cardItems.slice(0, 4)" :key="index">
                                <div
                                    class="w-full h-full p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg flex flex-col items-center justify-center">
                                    <div class="text-3xl mb-2" v-html="item.icon"></div>
                                    <h4 class="text-lg font-medium text-gray-900 dark:text-white">{{ item.title }}</h4>
                                    <p class="text-sm text-gray-600 dark:text-gray-300">{{ item.description }}</p>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>

        <!-- 卡片展示案例 -->
        <section class="showcase-section">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">卡片轮播</h2>
            <div class="h-72 w-full">
                <Carousel class="h-full" :interval="4000" indicator-position="outside">
                    <CarouselItem v-for="(item, index) in productItems" :key="index">
                        <div class="w-full h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center">
                            <div class="w-1/3 h-full flex items-center justify-center">
                                <img :src="item.image" class="max-h-full object-contain" />
                            </div>
                            <div class="w-2/3 pl-6">
                                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ item.name }}</h3>
                                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ item.description }}</p>
                                <div class="flex items-center mb-3">
                                    <div class="flex text-yellow-400">
                                        <svg v-for="i in 5" :key="i" class="w-5 h-5"
                                            :class="i <= item.rating ? 'fill-current' : 'stroke-current'"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span class="ml-2 text-gray-600 dark:text-gray-400">{{ item.reviews }} 评价</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-2xl font-bold text-red-600 dark:text-red-400">¥{{ item.price
                                    }}</span>
                                    <button
                                        class="px-4 py-2 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-md transition-colors">
                                        查看详情
                                    </button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
        </section>

        <!-- 全屏图片展示 -->
        <section class="showcase-section">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">全屏图片轮播</h2>
            <div class="h-96 w-full">
                <Carousel class="h-full" :autoplay="true" :interval="5000" animation-type="fade"
                    indicator-position="inside" arrow="always">
                    <CarouselItem v-for="(image, index) in bannerImages" :key="index">
                        <div class="relative w-full h-full">
                            <img :src="image.url" class="w-full h-full object-cover" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                                <h2 class="text-white text-3xl font-bold mb-2">{{ image.title }}</h2>
                                <p class="text-white/90 text-lg mb-4">{{ image.subtitle }}</p>
                                <button
                                    class="w-max px-6 py-2 bg-white text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                                    {{ image.buttonText }}
                                </button>
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
        </section>

        <!-- API 文档 -->
        <section class="showcase-section mt-16">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">API</h2>

            <h3 class="text-xl font-medium mb-2 text-gray-800 dark:text-white">Carousel Props</h3>
            <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                    <thead>
                        <tr class="bg-gray-100 dark:bg-gray-800">
                            <th class="py-3 px-4 text-left text-gray-900 dark:text-white border-b dark:border-gray-700">
                                参数</th>
                            <th class="py-3 px-4 text-left text-gray-900 dark:text-white border-b dark:border-gray-700">
                                说明</th>
                            <th class="py-3 px-4 text-left text-gray-900 dark:text-white border-b dark:border-gray-700">
                                类型</th>
                            <th class="py-3 px-4 text-left text-gray-900 dark:text-white border-b dark:border-gray-700">
                                默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">autoplay</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">是否自动播放</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">true</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">interval</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">自动播放间隔，单位毫秒</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">number</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">3000</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">loop</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">是否循环播放</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">true</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">initialIndex</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">初始激活的索引</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">number</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">0</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">indicatorPosition</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">指示器位置</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">'inside' | 'outside' | 'none'</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">'inside'</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">indicatorTrigger</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">指示器触发方式</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">'click' | 'hover'</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">'click'</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">arrow</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">箭头显示方式</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">'always' | 'hover' | 'never'</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">'hover'</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">animationType</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">动画类型</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">'slide' | 'fade' | 'zoom' | 'flip'</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">'slide'</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">animationDuration</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">动画持续时间（毫秒）</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">number</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">300</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">lazyLoad</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">是否懒加载子项内容</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">false</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">touchEnabled</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">是否启用触摸滑动</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">true</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">pauseOnHover</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">鼠标悬停时是否暂停自动播放</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">boolean</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">true</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-medium mt-6 mb-2 text-gray-800 dark:text-white">Carousel 事件</h3>
            <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                    <thead>
                        <tr class="bg-gray-100 dark:bg-gray-800">
                            <th class="py-3 px-4 text-left text-gray-900 dark:text-white border-b dark:border-gray-700">
                                事件名</th>
                            <th class="py-3 px-4 text-left text-gray-900 dark:text-white border-b dark:border-gray-700">
                                说明</th>
                            <th class="py-3 px-4 text-left text-gray-900 dark:text-white border-b dark:border-gray-700">
                                回调参数</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">change</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">幻灯片切换时触发</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">当前索引</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">prev</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">切换到上一张时触发</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">无</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">next</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">切换到下一张时触发</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">无</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h3 class="text-xl font-medium mt-6 mb-2 text-gray-800 dark:text-white">CarouselItem Props</h3>
            <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                    <thead>
                        <tr class="bg-gray-100 dark:bg-gray-800">
                            <th class="py-3 px-4 text-left text-gray-900 dark:text-white border-b dark:border-gray-700">
                                参数</th>
                            <th class="py-3 px-4 text-left text-gray-900 dark:text-white border-b dark:border-gray-700">
                                说明</th>
                            <th class="py-3 px-4 text-left text-gray-900 dark:text-white border-b dark:border-gray-700">
                                类型</th>
                            <th class="py-3 px-4 text-left text-gray-900 dark:text-white border-b dark:border-gray-700">
                                默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">customClass</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">自定义类名</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">''</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">imageUrl</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">图片URL（如果是图片轮播）</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">''</td>
                        </tr>
                        <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td class="py-3 px-4 text-gray-800 dark:text-gray-200">imageAlt</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">图片alt文本</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">string</td>
                            <td class="py-3 px-4 text-gray-600 dark:text-gray-300">'轮播图片'</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h3 class="text-xl font-medium mt-8 mb-4 text-gray-800 dark:text-white">最佳实践与使用指南</h3>
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                <ul class="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>对于图片轮播，建议使用 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">fade</code> 动画类型，并设置适当的过渡时间</li>
                    <li>对于卡片内容轮播，推荐使用 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">slide</code> 动画类型</li>
                    <li>在移动端场景，请确保启用 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">touchEnabled</code> 以支持触摸滑动</li>
                    <li>对于大量图片轮播，建议启用 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">lazyLoad</code> 提高性能</li>
                    <li>自定义指示器样式可通过 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">indicatorStyle</code> 属性实现</li>
                </ul>
            </div>
        </section>

        <!-- 新增: 自定义指示器样式展示 -->
        <section class="showcase-section">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">自定义指示器</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">彩色指示器</h3>
                    <div class="h-48 w-full">
                        <Carousel 
                            class="h-full" 
                            :indicator-style="{
                                '--indicator-active-color': '#2563eb',
                                '--indicator-color': '#e5e7eb'
                            }"
                        >
                            <CarouselItem v-for="(color, index) in baseColors.slice(0, 3)" :key="index">
                                <div :class="`w-full h-full flex items-center justify-center text-white ${color.bg}`">
                                    <span class="text-xl">{{ color.name }}</span>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">方形指示器</h3>
                    <div class="h-48 w-full">
                        <Carousel 
                            class="h-full" 
                            :indicator-style="{
                                borderRadius: '0',
                                width: '24px',
                                height: '4px'
                            }"
                        >
                            <CarouselItem v-for="(color, index) in baseColors.slice(0, 3)" :key="index">
                                <div :class="`w-full h-full flex items-center justify-center text-white ${color.bg}`">
                                    <span class="text-xl">{{ color.name }}</span>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>

        <!-- 新增: 触摸滑动与键盘导航展示 -->
        <section class="showcase-section">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">交互增强</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">触摸滑动</h3>
                    <div class="h-48 w-full">
                        <Carousel class="h-full" :touch-enabled="true" :swipe-threshold="50">
                            <CarouselItem v-for="(item, index) in imageItems.slice(0, 3)" :key="index">
                                <div class="w-full h-full">
                                    <img :src="item.url" class="w-full h-full object-cover" />
                                    <div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                                        向左/右滑动切换图片
                                    </div>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">在移动设备上，您可以左右滑动来切换图片</p>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">键盘导航</h3>
                    <div class="h-48 w-full">
                        <Carousel class="h-full" :keyboard-enabled="true" animation-type="fade">
                            <CarouselItem v-for="(item, index) in imageItems.slice(0, 3)" :key="index">
                                <div class="w-full h-full relative">
                                    <img :src="item.url" class="w-full h-full object-cover" />
                                    <div class="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                                        点击后使用 ← → 键控制
                                    </div>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">点击轮播区域后，可使用键盘左右箭头键控制切换</p>
                </div>
            </div>
        </section>
        
        <!-- 新增: 高级动画效果展示 -->
        <section class="showcase-section">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">高级动画效果</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">缩放效果 (zoom)</h3>
                    <div class="h-48 w-full">
                        <Carousel class="h-full" animation-type="zoom" :animation-duration="700">
                            <CarouselItem v-for="(item, index) in imageItems.slice(0, 3)" :key="index">
                                <div class="w-full h-full">
                                    <img :src="item.url" class="w-full h-full object-cover" />
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">翻转效果 (flip)</h3>
                    <div class="h-48 w-full">
                        <Carousel class="h-full" animation-type="flip" :animation-duration="1000">
                            <CarouselItem v-for="(color, index) in baseColors.slice(0, 3)" :key="index">
                                <div :class="`w-full h-full flex items-center justify-center text-white ${color.bg}`">
                                    <span class="text-xl">{{ color.name }}</span>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>

        <!-- 新增: 小结与最佳实践 -->
        <section class="showcase-section mt-16">
            <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">小结与最佳实践</h2>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <div class="space-y-4">
                    <p class="text-gray-700 dark:text-gray-300">
                        Carousel 走马灯组件是一个功能强大且高度可定制的组件，适用于多种场景，如图片轮播、产品展示、内容推荐等。
                        以下是一些使用建议：
                    </p>

                    <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        <li>根据内容类型选择合适的动画类型：图片轮播推荐使用 
                            <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">fade</code> 或 
                            <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">zoom</code>，
                            内容卡片轮播适合使用 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">slide</code>
                        </li>
                        <li>在移动设备中，务必启用 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">touchEnabled</code>
                            并设置合适的 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">swipeThreshold</code>
                        </li>
                        <li>对于多图片轮播，启用 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">lazyLoad</code>
                            属性可以显著提高页面的加载性能</li>
                        <li>根据业务需求设置自动播放的时间间隔，一般建议3000-5000毫秒为宜</li>
                        <li>考虑使用 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">pauseOnHover</code>
                            让用户有足够的时间查看内容</li>
                        <li>适当设置 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">indicatorPosition</code>
                            和 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">arrow</code>
                            属性，提升用户体验和交互便捷性</li>
                    </ul>

                    <div
                        class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                        <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                            </svg>
                            响应式设计提示
                        </h4>
                        <p class="text-sm text-blue-700 dark:text-blue-300">
                            走马灯组件已针对不同屏幕尺寸进行了优化。在小屏设备上，可以考虑调整箭头大小和位置，
                            使用 <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">touchEnabled</code> 
                            属性启用触摸滑动，以提供更好的移动端体验。同时，确保轮播内容在不同设备上都有良好的可视性。
                        </p>
                    </div>

                    <div
                        class="rounded-lg border border-indigo-100 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-900/20">
                        <h4 class="mb-2 flex items-center text-indigo-800 dark:text-indigo-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                            </svg>
                            暗色模式适配
                        </h4>
                        <p class="text-sm text-indigo-700 dark:text-indigo-300">
                            Carousel 组件完全支持暗色模式，无需额外配置。只要在应用根元素上添加 <code
                                class="rounded bg-indigo-100 px-1 py-0.5 font-mono dark:bg-indigo-800/60">.dark</code> 类，
                            组件就会自动切换为暗色样式。在暗色模式下，箭头和指示器会调整为更适合暗色背景的颜色，
                            您也可以通过自定义样式进一步调整。
                        </p>
                    </div>

                    <p class="text-gray-700 dark:text-gray-300">
                        在用户体验设计中，轮播组件应当简洁、直观且易于操控。我们建议为轮播内容提供清晰的上下文和导航指引，
                        确保用户能够理解当前查看的是什么内容，以及如何查看其他内容。合理的动画效果和过渡时间也能够提升整体体验。
                    </p>

                    <p class="text-gray-700 dark:text-gray-300">
                        最后，考虑到可访问性，我们在组件中添加了适当的 ARIA 属性和键盘导航支持。这确保了所有用户，
                        无论其能力如何，都能有效地使用您的走马灯组件。
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Carousel, CarouselItem } from './index';

export default defineComponent({
    name: 'CarouselView',
    components: {
        Carousel,
        CarouselItem
    },
    setup() {
        // 基础颜色数据
        const baseColors = [
            { name: '红色', bg: 'bg-red-500' },
            { name: '蓝色', bg: 'bg-blue-500' },
            { name: '绿色', bg: 'bg-green-500' },
            { name: '紫色', bg: 'bg-purple-500' },
            { name: '橙色', bg: 'bg-orange-500' }
        ];

        // 图片数据
        const imageItems = [
            { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' },
            { url: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' },
            { url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' },
            { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' }
        ];

        // 卡片数据
        const cardItems = [
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
                title: '高性能',
                description: '优化的动画和过渡效果，确保流畅的用户体验'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>',
                title: '可靠稳定',
                description: '经过全面测试，确保在各种环境下稳定运行'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>',
                title: '主题定制',
                description: '支持亮色和暗色主题，完美适配您的设计需求'
            },
            {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>',
                title: '安全可靠',
                description: '保护您的数据安全，提供稳定的服务体验'
            }
        ];

        // 产品数据
        const productItems = [
            {
                name: '高级智能手表',
                description: '监测健康数据，支持多种运动模式，长达7天超长续航',
                price: 1299,
                rating: 5,
                reviews: 128,
                image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                name: '无线蓝牙耳机',
                description: '主动降噪，音质清晰，佩戴舒适，续航超长',
                price: 899,
                rating: 4,
                reviews: 89,
                image: 'https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            },
            {
                name: '专业摄影相机',
                description: '2400万像素，4K视频录制，5轴防抖，支持WiFi传输',
                price: 5999,
                rating: 5,
                reviews: 56,
                image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
            }
        ];

        // 全屏banner数据
        const bannerImages = [
            {
                url: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
                title: '探索无尽可能',
                subtitle: '发现我们最新的产品系列，为您的生活增添色彩',
                buttonText: '立即探索'
            },
            {
                url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
                title: '科技改变生活',
                subtitle: '体验最前沿的科技产品，让生活更加智能便捷',
                buttonText: '了解更多'
            },
            {
                url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
                title: '专业级体验',
                subtitle: '专为专业人士设计，满足您最苛刻的需求',
                buttonText: '立即购买'
            }
        ];

        return {
            baseColors,
            imageItems,
            cardItems,
            productItems,
            bannerImages
        };
    }
});
</script>

<style scoped>
.showcase-section {
    background-color: #ffffff;
    /* bg-white */
    border-radius: 0.5rem;
    /* rounded-lg */
    padding: 1.5rem;
    /* p-6 */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    /* shadow-md */
    margin-bottom: 1.5rem;
    /* mb-6 */
    transition: all 0.3s ease;
}

/* 深色模式适配 */
:deep(.dark .showcase-section) {
    background-color: #1f2937;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
}

/* 箭头样式增强 */
:deep(.carousel-arrow) {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 30;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50% !important; /* 确保垂直居中 */
    transform: translateY(-50%) !important; /* 确保垂直居中 */
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
}

:deep(.carousel-arrow:hover) {
    transform: translateY(-50%) scale(1.1) !important; /* 缩放效果保持垂直居中 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* 箭头的进入和离开动画 */
:deep(.carousel-arrow.invisible) {
    transform: translateY(-50%) scale(0.8) !important; /* 保持垂直居中 */
    opacity: 0;
}

:deep(.carousel-arrow.carousel-arrow-left) {
    left: 10px;
}

:deep(.carousel-arrow.carousel-arrow-right) {
    right: 10px;
}

:deep(.carousel:hover .carousel-arrow) {
    opacity: 1;
    visibility: visible;
}

/* 指示器样式增强 */
:deep(.carousel-indicators) {
    transition: all 0.3s ease;
}

:deep(.carousel-indicator) {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

:deep(.carousel-indicator.active-indicator) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 为不同动画类型添加特殊过渡效果 */
:deep(.carousel[animation-type="fade"] .carousel-item) {
    transition: opacity var(--animation-duration, 300ms) ease !important;
}

:deep(.carousel[animation-type="zoom"] .carousel-item) {
    transition: all var(--animation-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1) !important;
}

:deep(.carousel[animation-type="flip"] .carousel-item) {
    transition: all var(--animation-duration, 300ms) cubic-bezier(0.4, 0, 0.2, 1) !important;
    transform-style: preserve-3d;
}

/* 添加响应式调整 */
@media (max-width: 640px) {
    :deep(.carousel-arrow) {
        width: 32px;
        height: 32px;
    }

    :deep(.carousel-arrow svg) {
        width: 20px;
        height: 20px;
    }
}
</style>
