<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
    <!-- 标题 -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <h1 class="text-2xl font-bold">SearchInput 搜索输入框组件</h1>
    </div>

    <div class="p-8">
      <!-- 基础用法 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">基础用法</h2>
        <div class="mb-6">
          <SearchInput 
            v-model="searchText" 
            label="搜索：" 
            placeholder="请输入关键词..." 
            @search="handleSearch" 
          />
        </div>
        <div v-if="searchResult" class="mt-4 p-3 rounded-md animate-pulse bg-gray-100 dark:bg-gray-700">
          <p>搜索结果：<span class="font-medium">{{ searchResult }}</span></p>
        </div>
      </section>

      <!-- Tailwind 颜色主题展示 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Tailwind 颜色主题</h2>
        
        <!-- 灰色系 -->
        <h3 class="mb-2 font-medium">灰色系</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div v-for="color in grayColors" :key="color">
            <p class="text-sm mb-2 opacity-70">{{ color }}</p>
            <SearchInput 
              v-model="colorValues[color]" 
              :theme="color" 
              :placeholder="`${color} 主题...`"
              :showLabel="false"
            />
          </div>
        </div>

        <!-- 其他颜色系列 -->
        <h3 class="mb-2 font-medium">主要颜色</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="color in mainColors" :key="color">
            <p class="text-sm mb-2 opacity-70">{{ color }}</p>
            <SearchInput 
              v-model="colorValues[color]" 
              :theme="color" 
              :placeholder="`${color} 主题...`"
              :showLabel="false"
            />
          </div>
        </div>
      </section>

      <!-- 不同尺寸 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">不同尺寸</h2>
        <div class="space-y-6">
          <div>
            <p class="text-sm mb-2 opacity-70">小尺寸 (sm)</p>
            <SearchInput 
              v-model="sizeSearch.small" 
              size="sm" 
              theme="blue"
              label="小尺寸："
            />
          </div>
          <div>
            <p class="text-sm mb-2 opacity-70">中尺寸 (md) - 默认</p>
            <SearchInput 
              v-model="sizeSearch.medium" 
              theme="blue"
              label="中尺寸："
            />
          </div>
          <div>
            <p class="text-sm mb-2 opacity-70">大尺寸 (lg)</p>
            <SearchInput 
              v-model="sizeSearch.large" 
              size="lg" 
              theme="blue"
              label="大尺寸："
            />
          </div>
        </div>
      </section>

      <!-- 样式变体 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">样式变体</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p class="text-sm mb-2 opacity-70">默认样式</p>
            <SearchInput 
              v-model="styleSearch.default" 
              theme="indigo" 
              label="默认样式："
            />
          </div>

          <div>
            <p class="text-sm mb-2 opacity-70">圆角样式</p>
            <SearchInput 
              v-model="styleSearch.rounded" 
              :rounded="true"
              theme="indigo" 
              label="圆角样式："
            />
          </div>

          <div>
            <p class="text-sm mb-2 opacity-70">无动画效果</p>
            <SearchInput 
              v-model="styleSearch.noAnimate" 
              :animate="false"
              theme="indigo"
              label="无动画效果："
            />
          </div>

          <div>
            <p class="text-sm mb-2 opacity-70">隐藏标签</p>
            <SearchInput 
              v-model="styleSearch.noLabel" 
              :showLabel="false"
              theme="indigo"
              placeholder="无标签搜索框..."
            />
          </div>

          <div>
            <p class="text-sm mb-2 opacity-70">禁用状态</p>
            <SearchInput 
              v-model="styleSearch.disabled" 
              :disabled="true"
              theme="indigo"
              label="禁用状态："
              placeholder="此输入框已禁用"
            />
          </div>

          <div>
            <p class="text-sm mb-2 opacity-70">默认填充值</p>
            <SearchInput 
              v-model="styleSearch.prefilled"
              theme="indigo"
              label="默认填充："
            />
          </div>
        </div>
      </section>

      <!-- 事件处理 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">事件处理</h2>
        
        <SearchInput 
          v-model="eventSearch" 
          label="事件演示："
          placeholder="输入并触发事件..."
          theme="blue"
          @search="handleEventSearch"
          @keypress="handleKeyPress"
          @clear="handleClear"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        
        <div v-if="eventLog.length > 0" class="mt-4 rounded-md p-3 max-h-60 overflow-y-auto bg-gray-100 dark:bg-gray-700">
          <p class="mb-2 font-medium">事件日志:</p>
          <div v-for="(log, index) in eventLog" :key="index" 
            class="text-sm mb-1 opacity-0 animate-slide-in"
            :style="{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }">
            {{ log }}
          </div>
        </div>
      </section>

      <!-- 实际应用场景 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">实际应用场景</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- 实时搜索 -->
          <div>
            <h3 class="mb-4 font-medium">实时搜索</h3>
            <SearchInput 
              v-model="liveSearch" 
              label="实时搜索："
              placeholder="开始输入..."
              theme="cyan"
              :rounded="true"
              @keypress="handleLiveSearch"
            />
            
            <div v-if="liveSearch" class="mt-4 rounded-md p-4 bg-gray-100 dark:bg-gray-700">
              <p class="mb-2">搜索中: <span class="font-medium">{{ liveSearch }}</span></p>
              <div class="flex items-center">
                <span class="mr-2">加载结果</span>
                <div class="flex space-x-1">
                  <div v-for="i in 3" :key="i" 
                    class="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                    :style="{ animationDelay: `${i * 0.1}s` }">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 筛选器 -->
          <div>
            <h3 class="mb-4 font-medium">产品筛选器</h3>
            <SearchInput 
              v-model="filterSearch" 
              label="产品搜索："
              placeholder="搜索产品..."
              theme="emerald"
              @search="handleFilterSearch"
            />
            
            <div v-if="showFilterResults" class="mt-4 rounded-md p-4 bg-gray-100 dark:bg-gray-700">
              <p class="mb-3">找到 {{ filteredProducts.length }} 个匹配的产品：</p>
              <ul class="space-y-2">
                <li v-for="product in filteredProducts" :key="product.id" 
                  class="p-2 rounded flex justify-between bg-white dark:bg-gray-600 shadow-sm">
                  <span>{{ product.name }}</span>
                  <span class="text-green-600 dark:text-green-400">${{ product.price }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 组合使用示例 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">组合使用示例</h2>

        <div class="mb-6 bg-gray-100 dark:bg-gray-700">
          <div class="p-4 flex items-center justify-between">
            <h3 class="text-base font-medium">高级搜索面板</h3>
            <button class="px-3 py-1 rounded text-sm transition-colors bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500" @click="resetSearchFilters">
              重置
            </button>
          </div>
          <div class="p-4 border-t border-gray-200 dark:border-gray-600">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <SearchInput v-model="advancedSearch.query" label="关键词：" placeholder="输入搜索关键词..." theme="blue" />

              <SearchInput v-model="advancedSearch.category" label="分类：" placeholder="输入分类名称..." theme="purple" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SearchInput v-model="advancedSearch.minPrice" label="最低价格：" placeholder="0.00" theme="green" />

              <SearchInput v-model="advancedSearch.maxPrice" label="最高价格：" placeholder="1000.00" theme="green" />
            </div>

            <div class="mt-4 flex justify-end">
              <button class="px-4 py-2 rounded font-medium transition-colors bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white" @click="handleAdvancedSearch">
                搜索
              </button>
            </div>
          </div>
        </div>

        <div v-if="advancedSearchResults.show" class="p-4 rounded bg-gray-100 dark:bg-gray-700">
          <p class="mb-2">高级搜索结果:</p>
          <pre class="text-xs overflow-x-auto p-2 rounded bg-white dark:bg-gray-800">{{ JSON.stringify(advancedSearch, null, 2) }}</pre>
        </div>
      </section>

      <!-- API文档 -->
      <section class="mb-8 rounded-lg shadow bg-white dark:bg-gray-800 overflow-hidden">
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-xl font-semibold">API 文档</h2>
        </div>
        
        <!-- Props -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium mb-4">Props</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">属性名</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">类型</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">默认值</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">说明</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">modelValue</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">''</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框的值，支持 v-model 双向绑定</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">placeholder</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'搜索'</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框的占位符文本</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">size</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'sm' | 'md' | 'lg'</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'md'</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框大小</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">theme</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">ColorType</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'gray'</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">主题颜色</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">debounce</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">300</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">搜索延迟时间（毫秒）</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">disabled</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否禁用输入框</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">autofocus</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否自动聚焦</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">showClear</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">true</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否显示清除按钮</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">showSearchHistory</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">boolean</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">false</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">是否显示搜索历史</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">maxHistoryItems</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">number</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">5</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">最大历史记录数量</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">historyStorageKey</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">string</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">'search_history'</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">历史记录本地存储键名</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Events -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium mb-4">事件</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">事件名</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">参数</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">说明</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">update:modelValue</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(value: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入值变化时触发</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">search</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(value: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">触发搜索时触发</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">clear</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">清除搜索内容时触发</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">focus</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(event: FocusEvent)</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框获得焦点时触发</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">blur</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(event: FocusEvent)</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框失去焦点时触发</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">history-select</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">(value: string)</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">从历史记录中选择项目时触发</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">history-clear</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">-</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">清空历史记录时触发</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Slots -->
        <div class="p-6">
          <h3 class="text-lg font-medium mb-4">插槽</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">插槽名</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">说明</th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">prefix</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框前置内容，默认为搜索图标</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">suffix</td>
                  <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">输入框后置内容</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <!-- 小结与最佳实践 -->
      <section class="mb-8 rounded-lg shadow p-6 transition-all hover:shadow-lg bg-white dark:bg-gray-800">
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">小结与最佳实践</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- 何时使用 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-indigo-600 dark:text-indigo-400">何时使用</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>当需要在页面上提供搜索功能时</li>
              <li>用户需要在大量数据中快速查找内容</li>
              <li>需要记录用户搜索历史时</li>
            </ul>
          </div>
          
          <!-- 何时不使用 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-rose-600 dark:text-rose-400">何时不使用</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>当功能需要非常复杂的筛选条件时，考虑使用专门的筛选组件</li>
              <li>当输入表单只需简单文本输入时，使用标准的TextInput组件更合适</li>
            </ul>
          </div>
          
          <!-- 可访问性建议 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-emerald-600 dark:text-emerald-400">可访问性建议</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>确保搜索框有清晰的标签或占位符，说明其用途</li>
              <li>键盘导航应完整支持搜索历史交互</li>
              <li>对于必要的搜索功能，添加适当的ARIA属性</li>
            </ul>
          </div>
          
          <!-- 性能优化 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-blue-600 dark:text-blue-400">性能优化</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>合理设置debounce值，避免频繁触发搜索</li>
              <li>历史记录存储考虑限制数量，避免本地存储过大</li>
              <li>当需要搜索大量远程数据时，考虑结合服务端分页</li>
            </ul>
          </div>
          
          <!-- 与其他组件的组合 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-purple-600 dark:text-purple-400">与其他组件的组合</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>与Dropdown组件结合可以实现自动完成功能</li>
              <li>与Message组件结合可以显示搜索结果状态</li>
              <li>与Table或List组件结合展示搜索结果</li>
            </ul>
          </div>
          
          <!-- 响应式设计注意事项 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-amber-600 dark:text-amber-400">响应式设计注意事项</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>在移动设备上考虑自动聚焦并展开键盘</li>
              <li>小屏幕上可能需要调整尺寸或设计为全宽展示</li>
              <li>历史记录下拉菜单应适应不同屏幕宽度</li>
            </ul>
          </div>
          
          <!-- 国际化与本地化 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-teal-600 dark:text-teal-400">国际化与本地化</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>占位符和按钮文本应支持多语言</li>
              <li>搜索历史记录存储应考虑不同语言的字符编码</li>
              <li>对于RTL(从右到左)语言，布局方向需要适当调整</li>
            </ul>
          </div>
          
          <!-- 安全性考虑 -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-red-600 dark:text-red-400">安全性考虑</h3>
            <ul class="space-y-2 list-disc pl-5">
              <li>搜索历史存储在本地时，避免包含敏感信息</li>
              <li>对输入内容进行适当的过滤和验证，防止XSS攻击</li>
              <li>如果搜索结果包含用户输入内容的回显，确保进行适当的转义</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import SearchInput from '../../components/SearchInput';

// 基础用法
const searchText = ref('');
const searchResult = ref('');

const handleSearch = () => {
  searchResult.value = searchText.value || '空查询';
};

// 颜色分组
const grayColors = ['slate', 'gray', 'zinc', 'neutral', 'stone'] as const;
const mainColors = [
  'red', 'orange', 'yellow', 'green', 'emerald',
  'teal', 'cyan', 'blue', 'indigo', 'violet', 'purple', 'pink'
] as const;

// 所有颜色的值
const colorValues = reactive<Record<string, string>>({});

// 初始化颜色值
const allColors = [...grayColors, ...mainColors];
allColors.forEach(color => {
  colorValues[color as string] = '';
});

// 不同尺寸
const sizeSearch = reactive({
  small: '',
  medium: '',
  large: ''
});

// 样式变体
const styleSearch = reactive({
  default: '',
  rounded: '',
  noAnimate: '',
  noLabel: '',
  disabled: '已禁用',
  prefilled: '预填充的值',
});

// 事件处理
const eventSearch = ref('');
const eventLog = ref<string[]>([]);

const handleEventSearch = () => {
  addEventLog(`搜索事件触发: "${eventSearch.value}"`);
};

const handleKeyPress = (event: KeyboardEvent) => {
  addEventLog(`按键事件: 按下了 "${event.key}" 键`);
};

const handleClear = () => {
  addEventLog('清除事件触发');
};

const handleFocus = () => {
  addEventLog('输入框获得焦点');
};

const handleBlur = () => {
  addEventLog('输入框失去焦点');
};

const addEventLog = (message: string) => {
  eventLog.value.unshift(`[${new Date().toLocaleTimeString()}] ${message}`);
  // 最多保留10条记录
  if (eventLog.value.length > 10) {
    eventLog.value.pop();
  }
};

// 实时搜索
const liveSearch = ref('');

const handleLiveSearch = () => {
  // 模拟实时搜索
  console.log('实时搜索:', liveSearch.value);
};

// 产品筛选
const filterSearch = ref('');
const showFilterResults = ref(false);
const products = [
  { id: 1, name: '笔记本电脑', price: 1299.99 },
  { id: 2, name: '无线鼠标', price: 29.99 },
  { id: 3, name: '机械键盘', price: 89.99 },
  { id: 4, name: '显示器', price: 249.99 },
  { id: 5, name: 'USB 集线器', price: 19.99 },
  { id: 6, name: '耳机', price: 59.99 },
  { id: 7, name: '电源适配器', price: 39.99 },
];

const filteredProducts = ref([...products]);

const handleFilterSearch = () => {
  if (!filterSearch.value) {
    filteredProducts.value = [...products];
  } else {
    const query = filterSearch.value.toLowerCase();
    filteredProducts.value = products.filter(product => {
      return product.name.toLowerCase().includes(query) || 
             product.price.toString().includes(query);
    });
  }
  showFilterResults.value = true;
};

// 高级搜索示例
const advancedSearch = reactive({
  query: '',
  category: '',
  minPrice: '',
  maxPrice: '',
});

const advancedSearchResults = reactive({
  show: false,
});

const handleAdvancedSearch = () => {
  advancedSearchResults.show = true;
};

const resetSearchFilters = () => {
  advancedSearch.query = '';
  advancedSearch.category = '';
  advancedSearch.minPrice = '';
  advancedSearch.maxPrice = '';
  advancedSearchResults.show = false;
};
</script>

<style scoped>
@keyframes slideIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out;
}
</style>