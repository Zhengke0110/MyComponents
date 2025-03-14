<template>
  <div class="py-8 px-6 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold text-gray-800 mb-2">Select Menus</h1>
    <p class="text-gray-600 mb-8">Interactive, accessible dropdown select components with animations.</p>

    <!-- Basic Examples Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">Basic Examples</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Basic Select -->
        <div
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <h3 class="font-medium text-gray-700 mb-4">Basic Select</h3>
          <SelectMenus v-model="basicSelection" :options="basicOptions" label="Choose a category"
            placeholder="Select a category" />
          <div class="mt-4 text-sm text-gray-600">
            Selected: <span class="font-medium text-indigo-600">{{ basicSelection?.name || 'None' }}</span>
          </div>
        </div>

        <!-- Icon Select -->
        <div
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <h3 class="font-medium text-gray-700 mb-4">With Icons</h3>
          <SelectMenus v-model="iconSelection" :options="iconOptions" label="Select priority"
            placeholder="Choose priority" />
          <div class="mt-4 text-sm text-gray-600">
            Selected: <span class="font-medium text-indigo-600">{{ iconSelection?.name || 'None' }}</span>
          </div>
        </div>

        <!-- Avatar Select -->
        <div
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
          <h3 class="font-medium text-gray-700 mb-4">With Avatars</h3>
          <SelectMenus v-model="userSelection" :options="userOptions" label="Assign to" placeholder="Select user" />
          <div class="mt-4 text-sm text-gray-600">
            Selected: <span class="font-medium text-indigo-600">{{ userSelection?.name || 'None' }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Examples Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">Advanced Examples</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- With Descriptions -->
        <div
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          v-motion :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 300 } }">
          <h3 class="font-medium text-gray-700 mb-4">With Descriptions</h3>
          <SelectMenus v-model="descriptionSelection" :options="descriptionOptions" label="Select environment"
            placeholder="Choose environment" />
          <div class="mt-4 text-sm text-gray-600">
            Selected: <span class="font-medium text-indigo-600">{{ descriptionSelection?.name || 'None' }}</span>
            <p v-if="descriptionSelection?.description" class="mt-1 text-xs text-gray-500">
              {{ descriptionSelection.description }}
            </p>
          </div>
        </div>

        <!-- Animated Example -->
        <div
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          v-motion :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 300 } }">
          <h3 class="font-medium text-gray-700 mb-4">Animated Selection</h3>
          <div class="flex items-center gap-4">
            <SelectMenus v-model="animatedSelection" :options="colorOptions" label="Pick a theme color"
              placeholder="Select color" />
            <div class="w-16 h-16 rounded-full transition-all duration-500" :class="{
              'animate-pulse': !animatedSelection,
              'animate-bounce': animatedSelection?.id === 'red',
              'animate-spin slow': animatedSelection?.id === 'blue',
              'animate-ping': animatedSelection?.id === 'green',
            }" :style="{ backgroundColor: animatedSelection?.value || '#e5e7eb' }"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Theme Examples Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">Theme Examples</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Indigo (Default)</h3>
          <SelectMenus v-model="themeSelection.indigo" :options="basicOptions" placeholder="Select option"
            :theme="SelectMenuTheme.Indigo" />
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Blue Theme</h3>
          <SelectMenus v-model="themeSelection.blue" :options="basicOptions" placeholder="Select option"
            :theme="SelectMenuTheme.Blue" />
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Green Theme</h3>
          <SelectMenus v-model="themeSelection.green" :options="basicOptions" placeholder="Select option"
            :theme="SelectMenuTheme.Green" />
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Orange Theme</h3>
          <SelectMenus v-model="themeSelection.orange" :options="basicOptions" placeholder="Select option"
            :theme="SelectMenuTheme.Orange" />
        </div>
      </div>
    </section>

    <!-- More Themes Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">More Theme Options</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Red Theme</h3>
          <SelectMenus v-model="moreThemes.red" :options="basicOptions" placeholder="Select option"
            :theme="SelectMenuTheme.Red" />
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Purple Theme</h3>
          <SelectMenus v-model="moreThemes.purple" :options="basicOptions" placeholder="Select option"
            :theme="SelectMenuTheme.Purple" />
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Cyan Theme</h3>
          <SelectMenus v-model="moreThemes.cyan" :options="basicOptions" placeholder="Select option"
            :theme="SelectMenuTheme.Cyan" />
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Pink Theme</h3>
          <SelectMenus v-model="moreThemes.pink" :options="basicOptions" placeholder="Select option"
            :theme="SelectMenuTheme.Pink" />
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Amber Theme</h3>
          <SelectMenus v-model="moreThemes.amber" :options="basicOptions" placeholder="Select option"
            :theme="SelectMenuTheme.Amber" />
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Teal Theme</h3>
          <SelectMenus v-model="moreThemes.teal" :options="basicOptions" placeholder="Select option"
            :theme="SelectMenuTheme.Teal" />
        </div>
      </div>
    </section>

    <!-- Theme Selector -->
    <section class="mb-12">
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Theme Selector</h2>
        <div class="flex flex-col gap-6">
          <div class="flex flex-wrap gap-4 items-center">
            <div class="w-64">
              <SelectMenus
                v-model="selectedTheme"
                :options="allThemes"
                label="Choose a theme"
                placeholder="Select theme"
                :theme="selectedTheme?.id || SelectMenuTheme.Indigo"
              />
            </div>
            <div class="text-sm text-gray-600">
              Try out different themes and see how they affect the component below
            </div>
          </div>
          
          <div class="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <SelectMenus
              v-model="dynamicThemeSelection"
              :options="basicOptions"
              label="Dynamic theme example"
              placeholder="Select an option"
              :theme="selectedTheme?.id || SelectMenuTheme.Indigo"
            />
            <div class="mt-4 text-sm text-gray-700">
              Selected theme: <span class="font-semibold">{{ selectedTheme?.name || 'Indigo (Default)' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dark Mode Example -->
    <section class="mb-12">
      <div class="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
        <h2 class="text-2xl font-semibold text-white mb-6">Dark Mode Examples</h2>
        <div class="dark">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h3 class="font-medium text-gray-200 mb-4">Indigo Theme</h3>
              <SelectMenus
                v-model="darkModeThemes.indigo"
                :options="basicOptions"
                label="Select category"
                placeholder="Choose category"
                :theme="SelectMenuTheme.Indigo"
              />
            </div>
            
            <div class="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h3 class="font-medium text-gray-200 mb-4">Blue Theme</h3>
              <SelectMenus
                v-model="darkModeThemes.blue"
                :options="basicOptions"
                label="Select category"
                placeholder="Choose category"
                :theme="SelectMenuTheme.Blue"
              />
            </div>
            
            <div class="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h3 class="font-medium text-gray-200 mb-4">Green Theme</h3>
              <SelectMenus
                v-model="darkModeThemes.green"
                :options="basicOptions"
                label="Select category"
                placeholder="Choose category"
                :theme="SelectMenuTheme.Green"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Demo -->
    <section class="mb-8">
      <div class="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100" v-motion
        :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 400, duration: 500 } }">
        <h2 class="text-2xl font-semibold text-indigo-800 mb-4">Form Example</h2>
        <div class="max-w-md">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
              <input type="text" v-model="formData.name"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
                placeholder="Enter project name" />
            </div>

            <div class="flex flex-wrap gap-6">
              <div>
                <SelectMenus v-model="formData.category" :options="basicOptions" label="Category"
                  placeholder="Select category" />
              </div>

              <div>
                <SelectMenus v-model="formData.priority" :options="iconOptions" label="Priority"
                  placeholder="Set priority" :theme="SelectMenuTheme.Red" />
              </div>

              <div>
                <SelectMenus v-model="formData.assignee" :options="userOptions" label="Assignee"
                  placeholder="Assign to" :theme="SelectMenuTheme.Blue" />
              </div>
            </div>

            <div class="pt-2">
              <button type="submit"
                class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
                Submit Project
              </button>
            </div>
          </form>

          <div v-if="formSubmitted" class="mt-6 p-4 bg-white rounded-lg border border-indigo-200 animate-fadeIn">
            <h3 class="text-sm font-medium text-gray-700 mb-2">Form Data:</h3>
            <pre class="text-xs bg-gray-50 p-3 rounded overflow-auto">{{ JSON.stringify(formData, null, 2) }}</pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Theme Showcase -->
    <section class="mb-12">
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">高级主题使用</h2>
        
        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 class="text-lg font-medium text-gray-700 mb-4">主题动态切换</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div class="mb-4">
                <p class="text-sm text-gray-600 mb-2">从下拉菜单中选择一个主题</p>
                <SelectMenus
                  v-model="themeSelectorExample.theme"
                  :options="themeSelectorExample.themeOptions"
                  label="选择主题"
                  placeholder="请选择主题"
                  :theme="themeSelectorExample.theme?.value || SelectMenuTheme.Indigo"
                />
              </div>
              
              <div class="mt-6">
                <SelectMenus
                  v-model="themeSelectorExample.selection"
                  :options="basicOptions"
                  label="使用动态主题"
                  placeholder="选择一个选项"
                  :theme="themeSelectorExample.theme?.value || SelectMenuTheme.Indigo"
                />
              </div>
            </div>
            
            <div class="bg-white p-4 rounded border border-gray-200">
              <h4 class="text-sm font-medium text-gray-700 mb-2">代码示例:</h4>
              <pre class="text-xs bg-gray-50 p-3 rounded overflow-auto"><code>// 首先导入组件和主题枚举
import SelectMenus, { SelectMenuTheme } from 'path/to/SelectMenus';

// 设置主题选项
const themeOptions = [
  { id: 'indigo', name: 'Indigo主题', value: SelectMenuTheme.Indigo },
  { id: 'blue', name: 'Blue主题', value: SelectMenuTheme.Blue },
  { id: 'green', name: 'Green主题', value: SelectMenuTheme.Green }
];

// 创建响应式变量
const theme = ref(themeOptions[0]);
const selection = ref(null);

// 在模板中使用
&lt;SelectMenus
  v-model="theme" 
  :options="themeOptions"
  label="选择主题"
/&gt;

&lt;SelectMenus
  v-model="selection"
  :options="options"
  :theme="theme?.value || SelectMenuTheme.Indigo"
/&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Accessibility Features -->
    <section class="mb-12">
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">无障碍特性</h2>
        <div class="space-y-6">
          <p class="text-gray-600">SelectMenus组件实现了完整的键盘导航和ARIA属性支持，提高了应用的无障碍性:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 class="text-lg font-medium text-gray-700 mb-2">键盘支持</h3>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-center gap-2">
                  <kbd class="px-2 py-1 bg-white rounded border border-gray-300 shadow-sm text-xs">↓</kbd>
                  <span>展开菜单或选择下一项</span>
                </li>
                <li class="flex items-center gap-2">
                  <kbd class="px-2 py-1 bg-white rounded border border-gray-300 shadow-sm text-xs">↑</kbd>
                  <span>展开菜单或选择上一项</span>
                </li>
                <li class="flex items-center gap-2">
                  <kbd class="px-2 py-1 bg-white rounded border border-gray-300 shadow-sm text-xs">Enter</kbd>
                  <span>选择当前高亮项</span>
                </li>
                <li class="flex items-center gap-2">
                  <kbd class="px-2 py-1 bg-white rounded border border-gray-300 shadow-sm text-xs">Space</kbd>
                  <span>选择当前高亮项</span>
                </li>
                <li class="flex items-center gap-2">
                  <kbd class="px-2 py-1 bg-white rounded border border-gray-300 shadow-sm text-xs">Esc</kbd>
                  <span>关闭下拉菜单</span>
                </li>
                <li class="flex items-center gap-2">
                  <kbd class="px-2 py-1 bg-white rounded border border-gray-300 shadow-sm text-xs">Tab</kbd>
                  <span>关闭菜单并移动焦点</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 class="text-lg font-medium text-gray-700 mb-2">ARIA支持</h3>
              <ul class="space-y-1.5 text-sm text-gray-600">
                <li>- 使用恰当的 <code>role</code> 属性</li>
                <li>- 支持 <code>aria-expanded</code> 状态</li>
                <li>- 实现 <code>aria-selected</code> 属性</li>
                <li>- 使用 <code>aria-activedescendant</code> 属性</li>
                <li>- 自动生成唯一ID以确保正确引用</li>
                <li>- 视图自动滚动到高亮选项</li>
              </ul>
            </div>
          </div>
          
          <div class="mt-4 p-4 bg-indigo-50 border border-indigo-100 rounded-lg">
            <p class="text-sm text-indigo-700">
              <strong>尝试一下:</strong> 点击下面的下拉框，然后使用键盘（方向键、Enter）来导航和选择选项。
            </p>
            <div class="mt-3 max-w-xs">
              <SelectMenus
                v-model="accessibilityDemoSelection"
                :options="basicOptions"
                label="键盘导航示例"
                placeholder="使用键盘尝试"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Usage Guide -->
    <section class="mb-12">
      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Usage Guide</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-medium text-gray-700 mb-2">基本用法</h3>
            <pre class="text-sm bg-gray-50 p-4 rounded-md overflow-auto"><code>&lt;SelectMenus
  v-model="selection"
  :options="options"
  label="选择选项"
  placeholder="请选择"
/&gt;</code></pre>
          </div>
          
          <div>
            <h3 class="text-lg font-medium text-gray-700 mb-2">使用预定义主题</h3>
            <pre class="text-sm bg-gray-50 p-4 rounded-md overflow-auto"><code>import SelectMenus, { SelectMenuTheme } from '路径/SelectMenus';

// 在组件中使用
&lt;SelectMenus
  v-model="selection"
  :options="options"
  label="选择选项"
  :theme="SelectMenuTheme.Blue"
/&gt;</code></pre>
          </div>

          <div>
            <h3 class="text-lg font-medium text-gray-700 mb-2">选项配置</h3>
            <pre class="text-sm bg-gray-50 p-4 rounded-md overflow-auto"><code>// 基本选项
const options = [
  { id: 1, name: '选项一' },
  { id: 2, name: '选项二' },
  { id: 3, name: '选项三' }
];

// 带图标的选项
const iconOptions = [
  { id: 'low', name: '低优先级', icon: 'icon-[material-symbols--arrow-downward]' },
  { id: 'high', name: '高优先级', icon: 'icon-[material-symbols--arrow-upward]' }
];</code></pre>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SelectMenus, { SelectMenuTheme } from '../../components/SelectMenus';

// Basic options
const basicOptions = [
  { id: 1, name: 'Design' },
  { id: 2, name: 'Development' },
  { id: 3, name: 'Marketing' },
  { id: 4, name: 'Sales' },
  { id: 5, name: 'Support' },
];

// Icon options
const iconOptions = [
  { id: 'low', name: 'Low', icon: 'icon-[material-symbols--arrow-downward]' },
  { id: 'medium', name: 'Medium', icon: 'icon-[material-symbols--stat-minus-1]' },
  { id: 'high', name: 'High', icon: 'icon-[material-symbols--arrow-upward]' },
  { id: 'critical', name: 'Critical', icon: 'icon-[material-symbols--settings-alert-outline]' },
];

// Avatar options
const userOptions = [
  { id: 'user1', name: 'Alex Johnson', avatar: 'https://i.pravatar.cc/150?u=alex' },
  { id: 'user2', name: 'Taylor Smith', avatar: 'https://i.pravatar.cc/150?u=taylor' },
  { id: 'user3', name: 'Jordan Lee', avatar: 'https://i.pravatar.cc/150?u=jordan' },
  { id: 'user4', name: 'Casey Wong', avatar: 'https://i.pravatar.cc/150?u=casey' },
];

// Description options
const descriptionOptions = [
  { id: 'dev', name: 'Development', icon: 'icon-[material-symbols--code]', description: 'Local development environment' },
  { id: 'staging', name: 'Staging', icon: 'icon-[material-symbols-light--arrow-selector-tool-rounded]', description: 'Pre-production testing environment' },
  { id: 'prod', name: 'Production', icon: 'icon-[material-symbols--webhook]', description: 'Live production environment' },
];

// Color options for animation example
const colorOptions = [
  { id: 'red', name: 'Red', value: '#ef4444' },
  { id: 'blue', name: 'Blue', value: '#3b82f6' },
  { id: 'green', name: 'Green', value: '#10b981' },
];

// Reactive state
const basicSelection = ref(null);
const iconSelection = ref(null);
const userSelection = ref(null);
const descriptionSelection = ref(null);
const animatedSelection = ref(null);

// Theme example selections
const themeSelection = ref({
  indigo: null,
  blue: null,
  green: null,
  orange: null,
});

// More themes
const moreThemes = ref({
  red: null,
  purple: null,
  cyan: null,
  pink: null,
  amber: null,
  teal: null
});

// Dark mode themes
const darkModeThemes = ref({
  indigo: null,
  blue: null,
  green: null
});

// Add a theme selector component to showcase all available themes
const allThemes = [
  { id: SelectMenuTheme.Indigo, name: 'Indigo (Default)', value: SelectMenuTheme.Indigo },
  { id: SelectMenuTheme.Blue, name: 'Blue', value: SelectMenuTheme.Blue },
  { id: SelectMenuTheme.Green, name: 'Green', value: SelectMenuTheme.Green },
  { id: SelectMenuTheme.Red, name: 'Red', value: SelectMenuTheme.Red },
  { id: SelectMenuTheme.Purple, name: 'Purple', value: SelectMenuTheme.Purple },
  { id: SelectMenuTheme.Amber, name: 'Amber', value: SelectMenuTheme.Amber },
  { id: SelectMenuTheme.Pink, name: 'Pink', value: SelectMenuTheme.Pink },
  { id: SelectMenuTheme.Cyan, name: 'Cyan', value: SelectMenuTheme.Cyan },
  { id: SelectMenuTheme.Emerald, name: 'Emerald', value: SelectMenuTheme.Emerald },
  { id: SelectMenuTheme.Violet, name: 'Violet', value: SelectMenuTheme.Violet },
  { id: SelectMenuTheme.Teal, name: 'Teal', value: SelectMenuTheme.Teal },
  { id: SelectMenuTheme.Rose, name: 'Rose', value: SelectMenuTheme.Rose },
  { id: SelectMenuTheme.Sky, name: 'Sky', value: SelectMenuTheme.Sky },
  { id: SelectMenuTheme.Orange, name: 'Orange', value: SelectMenuTheme.Orange },
];

// Selected theme for dynamic example
const selectedTheme = ref(allThemes[0]); // Default to Indigo
const dynamicThemeSelection = ref(null);

// Form example
const formData = ref({
  name: '',
  category: null,
  priority: null,
  assignee: null,
});
const formSubmitted = ref(false);

const handleSubmit = () => {
  formSubmitted.value = true;
  // In a real app, you would send this data to an API
  console.log('Form submitted:', formData.value);
};

// 主题选择器示例
const themeSelectorExample = ref({
  theme: { id: 'indigo', name: 'Indigo (默认)', value: SelectMenuTheme.Indigo },
  selection: null,
  themeOptions: [
    { id: 'indigo', name: 'Indigo (默认)', value: SelectMenuTheme.Indigo },
    { id: 'blue', name: 'Blue 主题', value: SelectMenuTheme.Blue },
    { id: 'green', name: 'Green 主题', value: SelectMenuTheme.Green },
    { id: 'red', name: 'Red 主题', value: SelectMenuTheme.Red },
    { id: 'purple', name: 'Purple 主题', value: SelectMenuTheme.Purple },
    { id: 'orange', name: 'Orange 主题', value: SelectMenuTheme.Orange }
  ]
});

// 无障碍演示
const accessibilityDemoSelection = ref(null);
</script>

<style>
/* Additional animations */
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}

.slow {
  animation-duration: 3s !important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
