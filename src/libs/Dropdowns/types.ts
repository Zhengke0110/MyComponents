import type { ColorType } from './constant';

export interface DropdownItem {
  id: string | number;
  type: 'button' | 'divider' | 'link'; 
  label?: string;
  icon?: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  danger?: boolean;
}

export type DropdownSize = 'sm' | 'md' | 'lg';
export type DropdownVariant = 'solid' | 'outline';

export interface DropdownProps {
  label: string;
  items: DropdownItem[];
  size?: DropdownSize;
  theme?: ColorType;
  variant?: DropdownVariant;
  buttonClass?: string;
  autoAdjust?: boolean;
}
