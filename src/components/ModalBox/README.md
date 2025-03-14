# ModalBox 模态框组件

ModalBox 是一个功能丰富的模态对话框组件，支持多种主题样式、全屏模式和自定义内容。

## 基础用法

最简单的用法是通过 `v-model` 绑定一个布尔值来控制模态框的显示和隐藏。

```vue
<template>
  <button @click="showModal = true">打开模态框</button>
  
  <ModalBox v-model="showModal">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg">
      <h3 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">基础模态框</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">这是一个基础的模态框示例</p>
      <button @click="showModal = false" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">关闭</button>
    </div>
  </ModalBox>
</template>

<script setup>
import { ref } from 'vue';
import ModalBox from 'path/to/ModalBox';

const showModal = ref(false);
</script>
```

## 带主题的模态框

ModalBox 支持丰富的主题颜色，可以使用 `theme` 属性设置。主题色可以是 `ColorType` 或 `ThemeColorType`。

```vue
<template>
  <div class="flex space-x-2">
    <button @click="openModal('primary')">Primary 主题</button>
    <button @click="openModal('success')">Success 主题</button>
    <button @click="openModal('danger')">Danger 主题</button>
  </div>
  
  <ModalBox v-model="showModal" :theme="currentTheme">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg">
      <h3 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">{{ currentTheme }} 主题模态框</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">这是一个使用 {{ currentTheme }} 主题的模态框</p>
      <button @click="showModal = false" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">关闭</button>
    </div>
  </ModalBox>
</template>

<script setup>
import { ref } from 'vue';
import ModalBox from 'path/to/ModalBox';
import { ThemeColorType } from 'path/to/colors';

const showModal = ref(false);
const currentTheme = ref('primary');

const openModal = (theme) => {
  currentTheme.value = theme;
  showModal.value = true;
};
</script>
```

## 全屏模式

通过设置 `fullscreen` 属性为 `true`，可以使模态框以全屏方式显示，适合展示大图片或复杂内容。

```vue
<template>
  <button @click="showFullscreenModal = true">打开全屏模态框</button>
  
  <ModalBox 
    v-model="showFullscreenModal" 
    :fullscreen="true"
    contentClass="flex items-center justify-center"
    theme="info"
  >
    <div class="w-full h-full p-8 text-white">
      <h2 class="text-2xl font-bold mb-4">全屏模态框</h2>
      <p class="mb-4">这是一个全屏模式的模态框，适合展示重要内容或大图片</p>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-white text-black p-4 rounded">内容区域 1</div>
        <div class="bg-white text-black p-4 rounded">内容区域 2</div>
        <div class="bg-white text-black p-4 rounded">内容区域 3</div>
      </div>
    </div>
  </ModalBox>
</template>

<script setup>
import { ref } from 'vue';
import ModalBox from 'path/to/ModalBox';

const showFullscreenModal = ref(false);
</script>
```

## 禁用点击遮罩关闭

默认情况下，点击模态框的遮罩层会关闭模态框。可以通过设置 `closeOnClickOverlay` 属性为 `false` 来禁用这一行为。

```vue
<template>
  <button @click="showModal = true">打开模态框（禁用遮罩层关闭）</button>
  
  <ModalBox v-model="showModal" :closeOnClickOverlay="false">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg">
      <h3 class="text-lg font-medium mb-4 text-gray-900 dark:text-white">禁用遮罩层关闭的模态框</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">这个模态框禁用了点击遮罩层关闭的功能，必须点击按钮才能关闭</p>
      <button @click="showModal = false" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">关闭</button>
    </div>
  </ModalBox>
</template>

<script setup>
import { ref } from 'vue';
import ModalBox from 'path/to/ModalBox';

const showModal = ref(false);
</script>
```

## 图片查看器

ModalBox 非常适合用作图片查看器，可以结合全屏模式和主题设置实现丰富的图片查看体验。

```vue
<template>
  <!-- 缩略图网格 -->
  <div class="grid grid-cols-3 gap-4">
    <div 
      v-for="(image, index) in images" 
      :key="index"
      class="aspect-square cursor-pointer overflow-hidden rounded-lg"
      @click="showImage(image)"
    >
      <img 
        :src="image.thumbnail" 
        :alt="image.alt"
        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
  </div>
  
  <!-- 图片查看模态框 -->
  <ModalBox
    v-model="imageModalVisible"
    :fullscreen="true"
    contentClass="flex items-center justify-center"
    theme="indigo"
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
</template>

<script setup>
import { ref } from 'vue';
import ModalBox from 'path/to/ModalBox';

const imageModalVisible = ref(false);
const currentImage = ref(null);

const images = [
  {
    url: "https://example.com/large-image-1.jpg",
    thumbnail: "https://example.com/thumbnail-1.jpg",
    alt: "图片 1"
  },
  {
    url: "https://example.com/large-image-2.jpg",
    thumbnail: "https://example.com/thumbnail-2.jpg",
    alt: "图片 2"
  },
  {
    url: "https://example.com/large-image-3.jpg",
    thumbnail: "https://example.com/thumbnail-3.jpg",
    alt: "图片 3"
  }
];

const showImage = (image) => {
  currentImage.value = image;
  imageModalVisible.value = true;
};
</script>
```

## 接口定义

```typescript
/** 
 * 模态框组件属性接口
 */
export interface ModalBoxProps {
  /**
   * 控制模态框的显示与隐藏
   */
  modelValue: boolean;
  
  /**
   * 模态框主题颜色，可以是预设主题或具体颜色
   * @default 'primary'
   */
  theme?: ColorType | ThemeColorType;
  
  /**
   * 是否全屏显示
   * @default false
   */
  fullscreen?: boolean;
  
  /**
   * 内容区域的自定义类名
   * @default ''
   */
  contentClass?: string;
  
  /**
   * 是否点击遮罩层关闭模态框
   * @default true
   */
  closeOnClickOverlay?: boolean;
  
  /**
   * 过渡动画持续时间（毫秒）
   * @default 200
   */
  transitionDuration?: number;
}
```

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|------|------|-------|------|
| modelValue | boolean | - | 控制模态框的显示状态（必需） |
| closeOnClickOverlay | boolean | true | 是否允许点击遮罩层关闭模态框 |
| fullscreen | boolean | false | 是否以全屏模式显示模态框 |
| contentClass | string | '' | 应用于模态框内容容器的自定义样式类 |
| theme | ColorType \| ThemeColorType | 'gray' | 模态框的主题颜色 |

## 事件

| 事件名 | 参数 | 描述 |
|------|------|------|
| update:modelValue | boolean | 当模态框状态改变时触发 |
| close | - | 当模态框关闭时触发 |

## 插槽

| 插槽名 | 描述 |
|------|------|
| default | 模态框的内容 |
