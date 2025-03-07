<template>
  <div class="p-6 space-y-10">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-bold mb-4">基础用法</h2>
      <Tabs v-model="basicTab" :tabs="basicTabs">
        <template #first>这是第一个标签的内容区域</template>
        <template #second>这是第二个标签的内容区域</template>
        <template #third>这是第三个标签的内容区域</template>
      </Tabs>
    </section>

    <!-- 自定义标签内容 -->
    <section>
      <h2 class="text-lg font-bold mb-4">自定义标签内容</h2>
      <Tabs v-model="customTab" :tabs="customTabs">
        <template #tab="{ tab }">
          <div class="flex items-center gap-2">
            <i :class="tab.icon" class="w-4 h-4"></i>
            {{ tab.label }}
          </div>
        </template>
        <template #dashboard>
          <div class="p-4 bg-gray-50 rounded-lg">
            仪表盘内容
          </div>
        </template>
        <template #profile>
          <div class="p-4 bg-gray-50 rounded-lg">
            个人资料内容
          </div>
        </template>
        <template #settings>
          <div class="p-4 bg-gray-50 rounded-lg">
            设置内容
          </div>
        </template>
      </Tabs>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-bold mb-4">禁用状态</h2>
      <Tabs v-model="disabledTab" :tabs="disabledTabs">
        <template #tab1>可用标签内容1</template>
        <template #tab2>可用标签内容2</template>
        <template #tab3>禁用标签内容将不可见</template>
      </Tabs>
    </section>

    <!-- 默认标签 -->
    <section>
      <h2 class="text-lg font-bold mb-4">默认标签</h2>
      <Tabs :tabs="defaultTabs" default-tab="tab2">
        <template #tab1>标签1内容</template>
        <template #tab2>默认显示的标签2内容</template>
        <template #tab3>标签3内容</template>
      </Tabs>
    </section>

    <!-- 自定义主题颜色 -->
    <section>
      <h2 class="text-lg font-bold mb-4">自定义主题颜色</h2>
      
      <div class="space-y-6">
        <!-- 红色主题 -->
        <Tabs 
          v-model="themeTab1" 
          :tabs="themeTabs" 
          active-color="red"
          hover-color="red"
        >
          <template #tab1>红色主题内容1</template>
          <template #tab2>红色主题内容2</template>
        </Tabs>

        <!-- 绿色主题 -->
        <Tabs 
          v-model="themeTab2" 
          :tabs="themeTabs" 
          active-color="emerald"
          hover-color="emerald"
        >
          <template #tab1>绿色主题内容1</template>
          <template #tab2>绿色主题内容2</template>
        </Tabs>

        <!-- 紫色主题 -->
        <Tabs 
          v-model="themeTab3" 
          :tabs="themeTabs" 
          active-color="purple"
          hover-color="purple"
        >
          <template #tab1>紫色主题内容1</template>
          <template #tab2>紫色主题内容2</template>
        </Tabs>
      </div>
    </section>

    <!-- 主题样式 -->
    <section>
      <h2 class="text-lg font-bold mb-4">主题样式</h2>
      
      <div class="space-y-6">
        <!-- 主题: Primary -->
        <div>
          <h3 class="text-base font-medium mb-2">Primary</h3>
          <Tabs 
            v-model="themeTab1" 
            :tabs="themeTabs" 
            :theme="TabTheme.Primary"
          >
            <template #tab1>蓝色主题内容</template>
            <template #tab2>蓝色主题内容</template>
          </Tabs>
        </div>

        <!-- 主题: Success -->
        <div>
          <h3 class="text-base font-medium mb-2">Success</h3>
          <Tabs 
            v-model="themeTab2" 
            :tabs="themeTabs" 
            :theme="TabTheme.Success"
          >
            <template #tab1>绿色主题内容</template>
            <template #tab2>绿色主题内容</template>
          </Tabs>
        </div>

        <!-- 主题: Danger -->
        <div>
          <h3 class="text-base font-medium mb-2">Danger</h3>
          <Tabs 
            v-model="themeTab3" 
            :tabs="themeTabs" 
            :theme="TabTheme.Danger"
          >
            <template #tab1>红色主题内容</template>
            <template #tab2>红色主题内容</template>
          </Tabs>
        </div>

        <!-- 主题: Warning -->
        <div>
          <h3 class="text-base font-medium mb-2">Warning</h3>
          <Tabs 
            v-model="themeTab4" 
            :tabs="themeTabs" 
            :theme="TabTheme.Warning"
          >
            <template #tab1>黄色主题内容</template>
            <template #tab2>黄色主题内容</template>
          </Tabs>
        </div>

        <!-- 主题: Info -->
        <div>
          <h3 class="text-base font-medium mb-2">Info (默认)</h3>
          <Tabs 
            v-model="themeTab5" 
            :tabs="themeTabs" 
            :theme="TabTheme.Info"
          >
            <template #tab1>靛蓝主题内容</template>
            <template #tab2>靛蓝主题内容</template>
          </Tabs>
        </div>

        <!-- 主题: Secondary -->
        <div>
          <h3 class="text-base font-medium mb-2">Secondary</h3>
          <Tabs 
            v-model="themeTab6" 
            :tabs="themeTabs" 
            :theme="TabTheme.Secondary"
          >
            <template #tab1>灰色主题内容</template>
            <template #tab2>灰色主题内容</template>
          </Tabs>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Tabs, TabTheme } from '../../components/Tabs';

// 基础用法数据
const basicTab = ref('first');
const basicTabs = ['first', 'second', 'third'];

// 自定义标签数据
const customTab = ref('dashboard');
const customTabs = [
  { name: 'dashboard', label: '仪表盘', icon: 'icon-[tabler--dashboard]' },
  { name: 'profile', label: '个人资料', icon: 'icon-[tabler--user-cog]' },
  { name: 'settings', label: '设置', icon: 'icon-[tabler--settings]' },
];

// 禁用状态数据
const disabledTab = ref('tab1');
const disabledTabs = [
  { name: 'tab1', content: '标签1' },
  { name: 'tab2', content: '标签2' },
  { name: 'tab3', content: '标签3', disabled: true },
];

// 默认标签数据
const defaultTabs = ['tab1', 'tab2', 'tab3'];

// 主题展示数据
const themeTab1 = ref('tab1');
const themeTab2 = ref('tab1');
const themeTab3 = ref('tab1');
const themeTab4 = ref('tab1');
const themeTab5 = ref('tab1');
const themeTab6 = ref('tab1');
const themeTabs = ['tab1', 'tab2'];
</script>
