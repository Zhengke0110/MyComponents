// 基础用法代码示例
export const basicUsageCode = `\`\`\`vue
<template>
  <Calendars v-model:selectedDate="date" mode="single" />
</template>

<script setup>
import { ref } from 'vue';

const date = ref('');
</script>
\`\`\``;

// 日期范围选择代码示例
export const rangeSelectCode = `\`\`\`vue
<template>
  <Calendars 
    v-model:startDate="startDate" 
    v-model:endDate="endDate" 
    mode="range"
    @rangeSelect="handleRangeSelect" 
  />
</template>

<script setup>
import { ref } from 'vue';

const startDate = ref('');
const endDate = ref('');

const handleRangeSelect = (start, end) => {
  console.log('选择的日期范围:', { start, end });
};
</script>
\`\`\``;

// 自定义颜色代码示例
export const customColorCode = `\`\`\`vue
<template>
  <div class="flex flex-col gap-4">
    <Calendars v-model:selectedDate="date" mode="single" color="indigo" />
    <Calendars v-model:selectedDate="date" mode="single" color="emerald" />
    <Calendars v-model:selectedDate="date" mode="single" color="amber" />
    <Calendars v-model:selectedDate="date" mode="single" color="rose" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const date = ref('');
</script>
\`\`\``;

// 语言本地化代码示例
export const localizationCode = `\`\`\`vue
<template>
  <div class="flex flex-col gap-4">
    <h3>英文 (en)</h3>
    <Calendars v-model:selectedDate="date" locale="en" />
    
    <h3>中文 (zh-cn)</h3>
    <Calendars v-model:selectedDate="date" locale="zh-cn" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const date = ref('');
</script>
\`\`\``;

// 日期初始化和格式化代码示例
export const dateFormatCode = `\`\`\`vue
<template>
  <Calendars 
    v-model:selectedDate="date" 
    :initialDate="initialDate"
    dateFormat="YYYY/MM/DD" 
    @dateSelect="handleDateSelect"
  />
  <div v-if="date" class="mt-2">
    选中日期：{{ date }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const initialDate = '2023-05-15'; // 初始日期
const date = ref('');

const handleDateSelect = (selectedDate) => {
  console.log('格式化后的日期:', selectedDate);
};
</script>
\`\`\``;

// 暗黑模式示例
export const darkModeCode = `\`\`\`vue
<template>
  <div class="p-4 bg-gray-900">
    <Calendars 
      v-model:selectedDate="date" 
      color="blue"
      class="dark" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const date = ref('');
</script>
\`\`\``;

// 事件监听示例
export const eventsCode = `\`\`\`vue
<template>
  <Calendars
    v-model:selectedDate="selectedDate"
    mode="single"
    @dateSelect="handleDateSelect"
  />

  <div v-if="eventLog" class="mt-3 p-3 bg-gray-100 rounded text-sm">
    <div>事件记录: {{ eventLog }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedDate = ref('');
const eventLog = ref('');

const handleDateSelect = (date) => {
  eventLog.value = \`选择了日期: \${date} (\${new Date().toLocaleTimeString()})\`;
};
</script>
\`\`\``;
