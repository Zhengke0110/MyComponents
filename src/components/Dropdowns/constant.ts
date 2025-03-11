export type ColorType = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系


// 基础类型定义
export type ItemType = "link" | "button" | "divider";
export type DropdownSize = "sm" | "md" | "lg";
// 移除多余的弹出位置，只保留 bottom
export type DropdownPlacement = "bottom";

// 下拉菜单项接口
export interface DropdownItem {
  id: string | number;
  type: ItemType;
  label?: string;
  href?: string;
  icon?: string;
  endIcon?: string;
  iconClass?: string;
  disabled?: boolean;
  danger?: boolean;
  onClick?: () => void;
}

// 组件属性接口
export interface DropdownProps {
  label: string;
  items: DropdownItem[];
  buttonClass?: string;
  iconClass?: string;
  triggerIcon?: string;
  size?: DropdownSize;
  placement?: DropdownPlacement;
  theme?: ColorType;
  variant?: 'solid' | 'outline';
  dark?: boolean;
  autoAdjust?: boolean; // 是否自动调整位置
}

// 组件事件类型
export interface DropdownEvents {
  onSelect: (item: DropdownItem) => void;
  onOpen?: () => void;
  onClose?: () => void;
}

// 样式配置
export const DROPDOWN_CONFIGS = {
  sizeClasses: {
    sm: "px-2.5 py-1.5 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-2 text-base",
  },

  dropdownSizeClasses: {
    sm: "min-w-[160px] max-w-[200px]",
    md: "min-w-[200px] max-w-[240px]",
    lg: "min-w-[240px] max-w-[320px]",
  },

  itemSizeClasses: {
    sm: "py-1.5 text-xs",
    md: "py-2 text-sm",
    lg: "py-2.5 text-base",
  },

  iconSizeClasses: {
    trigger: {
      sm: "size-3",
      md: "size-4",
      lg: "size-5",
    },
    item: {
      sm: "size-3",
      md: "size-4",
      lg: "size-4",
    },
  },
} as const;

// 主题色映射
export const THEME_BUTTON_CLASSES: Record<ColorType, { solid: string; outline: string; ring: string; hover: string; focusRing: string; dark: { solid: string; outline: string; ring: string; hover: string; focusRing: string }}> = {
  // 灰色系
  slate: {
    solid: 'bg-slate-600 text-white',
    outline: 'border-slate-300 text-slate-700 bg-white',
    ring: 'ring-slate-300',
    hover: 'hover:bg-slate-700 hover:text-white',
    focusRing: 'focus:ring-slate-500/50',
    dark: {
      solid: 'bg-slate-500 text-white',
      outline: 'border-slate-600 text-slate-300 bg-gray-800',
      ring: 'ring-slate-700',
      hover: 'hover:bg-slate-600 hover:text-white',
      focusRing: 'focus:ring-slate-400/50',
    }
  },
  gray: {
    solid: 'bg-gray-600 text-white',
    outline: 'border-gray-300 text-gray-700 bg-white',
    ring: 'ring-gray-300',
    hover: 'hover:bg-gray-700 hover:text-white',
    focusRing: 'focus:ring-gray-500/50',
    dark: {
      solid: 'bg-gray-500 text-white',
      outline: 'border-gray-600 text-gray-300 bg-gray-800',
      ring: 'ring-gray-700',
      hover: 'hover:bg-gray-600 hover:text-white',
      focusRing: 'focus:ring-gray-400/50',
    }
  },
  zinc: {
    solid: 'bg-zinc-600 text-white',
    outline: 'border-zinc-300 text-zinc-700 bg-white',
    ring: 'ring-zinc-300',
    hover: 'hover:bg-zinc-700 hover:text-white',
    focusRing: 'focus:ring-zinc-500/50',
    dark: {
      solid: 'bg-zinc-500 text-white',
      outline: 'border-zinc-600 text-zinc-300 bg-gray-800',
      ring: 'ring-zinc-700',
      hover: 'hover:bg-zinc-600 hover:text-white',
      focusRing: 'focus:ring-zinc-400/50',
    }
  },
  neutral: {
    solid: 'bg-neutral-600 text-white',
    outline: 'border-neutral-300 text-neutral-700 bg-white',
    ring: 'ring-neutral-300',
    hover: 'hover:bg-neutral-700 hover:text-white',
    focusRing: 'focus:ring-neutral-500/50',
    dark: {
      solid: 'bg-neutral-500 text-white',
      outline: 'border-neutral-600 text-neutral-300 bg-gray-800',
      ring: 'ring-neutral-700',
      hover: 'hover:bg-neutral-600 hover:text-white',
      focusRing: 'focus:ring-neutral-400/50',
    }
  },
  stone: {
    solid: 'bg-stone-600 text-white',
    outline: 'border-stone-300 text-stone-700 bg-white',
    ring: 'ring-stone-300',
    hover: 'hover:bg-stone-700 hover:text-white',
    focusRing: 'focus:ring-stone-500/50',
    dark: {
      solid: 'bg-stone-500 text-white',
      outline: 'border-stone-600 text-stone-300 bg-gray-800',
      ring: 'ring-stone-700',
      hover: 'hover:bg-stone-600 hover:text-white',
      focusRing: 'focus:ring-stone-400/50',
    }
  },
  // 暖色系
  red: {
    solid: 'bg-red-600 text-white',
    outline: 'border-red-300 text-red-700 bg-white',
    ring: 'ring-red-300',
    hover: 'hover:bg-red-700 hover:text-white',
    focusRing: 'focus:ring-red-500/50',
    dark: {
      solid: 'bg-red-500 text-white',
      outline: 'border-red-600 text-red-300 bg-gray-800',
      ring: 'ring-red-700',
      hover: 'hover:bg-red-600 hover:text-white',
      focusRing: 'focus:ring-red-400/50',
    }
  },
  orange: {
    solid: 'bg-orange-600 text-white',
    outline: 'border-orange-300 text-orange-700 bg-white',
    ring: 'ring-orange-300',
    hover: 'hover:bg-orange-700 hover:text-white',
    focusRing: 'focus:ring-orange-500/50',
    dark: {
      solid: 'bg-orange-500 text-white',
      outline: 'border-orange-600 text-orange-300 bg-gray-800',
      ring: 'ring-orange-700',
      hover: 'hover:bg-orange-600 hover:text-white',
      focusRing: 'focus:ring-orange-400/50',
    }
  },
  amber: {
    solid: 'bg-amber-600 text-white',
    outline: 'border-amber-300 text-amber-700 bg-white',
    ring: 'ring-amber-300',
    hover: 'hover:bg-amber-700 hover:text-white',
    focusRing: 'focus:ring-amber-500/50',
    dark: {
      solid: 'bg-amber-500 text-white',
      outline: 'border-amber-600 text-amber-300 bg-gray-800',
      ring: 'ring-amber-700',
      hover: 'hover:bg-amber-600 hover:text-white',
      focusRing: 'focus:ring-amber-400/50',
    }
  },
  yellow: {
    solid: 'bg-yellow-500 text-white',
    outline: 'border-yellow-300 text-yellow-700 bg-white',
    ring: 'ring-yellow-300',
    hover: 'hover:bg-yellow-600 hover:text-white',
    focusRing: 'focus:ring-yellow-500/50',
    dark: {
      solid: 'bg-yellow-500 text-white',
      outline: 'border-yellow-600 text-yellow-300 bg-gray-800',
      ring: 'ring-yellow-700',
      hover: 'hover:bg-yellow-600 hover:text-white',
      focusRing: 'focus:ring-yellow-400/50',
    }
  },
  // 绿色系
  lime: {
    solid: 'bg-lime-600 text-white',
    outline: 'border-lime-300 text-lime-700 bg-white',
    ring: 'ring-lime-300',
    hover: 'hover:bg-lime-700 hover:text-white',
    focusRing: 'focus:ring-lime-500/50',
    dark: {
      solid: 'bg-lime-500 text-white',
      outline: 'border-lime-600 text-lime-300 bg-gray-800',
      ring: 'ring-lime-700',
      hover: 'hover:bg-lime-600 hover:text-white',
      focusRing: 'focus:ring-lime-400/50',
    }
  },
  green: {
    solid: 'bg-green-600 text-white',
    outline: 'border-green-300 text-green-700 bg-white',
    ring: 'ring-green-300',
    hover: 'hover:bg-green-700 hover:text-white',
    focusRing: 'focus:ring-green-500/50',
    dark: {
      solid: 'bg-green-500 text-white',
      outline: 'border-green-600 text-green-300 bg-gray-800',
      ring: 'ring-green-700',
      hover: 'hover:bg-green-600 hover:text-white',
      focusRing: 'focus:ring-green-400/50',
    }
  },
  emerald: {
    solid: 'bg-emerald-600 text-white',
    outline: 'border-emerald-300 text-emerald-700 bg-white',
    ring: 'ring-emerald-300',
    hover: 'hover:bg-emerald-700 hover:text-white',
    focusRing: 'focus:ring-emerald-500/50',
    dark: {
      solid: 'bg-emerald-500 text-white',
      outline: 'border-emerald-600 text-emerald-300 bg-gray-800',
      ring: 'ring-emerald-700',
      hover: 'hover:bg-emerald-600 hover:text-white',
      focusRing: 'focus:ring-emerald-400/50',
    }
  },
  teal: {
    solid: 'bg-teal-600 text-white',
    outline: 'border-teal-300 text-teal-700 bg-white',
    ring: 'ring-teal-300',
    hover: 'hover:bg-teal-700 hover:text-white',
    focusRing: 'focus:ring-teal-500/50',
    dark: {
      solid: 'bg-teal-500 text-white',
      outline: 'border-teal-600 text-teal-300 bg-gray-800',
      ring: 'ring-teal-700',
      hover: 'hover:bg-teal-600 hover:text-white',
      focusRing: 'focus:ring-teal-400/50',
    }
  },
  // 蓝色系
  cyan: {
    solid: 'bg-cyan-600 text-white',
    outline: 'border-cyan-300 text-cyan-700 bg-white',
    ring: 'ring-cyan-300',
    hover: 'hover:bg-cyan-700 hover:text-white',
    focusRing: 'focus:ring-cyan-500/50',
    dark: {
      solid: 'bg-cyan-500 text-white',
      outline: 'border-cyan-600 text-cyan-300 bg-gray-800',
      ring: 'ring-cyan-700',
      hover: 'hover:bg-cyan-600 hover:text-white',
      focusRing: 'focus:ring-cyan-400/50',
    }
  },
  sky: {
    solid: 'bg-sky-600 text-white',
    outline: 'border-sky-300 text-sky-700 bg-white',
    ring: 'ring-sky-300',
    hover: 'hover:bg-sky-700 hover:text-white',
    focusRing: 'focus:ring-sky-500/50',
    dark: {
      solid: 'bg-sky-500 text-white',
      outline: 'border-sky-600 text-sky-300 bg-gray-800',
      ring: 'ring-sky-700',
      hover: 'hover:bg-sky-600 hover:text-white',
      focusRing: 'focus:ring-sky-400/50',
    }
  },
  blue: {
    solid: 'bg-blue-600 text-white',
    outline: 'border-blue-300 text-blue-700 bg-white',
    ring: 'ring-blue-300',
    hover: 'hover:bg-blue-700 hover:text-white',
    focusRing: 'focus:ring-blue-500/50',
    dark: {
      solid: 'bg-blue-500 text-white',
      outline: 'border-blue-600 text-blue-300 bg-gray-800',
      ring: 'ring-blue-700',
      hover: 'hover:bg-blue-600 hover:text-white',
      focusRing: 'focus:ring-blue-400/50',
    }
  },
  indigo: {
    solid: 'bg-indigo-600 text-white',
    outline: 'border-indigo-300 text-indigo-700 bg-white',
    ring: 'ring-indigo-300',
    hover: 'hover:bg-indigo-700 hover:text-white',
    focusRing: 'focus:ring-indigo-500/50',
    dark: {
      solid: 'bg-indigo-500 text-white',
      outline: 'border-indigo-600 text-indigo-300 bg-gray-800',
      ring: 'ring-indigo-700',
      hover: 'hover:bg-indigo-600 hover:text-white',
      focusRing: 'focus:ring-indigo-400/50',
    }
  },
  // 紫粉色系
  violet: {
    solid: 'bg-violet-600 text-white',
    outline: 'border-violet-300 text-violet-700 bg-white',
    ring: 'ring-violet-300',
    hover: 'hover:bg-violet-700 hover:text-white',
    focusRing: 'focus:ring-violet-500/50',
    dark: {
      solid: 'bg-violet-500 text-white',
      outline: 'border-violet-600 text-violet-300 bg-gray-800',
      ring: 'ring-violet-700',
      hover: 'hover:bg-violet-600 hover:text-white',
      focusRing: 'focus:ring-violet-400/50',
    }
  },
  purple: {
    solid: 'bg-purple-600 text-white',
    outline: 'border-purple-300 text-purple-700 bg-white',
    ring: 'ring-purple-300',
    hover: 'hover:bg-purple-700 hover:text-white',
    focusRing: 'focus:ring-purple-500/50',
    dark: {
      solid: 'bg-purple-500 text-white',
      outline: 'border-purple-600 text-purple-300 bg-gray-800',
      ring: 'ring-purple-700',
      hover: 'hover:bg-purple-600 hover:text-white',
      focusRing: 'focus:ring-purple-400/50',
    }
  },
  fuchsia: {
    solid: 'bg-fuchsia-600 text-white',
    outline: 'border-fuchsia-300 text-fuchsia-700 bg-white',
    ring: 'ring-fuchsia-300',
    hover: 'hover:bg-fuchsia-700 hover:text-white',
    focusRing: 'focus:ring-fuchsia-500/50',
    dark: {
      solid: 'bg-fuchsia-500 text-white',
      outline: 'border-fuchsia-600 text-fuchsia-300 bg-gray-800',
      ring: 'ring-fuchsia-700',
      hover: 'hover:bg-fuchsia-600 hover:text-white',
      focusRing: 'focus:ring-fuchsia-400/50',
    }
  },
  pink: {
    solid: 'bg-pink-600 text-white',
    outline: 'border-pink-300 text-pink-700 bg-white',
    ring: 'ring-pink-300',
    hover: 'hover:bg-pink-700 hover:text-white',
    focusRing: 'focus:ring-pink-500/50',
    dark: {
      solid: 'bg-pink-500 text-white',
      outline: 'border-pink-600 text-pink-300 bg-gray-800',
      ring: 'ring-pink-700',
      hover: 'hover:bg-pink-600 hover:text-white',
      focusRing: 'focus:ring-pink-400/50',
    }
  },
  rose: {
    solid: 'bg-rose-600 text-white',
    outline: 'border-rose-300 text-rose-700 bg-white',
    ring: 'ring-rose-300',
    hover: 'hover:bg-rose-700 hover:text-white',
    focusRing: 'focus:ring-rose-500/50',
    dark: {
      solid: 'bg-rose-500 text-white',
      outline: 'border-rose-600 text-rose-300 bg-gray-800',
      ring: 'ring-rose-700',
      hover: 'hover:bg-rose-600 hover:text-white',
      focusRing: 'focus:ring-rose-400/50',
    }
  },
};
