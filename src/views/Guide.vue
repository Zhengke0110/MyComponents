<template>
    <div
        class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">

        <!-- Hero Section -->
        <div class="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div class="text-center">
                    <h1 class="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                        优雅的设计，现代的组件
                    </h1>
                    <p class="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
                        一个基于 Vue 3 和 Tailwind CSS 构建的先进组件库，为开发者提供美观且功能强大的 UI 解决方案
                    </p>
                    <div class="mt-10 flex justify-center space-x-4">
                        <Button size="lg" variant="solid"
                            class="bg-white text-indigo-700 hover:bg-indigo-50 border-0 shadow-lg">开始使用</Button>
                        <Button size="lg" variant="outline"
                            class="text-white border-white hover:bg-white/10">查看文档</Button>
                    </div>
                </div>
            </div>

            <!-- Wave Decoration -->
            <div
                class="h-16 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-900 relative">
                <svg class="absolute bottom-0 w-full h-16 text-gray-50 dark:text-gray-900" preserveAspectRatio="none"
                    viewBox="0 0 1440 48">
                    <path fill="currentColor" d="M0 48h1440V0c-283.14 36-675.9 48-1440 48z"></path>
                </svg>
            </div>
        </div>

        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 -mt-6">
            <!-- Introduction Cards -->
            <section class="mb-24">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        class="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
                        <div class="p-1 bg-gradient-to-r from-pink-500 to-rose-500"></div>
                        <div class="p-6 sm:p-8">
                            <div
                                class="w-12 h-12 rounded-lg bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mb-5">
                                <span class="icon-[solar--pen-2-bold] text-rose-500 dark:text-rose-400 h-6 w-6"></span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">一致性设计</h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                视觉风格和交互行为保持一致，为用户提供可预期的使用体验，降低学习成本
                            </p>
                        </div>
                    </div>

                    <div
                        class="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
                        <div class="p-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                        <div class="p-6 sm:p-8">
                            <div
                                class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-5">
                                <span
                                    class="icon-[solar--widget-2-bold] text-blue-500 dark:text-blue-400 h-6 w-6"></span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">灵活定制</h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                组件支持丰富的配置选项与主题定制，轻松实现品牌风格统一，满足多样化需求
                            </p>
                        </div>
                    </div>

                    <div
                        class="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
                        <div class="p-1 bg-gradient-to-r from-violet-500 to-purple-500"></div>
                        <div class="p-6 sm:p-8">
                            <div
                                class="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-5">
                                <span
                                    class="icon-[solar--accessibility-bold] text-purple-500 dark:text-purple-400 h-6 w-6"></span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">可访问性优先</h3>
                            <p class="text-gray-600 dark:text-gray-300">
                                符合 WAI-ARIA 规范，支持键盘导航和屏幕阅读器，确保良好的可访问性体验
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Core Features -->
            <section class="mb-24">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">核心特性</h2>
                    <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                        精心打造的组件库，助您快速构建现代化的用户界面
                    </p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
                        <div class="p-8 sm:p-10">
                            <ul class="space-y-5">
                                <li class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-8 h-8 rounded-md bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                            <span
                                                class="icon-[solar--check-circle-bold] text-indigo-600 dark:text-indigo-400 h-5 w-5"></span>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium text-gray-900 dark:text-white">现代技术栈</h4>
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">基于 Vue 3 和 TypeScript
                                            开发，提供完整的类型支持</p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-8 h-8 rounded-md bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                            <span
                                                class="icon-[solar--check-circle-bold] text-indigo-600 dark:text-indigo-400 h-5 w-5"></span>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium text-gray-900 dark:text-white">响应式设计</h4>
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">使用 Tailwind CSS 实现响应式设计和自定义样式
                                        </p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-8 h-8 rounded-md bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                            <span
                                                class="icon-[solar--check-circle-bold] text-indigo-600 dark:text-indigo-400 h-5 w-5"></span>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium text-gray-900 dark:text-white">开箱即用</h4>
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">预设美观样式，即插即用，快速构建应用界面</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="p-8 sm:p-10">
                            <ul class="space-y-5">
                                <li class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-8 h-8 rounded-md bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                            <span
                                                class="icon-[solar--check-circle-bold] text-indigo-600 dark:text-indigo-400 h-5 w-5"></span>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium text-gray-900 dark:text-white">暗色模式支持</h4>
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">原生支持暗色模式，自动适应系统主题偏好</p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-8 h-8 rounded-md bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                            <span
                                                class="icon-[solar--check-circle-bold] text-indigo-600 dark:text-indigo-400 h-5 w-5"></span>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium text-gray-900 dark:text-white">主题配置</h4>
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">丰富的主题配置，支持多种色彩方案和自定义样式</p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-8 h-8 rounded-md bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                            <span
                                                class="icon-[solar--check-circle-bold] text-indigo-600 dark:text-indigo-400 h-5 w-5"></span>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium text-gray-900 dark:text-white">精致动效</h4>
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">精心设计的动画和过渡效果，提升用户体验</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Component Showcase -->
            <section class="mb-24">
                <div class="text-center mb-12">
                    <span
                        class="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full mb-3">组件库</span>
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">精心打造的组件</h2>
                    <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                        丰富的组件库，满足各种界面设计需求
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Button -->
                    <div
                        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div class="p-6 sm:p-8">
                            <div class="flex items-center justify-between mb-5">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Button 按钮</h3>
                                <span
                                    class="icon-[solar--keyboard-bold] text-gray-400 dark:text-gray-500 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </div>
                            <div class="space-y-4">
                                <div class="flex flex-wrap gap-2">
                                    <Button>默认按钮</Button>
                                    <Button type="primary">主要按钮</Button>
                                    <Button type="success">成功按钮</Button>
                                    <Button type="danger">危险按钮</Button>
                                </div>
                                <div class="flex flex-wrap gap-2">
                                    <Button variant="outline" type="primary">描边按钮</Button>
                                    <Button variant="soft" type="primary">柔和按钮</Button>
                                    <Button variant="ghost" type="primary">幽灵按钮</Button>
                                    <Button type="primary" icon="icon-[solar--add-circle-bold]"></Button>
                                </div>
                            </div>
                        </div>
                        <div
                            class="group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 bg-gray-50 dark:bg-gray-700/50 px-6 sm:px-8 py-4 flex items-center justify-between transition-colors">
                            <a href="#"
                                class="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">查看文档</a>
                            <span
                                class="icon-[solar--arrow-right-bold] text-indigo-600 dark:text-indigo-400 h-4 w-4 transition-transform group-hover:translate-x-1"></span>
                        </div>
                    </div>

                    <!-- Alert -->
                    <div
                        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div class="p-6 sm:p-8">
                            <div class="flex items-center justify-between mb-5">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Alert 提示</h3>
                                <span
                                    class="icon-[solar--keyboard-bold] text-gray-400 dark:text-gray-500 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </div>
                            <div class="space-y-3">
                                <Alert type="info" message="这是一个信息提示" class="text-sm" />
                                <Alert type="success" title="成功" message="操作已成功完成" class="text-sm" />
                                <Alert type="warning" title="警告" message="此操作需要谨慎处理" :showIcon="false"
                                    class="text-sm" />
                            </div>
                        </div>
                        <div
                            class="group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 bg-gray-50 dark:bg-gray-700/50 px-6 sm:px-8 py-4 flex items-center justify-between transition-colors">
                            <a href="#"
                                class="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">查看文档</a>
                            <span
                                class="icon-[solar--arrow-right-bold] text-indigo-600 dark:text-indigo-400 h-4 w-4 transition-transform group-hover:translate-x-1"></span>
                        </div>
                    </div>

                    <!-- Badge -->
                    <div
                        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div class="p-6 sm:p-8">
                            <div class="flex items-center justify-between mb-5">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Badge 徽章</h3>
                                <span
                                    class="icon-[solar--keyboard-bold] text-gray-400 dark:text-gray-500 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </div>
                            <div class="space-y-4">
                                <div class="flex flex-wrap gap-2">
                                    <Badge text="默认" />
                                    <Badge text="成功" theme="success" />
                                    <Badge text="警告" theme="warning" />
                                    <Badge text="危险" theme="danger" />
                                </div>
                                <div class="flex flex-wrap gap-2">
                                    <Badge text="实心" variant="solid" theme="primary" />
                                    <Badge text="柔和" variant="soft" theme="primary" />
                                    <Badge text="描边" variant="outline" theme="primary" />
                                </div>
                            </div>
                        </div>
                        <div
                            class="group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 bg-gray-50 dark:bg-gray-700/50 px-6 sm:px-8 py-4 flex items-center justify-between transition-colors">
                            <a href="#"
                                class="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">查看文档</a>
                            <span
                                class="icon-[solar--arrow-right-bold] text-indigo-600 dark:text-indigo-400 h-4 w-4 transition-transform group-hover:translate-x-1"></span>
                        </div>
                    </div>

                    <!-- Avatar -->
                    <div
                        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div class="p-6 sm:p-8">
                            <div class="flex items-center justify-between mb-5">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Avatar 头像</h3>
                                <span
                                    class="icon-[solar--keyboard-bold] text-gray-400 dark:text-gray-500 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </div>
                            <div class="flex items-center gap-4">
                                <Avatar
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    size="md" />
                                <Avatar src="" initials="ZK" size="md" />
                                <Avatar size="md" />
                                <Avatar
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    size="md" status="online" />
                            </div>
                            <div class="mt-4 flex flex-wrap gap-2">
                                <Avatar size="xs" initials="XS" />
                                <Avatar size="sm" initials="SM" />
                                <Avatar size="md" initials="MD" />
                                <Avatar size="lg" initials="LG" />
                                <Avatar size="xl" initials="XL" />
                            </div>
                        </div>
                        <div
                            class="group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 bg-gray-50 dark:bg-gray-700/50 px-6 sm:px-8 py-4 flex items-center justify-between transition-colors">
                            <a href="#"
                                class="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">查看文档</a>
                            <span
                                class="icon-[solar--arrow-right-bold] text-indigo-600 dark:text-indigo-400 h-4 w-4 transition-transform group-hover:translate-x-1"></span>
                        </div>
                    </div>

                    <!-- Segment -->
                    <div
                        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div class="p-6 sm:p-8">
                            <div class="flex items-center justify-between mb-5">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Segment 分段控制</h3>
                                <span
                                    class="icon-[solar--keyboard-bold] text-gray-400 dark:text-gray-500 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </div>
                            <div class="space-y-4">
                                <Segment v-model="segmentValue" :options="segmentOptions" />
                                <Segment v-model="segmentValue2" :options="segmentOptionsIcon" />
                            </div>
                        </div>
                        <div
                            class="group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 bg-gray-50 dark:bg-gray-700/50 px-6 sm:px-8 py-4 flex items-center justify-between transition-colors">
                            <a href="#"
                                class="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">查看文档</a>
                            <span
                                class="icon-[solar--arrow-right-bold] text-indigo-600 dark:text-indigo-400 h-4 w-4 transition-transform group-hover:translate-x-1"></span>
                        </div>
                    </div>

                    <!-- Progress -->
                    <div
                        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div class="p-6 sm:p-8">
                            <div class="flex items-center justify-between mb-5">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Progress 进度条</h3>
                                <span
                                    class="icon-[solar--keyboard-bold] text-gray-400 dark:text-gray-500 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </div>
                            <div class="space-y-6">
                                <div>
                                    <div class="flex justify-between items-center mb-2">
                                        <div class="text-sm font-medium text-gray-700 dark:text-gray-300">基础进度条</div>
                                        <div class="text-sm font-medium text-gray-700 dark:text-gray-300">30%</div>
                                    </div>
                                    <Progress :percent="30" />
                                </div>
                                <div>
                                    <div class="flex justify-between items-center mb-2">
                                        <div class="text-sm font-medium text-gray-700 dark:text-gray-300">成功状态</div>
                                        <div class="text-sm font-medium text-green-600 dark:text-green-400">70%</div>
                                    </div>
                                    <Progress :percent="70" status="success" />
                                </div>
                                <div>
                                    <div class="flex justify-between items-center mb-2">
                                        <div class="text-sm font-medium text-gray-700 dark:text-gray-300">异常状态</div>
                                        <div class="text-sm font-medium text-red-600 dark:text-red-400">50%</div>
                                    </div>
                                    <Progress :percent="50" status="exception" />
                                </div>
                            </div>
                        </div>
                        <div
                            class="group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 bg-gray-50 dark:bg-gray-700/50 px-6 sm:px-8 py-4 flex items-center justify-between transition-colors">
                            <a href="#"
                                class="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">查看文档</a>
                            <span
                                class="icon-[solar--arrow-right-bold] text-indigo-600 dark:text-indigo-400 h-4 w-4 transition-transform group-hover:translate-x-1"></span>
                        </div>
                    </div>
                </div>

                <div class="mt-10 text-center">
                    <Button size="lg" type="primary" variant="solid" class="px-8">查看所有组件</Button>
                </div>
            </section>

            <!-- Theming -->
            <section class="mb-24">
                <div class="text-center mb-12">
                    <span
                        class="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full mb-3">主题</span>
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">色彩与主题系统</h2>
                    <p class="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                        精心设计的色彩系统，为您的应用提供一致且美观的视觉体验
                    </p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div class="p-8 sm:p-10">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">色彩调色板</h3>

                                <div class="space-y-6">
                                    <div>
                                        <h4
                                            class="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">
                                            主要配色</h4>
                                        <div class="flex gap-3">
                                            <div class="flex-1">
                                                <div class="h-12 rounded-t-lg bg-indigo-500"></div>
                                                <div class="h-12 bg-indigo-600"></div>
                                                <div class="h-12 rounded-b-lg bg-indigo-700"></div>
                                                <div
                                                    class="mt-2 text-xs font-medium text-center text-gray-600 dark:text-gray-400">
                                                    Primary</div>
                                            </div>
                                            <div class="flex-1">
                                                <div class="h-12 rounded-t-lg bg-purple-500"></div>
                                                <div class="h-12 bg-purple-600"></div>
                                                <div class="h-12 rounded-b-lg bg-purple-700"></div>
                                                <div
                                                    class="mt-2 text-xs font-medium text-center text-gray-600 dark:text-gray-400">
                                                    Purple</div>
                                            </div>
                                            <div class="flex-1">
                                                <div class="h-12 rounded-t-lg bg-blue-500"></div>
                                                <div class="h-12 bg-blue-600"></div>
                                                <div class="h-12 rounded-b-lg bg-blue-700"></div>
                                                <div
                                                    class="mt-2 text-xs font-medium text-center text-gray-600 dark:text-gray-400">
                                                    Blue</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4
                                            class="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">
                                            语义色彩</h4>
                                        <div class="grid grid-cols-4 gap-3">
                                            <div>
                                                <div class="h-10 rounded-lg bg-green-500 flex items-end p-1">
                                                    <div class="text-xs font-medium text-white">Success</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="h-10 rounded-lg bg-yellow-500 flex items-end p-1">
                                                    <div class="text-xs font-medium text-white">Warning</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="h-10 rounded-lg bg-red-500 flex items-end p-1">
                                                    <div class="text-xs font-medium text-white">Danger</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="h-10 rounded-lg bg-blue-500 flex items-end p-1">
                                                    <div class="text-xs font-medium text-white">Info</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4
                                            class="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">
                                            中性色彩</h4>
                                        <div class="flex gap-1 h-8">
                                            <div class="flex-1 bg-gray-50 rounded-l-lg"></div>
                                            <div class="flex-1 bg-gray-100"></div>
                                            <div class="flex-1 bg-gray-200"></div>
                                            <div class="flex-1 bg-gray-300"></div>
                                            <div class="flex-1 bg-gray-400"></div>
                                            <div class="flex-1 bg-gray-500"></div>
                                            <div class="flex-1 bg-gray-600"></div>
                                            <div class="flex-1 bg-gray-700"></div>
                                            <div class="flex-1 bg-gray-800"></div>
                                            <div class="flex-1 bg-gray-900 rounded-r-lg"></div>
                                        </div>
                                        <div
                                            class="mt-2 text-xs font-medium text-center text-gray-600 dark:text-gray-400">
                                            Grayscale</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">自适应颜色模式</h3>

                                <div class="space-y-6">
                                    <p class="text-gray-600 dark:text-gray-300">
                                        组件库采用 Tailwind CSS
                                        的深色模式方案，所有组件都经过精心设计，确保在深色模式下有出色的视觉效果和可访问性。系统会自动根据用户偏好设置适配对应的颜色模式。
                                    </p>

                                    <div class="grid grid-cols-1 gap-4">
                                        <div
                                            class="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
                                            <div class="bg-white dark:bg-gray-900 p-4">
                                                <div class="flex items-center justify-between mb-3">
                                                    <div class="text-sm font-medium text-gray-900 dark:text-white">浅色模式
                                                    </div>
                                                </div>
                                                <div class="space-y-2">
                                                    <Button size="sm" variant="solid" type="primary">主要按钮</Button>
                                                    <Alert type="success" message="操作成功完成" class="text-xs" />
                                                    <Badge text="标签" theme="primary" variant="soft" />
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
                                            <div class="bg-gray-900 p-4">
                                                <div class="flex items-center justify-between mb-3">
                                                    <div class="text-sm font-medium text-white">深色模式</div>
                                                </div>
                                                <div class="dark space-y-2">
                                                    <Button size="sm" variant="solid" type="primary">主要按钮</Button>
                                                    <Alert type="success" message="操作成功完成" class="text-xs" />
                                                    <Badge text="标签" theme="primary" variant="soft" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-100 dark:border-indigo-800/50">
                                        <div class="flex">
                                            <span
                                                class="icon-[solar--lightbulb-bold] text-indigo-600 dark:text-indigo-400 h-5 w-5 mr-3 flex-shrink-0"></span>
                                            <div>
                                                <h4 class="text-sm font-medium text-indigo-900 dark:text-indigo-300">
                                                    自动适配系统偏好</h4>
                                                <p class="mt-1 text-xs text-indigo-700 dark:text-indigo-400">
                                                    组件库会自动检测用户系统偏好并应用相应主题。深色模式下所有组件都会自动调整颜色，确保在暗色背景下有良好的可读性和视觉舒适度。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Button from '../libs/Button/Button';
import Alert from '../libs/Alert/Alert';
import Badge from '../libs/Badge/Badge';
import Avatar from '../libs/Avatar/Avatar';
import Segment from '../libs/Segment/Segment';
import Progress from '../libs/Progress/Progress';

// Segment component data
const segmentValue = ref('option1');
const segmentOptions = [
    { label: '选项一', value: 'option1' },
    { label: '选项二', value: 'option2' },
    { label: '选项三', value: 'option3' },
];

// Segment with icon
const segmentValue2 = ref('daily');
const segmentOptionsIcon = [
    { label: '日', value: 'daily', icon: 'icon-[solar--calendar-mark-bold]' },
    { label: '周', value: 'weekly', icon: 'icon-[solar--calendar-week-bold]' },
    { label: '月', value: 'monthly', icon: 'icon-[solar--calendar-bold]' },
];


// Auto-detect system preference for dark mode on mount
onMounted(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    }

    // Optional: Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId && targetId !== '#') {
                document.querySelector(targetId)?.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
</script>

<style scoped>
/* Add any additional custom styling here */
</style>
