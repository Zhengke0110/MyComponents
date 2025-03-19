<template>
    <div
        class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 transition-colors duration-500 dark:from-gray-900 dark:to-gray-800">
        <h1 class="mb-6 flex items-center text-4xl font-bold tracking-tight text-gray-800 dark:text-white">
            <span class="mr-4 text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </span>
            Switch
            <span class="ml-2 text-lg font-normal text-gray-500 dark:text-gray-400">开关选择器</span>
        </h1>
        <p class="mb-12 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300">
            Switch
            开关是一种用于在两种状态之间进行切换的精致控件。相比复选框，开关组件更直观、更优雅，能够立即触发状态变化，为用户提供即时的视觉反馈。
        </p>

        <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <!-- 基础用法展示区 -->
            <section
                class="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800">
                <h2 class="mb-6 flex items-center text-xl font-semibold text-gray-800 dark:text-white">
                    <div class="mr-3 h-6 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                    基础用法
                </h2>
                <div class="space-y-10">
                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            增强辨识度开关
                        </p>
                        <div class="mb-8 flex flex-wrap items-center gap-8">
                            <div class="rounded-lg bg-white p-4 shadow-sm">
                                <SwitchBox v-model="enhancedSwitchOn" />
                                <div class="mt-2 text-center text-xs text-gray-500">
                                    开启状态
                                </div>
                            </div>
                            <div class="rounded-lg bg-white p-4 shadow-sm">
                                <SwitchBox v-model="enhancedSwitchOff" />
                                <div class="mt-2 text-center text-xs text-gray-500">
                                    关闭状态
                                </div>
                            </div>
                            <div class="rounded-lg bg-gray-100 p-4">
                                <SwitchBox v-model="enhancedSwitchOn" />
                                <div class="mt-2 text-center text-xs text-gray-500">
                                    灰色背景
                                </div>
                            </div>
                            <div class="rounded-lg bg-blue-50 p-4">
                                <SwitchBox v-model="enhancedSwitchOff" />
                                <div class="mt-2 text-center text-xs text-gray-500">
                                    蓝色背景
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            默认开关
                        </p>
                        <div class="flex items-center space-x-8">
                            <SwitchBox v-model="basicSwitch" />
                            <span class="text-sm text-gray-600 dark:text-gray-300">当前状态: {{ basicSwitch ? "开启" : "关闭"
                            }}</span>
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            带文字
                        </p>
                        <div class="flex items-center space-x-8">
                            <SwitchBox v-model="textSwitch" checkedChildren="开" unCheckedChildren="关" />
                            <span class="text-sm text-gray-600 dark:text-gray-300">{{
                                textSwitch ? "已开启" : "已关闭"
                            }}</span>
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            文字宽度自适应
                        </p>
                        <div class="flex items-center space-x-8">
                            <SwitchBox v-model="longTextSwitch" checkedChildren="开启状态" unCheckedChildren="关闭状态" />
                            <span class="text-sm text-gray-600 dark:text-gray-300">更长的文字</span>
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            自定义值
                        </p>
                        <div class="flex items-center space-x-8">
                            <SwitchBox v-model="customValueSwitch" :checkedValue="'active'"
                                :unCheckedValue="'inactive'" />
                            <span class="text-sm text-gray-600 dark:text-gray-300">当前值: {{ customValueSwitch }}</span>
                        </div>
                    </div>

                    <!-- 新增效果：无缝切换 -->
                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            无缝动画切换
                        </p>
                        <div class="flex flex-wrap items-center gap-4">
                            <SwitchBox v-model="animatedSwitch"
                                class="transform transition-all duration-500 hover:scale-110" />
                            <div class="flex items-center space-x-2">
                                <div class="h-3 w-3 rounded-full transition-all duration-500" :class="animatedSwitch
                                    ? 'bg-blue-500'
                                    : 'bg-gray-300 dark:bg-gray-600'
                                    "></div>
                                <div class="h-3 w-3 rounded-full transition-all duration-500" :class="animatedSwitch
                                    ? 'bg-blue-500 delay-100'
                                    : 'bg-gray-300 dark:bg-gray-600'
                                    "></div>
                                <div class="h-3 w-3 rounded-full transition-all duration-500" :class="animatedSwitch
                                    ? 'bg-blue-500 delay-200'
                                    : 'bg-gray-300 dark:bg-gray-600'
                                    "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 尺寸与状态展示区 -->
            <section
                class="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800">
                <h2 class="mb-6 flex items-center text-xl font-semibold text-gray-800 dark:text-white">
                    <div class="mr-3 h-6 w-1.5 rounded-full bg-green-500 dark:bg-green-400"></div>
                    尺寸与状态
                </h2>
                <div class="space-y-10">
                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            不同尺寸
                        </p>
                        <div class="flex items-center space-x-8">
                            <div>
                                <SwitchBox size="default" v-model="defaultSizeSwitch" />
                                <span
                                    class="mt-2 block text-center text-xs text-gray-500 dark:text-gray-400">默认尺寸</span>
                            </div>
                            <div>
                                <SwitchBox size="small" v-model="smallSizeSwitch" />
                                <span class="mt-2 block text-center text-xs text-gray-500 dark:text-gray-400">小尺寸</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            带文字的尺寸
                        </p>
                        <div class="flex items-center space-x-8">
                            <div>
                                <SwitchBox size="default" v-model="defaultSizeTextSwitch" checkedChildren="ON"
                                    unCheckedChildren="OFF" />
                                <span
                                    class="mt-2 block text-center text-xs text-gray-500 dark:text-gray-400">默认尺寸</span>
                            </div>
                            <div>
                                <SwitchBox size="small" v-model="smallSizeTextSwitch" checkedChildren="开"
                                    unCheckedChildren="关" />
                                <span class="mt-2 block text-center text-xs text-gray-500 dark:text-gray-400">小尺寸</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            禁用状态
                        </p>
                        <div class="flex items-center space-x-8">
                            <SwitchBox v-model="disabledOnSwitch" disabled />
                            <SwitchBox v-model="disabledOffSwitch" disabled />
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            加载状态
                        </p>
                        <div class="flex items-center space-x-8">
                            <SwitchBox v-model="loadingOnSwitch" loading />
                            <SwitchBox v-model="loadingOffSwitch" loading />
                        </div>
                    </div>

                    <!-- 新增效果：鼠标悬停交互 -->
                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            悬停效果
                        </p>
                        <div class="flex items-center space-x-6">
                            <div class="group">
                                <SwitchBox v-model="hoverSwitch1"
                                    class="transition-all duration-300 group-hover:scale-110" />
                                <span
                                    class="mt-2 block text-center text-xs text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-gray-400">放大效果</span>
                            </div>
                            <div class="group">
                                <SwitchBox v-model="hoverSwitch2"
                                    class="shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 dark:shadow-gray-900/30 dark:group-hover:shadow-blue-500/10" />
                                <span
                                    class="mt-2 block text-center text-xs text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-gray-400">阴影效果</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 交互示例 -->
            <section
                class="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800">
                <h2 class="mb-6 flex items-center text-xl font-semibold text-gray-800 dark:text-white">
                    <div class="mr-3 h-6 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400"></div>
                    交互示例
                </h2>
                <div class="space-y-10">
                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            切换主题
                        </p>
                        <div class="flex items-center space-x-4">
                            <span class="text-sm text-gray-600 dark:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            </span>
                            <SwitchBox v-model="themeSwitcher" />
                            <span class="text-sm text-gray-600 dark:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            控制其他元素
                        </p>
                        <div class="flex flex-col space-y-4">
                            <div class="flex items-center space-x-4">
                                <SwitchBox v-model="controlCardSwitch" />
                                <span class="text-sm text-gray-600 dark:text-gray-300">显示卡片</span>
                            </div>
                            <div v-if="controlCardSwitch"
                                class="animate-fade-in rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                                <p class="text-blue-600 dark:text-blue-300">
                                    这是一个受控制的卡片
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            切换加载状态
                        </p>
                        <div class="flex items-center space-x-4">
                            <SwitchBox v-model="toggleLoadingSwitch" :loading="isLoadingSwitch"
                                @change="handleLoadingToggle" />
                            <span class="text-sm text-gray-600 dark:text-gray-300">{{
                                isLoadingSwitch ? "加载中..." : "点击切换"
                            }}</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 高级用法展示区 -->
            <section
                class="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800">
                <h2 class="mb-6 flex items-center text-xl font-semibold text-gray-800 dark:text-white">
                    <div class="mr-3 h-6 w-1.5 rounded-full bg-yellow-500 dark:bg-yellow-400"></div>
                    高级用法
                </h2>
                <div class="space-y-10">
                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            自定义插槽
                        </p>
                        <div class="flex items-center space-x-8">
                            <SwitchBox v-model="customSlotSwitch">
                                <template #checkedChildren>
                                    <span class="animate-pulse">YES</span>
                                </template>
                                <template #unCheckedChildren>
                                    <span class="animate-pulse">NO</span>
                                </template>
                            </SwitchBox>
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            表单集成
                        </p>
                        <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                            <div class="mb-4 flex items-center justify-between">
                                <span class="text-sm font-medium text-gray-700 dark:text-gray-200">通知设置</span>
                                <SwitchBox v-model="notificationSwitch" />
                            </div>
                            <div class="space-y-2 border-l-2 border-gray-200 pl-4 transition-all duration-300 dark:border-gray-600"
                                :class="{ 'opacity-50': !notificationSwitch }">
                                <div class="flex items-center justify-between">
                                    <span class="text-xs text-gray-600 dark:text-gray-300">电子邮件通知</span>
                                    <SwitchBox v-model="emailNotificationSwitch" size="small"
                                        :disabled="!notificationSwitch" />
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs text-gray-600 dark:text-gray-300">短信通知</span>
                                    <SwitchBox v-model="smsNotificationSwitch" size="small"
                                        :disabled="!notificationSwitch" />
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs text-gray-600 dark:text-gray-300">应用内通知</span>
                                    <SwitchBox v-model="appNotificationSwitch" size="small"
                                        :disabled="!notificationSwitch" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            数字数值控制
                        </p>
                        <div class="mb-2 flex items-center space-x-4">
                            <SwitchBox v-model="numberSwitch" :checkedValue="100" :unCheckedValue="0" />
                            <span class="text-lg font-medium text-gray-700 dark:text-gray-200">{{ numberSwitch }}</span>
                        </div>
                        <div class="h-2 rounded-full bg-gray-100 dark:bg-gray-700">
                            <div class="h-2 rounded-full bg-blue-500 transition-all duration-500"
                                :style="{ width: `${numberSwitch}%` }">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 新增：动画效果展示 -->
            <section
                class="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800">
                <h2 class="mb-8 flex items-center text-xl font-bold text-gray-800 dark:text-white">
                    <div
                        class="mr-3 h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-cyan-600 dark:from-cyan-300 dark:to-cyan-500">
                    </div>
                    动画效果
                </h2>

                <div class="space-y-10">
                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            脉冲动画
                        </p>
                        <div class="flex items-center space-x-6">
                            <SwitchBox v-model="pulseSwitch">
                                <template #checkedChildren>
                                    <span class="animate-pulse">ON</span>
                                </template>
                                <template #unCheckedChildren>
                                    <span class="animate-pulse">OFF</span>
                                </template>
                            </SwitchBox>

                            <div class="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500"
                                :class="pulseSwitch
                                    ? 'bg-blue-100 dark:bg-blue-900/30'
                                    : 'bg-gray-100 dark:bg-gray-700'
                                    ">
                                <div class="h-6 w-6 rounded-full transition-all duration-500" :class="pulseSwitch
                                    ? 'animate-pulse bg-blue-500 dark:bg-blue-400'
                                    : 'bg-gray-400 dark:bg-gray-600'
                                    "></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            波纹效果
                        </p>
                        <div class="flex items-center space-x-4">
                            <SwitchBox v-model="rippleSwitch" class="relative">
                                <div v-if="showRipple"
                                    class="absolute inset-0 animate-ping rounded-full bg-blue-500/20 dark:bg-blue-400/20">
                                </div>
                            </SwitchBox>

                            <button @click="triggerRipple"
                                class="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600 transition-colors duration-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                                点击触发波纹
                            </button>
                        </div>
                    </div>

                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            连锁反应
                        </p>
                        <div class="space-y-2">
                            <div class="flex space-x-3">
                                <SwitchBox v-model="chainReaction" @change="triggerChainReaction" />
                                <span class="text-sm text-gray-600 dark:text-gray-300">触发连锁反应</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <SwitchBox v-model="chainSwitch1" disabled />
                                <SwitchBox v-model="chainSwitch2" disabled />
                                <SwitchBox v-model="chainSwitch3" disabled />
                                <SwitchBox v-model="chainSwitch4" disabled />
                                <SwitchBox v-model="chainSwitch5" disabled />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 新增：实际应用场景 -->
            <section
                class="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800">
                <h2 class="mb-8 flex items-center text-xl font-bold text-gray-800 dark:text-white">
                    <div
                        class="mr-3 h-6 w-1 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 dark:from-amber-300 dark:to-amber-500">
                    </div>
                    实际场景
                </h2>

                <div class="space-y-10">
                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            设置面板
                        </p>
                        <div class="rounded-xl bg-gray-50 p-4 dark:bg-gray-700">
                            <div class="space-y-4">
                                <div
                                    class="flex items-center justify-between rounded-lg p-2 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center">
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-sm font-medium text-gray-700 dark:text-gray-200">
                                                自动锁定
                                            </p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">
                                                闲置5分钟后自动锁定应用
                                            </p>
                                        </div>
                                    </div>
                                    <SwitchBox v-model="settingSwitch1" />
                                </div>

                                <div
                                    class="flex items-center justify-between rounded-lg p-2 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center">
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-500 dark:bg-green-900/30 dark:text-green-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-sm font-medium text-gray-700 dark:text-gray-200">
                                                推送通知
                                            </p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">
                                                接收重要更新和提醒
                                            </p>
                                        </div>
                                    </div>
                                    <SwitchBox v-model="settingSwitch2" />
                                </div>

                                <div
                                    class="flex items-center justify-between rounded-lg p-2 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <div class="flex items-center">
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-500 dark:bg-purple-900/30 dark:text-purple-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-sm font-medium text-gray-700 dark:text-gray-200">
                                                高级安全
                                            </p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">
                                                启用两因素认证
                                            </p>
                                        </div>
                                    </div>
                                    <SwitchBox v-model="settingSwitch3" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 新增一个声音波形效果 -->
                    <div>
                        <p class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                            音频控制
                        </p>
                        <div class="mb-4 flex items-center space-x-4">
                            <SwitchBox v-model="audioSwitch" />
                            <div class="text-sm text-gray-700 dark:text-gray-300">
                                {{ audioSwitch ? "声音开启" : "静音" }}
                            </div>
                        </div>

                        <div class="flex h-16 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700">
                            <div class="flex items-center space-x-1">
                                <div v-for="n in 12" :key="n"
                                    class="w-1 rounded-full bg-blue-500 transition-all duration-300 ease-in-out dark:bg-blue-400"
                                    :class="audioSwitch ? 'animate-sound-wave' : 'h-2'" :style="{
                                        height: audioSwitch
                                            ? `${Math.sin(n * 0.5) * 15 + 20}px`
                                            : '8px',
                                        animationDelay: `${n * 60}ms`,
                                    }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 定制主题展示 -->
            <section
                class="col-span-1 rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md lg:col-span-2 dark:bg-gray-800">
                <h2 class="mb-6 flex items-center text-xl font-semibold text-gray-800 dark:text-white">
                    <div class="mr-3 h-6 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></div>
                    定制主题
                </h2>

                <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <!-- 亮色模式定制 -->
                    <div class="rounded-lg bg-white p-6 shadow-sm">
                        <h3 class="mb-6 text-lg font-medium text-gray-800">彩色开关主题</h3>
                        <div class="grid grid-cols-2 gap-6">
                            <div class="flex flex-col items-center">
                                <SwitchBox v-model="redSwitch" class="switch-red" />
                                <span class="mt-2 text-xs text-gray-500">红色主题</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <SwitchBox v-model="greenSwitch" class="switch-green" />
                                <span class="mt-2 text-xs text-gray-500">绿色主题</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <SwitchBox v-model="purpleSwitch" class="switch-purple" />
                                <span class="mt-2 text-xs text-gray-500">紫色主题</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <SwitchBox v-model="orangeSwitch" class="switch-orange" />
                                <span class="mt-2 text-xs text-gray-500">橙色主题</span>
                            </div>
                        </div>
                    </div>

                    <!-- 暗色模式定制 -->
                    <div class="rounded-lg bg-gray-900 p-6 shadow-sm">
                        <h3 class="mb-6 text-lg font-medium text-gray-200">
                            暗色模式自定义
                        </h3>
                        <div class="grid grid-cols-2 gap-6">
                            <div class="flex flex-col items-center">
                                <SwitchBox v-model="iconSwitch1" class="dark-theme-switch" checkedChildren="✓"
                                    unCheckedChildren="✗" />
                                <span class="mt-2 text-xs text-gray-400">图标开关</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <SwitchBox v-model="coloredDarkSwitch" class="dark-color-switch" />
                                <span class="mt-2 text-xs text-gray-400">渐变主题</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <SwitchBox v-model="emojiSwitch" checkedChildren="🌙" unCheckedChildren="☀️" />
                                <span class="mt-2 text-xs text-gray-400">主题切换</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <SwitchBox v-model="outlineSwitch" class="outline-switch" />
                                <span class="mt-2 text-xs text-gray-400">轮廓风格</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                class="col-span-1 mt-10 rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md lg:col-span-2 dark:bg-gray-800">
                <h2
                    class="mb-8 border-b border-gray-100 pb-3 text-2xl font-bold text-gray-800 dark:border-gray-700 dark:text-white">
                    组件总结
                </h2>

                <!-- 修改此处，从网格布局改为正常流式布局 -->
                <div class="space-y-6">
                    <div>
                        <h3 class="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                            使用场景
                        </h3>
                        <ul class="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                            <li>表示开关状态、打开或关闭</li>
                            <li>触发即时的状态变更操作</li>
                            <li>在设置选项中启用或禁用功能</li>
                            <li>需要用户进行二元选择的场景</li>
                            <li>替代单个复选框的使用场景</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                            设计建议
                        </h3>
                        <ul class="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
                            <li>开关应当提供即时反馈，状态变化清晰可见</li>
                            <li>推荐在右侧搭配文本说明开关的功能</li>
                            <li>在移动端使用时确保有足够大的点击区域</li>
                            <li>考虑使用颜色区分不同类型的开关功能</li>
                            <li>对于重要功能，可考虑添加切换确认</li>
                        </ul>
                    </div>
                </div>

                <!-- API速查 -->
                <div class="mt-8 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                    <h3 class="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                        API 速查表
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                            <thead>
                                <tr>
                                    <th
                                        class="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                        属性
                                    </th>
                                    <th
                                        class="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                        类型
                                    </th>
                                    <th
                                        class="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                        默认值
                                    </th>
                                    <th
                                        class="px-4 py-2 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                        说明
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 dark:divide-gray-600">
                                <tr>
                                    <td class="px-4 py-2 text-sm text-blue-600 dark:text-blue-400">
                                        modelValue
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                                        boolean | string | number
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                                        false
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                                        开关的值，可使用v-model绑定
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm text-blue-600 dark:text-blue-400">
                                        disabled
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                                        boolean
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                                        false
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                                        是否禁用
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 text-sm text-blue-600 dark:text-blue-400">
                                        size
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                                        string
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                                        'default'
                                    </td>
                                    <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                                        开关大小，可选 'default' 或 'small'
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section
                class="col-span-1 mt-10 rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md lg:col-span-2 dark:bg-gray-800">
                <h2
                    class="mb-6 border-b border-gray-200 pb-2 text-2xl font-bold text-gray-800 dark:border-gray-700 dark:text-white">
                    API 文档
                </h2>

                <div class="space-y-8">
                    <div>
                        <h3 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                            组件属性
                        </h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                            属性
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                            类型
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                            默认值
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                            说明
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            modelValue
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            boolean | string | number
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            false
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            开关的当前值。支持 v-model 绑定。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            checkedValue
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            boolean | string | number
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            true
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            选中时对应的值
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            unCheckedValue
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            boolean | string | number
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            false
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            未选中时对应的值
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            disabled
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            boolean
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            false
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            是否禁用开关
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            loading
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            boolean
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            false
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            是否显示加载中状态
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            size
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            string
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            'default'
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            开关大小，可选值：'small' 或 'default'
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            autofocus
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            boolean
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            false
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            是否自动获取焦点
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            checkedChildren
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            string
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            ''
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            选中时显示的文字
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            unCheckedChildren
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            string
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            ''
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            未选中时显示的文字
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            id
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            string
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            undefined
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            开关的唯一标识
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            name
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            string
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            undefined
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            表单字段名称
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h3 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                            事件
                        </h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                            事件名称
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                            说明
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                            回调参数
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            update:modelValue
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            当开关值变化时触发，支持v-model
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            (value: boolean | string | number)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            change
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            当开关值变化时触发
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            (value: boolean | string | number, event: Event)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            click
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            点击开关时触发
                                        </td>
                                        <td
                                            class="px-6 py-4 text-sm whitespace-nowrap text-gray-600 dark:text-gray-300">
                                            (value: boolean | string | number, event: MouseEvent)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h3 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                            插槽
                        </h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                            插槽名称
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                            说明
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            checkedChildren
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            开关处于选中状态时显示的内容
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 text-sm font-medium whitespace-nowrap text-blue-600 dark:text-blue-400">
                                            unCheckedChildren
                                        </td>
                                        <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            开关处于未选中状态时显示的内容
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h3 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                            使用示例
                        </h3>
                        <div class="mb-6 overflow-auto rounded-md bg-gray-50 p-4 dark:bg-gray-900">
                            <pre class="text-sm text-gray-700 dark:text-gray-300">
                    // 基础使用
                    &lt;SwitchBox v-model="switchValue" /&gt;

                    // 带文字的开关
                    &lt;SwitchBox v-model="switchValue" checkedChildren="开" unCheckedChildren="关" /&gt;

                    // 不同尺寸
                    &lt;SwitchBox v-model="switchValue" size="small" /&gt;
                    &lt;SwitchBox v-model="switchValue" size="default" /&gt;

                    // 加载状态
                    &lt;SwitchBox v-model="switchValue" loading /&gt;

                    // 禁用状态
                    &lt;SwitchBox v-model="switchValue" disabled /&gt;

                    // 自定义值
                    &lt;SwitchBox
                    v-model="status"
                    :checkedValue="'active'"
                    :unCheckedValue="'inactive'"
                    /&gt;

                    // 自定义插槽
                    &lt;SwitchBox v-model="switchValue"&gt;
                    &lt;template #checkedChildren&gt;
                    &lt;span class="animate-pulse"&gt;YES&lt;/span&gt;
                    &lt;/template&gt;
                    &lt;template #unCheckedChildren&gt;
                    &lt;span class="animate-pulse"&gt;NO&lt;/span&gt;
                    &lt;/template&gt;
                    &lt;/SwitchBox&gt;</pre>
                        </div>
                    </div>

                    <div>
                        <h3 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                            常见应用场景
                        </h3>
                        <div class="space-y-4 text-gray-700 dark:text-gray-300">
                            <p>
                                <strong class="text-gray-900 dark:text-white">1. 功能开关：</strong>
                                如开启/关闭通知、深色模式切换、隐私设置等场景。
                            </p>
                            <p>
                                <strong class="text-gray-900 dark:text-white">2. 表单选项：</strong>
                                在表单中作为启用/禁用某项功能的控件。
                            </p>
                            <p>
                                <strong class="text-gray-900 dark:text-white">3. 列表控制：</strong>
                                在数据列表中快速修改某行数据的状态。
                            </p>
                            <p>
                                <strong class="text-gray-900 dark:text-white">4. 条件显示：</strong>
                                控制界面元素的显示与隐藏。
                            </p>
                            <p>
                                <strong class="text-gray-900 dark:text-white">5. 系统设置：</strong>
                                应用程序或系统配置界面中进行功能控制。
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 class="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
                            注意事项
                        </h3>
                        <div
                            class="mb-6 rounded-md bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200">
                            <ul class="space-y-2">
                                <li>• 文字内容过长时应使用省略号或考虑其他组件</li>
                                <li>• 不要使用开关组件处理需要用户确认的重要操作</li>
                                <li>• 在禁用状态下保持足够的对比度，确保用户能感知组件状态</li>
                                <li>• 避免在同一界面使用过多风格迥异的开关组件</li>
                                <li>
                                    • 如需延迟生效的场景，应提供明确的提交按钮而非使用开关立即触发
                                </li>
                                <li>• 在移动端使用时，确保开关有足够大的可点击区域</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="col-span-1 mt-10 rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md lg:col-span-2 dark:bg-gray-800">
                <h2
                    class="mb-6 border-b border-gray-200 pb-2 text-2xl font-bold text-gray-800 dark:border-gray-700 dark:text-white">
                    小结与最佳实践
                </h2>
                <div class="space-y-6 text-gray-700 dark:text-gray-300">
                    <div>
                        <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                            <span class="mr-2 text-blue-500 dark:text-blue-400">•</span>何时使用开关组件
                        </h3>
                        <ul class="ml-5 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
                            <li>当需要表示开关状态（打开/关闭）时</li>
                            <li>需要立即响应用户操作并触发状态变更的场景</li>
                            <li>适合在设置面板中启用或禁用某个功能</li>
                            <li>作为单个复选框的替代，特别是在移动端界面中</li>
                            <li>需要对两种互斥状态进行直观切换的场景</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="dark:text白 mb-3 text-lg font-medium text-gray-900">
                            <span class="mr-2 text-green-500 dark:text-green-400">•</span>设计建议
                        </h3>
                        <ul class="ml-5 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
                            <li>确保开关状态在各种背景下都有足够的对比度，便于用户辨识</li>
                            <li>在开关旁提供明确的标签文本，解释开关控制的功能</li>
                            <li>对于重要功能的切换，考虑添加确认机制</li>
                            <li>使用动画和颜色变化提供即时的视觉反馈</li>
                            <li>在禁用状态下，保持开关可见但明确表示不可操作</li>
                            <li>保持一组开关的样式一致性，避免混合使用不同风格的开关</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                            <span class="mr-2 text-purple-500 dark:text-purple-400">•</span>无障碍设计
                        </h3>
                        <ul class="ml-5 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
                            <li>提供足够的颜色对比度，确保视觉障碍用户可以辨识状态变化</li>
                            <li>确保开关可通过键盘操作，支持Tab导航和空格键/回车键切换</li>
                            <li>
                                使用适当的ARIA属性（如aria-checked、aria-disabled），支持屏幕阅读器
                            </li>
                            <li>不仅依赖颜色传达状态，同时使用图标或文本辅助表示</li>
                            <li>确保开关旁的标签文本与开关元素正确关联，增强可访问性</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                            <span class="mr-2 text-yellow-500 dark:text-yellow-400">•</span>性能考量
                        </h3>
                        <ul class="ml-5 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
                            <li>
                                避免在短时间内频繁切换开关状态触发复杂操作，考虑使用节流或防抖
                            </li>
                            <li>对于需要加载状态的开关，使用加载指示器提高用户体验</li>
                            <li>当页面中有大量开关组件时，考虑按需渲染或虚拟滚动</li>
                            <li>CSS动画应适度使用，避免过于复杂的动画效果影响性能</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                            <span class="mr-2 text-red-500 dark:text-red-400">•</span>常见错误
                        </h3>
                        <ul class="ml-5 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
                            <li>未给开关提供足够的上下文，让用户难以理解开关的作用</li>
                            <li>在状态改变时没有提供充分的视觉反馈</li>
                            <li>开关太小或点击区域不够，影响移动设备上的操作体验</li>
                            <li>错误地将开关用于需要确认或多步骤的复杂操作</li>
                            <li>
                                在切换需要处理时间的任务时，未使用加载状态，导致用户体验不佳
                            </li>
                            <li>
                                忽略深色模式或高对比度模式下的适配，影响特定场景下的可用性
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import SwitchBox from "./SwitchBox";

// 基础用法
const basicSwitch = ref(true);
const textSwitch = ref(false);
const longTextSwitch = ref(true);
const customValueSwitch = ref("active");

// 尺寸与状态
const defaultSizeSwitch = ref(true);
const smallSizeSwitch = ref(true);
const defaultSizeTextSwitch = ref(true);
const smallSizeTextSwitch = ref(false);
const disabledOnSwitch = ref(true);
const disabledOffSwitch = ref(false);
const loadingOnSwitch = ref(true);
const loadingOffSwitch = ref(false);

// 交互示例
const themeSwitcher = ref(false);
const controlCardSwitch = ref(false);
const toggleLoadingSwitch = ref(false);
const isLoadingSwitch = ref(false);

// 高级用法
const customSlotSwitch = ref(true);
const notificationSwitch = ref(true);
const emailNotificationSwitch = ref(true);
const smsNotificationSwitch = ref(false);
const appNotificationSwitch = ref(true);
const numberSwitch = ref(50);

// 定制主题
const redSwitch = ref(true);
const greenSwitch = ref(true);
const purpleSwitch = ref(false);
const orangeSwitch = ref(true);
const iconSwitch1 = ref(true);
const coloredDarkSwitch = ref(true);
const emojiSwitch = ref(false);
const outlineSwitch = ref(true);

// 新增状态变量
const animatedSwitch = ref(false);
const hoverSwitch1 = ref(true);
const hoverSwitch2 = ref(true);
const pulseSwitch = ref(true);
const rippleSwitch = ref(false);
const showRipple = ref(false);
const chainReaction = ref(false);
const chainSwitch1 = ref(false);
const chainSwitch2 = ref(false);
const chainSwitch3 = ref(false);
const chainSwitch4 = ref(false);
const chainSwitch5 = ref(false);
const settingSwitch1 = ref(true);
const settingSwitch2 = ref(false);
const settingSwitch3 = ref(false);
const audioSwitch = ref(false);

// 墛强样式的开关状态
const enhancedSwitchOn = ref(true);
const enhancedSwitchOff = ref(false);

// 模拟加载过程
const handleLoadingToggle = () => {
    isLoadingSwitch.value = true;

    setTimeout(() => {
        isLoadingSwitch.value = false;
    }, 1500);
};

// 波纹效果
const triggerRipple = () => {
    rippleSwitch.value = !rippleSwitch.value;
    showRipple.value = true;
    setTimeout(() => {
        showRipple.value = false;
    }, 700);
};

// 链式反应
const triggerChainReaction = () => {
    if (chainReaction.value) {
        // 逐个开启
        setTimeout(() => {
            chainSwitch1.value = true;
        }, 200);
        setTimeout(() => {
            chainSwitch2.value = true;
        }, 400);
        setTimeout(() => {
            chainSwitch3.value = true;
        }, 600);
        setTimeout(() => {
            chainSwitch4.value = true;
        }, 800);
        setTimeout(() => {
            chainSwitch5.value = true;
        }, 1000);
    } else {
        // 逐个关闭
        setTimeout(() => {
            chainSwitch5.value = false;
        }, 200);
        setTimeout(() => {
            chainSwitch4.value = false;
        }, 400);
        setTimeout(() => {
            chainSwitch3.value = false;
        }, 600);
        setTimeout(() => {
            chainSwitch2.value = false;
        }, 800);
        setTimeout(() => {
            chainSwitch1.value = false;
        }, 1000);
    }
};

onMounted(() => {
    // 初始化展示一些动态效果
    setTimeout(() => {
        animatedSwitch.value = true;
    }, 1000);

    // 定期切换音频开关以展示动画
    setInterval(() => {
        audioSwitch.value = !audioSwitch.value;
    }, 5000);
});
</script>

<style scoped>
/* 自定义颜色主题 */
.switch-red :deep(.bg-blue-500) {
    background-color: #ef4444;
    /* bg-red-500 */
}

.switch-red :deep(.dark\:bg-blue-400) {
    background-color: #f87171;
    /* dark:bg-red-400 */
}

.switch-green :deep(.bg-blue-500) {
    background-color: #10b981;
    /* bg-green-500 */
}

.switch-green :deep(.dark\:bg-blue-400) {
    background-color: #34d399;
    /* dark:bg-green-400 */
}

.switch-purple :deep(.bg-blue-500) {
    background-color: #8b5cf6;
    /* bg-purple-500 */
}

.switch-purple :deep(.dark\:bg-blue-400) {
    background-color: #a78bfa;
    /* dark:bg-purple-400 */
}

.switch-orange :deep(.bg-blue-500) {
    background-color: #f97316;
    /* bg-orange-500 */
}

.switch-orange :deep(.dark\:bg-blue-400) {
    background-color: #fb923c;
    /* dark:bg-orange-400 */
}

/* 暗色主题自定义 */
.dark-theme-switch :deep(.bg-blue-500) {
    background-color: #1f2937;
    /* bg-gray-800 */
}

.dark-theme-switch :deep(.dark\:bg-blue-400) {
    background-color: #4b5563;
    /* dark:bg-gray-600 */
}

.dark-color-switch :deep(.dark\:bg-blue-400) {
    background-image: linear-gradient(to right, #6366f1, #a855f7);
}

.outline-switch :deep(.dark\:bg-blue-400) {
    background-color: transparent;
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.5);
}

/* 添加动画 */
.animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 进一步修复文字样式在不同主题下的显示问题 */
.switch-red :deep(.dark\:bg-blue-400),
.switch-green :deep(.dark\:bg-blue-400),
.switch-purple :deep(.dark\:bg-blue-400),
.switch-orange :deep(.dark\:bg-blue-400) {
    color: white;
}

/* 声音波形动画 */
@keyframes soundWave {

    0%,
    100% {
        transform: scaleY(0.5);
    }

    50% {
        transform: scaleY(1);
    }
}

.animate-sound-wave {
    animation: soundWave 1.5s ease-in-out infinite;
}

/* 卡片加载动画 */
@keyframes shimmer {
    0% {
        background-position: -468px 0;
    }

    100% {
        background-position: 468px 0;
    }
}

.loading-shimmer {
    background: linear-gradient(90deg,
            rgba(156, 163, 175, 0.1) 25%,
            rgba(156, 163, 175, 0.3) 50%,
            rgba(156, 163, 175, 0.1) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
}

.dark .loading-shimmer {
    background: linear-gradient(90deg,
            rgba(75, 85, 99, 0.1) 25%,
            rgba(75, 85, 99, 0.3) 50%,
            rgba(75, 85, 99, 0.1) 75%);
    background-size: 200% 100%;
}

/* 添加一些额外的样式来增强开关的可见性 */
:deep(.bg-gradient-to-r) {
    /* 墛强渐变效果 */
    background-size: 200% 100%;
    animation: gradientShift 2s ease infinite;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

/* 自定义颜色主题 - 墛强对比度 */
.switch-red :deep(.bg-blue-500),
.switch-red :deep(.from-blue-600),
.switch-red :deep(.from-blue-700),
.switch-red :deep(.to-blue-700),
.switch-red :deep(.to-blue-800) {
    background-color: #dc2626;
    /* 更深的红色 - bg-red-600 */
    background-image: none;
}

.switch-red :deep(.dark\:bg-blue-400),
.switch-red :deep(.dark\:from-blue-500),
.switch-red :deep(.dark\:from-blue-600),
.switch-red :deep(.dark\:to-blue-600),
.switch-red :deep(.dark\:to-blue-700) {
    background-color: #ef4444;
    /* dark:bg-red-500 */
    background-image: none;
}

.switch-green :deep(.bg-blue-500),
.switch-green :deep(.from-blue-600),
.switch-green :deep(.from-blue-700),
.switch-green :deep(.to-blue-700),
.switch-green :deep(.to-blue-800) {
    background-color: #059669;
    /* 更深的绿色 - bg-green-600 */
    background-image: none;
}

.switch-green :deep(.dark\:bg-blue-400),
.switch-green :deep(.dark\:from-blue-500),
.switch-green :deep(.dark\:from-blue-600),
.switch-green :deep(.dark\:to-blue-600),
.switch-green :deep(.dark\:to-blue-700) {
    background-color: #10b981;
    /* dark:bg-green-500 */
    background-image: none;
}

.switch-purple :deep(.bg-blue-500),
.switch-purple :deep(.from-blue-600),
.switch-purple :deep(.from-blue-700),
.switch-purple :deep(.to-blue-700),
.switch-purple :deep(.to-blue-800) {
    background-color: #7c3aed;
    /* 更深的紫色 - bg-purple-600 */
    background-image: none;
}

.switch-purple :deep(.dark\:bg-blue-400),
.switch-purple :deep(.dark\:from-blue-500),
.switch-purple :deep(.dark\:from-blue-600),
.switch-purple :deep(.dark\:to-blue-600),
.switch-purple :deep(.dark\:to-blue-700) {
    background-color: #8b5cf6;
    /* dark:bg-purple-500 */
    background-image: none;
}

.switch-orange :deep(.bg-blue-500),
.switch-orange :deep(.from-blue-600),
.switch-orange :deep(.from-blue-700),
.switch-orange :deep(.to-blue-700),
.switch-orange :deep(.to-blue-800) {
    background-color: #ea580c;
    /* 更深的橙色 - bg-orange-600 */
    background-image: none;
}

.switch-orange :deep(.dark\:bg-blue-400),
.switch-orange :deep(.dark\:from-blue-500),
.switch-orange :deep(.dark\:from-blue-600),
.switch-orange :deep(.dark\:to-blue-600),
.switch-orange :deep(.dark\:to-blue-700) {
    background-color: #f97316;
    /* dark:bg-orange-500 */
    background-image: none;
}

/* 暗色主题自定义 - 调整对比度 */
.dark-theme-switch :deep(.bg-blue-500),
.dark-theme-switch :deep(.from-blue-600),
.dark-theme-switch :deep(.from-blue-700),
.dark-theme-switch :deep(.to-blue-700),
.dark-theme-switch :deep(.to-blue-800) {
    background-color: #111827;
    /* 更深的灰色 - bg-gray-900 */
    background-image: none;
}

.dark-theme-switch :deep(.dark\:bg-blue-400),
.dark-theme-switch :deep(.dark\:from-blue-500),
.dark-theme-switch :deep(.dark\:from-blue-600),
.dark-theme-switch :deep(.dark\:to-blue-600),
.dark-theme-switch :deep(.dark\:to-blue-700) {
    background-color: #1f2937;
    /* dark:bg-gray-800 */
    background-image: none;
}

/* 渐变主题 - 强化渐变 */
.dark-color-switch :deep(.dark\:bg-blue-400),
.dark-color-switch :deep(.dark\:from-blue-500),
.dark-color-switch :deep(.dark\:to-blue-500) {
    background-image: linear-gradient(to right, #4f46e5, #7e22ce);
}

/* 添加一些额外的样式来增强开关的可见性 */
:deep(.bg-gradient-to-r) {
    /* 墛强渐变效果 */
    background-size: 200% 100%;
    animation: gradientShift 3s ease infinite;
}

/* 确保所有文字状态下都清晰可见 */
:deep(.text-gray-700),
:deep(.dark\:text-gray-200) {
    /* 墛强文字阴影，提高可读性 */
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
}

/* 其他样式保持不变 */

/* 自定义颜色主题 - 适配深蓝色按钮 */
.switch-red :deep(.bg-blue-700) {
    background-color: #b91c1c;
    /* bg-red-700 */
}

.switch-red :deep(.dark\:bg-blue-600) {
    background-color: #dc2626;
    /* dark:bg-red-600 */
}

.switch-green :deep(.bg-blue-700) {
    background-color: #047857;
    /* bg-green-700 */
}

.switch-green :deep(.dark\:bg-blue-600) {
    background-color: #059669;
    /* dark:bg-green-600 */
}

.switch-purple :deep(.bg-blue-700) {
    background-color: #6d28d9;
    /* bg-purple-700 */
}

.switch-purple :deep(.dark\:bg-blue-600) {
    background-color: #7c3aed;
    /* dark:bg-purple-600 */
}

.switch-orange :deep(.bg-blue-700) {
    background-color: #c2410c;
    /* bg-orange-700 */
}

.switch-orange :deep(.dark\:bg-blue-600) {
    background-color: #ea580c;
    /* dark:bg-orange-600 */
}

/* 进一步调整滑块与轨道的对比度关系 */
:deep(.bg-blue-700) {
    color: white;
}

/* 添加一个小图标演示 */
.switch-with-icon :deep(.bg-blue-700)::before,
.switch-with-icon :deep(.dark\:bg-blue-600)::before {
    content: "✓";
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
}
</style>
