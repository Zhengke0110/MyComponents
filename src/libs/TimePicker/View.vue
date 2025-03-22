<template>
    <div class="time-picker-demo-container p-6 transition-colors duration-300">
        <h1 class="text-2xl font-bold mb-8 text-gray-800 dark:text-white transition-colors duration-300">
            TimePicker 时间选择器
        </h1>

        <!-- 基本用法 -->
        <section class="mb-12 transform transition-all duration-300 hover:translate-y-[-5px]">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                基本用法
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">基本时间选择</p>
                        <TimePicker v-model="basicValue" @change="handleTimeChange" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">默认格式：HH:mm:ss</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">禁用状态</p>
                        <TimePicker v-model="basicValue" disabled />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">设置 disabled 属性禁用</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">无边框模式</p>
                        <TimePicker v-model="basicValue" :bordered="false" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">设置 bordered=false 去除边框</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">自动获焦</p>
                        <TimePicker v-model="basicValue" autofocus />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">设置 autofocus 自动聚焦</p>
                    </div>
                </div>

                <div
                    class="mt-6 p-4 bg-gray-50 dark:bg-gray-900/30 rounded border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                    <div class="flex items-center">
                        <span class="text-gray-600 dark:text-gray-300 font-medium">当前选择时间：</span>
                        <span
                            class="ml-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md transition-colors duration-300">
                            {{ basicValue || '未选择' }}
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- 不同格式 -->
        <section class="mb-12 transform transition-all duration-300 hover:translate-y-[-5px]">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                时间格式
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">默认格式</p>
                        <TimePicker v-model="formatValue1" format="HH:mm:ss" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">HH:mm:ss</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">小时与分钟</p>
                        <TimePicker v-model="formatValue2" format="HH:mm" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">HH:mm</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">12小时制</p>
                        <TimePicker v-model="formatValue3" format="hh:mm:ss a" use12Hours />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">hh:mm:ss a（带上午/下午）</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">自定义格式</p>
                        <TimePicker v-model="formatValue4" format="HH时mm分" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">HH时mm分</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 步长设置 -->
        <section class="mb-12 transform transition-all duration-300 hover:translate-y-[-5px]">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                步长选项
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">小时步长</p>
                        <TimePicker v-model="stepValue1" :hour-step="2" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">hourStep=2</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">分钟步长</p>
                        <TimePicker v-model="stepValue2" :minute-step="15" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">minuteStep=15</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">秒步长</p>
                        <TimePicker v-model="stepValue3" :second-step="10" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">secondStep=10</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">综合设置</p>
                        <TimePicker v-model="stepValue4" :hour-step="2" :minute-step="5" :second-step="10" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">小时:2，分钟:5，秒:10</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 禁用选项 -->
        <section class="mb-12 transform transition-all duration-300 hover:translate-y-[-5px]">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                禁用选项
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">工作时间 (9:00-18:00)</p>
                        <TimePicker v-model="disabledValue1" :disabled-time="disabledWorkTime" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">仅能选择 9-18 点之间的时间</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">隐藏禁用选项</p>
                        <TimePicker v-model="disabledValue2" :disabled-time="disabledWorkTime" hide-disabled-options />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">不显示禁用的时间选项</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">午休时间 (12:00-13:00)</p>
                        <TimePicker v-model="disabledValue3" :disabled-time="disabledLunchTime" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">禁用午休时间 12:00-13:00</p>
                    </div>
                </div>

                <div
                    class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-800/50 transition-colors duration-300">
                    <div class="flex items-start">
                        <i class="icon-[carbon--information] text-blue-500 dark:text-blue-400 mt-0.5 mr-2"></i>
                        <div>
                            <p class="text-sm text-gray-700 dark:text-gray-300">
                                可以通过 <code
                                    class="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">disabledTime</code>
                                属性自定义禁用逻辑，返回不可选择的小时、分钟和秒数组。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 不同位置 -->
        <section class="mb-12 transform transition-all duration-300 hover:translate-y-[-5px]">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                弹出位置
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">左下方 (bottomLeft)</p>
                        <TimePicker v-model="placementValue1" placement="bottomLeft" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">默认位置</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">右下方 (bottomRight)</p>
                        <TimePicker v-model="placementValue2" placement="bottomRight" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">右侧对齐</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">左上方 (topLeft)</p>
                        <TimePicker v-model="placementValue3" placement="topLeft" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">向上展开，左侧对齐</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">右上方 (topRight)</p>
                        <TimePicker v-model="placementValue4" placement="topRight" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">向上展开，右侧对齐</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 状态展示 -->
        <section class="mb-12 transform transition-all duration-300 hover:translate-y-[-5px]">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                状态与自定义图标
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">错误状态</p>
                        <TimePicker v-model="statusValue1" status="error" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">status="error"</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">警告状态</p>
                        <TimePicker v-model="statusValue2" status="warning" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">status="warning"</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">自定义图标</p>
                        <TimePicker v-model="statusValue3">
                            <template #suffixIcon>
                                <i class="icon-[carbon--calendar] text-blue-500 animate-pulse"></i>
                            </template>
                        </TimePicker>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">使用 #suffixIcon 插槽</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">自定义清除图标</p>
                        <TimePicker v-model="statusValue4">
                            <template #clearIcon>
                                <i
                                    class="icon-[carbon--trash-can] text-red-500 hover:text-red-600 transition-colors duration-200"></i>
                            </template>
                        </TimePicker>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">使用 #clearIcon 插槽</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 额外的页脚 -->
        <section class="mb-12 transform transition-all duration-300 hover:translate-y-[-5px]">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                自定义页脚
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">带额外页脚信息</p>
                        <TimePicker v-model="footerValue1">
                            <template #renderExtraFooter>
                                <span class="text-xs text-gray-500 dark:text-gray-400">请选择工作时间</span>
                            </template>
                        </TimePicker>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">使用 #renderExtraFooter 插槽</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">隐藏"此刻"按钮</p>
                        <TimePicker v-model="footerValue2" :show-now="false" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">设置 showNow=false</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 受控模式 -->
        <section class="mb-12 transform transition-all duration-300 hover:translate-y-[-5px]">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                受控模式与交互
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-4">
                        <p class="text-gray-600 dark:text-gray-300">受控打开状态</p>
                        <div class="flex flex-wrap gap-3 items-center">
                            <TimePicker v-model="controlledValue" :open="controlledOpen"
                                @open-change="handleOpenChange" />
                            <button
                                class="py-1.5 px-4 text-sm rounded transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                                :class="controlledOpen
                                    ? 'bg-red-500 hover:bg-red-600 text-white'
                                    : 'bg-blue-500 hover:bg-blue-600 text-white'" @click="toggleControlledOpen">
                                {{ controlledOpen ? '关闭面板' : '打开面板' }}
                            </button>
                        </div>
                        <p class="text-xs text-gray-500 dark:text-gray-400">通过 open 属性控制面板的显示</p>
                    </div>

                    <div class="space-y-4">
                        <p class="text-gray-600 dark:text-gray-300">交互反馈</p>
                        <div
                            class="p-4 bg-gray-50 dark:bg-gray-900/30 rounded border border-gray-200 dark:border-gray-700">
                            <div class="flex flex-col gap-2">
                                <div class="flex items-center">
                                    <span
                                        class="text-gray-600 dark:text-gray-300 font-medium min-w-[100px]">面板状态：</span>
                                    <span class="ml-2 px-2 py-1 rounded-md text-sm" :class="controlledOpen
                                        ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                                        : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'">
                                        {{ controlledOpen ? '打开' : '关闭' }}
                                    </span>
                                </div>
                                <div class="flex items-center">
                                    <span class="text-gray-600 dark:text-gray-300 font-medium min-w-[100px]">当前值：</span>
                                    <span
                                        class="ml-2 px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md text-sm">
                                        {{ controlledValue || '未选择' }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 字符串绑定 -->
        <section class="mb-12 transform transition-all duration-300 hover:translate-y-[-5px]">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                字符串绑定与格式
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">使用字符串值</p>
                        <TimePicker v-model="stringValue" value-format="HH:mm:ss" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">设置 value-format="HH:mm:ss"</p>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">自定义显示与存储格式</p>
                        <TimePicker v-model="stringValue2" format="HH时mm分ss秒" value-format="HH:mm:ss" />
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">显示格式："HH时mm分ss秒"，存储格式："HH:mm:ss"</p>
                    </div>
                </div>

                <div
                    class="mt-6 p-4 bg-gray-50 dark:bg-gray-900/30 rounded border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                    <p class="text-gray-600 dark:text-gray-300 mb-2 font-medium">字符串值绑定示例：</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="flex items-center">
                            <span class="text-gray-600 dark:text-gray-300 mr-2">默认格式：</span>
                            <code
                                class="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded font-mono text-sm">
                        {{ stringValue || '未选择' }}
                    </code>
                        </div>
                        <div class="flex items-center">
                            <span class="text-gray-600 dark:text-gray-300 mr-2">自定义格式：</span>
                            <code
                                class="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded font-mono text-sm">
                        {{ stringValue2 || '未选择' }}
                    </code>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 高级示例 -->
        <section class="mb-12 transform transition-all duration-300 hover:translate-y-[-5px]">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                高级示例
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-4">
                        <h3 class="font-medium text-gray-700 dark:text-gray-200">预设时间快速选择</h3>
                        <div class="flex flex-wrap gap-2">
                            <button v-for="(time, index) in presetTimes" :key="index"
                                class="px-3 py-1.5 text-sm rounded-md transition-all duration-200 hover:scale-105"
                                :class="advancedValue === time.value
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
                                @click="setPresetTime(time.value)">
                                {{ time.label }}
                            </button>
                        </div>
                        <div class="mt-4">
                            <TimePicker v-model="advancedValue" value-format="HH:mm:ss"
                                @change="handleAdvancedChange" />
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3 class="font-medium text-gray-700 dark:text-gray-200">范围限制</h3>
                        <div class="grid grid-cols-1 gap-4">
                            <div class="space-y-2">
                                <p class="text-gray-600 dark:text-gray-300 text-sm">仅工作时间 (9:00 - 18:00)</p>
                                <TimePicker v-model="workTimeValue" :disabled-time="disabledNonWorkTime"
                                    @change="handleWorkTimeChange" />
                                <div class="flex items-center justify-between">
                                    <span class="text-xs text-gray-500 dark:text-gray-400">09:00 - 18:00</span>
                                    <span v-if="workTimeValue" class="text-xs px-2 py-0.5 rounded"
                                        :class="isValidWorkTime ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'">
                                        {{ isValidWorkTime ? '有效工作时间' : '非工作时间' }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- API 文档 -->
        <section class="mb-12">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                API 文档
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="prose dark:prose-invert max-w-none">
                    <h3 class="text-lg font-medium mb-4">TimePicker 属性</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full border-collapse">
                            <thead>
                                <tr class="bg-gray-100 dark:bg-gray-800 text-left">
                                    <th class="py-2 px-4 font-medium border dark:border-gray-700">参数</th>
                                    <th class="py-2 px-4 font-medium border dark:border-gray-700">说明</th>
                                    <th class="py-2 px-4 font-medium border dark:border-gray-700">类型</th>
                                    <th class="py-2 px-4 font-medium border dark:border-gray-700">默认值</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y dark:divide-gray-700">
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">allowClear</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">是否展示清除按钮</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">boolean</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">true</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">autofocus</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">自动获取焦点</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">boolean</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">false</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">bordered</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">是否有边框</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">boolean</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">true</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">clearText</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">清除按钮的提示文案</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">string</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">清除</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">disabled</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">禁用全部操作</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">boolean</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">false</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">disabledTime</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">不可选择的时间</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">函数</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">-</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">format</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">展示的时间格式</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">string</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">HH:mm:ss</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">hideDisabledOptions</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">隐藏禁止选择的选项</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">boolean</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">false</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">hourStep</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">小时选项间隔</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">number</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">1</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">minuteStep</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">分钟选项间隔</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">number</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">1</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">open</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">面板是否打开</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">boolean</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">-</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">placement</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">选择框弹出的位置</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">bottomLeft | bottomRight | topLeft
                                        |
                                        topRight</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">bottomLeft</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">showNow</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">面板是否显示"此刻"按钮</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">boolean</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">true</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">status</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">设置校验状态</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">'error' | 'warning'</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">-</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">use12Hours</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">使用 12 小时制</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">boolean</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">false</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">valueFormat</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">绑定值的格式</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">string</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-lg font-medium mt-8 mb-4">TimePicker 事件</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full border-collapse">
                            <thead>
                                <tr class="bg-gray-100 dark:bg-gray-800 text-left">
                                    <th class="py-2 px-4 font-medium border dark:border-gray-700">事件名称</th>
                                    <th class="py-2 px-4 font-medium border dark:border-gray-700">说明</th>
                                    <th class="py-2 px-4 font-medium border dark:border-gray-700">回调参数</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y dark:divide-gray-700">
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">change</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">时间发生变化的回调</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">function(time: dayjs | string,
                                        timeString:
                                        string): void</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">openChange</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">面板打开/关闭时的回调</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">(open: boolean): void</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-lg font-medium mt-8 mb-4">TimePicker 插槽</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full border-collapse">
                            <thead>
                                <tr class="bg-gray-100 dark:bg-gray-800 text-left">
                                    <th class="py-2 px-4 font-medium border dark:border-gray-700">插槽名称</th>
                                    <th class="py-2 px-4 font-medium border dark:border-gray-700">说明</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y dark:divide-gray-700">
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">clearIcon</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">自定义的清除图标</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">suffixIcon</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">自定义的选择框后缀图标</td>
                                </tr>
                                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                    <td class="py-2 px-4 border dark:border-gray-700">renderExtraFooter</td>
                                    <td class="py-2 px-4 border dark:border-gray-700">选择框底部显示自定义的内容</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <!-- 小结与最佳实践 -->
        <section class="mb-12 transform transition-all duration-300 hover:translate-y-[-5px]">
            <h2 class="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
                小结与最佳实践
            </h2>
            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300">
                <div class="prose dark:prose-invert max-w-none">
                    <h3 class="text-lg font-medium mb-3 text-blue-600 dark:text-blue-400">使用场景</h3>
                    <p class="mb-4 text-gray-700 dark:text-gray-300">
                        TimePicker 时间选择器适用于需要用户输入或选择具体时间的场景，常见于：
                    </p>
                    <ul class="list-disc pl-6 space-y-1 mb-6 text-gray-700 dark:text-gray-300">
                        <li>预约系统中的时间段选择</li>
                        <li>工作日程或会议安排</li>
                        <li>倒计时设置</li>
                        <li>各类表单中的时间输入字段</li>
                        <li>系统定时任务的时间设置</li>
                    </ul>

                    <h3 class="text-lg font-medium mb-3 text-blue-600 dark:text-blue-400">最佳实践</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div
                            class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800/50">
                            <h4 class="text-base font-medium text-green-700 dark:text-green-400 mb-2 flex items-center">
                                <i class="icon-[carbon--checkmark] mr-2"></i>推荐做法
                            </h4>
                            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                <li>根据业务场景选择合适的时间格式，比如12小时制或24小时制</li>
                                <li>为时间选择器设置合理的默认值，减少用户输入操作</li>
                                <li>使用 <code
                                        class="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">disabledTime</code>
                                    限制非法时间，提高用户体验</li>
                                <li>在表单中使用时，配合表单验证规则使用</li>
                                <li>为时间选择器添加清晰的标签和占位符文本</li>
                                <li>根据需要使用不同的步长设置，简化用户选择</li>
                            </ul>
                        </div>
                        <div
                            class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100 dark:border-red-800/50">
                            <h4 class="text-base font-medium text-red-700 dark:text-red-400 mb-2 flex items-center">
                                <i class="icon-[carbon--close] mr-2"></i>避免做法
                            </h4>
                            <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                                <li>避免在不必要的场景使用复杂的时间格式</li>
                                <li>避免设置过小的步长，增加用户选择的复杂度</li>
                                <li>避免不提供任何时间范围限制，导致用户选择无效时间</li>
                                <li>避免在移动设备上使用过小的点击区域</li>
                                <li>避免不提供清晰的时间格式提示</li>
                                <li>避免在高频操作界面使用过多的时间选择器</li>
                            </ul>
                        </div>
                    </div>

                    <h3 class="text-lg font-medium mb-3 text-blue-600 dark:text-blue-400">性能考虑</h3>
                    <div
                        class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/50 mb-6">
                        <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                            <li>TimePicker 组件内部使用 dayjs 处理时间格式，体积较小且性能良好</li>
                            <li>通过使用 Teleport 将弹出层移至 body，避免嵌套结构中的样式问题</li>
                            <li>组件使用虚拟化渲染，即使有大量选项也不会影响性能</li>
                            <li>使用 computed 属性和缓存优化重复计算</li>
                            <li>懒加载面板内容，仅在打开面板时才渲染相关选项</li>
                        </ul>
                    </div>

                    <h3 class="text-lg font-medium mb-3 text-blue-600 dark:text-blue-400">无障碍设计</h3>
                    <div
                        class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800/50">
                        <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                            <li>组件支持键盘导航，可通过Tab键切换焦点</li>
                            <li>时间输入框的标签清晰易懂，便于屏幕阅读器识别</li>
                            <li>色彩对比度符合WCAG 2.0标准，确保视力障碍用户可用</li>
                            <li>时间选项有足够大的点击区域，方便精细运动障碍用户操作</li>
                            <li>支持添加aria属性，提高屏幕阅读器的兼容性</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { TimePicker } from './TimePicker';
import dayjs, { Dayjs } from 'dayjs';

// 基本用法
const basicValue = ref<string | undefined>(undefined);

// 不同格式
const formatValue1 = ref<string | undefined>(undefined);
const formatValue2 = ref<string | undefined>(undefined);
const formatValue3 = ref<string | undefined>(undefined);
const formatValue4 = ref<string | undefined>(undefined);

// 步长设置
const stepValue1 = ref<string | undefined>(undefined);
const stepValue2 = ref<string | undefined>(undefined);
const stepValue3 = ref<string | undefined>(undefined);
const stepValue4 = ref<string | undefined>(undefined);

// 禁用选项
const disabledValue1 = ref<string | undefined>(undefined);
const disabledValue2 = ref<string | undefined>(undefined);
const disabledValue3 = ref<string | undefined>(undefined);

// 不同位置
const placementValue1 = ref<string | undefined>(undefined);
const placementValue2 = ref<string | undefined>(undefined);
const placementValue3 = ref<string | undefined>(undefined);
const placementValue4 = ref<string | undefined>(undefined);

// 状态展示
const statusValue1 = ref<string | undefined>(undefined);
const statusValue2 = ref<string | undefined>(undefined);
const statusValue3 = ref<string | undefined>(undefined);
const statusValue4 = ref<string | undefined>(undefined);

// 额外的页脚
const footerValue1 = ref<string | undefined>(undefined);
const footerValue2 = ref<string | undefined>(undefined);

// 受控模式
const controlledValue = ref<string | undefined>(undefined);
const controlledOpen = ref(false);

// 字符串绑定
const stringValue = ref<string | undefined>(undefined);
const stringValue2 = ref<string | undefined>(undefined);

// 高级示例
const advancedValue = ref<string | undefined>(undefined);
const workTimeValue = ref<string | undefined>(undefined);
const isValidWorkTime = ref(true);

// 预设时间选项
const presetTimes = [
    { label: '上班', value: '09:00:00' },
    { label: '午休', value: '12:00:00' },
    { label: '下午茶', value: '15:30:00' },
    { label: '下班', value: '18:00:00' }
];

// 禁用工作时间外的选项
const disabledWorkTime = (now: Dayjs) => {
    return {
        disabledHours: () => [...Array(9).keys(), ...Array(24 - 18).keys().map(i => i + 18)],
    };
};

// 禁用午休时间
const disabledLunchTime = (now: Dayjs) => {
    return {
        disabledHours: () => [],
        disabledMinutes: (selectedHour: number) => {
            if (selectedHour === 12) {
                return [...Array(60).keys()];
            }
            return [];
        },
    };
};

// 禁用非工作时间 (9:00-18:00)
const disabledNonWorkTime = (now: Dayjs) => {
    return {
        disabledHours: () => [...Array(9).keys(), ...Array(24 - 18).keys().map(i => i + 18)],
        disabledMinutes: (selectedHour: number) => {
            if (selectedHour < 9 || selectedHour >= 18) {
                return [...Array(60).keys()];
            }
            return [];
        },
    };
};

// 事件处理函数
const handleTimeChange = (time: any, timeString: string) => {
    console.log('选择的时间:', time, timeString);
    // 确保显示格式化的时间字符串
    basicValue.value = timeString;
};

const handleOpenChange = (open: boolean) => {
    console.log('面板状态变化:', open);
    controlledOpen.value = open;
};

const toggleControlledOpen = () => {
    controlledOpen.value = !controlledOpen.value;
};

const setPresetTime = (time: string) => {
    advancedValue.value = time;
};

const handleAdvancedChange = (time: string, timeString: string) => {
    console.log('高级示例时间变化:', time, timeString);
};

const handleWorkTimeChange = (time: string, timeString: string) => {
    if (!time) {
        isValidWorkTime.value = true;
        return;
    }

    const timeParts = timeString.split(':');
    const hour = parseInt(timeParts[0], 10);

    isValidWorkTime.value = hour >= 9 && hour < 18;
};

// 初始化一些默认值
setTimeout(() => {
    // 使用格式化的时间字符串
    basicValue.value = '12:30:00';
    formatValue1.value = '09:15:30';
    formatValue2.value = '10:45';
    formatValue3.value = '02:30:00 PM';
    formatValue4.value = '14时30分';
    controlledValue.value = '10:00:00';
    statusValue3.value = '14:00:00';
    statusValue4.value = '16:30:00';
}, 500);
</script>

<style scoped>
/* 自定义组件的一些额外样式 */
.time-picker-demo-container section {
    position: relative;
    overflow: hidden;
}

.time-picker-demo-container section::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.6), rgba(59, 130, 246, 0));
    transform: translateY(2px);
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
}

.time-picker-demo-container section:hover::after {
    opacity: 1;
    transform: translateY(0);
}

.dark .time-picker-demo-container section::after {
    background: linear-gradient(90deg, rgba(96, 165, 250, 0), rgba(96, 165, 250, 0.6), rgba(96, 165, 250, 0));
}

/* 表格样式优化 */
table {
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

/* 高级动画效果 */
@keyframes shine {
    0% {
        background-position: -100% 0;
    }

    100% {
        background-position: 200% 0;
    }
}

.text-blue-500,
.text-blue-600 {
    background: linear-gradient(90deg, currentColor, #60a5fa, currentColor);
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: shine 8s linear infinite;
}

/* 适应性响应设计 */
@media (max-width: 640px) {
    .grid-cols-4 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .grid-cols-2 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>
