# Pagination Component

A flexible pagination component that supports quick navigation, customization, and multiple themes.

## Features

- Previous/Next navigation
- Page number display with ellipsis
- Quick jumper option
- Disabled state
- Smooth transitions
- Multiple color themes
- Customizable appearance

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| total | number | - | Total number of items |
| current | number | - | Current page number |
| pageSize | number | 20 | Items per page |
| disabled | boolean | false | Whether the pagination is disabled |
| showQuickJumper | boolean | false | Whether to show quick jumper |
| theme | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | 'primary' | Color theme of the pagination |

## Events

| Name | Parameters | Description |
|------|------------|-------------|
| update:current | (page: number) | Triggered when page changes |
| change | (page: number) | Triggered when page changes |

## Example

```tsx
// Basic with theme
<Pagination
  total={100}
  current={1}
  theme="success"
/>

// All features
<Pagination
  total={500}
  current={1}
  pageSize={10}
  showQuickJumper
  theme="warning"
  onChange={(page) => console.log(page)}
/>
```
