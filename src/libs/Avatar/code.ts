// 基础用法代码示例
export const basicUsageCode = `\`\`\`vue
<template>
  <div class="flex items-center gap-4 flex-wrap">
    <Avatar src="/path/to/avatar.jpg" size="md" />
    <Avatar :src="''" initials="ZK" size="md" />
    <Avatar size="md" />
  </div>
</template>
\`\`\``;

// 不同尺寸代码示例
export const differentSizesCode = `\`\`\`vue
<template>
  <div class="flex items-end gap-4 flex-wrap">
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="xs" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xs</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="sm" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">sm</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="md" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">md</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">lg</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="xl" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xl</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="2xl" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">2xl</span>
    </div>
  </div>
</template>
\`\`\``;

// 不同形状代码示例
export const differentShapesCode = `\`\`\`vue
<template>
  <div class="flex gap-8">
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" shape="circle" />
      <span class="mt-2 text-sm text-gray-500 dark:text-gray-400">圆形</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" shape="square" />
      <span class="mt-2 text-sm text-gray-500 dark:text-gray-400">方形</span>
    </div>
  </div>
</template>
\`\`\``;

// 边框效果代码示例
export const borderEffectsCode = `\`\`\`vue
<template>
  <div class="flex gap-8">
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" :bordered="false" />
      <span class="mt-2 text-sm text-gray-500 dark:text-gray-400">无边框</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" :bordered="true" />
      <span class="mt-2 text-sm text-gray-500 dark:text-gray-400">有边框</span>
    </div>
  </div>
</template>
\`\`\``;

// 状态指示器 - 顶部位置代码示例
export const statusIndicatorsTopCode = `\`\`\`vue
<template>
  <div class="flex gap-4 flex-wrap">
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="online" statusPosition="top-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">在线</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="offline" statusPosition="top-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">离线</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="busy" statusPosition="top-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">忙碌</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="away" statusPosition="top-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">离开</span>
    </div>
  </div>
</template>
\`\`\``;

// 状态指示器 - 底部位置代码示例
export const statusIndicatorsBottomCode = `\`\`\`vue
<template>
  <div class="flex gap-4 flex-wrap">
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="online" statusPosition="bottom-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">在线</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="offline" statusPosition="bottom-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">离线</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="busy" statusPosition="bottom-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">忙碌</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar src="/path/to/avatar.jpg" size="lg" status="away" statusPosition="bottom-right" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">离开</span>
    </div>
  </div>
</template>
\`\`\``;

// 不同形状的状态指示器代码示例
export const statusWithShapesCode = `\`\`\`vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div>
      <h3 class="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">圆形头像</h3>
      <div class="flex gap-4 flex-wrap">
        <div class="flex flex-col items-center">
          <Avatar src="/path/to/avatar.jpg" size="lg" shape="circle" status="online" />
          <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">在线</span>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">方形头像</h3>
      <div class="flex gap-4 flex-wrap">
        <div class="flex flex-col items-center">
          <Avatar src="/path/to/avatar.jpg" size="lg" shape="square" status="online" />
          <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">在线</span>
        </div>
      </div>
    </div>
  </div>
</template>
\`\`\``;

// 文字头像代码示例
export const textAvatarCode = `\`\`\`vue
<template>
  <div class="flex items-end gap-4 flex-wrap">
    <div class="flex flex-col items-center">
      <Avatar :src="''" initials="ZK" size="xs" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xs</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar :src="''" initials="ZK" size="sm" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">sm</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar :src="''" initials="ZK" size="md" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">md</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar :src="''" initials="ZK" size="lg" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">lg</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar :src="''" initials="ZK" size="xl" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xl</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar :src="''" initials="ZK" size="2xl" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">2xl</span>
    </div>
  </div>
</template>
\`\`\``;

// 默认占位符代码示例
export const placeholderAvatarCode = `\`\`\`vue
<template>
  <div class="flex items-end gap-4 flex-wrap">
    <div class="flex flex-col items-center">
      <Avatar size="xs" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xs</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar size="sm" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">sm</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar size="md" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">md</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar size="lg" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">lg</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar size="xl" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">xl</span>
    </div>
    <div class="flex flex-col items-center">
      <Avatar size="2xl" />
      <span class="mt-2 text-xs text-gray-500 dark:text-gray-400">2xl</span>
    </div>
  </div>
</template>
\`\`\``;

// 资料卡片模式代码示例
export const profileCardCode = `\`\`\`vue
<template>
  <div class="space-y-4 max-w-md">
    <!-- 带名称和描述的资料卡片 -->
    <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <Avatar 
        src="/path/to/avatar.jpg" 
        name="张三" 
        description="前端工程师" 
        size="md" 
        profile 
        @click="handleProfileClick" 
      />
    </div>

    <!-- 只有名称的资料卡片 -->
    <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <Avatar 
        src="/path/to/avatar.jpg" 
        name="李四" 
        size="md" 
        profile 
        @click="handleProfileClick" 
      />
    </div>

    <!-- 使用文字头像的资料卡片 -->
    <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <Avatar 
        :src="''" 
        initials="WW" 
        name="王五" 
        description="产品经理" 
        size="md" 
        profile 
        @click="handleProfileClick" 
      />
    </div>

    <!-- 使用默认占位符的资料卡片 -->
    <div class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <Avatar 
        name="匿名用户" 
        description="游客" 
        size="md" 
        profile 
        @click="handleProfileClick" 
      />
    </div>
  </div>
</template>

<script setup>
const handleProfileClick = () => {
  console.log('资料卡片被点击');
};
</script>
\`\`\``;

// 暗黑模式代码示例
export const darkModeCode = `\`\`\`vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="p-6 bg-white rounded-lg shadow-sm">
      <h3 class="text-lg font-medium mb-4 text-gray-800">亮色模式</h3>
      <div class="flex gap-4 flex-wrap">
        <Avatar src="/path/to/avatar.jpg" size="md" status="online" />
        <Avatar :src="''" initials="ZK" size="md" />
        <Avatar size="md" />
      </div>
    </div>
    <div class="p-6 bg-gray-900 rounded-lg shadow-sm">
      <h3 class="text-lg font-medium mb-4 text-white">暗黑模式</h3>
      <div class="dark flex gap-4 flex-wrap">
        <Avatar src="/path/to/avatar.jpg" size="md" status="online" />
        <Avatar :src="''" initials="ZK" size="md" />
        <Avatar size="md" />
      </div>
    </div>
  </div>
</template>
\`\`\``;
