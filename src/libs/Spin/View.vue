<template>
    <div class="p-8 transition-colors duration-500 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
            <span class="mr-3 text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                </svg>
            </span>
            加载中 Spin
        </h1>
        <p class="mb-10 text-gray-600 dark:text-gray-300 max-w-3xl">
            Spin 用于页面和区块的加载中状态。当页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- 基础用法展示区 -->
            <section
                class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
                    基础用法
                </h2>
                <div class="space-y-8 mb-4">
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">默认加载效果</p>
                        <div
                            class="flex justify-center p-6 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                            <Spin />
                        </div>
                    </div>

                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">不同尺寸</p>
                        <div
                            class="flex justify-around items-center p-6 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                            <div class="flex flex-col items-center">
                                <Spin size="small" />
                                <span class="text-xs text-gray-500 dark:text-gray-400 mt-2">小型</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <Spin />
                                <span class="text-xs text-gray-500 dark:text-gray-400 mt-2">默认</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <Spin size="large" />
                                <span class="text-xs text-gray-500 dark:text-gray-400 mt-2">大型</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">带有文字提示</p>
                        <div
                            class="flex justify-center p-6 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                            <Spin tip="加载中..." />
                        </div>
                    </div>
                </div>
            </section>

            <!-- 自定义指示符展示区 -->
            <section
                class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-green-500 dark:bg-green-400 rounded-full mr-3"></div>
                    自定义指示符
                </h2>
                <div class="space-y-8 mb-4">
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">自定义旋转图标</p>
                        <div
                            class="flex justify-center p-6 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                            <Spin :indicator="customIndicator1" />
                        </div>
                    </div>

                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">自定义动画加载图标</p>
                        <div
                            class="flex justify-center p-6 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                            <Spin :indicator="customIndicator2" tip="数据加载中..." />
                        </div>
                    </div>

                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">使用插槽提示文本</p>
                        <div
                            class="flex justify-center p-6 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                            <Spin>
                                <template #tip>
                                    <span
                                        class="text-blue-500 dark:text-blue-400 font-medium animate-pulse">努力加载中...</span>
                                </template>
                            </Spin>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 延迟加载展示 -->
            <section
                class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-purple-500 dark:bg-purple-400 rounded-full mr-3"></div>
                    延迟与控制
                </h2>
                <div class="space-y-8">
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">延迟显示 (1000ms)</p>
                        <div
                            class="flex justify-center p-6 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg min-h-[120px]">
                            <Spin :spinning="delayedSpinning" :delay="1000" tip="延迟显示中..." />
                        </div>
                        <div class="mt-4 flex justify-center">
                            <button @click="toggleDelayedSpinning"
                                class="px-4 py-2 rounded transition-colors duration-300"
                                :class="delayedSpinning ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'">
                                {{ delayedSpinning ? "停止加载" : "开始加载" }}
                            </button>
                        </div>
                    </div>

                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">手动控制显示状态</p>
                        <div
                            class="flex justify-center p-6 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg min-h-[120px]">
                            <Spin :spinning="controlledSpinning" tip="受控加载中..." />
                        </div>
                        <div class="mt-4 flex justify-center space-x-4">
                            <button @click="startSpinning"
                                class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors duration-300">
                                开始加载
                            </button>
                            <button @click="stopSpinning"
                                class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors duration-300">
                                停止加载
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 包装容器展示 -->
            <section
                class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-yellow-500 dark:bg-yellow-400 rounded-full mr-3"></div>
                    包装容器
                </h2>
                <div class="space-y-8">
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">包装卡片内容</p>
                        <Spin :spinning="cardLoading" tip="正在加载内容..." wrapperClassName="rounded-lg overflow-hidden">
                            <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 min-h-[200px]">
                                <h4 class="font-medium text-gray-700 dark:text-gray-300">卡片内容</h4>
                                <p class="text-gray-500 dark:text-gray-400 mt-2">
                                    这是一个被 Spin 组件包裹的内容区域，当加载状态为 true 时会显示加载动画。
                                </p>
                                <div class="mt-4 flex gap-2">
                                    <span v-for="i in 3" :key="i"
                                        class="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                                        标签 {{ i }}
                                    </span>
                                </div>
                                <div class="mt-4 flex justify-end">
                                    <button
                                        class="px-3 py-1.5 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors duration-300">
                                        操作按钮
                                    </button>
                                </div>
                            </div>
                        </Spin>
                        <div class="mt-4 flex justify-center">
                            <button @click="toggleCardLoading" class="px-4 py-2 rounded transition-colors duration-300"
                                :class="cardLoading ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'">
                                {{ cardLoading ? "停止加载" : "开始加载" }}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 列表加载场景展示 -->
            <section
                class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md col-span-1 lg:col-span-2">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-red-500 dark:bg-red-400 rounded-full mr-3"></div>
                    应用场景
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 表格加载 -->
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">表格加载</p>
                        <Spin :spinning="tableLoading" tip="加载数据中..." wrapperClassName="rounded-lg overflow-hidden">
                            <div
                                class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                                <div
                                    class="bg-gray-50 dark:bg-gray-700 p-3 border-b border-gray-200 dark:border-gray-600">
                                    <div class="flex justify-between items-center">
                                        <h5 class="font-medium text-gray-700 dark:text-gray-300">用户列表</h5>
                                        <button
                                            class="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <div class="flex items-center p-3" v-for="i in 5" :key="i">
                                        <div class="w-8 h-8 bg-gray-100 dark:bg-gray-600 rounded-full"></div>
                                        <div class="ml-3">
                                            <div class="text-sm font-medium text-gray-800 dark:text-gray-200">用户 {{ i }}
                                            </div>
                                            <div class="text-xs text-gray-500 dark:text-gray-400">user{{ i
                                                }}@example.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Spin>
                        <div class="mt-4 flex justify-center">
                            <button @click="toggleTableLoading" class="px-4 py-2 rounded transition-colors duration-300"
                                :class="tableLoading ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'">
                                {{ tableLoading ? "停止加载" : "开始加载" }}
                            </button>
                        </div>
                    </div>

                    <!-- 全屏加载效果 -->
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">页面加载</p>
                        <div
                            class="relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 min-h-[300px]">
                            <div class="p-4">
                                <h5 class="font-medium text-gray-700 dark:text-gray-300 mb-4">页面内容</h5>
                                <div class="space-y-3">
                                    <div class="h-4 bg-gray-100 dark:bg-gray-700 rounded w-full"></div>
                                    <div class="h-4 bg-gray-100 dark:bg-gray-700 rounded w-5/6"></div>
                                    <div class="h-4 bg-gray-100 dark:bg-gray-700 rounded w-4/6"></div>
                                </div>
                                <div class="mt-6 space-y-2">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded"></div>
                                        <div class="flex-1">
                                            <div class="h-4 bg-gray-100 dark:bg-gray-700 rounded w-3/4"></div>
                                            <div class="h-3 bg-gray-100 dark:bg-gray-700 rounded w-1/2 mt-2"></div>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded"></div>
                                        <div class="flex-1">
                                            <div class="h-4 bg-gray-100 dark:bg-gray-700 rounded w-3/4"></div>
                                            <div class="h-3 bg-gray-100 dark:bg-gray-700 rounded w-1/2 mt-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 全屏加载中覆盖层 -->
                            <div class="absolute inset-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm flex items-center justify-center transition-opacity duration-500"
                                :class="fullscreenLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'">
                                <div class="flex flex-col items-center">
                                    <Spin :indicator="fullscreenIndicator" size="large" />
                                    <div class="mt-4 text-blue-600 dark:text-blue-400 font-medium animate-pulse">
                                        页面加载中...</div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 flex justify-center">
                            <button @click="toggleFullscreenLoading"
                                class="px-4 py-2 rounded transition-colors duration-300"
                                :class="fullscreenLoading ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'">
                                {{ fullscreenLoading ? "停止加载" : "开始加载" }}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 全局指示符和主题适配 -->
            <section
                class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md col-span-1 lg:col-span-2">
                <h2 class="text-xl font-semibold mb-8 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-3"></div>
                    全局配置与主题适配
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 全局指示符 -->
                    <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                        <h3 class="text-lg font-medium mb-6 text-gray-800 dark:text-gray-200">全局默认指示符</h3>
                        <div class="flex justify-center p-4 mb-6">
                            <Spin />
                        </div>
                        <div class="flex justify-center">
                            <button @click="toggleGlobalIndicator"
                                class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded transition-colors duration-300">
                                {{ useGlobalIndicator ? '恢复默认指示符' : '设置全局指示符' }}
                            </button>
                        </div>
                    </div>

                    <!-- 主题模式展示 -->
                    <div class="bg-gray-900 p-6 rounded-lg shadow-sm">
                        <h3 class="text-lg font-medium mb-6 text-gray-200">暗色模式展示</h3>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="flex flex-col items-center">
                                <Spin size="small" />
                                <span class="text-xs text-gray-400 mt-2">小型</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <Spin :indicator="darkThemeIndicator" />
                                <span class="text-xs text-gray-400 mt-2">自定义</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <Spin size="large" tip="加载中" />
                                <span class="text-xs text-gray-400 mt-2">带提示</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 进度指示类型展示 - 新增 -->
            <section
                class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-teal-500 dark:bg-teal-400 rounded-full mr-3"></div>
                    进度指示
                </h2>
                <div class="space-y-8">
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">环形进度</p>
                        <div
                            class="flex justify-center p-6 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                            <Spin :indicator="circleProgressIndicator" tip="加载进度：20%" />
                        </div>
                        <div class="mt-4 flex justify-center space-x-2">
                            <button @click="decreaseProgress"
                                class="px-3 py-1.5 text-sm bg-gray-500 hover:bg-gray-600 text-white rounded transition-colors duration-300">
                                减少
                            </button>
                            <button @click="increaseProgress"
                                class="px-3 py-1.5 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded transition-colors duration-300">
                                增加
                            </button>
                        </div>
                    </div>

                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">自动进度加载</p>
                        <div class="p-6 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
                            <Spin :spinning="progressBarSpinning" :indicator="progressBarIndicator"
                                :tip="`数据加载中 ${loadingProgress}%`">
                                <div class="h-32 flex items-center justify-center text-gray-400 dark:text-gray-500">
                                    加载完成后显示内容
                                </div>
                            </Spin>
                        </div>
                        <div class="mt-4 flex justify-center">
                            <button @click="simulateProgressLoading"
                                class="px-3 py-1.5 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded transition-colors duration-300"
                                :disabled="progressBarSpinning">
                                {{ progressBarSpinning ? '加载中...' : '模拟加载过程' }}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 图片加载展示 - 新增 -->
            <section
                class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-pink-500 dark:bg-pink-400 rounded-full mr-3"></div>
                    图片加载
                </h2>
                <div class="space-y-8">
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">图片加载效果</p>
                        <div class="grid grid-cols-2 gap-4">
                            <div v-for="(img, index) in imageCards" :key="index"
                                class="relative overflow-hidden rounded-lg">
                                <Spin :spinning="img.loading" wrapperClassName="h-40">
                                    <div
                                        class="bg-gray-100 dark:bg-gray-700 h-40 w-full flex items-center justify-center rounded-lg overflow-hidden">
                                        <div v-if="img.loaded" class="w-full h-full">
                                            <div class="w-full h-full bg-gradient-to-br"
                                                :class="`from-${img.color}-100 to-${img.color}-300 dark:from-${img.color}-800 dark:to-${img.color}-900`">
                                                <div class="w-full h-full flex items-center justify-center text-lg font-bold"
                                                    :class="`text-${img.color}-500 dark:text-${img.color}-300`">
                                                    图片 {{ index + 1 }}
                                                </div>
                                            </div>
                                        </div>
                                        <span v-else class="text-gray-500 dark:text-gray-400">图片加载中...</span>
                                    </div>
                                </Spin>
                            </div>
                        </div>
                        <div class="mt-4 flex justify-center">
                            <button @click="reloadImages"
                                class="px-3 py-1.5 text-sm bg-pink-500 hover:bg-pink-600 text-white rounded transition-colors duration-300">
                                重新加载图片
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 标签页加载展示 - 新增 -->
            <section
                class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md col-span-1 lg:col-span-2">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-orange-500 dark:bg-orange-400 rounded-full mr-3"></div>
                    复合组件
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 标签页加载 -->
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">标签页内容加载</p>
                        <div
                            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div class="flex border-b border-gray-200 dark:border-gray-700">
                                <button v-for="(tab, index) in tabs" :key="index" @click="switchTab(index)"
                                    class="px-4 py-2 text-sm transition-colors duration-300" :class="activeTabIndex === index
                                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400 font-medium'
                                        : 'text-gray-600 dark:text-gray-400'">
                                    {{ tab.label }}
                                </button>
                            </div>
                            <div class="relative p-4 min-h-[200px]">
                                <Spin :spinning="tabs[activeTabIndex].loading" tip="加载标签内容中...">
                                    <div>
                                        <h4 class="font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            {{ tabs[activeTabIndex].title }}
                                        </h4>
                                        <p class="text-gray-600 dark:text-gray-400">
                                            {{ tabs[activeTabIndex].content }}
                                        </p>
                                    </div>
                                </Spin>
                            </div>
                        </div>
                    </div>

                    <!-- 按钮加载状态 -->
                    <div>
                        <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">按钮加载状态</p>
                        <div
                            class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-4">
                            <div class="flex flex-wrap gap-3">
                                <button
                                    class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg inline-flex items-center justify-center min-w-[100px]"
                                    @click="toggleButtonLoading(0)" :disabled="buttonLoading[0]">
                                    <Spin v-if="buttonLoading[0]" :indicator="buttonIndicator" size="small"
                                        class="mr-1" />
                                    {{ buttonLoading[0] ? '提交中...' : '提交' }}
                                </button>
                                <button
                                    class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg inline-flex items-center justify-center min-w-[100px]"
                                    @click="toggleButtonLoading(1)" :disabled="buttonLoading[1]">
                                    {{ buttonLoading[1] ? '保存中...' : '保存' }}
                                    <Spin v-if="buttonLoading[1]" :indicator="buttonIndicator" size="small"
                                        class="ml-1" />
                                </button>
                                <button
                                    class="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg inline-flex items-center justify-center min-w-[100px] disabled:opacity-50"
                                    :disabled="buttonLoading[2]" @click="toggleButtonLoading(2)">
                                    <Spin v-if="buttonLoading[2]" :indicator="buttonIndicator" size="small"
                                        class="mr-1" />
                                    {{ buttonLoading[2] ? '处理中' : '重置' }}
                                </button>
                            </div>

                            <div class="mt-4">
                                <div class="relative">
                                    <input type="text"
                                        class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors duration-300 pr-10"
                                        placeholder="搜索内容..." :disabled="buttonLoading[3]" />
                                    <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                                        <Spin v-if="buttonLoading[3]" :indicator="searchIndicator" size="small" />
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <button @click="toggleButtonLoading(3)"
                                    class="mt-2 px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                                    {{ buttonLoading[3] ? '取消搜索' : '模拟搜索' }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 卡片组合展示 - 新增 -->
            <section
                class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md col-span-1 lg:col-span-2">
                <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center">
                    <div class="w-1.5 h-6 bg-emerald-500 dark:bg-emerald-400 rounded-full mr-3"></div>
                    卡片组合
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- 数据卡片 -->
                    <div v-for="(card, index) in dataCards" :key="index"
                        class="bg-white dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 shadow-sm overflow-hidden">
                        <div class="p-4">
                            <div class="flex justify-between">
                                <div>
                                    <h5 class="text-sm font-medium text-gray-500 dark:text-gray-400">{{ card.title }}
                                    </h5>
                                    <div class="mt-1 flex items-end">
                                        <Spin :spinning="card.loading">
                                            <span class="text-2xl font-bold text-gray-800 dark:text-white">{{ card.value
                                            }}</span>
                                            <span class="ml-2 text-xs"
                                                :class="card.trend === 'up' ? 'text-green-500' : 'text-red-500'">
                                                {{ card.trend === 'up' ? '↑' : '↓' }} {{ card.change }}%
                                            </span>
                                        </Spin>
                                    </div>
                                </div>
                                <div :class="`bg-${card.color}-100 dark:bg-${card.color}-900/30 p-2 rounded-lg`">
                                    <svg class="w-6 h-6" :class="`text-${card.color}-500 dark:text-${card.color}-400`"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path v-if="card.icon === 'chart'" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2"
                                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z">
                                        </path>
                                        <path v-if="card.icon === 'users'" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                        </path>
                                        <path v-if="card.icon === 'dollar'" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div class="mt-4 h-1 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                                <div :class="`h-full bg-${card.color}-500 dark:bg-${card.color}-400 rounded-full`"
                                    :style="`width: ${card.progress}%`"></div>
                            </div>
                        </div>
                        <div
                            class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-600">
                            <span>{{ card.date }} 更新</span>
                        </div>
                    </div>

                    <!-- 数据刷新按钮 -->
                    <div class="md:col-span-3 mt-2 flex justify-center">
                        <button @click="refreshDataCards"
                            class="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded transition-colors duration-300 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            刷新数据卡片
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, h, onUnmounted, computed, onMounted } from 'vue';
import Spin, { setDefaultIndicator } from './Spin';

// 自定义指示符
const customIndicator1 = h('div', {
    class: 'animate-spin text-blue-500 dark:text-blue-400'
}, [
    h('svg', {
        class: 'w-8 h-8',
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24'
    }, [
        h('circle', {
            class: 'opacity-25',
            cx: '12',
            cy: '12',
            r: '10',
            stroke: 'currentColor',
            'stroke-width': '4'
        }),
        h('path', {
            class: 'opacity-75',
            fill: 'currentColor',
            d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        })
    ])
]);

// 自定义动画指示符
const customIndicator2 = h('div', {
    class: 'flex space-x-1'
}, [
    h('div', {
        class: 'w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce',
        style: 'animation-delay: 0s'
    }),
    h('div', {
        class: 'w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce',
        style: 'animation-delay: 0.2s'
    }),
    h('div', {
        class: 'w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce',
        style: 'animation-delay: 0.4s'
    })
]);

// 全屏指示符
const fullscreenIndicator = h('div', {
    class: 'flex items-center justify-center'
}, [
    h('div', {
        class: 'w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin'
    })
]);

// 暗色主题特定指示符
const darkThemeIndicator = h('div', {
    class: 'flex space-x-1'
}, [
    h('div', {
        class: 'w-2 h-8 bg-indigo-400 rounded-full animate-pulse'
    }),
    h('div', {
        class: 'w-2 h-8 bg-indigo-400 rounded-full animate-pulse',
        style: 'animation-delay: 0.2s'
    }),
    h('div', {
        class: 'w-2 h-8 bg-indigo-400 rounded-full animate-pulse',
        style: 'animation-delay: 0.4s'
    })
]);

// 全局自定义指示符
const globalIndicator = h('div', {
    class: 'flex items-center justify-center'
}, [
    h('div', {
        class: 'inline-flex rounded-md shadow-sm divide-x divide-indigo-200 dark:divide-indigo-700'
    }, [
        h('div', {
            class: 'animate-pulse px-2 py-1 text-indigo-500 dark:text-indigo-400'
        }, 'Loading'),
        h('div', {
            class: 'animate-pulse px-2 py-1 text-indigo-500 dark:text-indigo-400',
            style: 'animation-delay: 0.3s'
        }, '...'),
    ])
]);

// 状态控制
const delayedSpinning = ref(false);
const controlledSpinning = ref(false);
const cardLoading = ref(false);
const tableLoading = ref(false);
const fullscreenLoading = ref(false);
const useGlobalIndicator = ref(false);

// 延迟加载控制
const toggleDelayedSpinning = () => {
    delayedSpinning.value = !delayedSpinning.value;
};

// 手动控制显示状态
const startSpinning = () => {
    controlledSpinning.value = true;
};

const stopSpinning = () => {
    controlledSpinning.value = false;
};

// 卡片加载控制
const toggleCardLoading = () => {
    cardLoading.value = !cardLoading.value;
};

// 表格加载控制
const toggleTableLoading = () => {
    tableLoading.value = !tableLoading.value;
};

// 全屏加载控制
const toggleFullscreenLoading = () => {
    fullscreenLoading.value = !fullscreenLoading.value;
};
// 定义一个空的默认指示符 VNode
const defaultIndicator = h('div', { class: 'flex items-center justify-center' }, [
    h('span', { class: 'text-gray-500 dark:text-gray-400' }, 'Loading...')
]);


// 全局指示符控制逻辑中也使用此 VNode
const toggleGlobalIndicator = () => {
    if (useGlobalIndicator.value) {
        // 恢复默认指示符
        setDefaultIndicator({ indicator: defaultIndicator });
        useGlobalIndicator.value = false;
    } else {
        // 设置全局指示符
        setDefaultIndicator({ indicator: globalIndicator });
        useGlobalIndicator.value = true;
    }
};
// 在组件卸载或恢复默认指示符时使用此 VNode
onUnmounted(() => {
    if (useGlobalIndicator.value) {
        setDefaultIndicator({ indicator: defaultIndicator });
    }
});

// 按钮指示符
const buttonIndicator = h('div', {
    class: 'animate-spin h-4 w-4 text-white'
}, [
    h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24'
    }, [
        h('circle', {
            class: 'opacity-25',
            cx: '12',
            cy: '12',
            r: '10',
            stroke: 'currentColor',
            'stroke-width': '4'
        }),
        h('path', {
            class: 'opacity-75',
            fill: 'currentColor',
            d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        })
    ])
]);

// 搜索指示符
const searchIndicator = h('div', {
    class: 'animate-spin h-4 w-4 text-gray-500 dark:text-gray-400'
}, [
    h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24'
    }, [
        h('circle', {
            class: 'opacity-25',
            cx: '12',
            cy: '12',
            r: '10',
            stroke: 'currentColor',
            'stroke-width': '4'
        }),
        h('path', {
            class: 'opacity-75',
            fill: 'currentColor',
            d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        })
    ])
]);

// 进度指示符相关
const progress = ref(20);
const circleProgressIndicator = computed(() => {
    const normalizedProgress = Math.min(100, Math.max(0, progress.value));
    const strokeDasharray = 2 * Math.PI * 12;
    const strokeDashoffset = strokeDasharray * (1 - normalizedProgress / 100);

    return h('div', {
        class: 'relative flex items-center justify-center'
    }, [
        // 背景圆环
        h('svg', {
            class: 'w-16 h-16',
            viewBox: '0 0 36 36'
        }, [
            // 背景圆
            h('circle', {
                class: 'text-gray-200 dark:text-gray-700 stroke-current',
                cx: '18',
                cy: '18',
                r: '12',
                'stroke-width': '3',
                fill: 'none'
            }),
            // 进度圆
            h('circle', {
                class: 'text-teal-500 dark:text-teal-400 stroke-current',
                cx: '18',
                cy: '18',
                r: '12',
                'stroke-width': '3',
                fill: 'none',
                transform: 'rotate(-90 18 18)',
                'stroke-dasharray': strokeDasharray,
                'stroke-dashoffset': strokeDashoffset,
                'stroke-linecap': 'round'
            }),
        ]),
        // 中间文字
        h('div', {
            class: 'absolute inset-0 flex items-center justify-center text-sm font-medium text-teal-500 dark:text-teal-400'
        }, `${normalizedProgress}%`)
    ]);
});

// 进度条指示符
const loadingProgress = ref(0);
const progressBarSpinning = ref(false);
const progressBarIndicator = h('div', {
    class: 'w-full'
}, [
    h('div', {
        class: 'h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden'
    }, [
        h('div', {
            class: 'h-full bg-teal-500 dark:bg-teal-400 rounded-full transition-all duration-300',
            style: {
                width: `${loadingProgress.value}%`
            }
        })
    ])
]);

// 增减进度控制
const increaseProgress = () => {
    if (progress.value < 100) {
        progress.value += 20;
    }
};

const decreaseProgress = () => {
    if (progress.value > 0) {
        progress.value -= 20;
    }
};

// 模拟进度加载
const simulateProgressLoading = () => {
    if (progressBarSpinning.value) return;

    loadingProgress.value = 0;
    progressBarSpinning.value = true;

    const interval = setInterval(() => {
        if (loadingProgress.value >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                progressBarSpinning.value = false;
            }, 500);
            return;
        }

        const increment = Math.floor(Math.random() * 10) + 1;
        loadingProgress.value = Math.min(100, loadingProgress.value + increment);
    }, 300);
};

// 图片卡片
const imageCards = ref([
    { loading: false, loaded: true, color: 'blue' },
    { loading: false, loaded: true, color: 'green' },
    { loading: false, loaded: true, color: 'purple' },
    { loading: false, loaded: true, color: 'orange' }
]);

// 重新加载图片
const reloadImages = () => {
    imageCards.value.forEach(img => {
        img.loading = true;
        img.loaded = false;
    });

    setTimeout(() => {
        imageCards.value.forEach((img, index) => {
            setTimeout(() => {
                img.loading = false;
                img.loaded = true;
            }, index * 600 + 400);
        });
    }, 500);
};

// 标签页相关
const tabs = ref([
    {
        label: '首页',
        title: '欢迎内容',
        content: '这是首页内容，包含了网站的基本介绍和最新信息。',
        loading: false
    },
    {
        label: '用户数据',
        title: '用户统计分析',
        content: '展示用户相关的统计数据，包括活跃度、增长率等信息。',
        loading: false
    },
    {
        label: '设置',
        title: '系统设置',
        content: '在这里可以修改系统配置、个人偏好和其他高级设置选项。',
        loading: false
    }
]);

const activeTabIndex = ref(0);

// 切换标签页
const switchTab = (index: number) => {
    if (activeTabIndex.value === index) return;

    activeTabIndex.value = index;
    tabs.value[index].loading = true;

    setTimeout(() => {
        tabs.value[index].loading = false;
    }, 1200);
};

// 按钮加载状态
const buttonLoading = ref([false, false, false, false]);

// 切换按钮加载状态
const toggleButtonLoading = (index: number) => {
    buttonLoading.value[index] = !buttonLoading.value[index];

    if (buttonLoading.value[index]) {
        setTimeout(() => {
            buttonLoading.value[index] = false;
        }, 2000);
    }
};

// 数据卡片
const dataCards = ref([
    {
        title: '总访问量',
        value: '254,321',
        trend: 'up',
        change: '12.5',
        progress: 75,
        color: 'blue',
        icon: 'chart',
        date: '今日',
        loading: false
    },
    {
        title: '活跃用户',
        value: '12,543',
        trend: 'up',
        change: '8.2',
        progress: 60,
        color: 'green',
        icon: 'users',
        date: '本周',
        loading: false
    },
    {
        title: '总收入',
        value: '¥83,214',
        trend: 'down',
        change: '3.1',
        progress: 45,
        color: 'purple',
        icon: 'dollar',
        date: '本月',
        loading: false
    }
]);

// 刷新数据卡片
const refreshDataCards = () => {
    dataCards.value.forEach(card => {
        card.loading = true;
    });

    setTimeout(() => {
        dataCards.value.forEach((card, index) => {
            setTimeout(() => {
                card.loading = false;
                // 随机更新数据
                const isUp = Math.random() > 0.3;
                card.trend = isUp ? 'up' : 'down';
                card.change = (Math.random() * 15 + 1).toFixed(1);
                card.progress = Math.floor(Math.random() * 80) + 20;
            }, index * 500 + 600);
        });
    }, 800);
}

// 页面加载时初始化一些数据
onMounted(() => {
    // 确保首次加载标签页内容加载效果
    tabs.value[0].loading = true;
    setTimeout(() => {
        tabs.value[0].loading = false;
    }, 1000);
});
</script>

<style scoped>
/* 添加一些淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
