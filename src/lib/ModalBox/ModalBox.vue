<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 bg-black/75 flex items-center justify-center z-[1000] backdrop-blur-sm"
        @click="handleOverlayClick"
      >
        <Transition
          :enter-active-class="transitionClasses.enterActive"
          :leave-active-class="transitionClasses.leaveActive"
          :enter-from-class="transitionClasses.enterFrom"
          :leave-to-class="transitionClasses.leaveTo"
          mode="out-in"
        >
          <!-- 修改这部分，移除额外的点击阻止 -->
          <div
            class="relative bg-transparent rounded-lg w-auto h-auto"
            :class="[
              contentClass,
              isFullscreen
                ? 'max-w-none max-h-none'
                : 'max-w-[90vw] max-h-[90vh]',
            ]"
          >
            <button
              class="absolute transition-all duration-300 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer group z-50"
              :class="[
                isFullscreen
                  ? 'top-4 right-4 bg-black/20 hover:bg-black/30'
                  : '-top-10 -right-10 bg-white/20 hover:bg-white/30',
              ]"
              @click.stop="handleClose"
            >
              <span class="close-icon"></span>
            </button>
            <slot></slot>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

interface Props {
  modelValue: boolean;
  closeOnClickOverlay?: boolean;
  fullscreen?: boolean;
  contentClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  closeOnClickOverlay: true,
  fullscreen: false,
  contentClass: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "close"): void;
}>();

const isFullscreen = ref(props.fullscreen);

watch(
  () => props.fullscreen,
  (newVal) => {
    isFullscreen.value = newVal;
  }
);

const transitionClasses = computed(() =>
  isFullscreen.value
    ? {
        enterActive: "transition-all duration-500 ease-in-out",
        leaveActive: "transition-all duration-500 ease-in-out",
        enterFrom: "opacity-0 scale-50",
        leaveTo: "opacity-0 scale-110",
      }
    : {
        enterActive: "transition-all duration-300 ease-out",
        leaveActive: "transition-all duration-300 ease-out",
        enterFrom: "opacity-0 scale-95",
        leaveTo: "opacity-0 scale-95",
      }
);

const handleClose = () => {
  emit("update:modelValue", false);
  emit("close");
};

const handleOverlayClick = (event: MouseEvent) => {
  // 只有当点击的是遮罩层本身时才关闭
  if (props.closeOnClickOverlay && event.target === event.currentTarget) {
    handleClose();
  }
};
</script>

<style scoped>
.close-icon {
  position: relative;
  width: 16px;
  height: 16px;
}

.close-icon::before,
.close-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
  transition: transform 0.2s;
}

.close-icon::before {
  transform: rotate(45deg);
}

.close-icon::after {
  transform: rotate(-45deg);
}

.group:hover .close-icon::before,
.group:hover .close-icon::after {
  transform: rotate(45deg) scale(1.2);
}

.group:hover .close-icon::after {
  transform: rotate(-45deg) scale(1.2);
}
</style>
