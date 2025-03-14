export type ColorType = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系

export type ThemeColorType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

/**
 * ModalBox 组件 Props 接口定义
 */
export interface ModalBoxProps {
  /**
   * 控制模态框的显示与隐藏
   */
  modelValue: boolean;
  
  /**
   * 模态框主题颜色，可以是预设主题或具体颜色
   * @default 'primary'
   */
  theme?: ColorType | ThemeColorType;
  
  /**
   * 是否全屏显示
   * @default false
   */
  fullscreen?: boolean;
  
  /**
   * 内容区域的自定义类名
   * @default ''
   */
  contentClass?: string;
  
  /**
   * 是否点击遮罩层关闭模态框
   * @default true
   */
  closeOnClickOverlay?: boolean;
  
  /**
   * 过渡动画持续时间（毫秒）
   * @default 200
   */
  transitionDuration?: number;
}
