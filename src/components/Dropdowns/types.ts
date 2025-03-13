export interface DropdownItem {
  id: string | number;
  type: 'button' | 'divider' | 'link'; // 扩展 type 的取值范围
  label?: string;
  icon?: string;
  disabled?: boolean;
  href?:string 
  onClick?: () => void;
}

export type DropdownSize = 'sm' | 'md' | 'lg';
export type DropdownVariant = 'solid' | 'outline';
