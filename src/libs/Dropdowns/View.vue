<script setup lang="ts">
import Dropdowns from "./Dropdowns";
import type { DropdownItem, ColorType } from "./constant";
// 移除 isDark 导入

const baseItems: DropdownItem[] = [
  {
    id: "1",
    type: "button",
    label: "Edit",
    icon: "icon-[solar--clapperboard-edit-broken]",
    onClick: () => console.log("Edit clicked"),
  },
  {
    id: "2",
    type: "button",
    label: "Duplicate",
    icon: "icon-[solar--copy-broken]",
  },
  { id: "div1", type: "divider" },
  {
    id: "3",
    type: "link",
    label: "Learn more",
    href: "https://example.com",
    icon: "icon-[solar--link-bold-duotone]",
  },
];

const sizeItems: DropdownItem[] = [
  {
    id: "1",
    type: "button",
    label: "Small option",
    icon: "icon-[solar--settings-broken]",
  },
  {
    id: "2",
    type: "button",
    label: "Another option",
    icon: "icon-[solar--user-broken]",
  },
];

const dangerItems: DropdownItem[] = [
  {
    id: "1",
    type: "button",
    label: "Archive project",
    icon: "icon-[solar--archive-check-broken]",
  },
  { id: "div1", type: "divider" },
  {
    id: "2",
    type: "button",
    label: "Delete project",
    icon: "icon-[solar--trash-bin-trash-broken]",
    danger: true,
  },
];

const disabledItems: DropdownItem[] = [
  {
    id: "1",
    type: "button",
    label: "Available option",
    icon: "icon-[solar--check-read-line-duotone]",
  },
  {
    id: "2",
    type: "button",
    label: "Disabled option",
    icon: "icon-[solar--lock-keyhole-broken]",
    disabled: true,
  },
];

// 主题配置
const themeItems: DropdownItem[] = [
  {
    id: "1",
    type: "button",
    label: "System settings",
    icon: "icon-[solar--settings-minimalistic-broken]",
  },
  {
    id: "2",
    type: "button",
    label: "User profile",
    icon: "icon-[solar--user-rounded-broken]",
  },
  { id: "div1", type: "divider" },
  {
    id: "3",
    type: "button",
    label: "Logout",
    icon: "icon-[solar--logout-3-broken]",
  },
];

// 可用的颜色主题
const availableThemes: ColorType[] = [
  "blue",
  "indigo",
  "purple",
  "pink",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "gray",
  "slate",
];

const handleSelect = (item: DropdownItem) => {
  console.log("Selected item:", item);
};

// 安全区域适配演示项
const safeAreaItems: DropdownItem[] = [
  {
    id: "1",
    type: "button",
    label: "这是一个较长的菜单项，用于测试空间不足的情况",
    icon: "icon-[solar--document-text-broken]",
  },
  {
    id: "2",
    type: "button",
    label: "另一个长菜单项，模拟内容溢出",
    icon: "icon-[solar--minimalistic-magnifer-broken]",
  },
  { id: "div1", type: "divider" },
  {
    id: "3",
    type: "button",
    label: "第三个选项",
    icon: "icon-[solar--widget-3-broken]",
  },
  {
    id: "4",
    type: "button",
    label: "第四个选项，测试自动调整位置",
    icon: "icon-[solar--bookmark-square-broken]",
  },
];
</script>

<template>
  <div
    class="min-h-screen bg-white p-6 text-gray-800 transition-colors duration-300 dark:bg-gray-900 dark:text-white"
  >
    <!-- Basic Usage -->
    <section class="mb-8 space-y-4">
      <h2 class="text-xl font-semibold">基础用法</h2>
      <div class="flex flex-wrap gap-4">
        <Dropdowns label="Options" :items="baseItems" @select="handleSelect" />
      </div>
    </section>

    <!-- Different Sizes -->
    <section class="mb-8 space-y-4">
      <h2 class="text-xl font-semibold">不同尺寸</h2>
      <div class="flex flex-wrap items-center gap-4">
        <Dropdowns label="Small" size="sm" :items="sizeItems" />
        <Dropdowns label="Medium" size="md" :items="sizeItems" />
        <Dropdowns label="Large" size="lg" :items="sizeItems" />
      </div>
    </section>

    <!-- Theme Colors -->
    <section class="mb-8 space-y-4">
      <h2 class="text-xl font-semibold">主题色</h2>
      <div class="flex flex-wrap gap-4">
        <Dropdowns
          v-for="color in availableThemes.slice(0, 8)"
          :key="color"
          :label="color"
          :items="themeItems"
          :theme="color"
        />
      </div>
    </section>

    <!-- Different Variants -->
    <section class="mb-8 space-y-4">
      <h2 class="text-xl font-semibold">不同变体</h2>
      <div class="flex flex-wrap gap-4">
        <Dropdowns
          label="Solid Blue"
          :items="themeItems"
          theme="blue"
          variant="solid"
        />
        <Dropdowns
          label="Outline Blue"
          :items="themeItems"
          theme="blue"
          variant="outline"
        />
        <Dropdowns
          label="Solid Red"
          :items="themeItems"
          theme="red"
          variant="solid"
        />
        <Dropdowns
          label="Outline Red"
          :items="themeItems"
          theme="red"
          variant="outline"
        />
      </div>
    </section>

    <!-- Custom Styling -->
    <section class="mb-8 space-y-4">
      <h2 class="text-xl font-semibold">自定义样式</h2>
      <Dropdowns
        label="Custom Button"
        :items="baseItems"
        button-class="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-md dark:shadow-purple-900/30"
        icon-class="icon-[solar--alt-arrow-down-broken]"
      />
    </section>

    <!-- With Disabled Items -->
    <section class="mb-8 space-y-4">
      <h2 class="text-xl font-semibold">禁用项目</h2>
      <Dropdowns label="Settings" :items="disabledItems" />
    </section>

    <!-- Danger Actions -->
    <section class="mb-8 space-y-4">
      <h2 class="text-xl font-semibold">危险操作</h2>
      <Dropdowns label="Project Actions" :items="dangerItems" theme="red" />
    </section>

    <!-- 底部弹出位置演示 -->
    <section class="mb-8 space-y-4">
      <h2 class="text-xl font-semibold">底部弹出</h2>
      <div class="flex flex-wrap gap-8">
        <Dropdowns label="默认底部弹出" :items="sizeItems" theme="blue" />
      </div>
    </section>

    <!-- Safe Area Adaptation -->
    <section class="mb-8 space-y-4">
      <h2 class="text-xl font-semibold">安全区域自动调整</h2>
      <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
        当下拉菜单内容过长或靠近边缘时，会自动调整显示位置和大小，避免内容被截断。
      </p>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div class="flex justify-start">
          <Dropdowns
            label="左侧（测试水平溢出）"
            :items="safeAreaItems"
            theme="indigo"
            :auto-adjust="true"
          />
        </div>

        <div class="flex justify-center">
          <Dropdowns
            label="居中"
            :items="safeAreaItems"
            theme="emerald"
            :auto-adjust="true"
          />
        </div>

        <div class="flex justify-end">
          <Dropdowns
            label="右侧（测试水平溢出）"
            :items="safeAreaItems"
            theme="rose"
            :auto-adjust="true"
          />
        </div>
      </div>

      <div class="mt-12 flex justify-between">
        <!-- 关闭自动调整的对比 -->
        <Dropdowns
          label="禁用自动调整"
          :items="safeAreaItems"
          theme="red"
          :auto-adjust="false"
        />

        <div class="flex gap-2">
          <span class="text-gray-600 dark:text-gray-300">状态:</span>
          <span
            class="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
          >
            自动调整开启
          </span>
        </div>
      </div>
    </section>

    <!-- API 文档部分 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        组件API
      </h2>
      <div
        class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
      >
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          属性 (Props)
        </h3>
        <div class="mb-6 overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
                  属性名
                </th>
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
                  类型
                </th>
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
                  默认值
                </th>
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
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
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  下拉菜单选项数组
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
                  组件大小
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  theme
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  string
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
                  按钮变体样式
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
                  是否自动调整位置
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
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
                  事件名
                </th>
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
                  参数
                </th>
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
                  说明
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  select
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  (item: DropdownItem)
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  选择菜单项时触发
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  open
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  菜单打开时触发
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  close
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  菜单关闭时触发
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          DropdownItem 类型
        </h3>
        <div class="overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
                  属性名
                </th>
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
                  类型
                </th>
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
                  必填
                </th>
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
                  说明
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  id
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  string | number
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  菜单项唯一标识
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  type
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  'button' | 'link' | 'divider'
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  菜单项类型
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  label
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  string
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  显示文本（type为divider时可选）
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  icon
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  string
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  图标类名
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  href
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  string
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  链接地址（type为link时必填）
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  disabled
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  boolean
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  是否禁用
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  danger
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  boolean
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  是否为危险操作（显示红色）
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  onClick
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  () => void
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  点击时的回调函数
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 键盘交互 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        键盘交互
      </h2>
      <div
        class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
      >
        <div class="overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
                  按键
                </th>
                <th
                  class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                >
                  功能
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  Enter / Space
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  打开/关闭下拉菜单或选择当前项
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  ↑ 方向键
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  选择上一个菜单项
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  ↓ 方向键
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  选择下一个菜单项
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  Esc
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  关闭下拉菜单
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">
                  Tab
                </td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">
                  移动到下一个元素（会关闭菜单）
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 小结与最佳实践 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        小结与最佳实践
      </h2>
      <div
        class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
      >
        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300">
            Dropdowns
            组件是一个功能完整的下拉菜单组件，适用于各种导航、选项列表和操作菜单场景。
            以下是一些使用建议：
          </p>

          <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <span class="font-medium">结构化菜单项</span>：使用分割线
              (divider) 对相关选项进行分组，提高可读性和逻辑清晰度
            </li>
            <li>
              <span class="font-medium">视觉层次</span
              >：为重要操作选择合适的颜色主题，常用操作使用常规样式，危险操作使用红色
            </li>
            <li>
              <span class="font-medium">状态反馈</span>：为禁用的选项使用
              disabled 属性，提供清晰的视觉反馈
            </li>
            <li>
              <span class="font-medium">图标辅助</span
              >：在菜单项中使用图标来增强识别性和可用性
            </li>
            <li>
              <span class="font-medium">智能定位</span>：利用 autoAdjust
              属性确保菜单内容在任何位置都完全可见
            </li>
            <li>
              <span class="font-medium">键盘可访问性</span
              >：确保用户可以通过键盘完全操作下拉菜单
            </li>
          </ul>

          <div
            class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20"
          >
            <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
              <span
                class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"
              ></span>
              暗色模式适配
            </h4>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              Dropdowns 组件已内置完整的暗色模式支持，无需额外配置。通过
              Tailwind CSS 的
              <code
                class="rounded bg-blue-100 px-1 py-0.5 font-mono text-xs dark:bg-blue-800/60"
                >dark:</code
              >
              变体自动应用合适的样式。只需确保您的应用根元素有
              <code
                class="rounded bg-blue-100 px-1 py-0.5 font-mono text-xs dark:bg-blue-800/60"
                >.dark</code
              >
              类即可激活暗色主题。
            </p>
          </div>

          <div class="mt-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-700/30">
            <h4
              class="mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              常见使用场景
            </h4>
            <div class="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
              <p class="flex items-center">
                <span
                  class="icon-[material-symbols--check-small-rounded] mr-1.5 h-5 w-5 text-green-600 dark:text-green-400"
                ></span>
                导航菜单和页面跳转
              </p>
              <p class="flex items-center">
                <span
                  class="icon-[material-symbols--check-small-rounded] mr-1.5 h-5 w-5 text-green-600 dark:text-green-400"
                ></span>
                操作菜单（编辑、删除、共享等）
              </p>
              <p class="flex items-center">
                <span
                  class="icon-[material-symbols--check-small-rounded] mr-1.5 h-5 w-5 text-green-600 dark:text-green-400"
                ></span>
                用户设置和偏好配置
              </p>
              <p class="flex items-center">
                <span
                  class="icon-[material-symbols--check-small-rounded] mr-1.5 h-5 w-5 text-green-600 dark:text-green-400"
                ></span>
                筛选和排序控件
              </p>
              <p class="flex items-center">
                <span
                  class="icon-[material-symbols--check-small-rounded] mr-1.5 h-5 w-5 text-green-600 dark:text-green-400"
                ></span>
                更多操作（overflow menu）
              </p>
            </div>
          </div>

          <div
            class="rounded-lg border border-amber-100 bg-amber-50 p-4 dark:border-amber-900/30 dark:bg-amber-900/10"
          >
            <h4
              class="mb-2 flex items-center text-amber-800 dark:text-amber-300"
            >
              <span
                class="icon-[material-symbols--warning-outline-rounded] mr-2 h-5 w-5"
              ></span>
              注意事项
            </h4>
            <ul
              class="ml-7 list-disc space-y-1 text-sm text-amber-700 dark:text-amber-300"
            >
              <li>避免在一个下拉菜单中放置过多选项，建议不超过 10 个</li>
              <li>确保菜单项标签简短明确，避免过长文本</li>
              <li>危险操作（如删除）应该使用 danger 属性并考虑添加二次确认</li>
              <li>为了最佳的移动体验，确保点击区域足够大，便于触摸操作</li>
            </ul>
          </div>

          <p class="text-gray-700 dark:text-gray-300">
            合理配置的下拉菜单可以让用户界面更加整洁，同时保持强大的功能性和良好的用户体验。
            通过这些最佳实践，您可以创建既直观又高效的交互界面。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
/* 暗色模式样式 */
:root {
  color-scheme: light;
}

/* 当HTML元素具有dark类时应用暗色模式 */
html.dark {
  color-scheme: dark;
}
</style>
