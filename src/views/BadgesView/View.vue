<template>
  <div class="container mx-auto px-4 py-8 text-gray-900 dark:text-white">
    <h1 class="mb-8 text-3xl font-bold">Badge 徽章组件</h1>


    <!-- 基础颜色展示 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">基础颜色</h2>
      <CodePreview :code="basicColorCode">
        <div class="flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
          <Badge text="默认蓝色" />
          <Badge text="红色" color="red" />
          <Badge text="橙色" color="orange" />
          <Badge text="琥珀色" color="amber" />
          <Badge text="黄色" color="yellow" />
          <Badge text="青柠色" color="lime" />
          <Badge text="绿色" color="green" />
          <Badge text="翠绿色" color="emerald" />
          <Badge text="蓝绿色" color="teal" />
          <Badge text="青色" color="cyan" />
          <Badge text="天蓝色" color="sky" />
          <Badge text="靛青色" color="indigo" />
          <Badge text="紫罗兰" color="violet" />
          <Badge text="紫色" color="purple" />
          <Badge text="品红色" color="fuchsia" />
          <Badge text="粉色" color="pink" />
          <Badge text="玫瑰色" color="rose" />
        </div>
      </CodePreview>
    </section>

    <!-- 灰度色系 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">灰度色系</h2>
      <CodePreview :code="grayScaleCode">
        <div class="flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
          <Badge text="石板灰" color="slate" />
          <Badge text="灰色" color="gray" />
          <Badge text="锌灰" color="zinc" />
          <Badge text="中性灰" color="neutral" />
          <Badge text="石灰" color="stone" />
        </div>
      </CodePreview>
    </section>

    <!-- 主题颜色 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">语义化主题</h2>
      <CodePreview :code="thematicColorCode">
        <div class="flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
          <Badge text="默认" />
          <Badge text="主要" theme="primary" />
          <Badge text="次要" theme="secondary" />
          <Badge text="成功" theme="success" />
          <Badge text="警告" theme="warning" />
          <Badge text="危险" theme="danger" />
          <Badge text="信息" theme="info" />
        </div>
      </CodePreview>
    </section>

    <!-- 样式变体 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">样式变体</h2>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">柔和风格 (soft)</h3>
      <CodePreview :code="variantSoftCode">
        <div class="flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
          <Badge text="主要" theme="primary" variant="soft" />
          <Badge text="次要" theme="secondary" variant="soft" />
          <Badge text="成功" theme="success" variant="soft" />
          <Badge text="警告" theme="warning" variant="soft" />
          <Badge text="危险" theme="danger" variant="soft" />
          <Badge text="信息" theme="info" variant="soft" />
        </div>
      </CodePreview>

      <h3 class="mb-3 mt-6 text-lg font-medium text-gray-900 dark:text-white">实心风格 (solid)</h3>
      <CodePreview :code="variantSolidCode">
        <div class="flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
          <Badge text="主要" theme="primary" variant="solid" />
          <Badge text="次要" theme="secondary" variant="solid" />
          <Badge text="成功" theme="success" variant="solid" />
          <Badge text="警告" theme="warning" variant="solid" />
          <Badge text="危险" theme="danger" variant="solid" />
          <Badge text="信息" theme="info" variant="solid" />
        </div>
      </CodePreview>

      <h3 class="mb-3 mt-6 text-lg font-medium text-gray-900 dark:text-white">描边风格 (outline)</h3>
      <CodePreview :code="variantOutlineCode">
        <div class="flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
          <Badge text="主要" theme="primary" variant="outline" />
          <Badge text="次要" theme="secondary" variant="outline" />
          <Badge text="成功" theme="success" variant="outline" />
          <Badge text="警告" theme="warning" variant="outline" />
          <Badge text="危险" theme="danger" variant="outline" />
          <Badge text="信息" theme="info" variant="outline" />
        </div>
      </CodePreview>
    </section>

    <!-- 尺寸选项 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">尺寸选项</h2>
      <CodePreview :code="sizeOptionsCode">
        <div class="flex items-center gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
          <Badge text="小号标签" size="sm" theme="primary" />
          <Badge text="中号标签" size="md" theme="primary" />
          <Badge text="大号标签" size="lg" theme="primary" />
        </div>
      </CodePreview>
    </section>

    <!-- 圆角选项 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">圆角选项</h2>
      <CodePreview :code="roundedOptionsCode">
        <div class="flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
          <Badge text="方角 (sm)" rounded="sm" theme="primary" />
          <Badge text="中等圆角 (md)" rounded="md" theme="primary" />
          <Badge text="大圆角 (lg)" rounded="lg" theme="primary" />
          <Badge text="胶囊形状 (full)" rounded="full" theme="primary" />
        </div>
      </CodePreview>
    </section>

    <!-- 可交互徽章 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">可交互徽章</h2>
      <CodePreview :code="interactiveBadgesCode">
        <div class="p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
          <div class="flex flex-wrap gap-3">
            <Badge text="可点击" clickable @click="handleBadgeClick('普通点击')" theme="primary" title="点击我试试" />
            <Badge text="带图标" clickable @click="handleBadgeClick('带图标点击')" theme="success" rounded="full">
              <template #prefix>
                <div class="icon-[material-symbols--check-circle-rounded] mr-1 h-3 w-3" />
              </template>
            </Badge>
            <Badge text="删除标签" theme="danger" clickable @click="handleBadgeClick('删除')" rounded="full">
              <template #suffix>
                <div class="icon-[material-symbols--close-rounded] ml-1 h-3 w-3" />
              </template>
            </Badge>
          </div>
          <div class="mt-4 text-sm text-gray-600 dark:text-gray-400" v-if="lastClicked">
            最后点击: {{ lastClicked }}
          </div>
        </div>
      </CodePreview>
    </section>

    <!-- 组合使用案例 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">组合使用案例</h2>

      <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">产品标签</h3>
      <CodePreview :code="productLabelsCode">
        <div class="mb-6 flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
          <Badge text="新品" theme="primary" variant="solid" rounded="full" />
          <Badge text="热销" color="rose" variant="solid" rounded="full" />
          <Badge text="限时折扣" color="amber" variant="solid" rounded="full" />
          <Badge text="库存紧张" theme="danger" variant="soft" rounded="full" />
          <Badge text="预售" color="purple" variant="outline" rounded="full" />
        </div>
      </CodePreview>

      <h3 class="mb-3 mt-6 text-lg font-medium text-gray-900 dark:text-white">状态标签</h3>
      <CodePreview :code="statusLabelsCode">
        <div class="mb-6 flex flex-wrap gap-3 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-green-500"></div>
            <Badge text="在线" theme="success" variant="soft" />
          </div>
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-yellow-500"></div>
            <Badge text="离开" theme="warning" variant="soft" />
          </div>
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-gray-400"></div>
            <Badge text="离线" theme="secondary" variant="soft" />
          </div>
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
            <Badge text="错误" theme="danger" variant="soft" />
          </div>
        </div>
      </CodePreview>

      <h3 class="mb-3 mt-6 text-lg font-medium text-gray-900 dark:text-white">通知徽章</h3>
      <CodePreview :code="notificationBadgesCode">
        <div class="mb-6 flex items-center gap-8 p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
          <div class="relative">
            <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
              <div
                class="icon-[material-symbols--circle-notifications-outline-rounded] h-6 w-6 text-gray-800 dark:text-white" />
            </button>
            <Badge text="3" theme="danger" variant="solid" rounded="full" size="sm" class="absolute -right-1 -top-1" />
          </div>

          <div class="relative">
            <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
              <div
                class="icon-[material-symbols--mark-email-unread-outline-rounded] h-6 w-6 text-gray-800 dark:text-white" />
            </button>
            <Badge text="12" theme="primary" variant="solid" rounded="full" size="sm"
              class="absolute -right-1 -top-1" />
          </div>

          <div class="relative">
            <button class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
              <div
                class="icon-[material-symbols--shopping-cart-outline-rounded] h-6 w-6 text-gray-800 dark:text-white" />
            </button>
            <Badge text="购物车" color="emerald" variant="soft" rounded="full" size="sm"
              class="absolute -right-12 -top-2" />
          </div>
        </div>
      </CodePreview>
    </section>

    <!-- 实际应用示例 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">实际应用示例</h2>

      <CodePreview :code="userStatusCardCode" :initiallyExpanded="false">
        <div class="mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <div class="mb-3 flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
              <div
                class="icon-[material-symbols--supervised-user-circle-outline] h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div class="font-medium text-gray-900 dark:text-white">用户状态</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">简单的用户信息卡片</div>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <Badge text="正常" theme="success" />
            <Badge text="已认证" theme="info" />
            <Badge text="会员" color="amber" />
          </div>
        </div>
      </CodePreview>

      <CodePreview :code="systemStatusCardCode" :initiallyExpanded="false">
        <div class="mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <div class="mb-3 flex items-center justify-between">
            <div class="font-medium text-gray-900 dark:text-white">系统状态</div>
            <Badge text="正常运行" theme="success" variant="soft" rounded="full" />
          </div>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-700 dark:text-gray-300">API 服务</span>
              <Badge text="在线" theme="success" size="sm" />
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-700 dark:text-gray-300">数据库</span>
              <Badge text="在线" theme="success" size="sm" />
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-700 dark:text-gray-300">存储服务</span>
              <Badge text="维护中" theme="warning" size="sm" />
            </div>
          </div>
        </div>
      </CodePreview>

      <CodePreview :code="projectTagsCardCode" :initiallyExpanded="false">
        <div class="max-w-md rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <div class="mb-3 flex items-center justify-between">
            <div class="font-medium text-gray-900 dark:text-white">项目标签</div>
            <Badge text="5 个标签" color="gray" variant="soft" size="sm" />
          </div>
          <div class="flex flex-wrap gap-2">
            <Badge text="前端" color="sky" variant="soft" rounded="lg" clickable />
            <Badge text="后端" color="emerald" variant="soft" rounded="lg" clickable />
            <Badge text="设计" color="purple" variant="soft" rounded="lg" clickable />
            <Badge text="UI/UX" color="fuchsia" variant="soft" rounded="lg" clickable />
            <Badge text="产品" color="amber" variant="soft" rounded="lg" clickable />
          </div>
        </div>
      </CodePreview>
    </section>

    <!-- 暗色主题与主题切换 -->
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
                <Badge :text="isDark ? '暗色' : '亮色'" :theme="isDark ? 'primary' : 'warning'" />
              </div>
            </div>

            <div class="flex flex-col gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-700/30">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">系统偏好</span>
              <div class="flex items-center gap-2">
                <div class="h-3 w-3 rounded-full" :class="preferredDark ? 'bg-indigo-500' : 'bg-yellow-500'"></div>
                <Badge :text="preferredDark ? '暗色' : '亮色'" color="gray" />
              </div>
            </div>

            <div class="flex flex-col gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-700/30">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">主题设置</span>
              <div class="flex items-center gap-2">
                <Badge :text="currentThemeModeName" color="purple" variant="soft" />
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
              <Badge text="主要" theme="primary" variant="soft" />
              <Badge text="成功" theme="success" variant="soft" />
              <Badge text="警告" theme="warning" variant="soft" />
              <Badge text="危险" theme="danger" variant="soft" />
            </div>
            <div class="rounded-lg bg-gray-100 p-4">
              <div class="flex flex-wrap gap-2">
                <Badge text="主要" theme="primary" variant="solid" />
                <Badge text="成功" theme="success" variant="solid" />
                <Badge text="警告" theme="warning" variant="solid" />
                <Badge text="危险" theme="danger" variant="solid" />
              </div>
            </div>
          </div>
        </div>

        <!-- 暗色模式示例 -->
        <div class="rounded-lg border border-gray-700 bg-gray-800 p-5 shadow-sm">
          <h3 class="mb-3 text-lg font-medium text-white">暗色模式示例</h3>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-2">
              <Badge text="主要" theme="primary" variant="soft" />
              <Badge text="成功" theme="success" variant="soft" />
              <Badge text="警告" theme="warning" variant="soft" />
              <Badge text="危险" theme="danger" variant="soft" />
            </div>
            <div class="rounded-lg bg-gray-900 p-4">
              <div class="flex flex-wrap gap-2">
                <Badge text="主要" theme="primary" variant="solid" />
                <Badge text="成功" theme="success" variant="solid" />
                <Badge text="警告" theme="warning" variant="solid" />
                <Badge text="危险" theme="danger" variant="solid" />
              </div>
            </div>
          </div>
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
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">text</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">徽章显示的文本内容</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">color</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ColorType</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'blue'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">徽章颜色</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">theme</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ThemeColorType</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">undefined</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">语义化主题</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">variant</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'solid' | 'soft' | 'outline'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'soft'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">样式变体</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">size</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'sm' | 'md' | 'lg'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'md'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">徽章大小</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">rounded</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'sm' | 'md' | 'lg' | 'full'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'md'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">圆角大小</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">title</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">undefined</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">鼠标悬停提示文本</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">clickable</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否可点击</td>
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
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(text: string)</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">点击徽章时触发</td>
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
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">prefix</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">徽章内容前置元素</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">suffix</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">徽章内容后置元素</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 主题设置工具使用说明 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">主题设置工具</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h3 class="mb-3 text-lg font-medium text-gray-900 dark:text-white">全局主题管理API</h3>
        <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
          本组件库提供了基于 VueUse 的全局主题管理工具，可以在任何组件中使用。
        </p>

        <div class="mb-6 overflow-x-auto">
          <table class="min-w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">API</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">类型</th>
                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">isDark</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Ref&lt;boolean&gt;</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">当前是否是暗色模式</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">toggleDark</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">() => void</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">切换暗色/亮色模式</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">preferredDark</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Ref&lt;boolean&gt;</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">系统偏好是否是暗色模式</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">followSystemTheme</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">() => void</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">使主题跟随系统偏好</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">setLightTheme</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">() => void</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">强制设置为亮色模式</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">setDarkTheme</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">() => void</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">强制设置为暗色模式</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">initTheme</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">() => void</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">初始化主题设置</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="rounded-lg bg-gray-50 p-4 dark:bg-gray-700/30">
          <h4 class="mb-2 text-base font-medium text-gray-900 dark:text-white">使用示例</h4>
          <pre
            class="overflow-x-auto rounded bg-gray-100 p-3 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
        import { isDark, toggleDark } from "../utils/theme";

        // 在模板中使用
        const darkModeEnabled = isDark.value;

        // 切换暗色模式
        function handleToggle() {
        toggleDark();
        }
      </pre>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">小结与最佳实践</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300">
            Badge 组件是一个轻量级但功能丰富的组件，适用于多种场景，如状态指示、标签分类、通知计数等。
            以下是一些使用建议：
          </p>

          <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>根据语义选择合适的主题和颜色，如使用
              <Badge text="success" theme="success" size="sm" /> 表示成功状态
            </li>
            <li>为不同重要性的信息选择不同的变体，如使用
              <Badge text="solid" variant="solid" size="sm" /> 强调重要信息
            </li>
            <li>根据上下文环境选择合适的尺寸，如在紧凑界面中使用
              <Badge text="sm" size="sm" />
            </li>
            <li>当需要用户交互时，启用
              <Badge text="clickable" clickable size="sm" /> 属性
            </li>
            <li>利用 prefix 和 suffix 插槽添加图标增强可读性</li>
          </ul>

          <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
              <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
              暗色模式提示
            </h4>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              Badge 组件已内置支持暗色模式，无需额外配置。只要在应用的根元素上添加 <code
                class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">.dark</code> 类，
              组件就会自动切换为暗色样式。您可以使用我们提供的主题管理工具来轻松地实现这一点。
            </p>
          </div>

          <p class="text-gray-700 dark:text-gray-300">
            在设计系统中，保持徽章样式的一致性对于建立清晰、直观的用户界面至关重要。
            希望这个组件能够帮助您更好地构建应用的视觉语言系统。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { Badge } from "../../components/Badges";
import CodePreview from "../../components/CodePreview";
import { basicColorCode, grayScaleCode, thematicColorCode, variantSoftCode, variantSolidCode, variantOutlineCode, sizeOptionsCode, roundedOptionsCode, interactiveBadgesCode, productLabelsCode, statusLabelsCode, notificationBadgesCode, userStatusCardCode, systemStatusCardCode, projectTagsCardCode } from './config'
import {
  isDark,
  themeMode,
  toggleDark,
  preferredDark,
  useSystemTheme,
  setLightTheme,
  setDarkTheme,
  initTheme,
  themeScript
} from "../../utils/theme";

// 记录最后点击的徽章
const lastClicked = ref("");

// 当前主题模式名称
const currentThemeModeName = computed(() => {
  switch (themeMode.value) {
    case 'light': return '亮色';
    case 'dark': return '暗色';
    case 'system': return '跟随系统';
    default: return '未知';
  }
});

// 徽章点击处理函数
const handleBadgeClick = (name: string) => {
  lastClicked.value = name;
};

// 页面加载时初始化主题
onMounted(() => {
  // 初始化主题设置
  initTheme();
});
</script>

<style>
/* 把所有样式都移到全局样式表中了 */
</style>