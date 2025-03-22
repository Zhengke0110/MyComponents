# Timeline 时间轴组件

时间轴组件用于展示时间流或步骤进度，将一系列信息按照时间顺序垂直排列，可用于展示项目进度、历史记录或工作流程等场景。

## 基本用法

基本的时间轴组件，默认采用左侧模式，时间点靠左显示。可以包含标签、内容以及自定义样式。

```vue
<Timeline>
  <TimelineItem label="2023年10月">
    <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
      <h3 class="font-medium text-blue-600 dark:text-blue-400 mb-2">项目启动</h3>
      <p class="text-gray-600 dark:text-gray-300">开始规划项目并组建团队</p>
    </div>
  </TimelineItem>
  <TimelineItem color="green" label="2023年11月">
    <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800/30">
      <h3 class="font-medium text-green-600 dark:text-green-400 mb-2">开发阶段</h3>
      <p class="text-gray-600 dark:text-gray-300">进入开发阶段，完成核心功能</p>
    </div>
  </TimelineItem>
  <TimelineItem color="red" label="2023年12月">
    <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800/30">
      <h3 class="font-medium text-red-600 dark:text-red-400 mb-2">测试阶段</h3>
      <p class="text-gray-600 dark:text-gray-300">进行全面测试和修复</p>
    </div>
  </TimelineItem>
</Timeline>
```

## 不同模式

时间轴组件支持三种不同的展示模式：`left`、`right` 和 `alternate`。

### 左侧模式 (left)

时间点和线条居左，内容在右侧展示。这是默认模式。

```vue
<Timeline mode="left">
  <TimelineItem label="上午 8:00">早会</TimelineItem>
  <TimelineItem label="上午 10:30">项目讨论</TimelineItem>
  <TimelineItem label="下午 2:00">客户会议</TimelineItem>
</Timeline>
```

### 右侧模式 (right)

时间点和线条居右，内容在左侧展示。

```vue
<Timeline mode="right">
  <TimelineItem label="上午 8:00">早会</TimelineItem>
  <TimelineItem label="上午 10:30">项目讨论</TimelineItem>
  <TimelineItem label="下午 2:00">客户会议</TimelineItem>
</Timeline>
```

### 交替模式 (alternate)

时间点居中，内容在两侧交替展示。

```vue
<Timeline mode="alternate">
  <TimelineItem label="第一步">需求分析</TimelineItem>
  <TimelineItem label="第二步">原型设计</TimelineItem>
  <TimelineItem label="第三步">开发编码</TimelineItem>
  <TimelineItem label="第四步">测试发布</TimelineItem>
</Timeline>
```

## 自定义节点和颜色

可以通过 `color` 属性设置节点颜色，或通过 `dot` 插槽自定义时间点的样式。

### 设置节点颜色

```vue
<Timeline>
  <TimelineItem color="blue">蓝色节点</TimelineItem>
  <TimelineItem color="green">绿色节点</TimelineItem>
  <TimelineItem color="red">红色节点</TimelineItem>
  <TimelineItem color="#8434eb">自定义颜色节点</TimelineItem>
</Timeline>
```

### 自定义节点图标

使用 `dot` 插槽自定义时间点的图标或样式。

```vue
<Timeline>
  <TimelineItem>
    <template #dot>
      <div class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100">
        <i class="icon-[carbon--idea] text-blue-500"></i>
      </div>
    </template>
    <div>创意构思</div>
  </TimelineItem>
  <TimelineItem>
    <template #dot>
      <div class="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
        <i class="icon-[carbon--document] text-green-500"></i>
      </div>
    </template>
    <div>需求文档</div>
  </TimelineItem>
</Timeline>
```

## 倒序排列

通过 `reverse` 属性设置时间轴倒序展示。

```vue
<Timeline :reverse="true">
  <TimelineItem label="2021年">公司成立</TimelineItem>
  <TimelineItem label="2022年">产品研发</TimelineItem>
  <TimelineItem label="2023年">业务拓展</TimelineItem>
  <TimelineItem label="2024年">全球化布局</TimelineItem>
</Timeline>
```

## 进行中状态

使用 `pending` 属性展示时间轴处于进行中状态，通过 `pendingDot` 属性可以自定义幽灵节点。

```vue
<Timeline pending="正在处理中...">
  <TimelineItem color="green" label="已完成">第一阶段</TimelineItem>
  <TimelineItem color="green" label="已完成">第二阶段</TimelineItem>
  <TimelineItem color="blue" label="进行中">第三阶段</TimelineItem>
</Timeline>
```

## API

### Timeline Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 时间轴的展示模式 | `'left' \| 'right' \| 'alternate'` | `'left'` |
| pending | 是否展示幽灵节点，或要展示的内容 | `boolean \| string \| VNode` | `false` |
| pendingDot | 幽灵节点的图点 | `string \| VNode` | 默认加载图标 |
| reverse | 是否倒序排列 | `boolean` | `false` |

### TimelineItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 节点颜色 | `'blue' \| 'red' \| 'green' \| string` | `'blue'` |
| dot | 自定义时间轴点 | `string \| VNode` | 默认圆点 |
| label | 标签文本 | `string \| VNode` | - |
| position | 自定义节点位置，优先级高于Timeline的mode | `'left' \| 'right'` | - |

### TimelineItem Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 时间轴项的内容 |
| dot | 自定义时间轴节点 |

## 最佳实践

### 使用场景

- 展示时间流程或工作流程的进展
- 显示项目各阶段的重要里程碑
- 按时间顺序呈现事件或历史记录
- 展示任务的进度和状态

### 使用建议

1. 为每个时间点添加明确的标签，帮助用户理解时间顺序
2. 使用不同颜色区分不同类型或状态的事件
3. 内容较多时，考虑使用可折叠的内容区域
4. 使用合适的自定义图标增强视觉表现力
5. 需要双向展示时使用 `alternate` 模式

### 推荐用法

- 使用清晰、简洁的标签文本
- 为不同状态的节点使用不同颜色
- 保持内容区域的视觉整洁
- 使用恰当的图标增强信息传达
- 确保时间或事件顺序的逻辑性

### 避免用法

- 在单个时间轴中混合使用多种模式
- 在内容区域放置过于复杂的组件
- 标签文字过长导致溢出或换行
- 使用过多相似颜色导致区分困难
- 没有考虑移动设备上的显示效果

## 响应式设计提示

Timeline 组件在各种模式下都会自动适应父容器宽度。在响应式布局中，推荐使用 `left` 模式以获得最佳的移动端体验。使用 `alternate` 模式时，需要确保有足够的空间展示双侧内容。
