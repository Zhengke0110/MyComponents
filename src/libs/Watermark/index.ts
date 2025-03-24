import Watermark from './Watermark';

export { Watermark };

// 导出 WatermarkFont 类型便于使用
export interface WatermarkFont {
    color: string;
    fontSize: number;
    fontWeight: 'normal' | 'light' | 'weight' | number;
    fontFamily: string;
    fontStyle: 'none' | 'normal' | 'italic' | 'oblique';
}
import View from './View.vue'
export default View
