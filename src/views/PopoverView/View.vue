<template>
  <div class="p-12 space-y-8">
    <!-- 基础用法 -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold">基础用法</h2>
      <div class="flex gap-4">
        <Popover>
          <template #reference>
            <Button>默认悬浮</Button>
          </template>
          这是一个基础的 Popover
        </Popover>

        <Popover trigger="click">
          <template #reference>
            <Button>点击触发</Button>
          </template>
          点击触发的 Popover
        </Popover>
      </div>
    </section>

    <!-- 不同位置 -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold">位置示例</h2>
      <div class="flex gap-4 flex-wrap">
        <Popover placement="top" arrow>
          <template #reference>
            <Button>上方显示</Button>
          </template>
          顶部 Popover
        </Popover>

        <Popover placement="bottom" arrow>
          <template #reference>
            <Button>下方显示</Button>
          </template>
          底部 Popover
        </Popover>

        <Popover placement="left" arrow>
          <template #reference>
            <Button>左侧显示</Button>
          </template>
          左侧 Popover
        </Popover>

        <Popover placement="right" arrow>
          <template #reference>
            <Button>右侧显示</Button>
          </template>
          右侧 Popover
        </Popover>
      </div>
    </section>

    <!-- 自定义内容 -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold">自定义内容</h2>
      <div class="flex gap-4">
        <Popover 
          content-class="w-64"
          persistent
          trigger="click"
        >
          <template #reference>
            <Button>复杂内容</Button>
          </template>
          <div class="space-y-2">
            <h3 class="font-bold">自定义标题</h3>
            <p>这里可以放置更复杂的内容，包括多行文本、图片等。</p>
            <div class="flex justify-end">
              <Button size="sm">操作按钮</Button>
            </div>
          </div>
        </Popover>

        <Popover 
          customClass="bg-blue-50 dark:bg-blue-900/50"
          arrow
        >
          <template #reference>
            <Button>自定义样式</Button>
          </template>
          自定义背景色的 Popover
        </Popover>
      </div>
    </section>

    <!-- 延迟和关闭行为 -->
    <section class="space-y-4">
      <h2 class="text-xl font-bold">延迟和关闭行为</h2>
      <div class="flex gap-4">
        <Popover 
          :show-delay="500"
          :hide-delay="500"
        >
          <template #reference>
            <Button>延迟显示/隐藏</Button>
          </template>
          显示和隐藏有 500ms 延迟
        </Popover>

        <Popover 
          trigger="click"
          :close-on-content-click="true"
        >
          <template #reference>
            <Button>点击内容关闭</Button>
          </template>
          点击这里会关闭 Popover
        </Popover>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Popover from '../../components/Popover';
import { Button } from '../../components/Button';
</script>

<script lang="ts">
export default {
  name: 'PopoverView'
};
</script>
