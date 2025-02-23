import {
  defineComponent,
  ref,
  computed,
  onMounted,
  PropType,
  TransitionGroup,
} from "vue";
import dayjs from "dayjs";

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
      <div class="calendar-container relative overflow-hidden rounded-xl">
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
                    class="calendar-title text-base font-medium md:text-lg"
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
              class="group rounded-full p-2 text-gray-400 transition-all duration-200 hover:bg-gray-50 hover:text-gray-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-300"
            >
              <span class="sr-only">Previous month</span>
              <i class="i-tabler-chevron-left size-5 transition-transform duration-200 group-hover:-translate-x-0.5 md:size-6" />
            </button>
            <button
              type="button"
              onClick={nextMonth}
              class="group rounded-full p-2 text-gray-400 transition-all duration-200 hover:bg-gray-50 hover:text-gray-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-gray-300"
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
                          "relative flex h-full w-full items-center justify-center rounded-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                          props.mode === "single" &&
                            day.isSelected &&
                            "scale-105 bg-blue-500 text-white shadow-lg",
                          props.mode === "range" &&
                            (day.isRangeStart || day.isRangeEnd) &&
                            "z-10 bg-blue-500 text-white shadow-md",
                          props.mode === "range" &&
                            day.isInRange &&
                            "bg-blue-100 dark:bg-blue-900/30",
                          !day.isSelected &&
                            !day.isInRange &&
                            day.isToday &&
                            "font-semibold text-blue-600",
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
          }

          .calendar-title {
            will-change: transform, opacity;
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
        `}</style>
      </div>
    );
  },
});
