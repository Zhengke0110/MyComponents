<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
    <!-- 标题 -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <h1 class="text-2xl font-bold">SearchInput 搜索输入框组件</h1>
    </div>

    <div class="p-8">
      <!-- 基础用法 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">基础用法</h2>
        <div class="mb-6">
          <SearchInput 
            v-model="searchText" 
            label="搜索：" 
            placeholder="请输入关键词..." 
            @search="handleSearch" 
          />
        </div>
        <div v-if="searchResult" class="mt-4 p-3 rounded-md animate-pulse bg-gray-100 dark:bg-gray-700">
          <p>搜索结果：<span class="font-medium">{{ searchResult }}</span></p>
        </div>
      </section>

      <!-- Tailwind 颜色主题展示 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Tailwind 颜色主题</h2>
        
        <!-- 灰色系 -->
        <h3 class="mb-2 font-medium">灰色系</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div v-for="color in grayColors" :key="color">
            <p class="text-sm mb-2 opacity-70">{{ color }}</p>
            <SearchInput 
              v-model="colorValues[color]" 
              :theme="color" 
              :placeholder="`${color} 主题...`"
              :showLabel="false"
            />
          </div>
        </div>

        <!-- 其他颜色系列 -->
        <h3 class="mb-2 font-medium">主要颜色</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="color in mainColors" :key="color">
            <p class="text-sm mb-2 opacity-70">{{ color }}</p>
            <SearchInput 
              v-model="colorValues[color]" 
              :theme="color" 
              :placeholder="`${color} 主题...`"
              :showLabel="false"
            />
          </div>
        </div>
      </section>

      <!-- 不同尺寸 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">不同尺寸</h2>
        <div class="space-y-6">
          <div>
            <p class="text-sm mb-2 opacity-70">小尺寸 (sm)</p>
            <SearchInput 
              v-model="sizeSearch.small" 
              size="sm" 
              theme="blue"
              label="小尺寸："
            />
          </div>
          <div>
            <p class="text-sm mb-2 opacity-70">中尺寸 (md) - 默认</p>
            <SearchInput 
              v-model="sizeSearch.medium" 
              theme="blue"
              label="中尺寸："
            />
          </div>
          <div>
            <p class="text-sm mb-2 opacity-70">大尺寸 (lg)</p>
            <SearchInput 
              v-model="sizeSearch.large" 
              size="lg" 
              theme="blue"
              label="大尺寸："
            />
          </div>
        </div>
      </section>

      <!-- 样式变体 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">样式变体</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p class="text-sm mb-2 opacity-70">默认样式</p>
            <SearchInput 
              v-model="styleSearch.default" 
              theme="indigo" 
              label="默认样式："
            />
          </div>

          <div>
            <p class="text-sm mb-2 opacity-70">圆角样式</p>
            <SearchInput 
              v-model="styleSearch.rounded" 
              :rounded="true"
              theme="indigo" 
              label="圆角样式："
            />
          </div>

          <div>
            <p class="text-sm mb-2 opacity-70">无动画效果</p>
            <SearchInput 
              v-model="styleSearch.noAnimate" 
              :animate="false"
              theme="indigo"
              label="无动画效果："
            />
          </div>

          <div>
            <p class="text-sm mb-2 opacity-70">隐藏标签</p>
            <SearchInput 
              v-model="styleSearch.noLabel" 
              :showLabel="false"
              theme="indigo"
              placeholder="无标签搜索框..."
            />
          </div>

          <div>
            <p class="text-sm mb-2 opacity-70">禁用状态</p>
            <SearchInput 
              v-model="styleSearch.disabled" 
              :disabled="true"
              theme="indigo"
              label="禁用状态："
              placeholder="此输入框已禁用"
            />
          </div>

          <div>
            <p class="text-sm mb-2 opacity-70">默认填充值</p>
            <SearchInput 
              v-model="styleSearch.prefilled"
              theme="indigo"
              label="默认填充："
            />
          </div>
        </div>
      </section>

      <!-- 事件处理 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">事件处理</h2>
        
        <SearchInput 
          v-model="eventSearch" 
          label="事件演示："
          placeholder="输入并触发事件..."
          theme="blue"
          @search="handleEventSearch"
          @keypress="handleKeyPress"
          @clear="handleClear"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        
        <div v-if="eventLog.length > 0" class="mt-4 rounded-md p-3 max-h-60 overflow-y-auto bg-gray-100 dark:bg-gray-700">
          <p class="mb-2 font-medium">事件日志:</p>
          <div v-for="(log, index) in eventLog" :key="index" 
            class="text-sm mb-1 opacity-0 animate-slide-in"
            :style="{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }">
            {{ log }}
          </div>
        </div>
      </section>

      <!-- 实际应用场景 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">实际应用场景</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- 实时搜索 -->
          <div>
            <h3 class="mb-4 font-medium">实时搜索</h3>
            <SearchInput 
              v-model="liveSearch" 
              label="实时搜索："
              placeholder="开始输入..."
              theme="cyan"
              :rounded="true"
              @keypress="handleLiveSearch"
            />
            
            <div v-if="liveSearch" class="mt-4 rounded-md p-4 bg-gray-100 dark:bg-gray-700">
              <p class="mb-2">搜索中: <span class="font-medium">{{ liveSearch }}</span></p>
              <div class="flex items-center">
                <span class="mr-2">加载结果</span>
                <div class="flex space-x-1">
                  <div v-for="i in 3" :key="i" 
                    class="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                    :style="{ animationDelay: `${i * 0.1}s` }">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 筛选器 -->
          <div>
            <h3 class="mb-4 font-medium">产品筛选器</h3>
            <SearchInput 
              v-model="filterSearch" 
              label="产品搜索："
              placeholder="搜索产品..."
              theme="emerald"
              @search="handleFilterSearch"
            />
            
            <div v-if="showFilterResults" class="mt-4 rounded-md p-4 bg-gray-100 dark:bg-gray-700">
              <p class="mb-3">找到 {{ filteredProducts.length }} 个匹配的产品：</p>
              <ul class="space-y-2">
                <li v-for="product in filteredProducts" :key="product.id" 
                  class="p-2 rounded flex justify-between bg-white dark:bg-gray-600 shadow-sm">
                  <span>{{ product.name }}</span>
                  <span class="text-green-600 dark:text-green-400">${{ product.price }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 组合使用示例 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">组合使用示例</h2>

        <div class="mb-6 bg-gray-100 dark:bg-gray-700">
          <div class="p-4 flex items-center justify-between">
            <h3 class="text-base font-medium">高级搜索面板</h3>
            <button class="px-3 py-1 rounded text-sm transition-colors bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500" @click="resetSearchFilters">
              重置
            </button>
          </div>
          <div class="p-4 border-t border-gray-200 dark:border-gray-600">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <SearchInput v-model="advancedSearch.query" label="关键词：" placeholder="输入搜索关键词..." theme="blue" />

              <SearchInput v-model="advancedSearch.category" label="分类：" placeholder="输入分类名称..." theme="purple" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SearchInput v-model="advancedSearch.minPrice" label="最低价格：" placeholder="0.00" theme="green" />

              <SearchInput v-model="advancedSearch.maxPrice" label="最高价格：" placeholder="1000.00" theme="green" />
            </div>

            <div class="mt-4 flex justify-end">
              <button class="px-4 py-2 rounded font-medium transition-colors bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white" @click="handleAdvancedSearch">
                搜索
              </button>
            </div>
          </div>
        </div>

        <div v-if="advancedSearchResults.show" class="p-4 rounded bg-gray-100 dark:bg-gray-700">
          <p class="mb-2">高级搜索结果:</p>
          <pre class="text-xs overflow-x-auto p-2 rounded bg-white dark:bg-gray-800">{{ JSON.stringify(advancedSearch, null, 2) }}</pre>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import SearchInput from '../../components/SearchInput';
import type { ColorType } from '../../components/colors';

// 基础用法
const searchText = ref('');
const searchResult = ref('');

const handleSearch = () => {
  searchResult.value = searchText.value || '空查询';
};

// 颜色分组
const grayColors = ['slate', 'gray', 'zinc', 'neutral', 'stone'] as const;
const mainColors = [
  'red', 'orange', 'yellow', 'green', 'emerald',
  'teal', 'cyan', 'blue', 'indigo', 'violet', 'purple', 'pink'
] as const;

// 所有颜色的值
const colorValues = reactive<Record<string, string>>({});

// 初始化颜色值
const allColors = [...grayColors, ...mainColors];
allColors.forEach(color => {
  colorValues[color as string] = '';
});

// 不同尺寸
const sizeSearch = reactive({
  small: '',
  medium: '',
  large: ''
});

// 样式变体
const styleSearch = reactive({
  default: '',
  rounded: '',
  noAnimate: '',
  noLabel: '',
  disabled: '已禁用',
  prefilled: '预填充的值',
});

// 事件处理
const eventSearch = ref('');
const eventLog = ref<string[]>([]);

const handleEventSearch = () => {
  addEventLog(`搜索事件触发: "${eventSearch.value}"`);
};

const handleKeyPress = (event: KeyboardEvent) => {
  addEventLog(`按键事件: 按下了 "${event.key}" 键`);
};

const handleClear = () => {
  addEventLog('清除事件触发');
};

const handleFocus = () => {
  addEventLog('输入框获得焦点');
};

const handleBlur = () => {
  addEventLog('输入框失去焦点');
};

const addEventLog = (message: string) => {
  eventLog.value.unshift(`[${new Date().toLocaleTimeString()}] ${message}`);
  // 最多保留10条记录
  if (eventLog.value.length > 10) {
    eventLog.value.pop();
  }
};

// 实时搜索
const liveSearch = ref('');

const handleLiveSearch = () => {
  // 模拟实时搜索
  console.log('实时搜索:', liveSearch.value);
};

// 产品筛选
const filterSearch = ref('');
const showFilterResults = ref(false);
const products = [
  { id: 1, name: '笔记本电脑', price: 1299.99 },
  { id: 2, name: '无线鼠标', price: 29.99 },
  { id: 3, name: '机械键盘', price: 89.99 },
  { id: 4, name: '显示器', price: 249.99 },
  { id: 5, name: 'USB 集线器', price: 19.99 },
  { id: 6, name: '耳机', price: 59.99 },
  { id: 7, name: '电源适配器', price: 39.99 },
];

const filteredProducts = ref([...products]);

const handleFilterSearch = () => {
  if (!filterSearch.value) {
    filteredProducts.value = [...products];
  } else {
    const query = filterSearch.value.toLowerCase();
    filteredProducts.value = products.filter(product => {
      return product.name.toLowerCase().includes(query) || 
             product.price.toString().includes(query);
    });
  }
  showFilterResults.value = true;
};

// 高级搜索示例
const advancedSearch = reactive({
  query: '',
  category: '',
  minPrice: '',
  maxPrice: '',
});

const advancedSearchResults = reactive({
  show: false,
});

const handleAdvancedSearch = () => {
  advancedSearchResults.show = true;
};

const resetSearchFilters = () => {
  advancedSearch.query = '';
  advancedSearch.category = '';
  advancedSearch.minPrice = '';
  advancedSearch.maxPrice = '';
  advancedSearchResults.show = false;
};
</script>

<style scoped>
@keyframes slideIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out;
}
</style>