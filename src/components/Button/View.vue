<template>
  <div class="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
    <h1 class="mb-8 text-3xl font-bold">Button 按钮组件</h1>

    <!-- 基础用法 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        基础用法
      </h2>
      <CodePreview :code="basicUsageCode">
        <div class="flex flex-wrap gap-4">
          <Button>默认按钮</Button>
          <Button type="red">红色按钮</Button>
          <Button type="green">绿色按钮</Button>
          <Button type="yellow">黄色按钮</Button>
        </div>
      </CodePreview>
    </section>

    <!-- 语义化类型 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        语义化类型
      </h2>
      <CodePreview :code="semanticTypesCode">
        <div class="flex flex-wrap gap-4">
          <Button type="primary">主要按钮</Button>
          <Button type="secondary">次要按钮</Button>
          <Button type="success">成功按钮</Button>
          <Button type="warning">警告按钮</Button>
          <Button type="danger">危险按钮</Button>
          <Button type="info">信息按钮</Button>
        </div>
      </CodePreview>
    </section>

    <!-- 按钮变体 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        按钮变体
      </h2>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">
        实心按钮 (solid)
      </h3>
      <CodePreview :code="buttonVariantsCode.solid">
        <div class="mb-4 flex flex-wrap gap-4">
          <Button variant="solid" type="primary">主要</Button>
          <Button variant="solid" type="secondary">次要</Button>
          <Button variant="solid" type="success">成功</Button>
          <Button variant="solid" type="warning">警告</Button>
          <Button variant="solid" type="danger">危险</Button>
          <Button variant="solid" type="info">信息</Button>
        </div>
      </CodePreview>

      <h3 class="mb-3 mt-6 text-lg font-medium text-gray-900 dark:text-white">
        柔和按钮 (soft)
      </h3>
      <CodePreview :code="buttonVariantsCode.soft">
        <div class="mb-4 flex flex-wrap gap-4">
          <Button variant="soft" type="primary">主要</Button>
          <Button variant="soft" type="secondary">次要</Button>
          <Button variant="soft" type="success">成功</Button>
          <Button variant="soft" type="warning">警告</Button>
          <Button variant="soft" type="danger">危险</Button>
          <Button variant="soft" type="info">信息</Button>
        </div>
      </CodePreview>

      <h3 class="mb-3 mt-6 text-lg font-medium text-gray-900 dark:text-white">
        描边按钮 (outline)
      </h3>
      <CodePreview :code="buttonVariantsCode.outline">
        <div class="mb-4 flex flex-wrap gap-4">
          <Button variant="outline" type="primary">主要</Button>
          <Button variant="outline" type="secondary">次要</Button>
          <Button variant="outline" type="success">成功</Button>
          <Button variant="outline" type="warning">警告</Button>
          <Button variant="outline" type="danger">危险</Button>
          <Button variant="outline" type="info">信息</Button>
        </div>
      </CodePreview>

      <h3 class="mb-3 mt-6 text-lg font-medium text-gray-900 dark:text-white">
        幽灵按钮 (ghost)
      </h3>
      <CodePreview :code="buttonVariantsCode.ghost">
        <div class="flex flex-wrap gap-4">
          <Button variant="ghost" type="primary">主要</Button>
          <Button variant="ghost" type="secondary">次要</Button>
          <Button variant="ghost" type="success">成功</Button>
          <Button variant="ghost" type="warning">警告</Button>
          <Button variant="ghost" type="danger">危险</Button>
          <Button variant="ghost" type="info">信息</Button>
        </div>
      </CodePreview>
    </section>

    <!-- 按钮尺寸 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        按钮尺寸
      </h2>
      <CodePreview :code="buttonSizesCode">
        <div class="flex flex-wrap items-center gap-4">
          <Button size="xs" type="primary">超小</Button>
          <Button size="sm" type="primary">小型</Button>
          <Button size="md" type="primary">中等</Button>
          <Button size="lg" type="primary">大型</Button>
          <Button size="xl" type="primary">超大</Button>
        </div>
      </CodePreview>
    </section>

    <!-- 带图标的按钮 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        带图标的按钮
      </h2>
      <CodePreview :code="buttonWithIconCode">
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
      </CodePreview>
    </section>

    <!-- 状态按钮 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        状态按钮
      </h2>
      <CodePreview :code="buttonStatesCode">
        <div class="flex flex-wrap items-center gap-4">
          <Button type="primary">正常</Button>
          <Button type="primary" disabled>禁用</Button>
          <Button type="primary" loading>加载中</Button>
        </div>
      </CodePreview>
    </section>

    <!-- 块级按钮 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        块级按钮
      </h2>
      <CodePreview :code="blockButtonCode">
        <div class="max-w-md space-y-4">
          <Button type="primary" block>块级按钮</Button>
          <Button type="success" block>块级按钮</Button>
          <Button type="warning" block>块级按钮</Button>
        </div>
      </CodePreview>
    </section>


    <!-- ColorType 所有颜色展示 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
        所有颜色按钮
      </h2>
      <CodePreview :code="colorTypeShowcaseCode">
        <div class="space-y-4">
          <!-- 灰色系 -->
          <h3 class="text-md font-medium text-gray-900 dark:text-white">灰色系</h3>
          <div class="flex flex-wrap gap-2">
            <Button type="slate">Slate</Button>
            <Button type="gray">Gray</Button>
            <Button type="zinc">Zinc</Button>
            <Button type="neutral">Neutral</Button>
            <Button type="stone">Stone</Button>
          </div>
          
          <!-- 暖色系 -->
          <h3 class="text-md font-medium text-gray-900 dark:text-white">暖色系</h3>
          <div class="flex flex-wrap gap-2">
            <Button type="red">Red</Button>
            <Button type="orange">Orange</Button>
            <Button type="amber">Amber</Button>
            <Button type="yellow">Yellow</Button>
          </div>
          
          <!-- 绿色系 -->
          <h3 class="text-md font-medium text-gray-900 dark:text-white">绿色系</h3>
          <div class="flex flex-wrap gap-2">
            <Button type="lime">Lime</Button>
            <Button type="green">Green</Button>
            <Button type="emerald">Emerald</Button>
            <Button type="teal">Teal</Button>
          </div>
          
          <!-- 蓝色系 -->
          <h3 class="text-md font-medium text-gray-900 dark:text-white">蓝色系</h3>
          <div class="flex flex-wrap gap-2">
            <Button type="cyan">Cyan</Button>
            <Button type="sky">Sky</Button>
            <Button type="blue">Blue</Button>
            <Button type="indigo">Indigo</Button>
          </div>
          
          <!-- 紫粉色系 -->
          <h3 class="text-md font-medium text-gray-900 dark:text-white">紫粉色系</h3>
          <div class="flex flex-wrap gap-2">
            <Button type="violet">Violet</Button>
            <Button type="purple">Purple</Button>
            <Button type="fuchsia">Fuchsia</Button>
            <Button type="pink">Pink</Button>
            <Button type="rose">Rose</Button>
          </div>
        </div>
      </CodePreview>
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

import { Button } from "./Button";
import CodePreview from "../../components/CodePreview";
import { 
  basicUsageCode, 
  semanticTypesCode, 
  buttonVariantsCode, 
  buttonSizesCode, 
  buttonWithIconCode, 
  buttonStatesCode, 
  blockButtonCode, 
  colorTypeShowcaseCode 
} from './code';

// 变体名称映射
const variantNames = {
  solid: "实心按钮 (solid)",
  soft: "柔和按钮 (soft)",
  outline: "描边按钮 (outline)",
  ghost: "幽灵按钮 (ghost)",
};

</script>
