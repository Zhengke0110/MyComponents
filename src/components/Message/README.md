# Message 消息提示组件

一个轻量级的消息提示组件，用于在页面顶部或底部显示全局消息通知。

## 特性

- 支持多种消息类型：success、warning、error、info
- 支持自定义主题颜色
- 可自定义显示位置：顶部或底部
- 可配置显示时间
- 支持手动关闭
- 支持多消息叠加显示
- 平滑的显示/隐藏动画效果

## 基础用法

```tsx
import { Message } from './components/Message'

// 成功提示
Message.success('操作成功!')

// 警告提示
Message.warning('警告信息')

// 错误提示
Message.error('错误信息')

// 信息提示
Message.info('普通信息')

// 使用自定义主题颜色
Message.theme('自定义颜色消息', 'purple')
```

## API

### 方法

组件提供以下五个静态方法：

- `Message.success(content, options?)`
- `Message.warning(content, options?)`
- `Message.error(content, options?)`
- `Message.info(content, options?)`
- `Message.theme(content, color, options?)` - 使用自定义颜色主题

### 配置项

每个方法都接受一个可选的配置对象，包含以下属性：

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| content | 提示内容 | string | - |
| duration | 显示时间，单位：毫秒。设为 0 则不自动关闭 | number | 3000 |
| position | 显示位置 | 'top' \| 'bottom' | 'top' |
| closable | 是否显示关闭按钮 | boolean | false |
| onClose | 关闭时的回调函数 | () => void | - |
| color | 自定义主题颜色（仅用于 theme 方法） | ColorType | - |

## 示例

```tsx
// 可关闭的消息
Message.success('点击可关闭此消息', {
  closable: true,
  onClose: () => console.log('消息已关闭')
})

// 自定义显示时间
Message.warning('此消息将显示 10 秒', {
  duration: 10000
})

// 底部显示
Message.info('底部显示的消息', {
  position: 'bottom'
})

// 多条消息叠加
Message.success('消息 1')
setTimeout(() => {
  Message.warning('消息 2')
}, 300)

// 使用自定义主题颜色
Message.theme('紫色主题消息', 'purple')
Message.theme('青色主题消息', 'teal', { closable: true })
Message.theme('粉色主题消息', 'rose', { position: 'bottom' })
```

## 自定义主题颜色

组件支持的颜色类型包括：
- 灰色系：'slate', 'gray', 'zinc', 'neutral', 'stone'
- 暖色系：'red', 'orange', 'amber', 'yellow'
- 绿色系：'lime', 'green', 'emerald', 'teal'
- 蓝色系：'cyan', 'sky', 'blue', 'indigo'
- 紫粉色系：'violet', 'purple', 'fuchsia', 'pink', 'rose'

## 样式定制

组件使用 Tailwind CSS 进行样式管理，可以通过修改以下类名来自定义样式：

- 容器：`fixed left-[50%] z-50 flex items-center px-5 py-3 rounded-lg transform -translate-x-1/2`
- 图标：`w-6 h-6`
- 文本：`text-sm font-medium`
- 关闭按钮：`ml-4 p-1 rounded-full transition-all duration-200`

每种类型的消息都有独特的颜色主题，可以通过 `styles` 对象进行自定义。

## 注意事项

1. 消息会自动进行堆叠，无需手动管理位置
2. 默认情况下消息会在 3 秒后自动关闭
3. 组件会自动清理 DOM，无需手动处理
4. 支持服务端渲染（SSR）
