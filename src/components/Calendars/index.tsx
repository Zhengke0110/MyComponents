import { defineComponent, ref, computed, onMounted, PropType, TransitionGroup, CSSProperties, watch, } from "vue";
import dayjs from "dayjs";
import { ColorType, colorHexMap, colorThemeMap, colorButtonClassMap, colorGroups, DayType } from './config'
import { calendarUtils, getColorButtonClass } from './utils'
export { colorHexMap, colorThemeMap, colorButtonClassMap, colorGroups }
export { calendarUtils, getColorButtonClass }
export type { ColorType, DayType }
import "./theme.css"; // 导入主题CSS

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
          <div class="relative h-7 md:h-8 overflow-hidden">
            <TransitionGroup
              tag="div"
              enterActiveClass="transition-all duration-200 ease-out transform-gpu absolute w-full"
              enterFromClass="opacity-0 -translate-x-4"
              enterToClass="opacity-100 translate-x-0"
              leaveActiveClass="transition-all duration-200 ease-in transform-gpu absolute w-full"
              leaveFromClass="opacity-100 translate-x-0"
              leaveToClass="opacity-0 translate-x-4"
              moveClass="transition-transform duration-200"
            >
              {{
                default: () => [
                  <h2
                    key={currentMonthLabel.value}
                    class="calendar-title text-base font-medium md:text-lg text-gray-800 dark:text-gray-100 whitespace-nowrap"
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
              <i class="icon-[material-symbols--chevron-left-rounded] size-5 transition-transform duration-200 group-hover:-translate-x-0.5 md:size-6" />
            </button>
            <button
              type="button"
              onClick={nextMonth}
              class={`group rounded-full p-2 text-gray-400 transition-all duration-200 hover:bg-gray-50 hover:text-gray-600 ${themeClasses.value.focus} focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-offset-gray-800`}
            >
              <span class="sr-only">Next month</span>
              <i class="icon-[material-symbols--chevron-right-rounded] size-5 transition-transform duration-200 group-hover:translate-x-0.5 md:size-6" />
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
