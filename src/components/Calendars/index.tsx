import {
  defineComponent,
  ref,
  computed,
  onMounted,
  PropType,
  TransitionGroup,
  CSSProperties,
  watch,
} from "vue";
import dayjs from "dayjs";
export type ColorType = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系
import "./theme.css"; // 导入主题CSS

export interface DayType {
  date: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
}

const calendarUtils = {
  getWeekDays(locale: string): string[] {
    return locale === "zh-cn"
      ? ["日", "一", "二", "三", "四", "五", "六"]
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  },

  getMonthLabel(date: dayjs.Dayjs): string {
    return date.format("YYYY年MM月");
  },

  getDayNumber(date: string): number {
    return dayjs(date).date();
  },

  formatDate(date: string, format: string): string {
    return dayjs(date).format(format);
  },

  getCalendarDays(
    currentDate: dayjs.Dayjs,
    selectedDate: string | null,
  ): DayType[] {
    const days: DayType[] = [];
    const firstDay = currentDate.startOf("month");
    const lastDay = currentDate.endOf("month");
    const startDay = firstDay.startOf("week");
    const endDay = lastDay.endOf("week");

    let currentDay = startDay;
    while (currentDay.isBefore(endDay) || currentDay.isSame(endDay, "day")) {
      days.push({
        date: currentDay.format("YYYY-MM-DD"),
        isCurrentMonth: currentDay.month() === currentDate.month(),
        isToday: currentDay.isSame(dayjs(), "day"),
        isSelected: selectedDate
          ? currentDay.isSame(dayjs(selectedDate), "day")
          : false,
        isInRange: false,
        isRangeStart: false,
        isRangeEnd: false,
      });
      currentDay = currentDay.add(1, "day");
    }
    return days;
  },

  getCalendarDaysWithRange(
    currentDate: dayjs.Dayjs,
    selectedDate: string | null,
    rangeStart: string | null,
    rangeEnd: string | null,
  ): DayType[] {
    const days = this.getCalendarDays(currentDate, selectedDate);
    if (rangeStart && rangeEnd) {
      return days.map((day) => ({
        ...day,
        isInRange:
          dayjs(day.date).isAfter(rangeStart) &&
          dayjs(day.date).isBefore(rangeEnd),
        isRangeStart: day.date === rangeStart,
        isRangeEnd: day.date === rangeEnd,
      }));
    }
    return days;
  },
};

// 添加颜色主题映射
const colorThemeMap = {
  primary: {
    slate: "bg-slate-500 text-white",
    gray: "bg-gray-500 text-white",
    zinc: "bg-zinc-500 text-white",
    neutral: "bg-neutral-500 text-white",
    stone: "bg-stone-500 text-white",
    red: "bg-red-500 text-white",
    orange: "bg-orange-500 text-white",
    amber: "bg-amber-500 text-white",
    yellow: "bg-yellow-500 text-white",
    lime: "bg-lime-500 text-white",
    green: "bg-green-500 text-white",
    emerald: "bg-emerald-500 text-white",
    teal: "bg-teal-500 text-white",
    cyan: "bg-cyan-500 text-white",
    sky: "bg-sky-500 text-white",
    blue: "bg-blue-500 text-white",
    indigo: "bg-indigo-500 text-white",
    violet: "bg-violet-500 text-white",
    purple: "bg-purple-500 text-white",
    fuchsia: "bg-fuchsia-500 text-white",
    pink: "bg-pink-500 text-white",
    rose: "bg-rose-500 text-white"
  },
  lightBg: {
    slate: "bg-slate-100 dark:bg-slate-900/30",
    gray: "bg-gray-100 dark:bg-gray-900/30",
    zinc: "bg-zinc-100 dark:bg-zinc-900/30",
    neutral: "bg-neutral-100 dark:bg-neutral-900/30",
    stone: "bg-stone-100 dark:bg-stone-900/30",
    red: "bg-red-100 dark:bg-red-900/30",
    orange: "bg-orange-100 dark:bg-orange-900/30",
    amber: "bg-amber-100 dark:bg-amber-900/30",
    yellow: "bg-yellow-100 dark:bg-yellow-900/30",
    lime: "bg-lime-100 dark:bg-lime-900/30",
    green: "bg-green-100 dark:bg-green-900/30",
    emerald: "bg-emerald-100 dark:bg-emerald-900/30",
    teal: "bg-teal-100 dark:bg-teal-900/30",
    cyan: "bg-cyan-100 dark:bg-cyan-900/30",
    sky: "bg-sky-100 dark:bg-sky-900/30",
    blue: "bg-blue-100 dark:bg-blue-900/30",
    indigo: "bg-indigo-100 dark:bg-indigo-900/30",
    violet: "bg-violet-100 dark:bg-violet-900/30",
    purple: "bg-purple-100 dark:bg-purple-900/30",
    fuchsia: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
    pink: "bg-pink-100 dark:bg-pink-900/30",
    rose: "bg-rose-100 dark:bg-rose-900/30"
  },
  todayText: {
    slate: "text-slate-600 dark:text-slate-400",
    gray: "text-gray-600 dark:text-gray-400",
    zinc: "text-zinc-600 dark:text-zinc-400",
    neutral: "text-neutral-600 dark:text-neutral-400",
    stone: "text-stone-600 dark:text-stone-400",
    red: "text-red-600 dark:text-red-400",
    orange: "text-orange-600 dark:text-orange-400",
    amber: "text-amber-600 dark:text-amber-400",
    yellow: "text-yellow-600 dark:text-yellow-400",
    lime: "text-lime-600 dark:text-lime-400",
    green: "text-green-600 dark:text-green-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
    teal: "text-teal-600 dark:text-teal-400",
    cyan: "text-cyan-600 dark:text-cyan-400",
    sky: "text-sky-600 dark:text-sky-400",
    blue: "text-blue-600 dark:text-blue-400",
    indigo: "text-indigo-600 dark:text-indigo-400",
    violet: "text-violet-600 dark:text-violet-400",
    purple: "text-purple-600 dark:text-purple-400",
    fuchsia: "text-fuchsia-600 dark:text-fuchsia-400",
    pink: "text-pink-600 dark:text-pink-400",
    rose: "text-rose-600 dark:text-rose-400"
  },
  focus: {
    slate: "focus:ring-slate-500",
    gray: "focus:ring-gray-500",
    zinc: "focus:ring-zinc-500",
    neutral: "focus:ring-neutral-500",
    stone: "focus:ring-stone-500",
    red: "focus:ring-red-500",
    orange: "focus:ring-orange-500",
    amber: "focus:ring-amber-500",
    yellow: "focus:ring-yellow-500",
    lime: "focus:ring-lime-500",
    green: "focus:ring-green-500",
    emerald: "focus:ring-emerald-500",
    teal: "focus:ring-teal-500",
    cyan: "focus:ring-cyan-500",
    sky: "focus:ring-sky-500",
    blue: "focus:ring-blue-500",
    indigo: "focus:ring-indigo-500",
    violet: "focus:ring-violet-500",
    purple: "focus:ring-purple-500",
    fuchsia: "focus:ring-fuchsia-500",
    pink: "focus:ring-pink-500",
    rose: "focus:ring-rose-500"
  }
};

// 颜色对应的16进制色值映射 - 增加暗色模式支持
export const colorHexMap: Record<ColorType, {
  primary: string;
  light: string;
  text: string;
  // 添加暗色模式对应的颜色
  darkPrimary: string;
  darkLight: string;
  darkText: string;
}> = {
  slate: { 
    primary: '#64748b', light: '#f8fafc', text: '#475569',
    darkPrimary: '#94a3b8', darkLight: '#0f172a', darkText: '#cbd5e1'
  },
  gray: { 
    primary: '#6b7280', light: '#f9fafb', text: '#4b5563',
    darkPrimary: '#9ca3af', darkLight: '#111827', darkText: '#d1d5db' 
  },
  zinc: { 
    primary: '#71717a', light: '#fafafa', text: '#52525b',
    darkPrimary: '#a1a1aa', darkLight: '#18181b', darkText: '#d4d4d8' 
  },
  neutral: { 
    primary: '#737373', light: '#fafafa', text: '#525252',
    darkPrimary: '#a3a3a3', darkLight: '#171717', darkText: '#d4d4d4' 
  },
  stone: { 
    primary: '#78716c', light: '#fafaf9', text: '#57534e',
    darkPrimary: '#a8a29e', darkLight: '#1c1917', darkText: '#d6d3d1' 
  },
  red: { 
    primary: '#ef4444', light: '#fef2f2', text: '#b91c1c',
    darkPrimary: '#f87171', darkLight: '#450a0a', darkText: '#fca5a5' 
  },
  orange: { 
    primary: '#f97316', light: '#fff7ed', text: '#c2410c',
    darkPrimary: '#fb923c', darkLight: '#431407', darkText: '#fdba74' 
  },
  amber: { 
    primary: '#f59e0b', light: '#fffbeb', text: '#b45309',
    darkPrimary: '#fbbf24', darkLight: '#451a03', darkText: '#fcd34d' 
  },
  yellow: { 
    primary: '#eab308', light: '#fefce8', text: '#a16207',
    darkPrimary: '#facc15', darkLight: '#422006', darkText: '#fde047' 
  },
  lime: { 
    primary: '#84cc16', light: '#f7fee7', text: '#4d7c0f',
    darkPrimary: '#a3e635', darkLight: '#1a2e05', darkText: '#bef264' 
  },
  green: { 
    primary: '#22c55e', light: '#f0fdf4', text: '#15803d',
    darkPrimary: '#4ade80', darkLight: '#052e16', darkText: '#86efac' 
  },
  emerald: { 
    primary: '#10b981', light: '#ecfdf5', text: '#047857',
    darkPrimary: '#34d399', darkLight: '#022c22', darkText: '#6ee7b7' 
  },
  teal: { 
    primary: '#14b8a6', light: '#f0fdfa', text: '#0f766e',
    darkPrimary: '#2dd4bf', darkLight: '#042f2e', darkText: '#5eead4' 
  },
  cyan: { 
    primary: '#06b6d4', light: '#ecfeff', text: '#0e7490',
    darkPrimary: '#22d3ee', darkLight: '#083344', darkText: '#67e8f9' 
  },
  sky: { 
    primary: '#0ea5e9', light: '#f0f9ff', text: '#0369a1',
    darkPrimary: '#38bdf8', darkLight: '#082f49', darkText: '#7dd3fc' 
  },
  blue: { 
    primary: '#3b82f6', light: '#eff6ff', text: '#1d4ed8',
    darkPrimary: '#60a5fa', darkLight: '#172554', darkText: '#93c5fd' 
  },
  indigo: { 
    primary: '#6366f1', light: '#eef2ff', text: '#4338ca',
    darkPrimary: '#818cf8', darkLight: '#1e1b4b', darkText: '#a5b4fc' 
  },
  violet: { 
    primary: '#8b5cf6', light: '#f5f3ff', text: '#5b21b6',
    darkPrimary: '#a78bfa', darkLight: '#2e1065', darkText: '#c4b5fd' 
  },
  purple: { 
    primary: '#a855f7', light: '#faf5ff', text: '#7e22ce',
    darkPrimary: '#c084fc', darkLight: '#3b0764', darkText: '#d8b4fe' 
  },
  fuchsia: { 
    primary: '#d946ef', light: '#fdf4ff', text: '#a21caf',
    darkPrimary: '#e879f9', darkLight: '#4a044e', darkText: '#f0abfc' 
  },
  pink: { 
    primary: '#ec4899', light: '#fdf2f8', text: '#be185d',
    darkPrimary: '#f472b6', darkLight: '#500724', darkText: '#f9a8d4' 
  },
  rose: { 
    primary: '#f43f5e', light: '#fff1f2', text: '#be123c',
    darkPrimary: '#fb7185', darkLight: '#4c0519', darkText: '#fda4af' 
  }
};

// 获取主题内联样式 - 增强暗色模式支持
export function getThemeStyles(color: ColorType): {
  primary: CSSProperties;
  lightBg: CSSProperties;
  todayText: CSSProperties;
} {
  const colorData = colorHexMap[color] || colorHexMap.blue;
  // 检查是否处于暗色模式
  const isDarkMode = document.documentElement.classList.contains('dark');

  return {
    primary: {
      backgroundColor: isDarkMode ? colorData.darkPrimary : colorData.primary,
      color: '#ffffff'
    },
    lightBg: {
      backgroundColor: isDarkMode ? colorData.darkLight : colorData.light,
      // 暗色模式下半透明效果
      opacity: isDarkMode ? 0.3 : 1
    },
    todayText: {
      color: isDarkMode ? colorData.darkText : colorData.text
    }
  };
}

// 提供给外部使用的颜色按钮类名映射
export const colorButtonClassMap: Record<ColorType, string> = {
  slate: "bg-slate-500 text-white",
  gray: "bg-gray-500 text-white",
  zinc: "bg-zinc-500 text-white",
  neutral: "bg-neutral-500 text-white",
  stone: "bg-stone-500 text-white",
  red: "bg-red-500 text-white",
  orange: "bg-orange-500 text-white",
  amber: "bg-amber-500 text-white",
  yellow: "bg-yellow-500 text-white",
  lime: "bg-lime-500 text-white",
  green: "bg-green-500 text-white",
  emerald: "bg-emerald-500 text-white",
  teal: "bg-teal-500 text-white",
  cyan: "bg-cyan-500 text-white",
  sky: "bg-sky-500 text-white",
  blue: "bg-blue-500 text-white",
  indigo: "bg-indigo-500 text-white",
  violet: "bg-violet-500 text-white",
  purple: "bg-purple-500 text-white",
  fuchsia: "bg-fuchsia-500 text-white",
  pink: "bg-pink-500 text-white",
  rose: "bg-rose-500 text-white"
};

// 颜色分组定义
export const colorGroups = {
  gray: ['slate', 'gray', 'zinc', 'neutral', 'stone'] as const,
  warm: ['red', 'orange', 'amber', 'yellow'] as const,
  green: ['lime', 'green', 'emerald', 'teal'] as const,
  blue: ['cyan', 'sky', 'blue', 'indigo'] as const,
  purple: ['violet', 'purple', 'fuchsia', 'pink', 'rose'] as const
};

// 获取颜色类名的辅助函数
export function getColorButtonClass(color: ColorType): string {
  return colorButtonClassMap[color] || "bg-blue-500 text-white";
}

export default defineComponent({
  name: "Calendars",
  props: {
    initialDate: {
      type: String,
      default: () => dayjs().format("YYYY-MM-DD"),
    },
    dateFormat: {
      type: String,
      default: "YYYY-MM-DD",
    },
    disableOutsideDays: {
      type: Boolean,
      default: true,
    },
    locale: {
      type: String as PropType<"en" | "zh-cn">,
      default: "en",
    },
    mode: {
      type: String as PropType<"single" | "range">,
      default: "single",
    },
    selectedDate: String,
    startDate: String,
    endDate: String,
    theme: {
      type: String as PropType<ColorType>,
      default: "blue",
    },
    bgColor: {
      type: String,
      default: "", // 默认为空，使用内部逻辑决定背景色
    },
  },

  emits: [
    "update:selectedDate",
    "update:startDate",
    "update:endDate",
    "dateSelect",
    "rangeSelect",
  ],

  setup(props, { emit }) {
    const currentDate = ref(dayjs(props.initialDate));
    const selectedDate = ref(props.initialDate);
    const rangeStart = ref<string | null>(props.startDate || null);
    const rangeEnd = ref<string | null>(props.endDate || null);

    const weekDays = computed(() => calendarUtils.getWeekDays(props.locale));
    const currentMonthLabel = computed(() =>
      calendarUtils.getMonthLabel(currentDate.value),
    );
    const calendarDays = computed(() => {
      if (props.mode === "range") {
        return calendarUtils.getCalendarDaysWithRange(
          currentDate.value,
          selectedDate.value,
          rangeStart.value,
          rangeEnd.value,
        );
      }
      return calendarUtils.getCalendarDays(
        currentDate.value,
        selectedDate.value,
      );
    });
    
    // 使用ref而非computed，以便可以在暗色模式变化时更新
    const themeInlineStyles = ref(getThemeStyles(props.theme));
    
    // 修改计算当前主题的颜色类的实现方式
    const themeClasses = computed(() => ({
      primary: colorThemeMap.primary[props.theme],
      lightBg: colorThemeMap.lightBg[props.theme],
      todayText: colorThemeMap.todayText[props.theme],
      focus: colorThemeMap.focus[props.theme],
    }));

    // 监听主题变化，更新内联样式
    watch(() => props.theme, (newTheme) => {
      themeInlineStyles.value = getThemeStyles(newTheme);
    });

    // 计算背景样式
    const containerStyles = computed(() => {
      // 如果外部提供了bgColor，则使用它
      if (props.bgColor) {
        return { backgroundColor: props.bgColor };
      }
      return {}; // 否则使用CSS变量，不需要内联样式
    });

    const handleDateClick = (day: DayType) => {
      if (!day.isCurrentMonth && props.disableOutsideDays) return;

      if (props.mode === "single") {
        selectedDate.value = day.date;
        emit(
          "update:selectedDate",
          calendarUtils.formatDate(day.date, props.dateFormat),
        );
        emit(
          "dateSelect",
          calendarUtils.formatDate(day.date, props.dateFormat),
        );
      } else {
        if (!rangeStart.value || (rangeStart.value && rangeEnd.value)) {
          rangeStart.value = day.date;
          rangeEnd.value = null;
          emit(
            "update:startDate",
            calendarUtils.formatDate(day.date, props.dateFormat),
          );
          emit("update:endDate", "");
        } else {
          if (dayjs(day.date).isBefore(rangeStart.value)) {
            rangeEnd.value = rangeStart.value;
            rangeStart.value = day.date;
          } else {
            rangeEnd.value = day.date;
          }
          emit(
            "update:startDate",
            calendarUtils.formatDate(rangeStart.value, props.dateFormat),
          );
          emit(
            "update:endDate",
            calendarUtils.formatDate(rangeEnd.value, props.dateFormat),
          );
          emit(
            "rangeSelect",
            calendarUtils.formatDate(rangeStart.value, props.dateFormat),
            calendarUtils.formatDate(rangeEnd.value, props.dateFormat),
          );
        }
      }
    };

    const previousMonth = () => {
      currentDate.value = currentDate.value.subtract(1, "month");
    };

    const nextMonth = () => {
      currentDate.value = currentDate.value.add(1, "month");
    };

    onMounted(() => {
      if (props.initialDate) {
        currentDate.value = dayjs(props.initialDate);
        selectedDate.value = props.initialDate;
      }
      
      // 监听暗色模式变化，触发内联样式更新
      const darkModeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class' && 
              mutation.target === document.documentElement) {
            // 更新ref值
            themeInlineStyles.value = getThemeStyles(props.theme);
          }
        });
      });
      
      darkModeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
    });

    return () => (
      <div 
        class="calendar-container relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
        style={containerStyles.value}
      >
        <div class="flex items-center justify-between p-4 md:p-6">
          {/* Title with transition */}
          <div class="relative">
            <TransitionGroup
              tag="div"
              enterActiveClass="transition-all duration-300 ease-out-back transform-gpu"
              enterFromClass="opacity-0 -translate-x-4 blur-sm"
              enterToClass="opacity-100 translate-x-0 blur-0"
              leaveActiveClass="transition-all duration-200 ease-in-back transform-gpu"
              leaveFromClass="opacity-100 translate-x-0 blur-0"
              leaveToClass="opacity-0 translate-x-4 blur-sm"
              moveClass="transition-all duration-500 ease-in-out"
            >
              {{
                default: () => [
                  <h2
                    key={currentMonthLabel.value}
                    class="calendar-title text-base font-medium md:text-lg text-gray-800 dark:text-gray-100"
                  >
                    {currentMonthLabel.value}
                  </h2>
                ]
              }}
            </TransitionGroup>
          </div>

          <div class="flex space-x-2">
            <button
              type="button"
              onClick={previousMonth}
              class={`group rounded-full p-2 text-gray-400 transition-all duration-200 hover:bg-gray-50 hover:text-gray-600 ${themeClasses.value.focus} focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-offset-gray-800`}
            >
              <span class="sr-only">Previous month</span>
              <i class="i-tabler-chevron-left size-5 transition-transform duration-200 group-hover:-translate-x-0.5 md:size-6" />
            </button>
            <button
              type="button"
              onClick={nextMonth}
              class={`group rounded-full p-2 text-gray-400 transition-all duration-200 hover:bg-gray-50 hover:text-gray-600 ${themeClasses.value.focus} focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-offset-gray-800`}
            >
              <span class="sr-only">Next month</span>
              <i class="i-tabler-chevron-right size-5 transition-transform duration-200 group-hover:translate-x-0.5 md:size-6" />
            </button>
          </div>
        </div>

        <div class="px-4 pb-6 md:px-6">
          <div class="mb-4 grid grid-cols-7">
            {weekDays.value.map((day) => (
              <div
                key={day}
                class="py-2 text-center text-xs font-medium text-gray-500 md:text-sm dark:text-gray-400"
              >
                {day}
              </div>
            ))}
          </div>

          <div class="grid grid-cols-7 gap-1 md:gap-2">
            <TransitionGroup
              enterActiveClass="transition-all duration-300 ease-out-back transform-gpu"
              enterFromClass="opacity-0 scale-90 blur-sm"
              enterToClass="opacity-100 scale-100 blur-0"
              leaveActiveClass="transition-all duration-200 ease-in-back transform-gpu"
              leaveFromClass="opacity-100 scale-100 blur-0"
              leaveToClass="opacity-0 scale-90 blur-sm"
              moveClass="transition-all duration-300 ease-in-out"
            >
              {{
                default: () =>
                  calendarDays.value.map((day) => (
                    <div
                      key={`${currentDate.value.format("YYYY-MM")}-${day.date}`}
                      class="aspect-square p-0.5"
                    >
                      <button
                        type="button"
                        onClick={() => handleDateClick(day)}
                        disabled={
                          !day.isCurrentMonth && props.disableOutsideDays
                        }
                        class={[
                          "relative flex h-full w-full items-center justify-center rounded-full transition-all duration-200 focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-gray-800",
                          themeClasses.value.focus,
                          !day.isSelected &&
                            !day.isInRange &&
                            !day.isToday &&
                            day.isCurrentMonth &&
                            "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
                          !day.isSelected &&
                            !day.isInRange &&
                            !day.isToday &&
                            !day.isCurrentMonth &&
                            "text-gray-300 dark:text-gray-600",
                          day.isCurrentMonth
                            ? "cursor-pointer"
                            : "cursor-default",
                        ]}
                        style={
                          // 使用内联样式处理特殊主题颜色
                          (props.mode === "single" && day.isSelected) || 
                          (props.mode === "range" && (day.isRangeStart || day.isRangeEnd))
                            ? { 
                                ...themeInlineStyles.value.primary,
                                transform: props.mode === "single" && day.isSelected ? "scale(1.05)" : undefined,
                                zIndex: props.mode === "range" && (day.isRangeStart || day.isRangeEnd) ? 10 : undefined,
                                boxShadow: document.documentElement.classList.contains('dark') 
                                  ? "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)" 
                                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                              }
                            : props.mode === "range" && day.isInRange
                            ? themeInlineStyles.value.lightBg
                            : !day.isSelected && !day.isInRange && day.isToday
                            ? { ...themeInlineStyles.value.todayText, fontWeight: "600" }
                            : undefined
                        }
                      >
                        <time
                          datetime={day.date}
                          class={[
                            "relative z-10 text-sm md:text-base",
                            (day.isSelected ||
                              day.isRangeStart ||
                              day.isRangeEnd) &&
                              "font-semibold",
                            day.isToday &&
                              !day.isSelected &&
                              !day.isRangeStart &&
                              !day.isRangeEnd &&
                              "font-semibold",
                          ]}
                        >
                          {calendarUtils.getDayNumber(day.date)}
                        </time>
                      </button>
                    </div>
                  ))
              }}
            </TransitionGroup>
          </div>
        </div>

        <style scoped>{`
          .calendar-container {
            will-change: transform, opacity;
            animation: calendarAppear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            color: var(--calendar-text-color);
          }

          /* 确保暗色模式下背景色正确 */
          :global(.dark) .calendar-container {
            background-color: var(--calendar-dark-bg, #1f2937);
            border-color: var(--calendar-dark-border, #374151);
            color: var(--calendar-dark-text-color, #f3f4f6);
          }

          @keyframes calendarAppear {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(-10px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          * {
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
          }
          
          /* 暗色模式下的动画效果调整 */
          @media (prefers-color-scheme: dark) {
            @keyframes calendarAppear {
              from {
                opacity: 0;
                transform: scale(0.95) translateY(-10px);
                filter: brightness(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
                filter: brightness(1);
              }
            }
          }
        `}</style>
      </div>
    );
  },
});
