<template>
    <div class="w-full max-w-4xl mx-auto p-6 space-y-8">
        <section class="space-y-4">
            <h2 class="text-xl font-semibold">Basic Usage</h2>
            <div class="bg-white p-4 rounded-lg shadow">
                <Pagination v-model:current="currentPage1" :total="100" @change="handleChange" />
                <div class="mt-2 text-sm text-gray-500">
                    Current Page: {{ currentPage1 }}
                </div>
            </div>
        </section>

        <section class="space-y-4">
            <h2 class="text-xl font-semibold">Custom Page Size</h2>
            <div class="bg-white p-4 rounded-lg shadow">
                <Pagination v-model:current="currentPage2" :total="200" :page-size="10" @change="handleChange" />
                <div class="mt-2 text-sm text-gray-500">
                    Items per page: 10, Total pages: 20
                </div>
            </div>
        </section>

        <section class="space-y-4">
            <h2 class="text-xl font-semibold">With Quick Jumper</h2>
            <div class="bg-white p-4 rounded-lg shadow">
                <Pagination v-model:current="currentPage3" :total="500" :show-quick-jumper="true"
                    @change="handleChange" />
                <div class="mt-2 text-sm text-gray-500">
                    Quick jump to any page within range
                </div>
            </div>
        </section>

        <section class="space-y-4">
            <h2 class="text-xl font-semibold">Disabled State</h2>
            <div class="bg-white p-4 rounded-lg shadow">
                <Pagination v-model:current="currentPage4" :total="100" disabled />
                <div class="mt-2 text-sm text-gray-500">
                    All interactions are disabled
                </div>
            </div>
        </section>

        <section class="space-y-4">
            <h2 class="text-xl font-semibold">Theme Colors</h2>
            <div class="bg-white p-4 rounded-lg shadow space-y-4">
                <div v-for="theme in themes" :key="theme" class="space-y-2">
                    <h3 class="text-sm font-medium capitalize">{{ theme }} Theme</h3>
                    <Pagination
                        v-model:current="themePages[theme].value"
                        :total="100"
                        :theme="theme"
                        @change="handleChange"
                    />
                </div>
            </div>
        </section>

        <section class="space-y-4">
            <h2 class="text-xl font-semibold">Theme with Quick Jumper</h2>
            <div class="bg-white p-4 rounded-lg shadow">
                <Pagination
                    v-model:current="currentPage5"
                    :total="500"
                    theme="success"
                    :show-quick-jumper="true"
                    @change="handleChange"
                />
                <div class="mt-2 text-sm text-gray-500">
                    Success theme with quick jumper
                </div>
            </div>
        </section>

        <section class="space-y-4">
            <h2 class="text-xl font-semibold">Code Example</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
                <pre class="text-sm text-gray-700">
import { Pagination } from '@your-library/components';

// Basic usage
&lt;Pagination
  v-model:current="currentPage"
  :total="100"
  @change="(page) => console.log('Page changed:', page)"
/&gt;

// With all options
&lt;Pagination
  v-model:current="currentPage"
  :total="500"
  :page-size="10"
  :show-quick-jumper="true"
  :disabled="false"
  @change="handlePageChange"
/&gt;

// Theme usage
&lt;Pagination
  v-model:current="currentPage"
  :total="100"
  theme="success"
  @change="handleChange"
/&gt;

// Available themes: 'primary', 'success', 'warning', 'danger', 'info'
&lt;Pagination
  v-model:current="currentPage"
  :total="500"
  theme="warning"
  :show-quick-jumper="true"
  @change="handleChange"
/&gt;</pre>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Pagination from '../../components/Pagination';

const currentPage1 = ref(1);
const currentPage2 = ref(1);
const currentPage3 = ref(1);
const currentPage4 = ref(1);
const currentPage5 = ref(1);

const themes = ['primary', 'success', 'warning', 'danger', 'info'] as const;
const themePages = {
    primary: ref(1),
    success: ref(1),
    warning: ref(1),
    danger: ref(1),
    info: ref(1)
};

const handleChange = (page: number) => {
    console.log('Page changed to:', page);
};
</script>

<style scoped>
.space-y-8>*+* {
    margin-top: 2rem;
}

.space-y-4>*+* {
    margin-top: 1rem;
}
</style>
