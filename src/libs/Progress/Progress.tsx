import { defineComponent, computed, PropType, CSSProperties } from 'vue';

// 定义Success配置接口
interface SuccessProps {
  percent?: number;
  strokeColor?: string;
}

// 定义组件Props
export default defineComponent({
  name: 'Progress',
  props: {
    // 共用属性
    format: {
      type: Function as PropType<(percent: number, successPercent?: number) => string>,
      default: (percent: number) => `${percent}%`,
    },
    percent: {
      type: Number,
      default: 0,
    },
    showInfo: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String as PropType<'success' | 'exception' | 'normal' | 'active'>,
      default: 'normal',
    },
    strokeColor: {
      type: [String, Object, Array] as PropType<string | string[] | { from: string; to: string; direction: string }>,
      default: undefined,
    },
    strokeLinecap: {
      type: String as PropType<'round' | 'butt' | 'square'>,
      default: 'round',
    },
    success: {
      type: Object as PropType<SuccessProps>,
      default: () => ({}),
    },
    title: {
      type: String,
      default: '',
    },
    trailColor: {
      type: String,
      default: undefined,
    },
    type: {
      type: String as PropType<'line' | 'circle' | 'dashboard'>,
      default: 'line',
    },
    size: {
      type: [Number, String, Array] as PropType<number | [number, number] | 'small' | 'default'>,
      default: 'default',
    },
    // line类型特有属性
    steps: {
      type: Number,
      default: 0,
    },
    // circle/dashboard类型特有属性
    strokeWidth: {
      type: Number,
      default: 6,
    },
    // dashboard特有属性
    gapDegree: {
      type: Number,
      default: 75,
    },
    gapPosition: {
      type: String as PropType<'top' | 'bottom' | 'left' | 'right'>,
      default: 'bottom',
    },
  },
  setup(props) {
    // 计算最终的percent值，确保在0-100之间
    const validPercent = computed(() => Math.max(0, Math.min(100, props.percent)));
    // 成功部分的percent
    const successPercent = computed(() => {
      const { success } = props;
      return success?.percent !== undefined ? Math.max(0, Math.min(success.percent, 100)) : 0;
    });

    // 根据状态计算颜色
    const statusColorMap = {
      normal: 'var(--progress-color-normal, #1890ff)',
      success: 'var(--progress-color-success, #52c41a)',
      exception: 'var(--progress-color-exception, #ff4d4f)',
      active: 'var(--progress-color-normal, #1890ff)',
    };

    const getStrokeColor = computed(() => {
      if (props.strokeColor) return props.strokeColor;
      return statusColorMap[props.status || 'normal'];
    });

    const getSuccessColor = computed(() => {
      return props.success?.strokeColor || statusColorMap.success;
    });

    // 生成线条类名
    const lineClassName = computed(() => {
      const { status, size, type } = props;
      return [
        'relative',
        type === 'line' ? 'w-full' : '',
        status === 'active' && type === 'line' ? 'progress-active' : '',
        size === 'small' ? 'h-3' : 'h-5',
      ].filter(Boolean).join(' ');
    });
    
    // 判断是否为渐变色
    const isGradient = (color: any) => {
      return typeof color === 'object' && color.from && color.to;
    };

    // 生成线条样式
    const getLineStyle = (color: string | any, percent: number) => {
      const style: CSSProperties = {
        width: `${percent}%`,
        height: '100%',
      };
      
      if (typeof color === 'string') {
        style.backgroundColor = color;
      } else if (isGradient(color)) {
        style.backgroundImage = `linear-gradient(${color.direction || 'to right'}, ${color.from}, ${color.to})`;
      }
      
      return style;
    };

    // 渲染状态图标
    const renderStatusIcon = () => {
      const { status } = props;
      if (status === 'success') {
        return (
          <div class="inline-flex items-center justify-center rounded-full bg-green-500 dark:bg-green-600 shadow-sm transition-all duration-300 icon-container">
            <svg viewBox="0 0 24 24" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" class="animate-success-appear icon-svg">
              <polyline points="6 12 10 16 18 8"></polyline>
            </svg>
          </div>
        );
      }
      if (status === 'exception') {
        return (
          <div class="inline-flex items-center justify-center rounded-full bg-red-500 dark:bg-red-600 shadow-sm transition-all duration-300 icon-container">
            <svg viewBox="0 0 24 24" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" class="animate-error-appear icon-svg">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        );
      }
      return null;
    };

    // 渲染步骤进度条
    const renderSteps = () => {
      const { steps, strokeColor, trailColor, percent } = props;
      if (!steps || steps <= 0) return null;
      
      const current = Math.round(steps * (validPercent.value / 100));
      const stepWidth = 100 / steps;
      
      return (
        <div class="flex w-full h-full overflow-hidden">
          {Array.from({ length: steps }).map((_, index) => {
            const isActive = index < current;
            
            // 处理颜色
            let bgColor = trailColor || 'rgba(0, 0, 0, 0.06)';
            
            if (isActive) {
              if (Array.isArray(strokeColor)) {
                // 如果是数组颜色，使用对应索引的颜色，或者第一个颜色
                bgColor = strokeColor[index % strokeColor.length] || strokeColor[0];
              } else if (typeof strokeColor === 'string') {
                bgColor = strokeColor;
              } else if (isGradient(strokeColor)) {
                // 渐变色情况，使用from颜色
                bgColor = (strokeColor as any).from;
              } else {
                bgColor = statusColorMap[props.status || 'normal'];
              }
            }
            
            return (
              <div 
                key={index}
                class={`h-full transition-all duration-300 ${
                  props.strokeLinecap === 'round' ? 'rounded-full' : ''
                } ${
                  // 确保步骤条中间有适当的间距
                  index === 0 ? 'rounded-l-full' : ''
                } ${
                  index === steps - 1 ? 'rounded-r-full' : ''
                }`}
                style={{
                  backgroundColor: bgColor,
                  width: `calc(${stepWidth}% - ${steps > 1 ? 2 : 0}px)`,
                  marginRight: index < steps - 1 ? '2px' : '0',
                }}
              />
            );
          })}
        </div>
      );
    };

    // 渲染线形进度条
    const renderLineProgress = () => {
      const { trailColor, strokeLinecap } = props;
      
      // 有步骤时使用步骤进度条
      if (props.steps && props.steps > 0) {
        return (
          <div class={`${lineClassName.value} overflow-hidden`} style={{ backgroundColor: 'transparent' }}>
            {renderSteps()}
          </div>
        );
      }
      
      return (
        <div class="flex flex-col w-full">
          <div 
            class={`w-full overflow-hidden transition-all duration-300 ${lineClassName.value} ${strokeLinecap === 'round' ? 'rounded-full' : ''}`}
            style={{ backgroundColor: trailColor || 'rgba(0, 0, 0, 0.06)' }}
          >
            {/* 成功部分 */}
            {successPercent.value > 0 && (
              <div 
                class={`absolute left-0 top-0 h-full transition-all duration-300 ${strokeLinecap === 'round' ? 'rounded-full' : ''}`}
                style={getLineStyle(getSuccessColor.value, successPercent.value)}
              />
            )}
            
            {/* 主要进度部分 */}
            <div 
              class={`absolute left-0 top-0 h-full transition-all duration-300 ${strokeLinecap === 'round' ? 'rounded-full' : ''}`}
              style={getLineStyle(getStrokeColor.value, validPercent.value)}
            />
          </div>
        </div>
      );
    };

    // 计算圆形进度条SVG路径
    const getCirclePath = (percent: number, radius: number, gapPosition: string, gapDegree = 0) => {
      // 对于圆形进度条，我们需要计算完整的圆周路径
      const centerPoint = radius + props.strokeWidth / 2;
      
      if (props.type === 'circle') {
        // 对于完整圆形，返回一个完整的圆形路径
        return `M ${centerPoint},${props.strokeWidth / 2} 
                a ${radius},${radius} 0 1,1 0,${2 * radius} 
                a ${radius},${radius} 0 1,1 0,-${2 * radius}`;
      }
      
      // 仪表盘类型，需要计算带缺口的路径
      const gapRadian = (gapDegree / 180) * Math.PI;
      let beginAngle = 0;
      switch (gapPosition) {
        case 'left':
          beginAngle = -Math.PI / 2 + gapRadian;
          break;
        case 'right':
          beginAngle = -Math.PI / 2 - gapRadian;
          break;
        case 'bottom':
          beginAngle = Math.PI / 2;
          break;
        case 'top':
        default:
          beginAngle = -Math.PI / 2;
      }
      
      // 结束角度，考虑缺口
      const totalAngle = 2 * Math.PI - gapRadian * 2;
      const endAngle = beginAngle + totalAngle;
      
      const beginPoint = {
        x: centerPoint + radius * Math.cos(beginAngle),
        y: centerPoint + radius * Math.sin(beginAngle)
      };
      
      const endPoint = {
        x: centerPoint + radius * Math.cos(endAngle),
        y: centerPoint + radius * Math.sin(endAngle)
      };
      
      const largeArcFlag = totalAngle >= Math.PI ? 1 : 0;
      
      return `M ${beginPoint.x},${beginPoint.y} 
              A ${radius},${radius} 0 ${largeArcFlag},1 ${endPoint.x},${endPoint.y}`;
    };

    // 渲染圆形或仪表盘进度条
    const renderCircleProgress = () => {
      const { 
        type, strokeWidth, gapDegree, gapPosition, trailColor, strokeLinecap,
        showInfo, success
      } = props;
      
      // 计算尺寸
      const sizeValue = props.size === 'small' ? 80 : props.size === 'default' ? 120 : 
        (Array.isArray(props.size) ? props.size[0] : Number(props.size) || 120);
      
      const radius = sizeValue / 2 - strokeWidth / 2;
      // 圆周长
      const circumference = 2 * Math.PI * radius;
      
      // 计算仪表盘的缺口角度
      const circleGapDegree = type === 'dashboard' ? (gapDegree || 75) : 0;
      const circleGapPosition = type === 'dashboard' ? (gapPosition || 'bottom') : 'top';
      
      // 计算可用的弧长比例 (对于dashboard考虑缺口)
      const availablePercent = type === 'dashboard' ? (360 - circleGapDegree) / 360 : 1;
      const availableLength = circumference * availablePercent;
      
      // 计算路径
      const pathString = getCirclePath(100, radius, circleGapPosition, circleGapDegree);
      const trailPathStyle = {
        stroke: trailColor || (props.status === 'success' ? '#f0f9eb' : '#f5f5f5'),
        strokeDasharray: `${availableLength}px ${circumference}px`,
        strokeDashoffset: '0',
        transition: 'stroke-dashoffset 0.3s ease, stroke-dasharray 0.3s ease, stroke 0.3s',
      };
      
      // 计算进度条路径样式
      const getColorForStroke = () => {
        if (typeof getStrokeColor.value === 'string') {
          return getStrokeColor.value;
        } 
        if (Array.isArray(getStrokeColor.value)) {
          return getStrokeColor.value[0];
        }
        return (getStrokeColor.value as any)?.from || statusColorMap[props.status || 'normal'];
      };
      
      const percentValue = validPercent.value / 100;
      const strokePathLength = availableLength * percentValue;
      
      const strokePathStyle = {
        stroke: getColorForStroke(),
        strokeDasharray: `${strokePathLength}px ${circumference}px`,
        strokeDashoffset: '0',
        transition: 'stroke-dashoffset 0.3s ease, stroke-dasharray 0.3s ease, stroke 0.3s',
      };
      
      // 成功状态路径样式
      const successPercentValue = successPercent.value / 100;
      const successPathLength = availableLength * successPercentValue;
      
      const successPathStyle = success?.percent ? {
        stroke: getSuccessColor.value,
        strokeDasharray: `${successPathLength}px ${circumference}px`,
        strokeDashoffset: '0',
        transition: 'stroke-dashoffset 0.3s ease, stroke-dasharray 0.3s ease, stroke 0.3s',
      } : {};
      
      // 计算内部文本大小
      const textStyle = { fontSize: sizeValue * 0.16 + 6 };
      
      return (
        <div class="inline-flex items-center justify-center relative" style={{ width: `${sizeValue}px`, height: `${sizeValue}px` }}>
          <svg viewBox={`0 0 ${sizeValue} ${sizeValue}`} width={sizeValue} height={sizeValue}>
            {/* 轨道 */}
            <path 
              class="transition-all"
              d={pathString}
              stroke-linecap={strokeLinecap}
              stroke-width={strokeWidth}
              fill="none"
              style={trailPathStyle}
            />
            
            {/* 成功部分 */}
            {success?.percent && (
              <path
                class="transition-all"
                d={pathString}
                stroke-linecap={strokeLinecap}
                stroke-width={strokeWidth}
                fill="none"
                style={successPathStyle}
              />
            )}
            
            {/* 进度部分 */}
            <path
              class="transition-all"
              d={pathString}
              stroke-linecap={strokeLinecap}
              stroke-width={strokeWidth}
              fill="none"
              style={strokePathStyle}
            />
          </svg>
          
          {/* 中间信息展示 */}
          {showInfo && (
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full">
              {props.status === 'success' || props.status === 'exception' ? (
                <span class="flex items-center justify-center" style={textStyle}>
                  {renderStatusIcon()}
                </span>
              ) : (
                <span class="text-center" style={textStyle}>
                  {props.format(validPercent.value, successPercent.value)}
                </span>
              )}
            </div>
          )}
        </div>
      );
    };

    return () => {
      const { type, showInfo, title } = props;

      return (
        <div 
          class={`inline-flex items-center transition-all duration-300 dark:text-white ${
            type === 'line' ? 'w-full flex-col sm:flex-row sm:items-center' : ''
          }`}
          title={title}
        >
          {/* 进度条主体 */}
          <div class={`${type === 'line' ? 'w-full' : ''}`}>
            {type === 'line' ? renderLineProgress() : renderCircleProgress()}
          </div>
          
          {/* 线形进度条的信息显示 */}
          {type === 'line' && showInfo && (
            <div class={`ml-2 whitespace-nowrap min-w-[40px] text-right text-sm flex items-center justify-end ${
              props.size === 'small' ? 'text-xs' : ''
            }`}>
              {props.status === 'success' || props.status === 'exception' ? (
                renderStatusIcon()
              ) : (
                props.format(validPercent.value, successPercent.value)
              )}
            </div>
          )}
        </div>
      );
    };
  },
});
