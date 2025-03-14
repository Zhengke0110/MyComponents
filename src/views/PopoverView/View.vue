<template>
  <div class="p-8 space-y-12">
    <!-- 基础用法和触发方式 -->
    <section class="space-y-4">
      <div class="mb-6">
        <h2 class="text-xl font-bold mb-1">基础用法</h2>
        <p class="text-gray-500 dark:text-gray-400 text-sm">展示了基本的悬浮和点击触发效果</p>
      </div>
      <div class="flex flex-wrap gap-6">
        <Popover arrow>
          <template #reference>
            <Button>默认悬浮</Button>
          </template>
          这是一个基础的 Popover
        </Popover>

        <Popover trigger="click" arrow>
          <template #reference>
            <Button variant="outline">点击触发</Button>
          </template>
          点击触发的 Popover
        </Popover>
      </div>
    </section>

    <!-- 位置示例 -->
    <section class="space-y-4">
      <div class="mb-6">
        <h2 class="text-xl font-bold mb-1">弹出位置</h2>
        <p class="text-gray-500 dark:text-gray-400 text-sm">支持12个不同的弹出位置</p>
      </div>
      <div class="grid gap-8">
        <!-- 基础位置 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Popover v-for="placement in ['top', 'right', 'bottom', 'left'] as const" :key="placement"
            :placement="placement" arrow>
            <template #reference>
              <Button block variant="soft">{{ placement }} 方向</Button>
            </template>
            {{ placement }} 位置的 Popover
          </Popover>
        </div>

        <!-- 对齐方式 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Popover v-for="align in ['-start', '', '-end']" :key="align" :placement="(`top${align}`) as PlacementType"
            arrow>
            <template #reference>
              <Button block variant="outline">
                top{{ align || '-center' }}
              </Button>
            </template>
            对齐方式: {{ align || 'center' }}
          </Popover>
        </div>
      </div>
    </section>

    <!-- 主题展示 -->
    <section class="space-y-4">
      <div class="mb-6">
        <h2 class="text-xl font-bold mb-1">主题与变体</h2>
        <p class="text-gray-500 dark:text-gray-400 text-sm">展示不同的主题颜色和风格变体</p>
      </div>

      <!-- 主题色分组展示 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="variant in ['solid', 'light', 'glass'] as const" :key="variant" class="space-y-4">
          <h3 class="font-medium capitalize text-gray-700 dark:text-gray-300">
            {{ variant }} 风格
          </h3>
          <!-- 每组显示代表性的颜色 -->
          <div class="grid grid-cols-2 gap-3">
            <Popover v-for="color in ['blue', 'red', 'green', 'purple'] as const" :key="color" :theme="color"
              :variant="variant" arrow placement="right">
              <template #reference>
                <Button :type="color" size="sm" block>{{ color }}</Button>
              </template>
              <div class="text-sm">
                {{ variant }} 风格的 {{ color }} 主题
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section class="space-y-4">
      <div class="mb-6">
        <h2 class="text-xl font-bold mb-1">自定义样式</h2>
        <p class="text-gray-500 dark:text-gray-400 text-sm">通过不同方式自定义 Popover 的样式</p>
      </div>
      <div class="flex flex-wrap gap-6">
        <Popover backgroundColor="rgba(219, 234, 254, 0.9)" darkBackgroundColor="rgba(30, 64, 175, 0.5)" arrow>
          <template #reference>
            <Button>自定义背景色</Button>
          </template>
          使用背景色属性设置样式
        </Popover>

        <Popover customClass="bg-gradient-to-r from-sky-500/90 to-indigo-500/90 text-white" arrow>
          <template #reference>
            <Button variant="outline">渐变背景</Button>
          </template>
          使用 Tailwind 类创建渐变效果
        </Popover>

        <Popover contentClass="w-64 p-0 overflow-hidden rounded-lg" persistent>
          <template #reference>
            <Button variant="soft">复杂内容</Button>
          </template>
          <div class="divide-y divide-gray-100 dark:divide-gray-800">
            <div class="p-4 bg-blue-50/50 dark:bg-blue-900/30">
              <h3 class="font-medium">自定义内容区域</h3>
            </div>
            <div class="p-4">
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                支持任意的自定义内容和样式组合
              </p>
              <div class="flex justify-end">
                <Button size="sm" variant="outline">操作按钮</Button>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </section>

    <!-- 交互行为 -->
    <section class="space-y-4">
      <div class="mb-6">
        <h2 class="text-xl font-bold mb-1">交互行为</h2>
        <p class="text-gray-500 dark:text-gray-400 text-sm">展示不同的交互方式和控制选项</p>
      </div>
      <div class="flex flex-wrap gap-6">
        <Popover :showDelay="500" :hideDelay="500" arrow>
          <template #reference>
            <Button>延迟显示</Button>
          </template>
          显示和隐藏有 500ms 延迟
        </Popover>

        <Popover trigger="click" :closeOnContentClick="true" arrow>
          <template #reference>
            <Button variant="outline">点击内容关闭</Button>
          </template>
          点击此处会关闭 Popover
        </Popover>

        <Popover trigger="click" persistent arrow>
          <template #reference>
            <Button variant="soft">持久显示</Button>
          </template>
          <div class="w-56 space-y-3">
            <p class="text-sm">此 Popover 不会因点击外部而关闭</p>
            <div class="flex justify-end">
              <Button size="sm" @click="closePopover">
                关闭
              </Button>
            </div>
          </div>
        </Popover>
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
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">placement</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">PlacementType</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'bottom'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">弹出位置，可选值：top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">trigger</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'hover' | 'click'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'hover'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">触发方式</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">offset</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">8</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">弹出框偏移距离</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">arrow</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示箭头</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">customClass</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义弹出框 class</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">contentClass</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义内容区域 class</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">closeOnContentClick</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">点击内容区域是否关闭</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">showDelay</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">0</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">显示延迟时间(ms)</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">hideDelay</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">300</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">隐藏延迟时间(ms)</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">persistent</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否保持显示状态</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">backgroundColor</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'rgba(255, 255, 255, 0.9)'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义背景色（亮色模式）</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">darkBackgroundColor</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'rgba(39, 39, 42, 0.9)'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义背景色（暗色模式）</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">theme</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ColorType</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">undefined</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">主题颜色</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">variant</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'solid' | 'light' | 'glass'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'solid'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">主题变体样式</td>
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
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">参数</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">show</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">弹出框显示时触发</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">hide</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">弹出框隐藏时触发</td>
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
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">reference</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">触发元素</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">default</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">弹出框内容</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 总结与最佳实践 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">小结与最佳实践</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300">
            Popover 组件是一个灵活、轻量的弹出框组件，适用于展示提示信息、下拉菜单、额外内容等场景。
            它提供了丰富的配置选项，支持多种触发方式和位置，能满足各种交互需求。
          </p>

          <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>根据交互需求选择合适的触发方式，如信息提示使用<code>hover</code>，菜单或操作面板使用<code>click</code></li>
            <li>根据UI布局和内容设置合适的弹出位置，使用<code>placement</code>属性</li>
            <li>对于重要提示内容，建议添加箭头(<code>arrow: true</code>)增强视觉引导</li>
            <li>根据内容重要性设置适当的显示和隐藏延迟，避免频繁闪烁</li>
            <li>对于需要用户交互的内容，使用<code>persistent: true</code>保持弹出框显示</li>
            <li>利用主题和变体属性与整体UI风格保持一致</li>
            <li>根据内容类型选择合适的变体，信息提示使用<code>solid</code>，辅助内容使用<code>light</code>或<code>glass</code></li>
          </ul>

          <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
              <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
              暗色模式提示
            </h4>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              Popover 组件已内置支持暗色模式，会根据<code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">.dark</code>类自动切换样式。
              您可以通过<code>darkBackgroundColor</code>属性自定义暗色模式下的背景色，或通过<code>customClass</code>添加Tailwind的暗色模式类。
              使用<code>theme</code>属性时，组件会自动处理亮色和暗色模式的颜色差异。
            </p>
          </div>

          <p class="text-gray-700 dark:text-gray-300">
            在设计系统中，Popover 组件是构建二级交互和信息补充的重要元素。合理使用可以减少页面复杂度，
            提供更清晰的信息层次，让用户可以按需获取详细内容，从而提升整体用户体验。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Popover, { PlacementType } from '../../components/Popover';
import { Button } from '../../components/Button';

// 处理持久化 Popover 的关闭
const closePopover = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const popover = target.closest('[role="tooltip"]');
  if (popover) {
    const container = popover.parentElement;
    if (container) {
      // 触发过渡动画并移除元素
      container.style.opacity = '0';
      container.style.transform = 'scale(0.95)';
      setTimeout(() => container.remove(), 200);
    }
  }
};
</script>

<script lang="ts">
export default {
  name: 'PopoverView'
};
</script>
