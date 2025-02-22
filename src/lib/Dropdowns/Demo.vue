<template>
  <div class="space-y-8 p-8">
    <!-- Basic Usage -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Basic Usage</h2>
      <div class="flex gap-4">
        <Dropdown label="Options" :items="basicItems" @select="onSelect" />
      </div>
    </section>

    <!-- Sizes -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Different Sizes</h2>
      <div class="flex items-center gap-4">
        <Dropdown label="Small" size="sm" :items="basicItems" />
        <Dropdown label="Medium" size="md" :items="basicItems" />
        <Dropdown label="Large" size="lg" :items="basicItems" />
      </div>
    </section>

    <!-- With Icons -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">With Icons</h2>
      <div class="flex gap-4">
        <Dropdown
          label="Settings"
          trigger-icon="i-tabler-settings"
          :items="iconItems"
        />
        <Dropdown
          label="User"
          trigger-icon="i-tabler-user"
          button-class="bg-primary-500 text-white hover:bg-primary-600"
          :items="userItems"
        />
      </div>
    </section>

    <!-- Complex Example -->
    <section class="space-y-4">
      <h2 class="text-lg font-semibold">Complex Example</h2>
      <div class="flex gap-4">
        <Dropdown
          label="Actions"
          trigger-icon="i-tabler-dots-vertical"
          :items="complexItems"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dropdown, { type DropdownItem } from './index.ts';

// Basic items
const basicItems = ref<DropdownItem[]>([
  { id: 1, type: 'button', label: 'Edit' },
  { id: 2, type: 'button', label: 'Duplicate' },
  { id: 3, type: 'button', label: 'Delete' },
]);

// Items with icons
const iconItems = ref<DropdownItem[]>([
  {
    id: 1,
    type: 'button',
    label: 'Edit',
    icon: 'i-tabler-edit',
  },
  {
    id: 2,
    type: 'button',
    label: 'Share',
    icon: 'i-tabler-share',
    endIcon: 'i-tabler-external-link',
  },
  {
    id: 3,
    type: 'button',
    label: 'Delete',
    icon: 'i-tabler-trash',
    danger: true,
  },
]);

// User menu items
const userItems = ref<DropdownItem[]>([
  {
    id: 1,
    type: 'button',
    label: 'Profile',
    icon: 'i-tabler-user-circle',
  },
  {
    id: 2,
    type: 'button',
    label: 'Settings',
    icon: 'i-tabler-settings',
  },
  { id: 3, type: 'divider' },
  {
    id: 4,
    type: 'button',
    label: 'Sign out',
    icon: 'i-tabler-logout',
  },
]);

// Complex items with various states
const complexItems = ref<DropdownItem[]>([
  {
    id: 1,
    type: 'button',
    label: 'Edit Project',
    icon: 'i-tabler-edit',
  },
  {
    id: 2,
    type: 'button',
    label: 'Duplicate Project',
    icon: 'i-tabler-copy',
  },
  {
    id: 3,
    type: 'button',
    label: 'Archive Project',
    icon: 'i-tabler-archive',
    disabled: true,
  },
  { id: 4, type: 'divider' },
  {
    id: 5,
    type: 'link',
    label: 'Documentation',
    href: '#',
    icon: 'i-tabler-file-text',
    endIcon: 'i-tabler-external-link',
  },
  { id: 6, type: 'divider' },
  {
    id: 7,
    type: 'button',
    label: 'Delete Project',
    icon: 'i-tabler-trash',
    danger: true,
  },
]);

// Handle selection
const onSelect = (item: DropdownItem) => {
  console.log('Selected item:', item);
};
</script>

<style scoped>

</style>