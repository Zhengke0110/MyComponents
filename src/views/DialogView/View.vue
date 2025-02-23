<template>
  <div class="p-8 space-y-4">
    <h1 class="text-2xl font-bold mb-6">Dialog Examples</h1>

    <!-- Basic Dialog -->
    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Basic Dialog</h2>
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded-md"
        @click="basicVisible = true"
      >
        Open Basic Dialog
      </button>
      <Dialog
        v-model="basicVisible"
        title="Basic Dialog"
        :confirmHandler="handleBasicConfirm"
        :cancelHandler="handleBasicCancel"
      >
        This is a basic dialog with default settings.
      </Dialog>
    </div>

    <!-- Custom Buttons Dialog -->
    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Custom Buttons Dialog</h2>
      <button
        class="px-4 py-2 bg-green-500 text-white rounded-md"
        @click="customVisible = true"
      >
        Open Custom Dialog
      </button>
      <Dialog
        v-model="customVisible"
        title="Custom Dialog"
        cancelText="No, thanks"
        confirmText="Yes, proceed"
        confirmButtonColor="green"
        cancelButtonColor="blue"
        :confirmHandler="handleCustomConfirm"
        :cancelHandler="handleCustomCancel"
      >
        Dialog with custom button text and colors.
      </Dialog>
    </div>

    <!-- No Title Dialog -->
    <div class="space-y-2">
      <h2 class="text-xl font-semibold">No Title Dialog</h2>
      <button
        class="px-4 py-2 bg-yellow-500 text-white rounded-md"
        @click="noTitleVisible = true"
      >
        Open No Title Dialog
      </button>
      <Dialog
        v-model="noTitleVisible"
        :confirmHandler="handleNoTitleConfirm"
        confirmButtonColor="yellow"
      >
        This dialog has no title and only a confirm button.
      </Dialog>
    </div>

    <!-- Complex Content Dialog -->
    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Complex Content Dialog</h2>
      <button
        class="px-4 py-2 bg-red-500 text-white rounded-md"
        @click="complexVisible = true"
      >
        Open Complex Dialog
      </button>
      <Dialog
        v-model="complexVisible"
        title="Complex Dialog"
        confirmButtonColor="red"
        :confirmHandler="handleComplexConfirm"
        :cancelHandler="handleComplexCancel"
      >
        <div class="space-y-4">
          <div class="bg-gray-100 p-4 rounded-md">
            <h3 class="font-bold">Important Notice</h3>
            <p>This dialog contains complex content with multiple elements.</p>
          </div>
          <ul class="list-disc list-inside">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <div class="bg-yellow-100 p-2 rounded">
            <p class="text-yellow-800">⚠️ Warning: This is an important message</p>
          </div>
        </div>
      </Dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import Dialog from '@/components/Dialog';
import { ref } from 'vue';

// Dialog visibility states
const basicVisible = ref(false);
const customVisible = ref(false);
const noTitleVisible = ref(false);
const complexVisible = ref(false);

// Basic Dialog handlers
const handleBasicConfirm = () => {
  console.log('Basic dialog confirmed');
};

const handleBasicCancel = () => {
  console.log('Basic dialog cancelled');
};

// Custom Dialog handlers
const handleCustomConfirm = () => {
  console.log('Custom dialog confirmed');
};

const handleCustomCancel = () => {
  console.log('Custom dialog cancelled');
};

// No Title Dialog handler
const handleNoTitleConfirm = () => {
  console.log('No title dialog confirmed');
};

// Complex Dialog handlers
const handleComplexConfirm = () => {
  console.log('Complex dialog confirmed');
};

const handleComplexCancel = () => {
  console.log('Complex dialog cancelled');
};
</script>

<style scoped>
button {
  transition: opacity 0.2s;
}

button:hover {
  opacity: 0.8;
}
</style>