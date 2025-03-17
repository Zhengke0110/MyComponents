# Progress 进度条组件

用于展示操作的当前进度状态，提供直观的进度反馈。

## 功能特性

- 多样化展示形式：支持线性进度条、圆形进度条和仪表盘进度条三种形式
- 丰富的状态定义：常规、活跃、成功和异常四种状态
- 自定义样式：支持自定义颜色、渐变色和多色配置
- 分段展示：支持成功分段显示，可同时展示多个进度
- 步骤进度：支持步骤式进度条，适合多阶段任务展示
- 信息格式化：可自定义进度信息显示格式
- 暗色模式：完全支持深色主题切换
- 动画效果：内置多种动画效果增强交互体验

## 代码示例

### 基础用法

```vue
<template>
  <!-- 基础线性进度条 -->
  <Progress :percent="30" />
  
  <!-- 带状态的进度条 -->
  <Progress :percent="100" status="success" />
  <Progress :percent="70" status="exception" />
  <Progress :percent="50" status="active" />
  
  <!-- 不显示进度信息 -->
  <Progress :percent="50" :showInfo="false" />
</template>
```

### 圆形进度条

```vue
<template>
  <!-- 基础圆形进度条 -->
  <Progress :percent="75" type="circle" />
  
  <!-- 小尺寸圆形进度条 -->
  <Progress :percent="75" type="circle" size="small" />
  
  <!-- 带状态的圆形进度条 -->
  <Progress :percent="100" type="circle" status="success" />
  <Progress :percent="70" type="circle" status="exception" />
</template>
```

### 仪表盘进度条

```vue
<template>
  <!-- 基础仪表盘进度条 -->
  <Progress :percent="75" type="dashboard" />
  
  <!-- 不同缺口位置 -->
  <Progress :percent="75" type="dashboard" gapPosition="top" />
  <Progress :percent="75" type="dashboard" gapPosition="left" />
  <Progress :percent="75" type="dashboard" gapPosition="right" />
  
  <!-- 自定义缺口角度 -->
  <Progress :percent="75" type="dashboard" :gapDegree="120" />
</template>
```

### 步骤进度条

```vue
<template>
  <!-- 基础步骤进度条 -->
  <Progress :percent="60" :steps="5" />
  
  <!-- 自定义步骤颜色 -->
  <Progress 
    :percent="60" 
    :steps="5" 
    :strokeColor="['#ff4d4f', '#faad14', '#1890ff', '#52c41a', '#722ed1']" 
  />
</template>
```

### 自定义颜色与渐变

```vue
<template>
  <!-- 自定义颜色 -->
  <Progress :percent="40" strokeColor="#722ed1" />
  
  <!-- 渐变色 -->
  <Progress 
    :percent="70" 
    :strokeColor="{
      from: '#108ee9',
      to: '#87d068',
      direction: 'to right'
    }" 
  />
</template>
```

### 分段进度条

```vue
<template>
  <!-- 带成功分段的进度条 -->
  <Progress :percent="80" :success="{ percent: 30 }" />
  
  <!-- 自定义分段颜色 -->
  <Progress :percent="80" :success="{ percent: 30, strokeColor: '#87d068' }" />
</template>
```

### 自定义格式化文本

```vue
<template>
  <Progress :percent="75" :format="percent => `${percent} Days`" />
  <Progress 
    :percent="80" 
    :success="{ percent: 30 }" 
    :format="(percent, successPercent) => `${percent}% / ${successPercent}%`" 
  />
</template>
```

## API

### 属性 (Props)

| 属性名 | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |
| format | 格式化函数，用于自定义显示文本 | (percent: number, successPercent?: number) => string | (percent) => `${percent}%` |
| percent | 进度百分比 | number | 0 |
| showInfo | 是否显示进度数值或状态图标 | boolean | true |
| status | 进度条状态 | 'success' \| 'exception' \| 'normal' \| 'active' | 'normal' |
| strokeColor | 进度条颜色 | string \| string[] \| { from: string; to: string; direction: string } | undefined |
| strokeLinecap | 进度条末端形状 | 'round' \| 'butt' \| 'square' | 'round' |
| success | 成功分段的配置 | { percent?: number; strokeColor?: string } | {} |
| title | 鼠标悬停提示文本 | string | '' |
| trailColor | 轨道颜色 | string | undefined |
| type | 进度条类型 | 'line' \| 'circle' \| 'dashboard' | 'line' |
| size | 进度条大小 | number \| [number, number] \| 'small' \| 'default' | 'default' |

### 线形进度条特有属性

| 属性名 | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |
| steps | 步骤条数量，当为0时不显示步骤 | number | 0 |

### 环形/仪表盘进度条特有属性

| 属性名 | 说明 | 类型 | 默认值 |
| ------ | ---- | ---- | ------ |
| strokeWidth | 环形进度条线的宽度 | number | 6 |
| gapDegree | 仪表盘进度条缺口角度 | number | 75 |
| gapPosition | 仪表盘进度条缺口位置 | 'top' \| 'bottom' \| 'left' \| 'right' | 'bottom' |

## 设计规格

### 进度条尺寸

- **线形进度条**：
  - 默认高度: 20px (h-5)
  - 小型高度: 12px (h-3)
  - 轨道圆角: 使用 rounded-full 实现完全圆角

- **圆形/仪表盘进度条**：
  - 默认尺寸: 120px × 120px
  - 小型尺寸: 80px × 80px
  - 线条宽度: 默认 6px

### 进度条状态与颜色

- **normal**: 蓝色 (#1890ff)
- **success**: 绿色 (#52c41a)
- **exception**: 红色 (#ff4d4f)
- **active**: 蓝色带动画 (#1890ff)

### 暗色模式

Progress 组件完全支持暗色模式，修改了以下样式以适应深色主题：

- 轨道颜色: rgba(255, 255, 255, 0.1)
- 活跃动画背景: rgba(255, 255, 255, 0.2)
- 成功和错误图标的背景颜色调整为更饱和的深色
- 步骤进度条间隔更加明显

## 最佳实践

- **选择合适的类型**：
  - 对于常规操作进度展示，使用线形进度条 `type="line"`
  - 对于整体完成度展示，使用圆形进度条 `type="circle"`
  - 对于显示限额使用情况，使用仪表盘进度条 `type="dashboard"`

- **状态展示**：
  - 使用 `normal` 表示正常进行中
  - 使用 `active` 表示活跃进行中，带有动画效果
  - 使用 `success` 表示已完成
  - 使用 `exception` 表示出现异常

- **多阶段任务**：
  - 对于多阶段的任务，使用步骤进度条 `:steps="5"`
  - 可以使用不同颜色区分不同阶段

- **长时间操作**：
  - 对于执行时间较长的操作，推荐使用带动画效果的活跃状态 `status="active"`
  - 考虑添加取消操作或显示详细进度信息

- **空间紧凑场景**：
  - 在界面空间有限的场景下，可以使用小型进度条 `size="small"`
  - 或使用 `:showInfo="false"` 隐藏进度信息
  
- **暗色模式**：
  - 自动支持暗色模式，在页面添加 `dark` 类即可实现切换
