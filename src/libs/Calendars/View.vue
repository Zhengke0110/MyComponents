<template>
    <div class="mx-auto max-w-7xl p-4 md:p-8">
        <h1 class="mb-8 text-2xl font-bold">日历组件展示</h1>

        <!-- 基础用法 -->
        <section class="mb-12">
            <h2 class="mb-4 text-xl font-semibold">基础用法</h2>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <CodePreview :code="basicUsageCode">
                    <div
                        class="rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-200 ease-in-out dark:border-gray-700 dark:bg-gray-800">
                        <h3 class="mb-3 text-lg font-semibold">单选模式</h3>
                        <Calendars v-model:selectedDate="dynamicSelectedDate" mode="single" :color="selectedColor"
                            :key="`single-calendar`" @dateSelect="handleDynamicDateSelect" />
                        <div v-if="dynamicSelectedDate" class="mt-3 rounded bg-gray-50 p-2 text-sm dark:bg-gray-700">
                            <div class="font-medium text-gray-700 dark:text-gray-300">
                                选中日期：{{ dynamicSelectedDate }}
                            </div>
                            <div class="text-gray-500 dark:text-gray-400">
                                {{ formatSelectedDate(dynamicSelectedDate) }}
                            </div>
                        </div>
                    </div>
                </CodePreview>

                <CodePreview :code="rangeSelectCode">
                    <div
                        class="rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-200 ease-in-out dark:border-gray-700 dark:bg-gray-800">
                        <h3 class="mb-3 text-lg font-semibold">范围选择模式</h3>
                        <Calendars v-model:startDate="dynamicStartDate" v-model:endDate="dynamicEndDate" mode="range"
                            :color="selectedColor" :key="`range-dynamic`"
                            @rangeSelect="handleDynamicRangeSelect" />
                        <div v-if="dynamicStartDate || dynamicEndDate"
                            class="mt-3 rounded bg-gray-50 p-2 text-sm dark:bg-gray-700">
                            <div class="font-medium text-gray-700 dark:text-gray-300">
                                选择范围：{{ dynamicStartDate || "未选择" }} 至
                                {{ dynamicEndDate || "未选择" }}
                            </div>
                            <div v-if="dynamicStartDate && dynamicEndDate" class="text-gray-500 dark:text-gray-400">
                                共 {{ getDaysBetween(dynamicStartDate, dynamicEndDate) }} 天
                            </div>
                            <div v-if="lastRangeSelectTime" class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                最后选择时间：{{ formatTime(lastRangeSelectTime) }}
                            </div>
                        </div>
                    </div>
                </CodePreview>
            </div>
        </section>

        <!-- 颜色主题 -->
        <section class="mb-12">
            <h2 class="mb-4 text-xl font-semibold">颜色主题</h2>

            <CodePreview :code="customColorCode">
                <div
                    class="rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-200 ease-in-out dark:border-gray-700 dark:bg-gray-800">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- 左侧：颜色选择器 -->
                        <div class="flex flex-col">
                            <h3 class="mb-3 text-lg font-semibold">选择颜色主题</h3>
                            <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                                <!-- 色系分组显示 -->
                                <div v-for="(colors, groupName) in colorGroups" :key="groupName"
                                    class="flex flex-col">
                                    <h3 class="mb-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                                        {{ colorGroupNames[groupName] }}
                                    </h3>
                                    <div class="space-y-1">
                                        <div v-for="color in colors" :key="color"
                                            class="flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-0.5 transition-all"
                                            :class="[
                                                getColorButtonClass(color),
                                                selectedColor === color
                                                    ? `ring-2 ring-offset-1`
                                                    : 'hover:opacity-80',
                                            ]" @click="setSelectedColor(color)">
                                            <span>{{ color }}</span>
                                            <span v-if="selectedColor === color"
                                                class="icon-[material-symbols--check-rounded] h-4 w-4 text-white"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 右侧：组件预览 -->
                        <div class="flex flex-col">
                            <h3 class="mb-3 text-lg font-semibold">
                                当前选中颜色:
                                <span :class="currentColorClasses.text">{{ selectedColor }}</span>
                            </h3>
                            <Calendars v-model:selectedDate="colorPreviewDate" :color="selectedColor"
                                :key="`preview-calendar`" />
                        </div>
                    </div>
                </div>
            </CodePreview>
        </section>

        <!-- 语言本地化 -->
        <section class="mb-12">
            <h2 class="mb-4 text-xl font-semibold">语言本地化</h2>

            <CodePreview :code="localizationCode">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div
                        class="rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                        <h3 class="mb-3 text-lg font-semibold">英文 (en)</h3>
                        <Calendars v-model:selectedDate="localeEnDate" locale="en" color="blue" />
                    </div>

                    <div
                        class="rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                        <h3 class="mb-3 text-lg font-semibold">中文 (zh-cn)</h3>
                        <Calendars v-model:selectedDate="localeZhDate" locale="zh-cn" color="blue" />
                    </div>
                </div>
            </CodePreview>
        </section>

        <!-- 日期格式与初始值 -->
        <section class="mb-12">
            <h2 class="mb-4 text-xl font-semibold">日期格式与初始值</h2>

            <CodePreview :code="dateFormatCode">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        class="rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                        <h3 class="mb-3 text-lg font-semibold">自定义日期格式</h3>
                        <Calendars v-model:selectedDate="formatDateValue" :initialDate="'2023-05-15'"
                            dateFormat="YYYY/MM/DD" :color="selectedColor" @dateSelect="handleFormatDateSelect" />

                        <div v-if="formatDateValue" class="mt-3 rounded bg-gray-50 p-2 text-sm dark:bg-gray-700">
                            <div class="font-medium text-gray-700 dark:text-gray-300">
                                选中日期：{{ formatDateValue }}
                            </div>
                            <div class="text-gray-500 dark:text-gray-400">
                                初始日期为: 2023-05-15
                            </div>
                        </div>
                    </div>
                    
                    <div class="rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                        <h3 class="mb-3 text-lg font-semibold">使用说明</h3>
                        <div class="text-gray-700 dark:text-gray-300 space-y-3">
                            <p>通过 <code class="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">initialDate</code> 属性设置日历初始显示的月份和日期。</p>
                            <p>通过 <code class="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">dateFormat</code> 属性自定义返回的日期格式，支持多种格式化模式。</p>
                            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                                <div class="font-medium mb-1">支持的格式:</div>
                                <ul class="list-disc pl-5 text-sm">
                                    <li>YYYY-MM-DD (默认)</li>
                                    <li>YYYY/MM/DD</li>
                                    <li>MM/DD/YYYY</li>
                                    <li>DD/MM/YYYY</li>
                                    <li>等其他 dayjs 支持的格式</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </CodePreview>
        </section>

        <!-- 事件处理 -->
        <section class="mb-12">
            <h2 class="mb-4 text-xl font-semibold">事件处理</h2>

            <CodePreview :code="eventsCode">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        class="rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                        <h3 class="mb-3 text-lg font-semibold">事件监听示例</h3>
                        <Calendars v-model:selectedDate="eventDemoDate" mode="single" color="indigo"
                            :key="`event-demo`" @dateSelect="handleEventDemo" />

                        <div v-if="eventLog" class="mt-3 rounded bg-gray-50 p-2 text-sm dark:bg-gray-700">
                            <div class="font-medium text-gray-700 dark:text-gray-300">事件记录:</div>
                            <div class="text-gray-500 dark:text-gray-400">{{ eventLog }}</div>
                        </div>
                    </div>
                    
                    <div class="rounded-xl border border-gray-100 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800">
                        <h3 class="mb-3 text-lg font-semibold">事件说明</h3>
                        <div class="text-gray-700 dark:text-gray-300 space-y-3">
                            <p>Calendars 组件提供了丰富的事件回调，可以监听用户的各种交互行为。</p>
                            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                                <div class="font-medium mb-1">可用事件:</div>
                                <ul class="list-disc pl-5 text-sm space-y-2">
                                    <li><span class="font-medium">dateSelect</span>: 单选模式下选择日期时触发</li>
                                    <li><span class="font-medium">rangeSelect</span>: 范围模式下完成选择时触发</li>
                                    <li><span class="font-medium">update:selectedDate</span>: 数据绑定更新</li>
                                    <li><span class="font-medium">update:startDate/endDate</span>: 范围数据绑定更新</li>
                                </ul>
                            </div>
                            <p class="text-sm text-gray-500 dark:text-gray-400">点击左侧日历选择日期，可查看事件触发效果</p>
                        </div>
                    </div>
                </div>
            </CodePreview>
        </section>

        <!-- 完整颜色预览 (保留原代码) -->
        <section class="mb-12">
            <h2 class="mb-4 text-xl font-semibold">全部颜色主题预览</h2>

            <div v-for="(colors, groupName) in colorGroups" :key="groupName" class="mb-8">
                <h3 class="mb-4 border-b pb-2 text-lg font-semibold">
                    {{ colorGroupNames[groupName] }}
                </h3>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div v-for="color in colors" :key="color"
                        class="rounded-xl border border-gray-100 bg-white p-3 shadow-md dark:border-gray-700 dark:bg-gray-800">
                        <div class="mb-2 flex items-center justify-between">
                            <h4 class="text-base font-medium" :class="`text-${color}-600 dark:text-${color}-400`">
                                {{ color }}
                            </h4>
                            <span
                                :class="`rounded px-2 py-0.5 text-xs text-white bg-${color}-500 dark:bg-${color}-600`">
                                {{ color }}
                            </span>
                        </div>

                        <Calendars v-model:selectedDate="colorDateMap[color]" mode="single" :color="color"
                            :key="`single-${color}`" class="mb-2"
                            @dateSelect="(date: any) => handleColorDateSelect(color, date)" />
                        <div v-if="colorDateMap[color]" class="mt-2 rounded bg-gray-50 p-1.5 text-xs dark:bg-gray-700">
                            <div class="font-medium">已选日期：{{ colorDateMap[color] }}</div>
                            <div class="text-gray-500 dark:text-gray-400">
                                {{ formatSelectedDate(colorDateMap[color]) }}
                            </div>
                            <div v-if="colorDateSelectTimes[color]"
                                class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                                选择时间：{{ formatTime(colorDateSelectTimes[color]) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 所有颜色范围模式预览 (保留原代码) -->
        <section class="mb-12">
            <h2 class="mb-4 text-xl font-semibold">范围选择模式 - 全部颜色</h2>

            <div v-for="(colors, groupName) in colorGroups" :key="`range-${groupName}`" class="mb-8">
                <h3 class="mb-4 border-b pb-2 text-lg font-semibold">
                    {{ colorGroupNames[groupName] }} - 范围选择
                </h3>

                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div v-for="color in colors" :key="`range-${color}`"
                        class="rounded-xl border border-gray-100 bg-white p-3 shadow-md dark:border-gray-700 dark:bg-gray-800">
                        <div class="mb-2 flex items-center justify-between">
                            <h4 class="text-base font-medium" :class="`text-${color}-600 dark:text-${color}-400`">
                                {{ color }}
                            </h4>
                        </div>

                        <Calendars v-model:startDate="colorRangeMap[color].start"
                            v-model:endDate="colorRangeMap[color].end" mode="range" :color="color"
                            :key="`range-${color}`" @rangeSelect="
                                (start: any, end: any) =>
                                    handleColorRangeSelect(color, start, end)
                            " />
                        <div v-if="colorRangeMap[color].start || colorRangeMap[color].end"
                            class="mt-2 rounded bg-gray-50 p-1.5 text-xs dark:bg-gray-700">
                            <div class="font-medium">
                                范围：{{ colorRangeMap[color].start || "未选择" }} 至
                                {{ colorRangeMap[color].end || "未选择" }}
                            </div>
                            <div v-if="colorRangeMap[color].start && colorRangeMap[color].end"
                                class="text-gray-500 dark:text-gray-400">
                                共计
                                {{
                                    getDaysBetween(
                                        colorRangeMap[color].start,
                                        colorRangeMap[color].end,
                                    )
                                }}
                                天
                            </div>
                            <div v-if="colorRangeSelectTimes[color]"
                                class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                                选择时间：{{ formatTime(colorRangeSelectTimes[color]) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- API 文档部分 (保留原代码) -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                组件API
            </h2>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    属性 (Props)
                </h3>
                <div class="mb-6 overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                                    属性名
                                </th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                                    类型
                                </th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                                    默认值
                                </th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                                    描述
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    mode
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    'single' | 'range'
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    'single'
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    选择模式：单选或范围选择
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    color
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    ColorType
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    'blue'
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    日历主题颜色
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    selectedDate
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    string
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    undefined
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    单选模式下选中的日期
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    startDate/endDate
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    string
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    undefined
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    范围选择的开始和结束日期
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    dateFormat
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    string
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    'YYYY-MM-DD'
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    日期格式
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    locale
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    'en' | 'zh-cn'
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'en'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    日历语言
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    disableOutsideDays
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    boolean
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    是否禁用非当前月份的日期
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    initialDate
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    string
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    当前日期
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    初始显示的日期
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    事件 (Events)
                </h3>
                <div class="mb-6 overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                                    事件名
                                </th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                                    回调参数
                                </th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                                    描述
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    dateSelect
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    (date: string)
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    单选模式下选择日期时触发
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    rangeSelect
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    (start: string, end: string)
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    范围模式下完成选择时触发
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    update:selectedDate
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    (date: string)
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    单选模式下更新选中日期时触发
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                                    update:startDate/endDate
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    (date: string)
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                                    范围模式下更新起止日期时触发
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    使用示例
                </h3>
                <div class="mb-6 space-y-4">
                    <h4 class="text-base font-medium text-gray-800 dark:text-gray-200">
                        单选模式
                    </h4>
                    <pre class="overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm dark:bg-gray-800/50">
  <code>&lt;template&gt;
    &lt;Calendars
      v-model:selectedDate="date"
      mode="single"
      color="blue"
      locale="zh-cn"
      @dateSelect="handleDateSelect"
    /&gt;
  &lt;/template&gt;
  
  &lt;script setup lang="ts"&gt;
  import { ref } from 'vue';
  
  const date = ref('');
  const handleDateSelect = (date: string) => {
    console.log('选择的日期:', date);
  };
  &lt;/script&gt;</code></pre>

                    <h4 class="text-base font-medium text-gray-800 dark:text-gray-200">
                        范围选择模式
                    </h4>
                    <pre class="overflow-x-auto rounded-lg bg-gray-50 p-4 text-sm dark:bg-gray-800/50">
  <code>&lt;template&gt;
    &lt;Calendars
      v-model:startDate="startDate"
      v-model:endDate="endDate"
      mode="range"
      color="indigo"
      locale="zh-cn"
      @rangeSelect="handleRangeSelect"
    /&gt;
  &lt;/template&gt;
  
  &lt;script setup lang="ts"&gt;
  import { ref } from 'vue';
  
  const startDate = ref('');
  const endDate = ref('');
  const handleRangeSelect = (start: string, end: string) => {
    console.log('日期范围:', { start, end });
  };
  &lt;/script&gt;</code></pre>
                </div>
            </div>
        </section>

        <!-- 总结 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                小结与最佳实践
            </h2>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <div class="space-y-4">
                    <p class="text-gray-700 dark:text-gray-300">
                        Calendars 组件是一个功能丰富的日历选择器，支持单选和范围选择，并提供多种颜色主题和语言选项。下面是一些使用建议：
                    </p>

                    <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        <li>根据业务需求选择合适的选择模式（单选或范围选择）</li>
                        <li>配合项目设计风格选择合适的颜色主题</li>
                        <li>针对国际化需求设置适当的语言 (locale) 和日期格式 (dateFormat)</li>
                        <li>利用 initialDate 属性设置默认显示的月份，提高用户体验</li>
                        <li>在复杂表单中，可以利用事件回调进行表单验证或联动操作</li>
                    </ul>

                    <div
                        class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                        <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
                            <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
                            提示
                        </h4>
                        <p class="text-sm text-blue-700 dark:text-blue-300">
                            Calendars 组件已完全适配暗色模式，无需额外配置。通过设置 HTML 根元素上的
                            <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">dark</code>
                            类即可启用暗色主题。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import dayjs from 'dayjs';
import Calendars from './Calendars';
import CodePreview from '../../components/CodePreview';
import { ColorType, colorGroups } from './config';
import { getColorButtonClass } from './utils';
import {
    basicUsageCode,
    rangeSelectCode,
    customColorCode,
    localizationCode,
    dateFormatCode,
    eventsCode
} from './code';

// 颜色组名称映射
const colorGroupNames = {
    gray: '灰色系',
    warm: '暖色系',
    green: '绿色系',
    blue: '蓝色系',
    purple: '紫粉色系',
};

// 当前选择的颜色
const selectedColor = ref<ColorType>('blue');

// Add this function to debounce color changes
const debouncedColorChange = (() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return (color: ColorType) => {
        if (timeout) clearTimeout(timeout);
        isColorChanging.value = true;
        timeout = setTimeout(() => {
            selectedColor.value = color;
            setTimeout(() => {
                isColorChanging.value = false;
            }, 50);
        }, 100);
    };
})();

// Add this reactive state to track color change transitions
const isColorChanging = ref(false);

// Replace the setSelectedColor function
const setSelectedColor = (color: ColorType) => {
    if (color === selectedColor.value) return;
    debouncedColorChange(color);
};

// Create cached computed colors for frequently used theme values
const currentColorClasses = computed(() => ({
    text: `text-${selectedColor.value}-500 dark:text-${selectedColor.value}-400`,
    bg: `bg-${selectedColor.value}-500 dark:bg-${selectedColor.value}-600`,
    border: `border-${selectedColor.value}-500 dark:border-${selectedColor.value}-400`,
}));

// 单选日期
const dynamicSelectedDate = ref('');
const handleDynamicDateSelect = (date: string) => {
    dynamicSelectedDate.value = date;
};

// 日期范围选择
const dynamicStartDate = ref('');
const dynamicEndDate = ref('');
const lastRangeSelectTime = ref('');
const handleDynamicRangeSelect = (start: string, end: string) => {
    lastRangeSelectTime.value = new Date().toLocaleTimeString();
};

// 格式化日期
const formatSelectedDate = (date: string) => {
    if (!date) return '';
    return dayjs(date).format('YYYY年MM月DD日 dddd');
};

// 格式化时间
const formatTime = (time: string) => {
    return time;
};

// 计算两个日期之间的天数
const getDaysBetween = (start: string, end: string) => {
    if (!start || !end) return 0;
    return dayjs(end).diff(dayjs(start), 'day') + 1;
};

// 为每个颜色保存选择的日期
const colorDateMap = reactive<Record<string, string>>({});
const colorDateSelectTimes = reactive<Record<string, string>>({});

// 处理颜色日期选择
const handleColorDateSelect = (color: string, date: string) => {
    colorDateMap[color] = date;
    colorDateSelectTimes[color] = new Date().toLocaleTimeString();
};

// 为每个颜色保存日期范围
const colorRangeMap = reactive<Record<string, { start: string; end: string }>>({});
const colorRangeSelectTimes = reactive<Record<string, string>>({});

// 初始化所有颜色的日期范围映射
Object.values(colorGroups).forEach((group) => {
    group.forEach((color) => {
        colorRangeMap[color] = { start: '', end: '' };
    });
});

// 处理颜色范围选择
const handleColorRangeSelect = (color: string, start: string, end: string) => {
    colorRangeMap[color].start = start;
    colorRangeMap[color].end = end;
    colorRangeSelectTimes[color] = new Date().toLocaleTimeString();
};

// 新增: CodePreview 相关的响应式变量
const colorPreviewDate = ref('');
const localeEnDate = ref('');
const localeZhDate = ref('');
const formatDateValue = ref('');
const eventDemoDate = ref('');
const eventLog = ref('');

// 事件处理函数
const handleEventDemo = (date: string) => {
    eventLog.value = `选择了日期: ${date} (${new Date().toLocaleTimeString()})`;
};

const handleFormatDateSelect = (date: string) => {
    console.log('格式化后的日期:', date);
};
</script>
