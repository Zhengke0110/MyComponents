<template>
  <div class="space-y-8 p-6">
    <!-- 基础用法 -->
    <section>
      <h2 class="mb-4 text-lg font-semibold">基础用法</h2>
      <div class="space-y-4">
        <TextInput
          v-model="basic"
          id="basic"
          label="用户名"
          placeholder="请输入用户名"
        />
        <TextInput
          v-model="password"
          id="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
        <TextInput
          v-model="number"
          id="number"
          type="number"
          label="数字"
          placeholder="请输入数字"
        />
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="mb-4 text-lg font-semibold">不同尺寸</h2>
      <div class="space-y-4">
        <TextInput
          v-model="sizes.sm"
          id="size-sm"
          size="sm"
          label="小尺寸"
          placeholder="小尺寸输入框"
        />
        <TextInput
          v-model="sizes.md"
          id="size-md"
          size="md"
          label="中尺寸"
          placeholder="中尺寸输入框"
        />
        <TextInput
          v-model="sizes.lg"
          id="size-lg"
          size="lg"
          label="大尺寸"
          placeholder="大尺寸输入框"
        />
      </div>
    </section>

    <!-- 主题颜色 -->
    <section>
      <h2 class="mb-4 text-lg font-semibold">主题颜色</h2>
      <div class="grid grid-cols-2 gap-4">
        <TextInput
          v-model="colors.blue"
          id="color-blue"
          color="blue"
          label="蓝色主题"
          placeholder="蓝色输入框"
        />
        <TextInput
          v-model="colors.emerald"
          id="color-emerald"
          color="emerald"
          label="绿色主题"
          placeholder="绿色输入框"
        />
        <TextInput
          v-model="colors.rose"
          id="color-rose"
          color="rose"
          label="玫瑰红主题"
          placeholder="玫瑰红输入框"
        />
        <TextInput
          v-model="colors.amber"
          id="color-amber"
          color="amber"
          label="琥珀色主题"
          placeholder="琥珀色输入框"
        />
      </div>
    </section>

    <!-- 状态展示 -->
    <section>
      <h2 class="mb-4 text-lg font-semibold">状态展示</h2>
      <div class="space-y-4">
        <TextInput
          v-model="states.disabled"
          id="state-disabled"
          disabled
          label="禁用状态"
          placeholder="禁用的输入框"
        />
        <TextInput
          v-model="states.error"
          id="state-error"
          error="这是一个错误提示信息"
          label="错误状态"
          placeholder="错误状态的输入框"
        />
        <TextInput
          v-model="states.description"
          id="state-description"
          description="这是一段帮助说明文本"
          label="带描述信息"
          placeholder="带描述的输入框"
        />
        <TextInput
          v-model="states.required"
          id="state-required"
          required
          label="必填字段"
          placeholder="这是一个必填字段"
        />
      </div>
    </section>

    <!-- 带图标 -->
    <section>
      <h2 class="mb-4 text-lg font-semibold">带图标</h2>
      <div class="space-y-4">
        <TextInput
          v-model="icons.search"
          id="icon-search"
          label="搜索"
          placeholder="搜索关键词"
        >
          <template #prefix>
            <svg
              class="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </template>
        </TextInput>

        <TextInput
          v-model="icons.link"
          id="icon-link"
          label="链接"
          placeholder="输入链接地址"
        >
          <template #suffix>
            <svg
              class="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </template>
        </TextInput>

        <TextInput
          v-model="icons.both"
          id="icon-both"
          label="双图标"
          placeholder="前后都有图标"
        >
          <template #prefix>
            <svg
              class="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </template>
          <template #suffix>
            <svg
              class="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </template>
        </TextInput>
      </div>
    </section>

    <!-- 多行文本 -->
    <section>
      <h2 class="mb-4 text-lg font-semibold">多行文本</h2>
      <TextInput
        v-model="multiline"
        id="multiline"
        multiline
        label="备注"
        placeholder="请输入备注信息"
        :rows="4"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TextInput from "./index.ts";

// 基础用法
const basic = ref("");
const password = ref("");
const number = ref("");

// 不同尺寸
const sizes = ref({
  sm: "",
  md: "",
  lg: "",
});

// 主题颜色
const colors = ref({
  blue: "",
  emerald: "",
  rose: "",
  amber: "",
});

// 状态展示
const states = ref({
  disabled: "这是禁用状态",
  error: "",
  description: "",
  required: "",
});

// 带图标
const icons = ref({
  search: "",
  link: "",
  both: "",
});

// 多行文本
const multiline = ref("");
</script>
