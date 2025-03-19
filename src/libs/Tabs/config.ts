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

// 边框颜色映射表
export const borderColorMap: Record<ColorType, string> = {
    slate: "border-slate-500 dark:border-slate-400",
    gray: "border-gray-500 dark:border-gray-400",
    zinc: "border-zinc-500 dark:border-zinc-400",
    neutral: "border-neutral-500 dark:border-neutral-400",
    stone: "border-stone-500 dark:border-stone-400",
    red: "border-red-500 dark:border-red-400",
    orange: "border-orange-500 dark:border-orange-400",
    amber: "border-amber-500 dark:border-amber-400",
    yellow: "border-yellow-500 dark:border-yellow-400",
    lime: "border-lime-500 dark:border-lime-400",
    green: "border-green-500 dark:border-green-400",
    emerald: "border-emerald-500 dark:border-emerald-400",
    teal: "border-teal-500 dark:border-teal-400",
    cyan: "border-cyan-500 dark:border-cyan-400",
    sky: "border-sky-500 dark:border-sky-400",
    blue: "border-blue-500 dark:border-blue-400",
    indigo: "border-indigo-500 dark:border-indigo-400",
    violet: "border-violet-500 dark:border-violet-400",
    purple: "border-purple-500 dark:border-purple-400",
    fuchsia: "border-fuchsia-500 dark:border-fuchsia-400",
    pink: "border-pink-500 dark:border-pink-400",
    rose: "border-rose-500 dark:border-rose-400",
};

// 文本颜色映射表
export const textColorMap: Record<ColorType, string> = {
    slate: "text-slate-600 dark:text-slate-300",
    gray: "text-gray-600 dark:text-gray-300",
    zinc: "text-zinc-600 dark:text-zinc-300",
    neutral: "text-neutral-600 dark:text-neutral-300",
    stone: "text-stone-600 dark:text-stone-300",
    red: "text-red-600 dark:text-red-300",
    orange: "text-orange-600 dark:text-orange-300",
    amber: "text-amber-600 dark:text-amber-300",
    yellow: "text-yellow-600 dark:text-yellow-300",
    lime: "text-lime-600 dark:text-lime-300",
    green: "text-green-600 dark:text-green-300",
    emerald: "text-emerald-600 dark:text-emerald-300",
    teal: "text-teal-600 dark:text-teal-300",
    cyan: "text-cyan-600 dark:text-cyan-300",
    sky: "text-sky-600 dark:text-sky-300",
    blue: "text-blue-600 dark:text-blue-300",
    indigo: "text-indigo-600 dark:text-indigo-300",
    violet: "text-violet-600 dark:text-violet-300",
    purple: "text-purple-600 dark:text-purple-300",
    fuchsia: "text-fuchsia-600 dark:text-fuchsia-300",
    pink: "text-pink-600 dark:text-pink-300",
    rose: "text-rose-600 dark:text-rose-300",
};

// 鼠标悬停边框颜色映射表
export const hoverBorderMap: Record<ColorType, string> = {
    slate: "hover:border-slate-300 dark:hover:border-slate-500",
    gray: "hover:border-gray-300 dark:hover:border-gray-500",
    zinc: "hover:border-zinc-300 dark:hover:border-zinc-500",
    neutral: "hover:border-neutral-300 dark:hover:border-neutral-500",
    stone: "hover:border-stone-300 dark:hover:border-stone-500",
    red: "hover:border-red-300 dark:hover:border-red-500",
    orange: "hover:border-orange-300 dark:hover:border-orange-500",
    amber: "hover:border-amber-300 dark:hover:border-amber-500",
    yellow: "hover:border-yellow-300 dark:hover:border-yellow-500",
    lime: "hover:border-lime-300 dark:hover:border-lime-500",
    green: "hover:border-green-300 dark:hover:border-green-500",
    emerald: "hover:border-emerald-300 dark:hover:border-emerald-500",
    teal: "hover:border-teal-300 dark:hover:border-teal-500",
    cyan: "hover:border-cyan-300 dark:hover:border-cyan-500",
    sky: "hover:border-sky-300 dark:hover:border-sky-500",
    blue: "hover:border-blue-300 dark:hover:border-blue-500",
    indigo: "hover:border-indigo-300 dark:hover:border-indigo-500",
    violet: "hover:border-violet-300 dark:hover:border-violet-500",
    purple: "hover:border-purple-300 dark:hover:border-purple-500",
    fuchsia: "hover:border-fuchsia-300 dark:hover:border-fuchsia-500",
    pink: "hover:border-pink-300 dark:hover:border-pink-500",
    rose: "hover:border-rose-300 dark:hover:border-rose-500",
};

// 鼠标悬停文本颜色映射表
export const hoverTextMap: Record<ColorType, string> = {
    slate: "hover:text-slate-700 dark:hover:text-slate-300",
    gray: "hover:text-gray-700 dark:hover:text-gray-300",
    zinc: "hover:text-zinc-700 dark:hover:text-zinc-300",
    neutral: "hover:text-neutral-700 dark:hover:text-neutral-300",
    stone: "hover:text-stone-700 dark:hover:text-stone-300",
    red: "hover:text-red-700 dark:hover:text-red-300",
    orange: "hover:text-orange-700 dark:hover:text-orange-300",
    amber: "hover:text-amber-700 dark:hover:text-amber-300",
    yellow: "hover:text-yellow-700 dark:hover:text-yellow-300",
    lime: "hover:text-lime-700 dark:hover:text-lime-300",
    green: "hover:text-green-700 dark:hover:text-green-300",
    emerald: "hover:text-emerald-700 dark:hover:text-emerald-300",
    teal: "hover:text-teal-700 dark:hover:text-teal-300",
    cyan: "hover:text-cyan-700 dark:hover:text-cyan-300",
    sky: "hover:text-sky-700 dark:hover:text-sky-300",
    blue: "hover:text-blue-700 dark:hover:text-blue-300",
    indigo: "hover:text-indigo-700 dark:hover:text-indigo-300",
    violet: "hover:text-violet-700 dark:hover:text-violet-300",
    purple: "hover:text-purple-700 dark:hover:text-purple-300",
    fuchsia: "hover:text-fuchsia-700 dark:hover:text-fuchsia-300",
    pink: "hover:text-pink-700 dark:hover:text-pink-300",
    rose: "hover:text-rose-700 dark:hover:text-rose-300",
};

// 焦点轮廓颜色映射表
export const focusOutlineMap: Record<ColorType, string> = {
    slate: "focus:outline-slate-600 dark:focus:outline-slate-500",
    gray: "focus:outline-gray-600 dark:focus:outline-gray-500",
    zinc: "focus:outline-zinc-600 dark:focus:outline-zinc-500",
    neutral: "focus:outline-neutral-600 dark:focus:outline-neutral-500",
    stone: "focus:outline-stone-600 dark:focus:outline-stone-500",
    red: "focus:outline-red-600 dark:focus:outline-red-500",
    orange: "focus:outline-orange-600 dark:focus:outline-orange-500",
    amber: "focus:outline-amber-600 dark:focus:outline-amber-500",
    yellow: "focus:outline-yellow-600 dark:focus:outline-yellow-500",
    lime: "focus:outline-lime-600 dark:focus:outline-lime-500",
    green: "focus:outline-green-600 dark:focus:outline-green-500",
    emerald: "focus:outline-emerald-600 dark:focus:outline-emerald-500",
    teal: "focus:outline-teal-600 dark:focus:outline-teal-500",
    cyan: "focus:outline-cyan-600 dark:focus:outline-cyan-500",
    sky: "focus:outline-sky-600 dark:focus:outline-sky-500",
    blue: "focus:outline-blue-600 dark:focus:outline-blue-500",
    indigo: "focus:outline-indigo-600 dark:focus:outline-indigo-500",
    violet: "focus:outline-violet-600 dark:focus:outline-violet-500",
    purple: "focus:outline-purple-600 dark:focus:outline-purple-500",
    fuchsia: "focus:outline-fuchsia-600 dark:focus:outline-fuchsia-500",
    pink: "focus:outline-pink-600 dark:focus:outline-pink-500",
    rose: "focus:outline-rose-600 dark:focus:outline-rose-500",
};