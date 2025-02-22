<template>
  <div>
    <transition name="fade">
      <div
        v-if="isVisable"
        @click="close"
        class="fixed inset-0 bg-zinc-900/80 backdrop-blur-sm z-40"
      ></div>
    </transition>
    <transition name="up">
      <div
        v-if="isVisable"
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[80%] max-h-[80%] overflow-auto z-50 p-6 rounded-lg border shadow-lg dark:border-zinc-600 bg-white dark:bg-zinc-800 xl:min-w-[35%]"
      >
        <div
          class="flex items-center justify-between text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-4 border-b border-zinc-200 dark:border-zinc-700 pb-2"
          v-if="title"
        >
          {{ title }}
          <button
            v-if="showClose"
            @click="close"
            class="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="text-base text-zinc-900 dark:text-zinc-200 mb-6">
          <slot />
        </div>
        <div
          class="flex justify-end gap-2"
          v-if="cancelHandler || confirmHandler"
        >
          <button
            v-if="cancelHandler"
            type="button"
            :class="[
              'rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
              getCancelButtonClasses
            ]"
            @click="onCancelClick"
          >
            {{ cancelText }}
          </button>
          <button
            v-if="confirmHandler"
            type="button"
            :class="[
              'rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
              getConfirmButtonClasses
            ]"
            @click="onConfirmClick"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { computed } from 'vue'; // 添加这一行

/**
 * @modelValue 控制开关
 * @title 标题
 * @cancelText 取消按钮文本
 * @confirmText 确定按钮文本
 * @cancelHandler 取消按钮点击事件
 * @confirmHandler 确定按钮点击事件
 * @close 关闭的回调
 * @showClose 是否显示关闭按钮
 * @cancelButtonColor 取消按钮颜色
 * @confirmButtonColor 确定按钮颜色
 */
interface Props {
  modelValue: boolean;
  title?: string;
  cancelText?: string;
  confirmText?: string;
  cancelHandler?: () => void;
  confirmHandler?: () => void;
  close?: () => void;
  showClose?: boolean;
  cancelButtonColor?: string;
  confirmButtonColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  cancelText: "取消",
  confirmText: "确定",
  showClose: true,
  cancelButtonColor: "gray",
  confirmButtonColor: "red",
});

defineEmits(["update:modelValue"]);

// 控制显示处理
const isVisable = useVModel(props);

/**
 * 取消按钮点击事件
 */
const onCancelClick = () => {
  if (props.cancelHandler) {
    props.cancelHandler();
  }
  close();
};

/**
 * 确定按钮点击事件
 */
const onConfirmClick = () => {
  if (props.confirmHandler) {
    props.confirmHandler();
  }
  close();
};

const close = () => {
  isVisable.value = false;
  if (props.close) {
    props.close();
  }
};

// 颜色映射
const colorMap = {
  red: {
    cancel: 'ring-1 ring-inset ring-red-300 text-red-700 hover:bg-red-50 focus:ring-red-500',
    confirm: 'bg-red-600 text-white hover:bg-red-500 focus:ring-red-500'
  },
  blue: {
    cancel: 'ring-1 ring-inset ring-blue-300 text-blue-700 hover:bg-blue-50 focus:ring-blue-500',
    confirm: 'bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-500'
  },
  green: {
    cancel: 'ring-1 ring-inset ring-green-300 text-green-700 hover:bg-green-50 focus:ring-green-500',
    confirm: 'bg-green-600 text-white hover:bg-green-500 focus:ring-green-500'
  },
  yellow: {
    cancel: 'ring-1 ring-inset ring-yellow-300 text-yellow-700 hover:bg-yellow-50 focus:ring-yellow-500',
    confirm: 'bg-yellow-600 text-white hover:bg-yellow-500 focus:ring-yellow-500'
  },
  zinc: {
    cancel: 'ring-1 ring-inset ring-zinc-300 text-zinc-700 hover:bg-zinc-50 focus:ring-zinc-500',
    confirm: 'bg-zinc-600 text-white hover:bg-zinc-500 focus:ring-zinc-500'
  },
  gray: {
    cancel: 'ring-1 ring-inset ring-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    confirm: 'bg-gray-600 text-white hover:bg-gray-500 focus:ring-gray-500'
  }
} as const;

// 计算属性获取按钮类名
const getCancelButtonClasses = computed(() => {
  return colorMap[props.cancelButtonColor as keyof typeof colorMap]?.cancel || colorMap.gray.cancel;
});

const getConfirmButtonClasses = computed(() => {
  return colorMap[props.confirmButtonColor as keyof typeof colorMap]?.confirm || colorMap.red.confirm;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.up-enter-active,
.up-leave-active {
  transition: all 0.3s ease;
}

.up-enter-from,
.up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

button {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
</style>
