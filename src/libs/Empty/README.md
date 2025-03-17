# Empty 空状态组件

Empty 组件是一个视觉提示，用于在页面上展示"无数据"或"无内容"的状态，带有平滑的动画效果和现代化的设计风格。

## 特性

- 多种预设图标样式（默认、简约、数据图表）
- 流畅的动画过渡效果（淡入淡出、弹跳、缩放）
- 完全支持暗黑模式主题切换
- 丰富的自定义选项
- 微交互动画提升用户体验
- 符合现代化设计趋势
- 3D 浮动效果和视差动画
- 高对比度暗色模式优化
- 渐变色彩与微妙阴影效果

## 基本使用

### 基础用法

```vue
<template>
  <Empty />
</template>

<script setup>
import { Empty } from 'your-component-library';
</script>
```

### 切换图标类型

```vue
<template>
  <div class="flex space-x-6">
    <Empty iconType="default" />
    <Empty iconType="minimalist" />
    <Empty iconType="data" />
  </div>
</template>
```

### 自定义动画

```vue
<template>
  <div class="flex space-x-6">
    <Empty animation="fade" />
    <Empty animation="bounce" />
    <Empty animation="scale" />
  </div>
</template>
```

### 自定义图片

```vue
<template>
  <Empty image="https://your-image-url.png" />
</template>
```

### 自定义尺寸和描述

```vue
<template>
  <Empty 
    :imageSize="150" 
    description="暂无搜索结果"
  />
</template>
```

### 添加操作按钮

```vue
<template>
  <Empty description="暂无收藏内容">
    <button class="px-4 py-2 bg-blue-600 text-white rounded mt-4">
      添加收藏
    </button>
  </Empty>
</template>
```

### 完全自定义内容

```vue
<template>
  <Empty>
    <template #image>
      <div class="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl">
        404
      </div>
    </template>
    <template #description>
      <h3 class="text-lg font-medium text-gray-700">页面未找到</h3>
      <p class="text-gray-500">抱歉，您访问的页面不存在</p>
    </template>
    <div class="mt-4">
      <button class="px-4 py-2 bg-blue-600 text-white rounded">返回首页</button>
    </div>
  </Empty>
</template>
```

## 现代设计风格示例

### 3D浮动卡片风格

```vue
<template>
  <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-lg p-6">
    <Empty animation="bounce">
      <template #image>
        <div class="w-24 h-24 relative perspective-500">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-20 h-20 rounded bg-gradient-to-tr from-blue-400 to-cyan-300 shadow-lg transform rotate-6 transition-transform duration-500 hover:rotate-12 empty-float"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
        </div>
      </template>
      <template #description>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium">项目为空</span>
      </template>
    </Empty>
  </div>
</template>
```

### 暗黑模式高对比度风格

```vue
<template>
  <div class="bg-gray-900 dark:bg-black rounded-lg p-6">
    <Empty animation="scale">
      <template #image>
        <div class="w-24 h-24 relative">
          <div class="absolute inset-0 bg-gray-800 dark:bg-gray-950 rounded-full opacity-50"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-16 h-16 rounded-md border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center transform -rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-cyan-500 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
          </div>
        </div>
      </template>
      <template #description>
        <span class="text-cyan-500 dark:text-cyan-400 font-medium">未找到文件</span>
      </template>
    </Empty>
  </div>
</template>
```

### 极简微交互风格

```vue
<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg p-6 overflow-hidden relative">
    <Empty className="relative z-10" animation="fade">
      <template #image>
        <div class="w-24 h-24 flex items-center justify-center group">
          <div class="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400 dark:text-gray-500 transition-transform duration-700 transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="flex space-x-1">
              <div class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-ping delay-100"></div>
              <div class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-ping delay-200"></div>
              <div class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-ping delay-300"></div>
            </div>
          </div>
        </div>
      </template>
      <template #description>
        <p class="text-gray-500 dark:text-gray-400 font-medium">等待创建</p>
      </template>
    </Empty>
  </div>
</template>
```

## API

### 组件属性

| 属性名 | 类型 | 默认值 | 说明 |
| ----- | ---- | ------ | ---- |
| image | `string \| JSX.Element` | `null` | 自定义图片源 |
| iconType | `'default' \| 'minimalist' \| 'data'` | `'default'` | 预设图标类型 |
| imageSize | `number \| string` | `100` | 图片尺寸 |
| imageStyle | `Record<string, string>` | `{}` | 自定义图片样式 |
| description | `string` | `'暂无数据'` | 描述文本 |
| showDescription | `boolean` | `true` | 是否显示描述 |
| className | `string` | `''` | 自定义容器类名 |
| animation | `'fade' \| 'bounce' \| 'scale' \| 'none'` | `'fade'` | 动画类型 |

### 组件插槽

| 插槽名 | 说明 |
| ----- | ---- |
| default | 自定义底部内容，如按钮或操作区域 |
| image | 自定义图片内容 |
| description | 自定义描述内容 |

## 最佳实践

### 适合的场景

- 搜索或筛选结果为空
- 列表、表格或内容页无数据
- 初始化状态下的提示引导
- 内容创建或数据采集前的空白状态
- 错误状态的友好提示

### 设计建议

1. **明确提示原因**：说明为什么是空状态（如"未找到匹配结果"比"无数据"更具体）
2. **提供引导操作**：给用户明确的下一步指引，如"添加新项目"或"重置筛选条件"
3. **风格一致性**：确保空状态设计风格与应用整体设计保持一致
4. **避免过度动画**：虽然动画可以提升体验，但应保持适度，避免分散用户注意力
5. **响应式设计**：确保空状态在不同屏幕尺寸下都能良好显示
6. **微交互设计**：考虑添加微妙的交互动效，提升用户体验
7. **暗色模式优化**：确保在暗色模式下保持足够的对比度和可读性

## 视觉效果增强技巧

### 3D 浮动效果

利用 CSS transform 和 perspective 属性创建轻量级 3D 效果:

```css
.perspective-500 {
  perspective: 500px;
}

.empty-float {
  animation: empty-float 5s infinite ease-in-out;
}

@keyframes empty-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
```

### 渐变与动画组合

结合 CSS 渐变和动画效果创建更生动的视觉体验:

```vue
<template>
  <div class="w-24 h-24 relative">
    <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 rounded-full animate-pulse"></div>
    <div class="absolute inset-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
      <!-- 图标内容 -->
    </div>
  </div>
</template>
```

### 群组悬停效果

使用 group 和 group-hover 实现复杂的交互效果:

```html
<div class="group">
  <element class="transition-transform group-hover:scale-110">
    <!-- 内容 -->
  </element>
  <element class="opacity-0 group-hover:opacity-100">
    <!-- 悬停时显示的内容 -->
  </element>
</div>
```

## 无障碍

- 图片提供了合适的 `alt` 属性
- 组件符合适当的对比度要求
- 动画可以通过 `animation="none"` 选项禁用，以支持用户的减弱动画偏好设置
- 新增的微交互设计遵循WCAG 2.1标准

## 浏览器兼容性

组件使用现代 CSS 特性，支持所有主流现代浏览器。为了在旧浏览器中获得最佳体验，建议使用 autoprefixer。3D 变换和高级动画效果可能在旧版浏览器中降级显示。
