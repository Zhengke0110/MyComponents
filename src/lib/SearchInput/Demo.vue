<template>
  <div class="p-6 space-y-8">
    <!-- 基础用法展示 -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold">基础用法</h3>
      <SearchInput
        v-model="searchText1"
        label="搜索："
        placeholder="请输入搜索关键词..."
        @search="handleSearch"
      />
      <div class="text-sm text-gray-500" v-if="searchResult1">
        搜索结果: {{ searchResult1 }}
      </div>
    </section>


    <!-- 事件处理展示 -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold">事件处理</h3>
      <SearchInput
        v-model="searchText4"
        label="实时搜索："
        placeholder="输入时触发搜索..."
        @keypress="handleKeyPress"
        @clear="handleClear"
        @search="handleEventSearch"
      />
      <div class="text-sm space-y-2">
        <div v-if="lastEvent" class="text-gray-500">
          最后触发事件: {{ lastEvent }}
        </div>
        <div v-if="keyPressCount" class="text-gray-500">
          按键次数: {{ keyPressCount }}
        </div>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section class="space-y-4">
      <h3 class="text-lg font-semibold">自定义样式示例</h3>
      <div class="grid grid-cols-2 gap-4">
        <SearchInput
          v-model="searchText5"
          label="搜索商品："
          placeholder="输入商品名称..."
          class="bg-blue-50 rounded-lg p-2"
        />
        <SearchInput
          v-model="searchText5"
          label="搜索用户："
          placeholder="输入用户名..."
          class="bg-green-50 rounded-lg p-2"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchInput from './index.ts';

// 基础用法数据
const searchText1 = ref('');
const searchResult1 = ref('');

// 不同尺寸数据
const searchText2 = ref('');

// 无标签模式数据
const searchText3 = ref('');

// 事件处理数据
const searchText4 = ref('');
const searchText5 = ref('');
const lastEvent = ref('');
const keyPressCount = ref(0);

// 基础搜索处理
const handleSearch = () => {
  searchResult1.value = searchText1.value;
};

// 事件处理示例
const handleEventSearch = () => {
  lastEvent.value = '搜索事件 - ' + new Date().toLocaleTimeString();
};

const handleKeyPress = (event: KeyboardEvent) => {
  keyPressCount.value++;
  lastEvent.value = '按键事件 - ' + event.key;
};

const handleClear = () => {
  lastEvent.value = '清除事件 - ' + new Date().toLocaleTimeString();
  keyPressCount.value = 0;
};
</script>

<style scoped>
section {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 2rem;
}

section:last-child {
  border-bottom: none;
}
</style>
