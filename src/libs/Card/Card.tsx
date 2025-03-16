import { defineComponent, PropType, computed, Transition } from 'vue';

export type CardVariant = 
  | 'basic'               // 基础卡片
  | 'mobile-full'         // 移动端全宽卡片
  | 'with-header'         // 带标题卡片
  | 'with-footer'         // 带底部卡片
  | 'complete'            // 完整卡片（标题+内容+底部）
  | 'alternate-footer'    // 带不同底色的底部
  | 'alternate-header'    // 带不同底色的标题
  | 'light-bg'            // 浅色背景
  | 'gray-bg'             // 灰色背景
  | 'mobile-light-bg';    // 移动端全宽浅灰背景

export default defineComponent({
  name: 'Card',
  props: {
    // 卡片变体类型
    variant: {
      type: String as PropType<CardVariant>,
      default: 'basic'
    },
    // 自定义标题
    title: {
      type: String,
      default: ''
    },
    // 自定义底部文本
    footerText: {
      type: String,
      default: ''
    },
    // 卡片背景色（自定义）
    bgColor: {
      type: String,
      default: ''
    },
    // 是否启用悬浮效果
    hoverable: {
      type: Boolean,
      default: false
    },
    // 是否有点击事件
    clickable: {
      type: Boolean,
      default: false
    },
    // 是否显示加载状态
    loading: {
      type: Boolean,
      default: false
    },
    // 自定义边框颜色
    borderColor: {
      type: String,
      default: ''
    },
    // 自定义阴影大小
    shadowSize: {
      type: String as PropType<'none' | 'sm' | 'md' | 'lg'>,
      default: 'sm'
    },
    // 是否启用过渡动画
    animated: {
      type: Boolean,
      default: true
    }
  },
  
  emits: ['click'],
  
  setup(props, { slots, emit }) {
    // 构建卡片的基础样式类
    const baseCardClasses = computed(() => {
      const classes = ['overflow-hidden', 'transition-all'];
      
      // 圆角处理
      if (props.variant === 'mobile-full' || props.variant === 'mobile-light-bg') {
        classes.push('sm:rounded-lg');
      } else {
        classes.push('rounded-lg');
      }
      
      // 背景色处理
      if (props.bgColor) {
        classes.push(props.bgColor);
      } else if (props.variant === 'light-bg' || props.variant === 'mobile-light-bg') {
        classes.push('bg-gray-50 dark:bg-gray-800');
      } else if (props.variant === 'gray-bg') {
        classes.push('bg-gray-200 dark:bg-gray-700');
      } else {
        classes.push('bg-white dark:bg-gray-900');
      }
      
      // 阴影处理
      if (props.shadowSize !== 'none') {
        classes.push({
          'sm': 'shadow-sm dark:shadow-gray-800/30',
          'md': 'shadow-md dark:shadow-gray-800/40',
          'lg': 'shadow-lg dark:shadow-gray-800/50'
        }[props.shadowSize]);
      }
      
      // 悬浮效果
      if (props.hoverable) {
        classes.push('hover:shadow-md dark:hover:shadow-gray-800/50 transform hover:-translate-y-1 duration-300');
      }
      
      // 可点击状态
      if (props.clickable) {
        classes.push('cursor-pointer');
      }
      
      return classes.join(' ');
    });
    
    // 处理点击事件
    const handleCardClick = (event: MouseEvent) => {
      if (props.clickable) {
        emit('click', event);
      }
    };
    
    // 渲染卡片内容
    const renderCardContent = () => {
      switch (props.variant) {
        case 'basic':
          return (
            <div class={baseCardClasses.value} onClick={handleCardClick}>
              <div class="px-4 py-5 sm:p-6 transition-all duration-200">
                {slots.default?.()}
              </div>
            </div>
          );
          
        case 'mobile-full':
          return (
            <div class={baseCardClasses.value} onClick={handleCardClick}>
              <div class="px-4 py-5 sm:p-6 transition-all duration-200">
                {slots.default?.()}
              </div>
            </div>
          );
          
        case 'with-header':
          return (
            <div class={`${baseCardClasses.value} divide-y divide-gray-200 dark:divide-gray-700`} onClick={handleCardClick}>
              <div class="px-4 py-5 sm:px-6 transition-all duration-200">
                {slots.header?.() || (props.title && <h3 class="text-lg font-medium text-gray-900 dark:text-white">{props.title}</h3>)}
              </div>
              <div class="px-4 py-5 sm:p-6 transition-all duration-200">
                {slots.default?.()}
              </div>
            </div>
          );
          
        case 'with-footer':
          return (
            <div class={`${baseCardClasses.value} divide-y divide-gray-200 dark:divide-gray-700`} onClick={handleCardClick}>
              <div class="px-4 py-5 sm:p-6 transition-all duration-200">
                {slots.default?.()}
              </div>
              <div class="px-4 py-4 sm:px-6 transition-all duration-200">
                {slots.footer?.() || (props.footerText && <p class="text-sm text-gray-500 dark:text-gray-400">{props.footerText}</p>)}
              </div>
            </div>
          );
          
        case 'complete':
          return (
            <div class={`${baseCardClasses.value} divide-y divide-gray-200 dark:divide-gray-700`} onClick={handleCardClick}>
              <div class="px-4 py-5 sm:px-6 transition-all duration-200">
                {slots.header?.() || (props.title && <h3 class="text-lg font-medium text-gray-900 dark:text-white">{props.title}</h3>)}
              </div>
              <div class="px-4 py-5 sm:p-6 transition-all duration-200">
                {slots.default?.()}
              </div>
              <div class="px-4 py-4 sm:px-6 transition-all duration-200">
                {slots.footer?.() || (props.footerText && <p class="text-sm text-gray-500 dark:text-gray-400">{props.footerText}</p>)}
              </div>
            </div>
          );
          
        case 'alternate-footer':
          return (
            <div class={baseCardClasses.value} onClick={handleCardClick}>
              <div class="px-4 py-5 sm:p-6 transition-all duration-200">
                {slots.default?.()}
              </div>
              <div class="bg-gray-50 dark:bg-gray-800 px-4 py-4 sm:px-6 transition-all duration-200">
                {slots.footer?.() || (props.footerText && <p class="text-sm text-gray-500 dark:text-gray-400">{props.footerText}</p>)}
              </div>
            </div>
          );
          
        case 'alternate-header':
          return (
            <div class={baseCardClasses.value} onClick={handleCardClick}>
              <div class="px-4 py-5 sm:px-6 bg-gray-50 dark:bg-gray-800 transition-all duration-200">
                {slots.header?.() || (props.title && <h3 class="text-lg font-medium text-gray-900 dark:text-white">{props.title}</h3>)}
              </div>
              <div class="px-4 py-5 sm:p-6 transition-all duration-200">
                {slots.default?.()}
              </div>
            </div>
          );
          
        case 'light-bg':
        case 'gray-bg':
        case 'mobile-light-bg':
          return (
            <div class={baseCardClasses.value} onClick={handleCardClick}>
              <div class="px-4 py-5 sm:p-6 transition-all duration-200">
                {slots.default?.()}
              </div>
            </div>
          );
          
        default:
          return (
            <div class={baseCardClasses.value} onClick={handleCardClick}>
              <div class="px-4 py-5 sm:p-6 transition-all duration-200">
                {slots.default?.()}
              </div>
            </div>
          );
      }
    };
    
    return () => (
      <div class="relative">
        {/* 加载状态遮罩层 */}
        {props.loading && (
          <Transition name="fade" appear>
            <div class="absolute inset-0 bg-white/70 dark:bg-gray-900/70 z-10 flex items-center justify-center rounded-lg">
              <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          </Transition>
        )}
        
        {/* 卡片内容 */}
        {props.animated ? (
          <Transition 
            name="card-transition" 
            appear 
            enterActiveClass="transition ease-out duration-200" 
            enterFromClass="opacity-0 transform scale-95" 
            enterToClass="opacity-100 transform scale-100"
            leaveActiveClass="transition ease-in duration-150"
            leaveFromClass="opacity-100 transform scale-100"
            leaveToClass="opacity-0 transform scale-95"
          >
            {renderCardContent()}
          </Transition>
        ) : renderCardContent()}
      </div>
    );
  }
});
