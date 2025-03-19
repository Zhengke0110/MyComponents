<template>
  <div class="space-y-10 p-6">
    <!-- 基础用法 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">基础用法</h2>
      <p class="mb-4 text-gray-600 dark:text-gray-400">
        最简单的用法是传入一个字符串数组作为标签名，并通过插槽提供相应的内容。每个标签的内容通过名称对应的具名插槽提供。
      </p>
      <div class="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
        <Tabs v-model="basicTab" :tabs="basicTabs">
          <template #first>这是第一个标签的内容区域</template>
          <template #second>这是第二个标签的内容区域</template>
          <template #third>这是第三个标签的内容区域</template>
        </Tabs>
      </div>
    </section>

    <!-- 自定义标签内容 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">自定义标签内容</h2>
      <p class="mb-4 text-gray-600 dark:text-gray-400">
        可以通过
        <code>tab</code>
        插槽自定义标签的显示方式，如添加图标或其他元素。此插槽提供当前标签对象作为作用域参数。
      </p>
      <div class="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
        <Tabs v-model="customTab" :tabs="customTabs">
          <template #tab="slotProps">
            <div class="flex items-center gap-2">
              <i :class="slotProps.tab.icon" class="h-4 w-4"></i>
              {{ slotProps.tab.label }}
            </div>
          </template>
          <template #dashboard>
            <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              仪表盘内容
            </div>
          </template>
          <template #profile>
            <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              个人资料内容
            </div>
          </template>
          <template #settings>
            <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              设置内容
            </div>
          </template>
        </Tabs>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">禁用状态</h2>
      <p class="mb-4 text-gray-600 dark:text-gray-400">
        可以通过在 <code>TabItem</code> 对象中设置
        <code>disabled: true</code>
        来禁用特定的标签。被禁用的标签将不可点击且显示为灰色。
      </p>
      <div class="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
        <Tabs v-model="disabledTab" :tabs="disabledTabs">
          <template #tab1>可用标签内容1</template>
          <template #tab2>可用标签内容2</template>
          <template #tab3>禁用标签内容将不可见</template>
        </Tabs>
      </div>
    </section>

    <!-- 默认标签 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">默认标签</h2>
      <p class="mb-4 text-gray-600 dark:text-gray-400">
        可以通过 <code>default-tab</code> 属性指定默认选中的标签。当不使用
        <code>v-model</code> 时，这个属性非常有用。
      </p>
      <div class="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
        <Tabs :tabs="defaultTabs" default-tab="tab2">
          <template #tab1>标签1内容</template>
          <template #tab2>默认显示的标签2内容</template>
          <template #tab3>标签3内容</template>
        </Tabs>
      </div>
    </section>

    <!-- 主题样式 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">主题样式</h2>
      <p class="mb-4 text-gray-600 dark:text-gray-400">
        通过 <code>theme</code> 属性可以使用预设主题，包括
        Primary、Success、Danger、Warning、Info 和 Secondary。
        这些预设主题遵循常见的色彩语义，让用户更容易理解界面元素的用途。
      </p>
      <div class="mb-4 space-y-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
        <!-- 主题: Primary -->
        <div>
          <h3 class="mb-2 text-base font-medium">Primary</h3>
          <Tabs v-model="themeTab1" :tabs="themeTabs" :theme="TabTheme.Primary">
            <template #tab1>蓝色主题内容</template>
            <template #tab2>蓝色主题内容</template>
          </Tabs>
        </div>

        <!-- 主题: Success -->
        <div>
          <h3 class="mb-2 text-base font-medium">Success</h3>
          <Tabs v-model="themeTab2" :tabs="themeTabs" :theme="TabTheme.Success">
            <template #tab1>绿色主题内容</template>
            <template #tab2>绿色主题内容</template>
          </Tabs>
        </div>

        <!-- 主题: Danger -->
        <div>
          <h3 class="mb-2 text-base font-medium">Danger</h3>
          <Tabs v-model="themeTab3" :tabs="themeTabs" :theme="TabTheme.Danger">
            <template #tab1>红色主题内容</template>
            <template #tab2>红色主题内容</template>
          </Tabs>
        </div>

        <!-- 主题: Warning -->
        <div>
          <h3 class="mb-2 text-base font-medium">Warning</h3>
          <Tabs v-model="themeTab4" :tabs="themeTabs" :theme="TabTheme.Warning">
            <template #tab1>黄色主题内容</template>
            <template #tab2>黄色主题内容</template>
          </Tabs>
        </div>

        <!-- 主题: Info -->
        <div>
          <h3 class="mb-2 text-base font-medium">Info (默认)</h3>
          <Tabs v-model="themeTab5" :tabs="themeTabs" :theme="TabTheme.Info">
            <template #tab1>靛蓝主题内容</template>
            <template #tab2>靛蓝主题内容</template>
          </Tabs>
        </div>

        <!-- 主题: Secondary -->
        <div>
          <h3 class="mb-2 text-base font-medium">Secondary</h3>
          <Tabs v-model="themeTab6" :tabs="themeTabs" :theme="TabTheme.Secondary">
            <template #tab1>灰色主题内容</template>
            <template #tab2>灰色主题内容</template>
          </Tabs>
        </div>
      </div>
    </section>

    <!-- 暗色模式展示 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">暗色模式展示</h2>
      <p class="mb-4 text-gray-600 dark:text-gray-400">
        Tabs 组件完全支持暗色模式，只需在父元素上添加 <code>dark</code> 类或按照
        Tailwind CSS 的暗色模式配置启用即可。
        组件会自动调整颜色以适应暗色环境，无需额外代码。
      </p>
      <div class="dark rounded-lg bg-gray-900 p-6">
        <h3 class="mb-4 text-base font-medium text-white">暗色模式自动适配</h3>

        <!-- 暗色模式下的蓝色主题 -->
        <Tabs v-model="darkModeTab1" :tabs="darkModeTabs" :theme="TabTheme.Primary">
          <template #tab1>
            <div class="rounded-lg bg-gray-800 p-4 text-gray-100">
              暗色模式下的蓝色主题内容
            </div>
          </template>
          <template #tab2>
            <div class="rounded-lg bg-gray-800 p-4 text-gray-100">
              暗色模式下的蓝色主题内容
            </div>
          </template>
        </Tabs>

        <!-- 暗色模式下自定义颜色 -->
        <div class="mt-6">
          <h4 class="mb-2 text-sm font-medium text-gray-300">自定义紫色</h4>
          <Tabs v-model="darkModeTab2" :tabs="darkModeTabs" active-color="purple">
            <template #tab1>
              <div class="rounded-lg bg-gray-800 p-4 text-gray-100">
                暗色模式下的紫色主题内容
              </div>
            </template>
            <template #tab2>
              <div class="rounded-lg bg-gray-800 p-4 text-gray-100">
                暗色模式下的紫色主题内容
              </div>
            </template>
          </Tabs>
        </div>
      </div>
    </section>

    <!-- 响应式设计 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">响应式设计</h2>
      <p class="mb-4 text-gray-600 dark:text-gray-400">
        Tabs
        组件在小屏幕设备上（移动端）会自动转换为下拉菜单形式。请尝试调整浏览器窗口大小查看效果。
        这种自适应设计确保了在任何设备上都能提供良好的用户体验，无需编写额外代码。
      </p>
      <div class="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
        <Tabs v-model="responsiveTab" :tabs="responsiveTabs">
          <template #item1>
            <div class="rounded-lg bg-white p-3 dark:bg-gray-700">
              <p>在小屏幕上会自动变成下拉菜单</p>
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                尝试调整浏览器窗口大小查看效果
              </p>
            </div>
          </template>
          <template #item2>内容区域2</template>
          <template #item3>内容区域3</template>
          <template #item4>内容区域4</template>
          <template #item5>内容区域5</template>
        </Tabs>
      </div>
    </section>

    <!-- API 文档 -->
    <section>
      <h2 class="mb-4 text-xl font-bold">API 文档</h2>
      
      <div class="space-y-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
        <!-- Props 属性 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">Props 属性</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full border-collapse">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">属性名</th>
                  <th class="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">类型</th>
                  <th class="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">默认值</th>
                  <th class="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">modelValue</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400"><code>string</code></td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">undefined</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">当前选中的标签，支持v-model绑定</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">tabs</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400"><code>(TabItem | string)[]</code></td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">[]</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">标签项数组，可以是字符串数组或TabItem对象数组</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">showContent</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400"><code>boolean</code></td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">true</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">是否显示标签内容区域</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">defaultTab</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400"><code>string</code></td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">''</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">默认选中的标签名（当没有modelValue时生效）</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">activeColor</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400"><code>ColorType</code></td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">undefined</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">激活状态的主题颜色，支持 tailwindcss 的颜色名称</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">hoverColor</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400"><code>ColorType</code></td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">activeColor值</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">悬停状态的主题颜色</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">theme</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400"><code>TabTheme</code></td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">'info'</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">主题样式，支持预设的多种主题</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- TabItem 接口 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">TabItem 接口</h3>
          <div class="overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
            <pre class="text-sm text-gray-800 dark:text-gray-200"><code>interface TabItem {
  name: string;      // 选项卡名称（必需）
  href?: string;     // 选项卡链接，默认为 #name
  disabled?: boolean; // 是否禁用，默认为false
  content?: string;  // 选项卡内容
  [key: string]: any; // 其他自定义属性
}</code></pre>
          </div>
        </div>
        
        <!-- TabTheme 枚举 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">TabTheme 枚举</h3>
          <div class="overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
            <pre class="text-sm text-gray-800 dark:text-gray-200"><code>enum TabTheme {
  Primary = "primary",   // 蓝色
  Secondary = "secondary", // 灰色
  Success = "success",   // 绿色
  Danger = "danger",     // 红色
  Warning = "warning",   // 黄色
  Info = "info",         // 靛蓝色（默认）
}</code></pre>
          </div>
        </div>
        
        <!-- ColorType 类型 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">ColorType 类型</h3>
          <p class="mb-2 text-gray-700 dark:text-gray-300">
            Tabs 组件支持所有 Tailwind CSS 的颜色：
          </p>
          <div class="overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
            <pre class="text-sm text-gray-800 dark:text-gray-200"><code>type ColorType = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'  // 灰色系
  | 'red' | 'orange' | 'amber' | 'yellow'            // 暖色系
  | 'lime' | 'green' | 'emerald' | 'teal'            // 绿色系
  | 'cyan' | 'sky' | 'blue' | 'indigo'               // 蓝色系
  | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'; // 紫粉色系</code></pre>
          </div>
        </div>
        
        <!-- 事件 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">事件</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full border-collapse">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">事件名</th>
                  <th class="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">参数</th>
                  <th class="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">update:modelValue</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">(value: string)</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">选项卡变更时触发，用于v-model</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">change</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">(tab: TabItem)</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">选项卡变更时触发</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">click</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">(tab: TabItem)</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">点击选项卡时触发</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- 插槽 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">插槽</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full border-collapse">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">插槽名</th>
                  <th class="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">说明</th>
                  <th class="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">作用域变量</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">tab</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">自定义标签显示内容</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{ tab: TabItem }</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <td class="py-3 px-4 text-sm text-gray-800 dark:text-gray-200">[tab.name]</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">每个标签对应的内容插槽</td>
                  <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{ tab: TabItem }</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- 小结与最佳实践部分 -->
    <section>
      <h2 class="mb-4 text-xl font-bold">小结与最佳实践</h2>
      
      <div class="space-y-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
        <!-- 何时使用 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">何时使用</h3>
          <ul class="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>当需要在同一页面内展示多个相关内容区域时</li>
            <li>当用户需要在不同视图或功能模块之间切换时</li>
            <li>当希望减少页面内容的视觉复杂度，提高用户阅读体验时</li>
            <li>当希望提供更好的信息组织方式，避免一次性展示过多内容时</li>
          </ul>
        </div>
        
        <!-- 何时不使用 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">何时不使用</h3>
          <ul class="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>当内容量较少，可以一次性展示在页面上时</li>
            <li>当各个部分之间关联性较低，适合使用独立页面展示时</li>
            <li>当需要同时查看和比较多个内容区域时</li>
            <li>当用户操作流程是线性的，内容应该按特定顺序呈现时（考虑使用步骤条）</li>
          </ul>
        </div>
        
        <!-- 可访问性建议 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">可访问性建议</h3>
          <ul class="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>确保标签名称简明扼要，清晰描述其对应的内容</li>
            <li>使用符合ARIA规范的标签和角色，增强屏幕阅读器支持</li>
            <li>通过键盘可以完全操作选项卡（左右方向键导航，回车键选择）</li>
            <li>保持足够的颜色对比度，特别是在暗色模式下</li>
            <li>选中状态应当同时使用颜色和其他视觉指示（如下划线），不仅依赖颜色</li>
          </ul>
        </div>
        
        <!-- 性能优化 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">性能优化</h3>
          <ul class="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>对于内容较重的标签页，考虑使用延迟加载</li>
            <li>当标签页数量较多时，避免一次性加载所有标签内容</li>
            <li>对于非当前选中的标签页内容，可以考虑使用v-if而非v-show控制显示</li>
            <li>针对动态内容的标签页，可以在切换时才请求数据，而非一次性加载</li>
            <li>标签数量过多时考虑使用滚动或分页式标签栏，避免标签挤压</li>
          </ul>
        </div>
        
        <!-- 与其他组件的组合 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">与其他组件的组合</h3>
          <ul class="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>与Table组件结合，在不同标签页展示不同类别的数据表格</li>
            <li>与Form组件结合，将复杂表单分解为多个有逻辑关联的部分</li>
            <li>与Chart组件结合，在不同标签页展示不同维度的数据可视化</li>
            <li>与Card组件结合，创建带标签分类的内容卡片集合</li>
            <li>与Breadcrumb组件结合，展示用户在层级导航中的位置</li>
          </ul>
        </div>
        
        <!-- 响应式设计注意事项 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">响应式设计注意事项</h3>
          <ul class="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>在小屏幕设备上自动转换为下拉选择形式，避免标签栏拥挤</li>
            <li>考虑在不同屏幕尺寸下调整标签文本大小或使用图标替代文字</li>
            <li>确保标签页内容区域自适应不同屏幕宽度</li>
            <li>触摸设备上增加标签按钮的触摸区域，提高操作准确性</li>
            <li>在小屏幕上考虑使用全宽的标签栏布局</li>
          </ul>
        </div>
        
        <!-- 国际化与本地化 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">国际化与本地化</h3>
          <ul class="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>确保标签文本可以通过国际化字典进行翻译</li>
            <li>考虑不同语言文本长度的差异，设计时预留足够空间</li>
            <li>对于RTL(从右到左)语言，确保标签栏的布局方向自动适配</li>
            <li>数据格式化（如日期、货币）应根据用户的区域设置调整</li>
          </ul>
        </div>
        
        <!-- 常见陷阱与解决方案 -->
        <div>
          <h3 class="mb-3 text-lg font-medium">常见陷阱与解决方案</h3>
          <ul class="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>标签过多：保持标签数量在2-7个之间，超过时考虑重组或使用下拉菜单</li>
            <li>标签命名模糊：使用具体、简短且描述性强的标签名称</li>
            <li>标签切换导致页面跳动：设置内容区最小高度或使用平滑过渡动画</li>
            <li>深层嵌套：避免多层嵌套标签页，会导致导航体验混乱</li>
            <li>无状态保持：使用路由或本地存储记住用户上次选择的标签</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Tabs, TabTheme } from "./Tabs";

// 基础用法数据
const basicTab = ref("first");
const basicTabs = ["first", "second", "third"];

// 自定义标签数据
const customTab = ref("dashboard");
const customTabs = [
  { name: "dashboard", label: "仪表盘", icon: "icon-[tabler--dashboard]" },
  { name: "profile", label: "个人资料", icon: "icon-[tabler--user-cog]" },
  { name: "settings", label: "设置", icon: "icon-[tabler--settings]" },
];

// 禁用状态数据
const disabledTab = ref("tab1");
const disabledTabs = [
  { name: "tab1", content: "标签1" },
  { name: "tab2", content: "标签2" },
  { name: "tab3", content: "标签3", disabled: true },
];

// 默认标签数据
const defaultTabs = ["tab1", "tab2", "tab3"];

// 主题展示数据
const themeTab1 = ref("tab1");
const themeTab2 = ref("tab1");
const themeTab3 = ref("tab1");
const themeTab4 = ref("tab1");
const themeTab5 = ref("tab1");
const themeTab6 = ref("tab1");
const themeTabs = ["tab1", "tab2"];

// 暗色模式数据
const darkModeTab1 = ref("tab1");
const darkModeTab2 = ref("tab1");
const darkModeTabs = ["tab1", "tab2"];

// 响应式示例数据
const responsiveTab = ref("item1");
const responsiveTabs = ["item1", "item2", "item3", "item4", "item5"];
</script>
