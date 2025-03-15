// 基础颜色代码示例
export const basicColorCode = `\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="默认蓝色" />
    <Badge text="红色" color="red" />
    <Badge text="橙色" color="orange" />
    <Badge text="琥珀色" color="amber" />
    <Badge text="黄色" color="yellow" />
    <Badge text="青柠色" color="lime" />
    <Badge text="绿色" color="green" />
    <Badge text="翠绿色" color="emerald" />
    <Badge text="蓝绿色" color="teal" />
    <Badge text="青色" color="cyan" />
    <Badge text="天蓝色" color="sky" />
    <Badge text="靛青色" color="indigo" />
    <Badge text="紫罗兰" color="violet" />
    <Badge text="紫色" color="purple" />
    <Badge text="品红色" color="fuchsia" />
    <Badge text="粉色" color="pink" />
    <Badge text="玫瑰色" color="rose" />
  </div>
</template>
\`\`\``;

export const grayScaleCode = `\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="石板灰" color="slate" />
    <Badge text="灰色" color="gray" />
    <Badge text="锌灰" color="zinc" />
    <Badge text="中性灰" color="neutral" />
    <Badge text="石灰" color="stone" />
  </div>
</template>
\`\`\``;

export const thematicColorCode = `\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="默认" />
    <Badge text="主要" theme="primary" />
    <Badge text="次要" theme="secondary" />
    <Badge text="成功" theme="success" />
    <Badge text="警告" theme="warning" />
    <Badge text="危险" theme="danger" />
    <Badge text="信息" theme="info" />
  </div>
</template>
\`\`\``;

export const variantSoftCode = `\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="主要" theme="primary" variant="soft" />
    <Badge text="次要" theme="secondary" variant="soft" />
    <Badge text="成功" theme="success" variant="soft" />
    <Badge text="警告" theme="warning" variant="soft" />
    <Badge text="危险" theme="danger" variant="soft" />
    <Badge text="信息" theme="info" variant="soft" />
  </div>
</template>
\`\`\``;

export const variantSolidCode = `\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="主要" theme="primary" variant="solid" />
    <Badge text="次要" theme="secondary" variant="solid" />
    <Badge text="成功" theme="success" variant="solid" />
    <Badge text="警告" theme="warning" variant="solid" />
    <Badge text="危险" theme="danger" variant="solid" />
    <Badge text="信息" theme="info" variant="solid" />
  </div>
</template>
\`\`\``;

export const variantOutlineCode = `\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="主要" theme="primary" variant="outline" />
    <Badge text="次要" theme="secondary" variant="outline" />
    <Badge text="成功" theme="success" variant="outline" />
    <Badge text="警告" theme="warning" variant="outline" />
    <Badge text="危险" theme="danger" variant="outline" />
    <Badge text="信息" theme="info" variant="outline" />
  </div>
</template>
\`\`\``;

export const sizeOptionsCode = `\`\`\`vue
<template>
  <div class="flex items-center gap-3">
    <Badge text="小号标签" size="sm" theme="primary" />
    <Badge text="中号标签" size="md" theme="primary" />
    <Badge text="大号标签" size="lg" theme="primary" />
  </div>
</template>
\`\`\``;

export const roundedOptionsCode = `\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="方角 (sm)" rounded="sm" theme="primary" />
    <Badge text="中等圆角 (md)" rounded="md" theme="primary" />
    <Badge text="大圆角 (lg)" rounded="lg" theme="primary" />
    <Badge text="胶囊形状 (full)" rounded="full" theme="primary" />
  </div>
</template>
\`\`\``;

export const interactiveBadgesCode = `\`\`\`vue
<template>
  <div>
    <div class="flex flex-wrap gap-3">
      <Badge text="可点击" clickable @click="handleBadgeClick('普通点击')" theme="primary" title="点击我试试" />
      <Badge text="带图标" clickable @click="handleBadgeClick('带图标点击')" theme="success" rounded="full">
        <template #prefix>
          <div class="icon-[material-symbols--check-circle-rounded] mr-1 h-3 w-3" />
        </template>
      </Badge>
      <Badge text="删除标签" theme="danger" clickable @click="handleBadgeClick('删除')" rounded="full">
        <template #suffix>
          <div class="icon-[material-symbols--close-rounded] ml-1 h-3 w-3" />
        </template>
      </Badge>
    </div>
    <div class="mt-4 text-sm text-gray-600 dark:text-gray-400" v-if="lastClicked">
      最后点击: {{ lastClicked }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const lastClicked = ref('');

const handleBadgeClick = (name) => {
  lastClicked.value = name;
};
</script>
\`\`\``;

export const productLabelsCode = `\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <Badge text="新品" theme="primary" variant="solid" rounded="full" />
    <Badge text="热销" color="rose" variant="solid" rounded="full" />
    <Badge text="限时折扣" color="amber" variant="solid" rounded="full" />
    <Badge text="库存紧张" theme="danger" variant="soft" rounded="full" />
    <Badge text="预售" color="purple" variant="outline" rounded="full" />
  </div>
</template>
\`\`\``;

export const statusLabelsCode = `\`\`\`vue
<template>
  <div class="flex flex-wrap gap-3">
    <div class="flex items-center gap-2">
      <div class="h-2 w-2 rounded-full bg-green-500"></div>
      <Badge text="在线" theme="success" variant="soft" />
    </div>
    <div class="flex items-center gap-2">
      <div class="h-2 w-2 rounded-full bg-yellow-500"></div>
      <Badge text="离开" theme="warning" variant="soft" />
    </div>
    <div class="flex items-center gap-2">
      <div class="h-2 w-2 rounded-full bg-gray-400"></div>
      <Badge text="离线" theme="secondary" variant="soft" />
    </div>
    <div class="flex items-center gap-2">
      <div class="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
      <Badge text="错误" theme="danger" variant="soft" />
    </div>
  </div>
</template>
\`\`\``;

export const notificationBadgesCode = `\`\`\`vue
<template>
  <div class="flex items-center gap-8">
    <div class="relative">
      <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
        <div class="icon-[material-symbols--circle-notifications-outline-rounded] h-6 w-6 text-gray-800 dark:text-white" />
      </button>
      <Badge text="3" theme="danger" variant="solid" rounded="full" size="sm" class="absolute -right-1 -top-1" />
    </div>

    <div class="relative">
      <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
        <div class="icon-[material-symbols--mark-email-unread-outline-rounded] h-6 w-6 text-gray-800 dark:text-white" />
      </button>
      <Badge text="12" theme="primary" variant="solid" rounded="full" size="sm" class="absolute -right-1 -top-1" />
    </div>

    <div class="relative">
      <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
        <div class="icon-[material-symbols--shopping-cart-outline-rounded] h-6 w-6 text-gray-800 dark:text-white" />
      </button>
      <Badge text="购物车" color="emerald" variant="soft" rounded="full" size="sm" class="absolute -right-12 -top-2" />
    </div>
  </div>
</template>
\`\`\``;

export const userStatusCardCode = `\`\`\`vue
<template>
  <div class="max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
    <div class="mb-3 flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
        <div class="icon-[material-symbols--supervised-user-circle-outline] h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <div class="font-medium text-gray-900 dark:text-white">用户状态</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">简单的用户信息卡片</div>
      </div>
    </div>
    <div class="flex flex-wrap gap-2">
      <Badge text="正常" theme="success" />
      <Badge text="已认证" theme="info" />
      <Badge text="会员" color="amber" />
    </div>
  </div>
</template>
\`\`\``;

export const systemStatusCardCode = `\`\`\`vue
<template>
  <div class="max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
    <div class="mb-3 flex items-center justify-between">
      <div class="font-medium text-gray-900 dark:text-white">系统状态</div>
      <Badge text="正常运行" theme="success" variant="soft" rounded="full" />
    </div>
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-700 dark:text-gray-300">API 服务</span>
        <Badge text="在线" theme="success" size="sm" />
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-700 dark:text-gray-300">数据库</span>
        <Badge text="在线" theme="success" size="sm" />
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-700 dark:text-gray-300">存储服务</span>
        <Badge text="维护中" theme="warning" size="sm" />
      </div>
    </div>
  </div>
</template>
\`\`\``;

export const projectTagsCardCode = `\`\`\`vue
<template>
  <div class="max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
    <div class="mb-3 flex items-center justify-between">
      <div class="font-medium text-gray-900 dark:text-white">项目标签</div>
      <Badge text="5 个标签" color="gray" variant="soft" size="sm" />
    </div>
    <div class="flex flex-wrap gap-2">
      <Badge text="前端" color="sky" variant="soft" rounded="lg" clickable />
      <Badge text="后端" color="emerald" variant="soft" rounded="lg" clickable />
      <Badge text="设计" color="purple" variant="soft" rounded="lg" clickable />
      <Badge text="UI/UX" color="fuchsia" variant="soft" rounded="lg" clickable />
      <Badge text="产品" color="amber" variant="soft" rounded="lg" clickable />
    </div>
  </div>
</template>
\`\`\``;
