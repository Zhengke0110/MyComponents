<template>
    <div class="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
        <h1 class="mb-8 text-3xl font-bold">Badge 徽章组件</h1>

        <!-- 暗色模式切换 - 使用 @vueuse/core 的实现 -->
        <div class="mb-6 flex justify-end">
            <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                    <span class="text-sm">暗色模式</span>
                    <div class="relative inline-block h-6 w-11 cursor-pointer rounded-full bg-gray-200 transition-colors duration-200 ease-in-out dark:bg-blue-600"
                        @click="toggleDark()">
                        <span :class="[
                            'absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-in-out',
                            isDark ? 'translate-x-5' : 'translate-x-0'
                        ]"></span>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <button
                        class="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 bg-blue-500 hover:bg-blue-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-medium"
                        @click="toggleDark()">
                        <span :class="[
                            isDark ? 'icon-[material-symbols--wb-sunny-outline-rounded]' : 'icon-[material-symbols--dark-mode-outline-rounded]',
                            'size-5'
                        ]"></span>
                        <span>{{ isDark ? '切换到亮色模式' : '切换到暗色模式' }}</span>
                    </button>

                    <button
                        class="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium"
                        @click="preferredDark ? toggleDark(false) : toggleDark(true)">
                        <span class="icon-[material-symbols--settings-outline-rounded] size-5"></span>
                        <span>系统偏好</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- 基础颜色展示 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">基础颜色</h2>
            <div class="flex flex-wrap gap-3">
                <Badge text="默认蓝色" />
                <Badge text="红色" color="red" />
                <Badge text="橙色" color="orange" />
                <Badge text="琥珀色" color="amber" />
                <Badge text="黄色" color="yellow" />
                <Badge text="青柠色" color="lime" />
                <Badge text="绿色" color="green" />
                <Badge text="翠绿色" color="emerald" />
                <Badge text="蓝绿色" color="teal" />
                <Badge text="青色" color="cyan" />
                <Badge text="天蓝色" color="sky" />
                <Badge text="靛青色" color="indigo" />
                <Badge text="紫罗兰" color="violet" />
                <Badge text="紫色" color="purple" />
                <Badge text="品红色" color="fuchsia" />
                <Badge text="粉色" color="pink" />
                <Badge text="玫瑰色" color="rose" />
            </div>
        </section>

        <!-- 灰度色系 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">灰度色系</h2>
            <div class="flex flex-wrap gap-3">
                <Badge text="石板灰" color="slate" />
                <Badge text="灰色" color="gray" />
                <Badge text="锌灰" color="zinc" />
                <Badge text="中性灰" color="neutral" />
                <Badge text="石灰" color="stone" />
            </div>
        </section>

        <!-- 主题颜色 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">语义化主题</h2>
            <div class="flex flex-wrap gap-3">
                <Badge text="默认" />
                <Badge text="主要" theme="primary" />
                <Badge text="次要" theme="secondary" />
                <Badge text="成功" theme="success" />
                <Badge text="警告" theme="warning" />
                <Badge text="危险" theme="danger" />
                <Badge text="信息" theme="info" />
            </div>
        </section>

        <!-- 样式变体 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">样式变体</h2>

            <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">柔和风格 (soft)</h3>
            <div class="mb-4 flex flex-wrap gap-3">
                <Badge text="主要" theme="primary" variant="soft" />
                <Badge text="次要" theme="secondary" variant="soft" />
                <Badge text="成功" theme="success" variant="soft" />
                <Badge text="警告" theme="warning" variant="soft" />
                <Badge text="危险" theme="danger" variant="soft" />
                <Badge text="信息" theme="info" variant="soft" />
            </div>

            <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">实心风格 (solid)</h3>
            <div class="mb-4 flex flex-wrap gap-3">
                <Badge text="主要" theme="primary" variant="solid" />
                <Badge text="次要" theme="secondary" variant="solid" />
                <Badge text="成功" theme="success" variant="solid" />
                <Badge text="警告" theme="warning" variant="solid" />
                <Badge text="危险" theme="danger" variant="solid" />
                <Badge text="信息" theme="info" variant="solid" />
            </div>

            <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">描边风格 (outline)</h3>
            <div class="flex flex-wrap gap-3">
                <Badge text="主要" theme="primary" variant="outline" />
                <Badge text="次要" theme="secondary" variant="outline" />
                <Badge text="成功" theme="success" variant="outline" />
                <Badge text="警告" theme="warning" variant="outline" />
                <Badge text="危险" theme="danger" variant="outline" />
                <Badge text="信息" theme="info" variant="outline" />
            </div>
        </section>

        <!-- 尺寸选项 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">尺寸选项</h2>
            <div class="flex items-center gap-3">
                <Badge text="小号标签" size="sm" theme="primary" />
                <Badge text="中号标签" size="md" theme="primary" />
                <Badge text="大号标签" size="lg" theme="primary" />
            </div>
        </section>

        <!-- 圆角选项 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">圆角选项</h2>
            <div class="flex flex-wrap gap-3">
                <Badge text="方角 (sm)" rounded="sm" theme="primary" />
                <Badge text="中等圆角 (md)" rounded="md" theme="primary" />
                <Badge text="大圆角 (lg)" rounded="lg" theme="primary" />
                <Badge text="胶囊形状 (full)" rounded="full" theme="primary" />
            </div>
        </section>

        <!-- 可交互徽章 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">可交互徽章</h2>
            <div class="flex flex-wrap gap-3">
                <Badge text="可点击" clickable @click="handleBadgeClick('普通点击')" theme="primary" title="点击我试试" />
                <Badge text="带图标" clickable @click="handleBadgeClick('带图标点击')" theme="success" rounded="full">
                    <template #prefix>
                        <div class="icon-[material-symbols--check-circle-rounded] mr-1 h-3 w-3" />
                    </template>
                </Badge>
                <Badge text="删除标签" theme="danger" clickable @click="handleBadgeClick('删除')" rounded="full">
                    <template #suffix>
                        <div class="icon-[material-symbols--close-rounded] ml-1 h-3 w-3" />
                    </template>
                </Badge>
            </div>
            <div class="mt-4 text-sm text-gray-600 dark:text-gray-400" v-if="lastClicked">
                最后点击: {{ lastClicked }}
            </div>
        </section>

        <!-- 组合使用案例 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">组合使用案例</h2>

            <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">产品标签</h3>
            <div class="mb-6 flex flex-wrap gap-3">
                <Badge text="新品" theme="primary" variant="solid" rounded="full" />
                <Badge text="热销" color="rose" variant="solid" rounded="full" />
                <Badge text="限时折扣" color="amber" variant="solid" rounded="full" />
                <Badge text="库存紧张" theme="danger" variant="soft" rounded="full" />
                <Badge text="预售" color="purple" variant="outline" rounded="full" />
            </div>

            <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">状态标签</h3>
            <div class="mb-6 flex flex-wrap gap-3">
                <div class="flex items-center gap-2">
                    <div class="h-2 w-2 rounded-full bg-green-500"></div>
                    <Badge text="在线" theme="success" variant="soft" />
                </div>
                <div class="flex items-center gap-2">
                    <div class="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <Badge text="离开" theme="warning" variant="soft" />
                </div>
                <div class="flex items-center gap-2">
                    <div class="h-2 w-2 rounded-full bg-gray-400"></div>
                    <Badge text="离线" theme="secondary" variant="soft" />
                </div>
                <div class="flex items-center gap-2">
                    <div class="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
                    <Badge text="错误" theme="danger" variant="soft" />
                </div>
            </div>

            <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">通知徽章</h3>
            <div class="mb-6 flex items-center gap-8">
                <div class="relative">
                    <button class="rounded-full p-2 hover:bg-gray-100">
                        <div class="icon-[material-symbols--circle-notifications-outline-rounded] h-6 w-6" />
                    </button>
                    <Badge text="3" theme="danger" variant="solid" rounded="full" size="sm"
                        class="absolute -top-1 -right-1" />
                </div>

                <div class="relative">
                    <button class="rounded-full p-2 hover:bg-gray-100">
                        <div class="icon-[material-symbols--mark-email-unread-outline-rounded] h-6 w-6" />
                    </button>
                    <Badge text="12" theme="primary" variant="solid" rounded="full" size="sm"
                        class="absolute -top-1 -right-1" />
                </div>

                <div class="relative">
                    <button class="rounded-full p-2 hover:bg-gray-100">
                        <div class="icon-[material-symbols--remove-shopping-cart-rounded] h-6 w-6" />
                    </button>
                    <Badge text="购物车" color="emerald" variant="soft" rounded="full" size="sm"
                        class="absolute -top-2 -right-12" />
                </div>
            </div>
        </section>

        <!-- 实际应用示例 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">实际应用示例</h2>

            <div
                class="mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                <div class="mb-3 flex items-center gap-3">
                    <div
                        class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <div
                            class="icon-[material-symbols--supervised-user-circle-outline] h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <div class="font-medium text-gray-900 dark:text-white">用户状态</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">简单的用户信息卡片</div>
                    </div>
                </div>
                <div class="flex flex-wrap gap-2">
                    <Badge text="正常" theme="success" />
                    <Badge text="已认证" theme="info" />
                    <Badge text="会员" color="amber" />
                </div>
            </div>

            <div
                class="mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                <div class="mb-3 flex items-center justify-between">
                    <div class="font-medium text-gray-900 dark:text-white">系统状态</div>
                    <Badge text="正常运行" theme="success" variant="soft" rounded="full" />
                </div>
                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-700 dark:text-gray-300">API 服务</span>
                        <Badge text="在线" theme="success" size="sm" />
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-700 dark:text-gray-300">数据库</span>
                        <Badge text="在线" theme="success" size="sm" />
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-700 dark:text-gray-300">存储服务</span>
                        <Badge text="维护中" theme="warning" size="sm" />
                    </div>
                </div>
            </div>

            <div class="max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                <div class="mb-3 flex items-center justify-between">
                    <div class="font-medium text-gray-900 dark:text-white">项目标签</div>
                    <Badge text="5 个标签" color="gray" variant="soft" size="sm" />
                </div>
                <div class="flex flex-wrap gap-2">
                    <Badge text="前端" color="sky" variant="soft" rounded="lg" clickable />
                    <Badge text="后端" color="emerald" variant="soft" rounded="lg" clickable />
                    <Badge text="设计" color="purple" variant="soft" rounded="lg" clickable />
                    <Badge text="UI/UX" color="fuchsia" variant="soft" rounded="lg" clickable />
                    <Badge text="产品" color="amber" variant="soft" rounded="lg" clickable />
                </div>
            </div>
        </section>

        <!-- 暗色主题展示 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">暗色主题</h2>

            <div class="mb-6">
                <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">主题模式切换</h3>
                <div class="flex flex-wrap gap-3">
                    <Badge text="自动模式(默认)" mode="auto" theme="primary" />
                    <Badge text="亮色模式" mode="light" theme="primary" />
                    <Badge text="暗色模式" mode="dark" theme="primary" />
                </div>
            </div>

            <!-- 暗色模式下的颜色展示 - 使用内容样式 -->
            <div class="mb-6">
                <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">强制暗色模式下的主题变体</h3>
                <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                        <h4 class="mb-2 font-medium text-gray-900 ">实心风格 (solid)</h4>
                        <div class="flex flex-wrap gap-2">
                            <Badge text="主要" theme="primary" variant="solid" mode="dark" />
                            <Badge text="成功" theme="success" variant="solid" mode="dark" />
                            <Badge text="警告" theme="warning" variant="solid" mode="dark" />
                            <Badge text="危险" theme="danger" variant="solid" mode="dark" />
                        </div>
                    </div>

                    <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                        <h4 class="mb-2 font-medium text-gray-900">柔和风格 (soft)</h4>
                        <div class="flex flex-wrap gap-2">
                            <Badge text="主要" theme="primary" variant="soft" mode="dark" />
                            <Badge text="成功" theme="success" variant="soft" mode="dark" />
                            <Badge text="警告" theme="warning" variant="soft" mode="dark" />
                            <Badge text="危险" theme="danger" variant="soft" mode="dark" />
                        </div>
                    </div>

                    <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                        <h4 class="mb-2 font-medium text-gray-900 ">描边风格 (outline)</h4>
                        <div class="flex flex-wrap gap-2">
                            <Badge text="主要" theme="primary" variant="outline" mode="dark" />
                            <Badge text="成功" theme="success" variant="outline" mode="dark" />
                            <Badge text="警告" theme="warning" variant="outline" mode="dark" />
                            <Badge text="危险" theme="danger" variant="outline" mode="dark" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- 暗色背景中的徽章显示 -->
            <div class="mb-6">
                <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">暗色背景中的徽章</h3>
                <div class="rounded-lg bg-gray-800 p-6">
                    <h4 class="mb-3 text-base font-medium text-white">暗色背景上的自适应徽章</h4>
                    <p class="mb-3 text-sm text-gray-300">徽章会根据背景自动调整样式以保持可读性</p>
                    <div class="mb-4 flex flex-wrap gap-3">
                        <Badge text="自动适应" theme="primary" />
                        <Badge text="软风格" theme="success" variant="soft" />
                        <Badge text="实心风格" theme="danger" variant="solid" />
                        <Badge text="描边风格" theme="warning" variant="outline" />
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <Badge text="琥珀色" color="amber" variant="soft" />
                        <Badge text="青柠色" color="lime" variant="soft" />
                        <Badge text="翠绿色" color="emerald" variant="soft" />
                        <Badge text="蓝绿色" color="teal" variant="soft" />
                        <Badge text="天蓝色" color="sky" variant="soft" />
                        <Badge text="紫罗兰" color="violet" variant="soft" />
                        <Badge text="品红色" color="fuchsia" variant="soft" />
                    </div>
                </div>
            </div>

            <!-- 使用 vueuse 的暗模式的样式切换 -->
            <div class="mb-6">
                <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">切换页面暗色模式</h3>
                <div class="mb-3 flex items-center gap-2">
                    <button
                        class="rounded-md bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                        @click="toggleDark()">
                        {{ isDark ? '切换到亮色模式' : '切换到暗色模式' }}
                    </button>
                    <span class="text-sm text-gray-600 dark:text-gray-300">
                        当前模式: {{ isDark ? '暗色' : '亮色' }}
                    </span>
                </div>

                <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h4 class="mb-3 text-gray-900 dark:text-white">自动适应页面模式的徽章</h4>
                    <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
                        以下徽章使用 'auto' 模式，会自动适应当前页面的亮暗设置
                    </p>

                    <div class="mb-4">
                        <h5 class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">实心风格</h5>
                        <div class="flex flex-wrap gap-2">
                            <Badge text="主要" theme="primary" variant="solid" />
                            <Badge text="成功" theme="success" variant="solid" />
                            <Badge text="警告" theme="warning" variant="solid" />
                            <Badge text="危险" theme="danger" variant="solid" />
                        </div>
                    </div>

                    <div class="mb-4">
                        <h5 class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">柔和风格</h5>
                        <div class="flex flex-wrap gap-2">
                            <Badge text="主要" theme="primary" variant="soft" />
                            <Badge text="成功" theme="success" variant="soft" />
                            <Badge text="警告" theme="warning" variant="soft" />
                            <Badge text="危险" theme="danger" variant="soft" />
                        </div>
                    </div>

                    <div>
                        <h5 class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">描边风格</h5>
                        <div class="flex flex-wrap gap-2">
                            <Badge text="主要" theme="primary" variant="outline" />
                            <Badge text="成功" theme="success" variant="outline" />
                            <Badge text="警告" theme="warning" variant="outline" />
                            <Badge text="危险" theme="danger" variant="outline" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- 暗色模式的实际应用场景 -->
            <div>
                <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">暗色模式下的应用场景</h3>

                <!-- 卡片示例 -->
                <div
                    class="mb-4 max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <div class="mb-3 flex items-center justify-between">
                        <h4 class="text-lg font-medium text-gray-900 dark:text-white">项目概览</h4>
                        <Badge text="进行中" theme="success" variant="soft" rounded="full" />
                    </div>
                    <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        组件库开发进度和状态追踪
                    </p>
                    <div class="mb-4 space-y-2 text-sm">
                        <div class="flex items-center justify-between">
                            <span class="text-gray-700 dark:text-gray-300">已完成组件</span>
                            <Badge text="12/20" color="green" size="sm" />
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-700 dark:text-gray-300">进行中</span>
                            <Badge text="5" color="blue" size="sm" />
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-gray-700 dark:text-gray-300">待开始</span>
                            <Badge text="3" color="gray" size="sm" />
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <Badge text="高优先级" color="red" variant="soft" size="sm" rounded="full" />
                        <Badge text="前端" color="indigo" variant="soft" size="sm" rounded="full" />
                        <Badge text="设计系统" color="purple" variant="soft" size="sm" rounded="full" />
                    </div>
                </div>

                <!-- 通知列表示例 -->
                <div class="max-w-md rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div class="border-b border-gray-200 p-4 dark:border-gray-700">
                        <h4 class="text-lg font-medium text-gray-900 dark:text-white">通知中心</h4>
                    </div>
                    <div class="divide-y divide-gray-200 dark:divide-gray-700">
                        <div class="flex items-start gap-3 p-4">
                            <div
                                class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                                <div class="h-4 w-4 text-blue-600 dark:text-blue-400">i</div>
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-sm font-medium text-gray-900 dark:text-white">系统更新</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400">新版本已发布，请及时更新</p>
                                <div class="mt-1">
                                    <Badge text="新功能" theme="primary" variant="soft" size="sm" />
                                </div>
                            </div>
                            <span class="text-xs text-gray-500">2小时前</span>
                        </div>

                        <div class="flex items-start gap-3 p-4">
                            <div
                                class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                                <div class="h-4 w-4 text-green-600 dark:text-green-400">✓</div>
                            </div>
                            <div class="min-w-0 flex-1">
                                <p class="text-sm font-medium text-gray-900 dark:text-white">任务完成</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400">组件库文档已更新</p>
                                <div class="mt-1">
                                    <Badge text="已完成" theme="success" variant="soft" size="sm" />
                                </div>
                            </div>
                            <span class="text-xs text-gray-500">昨天</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">使用 @vueuse/core 的暗色模式</h2>
            <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
                这部分使用了 @vueuse/core 提供的 useDark 和 useToggle 组合式函数来实现暗色模式的切换。
                这种方法比手动操作 DOM 更符合 Vue 的响应式风格，并且能够自动保持页面状态的一致性。
            </p>

            <div
                class="mb-4 space-y-4 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
                <div>
                    <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">暗色模式特性</h3>
                    <ul class="ml-5 list-disc space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>自动检测系统颜色偏好</li>
                        <li>保存用户的颜色偏好到 localStorage</li>
                        <li>在不同页面之间保持一致的颜色主题</li>
                        <li>提供简单的 API 进行主题切换</li>
                    </ul>
                </div>

                <div>
                    <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">模式切换演示</h3>
                    <div class="flex flex-wrap items-center gap-4">
                        <div class="flex items-center gap-2">
                            <span class="text-sm">暗色模式</span>
                            <div class="relative inline-block h-6 w-11 cursor-pointer rounded-full bg-gray-200 transition-colors duration-200 ease-in-out dark:bg-blue-600"
                                @click="toggleDark()">
                                <span :class="[
                                    'absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 ease-in-out',
                                    isDark ? 'translate-x-5' : 'translate-x-0'
                                ]"></span>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <Badge :text="isDark ? '切换到亮色' : '切换到暗色'" theme="primary" variant="solid" rounded="full"
                                clickable @click="toggleDark()">
                                <template #prefix>
                                    <div :class="[
                                        'mr-1 h-3 w-3',
                                        isDark ? 'icon-[material-symbols--wb-sunny-outline-rounded]' : 'icon-[material-symbols--dark-mode-outline-rounded]'
                                    ]"></div>
                                </template>
                            </Badge>

                            <Badge text="系统偏好" theme="secondary" variant="outline" rounded="full" clickable
                                @click="preferredDark ? toggleDark(false) : toggleDark(true)">
                                <template #prefix>
                                    <div class="icon-[material-symbols--settings-outline-rounded] mr-1 h-3 w-3"></div>
                                </template>
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap gap-4">
                <div class="w-full rounded-lg border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800 md:w-48">
                    <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">亮色风格徽章</h4>
                    <div class="flex flex-wrap gap-2">
                        <Badge text="固定亮色" mode="light" theme="primary" />
                        <Badge text="固定亮色" mode="light" theme="danger" />
                    </div>
                </div>

                <div class="w-full rounded-lg border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800 md:w-48">
                    <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">暗色风格徽章</h4>
                    <div class="flex flex-wrap gap-2">
                        <Badge text="固定暗色" mode="dark" theme="primary" />
                        <Badge text="固定暗色" mode="dark" theme="danger" />
                    </div>
                </div>

                <div class="w-full rounded-lg border border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800 md:w-48">
                    <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">自动适应徽章</h4>
                    <div class="flex flex-wrap gap-2">
                        <Badge text="自动适应" mode="auto" theme="primary" />
                        <Badge text="自动适应" mode="auto" theme="danger" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { Badge } from "../../components/Badges";
import { useDark, useToggle } from '@vueuse/core';

// 使用 vueuse/core 的暗色模式钩子
const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: ''
});
const toggleDark = useToggle(isDark);

// 检查系统颜色偏好
const preferredDark = ref(false);
if (window.matchMedia) {
    preferredDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// 记录最后点击的徽章
const lastClicked = ref("");

// 徽章点击处理函数
const handleBadgeClick = (name: string) => {
    lastClicked.value = name;
};

// 确保暗色模式正确应用
onMounted(() => {
    // 初始应用暗色模式
    if (isDark.value) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark-mode');
    }

    // 自动检测并添加使用暗色模式的标记类
    document.documentElement.classList.add('using-dark-mode');
});

// 监听暗色模式变化
watch(isDark, (newVal) => {
    if (newVal) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark-mode');
    }

    // 强制触发重新渲染
    setTimeout(() => {
        document.body.style.transition = 'background-color 0.3s ease';
        if (newVal) {
            document.body.style.backgroundColor = '#1f2937';
        } else {
            document.body.style.backgroundColor = '';
        }
    }, 0);
});

// 清理函数
onBeforeUnmount(() => {
    document.documentElement.classList.remove('using-dark-mode');
});
</script>

<style>
/* 确保暗模式生效的基本样式 */
:root {
    color-scheme: light;
}

:root.dark,
html.dark {
    color-scheme: dark;
    background-color: #1f2937;
    /* gray-800 */
}

body.dark-mode {
    background-color: #1f2937;
    /* gray-800 */
}

/* 确保所有标题和文本在暗色模式下显示为白色 */
.dark h1,
.dark h2,
.dark h3,
.dark h4,
.dark h5,
.dark h6,
.dark .text-gray-900 {
    color: white !important;
}

/* 暗色模式下其他文本颜色适配 */
.dark .text-gray-700 {
    color: #d1d5db !important;
    /* gray-300 */
}

.dark .text-gray-600 {
    color: #9ca3af !important;
    /* gray-400 */
}

/* 强制背景色适配暗色模式 */
.dark .bg-white {
    background-color: #1f2937 !important;
    /* gray-800 */
}

/* 强制边框颜色适配暗色模式 */
.dark .border-gray-200 {
    border-color: #374151 !important;
    /* gray-700 */
}

/* 系统暗色模式自动适配 */
@media (prefers-color-scheme: dark) {
    :root.using-dark-mode:not(.light) {
        background-color: #1f2937;
    }

    :root:not(.using-dark-mode) {
        color-scheme: dark;
    }
}
</style>
