<template>
  <div class="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <h1 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Empty 空状态组件</h1>

    <!-- 基础用法展示部分 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">基础用法</h2>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-300">
        <Empty />
      </div>
    </section>

    <!-- 自定义图片展示部分 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">自定义图片</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 简单图片 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-300">
          <Empty image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" />
        </div>
        <!-- 自定义大小 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-300">
          <Empty :imageSize="150">
            <template #description>
              <span class="text-blue-500 dark:text-blue-400">自定义尺寸的图片 (150px)</span>
            </template>
          </Empty>
        </div>
      </div>
    </section>

    <!-- 自定义描述文本 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">自定义描述文本</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 简单描述 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-300">
          <Empty description="暂无搜索结果" />
        </div>
        <!-- 不显示描述 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-300">
          <Empty :showDescription="false" />
        </div>
        <!-- 富文本描述 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-300">
          <Empty>
            <template #description>
              <div>
                <span class="text-red-500 dark:text-red-400 font-medium">未检索到</span>
                <span class="text-gray-600 dark:text-gray-300">符合条件的数据</span>
              </div>
            </template>
          </Empty>
        </div>
      </div>
    </section>

    <!-- 自定义操作区域 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">自定义操作区域</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 简单按钮 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-300">
          <Empty description="暂无数据">
            <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              创建数据
            </button>
          </Empty>
        </div>
        <!-- 多个操作 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-300">
          <Empty description="没有找到相关文件">
            <div class="mt-4 flex space-x-2">
              <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                返回
              </button>
              <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                上传文件
              </button>
            </div>
          </Empty>
        </div>
      </div>
    </section>

    <!-- 场景应用示例 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">场景应用示例</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- 表格场景 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden transition-all duration-300">
          <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h3 class="font-medium text-gray-700 dark:text-gray-300">用户列表</h3>
            <div class="flex space-x-2">
              <button class="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                刷新
              </button>
              <button class="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                添加
              </button>
            </div>
          </div>
          <div class="p-8">
            <Empty 
              description="暂无用户数据" 
              className="py-10"
              :imageSize="80"
            >
              <button class="mt-4 px-3 py-1 border border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400 rounded hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                创建用户
              </button>
            </Empty>
          </div>
        </div>
        
        <!-- 搜索结果场景 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden transition-all duration-300">
          <div class="p-4 border-b border-gray-200 dark:border-gray-700">
            <div class="flex w-full">
              <input 
                type="text" 
                placeholder="搜索..." 
                class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <button class="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition-colors">
                搜索
              </button>
            </div>
          </div>
          <div class="p-8">
            <Empty 
              image="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" 
              description="未找到匹配的搜索结果" 
              :imageSize="80"
            >
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                请尝试使用其他关键词或浏览所有类别
              </p>
              <div class="mt-4 flex space-x-2">
                <button class="px-3 py-1 border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  清除筛选条件
                </button>
                <button class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  查看全部
                </button>
              </div>
            </Empty>
          </div>
        </div>
      </div>
    </section>

    <!-- 自定义风格示例 -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">自定义风格</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <!-- 简约风格 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-300">
          <Empty className="empty-hover-effect">
            <template #image>
              <div class="w-20 h-20 rounded-full flex items-center justify-center bg-blue-50 dark:bg-blue-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
            </template>
            <template #description>
              <span class="text-blue-600 dark:text-blue-500 font-medium">邮箱为空</span>
            </template>
          </Empty>
        </div>

        <!-- 鲜艳风格 -->
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg shadow p-6 transition-all duration-300">
          <Empty>
            <template #image>
              <div class="w-24 h-24 relative">
                <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 dark:opacity-20 rounded-full animate-pulse"></div>
                <div class="absolute inset-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </template>
            <template #description>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-medium">暂无收藏</span>
            </template>
            <button class="mt-3 px-4 py-2 bg-white text-sm text-pink-500 border border-pink-200 rounded-full hover:bg-pink-50 transition-all dark:bg-gray-800 dark:border-pink-500/30 dark:hover:bg-pink-900/20">
              去收藏
            </button>
          </Empty>
        </div>

        <!-- 商务风格 -->
        <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg shadow p-6 transition-all duration-300">
          <Empty>
            <template #image>
              <div class="w-24 h-24 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-indigo-300 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </template>
            <template #description>
              <p class="text-indigo-700 dark:text-indigo-300 font-medium">暂无报表数据</p>
            </template>
            <div class="mt-3 px-3 py-1 bg-indigo-100 dark:bg-indigo-800/50 rounded-full text-xs text-indigo-700 dark:text-indigo-300">
              点击右上角导入数据
            </div>
          </Empty>
        </div>
        
        <!-- 新增：3D浮动卡片风格 -->
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
          <Empty animation="bounce">
            <template #image>
              <div class="w-24 h-24 relative perspective-500">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-20 h-20 rounded bg-gradient-to-tr from-blue-400 to-cyan-300 dark:from-blue-500 dark:to-cyan-400 shadow-lg transform rotate-6 transition-transform duration-500 hover:rotate-12 empty-float"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
              </div>
            </template>
            <template #description>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-medium text-base">项目为空</span>
            </template>
            <div class="flex mt-4 gap-2">
              <button class="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-md shadow text-sm text-blue-500 dark:text-blue-300 hover:shadow-md transition-all duration-300">
                <span class="inline-block transform hover:scale-105 transition-transform">创建</span>
              </button>
              <button class="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md shadow text-sm text-white hover:shadow-md transition-all duration-300">
                <span class="inline-block transform hover:scale-105 transition-transform">导入</span>
              </button>
            </div>
          </Empty>
        </div>
        
        <!-- 新增：暗黑模式高对比度风格 -->
        <div class="bg-gray-900 dark:bg-black rounded-lg shadow-lg p-6 transition-all duration-300">
          <Empty animation="scale">
            <template #image>
              <div class="w-24 h-24 relative">
                <div class="absolute inset-0 bg-gray-800 dark:bg-gray-950 rounded-full opacity-50"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-16 h-16 rounded-md border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center transform -rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-cyan-500 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </template>
            <template #description>
              <span class="text-cyan-500 dark:text-cyan-400 font-medium">未找到文件</span>
            </template>
            <div class="mt-4 px-4 py-2 bg-cyan-500/10 dark:bg-cyan-900/20 border border-cyan-500/20 dark:border-cyan-700/30 rounded-md">
              <span class="text-sm text-cyan-500 dark:text-cyan-400">拖拽文件至此区域</span>
            </div>
          </Empty>
        </div>
        
        <!-- 新增：极简微交互风格 -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 overflow-hidden relative">
          <div class="absolute inset-0 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-750 opacity-70"></div>
          <Empty className="relative z-10" animation="fade">
            <template #image>
              <div class="w-24 h-24 flex items-center justify-center group">
                <div class="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400 dark:text-gray-500 transition-transform duration-700 transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div class="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="flex space-x-1">
                    <div class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-ping delay-100"></div>
                    <div class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-ping delay-200"></div>
                    <div class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-ping delay-300"></div>
                  </div>
                </div>
              </div>
            </template>
            <template #description>
              <p class="text-gray-500 dark:text-gray-400 font-medium">等待创建</p>
            </template>
            <div class="mt-3 flex justify-center">
              <button class="px-4 py-1 rounded-full text-sm text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                立即添加
              </button>
            </div>
          </Empty>
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
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">image</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string | JSX.Element</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">null</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义图片源</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">imageSize</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number | string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">100</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">图片尺寸</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">imageStyle</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">Record&lt;string, string&gt;</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">{}</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义图片样式</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">description</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'暂无数据'</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">描述文本</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">showDescription</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示描述文本</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">className</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义容器类名</td>
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
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">default</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义底部内容</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">image</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义图片内容</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">description</td>
                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义描述内容</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 最佳实践部分 -->
    <section class="mb-10">
      <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">最佳实践</h2>
      <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300">
            Empty 空状态组件用于在页面上展示"无数据"或"无内容"的状态。合理使用空状态可以提高用户体验：
          </p>

          <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
            <li>保持提示信息简洁明了，帮助用户理解当前状态</li>
            <li>提供恰当的操作引导，引导用户采取下一步行动</li>
            <li>使用与应用风格一致的图标和描述文字</li>
            <li>在适当场景下考虑使用动画效果增强交互体验</li>
          </ul>

          <div class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
            <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              暗色模式提示
            </h4>
            <p class="text-sm text-blue-700 dark:text-blue-300">
              Empty 组件已内置支持暗色模式，无需额外配置。颜色会根据页面上是否有 <code
                class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">.dark</code> 类自动适配。
            </p>
          </div>

          <h4 class="font-medium text-gray-900 dark:text-white mt-4">适合使用的场景：</h4>
          <ul class="ml-6 list-disc space-y-1 text-gray-700 dark:text-gray-300">
            <li>列表、表格、搜索结果、内容页等暂无数据的展示</li>
            <li>筛选或搜索无结果时的提示</li>
            <li>交互过程中的初始化状态</li>
            <li>个人中心、收藏夹等内容为空的场景</li>
          </ul>

          <p class="text-gray-700 dark:text-gray-300 mt-4">
            通过为用户提供清晰的反馈和操作指引，可以减轻用户面对空白界面时的困惑，帮助用户快速采取行动。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Empty from './Empty';
</script>

<style scoped>
/* 添加一些过渡效果 */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
