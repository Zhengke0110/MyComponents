<template>
  <div class="p-6 space-y-10">
    <header class="flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold mb-2">TagsList 标签列表组件</h1>
        <p class="text-gray-600 dark:text-gray-300">用于管理标签列表的交互式组件，支持添加和删除标签</p>
      </div>
    </header>

    <!-- 基础用法 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2 dark:border-gray-700">基础用法</h2>
      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <TagsList v-model="basicTags" placeholder="输入标签并按回车" />
      </div>
      <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded border dark:border-gray-600">
        <p class="text-sm text-gray-600 dark:text-gray-300">当前标签: {{ basicTags.join(', ') }}</p>
      </div>
    </section>

    <!-- 深色模式展示 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2 dark:border-gray-700">深色模式适配</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="mb-2">浅色模式</h3>
          <TagsList v-model="darkModeTags.light" color="blue" placeholder="浅色模式标签" />
        </div>
        <div class="bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="mb-2 text-white">深色模式</h3>
          <TagsList v-model="darkModeTags.dark" color="blue" placeholder="深色模式标签" />
        </div>
      </div>
      <div class="text-sm text-gray-600 dark:text-gray-400 mt-2">
        <p>组件会自动适应系统的深色/浅色模式设置，或者点击右上角的按钮切换模式。</p>
      </div>
    </section>

    <!-- 不同颜色 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2 dark:border-gray-700">不同颜色</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="color in colors" :key="color" class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="mb-2 dark:text-white">{{ color }} 主题</h3>
          <TagsList v-model="colorTags[color]" :color="color" :placeholder="`${color}主题`" />
        </div>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2 dark:border-gray-700">不同尺寸</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="mb-2 dark:text-white">小尺寸 (sm)</h3>
          <TagsList v-model="sizeTags.small" size="sm" placeholder="小尺寸标签" />
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="mb-2 dark:text-white">中尺寸 (md)</h3>
          <TagsList v-model="sizeTags.medium" size="md" placeholder="中尺寸标签" />
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 class="mb-2 dark:text-white">大尺寸 (lg)</h3>
          <TagsList v-model="sizeTags.large" size="lg" placeholder="大尺寸标签" />
        </div>
      </div>
    </section>

    <!-- 最大标签限制 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2 dark:border-gray-700">最大标签限制</h2>
      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">最多只能添加3个标签</p>
        <TagsList v-model="maxTags" :maxTags="3" placeholder="最多添加3个标签" @error="handleError" />
      </div>
    </section>

    <!-- 自定义验证 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2 dark:border-gray-700">自定义验证</h2>
      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">验证规则：标签长度必须在2-10个字符之间</p>
        <TagsList v-model="validatedTags" :validation="validateTag" placeholder="2-10个字符" @error="handleError" />
      </div>
    </section>

    <!-- 重复标签 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2 dark:border-gray-700">允许重复标签</h2>
      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <TagsList v-model="duplicateTags" :allowDuplicates="true" placeholder="可以添加重复标签" />
      </div>
    </section>

    <!-- 随机颜色标签 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2 dark:border-gray-700">随机颜色标签</h2>
      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">每个标签都有不同的随机颜色</p>
        <TagsList v-model="randomColorTags" :randomColors="true" placeholder="添加彩色标签" />
      </div>
    </section>

    <!-- 使用不同按钮操作标签 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2 dark:border-gray-700">使用按钮操作</h2>
      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <TagsList v-model="buttonTags" placeholder="输入标签" />
        <div class="mt-4 flex gap-2 flex-wrap">
          <Button size="sm" @click="addRandomTag">添加随机标签</Button>
          <Button size="sm" type="danger" @click="clearAllTags">清空所有标签</Button>
          <Button size="sm" type="secondary" @click="shuffleTags">随机排序标签</Button>
        </div>
      </div>
    </section>

    <!-- 错误提示弹窗 -->
    <Transition enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-10 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-10 opacity-0">
      <div v-if="lastError"
        class="fixed bottom-4 right-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-md shadow-lg flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd" />
        </svg>
        {{ lastError }}
      </div>
    </Transition>

    <!-- 小结与最佳实践 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2 dark:border-gray-700">小结与最佳实践</h2>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 class="text-lg font-medium mb-4 dark:text-white">使用 TagsList 组件的建议</h3>
        
        <ul class="space-y-4 text-gray-700 dark:text-gray-300">
          <li class="flex gap-2">
            <span class="text-green-500 flex-shrink-0">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <span class="font-medium">明确标签的用途</span>：在使用标签列表前，确定标签的具体用途和业务含义，如分类、标注、关键词等。
            </div>
          </li>
          
          <li class="flex gap-2">
            <span class="text-green-500 flex-shrink-0">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <span class="font-medium">设置合理的标签限制</span>：使用 maxTags 属性限制标签数量，防止用户添加过多标签导致界面混乱。
            </div>
          </li>
          
          <li class="flex gap-2">
            <span class="text-green-500 flex-shrink-0">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <span class="font-medium">添加有效验证</span>：使用 validation 属性验证标签内容，避免无效或不合规的标签。
            </div>
          </li>
          
          <li class="flex gap-2">
            <span class="text-green-500 flex-shrink-0">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <span class="font-medium">选择恰当的颜色</span>：根据界面主题选择合适的标签颜色，或使用 randomColors 属性增加视觉区分度。
            </div>
          </li>
          
          <li class="flex gap-2">
            <span class="text-green-500 flex-shrink-0">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <span class="font-medium">考虑深色模式</span>：组件已内置深色模式支持，确保您的应用在两种模式下都能良好显示。
            </div>
          </li>
          
          <li class="flex gap-2">
            <span class="text-green-500 flex-shrink-0">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <span class="font-medium">错误处理</span>：监听 error 事件以便向用户提供即时反馈，提升用户体验。
            </div>
          </li>
        </ul>
      </div>
    </section>
    
    <!-- API 文档 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold border-b pb-2 dark:border-gray-700">API 文档</h2>
      
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div class="border-b dark:border-gray-700">
          <div class="px-6 py-4">
            <h3 class="text-lg font-medium dark:text-white">Props</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">属性名</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">类型</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">默认值</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">说明</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">modelValue</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>string[]</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">必填</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">标签数组，支持v-model绑定</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">color</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>ThemeColor</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>'blue'</code></td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">标签颜色主题</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">size</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>'sm' | 'md' | 'lg'</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>'md'</code></td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">标签尺寸</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>string</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>'请输入标签'</code></td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框占位文本</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">maxTags</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>number</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>Infinity</code></td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">最大标签数量</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">validation</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>(tag: string) => boolean | string</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>undefined</code></td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">自定义验证函数，返回true表示验证通过，返回字符串表示错误信息</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">allowDuplicates</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>boolean</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>false</code></td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否允许添加重复标签</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">randomColors</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>boolean</code></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>false</code></td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否为每个标签随机分配颜色</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="border-b dark:border-gray-700">
          <div class="px-6 py-4">
            <h3 class="text-lg font-medium dark:text-white">事件</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">事件名</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">参数</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">说明</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">update:modelValue</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>(tags: string[])</code></td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">当标签列表变化时触发</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">error</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"><code>(message: string)</code></td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">当验证失败时触发，返回错误信息</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <div class="px-6 py-4">
            <h3 class="text-lg font-medium dark:text-white">类型定义</h3>
          </div>
          <div class="px-6 pb-4">
            <div class="bg-gray-50 dark:bg-gray-700 rounded p-4 overflow-auto">
              <pre class="text-xs sm:text-sm text-gray-800 dark:text-gray-200"><code>// 标签尺寸类型
type TagSize = 'sm' | 'md' | 'lg';

// 颜色类型
type ThemeColor =
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import TagsList from '../../components/TagsList';
import Button from '../../components/Button';
import type { ThemeColor } from '../../components/TagsList';

// 基本用法
const basicTags = ref<string[]>(['Vue', 'React', 'Angular']);

// 深色模式示例
const darkModeTags = reactive({
  light: ['浅色', '模式', '标签'],
  dark: ['深色', '模式', '标签']
});

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
.space-y-10>*+* {
  margin-top: 2.5rem;
}

.space-y-4>*+* {
  margin-top: 1rem;
}

/* 为深色模式下的内容增加过渡效果 */
html.dark * {
  transition-property: background-color, border-color, color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>