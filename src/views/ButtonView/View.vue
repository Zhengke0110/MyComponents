<template>
  <div class="p-8">
    <!-- 基础按钮类型 -->
    <DemoBlock title="按钮类型" description="Button 组件提供了多种预定义的类型，可以应对不同场景的需求。">
      <template #default>
        <div class="flex flex-wrap gap-4">
          <Button type="primary">主要按钮</Button>
          <Button type="secondary">次要按钮</Button>
          <Button type="success">成功按钮</Button>
          <Button type="warning">警告按钮</Button>
          <Button type="error">错误按钮</Button>
          <Button type="info">信息按钮</Button>
          <Button type="ghost">幽灵按钮</Button>
        </div>
      </template>
      <template #code>
        {{ `<Button type="primary">主要按钮</Button>
        <Button type="secondary">次要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="error">错误按钮</Button>
        <Button type="info">信息按钮</Button>
        <Button type="ghost">幽灵按钮</Button>
        `}}
      </template>
    </DemoBlock>

    <DemoBlock title="按钮尺寸" description="Button 组件提供了多种不同尺寸的按钮，可以应对不同场景的需求。">
      <template #default>
        <div class="flex flex-wrap gap-4">
          <Button size="xs">超小号</Button>
          <Button size="sm">小号</Button>
          <Button size="md">中号</Button>
          <Button size="lg">大号</Button>
          <Button size="xl">超大号</Button>
        </div>
      </template>
      <template #code>
        {{ `<Button size="xs">超小号</Button>
        <Button size="sm">小号</Button>
        <Button size="md">中号</Button>
        <Button size="lg">大号</Button>
        <Button size="xl">超大号</Button> `}}
      </template>
    </DemoBlock>

    <!-- 图标按钮 -->
    <DemoBlock title="图标按钮" description="可以在按钮内嵌入图标，增强按钮的可识别性。">
      <template #default>
        <div class="flex flex-wrap gap-4">
          <Button icon="icon-[solar--chat-square-like-broken] size-5" type="primary">喜欢</Button>
          <Button icon="icon-[solar--like-broken] size-5" type="warning">收藏</Button>
          <Button icon="icon-[solar--file-send-broken] size-5" type="success">发送</Button>
          <Button icon="icon-[solar--clipboard-remove-broken] size-5" type="error">删除</Button>
          <!-- 仅图标按钮 -->
          <Button icon="icon-[solar--settings-broken] size-5" />
          <Button icon="icon-[solar--rounded-magnifer-zoom-in-linear] size-5" type="primary" />
          <Button icon="icon-[solar--rounded-magnifer-zoom-out-linear] size-5" type="error" />
        </div>
      </template>
      <template #code>
        {{ `
        <Button icon="icon-[solar--chat-square-like-broken] size-5" type="primary">喜欢</Button>
        <Button icon="icon-[solar--like-broken] size-5" type="warning">收藏</Button>
        <Button icon="icon-[solar--file-send-broken] size-5" type="success">发送</Button>
        <Button icon="icon-[solar--clipboard-remove-broken] size-5" type="error">删除</Button>
        <!-- 仅图标按钮 -->
        <Button icon="icon-[solar--settings-broken] size-5" />
        <Button icon="icon-[solar--rounded-magnifer-zoom-in-linear] size-5" type="primary" />
        <Button icon="icon-[solar--rounded-magnifer-zoom-out-linear] size-5" type="error" /> `}}
      </template>
    </DemoBlock>

    <!-- 加载状态 -->
    <DemoBlock title="加载状态" description="按钮在提交表单数据时，可以进入加载状态。">
      <template #default>
        <div class="flex flex-wrap gap-4">
          <Button loading>加载中</Button>
          <Button loading type="primary">保存中</Button>
          <Button loading type="success">提交中</Button>
          <Button loading icon="icon-[solar--refresh-line-duotone]">刷新中</Button>
        </div>
      </template>
      <template #code>
        {{ `
        <Button loading>加载中</Button>
        <Button loading type="primary">保存中</Button>
        <Button loading type="success">提交中</Button>
        <Button loading icon="icon-[solar--refresh-line-duotone]">刷新中</Button> `}}
      </template>
    </DemoBlock>


    <!-- 禁用状态 -->
    <DemoBlock title="禁用状态" description="按钮不可用状态。">
      <template #default>
        <div class="flex flex-wrap gap-4">
          <Button disabled>禁用按钮</Button>
          <Button disabled type="primary">禁用主要</Button>
          <Button disabled type="success">禁用成功</Button>
          <Button disabled icon="icon-[solar--lock-keyhole-linear]">已锁定</Button>
        </div>
      </template>
      <template #code>
        {{ `
        <Button disabled>禁用按钮</Button>
        <Button disabled type="primary">禁用主要</Button>
        <Button disabled type="success">禁用成功</Button>
        <Button disabled icon="icon-[solar--lock-keyhole-linear]">已锁定</Button> `}}
      </template>
    </DemoBlock>

    <!-- 块级按钮 -->
    <DemoBlock title="块级按钮" description="通过 block 属性将按钮设置为块级元素">
      <template #default>
        <div class="max-w-md space-y-4">
          <Button block size="sm">默认块级按钮</Button>
          <Button block size="md" type="primary">主要块级按钮</Button>
          <Button block size="lg" type="success" icon="icon-[solar--check-read-line-duotone]">
            确认提交
          </Button>
        </div>
      </template>
      <template #code>
        {{ `<Button block size="sm">默认块级按钮</Button>
        <Button block size="md" type="primary">主要块级按钮</Button>
        <Button block size="lg" type="success" icon="icon-[solar--check-read-line-duotone]">
          确认提交 </Button>`}}
      </template>
    </DemoBlock>




    <!-- 动画效果 -->
    <DemoBlock title="动画效果" description="通过 isActiveAnim 属性控制按钮的动画效果。">
      <template #default>
        <div class="flex flex-wrap gap-4">
          <Button :isActiveAnim="true" type="primary">带动画</Button>
          <Button :isActiveAnim="false" type="primary">无动画</Button>
        </div>
      </template>
      <template #code>
        {{ `
        <Button :isActiveAnim="true" type="primary">带动画</Button>
        <Button :isActiveAnim="false" type="primary">无动画</Button> `}}
      </template>
    </DemoBlock>

    <!-- 组合示例 -->
    <section class="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
      <h2 class="mb-4 text-xl font-bold">组合示例</h2>
      <div class="space-y-4">
        <div class="flex gap-4">
          <Button type="primary" icon="icon-[solar--download-broken]" size="lg" :loading="isLoading"
            @click="handleDownload">
            {{ isLoading ? "下载中..." : "下载文件" }}
          </Button>
          <Button type="error" icon="icon-[solar--trash-bin-minimalistic-broken]" size="lg" :disabled="isLoading">
            删除
          </Button>
        </div>
      </div>
    </section>

    <!-- 组合示例 -->
    <DemoBlock title="组合示例" description="通过组合按钮，可以实现更复杂的交互效果。">
      <template #default>
        <div class="flex flex-wrap gap-4">
          <Button type="primary" icon="icon-[solar--download-broken]" size="lg" :loading="isLoading"
            @click="handleDownload">
            {{ isLoading ? "下载中..." : "下载文件" }}
          </Button>
          <Button type="error" icon="icon-[solar--trash-bin-minimalistic-broken]" size="lg"
            :disabled="isLoading">删除</Button>
        </div>
      </template>
      <template #code>
        {{`<Button type="primary" icon="icon-[solar--download-broken]" size="lg" :loading="isLoading"
          @click="handleDownload">
          \{\{ isLoading ? "下载中..." : "下载文件" \}\}
        </Button>
        <Button type="error" icon="icon-[solar--trash-bin-minimalistic-broken]" size="lg" :disabled="isLoading">
          删除
        </Button>`}}
      </template>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/Button";
import { DemoBlock } from "@/components/DemoBlock";

const isLoading = ref(false);

const handleDownload = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
