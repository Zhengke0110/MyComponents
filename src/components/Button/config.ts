export type ColorType =
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系

// 语义化类型
export type ButtonTypeValue = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

// 合并颜色和类型为一个联合类型
export type ButtonType = ColorType | ButtonTypeValue;

// 类型对应的实际颜色
export const BUTTON_TYPE_MAP: Record<ButtonTypeValue, ColorType> = {
  primary: 'indigo',
  secondary: 'gray',
  success: 'green',
  warning: 'yellow',
  danger: 'red',
  info: 'blue'
};

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ButtonVariant = 'solid' | 'outline' | 'soft' | 'ghost'

// 按钮变体的样式映射 - 使用tailwindcss的dark类实现深色模式适配
export const variantColorMap = {
    solid: {
      slate: "bg-slate-500 text-white hover:bg-slate-600 focus:ring-slate-400 dark:bg-slate-600 dark:hover:bg-slate-700",
      gray: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700",
      zinc: "bg-zinc-500 text-white hover:bg-zinc-600 focus:ring-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-700",
      neutral: "bg-neutral-500 text-white hover:bg-neutral-600 focus:ring-neutral-400 dark:bg-neutral-600 dark:hover:bg-neutral-700",
      stone: "bg-stone-500 text-white hover:bg-stone-600 focus:ring-stone-400 dark:bg-stone-600 dark:hover:bg-stone-700",
      red: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 dark:bg-red-600 dark:hover:bg-red-700",
      orange: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400 dark:bg-orange-600 dark:hover:bg-orange-700",
      amber: "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400 dark:bg-amber-600 dark:hover:bg-amber-700",
      yellow: "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-700",
      lime: "bg-lime-500 text-white hover:bg-lime-600 focus:ring-lime-400 dark:bg-lime-600 dark:hover:bg-lime-700",
      green: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400 dark:bg-green-600 dark:hover:bg-green-700",
      emerald: "bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-400 dark:bg-emerald-600 dark:hover:bg-emerald-700",
      teal: "bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-400 dark:bg-teal-600 dark:hover:bg-teal-700",
      cyan: "bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-400 dark:bg-cyan-600 dark:hover:bg-cyan-700",
      sky: "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-400 dark:bg-sky-600 dark:hover:bg-sky-700",
      blue: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700",
      indigo: "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-700",
      violet: "bg-violet-500 text-white hover:bg-violet-600 focus:ring-violet-400 dark:bg-violet-600 dark:hover:bg-violet-700",
      purple: "bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-400 dark:bg-purple-600 dark:hover:bg-purple-700",
      fuchsia: "bg-fuchsia-500 text-white hover:bg-fuchsia-600 focus:ring-fuchsia-400 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700",
      pink: "bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-400 dark:bg-pink-600 dark:hover:bg-pink-700",
      rose: "bg-rose-500 text-white hover:bg-rose-600 focus:ring-rose-400 dark:bg-rose-600 dark:hover:bg-rose-700"
    },
    outline: {
      slate: "border border-slate-500 text-slate-700 hover:bg-slate-50 focus:ring-slate-400 dark:text-slate-300 dark:hover:bg-slate-800/30 dark:border-slate-400",
      gray: "border border-gray-500 text-gray-700 hover:bg-gray-50 focus:ring-gray-400 dark:text-gray-300 dark:hover:bg-gray-800/30 dark:border-gray-400",
      zinc: "border border-zinc-500 text-zinc-700 hover:bg-zinc-50 focus:ring-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-800/30 dark:border-zinc-400",
      neutral: "border border-neutral-500 text-neutral-700 hover:bg-neutral-50 focus:ring-neutral-400 dark:text-neutral-300 dark:hover:bg-neutral-800/30 dark:border-neutral-400",
      stone: "border border-stone-500 text-stone-700 hover:bg-stone-50 focus:ring-stone-400 dark:text-stone-300 dark:hover:bg-stone-800/30 dark:border-stone-400",
      red: "border border-red-500 text-red-700 hover:bg-red-50 focus:ring-red-400 dark:text-red-400 dark:hover:bg-red-900/20 dark:border-red-400",
      orange: "border border-orange-500 text-orange-700 hover:bg-orange-50 focus:ring-orange-400 dark:text-orange-400 dark:hover:bg-orange-900/20 dark:border-orange-400",
      amber: "border border-amber-500 text-amber-700 hover:bg-amber-50 focus:ring-amber-400 dark:text-amber-400 dark:hover:bg-amber-900/20 dark:border-amber-400",
      yellow: "border border-yellow-500 text-yellow-700 hover:bg-yellow-50 focus:ring-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-900/20 dark:border-yellow-400",
      lime: "border border-lime-500 text-lime-700 hover:bg-lime-50 focus:ring-lime-400 dark:text-lime-400 dark:hover:bg-lime-900/20 dark:border-lime-400",
      green: "border border-green-500 text-green-700 hover:bg-green-50 focus:ring-green-400 dark:text-green-400 dark:hover:bg-green-900/20 dark:border-green-400",
      emerald: "border border-emerald-500 text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20 dark:border-emerald-400",
      teal: "border border-teal-500 text-teal-700 hover:bg-teal-50 focus:ring-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/20 dark:border-teal-400",
      cyan: "border border-cyan-500 text-cyan-700 hover:bg-cyan-50 focus:ring-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-900/20 dark:border-cyan-400",
      sky: "border border-sky-500 text-sky-700 hover:bg-sky-50 focus:ring-sky-400 dark:text-sky-400 dark:hover:bg-sky-900/20 dark:border-sky-400",
      blue: "border border-blue-500 text-blue-700 hover:bg-blue-50 focus:ring-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 dark:border-blue-400",
      indigo: "border border-indigo-500 text-indigo-700 hover:bg-indigo-50 focus:ring-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/20 dark:border-indigo-400",
      violet: "border border-violet-500 text-violet-700 hover:bg-violet-50 focus:ring-violet-400 dark:text-violet-400 dark:hover:bg-violet-900/20 dark:border-violet-400",
      purple: "border border-purple-500 text-purple-700 hover:bg-purple-50 focus:ring-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20 dark:border-purple-400",
      fuchsia: "border border-fuchsia-500 text-fuchsia-700 hover:bg-fuchsia-50 focus:ring-fuchsia-400 dark:text-fuchsia-400 dark:hover:bg-fuchsia-900/20 dark:border-fuchsia-400",
      pink: "border border-pink-500 text-pink-700 hover:bg-pink-50 focus:ring-pink-400 dark:text-pink-400 dark:hover:bg-pink-900/20 dark:border-pink-400",
      rose: "border border-rose-500 text-rose-700 hover:bg-rose-50 focus:ring-rose-400 dark:text-rose-400 dark:hover:bg-rose-900/20 dark:border-rose-400"
    },
    soft: {
      slate: "bg-slate-100 text-slate-800 hover:bg-slate-200 focus:ring-slate-400 dark:bg-slate-700/50 dark:text-slate-200 dark:hover:bg-slate-700/70",
      gray: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700/50 dark:text-gray-200 dark:hover:bg-gray-700/70",
      zinc: "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 focus:ring-zinc-400 dark:bg-zinc-700/50 dark:text-zinc-200 dark:hover:bg-zinc-700/70",
      neutral: "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 focus:ring-neutral-400 dark:bg-neutral-700/50 dark:text-neutral-200 dark:hover:bg-neutral-700/70",
      stone: "bg-stone-100 text-stone-800 hover:bg-stone-200 focus:ring-stone-400 dark:bg-stone-700/50 dark:text-stone-200 dark:hover:bg-stone-700/70",
      red: "bg-red-100 text-red-800 hover:bg-red-200 focus:ring-red-400 dark:bg-red-700/40 dark:text-red-200 dark:hover:bg-red-700/60",
      orange: "bg-orange-100 text-orange-800 hover:bg-orange-200 focus:ring-orange-400 dark:bg-orange-700/40 dark:text-orange-200 dark:hover:bg-orange-700/60",
      amber: "bg-amber-100 text-amber-800 hover:bg-amber-200 focus:ring-amber-400 dark:bg-amber-700/40 dark:text-amber-200 dark:hover:bg-amber-700/60",
      yellow: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-700/40 dark:text-yellow-200 dark:hover:bg-yellow-700/60",
      lime: "bg-lime-100 text-lime-800 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-700/40 dark:text-lime-200 dark:hover:bg-lime-700/60",
      green: "bg-green-100 text-green-800 hover:bg-green-200 focus:ring-green-400 dark:bg-green-700/40 dark:text-green-200 dark:hover:bg-green-700/60",
      emerald: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 focus:ring-emerald-400 dark:bg-emerald-700/40 dark:text-emerald-200 dark:hover:bg-emerald-700/60",
      teal: "bg-teal-100 text-teal-800 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-700/40 dark:text-teal-200 dark:hover:bg-teal-700/60",
      cyan: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-700/40 dark:text-cyan-200 dark:hover:bg-cyan-700/60",
      sky: "bg-sky-100 text-sky-800 hover:bg-sky-200 focus:ring-sky-400 dark:bg-sky-700/40 dark:text-sky-200 dark:hover:bg-sky-700/60",
      blue: "bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-700/40 dark:text-blue-200 dark:hover:bg-blue-700/60",
      indigo: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-700/40 dark:text-indigo-200 dark:hover:bg-indigo-700/60",
      violet: "bg-violet-100 text-violet-800 hover:bg-violet-200 focus:ring-violet-400 dark:bg-violet-700/40 dark:text-violet-200 dark:hover:bg-violet-700/60",
      purple: "bg-purple-100 text-purple-800 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-700/40 dark:text-purple-200 dark:hover:bg-purple-700/60",
      fuchsia: "bg-fuchsia-100 text-fuchsia-800 hover:bg-fuchsia-200 focus:ring-fuchsia-400 dark:bg-fuchsia-700/40 dark:text-fuchsia-200 dark:hover:bg-fuchsia-700/60",
      pink: "bg-pink-100 text-pink-800 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-700/40 dark:text-pink-200 dark:hover:bg-pink-700/60",
      rose: "bg-rose-100 text-rose-800 hover:bg-rose-200 focus:ring-rose-400 dark:bg-rose-700/40 dark:text-rose-200 dark:hover:bg-rose-700/60"
    },
    ghost: {
      slate: "bg-transparent hover:bg-slate-100 text-slate-700 focus:ring-slate-400 dark:hover:bg-slate-800/30 dark:text-slate-300",
      gray: "bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-400 dark:hover:bg-gray-800/30 dark:text-gray-300",
      zinc: "bg-transparent hover:bg-zinc-100 text-zinc-700 focus:ring-zinc-400 dark:hover:bg-zinc-800/30 dark:text-zinc-300",
      neutral: "bg-transparent hover:bg-neutral-100 text-neutral-700 focus:ring-neutral-400 dark:hover:bg-neutral-800/30 dark:text-neutral-300",
      stone: "bg-transparent hover:bg-stone-100 text-stone-700 focus:ring-stone-400 dark:hover:bg-stone-800/30 dark:text-stone-300",
      red: "bg-transparent hover:bg-red-100 text-red-700 focus:ring-red-400 dark:hover:bg-red-900/20 dark:text-red-400",
      orange: "bg-transparent hover:bg-orange-100 text-orange-700 focus:ring-orange-400 dark:hover:bg-orange-900/20 dark:text-orange-400",
      amber: "bg-transparent hover:bg-amber-100 text-amber-700 focus:ring-amber-400 dark:hover:bg-amber-900/20 dark:text-amber-400",
      yellow: "bg-transparent hover:bg-yellow-100 text-yellow-700 focus:ring-yellow-400 dark:hover:bg-yellow-900/20 dark:text-yellow-400",
      lime: "bg-transparent hover:bg-lime-100 text-lime-700 focus:ring-lime-400 dark:hover:bg-lime-900/20 dark:text-lime-400",
      green: "bg-transparent hover:bg-green-100 text-green-700 focus:ring-green-400 dark:hover:bg-green-900/20 dark:text-green-400",
      emerald: "bg-transparent hover:bg-emerald-100 text-emerald-700 focus:ring-emerald-400 dark:hover:bg-emerald-900/20 dark:text-emerald-400",
      teal: "bg-transparent hover:bg-teal-100 text-teal-700 focus:ring-teal-400 dark:hover:bg-teal-900/20 dark:text-teal-400",
      cyan: "bg-transparent hover:bg-cyan-100 text-cyan-700 focus:ring-cyan-400 dark:hover:bg-cyan-900/20 dark:text-cyan-400",
      sky: "bg-transparent hover:bg-sky-100 text-sky-700 focus:ring-sky-400 dark:hover:bg-sky-900/20 dark:text-sky-400",
      blue: "bg-transparent hover:bg-blue-100 text-blue-700 focus:ring-blue-400 dark:hover:bg-blue-900/20 dark:text-blue-400",
      indigo: "bg-transparent hover:bg-indigo-100 text-indigo-700 focus:ring-indigo-400 dark:hover:bg-indigo-900/20 dark:text-indigo-400",
      violet: "bg-transparent hover:bg-violet-100 text-violet-700 focus:ring-violet-400 dark:hover:bg-violet-900/20 dark:text-violet-400",
      purple: "bg-transparent hover:bg-purple-100 text-purple-700 focus:ring-purple-400 dark:hover:bg-purple-900/20 dark:text-purple-400",
      fuchsia: "bg-transparent hover:bg-fuchsia-100 text-fuchsia-700 focus:ring-fuchsia-400 dark:hover:bg-fuchsia-900/20 dark:text-fuchsia-400",
      pink: "bg-transparent hover:bg-pink-100 text-pink-700 focus:ring-pink-400 dark:hover:bg-pink-900/20 dark:text-pink-400",
      rose: "bg-transparent hover:bg-rose-100 text-rose-700 focus:ring-rose-400 dark:hover:bg-rose-900/20 dark:text-rose-400"
    }
  };
