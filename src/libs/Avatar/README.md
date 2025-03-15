# Avatar 头像组件

基于 Vue 3 + TypeScript + TailwindCSS 实现的头像组件，支持多种显示方式、状态指示器和暗黑模式。

## 特性

- 支持图片、文字缩写和默认占位符三种形式
- 六种预设尺寸（xs, sm, md, lg, xl, 2xl）
- 圆形和方形两种形状选项
- 状态指示器（在线、离线、忙碌、离开）
- 多种状态指示器位置
- 支持用户资料卡片模式
- 完全支持暗黑模式
- 自定义边框效果

## 安装

```bash
# 使用 npm 安装组件
npm install your-component-library

# 或者使用 yarn
yarn add your-component-library
```

## 基础用法

### 导入组件

```vue
<script setup lang="ts">
import { Avatar } from 'your-component-library';
</script>

<template>
  <Avatar src="/path/to/avatar.jpg" size="md" />
</template>
```

### 图片头像

最基础的用法是展示用户头像图片：

```vue
<Avatar src="/path/to/avatar.jpg" />
```

### 文字头像

当没有图片时，可以显示用户名缩写：

```vue
<Avatar :src="''" initials="ZK" />
```

### 默认占位符

当既没有图片也没有提供文字缩写时，将显示默认占位符：

```vue
<Avatar />
```

## 属性 (Props)

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| src | string | '' | 头像图片源 |
| alt | string | '' | 图片替代文本 |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' | 'md' | 头像尺寸 |
| shape | 'circle' \| 'square' | 'circle' | 头像形状 |
| status | 'online' \| 'offline' \| 'busy' \| 'away' \| null | null | 状态指示器 |
| statusPosition | 'top-right' \| 'bottom-right' | 'top-right' | 状态指示器位置 |
| initials | string | '' | 没有图片时显示的文字 |
| name | string | '' | 显示名称（用于资料卡片） |
| description | string | '' | 显示描述（用于资料卡片） |
| bordered | boolean | false | 是否显示边框 |
| profile | boolean | false | 是否以资料卡片模式显示 |
| customClass | string | '' | 自定义类 |

## 事件 (Events)

| 事件名 | 回调参数 | 描述 |
|--------|----------|------|
| click | - | 点击头像或资料卡片时触发 |

## 示例

### 不同尺寸

```vue
<Avatar src="/avatar.jpg" size="xs" />
<Avatar src="/avatar.jpg" size="sm" />
<Avatar src="/avatar.jpg" size="md" />
<Avatar src="/avatar.jpg" size="lg" />
<Avatar src="/avatar.jpg" size="xl" />
<Avatar src="/avatar.jpg" size="2xl" />
```

### 不同形状

```vue
<Avatar src="/avatar.jpg" shape="circle" />
<Avatar src="/avatar.jpg" shape="square" />
```

### 边框效果

```vue
<Avatar src="/avatar.jpg" :bordered="true" />
```

### 状态指示器

```vue
<Avatar src="/avatar.jpg" status="online" />
<Avatar src="/avatar.jpg" status="offline" />
<Avatar src="/avatar.jpg" status="busy" />
<Avatar src="/avatar.jpg" status="away" />
```

### 状态指示器位置

```vue
<Avatar src="/avatar.jpg" status="online" statusPosition="top-right" />
<Avatar src="/avatar.jpg" status="online" statusPosition="bottom-right" />
```

### 资料卡片模式

```vue
<Avatar 
  src="/avatar.jpg" 
  name="张三" 
  description="前端工程师" 
  profile
  @click="handleProfileClick" 
/>
```

## 暗黑模式支持

Avatar 组件已内置支持暗黑模式，无需额外配置。只要在应用的根元素上添加 `.dark` 类，组件就会自动切换为暗色样式：

```html
<!-- 启用暗黑模式 -->
<div class="dark">
  <Avatar src="/avatar.jpg" />
</div>
```

## 最佳实践

1. 根据界面布局选择合适的尺寸，较大的头像适用于个人主页，较小的头像适用于评论区或列表项
2. 当没有用户图片时，使用 `initials` 属性显示用户名缩写，提高识别度
3. 通过 `status` 属性展示用户在线状态，增强交互体验
4. 在聊天应用中，结合 `status` 和 `statusPosition` 灵活设置状态指示器
5. 使用 `profile` 模式创建完整的用户信息卡片
6. 在暗色主题中，边框可以帮助区分头像与背景，考虑使用 `bordered` 属性

## 实用配置示例

```vue
// 用户评论区的小头像
<Avatar src="/user-avatar.jpg" size="sm" />

// 用户资料页面的大头像
<Avatar src="/user-avatar.jpg" size="xl" bordered />

// 带在线状态的聊天头像
<Avatar src="/user-avatar.jpg" status="online" />

// 用户资料卡片
<Avatar 
  src="/user-avatar.jpg" 
  name="张三" 
  description="前端工程师" 
  profile 
  @click="handleProfileClick" 
/>

// 无图片时显示文字缩写
<Avatar :src="''" initials="ZK" />
```
