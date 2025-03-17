# Drawer 抽屉组件

抽屉组件是一种从屏幕边缘滑出的浮层面板，用于承载更多的操作或信息，同时不打断用户的当前操作流程。

## 基本介绍

Drawer 组件通常用于：

- 表单的填写和编辑
- 详情信息的查看
- 操作控制面板
- 多级导航菜单

本组件支持四个方向展示、多种尺寸配置，并且完美适配亮色和暗色主题模式。

## 基础用法

### 基本抽屉

最简单的抽屉，从右侧滑出：

```vue
<template>
  <div>
    <button @click="visible = true">打开抽屉</button>
    <Drawer v-model="visible" title="基础抽屉">
      <p>这是抽屉的内容区域</p>
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>
```

### 不同方向的抽屉

抽屉可以从四个方向滑出（右、左、上、下）：

```vue
<template>
  <div>
    <button @click="openDrawer('right')">右侧抽屉</button>
    <button @click="openDrawer('left')">左侧抽屉</button>
    <button @click="openDrawer('top')">顶部抽屉</button>
    <button @click="openDrawer('bottom')">底部抽屉</button>

    <Drawer
      v-model="visible"
      :placement="placement"
      :title="`${placementText}抽屉`"
    >
      <p>这是从{{ placementText }}滑出的抽屉</p>
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const placement = ref("right");

const placementMap = {
  left: "左侧",
  right: "右侧",
  top: "顶部",
  bottom: "底部",
};

const placementText = computed(() => placementMap[placement.value]);

const openDrawer = (position) => {
  placement.value = position;
  visible.value = true;
};
</script>
```

### 自定义尺寸

通过 `size` 属性设置抽屉的大小：

```vue
<template>
  <div>
    <button @click="openDrawer('250px')">小尺寸</button>
    <button @click="openDrawer('500px')">中等尺寸</button>
    <button @click="openDrawer('70%')">大尺寸</button>

    <Drawer v-model="visible" :size="size" title="自定义尺寸抽屉">
      <p>当前抽屉尺寸为: {{ size }}</p>
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const size = ref("300px");

const openDrawer = (drawerSize) => {
  size.value = drawerSize;
  visible.value = true;
};
</script>
```

## 高级用法

### 不带遮罩层的抽屉

设置 `mask` 属性为 `false` 可以创建没有遮罩层的抽屉：

```vue
<template>
  <div>
    <button @click="visible = true">打开无遮罩抽屉</button>
    <Drawer v-model="visible" title="无遮罩抽屉" :mask="false">
      <p>这个抽屉没有遮罩层，背后的内容可以继续操作</p>
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>
```

### 点击遮罩不关闭

设置 `maskClosable` 属性为 `false` 可以使点击遮罩层不关闭抽屉：

```vue
<template>
  <div>
    <button @click="visible = true">打开抽屉</button>
    <Drawer v-model="visible" title="点击遮罩不关闭" :maskClosable="false">
      <p>点击遮罩层不会关闭此抽屉</p>
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>
```

### 带底部操作栏的抽屉

通过设置 `showFooter` 属性和使用插槽 `footer`，可以添加底部操作栏：

```vue
<template>
  <div>
    <button @click="visible = true">带底部的抽屉</button>
    <Drawer v-model="visible" title="带底部操作栏" :showFooter="true">
      <p>这是抽屉的内容</p>
      <template #footer>
        <div class="flex justify-end gap-2">
          <button @click="visible = false">取消</button>
          <button @click="confirm">确认</button>
        </div>
      </template>
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);

const confirm = () => {
  // 确认操作
  visible.value = false;
};
</script>
```

### 嵌套抽屉

Drawer 组件支持嵌套使用，可以在一个抽屉内打开另一个抽屉：

```vue
<template>
  <div>
    <button @click="outerVisible = true">打开外层抽屉</button>

    <Drawer v-model="outerVisible" title="外层抽屉">
      <p>这是外层抽屉的内容</p>
      <button @click="innerVisible = true">打开内层抽屉</button>

      <Drawer
        v-model="innerVisible"
        title="内层抽屉"
        placement="right"
        size="300px"
      >
        <p>这是内层抽屉的内容</p>
      </Drawer>
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const outerVisible = ref(false);
const innerVisible = ref(false);
</script>
```

## API

### 属性

| 属性名              | 说明                         | 类型                                   | 默认值  |
| ------------------- | ---------------------------- | -------------------------------------- | ------- |
| modelValue(v-model) | 是否显示抽屉                 | boolean                                | false   |
| title               | 抽屉标题                     | string                                 | ''      |
| placement           | 抽屉方向                     | 'left' \| 'right' \| 'top' \| 'bottom' | 'right' |
| size                | 抽屉大小                     | string \| number                       | '300px' |
| closable            | 是否显示关闭按钮             | boolean                                | true    |
| mask                | 是否显示遮罩层               | boolean                                | true    |
| maskClosable        | 点击遮罩层是否可关闭         | boolean                                | true    |
| showFooter          | 是否显示底部区域             | boolean                                | false   |
| zIndex              | 设置抽屉的 z-index           | number                                 | 1000    |
| destroyOnClose      | 关闭时是否销毁子元素         | boolean                                | false   |
| lockScroll          | 是否在抽屉打开时锁定页面滚动 | boolean                                | true    |

### 事件

| 事件名             | 说明                        | 回调参数           |
| ------------------ | --------------------------- | ------------------ |
| update:modelValue  | 抽屉打开状态改变时触发      | (value: boolean)   |
| open               | 抽屉打开动画开始时触发      | -                  |
| close              | 抽屉关闭动画开始时触发      | -                  |
| afterVisibleChange | 抽屉打开/关闭动画结束后触发 | (visible: boolean) |

### 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 抽屉内容       |
| title   | 自定义标题区域 |
| footer  | 自定义底部内容 |

## 最佳实践

### 适合使用的场景

1. 需要将详情信息或操作表单从侧面展示，而不打断主流程
2. 窄屏设备上展示更多操作或内容
3. 需要用户输入或查看临时性信息
4. 作为复杂表单的补充界面

### 不适合使用的场景

1. 展示简单、少量的信息（可以使用气泡框或对话框）
2. 需要用户完整注意力的操作（可以使用模态对话框）
3. 主要内容展示（应该作为页面主体部分）

## 暗黑模式

Drawer 组件完全支持暗黑模式，会根据父元素上的 `dark` 类自动切换样式，无需额外配置。在暗黑模式下，组件会使用适当的背景色、文本颜色和边框颜色，以提供良好的视觉体验。

## 无障碍访问

Drawer 组件遵循 WAI-ARIA 规范，默认配置了正确的 ARIA 属性：

- 使用 `role="dialog"`
- 使用 `aria-modal="true"`
- 焦点管理（打开时自动聚焦到内部）
- 键盘导航支持（ESC 键关闭）

## 浏览器兼容性

组件使用现代 CSS 特性和 Vue 3，支持所有主流现代浏览器：

- Chrome
- Firefox
- Safari
- Edge

## 贡献指南

如果你发现了 bug 或有新功能需求，请通过以下步骤参与贡献：

1. 查阅现有 issues 确认问题未被报告
2. 创建新 issue 描述问题或功能需求
3. 如需提交代码，请 fork 仓库并创建 pull request

请确保你的代码遵循项目的编码风格和测试要求。
