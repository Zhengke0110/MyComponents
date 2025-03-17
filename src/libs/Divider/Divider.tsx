import { defineComponent, PropType, computed, CSSProperties } from 'vue'

export type DividerType = 'horizontal' | 'vertical'
export type DividerAlign = 'left' | 'right' | 'center'
export type DividerTheme = 'light' | 'dark' | 'auto'

export interface DividerProps {
  type?: DividerType
  align?: DividerAlign
  dashed?: boolean
  plain?: boolean
  borderWidth?: number | string
  className?: string
  textClassName?: string
  borderStyle?: string
  borderColor?: string
  animated?: boolean | 'hover' | 'always'
  animationDuration?: number
  theme?: DividerTheme
  orientation?: 'center' | 'left' | 'right'
  orientationMargin?: string | number
  styles?: CSSProperties
}

const Divider = defineComponent({
  name: 'Divider',
  props: {
    type: {
      type: String as PropType<DividerType>,
      default: 'horizontal'
    },
    align: {
      type: String as PropType<DividerAlign>,
      default: 'center'
    },
    dashed: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    borderWidth: {
      type: [Number, String],
      default: 1
    },
    className: {
      type: String,
      default: ''
    },
    textClassName: {
      type: String,
      default: ''
    },
    borderStyle: {
      type: String,
      default: 'solid'
    },
    borderColor: {
      type: String,
      default: ''
    },
    animated: {
      type: [Boolean, String] as PropType<boolean | 'hover' | 'always'>,
      default: false
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    theme: {
      type: String as PropType<DividerTheme>,
      default: 'auto'
    },
    orientation: {
      type: String as PropType<'center' | 'left' | 'right'>,
      default: 'center'
    },
    orientationMargin: {
      type: [String, Number],
      default: 0
    },
    styles: {
      type: Object as PropType<CSSProperties>,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const hasSlots = computed(() => !!slots.default)
    
    // 计算分割线的主要类名
    const dividerClass = computed(() => {
      const classes = [
        'divider',
        `divider-${props.type}`,
        props.className,
        props.dashed ? 'border-dashed' : '',
        'transition-all'
      ]
      
      // 处理主题样式
      if (props.theme === 'dark') {
        classes.push('divider-dark')
      } else if (props.theme === 'auto') {
        classes.push('dark:border-gray-600', 'dark:text-gray-300')
      }
      
      // 处理动画类
      if (props.animated) {
        if (props.animated === 'always') {
          classes.push('divider-animated-always')
        } else if (props.animated === 'hover') {
          classes.push('divider-animated-hover')
        } else {
          classes.push('divider-animated')
        }
      }
      
      // 处理排版相关类
      if (props.type === 'horizontal') {
        classes.push('flex', 'items-center', 'w-full', 'my-4')
        if (hasSlots.value) {
          classes.push(`divider-text-${props.align || props.orientation}`)
        }
      } else {
        classes.push('inline-block', 'h-full', 'mx-2', 'align-middle')
      }
      
      return classes.filter(Boolean).join(' ')
    })
    
    // 计算分割线的样式
    const lineStyle = computed(() => {
      const style: Record<string, string | number> = {
        ...props.styles,
        borderWidth: typeof props.borderWidth === 'number' ? `${props.borderWidth}px` : props.borderWidth,
        borderStyle: props.dashed ? 'dashed' : props.borderStyle
      }
      
      if (props.borderColor) {
        style.borderColor = props.borderColor
      }
      
      if (props.animated) {
        style.transitionDuration = `${props.animationDuration}ms`
      }
      
      return style
    })
    
    // 计算文本部分的类名
    const textClass = computed(() => [
      'divider-text',
      'px-3',
      'text-sm',
      props.plain ? 'font-normal' : 'font-medium',
      'text-gray-500',
      'dark:text-gray-400',
      props.textClassName
    ].filter(Boolean).join(' '))

    // 计算方向边距
    const getMarginStyle = computed(() => {
      if (props.orientation !== 'center' && typeof props.orientationMargin === 'number') {
        return props.orientation === 'left' 
          ? { marginLeft: `${props.orientationMargin}px` }
          : { marginRight: `${props.orientationMargin}px` }
      } else if (props.orientation !== 'center' && typeof props.orientationMargin === 'string') {
        return props.orientation === 'left'
          ? { marginLeft: props.orientationMargin }
          : { marginRight: props.orientationMargin }
      }
      return {}
    })

    return () => {
      // 水平分割线
      if (props.type === 'horizontal') {
        // 带文本的水平分割线
        if (hasSlots.value) {
          const align = props.align || props.orientation
          return (
            <div class={dividerClass.value} role="separator" aria-orientation="horizontal">
              {align !== 'right' && (
                <div 
                  class="flex-grow border-t dark:border-gray-600 transition-all" 
                  style={{...lineStyle.value}}
                ></div>
              )}
              <div class={textClass.value} style={getMarginStyle.value}>
                {slots.default?.()}
              </div>
              {align !== 'left' && (
                <div 
                  class="flex-grow border-t dark:border-gray-600 transition-all" 
                  style={{...lineStyle.value}}
                ></div>
              )}
            </div>
          )
        } 
        // 无文本的水平分割线
        else {
          return (
            <div 
              class={`${dividerClass.value} border-t dark:border-gray-600`} 
              style={lineStyle.value} 
              role="separator" 
              aria-orientation="horizontal"
            ></div>
          )
        }
      } 
      // 垂直分割线
      else {
        return (
          <div 
            class={`${dividerClass.value} border-l dark:border-gray-600`} 
            style={lineStyle.value} 
            role="separator" 
            aria-orientation="vertical"
          ></div>
        )
      }
    }
  }
})

export default Divider
