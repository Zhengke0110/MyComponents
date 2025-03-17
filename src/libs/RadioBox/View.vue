<template>
    <div class="p-6 space-y-8 transition-colors duration-300">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-200">RadioBox 单选框</h1>

        <!-- 组件介绍 -->
        <section class="space-y-2">
            <p class="text-gray-700 dark:text-gray-300">单选框用于在多个备选项中选中单个状态。相比下拉选择，RadioBox更直观，选项展示更清晰。</p>
            <p class="text-gray-500 dark:text-gray-400 text-sm">适用场景：选项数量较少、用户需要快速对比选择时。</p>
        </section>

        <!-- 基础用法 -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <span>基础用法</span>
                <span
                    class="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-md">基础</span>
            </h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div class="flex flex-col space-y-4">
                    <Radio v-model="basicChecked" :value="true">默认单选框</Radio>
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                        选中状态: <span class="font-medium">{{ basicChecked ? '是' : '否' }}</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- 不同颜色 -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <span>多彩单选框</span>
                <span
                    class="ml-2 px-2 py-1 text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-md">颜色</span>
            </h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Radio v-model="colorChecked" :value="'red'" color="red">红色</Radio>
                    <Radio v-model="colorChecked" :value="'blue'" color="blue">蓝色</Radio>
                    <Radio v-model="colorChecked" :value="'green'" color="green">绿色</Radio>
                    <Radio v-model="colorChecked" :value="'purple'" color="purple">紫色</Radio>
                    <Radio v-model="colorChecked" :value="'orange'" color="orange">橙色</Radio>
                    <Radio v-model="colorChecked" :value="'emerald'" color="emerald">翠绿色</Radio>
                    <Radio v-model="colorChecked" :value="'indigo'" color="indigo">靛蓝色</Radio>
                    <Radio v-model="colorChecked" :value="'pink'" color="pink">粉色</Radio>
                </div>
                <div class="mt-4 text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    <span>已选颜色:</span>
                    <div class="ml-2 px-3 py-1 rounded-md transition-colors duration-300 animate-pulse"
                        :class="`bg-${colorChecked}-100 dark:bg-${colorChecked}-900 text-${colorChecked}-700 dark:text-${colorChecked}-300`">
                        {{ colorChecked }}
                    </div>
                </div>
            </div>
        </section>

        <!-- 禁用状态 -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <span>禁用状态</span>
                <span
                    class="ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-md">状态</span>
            </h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div class="flex flex-wrap gap-6">
                    <Radio disabled :value="1">禁用未选中</Radio>
                    <Radio disabled :value="1" v-model="disabledChecked">禁用已选中</Radio>
                </div>
            </div>
        </section>

        <!-- 单选框组 -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <span>单选框组</span>
                <span
                    class="ml-2 px-2 py-1 text-xs bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-md">组合</span>
            </h2>
            <div
                class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 space-y-8">
                <div class="space-y-4">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">基础单选框组</h3>
                    <div
                        class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md transform transition-all duration-500 hover:scale-[1.01]">
                        <RadioGroup v-model="groupValue" color="blue" class="animate-fade-in">
                            <Radio :value="'apple'">苹果</Radio>
                            <Radio :value="'banana'">香蕉</Radio>
                            <Radio :value="'orange'">橙子</Radio>
                            <Radio :value="'grape'" disabled>葡萄</Radio>
                        </RadioGroup>
                        <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            选中的水果: <span class="font-medium">{{ groupValue }}</span>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">使用options配置</h3>
                    <div
                        class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md transform transition-all duration-500 hover:scale-[1.01]">
                        <RadioGroup v-model="optionsValue" :options="fruitOptions" color="green" />
                        <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            选中的水果: <span class="font-medium">{{ optionsValue }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 按钮样式 -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <span>按钮样式</span>
                <span
                    class="ml-2 px-2 py-1 text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300 rounded-md">样式</span>
            </h2>
            <div
                class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 space-y-8">
                <div class="space-y-4">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">基础按钮单选组</h3>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
                        <RadioGroup v-model="buttonValue" optionType="button" color="blue">
                            <Radio :value="'apple'">苹果</Radio>
                            <Radio :value="'banana'">香蕉</Radio>
                            <Radio :value="'orange'">橙子</Radio>
                            <Radio :value="'grape'" disabled>葡萄</Radio>
                        </RadioGroup>
                        <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            选中的水果: <span class="font-medium">{{ buttonValue }}</span>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">填充样式</h3>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
                        <RadioGroup v-model="solidValue" optionType="button" buttonStyle="solid" color="indigo">
                            <Radio :value="'apple'">苹果</Radio>
                            <Radio :value="'banana'">香蕉</Radio>
                            <Radio :value="'orange'">橙子</Radio>
                            <Radio :value="'grape'" disabled>葡萄</Radio>
                        </RadioGroup>
                        <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            选中的水果: <span class="font-medium">{{ solidValue }}</span>
                        </div>
                    </div>
                </div>

                <div class="space-y-4">
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300">不同大小</h3>
                    <div class="space-y-6">
                        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">大尺寸</p>
                            <RadioGroup v-model="sizeValue" optionType="button" size="large" color="rose">
                                <Radio :value="'large'">大号</Radio>
                                <Radio :value="'default'">默认</Radio>
                                <Radio :value="'small'">小号</Radio>
                            </RadioGroup>
                        </div>

                        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">默认尺寸</p>
                            <RadioGroup v-model="sizeValue" optionType="button" buttonStyle="solid" size="default"
                                color="cyan">
                                <Radio :value="'large'">大号</Radio>
                                <Radio :value="'default'">默认</Radio>
                                <Radio :value="'small'">小号</Radio>
                            </RadioGroup>
                        </div>

                        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">小尺寸</p>
                            <RadioGroup v-model="sizeValue" optionType="button" size="small" color="amber">
                                <Radio :value="'large'">大号</Radio>
                                <Radio :value="'default'">默认</Radio>
                                <Radio :value="'small'">小号</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 特殊布局 -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <span>布局方式</span>
                <span
                    class="ml-2 px-2 py-1 text-xs bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300 rounded-md">布局</span>
            </h2>
            <div
                class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 space-y-6">
                <div class="space-y-2">
                    <h3 class="font-medium text-gray-700 dark:text-gray-300">水平布局</h3>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
                        <RadioGroup v-model="layoutValue" color="teal" class="flex flex-row gap-6">
                            <Radio :value="'horizontal'">水平</Radio>
                            <Radio :value="'vertical'">垂直</Radio>
                            <Radio :value="'grid'">网格</Radio>
                        </RadioGroup>
                    </div>
                </div>

                <div class="space-y-2">
                    <h3 class="font-medium text-gray-700 dark:text-gray-300">垂直布局</h3>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
                        <RadioGroup v-model="layoutValue" color="violet" class="flex flex-col gap-4">
                            <Radio :value="'horizontal'">水平</Radio>
                            <Radio :value="'vertical'">垂直</Radio>
                            <Radio :value="'grid'">网格</Radio>
                        </RadioGroup>
                    </div>
                </div>

                <div class="space-y-2">
                    <h3 class="font-medium text-gray-700 dark:text-gray-300">网格布局</h3>
                    <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
                        <RadioGroup v-model="layoutValue" color="emerald" class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <Radio :value="'horizontal'">水平布局</Radio>
                            <Radio :value="'vertical'">垂直布局</Radio>
                            <Radio :value="'grid'">网格布局</Radio>
                            <Radio :value="'flex'">弹性布局</Radio>
                            <Radio :value="'responsive'">响应式布局</Radio>
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </section>

        <!-- 动态加载选项 -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <span>动态数据</span>
                <span
                    class="ml-2 px-2 py-1 text-xs bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 rounded-md">交互</span>
            </h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div class="space-y-4">
                    <button @click="loadOptions"
                        class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300 flex items-center">
                        <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        {{ loading ? '加载中...' : '加载选项' }}
                    </button>

                    <div v-if="dynamicOptions.length"
                        class="p-4 bg-gray-50 dark:bg-gray-700 rounded-md animate-fade-in">
                        <RadioGroup v-model="dynamicValue" :options="dynamicOptions" color="fuchsia" />
                        <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
                            选中的选项: <span class="font-medium">{{ dynamicValue }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 表单集成示例 -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <span>表单集成</span>
                <span
                    class="ml-2 px-2 py-1 text-xs bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 rounded-md">场景</span>
            </h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <form @submit.prevent="submitForm" class="space-y-6">
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">性别</label>
                        <RadioGroup v-model="formData.gender" color="blue">
                            <Radio :value="'male'">男</Radio>
                            <Radio :value="'female'">女</Radio>
                            <Radio :value="'other'">其他</Radio>
                        </RadioGroup>
                        <p v-if="formErrors.gender" class="mt-1 text-sm text-red-600 dark:text-red-400 animate-pulse">{{
                            formErrors.gender }}</p>
                    </div>

                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">年龄段</label>
                        <RadioGroup v-model="formData.ageGroup" optionType="button" buttonStyle="solid" color="cyan">
                            <Radio :value="'under18'">18岁以下</Radio>
                            <Radio :value="'18to30'">18-30岁</Radio>
                            <Radio :value="'31to45'">31-45岁</Radio>
                            <Radio :value="'above45'">45岁以上</Radio>
                        </RadioGroup>
                        <p v-if="formErrors.ageGroup" class="mt-1 text-sm text-red-600 dark:text-red-400 animate-pulse">
                            {{ formErrors.ageGroup }}</p>
                    </div>

                    <div>
                        <button type="submit"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">
                            提交
                        </button>
                    </div>

                    <div v-if="formSubmitted" class="p-4 bg-green-50 dark:bg-green-900 rounded-md animate-fade-in">
                        <p class="text-sm text-green-800 dark:text-green-200">表单提交成功!</p>
                        <div class="mt-3 text-sm">
                            <p class="text-gray-600 dark:text-gray-400">您选择的性别: <span class="font-medium">{{
                                formData.gender === 'male' ? '男' : formData.gender === 'female' ? '女' : '其他'
                                    }}</span></p>
                            <p class="text-gray-600 dark:text-gray-400">您的年龄段: <span class="font-medium">{{
                                    getAgeGroupText(formData.ageGroup) }}</span></p>
                        </div>
                    </div>
                </form>
            </div>
        </section>

        <!-- 小结与最佳实践 -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                <span>小结与最佳实践</span>
                <span class="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-md">指南</span>
            </h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div class="space-y-4">
                    <div class="space-y-2">
                        <h3 class="font-medium text-gray-700 dark:text-gray-300">何时使用RadioBox</h3>
                        <ul class="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                            <li>当用户需要在多个选项中选择单个状态时</li>
                            <li>选项数量较少（一般不超过5个），且用户需要一目了然地看到所有选项时</li>
                            <li>相比下拉选择框，RadioBox能让用户更直观地对比不同选项</li>
                        </ul>
                    </div>

                    <div class="space-y-2">
                        <h3 class="font-medium text-gray-700 dark:text-gray-300">最佳实践</h3>
                        <ul class="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                            <li>
                                <strong>选项描述要简洁明了</strong>
                                <p class="mt-1">RadioBox的标签文本应简短明确，便于用户快速理解和选择。</p>
                            </li>
                            <li>
                                <strong>默认选项</strong>
                                <p class="mt-1">如果有明确的推荐选项，应将其设为默认选中状态。</p>
                            </li>
                            <li>
                                <strong>布局考虑</strong>
                                <p class="mt-1">选项较多时应考虑使用多行或网格布局；选项较少时可使用水平排列。</p>
                            </li>
                            <li>
                                <strong>按钮样式与普通样式的选择</strong>
                                <p class="mt-1">针对不同的交互场景选择适合的样式：普通RadioBox适合常规表单，按钮样式适合更突出的选择项。</p>
                            </li>
                            <li>
                                <strong>颜色使用</strong>
                                <p class="mt-1">根据界面整体风格选择合适的颜色，保持色彩一致性。</p>
                            </li>
                        </ul>
                    </div>

                    <div class="space-y-2">
                        <h3 class="font-medium text-gray-700 dark:text-gray-300">RadioBox vs Select</h3>
                        <div class="mt-2 border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-r">
                            <p class="text-gray-600 dark:text-gray-400">
                                在选择是使用RadioBox还是Select(下拉选择)时，可以参考以下指引：
                            </p>
                            <ul class="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400">
                                <li>选项少于5个时，优先考虑使用RadioBox</li>
                                <li>选项超过5个时，优先考虑使用Select以节省空间</li>
                                <li>如果需要用户直接比较各选项，使用RadioBox更合适</li>
                                <li>如果界面空间有限，即使选项较少也可以使用Select</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- API文档 -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300">API 参考</h2>
            <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-6">
                <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Radio 属性</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">参数</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">说明</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">类型</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">默认值</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">modelValue(v-model)</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">指定当前是否选中</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">boolean | string | number</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">undefined</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">value</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">根据 value 进行比较，判断是否选中</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">boolean | string | number</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">undefined</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">disabled</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">禁用状态</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">boolean</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">false</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">name</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">input[type="radio"] 的 name 属性</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">string</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">undefined</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">autofocus</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">自动获取焦点</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">boolean</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">false</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">color</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">单选框颜色</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">ColorType</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Radio 事件</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">事件名</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">说明</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">回调参数</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">change</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">选中状态变化时的回调</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Event: Event</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">focus</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">获得焦点时触发</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Event: FocusEvent</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">blur</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">失去焦点时触发</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Event: FocusEvent</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Radio 方法</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">方法名</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">说明</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">focus()</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">使单选框获取焦点</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">blur()</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">使单选框失去焦点</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">RadioGroup 属性</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">参数</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">说明</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">类型</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">默认值</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">modelValue(v-model)</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">用于设置当前选中的值</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">any</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">undefined</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">disabled</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">禁用所有子单选器</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">boolean</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">false</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">name</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">RadioGroup 下所有 input[type="radio"] 的 name 属性</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">string</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">undefined</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">size</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">单选框组尺寸，仅对按钮样式生效</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">large | default | small</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">default</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">optionType</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">用于设置 Radio 的类型</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">default | button</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">default</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">buttonStyle</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">按钮风格样式，仅在 optionType 为 button 时有效</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">outline | solid</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">outline</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">options</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">以配置形式设置子元素</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">string[] | number[] | Array<{ label: string, value: string | number, disabled?: boolean }></td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">[]</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">color</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">单选框颜色</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">ColorType</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">RadioGroup 事件</h3>
                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">事件名</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">说明</th>
                                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">回调参数</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr>
                                    <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">change</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">选项变化时的回调</td>
                                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{ target: { value } }</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="rounded-md bg-blue-50 dark:bg-blue-900/30 p-4">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <h3 class="text-sm font-medium text-blue-800 dark:text-blue-300">颜色类型说明</h3>
                            <div class="mt-2 text-sm text-blue-700 dark:text-blue-400">
                                <p>ColorType 支持以下颜色系列:</p>
                                <ul class="list-disc pl-5 mt-1 space-y-1">
                                    <li>灰色系: slate, gray, zinc, neutral, stone</li>
                                    <li>暖色系: red, orange, amber, yellow</li>
                                    <li>绿色系: lime, green, emerald, teal</li>
                                    <li>蓝色系: cyan, sky, blue, indigo</li>
                                    <li>紫粉色系: violet, purple, fuchsia, pink, rose</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Radio, RadioGroup } from './RadioBox';

// 基础单选框
const basicChecked = ref(false);

// 颜色选择
const colorChecked = ref('blue');

// 禁用状态
const disabledChecked = ref(true);

// 单选框组
const groupValue = ref('apple');
const optionsValue = ref('banana');

const fruitOptions = [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
    { label: '葡萄', value: 'grape', disabled: true },
];

// 按钮样式
const buttonValue = ref('apple');
const solidValue = ref('banana');
const sizeValue = ref('default');

// 布局方式
const layoutValue = ref('horizontal');

// 动态数据
const loading = ref(false);
const dynamicOptions = ref<Array<{ label: string; value: string }>>([]);
const dynamicValue = ref('');

const loadOptions = () => {
    loading.value = true;
    // 模拟异步加载
    setTimeout(() => {
        dynamicOptions.value = [
            { label: '选项一', value: 'option1' },
            { label: '选项二', value: 'option2' },
            { label: '选项三', value: 'option3' },
            { label: '选项四', value: 'option4' },
        ];
        dynamicValue.value = 'option1';
        loading.value = false;
    }, 1000);
};

// 表单集成
const formData = reactive({
    gender: '',
    ageGroup: '',
});

const formErrors = reactive({
    gender: '',
    ageGroup: '',
});

const formSubmitted = ref(false);

const submitForm = () => {
    // 重置错误
    formErrors.gender = '';
    formErrors.ageGroup = '';

    // 简单验证
    let valid = true;

    if (!formData.gender) {
        formErrors.gender = '请选择性别';
        valid = false;
    }

    if (!formData.ageGroup) {
        formErrors.ageGroup = '请选择年龄段';
        valid = false;
    }

    if (valid) {
        formSubmitted.value = true;

        // 模拟表单提交后重置
        setTimeout(() => {
            formSubmitted.value = false;
        }, 3000);
    }
};

const getAgeGroupText = (value: string) => {
    const map: Record<string, string> = {
        'under18': '18岁以下',
        '18to30': '18-30岁',
        '31to45': '31-45岁',
        'above45': '45岁以上',
    };
    return map[value] || value;
};
</script>

<style scoped>
/* 添加淡入动画 */
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

.animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
}

/* 添加脉动动画 */
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.7;
    }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>