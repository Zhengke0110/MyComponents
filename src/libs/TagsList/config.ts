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

// 精简优化的颜色映射表，同时支持浅色和深色模式
export const COLOR_MAP = {
    // 灰色系列
    slate: {
      light: { bg: '#f1f5f9', text: '#334155', border: '#cbd5e1' },
      dark: { bg: '#1e293b', text: '#e2e8f0', border: '#475569' }
    },
    gray: {
      light: { bg: '#f3f4f6', text: '#374151', border: '#d1d5db' },
      dark: { bg: '#1f2937', text: '#e5e7eb', border: '#4b5563' }
    },
    zinc: {
      light: { bg: '#f4f4f5', text: '#3f3f46', border: '#d4d4d8' },
      dark: { bg: '#27272a', text: '#e4e4e7', border: '#52525b' }
    },
    neutral: {
      light: { bg: '#f5f5f5', text: '#404040', border: '#d4d4d4' },
      dark: { bg: '#262626', text: '#e5e5e5', border: '#525252' }
    },
    stone: {
      light: { bg: '#f5f5f4', text: '#44403c', border: '#d6d3d1' },
      dark: { bg: '#292524', text: '#e7e5e4', border: '#57534e' }
    },
    // 彩色系列
    red: {
      light: { bg: '#fee2e2', text: '#b91c1c', border: '#fca5a5' },
      dark: { bg: '#7f1d1d', text: '#fecaca', border: '#ef4444' }
    },
    orange: {
      light: { bg: '#ffedd5', text: '#c2410c', border: '#fdba74' },
      dark: { bg: '#7c2d12', text: '#fed7aa', border: '#f97316' }
    },
    amber: {
      light: { bg: '#fef3c7', text: '#b45309', border: '#fcd34d' },
      dark: { bg: '#78350f', text: '#fde68a', border: '#f59e0b' }
    },
    yellow: {
      light: { bg: '#fef9c3', text: '#a16207', border: '#fde047' },
      dark: { bg: '#713f12', text: '#fef08a', border: '#eab308' }
    },
    lime: {
      light: { bg: '#ecfccb', text: '#4d7c0f', border: '#bef264' },
      dark: { bg: '#3f6212', text: '#d9f99d', border: '#84cc16' }
    },
    green: {
      light: { bg: '#dcfce7', text: '#15803d', border: '#86efac' },
      dark: { bg: '#166534', text: '#bbf7d0', border: '#22c55e' }
    },
    emerald: {
      light: { bg: '#d1fae5', text: '#047857', border: '#6ee7b7' },
      dark: { bg: '#065f46', text: '#a7f3d0', border: '#10b981' }
    },
    teal: {
      light: { bg: '#ccfbf1', text: '#0f766e', border: '#5eead4' },
      dark: { bg: '#115e59', text: '#99f6e4', border: '#14b8a6' }
    },
    cyan: {
      light: { bg: '#cffafe', text: '#0e7490', border: '#67e8f9' },
      dark: { bg: '#155e75', text: '#a5f3fc', border: '#06b6d4' }
    },
    sky: {
      light: { bg: '#e0f2fe', text: '#0369a1', border: '#7dd3fc' },
      dark: { bg: '#075985', text: '#bae6fd', border: '#0ea5e9' }
    },
    blue: {
      light: { bg: '#dbeafe', text: '#1d4ed8', border: '#93c5fd' },
      dark: { bg: '#1e40af', text: '#bfdbfe', border: '#3b82f6' }
    },
    indigo: {
      light: { bg: '#e0e7ff', text: '#4338ca', border: '#a5b4fc' },
      dark: { bg: '#3730a3', text: '#c7d2fe', border: '#6366f1' }
    },
    violet: {
      light: { bg: '#ede9fe', text: '#6d28d9', border: '#c4b5fd' },
      dark: { bg: '#5b21b6', text: '#ddd6fe', border: '#8b5cf6' }
    },
    purple: {
      light: { bg: '#f3e8ff', text: '#7e22ce', border: '#d8b4fe' },
      dark: { bg: '#6b21a8', text: '#e9d5ff', border: '#a855f7' }
    },
    fuchsia: {
      light: { bg: '#fae8ff', text: '#a21caf', border: '#e879f9' },
      dark: { bg: '#86198f', text: '#f5d0fe', border: '#d946ef' }
    },
    pink: {
      light: { bg: '#fce7f3', text: '#be185d', border: '#f9a8d4' },
      dark: { bg: '#9d174d', text: '#fbcfe8', border: '#ec4899' }
    },
    rose: {
      light: { bg: '#ffe4e6', text: '#be123c', border: '#fda4af' },
      dark: { bg: '#9f1239', text: '#fecdd3', border: '#f43f5e' }
    }
  }
  