<template>
  <div class="p-8 space-y-12">
    <!-- 单选模式 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">单日期选择</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-2">
          <p class="text-sm text-gray-600">基础单选日历：</p>
          <Calendars
            v-model:selectedDate="singleDate"
            mode="single"
            @dateSelect="handleSingleDateSelect"
          />
          <p class="mt-2 text-sm text-gray-500">
            已选择日期: {{ singleDate || '未选择' }}
          </p>
        </div>

        <div class="space-y-2">
          <p class="text-sm text-gray-600">自定义格式 (YYYY/MM/DD)：</p>
          <Calendars
            v-model:selectedDate="customFormatDate"
            mode="single"
            date-format="YYYY/MM/DD"
          />
          <p class="mt-2 text-sm text-gray-500">
            已选择日期: {{ customFormatDate || '未选择' }}
          </p>
        </div>
      </div>
    </section>

    <!-- 范围选择模式 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">日期范围选择</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-2">
          <p class="text-sm text-gray-600">基础范围选择：</p>
          <Calendars
            v-model:startDate="rangeStart"
            v-model:endDate="rangeEnd"
            mode="range"
            @rangeSelect="handleRangeSelect"
          />
          <p class="mt-2 text-sm text-gray-500">
            已选择范围: {{ rangeStart ? `${rangeStart} 至 ${rangeEnd}` : '未选择' }}
          </p>
        </div>

        <div class="space-y-2">
          <p class="text-sm text-gray-600">允许选择非当前月份日期：</p>
          <Calendars
            v-model:startDate="outsideRangeStart"
            v-model:endDate="outsideRangeEnd"
            mode="range"
            :disable-outside-days="false"
          />
          <p class="mt-2 text-sm text-gray-500">
            已选择范围: {{ outsideRangeStart ? `${outsideRangeStart} 至 ${outsideRangeEnd}` : '未选择' }}
          </p>
        </div>
      </div>
    </section>

    <!-- 国际化支持 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">国际化支持</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-2">
          <p class="text-sm text-gray-600">中文日历：</p>
          <Calendars
            v-model:selectedDate="zhDate"
            mode="single"
            locale="zh-cn"
          />
        </div>

        <div class="space-y-2">
          <p class="text-sm text-gray-600">英文日历：</p>
          <Calendars
            v-model:selectedDate="enDate"
            mode="single"
            locale="en"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Calendars from './index';

// 单选模式
const singleDate = ref('');
const customFormatDate = ref('');

// 范围选择模式
const rangeStart = ref('');
const rangeEnd = ref('');
const outsideRangeStart = ref('');
const outsideRangeEnd = ref('');

// 国际化
const zhDate = ref('');
const enDate = ref('');

// 事件处理
const handleSingleDateSelect = (date: string) => {
  console.log('Selected date:', date);
};

const handleRangeSelect = (start: string, end: string) => {
  console.log('Selected range:', { start, end });
};
</script>
