# SelectMenus 下拉选择组件

一个交互丰富的下拉选择组件，具有精美的样式、流畅的动画效果和完善的键盘导航支持。

## 功能特点

- 支持纯文本选项
- 支持图标和头像展示
- 支持选项描述文本
- 完善的键盘导航（方向键、Enter、Space、Escape）
- 流畅的过渡动画效果
- 焦点管理和无障碍访问支持
- 支持纯图标模式
- 支持预设主题颜色自定义

## 使用方法

### 基本用法

```vue
<SelectMenus
  v-model="selection"
  :options="options"
  label="选择选项"
  placeholder="请选择"
/>
```

### 自定义主题

组件支持通过 `theme` 属性自定义颜色主题，只能使用预设的 Tailwind CSS 颜色名称：

```vue
<SelectMenus
  v-model="selection"
  :options="options"
  label="选择选项"
  theme="blue"
/>
```

### 可用主题颜色

组件支持以下预设主题颜色：

| 主题名称 | 值 | 说明 |
| --- | --- | --- |
| Indigo | `'indigo'` | 靛蓝色 (默认) |
| Blue | `'blue'` | 蓝色 |
| Green | `'green'` | 绿色 |
| Red | `'red'` | 红色 |
| Purple | `'purple'` | 紫色 |
| Amber | `'amber'` | 琥珀色 |
| Pink | `'pink'` | 粉色 |
| Cyan | `'cyan'` | 青色 |
| Emerald | `'emerald'` | 翠绿色 |
| Violet | `'violet'` | 紫罗兰色 |
| Teal | `'teal'` | 蓝绿色 |
| Rose | `'rose'` | 玫瑰色 |
| Sky | `'sky'` | 天蓝色 |
| Orange | `'orange'` | 橙色 |

如果传入了不支持的主题颜色，组件会自动回退到默认的 `'indigo'` 主题。

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `SelectOption \| undefined` | `undefined` | 当前选中的选项值 |
| options | `SelectOption[]` | 必填 | 选项列表 |
| label | `string \| undefined` | `undefined` | 下拉框标签文本 |
| placeholder | `string \| undefined` | `undefined` | 未选择时的占位文本 |
| theme | `SelectMenuTheme` | `'indigo'` | 主题颜色名称，只能使用预设的主题颜色 |

## 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| update:modelValue | `SelectOption \| null` | 选择值变更时触发 |

## 类型定义

```typescript
// 预设主题颜色
enum SelectMenuTheme {
  Indigo = 'indigo',  // 默认
  Blue = 'blue',
  Green = 'green',
  Red = 'red',
  Purple = 'purple',
  Amber = 'amber',
  Pink = 'pink',
  Cyan = 'cyan',
  Emerald = 'emerald',
  Violet = 'violet',
  Teal = 'teal',
  Rose = 'rose',
  Sky = 'sky',
  Orange = 'orange'
}
```

