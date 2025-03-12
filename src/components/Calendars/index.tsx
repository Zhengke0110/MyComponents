import { defineComponent, ref, computed, onMounted, PropType, TransitionGroup, watch, } from "vue";
import dayjs from "dayjs";
import { ColorType, colorGroups, DayType } from './config'
import { calendarUtils, getColorButtonClass } from './utils'
export { colorGroups }
export { calendarUtils, getColorButtonClass }
export type { ColorType, DayType }
import "./theme.css"; // 导入主题CSS

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
    color: {
      type: String as PropType<ColorType>,
      default: "blue",
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

    // 简化后的主题类名计算
    const themeClasses = computed(() => {
      const color = props.color;
      return {
        primary: `bg-${color}-500 text-white dark:bg-${color}-600`,
        lightBg: `bg-${color}-50 dark:bg-${color}-900/30`,
        todayText: `text-${color}-600 dark:text-${color}-400`,
        focus: `focus:ring-${color}-500 dark:focus:ring-${color}-400`,
        hover: `hover:bg-${color}-50 dark:hover:bg-${color}-900/30`,
        selected: `bg-${color}-500 text-white dark:bg-${color}-600 dark:text-white shadow-md`
      };
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
    });

    return () => (
      <div
        class="calendar-container relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-colors duration-200"
      >
        <div class="flex items-center justify-between p-4 md:p-6">
          {/* Title with transition */}
          <div class="relative h-7 md:h-8 overflow-hidden">
            <TransitionGroup
              tag="div"
              enterActiveClass="transition-all duration-300 ease-out transform-gpu absolute w-full"
              enterFromClass="opacity-0 -translate-x-4"
              enterToClass="opacity-100 translate-x-0"
              leaveActiveClass="transition-all duration-300 ease-in transform-gpu absolute w-full"
              leaveFromClass="opacity-100 translate-x-0"
              leaveToClass="opacity-0 translate-x-4"
              moveClass="transition-transform duration-300"
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
              class={`group rounded-full p-2 text-gray-400 transition-all duration-300 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300 ${themeClasses.value.focus} focus:ring-2 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800`}
              aria-label="上个月"
            >
              <i class="icon-[material-symbols--chevron-left-rounded] size-5 transition-transform duration-300 group-hover:-translate-x-0.5 md:size-6" />
            </button>
            <button
              type="button"
              onClick={nextMonth}
              class={`group rounded-full p-2 text-gray-400 transition-all duration-300 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300 ${themeClasses.value.focus} focus:ring-2 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800`}
              aria-label="下个月"
            >
              <i class="icon-[material-symbols--chevron-right-rounded] size-5 transition-transform duration-300 group-hover:translate-x-0.5 md:size-6" />
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
              enterActiveClass="transition-all duration-300 ease-out transform-gpu"
              enterFromClass="opacity-0 scale-90 blur-[1px]"
              enterToClass="opacity-100 scale-100 blur-0"
              leaveActiveClass="transition-all duration-200 ease-in transform-gpu"
              leaveFromClass="opacity-100 scale-100 blur-0"
              leaveToClass="opacity-0 scale-90 blur-[1px]"
              moveClass="transition-all duration-300 ease-out"
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
                          "relative flex h-full w-full items-center justify-center rounded-full transition-all duration-300 focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40 dark:focus:ring-offset-gray-800",
                          themeClasses.value.focus,
                          // 非当前月份样式
                          !day.isCurrentMonth && "text-gray-300 dark:text-gray-600",
                          // 当前月非今日、非选中、非范围样式
                          !day.isSelected && !day.isInRange && !day.isToday && day.isCurrentMonth && 
                            "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
                          // 今日样式
                          !day.isSelected && !day.isInRange && day.isToday &&
                            `font-semibold ${themeClasses.value.todayText}`,
                          // 选中样式
                          ((props.mode === "single" && day.isSelected) || 
                           (props.mode === "range" && (day.isRangeStart || day.isRangeEnd))) &&
                            `${themeClasses.value.selected} transform scale-105`,
                          // 范围内日期样式
                          props.mode === "range" && day.isInRange && !day.isRangeStart && !day.isRangeEnd && 
                            themeClasses.value.lightBg,
                          day.isCurrentMonth ? "cursor-pointer" : "cursor-default",
                        ]}
                      >
                        <time
                          datetime={day.date}
                          class={[
                            "relative z-10 text-sm md:text-base",
                            (day.isSelected || day.isRangeStart || day.isRangeEnd) && 
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
          }

          @keyframes calendarAppear {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(-5px);
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
        `}</style>
      </div>
    );
  },
});
