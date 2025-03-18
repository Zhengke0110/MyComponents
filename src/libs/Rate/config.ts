/**
 * 统一颜色管理工具
 * 集中管理组件库中使用的所有颜色，与 Tailwind CSS 色板保持一致
 */

// 所有可用的颜色类型
export type ColorType =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone" // 灰色系
  | "red"
  | "orange"
  | "amber"
  | "yellow" // 暖色系
  | "lime"
  | "green"
  | "emerald"
  | "teal" // 绿色系
  | "cyan"
  | "sky"
  | "blue"
  | "indigo" // 蓝色系
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"; // 紫粉色系

// 颜色映射表，将颜色类型映射到具体的颜色值
export const colorMap: Record<
  ColorType,
  { light: string; dark: string; lightEmpty: string; darkEmpty: string }
> = {
  // 灰色系
  slate: {
    light: "#94a3b8",
    dark: "#64748b",
    lightEmpty: "#e2e8f0",
    darkEmpty: "#334155",
  },
  gray: {
    light: "#9ca3af",
    dark: "#6b7280",
    lightEmpty: "#e5e7eb",
    darkEmpty: "#374151",
  },
  zinc: {
    light: "#a1a1aa",
    dark: "#71717a",
    lightEmpty: "#e4e4e7",
    darkEmpty: "#3f3f46",
  },
  neutral: {
    light: "#a3a3a3",
    dark: "#737373",
    lightEmpty: "#e5e5e5",
    darkEmpty: "#404040",
  },
  stone: {
    light: "#a8a29e",
    dark: "#78716c",
    lightEmpty: "#e7e5e4",
    darkEmpty: "#44403c",
  },

  // 暖色系
  red: {
    light: "#f87171",
    dark: "#ef4444",
    lightEmpty: "#fecaca",
    darkEmpty: "#7f1d1d",
  },
  orange: {
    light: "#fb923c",
    dark: "#f97316",
    lightEmpty: "#fed7aa",
    darkEmpty: "#9a3412",
  },
  amber: {
    light: "#fbbf24",
    dark: "#f59e0b",
    lightEmpty: "#fde68a",
    darkEmpty: "#92400e",
  },
  yellow: {
    light: "#facc15",
    dark: "#eab308",
    lightEmpty: "#fef08a",
    darkEmpty: "#854d0e",
  },

  // 绿色系
  lime: {
    light: "#a3e635",
    dark: "#84cc16",
    lightEmpty: "#d9f99d",
    darkEmpty: "#4d7c0f",
  },
  green: {
    light: "#4ade80",
    dark: "#22c55e",
    lightEmpty: "#bbf7d0",
    darkEmpty: "#166534",
  },
  emerald: {
    light: "#34d399",
    dark: "#10b981",
    lightEmpty: "#a7f3d0",
    darkEmpty: "#065f46",
  },
  teal: {
    light: "#2dd4bf",
    dark: "#14b8a6",
    lightEmpty: "#99f6e4",
    darkEmpty: "#115e59",
  },

  // 蓝色系
  cyan: {
    light: "#22d3ee",
    dark: "#06b6d4",
    lightEmpty: "#a5f3fc",
    darkEmpty: "#155e75",
  },
  sky: {
    light: "#38bdf8",
    dark: "#0ea5e9",
    lightEmpty: "#bae6fd",
    darkEmpty: "#075985",
  },
  blue: {
    light: "#60a5fa",
    dark: "#3b82f6",
    lightEmpty: "#bfdbfe",
    darkEmpty: "#1e40af",
  },
  indigo: {
    light: "#818cf8",
    dark: "#6366f1",
    lightEmpty: "#c7d2fe",
    darkEmpty: "#3730a3",
  },

  // 紫粉色系
  violet: {
    light: "#a78bfa",
    dark: "#8b5cf6",
    lightEmpty: "#ddd6fe",
    darkEmpty: "#5b21b6",
  },
  purple: {
    light: "#c084fc",
    dark: "#a855f7",
    lightEmpty: "#e9d5ff",
    darkEmpty: "#6b21a8",
  },
  fuchsia: {
    light: "#e879f9",
    dark: "#d946ef",
    lightEmpty: "#f5d0fe",
    darkEmpty: "#86198f",
  },
  pink: {
    light: "#f472b6",
    dark: "#ec4899",
    lightEmpty: "#fbcfe8",
    darkEmpty: "#9d174d",
  },
  rose: {
    light: "#fb7185",
    dark: "#f43f5e",
    lightEmpty: "#fecdd3",
    darkEmpty: "#9f1239",
  },
};
/**
 * 预设图标类型
 */
export type IconType = 'star' | 'heart' | 'circle' | 'flag' | 'like' | 'crown';

// 预设图标的SVG路径映射
export const iconMap: Record<IconType, string> = {
  star: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  heart: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  circle: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
  flag: "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z",
  like: "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",
  crown: "M12 1L9 9 1 12l8 3 3 8 3-8 8-3-8-3-3-8z"
};

 // 尺寸映射
 export const sizeMap = {
    sm: {
        starSize: "w-5 h-5",
        container: "gap-1",
        fontSize: "text-xs",
    },
    md: {
        starSize: "w-7 h-7",
        container: "gap-1.5",
        fontSize: "text-sm",
    },
    lg: {
        starSize: "w-9 h-9",
        container: "gap-2",
        fontSize: "text-base",
    },
};