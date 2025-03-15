<template>
    <div class="max-w-[1200px] mx-auto p-5 transition-colors duration-300 dark:bg-gray-900">
        <h1 class="text-2xl font-bold mb-6 dark:text-white">瀑布流组件示例</h1>

        <!-- 基本用法示例 -->
        <section class="mb-12 relative pb-10 border-b border-dashed border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-semibold mb-4 dark:text-white">基本用法</h2>
            <div class="flex items-center mb-4 flex-wrap gap-2">
                <span class="mr-2 dark:text-gray-300">列数：</span>
                <button v-for="col in [2, 3, 4]" :key="col" @click="basicColumn = col"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2 transition-colors duration-200"
                    :class="{ 'bg-blue-700 dark:bg-blue-800': basicColumn === col }">
                    {{ col }}列
                </button>
            </div>

            <div class="relative min-h-[400px] border border-gray-100 dark:border-gray-700 rounded-lg overflow-hidden">
                <Waterfall :data="basicItems" nodeKey="id" :column="basicColumn" :columnSpacing="16" :rowSpacing="16"
                    :animation="true" @layout-complete="handleLayoutComplete">
                    <template #default="{ item, width }">
                        <div
                            class="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800">
                            <img :src="item.image" :alt="item.title" class="w-full block" loading="lazy" />
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-2 dark:text-white">{{ item.title }}</h3>
                                <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{{ item.description
                                    }}</p>
                            </div>
                        </div>
                    </template>
                </Waterfall>
            </div>
        </section>

        <!-- 主题适配示例 -->
        <section class="mb-12 relative pb-10 border-b border-dashed border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-semibold mb-4 dark:text-white">深色/浅色模式适配</h2>
            <p class="mb-4 dark:text-gray-300">瀑布流组件自动适应当前主题模式，提供最佳视觉体验。</p>

            <div class="relative min-h-[500px] border border-gray-100 dark:border-gray-700 rounded-lg overflow-hidden">
                <Waterfall :data="themeItems" nodeKey="id" :column="3" :picturePreReading="true">
                    <template #default="{ item, width }">
                        <div
                            class="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800">
                            <div class="relative">
                                <img :src="item.image" :alt="item.title" class="w-full block" loading="lazy" />
                                <span class="absolute top-3 right-3 py-1 px-3 rounded-full text-xs font-medium"
                                    :class="tagColors[item.category as Category]">
                                    {{ item.category }}
                                </span>
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-2 dark:text-white">{{ item.title }}</h3>
                                <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">{{
                                    item.description }}</p>
                                <div class="flex justify-between items-center text-xs">
                                    <span class="text-gray-500 dark:text-gray-400">{{ item.date }}</span>
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <span class="dark:text-gray-400">{{ item.views }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Waterfall>
            </div>
        </section>

        <!-- 动态加载示例 -->
        <section class="mb-12 relative pb-10 border-b border-dashed border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-semibold mb-4 dark:text-white">动态加载数据</h2>
            <div class="flex gap-4 mb-4">
                <button @click="loadMoreItems"
                    class="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded transition-colors duration-200"
                    :disabled="loading">
                    {{ loading ? '加载中...' : '加载更多' }}
                </button>
                <div v-if="page > 1" class="text-sm text-gray-500 dark:text-gray-400 self-center">
                    已加载 {{ dynamicItems.length }} 项数据
                </div>
            </div>

            <div class="relative min-h-[600px] border border-gray-100 dark:border-gray-700 rounded-lg overflow-hidden">
                <Waterfall ref="dynamicWaterfall" :data="dynamicItems" nodeKey="id" :column="3">
                    <template #default="{ item, width, index }">
                        <div
                            class="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800">
                            <div class="relative">
                                <img :src="item.image" :alt="item.title" class="w-full block" loading="lazy" />
                                <div class="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                                    #{{ index + 1 }}
                                </div>
                            </div>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-2 dark:text-white">{{ item.title }}</h3>
                                <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{{ item.description
                                    }}</p>
                                <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-3">
                                    <span>{{ item.date }}</span>
                                    <span>{{ item.views }} 浏览</span>
                                </div>
                            </div>
                        </div>
                    </template>

                    <template #footer>
                        <div class="p-6 w-full text-center">
                            <div v-if="loading" class="text-gray-500 dark:text-gray-400">
                                <div
                                    class="inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500 dark:border-blue-400 mr-2">
                                </div>
                                正在加载更多...
                            </div>
                            <div v-else
                                class="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                                @click="loadMoreItems">
                                <span>点击加载更多</span>
                            </div>
                        </div>
                    </template>
                </Waterfall>
            </div>
        </section>

        <!-- 自定义卡片样式示例 -->
        <section class="mb-12 relative">
            <h2 class="text-xl font-semibold mb-4 dark:text-white">自定义卡片样式</h2>

            <div class="relative min-h-[600px] border border-gray-100 dark:border-gray-700 rounded-lg overflow-hidden">
                <Waterfall :data="styledItems" nodeKey="id" :column="2">
                    <template #default="{ item, width }">
                        <div :class="[
                            'rounded-lg overflow-hidden p-5 shadow-md transition-all duration-500 transform hover:scale-[1.02]',
                            item.theme === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-900' : '',
                            item.theme === 'green' ? 'bg-gradient-to-br from-green-500 to-green-700 dark:from-green-600 dark:to-green-900' : '',
                            item.theme === 'orange' ? 'bg-gradient-to-br from-orange-500 to-orange-700 dark:from-orange-600 dark:to-orange-900' : '',
                            item.theme === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-900' : '',
                            'text-white'
                        ]">
                            <div class="mb-4 border-b border-white/20 pb-2.5">
                                <h3 class="text-xl font-bold">{{ item.title }}</h3>
                            </div>
                            <div class="mb-4 leading-relaxed">
                                <p>{{ item.content }}</p>
                            </div>
                            <div class="flex justify-between items-center mt-5">
                                <div class="flex items-center">
                                    <img :src="item.avatar" alt="avatar"
                                        class="w-[30px] h-[30px] rounded-full mr-2 border-2 border-white/60"
                                        loading="lazy" />
                                    <span>{{ item.author }}</span>
                                </div>
                                <div class="flex flex-wrap gap-1.5">
                                    <span v-for="(tag, i) in item.tags" :key="i"
                                        class="bg-white/20 px-2 py-1 rounded text-xs backdrop-blur-sm">
                                        {{ tag }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </template>
                </Waterfall>
            </div>
        </section>

        <!-- API 文档部分 -->
        <section class="mb-12 relative">
            <h2 class="text-xl font-semibold mb-4 dark:text-white">组件API</h2>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">属性 (Props)</h3>
                <div class="mb-6 overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">属性名</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">类型</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">默认值</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">data</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Array</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">[]</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">瀑布流数据源，数组中的每个对象代表一个瀑布流项</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">nodeKey</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">String</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">数据中用作唯一标识的字段名，用于优化重渲染</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">column</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">2</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">瀑布流列数</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">columnSpacing</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">20</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">列间距（单位：像素）</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">rowSpacing</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">20</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">行间距（单位：像素）</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">picturePreReading</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否开启图片预加载，开启后会等待图片加载完成再计算布局</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">animation</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否启用动画效果</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">layoutAlgorithm</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">String</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'default'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">布局算法，可选值：'default'(默认)、'balanced'(均衡)、'compact'(紧凑)</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">virtualScroll</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否开启虚拟滚动，适用于大数据量场景</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">virtualScrollBuffer</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">5</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">虚拟滚动缓冲项数量</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">responsive</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Array</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">[]</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">响应式配置断点，格式为 [{width, column, columnSpacing?, rowSpacing?}]</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">resizeDebounceTime</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">200</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">窗口大小改变时的节流延迟，单位毫秒</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">loadingClass</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">String</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义加载状态类名</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">emptyClass</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">String</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义空状态类名</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">maxHeight</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">String/Number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">null</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">瀑布流最大高度，超出后显示滚动条</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">事件 (Events)</h3>
                <div class="mb-6 overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">事件名</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">回调参数</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">item-rendered</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">{item, index, position}</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">某一项渲染完成时触发</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">layout-complete</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">{containerHeight, itemsCount, columnHeights}</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">布局计算完成时触发</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">resize</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">{width, height}</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">容器大小改变时触发</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">visible-items-change</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number[]</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">可见项变化时触发（虚拟滚动模式下）</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">error</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">{type, message, error}</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">发生错误时触发</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">插槽 (Slots)</h3>
                <div class="mb-6 overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">插槽名</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">插槽属性</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">default</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">{item, width, index, isVisible}</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">瀑布流项的内容</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">loading</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">首次加载状态</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">loadingOverlay</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">加载叠加层</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">empty</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">空状态</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">footer</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">底部内容，常用于加载更多触发器</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">方法 (Methods)</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">方法名</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">参数</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">返回值</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">reset</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Promise&lt;void&gt;</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">重置瀑布流布局，当容器尺寸变化或需要强制重新计算布局时使用</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">refreshItem</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">index: number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Promise&lt;void&gt;</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">刷新指定索引的项，用于动态高度变化的场景</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">getLayoutInfo</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Object</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">获取当前布局信息，包含容器宽度、高度、列宽等数据</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- 小结与最佳实践 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">小结与最佳实践</h2>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <div class="space-y-4">
                    <p class="text-gray-700 dark:text-gray-300">
                        瀑布流组件是一个功能强大的布局组件，适用于展示不同高度的内容，特别是图片和卡片。
                        以下是一些使用建议：
                    </p>

                    <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        <li>始终为组件设置适当的 <code class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-700">nodeKey</code> 属性，确保唯一标识，提升渲染性能</li>
                        <li>对于包含图片的内容，建议保持 <code class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-700">picturePreReading</code> 为 true，确保正确的布局计算</li>
                        <li>在处理大量数据（&gt; 200项）时，启用 <code class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-700">virtualScroll</code> 以提升性能</li>
                        <li>使用 <code class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-700">responsive</code> 配置，根据不同设备屏幕大小调整列数和间距</li>
                        <li>针对不同的使用场景选择合适的布局算法：
                            <ul class="ml-6 list-disc space-y-1 mt-1">
                                <li><code class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-700">default</code>: 适合普通瀑布流，优先考虑加载速度</li>
                                <li><code class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-700">balanced</code>: 适合需要平衡列高的场景，视觉更为统一</li>
                                <li><code class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-700">compact</code>: 适合追求紧凑布局的场景，最大化利用空间</li>
                            </ul>
                        </li>
                    </ul>

                    <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                        <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            性能优化提示
                        </h4>
                        <p class="text-sm text-blue-700 dark:text-blue-300">
                            对于有大量频繁更新的场景，可以考虑使用 <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">resizeDebounceTime</code> 属性调整窗口大小变化的响应灵敏度，以减少不必要的重新计算。在移动设备上，设置更大的延迟值（如 300-500ms）可以显著提升性能。
                        </p>
                    </div>

                    <p class="text-gray-700 dark:text-gray-300">
                        结合无限滚动和瀑布流组件，可以实现高效、美观的内容浏览体验。通过合理配置和优化，即使是在移动设备上处理大量内容时，也能保持流畅的用户体验。
                    </p>

                    <div class="flex flex-wrap gap-4 mt-6">
                        <div class="flex-1 min-w-[200px] rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                            <h4 class="font-medium mb-2 text-gray-900 dark:text-white">常见应用场景</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                <li>• 图片画廊与照片墙</li>
                                <li>• 商品展示列表</li>
                                <li>• 社交媒体信息流</li>
                                <li>• 文章卡片布局</li>
                                <li>• 动态内容瀑布流</li>
                            </ul>
                        </div>
                        
                        <div class="flex-1 min-w-[200px] rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                            <h4 class="font-medium mb-2 text-gray-900 dark:text-white">常见陷阱与解决方案</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                <li>• 图片未加载完成导致布局错误 → 启用图片预加载</li>
                                <li>• 列表频繁更新卡顿 → 使用虚拟滚动</li> 
                                <li>• 响应式布局不合理 → 优化断点配置</li>
                                <li>• 性能问题 → 减少数据量或分页加载</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import Waterfall from './Waterfall';

// 基本用法示例数据
const basicColumn = ref(3);
const basicItems = ref([
    {
        id: 1,
        title: '瀑布流示例图片1',
        description: '这是一张示例图片的描述内容，展示瀑布流的基本布局效果。',
        image: 'https://picsum.photos/400/200?random=1'
    },
    {
        id: 2,
        title: '瀑布流示例图片2',
        description: '不同高度的卡片会自动排列，形成紧凑的视觉效果。',
        image: 'https://picsum.photos/400/300?random=2'
    },
    {
        id: 3,
        title: '瀑布流示例图片3',
        description: '瀑布流布局特别适合展示图片、商品或卡片内容。',
        image: 'https://picsum.photos/400/250?random=3'
    },
    {
        id: 4,
        title: '瀑布流示例图片4',
        description: '用户可以持续浏览内容，非常适合展示大量信息。',
        image: 'https://picsum.photos/400/280?random=4'
    },
    {
        id: 5,
        title: '瀑布流示例图片5',
        description: '可以根据屏幕大小动态调整列数，实现响应式布局。',
        image: 'https://picsum.photos/400/220?random=5'
    },
    {
        id: 6,
        title: '瀑布流示例图片6',
        description: '图片加载完成后会重新计算布局，确保排列整齐。',
        image: 'https://picsum.photos/400/320?random=6'
    },
]);

// 布局完成回调
const handleLayoutComplete = (info: any) => {
    console.log('布局完成', info);
};
type Category = '设计' | '开发' | '用户体验' | '性能' | '动效';

// 主题适配示例数据
const themeItems = ref<{
    id: number;
    title: string;
    description: string;
    image: string;
    category: Category; // 使用明确的类型
    date: string;
    views: number;
}[]>([
    {
        id: 101,
        title: '深色模式优化体验',
        description: '暗色主题不仅可以减轻眼睛疲劳，还能节省设备电量。',
        image: 'https://picsum.photos/400/250?random=101',
        category: '设计',
        date: '2023-05-12',
        views: 1280
    },
    {
        id: 102,
        title: '响应式布局设计',
        description: '自动适应不同屏幕尺寸，提供最佳的用户体验。',
        image: 'https://picsum.photos/400/220?random=102',
        category: '开发',
        date: '2023-06-18',
        views: 943
    },
    {
        id: 103,
        title: '无障碍访问功能',
        description: '确保所有用户都能方便地访问和使用内容，提高可访问性。',
        image: 'https://picsum.photos/400/280?random=103',
        category: '用户体验',
        date: '2023-07-23',
        views: 756
    },
    {
        id: 104,
        title: '高效加载策略',
        description: '通过延迟加载和图像优化，提高页面加载速度，减少资源消耗。',
        image: 'https://picsum.photos/400/260?random=104',
        category: '性能',
        date: '2023-08-05',
        views: 1125
    },
    {
        id: 105,
        title: '动画效果增强',
        description: '适当的动画和过渡效果可以提升用户体验，增加应用的活力。',
        image: 'https://picsum.photos/400/230?random=105',
        category: '动效',
        date: '2023-09-14',
        views: 867
    }
]);

// 标签颜色
const tagColors: Record<Category, string> = {
    '设计': 'bg-purple-500 text-white dark:bg-purple-600',
    '开发': 'bg-blue-500 text-white dark:bg-blue-600',
    '用户体验': 'bg-green-500 text-white dark:bg-green-600',
    '性能': 'bg-orange-500 text-white dark:bg-orange-600',
    '动效': 'bg-pink-500 text-white dark:bg-pink-600'
};

// 动态加载示例
const dynamicWaterfall = ref<any>(null);
const dynamicItems = ref<{ id: number; title: string; description: string; image: string; date: string; views: number; }[]>([]);
const page = ref(0);
const loading = ref(false);

const generateItems = (pageNum: number, count: number) => {
    const items = [];
    const baseId = (pageNum - 1) * count + 201;

    for (let i = 0; i < count; i++) {
        const id = baseId + i;
        items.push({
            id,
            title: `动态加载项目 ${id - 200}`,
            description: `这是第${pageNum}页加载的内容，展示动态加载数据的能力。适用于大数据量的场景。`,
            image: `https://picsum.photos/400/${200 + Math.floor(Math.random() * 150)}?random=${id}`,
            date: `2023-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
            views: Math.floor(Math.random() * 1000) + 100
        });
    }

    return items;
};

const loadMoreItems = async () => {
    if (loading.value) return;

    loading.value = true;

    // 模拟异步请求
    await new Promise(resolve => setTimeout(resolve, 800));

    page.value += 1;
    const newItems = generateItems(page.value, 6);
    dynamicItems.value = [...dynamicItems.value, ...newItems];

    // 确保瀑布流布局更新
    nextTick(async () => {
        if (dynamicWaterfall.value && typeof dynamicWaterfall.value.reset === 'function') {
            await dynamicWaterfall.value.reset();
        }
        loading.value = false;
    });
};

// 自定义样式示例
const styledItems = ref([
    {
        id: 301,
        title: '卡片样式自定义',
        content: '瀑布流组件支持完全自定义卡片样式，包括渐变背景、动画效果等，可根据深浅主题自动适应。',
        author: '张三',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        tags: ['设计', '前端'],
        theme: 'blue'
    },
    {
        id: 302,
        title: '响应式设计',
        content: '这是一个响应式设计的示例，可以根据屏幕大小自动调整列数。自定义样式可以让您的应用更具个性化，同时保持良好的用户体验。',
        author: '李四',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        tags: ['开发', 'Vue', 'UI'],
        theme: 'green'
    },
    {
        id: 303,
        title: '简约风格',
        content: '瀑布流布局非常适合展示各种长度不一的内容，简约的设计风格可以让用户更专注于内容本身。',
        author: '王五',
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
        tags: ['简约'],
        theme: 'orange'
    },
    {
        id: 304,
        title: '自定义主题色',
        content: '您可以为每个卡片应用不同的主题色彩，创造丰富的视觉体验。在深色模式下，色彩会自动调整以提供更舒适的阅读体验。',
        author: '赵六',
        avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
        tags: ['设计', '创意', '色彩'],
        theme: 'purple'
    }
]);

// 初始化加载动态数据
onMounted(() => {
    loadMoreItems();
});
</script>

<style scoped>
.waterfall-component {
    will-change: transform;
}

.m-waterfall-item {
    backface-visibility: hidden;
    transform: translateZ(0);
}

/* 暗黑模式过渡效果 */
.dark .m-waterfall-item {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* 加载动画效果 */
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

.pulse-animation {
    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
