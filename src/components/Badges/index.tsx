import { defineComponent, computed, type PropType } from 'vue';
import { ColorType, ThemeColorType, THEME_COLOR_MAP, Size, Variant, variantClassMap, darkVariantClassMap, lightVariantClassMap, Mode, sizeMap, Rounded, roundedMap } from './config'

export const Badge = defineComponent({
  name: 'Badge',
  props: {
    text: { type: String, required: true },
    // 使用ColorType限制颜色选项
    color: {
      type: String as PropType<ColorType>,
      default: 'blue',
      validator: (value: string): boolean => {
        // 验证是否为有效的ColorType
        const validColors: ColorType[] = [
          'slate', 'gray', 'zinc', 'neutral', 'stone',
          'red', 'orange', 'amber', 'yellow', 'lime',
          'green', 'emerald', 'teal', 'cyan', 'sky',
          'blue', 'indigo', 'violet', 'purple', 'fuchsia',
          'pink', 'rose'
        ];
        return validColors.includes(value as ColorType);
      }
    },
    // 新增主题属性，使用ThemeColorType
    theme: {
      type: String as PropType<ThemeColorType>,
      default: undefined,
      validator: (value: string): boolean => {
        const validThemes = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
        return validThemes.includes(value);
      }
    },
    // 添加明暗模式属性
    mode: {
      type: String as PropType<Mode>,
      default: 'auto', // 默认自动适应系统主题
      validator: (value: string): boolean => {
        return ['light', 'dark', 'auto'].includes(value);
      }
    },
    size: { type: String as PropType<Size>, default: 'md' },
    variant: { type: String as PropType<Variant>, default: 'soft' },
    rounded: { type: String as PropType<Rounded>, default: 'md' },
    index: { type: Number, default: 0 },
    title: { type: String },
    clickable: { type: Boolean, default: false }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    // 计算实际使用的颜色：如果提供了theme，则使用theme对应的颜色，否则使用color属性
    const actualColor = computed<ColorType>(() => {
      if (props.theme) {
        return THEME_COLOR_MAP[props.theme as ThemeColorType];
      }
      return props.color as ColorType;
    });

    // 获取变体样式映射
    const getVariantMap = computed(() => {
      // 根据mode选择类名映射
      if (props.mode === 'light') {
        return lightVariantClassMap;
      } else if (props.mode === 'dark') {
        return darkVariantClassMap;
      } else {
        // 自动模式（使用CSS暗黑模式支持）
        return variantClassMap;
      }
    });

    // 修改为使用静态类名映射
    const variantClasses = computed(() => {
      const variant = props.variant;
      const color = actualColor.value;
      const currentMap = getVariantMap.value;

      // 确保使用有效的映射
      return `${currentMap[variant][color] || currentMap.soft.blue} ${sizeMap[props.size]}`;
    });

    const roundedClasses = computed(() => roundedMap[props.rounded]);
    const cursorClasses = computed(() => props.clickable ? "cursor-pointer hover:opacity-80" : "");

    // 计算模式类
    const modeClasses = computed(() => {
      if (props.mode === 'light') {
        return "";
      } else if (props.mode === 'dark') {
        return "dark";
      }
      return "";
    });

    // 为柔和风格添加额外的hover效果
    const extraHoverClasses = computed(() => {
      if (props.variant === 'soft') {
        if (props.clickable) {
          return "hover:bg-opacity-80";
        }
      }
      return "";
    });

    const handleClick = () => {
      if (props.clickable) {
        emit('click', props.text);
      }
    };

    return () => (
      <span
        class={[
          variantClasses.value,
          roundedClasses.value,
          cursorClasses.value,
          modeClasses.value,
          extraHoverClasses.value,
          "inline-flex items-center py-0.5 font-medium transition-colors"
        ]}
        title={props.title}
        onClick={handleClick}
        role="status"
      >
        {slots.prefix?.()}
        {props.text}
        {slots.suffix?.()}
      </span>
    );
  }
});
