export type ColorType =
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系



// 颜色主题枚举
export enum SelectMenuTheme {
  Indigo = 'indigo',
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  Purple = 'purple',
  Amber = 'amber',
  Pink = 'pink',
  Cyan = 'cyan',
  Emerald = 'emerald',
  Violet = 'violet',
  Teal = 'teal',
  Rose = 'rose',
  Sky = 'sky',
  Orange = 'orange',
}

export interface SelectOption {
  id: number | string;
  name?: string;
  icon?: string;
  avatar?: string;
  description?: string;
  [key: string]: any;
}

// 颜色映射对象
const colorMap = {
  indigo: {
    focus: 'focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-500 dark:focus:border-indigo-400',
    highlight: 'bg-indigo-50 text-indigo-900 dark:bg-indigo-900/20 dark:text-indigo-100',
    indicator: 'bg-indigo-500 dark:bg-indigo-400',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    hoverBg: 'hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20',
    activeRing: 'ring-indigo-200 dark:ring-indigo-800',
    focusBg: 'bg-indigo-50/80 dark:bg-indigo-900/30',
    borderActive: 'border-indigo-500 dark:border-indigo-500',
    ringActive: 'ring-2 ring-indigo-500/20 dark:ring-indigo-500/20',
    labelActive: 'text-indigo-600 dark:text-indigo-400',
    checkIconRing: 'ring-indigo-100 dark:ring-indigo-800',
  },
  blue: {
    focus: 'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-400',
    highlight: 'bg-blue-50 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100',
    indicator: 'bg-blue-500 dark:bg-blue-400',
    iconColor: 'text-blue-600 dark:text-blue-400',
    hoverBg: 'hover:bg-blue-50/50 dark:hover:bg-blue-900/20',
    activeRing: 'ring-blue-200 dark:ring-blue-800',
    focusBg: 'bg-blue-50/80 dark:bg-blue-900/30',
    borderActive: 'border-blue-500 dark:border-blue-500',
    ringActive: 'ring-2 ring-blue-500/20 dark:ring-blue-500/20',
    labelActive: 'text-blue-600 dark:text-blue-400',
    checkIconRing: 'ring-blue-100 dark:ring-blue-800',
  },
  green: {
    focus: 'focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-400',
    highlight: 'bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-100',
    indicator: 'bg-green-500 dark:bg-green-400',
    iconColor: 'text-green-600 dark:text-green-400',
    hoverBg: 'hover:bg-green-50/50 dark:hover:bg-green-900/20',
    activeRing: 'ring-green-200 dark:ring-green-800',
    focusBg: 'bg-green-50/80 dark:bg-green-900/30',
    borderActive: 'border-green-500 dark:border-green-500',
    ringActive: 'ring-2 ring-green-500/20 dark:ring-green-500/20',
    labelActive: 'text-green-600 dark:text-green-400',
    checkIconRing: 'ring-green-100 dark:ring-green-800',
  },
  red: {
    focus: 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-400',
    highlight: 'bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100',
    indicator: 'bg-red-500 dark:bg-red-400',
    iconColor: 'text-red-600 dark:text-red-400',
    hoverBg: 'hover:bg-red-50/50 dark:hover:bg-red-900/20',
    activeRing: 'ring-red-200 dark:ring-red-800',
    focusBg: 'bg-red-50/80 dark:bg-red-900/30',
    borderActive: 'border-red-500 dark:border-red-500',
    ringActive: 'ring-2 ring-red-500/20 dark:ring-red-500/20',
    labelActive: 'text-red-600 dark:text-red-400',
    checkIconRing: 'ring-red-100 dark:ring-red-800',
  },
  orange: {
    focus: 'focus:ring-orange-500 focus:border-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-400',
    highlight: 'bg-orange-50 text-orange-900 dark:bg-orange-900/20 dark:text-orange-100',
    indicator: 'bg-orange-500 dark:bg-orange-400',
    iconColor: 'text-orange-600 dark:text-orange-400',
    hoverBg: 'hover:bg-orange-50/50 dark:hover:bg-orange-900/20',
    activeRing: 'ring-orange-200 dark:ring-orange-800',
    focusBg: 'bg-orange-50/80 dark:bg-orange-900/30',
    borderActive: 'border-orange-500 dark:border-orange-500',
    ringActive: 'ring-2 ring-orange-500/20 dark:ring-orange-500/20',
    labelActive: 'text-orange-600 dark:text-orange-400',
    checkIconRing: 'ring-orange-100 dark:ring-orange-800',
  },  purple: {
    focus: 'focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-500 dark:focus:border-purple-400',
    highlight: 'bg-purple-50 text-purple-900 dark:bg-purple-900/20 dark:text-purple-100',
    indicator: 'bg-purple-500 dark:bg-purple-400',
    iconColor: 'text-purple-600 dark:text-purple-400',
    hoverBg: 'hover:bg-purple-50/50 dark:hover:bg-purple-900/20',
    activeRing: 'ring-purple-200 dark:ring-purple-800',
    focusBg: 'bg-purple-50/80 dark:bg-purple-900/30',
    borderActive: 'border-purple-500 dark:border-purple-500',
    ringActive: 'ring-2 ring-purple-500/20 dark:ring-purple-500/20',
    labelActive: 'text-purple-600 dark:text-purple-400',
    checkIconRing: 'ring-purple-100 dark:ring-purple-800',
  },
  pink: {
    focus: 'focus:ring-pink-500 focus:border-pink-500 dark:focus:ring-pink-500 dark:focus:border-pink-400',
    highlight: 'bg-pink-50 text-pink-900 dark:bg-pink-900/20 dark:text-pink-100',
    indicator: 'bg-pink-500 dark:bg-pink-400',
    iconColor: 'text-pink-600 dark:text-pink-400',
    hoverBg: 'hover:bg-pink-50/50 dark:hover:bg-pink-900/20',
    activeRing: 'ring-pink-200 dark:ring-pink-800',
    focusBg: 'bg-pink-50/80 dark:bg-pink-900/30',
    borderActive: 'border-pink-500 dark:border-pink-500',
    ringActive: 'ring-2 ring-pink-500/20 dark:ring-pink-500/20',
    labelActive: 'text-pink-600 dark:text-pink-400',
    checkIconRing: 'ring-pink-100 dark:ring-pink-800',
  },
  amber: {
    focus: 'focus:ring-amber-500 focus:border-amber-500 dark:focus:ring-amber-500 dark:focus:border-amber-400',
    highlight: 'bg-amber-50 text-amber-900 dark:bg-amber-900/20 dark:text-amber-100',
    indicator: 'bg-amber-500 dark:bg-amber-400',
    iconColor: 'text-amber-600 dark:text-amber-400',
    hoverBg: 'hover:bg-amber-50/50 dark:hover:bg-amber-900/20',
    activeRing: 'ring-amber-200 dark:ring-amber-800',
    focusBg: 'bg-amber-50/80 dark:bg-amber-900/30',
    borderActive: 'border-amber-500 dark:border-amber-500',
    ringActive: 'ring-2 ring-amber-500/20 dark:ring-amber-500/20',
    labelActive: 'text-amber-600 dark:text-amber-400',
    checkIconRing: 'ring-amber-100 dark:ring-amber-800',
  },
  cyan: {
    focus: 'focus:ring-cyan-500 focus:border-cyan-500 dark:focus:ring-cyan-500 dark:focus:border-cyan-400',
    highlight: 'bg-cyan-50 text-cyan-900 dark:bg-cyan-900/20 dark:text-cyan-100',
    indicator: 'bg-cyan-500 dark:bg-cyan-400',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    hoverBg: 'hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20',
    activeRing: 'ring-cyan-200 dark:ring-cyan-800',
    focusBg: 'bg-cyan-50/80 dark:bg-cyan-900/30',
    borderActive: 'border-cyan-500 dark:border-cyan-500',
    ringActive: 'ring-2 ring-cyan-500/20 dark:ring-cyan-500/20',
    labelActive: 'text-cyan-600 dark:text-cyan-400',
    checkIconRing: 'ring-cyan-100 dark:ring-cyan-800',
  },
  teal: {
    focus: 'focus:ring-teal-500 focus:border-teal-500 dark:focus:ring-teal-500 dark:focus:border-teal-400',
    highlight: 'bg-teal-50 text-teal-900 dark:bg-teal-900/20 dark:text-teal-100',
    indicator: 'bg-teal-500 dark:bg-teal-400',
    iconColor: 'text-teal-600 dark:text-teal-400',
    hoverBg: 'hover:bg-teal-50/50 dark:hover:bg-teal-900/20',
    activeRing: 'ring-teal-200 dark:ring-teal-800',
    focusBg: 'bg-teal-50/80 dark:bg-teal-900/30',
    borderActive: 'border-teal-500 dark:border-teal-500',
    ringActive: 'ring-2 ring-teal-500/20 dark:ring-teal-500/20',
    labelActive: 'text-teal-600 dark:text-teal-400',
    checkIconRing: 'ring-teal-100 dark:ring-teal-800',
  },
  emerald: {
    focus: 'focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-500 dark:focus:border-emerald-400',
    highlight: 'bg-emerald-50 text-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-100',
    indicator: 'bg-emerald-500 dark:bg-emerald-400',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    hoverBg: 'hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20',
    activeRing: 'ring-emerald-200 dark:ring-emerald-800',
    focusBg: 'bg-emerald-50/80 dark:bg-emerald-900/30',
    borderActive: 'border-emerald-500 dark:border-emerald-500',
    ringActive: 'ring-2 ring-emerald-500/20 dark:ring-emerald-500/20',
    labelActive: 'text-emerald-600 dark:text-emerald-400',
    checkIconRing: 'ring-emerald-100 dark:ring-emerald-800',
  },
  violet: {
    focus: 'focus:ring-violet-500 focus:border-violet-500 dark:focus:ring-violet-500 dark:focus:border-violet-400',
    highlight: 'bg-violet-50 text-violet-900 dark:bg-violet-900/20 dark:text-violet-100',
    indicator: 'bg-violet-500 dark:bg-violet-400',
    iconColor: 'text-violet-600 dark:text-violet-400',
    hoverBg: 'hover:bg-violet-50/50 dark:hover:bg-violet-900/20',
    activeRing: 'ring-violet-200 dark:ring-violet-800',
    focusBg: 'bg-violet-50/80 dark:bg-violet-900/30',
    borderActive: 'border-violet-500 dark:border-violet-500',
    ringActive: 'ring-2 ring-violet-500/20 dark:ring-violet-500/20',
    labelActive: 'text-violet-600 dark:text-violet-400',
    checkIconRing: 'ring-violet-100 dark:ring-violet-800',
  },
  rose: {
    focus: 'focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-500 dark:focus:border-rose-400',
    highlight: 'bg-rose-50 text-rose-900 dark:bg-rose-900/20 dark:text-rose-100',
    indicator: 'bg-rose-500 dark:bg-rose-400',
    iconColor: 'text-rose-600 dark:text-rose-400',
    hoverBg: 'hover:bg-rose-50/50 dark:hover:bg-rose-900/20',
    activeRing: 'ring-rose-200 dark:ring-rose-800',
    focusBg: 'bg-rose-50/80 dark:bg-rose-900/30',
    borderActive: 'border-rose-500 dark:border-rose-500',
    ringActive: 'ring-2 ring-rose-500/20 dark:ring-rose-500/20',
    labelActive: 'text-rose-600 dark:text-rose-400',
    checkIconRing: 'ring-rose-100 dark:ring-rose-800',
  },
  sky: {
    focus: 'focus:ring-sky-500 focus:border-sky-500 dark:focus:ring-sky-500 dark:focus:border-sky-400',
    highlight: 'bg-sky-50 text-sky-900 dark:bg-sky-900/20 dark:text-sky-100',
    indicator: 'bg-sky-500 dark:bg-sky-400',
    iconColor: 'text-sky-600 dark:text-sky-400',
    hoverBg: 'hover:bg-sky-50/50 dark:hover:bg-sky-900/20',
    activeRing: 'ring-sky-200 dark:ring-sky-800',
    focusBg: 'bg-sky-50/80 dark:bg-sky-900/30',
    borderActive: 'border-sky-500 dark:border-sky-500',
    ringActive: 'ring-2 ring-sky-500/20 dark:ring-sky-500/20',
    labelActive: 'text-sky-600 dark:text-sky-400',
    checkIconRing: 'ring-sky-100 dark:ring-sky-800',
  }
};

// 默认颜色
export const defaultColor = 'indigo';

// 获取颜色映射
export function getColorClasses(color: string) {
  return colorMap[color as keyof typeof colorMap] || colorMap[defaultColor];
}
