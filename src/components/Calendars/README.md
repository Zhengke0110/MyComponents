# Calendars 日历组件

一个功能丰富的日历组件，支持日期单选和范围选择，带有平滑的过渡动画和完整的主题支持。

## 特性

- ✨ 支持单个日期选择和日期范围选择
- 🌍 内置中英文国际化支持
- 🎨 自适应亮色/暗色主题
- 🎭 流畅的过渡动画效果
- 📱 响应式设计，支持移动端
- 🎯 支持禁用非当前月份日期
- 📅 自定义日期格式输出
- 🌈 丰富的主题色彩选项

## 基础用法

### 单个日期选择

```vue
<template>
  <Calendars
    v-model:selectedDate="date"
    mode="single"
    @dateSelect="handleDateSelect"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Calendars } from '@your-org/component-library';

const date = ref('');
const handleDateSelect = (date: string) => {
  console.log('Selected date:', date);
};
</script>
```

### 日期范围选择

```vue
<template>
  <Calendars
    v-model:startDate="startDate"
    v-model:endDate="endDate"
    mode="range"
    @rangeSelect="handleRangeSelect"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Calendars } from '@your-org/component-library';

const startDate = ref('');
const endDate = ref('');
const handleRangeSelect = (start: string, end: string) => {
  console.log('Date range:', { start, end });
};
</script>
```

### 自定义主题色

```vue
<template>
  <Calendars
    v-model:selectedDate="date"
    mode="single"
    theme="indigo"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Calendars } from '@your-org/component-library';

const date = ref('');
</script>
```

## API

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| mode | `'single' \| 'range'` | `'single'` | 选择模式：单选或范围选择 |
| initialDate | `string` | 当前日期 | 初始显示的日期 |
| dateFormat | `string` | `'YYYY-MM-DD'` | 日期输出格式 |
| disableOutsideDays | `boolean` | `true` | 是否禁用非当前月份的日期 |
| locale | `'en' \| 'zh-cn'` | `'en'` | 日历语言 |
| selectedDate | `string` | - | 选中的日期（单选模式） |
| startDate | `string` | - | 范围开始日期（范围模式） |
| endDate | `string` | - | 范围结束日期（范围模式） |
| theme | `ColorType` | `'blue'` | 主题颜色，支持 Tailwind 所有基础颜色 |

### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| update:selectedDate | `(date: string)` | 单选模式下日期更新时触发 |
| update:startDate | `(date: string)` | 范围模式下开始日期更新时触发 |
| update:endDate | `(date: string)` | 范围模式下结束日期更新时触发 |
| dateSelect | `(date: string)` | 单选模式下选择日期后触发 |
| rangeSelect | `(start: string, end: string)` | 范围模式下完成范围选择后触发 |

### Slots

组件不提供自定义插槽。

## 自定义主题

组件提供多种颜色主题选项，支持所有 Tailwind CSS 的基础色系：

- 灰色系：slate, gray, zinc, neutral, stone
- 暖色系：red, orange, amber, yellow
- 绿色系：lime, green, emerald, teal
- 蓝色系：cyan, sky, blue, indigo
- 紫粉色系：violet, purple, fuchsia, pink, rose

可以通过 `theme` 属性进行设置。

## 动画效果

组件内置以下动画效果：

- 日历初始化淡入动画
- 月份切换过渡动画
- 日期选择缩放动画
- 范围选择过渡效果

## 浏览器兼容性

- 支持所有现代浏览器
- 需要 CSS Grid 布局支持
- 建议在 Vue 3.2+ 环境下使用

## 注意事项

1. 日期格式使用 dayjs 的格式化字符串
2. 范围选择模式下，如果选择的结束日期早于开始日期，会自动调整顺序
3. 暗色主题需要配合 dark class 或 dark 媒体查询使用
4. 响应式布局断点采用 Tailwind 默认配置

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进组件。

## 许可证

MIT
