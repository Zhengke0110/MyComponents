<template>
  <div class="p-4 md:p-8 max-w-7xl mx-auto">
    <h1 class="text-2xl font-bold mb-8">日历组件展示</h1>

    <!-- 暗色模式切换 - 改进样式使按钮更突出 -->
    <div class="mb-6 flex justify-end">
      <button @click="toggleDarkMode" class="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 shadow-sm
               bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600
               dark:from-indigo-400 dark:to-purple-500 dark:hover:from-indigo-500 dark:hover:to-purple-600
               text-white font-medium transform hover:scale-105 hover:shadow-md active:scale-95">
        <span v-if="isDarkMode" class="icon-[material-symbols--wb-sunny-outline-rounded] size-5"></span>
        <span v-else class="icon-[material-symbols--dark-mode-outline-rounded]  size-5"></span>
        <span>{{ isDarkMode ? '切换到亮色模式' : '切换到暗色模式' }}</span>
      </button>
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
import { ref, reactive, onMounted } from 'vue';
import Calendars, {ColorType, colorGroups, getColorButtonClass, colorHexMap } from '../../components/Calendars';
import dayjs from 'dayjs';

// 暗色模式控制
const isDarkMode = ref(false);

// 在组件挂载时检查暗色模式
onMounted(() => {
  // 检查系统偏好或本地存储
  const darkModePreference = localStorage.getItem('darkMode');
  if (darkModePreference === 'true' ||
    (!darkModePreference && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    isDarkMode.value = true;
  }
});

// 切换暗色模式
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  }
};

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
/* 全局样式 */
.dark {
  color-scheme: dark;
}

/* 暗色模式下的背景色 */
.dark body {
  background-color: #1f2937;
  color: #f9fafb;
}

/* 过渡效果 */
body {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* 主题切换按钮动画 */
@keyframes pulse-light {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }

  50% {
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  }
}

@keyframes pulse-dark {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4);
  }

  50% {
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
  }
}

.dark .theme-toggle-button {
  animation: pulse-dark 2s infinite;
}

.theme-toggle-button {
  animation: pulse-light 2s infinite;
}
</style>