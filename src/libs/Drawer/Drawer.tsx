import {
    defineComponent,
    PropType,
    Transition,
    ref,
    watch,
    computed,
} from "vue";
import "./drawer.css";

export default defineComponent({
    name: "Drawer",
    props: {
        modelValue: {
            type: Boolean as PropType<boolean>,
            default: false,
            required: true,
        },
        title: {
            type: String,
            default: "",
        },
        placement: {
            type: String as PropType<"left" | "right" | "top" | "bottom">,
            default: "right",
        },
        size: {
            type: [String, Number],
            default: "300px",
        },
        closable: {
            type: Boolean,
            default: true,
        },
        mask: {
            type: Boolean,
            default: true,
        },
        maskClosable: {
            type: Boolean,
            default: true,
        },
        showFooter: {
            type: Boolean,
            default: false,
        },
        zIndex: {
            type: Number,
            default: 1000,
        },
        destroyOnClose: {
            type: Boolean,
            default: false,
        },
        lockScroll: {
            type: Boolean,
            default: true,
        },
    },

    emits: ["update:modelValue", "open", "close", "afterVisibleChange"],

    setup(props, { slots, emit }) {
        const visible = ref(false);
        const animating = ref(false);
        const drawerRef = ref<HTMLElement | null>(null);

        // 计算尺寸和位置相关样式
        const sizeStyle = computed(() => {
            const size =
                typeof props.size === "number" ? `${props.size}px` : props.size;

            if (["left", "right"].includes(props.placement)) {
                return { width: size };
            } else {
                return { height: size };
            }
        });

        // 基于方向的动画类名
        const transitionName = computed(() => {
            return `drawer-${props.placement}`;
        });

        // 计算容器样式
        const containerStyle = computed(() => {
            return {
                zIndex: props.zIndex,
            };
        });

        // 处理抽屉关闭
        const close = () => {
            emit("update:modelValue", false);
        };

        // 处理点击遮罩层
        const handleMaskClick = () => {
            if (props.maskClosable) {
                close();
            }
        };

        // 处理过渡效果结束
        const handleAfterLeave = () => {
            animating.value = false;
            emit("afterVisibleChange", false);
        };

        const handleAfterEnter = () => {
            animating.value = false;
            emit("afterVisibleChange", true);
        };

        // 处理过渡开始
        const handleBeforeEnter = () => {
            animating.value = true;
            emit("open");
        };

        const handleBeforeLeave = () => {
            animating.value = true;
            emit("close");
        };

        // 监听modelValue变化
        watch(
            () => props.modelValue,
            (val) => {
                if (val) {
                    visible.value = true;
                    if (props.lockScroll) {
                        document.body.style.overflow = "hidden";
                    }
                } else {
                    if (props.lockScroll) {
                        document.body.style.overflow = "";
                    }
                    if (!animating.value) {
                        visible.value = false;
                    }
                }
            },
            { immediate: true },
        );

        // 阻止抽屉内部点击事件冒泡到遮罩层
        const stopPropagation = (event: Event) => {
            event.stopPropagation();
        };

        // Modified to include theme detection
        const isDarkMode = computed(() => {
            return document.documentElement.classList.contains('dark');
        });

        return () => (
            <Transition name="drawer-fade" appear>
                {visible.value && (
                    <div
                        class="fixed inset-0 overflow-hidden"
                        style={containerStyle.value}
                        aria-modal="true"
                        role="dialog"
                    >
                        {/* Enhanced mask with blur effect */}
                        {props.mask && (
                            <div
                                class="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50 transition-opacity tech-drawer-mask"
                                onClick={handleMaskClick}
                            />
                        )}

                        {/* Drawer panel with enhanced styling */}
                        <Transition
                            name={transitionName.value}
                            appear
                            onBeforeEnter={handleBeforeEnter}
                            onAfterEnter={handleAfterEnter}
                            onBeforeLeave={handleBeforeLeave}
                            onAfterLeave={handleAfterLeave}
                        >
                            <div
                                v-show={props.modelValue}
                                class={`absolute flex flex-col tech-drawer-panel ${props.placement} ${isDarkMode.value ? 'dark' : 'light'} ${positionClass(props.placement)}`}
                                ref={drawerRef}
                                style={sizeStyle.value}
                                onClick={stopPropagation}
                            >
                                {/* Enhanced header with gradient line */}
                                {(props.title || props.closable || slots.title) && (
                                    <div class="flex items-center justify-between px-6 py-4 drawer-header">
                                        <div class="flex-1 font-medium text-gray-800 dark:text-gray-200">
                                            {slots.title ? slots.title() : props.title}
                                        </div>
                                        {props.closable && (
                                            <button
                                                onClick={close}
                                                class="rounded-full p-1.5 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 focus:outline-none drawer-close-btn"
                                                aria-label="Close drawer"
                                            >
                                                <svg
                                                    class="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    ></path>
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                )}

                                {/* Enhanced content area with custom scrollbar */}
                                <div class="flex-1 overflow-auto p-6 drawer-content">
                                    {!props.destroyOnClose || props.modelValue
                                        ? slots.default?.()
                                        : null}
                                </div>

                                {/* Enhanced footer with gradient line */}
                                {(props.showFooter || slots.footer) && (
                                    <div class="flex justify-end px-6 py-4 drawer-footer">
                                        {slots.footer?.()}
                                    </div>
                                )}
                            </div>
                        </Transition>
                    </div>
                )}
            </Transition>
        );
    },
});

// 根据不同位置返回定位类名
function positionClass(placement: string): string {
    switch (placement) {
        case "left":
            return "top-0 left-0 bottom-0";
        case "right":
            return "top-0 right-0 bottom-0";
        case "top":
            return "top-0 left-0 right-0";
        case "bottom":
            return "bottom-0 left-0 right-0";
        default:
            return "top-0 right-0 bottom-0";
    }
}
