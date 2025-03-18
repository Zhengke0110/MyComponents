# Spin 加载中组件

`Spin` 组件用于页面和区块的加载中状态。当页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 设计思想

Spin 组件是一个轻量级的加载指示器，可以：

1. 独立使用，展示加载状态
2. 作为容器包裹内容，并在内容加载时显示加载动画
3. 支持延迟显示，避免闪烁
4. 自定义指示符，满足不同设计需求
5. 适配暗黑模式，保持视觉一致性

## 基础用法

```vue
<template>
  <!-- 基础用法 -->
  <Spin />
  
  <!-- 不同尺寸 -->
  <Spin size="small" />
  <Spin />
  <Spin size="large" />
  
  <!-- 带有文字提示 -->
  <Spin tip="加载中..." />
  
  <!-- 使用插槽定义提示文本 -->
  <Spin>
    <template #tip>
      <span class="text-blue-500 font-medium">努力加载中...</span>
    </template>
  </Spin>
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spinning | 是否为加载中状态 | `boolean` | `true` |
| delay | 延迟显示加载效果的时间（防止闪烁），单位：毫秒 | `number` | - |
| size | 组件大小，可选值为 `small` `default` `large` | `string` | `default` |
| tip | 当作为包裹元素时，可以自定义描述文案 | `string` | - |
| wrapperClassName | 包装器的类属性 | `string` | - |
| indicator | 加载指示符 | `vNode \| slot` | - |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 需要被包裹的内容 |
| tip | 自定义描述文案 |

### 静态方法

`Spin.setDefaultIndicator({indicator})`

用于自定义全局默认元素，参数同上 indicator

```js
import { h } from 'vue';
import { Spin, setDefaultIndicator } from './Spin';

// 设置全局默认指示符
setDefaultIndicator({
  indicator: h('i', { class: 'custom-spin-dot' })
});
```

## 进阶用法

### 包裹内容

Spin 可以包裹任何内容，使其处于加载状态：

```vue
<template>
  <Spin :spinning="loading" tip="加载中...">
    <div class="content">
      这里是内容区域
    </div>
  </Spin>
</template>

<script setup>
import { ref } from 'vue';
const loading = ref(true);
</script>
```

### 延迟显示

当加载很快完成时，使用延迟显示可以防止闪烁：

```vue
<template>
  <Spin :spinning="loading" :delay="500" tip="加载数据中...">
    <div class="content">
      内容区域
    </div>
  </Spin>
</template>
```

### 自定义指示符

可以完全自定义加载指示符的外观：

```vue
<template>
  <Spin :indicator="customIndicator" />
</template>

<script setup>
import { h } from 'vue';

const customIndicator = h('div', {
  class: 'animate-spin text-blue-500'
}, [
  h('svg', {
    class: 'w-8 h-8',
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24'
  }, [
    h('circle', {
      class: 'opacity-25',
      cx: '12',
      cy: '12',
      r: '10',
      stroke: 'currentColor',
      'stroke-width': '4'
    }),
    h('path', {
      class: 'opacity-75',
      fill: 'currentColor',
      d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    })
  ])
]);
</script>
```

### 结合进度指示器

可以将 Spin 组件与进度指示器结合使用：

```vue
<template>
  <Spin :indicator="circleProgressIndicator" :tip="`加载中 ${progress}%`" />
</template>

<script setup>
import { h, ref, computed } from 'vue';

const progress = ref(50);

const circleProgressIndicator = computed(() => {
  const strokeDasharray = 2 * Math.PI * 12;
  const strokeDashoffset = strokeDasharray * (1 - progress.value / 100);
  
  return h('div', {
    class: 'relative flex items-center justify-center'
  }, [
    h('svg', {
      class: 'w-16 h-16',
      viewBox: '0 0 36 36'
    }, [
      h('circle', {
        class: 'text-gray-200 dark:text-gray-700 stroke-current',
        cx: '18',
        cy: '18',
        r: '12',
        'stroke-width': '3',
        fill: 'none'
      }),
      h('circle', {
        class: 'text-blue-500 dark:text-blue-400 stroke-current',
        cx: '18',
        cy: '18',
        r: '12',
        'stroke-width': '3',
        fill: 'none',
        transform: 'rotate(-90 18 18)',
        'stroke-dasharray': strokeDasharray,
        'stroke-dashoffset': strokeDashoffset,
        'stroke-linecap': 'round'
      }),
    ]),
    h('div', {
      class: 'absolute inset-0 flex items-center justify-center text-sm font-medium text-blue-500 dark:text-blue-400'
    }, `${progress.value}%`)
  ]);
});
</script>
```

## 常见应用场景

### 按钮加载状态

在按钮中使用 Spin 组件：

```vue
<template>
  <button 
    class="px-4 py-2 bg-blue-500 text-white rounded-lg inline-flex items-center justify-center"
    @click="handleSubmit" 
    :disabled="loading"
  >
    <Spin v-if="loading" :indicator="buttonIndicator" size="small" class="mr-1" />
    {{ loading ? '提交中...' : '提交' }}
  </button>
</template>

<script setup>
import { ref, h } from 'vue';
import Spin from './Spin';

const loading = ref(false);

const buttonIndicator = h('div', {
  class: 'animate-spin h-4 w-4 text-white'
}, [
  h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24'
  }, [
    h('circle', {
      class: 'opacity-25',
      cx: '12',
      cy: '12',
      r: '10',
      stroke: 'currentColor',
      'stroke-width': '4'
    }),
    h('path', {
      class: 'opacity-75',
      fill: 'currentColor',
      d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    })
  ])
]);

const handleSubmit = () => {
  loading.value = true;
  // 模拟请求
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>
```

### 列表或表格加载

在数据表格中使用 Spin：

```vue
<template>
  <Spin :spinning="tableLoading" tip="加载数据中...">
    <table class="w-full">
      <!-- 表格内容... -->
    </table>
  </Spin>
</template>
```

### 全屏加载

创建全屏加载效果：

```vue
<template>
  <div class="relative min-h-screen">
    <!-- 页面内容 -->
    <div v-if="pageLoading" class="fixed inset-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm flex items-center justify-center z-50">
      <Spin size="large" tip="页面加载中..." />
    </div>
  </div>
</template>
```

## 最佳实践

1. **使用延迟加载避免闪烁**：当加载时间可能很短时，使用 `delay` 属性避免加载状态的闪烁

2. **提供适当的提示文本**：使用 `tip` 属性或插槽提供明确的加载状态描述，让用户了解正在发生什么

3. **保持视觉层次**：独立使用 Spin 组件时，确保其位置居中且足够明显；作为容器使用时，考虑使用半透明遮罩和模糊效果，保持原内容的可见性

4. **适应暗色模式**：Spin 组件已适配暗色模式，使用 Tailwind CSS 的 `dark:` 修饰符来定制暗色模式下的外观

5. **自定义指示符**：为不同场景定制适合的指示符样式，提升用户体验

## 注意事项

1. 当使用 `spinning` 属性控制加载状态时，即使设置为 `false`，Spin 组件仍会被渲染，只是不显示加载状态

2. 设置了 `delay` 后，短时间的加载状态将不会显示，避免了界面闪烁

3. 使用全局默认指示符 `setDefaultIndicator` 会影响所有没有自定义 `indicator` 的 Spin 组件实例

4. 在包裹模式下，被包裹的内容会在加载状态时变为半透明，以突出加载状态的视觉效果

## 浏览器兼容性

Spin 组件依赖于现代 CSS 功能，包括：

- Flexbox 布局
- CSS 变量
- CSS 过渡和动画
- backdrop-filter（用于模糊效果）

对于 IE11 或其他不支持这些功能的旧浏览器，建议提供合适的降级方案。

## 相关组件

- **Progress**：用于显示操作的进度
- **Skeleton**：用于在内容加载时显示占位图形
- **Result**：用于显示操作结果
