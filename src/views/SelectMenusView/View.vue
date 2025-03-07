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
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
        >
          <h3 class="font-medium text-gray-700 mb-4">Basic Select</h3>
          <SelectMenus
            v-model="basicSelection"
            :options="basicOptions"
            label="Choose a category"
            placeholder="Select a category"
          />
          <div class="mt-4 text-sm text-gray-600">
            Selected: <span class="font-medium text-indigo-600">{{ basicSelection?.name || 'None' }}</span>
          </div>
        </div>

        <!-- Icon Select -->
        <div 
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
        >
          <h3 class="font-medium text-gray-700 mb-4">With Icons</h3>
          <SelectMenus
            v-model="iconSelection"
            :options="iconOptions"
            label="Select priority"
            placeholder="Choose priority"
          />
          <div class="mt-4 text-sm text-gray-600">
            Selected: <span class="font-medium text-indigo-600">{{ iconSelection?.name || 'None' }}</span>
          </div>
        </div>

        <!-- Avatar Select -->
        <div 
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
        >
          <h3 class="font-medium text-gray-700 mb-4">With Avatars</h3>
          <SelectMenus
            v-model="userSelection"
            :options="userOptions"
            label="Assign to"
            placeholder="Select user"
          />
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
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 300 } }"
        >
          <h3 class="font-medium text-gray-700 mb-4">With Descriptions</h3>
          <SelectMenus
            v-model="descriptionSelection"
            :options="descriptionOptions"
            label="Select environment"
            placeholder="Choose environment"
          />
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
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 300 } }"
        >
          <h3 class="font-medium text-gray-700 mb-4">Animated Selection</h3>
          <div class="flex items-center gap-4">
            <SelectMenus
              v-model="animatedSelection"
              :options="colorOptions"
              label="Pick a theme color"
              placeholder="Select color"
            />
            <div 
              class="w-16 h-16 rounded-full transition-all duration-500"
              :class="{
                'animate-pulse': !animatedSelection,
                'animate-bounce': animatedSelection?.id === 'red',
                'animate-spin slow': animatedSelection?.id === 'blue',
                'animate-ping': animatedSelection?.id === 'green',
              }"
              :style="{ backgroundColor: animatedSelection?.value || '#e5e7eb' }"
            ></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Theme Examples Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">Theme Examples</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
        <!-- Different theme colors -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Indigo (Default)</h3>
          <SelectMenus
            v-model="themeSelection.indigo"
            :options="basicOptions"
            placeholder="Select option"
            :theme="SelectMenuTheme.Indigo"
          />
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Blue Theme</h3>
          <SelectMenus
            v-model="themeSelection.blue"
            :options="basicOptions"
            placeholder="Select option"
            :theme="SelectMenuTheme.Blue"
          />
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Green Theme</h3>
          <SelectMenus
            v-model="themeSelection.green"
            :options="basicOptions"
            placeholder="Select option"
            :theme="SelectMenuTheme.Green"
          />
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="font-medium text-gray-700 mb-4">Orange Theme</h3>
          <SelectMenus
            v-model="themeSelection.orange"
            :options="basicOptions"
            placeholder="Select option"
            :theme="SelectMenuTheme.Orange"
          />
        </div>
      </div>
    </section>

    <!-- Interactive Demo -->
    <section class="mb-8">
      <div 
        class="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 400, duration: 500 } }"
      >
        <h2 class="text-2xl font-semibold text-indigo-800 mb-4">Form Example</h2>
        <div class="max-w-md">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
              <input 
                type="text" 
                v-model="formData.name"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200"
                placeholder="Enter project name"
              />
            </div>
            
            <div class="flex flex-wrap gap-6">
              <div>
                <SelectMenus
                  v-model="formData.category"
                  :options="basicOptions"
                  label="Category"
                  placeholder="Select category"
                />
              </div>
              
              <div>
                <SelectMenus
                  v-model="formData.priority"
                  :options="iconOptions"
                  label="Priority"
                  placeholder="Set priority"
                />
              </div>
              
              <div>
                <SelectMenus
                  v-model="formData.assignee"
                  :options="userOptions"
                  label="Assignee"
                  placeholder="Assign to"
                />
              </div>
            </div>
            
            <div class="pt-2">
              <button 
                type="submit" 
                class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
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

// Add a theme selector component to showcase all available themes
const allThemes = [
  { id: SelectMenuTheme.Indigo, name: 'Indigo (默认)', value: SelectMenuTheme.Indigo },
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
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
