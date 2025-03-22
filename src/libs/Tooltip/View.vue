<template>
    <div class="space-y-12 p-8">
        <h1 class="mb-8 text-3xl font-bold">Tooltip 文字提示组件</h1>
        <p class="mb-8 text-lg text-gray-600 dark:text-gray-300">
            Tooltip
            组件用于在用户悬停在元素上时显示提示信息，提高用户体验和界面可用性。支持自定义内容、多种显示位置和暗黑模式。
        </p>

        <!-- 基础用法 -->
        <section>
            <h2 class="mb-4 text-xl font-bold">基础用法</h2>
            <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <div class="flex items-center gap-6">
                    <Tooltip content="这是一个简单的提示">
                        <template #trigger>
                            <Button>悬停查看提示</Button>
                        </template>
                    </Tooltip>

                    <Tooltip content="默认使用问号图标作为触发器">
                        <!-- 使用默认问号图标 -->
                    </Tooltip>

                    <Tooltip content="带有标题的提示" title="温馨提示">
                        <template #trigger>
                            <Button type="success">带标题的提示</Button>
                        </template>
                    </Tooltip>
                </div>
                <div class="mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700">
                    <pre class="text-sm">{{ codeBasic }}</pre>
                </div>
            </div>
        </section>

        <!-- 不同方向的提示 -->
        <section>
            <h2 class="mb-4 text-xl font-bold">提示方向</h2>
            <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <div class="flex flex-wrap justify-center gap-4">
                    <Tooltip content="上方提示" position="top">
                        <template #trigger>
                            <Button type="secondary">上方显示</Button>
                        </template>
                    </Tooltip>

                    <Tooltip content="下方提示" position="bottom">
                        <template #trigger>
                            <Button type="secondary">下方显示</Button>
                        </template>
                    </Tooltip>

                    <div class="mt-2 w-full text-sm text-gray-500 dark:text-gray-400">
                        <p>注意：当空间不足时，Tooltip 会自动切换到合适的方向</p>
                    </div>
                </div>
                <div class="mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700">
                    <pre class="text-sm">{{ codePositions }}</pre>
                </div>
            </div>
        </section>

        <!-- 自定义内容 -->
        <section>
            <h2 class="mb-4 text-xl font-bold">自定义内容</h2>
            <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <div class="flex items-center gap-4">
                    <Tooltip position="bottom">
                        <template #trigger>
                            <Button type="success">产品详情</Button>
                        </template>
                        <template #content>
                            <div class="flex min-w-60 flex-col gap-2">
                                <h3 class="border-b pb-2 font-bold">高级智能手表</h3>
                                <p>全新一代智能手表，支持健康监测和运动追踪</p>
                                <div class="flex items-center gap-2">
                                    <span>⭐️</span>
                                    <span>4.8 评分 (128条评价)</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span>📅</span>
                                    <span>2024-05-10 发布</span>
                                </div>
                                <div class="items中心 flex gap-2 font-medium text-green-600">
                                    <span>💰</span>
                                    <span>¥1,299</span>
                                </div>
                            </div>
                        </template>
                    </Tooltip>

                    <Tooltip position="bottom">
                        <template #trigger>
                            <Button type="warning">用户信息</Button>
                        </template>
                        <template #content>
                            <div class="items中心 flex gap-3">
                                <div
                                    class="items中心 flex h-10 w-10 justify-center rounded-full bg-blue-500 font-bold text-white">
                                    JD
                                </div>
                                <div>
                                    <div class="font-medium">John Doe</div>
                                    <div class="text-xs text-gray-500 dark:text-gray-400">
                                        产品设计师
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Tooltip>
                </div>
                <div class="mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700">
                    <pre class="text-sm">{{ codeCustomContent }}</pre>
                </div>
            </div>
        </section>

        <!-- 自定义触发器 -->
        <section>
            <h2 class="mb-4 text-xl font-bold">自定义触发器</h2>
            <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <div class="items中心 flex flex-wrap gap-6">
                    <Tooltip content="图标触发的提示">
                        <template #trigger>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-6 w-6 cursor-pointer text-blue-500 hover:text-blue-600">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                            </svg>
                        </template>
                    </Tooltip>

                    <Tooltip content="文本链接提示">
                        <template #trigger>
                            <span class="cursor-pointer text-blue-500 underline hover:text-blue-600">
                                帮助文档
                            </span>
                        </template>
                    </Tooltip>

                    <Tooltip content="图片作为触发器">
                        <template #trigger>
                            <div
                                class="h-10 w-10 cursor-pointer overflow-hidden rounded transition-opacity hover:opacity-80">
                                <img src="https://placekitten.com/100/100" alt="猫咪图片"
                                    class="h-full w-full object-cover" />
                            </div>
                        </template>
                    </Tooltip>

                    <Tooltip content="自定义按钮作为触发器">
                        <template #trigger>
                            <button
                                class="rounded bg-purple-500 px-3 py-1 text-white transition-colors hover:bg-purple-600">
                                自定义按钮
                            </button>
                        </template>
                    </Tooltip>

                    <Tooltip content="默认触发器">
                        <!-- 使用默认的问号图标 -->
                    </Tooltip>
                </div>
                <div class="mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700">
                    <pre class="text-sm">{{ codeCustomTrigger }}</pre>
                </div>
            </div>
        </section>

        <!-- 不同偏移距离和触发方式 -->
        <section>
            <h2 class="mb-4 text-xl font-bold">偏移距离和触发方式</h2>
            <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <div class="items中心 mb-6 flex flex-wrap gap-4">
                    <h3 class="mb-2 w-full text-lg font-semibold">偏移距离</h3>
                    <Tooltip content="默认偏移 (10px)" position="top">
                        <template #trigger>
                            <Button type="info">默认偏移</Button>
                        </template>
                    </Tooltip>

                    <Tooltip content="较大偏移 (20px)" position="top" :offset="20">
                        <template #trigger>
                            <Button type="info">较大偏移 (20px)</Button>
                        </template>
                    </Tooltip>

                    <Tooltip content="更大偏移 (30px)" position="top" :offset="30">
                        <template #trigger>
                            <Button type="info">更大偏移 (30px)</Button>
                        </template>
                    </Tooltip>
                </div>

                <div class="mb-4">
                    <h3 class="mb-4 w-full text-lg font-semibold">触发方式</h3>
                    <div class="flex flex-wrap gap-4">
                        <Tooltip content="鼠标悬停时显示（默认）" trigger="hover">
                            <template #trigger>
                                <Button type="primary">悬停触发</Button>
                            </template>
                        </Tooltip>

                        <Tooltip content="点击时显示" trigger="click">
                            <template #trigger>
                                <Button type="danger">点击触发</Button>
                            </template>
                        </Tooltip>

                        <Tooltip content="聚焦时显示" trigger="focus">
                            <template #trigger>
                                <input type="text" placeholder="聚焦时显示提示"
                                    class="rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700" />
                            </template>
                        </Tooltip>
                    </div>
                </div>
                <div class="mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700">
                    <pre class="text-sm">{{ codeOffset }}</pre>
                </div>
            </div>
        </section>

        <!-- 智能位置调整 -->
        <section>
            <h2 class="mb-4 text-xl font-bold">智能位置调整</h2>
            <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <div class="items中心 mb-4 flex">
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        当屏幕空间不足时，Tooltip
                        会智能调整显示位置，确保内容始终可见。尝试将窗口滚动到边缘，或调整浏览器大小，观察提示框的位置变化。
                    </p>
                </div>
                <div class="items开始 flex h-48">
                    <div class="mt-2">
                        <Tooltip content="我在顶部时会自动避免被截断" position="top">
                            <template #trigger>
                                <Button type="warning">靠近顶部的元素</Button>
                            </template>
                        </Tooltip>
                    </div>
                </div>
                <div class="flex justify-end">
                    <Tooltip content="我会避免超出右侧边界" position="top">
                        <template #trigger>
                            <Button type="warning">靠近右侧的元素</Button>
                        </template>
                    </Tooltip>
                </div>
                <div class="mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700">
                    <pre class="text-sm">{{ codeSmartPosition }}</pre>
                </div>
            </div>
        </section>

        <!-- 复杂场景应用 -->
        <section>
            <h2 class="mb-4 text-xl font-bold">复杂场景应用</h2>
            <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <div class="flex flex-col gap-4">
                    <!-- 表单中的帮助提示 -->
                    <div class="items中心 flex gap-2">
                        <label for="username" class="min-w-32 text-gray-700 dark:text-gray-300">用户名</label>
                        <input id="username" type="text"
                            class="rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
                            placeholder="请输入用户名" />
                        <Tooltip content="用户名长度需要在3-20个字符之间，只能包含字母、数字和下划线">
                            <template #trigger>
                                <span class="cursor-pointer text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </template>
                        </Tooltip>
                    </div>

                    <!-- 表格中的数据说明 -->
                    <div class="mt-4">
                        <table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                            <thead>
                                <tr class="bg-gray-100 dark:bg-gray-700">
                                    <th class="border border-gray-300 p-2 text-left dark:border-gray-600">
                                        产品名称
                                    </th>
                                    <th class="text左 border border-gray-300 p-2 dark:border-gray-600">
                                        <div class="items中心 flex gap-1">
                                            <span>库存状态</span>
                                            <Tooltip content="绿色表示库存充足，黄色表示库存较低，红色表示缺货">
                                                <template #trigger>
                                                    <span class="cursor-pointer text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
                                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </span>
                                                </template>
                                            </Tooltip>
                                        </div>
                                    </th>
                                    <th class="border border-gray-300 p-2 text-left dark:border-gray-600">
                                        操作
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">
                                        智能手表 Pro
                                    </td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">
                                        <span class="inline-block h-3 w-3 rounded-full bg-green-500"></span>
                                    </td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">
                                        <Tooltip content="点击查看详细库存信息和历史变动">
                                            <template #trigger>
                                                <Button type="secondary" size="sm">查看详情</Button>
                                            </template>
                                        </Tooltip>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">
                                        无线耳机
                                    </td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">
                                        <span class="bg黄色-500 inline-block h-3 w-3 rounded-full"></span>
                                    </td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">
                                        <Tooltip content="点击查看详细库存信息和历史变动">
                                            <template #trigger>
                                                <Button type="secondary" size="sm">查看详情</Button>
                                            </template>
                                        </Tooltip>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700">
                    <pre class="text-sm">{{ codeComplexScenario }}</pre>
                </div>
            </div>
        </section>

        <!-- 深色模式切换 -->
        <section>
            <h2 class="mb-4 text-xl font-bold">深色模式切换</h2>
            <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <div class="items中心 flex gap-4">
                    <Button @click="toggleDarkMode" type="info" class="items中心 flex gap-2">
                        <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        切换{{ isDarkMode ? "浅色" : "深色" }}模式
                    </Button>
                    <Tooltip content="Tooltip 会自动适应当前主题模式，无需额外配置">
                        <template #trigger>
                            <span class="cursor-pointer text-blue-500 hover:text-blue-600">
                                查看效果
                            </span>
                        </template>
                    </Tooltip>
                </div>
                <div class="mt-6 rounded border bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
                        Tooltip
                        组件会自动检测并适应当前的主题模式，当网站切换到深色模式时，提示框会相应地调整颜色和样式。
                    </p>

                    <div class="flex gap-4">
                        <Tooltip content="深色模式下我会更换颜色">
                            <template #trigger>
                                <Button>查看深色模式适配</Button>
                            </template>
                        </Tooltip>

                        <Tooltip position="bottom">
                            <template #trigger>
                                <Button type="secondary">自定义内容示例</Button>
                            </template>
                            <template #content>
                                <div class="flex flex-col gap-2">
                                    <h3 class="font-bold">深色模式支持</h3>
                                    <p>此提示框在深色模式下会自动调整样式</p>
                                    <div class="rounded bg-gray-100 p-2 dark:bg-gray-700">
                                        <code class="text-xs">自动适配主题</code>
                                    </div>
                                </div>
                            </template>
                        </Tooltip>
                    </div>
                </div>
                <div class="mt-4 rounded bg-gray-100 p-3 dark:bg-gray-700">
                    <pre class="text-sm">{{ codeDarkMode }}</pre>
                </div>
            </div>
        </section>

        <!-- API 文档 -->
        <section>
            <h2 class="mb-4 text-xl font-bold">API 文档</h2>
            <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <div class="space-y-6">
                    <!-- 属性 Props -->
                    <div>
                        <h3 class="mb-3 text-lg font-semibold">属性 Props</h3>
                        <table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                            <thead>
                                <tr class="bg-gray-100 dark:bg-gray-700">
                                    <th class="border border-gray-300 p-2 text-left dark:border-gray-600">属性名</th>
                                    <th class="border border-gray-300 p-2 text-left dark:border-gray-600">类型</th>
                                    <th class="border border-gray-300 p-2 text-left dark:border-gray-600">默认值</th>
                                    <th class="border border-gray-300 p-2 text-left dark:border-gray-600">说明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">content</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">string</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">''</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">提示文本内容</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">position</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">
                                        'top' | 'right' | 'bottom' | 'left'
                                    </td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">'top'</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">提示框显示位置</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">offset</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">number</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">10</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">
                                        提示框与触发元素的偏移距离（像素）
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">title</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">string</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">undefined</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">提示框标题（可选）</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">trigger</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">
                                        'hover' | 'click' | 'focus'
                                    </td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">'hover'</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">触发提示显示的方式</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 插槽 Slots -->
                    <div>
                        <h3 class="mb-3 text-lg font-semibold">插槽 Slots</h3>
                        <table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                            <thead>
                                <tr class="bg-gray-100 dark:bg-gray-700">
                                    <th class="border border-gray-300 p-2 text-left dark:border-gray-600">插槽名</th>
                                    <th class="border border-gray-300 p-2 text-left dark:border-gray-600">说明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">trigger</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">
                                        触发提示的元素，默认为问号图标按钮
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">content</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">
                                        提示框内容，默认显示 content 属性设置的文本
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 事件 Events -->
                    <div>
                        <h3 class="mb-3 text-lg font-semibold">事件 Events</h3>
                        <table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                            <thead>
                                <tr class="bg-gray-100 dark:bg-gray-700">
                                    <th class="border border-gray-300 p-2 text-left dark:border-gray-600">事件名</th>
                                    <th class="border border-gray-300 p-2 text-left dark:border-gray-600">参数</th>
                                    <th class="border border-gray-300 p-2 text-left dark:border-gray-600">说明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">show</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">-</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">提示框显示时触发</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">hide</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">-</td>
                                    <td class="border border-gray-300 p-2 dark:border-gray-600">提示框隐藏时触发</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <!-- 小结与最佳实践 -->
        <section>
            <h2 class="mb-4 text-xl font-bold">小结与最佳实践</h2>
            <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">适用场景</h3>
                    <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                        <li>当需要为用户提供额外信息或帮助说明但又不想占用页面空间时</li>
                        <li>为表单字段提供说明，如格式要求、字符限制等</li>
                        <li>在复杂的数据表格中解释列头或数据含义</li>
                        <li>为功能按钮提供辅助说明，提升用户理解</li>
                        <li>在精简界面中隐藏不常用的详细信息</li>
                    </ul>

                    <h3 class="mt-6 text-lg font-semibold text-gray-800 dark:text-gray-200">最佳实践</h3>
                    <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                        <li>
                            <strong>简洁明了</strong>：提示内容应简洁明了，避免冗长的文本。如需展示大量信息，考虑使用其他组件如弹窗或抽屉。
                        </li>
                        <li>
                            <strong>位置选择</strong>：根据页面布局和可用空间选择合适的提示方向，一般上方和下方是最常用的方向。
                        </li>
                        <li>
                            <strong>触发方式</strong>：对于帮助信息，通常使用悬停触发；对于需要保持显示的信息，可使用点击触发；对于表单输入辅助信息，使用聚焦触发更合适。
                        </li>
                        <li>
                            <strong>避免滥用</strong>：不要在页面中过度使用 Tooltip，这会导致用户体验下降，只在真正需要额外解释的元素上使用。
                        </li>
                        <li>
                            <strong>保持一致性</strong>：在整个应用中，对类似元素使用一致的 Tooltip 样式和触发方式，提高用户的可预测性。
                        </li>
                        <li>
                            <strong>无障碍考虑</strong>：确保 Tooltip 可以通过键盘访问，并提供适当的 ARIA 属性以支持屏幕阅读器用户。
                        </li>
                    </ul>

                    <div class="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/30">
                        <h4 class="font-medium text-blue-700 dark:text-blue-300">提示</h4>
                        <p class="mt-1 text-blue-600 dark:text-blue-200">
                            Tooltip 组件会自动检测边界，确保提示内容始终可见。在设计界面时，无需担心靠近窗口边缘的元素显示不完整问题。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, defineComponent, h, computed, PropType } from "vue";
import Tooltip from "./Tooltip";

// Local Button component definition
const Button = defineComponent({
    props: {
        type: {
            type: String as PropType<
                "primary" | "secondary" | "success" | "warning" | "info" | "danger"
            >,
            default: "primary",
            validator: (value: string) =>
                [
                    "primary",
                    "secondary",
                    "success",
                    "warning",
                    "info",
                    "danger",
                ].includes(value),
        },
        size: {
            type: String as PropType<"sm" | "md" | "lg">,
            default: "md",
            validator: (value: string) => ["sm", "md", "lg"].includes(value),
        },
    },
    setup(props, { slots }) {
        const getButtonClasses = computed(() => {
            const baseClasses =
                "px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
            const sizeClasses = {
                sm: "px-2 py-1 text-sm",
                md: "px-4 py-2",
                lg: "px-6 py-3 text-lg",
            };
            const typeClasses = {
                primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
                secondary:
                    "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
                success:
                    "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
                warning:
                    "bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500",
                info: "bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-500",
                danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
            };

            return `${baseClasses} ${sizeClasses[props.size]} ${typeClasses[props.type]}`;
        });

        return () =>
            h("button", { class: getButtonClasses.value }, slots.default?.());
    },
});

const isDarkMode = ref(false);

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
};

// 示例代码片段
const codeBasic = `<Tooltip content="这是一个简单的提示">
  <template #trigger>
    <Button>悬停查看提示</Button>
  </template>
</Tooltip>

<!-- 使用默认问号图标 -->
<Tooltip content="默认使用问号图标作为触发器">
  <!-- 使用默认问号图标 -->
</Tooltip>

<!-- 带标题的提示 -->
<Tooltip content="带有标题的提示" title="温馨提示">
  <template #trigger>
    <Button type="success">带标题的提示</Button>
  </template>
</Tooltip>`;

const codePositions = `<Tooltip content="上方提示" position="top">
  <template #trigger>
    <Button type="secondary">上方显示</Button>
  </template>
</Tooltip>

<Tooltip content="右侧提示" position="right">
  <template #trigger>
    <Button type="secondary">右侧显示</Button>
  </template>
</Tooltip>

<Tooltip content="下方提示" position="bottom">
  <template #trigger>
    <Button type="secondary">下方显示</Button>
  </template>
</Tooltip>

<Tooltip content="左侧提示" position="left">
  <template #trigger>
    <Button type="secondary">左侧显示</Button>
  </template>
</Tooltip>

<!-- 当空间不足时，会自动切换方向 -->`;

const codeCustomContent = `<Tooltip position="bottom">
  <template #trigger>
    <Button type="success">产品详情</Button>
  </template>
  <template #content>
    <div class="flex flex-col gap-2 min-w-60">
      <h3 class="font-bold border-b pb-2">高级智能手表</h3>
      <p>全新一代智能手表，支持健康监测和运动追踪</p>
      <div class="flex items中心 gap-2">
        <span>⭐️</span>
        <span>4.8 评分 (128条评价)</span>
      </div>
      <div class="flex items中心 gap-2">
        <span>📅</span>
        <span>2024-05-10 发布</span>
      </div>
      <div class="flex items中心 gap-2 text-green-600 font-medium">
        <span>💰</span>
        <span>¥1,299</span>
      </div>
    </div>
  </template>
</Tooltip>`;

// 示例代码片段
const codeCustomTrigger = `<!-- 图标触发器 -->
<Tooltip content="图标触发的提示">
  <template #trigger>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 text-blue-500 hover:text-blue-600 cursor-pointer"
    >
      <!-- 图标路径 -->
    </svg>
  </template>
</Tooltip>

<!-- 文本触发器 -->
<Tooltip content="文本链接提示">
  <template #trigger>
    <span class="text-blue-500 hover:text-blue-600 cursor-pointer underline">
      帮助文档
    </span>
  </template>
</Tooltip>

<!-- 图片触发器 -->
<Tooltip content="图片作为触发器">
  <template #trigger>
    <div class="w-10 h-10 rounded overflow-hidden cursor-pointer hover:opacity-80">
      <img src="..." alt="触发图片" class="w-full h-full object-cover" />
    </div>
  </template>
</Tooltip>

<!-- 默认触发器 -->
<Tooltip content="默认触发器">
  <!-- 使用默认的问号图标 -->
</Tooltip>`;

// 示例代码片段
const codeOffset = `<!-- 偏移距离 -->
<Tooltip content="默认偏移 (10px)" position="top">
  <template #trigger>
    <Button type="info">默认偏移</Button>
  </template>
</Tooltip>

<Tooltip content="较大偏移 (20px)" position="top" :offset="20">
  <template #trigger>
    <Button type="info">较大偏移 (20px)</Button>
  </template>
</Tooltip>

<!-- 触发方式 -->
<Tooltip content="鼠标悬停时显示（默认）" trigger="hover">
  <template #trigger>
    <Button type="primary">悬停触发</Button>
  </template>
</Tooltip>

<Tooltip content="点击时显示" trigger="click">
  <template #trigger>
    <Button type="danger">点击触发</Button>
  </template>
</Tooltip>

<Tooltip content="聚焦时显示" trigger="focus">
  <template #trigger>
    <input type="text" placeholder="聚焦时显示提示" 
      class="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </template>
</Tooltip>`;

// 示例代码片段
const codeSmartPosition = `<!-- 靠近边缘时的智能调整 -->
<Tooltip content="我在顶部时会自动避免被截断" position="top">
  <template #trigger>
    <Button type="warning">靠近顶部的元素</Button>
  </template>
</Tooltip>

<Tooltip content="我会避免超出右侧边界" position="top">
  <template #trigger>
    <Button type="warning">靠近右侧的元素</Button>
  </template>
</Tooltip>`;

// 示例代码片段
const codeComplexScenario = `<!-- 表单帮助信息 -->
<div class="flex items中心 gap-2">
  <label for="username">用户名</label>
  <input id="username" type="text" class="px-3 py-2 border rounded" />
  <Tooltip content="用户名长度需要在3-20个字符之间，只能包含字母、数字和下划线">
    <template #trigger>
      <span class="cursor-pointer text-gray-500">
        <svg><!-- 信息图标 --></svg>
      </span>
    </template>
  </Tooltip>
</div>

<!-- 表格中的提示 -->
<table class="min-w-full border-collapse border">
  <thead>
    <tr>
      <th>产品名称</th>
      <th>
        <div class="flex items中心 gap-1">
          <span>库存状态</span>
          <Tooltip content="绿色表示库存充足，黄色表示库存较低，红色表示缺货">
            <template #trigger>
              <span class="cursor-pointer text-gray-500">
                <svg><!-- 信息图标 --></svg>
              </span>
            </template>
          </Tooltip>
        </div>
      </th>
      <th>操作</th>
    </tr>
  </thead>
  <!-- 表格内容... -->
</table>`;

// 示例代码片段
const codeDarkMode = `<!-- 深色模式自动适配 -->
<Tooltip content="深色模式下我会更换颜色">
  <template #trigger>
    <Button>查看深色模式适配</Button>
  </template>
</Tooltip>

<Tooltip position="bottom">
  <template #trigger>
    <Button type="secondary">自定义内容示例</Button>
  </template>
  <template #content>
    <div class="flex flex-col gap-2">
      <h3 class="font-bold">深色模式支持</h3>
      <p>此提示框在深色模式下会自动调整样式</p>
      <div class="p-2 bg-gray-100 dark:bg-gray-700 rounded">
        <code class="text-xs">自动适配主题</code>
      </div>
    </div>
  </template>
</Tooltip>`;
</script>

<style scoped>
/* 处理代码高亮显示 */
pre {
    white-space: pre-wrap;
    word-break: break-word;
    font-family:
        ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
        "Courier New", monospace;
}

/* Add button-specific styles if needed */
</style>
