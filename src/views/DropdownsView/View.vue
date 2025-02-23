<script setup lang="ts">
import { ref } from 'vue'
import Dropdowns from '../../components/Dropdowns'
import type { DropdownItem } from '../../components/Dropdowns'

const baseItems: DropdownItem[] = [
  {
    id: '1',
    type: 'button',
    label: 'Edit',
    icon: 'icon-[solar--clapperboard-edit-broken]',
    onClick: () => console.log('Edit clicked')
  },
  {
    id: '2',
    type: 'button',
    label: 'Duplicate',
    icon: 'icon-[solar--copy-broken]'
  },
  { id: 'div1', type: 'divider' },
  {
    id: '3',
    type: 'link',
    label: 'Learn more',
    href: 'https://example.com',
    icon: 'icon-[solar--link-bold-duotone]'
  }
]

const sizeItems: DropdownItem[] = [
  {
    id: '1',
    type: 'button',
    label: 'Small option',
    icon: 'icon-[solar--settings-broken]'
  },
  {
    id: '2',
    type: 'button',
    label: 'Another option',
    icon: 'icon-[solar--user-broken]'
  }
]

const dangerItems: DropdownItem[] = [
  {
    id: '1',
    type: 'button',
    label: 'Archive project',
    icon: 'icon-[solar--archive-check-broken]'
  },
  { id: 'div1', type: 'divider' },
  {
    id: '2',
    type: 'button',
    label: 'Delete project',
    icon: 'icon-[solar--trash-bin-trash-broken]',
    danger: true
  }
]

const disabledItems: DropdownItem[] = [
  {
    id: '1',
    type: 'button',
    label: 'Available option',
    icon: 'icon-[solar--check-read-line-duotone]'
  },
  {
    id: '2',
    type: 'button',
    label: 'Disabled option',
    icon: 'icon-[solar--lock-keyhole-broken]',
    disabled: true
  }
]

const handleSelect = (item: DropdownItem) => {
  console.log('Selected item:', item)
}
</script>

<template>
  <div class="space-y-8 p-6">
    <!-- Basic Usage -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Basic Usage</h2>
      <Dropdowns
        label="Options"
        :items="baseItems"
        @select="handleSelect"
      />
    </section>

    <!-- Different Sizes -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Sizes</h2>
      <div class="flex items-center gap-4">
        <Dropdowns
          label="Small"
          size="sm"
          :items="sizeItems"
        />
        <Dropdowns
          label="Medium"
          size="md"
          :items="sizeItems"
        />
        <Dropdowns
          label="Large"
          size="lg"
          :items="sizeItems"
        />
      </div>
    </section>

    <!-- Custom Styling -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Custom Styling</h2>
      <Dropdowns
        label="Custom Button"
        :items="baseItems"
        button-class="bg-blue-500 text-white hover:bg-blue-600 shadow-md"
        icon-class="icon-[solar--alt-arrow-down-broken]"
      />
    </section>

    <!-- With Disabled Items -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Disabled Items</h2>
      <Dropdowns
        label="Settings"
        :items="disabledItems"
      />
    </section>

    <!-- Danger Actions -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Danger Actions</h2>
      <Dropdowns
        label="Project Actions"
        :items="dangerItems"
      />
    </section>
  </div>
</template>
