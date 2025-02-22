<template>
  <div class="space-y-8 p-6">
    <!-- 基础用法 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础用法</h3>
      <Pagination v-model:current="basicPage" :total="100" />
    </section>

    <!-- 快速跳转 -->
    <section>
      <h3 class="text-lg font-medium mb-4">快速跳转</h3>
      <Pagination
        v-model:current="quickJumpPage"
        :total="500"
        :show-quick-jumper="true"
        @change="handleQuickJumpChange"
      />
      <div class="mt-2 text-sm text-gray-500">
        当前页码: {{ quickJumpPage }}
      </div>
    </section>

    <!-- 自定义分页大小 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义分页大小</h3>
      <div class="space-y-4">
        <Pagination
          v-model:current="customSizePage"
          :total="total"
          :page-size="pageSize"
          @change="handleCustomSizeChange"
        />
        <div class="flex items-center gap-2">
          <span>每页显示：</span>
          <select
            v-model="pageSize"
            class="border rounded px-2 py-1 text-sm"
            @change="handlePageSizeChange"
          >
            <option :value="10">10 条/页</option>
            <option :value="20">20 条/页</option>
            <option :value="50">50 条/页</option>
          </select>
          <span class="ml-4">总条数：{{ total }}</span>
        </div>
      </div>
    </section>

    <!-- 加载状态 -->
    <section>
      <h3 class="text-lg font-medium mb-4">加载状态</h3>
      <div class="space-y-4">
        <Pagination
          v-model:current="loadingPage"
          :total="200"
          :disabled="loading"
          @change="handleLoadingChange"
        />
        <div class="flex items-center gap-2">
          <span class="text-sm" :class="{ 'text-blue-500': loading }">
            {{ loading ? "加载中..." : "加载完成" }}
          </span>
        </div>
      </div>
    </section>

    <!-- 表格集成示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">表格集成</h3>
      <div class="space-y-4">
        <div class="border rounded">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">名称</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="item in currentTableData" :key="item.id">
                <td class="px-6 py-4 whitespace-nowrap">{{ item.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ item.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    :class="item.status === '活跃' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'"
                  >
                    {{ item.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination
          v-model:current="tablePage"
          :total="tableData.length"
          :page-size="tablePageSize"
          @change="handleTablePageChange"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Pagination from "./index.ts";

// 基础用法
const basicPage = ref(1);

// 快速跳转
const quickJumpPage = ref(1);
const handleQuickJumpChange = (page: number) => {
  console.log("Quick jump to page:", page);
};

// 自定义分页大小
const customSizePage = ref(1);
const total = ref(200);
const pageSize = ref(20);
const handleCustomSizeChange = (page: number) => {
  console.log("Page changed:", page, "Page size:", pageSize.value);
};
const handlePageSizeChange = () => {
  customSizePage.value = 1;
};

// 加载状态
const loadingPage = ref(1);
const loading = ref(false);
const handleLoadingChange = async (page: number) => {
  loading.value = true;
  await new Promise(resolve => setTimeout(resolve, 1000));
  loading.value = false;
  console.log("Loaded page:", page);
};

// 表格示例
const tablePage = ref(1);
const tablePageSize = ref(5);
const tableData = ref([
  { id: 1, name: "项目 A", status: "活跃" },
  { id: 2, name: "项目 B", status: "停用" },
  { id: 3, name: "项目 C", status: "活跃" },
  { id: 4, name: "项目 D", status: "活跃" },
  { id: 5, name: "项目 E", status: "停用" },
  { id: 6, name: "项目 F", status: "活跃" },
  { id: 7, name: "项目 G", status: "停用" },
  { id: 8, name: "项目 H", status: "活跃" },
  { id: 9, name: "项目 I", status: "活跃" },
  { id: 10, name: "项目 J", status: "停用" },
]);

const currentTableData = computed(() => {
  const start = (tablePage.value - 1) * tablePageSize.value;
  const end = start + tablePageSize.value;
  return tableData.value.slice(start, end);
});

const handleTablePageChange = (page: number) => {
  console.log("Table page changed:", page);
};
</script>
