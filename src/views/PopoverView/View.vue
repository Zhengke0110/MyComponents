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
