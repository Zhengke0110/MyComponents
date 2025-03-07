# SearchInput 搜索输入框组件

SearchInput 是一个用于搜索功能的输入框组件，包含清除按钮和搜索按钮，提供了良好的用户体验和交互效果。

## 功能特点

- 支持 v-model 双向绑定
- 内置清除按钮，一键清空输入内容
- 集成搜索按钮，点击触发搜索事件
- 支持按下 Enter 键进行搜索
- 多种主题颜色可选
- 可自定义标签文本和是否显示标签
- 提供多种尺寸选项
- 包含动画效果，提升用户体验
- 支持禁用状态
- 圆角样式选项

## 属性

| 属性名      | 类型    | 默认值     | 说明                     |
|------------|---------|-----------|-------------------------|
| modelValue | string  | ""        | 输入框的值，支持 v-model  |
| label      | string  | "Search"  | 输入框标签文本            |
| showLabel  | boolean | true      | 是否显示标签              |
| placeholder| string  | "Search..." | 输入框占位符文本        |
| type       | string  | "text"    | 输入框类型               |
| id         | string  | "search"  | 输入框 id 属性           |
| name       | string  | "search"  | 输入框 name 属性         |
| size       | string  | "md"      | 输入框大小，可选：'sm'、'md'、'lg' |
| theme      | string  | "default" | 主题颜色，可选：'default'、'primary'、'success'、'warning'、'error'、'info' |
| disabled   | boolean | false     | 是否禁用                 |
| animate    | boolean | true      | 是否启用动画效果          |
| rounded    | boolean | false     | 是否使用圆形边角          |

## 事件

| 事件名             | 参数                | 说明                     |
|-------------------|---------------------|-------------------------|
| update:modelValue | (value: string)     | 输入框值更新时触发        |
| search            | -                   | 点击搜索按钮或按下回车键时触发 |
| keypress          | (event: KeyboardEvent) | 按下键盘时触发         |
| clear             | -                   | 点击清除按钮时触发        |
| focus             | -                   | 输入框获得焦点时触发      |
| blur              | -                   | 输入框失去焦点时触发      |

## 使用示例

### 基本用法

