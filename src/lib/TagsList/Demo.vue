<template>
  <div class="demo-container space-y-8 p-4">
    <!-- 基础单选示例 -->
    <section>
      <h3 class="text-lg font-medium mb-2">基础单选</h3>
      <TagsList
        :tags="basicTags"
        v-model="selectedBasicTags"
        @change="handleChange"
      />
      <div class="mt-2 text-sm text-gray-600">
        已选择: {{ selectedBasicTags.map(t => t.name).join(', ') }}
      </div>
    </section>

    <!-- 多选示例 -->
    <section>
      <h3 class="text-lg font-medium mb-2">多选模式</h3>
      <TagsList
        :tags="basicTags"
        v-model="selectedMultipleTags"
        :multiple="true"
        @change="handleMultipleChange"
      />
      <div class="mt-2 text-sm text-gray-600">
        已选择: {{ selectedMultipleTags.map(t => t.name).join(', ') }}
      </div>
    </section>

    <!-- 预设颜色示例 -->
    <section>
      <h3 class="text-lg font-medium mb-2">预设颜色标签</h3>
      <TagsList
        :tags="coloredTags"
        v-model="selectedColoredTags"
        :random-colors="false"
      />
    </section>

    <!-- 随机颜色示例 -->
    <section>
      <h3 class="text-lg font-medium mb-2">随机颜色标签</h3>
      <TagsList :tags="randomTags" :random-colors="true" />
    </section>

    <!-- 动态添加/删除标签 -->
    <section>
      <h3 class="text-lg font-medium mb-2">动态标签列表</h3>
      <div class="mb-2 flex gap-2">
        <input
          v-model="newTagName"
          class="px-3 py-1 border rounded"
          placeholder="输入标签名称"
        />
        <button
          @click="addTag"
          class="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          添加标签
        </button>
      </div>
      <TagsList
        :tags="dynamicTags"
        v-model="selectedDynamicTags"
        :multiple="true"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {TagsList} from './index.ts'
import type { EnhancedTag } from './index.ts'

// 基础标签数据
const basicTags = ref<EnhancedTag[]>([
  { id: 1, name: '技术' },
  { id: 2, name: '设计' },
  { id: 3, name: '产品' },
  { id: 4, name: '运营' },
  { id: 5, name: '市场' }
])

// 带预设颜色的标签
const coloredTags = ref<EnhancedTag[]>([
  { id: 1, name: '重要', variant: 'danger' },
  { id: 2, name: '进行中', variant: 'warning' },
  { id: 3, name: '已完成', variant: 'success' },
  { id: 4, name: '待处理', variant: 'info' },
  { id: 5, name: '已归档', variant: 'secondary' }
])

// 用于随机颜色演示的标签
const randomTags = ref<EnhancedTag[]>([
  { id: 1, name: 'Vue' },
  { id: 2, name: 'React' },
  { id: 3, name: 'Angular' },
  { id: 4, name: 'Svelte' },
  { id: 5, name: 'TypeScript' }
])

// 动态标签列表
const dynamicTags = ref<EnhancedTag[]>([
  { id: 1, name: '示例标签1' },
  { id: 2, name: '示例标签2' }
])

// 各个示例的选中状态
const selectedBasicTags = ref<EnhancedTag[]>([])
const selectedMultipleTags = ref<EnhancedTag[]>([])
const selectedColoredTags = ref<EnhancedTag[]>([])
const selectedDynamicTags = ref<EnhancedTag[]>([])

// 新标签输入
const newTagName = ref('')

// 事件处理
const handleChange = (tags: EnhancedTag[]) => {
  console.log('单选模式选中:', tags)
}

const handleMultipleChange = (tags: EnhancedTag[]) => {
  console.log('多选模式选中:', tags)
}

// 添加新标签
const addTag = () => {
  if (newTagName.value.trim()) {
    dynamicTags.value.push({
      id: Date.now(),
      name: newTagName.value.trim()
    })
    newTagName.value = ''
  }
}
</script>

<style scoped>
.demo-container section {
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
