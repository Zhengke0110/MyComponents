# Button 按钮组件

一个功能完整的按钮组件，支持多种类型、尺寸和状态。

## 基础用法

```vue
<Button type="primary">主要按钮</Button>
<Button type="secondary">次要按钮</Button>
<Button type="success">成功按钮</Button>
```

## 按钮类型

支持多种类型：
- primary: 主要按钮
- secondary: 次要按钮
- success: 成功按钮
- warning: 警告按钮
- error: 错误按钮
- info: 信息按钮
- ghost: 幽灵按钮

```vue
<Button type="primary">主要按钮</Button>
<Button type="ghost">幽灵按钮</Button>
```

## 尺寸

提供五种尺寸：
- xs: 超小号
- sm: 小号
- md: 中号（默认）
- lg: 大号
- xl: 超大号

```vue
<Button size="xs">超小号</Button>
<Button size="md">中号</Button>
<Button size="xl">超大号</Button>
```

## 图标按钮

支持添加图标，图标必须使用 `icon-[]` 格式：

```vue
<Button icon="icon-[solar--chat-square-like-broken] size-5" type="primary">喜欢</Button>
<Button icon="icon-[solar--settings-broken] size-5" />
```

## 加载状态

```vue
<Button loading>加载中</Button>
<Button loading type="primary">保存中</Button>
```

## 禁用状态

```vue
<Button disabled>禁用按钮</Button>
<Button disabled type="primary">禁用主要</Button>
```

## 块级按钮

```vue
<Button block type="primary">块级按钮</Button>
```

## 动画效果

```vue
<Button :isActiveAnim="true">带动画</Button>
<Button :isActiveAnim="false">无动画</Button>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'ghost' | 'primary' | 按钮类型 |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | 按钮尺寸 |
| icon | string | - | 图标名称（必须使用 icon-[] 格式） |
| iconColor | string | - | 图标颜色 |
| loading | boolean | false | 加载状态 |
| disabled | boolean | false | 禁用状态 |
| isActiveAnim | boolean | true | 是否启用动画效果 |
| block | boolean | false | 是否为块级按钮 |

## Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| click | (event: MouseEvent) | 点击按钮时触发（loading 或 disabled 状态下不触发） |
