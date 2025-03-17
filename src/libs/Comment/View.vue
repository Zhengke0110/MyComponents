<template>
    <div class="p-6 transition-colors duration-300 ease-in-out bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Comment 评论组件</h1>

            <div class="space-y-10">
                <!-- 基础评论展示 -->
                <section class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">基础评论</h2>
                    <Comment :comments="basicComments" />
                </section>

                <!-- 多层嵌套评论 -->
                <section class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">嵌套评论</h2>
                    <div class="flex items-center mb-4">
                        <span class="text-gray-700 dark:text-gray-300 mr-2">嵌套样式:</span>
                        <label class="switch mr-4">
                            <input type="checkbox" v-model="nested">
                            <span class="slider round"></span>
                        </label>
                        <span class="text-sm text-gray-600 dark:text-gray-400">{{ nested ? '启用' : '禁用' }}</span>
                    </div>
                    <Comment :comments="nestedComments" :nested="nested" />
                </section>

                <!-- 头像样式 -->
                <section class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">头像样式</h2>
                    <div class="flex items-center mb-4 space-x-4">
                        <button @click="avatarShape = 'circle'" class="px-4 py-2 rounded-md transition-colors"
                            :class="avatarShape === 'circle' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'">
                            圆形头像
                        </button>
                        <button @click="avatarShape = 'square'" class="px-4 py-2 rounded-md transition-colors"
                            :class="avatarShape === 'square' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'">
                            方形头像
                        </button>
                    </div>
                    <Comment :comments="basicComments" :avatarShape="avatarShape" />
                </section>

                <!-- 自定义渲染 -->
                <section class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">自定义渲染</h2>
                    <Comment :comments="basicComments" :renderAvatar="renderCustomAvatar"
                        :renderActions="renderCustomActions" />
                </section>

                <!-- 点赞和删除交互 -->
                <section class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">交互功能演示</h2>
                    <div class="flex flex-wrap gap-4 mb-4">
                        <div class="flex items-center">
                            <span class="text-gray-700 dark:text-gray-300 mr-2">允许回复:</span>
                            <label class="switch">
                                <input type="checkbox" v-model="allowReply">
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <Comment :comments="interactiveComments" :allowReply="allowReply" @like="handleLike"
                        @delete="handleDelete" @reply="handleReply" @submit="handleSubmit" />
                </section>

                <!-- 加载状态 -->
                <section class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">加载状态</h2>
                    <div class="flex items-center mb-4">
                        <button @click="isLoading = !isLoading"
                            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                            {{ isLoading ? '停止加载' : '模拟加载' }}
                        </button>
                    </div>
                    <Comment :comments="basicComments" :loading="isLoading" />
                </section>

                <!-- 自定义评论输入区 -->
                <section class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">自定义评论输入</h2>
                    <Comment :comments="basicComments">
                        <template #commentInput>
                            <div
                                class="mt-4 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                                <h3 class="text-lg font-medium text-blue-800 dark:text-blue-300 mb-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M18 10c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm-8-5a1 1 0 100 2 1 1 0 000-2zm0 3a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    自定义评论输入框
                                </h3>
                                <div class="flex gap-3">
                                    <div
                                        class="w-10 h-10 rounded-full bg-blue-200 dark:bg-blue-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <span class="text-blue-700 dark:text-blue-300 font-bold">ME</span>
                                    </div>
                                    <div class="flex-1">
                                        <textarea v-model="customInput"
                                            class="w-full p-3 rounded-lg border border-blue-200 dark:border-blue-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all"
                                            placeholder="分享你的想法..." rows="3"></textarea>
                                        <div class="flex justify-between mt-2">
                                            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                请文明评论
                                            </div>
                                            <button
                                                class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors flex items-center"
                                                :class="{ 'opacity-50 cursor-not-allowed': !customInput.trim() }"
                                                :disabled="!customInput.trim()">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path
                                                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11h4a1 1 0 00.894-.553l3-6A1 1 0 0016 3h-1.586a1 1 0 00-.707.293l-2 2-4.586-4.586z" />
                                                </svg>
                                                发送
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </Comment>
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
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">comments</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">CommentData[]</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">[]</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">评论数据数组</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">avatarShape</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'circle' | 'square'</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'circle'</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">头像形状</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">nested</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否使用缩进样式显示嵌套评论</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">allowReply</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否允许回复评论</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">loading</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示加载状态</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">renderAvatar</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(comment: CommentData) => VNode</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">undefined</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义头像渲染函数</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">renderActions</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(comment: CommentData) => VNode[]</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">undefined</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义操作区域渲染函数</td>
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
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">reply</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(commentId: string)</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">用户点击回复按钮时触发</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">like</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(commentId: string)</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">用户点赞评论时触发</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">delete</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(commentId: string)</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">用户删除评论时触发</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">submit</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">({ content: string, replyTo: string | null })</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">用户提交评论或回复时触发</td>
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
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">commentInput</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义评论输入区域</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <!-- 数据结构说明 -->
                <section class="mb-10">
                    <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">数据结构说明</h2>
                    <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">CommentData 接口</h3>
                        <div class="mb-6 overflow-x-auto">
                            <table class="min-w-full border-collapse">
                                <thead>
                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                        <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">属性名</th>
                                        <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">类型</th>
                                        <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">必填</th>
                                        <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">id</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">评论唯一标识</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">author</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">作者名称</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">avatar</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">作者头像URL</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">content</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">评论内容</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">time</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">评论时间</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">likes</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">点赞数</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">liked</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">当前用户是否点赞</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">isAuthor</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否是原作者</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">allowDelete</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否允许删除</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">replyTo</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">{ id: string, author: string }</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">回复目标信息</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">children</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">CommentData[]</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                                        <td class="px-4 py-2 text-gray-700 dark:text-gray-300">子评论数组</td>
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
                                Comment 组件是一个功能全面的评论系统组件，适用于博客、社交媒体、产品评价等场景。
                                以下是一些使用建议：
                            </p>

                            <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                                <li>根据不同的应用场景选择适合的头像形状，
                                    <span class="inline-flex items-center">
                                        <div class="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 mr-1"></div>
                                        圆形头像适合社交媒体
                                    </span>
                                    或
                                    <span class="inline-flex items-center">
                                        <div class="w-5 h-5 rounded-md bg-gray-200 dark:bg-gray-700 mr-1"></div>
                                        方形头像适合专业平台
                                    </span>
                                </li>
                                <li>在深层嵌套评论时，可以考虑禁用嵌套样式以提高可读性</li>
                                <li>评论数据的 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">isAuthor</code> 字段可以用来突显原内容作者</li>
                                <li>使用 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">renderAvatar</code> 和 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">renderActions</code> 自定义评论外观</li>
                                <li>可以通过 <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">commentInput</code> 插槽定制评论输入区域</li>
                            </ul>

                            <div
                                class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                                <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
                                    <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
                                    深色模式支持
                                </h4>
                                <p class="text-sm text-blue-700 dark:text-blue-300">
                                    Comment 组件已内置支持暗色模式，无需额外配置。组件会自动适应 <code
                                        class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">.dark</code> 类，
                                    并调整所有内部元素的颜色和背景。包括评论区、回复框、按钮等，全部适配深色模式。
                                </p>
                            </div>

                            <p class="text-gray-700 dark:text-gray-300">
                                处理评论数据时，建议在服务端实现分页逻辑，避免一次性加载过多评论导致性能问题。
                                此外，针对敏感内容，可在服务端实现内容过滤，保障评论区的健康环境。
                            </p>

                            <div class="rounded-lg border border-amber-100 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-900/10">
                                <h4 class="mb-2 flex items-center text-amber-800 dark:text-amber-300">
                                    <span class="icon-[material-symbols--tips-and-updates-outline-rounded] mr-2 h-5 w-5"></span>
                                    提示
                                </h4>
                                <p class="text-sm text-amber-700 dark:text-amber-300">
                                    对于高交互场景，建议配合状态管理库(如Pinia)使用，以便更好地管理评论状态的变化，
                                    特别是在处理点赞、删除、回复等操作时，可以保持数据的一致性。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import Comment from './Comment';
import type { CommentData } from './types';

// 状态变量
const nested = ref(true);
const avatarShape = ref<'circle' | 'square'>('circle');
const allowReply = ref(true);
const isLoading = ref(false);
const customInput = ref('');
const interactiveComments = ref<CommentData[]>([
    {
        id: '1',
        author: '张三',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        content: '这是一条可交互的评论，你可以点赞、回复或删除它。',
        time: '刚刚',
        likes: 5,
        liked: false,
        allowDelete: true,
        isAuthor: false,
        children: []
    }
]);

// 基础评论数据
const basicComments = ref<CommentData[]>([
    {
        id: '1',
        author: '张三',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        content: '这个组件的设计非常棒，代码结构也很清晰！',
        time: '2小时前',
        likes: 15,
        liked: true,
        isAuthor: false,
    },
    {
        id: '2',
        author: '李四',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        content: '我发现了一个小问题，在移动设备上显示不太正常。',
        time: '昨天 14:30',
        likes: 8,
        liked: false,
        isAuthor: true,
    }
]);

// 嵌套评论数据
const nestedComments = ref<CommentData[]>([
    {
        id: '1',
        author: '张三',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        content: '这是一个关于嵌套评论的讨论。',
        time: '3天前',
        likes: 24,
        liked: false,
        isAuthor: true,
        children: [
            {
                id: '1-1',
                author: '李四',
                avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
                content: '我同意你的观点，确实如此！',
                time: '3天前',
                likes: 12,
                liked: true,
                replyTo: {
                    id: '1',
                    author: '张三'
                },
                children: [
                    {
                        id: '1-1-1',
                        author: '王五',
                        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
                        content: '这已经是三层嵌套了，我们可以测试更深的嵌套效果。',
                        time: '2天前',
                        likes: 6,
                        liked: false,
                        replyTo: {
                            id: '1-1',
                            author: '李四'
                        },
                        children: [
                            {
                                id: '1-1-1-1',
                                author: '赵六',
                                avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
                                content: '四层嵌套评论，看看效果如何。',
                                time: '1天前',
                                likes: 3,
                                liked: false,
                                replyTo: {
                                    id: '1-1-1',
                                    author: '王五'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                id: '1-2',
                author: '钱七',
                avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
                content: '这是另一个回复主评论的嵌套评论。',
                time: '2天前',
                likes: 8,
                liked: false,
                replyTo: {
                    id: '1',
                    author: '张三'
                }
            }
        ]
    }
]);

// 自定义头像渲染函数
const renderCustomAvatar = (comment: CommentData) => {
    const firstLetter = comment.author.charAt(0).toUpperCase();
    const colorClasses = {
        '张': 'bg-red-200 dark:bg-red-800 text-red-700 dark:text-red-200',
        '李': 'bg-blue-200 dark:bg-blue-800 text-blue-700 dark:text-blue-200',
        '王': 'bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-200',
        '赵': 'bg-purple-200 dark:bg-purple-800 text-purple-700 dark:text-purple-200',
        '钱': 'bg-yellow-200 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-200'
    };

    // @ts-ignore - 动态键索引
    const colorClass = colorClasses[comment.author.charAt(0)] || 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200';

    return h('div', {
        class: `w-10 h-10 rounded-full ${colorClass} flex items-center justify-center`,
    }, firstLetter);
};

// 自定义操作区渲染函数
const renderCustomActions = (comment: CommentData) => {
    return [
        h('button', {
            class: 'flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors',
        }, [
            h('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                class: 'h-4 w-4 mr-1',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor'
            }, [
                h('path', {
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-width': '2',
                    d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                })
            ]),
            '回复'
        ]),
        h('button', {
            class: 'flex items-center text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors ml-4',
        }, [
            h('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                class: 'h-4 w-4 mr-1',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor'
            }, [
                h('path', {
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-width': '2',
                    d: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
                })
            ]),
            '分享'
        ]),
        h('button', {
            class: 'flex items-center text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors ml-4',
        }, [
            h('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                class: 'h-4 w-4 mr-1',
                fill: 'none',
                viewBox: '0 0 24 24',
                stroke: 'currentColor'
            }, [
                h('path', {
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                    'stroke-width': '2',
                    d: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                })
            ]),
            '收藏'
        ])
    ];
};

// 事件处理函数
const handleLike = (commentId: string) => {
    // 查找并更新点赞状态
    const updateLike = (comments: CommentData[]): boolean => {
        for (const comment of comments) {
            if (comment.id === commentId) {
                comment.liked = !comment.liked;
                comment.likes = (comment.likes || 0) + (comment.liked ? 1 : -1);
                return true;
            }
            if (comment.children?.length) {
                if (updateLike(comment.children)) return true;
            }
        }
        return false;
    };

    updateLike(interactiveComments.value);
};

const handleDelete = (commentId: string) => {
    // 查找并删除评论
    const deleteComment = (comments: CommentData[]): boolean => {
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].id === commentId) {
                comments.splice(i, 1);
                return true;
            }
            if (comments[i].children?.length) {
                if (deleteComment(comments[i].children!)) return true;
            }
        }
        return false;
    };

    deleteComment(interactiveComments.value);
};

const handleReply = (commentId: string) => {
    console.log('回复评论:', commentId);
};

const handleSubmit = (data: { content: string, replyTo: string | null }) => {
    // 添加新评论或回复
    if (data.replyTo) {
        // 查找被回复的评论并添加回复
        const addReply = (comments: CommentData[], replyToId: string, content: string): boolean => {
            for (const comment of comments) {
                if (comment.id === replyToId) {
                    if (!comment.children) comment.children = [];
                    comment.children.push({
                        id: Date.now().toString(),
                        author: '当前用户',
                        avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
                        content: content,
                        time: '刚刚',
                        likes: 0,
                        liked: false,
                        allowDelete: true,
                        replyTo: {
                            id: comment.id,
                            author: comment.author
                        }
                    });
                    return true;
                }
                if (comment.children?.length) {
                    if (addReply(comment.children, replyToId, content)) return true;
                }
            }
            return false;
        };

        addReply(interactiveComments.value, data.replyTo, data.content);
    } else {
        // 添加新评论
        interactiveComments.value.push({
            id: Date.now().toString(),
            author: '当前用户',
            avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
            content: data.content,
            time: '刚刚',
            likes: 0,
            liked: false,
            allowDelete: true,
            children: []
        });
    }
};
</script>

<style scoped>
/* 切换开关样式 */
.switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
}

input:checked+.slider {
    background-color: #3b82f6;
}

input:focus+.slider {
    box-shadow: 0 0 1px #3b82f6;
}

input:checked+.slider:before {
    transform: translateX(24px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

/* 添加淡入淡出动画 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
}

/* 添加卡片悬浮效果 */
section {
    transition: all 0.3s ease;
}

section:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* 深色模式下的卡片悬浮效果 */
:global(.dark) section:hover {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}
</style>