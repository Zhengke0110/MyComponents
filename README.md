# Vue 3 组件库

一个使用 Vue 3、TypeScript 和 Tailwind CSS 构建的现代化组件库。

## 特性

- 🚀 基于 Vue 3 和 TypeScript 构建
- 🎨 使用 Tailwind CSS 实现灵活的样式定制
- 📦 支持按需引入
- 🌙 内置暗色模式支持
- ⌨️ 完整的键盘导航支持
- 📱 响应式设计
- 🎯 完整的 TypeScript 类型支持

## 在线预览

查看组件库演示和文档：[https://lib.timu.fun](https://lib.timu.fun)

## 环境要求

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

## 组件列表

### 基础组件

#### Button 按钮
按钮组件支持多种类型、尺寸和状态，适用于各种交互场景。

- 支持多种类型：主要、次要、成功、警告、错误、信息和幽灵按钮
- 提供五种尺寸：超小号、小号、中号、大号、超大号
- 支持图标按钮、加载状态、禁用状态
- 块级按钮和动画效果

#### Badge 徽章
轻量级的状态标记、分类和标签展示组件。

- 丰富的颜色方案：支持8种预设颜色
- 三种样式变体：实心、柔和、描边
- 灵活的尺寸和圆角设置
- 支持点击交互和自定义内容

#### TextInput 文本输入框
功能丰富的文本输入组件，支持单行文本、多行文本和各种状态展示。

- 支持单行输入和多行文本区域
- 多种主题颜色和尺寸规格
- 支持前缀和后缀图标
- 支持错误状态展示和清除按钮

#### CheckBox 复选框
可自定义的复选框组件，支持多种尺寸、颜色和布局方式。

- 支持多种尺寸和颜色主题
- 支持水平/垂直布局
- 支持禁用状态和不确定状态
- 支持描述文本和自定义样式

#### Tooltip 文字提示
在用户悬停在元素上时显示提示信息，提高用户体验和界面可用性。

- 支持不同方向的提示（上方或下方）
- 自定义内容和触发器
- 可调整偏移距离
- 智能位置调整

### 数据展示组件

#### Waterfall 瀑布流
瀑布流组件用于以错落有致的方式展示不同高度的内容卡片。

- 自动计算并均衡排列内容
- 支持图片预加载
- 灵活的列数配置
- 平滑的过渡动画效果
- 高性能的渲染和重排算法

#### Tabs 选项卡
允许用户在不同内容区域之间进行切换，提供响应式设计。

- 响应式设计：在小屏幕设备上转换为下拉菜单形式
- 自定义标签内容和禁用状态
- 动画过渡效果
- 支持多种主题样式

#### TagsList 标签列表
用于管理标签列表的组件，支持添加、删除标签，并提供丰富的自定义选项。

- 支持添加和删除标签
- 自定义标签颜色主题
- 多种尺寸选择
- 标签数量限制和验证规则
- 支持随机颜色标签选项

#### DemoBlock 示例展示
用于展示组件示例的容器组件，提供代码展示、代码复制等功能。

- 组件演示展示区域
- 支持展示组件标题和描述
- 代码查看和收起功能
- 代码复制功能和语法高亮
- 支持多种代码格式

### 表单与选择组件

#### SelectMenus 下拉选择
交互丰富的下拉选择组件，具有精美的样式、流畅的动画效果和完善的键盘导航支持。

- 支持纯文本选项、图标和头像展示
- 完善的键盘导航
- 流畅的过渡动画效果
- 支持预设主题颜色自定义

#### ColorInput 颜色选择器
简洁、易用的颜色选择器组件，支持预设颜色和自定义颜色输入。

- 支持预设颜色快速选择
- 支持自定义颜色输入
- 支持多种颜色格式（hex、0x）
- 响应式设计和优雅的动画效果

#### Segment 分段控制器
用于在预设选项中进行选择的组件，通常用于切换视图、筛选内容或设置简单的选项。

- 动画效果和键盘可访问性
- 尺寸多样化和图标支持
- 块级模式和禁用状态
- 简洁明了的设计风格

#### Calendars 日历组件
功能丰富的日历组件，支持日期单选和范围选择，带有平滑的过渡动画和完整的主题支持。

- 支持单个日期选择和日期范围选择
- 内置中英文国际化支持
- 自适应亮色/暗色主题
- 流畅的过渡动画效果

### 反馈组件

#### Message 消息提示
轻量级的消息提示组件，用于在页面顶部或底部显示全局消息通知。

- 支持多种消息类型：成功、警告、错误、信息
- 可自定义显示位置和时间
- 支持手动关闭
- 支持多消息叠加显示
- 平滑的显示/隐藏动画效果

#### Dialog 对话框
灵活且可定制的对话框组件。

- 支持多种颜色主题的自定义外观
- 平滑的过渡动画效果
- 支持暗色模式
- 完整的 TypeScript 类型支持
- 响应式设计

#### Popover 弹出框
轻量级的弹出框组件，支持多种触发方式和位置。

- 支持悬浮和点击两种触发方式
- 12个不同的弹出位置
- 自定义样式和内容
- 支持显示箭头
- 可配置显示/隐藏延迟

### 导航与数据加载

#### Pagination 分页
灵活的分页组件，支持快速导航、自定义外观和多种主题。

- 支持上一页/下一页导航
- 页码显示和省略功能
- 快速跳转选项
- 多种颜色主题
- 平滑过渡动画

#### Dropdowns 下拉菜单
灵活的下拉菜单组件，支持多种项目类型、键盘导航和自定义样式。

- 多种项目类型：按钮、链接和分割线
- 支持键盘导航
- 可自定义样式和尺寸
- 点击外部自动关闭
- 支持禁用和危险状态

#### Infinite 无限滚动
无限滚动组件用于处理长列表的分页加载，当列表滚动到底部时自动触发加载更多数据。

- 自动触发加载更多
- 自定义提示文案
- 自定义提示内容
- 支持错误处理和重置功能

### 可视化组件

#### RoundProgress 环形进度条
基于 Vue 3 + TSX + TypeScript + Tailwind CSS 的现代化环形进度条组件。

- 自定义颜色和渐变
- 可调整大小和线条宽度
- 平滑动画效果
- 精确的进度显示
- 自定义中心内容

## 使用指南

### 安装与集成

本组件库采用源码集成方式，您可以直接将需要的组件复制到您的项目中使用。

#### 方式一：复制组件文件夹

1. 将需要的组件文件夹从本仓库的 `lib/src/components` 目录拷贝到您项目的组件目录中
2. 确保您的项目已安装必要的依赖：

```bash
# 使用 npm
npm install vue@^3.3.0 typescript@^5.0.0 tailwindcss@^3.3.0

# 使用 yarn
yarn add vue@^3.3.0 typescript@^5.0.0 tailwindcss@^3.3.0

# 使用 pnpm
pnpm add vue@^3.3.0 typescript@^5.0.0 tailwindcss@^3.3.0
```

3. 在您的组件中导入使用：

```vue
<script setup lang="ts">
import { Button } from '@/components/Button'
</script>

<template>
  <Button type="primary">点击我</Button>
</template>
```

#### 方式二：按需复制特定组件代码

1. 直接从本仓库中复制您需要的组件代码到您的项目中
2. 根据您的项目结构调整导入路径
3. 确保您的项目已正确配置 TypeScript 和 Tailwind CSS

### 基础用法示例

```vue
<template>
  <div>
    <!-- 使用按钮组件 -->
    <Button type="primary">主要按钮</Button>
    
    <!-- 使用消息提示组件 -->
    <button @click="showMessage">显示消息</button>
    
    <!-- 使用徽章组件 -->
    <Badge text="新功能" color="green" />
  </div>
</template>

<script setup lang="ts">
// 假设已将组件复制到项目的 components 目录
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badges';
import { Message } from '@/components/Message';

const showMessage = () => {
  Message.success('操作成功!');
};
</script>
```

### 集成到构建工具

如果您使用 Vite，可以配置自动导入组件：

```js
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      // 指定组件所在目录，按需自动导入
      dirs: ['src/components'],
      // 组件的有效扩展名
      extensions: ['vue', 'tsx'],
      // 配置文件生成位置
      dts: 'src/components.d.ts',
    }),
  ],
});
```

## 注意事项

1. 组件之间可能存在依赖关系，请查看各组件文档了解详细信息
2. 建议同时复制组件对应的类型声明文件（.d.ts）
3. 确保您的项目已正确配置 Tailwind CSS，部分组件样式依赖于 Tailwind CSS 类

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

[MIT](LICENSE)
