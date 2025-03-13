// 颜色系统基本类型
type ColorSystemType = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系

// 语义化主题类型
type ThemeSystemType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

// 合并的类型，支持颜色和主题两种方式
export type CheckBoxType = ColorSystemType | ThemeSystemType;

// 主题色对应的实际颜色
export const THEME_COLOR_MAP: Record<ThemeSystemType, ColorSystemType> = {
  primary: 'indigo',
  secondary: 'gray',
  success: 'green',
  warning: 'yellow',
  danger: 'red',
  info: 'blue'
};

/**
 * 不同尺寸的样式映射
 */
export const sizeClassesMap = {
  sm: {
    container: "h-5",
    checkbox: "size-3.5",
    input: "size-3.5",
    icon: "size-2.5",
    label: "ml-2 text-sm",
    strokeWidth: 2.5,
  },
  md: {
    container: "h-6",
    checkbox: "size-4",
    input: "size-4",
    icon: "size-3",
    label: "ml-2 text-base",
    strokeWidth: 2.5,
  },
  lg: {
    container: "h-7",
    checkbox: "size-5",
    input: "size-5",
    icon: "size-4",
    label: "ml-3 text-lg",
    strokeWidth: 3,
  },
};

/**
 * Tailwind CSS 颜色类名映射
 */
export const colorClassMap: Record<ColorSystemType, {
  border: string;
  hoverBorder: string;
  checkedBg: string;
  focusRing: string;
}> = {
  // 灰色系
  slate: {
    border: "border-slate-300 dark:border-slate-400",
    hoverBorder: "hover:border-slate-500 dark:hover:border-slate-300",
    checkedBg: "checked:bg-slate-600 dark:checked:bg-slate-400",
    focusRing: "focus-visible:ring-slate-500 dark:focus-visible:ring-slate-300",
  },
  gray: {
    border: "border-gray-300 dark:border-gray-400",
    hoverBorder: "hover:border-gray-500 dark:hover:border-gray-300",
    checkedBg: "checked:bg-gray-600 dark:checked:bg-gray-400",
    focusRing: "focus-visible:ring-gray-500 dark:focus-visible:ring-gray-300",
  },
  zinc: {
    border: "border-zinc-300 dark:border-zinc-400",
    hoverBorder: "hover:border-zinc-500 dark:hover:border-zinc-300",
    checkedBg: "checked:bg-zinc-600 dark:checked:bg-zinc-400",
    focusRing: "focus-visible:ring-zinc-500 dark:focus-visible:ring-zinc-300",
  },
  neutral: {
    border: "border-neutral-300 dark:border-neutral-400",
    hoverBorder: "hover:border-neutral-500 dark:hover:border-neutral-300",
    checkedBg: "checked:bg-neutral-600 dark:checked:bg-neutral-400",
    focusRing: "focus-visible:ring-neutral-500 dark:focus-visible:ring-neutral-300",
  },
  stone: {
    border: "border-stone-300 dark:border-stone-400",
    hoverBorder: "hover:border-stone-500 dark:hover:border-stone-300",
    checkedBg: "checked:bg-stone-600 dark:checked:bg-stone-400",
    focusRing: "focus-visible:ring-stone-500 dark:focus-visible:ring-stone-300",
  },
  
  // 暖色系
  red: {
    border: "border-red-300 dark:border-red-400",
    hoverBorder: "hover:border-red-500 dark:hover:border-red-300",
    checkedBg: "checked:bg-red-600 dark:checked:bg-red-400",
    focusRing: "focus-visible:ring-red-500 dark:focus-visible:ring-red-300",
  },
  orange: {
    border: "border-orange-300 dark:border-orange-400",
    hoverBorder: "hover:border-orange-500 dark:hover:border-orange-300",
    checkedBg: "checked:bg-orange-600 dark:checked:bg-orange-400",
    focusRing: "focus-visible:ring-orange-500 dark:focus-visible:ring-orange-300",
  },
  amber: {
    border: "border-amber-300 dark:border-amber-400",
    hoverBorder: "hover:border-amber-500 dark:hover:border-amber-300",
    checkedBg: "checked:bg-amber-600 dark:checked:bg-amber-400",
    focusRing: "focus-visible:ring-amber-500 dark:focus-visible:ring-amber-300",
  },
  yellow: {
    border: "border-yellow-300 dark:border-yellow-400",
    hoverBorder: "hover:border-yellow-500 dark:hover:border-yellow-300",
    checkedBg: "checked:bg-yellow-600 dark:checked:bg-yellow-400",
    focusRing: "focus-visible:ring-yellow-500 dark:focus-visible:ring-yellow-300",
  },
  
  // 绿色系
  lime: {
    border: "border-lime-300 dark:border-lime-400",
    hoverBorder: "hover:border-lime-500 dark:hover:border-lime-300",
    checkedBg: "checked:bg-lime-600 dark:checked:bg-lime-400",
    focusRing: "focus-visible:ring-lime-500 dark:focus-visible:ring-lime-300",
  },
  green: {
    border: "border-green-300 dark:border-green-400",
    hoverBorder: "hover:border-green-500 dark:hover:border-green-300",
    checkedBg: "checked:bg-green-600 dark:checked:bg-green-400",
    focusRing: "focus-visible:ring-green-500 dark:focus-visible:ring-green-300",
  },
  emerald: {
    border: "border-emerald-300 dark:border-emerald-400",
    hoverBorder: "hover:border-emerald-500 dark:hover:border-emerald-300",
    checkedBg: "checked:bg-emerald-600 dark:checked:bg-emerald-400",
    focusRing: "focus-visible:ring-emerald-500 dark:focus-visible:ring-emerald-300",
  },
  teal: {
    border: "border-teal-300 dark:border-teal-400",
    hoverBorder: "hover:border-teal-500 dark:hover:border-teal-300",
    checkedBg: "checked:bg-teal-600 dark:checked:bg-teal-400",
    focusRing: "focus-visible:ring-teal-500 dark:focus-visible:ring-teal-300",
  },
  
  // 蓝色系
  cyan: {
    border: "border-cyan-300 dark:border-cyan-400",
    hoverBorder: "hover:border-cyan-500 dark:hover:border-cyan-300",
    checkedBg: "checked:bg-cyan-600 dark:checked:bg-cyan-400",
    focusRing: "focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-300",
  },
  sky: {
    border: "border-sky-300 dark:border-sky-400",
    hoverBorder: "hover:border-sky-500 dark:hover:border-sky-300",
    checkedBg: "checked:bg-sky-600 dark:checked:bg-sky-400",
    focusRing: "focus-visible:ring-sky-500 dark:focus-visible:ring-sky-300",
  },
  blue: {
    border: "border-blue-300 dark:border-blue-400",
    hoverBorder: "hover:border-blue-500 dark:hover:border-blue-300",
    checkedBg: "checked:bg-blue-600 dark:checked:bg-blue-400",
    focusRing: "focus-visible:ring-blue-500 dark:focus-visible:ring-blue-300",
  },
  indigo: {
    border: "border-indigo-300 dark:border-indigo-400",
    hoverBorder: "hover:border-indigo-500 dark:hover:border-indigo-300",
    checkedBg: "checked:bg-indigo-600 dark:checked:bg-indigo-400",
    focusRing: "focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-300",
  },
  
  // 紫粉色系
  violet: {
    border: "border-violet-300 dark:border-violet-400",
    hoverBorder: "hover:border-violet-500 dark:hover:border-violet-300",
    checkedBg: "checked:bg-violet-600 dark:checked:bg-violet-400", 
    focusRing: "focus-visible:ring-violet-500 dark:focus-visible:ring-violet-300",
  },
  purple: {
    border: "border-purple-300 dark:border-purple-400",
    hoverBorder: "hover:border-purple-500 dark:hover:border-purple-300",
    checkedBg: "checked:bg-purple-600 dark:checked:bg-purple-400",
    focusRing: "focus-visible:ring-purple-500 dark:focus-visible:ring-purple-300",
  },
  fuchsia: {
    border: "border-fuchsia-300 dark:border-fuchsia-400",
    hoverBorder: "hover:border-fuchsia-500 dark:hover:border-fuchsia-300",
    checkedBg: "checked:bg-fuchsia-600 dark:checked:bg-fuchsia-400",
    focusRing: "focus-visible:ring-fuchsia-500 dark:focus-visible:ring-fuchsia-300",
  },
  pink: {
    border: "border-pink-300 dark:border-pink-400",
    hoverBorder: "hover:border-pink-500 dark:hover:border-pink-300",
    checkedBg: "checked:bg-pink-600 dark:checked:bg-pink-400",
    focusRing: "focus-visible:ring-pink-500 dark:focus-visible:ring-pink-300",
  },
  rose: {
    border: "border-rose-300 dark:border-rose-400",
    hoverBorder: "hover:border-rose-500 dark:hover:border-rose-300",
    checkedBg: "checked:bg-rose-600 dark:checked:bg-rose-400",
    focusRing: "focus-visible:ring-rose-500 dark:focus-visible:ring-rose-300",
  },
};

/**
 * SVG 路径配置
 */
export const svgPaths = {
  check: "M4 8.5L6.5 11L12 4",
  indeterminate: "M3 8H13"
};
