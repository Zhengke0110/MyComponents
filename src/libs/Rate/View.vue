<template>
    <div class="p-6 space-y-8">
        <div>
            <h2 class="text-xl font-medium mb-4 dark:text-white">基础评分</h2>
            <Rate v-model="basicValue" />
            <div class="mt-2 text-gray-600 dark:text-gray-400">当前评分: {{ basicValue }}</div>
        </div>

        <div>
            <h2 class="text-xl font-medium mb-4 dark:text-white">半星评分</h2>
            <Rate v-model="halfValue" :allow-half="true" />
            <div class="mt-2 text-gray-600 dark:text-gray-400">当前评分: {{ halfValue }}</div>
        </div>

        <div>
            <h2 class="text-xl font-medium mb-4 dark:text-white">自定义颜色</h2>
            <div class="space-y-3">
                <div v-for="color in colors" :key="color">
                    <Rate v-model="colorValue" :allow-half="true" :color="color" />
                    <span class="ml-2 text-gray-600 dark:text-gray-400">{{ color }}</span>
                </div>
            </div>
        </div>

        <div>
            <h2 class="text-xl font-medium mb-4 dark:text-white">只读模式</h2>
            <Rate v-model="readonlyValue" :readonly="true" />
        </div>

        <div>
            <h2 class="text-xl font-medium mb-4 dark:text-white">禁用状态</h2>
            <Rate v-model="disabledValue" :disabled="true" />
        </div>

        <div>
            <h2 class="text-xl font-medium mb-4 dark:text-white">不同尺寸</h2>
            <div class="space-y-3">
                <div>
                    <Rate v-model="sizeValue" :allow-half="true" size="sm" />
                    <span class="ml-2 text-gray-600 dark:text-gray-400">小</span>
                </div>
                <div>
                    <Rate v-model="sizeValue" :allow-half="true" size="md" />
                    <span class="ml-2 text-gray-600 dark:text-gray-400">中</span>
                </div>
                <div>
                    <Rate v-model="sizeValue" :allow-half="true" size="lg" />
                    <span class="ml-2 text-gray-600 dark:text-gray-400">大</span>
                </div>
            </div>
        </div>

        <div>
            <h2 class="text-xl font-medium mb-4 dark:text-white">提示信息</h2>
            <Rate v-model="tooltipValue" :allow-half="true" :tooltips="['很差', '较差', '一般', '良好', '优秀']" />
        </div>

        <div>
            <h2 class="text-xl font-medium mb-4 dark:text-white">预设图标</h2>
            <div class="space-y-3">
                <div v-for="icon in icons" :key="icon">
                    <Rate v-model="iconValue" :allow-half="true" :icon="icon" />
                    <span class="ml-2 text-gray-600 dark:text-gray-400">{{ icon }}</span>
                </div>
            </div>
        </div>

        <div>
            <h2 class="text-xl font-medium mb-4 dark:text-white">自定义字符</h2>
            <div class="space-y-3">
                <div>
                    <Rate v-model="characterValue" :allow-half="true" character="A" />
                    <span class="ml-2 text-gray-600 dark:text-gray-400">字母</span>
                </div>
                <div>
                    <Rate v-model="characterValue" :allow-half="true" character="好" />
                    <span class="ml-2 text-gray-600 dark:text-gray-400">中文</span>
                </div>
                <div>
                    <Rate v-model="characterValue" :allow-half="true" character="❤️" />
                    <span class="ml-2 text-gray-600 dark:text-gray-400">Emoji</span>
                </div>
            </div>
        </div>

        <div>
            <h2 class="text-xl font-medium mb-4 dark:text-white">自定义图标插槽</h2>
            <div>
                <Rate v-model="slotValue" :allow-half="true">
                    <template #icon="{ active }">
                        <div class="w-6 h-6 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" class="w-full h-full"
                                :style="{ color: active ? '#f59e0b' : '#d1d5db' }">
                                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" fill="currentColor" />
                            </svg>
                        </div>
                    </template>
                </Rate>
                <span class="ml-2 text-gray-600 dark:text-gray-400">自定义播放图标</span>
            </div>
        </div>

        <div>
            <h2 class="text-xl font-medium mb-4 dark:text-white">自定义SVG图标</h2>
            <div class="space-y-3">
                <div>
                    <Rate v-model="customSvgValue" :allow-half="true" :custom-icon-path="customStarPath" />
                    <span class="ml-2 text-gray-600 dark:text-gray-400">五角星</span>
                </div>
                <div>
                    <Rate v-model="customSvgValue" :allow-half="true" :custom-icon-path="thumbUpPath" />
                    <span class="ml-2 text-gray-600 dark:text-gray-400">点赞</span>
                </div>
                <div>
                    <Rate v-model="customSvgValue" :allow-half="true" :custom-icon-path="smilePath" />
                    <span class="ml-2 text-gray-600 dark:text-gray-400">笑脸</span>
                </div>
                <div>
                    <Rate v-model="customSvgValue" :allow-half="true" :custom-icon-path="flowerPath" />
                    <span class="ml-2 text-gray-600 dark:text-gray-400">花朵</span>
                </div>
            </div>
        </div>

        <div>
            <h2 class="text-xl font-medium mb-4 dark:text-white">完全自定义图标插槽</h2>
            <div>
                <Rate v-model="slotValue" :allow-half="true">
                    <template #icon="{ active, half, isDark }">
                        <div class="w-8 h-8 flex items-center justify-center">
                            <!-- 使用更精美的自定义SVG图标 -->
                            <svg viewBox="0 0 24 24" class="w-full h-full">
                                <path
                                    d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.7,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                                    :fill="active ? (isDark ? '#f59e0b' : '#fbbf24') : (isDark ? '#4b5563' : '#d1d5db')" />
                            </svg>
                        </div>
                    </template>
                </Rate>
                <span class="ml-2 text-gray-600 dark:text-gray-400">精美笑脸图标</span>
            </div>
        </div>

        <div class="mt-16 border-t border-gray-200 dark:border-gray-700 pt-10">
            <h2 class="text-2xl font-bold mb-8 dark:text-white flex items-center">
                <span
                    class="bg-gradient-to-r from-amber-500 to-amber-300 w-1 h-8 rounded-full inline-block mr-3"></span>
                小结与最佳实践
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- 使用场景 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
                    <h3 class="text-lg font-semibold mb-4 text-amber-500 dark:text-amber-400 flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z">
                            </path>
                        </svg>
                        使用场景
                    </h3>
                    <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>用户评价、评分场景，如产品评分、服务评价等</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>收集用户反馈的简便直观方式</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>展示产品或内容的平均评分</span>
                        </li>
                    </ul>
                </div>

                <!-- 最佳实践 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
                    <h3 class="text-lg font-semibold mb-4 text-amber-500 dark:text-amber-400 flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                            </path>
                        </svg>
                        最佳实践
                    </h3>
                    <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>根据业务场景选择适当的图标和颜色，让评分组件更符合整体设计风格</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>对于详细评价，建议提供半星选择提高评分精度</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>添加tooltips提供更明确的评分含义说明</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>在只读模式下展示数据时，可搭配文字说明增强可读性</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>考虑移动端触控场景，推荐使用较大尺寸提升交互体验</span>
                        </li>
                    </ul>
                </div>

                <!-- 注意事项 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
                    <h3 class="text-lg font-semibold mb-4 text-amber-500 dark:text-amber-400 flex items-center">
                        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        注意事项
                    </h3>
                    <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>过多的评分项（count>10）会导致用户选择困难，建议保持在5-7个评分项</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>根据界面整体风格选择合适的颜色和图标，避免视觉冲突</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>自定义图标应保持清晰可辨识，特别是在小尺寸下</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>确保评分组件在不同尺寸下都有良好的展示效果</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-4 h-4 mt-1 text-amber-500 mr-2 flex-shrink-0" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>在深色模式下注意对比度，确保评分组件清晰可见</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="mt-16 border-t border-gray-200 dark:border-gray-700 pt-10">
            <h2 class="text-2xl font-bold mb-6 dark:text-white">API 文档</h2>

            <h3 class="text-xl font-medium mb-4 dark:text-white">Props</h3>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                属性名</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                类型</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                默认值</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                描述</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                modelValue</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Number</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">0</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">当前评分值</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                count
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Number</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">5</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">评分项总数</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                allowHalf</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Boolean
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否允许半星评分</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                color
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">String</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">"amber"
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">评分组件主题颜色</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                readonly</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Boolean
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否为只读模式</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                disabled</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Boolean
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否为禁用状态</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                size
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">String</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">"md"</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">尺寸，可选值：'sm', 'md', 'lg'</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                allowClear</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Boolean
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">true</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否允许再次点击后清除</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                tooltips</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">String[]
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">[]</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">自定义每项的提示信息</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                icon
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">String</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">"star"</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">预设图标类型</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                character</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">String</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">""</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">自定义字符，优先级高于icon</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                customIconPath</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">String</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">""</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">自定义SVG路径数据</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-medium mt-8 mb-4 dark:text-white">Events</h3>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                事件名</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                回调参数</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                描述</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                update:modelValue</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(value:
                                number)
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">评分值改变时触发</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                change
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(value:
                                number)
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">评分值变化时触发</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                hover-change</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(value:
                                number)
                            </td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">鼠标悬停位置变化时触发</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-medium mt-8 mb-4 dark:text-white">Slots</h3>
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                插槽名</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                参数</th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                描述</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                icon
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{ active:
                                boolean,
                                half: boolean, isDark: boolean }</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">自定义图标内容</td>
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                character</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{ active:
                                boolean,
                                isDark: boolean }</td>
                            <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">自定义字符内容</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Rate, IconType } from './index';
import { ColorType } from './config';

const basicValue = ref(3);
const halfValue = ref(2.5);
const colorValue = ref(4);
const readonlyValue = ref(3);
const disabledValue = ref(2);
const sizeValue = ref(3);
const tooltipValue = ref(3);
const iconValue = ref(3);
const characterValue = ref(3);
const slotValue = ref(3);
const customSvgValue = ref(3);

// 更精美的SVG路径集合
const customStarPath = "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z";
const thumbUpPath = "M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z";
const smilePath = "M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,6.67C14.74,6.28 14.12,6.29 13.74,6.68L10.94,9.47L9.29,7.8C8.9,7.4 8.28,7.39 7.88,7.78L6.81,8.86C6.42,9.24 6.41,9.86 6.79,10.25L9.82,13.34C10.21,13.73 10.82,13.75 11.22,13.36L16.19,8.43C16.58,8.05 16.57,7.43 16.18,7.76Z";
const flowerPath = "M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.56 9.9,16.57 9.54,15.59C8.27,15.68 7.29,15.5 6.69,15.31C6.1,16.8 6.37,19.05 7.37,20M7.63,4C6.9,4.28 6.37,6.38 7.03,8.04C7.57,7.92 8.23,7.9 9,8.03C9.34,7.08 9.89,6.05 10.38,5.33C9.96,4.53 8.68,3.75 7.63,4M16.63,4C15.58,3.75 14.3,4.53 13.88,5.33C14.37,6.05 14.92,7.08 15.25,8.03C16.03,7.9 16.68,7.92 17.23,8.04C17.9,6.38 17.36,4.28 16.63,4M4.63,10.13C3.45,9.97 2.57,10.86 2.25,11.83C2,12.6 2.96,14.47 4.23,15.92C4.96,15.4 6,14.87 7.29,14.73C6.73,13.72 6.3,12.4 6.22,11.39C5.58,10.69 5.07,10.28 4.63,10.13M19.5,11.83C19.18,10.86 18.3,9.97 17.12,10.13C16.68,10.28 16.17,10.69 15.53,11.39C15.44,12.4 15,13.72 14.44,14.73C15.72,14.87 16.77,15.4 17.5,15.92C18.77,14.47 19.73,12.6 19.5,11.83M12,17.15C11.04,17.13 9.83,16.74 8.4,15.81C8.91,14.9 9.25,13.5 9.25,12C9.25,10.5 8.91,9.1 8.4,8.19C9.83,7.26 11.04,6.87 12,6.85C12.96,6.87 14.17,7.26 15.6,8.19C15.09,9.1 14.75,10.5 14.75,12C14.75,13.5 15.09,14.9 15.6,15.81C14.17,16.74 12.96,17.13 12,17.15M12,22C9.81,22 7.79,21.26 6.2,19.9C5.44,19.24 4.45,17.97 4.4,16.65C4.33,15.36 4.73,14.1 5.15,13.37C5.41,12.89 5.78,12.39 6.44,12.03C7.09,11.46 8.53,11.46 9.67,12.07C10.39,12.4 13.03,11.14 13.03,5.5C13.03,3.35 13.88,2.92 14.76,2.42C16.89,1.11 20,2.11 20.36,5.05C20.43,5.65 20.36,6.67 20.19,7.26C20.07,7.78 19.86,8.12 19.5,8.55C19.17,9.04 18.5,9.5 18.5,11C18.5,12 18.38,13.44 17.72,14.84C17.5,15.27 15.5,17 14.25,17.72C13.38,18.28 12.64,18.97 12,22Z";

const colors: ColorType[] = ['red', 'orange', 'amber', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
const icons: IconType[] = ['star', 'heart', 'circle', 'flag', 'like', 'crown'];

</script>
