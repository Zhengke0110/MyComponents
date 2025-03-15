import { defineComponent, PropType, ref, computed, Transition } from 'vue';
import { ThemeColorType, THEME_COLOR_MAP, ColorType, ICON_COMPONENTS, COLOR_STYLES } from './config';

export default defineComponent({
  name: 'Alert',
  props: {
    // 警告类型
    type: {
      type: String as PropType<ThemeColorType>,
      default: 'info'
    },
    // 自定义颜色
    color: {
      type: String as PropType<ColorType>,
      default: undefined
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 内容
    message: {
      type: String,
      default: ''
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: true
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default: true
    },
    // 是否显示边框
    bordered: {
      type: Boolean,
      default: true
    },
    // 自定义类名
    customClass: {
      type: String,
      default: ''
    },
    // 自动消失时间（毫秒），0 为不自动消失
    duration: {
      type: Number,
      default: 1000
    }
  },

  emits: ['close'],

  setup(props, { slots, emit }) {
    // 控制组件是否可见
    const visible = ref(true);

    // 实际使用的颜色
    const realColor = computed(() => {
      if (props.color) {
        return props.color;
      }
      return THEME_COLOR_MAP[props.type];
    });

    // 获取对应的预定义样式类
    const colorClasses = computed(() => {
      const color = realColor.value;
      return {
        bg: COLOR_STYLES.bg[color] || COLOR_STYLES.bg.gray,
        text: COLOR_STYLES.text[color] || COLOR_STYLES.text.gray,
        border: COLOR_STYLES.border[color] || COLOR_STYLES.border.gray,
        icon: COLOR_STYLES.icon[color] || COLOR_STYLES.icon.gray,
        hoverBg: COLOR_STYLES.hoverBg[color] || COLOR_STYLES.hoverBg.gray
      };
    });

    // 关闭函数
    const handleClose = () => {
      visible.value = false;
      emit('close');
    };

    // 获取图标组件
    const getIcon = () => {
      if (!props.showIcon) return null;

      const iconType = props.type as keyof typeof ICON_COMPONENTS;
      const iconRenderer = ICON_COMPONENTS[iconType] || ICON_COMPONENTS.info;
      return iconRenderer(colorClasses.value.icon);
    };

    // 处理自动关闭
    if (props.duration > 0) {
      setTimeout(() => {
        handleClose();
      }, props.duration);
    }

    return () => (
      <Transition
        name="alert"
        enterActiveClass="transition-all duration-300 ease-out"
        enterFromClass="opacity-0 transform scale-95"
        enterToClass="opacity-100 transform scale-100"
        leaveActiveClass="transition-all duration-200 ease-in"
        leaveFromClass="opacity-100 transform scale-100"
        leaveToClass="opacity-0 transform scale-95"
      >
        {visible.value && (
          <div
            class={[
              'w-full p-4 mb-4 rounded-lg flex items-start shadow-sm',
              props.bordered ? `border ${props.showIcon ? 'border-l-4' : ''}` : '',
              colorClasses.value.bg,
              colorClasses.value.text,
              props.bordered ? colorClasses.value.border : '',
              props.customClass
            ]}
            role="alert"
          >
            {/* 图标区域 */}
            {props.showIcon && (
              <div class="flex-shrink-0 mr-3 mt-0.5">
                {slots.icon ? slots.icon() : getIcon()}
              </div>
            )}

            {/* 内容区域 */}
            <div class="flex-grow">
              {/* 标题 */}
              {props.title && <h3 class="text-lg font-medium mb-1">{props.title}</h3>}

              {/* 内容 */}
              <div class="text-sm">
                {slots.default ? slots.default() : props.message}
              </div>

              {/* 额外内容 */}
              {slots.extra && <div class="mt-2">{slots.extra()}</div>}
            </div>

            {/* 关闭按钮 */}
            {props.closable && (
              <button
                onClick={handleClose}
                class={`ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 ${colorClasses.value.hoverBg} inline-flex items-center justify-center h-8 w-8`}
                aria-label="关闭"
              >
                <span class="sr-only">关闭</span>
                <svg class="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            )}
          </div>
        )}
      </Transition>
    );
  }
});
