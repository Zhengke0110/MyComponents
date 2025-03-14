// 颜色映射表 - 为所有颜色定义直接样式
export const COLOR_STYLE_MAP = {
  // 默认/灰色系列
  default: {
    container: {
      base: "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700",
      focus: "border-gray-500 dark:border-gray-300 ring-2 ring-gray-200 dark:ring-gray-500/30",
      normal: "border-gray-300 dark:border-gray-500 hover:border-gray-400 dark:hover:border-gray-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white",
    label: "text-gray-700 dark:text-gray-200",
    input: "text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400",
    divider: "bg-gray-200 dark:bg-gray-500",
  },
  // 灰色系列
  gray: {
    container: {
      base: "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700",
      focus: "border-gray-500 dark:border-gray-300 ring-2 ring-gray-200 dark:ring-gray-500/30",
      normal: "border-gray-300 dark:border-gray-500 hover:border-gray-400 dark:hover:border-gray-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white",
    label: "text-gray-700 dark:text-gray-200",
    input: "text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400",
    divider: "bg-gray-200 dark:bg-gray-500",
  },
  slate: {
    container: {
      base: "bg-slate-50/50 dark:bg-slate-900 hover:bg-slate-50/80 dark:hover:bg-slate-800",
      focus: "border-slate-500 dark:border-slate-300 ring-2 ring-slate-200 dark:ring-slate-700/50",
      normal: "border-slate-300 dark:border-slate-500 hover:border-slate-400 dark:hover:border-slate-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white",
    label: "text-slate-700 dark:text-slate-200 font-medium",
    input: "text-slate-950 dark:text-white placeholder:text-slate-400/70 dark:placeholder:text-slate-400/70",
    divider: "bg-slate-200 dark:bg-slate-500",
  },
  zinc: {
    container: {
      base: "bg-zinc-50/50 dark:bg-zinc-900 hover:bg-zinc-50/80 dark:hover:bg-zinc-800",
      focus: "border-zinc-500 dark:border-zinc-300 ring-2 ring-zinc-200 dark:ring-zinc-700/50",
      normal: "border-zinc-300 dark:border-zinc-500 hover:border-zinc-400 dark:hover:border-zinc-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white",
    label: "text-zinc-700 dark:text-zinc-200 font-medium",
    input: "text-zinc-950 dark:text-white placeholder:text-zinc-400/70 dark:placeholder:text-zinc-400/70",
    divider: "bg-zinc-200 dark:bg-zinc-500",
  },
  neutral: {
    container: {
      base: "bg-neutral-50/50 dark:bg-neutral-900 hover:bg-neutral-50/80 dark:hover:bg-neutral-800",
      focus: "border-neutral-500 dark:border-neutral-300 ring-2 ring-neutral-200 dark:ring-neutral-700/50",
      normal: "border-neutral-300 dark:border-neutral-500 hover:border-neutral-400 dark:hover:border-neutral-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white",
    label: "text-neutral-700 dark:text-neutral-200 font-medium",
    input: "text-neutral-950 dark:text-white placeholder:text-neutral-400/70 dark:placeholder:text-neutral-400/70",
    divider: "bg-neutral-200 dark:bg-neutral-500",
  },
  stone: {
    container: {
      base: "bg-stone-50/50 dark:bg-stone-900 hover:bg-stone-50/80 dark:hover:bg-stone-800",
      focus: "border-stone-500 dark:border-stone-300 ring-2 ring-stone-200 dark:ring-stone-700/50",
      normal: "border-stone-300 dark:border-stone-500 hover:border-stone-400 dark:hover:border-stone-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-stone-600 hover:text-stone-800 dark:text-stone-300 dark:hover:text-white",
    label: "text-stone-700 dark:text-stone-200 font-medium",
    input: "text-stone-950 dark:text-white placeholder:text-stone-400/70 dark:placeholder:text-stone-400/70",
    divider: "bg-stone-200 dark:bg-stone-500",
  },
  // 红色系列
  red: {
    container: {
      base: "bg-red-50/50 dark:bg-red-950 hover:bg-red-50/80 dark:hover:bg-red-900",
      focus: "border-red-500 dark:border-red-300 ring-2 ring-red-200 dark:ring-red-700/50",
      normal: "border-red-300 dark:border-red-500 hover:border-red-400 dark:hover:border-red-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-red-600 hover:text-red-800 dark:text-red-300 dark:hover:text-red-100",
    label: "text-red-700 dark:text-red-200 font-medium",
    input: "text-red-950 dark:text-white placeholder:text-red-400/70 dark:placeholder:text-red-400/70",
    divider: "bg-red-200 dark:bg-red-500",
  },
  orange: {
    container: {
      base: "bg-orange-50/50 dark:bg-orange-950 hover:bg-orange-50/80 dark:hover:bg-orange-900",
      focus: "border-orange-500 dark:border-orange-300 ring-2 ring-orange-200 dark:ring-orange-700/50",
      normal: "border-orange-300 dark:border-orange-500 hover:border-orange-400 dark:hover:border-orange-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-orange-600 hover:text-orange-800 dark:text-orange-300 dark:hover:text-orange-100",
    label: "text-orange-700 dark:text-orange-200 font-medium",
    input: "text-orange-950 dark:text-white placeholder:text-orange-400/70 dark:placeholder:text-orange-400/70",
    divider: "bg-orange-200 dark:bg-orange-500",
  },
  amber: {
    container: {
      base: "bg-amber-50/50 dark:bg-amber-950 hover:bg-amber-50/80 dark:hover:bg-amber-900",
      focus: "border-amber-500 dark:border-amber-300 ring-2 ring-amber-200 dark:ring-amber-700/50",
      normal: "border-amber-300 dark:border-amber-500 hover:border-amber-400 dark:hover:border-amber-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-amber-600 hover:text-amber-800 dark:text-amber-300 dark:hover:text-amber-100",
    label: "text-amber-700 dark:text-amber-200 font-medium",
    input: "text-amber-950 dark:text-white placeholder:text-amber-400/70 dark:placeholder:text-amber-400/70",
    divider: "bg-amber-200 dark:bg-amber-500",
  },
  yellow: {
    container: {
      base: "bg-yellow-50/50 dark:bg-yellow-950 hover:bg-yellow-50/80 dark:hover:bg-yellow-900",
      focus: "border-yellow-500 dark:border-yellow-300 ring-2 ring-yellow-200 dark:ring-yellow-700/50",
      normal: "border-yellow-300 dark:border-yellow-500 hover:border-yellow-400 dark:hover:border-yellow-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-yellow-600 hover:text-yellow-800 dark:text-yellow-300 dark:hover:text-yellow-100",
    label: "text-yellow-700 dark:text-yellow-200 font-medium",
    input: "text-yellow-950 dark:text-white placeholder:text-yellow-400/70 dark:placeholder:text-yellow-400/70",
    divider: "bg-yellow-200 dark:bg-yellow-500",
  },
  rose: {
    container: {
      base: "bg-rose-50/50 dark:bg-rose-950 hover:bg-rose-50/80 dark:hover:bg-rose-900",
      focus: "border-rose-500 dark:border-rose-300 ring-2 ring-rose-200 dark:ring-rose-700/50",
      normal: "border-rose-300 dark:border-rose-500 hover:border-rose-400 dark:hover:border-rose-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-rose-600 hover:text-rose-800 dark:text-rose-300 dark:hover:text-rose-100",
    label: "text-rose-700 dark:text-rose-200 font-medium",
    input: "text-rose-950 dark:text-white placeholder:text-rose-400/70 dark:placeholder:text-rose-400/70",
    divider: "bg-rose-200 dark:bg-rose-500",
  },
  pink: {
    container: {
      base: "bg-pink-50/50 dark:bg-pink-950 hover:bg-pink-50/80 dark:hover:bg-pink-900",
      focus: "border-pink-500 dark:border-pink-300 ring-2 ring-pink-200 dark:ring-pink-700/50",
      normal: "border-pink-300 dark:border-pink-500 hover:border-pink-400 dark:hover:border-pink-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-pink-600 hover:text-pink-800 dark:text-pink-300 dark:hover:text-pink-100",
    label: "text-pink-700 dark:text-pink-200 font-medium",
    input: "text-pink-950 dark:text-white placeholder:text-pink-400/70 dark:placeholder:text-pink-400/70",
    divider: "bg-pink-200 dark:bg-pink-500",
  },
  // 绿色系列
  green: {
    container: {
      base: "bg-green-50/50 dark:bg-green-950 hover:bg-green-50/80 dark:hover:bg-green-900",
      focus: "border-green-500 dark:border-green-300 ring-2 ring-green-200 dark:ring-green-700/50",
      normal: "border-green-300 dark:border-green-500 hover:border-green-400 dark:hover:border-green-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-green-600 hover:text-green-800 dark:text-green-300 dark:hover:text-green-100",
    label: "text-green-700 dark:text-green-200 font-medium",
    input: "text-green-950 dark:text-white placeholder:text-green-400/70 dark:placeholder:text-green-400/70",
    divider: "bg-green-200 dark:bg-green-500",
  },
  emerald: {
    container: {
      base: "bg-emerald-50/50 dark:bg-emerald-950 hover:bg-emerald-50/80 dark:hover:bg-emerald-900",
      focus: "border-emerald-500 dark:border-emerald-300 ring-2 ring-emerald-200 dark:ring-emerald-700/50",
      normal: "border-emerald-300 dark:border-emerald-500 hover:border-emerald-400 dark:hover:border-emerald-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-emerald-600 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-100",
    label: "text-emerald-700 dark:text-emerald-200 font-medium",
    input: "text-emerald-950 dark:text-white placeholder:text-emerald-400/70 dark:placeholder:text-emerald-400/70",
    divider: "bg-emerald-200 dark:bg-emerald-500",
  },
  teal: {
    container: {
      base: "bg-teal-50/50 dark:bg-teal-950 hover:bg-teal-50/80 dark:hover:bg-teal-900",
      focus: "border-teal-500 dark:border-teal-300 ring-2 ring-teal-200 dark:ring-teal-700/50",
      normal: "border-teal-300 dark:border-teal-500 hover:border-teal-400 dark:hover:border-teal-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-teal-600 hover:text-teal-800 dark:text-teal-300 dark:hover:text-teal-100",
    label: "text-teal-700 dark:text-teal-200 font-medium",
    input: "text-teal-950 dark:text-white placeholder:text-teal-400/70 dark:placeholder:text-teal-400/70",
    divider: "bg-teal-200 dark:bg-teal-500",
  },
  lime: {
    container: {
      base: "bg-lime-50/50 dark:bg-lime-950 hover:bg-lime-50/80 dark:hover:bg-lime-900",
      focus: "border-lime-500 dark:border-lime-300 ring-2 ring-lime-200 dark:ring-lime-700/50",
      normal: "border-lime-300 dark:border-lime-500 hover:border-lime-400 dark:hover:border-lime-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-lime-600 hover:text-lime-800 dark:text-lime-300 dark:hover:text-lime-100",
    label: "text-lime-700 dark:text-lime-200 font-medium",
    input: "text-lime-950 dark:text-white placeholder:text-lime-400/70 dark:placeholder:text-lime-400/70",
    divider: "bg-lime-200 dark:bg-lime-500",
  },
  // 蓝色系列
  blue: {
    container: {
      base: "bg-blue-50/50 dark:bg-blue-950 hover:bg-blue-50/80 dark:hover:bg-blue-900",
      focus: "border-blue-500 dark:border-blue-300 ring-2 ring-blue-200 dark:ring-blue-700/50",
      normal: "border-blue-300 dark:border-blue-500 hover:border-blue-400 dark:hover:border-blue-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100",
    label: "text-blue-700 dark:text-blue-200 font-medium",
    input: "text-blue-950 dark:text-white placeholder:text-blue-400/70 dark:placeholder:text-blue-400/70",
    divider: "bg-blue-200 dark:bg-blue-500",
  },
  cyan: {
    container: {
      base: "bg-cyan-50/50 dark:bg-cyan-950 hover:bg-cyan-50/80 dark:hover:bg-cyan-900",
      focus: "border-cyan-500 dark:border-cyan-300 ring-2 ring-cyan-200 dark:ring-cyan-700/50",
      normal: "border-cyan-300 dark:border-cyan-500 hover:border-cyan-400 dark:hover:border-cyan-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-cyan-600 hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-100",
    label: "text-cyan-700 dark:text-cyan-200 font-medium",
    input: "text-cyan-950 dark:text-white placeholder:text-cyan-400/70 dark:placeholder:text-cyan-400/70",
    divider: "bg-cyan-200 dark:bg-cyan-500",
  },
  sky: {
    container: {
      base: "bg-sky-50/50 dark:bg-sky-950 hover:bg-sky-50/80 dark:hover:bg-sky-900",
      focus: "border-sky-500 dark:border-sky-300 ring-2 ring-sky-200 dark:ring-sky-700/50",
      normal: "border-sky-300 dark:border-sky-500 hover:border-sky-400 dark:hover:border-sky-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-sky-600 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-100",
    label: "text-sky-700 dark:text-sky-200 font-medium",
    input: "text-sky-950 dark:text-white placeholder:text-sky-400/70 dark:placeholder:text-sky-400/70",
    divider: "bg-sky-200 dark:bg-sky-500",
  },
  indigo: {
    container: {
      base: "bg-indigo-50/50 dark:bg-indigo-950 hover:bg-indigo-50/80 dark:hover:bg-indigo-900",
      focus: "border-indigo-500 dark:border-indigo-300 ring-2 ring-indigo-200 dark:ring-indigo-700/50",
      normal: "border-indigo-300 dark:border-indigo-500 hover:border-indigo-400 dark:hover:border-indigo-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-indigo-600 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-100",
    label: "text-indigo-700 dark:text-indigo-200 font-medium",
    input: "text-indigo-950 dark:text-white placeholder:text-indigo-400/70 dark:placeholder:text-indigo-400/70",
    divider: "bg-indigo-200 dark:bg-indigo-500",
  },
  // 紫色系列
  purple: {
    container: {
      base: "bg-purple-50/50 dark:bg-purple-950 hover:bg-purple-50/80 dark:hover:bg-purple-900",
      focus: "border-purple-500 dark:border-purple-300 ring-2 ring-purple-200 dark:ring-purple-700/50",
      normal: "border-purple-300 dark:border-purple-500 hover:border-purple-400 dark:hover:border-purple-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-purple-600 hover:text-purple-800 dark:text-purple-300 dark:hover:text-purple-100",
    label: "text-purple-700 dark:text-purple-200 font-medium",
    input: "text-purple-950 dark:text-white placeholder:text-purple-400/70 dark:placeholder:text-purple-400/70",
    divider: "bg-purple-200 dark:bg-purple-500",
  },
  violet: {
    container: {
      base: "bg-violet-50/50 dark:bg-violet-950 hover:bg-violet-50/80 dark:hover:bg-violet-900",
      focus: "border-violet-500 dark:border-violet-300 ring-2 ring-violet-200 dark:ring-violet-700/50",
      normal: "border-violet-300 dark:border-violet-500 hover:border-violet-400 dark:hover:border-violet-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-violet-600 hover:text-violet-800 dark:text-violet-300 dark:hover:text-violet-100",
    label: "text-violet-700 dark:text-violet-200 font-medium",
    input: "text-violet-950 dark:text-white placeholder:text-violet-400/70 dark:placeholder:text-violet-400/70",
    divider: "bg-violet-200 dark:bg-violet-500",
  },
  fuchsia: {
    container: {
      base: "bg-fuchsia-50/50 dark:bg-fuchsia-950 hover:bg-fuchsia-50/80 dark:hover:bg-fuchsia-900",
      focus: "border-fuchsia-500 dark:border-fuchsia-300 ring-2 ring-fuchsia-200 dark:ring-fuchsia-700/50",
      normal: "border-fuchsia-300 dark:border-fuchsia-500 hover:border-fuchsia-400 dark:hover:border-fuchsia-400",
      disabled: "border-gray-200 dark:border-gray-700",
    },
    button: "text-fuchsia-600 hover:text-fuchsia-800 dark:text-fuchsia-300 dark:hover:text-fuchsia-100",
    label: "text-fuchsia-700 dark:text-fuchsia-200 font-medium",
    input: "text-fuchsia-950 dark:text-white placeholder:text-fuchsia-400/70 dark:placeholder:text-fuchsia-400/70",
    divider: "bg-fuchsia-200 dark:bg-fuchsia-500",
  },
};


// 所有可用的颜色类型
export type ColorType = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系
