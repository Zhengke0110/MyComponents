<template>
  <div class="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
    <h1 class="mb-8 text-3xl font-bold">CheckBox 复选框组件</h1>

    <!-- 基础用法 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        基础用法
      </h2>
      <div class="space-y-4">
        <CheckBox id="basic-checkbox" v-model="checkState.basic" label="基础复选框" />
        <div class="text-sm text-gray-600 dark:text-gray-400">
          当前状态: {{ checkState.basic ? '已选中' : '未选中' }}
        </div>
      </div>
    </section>

    <!-- 语义化主题 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        语义化主题
      </h2>
      <div class="flex flex-wrap gap-8">
        <CheckBox id="theme-primary" v-model="checkState.primary" type="primary" label="主要" />
        <CheckBox id="theme-secondary" v-model="checkState.secondary" type="secondary" label="次要" />
        <CheckBox id="theme-success" v-model="checkState.success" type="success" label="成功" />
        <CheckBox id="theme-warning" v-model="checkState.warning" type="warning" label="警告" />
        <CheckBox id="theme-danger" v-model="checkState.danger" type="danger" label="危险" />
        <CheckBox id="theme-info" v-model="checkState.info" type="info" label="信息" />
      </div>
    </section>

    <!-- 颜色选择 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        颜色选择
      </h2>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            灰色系
          </h3>
          <div class="space-y-3">
            <CheckBox id="color-slate" v-model="checkState.slate" type="slate" label="石板灰" />
            <CheckBox id="color-gray" v-model="checkState.gray" type="gray" label="灰色" />
            <CheckBox id="color-zinc" v-model="checkState.zinc" type="zinc" label="锌灰" />
            <CheckBox id="color-neutral" v-model="checkState.neutral" type="neutral" label="中性灰" />
            <CheckBox id="color-stone" v-model="checkState.stone" type="stone" label="石灰" />
          </div>
        </div>

        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            暖色系
          </h3>
          <div class="space-y-3">
            <CheckBox id="color-red" v-model="checkState.red" type="red" label="红色" />
            <CheckBox id="color-orange" v-model="checkState.orange" type="orange" label="橙色" />
            <CheckBox id="color-amber" v-model="checkState.amber" type="amber" label="琥珀色" />
            <CheckBox id="color-yellow" v-model="checkState.yellow" type="yellow" label="黄色" />
          </div>
        </div>

        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            绿色系
          </h3>
          <div class="space-y-3">
            <CheckBox id="color-lime" v-model="checkState.lime" type="lime" label="青柠色" />
            <CheckBox id="color-green" v-model="checkState.green" type="green" label="绿色" />
            <CheckBox id="color-emerald" v-model="checkState.emerald" type="emerald" label="翠绿色" />
            <CheckBox id="color-teal" v-model="checkState.teal" type="teal" label="蓝绿色" />
          </div>
        </div>

        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            蓝色系
          </h3>
          <div class="space-y-3">
            <CheckBox id="color-cyan" v-model="checkState.cyan" type="cyan" label="青色" />
            <CheckBox id="color-sky" v-model="checkState.sky" type="sky" label="天蓝色" />
            <CheckBox id="color-blue" v-model="checkState.blue" type="blue" label="蓝色" />
            <CheckBox id="color-indigo" v-model="checkState.indigo" type="indigo" label="靛青色" />
          </div>
        </div>

        <div>
          <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            紫粉色系
          </h3>
          <div class="space-y-3">
            <CheckBox id="color-violet" v-model="checkState.violet" type="violet" label="紫罗兰" />
            <CheckBox id="color-purple" v-model="checkState.purple" type="purple" label="紫色" />
            <CheckBox id="color-fuchsia" v-model="checkState.fuchsia" type="fuchsia" label="品红色" />
            <CheckBox id="color-pink" v-model="checkState.pink" type="pink" label="粉色" />
            <CheckBox id="color-rose" v-model="checkState.rose" type="rose" label="玫瑰色" />
          </div>
        </div>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        不同尺寸
      </h2>
      <div class="space-y-4">
        <CheckBox id="size-sm" v-model="checkState.size" size="sm" type="primary" label="小尺寸 (SM)" />
        <CheckBox id="size-md" v-model="checkState.size" size="md" type="primary" label="中等尺寸 (MD)" />
        <CheckBox id="size-lg" v-model="checkState.size" size="lg" type="primary" label="大尺寸 (LG)" />
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        禁用状态
      </h2>
      <div class="space-y-4">
        <CheckBox id="disabled-unchecked" v-model="checkState.disabledUnchecked" disabled label="禁用状态（未选中）" />
        <CheckBox id="disabled-checked" v-model="checkState.disabledChecked" disabled label="禁用状态（已选中）" />
      </div>
    </section>

    <!-- 不确定状态 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        不确定状态
      </h2>
      <div class="space-y-4">
        <div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          <CheckBox id="parent-checkbox" v-model="parentSelected" :indeterminate="indeterminate" type="primary"
            label="全选" />
          <div class="mt-2 ml-6 space-y-2">
            <CheckBox v-for="(item, index) in items" :key="index" :id="`child-checkbox-${index}`" v-model="item.checked"
              :label="item.label" @change="updateParentState" />
          </div>
        </div>
      </div>
    </section>

    <!-- 带描述的复选框 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        带描述的复选框
      </h2>
      <div class="space-y-4">
        <CheckBox id="with-description" v-model="checkState.withDescription" type="primary" label="接收通知"
          description="我们会在您的账户有重要更新时通过电子邮件通知您。" />
        <CheckBox id="with-description-2" v-model="checkState.withDescription2" type="success" label="订阅每周简报"
          description="每周获取行业资讯和产品更新，保持最新动态。" />
      </div>
    </section>

    <!-- 布局方向 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        布局方向
      </h2>
      <div class="space-y-6">
        <div>
          <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">
            水平布局（默认）
          </h3>
          <CheckBox id="horizontal-layout" v-model="checkState.horizontal" type="primary" label="水平布局" />
        </div>
        <div>
          <h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">
            垂直布局
          </h3>
          <CheckBox id="vertical-layout" v-model="checkState.vertical" type="primary" layout="vertical" label="垂直布局"
            description="标签在上，复选框在下" />
        </div>
      </div>
    </section>

    <!-- 内联复选框 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        内联复选框
      </h2>
      <div>
        <p class="mb-4 text-gray-700 dark:text-gray-300">
          使用 <code>inline</code> 属性可以让复选框在一行内显示：
        </p>
        <div class="flex flex-wrap gap-6">
          <CheckBox id="inline-1" v-model="checkState.inline1" inline type="primary" label="选项1" />
          <CheckBox id="inline-2" v-model="checkState.inline2" inline type="primary" label="选项2" />
          <CheckBox id="inline-3" v-model="checkState.inline3" inline type="primary" label="选项3" />
        </div>
      </div>
    </section>

    <!-- 暗色模式适配 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        暗色模式适配
      </h2>
      <div class="space-y-6">
        <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
            暗色模式下的复选框适配
          </h3>
          <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
            复选框组件自动适应亮/暗主题，在不同主题下提供一致的用户体验
          </p>
          <div class="space-y-4">
            <CheckBox id="dark-theme-1" v-model="checkState.darkTheme1" type="primary" label="主要主题复选框" />
            <CheckBox id="dark-theme-2" v-model="checkState.darkTheme2" type="success" label="成功主题复选框" />
            <CheckBox id="dark-theme-3" v-model="checkState.darkTheme3" type="danger" label="危险主题复选框" />
          </div>
        </div>

        <div class="rounded-lg bg-gray-900 p-6">
          <h3 class="mb-3 text-lg font-medium text-white">深色背景上的复选框</h3>
          <p class="mb-3 text-sm text-gray-300">复选框在深色背景上的表现</p>
          <div class="space-y-4">
            <CheckBox id="dark-bg-1" v-model="checkState.darkBg1" type="primary" label="主要主题复选框" />
            <CheckBox id="dark-bg-2" v-model="checkState.darkBg2" type="emerald" label="翠绿色复选框" />
            <CheckBox id="dark-bg-3" v-model="checkState.darkBg3" type="amber" label="琥珀色复选框" />
          </div>
        </div>
      </div>
    </section>

    <!-- 实际应用场景 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        实际应用场景
      </h2>

      <!-- 隐私设置场景 -->
      <div
        class="mb-6 max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          隐私设置
        </h3>
        <div class="space-y-6">
          <CheckBox id="privacy-1" v-model="privacySettings.receiveEmails" type="primary" label="接收营销邮件"
            description="我们将向您发送产品更新和特别优惠信息。" />
          <CheckBox id="privacy-2" v-model="privacySettings.shareData" type="primary" label="同意数据分享"
            description="允许我们与合作伙伴共享您的使用数据以改进服务质量。" />
          <CheckBox id="privacy-3" v-model="privacySettings.cookieTracking" type="primary" label="允许Cookie跟踪"
            description="我们使用Cookie来个性化您的体验并收集使用数据。" />
          <div class="flex justify-end">
            <button
              class="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
              保存设置
            </button>
          </div>
        </div>
      </div>

      <!-- To-Do列表场景 -->
      <div
        class="mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          待办事项列表
        </h3>
        <div class="space-y-3">
          <div v-for="(task, index) in tasks" :key="index" class="flex items-center gap-3">
            <CheckBox :id="`todo-${index}`" v-model="task.completed" :type="task.completed ? 'success' : 'primary'" />
            <span :class="{ 'line-through text-gray-400': task.completed }">
              {{ task.text }}
            </span>
          </div>
          <div class="flex items-center justify-between pt-2">
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {{tasks.filter(t => t.completed).length}}/{{ tasks.length }} 已完成
            </span>
            <button @click="resetTasks"
              class="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
              重置
            </button>
          </div>
        </div>
      </div>

      <!-- 多选表单场景 -->
      <div
        class="max-w-lg rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          兴趣爱好调查
        </h3>
        <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
          请选择您感兴趣的所有主题，以便我们为您推荐相关内容。
        </p>
        <div class="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <CheckBox v-for="(hobby, index) in hobbies" :key="index" :id="`hobby-${index}`" v-model="hobby.selected"
            type="indigo" :label="hobby.name" />
        </div>
        <div class="flex justify-end">
          <button
            class="rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700">
            提交选择
          </button>
        </div>
      </div>
    </section>

    <!-- API 文档部分 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">组件API</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">属性 (Props)</h3>
        <div class="mb-6 overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">属性名</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">类型</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">默认值</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">modelValue</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">复选框的值（必填）</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">id</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">复选框的唯一标识（必填）</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">name</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">复选框的 name 属性</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">label</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">复选框的标签文本（必填）</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">description</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">复选框的描述文本</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">disabled</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否禁用</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">type</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">CheckBoxType</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'primary'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">复选框的类型，支持颜色名或主题名</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">layout</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'horizontal' | 'vertical'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'horizontal'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">布局方式</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">size</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'sm' | 'md' | 'lg'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'md'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">复选框的尺寸</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">inline</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否内联显示</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">indeterminate</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否为不确定状态</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">wrapperClass</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">包装器额外的 class</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">labelClass</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">标签额外的 class</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">事件 (Events)</h3>
        <div class="mb-6 overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">事件名</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">回调参数</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">update:modelValue</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(value: boolean)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">复选框值变更时触发</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">change</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(event: Event)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">复选框状态变化时触发</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">focus</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(event: FocusEvent)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">复选框获得焦点时触发</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">blur</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(event: FocusEvent)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">复选框失去焦点时触发</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">click</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(event: MouseEvent)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">复选框被点击时触发</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="mt-6 mb-4 text-lg font-medium text-gray-900 dark:text-white">类型定义</h3>
        <div class="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-700/30">
          <p class="mb-2 text-sm text-gray-700 dark:text-gray-300">CheckBox 组件使用 TypeScript 定义了完整的类型：</p>
          <pre class="overflow-x-auto rounded bg-gray-100 p-3 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
import { CheckBoxProps, CheckBoxEmits, CheckBoxType } from '@/components/CheckBox';

// 使用类型
const myProps: CheckBoxProps = {
  id: 'my-checkbox',
  modelValue: false,
  label: '同意条款',
  type: 'primary',
  size: 'md'
};</pre>
        </div>

        <h3 class="mt-6 mb-4 text-lg font-medium text-gray-900 dark:text-white">组件设计原则</h3>
        <div class="space-y-3">
          <p class="text-sm text-gray-700 dark:text-gray-300">CheckBox 组件基于以下设计原则构建：</p>
          <ol class="ml-6 list-decimal space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><span class="font-medium">可组合性</span> - 组件接受多种属性配置，可以灵活组合</li>
            <li><span class="font-medium">一致性</span> - 颜色、尺寸等遵循整个组件库的统一规范</li>
            <li><span class="font-medium">可访问性</span> - 支持键盘操作和屏幕阅读器</li>
            <li><span class="font-medium">类型安全</span> - 使用 TypeScript 接口确保类型安全</li>
            <li><span class="font-medium">代码分层</span> - 将样式、逻辑和类型分开管理</li>
            <li><span class="font-medium">暗色适配</span> - 原生支持 Tailwind CSS 暗色模式</li>
          </ol>
        </div>
      </div>
    </section>

    <!-- 小结与最佳实践 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">小结与最佳实践</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300">
            CheckBox 组件是一个灵活且功能丰富的复选框解决方案，适用于各种表单控制、数据选择和状态切换场景。
            以下是一些使用建议：
          </p>

          <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>为每个复选框提供唯一的
              <code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800/60">id</code>
              属性，这对于 label 关联和可访问性至关重要
            </li>
            <li>根据语义选择适当的主题类型，如使用
              <CheckBox id="example-success" v-model="exampleStates.success" type="success" size="sm" label="成功类型" />
              表示成功或完成的操作
            </li>
            <li>当需要展示附加信息时，使用
              <code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800/60">description</code>
              属性添加描述文本
            </li>
            <li>对于相关选项分组，考虑使用
              <code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800/60">inline</code>
              属性进行水平排列
            </li>
            <li>使用
              <code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800/60">indeterminate</code>
              状态表示部分选中，适用于多层级选择场景
            </li>
            <li>通过
              <code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800/60">wrapperClass</code>
              和
              <code class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800/60">labelClass</code>
              自定义样式，适应不同设计需求
            </li>
          </ul>

          <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
              <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
              关于表单验证
            </h4>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              CheckBox 组件可以与表单验证系统集成。通过监听
              <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">update:modelValue</code>
              事件来触发验证，并使用
              <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">wrapperClass</code>
              和
              <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">labelClass</code>
              显示验证状态。
            </p>
          </div>

          <div class="rounded-lg border border-amber-100 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-900/20">
            <h4 class="mb-2 flex items-center text-amber-800 dark:text-amber-300">
              <span class="icon-[material-symbols--tips-and-updates-outline-rounded] mr-2 h-5 w-5"></span>
              可访问性提示
            </h4>
            <p class="text-sm text-amber-700 dark:text-amber-300">
              确保复选框的标签文本清晰描述选项的用途。对于隐含含义或重要选项，使用描述文本提供额外信息。
              这不仅有助于所有用户理解，还为使用屏幕阅读器的用户提供了必要的语境。
            </p>
          </div>

          <p class="text-gray-700 dark:text-gray-300">
            在设计系统中，复选框是用户输入和偏好设置的基础构建块。合理地使用 CheckBox 组件可以创建直观、一致且用户友好的界面，
            使用户能够轻松地进行多选操作和状态控制。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, watch, onMounted, onBeforeUnmount } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { CheckBox } from "../../components/CheckBox";

// 使用 vueuse/core 的暗色模式钩子
const isDark = useDark({
  selector: "html",
  attribute: "class",
  valueDark: "dark",
  valueLight: "",
});
const toggleDark = useToggle(isDark);

// 检查系统颜色偏好
const preferredDark = ref(false);
if (window.matchMedia) {
  preferredDark.value = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
}

// 复选框状态管理
const checkState = reactive({
  basic: true,
  primary: true,
  secondary: false,
  success: true,
  warning: false,
  danger: true,
  info: false,

  // 颜色系列
  slate: false,
  gray: true,
  zinc: false,
  neutral: true,
  stone: false,
  red: true,
  orange: false,
  amber: true,
  yellow: false,
  lime: true,
  green: false,
  emerald: true,
  teal: false,
  cyan: true,
  sky: false,
  blue: true,
  indigo: false,
  violet: true,
  purple: false,
  fuchsia: true,
  pink: false,
  rose: true,

  // 尺寸
  size: true,

  // 禁用状态
  disabledUnchecked: false,
  disabledChecked: true,

  // 描述
  withDescription: true,
  withDescription2: false,

  // 布局方向
  horizontal: true,
  vertical: true,

  // 内联
  inline1: true,
  inline2: false,
  inline3: true,

  // 暗色主题
  darkTheme1: true,
  darkTheme2: false,
  darkTheme3: true,

  // 深色背景
  darkBg1: true,
  darkBg2: false,
  darkBg3: true,
});

// 不确定状态示例
const items = reactive([
  { label: '选项1', checked: false },
  { label: '选项2', checked: false },
  { label: '选项3', checked: false },
]);
const parentSelected = ref(false);
const indeterminate = ref(false);

// 更新父复选框状态
const updateParentState = () => {
  const checkedCount = items.filter(item => item.checked).length;
  parentSelected.value = checkedCount === items.length;
  indeterminate.value = checkedCount > 0 && checkedCount < items.length;
};

// 监听父复选框变化
watch(parentSelected, (newVal) => {
  items.forEach(item => {
    item.checked = newVal;
  });
  indeterminate.value = false;
});

// 隐私设置示例
const privacySettings = reactive({
  receiveEmails: true,
  shareData: false,
  cookieTracking: true,
});

// To-Do 列表示例
const tasks = reactive([
  { text: '完成项目报告', completed: true },
  { text: '准备明天的会议', completed: false },
  { text: '更新网站内容', completed: false },
  { text: '回复重要邮件', completed: false },
  { text: '计划下周安排', completed: true },
]);

const resetTasks = () => {
  tasks.forEach(task => {
    task.completed = false;
  });
};

// 兴趣爱好示例
const hobbies = reactive([
  { name: '科技', selected: true },
  { name: '设计', selected: false },
  { name: '摄影', selected: true },
  { name: '旅行', selected: false },
  { name: '音乐', selected: true },
  { name: '影视', selected: false },
  { name: '阅读', selected: true },
  { name: '烹饪', selected: false },
]);

// 示例状态 - 用于文档示例
const exampleStates = reactive({
  success: true,
  primary: false
});

// 确保暗色模式正确应用
onMounted(() => {
  // 初始应用暗色模式
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark-mode");
  }

  // 自动检测并添加使用暗色模式的标记类
  document.documentElement.classList.add("using-dark-mode");
});

// 监听暗色模式变化
watch(isDark, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark-mode");
  }

  // 强制触发重新渲染
  setTimeout(() => {
    document.body.style.transition = "background-color 0.3s ease";
    if (newVal) {
      document.body.style.backgroundColor = "#1f2937";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, 0);
});

// 清理函数
onBeforeUnmount(() => {
  document.documentElement.classList.remove("using-dark-mode");
});
</script>

<style>
/* 确保暗模式生效的基本样式 */
:root {
  color-scheme: light;
}

:root.dark,
html.dark {
  color-scheme: dark;
  background-color: #1f2937;
  /* gray-800 */
}

body.dark-mode {
  background-color: #1f2937;
  /* gray-800 */
}

/* 确保所有标题和文本在暗色模式下显示为白色 */
.dark h1,
.dark h2,
.dark h3,
.dark h4,
.dark h5,
.dark h6,
.dark .text-gray-900 {
  color: white !important;
}

/* 暗色模式下其他文本颜色适配 */
.dark .text-gray-700 {
  color: #d1d5db !important;
  /* gray-300 */
}

.dark .text-gray-600 {
  color: #9ca3af !important;
  /* gray-400 */
}

/* 强制背景色适配暗色模式 */
.dark .bg-white {
  background-color: #1f2937 !important;
  /* gray-800 */
}

/* 强制边框颜色适配暗色模式 */
.dark .border-gray-200 {
  border-color: #374151 !important;
  /* gray-700 */
}

/* 系统暗色模式自动适配 */
@media (prefers-color-scheme: dark) {
  :root.using-dark-mode:not(.light) {
    background-color: #1f2937;
  }

  :root:not(.using-dark-mode) {
    color-scheme: dark;
  }
}

/* 代码样式 */
code {
  padding: 0.1rem 0.3rem;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  font-family: monospace;
  font-size: 0.875em;
}

.dark code {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>