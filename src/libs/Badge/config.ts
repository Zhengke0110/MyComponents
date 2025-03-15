// 所有可用的颜色类型
export type ColorType =
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系

// 常用的主题色类型 (用于简化部分组件的类型定义)
export type ThemeColorType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

// 主题色对应的实际颜色
export const THEME_COLOR_MAP: Record<ThemeColorType, ColorType> = {
  primary: 'indigo',
  secondary: 'gray',
  success: 'green',
  warning: 'yellow',
  danger: 'red',
  info: 'blue'
};

export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'solid' | 'soft' | 'outline';
export type Rounded = 'sm' | 'md' | 'lg' | 'full';

// 使用Tailwind内置的暗黑模式类支持亮暗切换的类名映射
export const variantClassMap = {
  solid: {
    slate: "bg-slate-500 text-white dark:bg-slate-600 dark:text-white",
    gray: "bg-gray-500 text-white dark:bg-gray-600 dark:text-white",
    zinc: "bg-zinc-500 text-white dark:bg-zinc-600 dark:text-white",
    neutral: "bg-neutral-500 text-white dark:bg-neutral-600 dark:text-white",
    stone: "bg-stone-500 text-white dark:bg-stone-600 dark:text-white",
    red: "bg-red-500 text-white dark:bg-red-600 dark:text-white",
    orange: "bg-orange-500 text-white dark:bg-orange-600 dark:text-white",
    amber: "bg-amber-500 text-white dark:bg-amber-600 dark:text-white",
    yellow: "bg-yellow-500 text-white dark:bg-yellow-600 dark:text-white",
    lime: "bg-lime-500 text-white dark:bg-lime-600 dark:text-white",
    green: "bg-green-500 text-white dark:bg-green-600 dark:text-white",
    emerald: "bg-emerald-500 text-white dark:bg-emerald-600 dark:text-white",
    teal: "bg-teal-500 text-white dark:bg-teal-600 dark:text-white",
    cyan: "bg-cyan-500 text-white dark:bg-cyan-600 dark:text-white",
    sky: "bg-sky-500 text-white dark:bg-sky-600 dark:text-white",
    blue: "bg-blue-500 text-white dark:bg-blue-600 dark:text-white",
    indigo: "bg-indigo-500 text-white dark:bg-indigo-600 dark:text-white",
    violet: "bg-violet-500 text-white dark:bg-violet-600 dark:text-white",
    purple: "bg-purple-500 text-white dark:bg-purple-600 dark:text-white",
    fuchsia: "bg-fuchsia-500 text-white dark:bg-fuchsia-600 dark:text-white",
    pink: "bg-pink-500 text-white dark:bg-pink-600 dark:text-white",
    rose: "bg-rose-500 text-white dark:bg-rose-600 dark:text-white"
  },
  soft: {
    slate: "bg-slate-50 text-slate-800 ring-1 ring-slate-200/50 dark:bg-slate-900/20 dark:text-slate-300 dark:ring-1 dark:ring-slate-800/60",
    gray: "bg-gray-50 text-gray-800 ring-1 ring-gray-200/50 dark:bg-gray-900/20 dark:text-gray-300 dark:ring-1 dark:ring-gray-800/60",
    zinc: "bg-zinc-50 text-zinc-800 ring-1 ring-zinc-200/50 dark:bg-zinc-900/20 dark:text-zinc-300 dark:ring-1 dark:ring-zinc-800/60",
    neutral: "bg-neutral-50 text-neutral-800 ring-1 ring-neutral-200/50 dark:bg-neutral-900/20 dark:text-neutral-300 dark:ring-1 dark:ring-neutral-800/60",
    stone: "bg-stone-50 text-stone-800 ring-1 ring-stone-200/50 dark:bg-stone-900/20 dark:text-stone-300 dark:ring-1 dark:ring-stone-800/60",
    red: "bg-red-50 text-red-800 ring-1 ring-red-200/50 dark:bg-red-900/20 dark:text-red-300 dark:ring-1 dark:ring-red-800/60",
    orange: "bg-orange-50 text-orange-800 ring-1 ring-orange-200/50 dark:bg-orange-900/20 dark:text-orange-300 dark:ring-1 dark:ring-orange-800/60",
    amber: "bg-amber-50 text-amber-800 ring-1 ring-amber-200/50 dark:bg-amber-900/20 dark:text-amber-300 dark:ring-1 dark:ring-amber-800/60",
    yellow: "bg-yellow-50 text-yellow-800 ring-1 ring-yellow-200/50 dark:bg-yellow-900/20 dark:text-yellow-300 dark:ring-1 dark:ring-yellow-800/60",
    lime: "bg-lime-50 text-lime-800 ring-1 ring-lime-200/50 dark:bg-lime-900/20 dark:text-lime-300 dark:ring-1 dark:ring-lime-800/60",
    green: "bg-green-50 text-green-800 ring-1 ring-green-200/50 dark:bg-green-900/20 dark:text-green-300 dark:ring-1 dark:ring-green-800/60",
    emerald: "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/50 dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-1 dark:ring-emerald-800/60",
    teal: "bg-teal-50 text-teal-800 ring-1 ring-teal-200/50 dark:bg-teal-900/20 dark:text-teal-300 dark:ring-1 dark:ring-teal-800/60",
    cyan: "bg-cyan-50 text-cyan-800 ring-1 ring-cyan-200/50 dark:bg-cyan-900/20 dark:text-cyan-300 dark:ring-1 dark:ring-cyan-800/60",
    sky: "bg-sky-50 text-sky-800 ring-1 ring-sky-200/50 dark:bg-sky-900/20 dark:text-sky-300 dark:ring-1 dark:ring-sky-800/60",
    blue: "bg-blue-50 text-blue-800 ring-1 ring-blue-200/50 dark:bg-blue-900/20 dark:text-blue-300 dark:ring-1 dark:ring-blue-800/60",
    indigo: "bg-indigo-50 text-indigo-800 ring-1 ring-indigo-200/50 dark:bg-indigo-900/20 dark:text-indigo-300 dark:ring-1 dark:ring-indigo-800/60",
    violet: "bg-violet-50 text-violet-800 ring-1 ring-violet-200/50 dark:bg-violet-900/20 dark:text-violet-300 dark:ring-1 dark:ring-violet-800/60",
    purple: "bg-purple-50 text-purple-800 ring-1 ring-purple-200/50 dark:bg-purple-900/20 dark:text-purple-300 dark:ring-1 dark:ring-purple-800/60",
    fuchsia: "bg-fuchsia-50 text-fuchsia-800 ring-1 ring-fuchsia-200/50 dark:bg-fuchsia-900/20 dark:text-fuchsia-300 dark:ring-1 dark:ring-fuchsia-800/60",
    pink: "bg-pink-50 text-pink-800 ring-1 ring-pink-200/50 dark:bg-pink-900/20 dark:text-pink-300 dark:ring-1 dark:ring-pink-800/60",
    rose: "bg-rose-50 text-rose-800 ring-1 ring-rose-200/50 dark:bg-rose-900/20 dark:text-rose-300 dark:ring-1 dark:ring-rose-800/60"
  },
  outline: {
    slate: "border border-slate-500 text-slate-700 dark:border-slate-400 dark:text-slate-300",
    gray: "border border-gray-500 text-gray-700 dark:border-gray-400 dark:text-gray-300",
    zinc: "border border-zinc-500 text-zinc-700 dark:border-zinc-400 dark:text-zinc-300",
    neutral: "border border-neutral-500 text-neutral-700 dark:border-neutral-400 dark:text-neutral-300",
    stone: "border border-stone-500 text-stone-700 dark:border-stone-400 dark:text-stone-300",
    red: "border border-red-500 text-red-700 dark:border-red-400 dark:text-red-300",
    orange: "border border-orange-500 text-orange-700 dark:border-orange-400 dark:text-orange-300",
    amber: "border border-amber-500 text-amber-700 dark:border-amber-400 dark:text-amber-300",
    yellow: "border border-yellow-500 text-yellow-700 dark:border-yellow-400 dark:text-yellow-300",
    lime: "border border-lime-500 text-lime-700 dark:border-lime-400 dark:text-lime-300",
    green: "border border-green-500 text-green-700 dark:border-green-400 dark:text-green-300",
    emerald: "border border-emerald-500 text-emerald-700 dark:border-emerald-400 dark:text-emerald-300",
    teal: "border border-teal-500 text-teal-700 dark:border-teal-400 dark:text-teal-300",
    cyan: "border border-cyan-500 text-cyan-700 dark:border-cyan-400 dark:text-cyan-300",
    sky: "border border-sky-500 text-sky-700 dark:border-sky-400 dark:text-sky-300",
    blue: "border border-blue-500 text-blue-700 dark:border-blue-400 dark:text-blue-300",
    indigo: "border border-indigo-500 text-indigo-700 dark:border-indigo-400 dark:text-indigo-300",
    violet: "border border-violet-500 text-violet-700 dark:border-violet-400 dark:text-violet-300",
    purple: "border border-purple-500 text-purple-700 dark:border-purple-400 dark:text-purple-300",
    fuchsia: "border border-fuchsia-500 text-fuchsia-700 dark:border-fuchsia-400 dark:text-fuchsia-300",
    pink: "border border-pink-500 text-pink-700 dark:border-pink-400 dark:text-pink-300",
    rose: "border border-rose-500 text-rose-700 dark:border-rose-400 dark:text-rose-300"
  }
};

export const sizeMap = {
  sm: "text-xs px-1.5",
  md: "text-sm px-2",
  lg: "text-base px-2.5",
};

export const roundedMap = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

export const validColors: ColorType[] = [
  'slate', 'gray', 'zinc', 'neutral', 'stone',
  'red', 'orange', 'amber', 'yellow', 'lime',
  'green', 'emerald', 'teal', 'cyan', 'sky',
  'blue', 'indigo', 'violet', 'purple', 'fuchsia',
  'pink', 'rose'
];

export const validThemes = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
