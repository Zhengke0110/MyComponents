<template>
  <div class="p-8 space-y-8">
    <h1 class="text-2xl font-bold mb-6">ModalBox 模态框组件示例</h1>

    <!-- 基础用法 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">基础用法</h2>
      <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="basicModalVisible = true">
        打开基础模态框
      </button>
      <ModalBox v-model="basicModalVisible" theme="primary">
        <div class="bg-white p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">基础模态框</h3>
          <p class="text-gray-600 mb-4">这是一个基础的模态框示例，使用 primary 主题色</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" @click="basicModalVisible = false">
            关闭
          </button>
        </div>
      </ModalBox>
    </section>

    <!-- 全屏模式 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">全屏模式</h2>
      <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        @click="fullscreenModalVisible = true">
        打开全屏模态框
      </button>
      <ModalBox v-model="fullscreenModalVisible" :fullscreen="true" contentClass="flex items-center justify-center"
        theme="success">
        <div class="w-full h-full flex flex-col">
          <div class="p-8">
            <h3 class="text-2xl text-white font-bold mb-4">全屏模态框</h3>
            <p class="text-white mb-6">这是一个全屏模式的模态框，使用 success 主题色</p>
            <div class="grid grid-cols-3 gap-4">
              <div class="bg-gray-100 p-4 rounded">示例内容区域 1</div>
              <div class="bg-gray-100 p-4 rounded">示例内容区域 2</div>
              <div class="bg-gray-100 p-4 rounded">示例内容区域 3</div>
            </div>
          </div>
        </div>
      </ModalBox>
    </section>

    <!-- 主题色展示 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">主题颜色模式</h2>
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h3 class="font-medium mb-2">主题色 (ThemeColorType)</h3>
          <div class="flex flex-wrap gap-2">
            <button v-for="color in themeColors" :key="color" class="px-4 py-2 text-white rounded"
              :class="`bg-${getActualColor(color as ThemeColorType)}-500`"
              @click="showThemeModal(color as ThemeColorType)">
              {{ color }}
            </button>
          </div>
        </div>

        <div>
          <h3 class="font-medium mb-2">标准色 (ColorType)</h3>
          <div class="flex flex-wrap gap-2">
            <button v-for="color in standardColors" :key="color" class="px-3 py-1.5 text-white rounded"
              :class="`bg-${color}-500`" @click="showColorModal(color as ColorType)">
              {{ color }}
            </button>
          </div>
        </div>
      </div>

      <ModalBox v-model="themeModalVisible" :theme="currentTheme">
        <div class="bg-white p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">{{ currentTheme }} 主题</h3>
          <p class="text-gray-600 mb-4">
            这是使用 {{ currentTheme }} 主题的模态框
            <span v-if="isThemeColor">
              (对应颜色: {{ getActualColor(currentTheme as ThemeColorType) }})
            </span>
          </p>
          <button class="px-4 py-2 text-white rounded"
            :class="`bg-${isThemeColor ? getActualColor(currentTheme as ThemeColorType) : currentTheme}-500`"
            @click="themeModalVisible = false">
            关闭
          </button>
        </div>
      </ModalBox>
    </section>

    <!-- 图片查看器 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">图片查看器</h2>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(image, index) in sampleImages" :key="index"
          class="aspect-square cursor-pointer overflow-hidden rounded-lg" @click="showImage(image)">
          <img :src="image.thumbnailUrl" :alt="image.alt"
            class="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <ModalBox v-model="imageModalVisible" :fullscreen="true" contentClass="flex items-center justify-center"
        theme="info">
        <div class="w-screen h-screen p-4 flex items-center justify-center">
          <img :src="currentImage?.url" :alt="currentImage?.alt"
            class="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain select-none" @click.stop
            @contextmenu.prevent />
        </div>
      </ModalBox>
    </section>

    <!-- 禁用遮罩层关闭 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">禁用遮罩层关闭</h2>
      <button class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        @click="noOverlayCloseModalVisible = true">
        打开模态框
      </button>
      <ModalBox v-model="noOverlayCloseModalVisible" :closeOnClickOverlay="false" theme="danger">
        <div class="bg-white p-6 rounded-lg">
          <h3 class="text-lg font-medium mb-4">禁用遮罩层关闭的模态框</h3>
          <p class="text-gray-600 mb-4">这个模态框禁用了点击遮罩层关闭的功能，只能通过关闭按钮关闭</p>
          <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            @click="noOverlayCloseModalVisible = false">
            关闭
          </button>
        </div>
      </ModalBox>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ModalBox ,{ ColorType, ThemeColorType, THEME_COLOR_MAP }from '../../components/ModalBox';

// Modal visibility states
const basicModalVisible = ref(false);
const fullscreenModalVisible = ref(false);
const imageModalVisible = ref(false);
const noOverlayCloseModalVisible = ref(false);
const themeModalVisible = ref(false);

// 颜色选择状态
const currentTheme = ref<ColorType | ThemeColorType>('primary');
const isThemeColor = computed(() => themeColors.includes(currentTheme.value as ThemeColorType));

// 获取主题色对应的实际颜色
const getActualColor = (theme: ThemeColorType): ColorType => {
  return THEME_COLOR_MAP[theme];
};

// 可用的主题色和标准色列表
const themeColors: ThemeColorType[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

const standardColors: ColorType[] = [
  'slate', 'gray', 'zinc', 'neutral', 'stone',
  'red', 'orange', 'amber', 'yellow',
  'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo',
  'violet', 'purple', 'fuchsia', 'pink', 'rose'
];

// 展示主题色模态框
const showThemeModal = (theme: ThemeColorType) => {
  currentTheme.value = theme;
  themeModalVisible.value = true;
};

// 展示标准色模态框
const showColorModal = (color: ColorType) => {
  currentTheme.value = color;
  themeModalVisible.value = true;
};

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