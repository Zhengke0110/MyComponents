import { computed, defineComponent, PropType, ref, nextTick, watch } from "vue";
import { onClickOutside, useEventListener } from "@vueuse/core";
import { formatColor, isValidColor as validateColor } from "./colorUtils";
import {
  DEFAULT_COLORS,
  COLOR_INTENSITIES,
  THEME_COLOR_MAP,
  ColorIntensity,
  DEFAULT_INTENSITY, ColorType
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
  theme?: boolean;
  themeColors?: ColorType[];
  dark?: boolean;
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
    theme: {
      type: Boolean,
      default: false,
    },
    themeColors: {
      type: Array as PropType<ColorType[]>,
      default: () => ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan', 'gray', 'slate'],
    },
    dark: {
      type: Boolean,
      default: false,
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
    const activeTab = ref<'preset' | 'theme'>(props.theme ? 'theme' : 'preset');
    const selectedColorType = ref<ColorType | null>(null);
    const currentIntensity = ref<ColorIntensity>(props.selectedIntensity);

    // 监听主题属性变化
    watch(() => props.theme, (newVal) => {
      activeTab.value = newVal ? 'theme' : 'preset';
    });

    // 监听颜色强度变化
    watch(() => props.selectedIntensity, (newVal) => {
      currentIntensity.value = newVal;
    });

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

    const handleIntensityChange = (intensity: ColorIntensity) => {
      currentIntensity.value = intensity;
      if (selectedColorType.value) {
        const colorValue = THEME_COLOR_MAP[selectedColorType.value][intensity];
        selectColor(colorValue);
      }
    };

    // 检查颜色类型是否被选中
    const isColorTypeSelected = (colorType: ColorType): boolean => {
      if (!selectedColorType.value) return false;
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

    // 初始化时尝试猜测当前颜色类型
    guessColorTypeAndIntensity();

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

    // 获取主题调色板
    const themePalette = computed(() => {
      return props.themeColors || ['blue', 'indigo', 'purple', 'red', 'green', 'yellow'];
    });

    // Event handlers
    const togglePalette = () => {
      showPalette.value = !showPalette.value;
      if (showPalette.value && props.theme) {
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

    // JSX rendering
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
                ? "ring-blue-400 ring-offset-2 hover:ring-blue-500"
                : "ring-transparent",
              isFocused
                ? [
                  "z-10 scale-125 shadow-lg ring-offset-2",
                  "ring-indigo-500",
                  "after:absolute after:inset-0 after:rounded-lg after:ring-2 after:ring-white/50",
                  "before:absolute before:-inset-1 before:rounded-xl before:bg-indigo-500/20",
                ]
                : "",
              "hover:scale-110 hover:ring-blue-400 hover:ring-offset-2",
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

    // 渲染主题色块
    const renderThemeColorBlock = (colorType: ColorType) => {
      const colorValue = THEME_COLOR_MAP[colorType][currentIntensity.value];
      const isSelected = isColorTypeSelected(colorType);

      return (
        <div key={colorType} class="group relative">
          <div
            class={[
              "relative h-8 w-8 cursor-pointer rounded-lg ring-2 transition-all duration-200",
              isSelected
                ? "ring-blue-400 ring-offset-2 hover:ring-blue-500 scale-110"
                : "ring-transparent",
              "hover:scale-110 hover:ring-blue-400 hover:ring-offset-2",
              "focus:outline-none",
            ]}
            style={{ backgroundColor: colorValue }}
            onClick={() => handleThemeColorSelect(colorType)}
            tabindex={0}
            role="gridcell"
            aria-label={`选择颜色: ${colorType}`}
            aria-selected={isSelected}
          />
          <div class="mt-1 text-center text-xs opacity-0 transition-opacity group-hover:opacity-100">
            {colorType}
          </div>
        </div>
      );
    };

    return () => (
      <div class="relative" ref={colorPickerRef}>
        <div
          class={[
            "color-input group relative h-12 w-12 cursor-pointer rounded-xl shadow-lg ring-2 transition-all duration-300 hover:scale-105 hover:ring-offset-2",
            props.dark ? "ring-gray-700" : "ring-gray-200",
            props.dark ? "hover:ring-blue-600" : "hover:ring-blue-400",
          ]}
          style={{ backgroundColor: displayColor.value }}
          onClick={togglePalette}
        >
          <div class={[
            "absolute inset-0 rounded-xl transition-colors",
            props.dark ? "bg-black/20 group-hover:bg-black/10" : "bg-black/5 group-hover:bg-black/0",
          ]} />
        </div>

        {showPalette.value && (
          <div
            class={[
              "absolute mt-4 rounded-2xl p-4 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.15)]",
              "z-20 min-w-[320px] border backdrop-blur-sm",
              "transform transition-all duration-200",
              props.position === "top" ? "bottom-full mb-2" : "top-full",
              showPalette.value
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0",
              props.dark
                ? "bg-gray-800/95 border-gray-700 text-gray-100"
                : "bg-white/95 border-gray-100 text-gray-800",
            ]}
            onClick={(e) => e.stopPropagation()}
          >
            <div class="mb-4 flex items-center justify-between">
              <span class={[
                "text-sm font-medium",
                props.dark ? "text-gray-300" : "text-gray-700",
              ]}>选择颜色</span>
              <div class="flex items-center gap-2">
                <span class={[
                  "font-mono text-xs",
                  props.dark ? "text-gray-400" : "text-gray-500",
                ]}>
                  {props.modelValue}
                </span>
                <div
                  class="h-8 w-8 rounded-lg shadow-inner"
                  style={{ backgroundColor: displayColor.value }}
                />
              </div>
            </div>

            {/* 选项卡切换 */}
            {props.theme && (
              <div class={[
                "flex border-b mb-4",
                props.dark ? "border-gray-700" : "border-gray-200",
              ]}>
                <button
                  class={[
                    "px-4 py-2 text-sm font-medium transition-colors border-b-2",
                    activeTab.value === 'preset'
                      ? (props.dark ? "border-blue-500 text-blue-400" : "border-blue-500 text-blue-600")
                      : (props.dark ? "border-transparent text-gray-400" : "border-transparent text-gray-500"),
                    props.dark ? "hover:text-blue-300" : "hover:text-blue-500",
                  ]}
                  onClick={() => activeTab.value = 'preset'}
                >
                  预设颜色
                </button>
                <button
                  class={[
                    "px-4 py-2 text-sm font-medium transition-colors border-b-2",
                    activeTab.value === 'theme'
                      ? (props.dark ? "border-blue-500 text-blue-400" : "border-blue-500 text-blue-600")
                      : (props.dark ? "border-transparent text-gray-400" : "border-transparent text-gray-500"),
                    props.dark ? "hover:text-blue-300" : "hover:text-blue-500",
                  ]}
                  onClick={() => activeTab.value = 'theme'}
                >
                  主题色
                </button>
              </div>
            )}

            {/* 活动选项卡内容 */}
            {(!props.theme || activeTab.value === 'preset') && (
              <div
                class={[
                  "mb-4 grid grid-cols-8 gap-2 rounded-xl p-2",
                  props.dark ? "bg-gray-900" : "bg-gray-50",
                ]}
                role="grid"
              >
                {colorList.value.map((color, index) =>
                  renderColorBlock(color, index),
                )}
              </div>
            )}

            {props.theme && activeTab.value === 'theme' && (
              <div>
                {/* 主题色选择 */}
                <div class={[
                  "mb-4 grid grid-cols-6 gap-4 rounded-xl p-2",
                  props.dark ? "bg-gray-900" : "bg-gray-50",
                ]}>
                  {themePalette.value.map(colorType =>
                    renderThemeColorBlock(colorType)
                  )}
                </div>

                {/* 颜色强度选择器 */}
                <div class="mb-4">
                  <p class={[
                    "text-sm mb-2",
                    props.dark ? "text-gray-300" : "text-gray-700",
                  ]}>颜色强度:</p>
                  <div class="flex gap-2 flex-wrap">
                    {COLOR_INTENSITIES.map(intensity => (
                      <button
                        key={intensity}
                        class={[
                          "px-2 py-1 rounded text-xs font-medium transition-colors",
                          currentIntensity.value === intensity
                            ? (props.dark ? "bg-blue-900 text-blue-100" : "bg-blue-600 text-white")
                            : (props.dark ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"),
                          "hover:bg-opacity-80",
                        ]}
                        onClick={() => handleIntensityChange(intensity)}
                      >
                        {intensity}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 当前选择的颜色预览 */}
                {selectedColorType.value && (
                  <div class={[
                    "mb-4 p-3 rounded-lg",
                    props.dark ? "bg-gray-900" : "bg-gray-100",
                  ]}>
                    <div class="flex justify-between items-center mb-2">
                      <div class={[
                        "text-sm font-medium",
                        props.dark ? "text-gray-300" : "text-gray-700",
                      ]}>
                        {selectedColorType.value} / {currentIntensity.value}
                      </div>
                      <div class="h-6 w-16 rounded" style={{
                        backgroundColor: THEME_COLOR_MAP[selectedColorType.value][currentIntensity.value]
                      }} />
                    </div>

                    <div class="grid grid-cols-10 gap-1">
                      {COLOR_INTENSITIES.map(intensity => (
                        <div
                          key={intensity}
                          class="aspect-square w-full rounded-sm cursor-pointer hover:ring-2 hover:ring-offset-1"
                          style={{
                            backgroundColor: selectedColorType.value ? THEME_COLOR_MAP[selectedColorType.value][intensity] : ''
                          }}
                          onClick={() => handleIntensityChange(intensity)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {props.allowCustom && (
              <div class="flex items-center gap-3">
                <div class="relative flex-1">
                  <input
                    type="text"
                    v-model={currentCustomColor.value}
                    class={[
                      "w-full rounded-lg border px-3 py-2 font-mono text-sm transition-all focus:ring-2 focus:outline-none",
                      props.dark
                        ? "bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-600"
                        : "bg-gray-50 border-gray-200 text-gray-800 focus:ring-blue-400",
                    ]}
                    placeholder={props.dark ? "#ffffff" : "#000000"}
                    onKeydown={(e) => e.key === "Enter" && applyCustomColor()}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div
                    class={[
                      "absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 rounded transition-all duration-200",
                      isValidColor.value ? "opacity-100" : "opacity-0",
                    ]}
                    style={{
                      backgroundColor: isValidColor.value
                        ? currentCustomColor.value
                        : "transparent",
                    }}
                  />
                </div>
                <button
                  onClick={applyCustomColor}
                  disabled={!isValidColor.value}
                  class={[
                    "rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    props.dark
                      ? "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-700"
                      : "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
                  ]}
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
