<template>
  <div class="mx-auto w-full max-w-5xl space-y-8 p-6">
    <h1 class="mb-8 text-2xl font-bold">Calendar 日历组件</h1>

    <!-- 基础用法 -->
    <DemoBlock
      title="基础用法"
      description="最基本的日历组件用法，支持单个日期选择。"
    >
      <template #default>
        <div class="max-w-md">
          <Calendars
            v-model:selectedDate="singleDate"
            mode="single"
            @dateSelect="handleDateSelect"
          />
          <p class="mt-4 text-sm text-gray-500">
            已选择日期: {{ singleDate || "未选择" }}
          </p>
        </div>
      </template>

      <template #code>
        {{`
        <Calendars
          v-model:selectedDate="singleDate"
          mode="single"
          @dateSelect="handleDateSelect"
        />

        <script setup lang="ts">
          import { ref } from "vue";
          import { Calendars } from "@/components/Calendars";

          const singleDate = ref("");
          const handleDateSelect = (date: string) => {
            console.log("Selected date:", date);
          };
        </script>
        ` }}
      </template>
    </DemoBlock>

    <!-- 日期范围选择 -->
    <DemoBlock
      title="日期范围选择"
      description="支持选择日期范围，适用于需要选择时间段的场景。"
    >
      <template #default>
        <div class="max-w-md">
          <Calendars
            v-model:startDate="rangeStart"
            v-model:endDate="rangeEnd"
            mode="range"
            @rangeSelect="handleRangeSelect"
          />
          <p class="mt-4 text-sm text-gray-500">
            已选择范围:
            {{ rangeStart ? `${rangeStart} 至 ${rangeEnd}` : "未选择" }}
          </p>
        </div>
      </template>

      <template #code>
        {{ `
        <Calendars
          v-model:startDate="rangeStart"
          v-model:endDate="rangeEnd"
          mode="range"
          @rangeSelect="handleRangeSelect"
        />

        <script setup lang="ts">
          import { ref } from "vue";
          import { Calendars } from "@/components/Calendars";

          const rangeStart = ref("");
          const rangeEnd = ref("");
          const handleRangeSelect = (start: string, end: string) => {
            console.log("Selected range:", { start, end });
          };
        </script>
        ` }}
      </template>
    </DemoBlock>

    <!-- 自定义日期格式 -->
    <DemoBlock
      title="自定义日期格式"
      description="通过 dateFormat 属性自定义日期的输出格式。"
    >
      <template #default>
        <div class="max-w-md">
          <Calendars
            v-model:selectedDate="customFormatDate"
            dateFormat="YYYY/MM/DD"
            mode="single"
          />
          <p class="mt-4 text-sm text-gray-500">
            自定义格式: {{ customFormatDate || "未选择" }}
          </p>
        </div>
      </template>

      <template #code>
        {{ `
        <Calendars
          v-model:selectedDate="customFormatDate"
          dateFormat="YYYY/MM/DD"
          mode="single"
        />

        <script setup lang="ts">
          import { ref } from "vue";
          const customFormatDate = ref("");
        </script>
        ` }}
      </template>
    </DemoBlock>

    <!-- 允许选择非当前月份日期 -->
    <DemoBlock
      title="允许选择非当前月份日期"
      description="设置 disableOutsideDays 为 false 可以允许选择非当前月份的日期。"
    >
      <template #default>
        <div class="max-w-md">
          <Calendars
            v-model:startDate="outsideRangeStart"
            v-model:endDate="outsideRangeEnd"
            mode="range"
            :disableOutsideDays="false"
          />
          <p class="mt-4 text-sm text-gray-500">
            已选择范围:
            {{
              outsideRangeStart
                ? `${outsideRangeStart} 至 ${outsideRangeEnd}`
                : "未选择"
            }}
          </p>
        </div>
      </template>

      <template #code>
        {{ `
        <Calendars
          v-model:startDate="rangeStart"
          v-model:endDate="rangeEnd"
          mode="range"
          :disableOutsideDays="false"
        />

        <script setup lang="ts">
          import { ref } from "vue";
          const rangeStart = ref("");
          const rangeEnd = ref("");
        </script>
        ` }}
      </template>
    </DemoBlock>

    <!-- 国际化支持 -->
    <DemoBlock
      title="国际化支持"
      description="支持中英文两种语言显示，通过 locale 属性切换。"
    >
      <template #default>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 class="mb-2 text-sm text-gray-600">中文：</h3>
            <Calendars
              v-model:selectedDate="zhDate"
              locale="zh-cn"
              mode="single"
            />
          </div>
          <div>
            <h3 class="mb-2 text-sm text-gray-600">英文：</h3>
            <Calendars
              v-model:selectedDate="enDate"
              locale="en"
              mode="single"
            />
          </div>
        </div>
      </template>

      <template #code>
        {{ `
        <Calendars v-model:selectedDate="zhDate" locale="zh-cn" mode="single" />
        <Calendars v-model:selectedDate="enDate" locale="en" mode="single" />

        <script setup lang="ts">
          import { ref } from "vue";
          const zhDate = ref("");
          const enDate = ref("");
        </script>
        ` }}
      </template>
    </DemoBlock>
  </div>
</template>

<script setup lang="ts">
import { ref, TransitionGroup } from "vue";
import { DemoBlock } from "@/components/DemoBlock";
import Calendars from "@/components/Calendars";

// 单选模式
const singleDate = ref("");
const customFormatDate = ref("");

// 范围选择模式
const rangeStart = ref("");
const rangeEnd = ref("");
const outsideRangeStart = ref("");
const outsideRangeEnd = ref("");

// 国际化
const zhDate = ref("");
const enDate = ref("");

// 事件处理
const handleDateSelect = (date: string) => {
  console.log("Selected date:", date);
};

const handleRangeSelect = (start: string, end: string) => {
  console.log("Selected range:", { start, end });
};
</script>
