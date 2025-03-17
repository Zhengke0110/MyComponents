<template>
    <div class="p-6 transition-all duration-300 min-h-screen bg-gray-50 dark:bg-gray-800">
        <!-- 页面标题 -->
        <div class="mb-8 text-center">
            <h1 class="text-3xl font-bold text-gray-800 dark:text-white transition-colors duration-300">Progress 进度条组件
            </h1>
            <p class="mt-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">多样化的进度指示器，支持多种类型和状态</p>



            <!-- 进度调整控制器 -->
            <div
                class="mt-6 max-w-lg mx-auto bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-all duration-300">
                <div class="flex items-center">
                    <span class="text-gray-700 dark:text-gray-200 mr-4 transition-colors duration-300">调整进度值：</span>
                    <input type="range" v-model="currentPercent" min="0" max="100" step="1"
                        class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer" />
                    <span
                        class="ml-4 w-12 text-center text-gray-700 dark:text-gray-200 transition-colors duration-300">{{
                            currentPercent }}%</span>
                </div>
            </div>
        </div>

        <!-- 基础线性进度条 -->
        <section
            class="mb-12 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-300 transform hover:shadow-lg">
            <h2
                class="text-xl font-semibold mb-4 text-gray-800 dark:text-white border-l-4 border-blue-500 pl-3 transition-colors duration-300">
                基础线性进度条</h2>

            <div class="space-y-8">
                <!-- 基础进度条 -->
                <div class="flex flex-col gap-2">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">基础进度条：</div>
                    <Progress :percent="currentPercent" />
                </div>

                <!-- 不同状态的进度条 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div class="flex flex-col gap-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                        <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300 font-medium">成功状态：
                        </div>
                        <Progress :percent="100" status="success" />
                        <div class="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <span class="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                            <span>自动显示成功图标</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                        <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300 font-medium">失败状态：
                        </div>
                        <Progress :percent="70" status="exception" />
                        <div class="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <span class="inline-block w-3 h-3 rounded-full bg-red-500"></span>
                            <span>自动显示错误图标</span>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col gap-2">
                        <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">活跃状态（带动画）：</div>
                        <Progress :percent="currentPercent" status="active" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">不显示进度信息：</div>
                        <Progress :percent="currentPercent" :showInfo="false" />
                    </div>
                </div>

                <!-- 添加状态图标对比展示 -->
                <div class="flex flex-col gap-2 mt-6">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">状态图标尺寸对比：</div>
                    <div class="flex flex-wrap gap-4 items-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                        <div class="flex flex-col items-center gap-1">
                            <span class="text-sm">默认尺寸</span>
                            <Progress :percent="100" status="success" :showInfo="true" />
                        </div>
                        <div class="flex flex-col items-center gap-1">
                            <span class="text-sm">小型尺寸</span>
                            <Progress :percent="100" status="success" :showInfo="true" size="small" />
                        </div>
                        <div class="flex flex-col items-center gap-1">
                            <span class="text-sm">异常状态</span>
                            <Progress :percent="70" status="exception" :showInfo="true" />
                        </div>
                    </div>
                </div>

                <!-- 渐变颜色进度条 -->
                <div class="flex flex-col gap-2">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">渐变色进度条：</div>
                    <Progress :percent="currentPercent" :strokeColor="{
                        from: '#108ee9',
                        to: '#87d068',
                        direction: 'to right'
                    }" />
                </div>

                <!-- 自定义颜色进度条 -->
                <div class="flex flex-col gap-2">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">自定义颜色进度条：</div>
                    <Progress :percent="currentPercent" strokeColor="#ff4d4f" />
                </div>

                <!-- 成功分段展示 -->
                <div class="flex flex-col gap-2">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">带成功分段进度条：</div>
                    <Progress :percent="currentPercent" :success="{ percent: Math.min(currentPercent * 0.6, 100) }" />
                </div>
            </div>
        </section>

        <!-- 小型进度条和步骤进度条 -->
        <section
            class="mb-12 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-300 transform hover:shadow-lg">
            <h2
                class="text-xl font-semibold mb-4 text-gray-800 dark:text-white border-l-4 border-blue-500 pl-3 transition-colors duration-300">
                小型进度条和步骤进度条</h2>

            <div class="space-y-8">
                <!-- 小型进度条 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="flex flex-col gap-2">
                        <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">小型进度条：</div>
                        <Progress :percent="currentPercent" size="small" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">小型活跃进度条：</div>
                        <Progress :percent="currentPercent" size="small" status="active" />
                    </div>
                </div>

                <!-- 步骤进度条 -->
                <div class="flex flex-col gap-2 mt-6">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">步骤进度条（5步）：</div>
                    <div class="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                        <Progress :percent="currentPercent" :steps="5" class="mb-6" />

                        <div class="flex items-center gap-2 mt-2">
                            <button @click="currentPercent = Math.max(0, currentPercent - 20)"
                                class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-200"
                                :disabled="currentPercent <= 0">
                                减少
                            </button>
                            <div class="text-gray-700 dark:text-gray-300">当前: {{ currentPercent }}%</div>
                            <button @click="currentPercent = Math.min(100, currentPercent + 20)"
                                class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-200"
                                :disabled="currentPercent >= 100">
                                增加
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 步骤进度条-自定义颜色 -->
                <div class="flex flex-col gap-2 mt-6">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">步骤进度条（彩色）：</div>
                    <div class="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                        <Progress :percent="currentPercent" :steps="5"
                            :strokeColor="['#ff4d4f', '#faad14', '#1890ff', '#52c41a', '#722ed1']" />
                    </div>
                </div>

                <!-- 方形线帽 -->
                <div class="flex flex-col gap-2">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">方形线帽：</div>
                    <Progress :percent="currentPercent" strokeLinecap="square" />
                </div>
            </div>
        </section>

        <!-- 圆形进度条 -->
        <section
            class="mb-12 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-300 transform hover:shadow-lg">
            <h2
                class="text-xl font-semibold mb-4 text-gray-800 dark:text-white border-l-4 border-blue-500 pl-3 transition-colors duration-300">
                圆形进度条
            </h2>

            <div class="flex flex-wrap gap-8 justify-center py-4">
                <!-- 基础圆形进度条 -->
                <div
                    class="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg transition-all duration-300">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">基础圆形进度条</div>
                    <Progress :percent="currentPercent" type="circle" />
                </div>

                <!-- 小型圆形进度条 -->
                <div
                    class="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg transition-all duration-300">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">小型圆形进度条</div>
                    <Progress :percent="currentPercent" type="circle" size="small" />
                </div>

                <!-- 成功状态 -->
                <div
                    class="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg transition-all duration-300">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">成功状态</div>
                    <Progress :percent="100" type="circle" status="success" />
                </div>

                <!-- 失败状态 -->
                <div
                    class="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg transition-all duration-300">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">失败状态</div>
                    <Progress :percent="70" type="circle" status="exception" />
                </div>

                <!-- 自定义颜色 -->
                <div
                    class="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg transition-all duration-300">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">自定义颜色</div>
                    <Progress :percent="currentPercent" type="circle" strokeColor="#722ed1" />
                </div>
            </div>

            <!-- 自定义格式 -->
            <div class="mt-8 flex flex-col items-center">
                <div class="text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">自定义格式：</div>
                <Progress :percent="currentPercent" type="circle" :format="percent => `${percent}天`" />
            </div>
        </section>

        <!-- 仪表盘进度条 -->
        <section
            class="mb-12 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-300 transform hover:shadow-lg">
            <h2
                class="text-xl font-semibold mb-4 text-gray-800 dark:text-white border-l-4 border-blue-500 pl-3 transition-colors duration-300">
                仪表盘进度条
            </h2>

            <div class="flex flex-wrap gap-8 justify-center py-4">
                <!-- 基础仪表盘 -->
                <div
                    class="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg transition-all duration-300">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">基础仪表盘</div>
                    <Progress :percent="currentPercent" type="dashboard" />
                </div>

                <!-- 不同缺口位置 -->
                <div
                    class="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg transition-all duration-300">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">顶部缺口</div>
                    <Progress :percent="currentPercent" type="dashboard" gapPosition="top" />
                </div>

                <div
                    class="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg transition-all duration-300">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">左侧缺口</div>
                    <Progress :percent="currentPercent" type="dashboard" gapPosition="left" />
                </div>

                <div
                    class="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg transition-all duration-300">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">右侧缺口</div>
                    <Progress :percent="currentPercent" type="dashboard" gapPosition="right" />
                </div>

                <!-- 自定义缺口角度 -->
                <div
                    class="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-600 rounded-lg transition-all duration-300">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">自定义缺口角度（120°）</div>
                    <Progress :percent="currentPercent" type="dashboard" :gapDegree="120" />
                </div>
            </div>
        </section>

        <!-- 动画效果展示 -->
        <section
            class="mb-12 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-300 transform hover:shadow-lg">
            <h2
                class="text-xl font-semibold mb-4 text-gray-800 dark:text-white border-l-4 border-blue-500 pl-3 transition-colors duration-300">
                动画效果展示</h2>

            <!-- 进度动画展示 -->
            <div class="space-y-8">
                <div class="flex flex-col gap-2">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">进度动画：</div>
                    <button @click="startProgressAnimation"
                        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300 max-w-xs mx-auto">
                        启动动画
                    </button>
                    <Progress :percent="animatedPercent" status="active" />
                </div>

                <div class="flex flex-col gap-2">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">圆形进度动画：</div>
                    <div class="flex justify-center">
                        <Progress :percent="animatedPercent" type="circle" />
                    </div>
                </div>

                <!-- 脉冲动画效果 -->
                <div class="flex flex-col gap-2">
                    <div class="text-gray-700 dark:text-gray-300 transition-colors duration-300">脉冲动画效果：</div>
                    <div class="relative">
                        <Progress :percent="currentPercent" :showInfo="false" />
                        <div class="absolute top-0 left-0 bottom-0 animate-pulse bg-blue-300 dark:bg-blue-700 opacity-50 rounded-full transition-all duration-300"
                            :style="{ width: `${currentPercent}%` }"></div>
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
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">format</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(percent: number,
                                    successPercent?: number) => string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">(percent) => `${percent}%`</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">格式化函数，用于自定义显示文本</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">percent</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">0</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">进度百分比值</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">showInfo</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">boolean</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">true</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">是否显示进度信息</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">status</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'success' | 'exception' |
                                    'normal' | 'active'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'normal'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">进度条状态</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">strokeColor</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string | string[] | { from:
                                    string; to: string; direction: string }</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">undefined</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">进度条颜色，支持渐变色和多色</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">strokeLinecap</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'round' | 'butt' | 'square'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'round'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">线条末端形状</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">success</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">{ percent?: number; strokeColor?:
                                    string }</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">{}</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">成功分段的配置</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">type</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'line' | 'circle' | 'dashboard'
                                </td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'line'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">进度条类型</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">size</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number | [number, number] |
                                    'small' | 'default'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'default'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">进度条大小</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">trailColor</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">undefined</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">轨道颜色</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">title</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">string</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">''</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">鼠标悬停提示文本</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">线形进度条特有属性</h3>
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
                        <tbody>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">steps</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">0</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">步骤条数量，当为0时不显示步骤</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 class="mb-4 text-lg font-medium text-gray-900 dark:text-white">环形/仪表盘进度条特有属性</h3>
                <div class="overflow-x-auto">
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
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">strokeWidth</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">6</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">环形进度条线的宽度</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">gapDegree</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">number</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">75</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">仪表盘进度条缺口角度，可取值 0 ~ 360</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 font-medium text-gray-900 dark:text-white">gapPosition</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'top' | 'bottom' | 'left' |
                                    'right'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">'bottom'</td>
                                <td class="px-4 py-2 text-gray-700 dark:text-gray-300">仪表盘进度条缺口位置</td>
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
                        Progress 进度条是一个灵活多样的组件，用于展示操作的当前进度，支持多种类型和配置选项。
                        以下是一些使用建议：
                    </p>

                    <ul class="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                        <li>根据场景选择合适的进度条类型：
                            <ul class="ml-4 mt-1 list-circle">
                                <li>常规操作进度展示使用线性进度条 <code
                                        class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">type="line"</code>
                                </li>
                                <li>整体完成度展示使用环形进度条 <code
                                        class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">type="circle"</code>
                                </li>
                                <li>仪表盘进度条 <code
                                        class="rounded bg-gray-100 px-1 py-0.5 font-mono dark:bg-gray-800">type="dashboard"</code>
                                    适合表示限额使用情况</li>
                            </ul>
                        </li>
                        <li>使用不同的状态表示进度的完成情况：
                            <div class="flex flex-wrap gap-3 mt-1">
                                <Progress :percent="30" status="normal" :showInfo="false" class="w-24" />
                                <Progress :percent="70" status="active" :showInfo="false" class="w-24" />
                                <Progress :percent="100" status="success" :showInfo="false" class="w-24" />
                                <Progress :percent="50" status="exception" :showInfo="false" class="w-24" />
                            </div>
                        </li>
                        <li>对于多阶段任务，可以使用步骤进度条：
                            <div class="mt-1">
                                <Progress :percent="60" :steps="5" class="max-w-md" />
                            </div>
                        </li>
                        <li>对于需要分段展示的情况，可以使用success属性：
                            <div class="mt-1">
                                <Progress :percent="80" :success="{ percent: 30 }" class="max-w-md" />
                            </div>
                        </li>
                        <li>可以使用自定义颜色或渐变色让进度条更具视觉吸引力：
                            <div class="flex flex-col gap-2 mt-1 max-w-md">
                                <Progress :percent="40" strokeColor="#722ed1" />
                                <Progress :percent="70"
                                    :strokeColor="{ from: '#108ee9', to: '#87d068', direction: 'to right' }" />
                            </div>
                        </li>
                    </ul>

                    <div
                        class="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
                        <h4 class="mb-2 flex items-center text-blue-800 dark:text-blue-300">
                            <span class="icon-[material-symbols--info-outline-rounded] mr-2 h-5 w-5"></span>
                            暗色模式提示
                        </h4>
                        <p class="text-sm text-blue-700 dark:text-blue-300">
                            Progress 组件已内置支持暗色模式，无需额外配置。组件会根据页面的暗色模式状态自动调整颜色和样式。
                            添加 <code class="rounded bg-blue-100 px-1 py-0.5 font-mono dark:bg-blue-800/60">.dark</code>
                            类到父元素即可激活暗色模式。
                        </p>
                    </div>

                    <p class="text-gray-700 dark:text-gray-300">
                        进度条组件在页面中能提供直观的反馈，有助于提升用户体验。对于长时间运行的操作，建议使用带动画的活跃状态，以表明操作仍在进行中。
                        在进度不确定的情况下，可以考虑使用loading组件替代进度条。
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Progress from './Progress';
import { ref, onMounted } from 'vue';

// 当前进度值
const currentPercent = ref(40);
// 动画进度值
const animatedPercent = ref(0);


// 进度动画效果
const startProgressAnimation = () => {
    animatedPercent.value = 0;

    const interval = setInterval(() => {
        if (animatedPercent.value >= 100) {
            clearInterval(interval);
        } else {
            animatedPercent.value += 1;
        }
    }, 30);
};

// 初始执行一次动画
onMounted(() => {
    setTimeout(() => {
        startProgressAnimation();
    }, 500);
});
</script>

<style scoped>
/* 从style.css导入核心样式 */
@import './style.css';

/* 附加动画效果 */
@keyframes pulse-bg {

    0%,
    100% {
        opacity: 0.3;
    }

    50% {
        opacity: 0.7;
    }
}

.animate-pulse {
    animation: pulse-bg 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* 平滑过渡效果 */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.3s;
}
</style>