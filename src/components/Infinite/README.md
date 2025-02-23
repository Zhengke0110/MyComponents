# Infinite 无限滚动组件

无限滚动组件用于处理长列表的分页加载，当列表滚动到底部时自动触发加载更多数据。

## 基础用法

```tsx
import { ref } from 'vue'
import { Infinite } from '@/components/Infinite'

const loading = ref(false)
const isFinished = ref(false)
const list = ref<string[]>([])

const onLoad = () => {
  // 模拟异步加载
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(`Item ${list.value.length + 1}`)
    }
    loading.value = false
    
    // 数据全部加载完成
    if (list.value.length >= 40) {
      isFinished.value = true
    }
  }, 1000)
}

// 在模板中使用
<Infinite 
  v-model="loading"
  :is-finished="isFinished"
  @on-load="onLoad"
>
  {list.value.map(item => (
    <div key={item} class="p-4 border-b">
      {item}
    </div>
  ))}
</Infinite>
```

## 自定义提示文案

```tsx
<Infinite
  v-model="loading"
  :is-finished="isFinished"
  loading-text="玩命加载中..."
  finished-text="我是有底线的～"
  @on-load="onLoad"
>
  // 列表内容
</Infinite>
```

## 自定义提示内容

通过插槽自定义提示内容：

```tsx
<Infinite v-model="loading" :is-finished="isFinished">
  // 默认插槽：列表内容
  <div>列表内容</div>
  
  // loading 状态插槽
  <template #loading>
    <div class="flex justify-center p-4">
      <LoadingSpinner />
    </div>
  </template>
  
  // finished 状态插槽
  <template #finished>
    <div class="text-center p-4">
      -- 已经到底啦 --
    </div>
  </template>
  
  // error 状态插槽
  <template #error>
    <div class="text-center p-4 text-red-500">
      加载失败，请重试
    </div>
  </template>
</Infinite>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 是否处于加载状态 | `boolean` | `false` |
| isFinished | 是否已加载完所有数据 | `boolean` | `false` |
| threshold | 距离底部多少像素时触发加载 | `number` | `100` |
| distance | 触发加载的距离阈值 | `number` | `0` |
| loadingText | 加载中提示文案 | `string` | `加载中...` |
| finishedText | 加载完成提示文案 | `string` | `没有更多了` |
| errorText | 加载失败提示文案 | `string` | `加载失败` |
| immediateCheck | 是否在初始化时立即检查加载 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| update:modelValue | 加载状态变化时触发 | `boolean` |
| on-load | 触发加载更多时触发 | - |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 列表内容 |
| loading | 自定义加载中提示内容 |
| finished | 自定义加载完成提示内容 |
| error | 自定义加载失败提示内容 |

### Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| reset | 重置组件状态，清除 error 状态并重置 loading | - |

## 注意事项

1. 需要给组件一个固定高度或者最大高度，否则无法触发滚动加载
2. `isFinished` 设为 true 后，不会再触发 `on-load` 事件
3. 使用 `reset` 方法可以重置组件状态，重新开始加载
4. 建议在 `onLoad` 回调中使用 `setTimeout` 等异步操作，避免同步操作阻塞渲染
