<template>
    <div class="space-y-12 p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <section>
            <h1 class="text-2xl font-bold mb-4">按钮组（Button Groups）</h1>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
                按钮组组件可用于将相关操作分组展示，支持水平和垂直排列、多种尺寸、颜色和样式变体。
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <!-- 基本用法 -->
                <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 class="text-lg font-medium mb-3">基本用法</h2>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        最简单的按钮组用法，通过传入 items 数组来生成按钮组。
                    </p>
                    <div class="flex flex-wrap items-center gap-4">
                        <ButtonGroups :items="basicItems" />
                    </div>
                    <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                        <pre class="text-xs text-gray-800 dark:text-gray-300">
const items = [
  { key: 1, label: '年度' },
  { key: 2, label: '月度' },
  { key: 3, label: '日期' },
];
&lt;ButtonGroups :items="items" /&gt;
            </pre>
                    </div>
                </div>

                <!-- 图标按钮组 -->
                <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h2 class="text-lg font-medium mb-3">图标按钮组</h2>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        通过设置 icon 属性创建只有图标的按钮组，可以用 srOnly 添加屏幕阅读器文本。
                    </p>
                    <div class="flex flex-wrap items-center gap-4">
                        <ButtonGroups :items="iconItems" />
                    </div>
                    <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                        <pre class="text-xs text-gray-800 dark:text-gray-300">
const iconItems = [
  { 
    key: 'prev', 
    icon: 'icon-[material-symbols--chevron-left-rounded]', 
    srOnly: '上一页'
  },
  { 
    key: 'next', 
    icon: 'icon-[material-symbols--chevron-right-rounded]', 
    srOnly: '下一页'
  },
];
&lt;ButtonGroups :items="iconItems" /&gt;
            </pre>
                    </div>
                </div>
            </div>
        </section>

        <!-- 不同尺寸 -->
        <section>
            <h2 class="text-xl font-semibold mb-4">尺寸（Size）</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
                通过 size 属性设置按钮组的尺寸，支持 xs、sm、md、lg、xl 五种尺寸。
            </p>
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div class="flex flex-col items-start gap-4">
                    <div class="flex items-center gap-2">
                        <span class="inline-block w-10 text-sm">xs:</span>
                        <ButtonGroups :items="basicItems" size="xs" />
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="inline-block w-10 text-sm">sm:</span>
                        <ButtonGroups :items="basicItems" size="sm" />
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="inline-block w-10 text-sm">md:</span>
                        <ButtonGroups :items="basicItems" size="md" />
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="inline-block w-10 text-sm">lg:</span>
                        <ButtonGroups :items="basicItems" size="lg" />
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="inline-block w-10 text-sm">xl:</span>
                        <ButtonGroups :items="basicItems" size="xl" />
                    </div>
                </div>
                <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <pre class="text-xs text-gray-800 dark:text-gray-300">
&lt;ButtonGroups :items="items" size="xs" /&gt;
&lt;ButtonGroups :items="items" size="sm" /&gt;
&lt;ButtonGroups :items="items" size="md" /&gt; <!-- 默认值 -->
&lt;ButtonGroups :items="items" size="lg" /&gt;
&lt;ButtonGroups :items="items" size="xl" /&gt;
          </pre>
                </div>
            </div>
        </section>

        <!-- 不同颜色 -->
        <section>
            <h2 class="text-xl font-semibold mb-4">颜色（Colors）</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
                通过 type 属性设置按钮组的颜色，支持多种颜色选项和语义化颜色类型。
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 class="text-md font-medium mb-3">基础颜色</h3>
                    <div class="flex flex-col items-start gap-4">
                        <div class="flex items-center gap-2">
                            <span class="inline-block w-16 text-sm">blue:</span>
                            <ButtonGroups :items="basicItems" type="blue" />
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="inline-block w-16 text-sm">green:</span>
                            <ButtonGroups :items="basicItems" type="green" />
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="inline-block w-16 text-sm">red:</span>
                            <ButtonGroups :items="basicItems" type="red" />
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="inline-block w-16 text-sm">purple:</span>
                            <ButtonGroups :items="basicItems" type="purple" />
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 class="text-md font-medium mb-3">语义化颜色</h3>
                    <div class="flex flex-col items-start gap-4">
                        <div class="flex items-center gap-2">
                            <span class="inline-block w-16 text-sm">primary:</span>
                            <ButtonGroups :items="basicItems" type="primary" />
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="inline-block w-16 text-sm">success:</span>
                            <ButtonGroups :items="basicItems" type="success" />
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="inline-block w-16 text-sm">warning:</span>
                            <ButtonGroups :items="basicItems" type="warning" />
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="inline-block w-16 text-sm">danger:</span>
                            <ButtonGroups :items="basicItems" type="danger" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                <pre class="text-xs text-gray-800 dark:text-gray-300">
<!-- 基础颜色 -->
&lt;ButtonGroups :items="items" type="blue" /&gt; <!-- 默认值 -->
&lt;ButtonGroups :items="items" type="green" /&gt;
&lt;ButtonGroups :items="items" type="red" /&gt;
&lt;ButtonGroups :items="items" type="purple" /&gt;

<!-- 语义化颜色 -->
&lt;ButtonGroups :items="items" type="primary" /&gt;  <!-- 映射到 indigo -->
&lt;ButtonGroups :items="items" type="success" /&gt;  <!-- 映射到 green -->
&lt;ButtonGroups :items="items" type="warning" /&gt;  <!-- 映射到 yellow -->
&lt;ButtonGroups :items="items" type="danger" /&gt;   <!-- 映射到 red -->
        </pre>
            </div>
        </section>

        <!-- 不同变体 -->
        <section>
            <h2 class="text-xl font-semibold mb-4">变体样式（Variants）</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
                通过 variant 属性设置按钮组的变体样式，支持 solid、outline、soft、ghost 四种样式。
            </p>
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div class="flex flex-col items-start gap-4">
                    <div class="flex items-center gap-2">
                        <span class="inline-block w-16 text-sm">solid:</span>
                        <ButtonGroups :items="basicItems" variant="solid" />
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="inline-block w-16 text-sm">outline:</span>
                        <ButtonGroups :items="basicItems" variant="outline" />
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="inline-block w-16 text-sm">soft:</span>
                        <ButtonGroups :items="basicItems" variant="soft" />
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="inline-block w-16 text-sm">ghost:</span>
                        <ButtonGroups :items="basicItems" variant="ghost" />
                    </div>
                </div>
                <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <pre class="text-xs text-gray-800 dark:text-gray-300">
&lt;ButtonGroups :items="items" variant="solid" /&gt;   <!-- 默认值 -->
&lt;ButtonGroups :items="items" variant="outline" /&gt;
&lt;ButtonGroups :items="items" variant="soft" /&gt;
&lt;ButtonGroups :items="items" variant="ghost" /&gt;
          </pre>
                </div>
            </div>
        </section>

        <!-- 布局选项 -->
        <section>
            <h2 class="text-xl font-semibold mb-4">布局选项（Layout Options）</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <!-- 带有间隙的按钮组 -->
                <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 class="text-md font-medium mb-3">带有间隙的按钮组</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        通过设置 with-gap 属性为 true 可以让按钮之间有间隙。
                    </p>
                    <div class="flex flex-col items-start gap-4">
                        <div class="flex items-center gap-2">
                            <span class="text-sm">无间隙:</span>
                            <ButtonGroups :items="basicItems" />
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-sm">有间隙:</span>
                            <ButtonGroups :items="basicItems" :with-gap="true" />
                        </div>
                    </div>
                    <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                        <pre class="text-xs text-gray-800 dark:text-gray-300">
&lt;ButtonGroups :items="items" /&gt;
&lt;ButtonGroups :items="items" :with-gap="true" /&gt;
            </pre>
                    </div>
                </div>

                <!-- 垂直方向按钮组 -->
                <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 class="text-md font-medium mb-3">垂直方向按钮组</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        通过设置 direction 属性为 'vertical' 可以创建垂直排列的按钮组。
                    </p>
                    <div class="flex flex-wrap items-start gap-8">
                        <div class="flex flex-col items-center">
                            <span class="text-sm mb-2">垂直无间隙:</span>
                            <ButtonGroups :items="basicItems" direction="vertical" />
                        </div>
                        <div class="flex flex-col items-center">
                            <span class="text-sm mb-2">垂直有间隙:</span>
                            <ButtonGroups :items="basicItems" direction="vertical" :with-gap="true" />
                        </div>
                    </div>
                    <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                        <pre class="text-xs text-gray-800 dark:text-gray-300">
&lt;ButtonGroups :items="items" direction="vertical" /&gt;
&lt;ButtonGroups :items="items" direction="vertical" :with-gap="true" /&gt;
            </pre>
                    </div>
                </div>
            </div>

            <!-- 圆角按钮组 -->
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 class="text-md font-medium mb-3">圆角按钮组</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    通过设置 rounded 属性可以创建圆形或更圆润的按钮。对图标按钮特别有用。
                </p>
                <div class="flex flex-wrap items-center gap-8">
                    <div class="flex flex-col items-center">
                        <span class="text-sm mb-2">普通按钮组:</span>
                        <ButtonGroups :items="iconItems" />
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-sm mb-2">圆角按钮组:</span>
                        <ButtonGroups :items="iconItems" :rounded="true" />
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-sm mb-2">圆角 + 间隙:</span>
                        <ButtonGroups :items="iconItems" :rounded="true" :with-gap="true" />
                    </div>
                </div>
                <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <pre class="text-xs text-gray-800 dark:text-gray-300">
&lt;ButtonGroups :items="iconItems" /&gt;
&lt;ButtonGroups :items="iconItems" :rounded="true" /&gt;
&lt;ButtonGroups :items="iconItems" :rounded="true" :with-gap="true" /&gt;
          </pre>
                </div>
            </div>
        </section>

        <!-- 交互 - 受控按钮组 -->
        <section>
            <h2 class="text-xl font-semibold mb-4">交互与状态管理</h2>
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 class="text-md font-medium mb-3">受控按钮组</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    通过 selected-index 属性和 change 事件可以实现对按钮组选中状态的完全控制。
                </p>
                <div class="flex flex-col items-start gap-4">
                    <ButtonGroups :items="basicItems" :selected-index="selectedIndex" @change="handleSelectedChange" />
                    <div class="text-sm p-2 border border-gray-200 dark:border-gray-700 rounded">
                        当前选中项: <strong>{{ selectedIndex !== -1 ? basicItems[selectedIndex].label : '无' }}</strong>
                    </div>
                    <div class="flex gap-2">
                        <button @click="selectedIndex = (selectedIndex + 1) % basicItems.length"
                            class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                            切换下一项
                        </button>
                        <button @click="selectedIndex = -1"
                            class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                            清除选择
                        </button>
                    </div>
                </div>
                <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <pre class="text-xs text-gray-800 dark:text-gray-300">
// 在 Vue 组件中
const selectedIndex = ref(0);

const handleSelectedChange = (index: number) => {
  selectedIndex.value = index;
};

&lt;ButtonGroups 
  :items="items" 
  :selected-index="selectedIndex" 
  @change="handleSelectedChange" 
/&gt;
          </pre>
                </div>
            </div>

            <!-- 新增：事件处理和回调 -->
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-6">
                <h3 class="text-md font-medium mb-3">事件处理和回调</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    ButtonGroups 组件支持丰富的事件处理，可以与其他组件或状态联动。
                </p>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-wrap items-center gap-4">
                        <ButtonGroups :items="eventItems" variant="soft" type="primary"
                            :selected-index="eventSelectedIndex" @change="handleEventChange" />
                    </div>

                    <div class="p-3 bg-gray-100 dark:bg-gray-700 rounded">
                        <p class="text-sm mb-2">事件日志:</p>
                        <div class="max-h-32 overflow-y-auto text-xs">
                            <div v-for="(log, index) in eventLogs" :key="index"
                                class="py-1 border-b border-gray-200 dark:border-gray-600 last:border-0">
                                <span class="text-blue-600 dark:text-blue-400">{{ log.time }}</span>:
                                <span>{{ log.message }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex gap-2">
                        <button @click="clearEventLogs"
                            class="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                            清除日志
                        </button>
                    </div>
                </div>
                <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <pre class="text-xs text-gray-800 dark:text-gray-300">
// 在 Vue 组件中
const eventSelectedIndex = ref(0);
const eventLogs = ref<{time: string, message: string}[]>([]);

const handleEventChange = (index: number) => {
  const now = new Date().toLocaleTimeString();
  const item = index !== -1 ? eventItems[index].label : '无';
  
  eventSelectedIndex.value = index;
  eventLogs.value.push({
    time: now,
    message: `选中项变更为: ${item} (索引: ${index})`
  });
};

const clearEventLogs = () => {
  eventLogs.value = [];
};
          </pre>
                </div>
            </div>

            <!-- 新增：禁用状态和动态状态控制 -->
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-6">
                <h3 class="text-md font-medium mb-3">禁用状态和动态状态控制</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    ButtonGroups 可以通过设置项目的 disabled 属性来禁用特定的按钮。
                </p>

                <div class="flex flex-col gap-4">
                    <ButtonGroups :items="disabledButtonItems" variant="solid" type="blue"
                        :selected-index="disabledSelectedIndex" @change="handleDisabledChange" />

                    <div class="flex flex-wrap gap-2">
                        <button v-for="(item, index) in disabledButtonItems" :key="item.key"
                            @click="toggleButtonDisabled(index)"
                            class="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
                            {{ item.disabled ? '启用' : '禁用' }} "{{ item.label }}"
                        </button>
                    </div>
                </div>

                <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <pre class="text-xs text-gray-800 dark:text-gray-300">
// 在 Vue 组件中
const disabledButtonItems = ref([
  { key: 'option1', label: '选项一', disabled: false },
  { key: 'option2', label: '选项二', disabled: true },  // 初始禁用
  { key: 'option3', label: '选项三', disabled: false }
]);

const disabledSelectedIndex = ref(0);

const toggleButtonDisabled = (index: number) => {
  disabledButtonItems.value[index].disabled = 
    !disabledButtonItems.value[index].disabled;
};

const handleDisabledChange = (index: number) => {
  disabledSelectedIndex.value = index;
};
          </pre>
                </div>
            </div>

            <!-- 新增：动态按钮组 -->
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-6">
                <h3 class="text-md font-medium mb-3">动态按钮组</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    动态添加、删除和修改按钮组项目，适用于需要根据用户操作调整选项的场景。
                </p>

                <div class="flex flex-col gap-4">
                    <ButtonGroups :items="dynamicItems" variant="outline" type="green"
                        :selected-index="dynamicSelectedIndex" @change="handleDynamicChange" />

                    <div class="flex flex-wrap gap-2">
                        <button @click="addDynamicItem"
                            class="px-3 py-1 text-xs bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 rounded hover:bg-green-200 dark:hover:bg-green-700">
                            添加选项
                        </button>
                        <button @click="removeDynamicItem"
                            class="px-3 py-1 text-xs bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100 rounded hover:bg-red-200 dark:hover:bg-red-700"
                            :disabled="dynamicItems.length <= 1">
                            删除最后一项
                        </button>
                        <button @click="shuffleDynamicItems"
                            class="px-3 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 rounded hover:bg-blue-200 dark:hover:bg-blue-700"
                            :disabled="dynamicItems.length <= 1">
                            随机排序
                        </button>
                    </div>

                    <div class="text-sm p-2 border border-gray-200 dark:border-gray-700 rounded">
                        当前选中项: <strong>{{ dynamicSelectedIndex !== -1 && dynamicItems[dynamicSelectedIndex] ?
                            dynamicItems[dynamicSelectedIndex].label : '无' }}</strong>
                    </div>
                </div>

                <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <pre class="text-xs text-gray-800 dark:text-gray-300">
// 在 Vue 组件中
const dynamicItems = ref([
  { key: 'tab1', label: '选项 1' }
]);
const dynamicSelectedIndex = ref(0);
let dynamicCounter = 2;

const handleDynamicChange = (index: number) => {
  dynamicSelectedIndex.value = index;
};

const addDynamicItem = () => {
  dynamicItems.value.push({
    key: `tab${dynamicCounter}`,
    label: `选项 ${dynamicCounter}`
  });
  dynamicCounter++;
};

const removeDynamicItem = () => {
  if (dynamicItems.value.length > 1) {
    dynamicItems.value.pop();
    if (dynamicSelectedIndex.value >= dynamicItems.value.length) {
      dynamicSelectedIndex.value = dynamicItems.value.length - 1;
    }
  }
};

const shuffleDynamicItems = () => {
  // 打乱数组顺序
  dynamicItems.value = [...dynamicItems.value]
    .sort(() => Math.random() - 0.5);
};
          </pre>
                </div>
            </div>

            <!-- 新增：实际应用场景 -->
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-6">
                <h3 class="text-md font-medium mb-3">实际应用场景</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    结合按钮组和其他组件，实现实际应用中的交互功能。
                </p>

                <div class="flex flex-col gap-4">
                    <div class="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
                        <h4 class="text-sm font-medium mb-3">数据视图切换</h4>

                        <ButtonGroups :items="viewModeItems" variant="soft" type="primary"
                            :rounded="viewModeItems.every(item => item.icon)" :selected-index="viewModeIndex"
                            @change="handleViewModeChange" />

                        <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
                            <div v-if="viewModeIndex === 0" class="flex flex-col gap-2">
                                <div v-for="i in 3" :key="i"
                                    class="flex items-center p-2 bg-white dark:bg-gray-800 rounded">
                                    <div
                                        class="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-xs">
                                        {{ i }}
                                    </div>
                                    <div class="ml-2">列表项 {{ i }}</div>
                                </div>
                            </div>

                            <div v-else-if="viewModeIndex === 1" class="grid grid-cols-3 gap-2">
                                <div v-for="i in 3" :key="i"
                                    class="p-2 bg-white dark:bg-gray-800 rounded flex flex-col items-center">
                                    <div
                                        class="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-xs">
                                        {{ i }}
                                    </div>
                                    <div class="mt-1 text-xs">卡片 {{ i }}</div>
                                </div>
                            </div>

                            <div v-else class="flex flex-col">
                                <div class="grid grid-cols-3 border-b border-gray-300 dark:border-gray-600 p-2">
                                    <div class="font-medium text-xs">ID</div>
                                    <div class="font-medium text-xs">名称</div>
                                    <div class="font-medium text-xs">状态</div>
                                </div>
                                <div v-for="i in 3" :key="i"
                                    class="grid grid-cols-3 border-b border-gray-200 dark:border-gray-700 p-2 text-xs">
                                    <div>{{ i }}</div>
                                    <div>项目 {{ i }}</div>
                                    <div>活跃</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <pre class="text-xs text-gray-800 dark:text-gray-300">
// 在 Vue 组件中
const viewModeItems = [
  { key: 'list', label: '列表视图', icon: 'icon-[material-symbols--format-list-bulleted]' },
  { key: 'card', label: '卡片视图', icon: 'icon-[material-symbols--grid-view]' },
  { key: 'table', label: '表格视图', icon: 'icon-[material-symbols--table-rows]' }
];
const viewModeIndex = ref(0);

const handleViewModeChange = (index: number) => {
  // 切换视图模式
  viewModeIndex.value = index;
  
  // 在实际应用中，这里可能会触发额外的数据加载或视图更新
  console.log(`视图已切换为: ${viewModeItems[index].label}`);
};
          </pre>
                </div>
            </div>
        </section>

        <!-- 组合示例 -->
        <section>
            <h2 class="text-xl font-semibold mb-4">组合示例</h2>
            <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 class="text-md font-medium mb-3">综合应用示例</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    结合不同属性创建各种样式的按钮组。
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="border border-gray-200 dark:border-gray-700 rounded p-4">
                        <h4 class="text-sm font-medium mb-2">导航栏样式</h4>
                        <ButtonGroups :items="navItems" variant="soft" type="primary" :selected-index="navSelectedIndex"
                            @change="navSelectedIndex = $event" />
                    </div>

                    <div class="border border-gray-200 dark:border-gray-700 rounded p-4">
                        <h4 class="text-sm font-medium mb-2">过滤器样式</h4>
                        <ButtonGroups :items="filterItems" variant="outline" size="sm" :with-gap="true"
                            :selected-index="filterSelectedIndex" @change="filterSelectedIndex = $event" />
                    </div>

                    <div class="border border-gray-200 dark:border-gray-700 rounded p-4">
                        <h4 class="text-sm font-medium mb-2">工具栏样式</h4>
                        <ButtonGroups :items="toolbarItems" variant="ghost" :rounded="true" :with-gap="true" />
                    </div>

                    <div class="border border-gray-200 dark:border-gray-700 rounded p-4">
                        <h4 class="text-sm font-medium mb-2">分段控制样式</h4>
                        <ButtonGroups :items="timeframeItems" variant="solid" type="success" size="xs" />
                    </div>
                </div>
            </div>
        </section>

        <!-- API 文档部分 -->
        <section class="mb-10">
            <h2 class="text-xl font-semibold mb-4">组件API</h2>
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
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">items</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ButtonGroupItem[]</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮组的项目数组，每个项目应包含 key 和 label 或
                                    icon</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">size</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'xs' | 'sm' | 'md' | 'lg' | 'xl'
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'md'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮组尺寸</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">type</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">ButtonType</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'blue'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮组颜色类型，可使用语义化值或具体颜色值</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">variant</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'solid' | 'outline' | 'soft' |
                                    'ghost'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'solid'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮组样式变体</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">direction</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'horizontal' | 'vertical'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'horizontal'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮组方向，水平或垂直</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">withGap</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮之间是否有间隔</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">rounded</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">false</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否使用圆角样式，对图标按钮效果最佳</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">selectedIndex</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">-1</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">当前选中项的索引，-1 表示无选中项</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">className</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">自定义 CSS 类名</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">ButtonGroupItem 类型</h3>
                <div class="mb-6 overflow-x-auto">
                    <table class="min-w-full border-collapse">
                        <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">属性名</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">类型</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">必填</th>
                                <th class="px-4 py-2 text-left font-medium text-gray-900 dark:text-white">描述</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">key</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string | number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮的唯一标识符</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">label</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮显示的文本</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">icon</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">按钮图标的类名，支持任何图标库</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">srOnly</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">仅限屏幕阅读器的辅助文本，提高无障碍访问性</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">disabled</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">否</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否禁用按钮</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">事件 (Events)</h3>
                <div class="overflow-x-auto">
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
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">change</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(index: number)</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">当选中项改变时触发，参数为新选中项的索引，如果取消选中则为 -1
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- 小结与最佳实践 -->
        <section class="mb-10">
            <h2 class="mb-4 text-xl font-semibold text-gray-900 dark:text-white">小结与最佳实践</h2>
            <div class="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                <div class="space-y-4">
                    <p class="text-gray-700 dark:text-gray-300">
                        ButtonGroups 组件是一个多功能的分组控件，适用于导航、筛选和工具栏等场景。它提供了一种视觉上连贯的方式来呈现相关操作，
                        同时支持多种样式变体、尺寸和布局选项。以下是一些使用建议：
                    </p>

                    <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                            <strong>明确的语义化分组</strong>：仅将相关功能的按钮放在一起组成按钮组，例如
                            <div class="inline-flex mt-1">
                                <ButtonGroups
                                    :items="[{ key: 'bold', icon: 'icon-[material-symbols--format-bold]', srOnly: '加粗' }, { key: 'italic', icon: 'icon-[material-symbols--format-italic]', srOnly: '斜体' }]"
                                    size="xs" variant="soft" />
                            </div>
                            用于文本格式化工具
                        </li>
                        <li>
                            <strong>根据界面需求选择合适的变体</strong>：在主要操作区域可使用
                            <ButtonGroups :items="[{ key: 'solid', label: 'solid' }]" size="xs" variant="solid"
                                class="inline-flex ml-1 mr-1" />
                            样式，而在次要区域可使用
                            <ButtonGroups :items="[{ key: 'ghost', label: 'ghost' }]" size="xs" variant="ghost"
                                class="inline-flex ml-1" />
                            样式
                        </li>
                        <li>
                            <strong>使用合适的尺寸</strong>：根据页面整体布局选择合适的尺寸，例如在紧凑的界面中使用
                            <ButtonGroups :items="[{ key: 'sm', label: 'sm' }]" size="xs" class="inline-flex ml-1" />
                            或
                            <ButtonGroups :items="[{ key: 'xs', label: 'xs' }]" size="xs" class="inline-flex ml-1" />
                        </li>
                        <li>
                            <strong>图标与文本结合</strong>：在空间允许的情况下，结合图标和文本以提高可用性，如
                            <ButtonGroups
                                :items="[{ key: 'home', label: '首页', icon: 'icon-[material-symbols--home-outline]' }]"
                                size="xs" variant="soft" class="inline-flex ml-1" />
                        </li>
                        <li>
                            <strong>合理使用选中状态</strong>：利用 <code
                                class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-800">selectedIndex</code> 和 <code
                                class="bg-gray-100 px-1 py-0.5 rounded dark:bg-gray-800">change</code> 事件实现交互式体验
                        </li>
                    </ul>

                    <div
                        class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                        <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
                            <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
                            无障碍提示
                        </h4>
                        <p class="text-sm text-blue-700 dark:text-blue-300">
                            当使用仅有图标的按钮时，请确保添加 <code
                                class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">srOnly</code>
                            属性以提供屏幕阅读器文本。
                            组件已配置了适当的 ARIA 角色（role="group"），以确保正确的语义化结构。
                        </p>
                    </div>

                    <div
                        class="rounded-lg border border-amber-100 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-900/20">
                        <h4 class="mb-2 flex items-center text-amber-800 dark:text-amber-300">
                            <span class="icon-[material-symbols--tips-and-updates-outline-rounded] mr-2 h-5 w-5"></span>
                            性能提示
                        </h4>
                        <p class="text-sm text-amber-700 dark:text-amber-300">
                            当动态更新 <code
                                class="rounded bg-amber-100 px-1 py-0.5 font-mono dark:bg-amber-800/60">items</code>
                            数组时，
                            Vue 会重新渲染整个按钮组。如果您有大量动态按钮组，请确保为每个按钮项提供唯一且稳定的 <code
                                class="rounded bg-amber-100 px-1 py-0.5 font-mono dark:bg-amber-800/60">key</code>，
                            以帮助 Vue 的虚拟 DOM 算法优化更新过程。
                        </p>
                    </div>

                    <p class="text-gray-700 dark:text-gray-300">
                        ButtonGroups 组件已针对深色模式进行了优化，搭配我们的主题系统使用时无需额外配置。通过合理使用这个组件，
                        您可以创建出既美观又实用的用户界面元素，提升整体用户体验。
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonGroups from './ButtonGroups';
import type { ButtonGroupItem } from './ButtonGroups';

// 基础按钮组数据
const basicItems: ButtonGroupItem[] = [
    { key: 1, label: '年度' },
    { key: 2, label: '月度' },
    { key: 3, label: '日期' },
];

// 图标按钮组数据
const iconItems: ButtonGroupItem[] = [
    {
        key: 'prev',
        icon: 'icon-[material-symbols--chevron-left-rounded]',
        srOnly: '上一页'
    },
    {
        key: 'next',
        icon: 'icon-[material-symbols--chevron-right-rounded]',
        srOnly: '下一页'
    },
];

// 受控模式
const selectedIndex = ref(0);

const handleSelectedChange = (index: number) => {
    selectedIndex.value = index;
};

// 更多示例数据
const navItems: ButtonGroupItem[] = [
    { key: 'home', label: '首页', icon: 'icon-[material-symbols--home-outline]' },
    { key: 'explore', label: '探索', icon: 'icon-[material-symbols--explore-outline]' },
    { key: 'profile', label: '个人', icon: 'icon-[material-symbols--person-outline]' },
];

const filterItems: ButtonGroupItem[] = [
    { key: 'all', label: '全部' },
    { key: 'active', label: '进行中' },
    { key: 'completed', label: '已完成' },
];

const toolbarItems: ButtonGroupItem[] = [
    { key: 'bold', icon: 'icon-[material-symbols--format-bold]', srOnly: '加粗' },
    { key: 'italic', icon: 'icon-[material-symbols--format-italic]', srOnly: '斜体' },
    { key: 'underline', icon: 'icon-[material-symbols--format-underlined]', srOnly: '下划线' },
];

const timeframeItems: ButtonGroupItem[] = [
    { key: 'day', label: '日' },
    { key: 'week', label: '周' },
    { key: 'month', label: '月' },
    { key: 'year', label: '年' },
];

const navSelectedIndex = ref(0);
const filterSelectedIndex = ref(0);

// 新增：事件处理和回调
const eventItems: ButtonGroupItem[] = [
    { key: 'today', label: '今天', icon: 'icon-[material-symbols--today]' },
    { key: 'week', label: '本周', icon: 'icon-[material-symbols--date-range]' },
    { key: 'month', label: '本月', icon: 'icon-[material-symbols--calendar-month]' },
    { key: 'custom', label: '自定义', icon: 'icon-[material-symbols--settings-alert-outline-rounded]' },
];
const eventSelectedIndex = ref(0);
const eventLogs = ref<{ time: string, message: string }[]>([]);

const handleEventChange = (index: number) => {
    const now = new Date().toLocaleTimeString();
    const item = index !== -1 ? eventItems[index].label : '无';

    eventSelectedIndex.value = index;
    eventLogs.value.push({
        time: now,
        message: `选中项变更为: ${item} (索引: ${index})`
    });
};

const clearEventLogs = () => {
    eventLogs.value = [];
};

// 新增：禁用状态演示
const disabledButtonItems = ref<ButtonGroupItem[]>([
    { key: 'option1', label: '选项一', disabled: false },
    { key: 'option2', label: '选项二', disabled: true },  // 初始禁用
    { key: 'option3', label: '选项三', disabled: false }
]);
const disabledSelectedIndex = ref(0);

const toggleButtonDisabled = (index: number) => {
    disabledButtonItems.value[index].disabled = !disabledButtonItems.value[index].disabled;
};

const handleDisabledChange = (index: number) => {
    disabledSelectedIndex.value = index;
};

// 新增：动态按钮组
const dynamicItems = ref<ButtonGroupItem[]>([
    { key: 'tab1', label: '选项 1' }
]);
const dynamicSelectedIndex = ref(0);
let dynamicCounter = 2;

const handleDynamicChange = (index: number) => {
    dynamicSelectedIndex.value = index;
};

const addDynamicItem = () => {
    dynamicItems.value.push({
        key: `tab${dynamicCounter}`,
        label: `选项 ${dynamicCounter}`
    });
    dynamicCounter++;
};

const removeDynamicItem = () => {
    if (dynamicItems.value.length > 1) {
        dynamicItems.value.pop();
        if (dynamicSelectedIndex.value >= dynamicItems.value.length) {
            dynamicSelectedIndex.value = dynamicItems.value.length - 1;
        }
    }
};

const shuffleDynamicItems = () => {
    // 打乱数组顺序
    dynamicItems.value = [...dynamicItems.value].sort(() => Math.random() - 0.5);
};

// 新增：实际应用场景 - 视图切换
const viewModeItems: ButtonGroupItem[] = [
    { key: 'list', label: '列表视图', icon: 'icon-[material-symbols--format-list-bulleted]' },
    { key: 'card', label: '卡片视图', icon: 'icon-[material-symbols--grid-view]' },
    { key: 'table', label: '表格视图', icon: 'icon-[material-symbols--table-rows]' }
];
const viewModeIndex = ref(0);

const handleViewModeChange = (index: number) => {
    viewModeIndex.value = index;
};
</script>
