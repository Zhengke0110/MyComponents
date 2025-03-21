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



// 预定义颜色样式映射表 
export const COLOR_STYLES = {
  // 背景色映射
  bg: {
    slate: 'bg-slate-50 dark:bg-gray-800',
    gray: 'bg-gray-50 dark:bg-gray-800',
    zinc: 'bg-zinc-50 dark:bg-gray-800',
    neutral: 'bg-neutral-50 dark:bg-gray-800',
    stone: 'bg-stone-50 dark:bg-gray-800',
    red: 'bg-red-50 dark:bg-gray-800',
    orange: 'bg-orange-50 dark:bg-gray-800',
    amber: 'bg-amber-50 dark:bg-gray-800',
    yellow: 'bg-yellow-50 dark:bg-gray-800',
    lime: 'bg-lime-50 dark:bg-gray-800',
    green: 'bg-green-50 dark:bg-gray-800',
    emerald: 'bg-emerald-50 dark:bg-gray-800',
    teal: 'bg-teal-50 dark:bg-gray-800',
    cyan: 'bg-cyan-50 dark:bg-gray-800',
    sky: 'bg-sky-50 dark:bg-gray-800',
    blue: 'bg-blue-50 dark:bg-gray-800',
    indigo: 'bg-indigo-50 dark:bg-gray-800',
    violet: 'bg-violet-50 dark:bg-gray-800',
    purple: 'bg-purple-50 dark:bg-gray-800',
    fuchsia: 'bg-fuchsia-50 dark:bg-gray-800',
    pink: 'bg-pink-50 dark:bg-gray-800',
    rose: 'bg-rose-50 dark:bg-gray-800',
  },
  // 边框色映射
  border: {
    slate: 'border-slate-200 dark:border-slate-700 border-l-slate-500 dark:border-l-slate-400',
    gray: 'border-gray-200 dark:border-gray-700 border-l-gray-500 dark:border-l-gray-400',
    zinc: 'border-zinc-200 dark:border-zinc-700 border-l-zinc-500 dark:border-l-zinc-400',
    neutral: 'border-neutral-200 dark:border-neutral-700 border-l-neutral-500 dark:border-l-neutral-400',
    stone: 'border-stone-200 dark:border-stone-700 border-l-stone-500 dark:border-l-stone-400',
    red: 'border-red-200 dark:border-red-700 border-l-red-500 dark:border-l-red-400',
    orange: 'border-orange-200 dark:border-orange-700 border-l-orange-500 dark:border-l-orange-400',
    amber: 'border-amber-200 dark:border-amber-700 border-l-amber-500 dark:border-l-amber-400',
    yellow: 'border-yellow-200 dark:border-yellow-700 border-l-yellow-500 dark:border-l-yellow-400',
    lime: 'border-lime-200 dark:border-lime-700 border-l-lime-500 dark:border-l-lime-400',
    green: 'border-green-200 dark:border-green-700 border-l-green-500 dark:border-l-green-400',
    emerald: 'border-emerald-200 dark:border-emerald-700 border-l-emerald-500 dark:border-l-emerald-400',
    teal: 'border-teal-200 dark:border-teal-700 border-l-teal-500 dark:border-l-teal-400',
    cyan: 'border-cyan-200 dark:border-cyan-700 border-l-cyan-500 dark:border-l-cyan-400',
    sky: 'border-sky-200 dark:border-sky-700 border-l-sky-500 dark:border-l-sky-400',
    blue: 'border-blue-200 dark:border-blue-700 border-l-blue-500 dark:border-l-blue-400',
    indigo: 'border-indigo-200 dark:border-indigo-700 border-l-indigo-500 dark:border-l-indigo-400',
    violet: 'border-violet-200 dark:border-violet-700 border-l-violet-500 dark:border-l-violet-400',
    purple: 'border-purple-200 dark:border-purple-700 border-l-purple-500 dark:border-l-purple-400',
    fuchsia: 'border-fuchsia-200 dark:border-fuchsia-700 border-l-fuchsia-500 dark:border-l-fuchsia-400',
    pink: 'border-pink-200 dark:border-pink-700 border-l-pink-500 dark:border-l-pink-400',
    rose: 'border-rose-200 dark:border-rose-700 border-l-rose-500 dark:border-l-rose-400',
  },
  // 文本色映射
  text: {
    slate: 'text-slate-700 dark:text-slate-300',
    gray: 'text-gray-700 dark:text-gray-300',
    zinc: 'text-zinc-700 dark:text-zinc-300',
    neutral: 'text-neutral-700 dark:text-neutral-300',
    stone: 'text-stone-700 dark:text-stone-300',
    red: 'text-red-700 dark:text-red-300',
    orange: 'text-orange-700 dark:text-orange-300',
    amber: 'text-amber-700 dark:text-amber-300',
    yellow: 'text-yellow-700 dark:text-yellow-300',
    lime: 'text-lime-700 dark:text-lime-300',
    green: 'text-green-700 dark:text-green-300',
    emerald: 'text-emerald-700 dark:text-emerald-300',
    teal: 'text-teal-700 dark:text-teal-300',
    cyan: 'text-cyan-700 dark:text-cyan-300',
    sky: 'text-sky-700 dark:text-sky-300',
    blue: 'text-blue-700 dark:text-blue-300',
    indigo: 'text-indigo-700 dark:text-indigo-300',
    violet: 'text-violet-700 dark:text-violet-300',
    purple: 'text-purple-700 dark:text-purple-300',
    fuchsia: 'text-fuchsia-700 dark:text-fuchsia-300',
    pink: 'text-pink-700 dark:text-pink-300',
    rose: 'text-rose-700 dark:text-rose-300',
  },
  // 图标色映射
  icon: {
    slate: 'text-slate-500 dark:text-slate-400',
    gray: 'text-gray-500 dark:text-gray-400',
    zinc: 'text-zinc-500 dark:text-zinc-400',
    neutral: 'text-neutral-500 dark:text-neutral-400',
    stone: 'text-stone-500 dark:text-stone-400',
    red: 'text-red-500 dark:text-red-400',
    orange: 'text-orange-500 dark:text-orange-400',
    amber: 'text-amber-500 dark:text-amber-400',
    yellow: 'text-yellow-500 dark:text-yellow-400',
    lime: 'text-lime-500 dark:text-lime-400',
    green: 'text-green-500 dark:text-green-400',
    emerald: 'text-emerald-500 dark:text-emerald-400',
    teal: 'text-teal-500 dark:text-teal-400',
    cyan: 'text-cyan-500 dark:text-cyan-400',
    sky: 'text-sky-500 dark:text-sky-400',
    blue: 'text-blue-500 dark:text-blue-400',
    indigo: 'text-indigo-500 dark:text-indigo-400',
    violet: 'text-violet-500 dark:text-violet-400',
    purple: 'text-purple-500 dark:text-purple-400',
    fuchsia: 'text-fuchsia-500 dark:text-fuchsia-400',
    pink: 'text-pink-500 dark:text-pink-400',
    rose: 'text-rose-500 dark:text-rose-400',
  },
  // 悬停背景色
  hoverBg: {
    slate: 'hover:bg-slate-100 dark:hover:bg-gray-700',
    gray: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    zinc: 'hover:bg-zinc-100 dark:hover:bg-gray-700',
    neutral: 'hover:bg-neutral-100 dark:hover:bg-gray-700',
    stone: 'hover:bg-stone-100 dark:hover:bg-gray-700',
    red: 'hover:bg-red-100 dark:hover:bg-gray-700',
    orange: 'hover:bg-orange-100 dark:hover:bg-gray-700',
    amber: 'hover:bg-amber-100 dark:hover:bg-gray-700',
    yellow: 'hover:bg-yellow-100 dark:hover:bg-gray-700',
    lime: 'hover:bg-lime-100 dark:hover:bg-gray-700',
    green: 'hover:bg-green-100 dark:hover:bg-gray-700',
    emerald: 'hover:bg-emerald-100 dark:hover:bg-gray-700',
    teal: 'hover:bg-teal-100 dark:hover:bg-gray-700',
    cyan: 'hover:bg-cyan-100 dark:hover:bg-gray-700',
    sky: 'hover:bg-sky-100 dark:hover:bg-gray-700',
    blue: 'hover:bg-blue-100 dark:hover:bg-gray-700',
    indigo: 'hover:bg-indigo-100 dark:hover:bg-gray-700',
    violet: 'hover:bg-violet-100 dark:hover:bg-gray-700',
    purple: 'hover:bg-purple-100 dark:hover:bg-gray-700',
    fuchsia: 'hover:bg-fuchsia-100 dark:hover:bg-gray-700',
    pink: 'hover:bg-pink-100 dark:hover:bg-gray-700',
    rose: 'hover:bg-rose-100 dark:hover:bg-gray-700',
  }
};

// 图标组件映射 - 使用 Solar 图标集
export const ICON_COMPONENTS = {
  success: (color: string) => (
    <i class={`icon-[solar--check-circle-broken] size-5 ${color}`}></i>
  ),
  info: (color: string) => (
    <i class={`icon-[solar--info-circle-broken] size-5 ${color}`}></i>
  ),
  warning: (color: string) => (
    <i class={`icon-[material-symbols--warning-outline-rounded] size-5 ${color}`}></i>
  ),
  danger: (color: string) => (
    <i class={`icon-[solar--close-circle-broken] size-5 ${color}`}></i>
  )
};
