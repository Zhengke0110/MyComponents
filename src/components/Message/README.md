# Message 消息提示组件

一个轻量级的消息提示组件，用于在页面顶部显示全局消息通知。

## 特性

- 支持多种消息类型：success、warning、error、info
- 支持暗色模式（通过 Tailwind CSS dark 类）
- 流畅的动画效果
- 支持手动关闭
- 支持多消息叠加显示

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
```

## API

### 方法

组件提供以下静态方法：

- `Message.success(content, options?)`
- `Message.warning(content, options?)`
- `Message.error(content, options?)`
- `Message.info(content, options?)`

### 配置项

每个方法都接受一个可选的配置对象：

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| content | 提示内容 | string | - |
| duration | 显示时间(毫秒) | number | 3000 |
| closable | 是否显示关闭按钮 | boolean | false |
| onClose | 关闭时的回调函数 | () => void | - |

## 暗色模式

组件会自动适配暗色模式，需要在 HTML 根元素添加 `dark` 类：

```html
<!-- 启用暗色模式 -->
<html class="dark">
  <!-- 你的内容 -->
</html>
```

## 动画效果

消息提示使用优化后的动画效果：

- 进入：淡入 + 向下滑动
- 退出：淡出 + 向上滑动
- 堆叠：自动调整位置的平滑动画

## 示例

```tsx
// 基础用法
Message.success('操作成功')

// 可关闭的消息
Message.info('这是一条可关闭的消息', {
  closable: true,
  onClose: () => console.log('消息已关闭')
})

// 自定义显示时间
Message.warning('此消息将显示 5 秒', {
  duration: 5000
})
```
