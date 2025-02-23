# Vue 3 Component Library

一个基于 Vue 3、TypeScript 和 Tailwind CSS 的现代化组件库。

## 特性

- 🚀 基于 Vue 3 和 TypeScript 构建
- 🎨 使用 Tailwind CSS 实现灵活的样式定制
- 📦 支持按需引入
- 🌙 内置暗色模式支持
- ⌨️ 完整的键盘导航支持
- 📱 响应式设计
- 🎯 完整的 TypeScript 类型支持

## 基础环境要求

### 必需环境
- Node.js >= 20.0.0
- pnpm >= 8.0.0

### 核心依赖版本
- Vue: ^3.5.13
- TypeScript: ~5.7.2
- Tailwind CSS: ^4.0.6
- Vite: ^6.1.0

### 推荐开发工具
- VS Code
- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- Tailwind CSS IntelliSense

### 浏览器支持
- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

确保你的开发环境满足以上要求，特别是 Node.js 和 pnpm 的版本要求，这对于确保依赖包的正确安装和项目的正常运行至关重要。

## 组件列表

### 基础组件

- **Badge** - 徽章组件
  - 支持多种颜色主题和样式变体
  - 可自定义尺寸和圆角
  - 支持点击事件和图标

- **Button** - 按钮组件
  - 多种类型：primary、secondary、success 等
  - 支持图标按钮
  - 可配置加载状态和禁用状态

- **CheckBox** - 复选框组件
  - 支持多种尺寸和颜色主题
  - 支持不确定状态
  - 支持禁用状态

### 数据展示

- **ColorInput** - 颜色选择器
  - 支持多种颜色格式
  - 预设颜色快速选择
  - 自定义颜色输入

- **DemoBlock** - 示例展示容器
  - 代码展示和复制功能
  - 支持多种代码格式
  - 语法高亮

### 反馈组件

- **Dialog** - 对话框组件
  - 支持多种颜色主题
  - 自定义按钮文本和样式
  - 平滑的过渡动画

- **Message** - 消息提示
  - 支持 success、warning、error、info 类型
  - 可自定义显示时间和位置
  - 支持手动关闭

### 导航组件

- **Dropdowns** - 下拉菜单
  - 支持多种项目类型
  - 键盘导航支持
  - 自动位置调整

### 数据加载

- **Infinite** - 无限滚动
  - 自动触发加载更多
  - 自定义加载提示
  - 支持错误处理

### 其他组件

- **GitHubProfile** - GitHub 个人资料展示
  - 响应式设计
  - 优雅的动画效果
  - 数据自动加载

## 安装与使用

### 方式一：直接拷贝组件

1. 将需要的组件文件夹从 `lib/components` 目录拷贝到你的项目中
2. 确保你的项目已安装以下依赖：
   ```bash
   npm install vue@^3.3.0 typescript@^5.0.0 tailwindcss@^3.3.0
   # 或使用 yarn
   yarn add vue@^3.3.0 typescript@^5.0.0 tailwindcss@^3.3.0
   ```

3. 在你的组件中导入并使用：
   ```vue
   <script setup lang="ts">
   import { Button } from './components/Button'
   </script>

   <template>
     <Button type="primary">点击我</Button>
   </template>
   ```

### 方式二：按需复制代码

1. 直接复制你需要的组件代码到你的项目中
2. 修改组件中的导入路径以匹配你的项目结构
3. 确保你的项目配置了 TypeScript 和 Tailwind CSS

### 使用示例

```vue
<!-- 示例：使用 Button 组件 -->
<script setup lang="ts">
import { Button } from './components/Button'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<template>
  <Button type="primary" @click="handleClick">
    点击我
  </Button>
</template>

<!-- 示例：使用 Message 组件 -->
<script setup lang="ts">
import { Message } from './components/Message'

const showMessage = () => {
  Message.success('操作成功!')
}
</script>
```

### 注意事项

1. 确保你的项目已正确配置 TypeScript 和 Tailwind CSS
2. 组件间可能存在依赖关系，请查看各组件文档了解详细信息
3. 建议同时复制组件对应的类型声明文件（.d.ts）
4. 如需修改组件样式，可通过覆盖 Tailwind 类或修改组件源码实现

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 运行测试
npm run test
```

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

[MIT License](LICENSE)
