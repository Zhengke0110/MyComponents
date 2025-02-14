<template>
  <div class="space-y-4 p-4">
    <div class="space-x-4">
      <Button type="primary">Primary Button</Button>
      <Button type="secondary">Secondary Button</Button>
      <Button type="danger">Danger Button</Button>
    </div>

    <div class="space-x-4">
      <Button type="primary" disabled>Disabled Primary</Button>
      <Button type="secondary" disabled>Disabled Secondary</Button>
      <Button type="danger" disabled>Disabled Danger</Button>
    </div>

    <div>
      <p>Counter Example:</p>
      <p>Count: {{ counterStore.count }}</p>
      <Button type="primary" @click="counterStore.increment">
        Increment Counter
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/Button";
import { useCounterStore } from "@/store";

const counterStore = useCounterStore();
</script>

<style scoped></style>
