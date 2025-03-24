<template>
    <div class="p-8 transition-all duration-300 dark:bg-gray-900 min-h-screen">
        <h1 class="text-3xl font-bold mb-8 text-gray-800 dark:text-white">水印组件 (Watermark)</h1>

        <!-- 介绍部分 -->
        <div class="mb-12 prose dark:prose-invert max-w-none">
            <p class="text-lg text-gray-700 dark:text-gray-300">
                水印组件用于在页面的特定区域添加水印标识，支持文字和图片水印，可用于标记敏感内容、版权信息或文档状态。
                本组件支持深色/浅色模式自动切换，并提供防篡改保护和多种自定义选项。
            </p>
        </div>

        <!-- 基础用法 -->
        <section class="mb-16">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-l-4 border-blue-500 pl-3">基础用法</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- 基本文字水印 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                    <div class="p-4 bg-blue-50 dark:bg-blue-900/30 border-b border-blue-100 dark:border-blue-800">
                        <h3 class="text-lg font-medium text-blue-800 dark:text-blue-300">基本文字水印</h3>
                    </div>
                    <div class="relative min-h-[300px]">
                        <Watermark content="CONFIDENTIAL" :opacity="0.25"
                            :font="{ fontSize: 18, color: 'rgba(0, 0, 0, 0.3)' }"
                            :darkFont="{ fontSize: 18, color: 'rgba(255, 255, 255, 0.3)' }">
                            <div class="p-6 h-full">
                                <div class="mb-4 font-medium text-gray-700 dark:text-gray-300">最基本的文字水印示例</div>
                                <p class="text-gray-600 dark:text-gray-400 mb-4">
                                    水印将覆盖在内容之上，不会影响内容的可读性和交互。在深色模式下，水印会自动调整颜色以保持适当的对比度。
                                </p>
                                <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <p class="text-gray-700 dark:text-gray-300">水印常用于标记敏感文档，防止信息泄露，或标明文档归属。</p>
                                </div>
                            </div>
                        </Watermark>
                    </div>
                </div>

                <!-- 多行文字水印 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                    <div class="p-4 bg-green-50 dark:bg-green-900/30 border-b border-green-100 dark:border-green-800">
                        <h3 class="text-lg font-medium text-green-800 dark:text-green-300">多行文字水印</h3>
                    </div>
                    <div class="relative min-h-[300px]">
                        <Watermark :content="['内部文件', 'INTERNAL', '2023']" :opacity="0.22" :gap="[120, 120]"
                            :rotate="-15" :font="{ color: 'rgba(0, 0, 0, 0.25)' }"
                            :darkFont="{ color: 'rgba(255, 255, 255, 0.25)' }">
                            <div class="p-6 h-full">
                                <div class="mb-4 font-medium text-gray-700 dark:text-gray-300">多行文字水印示例</div>
                                <p class="text-gray-600 dark:text-gray-400 mb-4">
                                    可以使用字符串数组设置多行文字水印，每一行文字将垂直排列。适合需要展示多条信息，如文档类型、公司名称和日期等。
                                </p>
                                <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <p class="text-gray-700 dark:text-gray-300">多行文字水印增加了信息密度，可以传递更丰富的标识信息。</p>
                                </div>
                            </div>
                        </Watermark>
                    </div>
                </div>
            </div>
        </section>

        <!-- 高级用法 -->
        <section class="mb-16">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-l-4 border-purple-500 pl-3">高级用法
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- 图片水印 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                    <div
                        class="p-4 bg-purple-50 dark:bg-purple-900/30 border-b border-purple-100 dark:border-purple-800">
                        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-300">图片水印</h3>
                    </div>
                    <div class="relative min-h-[300px]">
                        <Watermark
                            image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='80' viewBox='0 0 150 80'%3E%3Crect width='150' height='80' fill='none'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' font-weight='bold' text-anchor='middle' dominant-baseline='middle' fill='%23666'%3ELOGO%3C/text%3E%3C/svg%3E"
                            :width="150" :height="80" :rotate="0" :gap="[180, 180]" :opacity="0.25">
                            <div class="p-6 h-full">
                                <div class="mb-4 font-medium text-gray-700 dark:text-gray-300">图片水印示例</div>
                                <p class="text-gray-600 dark:text-gray-400 mb-4">
                                    除了文字水印，组件还支持使用图片作为水印。图片水印通常用于展示公司标志或其他品牌标识。
                                </p>
                                <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <p class="text-gray-700 dark:text-gray-300">
                                        建议使用透明背景的PNG图片获得最佳效果。图片大小推荐使用2倍或3倍图以提高清晰度。</p>
                                </div>
                            </div>
                        </Watermark>
                    </div>
                </div>

                <!-- 动画水印 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                    <div
                        class="p-4 bg-orange-50 dark:bg-orange-900/30 border-b border-orange-100 dark:border-orange-800">
                        <h3 class="text-lg font-medium text-orange-800 dark:text-orange-300">动画水印</h3>
                    </div>
                    <div class="relative min-h-[300px]">
                        <Watermark content="DRAFT DOCUMENT" :enableAnimation="true" :animationDuration="8000"
                            :opacity="0.28" :rotate="-30"
                            :font="{ fontWeight: 700, fontSize: 20, color: 'rgba(0, 0, 0, 0.3)' }"
                            :darkFont="{ fontWeight: 700, fontSize: 20, color: 'rgba(255, 255, 255, 0.3)' }">
                            <div class="p-6 h-full">
                                <div class="mb-4 font-medium text-gray-700 dark:text-gray-300">带动画效果的水印</div>
                                <p class="text-gray-600 dark:text-gray-400 mb-4">
                                    启用动画可以使水印慢慢移动，增加视觉层次感，同时也有助于防止截图时去除水印。
                                </p>
                                <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <p class="text-gray-700 dark:text-gray-300">动画水印更加引人注目，特别适合标记草稿或临时文档。</p>
                                </div>
                            </div>
                        </Watermark>
                    </div>
                </div>
            </div>
        </section>

        <!-- 特殊场景 -->
        <section class="mb-16">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-l-4 border-red-500 pl-3">特殊场景应用</h2>

            <div class="grid grid-cols-1 gap-8">
                <!-- 全页水印 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                    <div class="p-4 bg-red-50 dark:bg-red-900/30 border-b border-red-100 dark:border-red-800">
                        <h3 class="text-lg font-medium text-red-800 dark:text-red-300">全页固定水印 (跟随滚动)</h3>
                    </div>
                    <div class="relative h-[400px] overflow-auto">
                        <Watermark content="STRICTLY CONFIDENTIAL" :followScroll="true" :opacity="0.15"
                            :gap="[160, 160]" :font="{ color: 'rgba(220, 38, 38, 0.25)' }"
                            :darkFont="{ color: 'rgba(248, 113, 113, 0.25)' }">
                            <div class="p-6 min-h-[600px]">
                                <div class="mb-4 font-medium text-gray-700 dark:text-gray-300">跟随滚动的固定水印</div>
                                <p class="text-gray-600 dark:text-gray-400 mb-4">
                                    使用 followScroll 属性可以创建固定在视口中的水印，即使页面滚动，水印也保持在相同位置。这种水印常用于整个应用或重要文档中。
                                </p>

                                <div class="space-y-4">
                                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                        <p class="text-gray-700 dark:text-gray-300">这种水印确保无论用户滚动到页面的哪个部分，水印始终可见。</p>
                                    </div>

                                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                        <p class="text-gray-700 dark:text-gray-300">固定水印提供了持续的可见性，强调内容的机密性或重要性。</p>
                                    </div>

                                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                        <p class="text-gray-700 dark:text-gray-300">尝试滚动此区域，观察水印如何保持在固定位置。</p>
                                    </div>

                                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                        <p class="text-gray-700 dark:text-gray-300">此示例还使用了自定义颜色，在浅色和深色模式下分别使用不同的红色阴影。
                                        </p>
                                    </div>

                                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                        <p class="text-gray-700 dark:text-gray-300">滚动区域以显示更多内容，水印会固定在视图中。</p>
                                    </div>

                                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                        <p class="text-gray-700 dark:text-gray-300">固定水印与常规水印的主要区别在于它不随内容一起滚动。</p>
                                    </div>
                                </div>
                            </div>
                        </Watermark>
                    </div>
                </div>
            </div>
        </section>

        <!-- 自定义样式 -->
        <section class="mb-16">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-l-4 border-teal-500 pl-3">自定义样式</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- 自定义旋转角度 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                    <div class="p-4 bg-teal-50 dark:bg-teal-900/30 border-b border-teal-100 dark:border-teal-800">
                        <h3 class="text-lg font-medium text-teal-800 dark:text-teal-300">自定义旋转角度</h3>
                    </div>
                    <div class="relative h-[250px]">
                        <Watermark content="45°" :rotate="45" :opacity="0.25"
                            :font="{ fontSize: 24, color: 'rgba(0, 0, 0, 0.3)' }"
                            :darkFont="{ fontSize: 24, color: 'rgba(255, 255, 255, 0.3)' }">
                            <div class="p-6 flex items-center justify-center h-full">
                                <div class="text-center">
                                    <div class="mb-4 font-medium text-gray-700 dark:text-gray-300">45度角水印</div>
                                    <p class="text-gray-600 dark:text-gray-400">
                                        通过 rotate 属性自定义水印旋转角度
                                    </p>
                                </div>
                            </div>
                        </Watermark>
                    </div>
                </div>

                <!-- 自定义间距 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                    <div class="p-4 bg-teal-50 dark:bg-teal-900/30 border-b border-teal-100 dark:border-teal-800">
                        <h3 class="text-lg font-medium text-teal-800 dark:text-teal-300">自定义间距</h3>
                    </div>
                    <div class="relative h-[250px]">
                        <Watermark content="密集" :gap="[60, 60]" :opacity="0.22"
                            :font="{ fontSize: 18, color: 'rgba(0, 0, 0, 0.3)' }"
                            :darkFont="{ fontSize: 18, color: 'rgba(255, 255, 255, 0.3)' }">
                            <div class="p-6 flex items-center justify-center h-full">
                                <div class="text-center">
                                    <div class="mb-4 font-medium text-gray-700 dark:text-gray-300">密集排列水印</div>
                                    <p class="text-gray-600 dark:text-gray-400">
                                        通过 gap 属性自定义水印之间的间距
                                    </p>
                                </div>
                            </div>
                        </Watermark>
                    </div>
                </div>

                <!-- 自定义字体 -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                    <div class="p-4 bg-teal-50 dark:bg-teal-900/30 border-b border-teal-100 dark:border-teal-800">
                        <h3 class="text-lg font-medium text-teal-800 dark:text-teal-300">自定义字体样式</h3>
                    </div>
                    <div class="relative h-[250px]">
                        <Watermark content="斜体粗体" :font="{
                            fontWeight: 700,
                            fontStyle: 'italic',
                            fontSize: 22,
                            color: 'rgba(79, 70, 229, 0.35)'
                        }" :darkFont="{
                            fontWeight: 700,
                            fontStyle: 'italic',
                            fontSize: 22,
                            color: 'rgba(129, 140, 248, 0.35)'
                        }" :opacity="0.8">
                            <div class="p-6 flex items-center justify-center h-full">
                                <div class="text-center">
                                    <div class="mb-4 font-medium text-gray-700 dark:text-gray-300">自定义字体样式</div>
                                    <p class="text-gray-600 dark:text-gray-400">
                                        通过 font 和 darkFont 属性自定义字体样式
                                    </p>
                                </div>
                            </div>
                        </Watermark>
                    </div>
                </div>
            </div>
        </section>

        <!-- 水印组合应用 -->
        <section class="mb-16">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-l-4 border-amber-500 pl-3">水印组合应用
            </h2>

            <div
                class="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
                <div class="p-4 bg-amber-50 dark:bg-amber-900/30 border-b border-amber-100 dark:border-amber-800">
                    <h3 class="text-lg font-medium text-amber-800 dark:text-amber-300">综合应用案例</h3>
                </div>
                <div class="relative">
                    <Watermark :content="['COMPANY NAME', '机密文件 DO NOT COPY', '2023']" :opacity="0.2" :rotate="-15"
                        :gap="[200, 200]" :enableAnimation="true" :animationDuration="12000" :width="200" :height="100"
                        :font="{ color: 'rgba(0, 0, 0, 0.25)' }" :darkFont="{ color: 'rgba(255, 255, 255, 0.25)' }">
                        <div class="p-8 min-h-[500px]">
                            <div class="mb-6">
                                <h4 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">内部产品规划文档</h4>
                                <p class="text-gray-700 dark:text-gray-300 mb-2">
                                    这是一个模拟的内部文档页面，展示了水印在实际业务场景中的应用。
                                </p>
                                <p class="text-gray-600 dark:text-gray-400 mb-4">
                                    水印清晰标识了文档的保密性质，有助于防止信息泄露和提醒查看者内容的敏感性。
                                </p>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div class="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                                    <h5 class="font-medium text-gray-800 dark:text-white mb-3">第一季度目标</h5>
                                    <ul class="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                                        <li>完成产品原型设计和用户测试</li>
                                        <li>建立初步的市场营销策略</li>
                                        <li>开发核心功能模块</li>
                                        <li>准备 Beta 版本发布计划</li>
                                    </ul>
                                </div>

                                <div class="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg">
                                    <h5 class="font-medium text-gray-800 dark:text-white mb-3">第二季度目标</h5>
                                    <ul class="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                                        <li>推出 Beta 版并收集用户反馈</li>
                                        <li>优化产品性能和用户体验</li>
                                        <li>扩大测试用户群体</li>
                                        <li>准备正式版本发布</li>
                                    </ul>
                                </div>
                            </div>

                            <div
                                class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-100 dark:border-blue-800">
                                <h5 class="font-medium text-blue-800 dark:text-blue-300 mb-3">关键指标</h5>
                                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                    <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                                        <div class="text-sm text-gray-500 dark:text-gray-400">用户增长目标</div>
                                        <div class="text-xl font-bold text-blue-600 dark:text-blue-400">+200%</div>
                                    </div>
                                    <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                                        <div class="text-sm text-gray-500 dark:text-gray-400">活跃率</div>
                                        <div class="text-xl font-bold text-green-600 dark:text-green-400">65%</div>
                                    </div>
                                    <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                                        <div class="text-sm text-gray-500 dark:text-gray-400">留存率</div>
                                        <div class="text-xl font-bold text-purple-600 dark:text-purple-400">42%</div>
                                    </div>
                                    <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                                        <div class="text-sm text-gray-500 dark:text-gray-400">转化率</div>
                                        <div class="text-xl font-bold text-orange-600 dark:text-orange-400">18%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Watermark>
                </div>
            </div>
        </section>

        <!-- 功能属性一览 -->
        <section>
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-l-4 border-indigo-500 pl-3">功能与属性一览
            </h2>

            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    属性名</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    说明</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                    默认值</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    content</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                    水印内容，可以是字符串或字符串数组</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                            </tr>
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    image</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">图片水印的地址
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-</td>
                            </tr>
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    width / height</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                    水印的宽度和高度</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">120 /
                                    64</td>
                            </tr>
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    rotate</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">水印旋转角度
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-22°
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    gap</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">水印之间的间距
                                    [x, y]</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">[100,
                                    100]</td>
                            </tr>
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    opacity</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">水印透明度
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">1</td>
                            </tr>
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    font / darkFont</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                    字体样式（分别用于浅色和深色模式）</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">见文档
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    followScroll</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                    是否跟随页面滚动</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">false
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    enableAnimation</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                    是否启用动画效果</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">false
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                    monitor</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                    是否启用防篡改监控</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">true
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- 小结与最佳实践 -->
        <section class="mb-16">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-l-4 border-pink-500 pl-3">小结与最佳实践
            </h2>

            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div class="prose dark:prose-invert max-w-none">
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">什么时候使用水印组件？</h3>

                    <ul class="space-y-3 text-gray-700 dark:text-gray-300">
                        <li class="flex items-start">
                            <span
                                class="inline-flex items-center justify-center bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-400 w-6 h-6 rounded-full shrink-0 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span>需要<strong>标识敏感内容</strong>或加强信息安全保护时，如内部文档、合同、设计图纸等</span>
                        </li>
                        <li class="flex items-start">
                            <span
                                class="inline-flex items-center justify-center bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-400 w-6 h-6 rounded-full shrink-0 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span>显示<strong>文档状态</strong>或分类标识，如"草稿"、"已归档"、"待审批"等</span>
                        </li>
                        <li class="flex items-start">
                            <span
                                class="inline-flex items-center justify-center bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-400 w-6 h-6 rounded-full shrink-0 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span>保护<strong>知识产权</strong>和标明内容归属，如在图片或设计作品上添加版权信息</span>
                        </li>
                        <li class="flex items-start">
                            <span
                                class="inline-flex items-center justify-center bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-400 w-6 h-6 rounded-full shrink-0 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span>为<strong>预览环境</strong>或测试系统添加明显标识，避免与生产环境混淆</span>
                        </li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">最佳实践</h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div
                            class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h4 class="font-medium text-blue-800 dark:text-blue-300 mb-2">透明度与可见性平衡</h4>
                            <p class="text-gray-700 dark:text-gray-300 text-sm">
                                调整水印的透明度至 0.15-0.25 之间，既能确保水印清晰可见，又不会过分干扰内容阅读。对于重要文档，可以适当增加水印密度和不透明度。
                            </p>
                        </div>

                        <div
                            class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h4 class="font-medium text-blue-800 dark:text-blue-300 mb-2">内容与色彩选择</h4>
                            <p class="text-gray-700 dark:text-gray-300 text-sm">
                                水印内容宜简短明确，使用多行文本可传递更完整信息。针对不同场景选择合适的颜色，例如使用红色表示机密文件，灰色表示草稿状态。
                            </p>
                        </div>

                        <div
                            class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h4 class="font-medium text-blue-800 dark:text-blue-300 mb-2">防篡改与安全性</h4>
                            <p class="text-gray-700 dark:text-gray-300 text-sm">
                                启用 monitor 属性以防止水印被恶意删除。对于高度敏感的内容，可以结合动画效果和较高频率的水印，增加截图时去除水印的难度。
                            </p>
                        </div>

                        <div
                            class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                            <h4 class="font-medium text-blue-800 dark:text-blue-300 mb-2">性能考量</h4>
                            <p class="text-gray-700 dark:text-gray-300 text-sm">
                                大量使用动画水印可能影响性能，建议在必要场景下使用。图片水印推荐使用体积小、格式优化的SVG或PNG图片，并设置合理的缓存策略。
                            </p>
                        </div>
                    </div>

                    <div
                        class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-800 mt-6">
                        <h4 class="font-medium text-yellow-800 dark:text-yellow-300 flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clip-rule="evenodd" />
                            </svg>
                            注意事项
                        </h4>
                        <ul class="text-sm text-yellow-800 dark:text-yellow-300 space-y-1 pl-7 list-disc">
                            <li>在可打印文档中，考虑添加更明显的水印，使其在打印后仍然可见</li>
                            <li>水印组件默认使用 absolute 定位，确保父容器设置了 relative 定位</li>
                            <li>如果内容区域高度不固定，推荐使用 followScroll 属性确保水印覆盖整个区域</li>
                            <li>字体大小、间距和旋转角度会影响水印的视觉效果，根据实际情况调整</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- API 文档增强 -->
        <section>
            <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white border-l-4 border-indigo-500 pl-3">API 参考
            </h2>

            <div class="space-y-8">
                <!-- 核心属性 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div
                        class="p-4 bg-indigo-50 dark:bg-indigo-900/30 border-b border-indigo-100 dark:border-indigo-800">
                        <h3 class="text-lg font-medium text-indigo-800 dark:text-indigo-300">核心属性</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <!-- ...existing table... -->
                    </div>
                </div>

                <!-- 样式相关属性 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div
                        class="p-4 bg-purple-50 dark:bg-purple-900/30 border-b border-purple-100 dark:border-purple-800">
                        <h3 class="text-lg font-medium text-purple-800 dark:text-purple-300">样式与外观</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        属性名</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        说明</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        类型</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        默认值</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        font</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">字体样式（浅色模式）</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        WatermarkFont</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        见下方字体属性表</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        darkFont</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">字体样式（深色模式）</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        WatermarkFont</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        见下方字体属性表</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        opacity</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">水印整体透明度</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">1
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        rotate</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">水印旋转角度（度）</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">-22
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        zIndex</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">水印层级</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">9
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 行为与交互 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div class="p-4 bg-green-50 dark:bg-green-900/30 border-b border-green-100 dark:border-green-800">
                        <h3 class="text-lg font-medium text-green-800 dark:text-green-300">行为与交互</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        属性名</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        说明</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        类型</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        默认值</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        followScroll</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">是否跟随页面滚动 (fixed定位)
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        false</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        monitor</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">是否启用防篡改监控</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        true</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        enableAnimation</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">是否启用水印动画效果</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        boolean</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        false</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        animationDuration</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">动画持续时间（毫秒）</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        3000</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        isDarkMode</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">手动指定是否使用深色模式</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        boolean | undefined</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        undefined</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 字体属性表 -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div
                        class="p-4 bg-orange-50 dark:bg-orange-900/30 border-b border-orange-100 dark:border-orange-800">
                        <h3 class="text-lg font-medium text-orange-800 dark:text-orange-300">字体属性 (WatermarkFont)</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        属性名</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        说明</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        类型</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        默认值 (浅色/深色)</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        color</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">字体颜色</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        rgba(0,0,0,0.25) / rgba(255,255,255,0.25)</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        fontSize</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">字体大小</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">16
                                    </td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        fontWeight</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">字体粗细</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">normal | light |
                                        weight | number</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        normal</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        fontFamily</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">字体类型</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        string</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        sans-serif</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        fontStyle</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">字体样式</td>
                                    <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">none | normal |
                                        italic | oblique</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                        normal</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            <span class="text-amber-600 dark:text-amber-400">提示：</span> font 和 darkFont
                            属性接收的对象可以只包含部分属性，未指定的属性将使用默认值。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { Watermark } from './index';
</script>

<style scoped>
/* 添加卡片悬浮效果 */
.shadow-xl {
    transition: all 0.3s ease;
}

.shadow-xl:hover {
    transform: translateY(-5px);
}

/* 表格样式优化 */
table {
    border-collapse: separate;
    border-spacing: 0;
}

/* 添加页面过渡效果 */
.min-h-screen {
    transition: background-color 0.5s ease;
}

/* 确保水印内容区域有足够的高度 */
.h-full {
    height: 100%;
}

/* 修复滚动区域显示问题 */
.overflow-auto {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
}
</style>
