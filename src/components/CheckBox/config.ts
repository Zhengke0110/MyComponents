
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
 * 颜色主题映射
 * 已包含所有 ColorType 颜色
 */
export const colorMap: Record<
  ColorType,
  { light: string; medium: string; dark: string }
> = {
  // 灰色系
  slate: { light: "#cbd5e1", medium: "#64748b", dark: "#475569" },
  gray: { light: "#d1d5db", medium: "#6b7280", dark: "#4b5563" },
  zinc: { light: "#d4d4d8", medium: "#71717a", dark: "#52525b" },
  neutral: { light: "#d4d4d4", medium: "#737373", dark: "#525252" },
  stone: { light: "#d6d3d1", medium: "#78716c", dark: "#57534e" },
  
  // 暖色系
  red: { light: "#fca5a5", medium: "#ef4444", dark: "#dc2626" },
  orange: { light: "#fdba74", medium: "#f97316", dark: "#ea580c" },
  amber: { light: "#fcd34d", medium: "#f59e0b", dark: "#d97706" },
  yellow: { light: "#fde047", medium: "#eab308", dark: "#ca8a04" },
  
  // 绿色系
  lime: { light: "#bef264", medium: "#84cc16", dark: "#65a30d" },
  green: { light: "#86efac", medium: "#22c55e", dark: "#16a34a" },
  emerald: { light: "#6ee7b7", medium: "#10b981", dark: "#059669" },
  teal: { light: "#5eead4", medium: "#14b8a6", dark: "#0d9488" },
  
  // 蓝色系
  cyan: { light: "#67e8f9", medium: "#06b6d4", dark: "#0891b2" },
  sky: { light: "#7dd3fc", medium: "#0ea5e9", dark: "#0284c7" },
  blue: { light: "#93c5fd", medium: "#3b82f6", dark: "#2563eb" },
  indigo: { light: "#a5b4fc", medium: "#6366f1", dark: "#4f46e5" },
  
  // 紫粉色系
  violet: { light: "#c4b5fd", medium: "#8b5cf6", dark: "#7c3aed" },
  purple: { light: "#d8b4fe", medium: "#a855f7", dark: "#9333ea" },
  fuchsia: { light: "#f0abfc", medium: "#d946ef", dark: "#c026d3" },
  pink: { light: "#f9a8d4", medium: "#ec4899", dark: "#db2777" },
  rose: { light: "#fda4af", medium: "#f43f5e", dark: "#e11d48" },
};

/**
 * 暗色模式下的颜色映射
 */
export const darkModeColorMap: Record<
  ColorType,
  { light: string; medium: string; dark: string }
> = {
  // 灰色系
  slate: { light: "#94a3b8", medium: "#cbd5e1", dark: "#e2e8f0" },
  gray: { light: "#9ca3af", medium: "#d1d5db", dark: "#e5e7eb" },
  zinc: { light: "#a1a1aa", medium: "#d4d4d8", dark: "#e4e4e7" },
  neutral: { light: "#a3a3a3", medium: "#d4d4d4", dark: "#e5e5e5" },
  stone: { light: "#a8a29e", medium: "#d6d3d1", dark: "#e7e5e4" },
  
  // 暖色系
  red: { light: "#f87171", medium: "#fca5a5", dark: "#fecaca" },
  orange: { light: "#fb923c", medium: "#fdba74", dark: "#fed7aa" },
  amber: { light: "#fbbf24", medium: "#fcd34d", dark: "#fde68a" },
  yellow: { light: "#facc15", medium: "#fde047", dark: "#fef08a" },
  
  // 绿色系
  lime: { light: "#a3e635", medium: "#bef264", dark: "#d9f99d" },
  green: { light: "#4ade80", medium: "#86efac", dark: "#bbf7d0" },
  emerald: { light: "#34d399", medium: "#6ee7b7", dark: "#a7f3d0" },
  teal: { light: "#2dd4bf", medium: "#5eead4", dark: "#99f6e4" },
  
  // 蓝色系
  cyan: { light: "#22d3ee", medium: "#67e8f9", dark: "#a5f3fc" },
  sky: { light: "#38bdf8", medium: "#7dd3fc", dark: "#bae6fd" },
  blue: { light: "#60a5fa", medium: "#93c5fd", dark: "#bfdbfe" },
  indigo: { light: "#818cf8", medium: "#a5b4fc", dark: "#c7d2fe" },
  
  // 紫粉色系
  violet: { light: "#a78bfa", medium: "#c4b5fd", dark: "#ddd6fe" },
  purple: { light: "#c084fc", medium: "#d8b4fe", dark: "#e9d5ff" },
  fuchsia: { light: "#e879f9", medium: "#f0abfc", dark: "#f5d0fe" },
  pink: { light: "#f472b6", medium: "#f9a8d4", dark: "#fbcfe8" },
  rose: { light: "#fb7185", medium: "#fda4af", dark: "#fecdd3" },
};

/**
 * 复选框基础类名
 */
export const baseCheckboxClasses = {
  "relative cursor-pointer appearance-none rounded border": true,
  "transition-all duration-200 ease-in-out": true,
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tw-checkbox-hover)] focus-visible:ring-offset-2": true,
  "disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100": true,
  "checked:bg-[var(--tw-checkbox-checked)] checked:border-[var(--tw-checkbox-checked)]": true,
  "checked:animate-pulse checked:animate-once checked:animate-duration-200": true,
};

/**
 * 亮色模式下的复选框类名
 */
export const lightModeCheckboxClasses = {
  "bg-white": true,
};

/**
 * 暗色模式下的复选框基础类名
 */
export const darkModeCheckboxClasses = {
  "border-gray-600": true,  // 暗色模式边框色
  "disabled:bg-gray-900 disabled:border-gray-700": true,
  "focus-visible:ring-offset-gray-900": true,
  "bg-gray-800": true,  // 暗色模式背景色
};

/**
 * 图标基础类名
 */
export const baseIconClasses = [
  "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "transition-transform duration-200 ease-in-out",
  "stroke-white group-has-[:disabled]:stroke-gray-950/25",
];

/**
 * 暗色模式下的图标基础类名
 */
export const darkModeIconClasses = [
  "group-has-[:disabled]:stroke-gray-400/50",
];

/**
 * 路径配置
 */
export const svgPaths = {
  check: "M4 8.5L6.5 11L12 4",
  indeterminate: "M3 8H13"
};
