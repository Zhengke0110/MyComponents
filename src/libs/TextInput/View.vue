<template>
  <div class="text-input-view space-y-12 p-6">
    <!-- Basic Usage Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Basic Usage</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput id="basic-input" v-model="basicValue" label="Basic Text Input" placeholder="Enter some text"
          description="This is a basic text input example" />
        <div class="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
          <p class="text-sm font-mono">Value: {{ basicValue || '""' }}</p>
        </div>
      </div>
    </section>

    <!-- Sizes Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Sizes</h2>
      <div class="space-y-4">
        <TextInput id="small-input" v-model="sizeValues.sm" label="Small Input" size="sm" placeholder="Small input" />
        <TextInput id="medium-input" v-model="sizeValues.md" label="Medium Input (Default)" size="md"
          placeholder="Medium input" />
        <TextInput id="large-input" v-model="sizeValues.lg" label="Large Input" size="lg" placeholder="Large input" />
      </div>
    </section>

    <!-- Colors Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Colors</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <TextInput v-for="color in colorOptions" :key="color" :id="`color-${color}`" v-model="colorValues[color]"
          :label="`${capitalize(color)} Color`" :color="color" :placeholder="`${capitalize(color)} themed input`" />
      </div>
    </section>

    <!-- Icons and Prefixes/Suffixes -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Icons & Prefixes/Suffixes</h2>
      <div class="space-y-4">
        <TextInput id="prefix-input" v-model="iconValues.prefix" label="Input with Prefix"
          placeholder="Search something...">
          <template #prefix>
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </template>
        </TextInput>

        <TextInput id="suffix-input" v-model="iconValues.suffix" label="Input with Suffix" placeholder="Enter email...">
          <template #suffix>
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </template>
        </TextInput>

        <TextInput id="both-input" v-model="iconValues.both" label="Input with Both" placeholder="Enter amount...">
          <template #prefix>
            <span class="text-lg font-medium">$</span>
          </template>
          <template #suffix>
            <span class="text-sm font-medium">USD</span>
          </template>
        </TextInput>
      </div>
    </section>

    <!-- States Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">States</h2>
      <div class="space-y-4">
        <TextInput id="disabled-input" v-model="stateValues.disabled" label="Disabled Input"
          placeholder="You can't edit this" disabled description="This input is disabled" />

        <TextInput id="required-input" v-model="stateValues.required" label="Required Input"
          placeholder="This field is required" required description="This input is required" />

        <TextInput id="error-input" v-model="stateValues.error" label="Input with Error" placeholder="Enter a value"
          error="This field has an error message" />
      </div>
    </section>

    <!-- Multiline (Textarea) Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Multiline Input (Textarea)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput id="textarea-input" v-model="multilineValue" label="Multiline Input"
          placeholder="Enter multiple lines of text..." multiline :rows="4"
          description="This is a textarea for longer content" />
        <div class="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
          <p class="text-sm font-mono whitespace-pre-wrap">Value: {{ multilineValue || '""' }}</p>
        </div>
      </div>
    </section>

    <!-- Input Types Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Input Types</h2>
      <div class="space-y-4">
        <TextInput id="password-input" v-model="typeValues.password" label="Password Input" type="password"
          placeholder="Enter your password" />

        <TextInput id="number-input" v-model="typeValues.number" label="Number Input" type="number"
          placeholder="Enter a number" />

        <TextInput id="email-input" v-model="typeValues.email" label="Email Input" type="email"
          placeholder="Enter your email" />
      </div>
    </section>

    <!-- Form Example Section -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Form Example</h2>
      <form @submit.prevent="submitForm" class="space-y-4 border p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
        <TextInput id="form-name" v-model="formValues.name" label="Full Name" placeholder="Enter your full name"
          required :error="formErrors.name" />

        <TextInput id="form-email" v-model="formValues.email" label="Email Address" type="email"
          placeholder="Enter your email address" required :error="formErrors.email">
          <template #suffix>
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </template>
        </TextInput>

        <TextInput id="form-message" v-model="formValues.message" label="Message" placeholder="Enter your message"
          multiline :rows="3" :error="formErrors.message" />

        <div class="pt-2">
          <button type="submit"
            class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Submit Form
          </button>
        </div>
      </form>

      <div v-if="formSubmitted"
        class="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md">
        Form submitted successfully!
      </div>
    </section>

    <!-- Summary and Best Practices Section -->
    <section class="border-t pt-10 mt-12">
      <h2 class="text-2xl font-semibold mb-6">小结与最佳实践</h2>

      <div class="prose prose-slate dark:prose-invert max-w-none">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-xl font-medium mb-3 text-indigo-600 dark:text-indigo-400 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5 mr-2" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              何时使用 TextInput 组件
            </h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>需要用户输入单行文本（如用户名、邮箱、密码等）</li>
              <li>需要用户输入多行文本（如评论、描述、详情等）</li>
              <li>表单中需要用户填写各种类型信息</li>
              <li>需要提供详细的输入反馈（如错误信息、描述信息等）</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-xl font-medium mb-3 text-indigo-600 dark:text-indigo-400 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5 mr-2" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              可访问性最佳实践
            </h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li><strong class="text-gray-800 dark:text-gray-100">始终提供标签</strong> - 确保每个输入框都有一个关联的标签 (label)，通过 <code
                  class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">id</code> 属性与输入框关联。</li>
              <li><strong class="text-gray-800 dark:text-gray-100">添加描述信息</strong> - 使用 <code
                  class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">description</code> 属性为复杂输入框提供额外指导。
              </li>
              <li><strong class="text-gray-800 dark:text-gray-100">错误反馈</strong> - 使用 <code
                  class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">error</code> 属性提供具体、清晰的错误信息，而非模糊提示。
              </li>
              <li><strong class="text-gray-800 dark:text-gray-100">必填项标记</strong> - 为必填字段设置 <code
                  class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">required</code> 属性，组件会自动添加视觉指示器。</li>
              <li><strong class="text-gray-800 dark:text-gray-100">合适的输入类型</strong> - 根据输入内容选择正确的 <code
                  class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">type</code> 属性（如 email、password 等）。
              </li>
            </ul>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-xl font-medium mb-3 text-indigo-600 dark:text-indigo-400 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5 mr-2" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
              性能优化
            </h3>
            <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>避免在单个表单中使用过多的 TextInput 组件，特别是在移动设备上</li>
              <li>对于长表单，考虑使用分步骤表单或延迟加载策略</li>
              <li>当需要大量文本编辑功能时，考虑使用专门的富文本编辑器组件</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 class="text-xl font-medium mb-3 text-indigo-600 dark:text-indigo-400 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5 mr-2" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              最佳实践
            </h3>
            <ol class="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>为每个输入框提供清晰简洁的标签</li>
              <li>默认提供有意义的占位符文本，但不要仅依赖占位符来传达重要信息</li>
              <li>在合适的地方使用图标增强用户体验，如搜索框使用放大镜图标</li>
              <li>谨慎选择输入框的大小和颜色，以便与整个设计系统保持一致</li>
              <li>在移动设备上，确保输入框有足够大的点击区域（至少使用 md 尺寸）</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- API Documentation Section -->
    <section class="border-t pt-10 mt-12">
      <h2 class="text-2xl font-semibold mb-6">API 文档</h2>

      <div class="space-y-8">
        <!-- Props Documentation -->
        <div>
          <h3 class="text-xl font-medium mb-4">属性 Props</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    属性名</th>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    类型</th>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    默认值</th>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    说明</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">modelValue
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框的值，支持 v-model 双向绑定</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">id <span
                      class="text-red-600 dark:text-red-400">*</span></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框的唯一标识，必填</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">name</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框的名称</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">label</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框的标签文本</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">type</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'text'</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框类型，如 'text', 'password', 'number' 等
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">placeholder
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">''</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框的占位符文本</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">disabled
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否禁用输入框</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">required
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否为必填项</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">description
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框下方的描述文本</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">error</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">错误信息，设置后会显示错误状态</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">color</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ColorType</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'indigo'</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">主题颜色</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">size</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'sm' | 'md' | 'lg'
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'md'</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框大小</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">wrapperClass
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">''</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">容器元素的自定义类名</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">labelClass
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">''</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">标签元素的自定义类名</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">multiline
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否为多行文本区域</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">rows</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">3</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">多行文本区域的行数</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Events Documentation -->
        <div>
          <h3 class="text-xl font-medium mb-4">事件 Events</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    事件名</th>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    参数</th>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    说明</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    update:modelValue</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入值改变时触发</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">focus</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">FocusEvent</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框获得焦点时触发</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">blur</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">FocusEvent</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框失去焦点时触发</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Slots Documentation -->
        <div>
          <h3 class="text-xl font-medium mb-4">插槽 Slots</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    插槽名</th>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    说明</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">prefix</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框前缀内容，通常用于放置图标</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">suffix</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框后缀内容，通常用于放置图标</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Color Options Documentation -->
        <div>
          <h3 class="text-xl font-medium mb-4">颜色主题 Color Options</h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            组件支持以下所有 Tailwind 颜色主题，在浅色和深色模式下均提供良好的显示效果：
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <!-- 灰度系列 -->
            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-slate-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">slate</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-gray-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">gray</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-zinc-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">zinc</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-neutral-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">neutral</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-stone-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">stone</h4>
              </div>
            </div>

            <!-- 红色系列 -->
            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-red-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">red</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-orange-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">orange</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-amber-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">amber</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-yellow-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">yellow</h4>
              </div>
            </div>

            <!-- 绿色系列 -->
            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-lime-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">lime</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-green-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">green</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-emerald-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">emerald</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-teal-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">teal</h4>
              </div>
            </div>

            <!-- 蓝色系列 -->
            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-cyan-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">cyan</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-sky-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">sky</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-blue-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">blue</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-indigo-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">indigo</h4>
              </div>
            </div>

            <!-- 紫色系列 -->
            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-violet-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">violet</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-purple-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">purple</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-fuchsia-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">fuchsia</h4>
              </div>
            </div>

            <!-- 粉色系列 -->
            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-pink-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">pink</h4>
              </div>
            </div>

            <div class="rounded-lg overflow-hidden shadow-sm">
              <div class="bg-rose-500 h-10"></div>
              <div class="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h4 class="font-medium text-center">rose</h4>
              </div>
            </div>
          </div>

          <div
            class="mt-5 px-4 py-3 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg">
            <p class="text-amber-800 dark:text-amber-300 text-sm flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>颜色会根据深色/浅色模式自动调整，确保在任何背景下都有良好的可读性和对比度。默认颜色为 <code
                  class="bg-amber-100 dark:bg-amber-800 px-1 py-0.5 rounded text-sm">indigo</code>。</span>
            </p>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import TextInput, { type ColorType } from './TextInput'


// Basic value
const basicValue = ref('')

// Size examples
const sizeValues = reactive({
  sm: '',
  md: '',
  lg: ''
})

// Color options
const colorOptions = [
  'indigo', 'blue', 'red', 'green', 'purple', 'teal'
] as Array<ColorType>

// Color values
const colorValues = reactive<Record<string, string>>({
  indigo: '',
  blue: '',
  red: '',
  green: '',
  purple: '',
  teal: ''
})

// Icon examples
const iconValues = reactive({
  prefix: '',
  suffix: '',
  both: ''
})

// State examples
const stateValues = reactive({
  disabled: 'This input is disabled',
  required: '',
  error: ''
})

// Multiline example
const multilineValue = ref('')

// Type examples
const typeValues = reactive({
  password: '',
  number: '',
  email: ''
})

// Form example
const formValues = reactive({
  name: '',
  email: '',
  message: ''
})

const formErrors = reactive({
  name: '',
  email: '',
  message: ''
})

const formSubmitted = ref(false)

const validateForm = () => {
  let isValid = true

  // Reset errors
  formErrors.name = ''
  formErrors.email = ''
  formErrors.message = ''

  // Validate name
  if (!formValues.name.trim()) {
    formErrors.name = 'Name is required'
    isValid = false
  }

  // Validate email
  if (!formValues.email.trim()) {
    formErrors.email = 'Email is required'
    isValid = false
  } else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
    formErrors.email = 'Please enter a valid email address'
    isValid = false
  }

  // Validate message
  if (!formValues.message.trim()) {
    formErrors.message = 'Message is required'
    isValid = false
  }

  return isValid
}

const submitForm = () => {
  if (validateForm()) {
    formSubmitted.value = true
    setTimeout(() => {
      formSubmitted.value = false
    }, 3000)
  }
}



const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

</script>
