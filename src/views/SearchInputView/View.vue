<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <h1 class="text-2xl font-bold mb-8 text-center text-gray-800">SearchInput 搜索输入框组件</h1>

    <!-- 基础用法 -->
    <section class="bg-white rounded-lg shadow-md p-6 mb-8 transition-all hover:shadow-lg">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">基础用法</h2>
      <div class="mb-6">
        <SearchInput 
          v-model="searchText1" 
          label="搜索：" 
          placeholder="请输入关键词..." 
          @search="handleSearch"
        />
      </div>
      <div v-if="searchResult" class="mt-4 p-3 bg-gray-100 rounded-md animate-pulse">
        <p class="text-gray-700">搜索结果：<span class="font-medium">{{ searchResult }}</span></p>
      </div>
    </section>

    <!-- 不同主题 -->
    <section class="bg-white rounded-lg shadow-md p-6 mb-8 transition-all hover:shadow-lg">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">不同主题</h2>
      <div class="space-y-6">
        <div>
          <p class="text-sm text-gray-500 mb-2">默认主题 (default)</p>
          <SearchInput 
            v-model="themeSearch.default" 
            theme="default" 
            label="默认主题："
          />
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2">主要主题 (primary)</p>
          <SearchInput 
            v-model="themeSearch.primary" 
            theme="primary" 
            label="主要主题："
          />
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2">成功主题 (success)</p>
          <SearchInput 
            v-model="themeSearch.success" 
            theme="success" 
            label="成功主题："
          />
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2">警告主题 (warning)</p>
          <SearchInput 
            v-model="themeSearch.warning" 
            theme="warning" 
            label="警告主题："
          />
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2">错误主题 (error)</p>
          <SearchInput 
            v-model="themeSearch.error" 
            theme="error" 
            label="错误主题："
          />
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2">信息主题 (info)</p>
          <SearchInput 
            v-model="themeSearch.info" 
            theme="info" 
            label="信息主题："
          />
        </div>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section class="bg-white rounded-lg shadow-md p-6 mb-8 transition-all hover:shadow-lg">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">不同尺寸</h2>
      <div class="space-y-6">
        <div>
          <p class="text-sm text-gray-500 mb-2">小尺寸 (sm)</p>
          <SearchInput 
            v-model="sizeSearch.small" 
            size="sm" 
            label="小尺寸："
          />
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2">默认尺寸 (md)</p>
          <SearchInput 
            v-model="sizeSearch.medium" 
            label="默认尺寸："
          />
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2">大尺寸 (lg)</p>
          <SearchInput 
            v-model="sizeSearch.large" 
            size="lg" 
            label="大尺寸："
          />
        </div>
      </div>
    </section>

    <!-- 圆角和样式变体 -->
    <section class="bg-white rounded-lg shadow-md p-6 mb-8 transition-all hover:shadow-lg">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">圆角和样式变体</h2>
      <div class="space-y-6">
        <div>
          <p class="text-sm text-gray-500 mb-2">圆角样式</p>
          <SearchInput 
            v-model="styleSearch.rounded" 
            :rounded="true"
            theme="primary" 
            label="圆角搜索框："
          />
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2">无动画效果</p>
          <SearchInput 
            v-model="styleSearch.noAnimate" 
            :animate="false"
            label="无动画效果："
          />
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2">禁用状态</p>
          <SearchInput 
            v-model="styleSearch.disabled" 
            :disabled="true"
            label="禁用状态："
            placeholder="此输入框已禁用"
          />
        </div>
      </div>
    </section>

    <!-- 隐藏标签 -->
    <section class="bg-white rounded-lg shadow-md p-6 mb-8 transition-all hover:shadow-lg">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">隐藏标签</h2>
      <SearchInput 
        v-model="noLabelSearch" 
        :showLabel="false" 
        placeholder="无标签搜索框..."
      />
    </section>

    <!-- 事件处理 -->
    <section class="bg-white rounded-lg shadow-md p-6 mb-8 transition-all hover:shadow-lg">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">事件处理</h2>
      <SearchInput 
        v-model="eventSearch" 
        label="事件处理："
        placeholder="输入并触发事件..."
        theme="primary"
        @search="handleEventSearch"
        @keypress="handleKeyPress"
        @clear="handleClear"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <div v-if="eventLog.length > 0" class="mt-4 bg-gray-100 rounded-md p-3 max-h-40 overflow-y-auto">
        <p class="text-gray-700 mb-2 font-medium">事件日志:</p>
        <div v-for="(log, index) in eventLog" :key="index" 
          class="text-sm text-gray-600 mb-1 opacity-0 animate-slide-in"
          :style="{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }">
          {{ log }}
        </div>
      </div>
    </section>

    <!-- 实时搜索示例 -->
    <section class="bg-white rounded-lg shadow-md p-6 mb-8 transition-all hover:shadow-lg">
      <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">实时搜索示例</h2>
      <SearchInput 
        v-model="liveSearch" 
        label="实时搜索："
        placeholder="开始输入..."
        theme="info"
        :rounded="true"
        @keypress="handleLiveSearch"
      />
      
      <div v-if="liveSearch" class="mt-4">
        <div class="bg-gray-100 rounded-md p-4">
          <p class="text-gray-700 mb-2">搜索中: <span class="font-medium">{{ liveSearch }}</span></p>
          <div class="flex items-center">
            <div class="mr-2">加载结果</div>
            <div class="flex space-x-1">
              <div v-for="i in 3" :key="i" 
                class="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                :style="{ animationDelay: `${i * 0.1}s` }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchInput from '../../components/SearchInput';

// 基础用法
const searchText1 = ref('');
const searchResult = ref('');

const handleSearch = () => {
  searchResult.value = searchText1.value;
};

// 不同主题
const themeSearch = ref({
  default: '',
  primary: '',
  success: '',
  warning: '',
  error: '',
  info: ''
});

// 不同尺寸
const sizeSearch = ref({
  small: '',
  medium: '',
  large: ''
});

// 样式变体
const styleSearch = ref({
  rounded: '',
  noAnimate: '',
  disabled: '禁用示例'
});

// 无标签搜索
const noLabelSearch = ref('');

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
  // 实际应用中这里可以调用搜索API
  console.log('实时搜索:', liveSearch.value);
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out;
  opacity: 0;
}
</style>