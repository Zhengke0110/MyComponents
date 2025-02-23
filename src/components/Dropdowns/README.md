# 下拉菜单组件

一个灵活的下拉菜单组件，支持多种项目类型、键盘导航和自定义样式。

## 特性

- 多种项目类型：按钮、链接和分割线
- 支持键盘导航
- 可自定义样式和尺寸
- 点击外部自动关闭
- 位置自动调整
- 支持禁用状态
- 支持危险状态
- 支持图标（前置和后置图标）

## 使用示例

```tsx
import { Dropdowns } from '@/components';

const items = [
  {
    id: '1',
    type: 'button',
    label: '编辑',
    icon: 'i-tabler-edit',
  },
  {
    id: '2',
    type: 'divider',
  },
  {
    id: '3',
    type: 'button',
    label: '删除',
    icon: 'i-tabler-trash',
    danger: true,
  },
];

export default () => (
  <Dropdowns
    label="操作"
    items={items}
    size="md"
    onSelect={(item) => console.log('已选择:', item)}
  />
);
```

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| label | string | - | 按钮文本 |
| items | DropdownItem[] | - | 下拉菜单项数组 |
| buttonClass | string | '' | 自定义按钮类名 |
| iconClass | string | '' | 自定义图标类名 |
| triggerIcon | string | '' | 标签前的图标 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 组件尺寸 |
| placement | 'top' \| 'bottom' \| 'left' \| 'right' | 'bottom' | 下拉菜单位置 |

## 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| select | (item: DropdownItem) | 选择菜单项时触发 |
| open | - | 下拉菜单打开时触发 |
| close | - | 下拉菜单关闭时触发 |

## 类型定义

```typescript
type ItemType = "link" | "button" | "divider";

interface DropdownItem {
  id: string | number;    // 唯一标识
  type: ItemType;         // 项目类型
  label?: string;         // 显示文本
  href?: string;         // 链接地址（type为link时使用）
  icon?: string;         // 前置图标
  endIcon?: string;      // 后置图标
  iconClass?: string;    // 图标类名
  disabled?: boolean;    // 是否禁用
  danger?: boolean;      // 是否为危险操作
  onClick?: () => void;  // 点击回调
}
