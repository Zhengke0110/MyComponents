<template>
    <div class="p-6 notification-demo">
        <h2 class="text-2xl font-bold mb-6 dark:text-white">通知提醒框</h2>

        <div class="space-y-6">
            <!-- 基本类型 -->
            <div>
                <h3 class="text-lg font-semibold mb-3 dark:text-gray-200">基本类型</h3>
                <div class="space-x-4">
                    <button v-for="type in notificationTypes" :key="type" @click="showNotification(type)" :class="[
                        'px-4 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105',
                        {
                            'bg-blue-500 hover:bg-blue-600 text-white shadow hover:shadow-md': type === 'info',
                            'bg-green-500 hover:bg-green-600 text-white shadow hover:shadow-md': type === 'success',
                            'bg-yellow-500 hover:bg-yellow-600 text-white shadow hover:shadow-md': type === 'warning',
                            'bg-red-500 hover:bg-red-600 text-white shadow hover:shadow-md': type === 'error',
                        }
                    ]">
                        {{ type.charAt(0).toUpperCase() + type.slice(1) }} 通知
                    </button>
                </div>
            </div>

            <!-- 高级配置 -->
            <div>
                <h3 class="text-lg font-semibold mb-3 dark:text-gray-200">高级配置</h3>
                <div class="flex flex-wrap gap-4">
                    <button @click="showWithAction"
                        class="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md font-medium transition-colors duration-300">
                        带操作按钮的通知
                    </button>
                    <button @click="showNoAutoClose"
                        class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md font-medium transition-colors duration-300">
                        不自动关闭的通知
                    </button>
                    <button @click="showDelayNotification"
                        class="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md font-medium transition-colors duration-300">
                        延迟2秒显示通知
                    </button>
                    <button @click="showCustomDuration"
                        class="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md font-medium transition-colors duration-300">
                        自定义持续时间 (10秒)
                    </button>
                    <button @click="destroyAll"
                        class="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md font-medium transition-colors duration-300">
                        清除所有通知
                    </button>
                </div>
            </div>

            <!-- 自定义内容 -->
            <div>
                <h3 class="text-lg font-semibold mb-3 dark:text-gray-200">自定义内容</h3>
                <div class="flex flex-wrap gap-4">
                    <button @click="showCustomMessage"
                        class="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md font-medium transition-colors duration-300">
                        自定义内容通知
                    </button>
                    <button @click="showMultipleActions"
                        class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition-colors duration-300">
                        多个操作按钮
                    </button>
                </div>
            </div>
        </div>

        <!-- 通知容器 -->
        <notification-container />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Notification, { NotificationContainer, NotificationType } from './Notification';

// 定义通知类型
const notificationTypes: NotificationType[] = ['info', 'success', 'warning', 'error'];

// 显示不同类型的通知
const showNotification = (type: NotificationType): void => {
    const titles: Record<NotificationType, string> = {
        info: '通知',
        success: '成功',
        warning: '警告',
        error: '错误'
    };

    const messages: Record<NotificationType, string> = {
        info: '这是一条普通通知信息',
        success: '操作已成功完成',
        warning: '系统检测到一些问题，请注意',
        error: '操作失败，请重试'
    };

    Notification[type]({
        title: titles[type],
        message: messages[type],
        duration: 4500
    });
};

// 显示带操作按钮的通知
const showWithAction = (): void => {
    Notification.info({
        title: '新消息通知',
        message: '您有一条新的消息待处理',
        duration: 0, // 不自动关闭
        action: {
            text: '查看详情',
            onClick: () => {
                alert('点击了查看详情');
            }
        }
    });
};

// 显示不会自动关闭的通知
const showNoAutoClose = (): void => {
    Notification.warning({
        title: '系统维护通知',
        message: '系统将于今晚22:00进行维护，请保存好您的工作',
        duration: 0 // 设置为0表示不自动关闭
    });
};

// 显示延迟通知
const showDelayNotification = (): void => {
    // 显示一个加载中通知
    Notification.info({
        title: '处理中',
        message: '正在准备通知内容...'
    });
    
    // 2秒后显示真正的通知
    setTimeout(() => {
        Notification.success({
            title: '延迟通知',
            message: '这是一条延迟2秒后显示的通知'
        });
    }, 2000);
};

// 显示自定义持续时间的通知
const showCustomDuration = (): void => {
    Notification.info({
        title: '自定义持续时间',
        message: '这条通知将显示10秒钟',
        duration: 10000 // 10秒
    });
};

// 显示自定义内容通知
const showCustomMessage = (): void => {
    const now = new Date().toLocaleTimeString();
    Notification.success({
        title: '自定义内容示例',
        message: `当前时间: ${now}\n您可以添加更丰富的内容在这里`
    });
};

// 显示多个操作按钮
const showMultipleActions = (): void => {
    const id = Notification.warning({
        title: '文件未保存',
        message: '您有未保存的更改，是否保存？',
        duration: 0,
        action: {
            text: '保存',
            onClick: () => {
                Notification.success({
                    title: '已保存',
                    message: '文件已成功保存'
                });
                Notification.remove(id);
            }
        }
    });
    
    // 因为组件原生不支持多按钮，这里使用setTimeout来模拟第二个操作
    setTimeout(() => {
        const notificationElement = document.querySelector(`[data-notification-id="${id}"]`) as HTMLElement;
        if (notificationElement) {
            const actionContainer = notificationElement.querySelector('.action-container') as HTMLElement;
            if (actionContainer) {
                const cancelButton = document.createElement('button');
                cancelButton.className = 'text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 ml-4 transition-colors';
                cancelButton.innerText = '不保存';
                cancelButton.onclick = () => {
                    Notification.remove(id);
                };
                actionContainer.appendChild(cancelButton);
            }
        }
    }, 100);
};

// 销毁所有通知
const destroyAll = (): void => {
    Notification.destroyAll();
};
</script>

<style>
/* 通知动画 - 简化为右侧进入/退出 */
.notification-transition-enter-active,
.notification-transition-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.notification-transition-enter-from,
.notification-transition-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* 手动调整项目可见性以确保新通知有正确动画 */
.notification-item {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 部分UI增强 */
.notification-demo button {
    transition: all 0.2s ease;
}

.notification-demo button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.notification-demo button:active {
    transform: translateY(0);
}
</style>
