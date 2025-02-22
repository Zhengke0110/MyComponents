<template>
  <div class="p-8 space-y-8">
    <h1 class="text-2xl font-bold mb-6">ModalBox 模态框组件示例</h1>

    <!-- 基础用法 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">基础用法</h2>
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        @click="basicModalVisible = true"
      >
        打开基础模态框
      </button>
      <ModalBox v-model="basicModalVisible">
        <div class="bg-white p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">基础模态框</h3>
          <p class="text-gray-600 mb-4">这是一个基础的模态框示例</p>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            @click="basicModalVisible = false"
          >
            关闭
          </button>
        </div>
      </ModalBox>
    </section>

    <!-- 全屏模式 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">全屏模式</h2>
      <button
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        @click="fullscreenModalVisible = true"
      >
        打开全屏模态框
      </button>
      <ModalBox
        v-model="fullscreenModalVisible"
        :fullscreen="true"
        contentClass="flex items-center justify-center"
      >
        <div class="bg-white p-8 max-w-2xl w-full rounded-lg">
          <h3 class="text-2xl font-medium mb-4">全屏模态框</h3>
          <p class="text-gray-600 mb-4">
            这是一个全屏模式的模态框，适合展示重要内容或大图片
          </p>
          <button
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            @click="fullscreenModalVisible = false"
          >
            关闭
          </button>
        </div>
      </ModalBox>
    </section>

    <!-- 图片查看器 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">图片查看器</h2>
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="(image, index) in sampleImages"
          :key="index"
          class="aspect-square cursor-pointer overflow-hidden rounded-lg"
          @click="showImage(image)"
        >
          <img
            :src="image.thumbnailUrl"
            :alt="image.alt"
            class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <ModalBox
        v-model="imageModalVisible"
        :fullscreen="true"
        contentClass="flex items-center justify-center"
      >
        <div class="w-screen h-screen p-4 flex items-center justify-center">
          <img
            :src="currentImage?.url"
            :alt="currentImage?.alt"
            class="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain select-none"
            @click.stop
            @contextmenu.prevent
          />
        </div>
      </ModalBox>
    </section>

    <!-- 禁用遮罩层关闭 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">禁用遮罩层关闭</h2>
      <button
        class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        @click="noOverlayCloseModalVisible = true"
      >
        打开模态框
      </button>
      <ModalBox
        v-model="noOverlayCloseModalVisible"
        :closeOnClickOverlay="false"
      >
        <div class="bg-white p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">禁用遮罩层关闭的模态框</h3>
          <p class="text-gray-600 mb-4">
            这个模态框禁用了点击遮罩层关闭的功能，只能通过关闭按钮关闭
          </p>
          <button
            class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            @click="noOverlayCloseModalVisible = false"
          >
            关闭
          </button>
        </div>
      </ModalBox>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ModalBox from "./index.ts";

const basicModalVisible = ref(false);
const fullscreenModalVisible = ref(false);
const imageModalVisible = ref(false);
const noOverlayCloseModalVisible = ref(false);

interface ImageType {
  url: string;
  thumbnailUrl: string;
  alt: string;
}

const currentImage = ref<ImageType | null>(null);

const sampleImages = [
  {
    url: "https://picsum.photos/1200/800",
    thumbnailUrl: "https://picsum.photos/400/400",
    alt: "示例图片 1",
  },
  {
    url: "https://picsum.photos/1200/801",
    thumbnailUrl: "https://picsum.photos/400/401",
    alt: "示例图片 2",
  },
  {
    url: "https://picsum.photos/1200/802",
    thumbnailUrl: "https://picsum.photos/400/402",
    alt: "示例图片 3",
  },
];

const showImage = (image: ImageType) => {
  currentImage.value = image;
  imageModalVisible.value = true;
};
</script>

<style scoped>
.demo-section {
  margin-bottom: 2rem;
}
</style>
