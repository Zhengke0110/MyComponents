<template>
    <div class="p-6 dark:bg-gray-900 transition-all duration-300 min-h-screen">
        <h1 class="text-2xl font-bold mb-8 text-center dark:text-white">Result 结果组件展示</h1>

        <!-- 基础用法展示区 -->
        <section class="mb-12 opacity-0 transform translate-y-5 animate-fade-in">
            <h2 class="text-xl font-semibold mb-4 dark:text-gray-200">基础用法</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Success 状态 -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                    <Result status="success" title="操作成功" subTitle="请等待系统跳转">
                        <template #extra>
                            <div class="flex space-x-2">
                                <button
                                    class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300">返回首页</button>
                                <button
                                    class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">查看详情</button>
                            </div>
                        </template>
                    </Result>
                </div>

                <!-- Error 状态 -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                    <Result status="error" title="提交失败" subTitle="请检查网络连接后重试">
                        <template #extra>
                            <button
                                class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 transition-colors duration-300">重新提交</button>
                        </template>
                    </Result>
                </div>
            </div>
        </section>

        <!-- 信息与警告状态 -->
        <section class="mb-12 opacity-0 transform translate-y-5 animate-fade-in" style="animation-delay: 0.2s;">
            <h2 class="text-xl font-semibold mb-4 dark:text-gray-200">信息与警告状态</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Info 状态 -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                    <Result status="info" title="提示信息" subTitle="这是一条重要的提示信息">
                        <template #extra>
                            <button
                                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">了解详情</button>
                        </template>
                    </Result>
                </div>

                <!-- Warning 状态 -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                    <Result status="warning" title="警告" subTitle="您的操作可能导致数据丢失">
                        <template #extra>
                            <div class="flex space-x-2">
                                <button
                                    class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 transition-colors duration-300">继续操作</button>
                                <button
                                    class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">取消</button>
                            </div>
                        </template>
                    </Result>
                </div>
            </div>
        </section>

        <!-- 错误页面状态 -->
        <section class="mb-12 opacity-0 transform translate-y-5 animate-fade-in" style="animation-delay: 0.4s;">
            <h2 class="text-xl font-semibold mb-4 dark:text-gray-200">错误页面状态</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- 404 状态 -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                    <Result status="404" title="页面不存在" subTitle="您访问的页面不存在">
                        <template #extra>
                            <button
                                class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-300">返回首页</button>
                        </template>
                    </Result>
                </div>

                <!-- 403 状态 -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                    <Result status="403" title="无权限" subTitle="您没有权限访问此页面">
                        <template #extra>
                            <button
                                class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-300">申请权限</button>
                        </template>
                    </Result>
                </div>

                <!-- 500 状态 -->
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                    <Result status="500" title="服务器错误" subTitle="抱歉，服务器出现了问题">
                        <template #extra>
                            <button
                                class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-300">刷新页面</button>
                        </template>
                    </Result>
                </div>
            </div>
        </section>

        <!-- 自定义内容 -->
        <section class="mb-12 opacity-0 transform translate-y-5 animate-fade-in" style="animation-delay: 0.6s;">
            <h2 class="text-xl font-semibold mb-4 dark:text-gray-200">自定义内容</h2>
            <div class="grid grid-cols-1 gap-6">
                <div
                    class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                    <Result status="success" title="任务完成">
                        <template #subTitle>
                            <div class="flex flex-col items-center">
                                <p class="text-gray-600 dark:text-gray-300">数据处理已完成，共处理了 <span
                                        class="text-green-500 font-bold animate-pulse">2,584</span> 条记录</p>
                                <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2 dark:bg-gray-700">
                                    <div class="bg-green-500 h-2.5 rounded-full animate-grow-width" style="width: 100%">
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template #extra>
                            <div class="flex flex-col space-y-2">
                                <button
                                    class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300">下载报告</button>
                                <button
                                    class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">查看详细日志</button>
                            </div>
                        </template>
                        <template #icon>
                            <div class="text-green-500 dark:text-green-400 animate-bounce-subtle">
                                <svg class="w-20 h-20" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </template>
                    </Result>
                </div>
            </div>
        </section>

        <!-- 复杂交互示例 -->
        <section class="mb-12 opacity-0 transform translate-y-5 animate-fade-in" style="animation-delay: 0.8s;">
            <h2 class="text-xl font-semibold mb-4 dark:text-gray-200">复杂交互示例</h2>
            <div
                class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                <Result status="info" title="订单提交成功">
                    <template #subTitle>
                        <div class="flex flex-col items-center w-full max-w-md">
                            <div class="w-full flex justify-between items-center mb-2">
                                <span class="text-gray-600 dark:text-gray-300">订单号:</span>
                                <span class="font-mono font-medium dark:text-white">ORD20230512-8956</span>
                            </div>
                            <div class="w-full flex justify-between items-center mb-2">
                                <span class="text-gray-600 dark:text-gray-300">支付金额:</span>
                                <span class="font-medium text-blue-600 dark:text-blue-400">¥ 2,598.00</span>
                            </div>
                            <div class="w-full bg-gray-200 h-1 my-4 relative dark:bg-gray-700">
                                <div class="absolute inset-0 flex items-center justify-around">
                                    <div class="w-4 h-4 bg-blue-500 rounded-full z-10 animate-pulse"></div>
                                    <div class="w-4 h-4 bg-blue-500 rounded-full z-10 animate-pulse"
                                        style="animation-delay: 0.5s"></div>
                                    <div class="w-4 h-4 bg-blue-500 rounded-full z-10 animate-pulse"
                                        style="animation-delay: 1s"></div>
                                    <div class="w-4 h-4 bg-blue-500 rounded-full z-10 animate-pulse"
                                        style="animation-delay: 1.5s"></div>
                                </div>
                            </div>
                            <div class="w-full flex justify-between text-sm text-gray-500 dark:text-gray-400">
                                <span>提交订单</span>
                                <span>确认支付</span>
                                <span>备货中</span>
                                <span>已发货</span>
                            </div>
                        </div>
                    </template>
                    <template #extra>
                        <div class="flex flex-wrap justify-center gap-2">
                            <button
                                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">查看订单</button>
                            <button
                                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">查看物流</button>
                            <button
                                class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">返回首页</button>
                        </div>
                    </template>
                </Result>
            </div>
        </section>

        <!-- 小结与最佳实践 -->
        <section class="mb-12 opacity-0 transform translate-y-5 animate-fade-in" style="animation-delay: 1s;">
            <h2 class="text-xl font-semibold mb-4 dark:text-gray-200">小结与最佳实践</h2>
            <div
                class="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div class="flex flex-col md:flex-row">
                    <!-- 左侧装饰条 -->
                    <div class="w-full md:w-1 bg-gradient-to-b from-blue-500 to-indigo-600 py-2"></div>

                    <!-- 内容区域 -->
                    <div class="p-6 md:p-8 w-full">
                        <div class="text-current max-w-none">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <!-- 使用场景 -->
                                <div class="md:col-span-1">
                                    <div class="flex items-center mb-3 text-blue-600 dark:text-blue-400">
                                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z">
                                            </path>
                                        </svg>
                                        <h3 class="text-lg font-medium my-0">使用场景</h3>
                                    </div>
                                    <ul class="space-y-2 list-none pl-0 my-2">
                                        <li class="flex items-start">
                                            <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                                            <span>当需要向用户反馈一系列操作的处理结果时</span>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                                            <span>当操作流程结束后需要展示结果和建议操作时</span>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                                            <span>当需要展示系统异常或提示信息时</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- 设计原则 -->
                                <div class="md:col-span-1">
                                    <div class="flex items-center mb-3 text-green-600 dark:text-green-400">
                                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <h3 class="text-lg font-medium my-0">设计原则</h3>
                                    </div>
                                    <ul class="space-y-2 list-none pl-0 my-2">
                                        <li class="flex items-start">
                                            <span class="text-green-500 dark:text-green-400 mr-2">•</span>
                                            <span><strong>明确性</strong>：结果状态应当明确、直观，用户能够一目了然</span>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-green-500 dark:text-green-400 mr-2">•</span>
                                            <span><strong>引导性</strong>：提供清晰的后续操作指引，减少用户犹豫</span>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-green-500 dark:text-green-400 mr-2">•</span>
                                            <span><strong>简洁性</strong>：信息展示应当简洁有效，避免冗余</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- 最佳实践 -->
                                <div class="md:col-span-1">
                                    <div class="flex items-center mb-3 text-purple-600 dark:text-purple-400">
                                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                            <path fill-rule="evenodd"
                                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <h3 class="text-lg font-medium my-0">最佳实践</h3>
                                    </div>
                                    <ul class="space-y-2 list-none pl-0 my-2">
                                        <li class="flex items-start">
                                            <span class="text-purple-500 dark:text-purple-400 mr-2">•</span>
                                            <span>根据不同场景选择合适的状态类型</span>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-purple-500 dark:text-purple-400 mr-2">•</span>
                                            <span>提供有意义的标题和副标题，简明描述结果</span>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-purple-500 dark:text-purple-400 mr-2">•</span>
                                            <span>在 <code
                                                    class="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-xs">extra</code>
                                                插槽中提供明确的后续操作按钮</span>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-purple-500 dark:text-purple-400 mr-2">•</span>
                                            <span>对于错误状态，提供错误原因和解决方案</span>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-purple-500 dark:text-purple-400 mr-2">•</span>
                                            <span>对于状态码页面，提供返回首页等导航选项</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- API 文档 -->
        <section class="opacity-0 transform translate-y-5 animate-fade-in" style="animation-delay: 1.2s;">
            <h2 class="text-xl font-semibold mb-4 dark:text-gray-200">API 文档</h2>
            <div
                class="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div class="flex flex-col md:flex-row">
                    <!-- 左侧装饰条 -->
                    <div class="w-full md:w-1 bg-gradient-to-b from-indigo-500 to-purple-600 py-2"></div>

                    <!-- 内容区域 -->
                    <div class="p-6 md:p-8 w-full">
                        <div class="text-current max-w-none">
                            <!-- Props 属性 -->
                            <div class="mb-8">
                                <div class="flex items-center mb-4 text-indigo-600 dark:text-indigo-400">
                                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <h3 class="text-lg font-medium my-0">Props 属性</h3>
                                </div>
                                <div
                                    class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                                    <div class="overflow-x-auto">
                                        <table
                                            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border-separate border-spacing-0">
                                            <thead class="bg-gray-50 dark:bg-gray-800">
                                                <tr>
                                                    <th
                                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                        参数
                                                    </th>
                                                    <th
                                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                        说明
                                                    </th>
                                                    <th
                                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                        类型
                                                    </th>
                                                    <th
                                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                        默认值
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in"
                                                    style="animation-delay: 0.1s;">
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                                        status
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                                        结果的状态，决定图标和颜色
                                                    </td>
                                                    <td
                                                        class="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400">
                                                        <span
                                                            class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                                                            'success' | 'error' | 'info' | 'warning' | '404' | '403' |
                                                            '500'
                                                        </span>
                                                    </td>
                                                    <td
                                                        class="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400">
                                                        <span
                                                            class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">'info'</span>
                                                    </td>
                                                </tr>
                                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in"
                                                    style="animation-delay: 0.2s;">
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                                        title
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                                        标题文本
                                                    </td>
                                                    <td
                                                        class="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400">
                                                        <span
                                                            class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">string</span>
                                                    </td>
                                                    <td
                                                        class="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400">
                                                        <span
                                                            class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">''</span>
                                                    </td>
                                                </tr>
                                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in"
                                                    style="animation-delay: 0.3s;">
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                                        subTitle
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                                        副标题文本
                                                    </td>
                                                    <td
                                                        class="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400">
                                                        <span
                                                            class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">string</span>
                                                    </td>
                                                    <td
                                                        class="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400">
                                                        <span
                                                            class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">''</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <!-- Slots 插槽 -->
                            <div class="mb-8">
                                <div class="flex items-center mb-4 text-green-600 dark:text-green-400">
                                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <h3 class="text-lg font-medium my-0">Slots 插槽</h3>
                                </div>
                                <div
                                    class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                                    <div class="overflow-x-auto">
                                        <table
                                            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border-separate border-spacing-0">
                                            <thead class="bg-gray-50 dark:bg-gray-800">
                                                <tr>
                                                    <th
                                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                        名称
                                                    </th>
                                                    <th
                                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                        说明
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in"
                                                    style="animation-delay: 0.1s;">
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
                                                        default
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                                        默认内容，一般不使用
                                                    </td>
                                                </tr>
                                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in"
                                                    style="animation-delay: 0.2s;">
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
                                                        icon
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                                        自定义图标
                                                    </td>
                                                </tr>
                                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in"
                                                    style="animation-delay: 0.3s;">
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
                                                        title
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                                        自定义标题内容
                                                    </td>
                                                </tr>
                                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in"
                                                    style="animation-delay: 0.4s;">
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
                                                        subTitle
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                                        自定义副标题内容
                                                    </td>
                                                </tr>
                                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 animate-fade-in"
                                                    style="animation-delay: 0.5s;">
                                                    <td
                                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
                                                        extra
                                                    </td>
                                                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                                                        操作区域
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <!-- 样式定制与无障碍性 -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <div class="flex items-center mb-3 text-blue-600 dark:text-blue-400">
                                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <h3 class="text-lg font-medium m-0">样式定制</h3>
                                    </div>
                                    <div
                                        class="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                                        <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">Result 组件支持通过 Tailwind
                                            CSS
                                            类进行样式定制，并内置深色模式支持：</p>
                                        <ul class="space-y-2 list-none pl-0">
                                            <li class="flex items-start">
                                                <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                                                <span>使用 <code
                                                        class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs">dark:</code>
                                                    前缀的类名适配深色模式</span>
                                            </li>
                                            <li class="flex items-start">
                                                <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                                                <span>每种状态都有对应的颜色主题（如成功为绿色、错误为红色等）</span>
                                            </li>
                                            <li class="flex items-start">
                                                <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                                                <span>组件内置过渡动画，包括淡入、缩放等效果</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- 无障碍性 -->
                                <div>
                                    <div class="flex items-center mb-3 text-purple-600 dark:text-purple-400">
                                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                            <path fill-rule="evenodd"
                                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <h3 class="text-lg font-medium m-0">无障碍性</h3>
                                    </div>
                                    <div
                                        class="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                                        <p class="text-sm text-gray-700 dark:text-gray-300 mb-3">Result 组件遵循以下无障碍性原则：
                                        </p>
                                        <ul class="space-y-2 list-none pl-0">
                                            <li class="flex items-start">
                                                <span class="text-purple-500 dark:text-purple-400 mr-2">•</span>
                                                <span>使用语义化的色彩来表示不同状态，增强可识别性</span>
                                            </li>
                                            <li class="flex items-start">
                                                <span class="text-purple-500 dark:text-purple-400 mr-2">•</span>
                                                <span>提供清晰的文本说明，确保屏幕阅读器可以正确解读</span>
                                            </li>
                                            <li class="flex items-start">
                                                <span class="text-purple-500 dark:text-purple-400 mr-2">•</span>
                                                <span>确保操作区域的按钮有足够大的点击区域</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Result from './Result';
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes growWidth {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes bounceSlight {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
}

.animate-grow-width {
    animation: growWidth 2s ease-out forwards;
}

.animate-bounce-subtle {
    animation: bounceSlight 2s infinite;
}

/* 添加渐变过渡效果 - Tailwind 目前不支持动态背景位置 */
.bg-gradient-to-r {
    background-size: 200% 200%;
    animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>
