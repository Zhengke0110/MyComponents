<template>
    <div class="space-y-8 p-6 transition-all duration-300">
        <!-- 标题部分 -->
        <div class="space-y-2">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Card 卡片组件
            </h1>
            <p class="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Card组件用于展示内容，支持多种变体样式，适合展示文字、图片等多种内容
            </p>
        </div>

        <!-- 基础卡片展示 -->
        <section>
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                基础卡片
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                    <div class="text-gray-700 dark:text-gray-300">
                        基础卡片，用于展示简单内容。这是Card组件的基础使用方式。
                    </div>
                </Card>

                <Card title="带标题的卡片" variant="with-header">
                    <div class="text-gray-700 dark:text-gray-300">
                        使用标题属性可以为卡片添加标题，也可以使用header插槽自定义标题区域。
                    </div>
                </Card>

                <Card variant="with-footer" footerText="这是卡片底部">
                    <div class="text-gray-700 dark:text-gray-300">
                        带底部的卡片，底部可以放置操作按钮或者附加信息。
                    </div>
                </Card>
            </div>
        </section>

        <!-- 完整卡片展示 -->
        <section class="animate-fade-in transition-opacity duration-500">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                完整卡片
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card variant="complete" title="完整卡片示例" footerText="卡片底部信息" hoverable>
                    <div class="text-gray-700 dark:text-gray-300">
                        完整卡片包含标题、内容和底部区域，是最常用的卡片形式之一。
                        <div class="mt-2 flex space-x-2">
                            <span
                                class="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 transition-colors duration-300">
                                标签1
                            </span>
                            <span
                                class="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300 transition-colors duration-300">
                                标签2
                            </span>
                        </div>
                    </div>
                </Card>

                <Card variant="complete">
                    <template #header>
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg font-medium text-gray-900 dark:text-white">自定义标题区域</h3>
                            <button
                                class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                            </button>
                        </div>
                    </template>
                    <div class="text-gray-700 dark:text-gray-300">
                        使用插槽可以自定义卡片的各个部分，增强灵活性和定制性。
                    </div>
                    <template #footer>
                        <div class="flex justify-end space-x-2">
                            <button
                                class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200">
                                取消
                            </button>
                            <button
                                class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-200">
                                确定
                            </button>
                        </div>
                    </template>
                </Card>
            </div>
        </section>

        <!-- 不同背景样式 -->
        <section class="animate-fade-in transition-opacity duration-500 delay-100">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                背景样式变体
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card variant="alternate-header" title="不同颜色的标题">
                    <div class="text-gray-700 dark:text-gray-300">
                        标题区域使用不同的背景颜色，增加视觉层次感。
                    </div>
                </Card>

                <Card variant="alternate-footer">
                    <div class="text-gray-700 dark:text-gray-300">
                        底部区域使用不同的背景颜色。
                    </div>
                    <template #footer>
                        <p class="text-gray-500 dark:text-gray-400">不同背景色的底部区域</p>
                    </template>
                </Card>

                <Card variant="light-bg">
                    <div class="text-gray-700 dark:text-gray-300">
                        浅色背景的卡片，适合用于次要内容或分组内容。
                    </div>
                </Card>
            </div>
        </section>

        <!-- 交互式卡片 -->
        <section class="animate-fade-in transition-opacity duration-500 delay-200">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                交互式卡片
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card hoverable clickable @click="showMessage('点击了可点击卡片')">
                    <div class="text-gray-700 dark:text-gray-300">
                        此卡片添加了悬浮效果并可点击，点击后会触发事件。
                    </div>
                </Card>

                <Card hoverable shadowSize="md">
                    <div class="text-gray-700 dark:text-gray-300">
                        此卡片只有悬浮效果，鼠标移上去会有阴影和上移效果，但不可点击。
                    </div>
                </Card>

                <Card loading>
                    <div class="text-gray-700 dark:text-gray-300 h-24">
                        加载中状态的卡片，显示加载动画。
                    </div>
                </Card>
            </div>
        </section>

        <!-- 自定义样式 -->
        <section class="animate-fade-in transition-opacity duration-500 delay-300">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                自定义样式
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card bgColor="bg-blue-50 dark:bg-blue-900/20" shadowSize="lg" hoverable>
                    <div class="text-blue-700 dark:text-blue-300">
                        使用自定义背景色和大号阴影的卡片，可以根据需要自定义卡片样式。
                    </div>
                </Card>

                <Card animated>
                    <template #header>
                        <div class="relative h-40 -mx-4 -mt-5 mb-2 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc"
                                class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                alt="Mountain" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <h3 class="absolute bottom-4 left-4 text-white text-xl font-bold">卡片标题覆盖在图片上</h3>
                        </div>
                    </template>
                    <div class="text-gray-700 dark:text-gray-300">
                        使用自定义内容可以创建更丰富的卡片布局，如图片卡片等。
                    </div>
                </Card>
            </div>
        </section>

        <!-- 移动响应式卡片 -->
        <section class="animate-fade-in transition-opacity duration-500 delay-400">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                移动响应式卡片
            </h2>
            <div class="grid grid-cols-1 gap-6">
                <Card variant="mobile-full">
                    <div class="text-gray-700 dark:text-gray-300">
                        在移动设备上全宽显示，在桌面设备上带圆角。调整浏览器大小以查看效果。
                    </div>
                </Card>

                <Card variant="mobile-light-bg">
                    <div class="text-gray-700 dark:text-gray-300">
                        移动设备上全宽显示，并使用浅色背景。
                    </div>
                </Card>
            </div>
        </section>

        <!-- 卡片使用提示 -->
        <section class="animate-fade-in transition-opacity duration-500 delay-500">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                小结与最佳实践
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card variant="light-bg" shadow="md">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">设计原则</h3>
                    <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>使用卡片组织相关内容，增强内容的可读性和层次结构</li>
                        <li>根据内容的重要性选择适当的卡片样式和变体</li>
                        <li>不要在卡片中放置过多内容，保持简洁</li>
                        <li>使用暗黑模式时，确保内容在不同主题下都有良好的可读性</li>
                        <li>适当使用动画和交互效果，增强用户体验</li>
                    </ul>
                </Card>

                <Card variant="light-bg" shadow="md">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">常见用例</h3>
                    <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li><span class="font-medium">内容展示</span> - 使用基础卡片展示结构化内容</li>
                        <li><span class="font-medium">信息分组</span> - 使用卡片将相关信息聚合在一起</li>
                        <li><span class="font-medium">交互操作</span> - 使用可点击卡片引导用户操作</li>
                        <li><span class="font-medium">仪表盘</span> - 使用卡片布局设计数据仪表盘</li>
                        <li><span class="font-medium">多媒体展示</span> - 结合图片和文字创建丰富的媒体卡片</li>
                    </ul>
                </Card>
            </div>

            <div class="mt-6">
                <Card variant="light-bg" border-width="thin">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">注意事项</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">✅ 推荐做法</h4>
                            <ul class="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300">
                                <li>为每个卡片提供明确的内容层次结构</li>
                                <li>根据内容类型选择适当的卡片变体</li>
                                <li>在卡片内部保持足够的内边距</li>
                                <li>使用适当的阴影来表达卡片的层级关系</li>
                                <li>针对交互式卡片添加适当的状态指示</li>
                                <li>保持卡片内容的对齐和排版一致性</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">❌ 避免做法</h4>
                            <ul class="list-disc list-inside space-y-1.5 text-gray-700 dark:text-gray-300">
                                <li>在一个页面中混用多种风格的卡片</li>
                                <li>在卡片中使用与周围环境冲突的颜色</li>
                                <li>在卡片内放置过多的操作按钮</li>
                                <li>忽略卡片在移动设备上的响应式布局</li>
                                <li>嵌套过多层级的卡片</li>
                                <li>使用过大的阴影造成视觉干扰</li>
                            </ul>
                        </div>
                    </div>
                </Card>
            </div>
        </section>

        <!-- API文档 -->
        <section>
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                API 文档
            </h2>
            <Card>
                <div class="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 class="font-medium text-lg mb-2 text-gray-800 dark:text-gray-200">组件导入</h3>
                    <div class="bg-gray-50 dark:bg-gray-800 rounded p-3 overflow-x-auto">
                        <pre class="text-sm text-gray-700 dark:text-gray-300">import { Card } from '@/lib/Card';</pre>
                    </div>
                    <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">或者按需导入特定功能：</p>
                    <div class="bg-gray-50 dark:bg-gray-800 rounded p-3 mt-2 overflow-x-auto">
                        <pre class="text-sm text-gray-700 dark:text-gray-300">import Card from '@/lib/Card/Card';</pre>
                    </div>
                </div>
                
                <h3 class="font-medium text-lg mb-3 text-gray-800 dark:text-gray-200">Props</h3>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">卡片组件支持以下属性配置：</p>
                <div class="overflow-x-auto mb-6">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                                <th
                                    class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    属性名</th>
                                <th
                                    class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    类型</th>
                                <th
                                    class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    默认值</th>
                                <th
                                    class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    描述</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">variant</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">CardVariant</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">'basic'</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">卡片变体类型</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">title</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">string</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">''</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">卡片标题</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">footerText</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">string</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">''</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">卡片底部文本</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">bgColor</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">string</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">''</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">自定义背景色</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">hoverable</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">boolean</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">false</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">是否启用悬浮效果</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">clickable</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">boolean</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">false</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">是否可点击</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">loading</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">boolean</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">false</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">是否显示加载状态</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">shadowSize</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">none/sm/md/lg</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">'sm'</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">阴影大小</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">animated</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">boolean</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">true</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">是否启用过渡动画</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="font-medium text-lg mt-6 mb-3 text-gray-800 dark:text-gray-200">插槽</h3>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">卡片组件提供以下插槽用于内容定制：</p>
                <div class="overflow-x-auto mb-6">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                                <th
                                    class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    插槽名</th>
                                <th
                                    class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    描述</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">default</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">卡片的默认内容区域</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">header</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">卡片的头部区域，不提供时使用title属性
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">footer</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                                    卡片的底部区域，不提供时使用footerText属性</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="font-medium text-lg mt-6 mb-3 text-gray-800 dark:text-gray-200">事件</h3>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">卡片组件可以触发以下事件：</p>
                <div class="overflow-x-auto mb-6">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                                <th
                                    class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    事件名</th>
                                <th
                                    class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    描述</th>
                                <th
                                    class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    参数</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">click</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                                    卡片被点击时触发（仅当clickable=true时）</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">MouseEvent</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="font-medium text-lg mt-6 mb-3 text-gray-800 dark:text-gray-200">卡片变体类型</h3>
                <p class="mb-3 text-sm text-gray-600 dark:text-gray-400">卡片组件支持多种变体类型（variant属性）：</p>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                                <th
                                    class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    变体名称</th>
                                <th
                                    class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    描述</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">basic</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">基础卡片，无特殊样式</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">with-header</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">带有标题区域的卡片</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">with-footer</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">带有底部区域的卡片</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">complete</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">带有标题和底部的完整卡片</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">light-bg</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">使用浅色背景的卡片</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">glass</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">玻璃拟态效果的卡片</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">gradient</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">带渐变背景的卡片</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">neumorphism</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">新拟态风格的卡片</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">bordered</td>
                                <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">带有边框的卡片</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-2">使用示例</h4>
                    <div class="bg-white dark:bg-gray-800 rounded p-3 overflow-x-auto">
                        <pre class="text-sm text-gray-700 dark:text-gray-300">&lt;Card 
  variant="complete"
  title="卡片标题"
  footerText="卡片底部"
  hoverable
  clickable
  @click="handleCardClick"
&gt;
  卡片内容区域
&lt;/Card&gt;</pre>
                    </div>
                </div>
            </Card>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from './Card';

const showMessage = (msg: string) => {
    alert(msg);
};
</script>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
}

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
</style>
