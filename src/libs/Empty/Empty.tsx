import { defineComponent, PropType, Transition, computed } from 'vue';
import { JSX } from 'vue/jsx-runtime';
import EmptySVG from './EmptySVG.svg'
// 更现代的默认空状态图 - 简洁风格
const DefaultEmptyIcon = () => (
    <img src={EmptySVG} alt="empty" class="h-full w-full" />
);

// 简约无数据图标
const MinimalistEmptyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-full w-full">
    <circle cx="12" cy="12" r="10" class="stroke-gray-200 dark:stroke-gray-700 stroke-2 fill-none empty-circle" />
    <path d="M8 12h8M12 8v8" class="stroke-gray-300 dark:stroke-gray-600 stroke-2 stroke-linecap-round empty-path-detail" />
  </svg>
);

// 数据图标
const DataEmptyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full">
    <rect x="10" y="36" width="10" height="20" rx="2" class="fill-blue-200 dark:fill-blue-900/30 empty-bar" />
    <rect x="27" y="24" width="10" height="32" rx="2" class="fill-blue-300 dark:fill-blue-800/30 empty-bar" />
    <rect x="44" y="16" width="10" height="40" rx="2" class="fill-blue-200 dark:fill-blue-900/30 empty-bar" />
    <path d="M6 56h52" class="stroke-gray-300 dark:stroke-gray-600 stroke-2 stroke-linecap-round" />
  </svg>
);

// 图标类型映射表
const iconMap = {
  'default': DefaultEmptyIcon,
  'minimalist': MinimalistEmptyIcon,
  'data': DataEmptyIcon,
};

export default defineComponent({
  name: 'Empty',
  props: {
    // 自定义图片源
    image: {
      type: [String, Object] as PropType<string | JSX.Element>,
      default: null,
    },
    // 预设图标类型
    iconType: {
      type: String as PropType<'default' | 'minimalist' | 'data'>,
      default: 'default',
    },
    // 图片尺寸
    imageSize: {
      type: [Number, String],
      default: 100,
    },
    // 图片样式
    imageStyle: {
      type: Object as PropType<Record<string, string>>,
      default: () => ({}),
    },
    // 描述文本
    description: {
      type: String,
      default: '暂无数据',
    },
    // 是否显示描述
    showDescription: {
      type: Boolean,
      default: true,
    },
    // 自定义类名
    className: {
      type: String,
      default: '',
    },
    // 动画类型
    animation: {
      type: String as PropType<'fade' | 'bounce' | 'scale' | 'none'>,
      default: 'fade',
    },
  },
  setup(props, { slots }) {
    // 计算图片尺寸样式
    const sizeStyle = computed(() => {
      if (typeof props.imageSize === 'number') {
        return { height: `${props.imageSize}px`, width: `${props.imageSize}px` };
      }
      return { height: props.imageSize, width: props.imageSize };
    });

    // 合并自定义样式和尺寸样式
    const mergedStyle = computed(() => ({ ...sizeStyle.value, ...props.imageStyle }));

    // 计算动画类名
    const animationClass = computed(() => {
      if (props.animation === 'none') return '';
      return `empty-${props.animation}`;
    });

    // 渲染图片内容
    const renderImage = () => {
      if (slots.image) {
        return slots.image();
      }

      if (typeof props.image === 'string') {
        return <img src={props.image} alt="empty" style={mergedStyle.value} class="transition duration-500 ease-in-out" />;
      }

      if (props.image) {
        return props.image;
      }

      // 根据图标类型选择预设图标
      const EmptyIcon = iconMap[props.iconType] || DefaultEmptyIcon;
      return <div style={mergedStyle.value} class="transition duration-500 ease-in-out">{EmptyIcon()}</div>;
    };

    // 渲染描述文本
    const renderDescription = () => {
      if (!props.showDescription) return null;

      return (
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 transition duration-500 ease-in-out">
          {slots.description?.() || props.description}
        </p>
      );
    };

    return () => (
      <Transition
        name={`empty-${props.animation}`}
        appear
      >
        <div class={`flex flex-col items-center justify-center p-6 transition duration-500 ease-out ${props.className} ${animationClass.value}`}>
          <div class="mb-4 transition transform hover:scale-105 duration-500 ease-out relative empty-image-container">
            {renderImage()}
          </div>
          {renderDescription()}
          {slots.default && (
            <div class="mt-4 transition duration-500 ease-out">
              {slots.default()}
            </div>
          )}
        </div>
      </Transition>
    );
  },
});
