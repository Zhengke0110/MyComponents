<template>
  <div class="p-8">
    <!-- 标题 -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold">Checkbox 复选框</h1>
      <p class="mt-2 text-gray-500">用于在多个选项中进行多选。</p>
    </div>

    <DemoBlock title="基础用法" description="最基本的复选框用法。">
      <template #default>
        <div class="space-y-4">
          <CheckBox v-model="basicChecked" id="basic1" label="基础复选框" />
          <CheckBox v-model="basicWithDesc" id="basic2" label="带描述的复选框" description="这是一段描述文本，用于解释该选项的更多信息" />
        </div>
      </template>
      <template #code>
        {{ `
        <CheckBox v-model="basicChecked" label="基础复选框" />
        <CheckBox v-model="basicWithDesc" label="带描述的复选框" description="这是一段描述文本，用于解释该选项的更多信息" />`}}
      </template>
    </DemoBlock>

    <DemoBlock title="不同尺寸" description="提供了三种尺寸的复选框。">
      <template #default>
        <div class="flex flex-wrap items-center gap-8">
          <CheckBox v-model="sizes.sm" id="size-sm" label="小尺寸" size="sm" />
          <CheckBox v-model="sizes.md" id="size-md" label="中尺寸" size="md" />
          <CheckBox v-model="sizes.lg" id="size-lg" label="大尺寸" size="lg" />
        </div>
      </template>
      <template #code>
        {{ `
        <CheckBox v-model="sizes.sm" id="size-sm" label="小尺寸" size="sm" />
        <CheckBox v-model="sizes.md" id="size-md" label="中尺寸" size="md" />
        <CheckBox v-model="sizes.lg" id="size-lg" label="大尺寸" size="lg" />`}}
      </template>
    </DemoBlock>

    <DemoBlock title="不同颜色" description="提供了多种颜色的复选框。">
      <template #default>
        <div class="flex flex-wrap gap-4">
          <CheckBox v-for="color in colors" :key="color" v-model="colorStates[color]" :id="`color-${color}`"
            :label="color" :color="color" />
        </div>
      </template>
      <template #code>
        {{
          `
        <CheckBox v-for="color in colors" :key="color" v-model="colorStates[color]" :label="color" :color="color" />
        `
        }}
      </template>
    </DemoBlock>

    <DemoBlock title="布局方式" description="提供了水平和垂直两种布局方式。">
      <template #default>
        <div class="space-y-4">
          <CheckBox v-model="layouts.horizontal" id="layout-horizontal" label="水平布局" description="这是水平布局的描述文本"
            layout="horizontal" />
          <CheckBox v-model="layouts.vertical" id="layout-vertical" label="垂直布局" description="这是垂直布局的描述文本"
            layout="vertical" />
        </div>
      </template>
      <template #code>
        {{ `
        <CheckBox v-model="layouts.horizontal" id="layout-horizontal" label="水平布局" description="这是水平布局的描述文本"
          layout="horizontal" />
        <CheckBox v-model="layouts.vertical" id="layout-vertical" label="垂直布局" description="这是垂直布局的描述文本"
          layout="vertical" />
        `}}
      </template>
    </DemoBlock>

    <DemoBlock title="禁用状态" description="提供了禁用状态的复选框。">
      <template #default>
        <div class="space-y-4">
          <CheckBox v-model="disabled.unchecked" id="disabled-unchecked" label="禁用未选中" disabled />
          <CheckBox v-model="disabled.checked" id="disabled-checked" label="禁用已选中" disabled />
        </div>
      </template>
      <template #code>
        {{ `
        <CheckBox v-model="disabled.unchecked" id="disabled-unchecked" label="禁用未选中" disabled />
        <CheckBox v-model="disabled.checked" id="disabled-checked" label="禁用已选中" disabled />
        `}}
      </template>
    </DemoBlock>

    <DemoBlock title="不确定状态示例" description="提供了不确定状态的复选框。">
      <template #default>
        <div class="space-y-4">
          <CheckBox v-model="indeterminate.parent" id="parent" label="全选" :indeterminate="indeterminate.state"
            @change="onParentChange" />
          <div class="ml-6 space-y-2">
            <CheckBox v-for="(item, index) in indeterminate.children" :key="index"
              v-model="indeterminate.children[index]" :id="`child-${index}`" :label="`选项 ${index + 1}`"
              @change="onChildChange" />
          </div>
        </div>
      </template>
      <template #code>
        {{
          `

        `
        }}
      </template>
    </DemoBlock>

    <DemoBlock title="组合使用" description="提供了组合使用的复选框。">
      <template #default>
        <div class="flex flex-wrap gap-4">
          <CheckBox v-for="(hobby, index) in hobbies" :key="index" v-model="selectedHobbies[index]"
            :id="`hobby-${index}`" :label="hobby" color="blue" inline />
        </div>
        <p class="mt-2 text-sm text-gray-500">
          已选择: {{ selectedHobbiesText }}
        </p>
      </template>
      <template #code>
        {{
          `

        `
        }}
      </template>
    </DemoBlock>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import CheckBox from "../../components/CheckBox";
import { DemoBlock } from "@/components/DemoBlock";

// 基础用法
const basicChecked = ref(true);
const basicWithDesc = ref(false);

// 尺寸
const sizes = ref({
  sm: true,
  md: true,
  lg: true,
});

// 颜色
const colors = ["red", "green", "blue", "purple", "indigo"] as const;
const colorStates = ref<{ [key: string]: boolean }>(
  colors.reduce((acc, color) => ({ ...acc, [color]: true }), {}),
);

// 布局
const layouts = ref({
  horizontal: true,
  vertical: false,
});

// 禁用状态
const disabled = ref({
  checked: true,
  unchecked: false,
});

// 不确定状态
const indeterminate = ref({
  parent: false,
  state: false,
  children: [false, false, false],
});

const onParentChange = () => {
  indeterminate.value.children = indeterminate.value.children.map(
    () => indeterminate.value.parent,
  );
  indeterminate.value.state = false;
};

const onChildChange = () => {
  const checkedCount = indeterminate.value.children.filter(Boolean).length;
  indeterminate.value.parent =
    checkedCount === indeterminate.value.children.length;
  indeterminate.value.state =
    checkedCount > 0 && checkedCount < indeterminate.value.children.length;
};

// 组合使用
const hobbies = ["阅读", "游戏", "音乐", "运动", "电影", "旅行"];
const selectedHobbies = ref(Array(hobbies.length).fill(false));
const selectedHobbiesText = computed(() => {
  return (
    hobbies.filter((_, index) => selectedHobbies.value[index]).join(", ") ||
    "暂无选择"
  );
});
</script>
