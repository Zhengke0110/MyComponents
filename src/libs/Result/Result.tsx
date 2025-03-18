import { defineComponent, computed, h } from 'vue';

type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500';

export default defineComponent({
  name: 'Result',
  
  props: {
    /** 结果的状态，决定图标和颜色 */
    status: {
      type: String as () => ResultStatus,
      default: 'info'
    },
    /** 标题文本 */
    title: {
      type: String,
      default: ''
    },
    /** 副标题文本 */
    subTitle: {
      type: String,
      default: ''
    }
  },
  
  setup(props, { slots }) {
    // 获取图标
    const renderIcon = () => {
      // 如果提供了自定义图标，则使用自定义图标
      if (slots.icon) {
        return slots.icon();
      }
      
      // 默认图标
      switch (props.status) {
        case 'success':
          return h('div', { class: 'text-green-500 dark:text-green-400' }, [
            h('svg', {
              class: 'w-16 h-16',
              fill: 'none',
              stroke: 'currentColor',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg'
            }, [
              h('path', {
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '2',
                d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              })
            ])
          ]);
        case 'error':
          return h('div', { class: 'text-red-500 dark:text-red-400' }, [
            h('svg', {
              class: 'w-16 h-16',
              fill: 'none',
              stroke: 'currentColor',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg'
            }, [
              h('path', {
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '2',
                d: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              })
            ])
          ]);
        case 'warning':
          return h('div', { class: 'text-yellow-500 dark:text-yellow-400' }, [
            h('svg', {
              class: 'w-16 h-16',
              fill: 'none',
              stroke: 'currentColor',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg'
            }, [
              h('path', {
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '2',
                d: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              })
            ])
          ]);
        case 'info':
          return h('div', { class: 'text-blue-500 dark:text-blue-400' }, [
            h('svg', {
              class: 'w-16 h-16',
              fill: 'none',
              stroke: 'currentColor',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg'
            }, [
              h('path', {
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '2',
                d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              })
            ])
          ]);
        case '404':
        case '403':
        case '500':
          return h('div', { class: 'text-gray-500 dark:text-gray-400' }, [
            h('div', { class: 'text-4xl font-bold' }, props.status)
          ]);
        default:
          return null;
      }
    };

    return () => {
      // 容器样式
      const containerClass = [
        'result-container',
        'transition-all', 
        'duration-300',
        'p-6',
        'flex', 
        'flex-col', 
        'items-center', 
        'justify-center', 
        'text-center',
        `result-${props.status}`,
        'dark:bg-gray-800',
        'dark:text-white'
      ];

      // 渲染标题
      const renderTitle = () => {
        if (slots.title) {
          return slots.title();
        }
        return h('div', {}, props.title);
      };

      // 渲染副标题
      const renderSubTitle = () => {
        if (slots.subTitle) {
          return slots.subTitle();
        }
        return h('div', {}, props.subTitle);
      };

      // 渲染额外内容
      const renderExtra = () => {
        if (slots.extra) {
          return slots.extra();
        }
        return null;
      };

      // 组件结构
      return h('div', { class: containerClass }, [
        // 图标区域
        h('div', { class: 'result-icon mb-4 animate-scaleIn' }, [renderIcon()]),
        
        // 标题区域
        h('div', { 
          class: 'result-title text-xl font-bold mb-2 transition-all duration-300 transform hover:scale-105 dark:text-white' 
        }, [renderTitle()]),
        
        // 副标题区域
        h('div', { 
          class: 'result-subtitle text-gray-600 dark:text-gray-300 mb-4' 
        }, [renderSubTitle()]),
        
        // 额外内容区域
        h('div', { class: 'result-extra mt-4' }, [renderExtra()])
      ]);
    };
  }
});
