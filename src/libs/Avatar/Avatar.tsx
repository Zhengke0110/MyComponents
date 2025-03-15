import { defineComponent, PropType, computed } from 'vue';
import { sizeMap, statusColorMap, statusSizeMap, fontSizeMap, AvatarShape, AvatarSize, AvatarStatus, StatusPosition } from './config'
export default defineComponent({
    name: 'Avatar',

    props: {
        // 头像图片源
        src: {
            type: String,
            default: '',
        },
        // 图片替代文本
        alt: {
            type: String,
            default: '',
        },
        // 头像尺寸
        size: {
            type: String as PropType<AvatarSize>,
            default: 'md',
            validator: (value: string) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value),
        },
        // 头像形状
        shape: {
            type: String as PropType<AvatarShape>,
            default: 'circle',
            validator: (value: string) => ['circle', 'square'].includes(value),
        },
        // 状态指示器
        status: {
            type: String as PropType<AvatarStatus>,
            default: null,
        },
        // 状态指示器位置
        statusPosition: {
            type: String as PropType<StatusPosition>,
            default: 'top-right',
        },
        // 没有图片时显示的文字
        initials: {
            type: String,
            default: '',
        },
        // 显示名称（用于资料卡片）
        name: {
            type: String,
            default: '',
        },
        // 显示描述（用于资料卡片）
        description: {
            type: String,
            default: '',
        },
        // 是否显示边框
        bordered: {
            type: Boolean,
            default: false,
        },
        // 是否以资料卡片模式显示
        profile: {
            type: Boolean,
            default: false,
        },
        // 自定义类
        customClass: {
            type: String,
            default: '',
        },
    },

    emits: ['click'],

    setup(props, { emit }) {
        // 计算头像基本类
        const avatarClasses = computed(() => {
            const classes = ['inline-block'];

            // 尺寸
            classes.push(sizeMap[props.size]);

            // 形状
            classes.push(props.shape === 'circle' ? 'rounded-full' : 'rounded-md');

            // 边框
            if (props.bordered) {
                classes.push('ring-2 ring-gray-200 dark:ring-gray-700');
            }

            // 图片适配方式
            classes.push('object-cover object-center');

            // 过渡动画
            classes.push('transition-all duration-200 ease-in-out');
            classes.push('hover:shadow-md');

            // 自定义类
            if (props.customClass) {
                classes.push(props.customClass);
            }

            return classes.join(' ');
        });

        // 计算状态指示器样式
        const statusClasses = computed(() => {
            const classes = ['block', 'rounded-full'];

            // 尺寸
            classes.push(statusSizeMap[props.size]);

            // 颜色
            if (props.status) {
                classes.push(statusColorMap[props.status] || 'bg-gray-300');
            }

            // 环形边框
            classes.push('ring-2 ring-white dark:ring-gray-800');

            // 过渡动画
            classes.push('transition-all duration-200');

            return classes.join(' ');
        });

        // 计算状态指示器位置类
        const statusPositionClasses = computed(() => {
            const classes = ['absolute'];

            if (props.statusPosition === 'top-right') {
                classes.push('top-0 right-0');
                if (props.shape === 'square') {
                    classes.push('-translate-y-1/2 translate-x-1/2 transform');
                }
            } else if (props.statusPosition === 'bottom-right') {
                classes.push('right-0 bottom-0');
                if (props.shape === 'square') {
                    classes.push('translate-y-1/2 translate-x-1/2 transform');
                }
            }

            return classes.join(' ');
        });

        // 计算文字头像的文字尺寸类
        const initialsClass = computed(() => {
            return fontSizeMap[props.size] + ' font-medium text-white';
        });

        // 处理点击事件
        const handleClick = () => {
            emit('click');
        };

        return {
            avatarClasses,
            statusClasses,
            statusPositionClasses,
            initialsClass,
            handleClick,
            sizeMap,
        };
    },

    render() {
        // 渲染占位符（当没有图片和文字时）
        const renderPlaceholder = () => (
            <span class={[
                'inline-block overflow-hidden',
                sizeMap[this.size],
                this.shape === 'circle' ? 'rounded-full' : 'rounded-md',
                'bg-gray-100 dark:bg-gray-700',
                'transition-colors duration-200'
            ]}>
                <svg class="size-full text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </span>
        );

        // 渲染文字头像（当没有图片但有文字时）
        const renderInitials = () => (
            <span class={[
                'inline-flex items-center justify-center',
                sizeMap[this.size],
                this.shape === 'circle' ? 'rounded-full' : 'rounded-md',
                'bg-gray-500 dark:bg-gray-600',
                'transition-colors duration-200'
            ]}>
                <span class={this.initialsClass}>{this.initials}</span>
            </span>
        );

        // 渲染状态指示器
        const renderStatus = () => {
            if (!this.status) return null;

            return (
                <span class={[this.statusPositionClasses, this.statusClasses]} />
            );
        };

        // 渲染基本头像（可能带状态指示器）
        const renderAvatar = () => {
            if (!this.src && this.initials) {
                return renderInitials();
            }

            if (!this.src) {
                return renderPlaceholder();
            }

            // 更新图片渲染方式，确保与Vue版本一致
            return (
                <span class="relative inline-block">
                    <img
                        class={this.avatarClasses}
                        src={this.src}
                        alt={this.alt}
                        loading="lazy"
                        onError={(e) => {
                            // 图片加载失败时显示占位符或文字头像
                            const imgElement = e.target as HTMLImageElement;
                            imgElement.style.display = 'none';
                            if (this.initials) {
                                const parent = imgElement.parentElement;
                                if (parent) {
                                    parent.appendChild(renderInitials() as unknown as Node);
                                }
                            } else {
                                const parent = imgElement.parentElement;
                                if (parent) {
                                    parent.appendChild(renderPlaceholder() as unknown as Node);
                                }
                            }
                        }}
                    />
                    {renderStatus()}
                </span>
            );
        };

        // 渲染带名称和描述的头像（资料卡片模式）
        const renderProfile = () => (
            <a
                href="#"
                class="group block shrink-0"
                onClick={(e: Event) => {
                    e.preventDefault();
                    this.handleClick();
                }}
            >
                <div class="flex items-center">
                    <div>{renderAvatar()}</div>
                    <div class="ml-3">
                        {this.name && (
                            <p class="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                                {this.name}
                            </p>
                        )}
                        {this.description && (
                            <p class="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">
                                {this.description}
                            </p>
                        )}
                    </div>
                </div>
            </a>
        );

        // 根据模式决定渲染方式
        if (this.profile) {
            return renderProfile();
        }

        return renderAvatar();
    }
});
