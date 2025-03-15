<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Avatar 头像组件</h1>

        <!-- 基础展示 -->
        <section class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">基础用法</h2>
            <div class="flex items-center gap-4 flex-wrap">
                <Avatar :src="Image" size="md" />
                <Avatar :src="''" initials="ZK" size="md" />
                <Avatar size="md" />
            </div>
            <div class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                基础头像支持图片、文字缩写和默认占位符三种形式
            </div>
        </section>

        <!-- 不同尺寸 -->
        <section class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">不同尺寸</h2>
            <div class="flex items-end gap-4 flex-wrap">
                <div class="flex flex-col items-center">
                    <Avatar :src="Image" size="xs" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xs</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar :src="Image" size="sm" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">sm</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar :src="Image" size="md" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">md</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar :src="Image" size="lg" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">lg</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar :src="Image" size="xl" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xl</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar :src="Image" size="2xl" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">2xl</span>
                </div>
            </div>
        </section>

        <!-- 不同形状 -->
        <section class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">不同形状</h2>
            <div class="flex gap-8">
                <div class="flex flex-col items-center">
                    <Avatar :src="Image" size="lg"
                        shape="circle" />
                    <span class="mt-2 text-sm text-gray-500 dark:text-gray-400">圆形</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar :src="Image" size="lg"
                        shape="square" />
                    <span class="mt-2 text-sm text-gray-500 dark:text-gray-400">方形</span>
                </div>
            </div>
        </section>

        <!-- 边框效果 -->
        <section class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">边框效果</h2>
            <div class="flex gap-8">
                <div class="flex flex-col items-center">
                    <Avatar :src="Image" size="lg"
                        :bordered="false" />
                    <span class="mt-2 text-sm text-gray-500 dark:text-gray-400">无边框</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar :src="Image" size="lg"
                        :bordered="true" />
                    <span class="mt-2 text-sm text-gray-500 dark:text-gray-400">有边框</span>
                </div>
            </div>
        </section>

        <!-- 状态指示器 -->
        <section class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">状态指示器</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h3 class="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">顶部位置</h3>
                    <div class="flex gap-4 flex-wrap">
                        <div class="flex flex-col items-center">
                            <Avatar :src="Image" size="lg"
                                status="online" statusPosition="top-right" />
                            <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">在线</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <Avatar :src="Image" size="lg"
                                status="offline" statusPosition="top-right" />
                            <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">离线</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <Avatar :src="Image" size="lg"
                                status="busy" statusPosition="top-right" />
                            <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">忙碌</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <Avatar :src="Image" size="lg"
                                status="away" statusPosition="top-right" />
                            <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">离开</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">底部位置</h3>
                    <div class="flex gap-4 flex-wrap">
                        <div class="flex flex-col items-center">
                            <Avatar :src="Image" size="lg"
                                status="online" statusPosition="bottom-right" />
                            <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">在线</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <Avatar :src="Image" size="lg"
                                status="offline" statusPosition="bottom-right" />
                            <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">离线</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <Avatar :src="Image" size="lg"
                                status="busy" statusPosition="bottom-right" />
                            <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">忙碌</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <Avatar :src="Image" size="lg"
                                status="away" statusPosition="bottom-right" />
                            <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">离开</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 不同形状的状态指示器 -->
        <section class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">不同形状的状态指示器</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h3 class="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">圆形头像</h3>
                    <div class="flex gap-4 flex-wrap">
                        <div class="flex flex-col items-center">
                            <Avatar :src="Image" size="lg"
                                shape="circle" status="online" />
                            <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">在线</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">方形头像</h3>
                    <div class="flex gap-4 flex-wrap">
                        <div class="flex flex-col items-center">
                            <Avatar :src="Image" size="lg"
                                shape="square" status="online" />
                            <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">在线</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 文字头像 -->
        <section class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">文字头像</h2>
            <div class="flex items-end gap-4 flex-wrap">
                <div class="flex flex-col items-center">
                    <Avatar :src="''" initials="ZK" size="xs" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xs</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar :src="''" initials="ZK" size="sm" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">sm</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar :src="''" initials="ZK" size="md" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">md</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar :src="''" initials="ZK" size="lg" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">lg</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar :src="''" initials="ZK" size="xl" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xl</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar :src="''" initials="ZK" size="2xl" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">2xl</span>
                </div>
            </div>
        </section>

        <!-- 默认占位符 -->
        <section class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">默认占位符</h2>
            <div class="flex items-end gap-4 flex-wrap">
                <div class="flex flex-col items-center">
                    <Avatar size="xs" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xs</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar size="sm" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">sm</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar size="md" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">md</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar size="lg" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">lg</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar size="xl" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xl</span>
                </div>
                <div class="flex flex-col items-center">
                    <Avatar size="2xl" />
                    <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">2xl</span>
                </div>
            </div>
        </section>

        <!-- 资料卡片模式 -->
        <section class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">资料卡片模式</h2>
            <div class="space-y-4 max-w-md">
                <!-- 带名称和描述的资料卡片 -->
                <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Avatar :src="Image" name="张三"
                        description="前端工程师" size="md" profile @click="handleProfileClick" />
                </div>

                <!-- 只有名称的资料卡片 -->
                <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Avatar :src="Image" name="李四" size="md"
                        profile @click="handleProfileClick" />
                </div>

                <!-- 使用文字头像的资料卡片 -->
                <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Avatar :src="''" initials="WW" name="王五" description="产品经理" size="md" profile
                        @click="handleProfileClick" />
                </div>

                <!-- 使用默认占位符的资料卡片 -->
                <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Avatar name="匿名用户" description="游客" size="md" profile @click="handleProfileClick" />
                </div>
            </div>
        </section>

        <!-- 暗黑模式切换示例 -->
        <section class="mb-8">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">暗黑模式适配</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-6 bg-white rounded-lg shadow-sm">
                    <h3 class="text-lg font-medium mb-4 text-gray-800">亮色模式</h3>
                    <div class="flex gap-4 flex-wrap">
                        <Avatar :src="Image" size="md"
                            status="online" />
                        <Avatar :src="''" initials="ZK" size="md" />
                        <Avatar size="md" />
                    </div>
                </div>
                <div class="p-6 bg-gray-900 rounded-lg shadow-sm">
                    <h3 class="text-lg font-medium mb-4 text-white">暗黑模式</h3>
                    <div class="dark flex gap-4 flex-wrap">
                        <Avatar :src="Image" size="md"
                            status="online" />
                        <Avatar :src="''" initials="ZK" size="md" />
                        <Avatar size="md" />
                    </div>
                </div>
            </div>
        </section>

        <!-- API 文档部分 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">组件API</h2>
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
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">src</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">头像图片源</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">alt</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">图片替代文本</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">size</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'md'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">头像尺寸</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">shape</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'circle' | 'square'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'circle'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">头像形状</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">status</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'online' | 'offline' | 'busy' | 'away' | null</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">null</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">状态指示器</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">statusPosition</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'top-right' | 'bottom-right'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'top-right'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">状态指示器位置</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">initials</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">没有图片时显示的文字</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">name</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示名称（用于资料卡片）</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">description</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示描述（用于资料卡片）</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">bordered</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示边框</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">profile</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否以资料卡片模式显示</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">customClass</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义类</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">事件 (Events)</h3>
                <div class="overflow-x-auto">
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
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">click</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">点击头像或资料卡片时触发</td>
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
                        Avatar 组件是一个灵活且功能丰富的用户头像展示组件，适用于多种场景，如用户资料、评论区、团队成员展示等。
                        以下是一些使用建议：
                    </p>

                    <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        <li>根据界面布局选择合适的尺寸，较大的头像适用于个人主页，较小的头像适用于评论区或列表项</li>
                        <li>当没有用户图片时，使用 <code class="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">initials</code> 属性显示用户名缩写，提高识别度</li>
                        <li>通过 <code class="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">status</code> 属性展示用户在线状态，增强交互体验</li>
                        <li>在聊天应用中，结合 <code class="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">status</code> 和 <code class="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">statusPosition</code> 灵活设置状态指示器</li>
                        <li>使用 <code class="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">profile</code> 模式创建完整的用户信息卡片</li>
                        <li>在暗色主题中，边框可以帮助区分头像与背景，考虑使用 <code class="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">bordered</code> 属性</li>
                    </ul>

                    <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                        <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                            </svg>
                            暗色模式提示
                        </h4>
                        <p class="text-sm text-blue-700 dark:text-blue-300">
                            Avatar 组件已内置支持暗色模式，无需额外配置。只要在应用的根元素上添加 <code
                                class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">.dark</code> 类，
                            组件就会自动切换为暗色样式。头像的边框、背景色和文字颜色都会适应当前主题。
                        </p>
                    </div>

                    <p class="text-gray-700 dark:text-gray-300">
                        在设计系统中，Avatar 组件是建立用户界面中人物或实体表示的重要元素。
                        通过合理使用 Avatar 组件的各种特性，可以增强应用的社交属性和用户体验。
                    </p>

                    <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/30">
                        <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">实用配置示例</h4>
                        <pre class="overflow-x-auto rounded bg-gray-100 p-3 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
// 用户评论区的小头像
&lt;Avatar src="/user-avatar.jpg" size="sm" /&gt;

// 用户资料页面的大头像
&lt;Avatar src="/user-avatar.jpg" size="xl" bordered /&gt;

// 带在线状态的聊天头像
&lt;Avatar src="/user-avatar.jpg" status="online" /&gt;

// 用户资料卡片
&lt;Avatar 
  src="/user-avatar.jpg" 
  name="张三" 
  description="前端工程师" 
  profile 
  @click="handleProfileClick" 
/&gt;

// 无图片时显示文字缩写
&lt;Avatar :src="''" initials="ZK" /&gt;
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Avatar from '../../libs/Avatar/Avatar';
import Image from '@/assets/images/photo-1472099645785-5658abf4ff4e.jpeg'

// 处理资料卡片点击事件
const handleProfileClick = () => {
    console.log('资料卡片被点击');
};
</script>
