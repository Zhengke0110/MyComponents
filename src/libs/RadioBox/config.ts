export type ColorType =
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系

export type RadioSize = 'large' | 'default' | 'small';
export type RadioButtonStyle = 'outline' | 'solid';
export type RadioOptionType = 'default' | 'button';

export interface RadioOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface RadioProps {
  modelValue?: string | number | boolean;
  value?: string | number | boolean;
  disabled?: boolean;
  name?: string;
  autofocus?: boolean;
  color?: ColorType;
}

export interface RadioGroupProps {
  modelValue?: any;
  disabled?: boolean;
  name?: string;
  size?: RadioSize;
  optionType?: RadioOptionType;
  buttonStyle?: RadioButtonStyle;
  options?: Array<string | number | RadioOption>;
  color?: ColorType;
}

// 颜色映射表
export const colorMap: Record<ColorType, { light: string, dark: string }> = {
  // 灰色系
  slate: { light: 'bg-slate-500 border-slate-500', dark: 'dark:bg-slate-400 dark:border-slate-400' },
  gray: { light: 'bg-gray-500 border-gray-500', dark: 'dark:bg-gray-400 dark:border-gray-400' },
  zinc: { light: 'bg-zinc-500 border-zinc-500', dark: 'dark:bg-zinc-400 dark:border-zinc-400' },
  neutral: { light: 'bg-neutral-500 border-neutral-500', dark: 'dark:bg-neutral-400 dark:border-neutral-400' },
  stone: { light: 'bg-stone-500 border-stone-500', dark: 'dark:bg-stone-400 dark:border-stone-400' },
  // 暖色系
  red: { light: 'bg-red-500 border-red-500', dark: 'dark:bg-red-400 dark:border-red-400' },
  orange: { light: 'bg-orange-500 border-orange-500', dark: 'dark:bg-orange-400 dark:border-orange-400' },
  amber: { light: 'bg-amber-500 border-amber-500', dark: 'dark:bg-amber-400 dark:border-amber-400' },
  yellow: { light: 'bg-yellow-500 border-yellow-500', dark: 'dark:bg-yellow-400 dark:border-yellow-400' },
  // 绿色系
  lime: { light: 'bg-lime-500 border-lime-500', dark: 'dark:bg-lime-400 dark:border-lime-400' },
  green: { light: 'bg-green-500 border-green-500', dark: 'dark:bg-green-400 dark:border-green-400' },
  emerald: { light: 'bg-emerald-500 border-emerald-500', dark: 'dark:bg-emerald-400 dark:border-emerald-400' },
  teal: { light: 'bg-teal-500 border-teal-500', dark: 'dark:bg-teal-400 dark:border-teal-400' },
  // 蓝色系
  cyan: { light: 'bg-cyan-500 border-cyan-500', dark: 'dark:bg-cyan-400 dark:border-cyan-400' },
  sky: { light: 'bg-sky-500 border-sky-500', dark: 'dark:bg-sky-400 dark:border-sky-400' },
  blue: { light: 'bg-blue-500 border-blue-500', dark: 'dark:bg-blue-400 dark:border-blue-400' },
  indigo: { light: 'bg-indigo-500 border-indigo-500', dark: 'dark:bg-indigo-400 dark:border-indigo-400' },
  // 紫粉色系
  violet: { light: 'bg-violet-500 border-violet-500', dark: 'dark:bg-violet-400 dark:border-violet-400' },
  purple: { light: 'bg-purple-500 border-purple-500', dark: 'dark:bg-purple-400 dark:border-purple-400' },
  fuchsia: { light: 'bg-fuchsia-500 border-fuchsia-500', dark: 'dark:bg-fuchsia-400 dark:border-fuchsia-400' },
  pink: { light: 'bg-pink-500 border-pink-500', dark: 'dark:bg-pink-400 dark:border-pink-400' },
  rose: { light: 'bg-rose-500 border-rose-500', dark: 'dark:bg-rose-400 dark:border-rose-400' },
};
