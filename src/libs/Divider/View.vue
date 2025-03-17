<template>
    <div class="divider-demo p-6">
        <h2 class="text-xl font-bold mb-4 dark:text-white">基本使用</h2>

        <Divider />

        <h2 class="text-xl font-bold my-4 dark:text-white">带文字的分割线</h2>

        <Divider>默认居中</Divider>
        <Divider align="left">左对齐</Divider>
        <Divider align="right">右对齐</Divider>

        <h2 class="text-xl font-bold my-4 dark:text-white">自定义样式</h2>

        <Divider dashed />
        <Divider :borderWidth="2" borderColor="#1890ff">自定义颜色和宽度</Divider>
        <Divider dashed plain>虚线和普通文本</Divider>

        <h2 class="text-xl font-bold my-4 dark:text-white">垂直分割线</h2>

        <div class="h-10 flex items-center">
            文本
            <Divider type="vertical" />
            <a href="#" class="text-blue-500">链接</a>
            <Divider type="vertical" />
            <a href="#" class="text-blue-500">链接</a>
        </div>

        <h2 class="text-xl font-bold my-4 dark:text-white">带动画效果</h2>

        <Divider animated>鼠标悬停动画</Divider>
        <Divider animated="always">持续动画</Divider>
        <Divider animated="hover">交互动画</Divider>
        
        <h2 class="text-xl font-bold my-4 dark:text-white">方向与边距</h2>
        
        <Divider orientation="left" :orientationMargin="20">左侧定制边距</Divider>
        <Divider orientation="right" orientationMargin="40px">右侧定制边距</Divider>
        
        <h2 class="text-xl font-bold my-4 dark:text-white">主题设置</h2>
        
        <Divider theme="light">浅色主题</Divider>
        <Divider theme="dark">深色主题</Divider>
        <Divider theme="auto">自动主题（跟随系统）</Divider>

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
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">type</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'horizontal' | 'vertical'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'horizontal'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">分割线类型：水平或垂直</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">align</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'left' | 'right' | 'center'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'center'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">文本对齐方式（水平分割线）</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">dashed</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否使用虚线</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">plain</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">文字是否为普通样式</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">borderWidth</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number | string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">1</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">分割线宽度</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">borderStyle</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'solid'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">边框样式</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">borderColor</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">边框颜色</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">animated</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean | 'hover' | 'always'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">动画效果类型</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">animationDuration</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">300</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">动画持续时间（毫秒）</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">theme</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'light' | 'dark' | 'auto'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'auto'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">主题样式</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">orientation</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'center' | 'left' | 'right'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'center'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">文本定位方向</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">orientationMargin</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string | number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">0</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">文本定位边距</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">className</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义容器类名</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">textClassName</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义文本类名</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">styles</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">CSSProperties</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">{}</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义行内样式</td>
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
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">分割线中间的内容</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- 主题设置工具使用说明 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">主题设置与暗色模式</h2>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    Divider 组件内置了对暗色模式的支持，可通过以下方式控制：
                </p>

                <div class="mb-4">
                    <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">1. 使用 theme 属性</h3>
                    <p class="mb-2 text-sm text-gray-600 dark:text-gray-300">
                        直接在组件上设置 <code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">theme</code> 属性：
                    </p>
                    <ul class="ml-5 list-disc space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li><code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">light</code> - 始终使用浅色主题</li>
                        <li><code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">dark</code> - 始终使用深色主题</li>
                        <li><code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">auto</code> - 根据页面的 <code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">dark</code> 类自动切换</li>
                    </ul>
                </div>

                <div class="mb-4">
                    <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">2. 使用全局暗色模式</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        当 <code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">theme="auto"</code> 时，组件会检测页面根元素是否有 <code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">dark</code> 类，并自动应用对应样式。
                    </p>
                </div>

                <div
                    class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                    <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
                        <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
                        暗色模式提示
                    </h4>
                    <p class="text-sm text-blue-700 dark:text-blue-300">
                        使用全局主题API可以轻松切换暗色模式：<code
                            class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">toggleDark()</code>
                        函数或 <code
                            class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">isDark.value</code>
                        响应式变量。
                    </p>
                </div>
            </div>
        </section>

        <!-- 小结与最佳实践 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">小结与最佳实践</h2>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <div class="space-y-4">
                    <p class="text-gray-700 dark:text-gray-300">
                        Divider 分割线组件是一个简单但实用的布局辅助组件，可用于内容分区、视觉分隔和信息层级划分。
                        以下是一些使用建议：
                    </p>

                    <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        <li>使用水平分割线（<code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">type="horizontal"</code>）分隔不同章节的内容</li>
                        <li>使用垂直分割线（<code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">type="vertical"</code>）分隔行内元素，如操作按钮</li>
                        <li>为长文本内容设置带文字的分割线，提高内容的可读性和结构化</li>
                        <li>在信息密集的界面使用<code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">dashed</code>虚线样式，减轻视觉负担</li>
                        <li>利用<code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">align</code>或<code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">orientation</code>属性调整文字位置，增强布局的灵活性</li>
                    </ul>

                    <div class="rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
                        <h4 class="mb-2 flex items-center text-gray-700 dark:text-gray-300">
                            <span class="icon-[material-symbols--tips-and-updates-outline-rounded] mr-2 h-5 w-5"></span>
                            设计建议
                        </h4>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            保持分割线的视觉一致性对于建立清晰的信息层级至关重要。建议：
                        </p>
                        <ul class="mt-2 ml-5 list-disc space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li>在同一页面中保持分割线样式的一致性</li>
                            <li>使用细线（1px）作为默认宽度，保持界面的轻量感</li>
                            <li>为相关内容组使用相同样式的分割线</li>
                            <li>考虑在深色模式下适当降低分割线的对比度</li>
                        </ul>
                    </div>

                    <p class="text-gray-700 dark:text-gray-300">
                        分割线虽然简单，但在布局设计中起着重要的结构化作用。合理使用分割线可以有效提升内容的可读性和页面的整体层次感。
                    </p>

                    <div class="rounded-lg border border-green-100 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/20">
                        <h4 class="mb-2 flex items-center text-green-800 dark:text-green-300">
                            <span class="icon-[material-symbols--check-circle-outline-rounded] mr-2 h-5 w-5"></span>
                            可访问性提示
                        </h4>
                        <p class="text-sm text-green-700 dark:text-green-300">
                            Divider 组件已内置 <code class="rounded bg-green-100 px-1 py-0.5 font-mono dark:bg-green-800/60">role="separator"</code> 和 
                            <code class="rounded bg-green-100 px-1 py-0.5 font-mono dark:bg-green-800/60">aria-orientation</code> 属性，
                            符合 WCAG 可访问性标准，帮助屏幕阅读器用户理解页面结构。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Divider from './Divider'

export default defineComponent({
    name: 'DividerDemo',
    components: {
        Divider
    }
})
</script>

<style>
.divider-animated:hover {
    opacity: 0.8;
    transform: scaleY(1.2);
}

.divider-animated-hover:hover {
    opacity: 0.8;
    transform: scaleY(1.2);
}

.divider-animated-always {
    animation: divider-pulse 2s infinite alternate;
}

@keyframes divider-pulse {
    0% {
        opacity: 0.7;
    }
    100% {
        opacity: 1;
    }
}

.divider-horizontal {
    border-top-width: 1px;
    border-top-style: inherit;
    border-color: rgba(0, 0, 0, 0.1);
}

.divider-vertical {
    height: 1em;
    border-left-width: 1px;
    border-left-style: inherit;
    border-color: rgba(0, 0, 0, 0.1);
}

.dark .divider-horizontal,
.dark .divider-vertical {
    border-color: rgba(255, 255, 255, 0.1);
}

.divider-dark {
    border-color: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.85);
}

.divider-dark .divider-text {
    color: rgba(255, 255, 255, 0.85);
}
</style>
