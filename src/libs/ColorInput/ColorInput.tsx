import { computed, defineComponent, PropType, ref, nextTick, watch } from "vue";
import { onClickOutside, useEventListener } from "@vueuse/core";
import { formatColor, isValidColor as validateColor } from "./colorUtils";
import {
  DEFAULT_COLORS,
  COLOR_INTENSITIES,
  THEME_COLOR_MAP,
  ColorIntensity,
  DEFAULT_INTENSITY,
  ColorType
} from './constant';

// 修改颜色验证函数以支持 0x 格式
export const isValidHexColor = (color: string | null): boolean => {
  if (!color) return false;
  // 支持 # 和 0x 开头的颜色
  return /^(#|0x)[0-9A-Fa-f]{6}$/.test(color);
};

export interface ColorOptions {
  outputFormat: "hex" | "0x";
}

export interface ColorInputProps {
  modelValue?: string;
  position?: "top" | "bottom";
  colors?: string[];
  allowCustom?: boolean;
  colorOptions?: ColorOptions;
  color?: ColorType;
  selectedIntensity?: ColorIntensity;
}

export const ColorInput = defineComponent({
  name: "ColorInput",
  props: {
    modelValue: {
      type: String,
      default: "#000000",
    },
    position: {
      type: String as PropType<"top" | "bottom">,
      default: "bottom",
    },
    colors: {
      type: Array as PropType<string[]>,
      default: null,
    },
    allowCustom: {
      type: Boolean,
      default: true,
    },
    colorOptions: {
      type: Object as PropType<ColorOptions>,
      default: () => ({ outputFormat: "hex" }),
    },
    color: {
      type: String as PropType<ColorType>,
      default: 'blue'
    },
    selectedIntensity: {
      type: Number as PropType<ColorIntensity>,
      default: DEFAULT_INTENSITY,
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const colorPickerRef = ref<HTMLElement | null>(null);
    const showPalette = ref(false);
    const currentCustomColor = ref("");
    const focusedIndex = ref(-1);
    const colorBlockRefs = ref<Array<HTMLElement | null>>([]);
    const currentIntensity = ref<ColorIntensity>(props.selectedIntensity);
    const selectedColorType = ref<ColorType>(props.color);

    // 监听颜色类型变化
    watch(() => props.color, (newColor) => {
      selectedColorType.value = newColor;
      if (showPalette.value) {
        updateSelectedColor();
      }
    });

    // 监听颜色强度变化
    watch(() => props.selectedIntensity, (newVal) => {
      currentIntensity.value = newVal;
      if (showPalette.value) {
        updateSelectedColor();
      }
    });

    // 更新选中的颜色
    const updateSelectedColor = () => {
      if (selectedColorType.value) {
        const colorValue = THEME_COLOR_MAP[selectedColorType.value][currentIntensity.value];
        selectColor(colorValue);
      }
    };

    // Click outside handling
    onClickOutside(colorPickerRef, () => {
      showPalette.value = false;
    });

    // Key event handling
    useEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape" && showPalette.value) {
        showPalette.value = false;
      }
    });

    // Color utilities
    const formatColorForDisplay = (color: string): string => {
      try {
        return formatColor(color, { outputFormat: "hex" });
      } catch (e) {
        return "#000000";
      }
    };

    const normalizeColorForComparison = (color: string): string => {
      try {
        return formatColor(color, props.colorOptions);
      } catch (e) {
        return props.colorOptions.outputFormat === "0x"
          ? "0x000000"
          : "#000000";
      }
    };

    // 主题色选择
    const handleThemeColorSelect = (colorType: ColorType) => {
      selectedColorType.value = colorType;
      const colorValue = THEME_COLOR_MAP[colorType][currentIntensity.value];
      selectColor(colorValue);
    };

    // 检查颜色类型是否被选中
    const isColorTypeSelected = (colorType: ColorType): boolean => {
      return selectedColorType.value === colorType;
    };

    // 从当前颜色值猜测颜色类型和强度
    const guessColorTypeAndIntensity = () => {
      if (!props.modelValue) return;

      const normalizedColor = formatColorForDisplay(props.modelValue).toLowerCase();

      // 遍历所有主题色和强度
      for (const colorType of Object.keys(THEME_COLOR_MAP) as ColorType[]) {
        for (const intensity of COLOR_INTENSITIES) {
          if (THEME_COLOR_MAP[colorType][intensity].toLowerCase() === normalizedColor) {
            selectedColorType.value = colorType;
            currentIntensity.value = intensity;
            return;
          }
        }
      }
    };

    // Computed properties
    const displayColor = computed(() =>
      formatColorForDisplay(props.modelValue || "#000000"),
    );
    const isValidColor = computed(() =>
      validateColor(currentCustomColor.value),
    );
    const colorList = computed(() => {
      // 使用自定义颜色列表或默认列表
      const baseColors = props.colors || DEFAULT_COLORS;

      return baseColors.map((color) => {
        try {
          if (
            props.colorOptions.outputFormat === "0x" &&
            color.startsWith("0x")
          ) {
            return color;
          }
          return formatColor(color, props.colorOptions);
        } catch (e) {
          return props.colorOptions.outputFormat === "0x"
            ? "0x000000"
            : "#000000";
        }
      });
    });

    // Event handlers
    const togglePalette = () => {
      showPalette.value = !showPalette.value;
      if (showPalette.value) {
        guessColorTypeAndIntensity();
      }
    };

    const handleKeyDown = (event: KeyboardEvent, index: number) => {
      const cols = 8;
      const total = colorList.value.length;
      let newIndex = index;

      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          newIndex = index + 1;
          break;
        case "ArrowLeft":
          event.preventDefault();
          newIndex = index - 1;
          break;
        case "ArrowUp":
          event.preventDefault();
          newIndex = index - cols;
          break;
        case "ArrowDown":
          event.preventDefault();
          newIndex = index + cols;
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          selectColor(colorList.value[index]);
          return;
        case "Home":
          event.preventDefault();
          newIndex = 0;
          break;
        case "End":
          event.preventDefault();
          newIndex = total - 1;
          break;
        default:
          return;
      }

      newIndex = ((newIndex % total) + total) % total;
      focusedIndex.value = newIndex;
      nextTick(() => {
        colorBlockRefs.value[newIndex]?.focus();
      });
    };

    const selectColor = (color: string) => {
      if (!color) return;
      try {
        const formattedColor = formatColor(color, props.colorOptions);
        emit("update:modelValue", formattedColor);
        emit("change", formattedColor);
        currentCustomColor.value = formattedColor;
        showPalette.value = false;
      } catch (e) {
        console.error("Error selecting color:", e);
      }
    };

    const applyCustomColor = () => {
      if (!props.allowCustom) return;
      if (validateColor(currentCustomColor.value)) {
        const formattedColor = formatColor(
          currentCustomColor.value,
          props.colorOptions,
        );
        emit("update:modelValue", formattedColor);
        emit("change", formattedColor);
        showPalette.value = false;
        currentCustomColor.value = "";
      }
    };

    // 渲染颜色块
    const renderColorBlock = (color: string, index: number) => {
      const isSelected =
        normalizeColorForComparison(color) ===
        normalizeColorForComparison(props.modelValue);
      const isFocused = focusedIndex.value === index;

      return (
        <div key={index} class="group relative">
          <div
            ref={(el) => (colorBlockRefs.value[index] = el as HTMLElement)}
            class={[
              "relative h-8 w-8 cursor-pointer rounded-lg ring-2 transition-all duration-200",
              isSelected && !isFocused
                ? "ring-blue-400 ring-offset-2 hover:ring-blue-500 dark:ring-blue-500 dark:hover:ring-blue-400"
                : "ring-transparent",
              isFocused
                ? [
                  "z-10 scale-125 shadow-lg ring-offset-2",
                  "ring-indigo-500 dark:ring-indigo-400",
                  "after:absolute after:inset-0 after:rounded-lg after:ring-2 after:ring-white/50 dark:after:ring-gray-800/50",
                  "before:absolute before:-inset-1 before:rounded-xl before:bg-indigo-500/20 dark:before:bg-indigo-400/20",
                ]
                : "",
              "hover:scale-110 hover:ring-blue-400 hover:ring-offset-2 dark:hover:ring-blue-400",
              "focus:outline-none",
            ]}
            style={{ backgroundColor: formatColorForDisplay(color) }}
            onClick={() => selectColor(color)}
            onKeydown={(e) => handleKeyDown(e, index)}
            onBlur={() =>
              focusedIndex.value === index && (focusedIndex.value = -1)
            }
            tabindex={0}
            role="gridcell"
            aria-label={`选择颜色: ${color}`}
            aria-selected={color === props.modelValue}
          />
        </div>
      );
    };

    return () => (
      <div class="relative" ref={colorPickerRef}>
        <div
          class="color-input group relative h-12 w-12 cursor-pointer rounded-xl shadow-lg ring-2 ring-gray-200 transition-all duration-300 hover:scale-105 hover:ring-blue-400 hover:ring-offset-2 dark:ring-gray-700 dark:hover:ring-blue-500"
          style={{ backgroundColor: displayColor.value }}
          onClick={togglePalette}
        >
          <div class="absolute inset-0 rounded-xl bg-black/5 transition-colors group-hover:bg-black/0 dark:bg-black/20 dark:group-hover:bg-black/10" />
        </div>

        {showPalette.value && (
          <div
            class="absolute z-20 min-w-[320px] border border-gray-100 rounded-2xl bg-white/95 p-4 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.15)] backdrop-blur-sm mt-4 transform transition-all duration-200 opacity-100 translate-y-0 dark:border-gray-700 dark:bg-gray-800/95 dark:text-gray-100"
            style={{
              [props.position === "top" ? "bottom" : "top"]: "100%",
              marginBottom: props.position === "top" ? "0.5rem" : "0",
              marginTop: props.position === "top" ? "0" : "0.5rem",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div class="mb-4 flex items-center justify-between">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">选择颜色</span>
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs text-gray-500 dark:text-gray-400">
                  {props.modelValue}
                </span>
                <div
                  class="h-8 w-8 rounded-lg shadow-inner"
                  style={{ backgroundColor: displayColor.value }}
                />
              </div>
            </div>

            {/* 预设颜色选择区 */}
            <div class="mb-4 grid grid-cols-8 gap-2 rounded-xl bg-gray-50 p-2 dark:bg-gray-900" role="grid">
              {colorList.value.map((color, index) =>
                renderColorBlock(color, index)
              )}
            </div>

            {/* 自定义颜色输入 */}
            {props.allowCustom && (
              <div class="flex items-center gap-3">
                <div class="relative flex-1">
                  <input
                    type="text"
                    v-model={currentCustomColor.value}
                    class="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 font-mono text-sm text-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:focus:ring-blue-500"
                    placeholder={props.colorOptions.outputFormat === "hex" ? "#ffffff" : "0xffffff"}
                    onKeydown={(e) => e.key === "Enter" && applyCustomColor()}
                    onClick={(e) => e.stopPropagation()}
                  />
                  {isValidColor.value && (
                    <div
                      class="absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 rounded transition-all duration-200"
                      style={{
                        backgroundColor: currentCustomColor.value
                      }}
                    />
                  )}
                </div>
                <button
                  onClick={applyCustomColor}
                  disabled={!isValidColor.value}
                  class="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-all whitespace-nowrap hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
                >
                  应用颜色
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
});

export default ColorInput;
