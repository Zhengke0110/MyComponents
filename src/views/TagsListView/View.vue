<template>
  <div class="p-6 space-y-10">
    <header>
      <h1 class="text-2xl font-bold mb-2">TagsList 标签列表组件</h1>
      <p class="text-gray-600">用于管理标签列表的交互式组件，支持添加和删除标签</p>
    </header>

    <!-- 基础用法 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2">基础用法</h2>
      <div class="bg-white p-4 rounded-lg shadow">
        <TagsList v-model="basicTags" placeholder="输入标签并按回车" />
      </div>
      <div class="bg-gray-50 p-4 rounded border">
        <p class="text-sm text-gray-600">当前标签: {{ basicTags.join(', ') }}</p>
      </div>
    </section>

    <!-- 不同颜色 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2">不同颜色</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="color in colors" :key="color" class="bg-white p-4 rounded-lg shadow">
          <h3 class="mb-2">{{ color }} 主题</h3>
          <TagsList 
            v-model="colorTags[color]" 
            :color="color" 
            :placeholder="`${color}主题`" 
          />
        </div>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2">不同尺寸</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="mb-2">小尺寸 (sm)</h3>
          <TagsList v-model="sizeTags.small" size="sm" placeholder="小尺寸标签" />
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="mb-2">中尺寸 (md)</h3>
          <TagsList v-model="sizeTags.medium" size="md" placeholder="中尺寸标签" />
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="mb-2">大尺寸 (lg)</h3>
          <TagsList v-model="sizeTags.large" size="lg" placeholder="大尺寸标签" />
        </div>
      </div>
    </section>

    <!-- 最大标签限制 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2">最大标签限制</h2>
      <div class="bg-white p-4 rounded-lg shadow">
        <p class="mb-2 text-sm text-gray-600">最多只能添加3个标签</p>
        <TagsList
          v-model="maxTags"
          :maxTags="3"
          placeholder="最多添加3个标签"
          @error="handleError"
        />
      </div>
    </section>

    <!-- 自定义验证 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2">自定义验证</h2>
      <div class="bg-white p-4 rounded-lg shadow">
        <p class="mb-2 text-sm text-gray-600">验证规则：标签长度必须在2-10个字符之间</p>
        <TagsList
          v-model="validatedTags"
          :validation="validateTag"
          placeholder="2-10个字符"
          @error="handleError"
        />
      </div>
    </section>

    <!-- 重复标签 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2">允许重复标签</h2>
      <div class="bg-white p-4 rounded-lg shadow">
        <TagsList
          v-model="duplicateTags"
          :allowDuplicates="true"
          placeholder="可以添加重复标签"
        />
      </div>
    </section>
    
    <!-- 随机颜色标签 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2">随机颜色标签</h2>
      <div class="bg-white p-4 rounded-lg shadow">
        <p class="mb-2 text-sm text-gray-600">每个标签都有不同的随机颜色</p>
        <TagsList
          v-model="randomColorTags"
          :randomColors="true"
          placeholder="添加彩色标签"
        />
      </div>
    </section>

    <!-- 使用不同按钮操作标签 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2">使用按钮操作</h2>
      <div class="bg-white p-4 rounded-lg shadow">
        <TagsList v-model="buttonTags" placeholder="输入标签" />
        <div class="mt-4 flex gap-2 flex-wrap">
          <Button size="sm" @click="addRandomTag">添加随机标签</Button>
          <Button size="sm" type="danger" @click="clearAllTags">清空所有标签</Button>
          <Button size="sm" type="secondary" @click="shuffleTags">随机排序标签</Button>
        </div>
      </div>
    </section>

    <!-- 错误提示弹窗 -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-10 opacity-0"
    >
      <div
        v-if="lastError"
        class="fixed bottom-4 right-4 bg-red-100 text-red-700 px-4 py-2 rounded-md shadow-lg flex items-center"
      >
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" 
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
            clip-rule="evenodd" 
          />
        </svg>
        {{ lastError }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import TagsList from '../../components/TagsList';
import Button from '../../components/Button';
import type { ThemeColor } from '../../components/TagsList';

// 基本用法
const basicTags = ref<string[]>(['Vue', 'React', 'Angular']);

// 不同颜色
const colors: ThemeColor[] = ['blue', 'green', 'red', 'purple', 'amber', 'emerald', 'indigo', 'rose'];
const colorTags = reactive<Record<string, string[]>>({
  blue: ['蓝色标签', '深海'],
  green: ['绿色标签', '森林'],
  red: ['红色标签', '火焰'],
  purple: ['紫色标签', '魔法'],
  amber: ['琥珀色标签', '金秋'],
  emerald: ['翡翠色标签', '绿宝石'],
  indigo: ['靛蓝色标签', '夜空'],
  rose: ['玫瑰色标签', '花朵'],
});

// 不同尺寸
const sizeTags = reactive({
  small: ['小标签1', '小标签2'],
  medium: ['中标签1', '中标签2'],
  large: ['大标签1', '大标签2'],
});

// 标签数量限制
const maxTags = ref<string[]>(['限制标签1']);

// 验证标签
const validatedTags = ref<string[]>(['有效标签']);

// 允许重复标签
const duplicateTags = ref<string[]>(['重复', '重复']);

// 随机颜色标签
const randomColorTags = ref<string[]>(['红色', '蓝色', '绿色', '黄色']);

// 按钮操作标签
const buttonTags = ref<string[]>(['点击按钮', '添加更多']);

// 错误提示
const lastError = ref<string>('');

// 验证函数
const validateTag = (tag: string): boolean | string => {
  if (tag.length < 2) return '标签长度不能少于2个字符';
  if (tag.length > 10) return '标签长度不能超过10个字符';
  return true;
};

// 错误处理
const handleError = (message: string) => {
  lastError.value = message;
  setTimeout(() => {
    lastError.value = '';
  }, 3000);
};

// 添加随机标签
const addRandomTag = () => {
  const randomTags = ['技术', '设计', '运营', '产品', '市场', '销售', '客服', '人力', '财务', '法务'];
  const randomIndex = Math.floor(Math.random() * randomTags.length);
  buttonTags.value.push(randomTags[randomIndex] + Math.floor(Math.random() * 100));
};

// 清空所有标签
const clearAllTags = () => {
  buttonTags.value = [];
};

// 随机排序标签
const shuffleTags = () => {
  buttonTags.value = [...buttonTags.value].sort(() => Math.random() - 0.5);
};
</script>

<style scoped>
.space-y-10 > * + * {
  margin-top: 2.5rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}
</style>