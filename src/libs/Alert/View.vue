<template>
    <div
        class="alert-examples p-6 space-y-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <header class="mb-8">
            <h1 class="text-3xl font-bold mb-3">Alert 提示组件</h1>
            <p class="text-gray-600 dark:text-gray-400">
                用于向用户显示重要提示信息的组件，支持多种类型、样式和交互方式。
            </p>
        </header>

        <!-- 基础用法 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">基础用法</h2>
            <button @click="toggleAlert('basic')"
                class="mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                {{ visibleAlerts.basic ? '隐藏' : '显示' }}基础提示框
            </button>
            <CodePreview :code="basicAlertCode">
                <div class="h-20">
                    <transition-alert>
                        <Alert v-if="visibleAlerts.basic" message="这是一个基础的信息提示框" />
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 不同类型 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">不同类型</h2>
            <div class="mb-4 flex flex-wrap gap-2">
                <button v-for="(type, index) in alertTypes" :key="index" @click="showTypeAlert(type)"
                    class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                    显示{{ typeLabels[type] }}
                </button>
            </div>
            <CodePreview :code="typeAlertCode">
                <div class="h-20">
                    <transition-alert>
                        <Alert v-if="currentTypeAlert" :type="currentTypeAlert"
                            :message="`这是一个${typeLabels[currentTypeAlert]}提示框`" />
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 带标题 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">带标题的提示框</h2>
            <div class="mb-4 flex flex-wrap gap-2">
                <button @click="toggleAlert('titleSuccess')"
                    class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors">
                    显示成功提示
                </button>
                <button @click="toggleAlert('titleWarning')"
                    class="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded transition-colors">
                    显示警告提示
                </button>
            </div>
            <CodePreview :code="titleAlertCode">
                <div class="h-42">
                    <transition-alert>
                        <Alert v-if="visibleAlerts.titleSuccess" type="success" title="成功" message="操作已成功完成" />
                    </transition-alert>
                    <transition-alert>
                        <Alert v-if="visibleAlerts.titleWarning" type="warning" title="注意" message="此操作需要谨慎处理" />
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 带动画的提示框 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">动画效果</h2>
            <div class="flex flex-col gap-4">
                <button @click="showAnimatedAlert = !showAnimatedAlert"
                    class="w-fit px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors duration-200">
                    {{ showAnimatedAlert ? '隐藏' : '显示' }}动画提示框
                </button>
                <CodePreview :code="animatedAlertCode">
                    <div class="h-[80px]">
                        <transition enter-from-class="opacity-0 -translate-y-4"
                            enter-active-class="transition-all duration-300 ease-out"
                            enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100 translate-y-0"
                            leave-active-class="transition-all duration-300 ease-in"
                            leave-to-class="opacity-0 translate-y-4">
                            <Alert v-if="showAnimatedAlert" type="info" title="动画提示" message="这个提示框有淡入上滑的动画效果" />
                        </transition>
                    </div>
                </CodePreview>
            </div>
        </section>

        <!-- 自定义颜色 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">自定义颜色</h2>
            <div class="mb-4 flex flex-wrap gap-2">
                <button @click="showColorAlert('purple')"
                    class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors">
                    显示紫色提示框
                </button>
                <button @click="showColorAlert('teal')"
                    class="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded transition-colors">
                    显示蓝绿色提示框
                </button>
                <button @click="showColorAlert('pink')"
                    class="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded transition-colors">
                    显示粉色提示框
                </button>
            </div>
            <CodePreview :code="colorAlertCode">
                <div class="h-24">
                    <transition-alert>
                        <Alert v-if="currentColorAlert" :color="currentColorAlert"
                            :message="`这是${colorLabels[currentColorAlert]}提示框`" />
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 可关闭与不可关闭 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">可关闭与不可关闭</h2>
            <div class="mb-4 flex flex-wrap gap-2">
                <button @click="toggleAlert('closable')"
                    class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                    显示可关闭提示框
                </button>
                <button @click="toggleAlert('nonClosable')"
                    class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                    显示不可关闭提示框
                </button>
            </div>
            <CodePreview :code="closableAlertCode">
                <div class="space-y-4 h-40">
                    <transition-alert>
                        <Alert v-if="visibleAlerts.closable" message="这是可关闭的提示框（默认）"
                            @close="visibleAlerts.closable = false" />
                    </transition-alert>
                    <transition-alert>
                        <Alert v-if="visibleAlerts.nonClosable" message="这是不可关闭的提示框（点击按钮可隐藏）" :closable="false" />
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 无图标 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">无图标</h2>
            <button @click="toggleAlert('noIcon')"
                class="mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                {{ visibleAlerts.noIcon ? '隐藏' : '显示' }}无图标提示框
            </button>
            <CodePreview :code="noIconAlertCode">
                <div class="h-20">
                    <transition-alert>
                        <Alert v-if="visibleAlerts.noIcon" message="这是没有图标的提示框" :showIcon="false" />
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 无边框 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">无边框</h2>
            <button @click="toggleAlert('noBorder')"
                class="mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                {{ visibleAlerts.noBorder ? '隐藏' : '显示' }}无边框提示框
            </button>
            <CodePreview :code="noBorderAlertCode">
                <div class="h-20">
                    <transition-alert>
                        <Alert v-if="visibleAlerts.noBorder" message="这是没有边框的提示框" :bordered="false" />
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 自定义样式 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">自定义样式</h2>
            <div class="mb-4 flex flex-wrap gap-2">
                <button @click="toggleCustomStyle('gradient')"
                    class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                    显示渐变背景提示框
                </button>
                <button @click="toggleCustomStyle('shadow')"
                    class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                    显示阴影提示框
                </button>
            </div>
            <CodePreview :code="customStyleAlertCode">
                <div class="h-24">
                    <transition-alert>
                        <Alert v-if="customStyle === 'gradient'" message="这是应用了渐变背景的提示框"
                            customClass="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900" />
                    </transition-alert>
                    <transition-alert>
                        <Alert v-if="customStyle === 'shadow'" message="这是应用了阴影效果的提示框"
                            customClass="shadow-lg border-indigo-300 dark:border-indigo-700" />
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 悬浮效果 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">悬浮效果</h2>
            <button @click="toggleAlert('hover')"
                class="mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                {{ visibleAlerts.hover ? '隐藏' : '显示' }}悬浮效果提示框
            </button>
            <CodePreview :code="hoverAlertCode">
                <div class="h-20">
                    <transition-alert>
                        <div v-if="visibleAlerts.hover" class="group cursor-pointer">
                            <Alert message="鼠标悬浮在此处查看效果"
                                customClass="transition-all duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-lg" />
                        </div>
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 自定义图标 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">自定义图标</h2>
            <button @click="toggleAlert('customIcon')"
                class="mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                {{ visibleAlerts.customIcon ? '隐藏' : '显示' }}自定义图标提示框
            </button>
            <CodePreview :code="customIconAlertCode">
                <div class="h-20">
                    <transition-alert>
                        <Alert v-if="visibleAlerts.customIcon" type="info" message="这是自定义图标的提示框">
                            <template #icon>
                                <i class="icon-[mdi--star] size-5 text-amber-500 animate-spin-slow"></i>
                            </template>
                        </Alert>
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 使用默认插槽 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">使用默认插槽</h2>
            <button @click="toggleAlert('defaultSlot')"
                class="mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                {{ visibleAlerts.defaultSlot ? '隐藏' : '显示' }}默认插槽提示框
            </button>
            <CodePreview :code="defaultSlotAlertCode">
                <div class="h-20">
                    <transition-alert>
                        <Alert v-if="visibleAlerts.defaultSlot" type="info">
                            <div>
                                这是通过<span class="font-bold">默认插槽</span>定义的内容
                                <a href="#"
                                    class="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                                    点击这里
                                </a>
                                了解更多信息
                            </div>
                        </Alert>
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 使用额外内容插槽 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">使用额外内容插槽</h2>
            <button @click="toggleAlert('extraSlot')"
                class="mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                {{ visibleAlerts.extraSlot ? '隐藏' : '显示' }}额外插槽提示框
            </button>
            <CodePreview :code="extraSlotAlertCode">
                <div class="h-32">
                    <transition-alert>
                        <Alert v-if="visibleAlerts.extraSlot" type="warning" title="提示" message="您的账户即将到期">
                            <template #extra>
                                <div class="flex space-x-2">
                                    <button
                                        class="px-4 py-1 bg-amber-100 hover:bg-amber-200 dark:bg-amber-900 dark:hover:bg-amber-800 rounded text-amber-800 dark:text-amber-200 transition-colors">
                                        立即续费
                                    </button>
                                    <button
                                        class="px-4 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded transition-colors">
                                        了解详情
                                    </button>
                                </div>
                            </template>
                        </Alert>
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 自动关闭 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">自动关闭</h2>
            <div class="flex flex-col gap-4">
                <button @click="showAutoCloseAlert"
                    class="w-fit px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors duration-200">
                    显示自动关闭提示框 (3秒)
                </button>
                <CodePreview :code="autoCloseAlertCode">
                    <div class="h-[80px]">
                        <transition enter-from-class="opacity-0 translate-y-4"
                            enter-active-class="transition-all duration-500 ease-out"
                            enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100 translate-y-0"
                            leave-active-class="transition-all duration-300 ease-in"
                            leave-to-class="opacity-0 translate-y-4">
                            <Alert v-if="autoCloseVisible" type="success" message="这个提示框将在3秒后自动关闭" :duration="3000"
                                @close="autoCloseVisible = false" />
                        </transition>
                    </div>
                </CodePreview>
            </div>
        </section>

        <!-- 交互式动画 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">交互式动画</h2>
            <button @click="toggleAlert('shake')"
                class="mb-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                {{ visibleAlerts.shake ? '隐藏' : '显示' }}交互式提示框
            </button>
            <CodePreview :code="shakeAlertCode">
                <div class="h-20">
                    <transition-alert>
                        <div v-if="visibleAlerts.shake" ref="shakingAlertContainer" class="cursor-pointer"
                            @click="shakeAlert">
                            <Alert ref="shakingAlert" type="danger" title="互动提示" message="点击这个提示框会产生晃动效果！"
                                :closable="false" />
                        </div>
                    </transition-alert>
                </div>
            </CodePreview>
        </section>

        <!-- 多重组合效果 -->
        <section>
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">多重组合效果</h2>
            <div class="mb-4 flex flex-wrap gap-2">
                <button v-for="(type, index) in ['info', 'success', 'warning', 'danger'] as ThemeColorType[]"
                    :key="index" @click="triggerNotification(type)"
                    class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors">
                    显示{{ {
                        'info': '信息', 'success': '成功', 'warning': '警告', 'danger': '危险', 'primary': '主要', 'secondary':
                            '次要'
                    }[type] }}通知
                </button>
            </div>
            <CodePreview :code="notificationStackCode">
                <div class="notification-container fixed bottom-4 right-4 z-10 space-y-2 w-80">
                    <transition-group enter-from-class="opacity-0 translate-x-8"
                        enter-active-class="transition-all duration-300 ease-out" enter-to-class="opacity-100 translate-x-0"
                        leave-from-class="opacity-100 translate-x-0"
                        leave-active-class="transition-all duration-200 ease-in" leave-to-class="opacity-0 translate-x-8">
                        <Alert v-for="alert in notifications" :key="alert.id" :type="alert.type" :message="alert.message"
                            @close="removeNotification(alert.id)" />
                    </transition-group>
                </div>
            </CodePreview>
        </section>

        <!-- API 文档部分 -->
        <section class="mb-10">
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">组件API</h2>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">属性 (Props)</h3>
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
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">type</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ThemeColorType</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'info'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">警告类型，可选值为：'primary', 'secondary', 'success', 'warning', 'danger', 'info'</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">color</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ColorType</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">undefined</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义颜色，优先级高于type</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">title</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">警告标题</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">message</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">警告内容</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">closable</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否可关闭</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">showIcon</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示图标</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">bordered</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示边框</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">customClass</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义类名</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">duration</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">1000</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自动关闭时间（毫秒），0表示不自动关闭</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">事件 (Events)</h3>
                <div class="mb-6 overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">事件名</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">回调参数</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">close</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">当警告被关闭时触发</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">插槽 (Slots)</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">插槽名</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">default</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义消息内容</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">icon</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义图标</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">extra</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">额外内容，显示在警告底部</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- 小结与最佳实践 -->
        <section class="mb-10">
            <h2 class="text-xl font-bold mb-4 border-l-4 pl-3 border-indigo-500">小结与最佳实践</h2>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <div class="space-y-4">
                    <p class="text-gray-700 dark:text-gray-300">
                        Alert 组件是一个用于向用户显示重要信息的轻量级组件，适用于各种场景如状态提醒、操作结果通知、警告信息等。
                        以下是一些使用建议：
                    </p>

                    <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        <li>根据信息的重要程度和语义选择适当的类型：
                            <div class="flex flex-wrap gap-2 mt-1">
                                <Alert type="success" message="成功消息" class="inline-flex w-auto" :bordered="false" />
                                <Alert type="info" message="信息提示" class="inline-flex w-auto" :bordered="false" />
                                <Alert type="warning" message="警告消息" class="inline-flex w-auto" :bordered="false" />
                                <Alert type="danger" message="危险操作" class="inline-flex w-auto" :bordered="false" />
                            </div>
                        </li>
                        <li>对于重要信息，添加标题使其更突出:
                            <Alert type="warning" title="注意" message="这是一个带标题的警告信息" class="mt-1 mb-2" />
                        </li>
                        <li>使用自动关闭功能（duration 属性）处理临时通知</li>
                        <li>利用 icon 和 extra 插槽自定义内容，增强信息的表现力</li>
                        <li>结合自定义样式（customClass），可以实现更丰富的视觉效果</li>
                    </ul>

                    <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                        <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
                            <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
                            暗色模式提示
                        </h4>
                        <p class="text-sm text-blue-700 dark:text-blue-300">
                            Alert 组件已内置支持暗色模式，无需额外配置。只要在应用的根元素上添加 <code
                                class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">.dark</code> 类，
                            组件就会自动切换为暗色样式，确保在不同主题环境下都能提供良好的可读性和视觉效果。
                        </p>
                    </div>

                    <p class="text-gray-700 dark:text-gray-300">
                        在设计系统中，合理使用 Alert 组件可以帮助用户更好地注意到重要信息，提高用户体验。同时，通过一致的样式语言，可以让用户更容易理解不同类型信息的紧急程度和重要性。
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineComponent, h, onUnmounted } from 'vue';;
import Alert from './Alert';
import CodePreview from "../../components/CodePreview";
import type { ThemeColorType, ColorType } from './config';
import { 
    basicAlertCode, typeAlertCode, titleAlertCode, animatedAlertCode, 
    colorAlertCode, closableAlertCode, noIconAlertCode, noBorderAlertCode, 
    customStyleAlertCode, hoverAlertCode, customIconAlertCode, defaultSlotAlertCode, 
    extraSlotAlertCode, autoCloseAlertCode, shakeAlertCode, notificationStackCode 
} from './code';

// 通用过渡效果组件
const TransitionAlert = defineComponent({
    setup(_, { slots }) {
        return () => h('transition', {
            'enter-from-class': 'opacity-0 scale-95',
            'enter-active-class': 'transition-all duration-300 ease-out',
            'enter-to-class': 'opacity-100 scale-100',
            'leave-from-class': 'opacity-100 scale-100',
            'leave-active-class': 'transition-all duration-200 ease-in',
            'leave-to-class': 'opacity-0 scale-95',
        }, slots.default?.());
    }
});

// 控制各种 Alert 的显示状态
const visibleAlerts = reactive({
    basic: false,
    titleSuccess: false,
    titleWarning: false,
    closable: false,
    nonClosable: false,
    noIcon: false,
    noBorder: false,
    customStyle: false,
    hover: false,
    customIcon: false,
    defaultSlot: false,
    extraSlot: false,
    shake: false
});

// 切换 Alert 显示状态的函数
const toggleAlert = (type: keyof typeof visibleAlerts) => {
    visibleAlerts[type] = !visibleAlerts[type];
};

// 不同类型的 Alert
const alertTypes = ['info', 'success', 'warning', 'danger'] as const;
const typeLabels: Record<ThemeColorType, string> = {
    'info': '信息',
    'success': '成功',
    'warning': '警告',
    'danger': '危险',
    'primary': '主要',
    'secondary': '次要'
};
const currentTypeAlert = ref<ThemeColorType | null>(null);
const showTypeAlert = (type: string) => {
    currentTypeAlert.value = type as ThemeColorType;
    setTimeout(() => {
        currentTypeAlert.value = null;
    }, 3000);
};

// 自定义颜色
const colorLabels: Record<string, string> = {
    'purple': '紫色',
    'teal': '蓝绿色',
    'pink': '粉色'
};
const currentColorAlert = ref<ColorType | null>(null);
const showColorAlert = (color: ColorType) => {
    currentColorAlert.value = color;
    setTimeout(() => {
        currentColorAlert.value = null;
    }, 3000);
};

// 动画提示框
const showAnimatedAlert = ref(false);

// 自动关闭提示框
const autoCloseVisible = ref(false);
const showAutoCloseAlert = () => {
    autoCloseVisible.value = true;
};

// 自定义样式
const customStyle = ref<string | null>(null);

const toggleCustomStyle = (style: string) => {
    if (customStyle.value === style) {
        customStyle.value = null;
    } else {
        customStyle.value = style;
    }
};

// 晃动效果
const shakingAlert = ref<InstanceType<typeof Alert> | null>(null);
const shakingAlertContainer = ref<HTMLElement | null>(null);
const shakeTimer = ref<number | null>(null);

const shakeAlert = () => {
    if (shakingAlert.value && shakingAlert.value.$el) {
        // 先清除之前可能存在的定时器
        if (shakeTimer.value !== null) {
            clearTimeout(shakeTimer.value);
        }

        // 添加动画类名
        shakingAlert.value.$el.classList.add('animate-shake');

        // 设置新的定时器并保存引用
        shakeTimer.value = window.setTimeout(() => {
            // 再次检查元素是否仍然存在
            if (shakingAlert.value &&
                shakingAlert.value.$el &&
                shakingAlert.value.$el.classList) {
                shakingAlert.value.$el.classList.remove('animate-shake');
            }
            shakeTimer.value = null;
        }, 500);
    }
};

// 确保在组件销毁时清除定时器
onUnmounted(() => {
    if (shakeTimer.value !== null) {
        clearTimeout(shakeTimer.value);
    }
});

// 通知栈
const notifications = ref<{ id: number; type: ThemeColorType; message: string }[]>([]);
let notificationId = 0;

const triggerNotification = (type: ThemeColorType) => {
    const messages: Record<ThemeColorType, string> = {
        'info': '这是一条信息通知',
        'success': '操作已成功完成',
        'warning': '请注意此操作的风险',
        'danger': '系统检测到错误',
        'primary': '这是一条主要通知',
        'secondary': '这是一条次要通知'
    };

    // 添加新通知
    notifications.value.push({
        id: notificationId++,
        type,
        message: messages[type]
    });

    // 5秒后自动移除
    setTimeout(() => {
        removeNotification(notificationId - 1);
    }, 5000);
};

const removeNotification = (id: number) => {
    notifications.value = notifications.value.filter(alert => alert.id !== id);
};
</script>

<style scoped>
/* 晃动动画 */
@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    20% {
        transform: translateX(-8px);
    }

    40% {
        transform: translateX(8px);
    }

    60% {
        transform: translateX(-5px);
    }

    80% {
        transform: translateX(5px);
    }
}

.animate-shake {
    animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

/* 缓慢旋转动画 */
@keyframes spin-slow {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin-slow {
    animation: spin-slow 3s linear infinite;
}

/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
