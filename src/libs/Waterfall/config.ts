// 定义WaterfallItem接口
export interface WaterfallItem {
    _style?: {
        left: number;
        top: number;
        width?: number; // 添加宽度属性以支持可变列宽
        height?: number; // 存储真实高度
        opacity?: number; // 控制可见度
    };
    [key: string]: any;
}

// 响应式断点配置接口
export interface ResponsiveBreakpoint {
    width: number;
    column: number;
    columnSpacing?: number;
    rowSpacing?: number;
}