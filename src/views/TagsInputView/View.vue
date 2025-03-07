<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">TagsInput 标签输入组件</h1>
    
    <div class="space-y-8">
      <!-- 基础用法 -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">基础用法</h2>
        <TagsInput v-model="basicTags" placeholder="输入标签并按回车" />
        <div class="mt-4 text-gray-600 text-sm">
          当前标签: {{ basicTags.join(', ') }}
        </div>
      </section>

      <!-- 不同尺寸 -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">不同尺寸</h2>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">小尺寸 (sm)</p>
            <TagsInput v-model="sizeTags.sm" size="sm" placeholder="小尺寸" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">中尺寸 (md, 默认)</p>
            <TagsInput v-model="sizeTags.md" size="md" placeholder="中尺寸" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">大尺寸 (lg)</p>
            <TagsInput v-model="sizeTags.lg" size="lg" placeholder="大尺寸" />
          </div>
        </div>
      </section>

      <!-- 不同颜色 -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">不同颜色</h2>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">蓝色 (默认)</p>
            <TagsInput v-model="colorTags.blue" color="blue" placeholder="蓝色主题" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">红色</p>
            <TagsInput v-model="colorTags.red" color="red" placeholder="红色主题" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">绿色</p>
            <TagsInput v-model="colorTags.green" color="green" placeholder="绿色主题" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">紫色</p>
            <TagsInput v-model="colorTags.purple" color="purple" placeholder="紫色主题" />
          </div>
        </div>
      </section>

      <!-- 标签限制 -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">标签限制</h2>
        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">最大标签数量限制 (最多3个)</p>
            <TagsInput
              v-model="maxTags"
              :maxTags="3"
              placeholder="最多添加3个标签"
              @error="showNotification"
            />
          </div>
          
          <div>
            <p class="text-sm text-gray-500 mb-2">自定义验证规则 (2-10个字符)</p>
            <TagsInput
              v-model="validatedTags"
              :validation="validateTag"
              placeholder="标签长度为2-10个字符"
              @error="showNotification"
            />
          </div>
        </div>
      </section>

      <!-- 高级设置 -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">高级设置</h2>
        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">允许重复标签</p>
            <TagsInput
              v-model="duplicateTags"
              :allowDuplicates="true"
              placeholder="可以添加重复标签"
            />
          </div>
        </div>
      </section>

      <!-- 随机标签颜色 -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">随机标签颜色</h2>
        <div class="space-y-4">
          <p class="text-sm text-gray-500 mb-2">每个标签根据内容自动分配不同颜色</p>
          <TagsInput
            v-model="randomColorTags"
            :randomColors="true"
            placeholder="输入标签以查看随机颜色效果"
          />
        </div>
      </section>

      <!-- 主题色展示 -->
      <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">更多主题色</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">天空蓝 (sky)</p>
            <TagsInput v-model="themeTags.sky" color="sky" placeholder="天空蓝主题" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">翠绿 (emerald)</p>
            <TagsInput v-model="themeTags.emerald" color="emerald" placeholder="翠绿主题" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">琥珀 (amber)</p>
            <TagsInput v-model="themeTags.amber" color="amber" placeholder="琥珀主题" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">玫瑰 (rose)</p>
            <TagsInput v-model="themeTags.rose" color="rose" placeholder="玫瑰主题" />
          </div>
        </div>
      </section>
    </div>

    <!-- 通知弹窗 -->
    <Transition
      enter-active-class="transform transition ease-out duration-300"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transform transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="notification" 
           class="fixed bottom-4 right-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-lg max-w-md">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm">{{ notification }}</p>
          </div>
          <div class="ml-auto pl-3">
            <button @click="notification = ''" class="text-red-500 hover:text-red-800">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" 
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                      clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TagsInput from '../../components/TagsInput'

const basicTags = ref<string[]>(['Vue', 'React', 'Angular'])

const sizeTags = ref({
  sm: ['小尺寸', '标签'],
  md: ['中尺寸', '标签'],
  lg: ['大尺寸', '标签']
})

const colorTags = ref({
  blue: ['蓝色', '标签'],
  red: ['红色', '标签'],
  green: ['绿色', '标签'],
  purple: ['紫色', '标签']
})

const maxTags = ref<string[]>(['最大数量'])
const validatedTags = ref<string[]>(['有效标签'])
const duplicateTags = ref<string[]>(['重复', '重复'])

// 添加随机颜色标签示例
const randomColorTags = ref<string[]>(['Vue', 'React', 'Angular', 'Svelte', 'Solid', 'Alpine', 'Preact'])

// 添加主题色示例
const themeTags = ref({
  sky: ['天空蓝'],
  emerald: ['翠绿'],
  amber: ['琥珀'],
  rose: ['玫瑰']
})

const notification = ref('')

const validateTag = (tag: string): boolean | string => {
  if (tag.length < 2) return '标签长度不能少于2个字符'
  if (tag.length > 10) return '标签长度不能超过10个字符'
  return true
}

const showNotification = (message: string) => {
  notification.value = message
  setTimeout(() => {
    notification.value = ''
  }, 3000)
}
</script>

<style scoped>
.space-y-8 > * + * {
  margin-top: 2rem;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}
</style>