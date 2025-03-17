<template>
    <div class="p-6 notification-demo">
        <h2 class="text-2xl font-bold mb-6 dark:text-white">通知提醒框</h2>

        <div class="space-y-6 mb-10">
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
        <notification-container  />

        <!-- API 文档部分 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">组件API</h2>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">全局方法</h3>
                <div class="mb-6 overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">方法名</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">参数</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">说明</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">Notification.info(config)</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">NotificationConfig</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示信息通知</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">Notification.success(config)</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">NotificationConfig</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示成功通知</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">Notification.warning(config)</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">NotificationConfig</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示警告通知</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">Notification.error(config)</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">NotificationConfig</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示错误通知</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">Notification.open(config)</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">NotificationConfig</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示自定义类型通知</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">Notification.destroyAll()</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">销毁所有通知</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">Notification.remove(id)</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">移除指定ID的通知</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">Notification.config(options)</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">NotificationGlobalConfig</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">设置全局配置</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">通知配置选项</h3>
                <div class="mb-6 overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">属性名</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">类型</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">默认值</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">title</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">通知标题</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">message</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">通知内容</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">type</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">NotificationType</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">通知类型（info/success/warning/error）</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">duration</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">4500</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自动关闭时间，单位毫秒，设置为0则不自动关闭</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">closable</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示关闭按钮</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">onClose</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">() => void</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">关闭时的回调函数</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">action</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">{ text: string, onClick: () => void }</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">操作按钮的配置</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">全局配置项</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">属性名</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">类型</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">默认值</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">maxCount</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">10</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">最大显示数量，超出时会移除最早的通知</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- 小结与最佳实践 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">小结与最佳实践</h2>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <div class="space-y-4">
                    <p class="text-gray-700 dark:text-gray-300">
                        通知提醒框是一个用于全局展示操作反馈的轻量级组件，能够提供非阻断式的信息反馈。
                        以下是一些使用建议：
                    </p>

                    <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        <li>根据消息的重要程度选择合适的通知类型：
                            <span 
                                class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                info
                            </span> 用于普通信息，
                            <span 
                                class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                                success
                            </span> 表示操作成功，
                            <span 
                                class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
                                warning
                            </span> 表示警告信息，
                            <span 
                                class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
                                error
                            </span> 表示错误信息
                        </li>
                        <li>通知内容应简洁明了，避免过长的文本信息</li>
                        <li>对于需要用户进一步操作的通知，可以设置 <code class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-800">duration: 0</code> 防止自动关闭</li>
                        <li>使用 action 属性添加操作按钮，引导用户进行后续操作</li>
                        <li>避免同时显示过多通知，会导致视觉干扰，可通过 maxCount 配置控制</li>
                        <li>对于关键操作的反馈，使用较长的显示时间确保用户看到</li>
                    </ul>

                    <div
                        class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                        <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
                            <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
                            暗色模式支持
                        </h4>
                        <p class="text-sm text-blue-700 dark:text-blue-300">
                            通知组件已内置支持暗色模式，无需额外配置。只要在应用的根元素上添加 <code
                                class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">.dark</code> 类，
                            组件就会自动切换为暗色样式。
                        </p>
                    </div>

                    <p class="text-gray-700 dark:text-gray-300">
                        通知提醒框是应用中不可或缺的反馈机制，合理使用可以有效提升用户体验。统一的视觉样式和交互方式有助于用户快速理解信息的重要性和类型。
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
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
