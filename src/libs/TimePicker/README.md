# TimePicker 时间选择器

TimePicker 是一个用于选择时间的输入组件，用户可以点击标准输入框，弹出时间面板进行时间选择。

## 基本用法

最简单的用法，展示小时、分钟和秒的选择器。

```vue
<TimePicker v-model="value" />
```

## 不同的时间格式

通过 `format` 属性，可以自定义时间的显示格式。

```vue
<!-- 24小时制，只显示小时和分钟 -->
<TimePicker v-model="value" format="HH:mm" />

<!-- 12小时制 -->
<TimePicker v-model="value" format="hh:mm:ss a" use12Hours />

<!-- 自定义格式 -->
<TimePicker v-model="value" format="HH时mm分ss秒" />
```

## 设置步长

通过 `hourStep`、`minuteStep` 和 `secondStep` 属性设置时间选择的间隔。

```vue
<TimePicker
  v-model="value"
  :hour-step="2"
  :minute-step="15"
  :second-step="10"
/>
```

## 禁用选项

通过 `disabledTime` 属性自定义不可选择的时间。

```vue
<TimePicker v-model="value" :disabled-time="disabledTime" />

<script setup>
function disabledTime(now) {
  return {
    disabledHours: () => [0, 1, 2, 3, 4, 5, 20, 21, 22, 23],
    disabledMinutes: (hour) => (hour === 12 ? [...Array(30).keys()] : []),
    disabledSeconds: (hour, minute) =>
      hour === 12 && minute === 30 ? [...Array(30).keys()] : [],
  };
}
</script>
```

## 不同弹出位置

通过 `placement` 属性设置弹出面板的位置。

```vue
<TimePicker v-model="value" placement="bottomLeft" />
<!-- 默认值 -->
<TimePicker v-model="value" placement="bottomRight" />
<TimePicker v-model="value" placement="topLeft" />
<TimePicker v-model="value" placement="topRight" />
```

## 状态与图标

设置不同的状态和自定义图标。

```vue
<!-- 错误状态 -->
<TimePicker v-model="value" status="error" />

<!-- 警告状态 -->
<TimePicker v-model="value" status="warning" />

<!-- 自定义图标 -->
<TimePicker v-model="value">
  <template #suffixIcon>
    <i class="custom-icon" />
  </template>
</TimePicker>

<!-- 自定义清除图标 -->
<TimePicker v-model="value">
  <template #clearIcon>
    <i class="custom-clear-icon" />
  </template>
</TimePicker>
```

## 自定义页脚

通过插槽添加自定义页脚内容，或隐藏"此刻"按钮。

```vue
<!-- 添加自定义页脚内容 -->
<TimePicker v-model="value">
  <template #renderExtraFooter>
    <span>请选择工作时间</span>
  </template>
</TimePicker>

<!-- 隐藏"此刻"按钮 -->
<TimePicker v-model="value" :show-now="false" />
```

## 受控模式

通过 `open` 属性控制面板的显示。

```vue
<TimePicker v-model="value" :open="open" @open-change="handleOpenChange" />

<button @click="toggleOpen">{{ open ? '关闭' : '打开' }}</button>

<script setup>
import { ref } from "vue";

const value = ref(null);
const open = ref(false);

function handleOpenChange(visible) {
  open.value = visible;
}

function toggleOpen() {
  open.value = !open.value;
}
</script>
```

## 字符串值绑定

通过 `value-format` 可以使用字符串值绑定，而不是 dayjs 对象。

```vue
<TimePicker v-model="timeString" value-format="HH:mm:ss" />

<script setup>
import { ref } from "vue";

const timeString = ref("12:30:00");
</script>
```

## API

### 属性

| 参数                | 说明                   | 类型                                             | 默认值        |
| ------------------- | ---------------------- | ------------------------------------------------ | ------------- |
| allowClear          | 是否展示清除按钮       | boolean                                          | true          |
| autofocus           | 自动获取焦点           | boolean                                          | false         |
| bordered            | 是否有边框             | boolean                                          | true          |
| clearText           | 清除按钮的提示文案     | string                                           | clear         |
| disabled            | 禁用全部操作           | boolean                                          | false         |
| disabledTime        | 不可选择的时间         | DisabledTime                                     | -             |
| format              | 展示的时间格式         | string                                           | HH:mm:ss      |
| getPopupContainer   | 定义浮层的容器         | function(trigger)                                | document.body |
| hideDisabledOptions | 隐藏禁止选择的选项     | boolean                                          | false         |
| hourStep            | 小时选项间隔           | number                                           | 1             |
| inputReadOnly       | 设置输入框为只读       | boolean                                          | false         |
| minuteStep          | 分钟选项间隔           | number                                           | 1             |
| open                | 面板是否打开           | boolean                                          | false         |
| placeholder         | 占位文本               | string                                           | 请选择时间    |
| placement           | 选择框弹出的位置       | bottomLeft \| bottomRight \| topLeft \| topRight | bottomLeft    |
| popupClassName      | 弹出层类名             | string                                           | -             |
| popupStyle          | 弹出层样式对象         | object                                           | -             |
| secondStep          | 秒选项间隔             | number                                           | 1             |
| showNow             | 面板是否显示"此刻"按钮 | boolean                                          | true          |
| status              | 设置校验状态           | 'error' \| 'warning'                             | -             |
| use12Hours          | 使用 12 小时制         | boolean                                          | false         |
| value(v-model)      | 当前时间               | dayjs \| string                                  | -             |
| valueFormat         | 绑定值的格式           | string                                           | -             |

### 事件

| 事件名称   | 说明                  | 回调参数                                                  |
| ---------- | --------------------- | --------------------------------------------------------- |
| change     | 时间发生变化的回调    | function(time: dayjs \| string, timeString: string): void |
| openChange | 面板打开/关闭时的回调 | (open: boolean): void                                     |

### 插槽

| 插槽名称          | 说明                       |
| ----------------- | -------------------------- |
| clearIcon         | 自定义的清除图标           |
| suffixIcon        | 自定义的选择框后缀图标     |
| renderExtraFooter | 选择框底部显示自定义的内容 |

### DisabledTime 类型

```typescript
type DisabledTime = (now: Dayjs) => {
  disabledHours?: () => number[];
  disabledMinutes?: (selectedHour: number) => number[];
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
};
```
