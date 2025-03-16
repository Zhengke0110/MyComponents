<template>
  <div class="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
    <h1 class="mb-8 text-3xl font-bold">下拉菜单组件</h1>

    <!-- 基础用法 -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold">基础用法</h2>
      <CodePreview :code="basicUsageCode">
        <div class="flex flex-wrap items-center gap-4 rounded-md bg-white p-10 shadow-sm dark:bg-gray-800">
          <Dropdowns label="选项菜单" :items="baseItems" @select="(item) => handleSelect('基础', item)" />
          <div v-if="lastSelected.name === '基础'" class="mt-3 rounded bg-gray-50 p-2 text-sm dark:bg-gray-700">
            <div class="font-medium text-gray-700 dark:text-gray-300">
              选中项：{{
                lastSelected.item
                  ? lastSelected.item.label || lastSelected.item.id
                  : "无"
              }}
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              选择时间：{{ lastSelected.time }}
            </div>
          </div>
        </div>
      </CodePreview>
    </section>

    <!-- 不同尺寸 -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold">不同尺寸</h2>
      <CodePreview :code="sizeVariantsCode">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="flex flex-col items-center gap-2 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800">
            <h3 class="mb-2 text-base font-medium">小尺寸 (sm)</h3>
            <Dropdowns label="小尺寸" size="sm" :items="sizeItems" @select="(item) => handleSelect('小尺寸', item)" />
          </div>
          <div class="flex flex-col items-center gap-2 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800">
            <h3 class="mb-2 text-base font-medium">中尺寸 (md)</h3>
            <Dropdowns label="中尺寸" size="md" :items="sizeItems" @select="(item) => handleSelect('中尺寸', item)" />
          </div>
          <div class="flex flex-col items-center gap-2 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800">
            <h3 class="mb-2 text-base font-medium">大尺寸 (lg)</h3>
            <Dropdowns label="大尺寸" size="lg" :items="sizeItems" @select="(item) => handleSelect('大尺寸', item)" />
          </div>
        </div>
      </CodePreview>
    </section>

    <!-- 颜色主题 -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold">颜色主题</h2>
      <CodePreview :code="themeColorsCode">
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div v-for="color in ['blue', 'green', 'red', 'amber'] as const" :key="color"
            class="flex flex-col items-center gap-2 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800">
            <h3 class="mb-2 text-base font-medium">
              {{ getColorName(color) }}
            </h3>
            <Dropdowns :label="getColorName(color)" :theme="color" :items="colorItems"
              @select="(item) => handleSelect(color, item)" />
          </div>
        </div>
      </CodePreview>
    </section>

    <!-- 不同变体 -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold">不同变体</h2>
      <CodePreview :code="variantStylesCode">
        <div class="flex flex-wrap gap-6 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800">
          <div class="flex flex-col items-center">
            <h3 class="mb-3 text-base font-medium">实心 (solid)</h3>
            <Dropdowns label="实心按钮" theme="blue" variant="solid" :items="variantItems" />
          </div>
          <div class="flex flex-col items-center">
            <h3 class="mb-3 text-base font-medium">轮廓 (outline)</h3>
            <Dropdowns label="轮廓按钮" theme="blue" variant="outline" :items="variantItems" />
          </div>
        </div>
      </CodePreview>
    </section>

    <!-- 危险操作 -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold">危险操作</h2>
      <CodePreview :code="dangerActionsCode">
        <div class="flex flex-wrap gap-6 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800">
          <Dropdowns label="项目操作" :items="dangerItems" @select="(item) => handleSelect('危险操作', item)" />
          <div v-if="lastSelected.name === '危险操作'" class="mt-3 rounded bg-gray-50 p-2 text-sm dark:bg-gray-700">
            <div class="font-medium text-gray-700 dark:text-gray-300">
              选中项：{{
                lastSelected.item
                  ? lastSelected.item.label || lastSelected.item.id
                  : "无"
              }}
            </div>
            <div class="text-xs text-red-500" v-if="lastSelected.item && lastSelected.item.danger">
              这是一个危险操作！
            </div>
          </div>
        </div>
      </CodePreview>
    </section>

    <!-- 禁用项目 -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold">禁用项目</h2>
      <CodePreview :code="disabledItemsCode">
        <div class="flex flex-wrap gap-6 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800">
          <Dropdowns label="设置选项" :items="disabledItems" @select="(item) => handleSelect('禁用项目', item)" />
          <div v-if="lastSelected.name === '禁用项目'" class="mt-3 rounded bg-gray-50 p-2 text-sm dark:bg-gray-700">
            <div class="font-medium text-gray-700 dark:text-gray-300">
              选中项：{{
                lastSelected.item
                  ? lastSelected.item.label || lastSelected.item.id
                  : "无"
              }}
            </div>
          </div>
        </div>
      </CodePreview>
    </section>

    <!-- 自定义样式 -->
    <section class="mb-12">
      <h2 class="mb-4 text-xl font-semibold">自定义样式</h2>
      <CodePreview :code="customStylesCode">
        <div class="flex flex-wrap gap-6 rounded-md bg-white p-6 shadow-sm dark:bg-gray-800">
          <Dropdowns label="自定义按钮" :items="baseItems"
            button-class="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            icon-class="icon-[solar--alt-arrow-down-broken]" />
        </div>
      </CodePreview>
    </section>

    <!-- API 文档部分 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        组件API
      </h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          属性 (Props)
        </h3>
        <div class="mb-6 overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                  属性名
                </th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                  类型
                </th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                  默认值
                </th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                  描述
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  label
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  string
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  按钮上显示的文本
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  items
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  DropdownItem[]
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">[]</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  下拉菜单项数组
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  size
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  'sm' | 'md' | 'lg'
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'md'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  按钮和菜单尺寸
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  theme
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  ColorType
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  'gray'
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  主题颜色
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  variant
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  'solid' | 'outline'
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  'solid'
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  按钮样式变体
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  buttonClass
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  string
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  自定义按钮类名
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  autoAdjust
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  boolean
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  是否自动调整菜单位置
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          事件 (Events)
        </h3>
        <div class="mb-6 overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                  事件名
                </th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                  回调参数
                </th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">
                  描述
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  select
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  (item: DropdownItem)
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  当选择菜单项时触发
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  open
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  当菜单打开时触发
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  close
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  当菜单关闭时触发
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        小结与最佳实践
      </h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300">
            下拉菜单组件是一个灵活而强大的导航工具，用于在有限空间内提供更多选择。以下是一些使用建议：
          </p>

          <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              保持菜单项简洁：每个下拉菜单应该包含不超过10个选项，避免过长的菜单
            </li>
            <li>使用分割线将相关操作分组，提高可读性</li>
            <li>对于删除等危险操作，使用 danger: true 属性进行视觉警示</li>
            <li>提供键盘支持：确保你的应用可以通过键盘完全操作下拉菜单</li>
            <li>适当使用图标增强可视化提示，但不要过度使用</li>
          </ul>

          <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
              <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
              提示
            </h4>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              Dropdowns 组件已完全适配暗色模式，无需额外配置。通过设置 HTML
              根元素上的
              <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">dark</code>
              类即可启用暗色主题。
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Dropdowns from "./Dropdowns";
import CodePreview from "../../components/CodePreview";
import type { DropdownItem } from "./constant";
import {
  basicUsageCode,
  sizeVariantsCode,
  themeColorsCode,
  variantStylesCode,
  dangerActionsCode,
  disabledItemsCode,
  customStylesCode,
} from "./code";

// 基础菜单项
const baseItems: DropdownItem[] = [
  {
    id: "1",
    type: "button",
    label: "编辑",
    icon: "icon-[solar--clapperboard-edit-broken]",
    onClick: () => console.log("编辑按钮点击"),
  },
  {
    id: "2",
    type: "button",
    label: "复制",
    icon: "icon-[solar--copy-broken]",
  },
  { id: "div1", type: "divider" },
  {
    id: "3",
    type: "link",
    label: "了解更多",
    href: "https://example.com",
    icon: "icon-[solar--link-bold-duotone]",
  },
];

// 尺寸展示菜单项
const sizeItems: DropdownItem[] = [
  {
    id: "1",
    type: "button",
    label: "菜单选项",
    icon: "icon-[solar--settings-broken]",
  },
  {
    id: "2",
    type: "button",
    label: "查看详情",
    icon: "icon-[solar--eye-broken]",
  },
  { id: "div1", type: "divider" },
  {
    id: "3",
    type: "button",
    label: "更多选项",
    icon: "icon-[solar--list-broken]",
  },
];

// 颜色主题菜单项
const colorItems: DropdownItem[] = [
  {
    id: "1",
    type: "button",
    label: "设置",
    icon: "icon-[solar--settings-broken]",
  },
  {
    id: "2",
    type: "button",
    label: "用户信息",
    icon: "icon-[solar--user-broken]",
  },
  { id: "div1", type: "divider" },
  {
    id: "3",
    type: "button",
    label: "退出登录",
    icon: "icon-[solar--logout-3-broken]",
  },
];

// 变体菜单项
const variantItems: DropdownItem[] = [
  {
    id: "1",
    type: "button",
    label: "默认选项",
    icon: "icon-[solar--check-circle-broken]",
  },
  {
    id: "2",
    type: "button",
    label: "其他选项",
    icon: "icon-[solar--bookmark-broken]",
  },
];

// 危险操作菜单项
const dangerItems: DropdownItem[] = [
  {
    id: "1",
    type: "button",
    label: "编辑",
    icon: "icon-[solar--pen-broken]",
  },
  { id: "div1", type: "divider" },
  {
    id: "2",
    type: "button",
    label: "删除",
    icon: "icon-[material-symbols--restore-from-trash-outline-rounded]",
    danger: true,
  },
];

// 禁用项菜单项
const disabledItems: DropdownItem[] = [
  {
    id: "1",
    type: "button",
    label: "可用选项",
    icon: "icon-[solar--check-circle-broken]",
  },
  {
    id: "2",
    type: "button",
    label: "禁用选项",
    icon: "icon-[solar--close-circle-broken]",
    disabled: true,
  },
  {
    id: "3",
    type: "button",
    label: "另一个可用选项",
    icon: "icon-[solar--star-broken]",
  },
];

// 记录最后选择的项目
const lastSelected = ref({
  name: "",
  item: null as DropdownItem | null,
  time: "",
});

// 处理选择事件
const handleSelect = (name: string, item: DropdownItem) => {
  lastSelected.value = {
    name,
    item,
    time: new Date().toLocaleTimeString(),
  };
  console.log(`选择了 ${name} 中的项目:`, item);
};

// 颜色名称映射
const getColorName = (color: string): string => {
  const colorMap: Record<string, string> = {
    blue: "蓝色",
    green: "绿色",
    red: "红色",
    amber: "琥珀色",
    indigo: "靛青色",
    purple: "紫色",
    pink: "粉色",
    gray: "灰色",
  };
  return colorMap[color] || color;
};
</script>
