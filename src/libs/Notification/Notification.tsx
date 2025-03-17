import { defineComponent, h, PropType, ref, TransitionGroup, onMounted, computed, watch, onUnmounted } from 'vue';

// 通知类型
export type NotificationType = 'info' | 'success' | 'warning' | 'error';

// 通知项接口
export interface NotificationItem {
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    duration?: number; // 自动关闭时间，单位毫秒，设置为0则不自动关闭
    closable?: boolean; // 是否显示关闭按钮
    onClose?: () => void; // 关闭时的回调
    action?: {
        text: string;
        onClick: () => void;
    };
}

// 通知配置
export interface NotificationConfig {
    maxCount?: number; // 最大显示数量
}

// 存储当前通知列表
const notificationList = ref<NotificationItem[]>([]);
let seed = 0; // ID生成器种子
let config: NotificationConfig = {
    maxCount: 10,
};

// 生成唯一ID
const generateId = (): string => {
    return `notification_${Date.now()}_${seed++}`;
};

// 通知图标组件
const NotificationIcon = defineComponent({
    props: {
        type: {
            type: String as PropType<NotificationType>,
            default: 'info',
        },
    },
    setup(props) {
        return () => {
            const iconMap = {
                info: (
                    <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                ),
                success: (
                    <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                ),
                warning: (
                    <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                ),
                error: (
                    <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                ),
            };

            return (
                <div class="flex-shrink-0">{iconMap[props.type]}</div>
            );
        };
    },
});

// 单个通知项组件
const NotificationItem = defineComponent({
    props: {
        notification: {
            type: Object as PropType<NotificationItem>,
            required: true,
        },
    },
    setup(props) {
        const timeoutId = ref<number | null>(null);
        const visible = ref(true);

        const handleClose = () => {
            visible.value = false;
            if (props.notification.onClose) {
                props.notification.onClose();
            }
            // 延迟移除元素，等待动画结束
            setTimeout(() => {
                removeNotification(props.notification.id);
            }, 300);
        };

        // 根据通知类型设置背景颜色
        const bgClass = computed(() => {
            const typeMap = {
                info: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700',
                success: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700',
                warning: 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-700',
                error: 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700',
            };
            return typeMap[props.notification.type] || typeMap.info;
        });
        
        // 设置进入/离开动画类 - 现在固定为右侧进入
        const transitionClass = computed(() => {
            const baseClass = 'transition-all duration-300 ease-in-out';
            return `${baseClass} ${visible.value ? 'opacity-100 transform-none' : 'opacity-0 translate-x-full'}`;
        });

        // 自动关闭逻辑
        onMounted(() => {
            if (props.notification.duration !== 0) {
                timeoutId.value = window.setTimeout(() => {
                    handleClose();
                }, props.notification.duration || 4500);
            }
        });

        // 清除计时器
        onUnmounted(() => {
            if (timeoutId.value) {
                clearTimeout(timeoutId.value);
            }
        });

        return () => (
            <div
                data-notification-id={props.notification.id}
                class={`${bgClass.value} w-96 rounded-lg shadow-lg border overflow-hidden ${transitionClass.value} dark:text-gray-100`}
            >
                <div class="p-4 flex gap-3">
                    <NotificationIcon type={props.notification.type} />

                    <div class="flex-grow">
                        <h3 class="font-semibold text-gray-900 dark:text-gray-100">{props.notification.title}</h3>
                        <p class="text-gray-700 dark:text-gray-300 text-sm mt-1">{props.notification.message}</p>

                        {props.notification.action && (
                            <div class="mt-2 action-container">
                                <button
                                    onClick={props.notification.action.onClick}
                                    class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                                >
                                    {props.notification.action.text}
                                </button>
                            </div>
                        )}
                    </div>

                    {(props.notification.closable !== false) && (
                        <button
                            onClick={handleClose}
                            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            aria-label="关闭"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        );
    },
});

// 通知容器组件
export const NotificationContainer = defineComponent({
    setup() {
        // 计算容器样式，固定在右上角
        const containerClass = computed(() => {
            return `fixed z-50 top-4 right-4 flex flex-col-reverse items-end`;
        });

        // 子容器类名
        const childContainerClass = computed(() => {
            return 'space-y-4 space-y-reverse w-full';
        });

        return () => h('div', { 
            class: containerClass.value
        }, [
            h(TransitionGroup, { 
                name: 'notification-transition',
                tag: 'div',
                class: childContainerClass.value
            }, () => notificationList.value.map(notification => 
                h('div', { 
                    key: notification.id,
                    class: 'mb-3 notification-item' 
                }, [
                    h(NotificationItem, { notification })
                ])
            ))
        ]);
    },
});

// 移除通知
const removeNotification = (id: string) => {
    const index = notificationList.value.findIndex(item => item.id === id);
    if (index !== -1) {
        notificationList.value.splice(index, 1);
    }
};

// 添加通知
const addNotification = (notification: Omit<NotificationItem, 'id'>) => {
    const id = generateId();
    const newNotification = { id, ...notification };

    // 检查是否超过最大显示数量
    if (config.maxCount && notificationList.value.length >= config.maxCount) {
        notificationList.value.shift(); // 移除最早的通知
    }

    notificationList.value.push(newNotification);
    return id;
};

// 公共 API
const Notification = {
    // 配置方法
    config(options: NotificationConfig) {
        config = { ...config, ...options };
        return Notification;
    },

    // 销毁所有通知
    destroyAll() {
        notificationList.value = [];
    },

    // 移除指定通知
    remove(id: string) {
        removeNotification(id);
    },

    // 创建不同类型的通知
    info(config: Omit<NotificationItem, 'id' | 'type'>) {
        return addNotification({ ...config, type: 'info' });
    },

    success(config: Omit<NotificationItem, 'id' | 'type'>) {
        return addNotification({ ...config, type: 'success' });
    },

    warning(config: Omit<NotificationItem, 'id' | 'type'>) {
        return addNotification({ ...config, type: 'warning' });
    },

    error(config: Omit<NotificationItem, 'id' | 'type'>) {
        return addNotification({ ...config, type: 'error' });
    },

    // 打开通知
    open(config: Omit<NotificationItem, 'id'>) {
        return addNotification(config);
    },

    // 安装到 Vue 应用
    install(app: any) {
        app.component('NotificationContainer', NotificationContainer);
        app.config.globalProperties.$notification = Notification;
    },
};

export default Notification;
