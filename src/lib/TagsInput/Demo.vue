<template>
  <div class="space-y-8 p-6">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-semibold mb-3">基础用法</h2>
      <TagsInput v-model="basicTags" placeholder="输入标签并按回车" />
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-semibold mb-3">不同尺寸</h2>
      <div class="space-y-4">
        <TagsInput v-model="sizeTags.small" size="sm" placeholder="小尺寸" />
        <TagsInput v-model="sizeTags.medium" size="md" placeholder="中尺寸" />
        <TagsInput v-model="sizeTags.large" size="lg" placeholder="大尺寸" />
      </div>
    </section>

    <!-- 不同颜色 -->
    <section>
      <h2 class="text-lg font-semibold mb-3">不同颜色</h2>
      <div class="space-y-4">
        <TagsInput v-model="colorTags.blue" color="blue" placeholder="蓝色主题" />
        <TagsInput v-model="colorTags.red" color="red" placeholder="红色主题" />
        <TagsInput
          v-model="colorTags.green"
          color="green"
          placeholder="绿色主题"
        />
      </div>
    </section>

    <!-- 最大标签限制 -->
    <section>
      <h2 class="text-lg font-semibold mb-3">最大标签限制 (最多3个)</h2>
      <TagsInput
        v-model="maxTags"
        :maxTags="3"
        placeholder="最多添加3个标签"
        @error="handleError"
      />
    </section>

    <!-- 自定义验证 -->
    <section>
      <h2 class="text-lg font-semibold mb-3">自定义验证</h2>
      <TagsInput
        v-model="validatedTags"
        :validation="validateTag"
        placeholder="2-10个字符"
        @error="handleError"
      />
      <p class="text-sm text-gray-500 mt-2">
        验证规则：标签长度必须在2-10个字符之间
      </p>
    </section>

    <!-- 允许重复标签 -->
    <section>
      <h2 class="text-lg font-semibold mb-3">允许重复标签</h2>
      <TagsInput
        v-model="duplicateTags"
        :allowDuplicates="true"
        placeholder="可以添加重复标签"
      />
    </section>

    <!-- 错误提示展示 -->
    <div
      v-if="lastError"
      class="fixed bottom-4 right-4 bg-red-100 text-red-700 px-4 py-2 rounded-md shadow-lg"
    >
      {{ lastError }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TagsInput from "./index.ts";

const basicTags = ref<string[]>(["Vue", "React", "Angular"]);

const sizeTags = ref({
  small: ["小标签1", "小标签2"],
  medium: ["中标签1", "中标签2"],
  large: ["大标签1", "大标签2"],
});

const colorTags = ref({
  blue: ["蓝色1", "蓝色2"],
  red: ["红色1", "红色2"],
  green: ["绿色1", "绿色2"],
});

const maxTags = ref<string[]>(["标签1"]);
const validatedTags = ref<string[]>([]);
const duplicateTags = ref<string[]>(["重复", "重复"]);

const lastError = ref<string>("");

const validateTag = (tag: string): boolean | string => {
  if (tag.length < 2) return "标签长度不能少于2个字符";
  if (tag.length > 10) return "标签长度不能超过10个字符";
  return true;
};

const handleError = (message: string) => {
  lastError.value = message;
  setTimeout(() => {
    lastError.value = "";
  }, 3000);
};
</script>

<style scoped>
.space-y-8 > * + * {
  margin-top: 2rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}
</style>
