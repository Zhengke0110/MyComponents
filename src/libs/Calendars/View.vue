<template>
    <div class="mx-auto max-w-7xl p-4 md:p-8">
        <h1 class="mb-8 text-2xl font-bold">日历组件展示</h1>

        <!-- 所有颜色展示 -->
        <section class="mb-12">
            <h2 class="mb-4 text-xl font-semibold">所有可用颜色主题</h2>
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                <!-- 色系分组显示 -->
                <div v-for="(colors, groupName) in colorGroups" :key="groupName" class="flex flex-col items-center">
                    <h3 class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                        {{ colorGroupNames[groupName] }}
                    </h3>
                    <div class="space-y-2">
                        <div v-for="color in colors" :key="color"
                            class="flex w-24 cursor-pointer items-center justify-between rounded-md px-2 py-1 transition-all"
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
        </section>

        <!-- 当前选中主题的日历 -->
        <section class="mb-12">
            <h2 class="mb-4 text-xl font-semibold">
                当前选中颜色:
                <span :class="`text-${selectedColor}-500 dark:text-${selectedColor}-400`">{{ selectedColor }}</span>
            </h2>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div
                    class="rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-200 ease-in-out dark:border-gray-700 dark:bg-gray-800">
                    <h3 class="mb-3 text-lg font-semibold">单选模式</h3>
                    <Calendars v-model:selectedDate="dynamicSelectedDate" mode="single" :color="selectedColor"
                        :key="`single-dynamic-${selectedColor}`" @dateSelect="handleDynamicDateSelect" />
                    <div v-if="dynamicSelectedDate" class="mt-3 rounded bg-gray-50 p-2 text-sm dark:bg-gray-700">
                        <div class="font-medium text-gray-700 dark:text-gray-300">
                            选中日期：{{ dynamicSelectedDate }}
                        </div>
                        <div class="text-gray-500 dark:text-gray-400">
                            {{ formatSelectedDate(dynamicSelectedDate) }}
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-xl border border-gray-100 bg-white p-4 shadow-md transition-all duration-200 ease-in-out dark:border-gray-700 dark:bg-gray-800">
                    <h3 class="mb-3 text-lg font-semibold">范围选择模式</h3>
                    <Calendars v-model:startDate="dynamicStartDate" v-model:endDate="dynamicEndDate" mode="range"
                        :color="selectedColor" :key="`range-dynamic-${selectedColor}`"
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
            </div>
        </section>

        <!-- 完整颜色预览 -->
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

        <!-- 所有颜色范围模式预览 -->
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

        <!-- API 文档部分 -->
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
                        Calendars
                        日历组件是界面中常用的日期选择元素，适用于各种需要用户选择日期或日期范围的场景。以下是一些使用建议：
                    </p>

                    <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                            根据业务需求选择合适的模式：单日期选择适用于选择具体某一天，范围选择适用于时间段筛选
                        </li>
                        <li>使用符合品牌色调的颜色主题，提供一致的设计体验</li>
                        <li>结合表单验证，确保用户选择的日期符合业务规则</li>
                        <li>在表单中使用时，提供清晰的标签和必要的提示信息</li>
                        <li>根据国际化需求，选择合适的语言设置</li>
                    </ul>

                    <div
                        class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                        <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
                            <span class="icon-[material-symbols--lightbulb-outline] mr-2 h-5 w-5"></span>
                            日期选择建议
                        </h4>
                        <p class="text-sm text-blue-700 dark:text-blue-300">
                            日期选择器最常见的用途是预订系统、筛选数据和表单填写。在这些场景中，日历组件应该提供良好的可访问性和直观的交互体验。
                            考虑添加辅助提示，特别是对于日期范围选择，帮助用户理解选择的含义和限制条件。
                        </p>
                    </div>

                    <div
                        class="mt-4 rounded-lg border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-900/20">
                        <h4 class="mb-2 flex items-center text-emerald-800 dark:text-emerald-300">
                            <span class="icon-[material-symbols--tips-and-updates-outline-rounded] mr-2 h-5 w-5"></span>
                            性能优化提示
                        </h4>
                        <p class="text-sm text-emerald-700 dark:text-emerald-300">
                            使用
                            <code
                                class="rounded bg-emerald-100 px-1 py-0.5 font-mono text-xs dark:bg-emerald-800/60">:key</code>
                            属性确保在主题或日期变化时组件能正确重新渲染。当在列表或循环中渲染多个日历组件时，确保每个实例
                            有唯一的标识符，避免不必要的重新渲染。
                        </p>
                    </div>

                    <p class="text-gray-700 dark:text-gray-300">
                        日历组件已针对暗色模式和不同颜色主题进行了优化，可以无缝融入各种设计系统。使用合适的日历组件配置，
                        可以显著提升用户在日期选择相关任务中的体验和效率。
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import Calendars, {
    ColorType,
    colorGroups,
    getColorButtonClass,
} from "./Calendars";
import dayjs from "dayjs";

// 颜色组的名称映射
const colorGroupNames = {
    gray: "灰色系",
    warm: "暖色系",
    green: "绿色系",
    blue: "蓝色系",
    purple: "紫粉色系",
};

// 当前选中的颜色
const selectedColor = ref<ColorType>("blue");

// 设置选中的颜色
const setSelectedColor = (color: ColorType) => {
    selectedColor.value = color;
};

// 基础用法示例数据
const singleDate = ref("");
const startDate = ref("");
const endDate = ref("");

// 动态主题日历的数据
const dynamicSelectedDate = ref("");
const dynamicStartDate = ref("");
const dynamicEndDate = ref("");
const lastRangeSelectTime = ref<Date | null>(null);

// 为每种颜色创建日期状态
const colorDateMap: Record<ColorType, string> = reactive({
    slate: "",
    gray: "",
    zinc: "",
    neutral: "",
    stone: "",
    red: "",
    orange: "",
    amber: "",
    yellow: "",
    lime: "",
    green: "",
    emerald: "",
    teal: "",
    cyan: "",
    sky: "",
    blue: "",
    indigo: "",
    violet: "",
    purple: "",
    fuchsia: "",
    pink: "",
    rose: "",
});

// 为每种颜色创建日期选择时间记录
const colorDateSelectTimes: Record<ColorType, Date | null> = reactive({
    slate: null,
    gray: null,
    zinc: null,
    neutral: null,
    stone: null,
    red: null,
    orange: null,
    amber: null,
    yellow: null,
    lime: null,
    green: null,
    emerald: null,
    teal: null,
    cyan: null,
    sky: null,
    blue: null,
    indigo: null,
    violet: null,
    purple: null,
    fuchsia: null,
    pink: null,
    rose: null,
});

// 为每种颜色创建日期范围状态
const colorRangeMap: Record<ColorType, { start: string; end: string }> =
    reactive({
        slate: { start: "", end: "" },
        gray: { start: "", end: "" },
        zinc: { start: "", end: "" },
        neutral: { start: "", end: "" },
        stone: { start: "", end: "" },
        red: { start: "", end: "" },
        orange: { start: "", end: "" },
        amber: { start: "", end: "" },
        yellow: { start: "", end: "" },
        lime: { start: "", end: "" },
        green: { start: "", end: "" },
        emerald: { start: "", end: "" },
        teal: { start: "", end: "" },
        cyan: { start: "", end: "" },
        sky: { start: "", end: "" },
        blue: { start: "", end: "" },
        indigo: { start: "", end: "" },
        violet: { start: "", end: "" },
        purple: { start: "", end: "" },
        fuchsia: { start: "", end: "" },
        pink: { start: "", end: "" },
        rose: { start: "", end: "" },
    });

// 为每种颜色创建范围选择时间记录
const colorRangeSelectTimes: Record<ColorType, Date | null> = reactive({
    slate: null,
    gray: null,
    zinc: null,
    neutral: null,
    stone: null,
    red: null,
    orange: null,
    amber: null,
    yellow: null,
    lime: null,
    green: null,
    emerald: null,
    teal: null,
    cyan: null,
    sky: null,
    blue: null,
    indigo: null,
    violet: null,
    purple: null,
    fuchsia: null,
    pink: null,
    rose: null,
});

// 初始化一些示例日期以更好地展示效果
const initializeExampleDates = () => {
    const today = new Date();

    // 设置一些预设值提高展示效果
    singleDate.value = dayjs(today).format("YYYY-MM-DD");
    startDate.value = dayjs(today).subtract(3, "day").format("YYYY-MM-DD");
    endDate.value = dayjs(today).add(3, "day").format("YYYY-MM-DD");

    // 为紫色和琥珀色预设范围
    colorRangeMap.violet.start = dayjs(today)
        .subtract(3, "day")
        .format("YYYY-MM-DD");
    colorRangeMap.violet.end = dayjs(today).add(3, "day").format("YYYY-MM-DD");
    colorRangeSelectTimes.violet = new Date();

    colorRangeMap.amber.start = dayjs(today)
        .subtract(5, "day")
        .format("YYYY-MM-DD");
    colorRangeMap.amber.end = dayjs(today).add(2, "day").format("YYYY-MM-DD");
    colorRangeSelectTimes.amber = new Date();
};

// 获取格式化的时间
const formatTime = (date: Date | null): string => {
    if (!date) return "";
    return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

// 格式化选中的日期
const formatSelectedDate = (date: string): string => {
    if (!date) return "";
    const d = dayjs(date);
    return `${d.year()}年${d.month() + 1}月${d.date()}日 星期${["日", "一", "二", "三", "四", "五", "六"][d.day()]}`;
};

// 计算两个日期之间的天数
const getDaysBetween = (startDate: string, endDate: string): number => {
    if (!startDate || !endDate) return 0;
    const start = dayjs(startDate);
    const end = dayjs(endDate);
    return end.diff(start, "day") + 1; // 包含首尾日期
};

// 动态主题日历的事件处理
const handleDynamicDateSelect = (date: string) => {
    console.log(`[${selectedColor.value}] 单选模式选择日期:`, date);
};

const handleDynamicRangeSelect = (start: string, end: string) => {
    console.log(`[${selectedColor.value}] 范围模式选择:`, { start, end });
    lastRangeSelectTime.value = new Date();
};

// 颜色预览的事件处理
const handleColorDateSelect = (color: ColorType, date: string) => {
    console.log(`[${color}] 单选模式选择日期:`, date);
    colorDateSelectTimes[color] = new Date();
};

const handleColorRangeSelect = (
    color: ColorType,
    start: string,
    end: string,
) => {
    console.log(`[${color}] 范围模式选择:`, { start, end });
    colorRangeSelectTimes[color] = new Date();
};

// 页面加载时初始化数据
onMounted(() => {
    // 初始化示例数据
    initializeExampleDates();
});
</script>
