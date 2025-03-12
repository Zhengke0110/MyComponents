export interface DayType {
  date: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isInRange: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
}

export type ColorType =
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系

// 提供给外部使用的颜色按钮类名映射
export const colorButtonClassMap: Record<ColorType, string> = {
  slate: "bg-slate-500 text-white dark:bg-slate-600",
  gray: "bg-gray-500 text-white dark:bg-gray-600",
  zinc: "bg-zinc-500 text-white dark:bg-zinc-600",
  neutral: "bg-neutral-500 text-white dark:bg-neutral-600",
  stone: "bg-stone-500 text-white dark:bg-stone-600",
  red: "bg-red-500 text-white dark:bg-red-600",
  orange: "bg-orange-500 text-white dark:bg-orange-600",
  amber: "bg-amber-500 text-white dark:bg-amber-600",
  yellow: "bg-yellow-500 text-white dark:bg-yellow-600",
  lime: "bg-lime-500 text-white dark:bg-lime-600",
  green: "bg-green-500 text-white dark:bg-green-600",
  emerald: "bg-emerald-500 text-white dark:bg-emerald-600",
  teal: "bg-teal-500 text-white dark:bg-teal-600",
  cyan: "bg-cyan-500 text-white dark:bg-cyan-600",
  sky: "bg-sky-500 text-white dark:bg-sky-600",
  blue: "bg-blue-500 text-white dark:bg-blue-600",
  indigo: "bg-indigo-500 text-white dark:bg-indigo-600",
  violet: "bg-violet-500 text-white dark:bg-violet-600",
  purple: "bg-purple-500 text-white dark:bg-purple-600",
  fuchsia: "bg-fuchsia-500 text-white dark:bg-fuchsia-600",
  pink: "bg-pink-500 text-white dark:bg-pink-600",
  rose: "bg-rose-500 text-white dark:bg-rose-600"
};

// 颜色分组定义
export const colorGroups = {
  gray: ['slate', 'gray', 'zinc', 'neutral', 'stone'] as const,
  warm: ['red', 'orange', 'amber', 'yellow'] as const,
  green: ['lime', 'green', 'emerald', 'teal'] as const,
  blue: ['cyan', 'sky', 'blue', 'indigo'] as const,
  purple: ['violet', 'purple', 'fuchsia', 'pink', 'rose'] as const
};
