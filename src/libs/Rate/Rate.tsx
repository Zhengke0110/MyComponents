import { defineComponent, ref, computed, PropType } from "vue";
import { ColorType, colorMap, iconMap, IconType, sizeMap } from "./config";


/**
 * Rate 评分组件属性接口
 */
export interface RateProps {
    modelValue?: number; // 当前评分值
    count?: number; // 星星总数
    allowHalf?: boolean; // 是否允许半星
    color?: ColorType; // 主题颜色
    readonly?: boolean; // 是否只读
    disabled?: boolean; // 是否禁用
    size?: "sm" | "md" | "lg"; // 尺寸
    allowClear?: boolean; // 是否允许再次点击后清除
    tooltips?: string[]; // 自定义每项的提示信息
    icon?: IconType; // 图标类型
    character?: string; // 自定义字符，优先级高于icon
    customIconPath?: string; // 自定义SVG路径数据，优先级高于预设图标
}



export default defineComponent({
    name: "Rate",
    props: {
        modelValue: {
            type: Number,
            default: 0,
        },
        count: {
            type: Number,
            default: 5,
        },
        allowHalf: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String as PropType<ColorType>,
            default: "amber",
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String as PropType<"sm" | "md" | "lg">,
            default: "md",
        },
        allowClear: {
            type: Boolean,
            default: true,
        },
        tooltips: {
            type: Array as PropType<string[]>,
            default: () => [],
        },
        icon: {
            type: String as PropType<IconType>,
            default: "star",
        },
        character: {
            type: String,
            default: "",
        },
        customIconPath: {
            type: String,
            default: "",
        },
    },

    emits: ["update:modelValue", "change", "hover-change"],

    setup(props, { emit, slots }) {
        // 悬停评分值
        const hoverValue = ref(-1);

        // 计算最终显示的评分值
        const activeValue = computed(() => {
            return hoverValue.value !== -1 ? hoverValue.value : props.modelValue;
        });

        // 根据颜色类型和活动状态生成内联样式
        const getColorStyle = (active: boolean, isDark: boolean) => {
            const colorInfo = colorMap[props.color];

            if (active) {
                return { color: isDark ? colorInfo.dark : colorInfo.light };
            } else {
                return { color: isDark ? colorInfo.darkEmpty : colorInfo.lightEmpty };
            }
        };

        // 处理鼠标移入事件
        const handleMouseMove = (event: MouseEvent, index: number) => {
            if (props.disabled || props.readonly) return;

            const target = event.currentTarget as HTMLDivElement;
            const rect = target.getBoundingClientRect();
            const position = (event.clientX - rect.left) / rect.width;

            let value = index + 1;

            if (props.allowHalf) {
                value = position <= 0.5 ? index + 0.5 : index + 1;
            }

            hoverValue.value = value;
            emit("hover-change", value);
        };

        // 处理鼠标离开事件
        const handleMouseLeave = () => {
            if (props.disabled || props.readonly) return;
            hoverValue.value = -1;
            emit("hover-change", props.modelValue);
        };

        // 处理点击事件
        const handleClick = (value: number) => {
            if (props.disabled || props.readonly) return;

            let newValue = value;
            // 如果点击的星星和当前值相同，且允许清除，则清除评分
            if (props.allowClear && Math.abs(props.modelValue - value) < 0.01) {
                newValue = 0;
            }

            emit("update:modelValue", newValue);
            emit("change", newValue);
        };

        // 判断星星是否应该高亮
        const isActive = (index: number, half: boolean): boolean => {
            const value = activeValue.value;

            if (half) {
                return value > index && value < index + 1;
            } else {
                return value >= index + 1;
            }
        };

        // 判断是否使用自定义字符
        const useCharacter = computed(() => {
            return !!props.character || slots.character;
        });

        // 判断是否使用自定义SVG路径
        const useCustomPath = computed(() => {
            return !!props.customIconPath;
        });

        // 获取当前使用的图标路径
        const getIconPath = () => {
            if (useCustomPath.value) {
                return props.customIconPath;
            }
            return iconMap[props.icon] || iconMap.star;
        };

        // 渲染自定义字符
        const renderCharacter = (active: boolean, isDark: boolean) => {
            if (slots.character) {
                return slots.character({
                    active,
                    isDark,
                });
            }

            return (
                <span
                    class={[
                        sizeMap[props.size].fontSize,
                        "flex items-center justify-center",
                        sizeMap[props.size].starSize,
                    ]}
                    style={active ? getColorStyle(true, isDark) : getColorStyle(false, isDark)}
                >
                    {props.character}
                </span>
            );
        };

        // 渲染图标
        const renderIcon = (active: boolean, half: boolean, isDark: boolean) => {
            // 使用自定义插槽
            if (slots.icon) {
                return slots.icon({
                    active,
                    half,
                    isDark
                });
            }

            // 使用字符
            if (useCharacter.value) {
                return renderCharacter(active, isDark);
            }

            // 使用预设图标
            return (
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d={getIconPath()} />
                </svg>
            );
        };

        // 渲染每个星星
        const renderStar = (index: number) => {
            const tooltip = props.tooltips[index];
            const sizeClass = sizeMap[props.size].starSize;
            const isCharacter = useCharacter.value;

            // 使用自定义SVG或预设图标
            const iconPath = getIconPath();

            return (
                <div
                    key={index}
                    class={`group relative inline-flex cursor-${props.readonly || props.disabled ? "default" : "pointer"}`}
                    onMousemove={(event) => handleMouseMove(event, index)}
                    onClick={() =>
                        handleClick(
                            props.allowHalf
                                ? hoverValue.value >= 0
                                    ? hoverValue.value
                                    : props.modelValue
                                : index + 1,
                        )
                    }
                    title={tooltip}
                >
                    {!isCharacter && (
                        <>
                            {/* 空心图标（背景） - 使用自定义或预设SVG路径 */}
                            <svg
                                viewBox="0 0 24 24"
                                class={[
                                    sizeClass,
                                    "absolute left-0",
                                    "dark:hidden",
                                    !props.readonly &&
                                    !props.disabled &&
                                    "transition-all duration-200",
                                ]}
                                style={getColorStyle(false, false)}
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1"
                            >
                                <path d={iconPath} />
                            </svg>

                            {/* 暗黑模式下的空心图标 */}
                            <svg
                                viewBox="0 0 24 24"
                                class={[
                                    sizeClass,
                                    "absolute left-0 hidden",
                                    "hidden dark:block",
                                    !props.readonly &&
                                    !props.disabled &&
                                    "transition-all duration-200",
                                ]}
                                style={getColorStyle(false, true)}
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1"
                            >
                                <path d={iconPath} />
                            </svg>

                            {/* 半星 */}
                            {props.allowHalf && (
                                <>
                                    {/* 亮色模式半星 */}
                                    <div class="absolute left-0 h-full w-1/2 overflow-hidden dark:hidden">
                                        <svg
                                            viewBox="0 0 24 24"
                                            class={[
                                                sizeClass,
                                                !props.readonly &&
                                                !props.disabled &&
                                                "transition-all duration-200",
                                                isActive(index, true) ? "" : "opacity-0",
                                            ]}
                                            style={getColorStyle(true, false)}
                                            fill="currentColor"
                                        >
                                            <path d={iconPath} />
                                        </svg>
                                    </div>

                                    {/* 暗黑模式半星 */}
                                    <div class="absolute left-0 hidden h-full w-1/2 overflow-hidden dark:block">
                                        <svg
                                            viewBox="0 0 24 24"
                                            class={[
                                                sizeClass,
                                                !props.readonly &&
                                                !props.disabled &&
                                                "transition-all duration-200",
                                                isActive(index, true) ? "" : "opacity-0",
                                            ]}
                                            style={getColorStyle(true, true)}
                                            fill="currentColor"
                                        >
                                            <path d={iconPath} />
                                        </svg>
                                    </div>
                                </>
                            )}

                            {/* 亮色模式实心图标 */}
                            <svg
                                viewBox="0 0 24 24"
                                class={[
                                    sizeClass,
                                    !props.readonly &&
                                    !props.disabled &&
                                    "transform transition-all duration-200",
                                    !props.disabled && !props.readonly && "group-hover:scale-110",
                                    isActive(index, false) ? "opacity-100" : "opacity-0",
                                    "dark:hidden",
                                ]}
                                style={getColorStyle(true, false)}
                                fill="currentColor"
                            >
                                <path d={iconPath} />
                            </svg>

                            {/* 暗黑模式实心图标 */}
                            <svg
                                viewBox="0 0 24 24"
                                class={[
                                    sizeClass,
                                    !props.readonly &&
                                    !props.disabled &&
                                    "transform transition-all duration-200",
                                    !props.disabled && !props.readonly && "group-hover:scale-110",
                                    isActive(index, false) ? "opacity-100" : "opacity-0",
                                    "hidden dark:block",
                                ]}
                                style={getColorStyle(true, true)}
                                fill="currentColor"
                            >
                                <path d={iconPath} />
                            </svg>
                        </>
                    )}

                    {/* 字符渲染 */}
                    {isCharacter && (
                        <>
                            {/* 亮色模式空心字符 */}
                            <div
                                class={[
                                    sizeClass,
                                    "dark:hidden",
                                    !props.readonly && !props.disabled && "transition-all duration-200"
                                ]}
                            >
                                {renderCharacter(false, false)}
                            </div>

                            {/* 暗黑模式空心字符 */}
                            <div
                                class={[
                                    sizeClass,
                                    "hidden dark:block",
                                    !props.readonly && !props.disabled && "transition-all duration-200"
                                ]}
                            >
                                {renderCharacter(false, true)}
                            </div>

                            {/* 亮色模式实心字符 */}
                            <div
                                class={[
                                    sizeClass,
                                    "absolute left-0 top-0 dark:hidden",
                                    !props.readonly && !props.disabled && "transition-all duration-200 transform",
                                    !props.disabled && !props.readonly && "group-hover:scale-110",
                                    isActive(index, false) ? "opacity-100" : "opacity-0"
                                ]}
                            >
                                {renderCharacter(true, false)}
                            </div>

                            {/* 暗黑模式实心字符 */}
                            <div
                                class={[
                                    sizeClass,
                                    "absolute left-0 top-0 hidden dark:block",
                                    !props.readonly && !props.disabled && "transition-all duration-200 transform",
                                    !props.disabled && !props.readonly && "group-hover:scale-110",
                                    isActive(index, false) ? "opacity-100" : "opacity-0"
                                ]}
                            >
                                {renderCharacter(true, true)}
                            </div>
                        </>
                    )}
                </div>
            );
        };

        return () => (
            <div
                class={[
                    "inline-flex items-center",
                    sizeMap[props.size].container,
                    props.disabled && "cursor-not-allowed opacity-50",
                ]}
                onMouseleave={handleMouseLeave}
            >
                {Array.from({ length: props.count }).map((_, index) =>
                    renderStar(index),
                )}

                {/* 显示当前分值 */}
                <span
                    class={`ml-2 text-sm ${props.disabled ? "text-gray-400 dark:text-gray-500" : "text-gray-600 dark:text-gray-300"}`}
                >
                    {activeValue.value > 0 ? activeValue.value : ""}
                </span>
            </div>
        );
    },
});
