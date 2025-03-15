// 尺寸映射
export const sizeMap = {
  xs: "size-6",
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
  xl: "size-14",
  "2xl": "size-16",
};

// 状态指示器尺寸映射
export const statusSizeMap = {
  xs: "size-1.5",
  sm: "size-2",
  md: "size-2.5",
  lg: "size-3",
  xl: "size-3.5",
  "2xl": "size-4",
};

// 文字尺寸映射
export const fontSizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

// 状态颜色映射
export const statusColorMap = {
  online: "bg-green-400",
  offline: "bg-gray-300",
  busy: "bg-red-400",
  away: "bg-yellow-400",
};

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type AvatarShape = "circle" | "square";
export type AvatarStatus = "online" | "offline" | "busy" | "away" | null;
export type StatusPosition = "top-right" | "bottom-right";
