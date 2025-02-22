<template>
  <div class="space-y-12 p-32">
    <!-- Basic Usage -->
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex space-x-12">
        <Popover placement="top" :delay="200">
          <template #reference>
            <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              悬停提示
            </button>
          </template>
          <div class="p-2">简单的提示文本</div>
        </Popover>

        <Popover trigger="click" placement="bottom">
          <template #reference>
            <button class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              点击提示
            </button>
          </template>
          <div class="p-2 w-48">点击显示的提示内容，支持更长的文本说明</div>
        </Popover>
      </div>
    </section>

    <!-- Placement Demo -->
    <section>
      <h2 class="text-xl font-bold mb-4">位置示例</h2>
      <div class="grid grid-cols-4 gap-4 max-w-2xl">
        <Popover
          v-for="position in positions"
          :key="position.value"
          :placement="position.value"
          :offset="12"
          :arrow="true"
        >
          <template #reference>
            <button :class="[buttonBaseClass, position.btnClass]">
              {{ position.label }} {{ position.icon }}
            </button>
          </template>
          <div class="p-2 text-sm">
            Placement: {{ position.value }}
          </div>
        </Popover>
      </div>
    </section>

    <!-- Advanced Usage -->
    <section>
      <h2 class="text-xl font-bold mb-4">高级用法</h2>
      <div class="flex space-x-8">
        <!-- Confirmation Dialog -->
        <Popover trigger="click" placement="top" :persistent="true">
          <template #reference>
            <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              删除操作
            </button>
          </template>
          <div class="p-4 w-64">
            <h3 class="font-medium text-red-500">确认删除？</h3>
            <p class="text-sm text-gray-500 mt-1">此操作不可恢复</p>
            <div class="mt-4 flex justify-end space-x-2">
              <button class="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                取消
              </button>
              <button class="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                确认
              </button>
            </div>
          </div>
        </Popover>

        <!-- Custom Content -->
        <Popover placement="right" :offset="12">
          <template #reference>
            <div class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer">
              自定义内容
            </div>
          </template>
          <div class="p-4 w-64">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span class="text-xl">🎉</span>
              </div>
              <div>
                <h3 class="font-medium">富文本内容</h3>
                <p class="text-sm text-gray-500">支持任意 HTML 内容</p>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Popover from './index';

const buttonBaseClass = "px-3 py-1.5 text-white rounded transition-colors";

const positions = [
  { value: "top-start", label: "上左", icon: "↖️", btnClass: "bg-blue-500 hover:bg-blue-600" },
  { value: "top", label: "上中", icon: "⬆️", btnClass: "bg-blue-500 hover:bg-blue-600" },
  { value: "top-end", label: "上右", icon: "↗️", btnClass: "bg-blue-500 hover:bg-blue-600" },
  { value: "right-start", label: "右上", icon: "↗️", btnClass: "bg-green-500 hover:bg-green-600" },
  { value: "right", label: "右中", icon: "➡️", btnClass: "bg-green-500 hover:bg-green-600" },
  { value: "right-end", label: "右下", icon: "↘️", btnClass: "bg-green-500 hover:bg-green-600" },
  { value: "bottom-start", label: "下左", icon: "↙️", btnClass: "bg-yellow-500 hover:bg-yellow-600" },
  { value: "bottom", label: "下中", icon: "⬇️", btnClass: "bg-yellow-500 hover:bg-yellow-600" },
  { value: "bottom-end", label: "下右", icon: "↘️", btnClass: "bg-yellow-500 hover:bg-yellow-600" },
  { value: "left-start", label: "左上", icon: "↖️", btnClass: "bg-purple-500 hover:bg-purple-600" },
  { value: "left", label: "左中", icon: "⬅️", btnClass: "bg-purple-500 hover:bg-purple-600" },
  { value: "left-end", label: "左下", icon: "↙️", btnClass: "bg-purple-500 hover:bg-purple-600" },
];
</script>
