# Comment 评论组件

Comment 组件是一个功能完善的评论系统组件，适用于各种需要展示用户评论的场景，如博客文章、社交媒体、产品评价等。

## 功能特性

- 支持基础评论展示
- 支持多层嵌套评论结构
- 可自定义头像形状（圆形/方形）
- 提供评论点赞、删除、回复等交互功能
- 支持自定义评论输入区域
- 适配明暗两种主题模式
- 支持加载状态展示
- 可自定义头像和操作区域渲染

## 安装

```bash
# 如果使用 npm
npm install @your-lib/comment

# 如果使用 yarn
yarn add @your-lib/comment

# 如果使用 pnpm
pnpm add @your-lib/comment
```

## 基础用法

### 基础评论展示

```vue
<template>
  <Comment :comments="comments" />
</template>

<script setup>
import { Comment } from '@your-lib/comment';
import { ref } from 'vue';

const comments = ref([
  {
    id: '1',
    author: '张三',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    content: '这是一条评论内容',
    time: '2小时前',
    likes: 5,
    liked: false
  },
  {
    id: '2',
    author: '李四',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    content: '这是另一条评论',
    time: '昨天',
    likes: 10,
    liked: true
  }
]);
</script>
```

### 嵌套评论结构

```vue
<template>
  <Comment :comments="nestedComments" :nested="true" />
</template>

<script setup>
import { Comment } from '@your-lib/comment';
import { ref } from 'vue';

const nestedComments = ref([
  {
    id: '1',
    author: '张三',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    content: '这是一条主评论',
    time: '3天前',
    likes: 15,
    children: [
      {
        id: '1-1',
        author: '李四',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        content: '这是一条回复评论',
        time: '2天前',
        likes: 3,
        replyTo: {
          id: '1',
          author: '张三'
        }
      }
    ]
  }
]);
</script>
```

### 交互功能示例

```vue
<template>
  <Comment 
    :comments="comments" 
    :allowReply="true"
    @like="handleLike"
    @delete="handleDelete"
    @reply="handleReply"
    @submit="handleSubmit"
  />
</template>

<script setup>
import { Comment } from '@your-lib/comment';
import { ref } from 'vue';

const comments = ref([/* 评论数据 */]);

const handleLike = (commentId) => {
  // 处理点赞事件
  console.log('点赞评论:', commentId);
};

const handleDelete = (commentId) => {
  // 处理删除事件
  console.log('删除评论:', commentId);
};

const handleReply = (commentId) => {
  // 处理回复事件
  console.log('回复评论:', commentId);
};

const handleSubmit = (data) => {
  // 处理提交评论/回复事件
  console.log('提交内容:', data.content);
  console.log('回复目标ID:', data.replyTo);
};
</script>
```

## 自定义渲染

### 自定义头像

```vue
<template>
  <Comment 
    :comments="comments" 
    :renderAvatar="renderCustomAvatar"
  />
</template>

<script setup>
import { Comment } from '@your-lib/comment';
import { h, ref } from 'vue';

const comments = ref([/* 评论数据 */]);

const renderCustomAvatar = (comment) => {
  const firstLetter = comment.author.charAt(0).toUpperCase();
  
  return h('div', {
    class: `w-10 h-10 rounded-full bg-blue-200 dark:bg-blue-800 
           text-blue-700 dark:text-blue-200 flex items-center justify-center`,
  }, firstLetter);
};
</script>
```

### 自定义操作区

```vue
<template>
  <Comment 
    :comments="comments" 
    :renderActions="renderCustomActions"
  />
</template>

<script setup>
import { Comment } from '@your-lib/comment';
import { h, ref } from 'vue';

const comments = ref([/* 评论数据 */]);

const renderCustomActions = (comment) => {
  return [
    h('button', {
      class: 'flex items-center text-gray-500 hover:text-blue-500 transition-colors',
      onClick: () => console.log('分享评论:', comment.id)
    }, [
      h('svg', { /* SVG 图标属性 */ }, [/* SVG 路径 */]),
      '分享'
    ]),
    h('button', {
      class: 'flex items-center text-gray-500 hover:text-yellow-500 transition-colors ml-4',
      onClick: () => console.log('收藏评论:', comment.id)
    }, [
      h('svg', { /* SVG 图标属性 */ }, [/* SVG 路径 */]),
      '收藏'
    ])
  ];
};
</script>
```

### 自定义评论输入区域

```vue
<template>
  <Comment :comments="comments">
    <template #commentInput>
      <div class="my-custom-input">
        <!-- 自定义输入区域内容 -->
        <textarea v-model="commentText" class="w-full p-3 rounded"></textarea>
        <button @click="submitComment">发送</button>
      </div>
    </template>
  </Comment>
</template>
```

## API

### 属性 (Props)

| 属性名 | 类型 | 默认值 | 描述 |
| ------ | ---- | ------ | ---- |
| comments | CommentData[] | [] | 评论数据数组 |
| avatarShape | 'circle' \| 'square' | 'circle' | 头像形状 |
| nested | boolean | true | 是否使用缩进样式显示嵌套评论 |
| allowReply | boolean | true | 是否允许回复评论 |
| loading | boolean | false | 是否显示加载状态 |
| renderAvatar | (comment: CommentData) => VNode | undefined | 自定义头像渲染函数 |
| renderActions | (comment: CommentData) => VNode[] | undefined | 自定义操作区域渲染函数 |

### 事件 (Events)

| 事件名 | 回调参数 | 描述 |
| ------ | -------- | ---- |
| reply | (commentId: string) | 用户点击回复按钮时触发 |
| like | (commentId: string) | 用户点赞评论时触发 |
| delete | (commentId: string) | 用户删除评论时触发 |
| submit | ({ content: string, replyTo: string \| null }) | 用户提交评论或回复时触发 |

### 插槽 (Slots)

| 插槽名 | 描述 |
| ------ | ---- |
| commentInput | 自定义评论输入区域 |

## 数据结构

### CommentData 接口

```typescript
interface CommentData {
  id: string;               // 评论唯一标识
  author: string;           // 作者名称
  avatar: string;           // 作者头像URL
  content: string;          // 评论内容
  time: string;             // 评论时间
  likes?: number;           // 点赞数
  liked?: boolean;          // 当前用户是否点赞
  isAuthor?: boolean;       // 是否是原作者
  allowDelete?: boolean;    // 是否允许删除
  replyTo?: {               // 回复目标信息
    id: string;
    author: string;
  };
  children?: CommentData[]; // 子评论数组
}
```

## 最佳实践

1. **场景适配**：根据不同场景选择合适的头像形状，圆形头像适合社交媒体场景，方形头像适合专业平台。

2. **嵌套层级**：当评论嵌套层级较深时，可考虑禁用嵌套样式（设置`nested: false`），以提高整体可读性。

3. **标识原作者**：使用 `isAuthor` 字段来标识和突显原内容作者的评论。

4. **自定义渲染**：对于特殊需求，可以使用 `renderAvatar` 和 `renderActions` 来自定义头像和交互区域。

5. **状态管理**：对于复杂的评论系统，建议配合状态管理库（如Pinia或Vuex）使用，以便更好地管理评论状态变化。

6. **分页加载**：处理大量评论数据时，建议在服务端实现分页逻辑，避免一次性加载过多评论导致性能问题。

7. **内容过滤**：针对用户生成内容，建议在服务端实现敏感内容过滤，保障评论区的健康环境。

8. **深色模式**：Comment 组件已内置支持深色模式，会自动适应带有 `.dark` 类的容器，无需额外配置。

## 可访问性建议

1. 确保评论区的键盘导航顺序合理
2. 使用足够的色彩对比度以确保文本可读性
3. 为交互元素添加合适的 ARIA 标签

## 浏览器兼容性

- 支持所有现代浏览器
- 支持 Internet Explorer 11 及以上版本（需要相应的 polyfills）

## 贡献指南

如果你发现任何问题或有改进建议，欢迎提交 issue 或 pull request。

## 许可证

MIT
