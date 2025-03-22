<template>
    <div class="timeline-demo-container p-6 transition-colors duration-300">
        <h1 class="text-2xl font-bold mb-8 text-gray-800 dark:text-white transition-colors duration-300">
            Timeline 时间轴组件
        </h1>

        <!-- 基本用法展示 - 美化样式 -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                基本用法
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <Timeline>
                    <TimelineItem label="2023年10月">
                        <div
                            class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30 hover:shadow-md transition-all duration-300 transform hover:scale-[1.01]">
                            <h3 class="font-medium text-blue-600 dark:text-blue-400 mb-2 flex items-center">
                                <i class="icon-[carbon--rocket] mr-2"></i>
                                项目启动
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300">开始规划项目并组建团队，确定项目目标和初步时间表</p>
                            <div
                                class="flex justify-between items-center mt-3 text-xs text-gray-500 dark:text-gray-400">
                                <span>负责人: 张三</span>
                                <span
                                    class="px-2 py-1 bg-blue-100 dark:bg-blue-800/30 text-blue-600 dark:text-blue-300 rounded">进行中</span>
                            </div>
                        </div>
                    </TimelineItem>
                    <TimelineItem color="green" label="2023年11月">
                        <div
                            class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800/30 hover:shadow-md transition-all duration-300 transform hover:scale-[1.01]">
                            <h3 class="font-medium text-green-600 dark:text-green-400 mb-2 flex items-center">
                                <i class="icon-[carbon--development] mr-2"></i>
                                开发阶段
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300">进入开发阶段，完成核心功能的设计和实现</p>
                            <div
                                class="flex justify-between items-center mt-3 text-xs text-gray-500 dark:text-gray-400">
                                <span>负责人: 李四</span>
                                <span
                                    class="px-2 py-1 bg-green-100 dark:bg-green-800/30 text-green-600 dark:text-green-300 rounded">按计划进行</span>
                            </div>
                        </div>
                    </TimelineItem>
                    <TimelineItem color="red" label="2023年12月">
                        <div
                            class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800/30 hover:shadow-md transition-all duration-300 transform hover:scale-[1.01]">
                            <h3 class="font-medium text-red-600 dark:text-red-400 mb-2 flex items-center">
                                <i class="icon-[carbon--debug] mr-2"></i>
                                测试阶段
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300">进行全面测试和修复，确保产品质量和性能</p>
                            <div
                                class="flex justify-between items-center mt-3 text-xs text-gray-500 dark:text-gray-400">
                                <span>负责人: 王五</span>
                                <span
                                    class="px-2 py-1 bg-red-100 dark:bg-red-800/30 text-red-600 dark:text-red-300 rounded">待开始</span>
                            </div>
                        </div>
                    </TimelineItem>
                    <TimelineItem color="#8434eb" label="2024年1月">
                        <div
                            class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800/30 hover:shadow-md transition-all duration-300 transform hover:scale-[1.01]">
                            <h3 class="font-medium text-purple-600 dark:text-purple-400 mb-2 flex items-center">
                                <i class="icon-[carbon--deploy] mr-2"></i>
                                产品发布
                            </h3>
                            <p class="text-gray-600 dark:text-gray-300">产品正式发布上线，开始市场推广和用户反馈收集</p>
                            <div
                                class="flex justify-between items-center mt-3 text-xs text-gray-500 dark:text-gray-400">
                                <span>负责人: 赵六</span>
                                <span
                                    class="px-2 py-1 bg-purple-100 dark:bg-purple-800/30 text-purple-600 dark:text-purple-300 rounded">计划中</span>
                            </div>
                        </div>
                    </TimelineItem>
                </Timeline>
            </div>
        </section>

        <!-- 不同模式展示 -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                不同模式
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                    <h3 class="font-medium mb-4 text-gray-700 dark:text-gray-200">左侧模式 (left)</h3>
                    <Timeline mode="left">
                        <TimelineItem label="上午 8:00">早会</TimelineItem>
                        <TimelineItem label="上午 10:30">项目讨论</TimelineItem>
                        <TimelineItem label="下午 2:00">客户会议</TimelineItem>
                    </Timeline>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                    <h3 class="font-medium mb-4 text-gray-700 dark:text-gray-200">右侧模式 (right)</h3>
                    <Timeline mode="right">
                        <TimelineItem label="上午 8:00">早会</TimelineItem>
                        <TimelineItem label="上午 10:30">项目讨论</TimelineItem>
                        <TimelineItem label="下午 2:00">客户会议</TimelineItem>
                    </Timeline>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                    <h3 class="font-medium mb-4 text-gray-700 dark:text-gray-200">交替模式 (alternate)</h3>
                    <Timeline mode="alternate">
                        <TimelineItem label="第一步">需求分析</TimelineItem>
                        <TimelineItem label="第二步">原型设计</TimelineItem>
                        <TimelineItem label="第三步">开发编码</TimelineItem>
                        <TimelineItem label="第四步">测试发布</TimelineItem>
                    </Timeline>
                </div>
            </div>
        </section>

        <!-- 自定义节点和颜色 -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                自定义节点和颜色
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <Timeline>
                    <TimelineItem>
                        <template #dot>
                            <div
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 transition-colors duration-300">
                                <i class="icon-[carbon--idea] text-blue-500 dark:text-blue-300"></i>
                            </div>
                        </template>
                        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md transition-colors duration-300">
                            <h3 class="font-medium text-blue-600 dark:text-blue-400">创意构思</h3>
                            <p class="text-gray-600 dark:text-gray-300">头脑风暴和创意讨论</p>
                        </div>
                    </TimelineItem>
                    <TimelineItem>
                        <template #dot>
                            <div
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-800 transition-colors duration-300">
                                <i class="icon-[carbon--document] text-green-500 dark:text-green-300"></i>
                            </div>
                        </template>
                        <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded-md transition-colors duration-300">
                            <h3 class="font-medium text-green-600 dark:text-green-400">需求文档</h3>
                            <p class="text-gray-600 dark:text-gray-300">撰写详细的需求文档</p>
                        </div>
                    </TimelineItem>
                    <TimelineItem>
                        <template #dot>
                            <div
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-800 transition-colors duration-300">
                                <i class="icon-[carbon--code] text-yellow-500 dark:text-yellow-300"></i>
                            </div>
                        </template>
                        <div class="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md transition-colors duration-300">
                            <h3 class="font-medium text-yellow-600 dark:text-yellow-400">开发实现</h3>
                            <p class="text-gray-600 dark:text-gray-300">开始编码实现功能</p>
                        </div>
                    </TimelineItem>
                    <TimelineItem>
                        <template #dot>
                            <div
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-800 transition-colors duration-300">
                                <i class="icon-[carbon--launch] text-red-500 dark:text-red-300"></i>
                            </div>
                        </template>
                        <div class="p-3 bg-red-50 dark:bg-red-900/20 rounded-md transition-colors duration-300">
                            <h3 class="font-medium text-red-600 dark:text-red-400">发布上线</h3>
                            <p class="text-gray-600 dark:text-gray-300">产品部署和发布</p>
                        </div>
                    </TimelineItem>
                </Timeline>
            </div>
        </section>

        <!-- 倒序排列 - 修复切换无反应问题 -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                倒序排列
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="flex justify-end mb-4">
                    <button
                        class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300"
                        @click="toggleReverseTimeline">
                        {{ reverseTimeline ? '恢复正序' : '切换为倒序' }}
                    </button>
                </div>
                <!-- 添加key强制重新渲染整个时间轴 -->
                <div class="order-timeline-container" :key="`timeline-rev-${reverseTimelineKey}`">
                    <Timeline :reverse="reverseTimeline">
                        <TimelineItem label="2021年" key="year-2021" class="timeline-year-item">
                            <div
                                class="p-3 bg-gray-50 dark:bg-gray-900/30 rounded-md border border-gray-200 dark:border-gray-700 transition-all duration-300">
                                <h3 class="font-medium">公司成立</h3>
                                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">创始团队组建，确定公司愿景和使命</p>
                            </div>
                        </TimelineItem>
                        <TimelineItem label="2022年" key="year-2022" class="timeline-year-item">
                            <div
                                class="p-3 bg-gray-50 dark:bg-gray-900/30 rounded-md border border-gray-200 dark:border-gray-700 transition-all duration-300">
                                <h3 class="font-medium">产品研发</h3>
                                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">核心产品开发和初步市场测试</p>
                            </div>
                        </TimelineItem>
                        <TimelineItem label="2023年" key="year-2023" class="timeline-year-item">
                            <div
                                class="p-3 bg-gray-50 dark:bg-gray-900/30 rounded-md border border-gray-200 dark:border-gray-700 transition-all duration-300">
                                <h3 class="font-medium">业务拓展</h3>
                                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">市场份额增长，业务范围扩大</p>
                            </div>
                        </TimelineItem>
                        <TimelineItem label="2024年" key="year-2024" class="timeline-year-item">
                            <div
                                class="p-3 bg-gray-50 dark:bg-gray-900/30 rounded-md border border-gray-200 dark:border-gray-700 transition-all duration-300">
                                <h3 class="font-medium">全球化布局</h3>
                                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">国际市场开拓，建立全球团队</p>
                            </div>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </section>

        <!-- 进行中状态 -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                进行中状态
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <Timeline :pending="pendingText">
                    <TimelineItem color="green" label="已完成">
                        <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded-md transition-colors duration-300">
                            <h3 class="font-medium text-green-600 dark:text-green-400">第一阶段</h3>
                            <p class="text-gray-600 dark:text-gray-300">已完成初步规划</p>
                        </div>
                    </TimelineItem>
                    <TimelineItem color="green" label="已完成">
                        <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded-md transition-colors duration-300">
                            <h3 class="font-medium text-green-600 dark:text-green-400">第二阶段</h3>
                            <p class="text-gray-600 dark:text-gray-300">已完成原型设计</p>
                        </div>
                    </TimelineItem>
                    <TimelineItem color="blue" label="进行中">
                        <div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md transition-colors duration-300">
                            <h3 class="font-medium text-blue-600 dark:text-blue-400">第三阶段</h3>
                            <p class="text-gray-600 dark:text-gray-300">正在开发中...</p>
                        </div>
                    </TimelineItem>
                </Timeline>
            </div>
        </section>

        <!-- 交互式时间轴 - 完全重构，解决渲染问题 -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                交互式时间轴
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <!-- 控制按钮区域 -->
                <div class="flex flex-wrap items-center gap-2 mb-4">
                    <div class="mr-2 text-gray-600 dark:text-gray-300">添加项目:</div>
                    <button v-for="(item, index) in interactiveItems" :key="index"
                        class="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors duration-300"
                        @click="() => handleAddItem(index)">
                        <i :class="`icon-[carbon--${getItemIcon(item.color)}] mr-1`"></i>
                        {{ item.title }}
                    </button>
                    <button
                        class="px-3 py-1 text-sm bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-800/30 text-red-600 dark:text-red-400 rounded-md transition-colors duration-300"
                        @click="() => handleClearItems()">
                        <i class="icon-[carbon--trash-can] mr-1"></i>
                        清空
                    </button>
                </div>

                <!-- 空状态展示 -->
                <div v-if="!interactiveItems || currentItems.length === 0"
                    class="flex flex-col items-center justify-center h-40 text-gray-400 dark:text-gray-500 transition-colors duration-300">
                    <i class="icon-[carbon--time] text-4xl mb-3"></i>
                    <p>点击上方按钮添加时间线项目</p>
                </div>

                <!-- 时间轴内容 -->
                <div v-else class="mt-6 static-timeline-container">
                    <!-- 控制操作区域 -->
                    <div class="flex justify-between mb-4">
                        <div class="text-gray-600 dark:text-gray-300">已添加 {{ currentItems.length }} 个项目</div>
                        <div class="flex gap-2">
                            <button @click="handleToggleAllExpand"
                                class="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors duration-300">
                                <i :class="`icon-[carbon--${allExpanded ? 'collapse-all' : 'expand-all'}] mr-1`"></i>
                                {{ allExpanded ? '全部折叠' : '全部展开' }}
                            </button>
                            <button @click="() => { enableSorting = !enableSorting }"
                                class="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-800/30 text-blue-600 dark:text-blue-400 rounded-md transition-colors duration-300">
                                <i :class="`icon-[carbon--${enableSorting ? 'checkmark' : 'draggable'}] mr-1`"></i>
                                {{ enableSorting ? '完成排序' : '排序项目' }}
                            </button>
                        </div>
                    </div>

                    <!-- 手动渲染Timeline组件和TimelineItem -->
                    <div class="timeline-wrapper" :key="`interactive-timeline-${reRenderKey}`">
                        <div class="timeline relative pl-0">
                            <div class="timeline-items relative z-10">
                                <!-- 手动构建每个Timeline项 -->
                                <div v-for="(item, index) in currentItems" :key="`manual-item-${item.id}`"
                                    class="timeline-item-wrapper">
                                    <div class="timeline-item relative flex mb-8 last:mb-0">
                                        <!-- 标签部分 - 添加固定宽度 -->
                                        <div
                                            class="timeline-label text-sm text-right mr-4 text-gray-600 dark:text-gray-300 min-w-[80px] w-[100px]">
                                            {{ item.date }}
                                        </div>

                                        <!-- 时间点 -->
                                        <div
                                            class="timeline-item-head flex-none flex items-center justify-center z-10 relative">
                                            <div
                                                :class="`h-5 w-5 rounded-full border-4 border-white dark:border-gray-800 shadow-sm bg-${item.color}-500 dark:bg-${item.color}-400`">
                                            </div>
                                        </div>

                                        <!-- 内容区域 -->
                                        <div class="timeline-item-content flex-auto pb-6 pl-6">
                                            <div
                                                class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                                                <!-- 标题和操作按钮 -->
                                                <div class="flex justify-between items-center">
                                                    <h3 class="font-medium flex items-center"
                                                        :class="getItemTextClass(item.color)">
                                                        <i
                                                            :class="`icon-[carbon--${getItemIcon(item.color)}] mr-2`"></i>
                                                        {{ item.title }}
                                                    </h3>
                                                    <div class="flex gap-1">
                                                        <!-- 排序按钮 -->
                                                        <template v-if="enableSorting">
                                                            <button @click="() => handleMoveItem(index, index - 1)"
                                                                :disabled="index === 0" :class="[
                                                                    'p-1 rounded transition-colors duration-200',
                                                                    index === 0 ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                                ]">
                                                                <i class="icon-[carbon--arrow-up]"></i>
                                                            </button>
                                                            <button @click="() => handleMoveItem(index, index + 1)"
                                                                :disabled="index === currentItems.length - 1" :class="[
                                                                    'p-1 rounded transition-colors duration-200',
                                                                    index === currentItems.length - 1 ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                                ]">
                                                                <i class="icon-[carbon--arrow-down]"></i>
                                                            </button>
                                                        </template>

                                                        <!-- 展开/折叠按钮 -->
                                                        <button @click="() => handleToggleExpand(item)"
                                                            class="p-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-200">
                                                            <i
                                                                :class="`icon-[carbon--${item.expanded ? 'collapse-all' : 'expand-all'}]`"></i>
                                                        </button>

                                                        <!-- 删除按钮 -->
                                                        <button @click="() => handleRemoveItem(index)"
                                                            class="p-1 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200">
                                                            <i class="icon-[carbon--close]"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                <!-- 展开后的内容 -->
                                                <div v-if="item.expanded"
                                                    :class="['mt-3 overflow-hidden transition-all duration-300', getItemColorClass(item.color)]">
                                                    <p class="text-gray-600 dark:text-gray-300 p-3 rounded-md">{{
                                                        item.content
                                                        }}</p>
                                                    <div
                                                        class="flex justify-between items-center text-xs mt-2 text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-700">
                                                        <span>{{ formatDate(item.timestamp) }}</span>
                                                        <span
                                                            :class="`px-2 py-1 rounded ${getItemBadgeClass(item.color)}`">{{
                                                                item.date }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 自定义布局 -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                自定义布局与风格
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <Timeline mode="alternate">
                    <TimelineItem label="2023年1月">
                        <template #dot>
                            <div
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-800 transition-colors duration-300">
                                <i class="icon-[carbon--calendar] text-indigo-500 dark:text-indigo-300"></i>
                            </div>
                        </template>
                        <div
                            class="p-4 border border-indigo-200 dark:border-indigo-800 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105">
                            <h3 class="font-medium text-indigo-600 dark:text-indigo-400">产品规划</h3>
                            <p class="text-gray-600 dark:text-gray-300 mt-2">制定年度产品规划和路线图</p>
                            <div class="mt-3 flex gap-2">
                                <span
                                    class="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md">规划</span>
                                <span
                                    class="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md">战略</span>
                            </div>
                        </div>
                    </TimelineItem>
                    <TimelineItem label="2023年3月">
                        <template #dot>
                            <div
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-800 transition-colors duration-300">
                                <i class="icon-[carbon--pen] text-pink-500 dark:text-pink-300"></i>
                            </div>
                        </template>
                        <div
                            class="p-4 border border-pink-200 dark:border-pink-800 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105">
                            <h3 class="font-medium text-pink-600 dark:text-pink-400">设计阶段</h3>
                            <p class="text-gray-600 dark:text-gray-300 mt-2">完成产品UI设计和用户体验优化</p>
                            <div class="mt-3 flex gap-2">
                                <span
                                    class="px-2 py-1 text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-md">设计</span>
                                <span
                                    class="px-2 py-1 text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-md">UI/UX</span>
                            </div>
                        </div>
                    </TimelineItem>
                    <TimelineItem label="2023年5月">
                        <template #dot>
                            <div
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-800 transition-colors duration-300">
                                <i class="icon-[carbon--development] text-amber-500 dark:text-amber-300"></i>
                            </div>
                        </template>
                        <div
                            class="p-4 border border-amber-200 dark:border-amber-800 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105">
                            <h3 class="font-medium text-amber-600 dark:text-amber-400">开发阶段</h3>
                            <p class="text-gray-600 dark:text-gray-300 mt-2">核心功能开发和技术架构实现</p>
                            <div class="mt-3 flex gap-2">
                                <span
                                    class="px-2 py-1 text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-md">开发</span>
                                <span
                                    class="px-2 py-1 text-xs bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-md">技术</span>
                            </div>
                        </div>
                    </TimelineItem>
                    <TimelineItem label="2023年7月">
                        <template #dot>
                            <div
                                class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-800 transition-colors duration-300">
                                <i class="icon-[carbon--delivery] text-teal-500 dark:text-teal-300"></i>
                            </div>
                        </template>
                        <div
                            class="p-4 border border-teal-200 dark:border-teal-800 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105">
                            <h3 class="font-medium text-teal-600 dark:text-teal-400">发布阶段</h3>
                            <p class="text-gray-600 dark:text-gray-300 mt-2">产品上线和用户推广活动</p>
                            <div class="mt-3 flex gap-2">
                                <span
                                    class="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-md">上线</span>
                                <span
                                    class="px-2 py-1 text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-md">推广</span>
                            </div>
                        </div>
                    </TimelineItem>
                </Timeline>
            </div>
        </section>

        <!-- 与其他组件结合 -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                与其他组件结合
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <Timeline mode="left">
                    <TimelineItem label="媒体内容">
                        <div
                            class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                            <div class="aspect-video bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                                <i class="icon-[carbon--play-filled] text-4xl text-blue-500"></i>
                            </div>
                            <div class="p-3">
                                <h3 class="font-medium text-gray-800 dark:text-gray-200">产品视频演示</h3>
                                <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">展示产品功能与亮点</p>
                            </div>
                        </div>
                    </TimelineItem>
                    <TimelineItem label="进度情况">
                        <div class="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg transition-colors duration-300">
                            <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">项目进度</h3>
                            <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div class="h-full bg-blue-500 dark:bg-blue-400 transition-all duration-500 ease-out"
                                    :style="{ width: `${progressValue}%` }"></div>
                            </div>
                            <div class="flex justify-between mt-1">
                                <span class="text-xs text-gray-500 dark:text-gray-400">开始</span>
                                <span class="text-xs text-gray-500 dark:text-gray-400">{{ progressValue }}%</span>
                                <span class="text-xs text-gray-500 dark:text-gray-400">完成</span>
                            </div>
                            <button
                                class="mt-3 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                                @click="updateProgress">
                                更新进度
                            </button>
                        </div>
                    </TimelineItem>
                    <TimelineItem label="团队协作">
                        <div class="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg transition-colors duration-300">
                            <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">团队成员</h3>
                            <div class="flex -space-x-2 overflow-hidden">
                                <div v-for="(color, index) in ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500']"
                                    :key="index"
                                    :class="[color, 'w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-white text-xs font-medium transition-all duration-300']">
                                    {{ String.fromCharCode(65 + index) }}
                                </div>
                                <div
                                    class="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 text-xs font-medium transition-all duration-300">
                                    +3
                                </div>
                            </div>
                        </div>
                    </TimelineItem>
                </Timeline>
            </div>
        </section>

        <!-- 新增：小结与最佳实践 -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                小结与最佳实践
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="prose dark:prose-invert max-w-none">
                    <h3
                        class="text-lg font-medium text-gray-800 dark:text-gray-100 mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
                        使用场景</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-3">Timeline 时间轴组件适用于以下场景：</p>
                    <ul class="space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                        <li class="flex items-start">
                            <i
                                class="icon-[carbon--checkmark] text-green-500 dark:text-green-400 mt-1 mr-2 flex-shrink-0"></i>
                            <span>展示时间流程或工作流程的进展</span>
                        </li>
                        <li class="flex items-start">
                            <i
                                class="icon-[carbon--checkmark] text-green-500 dark:text-green-400 mt-1 mr-2 flex-shrink-0"></i>
                            <span>显示项目各阶段的重要里程碑</span>
                        </li>
                        <li class="flex items-start">
                            <i
                                class="icon-[carbon--checkmark] text-green-500 dark:text-green-400 mt-1 mr-2 flex-shrink-0"></i>
                            <span>按时间顺序呈现事件或历史记录</span>
                        </li>
                        <li class="flex items-start">
                            <i
                                class="icon-[carbon--checkmark] text-green-500 dark:text-green-400 mt-1 mr-2 flex-shrink-0"></i>
                            <span>展示任务的进度和状态</span>
                        </li>
                    </ul>

                    <h3
                        class="text-lg font-medium text-gray-800 dark:text-gray-100 mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
                        使用建议</h3>
                    <ul class="space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                        <li class="flex items-start">
                            <i
                                class="icon-[carbon--arrow-right] text-blue-500 dark:text-blue-400 mt-1 mr-2 flex-shrink-0"></i>
                            <span>为每个时间点添加明确的标签，帮助用户理解时间顺序</span>
                        </li>
                        <li class="flex items-start">
                            <i
                                class="icon-[carbon--arrow-right] text-blue-500 dark:text-blue-400 mt-1 mr-2 flex-shrink-0"></i>
                            <span>使用不同颜色区分不同类型或状态的事件</span>
                        </li>
                        <li class="flex items-start">
                            <i
                                class="icon-[carbon--arrow-right] text-blue-500 dark:text-blue-400 mt-1 mr-2 flex-shrink-0"></i>
                            <span>内容较多时，考虑使用可折叠的内容区域</span>
                        </li>
                        <li class="flex items-start">
                            <i
                                class="icon-[carbon--arrow-right] text-blue-500 dark:text-blue-400 mt-1 mr-2 flex-shrink-0"></i>
                            <span>使用合适的自定义图标增强视觉表现力</span>
                        </li>
                        <li class="flex items-start">
                            <i
                                class="icon-[carbon--arrow-right] text-blue-500 dark:text-blue-400 mt-1 mr-2 flex-shrink-0"></i>
                            <span>需要双向展示时使用 alternate 模式</span>
                        </li>
                    </ul>

                    <h3
                        class="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
                        最佳实践</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
                        <div
                            class="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                            <div
                                class="bg-green-50 dark:bg-green-900/20 p-3 border-b dark:border-gray-700 flex items-center">
                                <i class="icon-[carbon--checkmark-filled] text-green-500 dark:text-green-400 mr-2"></i>
                                <h4 class="text-green-600 dark:text-green-400 font-medium">推荐用法</h4>
                            </div>
                            <div class="p-4 bg-white dark:bg-gray-800">
                                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li class="flex items-start">
                                        <i
                                            class="icon-[carbon--dot-mark] text-green-500 dark:text-green-400 mt-1.5 mr-2 flex-shrink-0 text-xs"></i>
                                        <span>使用清晰、简洁的标签文本</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i
                                            class="icon-[carbon--dot-mark] text-green-500 dark:text-green-400 mt-1.5 mr-2 flex-shrink-0 text-xs"></i>
                                        <span>为不同状态的节点使用不同颜色</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i
                                            class="icon-[carbon--dot-mark] text-green-500 dark:text-green-400 mt-1.5 mr-2 flex-shrink-0 text-xs"></i>
                                        <span>保持内容区域的视觉整洁</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i
                                            class="icon-[carbon--dot-mark] text-green-500 dark:text-green-400 mt-1.5 mr-2 flex-shrink-0 text-xs"></i>
                                        <span>使用恰当的图标增强信息传达</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i
                                            class="icon-[carbon--dot-mark] text-green-500 dark:text-green-400 mt-1.5 mr-2 flex-shrink-0 text-xs"></i>
                                        <span>确保时间或事件顺序的逻辑性</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            class="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                            <div
                                class="bg-red-50 dark:bg-red-900/20 p-3 border-b dark:border-gray-700 flex items-center">
                                <i class="icon-[carbon--close-filled] text-red-500 dark:text-red-400 mr-2"></i>
                                <h4 class="text-red-600 dark:text-red-400 font-medium">避免用法</h4>
                            </div>
                            <div class="p-4 bg-white dark:bg-gray-800">
                                <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li class="flex items-start">
                                        <i
                                            class="icon-[carbon--dot-mark] text-red-500 dark:text-red-400 mt-1.5 mr-2 flex-shrink-0 text-xs"></i>
                                        <span>在单个时间轴中混合使用多种模式</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i
                                            class="icon-[carbon--dot-mark] text-red-500 dark:text-red-400 mt-1.5 mr-2 flex-shrink-0 text-xs"></i>
                                        <span>在内容区域放置过于复杂的组件</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i
                                            class="icon-[carbon--dot-mark] text-red-500 dark:text-red-400 mt-1.5 mr-2 flex-shrink-0 text-xs"></i>
                                        <span>标签文字过长导致溢出或换行</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i
                                            class="icon-[carbon--dot-mark] text-red-500 dark:text-red-400 mt-1.5 mr-2 flex-shrink-0 text-xs"></i>
                                        <span>使用过多相似颜色导致区分困难</span>
                                    </li>
                                    <li class="flex items-start">
                                        <i
                                            class="icon-[carbon--dot-mark] text-red-500 dark:text-red-400 mt-1.5 mr-2 flex-shrink-0 text-xs"></i>
                                        <span>没有考虑移动设备上的显示效果</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 新增：API 文档 -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                API 文档
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="max-w-none">
                    <div class="mb-8">
                        <div class="flex items-center mb-4">
                            <span
                                class="text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-md px-2 py-1 text-sm font-medium mr-2">组件</span>
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">Timeline 时间轴</h3>
                        </div>
                        <p
                            class="text-gray-600 dark:text-gray-300 mb-4 border-b border-gray-100 dark:border-gray-700 pb-4">
                            用于展示垂直的时间轴流程，支持自定义节点和内容。
                        </p>

                        <h4 class="font-medium text-gray-700 dark:text-gray-200 mb-3 mt-4 flex items-center">
                            <i class="icon-[carbon--code] mr-2 text-blue-500 dark:text-blue-400"></i>属性
                        </h4>
                        <div class="overflow-x-auto bg-gray-50 dark:bg-gray-900/40 rounded-lg mb-6">
                            <table class="min-w-full text-sm">
                                <thead>
                                    <tr class="bg-gray-100 dark:bg-gray-800">
                                        <th
                                            class="py-3 px-4 text-left font-medium text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
                                            参数</th>
                                        <th
                                            class="py-3 px-4 text-left font-medium text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
                                            说明</th>
                                        <th
                                            class="py-3 px-4 text-left font-medium text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
                                            类型</th>
                                        <th
                                            class="py-3 px-4 text-left font-medium text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
                                            默认值</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200">
                                        <td
                                            class="py-3 px-4 text-blue-600 dark:text-blue-400 font-medium border-b dark:border-gray-700/50">
                                            mode</td>
                                        <td
                                            class="py-3 px-4 text-gray-600 dark:text-gray-300 border-b dark:border-gray-700/50">
                                            时间轴的展示模式</td>
                                        <td class="py-3 px-4 border-b dark:border-gray-700/50"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono text-xs">'left'
                                        | 'right' | 'alternate'</code></td>
                                        <td class="py-3 px-4 border-b dark:border-gray-700/50"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-orange-600 dark:text-orange-400 font-mono text-xs">'left'</code>
                                        </td>
                                    </tr>
                                    <tr
                                        class="hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200">
                                        <td
                                            class="py-3 px-4 text-blue-600 dark:text-blue-400 font-medium border-b dark:border-gray-700/50">
                                            pending</td>
                                        <td
                                            class="py-3 px-4 text-gray-600 dark:text-gray-300 border-b dark:border-gray-700/50">
                                            是否展示幽灵节点，或要展示的内容</td>
                                        <td class="py-3 px-4 border-b dark:border-gray-700/50"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono text-xs">boolean
                                        | string | VNode</code></td>
                                        <td class="py-3 px-4 border-b dark:border-gray-700/50"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-orange-600 dark:text-orange-400 font-mono text-xs">false</code>
                                        </td>
                                    </tr>
                                    <tr
                                        class="hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200">
                                        <td
                                            class="py-3 px-4 text-blue-600 dark:text-blue-400 font-medium border-b dark:border-gray-700/50">
                                            pendingDot</td>
                                        <td
                                            class="py-3 px-4 text-gray-600 dark:text-gray-300 border-b dark:border-gray-700/50">
                                            幽灵节点的图点</td>
                                        <td class="py-3 px-4 border-b dark:border-gray-700/50"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono text-xs">string
                                        | VNode</code></td>
                                        <td class="py-3 px-4 border-b dark:border-gray-700/50"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-orange-600 dark:text-orange-400 font-mono text-xs">默认加载图标</code>
                                        </td>
                                    </tr>
                                    <tr
                                        class="hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200">
                                        <td class="py-3 px-4 text-blue-600 dark:text-blue-400 font-medium">reverse</td>
                                        <td class="py-3 px-4 text-gray-600 dark:text-gray-300">是否倒序排列</td>
                                        <td class="py-3 px-4"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono text-xs">boolean</code>
                                        </td>
                                        <td class="py-3 px-4"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-orange-600 dark:text-orange-400 font-mono text-xs">false</code>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center mb-4">
                            <span
                                class="text-green-500 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-md px-2 py-1 text-sm font-medium mr-2">组件</span>
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">TimelineItem 时间轴项</h3>
                        </div>
                        <p
                            class="text-gray-600 dark:text-gray-300 mb-4 border-b border-gray-100 dark:border-gray-700 pb-4">
                            时间轴的单个节点，用于展示具体内容。
                        </p>

                        <h4 class="font-medium text-gray-700 dark:text-gray-200 mb-3 mt-4 flex items-center">
                            <i class="icon-[carbon--code] mr-2 text-blue-500 dark:text-blue-400"></i>属性
                        </h4>
                        <div class="overflow-x-auto bg-gray-50 dark:bg-gray-900/40 rounded-lg mb-6">
                            <table class="min-w-full text-sm">
                                <thead>
                                    <tr class="bg-gray-100 dark:bg-gray-800">
                                        <th
                                            class="py-3 px-4 text-left font-medium text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
                                            参数</th>
                                        <th
                                            class="py-3 px-4 text左 font-medium text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
                                            说明</th>
                                        <th
                                            class="py-3 px-4 text-left font-medium text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
                                            类型</th>
                                        <th
                                            class="py-3 px-4 text-left font-medium text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
                                            默认值</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200">
                                        <td
                                            class="py-3 px-4 text-blue-600 dark:text-blue-400 font-medium border-b dark:border-gray-700/50">
                                            color</td>
                                        <td
                                            class="py-3 px-4 text-gray-600 dark:text-gray-300 border-b dark:border-gray-700/50">
                                            节点颜色</td>
                                        <td class="py-3 px-4 border-b dark:border-gray-700/50"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono text-xs">'blue'
                                        | 'red' | 'green' | string</code></td>
                                        <td class="py-3 px-4 border-b dark:border-gray-700/50"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-orange-600 dark:text-orange-400 font-mono text-xs">'blue'</code>
                                        </td>
                                    </tr>
                                    <tr
                                        class="hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200">
                                        <td
                                            class="py-3 px-4 text-blue-600 dark:text-blue-400 font-medium border-b dark:border-gray-700/50">
                                            dot</td>
                                        <td
                                            class="py-3 px-4 text-gray-600 dark:text-gray-300 border-b dark:border-gray-700/50">
                                            自定义时间轴点</td>
                                        <td class="py-3 px-4 border-b dark:border-gray-700/50"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono text-xs">string
                                        | VNode</code></td>
                                        <td class="py-3 px-4 border-b dark:border-gray-700/50"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-orange-600 dark:text-orange-400 font-mono text-xs">默认圆点</code>
                                        </td>
                                    </tr>
                                    <tr
                                        class="hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200">
                                        <td
                                            class="py-3 px-4 text-blue-600 dark:text-blue-400 font-medium border-b dark:border-gray-700/50">
                                            label</td>
                                        <td
                                            class="py-3 px-4 text-gray-600 dark:text-gray-300 border-b dark:border-gray-700/50">
                                            标签文本</td>
                                        <td class="py-3 px-4 border-b dark:border-gray-700/50"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono text-xs">string
                                        | VNode</code></td>
                                        <td class="py-3 px-4 border-b dark:border-gray-700/50"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-orange-600 dark:text-orange-400 font-mono text-xs">-</code>
                                        </td>
                                    </tr>
                                    <tr
                                        class="hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200">
                                        <td class="py-3 px-4 text-blue-600 dark:text-blue-400 font-medium">position</td>
                                        <td class="py-3 px-4 text-gray-600 dark:text-gray-300">
                                            自定义节点位置，优先级高于Timeline的mode</td>
                                        <td class="py-3 px-4"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-pink-600 dark:text-pink-400 font-mono text-xs">'left'
                                        | 'right'</code></td>
                                        <td class="py-3 px-4"><code
                                                class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-orange-600 dark:text-orange-400 font-mono text-xs">-</code>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 class="font-medium text-gray-700 dark:text-gray-200 mb-3 mt-4 flex items-center">
                            <i class="icon-[carbon--terminal] mr-2 text-blue-500 dark:text-blue-400"></i>插槽
                        </h4>
                        <div class="overflow-x-auto bg-gray-50 dark:bg-gray-900/40 rounded-lg mb-6">
                            <table class="min-w-full text-sm">
                                <thead>
                                    <tr class="bg-gray-100 dark:bg-gray-800">
                                        <th
                                            class="py-3 px-4 text-left font-medium text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
                                            名称</th>
                                        <th
                                            class="py-3 px-4 text-left font-medium text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">
                                            说明</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200">
                                        <td
                                            class="py-3 px-4 text-blue-600 dark:text-blue-400 font-medium border-b dark:border-gray-700/50">
                                            default</td>
                                        <td
                                            class="py-3 px-4 text-gray-600 dark:text-gray-300 border-b dark:border-gray-700/50">
                                            时间轴项的内容</td>
                                    </tr>
                                    <tr
                                        class="hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200">
                                        <td class="py-3 px-4 text-blue-600 dark:text-blue-400 font-medium">dot</td>
                                        <td class="py-3 px-4 text-gray-600 dark:text-gray-300">自定义时间轴节点</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mt-6 flex items-start shadow-sm">
                            <i
                                class="icon-[carbon--information] text-blue-500 dark:text-blue-400 mt-1 mr-3 flex-shrink-0"></i>
                            <div>
                                <h4 class="text-blue-600 dark:text-blue-400 font-medium mb-1">提示</h4>
                                <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    Timeline 组件在各种模式下都会自动适应父容器宽度。在响应式布局中，推荐使用 left 模式以获得最佳的移动端体验。
                                    使用 alternate 模式时，需要确保有足够的空间展示双侧内容。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { Timeline, TimelineItem } from './Timeline';

// 倒序排列示例 - 增加key来强制重新渲染
const reverseTimeline = ref(false);
const reverseTimelineKey = ref(0);

// 切换倒序并强制重新渲染
function toggleReverseTimeline() {
    reverseTimeline.value = !reverseTimeline.value;
    reverseTimelineKey.value++; // 增加key触发重新渲染

    // 重要：使用setTimeout来确保状态更新后DOM才更新
    setTimeout(() => {
        // 可选：触发一个额外的更新以确保视图刷新
        reverseTimelineKey.value = reverseTimelineKey.value;
    }, 50);
}

// 进行中状态示例
const pendingText = "正在处理中...";

// 交互式时间轴示例 - 添加强制更新key
const interactiveUpdateKey = ref(0);

interface TimelineItemData {
    id: number;
    title: string;
    content: string;
    date: string;
    color: string;
    expanded: boolean;
    timestamp: number;
}

const interactiveItems = [
    {
        title: "项目启动",
        content: "项目正式启动，团队组建完成。定义了项目目标、范围和主要里程碑，组建了核心开发团队和确定了项目管理方法。",
        date: "第一阶段",
        color: "blue"
    },
    {
        title: "需求分析",
        content: "进行需求分析和用户调研，确定产品功能优先级和技术方案。收集了市场反馈和进行了竞争对手分析，形成了详细的产品需求文档。",
        date: "第二阶段",
        color: "green"
    },
    {
        title: "设计阶段",
        content: "完成UI设计和交互方案，构建产品原型和用户体验流程。进行了多轮用户测试并根据反馈调整设计方案，最终确定了视觉风格指南。",
        date: "第三阶段",
        color: "purple"
    },
    {
        title: "开发阶段",
        content: "代码开发和功能实现，进行单元测试和集成测试。建立了CI/CD流程，实现了核心功能模块并进行了初步性能优化。",
        date: "第四阶段",
        color: "orange"
    },
    {
        title: "测试阶段",
        content: "进行全面测试和bug修复，确保产品质量和用户体验。包括功能测试、兼容性测试、安全测试和性能测试，解决了关键问题并准备发布。",
        date: "第五阶段",
        color: "red"
    }
];

const currentItems = reactive<TimelineItemData[]>([]);
let idCounter = 1;

// 排序和展开/折叠功能
const enableSorting = ref(false);
const allExpanded = computed(() => {
    return currentItems.length > 0 && currentItems.every(item => item.expanded);
});

// 切换所有项目的展开/折叠状态 - 修复更新问题
function toggleExpand() {
    const newState = !allExpanded.value;
    currentItems.forEach(item => {
        item.expanded = newState;
    });
    // 强制重新渲染
    interactiveUpdateKey.value++;
}

// 移动项目位置 - 修复更新问题
function moveItem(fromIndex: number, toIndex: number) {
    if (toIndex < 0 || toIndex >= currentItems.length) return;

    const item = currentItems.splice(fromIndex, 1)[0];
    currentItems.splice(toIndex, 0, item);

    // 强制重新渲染
    interactiveUpdateKey.value++;
}

// 添加ref以便直接操作timeline实例
const interactiveTimelineRef = ref(null);

// 修改添加时间线项目的函数，确保正确显示
function addTimelineItem(index: number) {
    const item = interactiveItems[index];
    const newItem: TimelineItemData = {
        id: idCounter++,
        title: item.title,
        content: item.content,
        date: item.date,
        color: item.color,
        expanded: true,
        timestamp: Date.now()
    };

    // 添加项目到数组
    currentItems.push(newItem);

    // 使用更可靠的更新方法
    setTimeout(() => {
        // 强制重新渲染时间轴
        interactiveUpdateKey.value++;

        // 确保视觉反馈
        setTimeout(() => {
            // 滚动到新添加的项目
            const container = document.querySelector('.interactive-timeline-container');
            if (container) {
                container.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        }, 100);
    }, 0);
}

// 切换单个项目的展开/折叠状态
function toggleItemExpand(item: TimelineItemData) {
    item.expanded = !item.expanded;
    // 强制重新渲染
    interactiveUpdateKey.value++;
}

// 删除单个时间轴项目 - 修复更新问题
function removeTimelineItem(index: number) {
    currentItems.splice(index, 1);
    // 强制重新渲染
    interactiveUpdateKey.value++;
}

// 清空所有时间轴项目 - 修复更新问题
function clearTimelineItems() {
    currentItems.splice(0, currentItems.length);
    // 强制重新渲染
    interactiveUpdateKey.value++;
}

// 格式化日期
function formatDate(timestamp: number) {
    return new Date(timestamp).toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// 获取项目图标
function getItemIcon(color: string) {
    const iconMap: Record<string, string> = {
        'blue': 'rocket',
        'green': 'document-add',
        'red': 'warning',
        'purple': 'brush',
        'orange': 'code'
    };

    return iconMap[color] || 'dot-mark';
}

// 获取项目徽章样式
function getItemBadgeClass(color: string) {
    const classMap: Record<string, string> = {
        'blue': 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
        'green': 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
        'red': 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
        'purple': 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
        'orange': 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
    };

    return classMap[color] || 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400';
}

// 进度条示例
const progressValue = ref(35);

function updateProgress() {
    progressValue.value = Math.min(100, progressValue.value + 15);
    if (progressValue.value >= 100) {
        setTimeout(() => {
            progressValue.value = 0;
        }, 1000);
    }
}

// 辅助函数
function getItemColorClass(color: string) {
    const colorMap: Record<string, string> = {
        'blue': 'bg-blue-50 dark:bg-blue-900/20',
        'green': 'bg-green-50 dark:bg-green-900/20',
        'red': 'bg-red-50 dark:bg-red-900/20',
        'purple': 'bg-purple-50 dark:bg-purple-900/20',
        'orange': 'bg-orange-50 dark:bg-orange-900/20'
    };

    return colorMap[color] || 'bg-gray-50 dark:bg-gray-900/20';
}

function getItemTextClass(color: string) {
    const colorMap: Record<string, string> = {
        'blue': 'text-blue-600 dark:text-blue-400',
        'green': 'text-green-600 dark:text-green-400',
        'red': 'text-red-600 dark:text-red-400',
        'purple': 'text-purple-600 dark:text-purple-400',
        'orange': 'text-orange-600 dark:text-orange-400'
    };

    return colorMap[color] || 'text-gray-600 dark:text-gray-400';
}

// 初始化一些演示数据
onMounted(() => {
    // 清空现有项目，确保从干净状态开始
    currentItems.splice(0, currentItems.length);

    // 在短暂延迟后添加初始项目
    setTimeout(() => {
        addTimelineItem(0);
        setTimeout(() => {
            addTimelineItem(1);
        }, 300);
    }, 100);
});

// 重构交互式时间轴逻辑
const reRenderKey = ref(0);

// 处理函数 - 使用箭头函数避免this绑定问题
const handleAddItem = (index: number) => {
    const item = interactiveItems[index];
    const newItem: TimelineItemData = {
        id: idCounter++,
        title: item.title,
        content: item.content,
        date: item.date,
        color: item.color,
        expanded: true,
        timestamp: Date.now()
    };

    // 添加到数组
    currentItems.push(newItem);

    // 强制重新渲染
    forceRerender();
};

const handleRemoveItem = (index: number) => {
    currentItems.splice(index, 1);
    forceRerender();
};

const handleClearItems = () => {
    currentItems.splice(0, currentItems.length);
    forceRerender();
};

const handleMoveItem = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= currentItems.length) return;

    const item = currentItems.splice(fromIndex, 1)[0];
    currentItems.splice(toIndex, 0, item);

    forceRerender();
};

const handleToggleExpand = (item: TimelineItemData) => {
    item.expanded = !item.expanded;
    forceRerender();
};

const handleToggleAllExpand = () => {
    const newState = !allExpanded.value;
    currentItems.forEach(item => {
        item.expanded = newState;
    });
    forceRerender();
};

// 强制重新渲染
const forceRerender = () => {
    reRenderKey.value++;
};

// 初始化
onMounted(() => {
    // 确保初始状态是空的
    currentItems.splice(0, currentItems.length);

    // 添加测试数据
    setTimeout(() => {
        handleAddItem(0);
        setTimeout(() => {
            handleAddItem(1);
        }, 300);
    }, 100);
});
</script>

<style scoped>
/* 过渡动画 */
.timeline-list-enter-active,
.timeline-list-leave-active {
    transition: all 0.5s ease;
}

.timeline-list-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.timeline-list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

/* Transform hover 效果 */
.transform.hover\:scale-105:hover {
    transform: scale(1.05);
}

/* 添加自定义动画类 */
.animated-item {
    animation-duration: 0.5s;
    animation-fill-mode: both;
}

.fade-in {
    animation-name: fadeIn;
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

/* 为移除项添加动画 */
.animated-item.leaving {
    animation-name: fadeOut;
}

@keyframes fadeOut {
    from {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(-20px);
    }
}

/* 增强动画效果 */
.animated-item {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.timeline-list-enter-active {
    animation: fadeIn 0.5s ease;
}

.timeline-list-leave-active {
    animation: fadeOut 0.5s ease;
    position: absolute;
    width: 100%;
}

.timeline-list-move {
    transition: transform 0.5s ease;
}

/* 添加特定样式确保交互式时间轴项目正确显示 */
.interactive-timeline-item {
    animation-name: fadeInItem;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    margin-bottom: 1.5rem;
}

@keyframes fadeInItem {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 确保内容区域有足够的空间和正确的布局 */
:deep(.timeline-item-content) {
    min-height: 50px;
    position: relative;
    z-index: 5;
}

/* 确保时间线的连接线显示正确 */
:deep(.timeline[data-mode="left"]::before) {
    background-color: #e2e8f0;
    top: 16px;
    bottom: 16px;
    height: calc(100% - 32px);
}

:deep(.dark .timeline[data-mode="left"]::before) {
    background-color: #374151;
}

/* 在每个项目之间添加更明显的分隔 */
:deep(.timeline-item:not(:last-child)) {
    border-bottom: none;
}

/* 添加特定样式增强倒序时间轴展示效果 */
.order-timeline-container {
    position: relative;
    transition: all 0.5s ease-in-out;
}

.timeline-year-item {
    transition: all 0.4s ease-in-out;
}

.timeline-year-item:hover>div {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* 确保交互式时间轴项目在添加后正确显示 */
.interactive-timeline-item {
    opacity: 1 !important;
    transform: translateY(0) !important;
    display: block !important;
    visibility: visible !important;
}

/* 修复时间轴项目内容区域样式 */
:deep(.timeline-item-content) {
    display: block !important;
    min-height: 50px !important;
    width: 100% !important;
    max-width: 100% !important;
    position: relative !important;
    z-index: 5 !important;
}

/* 确保交互式时间轴正确显示 */
.interactive-timeline-container {
    position: relative;
    min-height: 200px;
}

/* 手动实现Timeline样式 */
.timeline-wrapper {
    position: relative;
}

.timeline-wrapper::before {
    content: '';
    position: absolute;
    left: 16px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #e2e8f0;
    z-index: 1;
}

.dark .timeline-wrapper::before {
    background-color: #374151;
}

.timeline-item-head {
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 50%;
}

.dark .timeline-item-head {
    background-color: #1f2937;
}

.static-timeline-container {
    position: relative;
    min-height: 200px;
}

/* 添加进入/离开动画 */
.timeline-item-wrapper {
    animation: fadeIn 0.5s ease-out;
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

/* 更新交互式时间轴中的标签样式 */
.timeline-wrapper .timeline-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 80px;
    max-width: 150px;
    font-weight: 500;
    transition: color 0.3s ease;
}

/* 对于手动实现的时间轴，确保标签有固定宽度和对齐方式 */
.timeline-item-wrapper .timeline-label {
    min-width: 80px;
    max-width: 150px;
    width: 100px;
    /* 固定宽度使布局更整齐 */
    text-align: right;
}

/* 为手动实现的时间轴项添加更好的间距 */
.timeline-item-wrapper {
    margin-bottom: 1.5rem;
    position: relative;
}

.timeline-item-wrapper:last-child {
    margin-bottom: 0;
}

/* 优化时间轴项布局使标签对齐 */
.timeline-item-wrapper .timeline-item {
    display: flex;
    align-items: flex-start;
}

/* 为每个时间点和内容区添加统一的垂直对齐 */
.timeline-item-wrapper .timeline-item-head,
.timeline-item-wrapper .timeline-label {
    margin-top: 0.5rem;
}

/* 修改时间线条样式，支持hover高亮 */
.timeline-wrapper::before {
    content: '';
    position: absolute;
    left: 16px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #e2e8f0;
    z-index: 1;
    transition: background-color 0.3s ease;
}

.dark .timeline-wrapper::before {
    background-color: #374151;
}

/* 为每个节点单独添加时间线，方便hover高亮 */
.timeline-item-wrapper::before {
    content: '';
    position: absolute;
    left: 16px;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #e2e8f0;
    z-index: 1;
    transition: all 0.3s ease;
}

.dark .timeline-item-wrapper::before {
    background-color: #374151;
}

.timeline-item-wrapper:hover::before {
    background-color: #3b82f6;
    width: 3px;
}

.dark .timeline-item-wrapper:hover::before {
    background-color: #60a5fa;
}

/* 添加节点hover效果 */
.timeline-item-wrapper:hover .timeline-item-head {
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.dark .timeline-item-wrapper:hover .timeline-item-head {
    box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.2);
}

/* 添加内容hover效果 */
.timeline-item-wrapper:hover .timeline-item-content>div {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
