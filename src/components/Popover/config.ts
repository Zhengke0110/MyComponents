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

export type PlacementType =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

export interface PopoverProps {
  placement?: PlacementType;
  offset?: number;
  delay?: number;
  trigger?: "hover" | "click";
  arrow?: boolean;
  customClass?: string;
  contentClass?: string;
  closeOnContentClick?: boolean;
  showDelay?: number;
  hideDelay?: number;
  persistent?: boolean;
  // 添加自定义背景色属性
  backgroundColor?: string;
  darkBackgroundColor?: string;
  theme?: ColorType;
  variant?: "solid" | "light" | "glass";
}

// 添加颜色映射对象
export const colorMap = {
  slate: { light: "#f8fafc", dark: "#334155" },
  gray: { light: "#f9fafb", dark: "#374151" },
  zinc: { light: "#fafafa", dark: "#3f3f46" },
  neutral: { light: "#fafafa", dark: "#404040" },
  stone: { light: "#fafaf9", dark: "#44403c" },
  red: { light: "#fef2f2", dark: "#991b1b" },
  orange: { light: "#fff7ed", dark: "#9a3412" },
  amber: { light: "#fffbeb", dark: "#92400e" },
  yellow: { light: "#fefce8", dark: "#854d0e" },
  lime: { light: "#f7fee7", dark: "#3f6212" },
  green: { light: "#f0fdf4", dark: "#166534" },
  emerald: { light: "#ecfdf5", dark: "#065f46" },
  teal: { light: "#f0fdfa", dark: "#115e59" },
  cyan: { light: "#ecfeff", dark: "#155e75" },
  sky: { light: "#f0f9ff", dark: "#075985" },
  blue: { light: "#eff6ff", dark: "#1e40af" },
  indigo: { light: "#eef2ff", dark: "#3730a3" },
  violet: { light: "#f5f3ff", dark: "#5b21b6" },
  purple: { light: "#faf5ff", dark: "#6b21a8" },
  fuchsia: { light: "#fdf4ff", dark: "#86198f" },
  pink: { light: "#fdf2f8", dark: "#9d174d" },
  rose: { light: "#fff1f2", dark: "#9f1239" },
} as const;
