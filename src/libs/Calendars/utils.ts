import dayjs from "dayjs";
import { DayType, ColorType, colorButtonClassMap } from "./config";
export const calendarUtils = {
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

// 获取颜色类名的辅助函数
export function getColorButtonClass(color: ColorType): string {
  return colorButtonClassMap[color] || "bg-blue-500 text-white";
}
