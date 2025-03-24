<template>
    <div class="py-8 space-y-12 transition-colors duration-300 dark:bg-gray-900">
        <!-- 标题 -->
        <div class="max-w-4xl mx-auto px-4">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">上传组件 Upload</h1>
            <p class="text-gray-600 dark:text-gray-300">文件选择上传和拖拽上传控件</p>
        </div>

        <!-- 基础上传示例 -->
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">基础用法</h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300">
                <Upload action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" @change="handleChange" />
            </div>
            <div class="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                点击上传按钮，选择文件并上传到服务器。
            </div>
        </div>

        <!-- 拖拽上传示例 -->
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">拖拽上传</h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300">
                <Upload action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" drag
                    @change="handleChange" />
            </div>
            <div class="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                将文件拖到指定区域，完成上传。
            </div>
        </div>

        <!-- 文件类型限制示例 -->
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">文件类型限制</h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300">
                <Upload action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    accept=".jpg,.jpeg,.png,.gif" @change="handleChange">
                    <div class="text-blue-500 dark:text-blue-400">仅接受图片文件</div>
                </Upload>
            </div>
            <div class="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                通过 accept 属性限制上传文件的类型。
            </div>
        </div>

        <!-- 多文件上传示例 -->
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">多文件上传</h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300">
                <Upload action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" multiple
                    @change="handleChange">
                    <div class="text-blue-500 dark:text-blue-400">可选择多个文件</div>
                </Upload>
            </div>
            <div class="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                设置 multiple 属性后可一次上传多个文件。
            </div>
        </div>

        <!-- 默认文件列表示例 -->
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">默认文件列表</h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300">
                <Upload action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    :default-file-list="defaultFiles" @change="handleChange" />
            </div>
            <div class="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                通过 defaultFileList 属性设置默认已上传的文件列表。
            </div>
        </div>

        <!-- 文件大小限制示例 -->
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">文件大小限制</h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300">
                <Upload action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" :max-size="1024 * 1024"
                    @change="handleChange" @exceed-size="handleExceedSize" />
            </div>
            <div class="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                通过 maxSize 属性限制上传文件的大小，此例中限制为 1MB。
            </div>
        </div>

        <!-- 禁用状态示例 -->
        <div class="max-w-4xl mx-auto px-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">禁用状态</h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300">
                <Upload action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" disabled
                    @change="handleChange" />
            </div>
            <div class="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                通过 disabled 属性禁用上传功能。
            </div>
        </div>

        <!-- 完整功能展示 -->
        <div class="max-w-4xl mx-auto px-4 mb-8">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">完整功能演示</h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300">
                <Upload action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" drag multiple
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" :max-size="5 * 1024 * 1024" @change="handleChange"
                    @success="handleSuccess" @error="handleError" @progress="handleProgress"
                    @exceed-size="handleExceedSize" @remove="handleRemove">
                    <template #drag>
                        <div class="text-blue-500 dark:text-blue-400 mt-4 animate-pulse">
                            拖拽文件到此处上传 (支持多文件)
                        </div>
                    </template>
                </Upload>
            </div>
            <div class="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                全功能演示，包含拖拽上传、多文件、文件类型和大小限制等特性。
            </div>
        </div>

        <!-- 小结与最佳实践 -->
        <div class="max-w-4xl mx-auto px-4 py-6 border-t border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">小结与最佳实践</h2>
            <div class="space-y-4 text-gray-600 dark:text-gray-300">
                <p>上传组件是用户与系统进行文件交互的重要媒介，合理的使用可以提升用户体验。以下是一些最佳实践：</p>
                <ul class="list-disc pl-6 space-y-2">
                    <li>
                        <strong class="text-gray-700 dark:text-gray-200">适当的文件限制</strong>：
                        根据业务需求设置合理的文件类型和大小限制，避免用户上传不适合的文件。
                    </li>
                    <li>
                        <strong class="text-gray-700 dark:text-gray-200">清晰的反馈</strong>：
                        提供上传过程中的状态反馈，如进度条、成功/失败提示等，增强用户信心。
                    </li>
                    <li>
                        <strong class="text-gray-700 dark:text-gray-200">灵活的上传方式</strong>：
                        针对不同场景提供不同的上传方式，如按钮上传适合单文件操作，拖拽上传更适合批量文件处理。
                    </li>
                    <li>
                        <strong class="text-gray-700 dark:text-gray-200">预览与管理</strong>：
                        对于已上传的文件，提供预览和管理功能，方便用户检查和操作。
                    </li>
                    <li>
                        <strong class="text-gray-700 dark:text-gray-200">错误处理</strong>：
                        妥善处理上传过程中可能出现的错误，并向用户提供清晰的错误信息和解决建议。
                    </li>
                </ul>
            </div>
        </div>

        <!-- API 文档 -->
        <div class="max-w-4xl mx-auto px-4 py-6 border-t border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-6">API 文档</h2>

            <!-- 属性表格 -->
            <div class="mb-8">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">属性</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    参数</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    说明</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    类型</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    默认值</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    action</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    上传的地址</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    string</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    -</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    accept</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    接受上传的文件类型</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    string</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    ''</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    multiple</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    是否支持多选文件</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    boolean</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    false</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    drag</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    是否启用拖拽上传</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    boolean</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    false</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    disabled</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    是否禁用</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    boolean</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    false</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    maxSize</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    限制上传文件大小（bytes）</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    number</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    0</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    defaultFileList</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    默认已上传的文件列表</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    UploadFile[]</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    []</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    headers</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    上传请求的headers</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    object</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {}</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    data</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    上传所需额外参数</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    object</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {}</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    withCredentials</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    支持发送cookie凭证信息</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    boolean</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    false</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    beforeUpload</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    上传文件之前的钩子函数</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    (file, fileList) => boolean | Promise</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    () => true</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    customRequest</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    自定义上传方法</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    (options) => void</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    undefined</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 事件表格 -->
            <div class="mb-8">
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">事件</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    事件名称</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    说明</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    回调参数</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    change</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    上传文件改变时的状态</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    { file, fileList }</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    success</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    文件上传成功时的回调</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    { response, file, fileList }</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    error</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    文件上传失败时的回调</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    { error, file, fileList }</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    progress</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    文件上传进度的回调</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    { percent, file, fileList }</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    exceed-size</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    文件大小超出限制的回调</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    file</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    remove</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    移除文件时的回调</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    file</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 插槽表格 -->
            <div>
                <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200 mb-3">插槽</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    插槽名称</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    说明</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    参数</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    default</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    上传按钮的内容</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    -</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    drag</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    拖拽上传区域的额外内容</td>
                                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    -</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- UploadFile 类型定义 -->
        <div class="max-w-4xl mx-auto px-4 py-6 border-t border-gray-200 dark:border-gray-700">
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">类型定义</h2>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
                <pre class="text-sm text-gray-700 dark:text-gray-300"><code>// UploadFile 类型
export interface UploadFile {
  uid: string;         // 文件唯一标识
  name: string;        // 文件名
  status?: 'ready' | 'uploading' | 'done' | 'error';  // 文件状态
  response?: any;      // 服务端响应内容
  url?: string;        // 文件URL
  size: number;        // 文件大小 (bytes)
  type: string;        // 文件类型
  percent?: number;    // 上传进度
}</code></pre>
            </div>
        </div>

        <!-- 上传状态提示 -->
        <div v-if="uploadMessage" class="fixed bottom-6 right-6 transition-all duration-300 transform">
            <div class="p-4 rounded-lg shadow-lg" :class="uploadMessageClass">
                <div class="flex items-center">
                    <i :class="uploadMessageIcon"></i>
                    <span class="ml-2">{{ uploadMessage }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import Upload, { UploadFile } from './Upload';

export default defineComponent({
    name: 'UploadView',
    components: {
        Upload
    },
    setup() {
        // 设置默认文件列表示例
        const defaultFiles = reactive<UploadFile[]>([
            {
                uid: '1',
                name: 'example.pdf',
                status: 'done',
                url: 'https://example.com/example.pdf',
                size: 1024 * 1024,
                type: 'application/pdf'
            },
            {
                uid: '2',
                name: 'sample.jpg',
                status: 'done',
                url: 'https://example.com/sample.jpg',
                size: 512 * 1024,
                type: 'image/jpeg'
            }
        ]);

        // 状态提示相关
        const uploadMessage = ref('');
        const uploadMessageClass = ref('');
        const uploadMessageIcon = ref('');

        // 显示提示信息的方法
        const showMessage = (message: string, type: 'success' | 'error' | 'info') => {
            uploadMessage.value = message;

            if (type === 'success') {
                uploadMessageClass.value = 'bg-green-500 text-white dark:bg-green-600';
                uploadMessageIcon.value = 'icon-[line-md--check-all] size-6';
            } else if (type === 'error') {
                uploadMessageClass.value = 'bg-red-500 text-white dark:bg-red-600';
                uploadMessageIcon.value = 'icon-[line-md--close-circle] size-6';
            } else {
                uploadMessageClass.value = 'bg-blue-500 text-white dark:bg-blue-600';
                uploadMessageIcon.value = 'icon-[line-md--information] size-6';
            }

            setTimeout(() => {
                uploadMessage.value = '';
            }, 3000);
        };

        // 处理各种事件
        const handleChange = (info: any) => {
            console.log('File status changed:', info);
        };

        const handleSuccess = (info: any) => {
            showMessage(`文件 ${info.file.name} 上传成功`, 'success');
        };

        const handleError = (info: any) => {
            showMessage(`文件 ${info.file.name} 上传失败`, 'error');
        };

        const handleProgress = (info: any) => {
            console.log(`Upload progress: ${info.percent}%`);
        };

        const handleExceedSize = (file: File) => {
            showMessage(`文件 ${file.name} 超出大小限制`, 'error');
        };

        const handleRemove = (file: UploadFile) => {
            showMessage(`文件 ${file.name} 已移除`, 'info');
        };

        return {
            defaultFiles,
            uploadMessage,
            uploadMessageClass,
            uploadMessageIcon,
            handleChange,
            handleSuccess,
            handleError,
            handleProgress,
            handleExceedSize,
            handleRemove
        };
    }
});
</script>

<style scoped>
.upload-container {
    width: 100%;
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

.slide-in {
    animation: slideInRight 0.3s ease-out forwards;
}

.slide-out {
    animation: slideOutRight 0.3s ease-in forwards;
}
</style>
