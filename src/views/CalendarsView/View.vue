<template>
  <div class="p-4 md:p-8 max-w-7xl mx-auto">
    <h1 class="text-2xl font-bold mb-8">日历组件展示</h1>

    <!-- 暗色模式切换 - 使用 @vueuse/core 的实现 -->
    <div class="mb-6 flex justify-end">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
            <span class="text-sm">暗色模式</span>
            <div class="relative inline-block h-6 w-11 cursor-pointer rounded-full bg-gray-200 transition-colors duration-200 ease-in-out dark:bg-blue-600"
                @click="toggleDark()">
                <span :class="[
                    'absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-in-out',
                    isDark ? 'translate-x-5' : 'translate-x-0'
                ]"></span>
            </div>
        </div>

        <div class="flex items-center gap-3">
            <button 
                class="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 bg-blue-500 hover:bg-blue-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-medium"
                @click="toggleDark()">
                <span :class="[
                    isDark ? 'icon-[material-symbols--wb-sunny-outline-rounded]' : 'icon-[material-symbols--dark-mode-outline-rounded]',
                    'size-5'
                ]"></span>
                <span>{{ isDark ? '切换到亮色模式' : '切换到暗色模式' }}</span>
            </button>

            <button 
                class="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium"
                @click="preferredDark ? toggleDark(false) : toggleDark(true)">
                <span class="icon-[material-symbols--settings-outline-rounded] size-5"></span>
                <span>系统偏好</span>
            </button>
        </div>
      </div>
    </div>

    <!-- 所有颜色展示 -->
    <section class="mb-12">
      <h2 class="text-xl font-semibold mb-4">所有可用颜色主题</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <!-- 色系分组显示 -->
        <div v-for="(colors, groupName) in colorGroups" :key="groupName" class="flex flex-col items-center">
          <h3 class="text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">{{ colorGroupNames[groupName] }}</h3>
          <div class="space-y-2">
            <div v-for="color in colors" :key="color"
              class="flex items-center justify-between w-24 px-2 py-1 rounded-md transition-all cursor-pointer" :class="[
                getColorButtonClass(color),
                selectedTheme === color ? `ring-2 ring-offset-1` : 'hover:opacity-80'
              ]" @click="setSelectedTheme(color)">
              <span>{{ color }}</span>
              <span v-if="selectedTheme === color" class="i-tabler-check text-white w-4 h-4"></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 当前选中主题的日历 -->
    <section class="mb-12">
      <h2 class="text-xl font-semibold mb-4">当前选中主题:
        <span :style="getColorTextStyle(selectedTheme)">{{ selectedTheme }}</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-200 ease-in-out">
          <h3 class="text-lg font-semibold mb-3">单选模式</h3>
          <Calendars v-model:selectedDate="dynamicSelectedDate" mode="single" :theme="selectedTheme"
            :key="`single-dynamic-${selectedTheme}`" @dateSelect="handleDynamicDateSelect" />
          <div v-if="dynamicSelectedDate" class="mt-3 p-2 bg-gray-50 dark:bg-gray-700 rounded text-sm">
            <div class="font-medium text-gray-700 dark:text-gray-300">选中日期：{{ dynamicSelectedDate }}</div>
            <div class="text-gray-500 dark:text-gray-400">{{ formatSelectedDate(dynamicSelectedDate) }}</div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-200 ease-in-out">
          <h3 class="text-lg font-semibold mb-3">范围选择模式</h3>
          <Calendars v-model:startDate="dynamicStartDate" v-model:endDate="dynamicEndDate" mode="range"
            :theme="selectedTheme" :key="`range-dynamic-${selectedTheme}`" @rangeSelect="handleDynamicRangeSelect" />
          <div v-if="dynamicStartDate || dynamicEndDate" class="mt-3 p-2 bg-gray-50 dark:bg-gray-700 rounded text-sm">
            <div class="font-medium text-gray-700 dark:text-gray-300">
              选择范围：{{ dynamicStartDate || '未选择' }} 至 {{ dynamicEndDate || '未选择' }}
            </div>
            <div v-if="dynamicStartDate && dynamicEndDate" class="text-gray-500 dark:text-gray-400">
              共 {{ getDaysBetween(dynamicStartDate, dynamicEndDate) }} 天
            </div>
            <div v-if="lastRangeSelectTime" class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              最后选择时间：{{ formatTime(lastRangeSelectTime) }}
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- 完整颜色预览 -->
    <section class="mb-12">
      <h2 class="text-xl font-semibold mb-4">全部颜色主题预览</h2>

      <div v-for="(colors, groupName) in colorGroups" :key="groupName" class="mb-8">
        <h3 class="text-lg font-semibold mb-4 border-b pb-2">{{ colorGroupNames[groupName] }}</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="color in colors" :key="color"
            class="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md border border-gray-100 dark:border-gray-700">
            <div class="flex justify-between items-center mb-2">
              <h4 class="text-base font-medium" :style="getColorTextStyle(color)">{{ color }}</h4>
              <span class="px-2 py-0.5 rounded text-xs" :style="{
                backgroundColor: colorHexMap[color]?.primary || '#3b82f6',
                color: 'white'
              }">
                {{ colorHexMap[color]?.primary || '#3b82f6' }}
              </span>
            </div>

            <Calendars v-model:selectedDate="colorDateMap[color]" mode="single" :theme="color" :key="`single-${color}`"
              class="mb-2" @dateSelect="date => handleColorDateSelect(color, date)" />
            <div v-if="colorDateMap[color]" class="mt-2 p-1.5 bg-gray-50 dark:bg-gray-700 rounded text-xs">
              <div class="font-medium">已选日期：{{ colorDateMap[color] }}</div>
              <div class="text-gray-500 dark:text-gray-400">{{ formatSelectedDate(colorDateMap[color]) }}</div>
              <div v-if="colorDateSelectTimes[color]" class="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
                选择时间：{{ formatTime(colorDateSelectTimes[color]) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 所有颜色范围模式预览 -->
    <section class="mb-12">
      <h2 class="text-xl font-semibold mb-4">范围选择模式 - 全部颜色</h2>

      <div v-for="(colors, groupName) in colorGroups" :key="`range-${groupName}`" class="mb-8">
        <h3 class="text-lg font-semibold mb-4 border-b pb-2">{{ colorGroupNames[groupName] }} - 范围选择</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="color in colors" :key="`range-${color}`"
            class="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md border border-gray-100 dark:border-gray-700">
            <div class="flex justify-between items-center mb-2">
              <h4 class="text-base font-medium" :style="getColorTextStyle(color)">{{ color }}</h4>
            </div>

            <Calendars v-model:startDate="colorRangeMap[color].start" v-model:endDate="colorRangeMap[color].end"
              mode="range" :theme="color" :key="`range-${color}`"
              @rangeSelect="(start, end) => handleColorRangeSelect(color, start, end)" />
            <div v-if="colorRangeMap[color].start || colorRangeMap[color].end"
              class="mt-2 p-1.5 bg-gray-50 dark:bg-gray-700 rounded text-xs">
              <div class="font-medium">
                范围：{{ colorRangeMap[color].start || '未选择' }} 至 {{ colorRangeMap[color].end || '未选择' }}
              </div>
              <div v-if="colorRangeMap[color].start && colorRangeMap[color].end"
                class="text-gray-500 dark:text-gray-400">
                共计 {{ getDaysBetween(colorRangeMap[color].start, colorRangeMap[color].end) }} 天
              </div>
              <div v-if="colorRangeSelectTimes[color]" class="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
                选择时间：{{ formatTime(colorRangeSelectTimes[color]) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch, onBeforeUnmount } from 'vue';
import Calendars, {ColorType, colorGroups, getColorButtonClass, colorHexMap } from '../../components/Calendars';
import dayjs from 'dayjs';
import { useDark, useToggle } from '@vueuse/core';

// 使用 vueuse/core 的暗色模式钩子
const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: ''
});
const toggleDark = useToggle(isDark);

// 检查系统颜色偏好
const preferredDark = ref(false);
if (window.matchMedia) {
    preferredDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// 确保暗色模式正确应用
onMounted(() => {
  // 初始应用暗色模式
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark-mode');
  }
  
  // 自动检测并添加使用暗色模式的标记类
  document.documentElement.classList.add('using-dark-mode');
  
  // 初始化示例数据
  initializeExampleDates();
});

// 监听暗色模式变化
watch(isDark, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark-mode');
  }
  
  // 强制触发重新渲染
  setTimeout(() => {
    document.body.style.transition = 'background-color 0.3s ease';
    if (newVal) {
      document.body.style.backgroundColor = '#1f2937';
    } else {
      document.body.style.backgroundColor = '';
    }
  }, 0);
});

// 清理函数
onBeforeUnmount(() => {
  document.documentElement.classList.remove('using-dark-mode');
});

// 颜色组的名称映射
const colorGroupNames = {
  gray: '灰色系',
  warm: '暖色系',
  green: '绿色系',
  blue: '蓝色系',
  purple: '紫粉色系'
};

// 当前选中的主题色
const selectedTheme = ref<ColorType>('blue');

// 动态主题日历的数据
const dynamicSelectedDate = ref('');
const dynamicStartDate = ref('');
const dynamicEndDate = ref('');
const lastRangeSelectTime = ref<Date | null>(null);

// 设置选中的主题
const setSelectedTheme = (color: ColorType) => {
  selectedTheme.value = color;
};

// 获取颜色对应的文本色样式
const getColorTextStyle = (color: ColorType) => {
  const colorData = colorHexMap[color];
  return { color: colorData?.primary || '#3b82f6' };
};

// 为每种颜色创建日期状态
const colorDateMap: Record<ColorType, string> = reactive({
  slate: '', gray: '', zinc: '', neutral: '', stone: '',
  red: '', orange: '', amber: '', yellow: '',
  lime: '', green: '', emerald: '', teal: '',
  cyan: '', sky: '', blue: '', indigo: '',
  violet: '', purple: '', fuchsia: '', pink: '', rose: ''
});

// 为每种颜色创建日期选择时间记录
const colorDateSelectTimes: Record<ColorType, Date | null> = reactive({
  slate: null, gray: null, zinc: null, neutral: null, stone: null,
  red: null, orange: null, amber: null, yellow: null,
  lime: null, green: null, emerald: null, teal: null,
  cyan: null, sky: null, blue: null, indigo: null,
  violet: null, purple: null, fuchsia: null, pink: null, rose: null
});

// 为每种颜色创建日期范围状态
const colorRangeMap: Record<ColorType, { start: string, end: string }> = reactive({
  slate: { start: '', end: '' },
  gray: { start: '', end: '' },
  zinc: { start: '', end: '' },
  neutral: { start: '', end: '' },
  stone: { start: '', end: '' },
  red: { start: '', end: '' },
  orange: { start: '', end: '' },
  amber: { start: '', end: '' },
  yellow: { start: '', end: '' },
  lime: { start: '', end: '' },
  green: { start: '', end: '' },
  emerald: { start: '', end: '' },
  teal: { start: '', end: '' },
  cyan: { start: '', end: '' },
  sky: { start: '', end: '' },
  blue: { start: '', end: '' },
  indigo: { start: '', end: '' },
  violet: { start: '', end: '' },
  purple: { start: '', end: '' },
  fuchsia: { start: '', end: '' },
  pink: { start: '', end: '' },
  rose: { start: '', end: '' }
});

// 为每种颜色创建范围选择时间记录
const colorRangeSelectTimes: Record<ColorType, Date | null> = reactive({
  slate: null, gray: null, zinc: null, neutral: null, stone: null,
  red: null, orange: null, amber: null, yellow: null,
  lime: null, green: null, emerald: null, teal: null,
  cyan: null, sky: null, blue: null, indigo: null,
  violet: null, purple: null, fuchsia: null, pink: null, rose: null
});

// 初始化一些示例日期以更好地展示效果
const initializeExampleDates = () => {
  const today = new Date();

  // 为紫色和琥珀色预设范围
  colorRangeMap.violet.start = dayjs(today).subtract(3, 'day').format('YYYY-MM-DD');
  colorRangeMap.violet.end = dayjs(today).add(3, 'day').format('YYYY-MM-DD');
  colorRangeSelectTimes.violet = new Date();

  colorRangeMap.amber.start = dayjs(today).subtract(5, 'day').format('YYYY-MM-DD');
  colorRangeMap.amber.end = dayjs(today).add(2, 'day').format('YYYY-MM-DD');
  colorRangeSelectTimes.amber = new Date();
};

// 获取格式化的时间
const formatTime = (date: Date | null): string => {
  if (!date) return '';
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};

// 格式化选中的日期
const formatSelectedDate = (date: string): string => {
  if (!date) return '';
  const d = dayjs(date);
  return `${d.year()}年${d.month() + 1}月${d.date()}日 星期${['日', '一', '二', '三', '四', '五', '六'][d.day()]}`;
};

// 计算两个日期之间的天数
const getDaysBetween = (startDate: string, endDate: string): number => {
  if (!startDate || !endDate) return 0;
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  return end.diff(start, 'day') + 1; // 包含首尾日期
};

// 动态主题日历的事件处理
const handleDynamicDateSelect = (date: string) => {
  console.log(`[${selectedTheme.value}] 单选模式选择日期:`, date);
};

const handleDynamicRangeSelect = (start: string, end: string) => {
  console.log(`[${selectedTheme.value}] 范围模式选择:`, { start, end });
  lastRangeSelectTime.value = new Date();
};

// 颜色预览的事件处理
const handleColorDateSelect = (color: ColorType, date: string) => {
  console.log(`[${color}] 单选模式选择日期:`, date);
  colorDateSelectTimes[color] = new Date();
};

const handleColorRangeSelect = (color: ColorType, start: string, end: string) => {
  console.log(`[${color}] 范围模式选择:`, { start, end });
  colorRangeSelectTimes[color] = new Date();
};

// 在组件挂载时初始化示例数据
onMounted(() => {
  initializeExampleDates();
});
</script>

<style>
/* 确保暗模式生效的基本样式 */
:root {
  color-scheme: light;
}

:root.dark, html.dark {
  color-scheme: dark;
  background-color: #1f2937; /* gray-800 */
}

body.dark-mode {
  background-color: #1f2937; /* gray-800 */
}

/* 确保所有标题和文本在暗色模式下显示为白色 */
.dark h1,
.dark h2,
.dark h3,
.dark h4,
.dark h5,
.dark h6,
.dark .text-gray-900 {
  color: white !important;
}

/* 暗色模式下其他文本颜色适配 */
.dark .text-gray-700 {
  color: #d1d5db !important; /* gray-300 */
}

.dark .text-gray-600 {
  color: #9ca3af !important; /* gray-400 */
}

/* 系统暗色模式自动适配 */
@media (prefers-color-scheme: dark) {
  :root.using-dark-mode:not(.light) {
    background-color: #1f2937;
  }
  
  :root:not(.using-dark-mode) {
    color-scheme: dark;
  }
}
</style>