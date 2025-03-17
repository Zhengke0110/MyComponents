<template>
    <div class="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <h1 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Drawer 抽屉组件</h1>

        <!-- 基础用法展示部分 -->
        <section class="mb-10">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">基础用法</h2>
            <div class="flex flex-wrap gap-4">
                <button @click="openDrawer('right')"
                    class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    右侧抽屉
                </button>
                <button @click="openDrawer('left')"
                    class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                    左侧抽屉
                </button>
                <button @click="openDrawer('top')"
                    class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                    顶部抽屉
                </button>
                <button @click="openDrawer('bottom')"
                    class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors">
                    底部抽屉
                </button>
            </div>
        </section>

        <!-- 自定义尺寸展示部分 -->
        <section class="mb-10">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">自定义尺寸</h2>
            <div class="flex flex-wrap gap-4">
                <button @click="openSizeDrawer('small')"
                    class="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors">
                    小尺寸抽屉
                </button>
                <button @click="openSizeDrawer('medium')"
                    class="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors">
                    中等尺寸抽屉
                </button>
                <button @click="openSizeDrawer('large')"
                    class="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors">
                    大尺寸抽屉
                </button>
            </div>
        </section>

        <!-- 高级配置展示部分 -->
        <section class="mb-10">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">高级配置</h2>
            <div class="flex flex-wrap gap-4">
                <button @click="noMaskDrawer = true"
                    class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
                    无遮罩层抽屉
                </button>
                <button @click="notClosableDrawer = true"
                    class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
                    不可点击遮罩关闭
                </button>
                <button @click="withFooterDrawer = true"
                    class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
                    带底部抽屉
                </button>
            </div>
        </section>

        <!-- 嵌套内容展示部分 -->
        <section class="mb-10">
            <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">嵌套内容</h2>
            <button @click="nestedDrawer = true"
                class="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors">
                嵌套抽屉
            </button>
        </section>

        <!-- 各种Drawer实例 -->

        <!-- 基础位置抽屉 -->
        <Drawer v-model="drawerVisible" :placement="currentPlacement"
            :title="`${placementTitleMap[currentPlacement]}抽屉`">
            <div class="text-gray-800 dark:text-gray-200">
                <p>这是一个基础的抽屉组件，位置在{{ placementTitleMap[currentPlacement] }}</p>
                <div class="mt-4">
                    <p class="mb-2">抽屉组件特性：</p>
                    <ul class="list-disc pl-5">
                        <li>可以从四个方向滑入</li>
                        <li>支持自定义尺寸</li>
                        <li>可配置遮罩层和关闭行为</li>
                        <li>支持亮色和暗色模式</li>
                    </ul>
                </div>
            </div>
        </Drawer>

        <!-- 自定义尺寸抽屉 -->
        <Drawer v-model="sizeDrawerVisible" title="自定义尺寸抽屉" :size="currentSize" placement="right">
            <div class="text-gray-800 dark:text-gray-200">
                <p>这是一个{{ sizeTextMap[currentSizeType] }}尺寸的抽屉，宽度为 {{ currentSize }}</p>
                <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                    <p>抽屉大小可以通过传入不同的 size 属性来控制，可以是像素值或百分比。</p>
                </div>
            </div>
        </Drawer>

        <!-- 无遮罩层抽屉 -->
        <Drawer v-model="noMaskDrawer" title="无遮罩层抽屉" :mask="false">
            <div class="text-gray-800 dark:text-gray-200">
                <p>这个抽屉没有遮罩层，背景内容可见。</p>
                <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                    <p>在某些场景下，可能需要保持与背景内容的交互，此时可以设置 mask 为 false。</p>
                </div>
            </div>
        </Drawer>

        <!-- 不可点击遮罩关闭的抽屉 -->
        <Drawer v-model="notClosableDrawer" title="不可点击遮罩关闭" :maskClosable="false">
            <div class="text-gray-800 dark:text-gray-200">
                <p>点击遮罩层不会关闭这个抽屉。</p>
                <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                    <p>设置 maskClosable 为 false 可以防止用户通过点击遮罩层意外关闭抽屉。</p>
                </div>
            </div>
        </Drawer>

        <!-- 带底部的抽屉 -->
        <Drawer v-model="withFooterDrawer" title="带底部的抽屉" :showFooter="true">
            <div class="text-gray-800 dark:text-gray-200">
                <p>这个抽屉包含底部操作区域。</p>
                <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                    <p>可以在底部添加操作按钮或其他内容。</p>
                </div>
            </div>
            <template #footer>
                <div class="flex gap-2">
                    <button
                        class="px-4 py-2 bg-gray-200 text-gray-800 rounded dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        取消
                    </button>
                    <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        确认
                    </button>
                </div>
            </template>
        </Drawer>

        <!-- 嵌套抽屉 -->
        <Drawer v-model="nestedDrawer" title="嵌套抽屉示例" placement="right" size="400px">
            <div class="text-gray-800 dark:text-gray-200">
                <p>这个示例展示了如何在一个抽屉中打开另一个抽屉。</p>
                <div class="mt-6">
                    <button @click="innerDrawer = true"
                        class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                        打开内层抽屉
                    </button>
                </div>
            </div>

            <Drawer v-model="innerDrawer" title="内层抽屉" placement="right" size="300px">
                <div class="text-gray-800 dark:text-gray-200">
                    <p>这是嵌套在另一个抽屉内部的抽屉。</p>
                    <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                        <p>嵌套抽屉在复杂的交互场景中很有用，比如多层级的表单填写或者数据选择。</p>
                    </div>
                </div>
            </Drawer>
        </Drawer>

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
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">modelValue(v-model)</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">控制抽屉是否可见</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">title</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">抽屉标题</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">placement</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'left' | 'right' | 'top' |
                                    'bottom'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'right'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">抽屉弹出方向</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">size</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string | number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'300px'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">抽屉宽度或高度，取决于方向</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">closable</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示关闭按钮</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">mask</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示遮罩层</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">maskClosable</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">点击遮罩层是否可关闭抽屉</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">showFooter</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示底部区域</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">zIndex</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">1000</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">设置抽屉的 z-index</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">destroyOnClose</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">关闭时是否销毁子元素</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">lockScroll</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否在抽屉打开时锁定页面滚动</td>
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
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">update:modelValue</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(value: boolean)</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">抽屉打开状态改变时触发</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">open</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">抽屉打开动画开始时触发</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">close</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">抽屉关闭动画开始时触发</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">afterVisibleChange</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(visible: boolean)</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">抽屉打开/关闭动画结束后触发</td>
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
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">default</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">抽屉内容</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">title</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义标题区域</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">footer</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义底部内容</td>
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
                        Drawer 抽屉组件是一个从屏幕边缘滑入的浮层面板，可用于展示表单、详情或操作面板等内容，不会打断用户的主要操作流程。
                        以下是一些使用建议：
                    </p>

                    <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        <li>根据内容的类型和重要性选择合适的弹出方向，如表单操作通常使用右侧抽屉</li>
                        <li>合理设置抽屉的尺寸，既要保证内容展示完整，又不要占据过多屏幕空间</li>
                        <li>对于需要进行重要操作的场景，请设置 <code
                                class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-700">maskClosable</code>
                            为 <code class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-700">false</code> 防止用户误操作</li>
                        <li>利用插槽自定义标题和底部区域，增强交互体验</li>
                        <li>抽屉组件适合二级内容的展示，但不适合作为主要内容展示区域</li>
                    </ul>

                    <div
                        class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                        <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            暗色模式提示
                        </h4>
                        <p class="text-sm text-blue-700 dark:text-blue-300">
                            Drawer 组件已内置支持暗色模式，无需额外配置。只要在应用的根元素上添加 <code
                                class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">.dark</code> 类，
                            组件就会自动切换为暗色样式。所有颜色、背景和边框都会自动适配当前主题。
                        </p>
                    </div>

                    <h4 class="font-medium text-gray-900 dark:text-white mt-4">适合使用的场景：</h4>
                    <ul class="ml-6 list-disc space-y-1 text-gray-700 dark:text-gray-300">
                        <li>需要从侧面展示详情信息或操作表单</li>
                        <li>在移动端等窄屏设备上展示更多操作或内容</li>
                        <li>需要用户输入或查看临时性信息</li>
                        <li>作为复杂表单的补充界面</li>
                    </ul>

                    <h4 class="font-medium text-gray-900 dark:text-white mt-4">不适合使用的场景：</h4>
                    <ul class="ml-6 list-disc space-y-1 text-gray-700 dark:text-gray-300">
                        <li>展示简单、少量的信息（可以使用气泡框或普通对话框）</li>
                        <li>需要用户完整注意力的重要操作（应使用模态对话框）</li>
                        <li>主要内容展示（应该作为页面主体部分）</li>
                    </ul>

                    <p class="text-gray-700 dark:text-gray-300 mt-4">
                        在设计界面时，合理使用抽屉组件可以提升用户体验，减少页面切换成本，同时保持用户注意力的连续性。
                        Drawer 组件遵循 WAI-ARIA 规范设计，确保良好的可访问性，支持键盘导航和屏幕阅读器。
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Drawer from './Drawer';

// 基础抽屉控制
const drawerVisible = ref(false);
const currentPlacement = ref<'left' | 'right' | 'top' | 'bottom'>('right');
const placementTitleMap = {
    left: '左侧',
    right: '右侧',
    top: '顶部',
    bottom: '底部'
};

const openDrawer = (placement: 'left' | 'right' | 'top' | 'bottom') => {
    currentPlacement.value = placement;
    drawerVisible.value = true;
};

// 尺寸抽屉控制
const sizeDrawerVisible = ref(false);
const currentSizeType = ref<'small' | 'medium' | 'large'>('medium');
const sizeTextMap = {
    small: '小',
    medium: '中',
    large: '大'
};
const sizeMap = {
    small: '250px',
    medium: '400px',
    large: '600px'
};
const currentSize = computed(() => sizeMap[currentSizeType.value]);

const openSizeDrawer = (size: 'small' | 'medium' | 'large') => {
    currentSizeType.value = size;
    sizeDrawerVisible.value = true;
};

// 高级配置抽屉控制
const noMaskDrawer = ref(false);
const notClosableDrawer = ref(false);
const withFooterDrawer = ref(false);

// 嵌套抽屉控制
const nestedDrawer = ref(false);
const innerDrawer = ref(false);
</script>

<style scoped>
/* 添加一些过渡效果 */
.transition-colors {
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>