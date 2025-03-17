# ImagePreview 图片预览组件

一个功能丰富、现代化的图片预览组件，支持图片浏览、缩放、旋转和拖拽等功能。

## 功能特性

- ✅ 支持亮色/暗色模式自适应显示
- ✅ 图片缩放和旋转功能
- ✅ 支持图片拖拽移动
- ✅ 键盘快捷键操作
- ✅ 缩略图导航栏
- ✅ 加载状态和错误处理
- ✅ 支持自定义缩放配置
- ✅ 响应式设计，适配多种屏幕尺寸

## 基础使用

以下是一个简单的示例，展示如何使用 ImagePreview 组件：

```vue
<template>
  <div>
    <!-- 显示图片预览的触发按钮 -->
    <button @click="showPreview = true">预览图片</button>

    <!-- 图片预览组件 -->
    <ImagePreview
      v-model:visible="showPreview"
      v-model:current="currentIndex"
      :images="images"
      :zoom="zoomConfig"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ImagePreview } from "@your-library/image-preview";

// 定义图片列表
const images = ref([
  {
    url: "https://example.com/image1.jpg",
    alt: "图片1",
    thumbnailUrl: "https://example.com/image1-thumb.jpg", // 可选缩略图
  },
  {
    url: "https://example.com/image2.jpg",
    alt: "图片2",
  },
  // ...更多图片
]);

// 控制预览的可见状态
const showPreview = ref(false);

// 当前显示的图片索引
const currentIndex = ref(0);

// 自定义缩放配置（可选）
const zoomConfig = {
  minScale: 0.2, // 最小缩放比例
  maxScale: 5, // 最大缩放比例
  step: 0.5, // 每次缩放的步长
};

// 打开预览并指定起始图片
const openPreview = (index) => {
  currentIndex.value = index;
  showPreview.value = true;
};
</script>
```

## API

### Props

| 属性         | 类型    | 默认值                                    | 说明                                                        |
| ------------ | ------- | ----------------------------------------- | ----------------------------------------------------------- |
| images       | Array   | []                                        | 必填，图片列表，每项包含 url、alt(可选)和thumbnailUrl(可选) |
| visible      | Boolean | false                                     | 是否显示预览                                                |
| current      | Number  | 0                                         | 当前显示的图片索引                                          |
| maskClosable | Boolean | true                                      | 点击遮罩层是否可关闭预览                                    |
| animated     | Boolean | true                                      | 切换时是否有动画效果                                        |
| zIndex       | Number  | 1000                                      | 组件的 z-index 值                                           |
| zoom         | Object  | { minScale: 0.5, maxScale: 3, step: 0.5 } | 缩放配置选项                                                |

### 事件

| 事件名称       | 说明                   | 回调参数           |
| -------------- | ---------------------- | ------------------ |
| update:visible | 可见状态变化时触发     | (visible: boolean) |
| update:current | 当前图片索引变化时触发 | (index: number)    |
| close          | 关闭预览时触发         | 无                 |
| change         | 图片切换时触发         | (index: number)    |

### 图片数据结构

```typescript
interface ImageItem {
  url: string;       // 图片URL（必填）
  alt?: string;      // 图片说明文字（可选）
  thumbnailUrl?: string;  // 缩略图URL（可选，如不提供则使用原图）
}
```

## 键盘快捷键

组件支持以下键盘快捷键：

| 按键        | 功能       |
| ----------- | ---------- |
| ←（左箭头） | 上一张图片 |
| →（右箭头） | 下一张图片 |
| +（加号）   | 放大图片   |
| -（减号）   | 缩小图片   |
| r           | 旋转图片   |
| Esc         | 关闭预览   |

## 错误处理

该组件内置了图片加载错误处理机制：

- 当图片加载失败时，会显示错误提示
- 会在本地存储中记录失败的图片URL，避免重复请求加载失败的图片
- 缩略图和预览图可以独立设置，当大图加载失败时不影响缩略图显示

## 浏览器兼容性

该组件支持所有现代浏览器：

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## 高级用法

### 集成到表单中预览上传的图片

```vue
<template>
  <div>
    <!-- 文件上传 -->
    <input type="file" multiple @change="handleFileUpload" />

    <!-- 预览已上传的图片 -->
    <div class="preview-thumbnails">
      <div
        v-for="(image, index) in uploadedImages"
        :key="image.url"
        class="thumbnail"
        @click="previewImage(index)"
      >
        <img :src="image.thumbnailUrl || image.url" :alt="image.alt" />
      </div>
    </div>

    <!-- 图片预览组件 -->
    <ImagePreview
      v-model:visible="showPreview"
      v-model:current="currentPreviewIndex"
      :images="uploadedImages"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ImagePreview } from "@your-library/image-preview";

// 上传的图片列表
const uploadedImages = ref([]);
const showPreview = ref(false);
const currentPreviewIndex = ref(0);

// 处理文件上传
function handleFileUpload(event) {
  const files = event.target.files;

  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedImages.value.push({
        url: e.target.result,
        alt: file.name,
        thumbnailUrl: e.target.result,
      });
    };
    reader.readAsDataURL(file);
  });
}

// 预览指定索引的图片
function previewImage(index) {
  currentPreviewIndex.value = index;
  showPreview.value = true;
}
</script>
```

## 注意事项

1. 组件使用了 Vue 3 的特性，确保您的项目基于 Vue 3
2. 图片预览使用了 Teleport 将内容渲染到 body 中，避免被父级容器的 overflow 属性影响
3. 为了获得最佳体验，推荐提供适当大小的缩略图，可以提高加载速度和用户体验

## 自定义主题

该组件会自动适应亮色/暗色模式，您也可以通过全局 CSS 变量自定义主题：

```css
:root {
  --image-preview-bg: rgba(0, 0, 0, 0.85);
  --image-preview-toolbar-bg: rgba(255, 255, 255, 0.1);
  --image-preview-text: rgba(255, 255, 255, 0.9);
  --image-preview-button-hover: rgba(255, 255, 255, 0.2);
}
```

## 贡献

欢迎提交 Pull Request 或创建 Issue 帮助我们改进这个组件。

## 许可证

MIT
