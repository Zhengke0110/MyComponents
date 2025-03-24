# Watermark 水印组件

Watermark 组件用于在页面的某个区域添加水印，支持文字和图片水印，并自动适配深色/浅色模式。

## 何时使用

- 需要标识内容版权或所有权时
- 需要防止敏感信息被截图盗用时
- 需要显示文档状态（如"草稿"、"机密"等）时
- 需要为内部文档或系统增加身份标识时

## 基本用法

### 文字水印

```vue
<template>
  <Watermark content="保密文件">
    <div class="content">这里是需要添加水印的内容区域</div>
  </Watermark>
</template>

<script setup>
import Watermark from "your-component-library/Watermark";
</script>
```

### 图片水印

```vue
<template>
  <Watermark
    image="/path/to/logo.png"
    :width="200"
    :height="100"
    :rotate="0"
    :gap="[100, 100]"
    :opacity="0.2"
  >
    <div class="content">这里是需要添加水印的内容区域</div>
  </Watermark>
</template>
```

### 多行文字水印

```vue
<template>
  <Watermark
    :content="['机密文件', '仅内部使用', '2023']"
    :font="{ fontSize: 16, fontWeight: 'bold' }"
  >
    <div class="content">这里是需要添加水印的内容区域</div>
  </Watermark>
</template>
```

### 全屏水印（跟随滚动）

```vue
<template>
  <Watermark content="CONFIDENTIAL" :rotate="-22" :followScroll="true">
    <div class="content">这里是需要添加水印的内容区域</div>
  </Watermark>
</template>
```

## API

### Props

| 参数               | 说明                                        | 类型               | 默认值               |
| ------------------ | ------------------------------------------- | ------------------ | -------------------- |
| width              | 水印的宽度                                  | number             | 120                  |
| height             | 水印的高度                                  | number             | 64                   |
| rotate             | 水印绘制时，旋转的角度，单位 °              | number             | -22                  |
| zIndex             | 追加的水印元素的 z-index                    | number             | 9                    |
| image              | 图片源，建议导出 2 倍或 3 倍图，优先级高    | string             | -                    |
| content            | 水印文字内容                                | string \| string[] | -                    |
| font               | 文字样式 (浅色模式)                         | Font               | 见下方 Font          |
| darkFont           | 文字样式 (深色模式)                         | Font               | 见下方 Font          |
| gap                | 水印之间的间距                              | [number, number]   | [100, 100]           |
| offset             | 水印距离容器左上角的偏移量，默认为 gap/2    | [number, number]   | [gap[0]/2, gap[1]/2] |
| isDarkMode         | 是否使用暗色模式 (可选，如不设置则自动检测) | boolean            | undefined            |
| monitor            | 是否启用防篡改监控                          | boolean            | true                 |
| containerClassName | 水印容器的自定义类名                        | string             | ''                   |
| followScroll       | 是否始终跟随页面滚动（fixed 定位）          | boolean            | false                |
| opacity            | 自定义渲染透明度                            | number             | 1                    |
| enableAnimation    | 是否开启动画                                | boolean            | false                |
| animationDuration  | 动画持续时间（毫秒）                        | number             | 3000                 |

### Font

| 参数       | 说明     | 类型                                | 默认值 (浅色/深色)                      |
| ---------- | -------- | ----------------------------------- | --------------------------------------- |
| color      | 字体颜色 | string                              | rgba(0,0,0,.15) / rgba(255,255,255,.15) |
| fontSize   | 字体大小 | number                              | 16                                      |
| fontWeight | 字体粗细 | normal \| light \| weight \| number | normal                                  |
| fontFamily | 字体类型 | string                              | sans-serif                              |
| fontStyle  | 字体样式 | none \| normal \| italic \| oblique | normal                                  |

## 注意事项

1. 水印组件会自动检测当前主题模式，并应用相应的样式。如果你的深色模式不是使用 TailwindCSS 的 `dark` 类实现的，可以通过 `isDarkMode` 属性显式指定。

2. 为了防止水印被恶意删除或修改，组件内置了防篡改监控机制。如果检测到水印元素被修改或删除，会自动重新渲染水印。如果不需要此功能，可以设置 `monitor` 为 `false`。

3. 图片水印和文字水印不能同时使用，当同时设置 `image` 和 `content` 时，图片水印优先级更高。

4. 使用 `followScroll` 设置为 `true` 可以创建始终跟随页面滚动的水印，适用于需要在整个页面或应用中显示水印的场景。

5. 启用动画效果 (`enableAnimation`) 可以使水印轻微移动，有助于防止截图时去除水印，但也可能会增加 CPU 使用率。
