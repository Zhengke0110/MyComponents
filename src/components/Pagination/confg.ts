// 所有可用的颜色类型
export type ColorType = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系

// 使用静态类名映射替代动态类名生成
export const COLOR_CLASSES: Record<ColorType, { 
  active: string; 
  hover: string; 
  focus: string;
}> = {
  // 灰色系
  slate: {
    active: 'border-slate-500 text-slate-600 dark:border-slate-400 dark:text-slate-300',
    hover: 'hover:border-slate-300 hover:text-slate-700 dark:hover:border-slate-500 dark:hover:text-slate-200',
    focus: 'focus:ring-slate-500 focus:border-slate-500 dark:focus:ring-slate-400 dark:focus:border-slate-400',
  },
  gray: {
    active: 'border-gray-500 text-gray-600 dark:border-gray-400 dark:text-gray-300',
    hover: 'hover:border-gray-300 hover:text-gray-700 dark:hover:border-gray-500 dark:hover:text-gray-200',
    focus: 'focus:ring-gray-500 focus:border-gray-500 dark:focus:ring-gray-400 dark:focus:border-gray-400',
  },
  zinc: {
    active: 'border-zinc-500 text-zinc-600 dark:border-zinc-400 dark:text-zinc-300',
    hover: 'hover:border-zinc-300 hover:text-zinc-700 dark:hover:border-zinc-500 dark:hover:text-zinc-200',
    focus: 'focus:ring-zinc-500 focus:border-zinc-500 dark:focus:ring-zinc-400 dark:focus:border-zinc-400',
  },
  neutral: {
    active: 'border-neutral-500 text-neutral-600 dark:border-neutral-400 dark:text-neutral-300',
    hover: 'hover:border-neutral-300 hover:text-neutral-700 dark:hover:border-neutral-500 dark:hover:text-neutral-200',
    focus: 'focus:ring-neutral-500 focus:border-neutral-500 dark:focus:ring-neutral-400 dark:focus:border-neutral-400',
  },
  stone: {
    active: 'border-stone-500 text-stone-600 dark:border-stone-400 dark:text-stone-300',
    hover: 'hover:border-stone-300 hover:text-stone-700 dark:hover:border-stone-500 dark:hover:text-stone-200',
    focus: 'focus:ring-stone-500 focus:border-stone-500 dark:focus:ring-stone-400 dark:focus:border-stone-400',
  },
  
  // 暖色系
  red: {
    active: 'border-red-500 text-red-600 dark:border-red-400 dark:text-red-300',
    hover: 'hover:border-red-300 hover:text-red-700 dark:hover:border-red-500 dark:hover:text-red-200',
    focus: 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-400 dark:focus:border-red-400',
  },
  orange: {
    active: 'border-orange-500 text-orange-600 dark:border-orange-400 dark:text-orange-300',
    hover: 'hover:border-orange-300 hover:text-orange-700 dark:hover:border-orange-500 dark:hover:text-orange-200',
    focus: 'focus:ring-orange-500 focus:border-orange-500 dark:focus:ring-orange-400 dark:focus:border-orange-400',
  },
  amber: {
    active: 'border-amber-500 text-amber-600 dark:border-amber-400 dark:text-amber-300',
    hover: 'hover:border-amber-300 hover:text-amber-700 dark:hover:border-amber-500 dark:hover:text-amber-200',
    focus: 'focus:ring-amber-500 focus:border-amber-500 dark:focus:ring-amber-400 dark:focus:border-amber-400',
  },
  yellow: {
    active: 'border-yellow-500 text-yellow-600 dark:border-yellow-400 dark:text-yellow-300',
    hover: 'hover:border-yellow-300 hover:text-yellow-700 dark:hover:border-yellow-500 dark:hover:text-yellow-200',
    focus: 'focus:ring-yellow-500 focus:border-yellow-500 dark:focus:ring-yellow-400 dark:focus:border-yellow-400',
  },
  
  // 绿色系
  lime: {
    active: 'border-lime-500 text-lime-600 dark:border-lime-400 dark:text-lime-300',
    hover: 'hover:border-lime-300 hover:text-lime-700 dark:hover:border-lime-500 dark:hover:text-lime-200',
    focus: 'focus:ring-lime-500 focus:border-lime-500 dark:focus:ring-lime-400 dark:focus:border-lime-400',
  },
  green: {
    active: 'border-green-500 text-green-600 dark:border-green-400 dark:text-green-300',
    hover: 'hover:border-green-300 hover:text-green-700 dark:hover:border-green-500 dark:hover:text-green-200',
    focus: 'focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400',
  },
  emerald: {
    active: 'border-emerald-500 text-emerald-600 dark:border-emerald-400 dark:text-emerald-300',
    hover: 'hover:border-emerald-300 hover:text-emerald-700 dark:hover:border-emerald-500 dark:hover:text-emerald-200',
    focus: 'focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400',
  },
  teal: {
    active: 'border-teal-500 text-teal-600 dark:border-teal-400 dark:text-teal-300',
    hover: 'hover:border-teal-300 hover:text-teal-700 dark:hover:border-teal-500 dark:hover:text-teal-200',
    focus: 'focus:ring-teal-500 focus:border-teal-500 dark:focus:ring-teal-400 dark:focus:border-teal-400',
  },
  
  // 蓝色系
  cyan: {
    active: 'border-cyan-500 text-cyan-600 dark:border-cyan-400 dark:text-cyan-300',
    hover: 'hover:border-cyan-300 hover:text-cyan-700 dark:hover:border-cyan-500 dark:hover:text-cyan-200',
    focus: 'focus:ring-cyan-500 focus:border-cyan-500 dark:focus:ring-cyan-400 dark:focus:border-cyan-400',
  },
  sky: {
    active: 'border-sky-500 text-sky-600 dark:border-sky-400 dark:text-sky-300',
    hover: 'hover:border-sky-300 hover:text-sky-700 dark:hover:border-sky-500 dark:hover:text-sky-200',
    focus: 'focus:ring-sky-500 focus:border-sky-500 dark:focus:ring-sky-400 dark:focus:border-sky-400',
  },
  blue: {
    active: 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300',
    hover: 'hover:border-blue-300 hover:text-blue-700 dark:hover:border-blue-500 dark:hover:text-blue-200',
    focus: 'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400',
  },
  indigo: {
    active: 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-300',
    hover: 'hover:border-indigo-300 hover:text-indigo-700 dark:hover:border-indigo-500 dark:hover:text-indigo-200',
    focus: 'focus:ring-indigo-500 focus:border-indigo-500 dark:focus:ring-indigo-400 dark:focus:border-indigo-400',
  },
  
  // 紫粉色系
  violet: {
    active: 'border-violet-500 text-violet-600 dark:border-violet-400 dark:text-violet-300',
    hover: 'hover:border-violet-300 hover:text-violet-700 dark:hover:border-violet-500 dark:hover:text-violet-200',
    focus: 'focus:ring-violet-500 focus:border-violet-500 dark:focus:ring-violet-400 dark:focus:border-violet-400',
  },
  purple: {
    active: 'border-purple-500 text-purple-600 dark:border-purple-400 dark:text-purple-300',
    hover: 'hover:border-purple-300 hover:text-purple-700 dark:hover:border-purple-500 dark:hover:text-purple-200',
    focus: 'focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400',
  },
  fuchsia: {
    active: 'border-fuchsia-500 text-fuchsia-600 dark:border-fuchsia-400 dark:text-fuchsia-300',
    hover: 'hover:border-fuchsia-300 hover:text-fuchsia-700 dark:hover:border-fuchsia-500 dark:hover:text-fuchsia-200',
    focus: 'focus:ring-fuchsia-500 focus:border-fuchsia-500 dark:focus:ring-fuchsia-400 dark:focus:border-fuchsia-400',
  },
  pink: {
    active: 'border-pink-500 text-pink-600 dark:border-pink-400 dark:text-pink-300',
    hover: 'hover:border-pink-300 hover:text-pink-700 dark:hover:border-pink-500 dark:hover:text-pink-200',
    focus: 'focus:ring-pink-500 focus:border-pink-500 dark:focus:ring-pink-400 dark:focus:border-pink-400',
  },
  rose: {
    active: 'border-rose-500 text-rose-600 dark:border-rose-400 dark:text-rose-300',
    hover: 'hover:border-rose-300 hover:text-rose-700 dark:hover:border-rose-500 dark:hover:text-rose-200',
    focus: 'focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400',
  },
};
