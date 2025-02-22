<template>
  <div class="space-y-4 p-4">
    <!-- 基础对话框 -->
    <section class="space-y-2">
      <h2 class="text-lg font-bold">基础对话框</h2>
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        @click="showBasicDialog = true"
      >
        打开基础对话框
      </button>
      <Dialog
        v-model="showBasicDialog"
        title="确认操作"
        :confirmHandler="handleBasicConfirm"
        :cancelHandler="handleBasicCancel"
      >
        这是一个基础的确认对话框示例。
      </Dialog>
    </section>

    <!-- 自定义颜色对话框 -->
    <section class="space-y-2">
      <h2 class="text-lg font-bold">自定义颜色对话框</h2>
      <button
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        @click="showCustomDialog = true"
      >
        打开删除确认框
      </button>
      <Dialog
        v-model="showCustomDialog"
        title="删除确认"
        confirmText="删除"
        cancelText="返回"
        confirmButtonColor="red"
        cancelButtonColor="zinc"
        :confirmHandler="handleDelete"
      >
        删除后数据将无法恢复，是否继续？
      </Dialog>
    </section>

    <!-- 异步操作对话框 -->
    <section class="space-y-2">
      <h2 class="text-lg font-bold">异步操作对话框</h2>
      <button
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        @click="showAsyncDialog = true"
      >
        打开异步操作框
      </button>
      <Dialog
        v-model="showAsyncDialog"
        title="保存更改"
        confirmButtonColor="green"
        :confirmHandler="handleAsyncOperation"
      >
        <div v-if="loading" class="flex items-center justify-center">
          <svg
            class="animate-spin h-5 w-5 mr-2 text-green-500"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          正在保存...
        </div>
        <template v-else>确认保存当前更改？</template>
      </Dialog>
    </section>

    <!-- 无关闭按钮对话框 -->
    <section class="space-y-2">
      <h2 class="text-lg font-bold">无关闭按钮对话框</h2>
      <button
        class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        @click="showNoCloseDialog = true"
      >
        打开提示框
      </button>
      <Dialog
        v-model="showNoCloseDialog"
        title="系统提示"
        :showClose="false"
        confirmButtonColor="yellow"
      >
        这是一个不能通过右上角关闭的对话框。
      </Dialog>
    </section>

    <!-- 纯展示对话框 -->
    <section class="space-y-2">
      <h2 class="text-lg font-bold">纯展示对话框</h2>
      <button
        class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        @click="showDisplayDialog = true"
      >
        打开展示框
      </button>
      <Dialog v-model="showDisplayDialog" title="信息展示">
        <div class="space-y-2">
          <p>这是一个纯展示的对话框，只有关闭按钮。</p>
          <p>适用于展示一些简单的信息。</p>
        </div>
      </Dialog>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Dialog from "./Dialog.vue";

// 基础对话框
const showBasicDialog = ref(false);
const handleBasicConfirm = () => {
  console.log("用户点击了确认");
};
const handleBasicCancel = () => {
  console.log("用户点击了取消");
};

// 自定义颜色对话框
const showCustomDialog = ref(false);
const handleDelete = () => {
  console.log("执行删除操作");
};

// 异步操作对话框
const showAsyncDialog = ref(false);
const loading = ref(false);
const handleAsyncOperation = async () => {
  loading.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 2000)); // 模拟异步操作
    console.log("异步操作完成");
  } finally {
    loading.value = false;
    showAsyncDialog.value = false;
  }
};

// 无关闭按钮对话框
const showNoCloseDialog = ref(false);

// 纯展示对话框
const showDisplayDialog = ref(false);
</script>
