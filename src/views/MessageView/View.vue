<template>
  <div class="p-8">
    <DemoBlock
      title="Basic Usage"
      description="基础消息提示，支持 success、warning、error 三种类型"
    >
      <div class="flex flex-wrap gap-4">
        <Button @click="showSuccess">Success Message</Button>
        <Button type="warning" @click="showWarning">Warning Message</Button>
        <Button type="error" @click="showError">Error Message</Button>
      </div>

      <template #code>
        ```typescript const showSuccess = () => { Message.success('This is a
        success message') } const showWarning = () => { Message.warning('This is
        a warning message') } const showError = () => { Message.error('This is
        an error message') } ```
      </template>
    </DemoBlock>

    <DemoBlock
      title="Message with Options"
      description="支持自定义配置，包括可关闭、显示时长、显示位置等"
    >
      <div class="flex flex-wrap gap-4">
        <Button @click="showClosable">Closable Message</Button>
        <Button type="secondary" @click="showLongDuration"
          >Long Duration (10s)</Button
        >
        <Button type="info" @click="showBottomPosition">Bottom Position</Button>
      </div>

      <template #code>
        ```typescript const showClosable = () => { Message.success('Click
        toclose this message', { closable: true, onClose: () => {
        console.log('Message closed') } }) } const showLongDuration = () => {
        Message.success('This message will stay for 10 seconds', {
        duration:10000 }) } const showBottomPosition = () => {
        Message.success('Message at bottom position', { position: 'bottom' }) }
        ```
      </template>
    </DemoBlock>

    <DemoBlock
      title="Multiple Messages"
      description="支持多条消息同时显示，自动堆叠"
    >
      <div class="flex flex-wrap gap-4">
        <Button @click="showMultipleMessages">Show Multiple Messages</Button>
      </div>

      <template #code>
        ```typescript const showMultipleMessages = () => {
        Message.success('Success Message 1') setTimeout(() => {
        Message.warning('Warning Message 2') }, 300) setTimeout(() => {
        Message.error('Error Message 3') }, 600) } ```
      </template>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { Message } from "../../components/Message";
import { Button } from "../../components/Button";
import { DemoBlock } from "../../components/DemoBlock";

const showSuccess = () => {
  Message.success("This is a success message");
};

const showWarning = () => {
  Message.warning("This is a warning message");
};

const showError = () => {
  Message.error("This is an error message");
};

const showClosable = () => {
  Message.success("Click to close this message", {
    closable: true,
    onClose: () => {
      console.log("Message closed");
    },
  });
};

const showLongDuration = () => {
  Message.success("This message will stay for 10 seconds", {
    // 改用 success 替代 info
    duration: 10000,
  });
};

const showBottomPosition = () => {
  Message.success("Message at bottom position", {
    position: "bottom",
  });
};

const showMultipleMessages = () => {
  Message.success("Success Message 1");
  setTimeout(() => {
    Message.warning("Warning Message 2");
  }, 300);
  setTimeout(() => {
    Message.error("Error Message 3");
  }, 600);
};
</script>

<style scoped></style>
