# Upload 上传组件

Upload 是一个功能强大的文件上传组件，支持点击上传和拖拽上传，支持多种自定义配置，适用于各种文件上传场景。

## 功能特点

- 📤 支持点击上传和拖拽上传两种方式
- 📂 支持单文件和多文件上传
- 🔍 可限制上传文件类型和大小
- 📊 实时显示上传进度
- 🌓 支持亮色/暗色两种主题模式
- 🛠 丰富的自定义配置和事件回调

## 基础用法

最简单的上传组件用法，点击按钮选择文件上传。

```vue
<template>
  <Upload action="https://api.example.com/upload" @change="handleChange" />
</template>

<script>
import { Upload } from 'your-component-library'

export default {
  components: { Upload },
  methods: {
    handleChange(info) {
      console.log('File status changed:', info)
    }
  }
}
</script>
```

## 拖拽上传

通过设置 `drag` 属性可以开启拖拽上传模式。

```vue
<template>
  <Upload
    action="https://api.example.com/upload"
    drag
    @change="handleChange"
  />
</template>
```

## 多文件上传

设置 `multiple` 属性后可以选择多个文件上传。

```vue
<template>
  <Upload
    action="https://api.example.com/upload"
    multiple
    @change="handleChange"
  />
</template>
```

## 文件类型限制

通过 `accept` 属性可以限制上传文件的类型。

```vue
<template>
  <Upload
    action="https://api.example.com/upload"
    accept=".jpg,.jpeg,.png,.gif"
    @change="handleChange"
  >
    <div class="text-blue-500">仅接受图片文件</div>
  </Upload>
</template>
```

## 文件大小限制

通过 `maxSize` 属性可以限制上传文件的大小（单位为字节）。

```vue
<template>
  <Upload
    action="https://api.example.com/upload"
    :maxSize="1024 * 1024" <!-- 1MB -->
    @change="handleChange"
    @exceed-size="handleExceedSize"
  />
</template>

<script>
export default {
  methods: {
    handleExceedSize(file) {
      alert(`文件 ${file.name} 超出大小限制`)
    }
  }
}
</script>
```

## 默认文件列表

可以通过 `defaultFileList` 属性设置默认已上传的文件列表。

```vue
<template>
  <Upload
    action="https://api.example.com/upload"
    :defaultFileList="defaultFiles"
    @change="handleChange"
  />
</template>

<script>
export default {
  data() {
    return {
      defaultFiles: [
        {
          uid: '1',
          name: 'example.pdf',
          status: 'done',
          url: 'https://example.com/example.pdf',
          size: 1024 * 1024,
          type: 'application/pdf'
        }
      ]
    }
  }
}
</script>
```

## 自定义上传

通过 `customRequest` 属性可以完全自定义上传行为。

```vue
<template>
  <Upload
    action="https://api.example.com/upload"
    :customRequest="handleCustomRequest"
    @change="handleChange"
  />
</template>

<script>
export default {
  methods: {
    handleCustomRequest(options) {
      // 获取上传选项
      const { action, file, onProgress, onSuccess, onError } = options
      
      // 自定义上传逻辑
      const formData = new FormData()
      formData.append('file', file)
      
      // 模拟上传进度
      const timer = setInterval(() => {
        const percent = Math.floor(Math.random() * 100)
        onProgress({ percent })
        
        if (percent === 100) {
          clearInterval(timer)
          // 模拟上传成功
          onSuccess({ url: 'https://example.com/uploaded-file.jpg' })
        }
      }, 100)
    }
  }
}
</script>
```

## 完整示例

一个包含多种功能的完整上传组件示例。

```vue
<template>
  <Upload
    action="https://api.example.com/upload"
    drag
    multiple
    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
    :maxSize="5 * 1024 * 1024"
    :headers="{ Authorization: 'Bearer token' }"
    :data="{ type: 'example' }"
    :beforeUpload="beforeUpload"
    @change="handleChange"
    @success="handleSuccess"
    @error="handleError"
    @progress="handleProgress"
    @exceed-size="handleExceedSize"
    @remove="handleRemove"
  >
    <template #drag>
      <div class="text-blue-500">拖拽文件到此处上传 (支持多文件)</div>
    </template>
  </Upload>
</template>

<script>
export default {
  methods: {
    beforeUpload(file) {
      // 可以在上传前检查或修改文件
      const isJpg = file.type === 'image/jpeg'
      if (!isJpg) {
        alert('只能上传JPG文件!')
        return false
      }
      return true
    },
    handleChange(info) {
      console.log('File status changed:', info)
    },
    handleSuccess(info) {
      console.log('Upload success:', info)
    },
    handleError(info) {
      console.log('Upload error:', info)
    },
    handleProgress(info) {
      console.log(`Upload progress: ${info.percent}%`)
    },
    handleExceedSize(file) {
      alert(`文件 ${file.name} 超出大小限制`)
    },
    handleRemove(file) {
      console.log(`File ${file.name} removed`)
    }
  }
}
</script>
```

## API 参考

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| action | 上传的地址 | string | - |
| accept | 接受上传的文件类型 | string | '' |
| multiple | 是否支持多选文件 | boolean | false |
| drag | 是否启用拖拽上传 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| maxSize | 限制上传文件大小（bytes） | number | 0 |
| defaultFileList | 默认已上传的文件列表 | UploadFile[] | [] |
| headers | 上传请求的headers | object | {} |
| data | 上传所需额外参数 | object | {} |
| withCredentials | 支持发送cookie凭证信息 | boolean | false |
| beforeUpload | 上传文件之前的钩子函数 | (file, fileList) => boolean \| Promise | () => true |
| customRequest | 自定义上传方法 | (options) => void | undefined |

### 事件

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 上传文件改变时的状态 | { file, fileList } |
| success | 文件上传成功时的回调 | { response, file, fileList } |
| error | 文件上传失败时的回调 | { error, file, fileList } |
| progress | 文件上传进度的回调 | { percent, file, fileList } |
| exceed-size | 文件大小超出限制的回调 | file |
| remove | 移除文件时的回调 | file |

### 插槽

| 插槽名称 | 说明 | 参数 |
| --- | --- | --- |
| default | 上传按钮的内容 | - |
| drag | 拖拽上传区域的额外内容 | - |

### 类型定义

```typescript
// 文件状态
export type UploadFileStatus = 'ready' | 'uploading' | 'done' | 'error';

// 上传文件信息
export interface UploadFile {
  uid: string;         // 文件唯一标识
  name: string;        // 文件名
  status?: UploadFileStatus;  // 文件状态
  response?: any;      // 服务端响应内容
  url?: string;        // 文件URL
  size: number;        // 文件大小 (bytes)
  type: string;        // 文件类型
  percent?: number;    // 上传进度
}

// 自定义请求选项
export interface HttpRequestOptions {
  action: string;
  data?: Record<string, any>;
  file: File;
  filename?: string;
  headers?: Record<string, string>;
  onProgress?: (e: ProgressEvent) => void;
  onSuccess?: (response: any) => void;
  onError?: (err: any) => void;
  withCredentials?: boolean;
}
```

## 最佳实践

1. **适当的文件限制**：根据业务需求设置合理的文件类型和大小限制，避免用户上传不适合的文件。

2. **清晰的反馈**：提供上传过程中的状态反馈，如进度条、成功/失败提示等，增强用户信心。

3. **灵活的上传方式**：针对不同场景提供不同的上传方式，如按钮上传适合单文件操作，拖拽上传更适合批量文件处理。

4. **预览与管理**：对于已上传的文件，提供预览和管理功能，方便用户检查和操作。

5. **错误处理**：妥善处理上传过程中可能出现的错误，并向用户提供清晰的错误信息和解决建议。

## 浏览器兼容性

- 现代浏览器（Chrome, Firefox, Safari, Edge）
- Internet Explorer 11+（需要相应的 polyfill 支持）

## 注意事项

- 上传大文件时，请确保服务器配置了适当的文件大小限制
- 对于需要高安全性的场景，建议在服务端进行更严格的文件类型检查
- 当使用拖拽上传时，确保拖拽区域有足够大的可视空间
