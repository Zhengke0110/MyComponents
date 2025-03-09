import type { PropType, ExtractPropTypes } from 'vue';
import { ColorType, ThemeColorType } from '../colors';

/**
 * CheckBox 组件接口定义
 */
export interface CheckBoxProps {
  modelValue: boolean;
  id: string;
  name?: string;
  label: string;
  description?: string;
  disabled?: boolean;
  color?: ColorType;
  theme?: ThemeColorType;
  layout?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  inline?: boolean;
  indeterminate?: boolean;
  wrapperClass?: string;
  labelClass?: string;
  darkMode?: boolean; // 是否强制使用暗色模式
  followSystem?: boolean; // 是否跟随系统设置
}

/**
 * CheckBox 组件 Props 定义
 */
export const checkBoxProps = {
  modelValue: {
    type: Boolean,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String as PropType<ColorType>,
    default: 'indigo',
  },
  theme: {
    type: String as PropType<ThemeColorType>,
    default: undefined,
  },
  layout: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  inline: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  darkMode: {
    type: Boolean,
    default: false,
  },
  followSystem: {
    type: Boolean,
    default: true,
  },
};

export type CheckBoxEmits = {
  'update:modelValue': [value: boolean];
  'change': [event: Event];
  'focus': [event: FocusEvent];
  'blur': [event: FocusEvent];
  'click': [event: MouseEvent];
};

export type CheckBoxPropsType = ExtractPropTypes<typeof checkBoxProps>;
