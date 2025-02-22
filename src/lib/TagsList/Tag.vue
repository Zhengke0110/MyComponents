<template>
  <span
    :class="[
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
      variantClasses,
      clickable ? 'cursor-pointer' : 'cursor-default',
    ]"
    @click="handleClick"
  >
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import type { TagVariant } from './index';
import { getRandomColor } from "./index";

interface Props {
  text: string;
  variant?: TagVariant;
  clickable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  clickable: false
});

const emit = defineEmits<{
  (e: "click", value: string): void;
}>();

const randomBgColor = ref("");

onMounted(() => {
  randomBgColor.value = getRandomColor();
});

const variantClasses = computed(() => {
  if (!props.variant) return '';
  
  const variants = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-cyan-500 text-white',
    light: 'bg-gray-200 text-gray-700',
    dark: 'bg-gray-800 text-white'
  };

  return variants[props.variant] || '';
});

const handleClick = () => {
  if (props.clickable) {
    emit("click", props.text);
  }
};
</script>

<style scoped>
.tag-enter-active,
.tag-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tag-enter-from,
.tag-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

span {
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;
}
</style>
