<template>
  <div class="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
    <h1 class="mb-8 text-3xl font-bold">Button 按钮组件</h1>

    <!-- 基础用法 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        基础用法
      </h2>
      <div class="flex flex-wrap gap-4">
        <Button>默认按钮</Button>
        <Button type="red">红色按钮</Button>
        <Button type="green">绿色按钮</Button>
        <Button type="yellow">黄色按钮</Button>
      </div>
    </section>

    <!-- 语义化类型 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        语义化类型
      </h2>
      <div class="flex flex-wrap gap-4">
        <Button type="primary">主要按钮</Button>
        <Button type="secondary">次要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
        <Button type="info">信息按钮</Button>
      </div>
    </section>

    <!-- 按钮变体 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        按钮变体
      </h2>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        实心按钮 (solid)
      </h3>
      <div class="mb-4 flex flex-wrap gap-4">
        <Button variant="solid" type="primary">主要</Button>
        <Button variant="solid" type="secondary">次要</Button>
        <Button variant="solid" type="success">成功</Button>
        <Button variant="solid" type="warning">警告</Button>
        <Button variant="solid" type="danger">危险</Button>
        <Button variant="solid" type="info">信息</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        柔和按钮 (soft)
      </h3>
      <div class="mb-4 flex flex-wrap gap-4">
        <Button variant="soft" type="primary">主要</Button>
        <Button variant="soft" type="secondary">次要</Button>
        <Button variant="soft" type="success">成功</Button>
        <Button variant="soft" type="warning">警告</Button>
        <Button variant="soft" type="danger">危险</Button>
        <Button variant="soft" type="info">信息</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        描边按钮 (outline)
      </h3>
      <div class="mb-4 flex flex-wrap gap-4">
        <Button variant="outline" type="primary">主要</Button>
        <Button variant="outline" type="secondary">次要</Button>
        <Button variant="outline" type="success">成功</Button>
        <Button variant="outline" type="warning">警告</Button>
        <Button variant="outline" type="danger">危险</Button>
        <Button variant="outline" type="info">信息</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        幽灵按钮 (ghost)
      </h3>
      <div class="flex flex-wrap gap-4">
        <Button variant="ghost" type="primary">主要</Button>
        <Button variant="ghost" type="secondary">次要</Button>
        <Button variant="ghost" type="success">成功</Button>
        <Button variant="ghost" type="warning">警告</Button>
        <Button variant="ghost" type="danger">危险</Button>
        <Button variant="ghost" type="info">信息</Button>
      </div>
    </section>

    <!-- 按钮尺寸 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        按钮尺寸
      </h2>
      <div class="flex flex-wrap items-center gap-4">
        <Button size="xs" type="primary">超小</Button>
        <Button size="sm" type="primary">小型</Button>
        <Button size="md" type="primary">中等</Button>
        <Button size="lg" type="primary">大型</Button>
        <Button size="xl" type="primary">超大</Button>
      </div>
    </section>

    <!-- 带图标的按钮 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        带图标的按钮
      </h2>
      <div class="mb-4 flex flex-wrap items-center gap-4">
        <Button type="primary" icon="icon-[carbon--add]">添加</Button>
        <Button type="success" icon="icon-[carbon--checkmark]">确认</Button>
        <Button type="danger" icon="icon-[carbon--trash-can]">删除</Button>
        <Button type="warning" icon="icon-[carbon--warning]">警告</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        仅图标按钮
      </h3>
      <div class="flex flex-wrap items-center gap-4">
        <Button type="primary" icon="icon-[carbon--add]" />
        <Button type="success" icon="icon-[carbon--checkmark]" />
        <Button type="danger" icon="icon-[carbon--trash-can]" />
        <Button type="warning" icon="icon-[carbon--warning]" />
      </div>
    </section>

    <!-- 状态按钮 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        状态按钮
      </h2>
      <div class="flex flex-wrap items-center gap-4">
        <Button type="primary">正常</Button>
        <Button type="primary" disabled>禁用</Button>
        <Button type="primary" loading>加载中</Button>
      </div>
    </section>

    <!-- 块级按钮 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        块级按钮
      </h2>
      <div class="max-w-md space-y-4">
        <Button type="primary" block>块级按钮</Button>
        <Button type="success" block>块级按钮</Button>
        <Button type="warning" block>块级按钮</Button>
      </div>
    </section>

    <!-- 暗色模式与主题切换 (替换暗色主题展示部分) -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">暗色主题与主题切换</h2>

      <div class="mb-6 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">主题相关信息</h3>

        <div class="mb-4">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div class="flex flex-col gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-700/30">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">当前主题</span>
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full" :class="isDark ? 'bg-indigo-500' : 'bg-yellow-500'"></div>
                <Button size="sm" :type="isDark ? 'primary' : 'warning'" variant="soft">{{ isDark ? '暗色' : '亮色'
                }}</Button>
              </div>
            </div>

            <div class="flex flex-col gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-700/30">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">系统偏好</span>
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full" :class="preferredDark ? 'bg-indigo-500' : 'bg-yellow-500'"></div>
                <Button size="sm" type="gray" variant="soft">{{ preferredDark ? '暗色' : '亮色' }}</Button>
              </div>
            </div>

            <div class="flex flex-col gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-700/30">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">主题设置</span>
              <div class="flex items-center gap-2">
                <Button size="sm" type="purple" variant="soft">{{ currentThemeModeName }}</Button>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-4 flex flex-wrap gap-2">
          <button
            class="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            @click="toggleDark()">
            <span class="icon-[material-symbols--wb-sunny-outline-rounded] size-5" v-if="isDark"></span>
            <span class="icon-[material-symbols--dark-mode-outline-rounded] size-5" v-else></span>
            <span>切换主题</span>
          </button>

          <button
            class="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            @click="setLightTheme" :class="{ 'ring-2 ring-blue-300 dark:ring-indigo-400': themeMode === 'light' }">
            <span class="icon-[material-symbols--light-mode-outline-rounded] size-5"></span>
            <span>亮色模式</span>
          </button>

          <button
            class="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 font-medium text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
            @click="setDarkTheme" :class="{ 'ring-2 ring-gray-500 dark:ring-gray-400': themeMode === 'dark' }">
            <span class="icon-[material-symbols--dark-mode-outline-rounded] size-5"></span>
            <span>暗色模式</span>
          </button>

          <!-- 修改系统偏好按钮样式 -->
          <button
            class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 font-medium text-gray-800 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            @click="useSystemTheme" :class="{ 'ring-2 ring-gray-400 dark:ring-gray-500': themeMode === 'system' }">
            <span class="icon-[material-symbols--computer-outline-rounded] size-5"></span>
            <span>系统偏好</span>
          </button>
        </div>

        <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/30">
          <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">主题脚本</h4>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-300">
            为避免页面加载时出现闪烁，可以在HTML的&lt;head&gt;中添加如下内联脚本：
          </p>
          <pre
            class="overflow-x-auto rounded bg-gray-100 p-3 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">{{
              themeScript }}</pre>
        </div>
      </div>

      <!-- 亮暗模式对比 -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <!-- 亮色模式示例 -->
        <div class="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <h3 class="mb-3 text-lg font-medium text-gray-900">亮色模式示例</h3>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <Button variant="solid" type="primary">主要</Button>
              <Button variant="solid" type="success">成功</Button>
              <Button variant="solid" type="warning">警告</Button>
              <Button variant="solid" type="danger">危险</Button>
            </div>
            <div class="rounded-lg bg-gray-100 p-4">
              <div class="flex flex-wrap gap-2">
                <Button variant="soft" type="primary">柔和主要</Button>
                <Button variant="outline" type="success">描边成功</Button>
                <Button variant="ghost" type="warning">幽灵警告</Button>
                <Button variant="solid" type="danger" size="sm">小型危险</Button>
              </div>
            </div>
          </div>
        </div>

        <!-- 暗色模式示例 -->
        <div class="rounded-lg border border-gray-700 bg-gray-800 p-5 shadow-sm">
          <h3 class="mb-3 text-lg font-medium text-white">暗色模式示例</h3>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <Button variant="solid" type="primary">主要</Button>
              <Button variant="solid" type="success">成功</Button>
              <Button variant="solid" type="warning">警告</Button>
              <Button variant="solid" type="danger">危险</Button>
            </div>
            <div class="rounded-lg bg-gray-900 p-4">
              <div class="flex flex-wrap gap-2">
                <Button variant="soft" type="primary">柔和主要</Button>
                <Button variant="outline" type="success">描边成功</Button>
                <Button variant="ghost" type="warning">幽灵警告</Button>
                <Button variant="solid" type="danger" size="sm">小型危险</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ColorType 所有颜色展示 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        所有颜色按钮
      </h2>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        灰色系
      </h3>
      <div class="mb-6 flex flex-wrap gap-3">
        <Button type="slate">石板灰</Button>
        <Button type="gray">灰色</Button>
        <Button type="zinc">锌灰</Button>
        <Button type="neutral">中性灰</Button>
        <Button type="stone">石灰</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        暖色系
      </h3>
      <div class="mb-6 flex flex-wrap gap-3">
        <Button type="red">红色</Button>
        <Button type="orange">橙色</Button>
        <Button type="amber">琥珀色</Button>
        <Button type="yellow">黄色</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        绿色系
      </h3>
      <div class="mb-6 flex flex-wrap gap-3">
        <Button type="lime">青柠色</Button>
        <Button type="green">绿色</Button>
        <Button type="emerald">翠绿色</Button>
        <Button type="teal">蓝绿色</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        蓝色系
      </h3>
      <div class="mb-6 flex flex-wrap gap-3">
        <Button type="cyan">青色</Button>
        <Button type="sky">天蓝色</Button>
        <Button type="blue">蓝色</Button>
        <Button type="indigo">靛青色</Button>
      </div>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        紫粉色系
      </h3>
      <div class="mb-6 flex flex-wrap gap-3">
        <Button type="violet">紫罗兰</Button>
        <Button type="purple">紫色</Button>
        <Button type="fuchsia">品红色</Button>
        <Button type="pink">粉色</Button>
        <Button type="rose">玫瑰色</Button>
      </div>

      <div class="mt-8 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          不同变体的颜色展示
        </h3>

        <div class="space-y-6">
          <div v-for="(variant, idx) in [
            'solid',
            'soft',
            'outline',
            'ghost',
          ] as const" :key="idx">
            <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">
              {{ variantNames[variant] }}
            </h4>
            <div class="flex flex-wrap gap-3">
              <Button :variant="variant" type="blue">蓝色</Button>
              <Button :variant="variant" type="emerald">翠绿色</Button>
              <Button :variant="variant" type="amber">琥珀色</Button>
              <Button :variant="variant" type="rose">玫瑰色</Button>
              <Button :variant="variant" type="purple">紫色</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实际应用场景 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        实际应用场景
      </h2>

      <!-- 表单场景 -->
      <div
        class="mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">
          表单提交
        </h3>
        <div class="space-y-4">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">用户名</label>
            <input type="text"
              class="w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">密码</label>
            <input type="password"
              class="w-full rounded-md border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          </div>
          <div class="flex items-center justify-end space-x-3">
            <Button variant="ghost" type="secondary">取消</Button>
            <Button variant="solid" type="primary">登录</Button>
          </div>
        </div>
      </div>

      <!-- 对话框场景 -->
      <div
        class="mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
          确认操作
        </h3>
        <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
          确定要删除此项目吗？此操作无法撤销。
        </p>
        <div class="flex items-center justify-end space-x-3">
          <Button variant="ghost" type="secondary">取消</Button>
          <Button variant="solid" type="danger" icon="icon-[carbon--trash-can]">删除</Button>
        </div>
      </div>

      <!-- 工具栏场景 -->
      <div class="max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
          编辑器工具栏
        </h3>
        <div class="flex flex-wrap gap-2">
          <Button variant="ghost" icon="icon-[material-symbols--format-bold-rounded]" />
          <Button variant="ghost" icon="icon-[material-symbols--format-italic-rounded]" />
          <Button variant="ghost" icon="icon-[material-symbols--format-underlined-rounded]" />
          <Button variant="ghost" icon="icon-[material-symbols--strikethrough-s-rounded]" />
          <div class="mx-2 h-8 border-l border-gray-300 dark:border-gray-600"></div>
          <Button variant="ghost" icon="icon-[material-symbols--align-horizontal-left-rounded]" />
          <Button variant="ghost" icon="icon-[material-symbols--align-horizontal-center-rounded]" />
          <Button variant="ghost" icon="icon-[material-symbols--align-horizontal-right-rounded]" />
          <div class="mx-2 h-8 border-l border-gray-300 dark:border-gray-600"></div>
          <Button variant="soft" color="indigo" icon="icon-[carbon--save]">保存</Button>
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
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">type</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ColorType | ButtonTypeValue</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'blue'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮颜色或语义化类型</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">variant</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'solid' | 'outline' | 'soft' | 'ghost'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'solid'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮变体样式</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">size</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'xs' | 'sm' | 'md' | 'lg' | 'xl'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'md'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮尺寸</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">icon</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">undefined</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">图标类名，格式为 'icon-[xxx]'</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">iconColor</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">undefined</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">图标颜色</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">loading</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示加载状态</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">disabled</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否禁用</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">isActiveAnim</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否启用点击动画</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">block</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否为块级按钮</td>
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
            <tbody>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">click</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(event: MouseEvent)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">点击按钮时触发</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">插槽 (Slots)</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">插槽名</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">default</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮内容</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    <!-- 总结 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">小结与最佳实践</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300">
            Button 组件是界面中最常用的交互元素之一，适用于各种需要用户触发操作的场景。以下是一些使用建议：
          </p>

          <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>根据按钮重要性选择合适的变体，如使用
              <Button variant="solid" type="primary" size="sm">solid</Button> 变体强调主要操作
            </li>
            <li>对次要操作使用较低优先级的变体，如
              <Button variant="ghost" type="secondary" size="sm">ghost</Button> 或
              <Button variant="outline" type="secondary" size="sm">outline</Button>
            </li>
            <li>合理使用语义化类型，如
              <Button type="success" size="sm">success</Button> 表示成功操作，
              <Button type="danger" size="sm">danger</Button> 表示危险操作
            </li>
            <li>在图标和文本结合使用时，确保图标能增强按钮的可理解性</li>
            <li>避免页面上有太多亮色实心按钮，以免分散用户注意力</li>
          </ul>

          <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
              <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
              暗色模式提示
            </h4>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              Button 组件已内置支持暗色模式，无需额外配置。只要在应用的根元素上添加 <code
                class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">.dark</code> 类，
              组件就会自动切换为暗色样式。您可以使用我们提供的主题管理工具来轻松地实现这一点。
            </p>
          </div>

          <p class="text-gray-700 dark:text-gray-300">
            在设计系统中，保持按钮样式的一致性对于建立清晰、直观的用户界面至关重要。
            合理使用按钮变体和类型可以建立视觉层次结构，引导用户关注最重要的操作。
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Button } from "./Button";
// 引入主题相关工具
import {
  isDark,
  toggleDark,
  preferredDark,
  themeMode,
  useSystemTheme,
  setLightTheme,
  setDarkTheme,
  themeScript
} from "../../utils/theme";

// 变体名称映射
const variantNames = {
  solid: "实心按钮 (solid)",
  soft: "柔和按钮 (soft)",
  outline: "描边按钮 (outline)",
  ghost: "幽灵按钮 (ghost)",
};

// 当前主题模式名称
const currentThemeModeName = computed(() => {
  switch (themeMode.value) {
    case 'light': return '亮色';
    case 'dark': return '暗色';
    case 'system': return '跟随系统';
    default: return '未知';
  }
});


</script>
