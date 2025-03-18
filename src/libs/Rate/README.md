# Rate 评分组件

Rate 评分组件是一个用于收集用户反馈或展示评分的交互式组件，支持多种自定义选项和样式。

## 功能特点

- 支持基础评分和半星评分
- 丰富的预设图标类型与自定义样式
- 支持自定义颜色主题
- 可自定义字符、SVG图标
- 完善的只读与禁用状态
- 支持多种尺寸配置
- 适配深色模式
- 支持自定义提示文本

## 基础用法

### 引入组件

```javascript
import { Rate } from 'your-component-library';
```

### 基础评分

最简单的用法，支持点击选择评分：

```vue
<template>
  <Rate v-model="value" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);
</script>
```

### 半星评分

通过设置 `allow-half` 属性可以支持选择半星：

```vue
<template>
  <Rate v-model="value" :allow-half="true" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(2.5);
</script>
```

## 进阶用法

### 自定义颜色

支持多种预设颜色：

```vue
<template>
  <Rate v-model="value" color="red" />
  <Rate v-model="value" color="blue" />
  <Rate v-model="value" color="green" />
  <!-- 更多颜色: orange, amber, yellow, indigo, purple, pink -->
</template>
```

### 只读模式

用于展示评分，不可交互：

```vue
<template>
  <Rate v-model="value" :readonly="true" />
</template>
```

### 禁用状态

显示为禁用样式：

```vue
<template>
  <Rate v-model="value" :disabled="true" />
</template>
```

### 不同尺寸

提供三种尺寸规格：

```vue
<template>
  <Rate v-model="value" size="sm" /> <!-- 小尺寸 -->
  <Rate v-model="value" size="md" /> <!-- 中尺寸（默认） -->
  <Rate v-model="value" size="lg" /> <!-- 大尺寸 -->
</template>
```

### 提示信息

为每个评分项添加提示文本：

```vue
<template>
  <Rate v-model="value" :tooltips="['很差', '较差', '一般', '良好', '优秀']" />
</template>
```

### 预设图标

支持多种预设图标类型：

```vue
<template>
  <Rate v-model="value" icon="star" /> <!-- 默认星星 -->
  <Rate v-model="value" icon="heart" /> <!-- 心形 -->
  <Rate v-model="value" icon="circle" /> <!-- 圆形 -->
  <Rate v-model="value" icon="flag" /> <!-- 旗帜 -->
  <Rate v-model="value" icon="like" /> <!-- 点赞 -->
  <Rate v-model="value" icon="crown" /> <!-- 皇冠 -->
</template>
```

### 自定义字符

可以使用任意字符作为评分项：

```vue
<template>
  <Rate v-model="value" character="A" /> <!-- 字母 -->
  <Rate v-model="value" character="好" /> <!-- 汉字 -->
  <Rate v-model="value" character="❤️" /> <!-- Emoji -->
</template>
```

### 自定义SVG图标路径

可以提供自定义SVG路径：

```vue
<template>
  <Rate v-model="value" :custom-icon-path="svgPath" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);
const svgPath = "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z";
</script>
```

### 自定义图标插槽

可以通过插槽完全自定义评分项的渲染：

```vue
<template>
  <Rate v-model="value">
    <template #icon="{ active, half, isDark }">
      <div class="w-6 h-6 flex items-center justify-center">
        <!-- 自定义图标内容 -->
        <svg viewBox="0 0 24 24" class="w-full h-full"
          :style="{ color: active ? '#f59e0b' : '#d1d5db' }">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" fill="currentColor" />
        </svg>
      </div>
    </template>
  </Rate>
</template>
```

## API文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
| ------ | ---- | ------ | ---- |
| modelValue | Number | 0 | 当前评分值 |
| count | Number | 5 | 评分项总数 |
| allowHalf | Boolean | false | 是否允许半星评分 |
| color | String | "amber" | 评分组件主题颜色 |
| readonly | Boolean | false | 是否为只读模式 |
| disabled | Boolean | false | 是否为禁用状态 |
| size | String | "md" | 尺寸，可选值：'sm', 'md', 'lg' |
| allowClear | Boolean | true | 是否允许再次点击后清除 |
| tooltips | String[] | [] | 自定义每项的提示信息 |
| icon | String | "star" | 预设图标类型 |
| character | String | "" | 自定义字符，优先级高于icon |
| customIconPath | String | "" | 自定义SVG路径数据 |

### 事件

| 事件名 | 回调参数 | 说明 |
| ------ | -------- | ---- |
| update:modelValue | (value: number) | 评分值改变时触发 |
| change | (value: number) | 评分值变化时触发 |
| hover-change | (value: number) | 鼠标悬停位置变化时触发 |

### 插槽

| 插槽名 | 参数 | 说明 |
| ------ | ---- | ---- |
| icon | { active: boolean, half: boolean, isDark: boolean } | 自定义图标内容 |
| character | { active: boolean, isDark: boolean } | 自定义字符内容 |

## 最佳实践与使用场景

### 使用场景

- 用户评价、评分场景，如产品评分、服务评价等
- 收集用户反馈的简便直观方式
- 展示产品或内容的平均评分

### 最佳实践

- 根据业务场景选择适当的图标和颜色，让评分组件更符合整体设计风格
- 对于详细评价，建议提供半星选择提高评分精度
- 添加tooltips提供更明确的评分含义说明
- 在只读模式下展示数据时，可搭配文字说明增强可读性
- 考虑移动端触控场景，推荐使用较大尺寸提升交互体验

### 注意事项

- 过多的评分项（count>10）会导致用户选择困难，建议保持在5-7个评分项
- 根据界面整体风格选择合适的颜色和图标，避免视觉冲突
- 自定义图标应保持清晰可辨识，特别是在小尺寸下
- 确保评分组件在不同尺寸下都有良好的展示效果
- 在深色模式下注意对比度，确保评分组件清晰可见

## 完整示例

```vue
<template>
  <div>
    <h3>基础评分</h3>
    <Rate v-model="value" @change="handleChange" />
    <div>当前分值：{{ value }}</div>
    
    <h3>半星评分</h3>
    <Rate v-model="halfValue" :allow-half="true" />
    <div>当前分值：{{ halfValue }}</div>
    
    <h3>自定义图标评分</h3>
    <Rate v-model="customValue" character="点" color="blue" />
    <div>当前分值：{{ customValue }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Rate } from 'your-component-library';

const value = ref(3);
const halfValue = ref(2.5);
const customValue = ref(4);

const handleChange = (newValue) => {
  console.log('评分已更改为：', newValue);
};
</script>
```

## 贡献

欢迎提交问题和改进建议到项目仓库。

## 许可证

[MIT](LICENSE)
