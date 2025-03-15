import { defineComponent, PropType, computed } from 'vue';
import { ButtonType, ButtonSize, ButtonVariant, BUTTON_TYPE_MAP, validColors, variantColorMap } from './config';

// 按钮组项目接口定义
export interface ButtonGroupItem {
    key: string | number;
    label?: string;
    icon?: string;
    srOnly?: string; // 屏幕阅读器文本
    disabled?: boolean;
}

// ButtonGroups 组件定义
const ButtonGroups = defineComponent({
    name: 'ButtonGroups',
    props: {
        // 按钮项数组
        items: {
            type: Array as PropType<ButtonGroupItem[]>,
            required: true,
        },
        // 尺寸
        size: {
            type: String as PropType<ButtonSize>,
            default: 'md',
            validator: (value: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
        },
        // 类型/颜色
        type: {
            type: String as PropType<ButtonType>,
            default: 'blue',
        },
        // 变体样式
        variant: {
            type: String as PropType<ButtonVariant>,
            default: 'solid',
            validator: (value: string) => ['solid', 'outline', 'soft', 'ghost'].includes(value),
        },
        // 方向 - 水平/垂直
        direction: {
            type: String as PropType<'horizontal' | 'vertical'>,
            default: 'horizontal',
        },
        // 按钮间是否有间隙
        withGap: {
            type: Boolean,
            default: false,
        },
        // 圆角样式
        rounded: {
            type: Boolean,
            default: false,
        },
        // 选中项索引 (受控组件模式)
        selectedIndex: {
            type: Number,
            default: -1,
        },
        // 自定义类名
        className: {
            type: String,
            default: '',
        },
    },
    emits: ['change'],
    setup(props, { emit }) {
        // 映射语义类型到实际颜色类型
        const resolvedColorType = computed(() => {
            return (BUTTON_TYPE_MAP as Record<string, string>)[props.type as string] || props.type;
        });

        // 获取颜色样式类
        const getColorClass = (colorType: string) => {
            const color = validColors.includes(colorType as any) ? colorType : 'blue';
            return variantColorMap[props.variant][color as keyof typeof variantColorMap[typeof props.variant]];
        };

        // 尺寸样式映射
        const sizeClasses = {
            xs: 'text-xs px-2 py-1',
            sm: 'text-sm px-3 py-1.5',
            md: 'text-base px-4 py-2',
            lg: 'text-lg px-5 py-2.5',
            xl: 'text-xl px-6 py-3',
        };

        // 图标尺寸映射
        const iconSizeClasses = {
            xs: 'text-xs',
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
        };

        // 计算容器类名
        const containerClasses = computed(() => {
            return [
                'inline-flex',
                props.direction === 'horizontal' ? 'flex-row' : 'flex-col',
                props.withGap ? 'gap-2' : '',
                props.className,
            ].filter(Boolean).join(' ');
        });

        // 处理按钮点击事件
        const handleButtonClick = (index: number) => {
            if (!props.items[index].disabled) {
                emit('change', index === props.selectedIndex ? -1 : index);
            }
        };

        // 渲染单个按钮
        const renderButton = (item: ButtonGroupItem, index: number) => {
            // 判断按钮位置 (首个、最后一个)
            const isFirst = index === 0;
            const isLast = index === props.items.length - 1;
            const isSelected = index === props.selectedIndex;

            // 获取颜色样式类
            const colorClass = getColorClass(resolvedColorType.value as string);

            // 间隔样式类
            const gapClasses = {
                horizontal: props.withGap ? 'mx-1 first:ml-0 last:mr-0' : '',
                vertical: props.withGap ? 'my-1 first:mt-0 last:mb-0' : '',
            };

            // 圆角样式类
            let borderRadiusClasses = '';
            if (props.rounded) {
                // 完全圆形按钮
                borderRadiusClasses = 'rounded-full';
            } else if (props.direction === 'horizontal') {
                // 水平布局 - 连接边框处理
                if (props.withGap) {
                    borderRadiusClasses = 'rounded-md';
                } else {
                    if (isFirst) borderRadiusClasses = 'rounded-l-md';
                    else if (isLast) borderRadiusClasses = 'rounded-r-md';
                }
            } else {
                // 垂直布局 - 连接边框处理
                if (props.withGap) {
                    borderRadiusClasses = 'rounded-md';
                } else {
                    if (isFirst) borderRadiusClasses = 'rounded-t-md';
                    else if (isLast) borderRadiusClasses = 'rounded-b-md';
                }
            }

            // 修改选中状态样式 - 移除丑陋的边框，使用更微妙的背景和阴影效果
            const selectedClasses = isSelected
                ? props.variant === 'outline' || props.variant === 'ghost'
                    ? 'bg-gray-100 dark:bg-gray-800 font-medium'
                    : 'shadow-inner font-medium brightness-90 dark:brightness-110'
                : '';

            // 禁用状态样式
            const disabledClasses = item.disabled
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer';

            // 组合按钮样式类，修改focus样式以避免与选中状态冲突
            const buttonClasses = [
                'inline-flex items-center justify-center',
                'transition-all duration-150 ease-in-out',
                'focus:outline-none focus:shadow-[0_0_0_2px_rgba(59,130,246,0.3)] dark:focus:shadow-[0_0_0_2px_rgba(59,130,246,0.5)]',
                gapClasses[props.direction],
                colorClass,
                sizeClasses[props.size],
                borderRadiusClasses,
                selectedClasses,
                disabledClasses,
            ].filter(Boolean).join(' ');

            return (
                <button
                    type="button"
                    key={item.key}
                    disabled={item.disabled}
                    class={buttonClasses}
                    onClick={() => handleButtonClick(index)}
                >
                    {item.icon && (
                        <span class={[
                            iconSizeClasses[props.size],
                            item.label ? (props.direction === 'horizontal' ? 'mr-2' : 'mb-1') : ''
                        ].filter(Boolean).join(' ')}>
                            <i class={item.icon}></i>
                        </span>
                    )}

                    {item.label && <span>{item.label}</span>}

                    {!item.label && item.srOnly && (
                        <span class="sr-only">{item.srOnly}</span>
                    )}
                </button>
            );
        };

        return () => (
            <div class={containerClasses.value} role="group">
                {props.items.map((item, index) => renderButton(item, index))}
            </div>
        );
    },
});

export default ButtonGroups;
