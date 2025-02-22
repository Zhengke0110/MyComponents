<template>
  <div class="p-8 space-y-8">
    <!-- 基础按钮类型 -->
    <section class="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
      <h2 class="text-xl font-bold mb-4">按钮类型</h2>
      <div class="flex flex-wrap gap-4">
        <Button type="primary">主要按钮</Button>
        <Button type="secondary">次要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="error">错误按钮</Button>
        <Button type="info">信息按钮</Button>
        <Button type="ghost">幽灵按钮</Button>
      </div>
    </section>

    <!-- 按钮尺寸 -->
    <section class="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
      <h2 class="text-xl font-bold mb-4">按钮尺寸</h2>
      <div class="flex items-center gap-4">
        <Button size="xs">超小号</Button>
        <Button size="sm">小号</Button>
        <Button size="md">中号</Button>
        <Button size="lg">大号</Button>
        <Button size="xl">超大号</Button>
      </div>
    </section>

    <!-- 图标按钮 -->
    <section class="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
      <h2 class="text-xl font-bold mb-4">图标按钮</h2>
      <div class="flex flex-wrap gap-4">
        <Button icon="icon-[solar--chat-square-like-broken] size-5" type="primary">喜欢</Button>
        <Button icon="icon-[solar--like-broken]  size-5" type="warning">收藏</Button>
        <Button icon="icon-[solar--file-send-broken]  size-5" type="success">发送</Button>
        <Button icon="icon-[solar--clipboard-remove-broken]  size-5" type="error">删除</Button>
        <!-- 仅图标按钮 -->
        <Button icon="icon-[solar--settings-broken]  size-5" />
        <Button icon="icon-[solar--rounded-magnifer-zoom-in-linear]  size-5" type="primary" />
        <Button icon="icon-[solar--rounded-magnifer-zoom-out-linear]  size-5" type="error" />
      </div>
    </section>

    <!-- 加载状态 -->
    <section class="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
      <h2 class="text-xl font-bold mb-4">加载状态</h2>
      <div class="flex flex-wrap gap-4">
        <Button loading>加载中</Button>
        <Button loading type="primary">保存中</Button>
        <Button loading type="success">提交中</Button>
        <Button loading icon="tabler--refresh">刷新中</Button>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="flex flex-wrap gap-4">
        <Button disabled>禁用按钮</Button>
        <Button disabled type="primary">禁用主要</Button>
        <Button disabled type="success">禁用成功</Button>
        <Button disabled icon="i-tabler-lock">已锁定</Button>
      </div>
    </section>

    <!-- 块级按钮 -->
    <section class="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
      <h2 class="text-xl font-bold mb-4">块级按钮</h2>
      <div class="space-y-4 max-w-md">
        <Button block>默认块级按钮</Button>
        <Button block type="primary">主要块级按钮</Button>
        <Button block type="success" icon="i-tabler-check">确认提交</Button>
      </div>
    </section>

    <!-- 动画效果 -->
    <section class="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
      <h2 class="text-xl font-bold mb-4">动画效果</h2>
      <div class="flex flex-wrap gap-4">
        <Button :isActiveAnim="true" type="primary">带动画</Button>
        <Button :isActiveAnim="false" type="primary">无动画</Button>
      </div>
    </section>

    <!-- 组合示例 -->
    <section class="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
      <h2 class="text-xl font-bold mb-4">组合示例</h2>
      <div class="space-y-4">
        <div class="flex gap-4">
          <Button 
            type="primary" 
            icon="i-tabler-download" 
            size="lg"
            :loading="isLoading"
            @click="handleDownload"
          >
            {{ isLoading ? '下载中...' : '下载文件' }}
          </Button>
          <Button 
            type="error" 
            icon="i-tabler-trash" 
            size="lg"
            :disabled="isLoading"
          >
            删除
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/Button'

const isLoading = ref(false)

const handleDownload = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>
