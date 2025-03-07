# TagsInput 标签输入组件

TagsInput 是一个用于输入和管理标签的组件，支持添加、删除标签，并提供验证、限制等功能。

## 基础用法

```vue
<TagsInput v-model="tags" placeholder="请输入标签" />
```

## 功能特点

- 支持不同的尺寸
- 支持多种主题颜色
- 最大标签数量限制
- 自定义验证规则
- 是否允许重复标签
- 错误提示
- 标签动画效果

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| modelValue | `string[]` | `[]` | 标签数组，可使用 `v-model` 双向绑定 |
| color | `ThemeColor` | `'blue'` | 标签颜色主题 |
| size | `'sm'` \| `'md'` \| `'lg'` | `'md'` | 标签尺寸 |
| placeholder | `string` | `'请输入标签'` | 输入框占位文本 |
| maxTags | `number` | `Infinity` | 最大标签数量限制 |
| validation | `(tag: string) => boolean \| string` | `undefined` | 自定义验证函数，返回 true 表示验证通过，返回字符串表示错误信息 |
| allowDuplicates | `boolean` | `false` | 是否允许添加重复标签 |
| randomColors | `boolean` | `false` | 是否为每个标签分配随机颜色 |

### 可用的主题颜色

可以使用以下预设颜色作为主题色：

- 灰度色系：`slate`, `gray`, `zinc`, `neutral`, `stone`
- 彩色色系：`red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

## 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| update:modelValue | `string[]` | 标签数组更新时触发 |
| error | `string` | 出现错误时触发，参数为错误信息 |

## 使用示例

### 基础用法

```vue
<TagsInput v-model="tags" placeholder="输入标签并按回车" />
```

### 不同尺寸

```vue
<TagsInput v-model="tags" size="sm" placeholder="小尺寸" />
<TagsInput v-model="tags" size="md" placeholder="中尺寸" />
<TagsInput v-model="tags" size="lg" placeholder="大尺寸" />
```

### 不同主题色

```vue
<TagsInput v-model="tags" color="blue" placeholder="蓝色主题" />
<TagsInput v-model="tags" color="red" placeholder="红色主题" />
<TagsInput v-model="tags" color="green" placeholder="绿色主题" />
<TagsInput v-model="tags" color="purple" placeholder="紫色主题" />
```

### 最大标签限制

```vue
<TagsInput
  v-model="tags"
  :maxTags="3"
  placeholder="最多添加3个标签"
  @error="handleError"
/>
```

### 自定义验证

```vue
<TagsInput
  v-model="tags"
  :validation="validateTag"
  placeholder="自定义验证"
  @error="handleError"
/>

<script setup>
const validateTag = (tag) => {
  if (tag.length < 2) return "标签长度不能少于2个字符";
  if (tag.length > 10) return "标签长度不能超过10个字符";
  return true;
};
</script>
```

### 允许重复标签

```vue
<TagsInput
  v-model="tags"
  :allowDuplicates="true"
  placeholder="可以添加重复标签"
/>
```

### 随机颜色标签

```vue
<TagsInput
  v-model="tags"
  :randomColors="true"
  placeholder="每个标签会有不同的颜色"
/>
```
