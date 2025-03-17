import type { PropType, ExtractPropTypes } from 'vue';
import type { CheckBoxType } from './config';

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
  type?: CheckBoxType;
  layout?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  inline?: boolean;
  indeterminate?: boolean;
  wrapperClass?: string;
  labelClass?: string;
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
  type: {
    type: String as PropType<CheckBoxType>,
    default: 'primary',
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
};


export type CheckBoxPropsType = ExtractPropTypes<typeof checkBoxProps>;
