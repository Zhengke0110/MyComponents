<template>
  <div class="p-8 space-y-8">
    <!-- 基础消息类型 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">基础消息类型</h2>
      <div class="space-x-4">
        <button
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          @click="handleSuccess"
        >
          成功消息
        </button>
        <button
          class="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600"
          @click="handleWarning"
        >
          警告消息
        </button>
        <button
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          @click="handleError"
        >
          错误消息
        </button>
      </div>
    </section>

    <!-- 消息位置 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">消息位置</h2>
      <div class="space-x-4">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="handlePosition('top')"
        >
          顶部消息
        </button>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          @click="handlePosition('bottom')"
        >
          底部消息
        </button>
      </div>
    </section>

    <!-- 自定义持续时间 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">自定义持续时间</h2>
      <div class="space-x-4">
        <button
          class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          @click="handleCustomDuration"
        >
          持续 5 秒
        </button>
        <button
          class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          @click="handlePermanent"
        >
          永久显示
        </button>
      </div>
    </section>

    <!-- 可关闭消息 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">可关闭消息</h2>
      <div class="space-x-4">
        <button
          class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
          @click="handleClosable"
        >
          可关闭消息
        </button>
      </div>
    </section>

    <!-- 带回调的消息 -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">带回调的消息</h2>
      <div class="space-x-4">
        <button
          class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
          @click="handleCallback"
        >
          带回调消息
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {Message} from './index.ts';

const handleSuccess = () => {
  Message.success('操作成功完成');
};

const handleWarning = () => {
  Message.warning('请注意这个警告信息');
};

const handleError = () => {
  Message.error('操作失败');
};

const handlePosition = (position: 'top' | 'bottom') => {
  Message.success(`这是一条${position === 'top' ? '顶部' : '底部'}消息`, {
    position,
  });
};

const handleCustomDuration = () => {
  Message.success('这条消息将显示 5 秒', {
    duration: 5000,
  });
};

const handlePermanent = () => {
  Message.warning('这是一条永久显示的消息，需要手动关闭', {
    duration: 0,
    closable: true,
  });
};

const handleClosable = () => {
  Message.success('点击消息或关闭按钮可以关闭此消息', {
    closable: true,
  });
};

const handleCallback = () => {
  Message.success('消息关闭后会触发回调', {
    onClose: () => {
      Message.info('回调被触发了！');
    },
  });
};
</script>

<style scoped>

</style>