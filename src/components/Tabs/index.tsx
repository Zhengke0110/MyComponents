import { computed, defineComponent, type PropType } from "vue";
import { ColorType, borderColorMap, textColorMap, hoverBorderMap, hoverTextMap, focusOutlineMap, THEME_COLOR_MAP, ThemeColorType } from './config'
export interface TabItem {
  name: string;
  href?: string;
  disabled?: boolean;
  content?: string;
  [key: string]: any;
}

// 定义主题枚举
export enum TabTheme {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
}


export const Tabs = defineComponent({
  name: "Tabs",
  props: {
    modelValue: {
      type: String,
      default: undefined,
    },
    tabs: {
      type: Array as PropType<(TabItem | string)[]>,
      required: true,
    },
    showContent: {
      type: Boolean,
      default: true,
    },
    defaultTab: {
      type: String,
      default: "",
    },
    theme: {
      type: String as PropType<TabTheme>,
      default: TabTheme.Info,
      validator: (value: string) => Object.values(TabTheme).includes(value as TabTheme),
    },
    activeColor: {
      type: String as PropType<ColorType>,
      default: undefined,
    },
    hoverColor: {
      type: String as PropType<ColorType>,
      default: undefined,
    },
  },
  emits: ["update:modelValue", "change", "click"],
  setup(props, { slots, emit }) {
    // 标准化 tabs 数据
    const normalizedTabs = computed(() => {
      return props.tabs.map((tab) => {
        if (typeof tab === "string") {
          return {
            name: tab,
            href: `#${tab}`,
            content: "",
            disabled: false,
          };
        }
        return {
          href: `#${tab.name}`,
          disabled: false,
          content: "",
          ...tab,
        };
      });
    });

    // 判断标签是否激活
    const isActive = (tabName: string) => {
      if (props.modelValue) {
        return props.modelValue === tabName;
      }
      if (props.defaultTab) {
        return props.defaultTab === tabName;
      }
      // 如果没有设置 modelValue 和 defaultTab，返回第一个标签
      return normalizedTabs.value[0]?.name === tabName;
    };

    // 处理标签点击
    const handleTabClick = (tab: TabItem) => {
      if (tab.disabled) return;

      emit("click", tab);
      emit("update:modelValue", tab.name);
      emit("change", tab);
    };

    // 处理移动端选择
    const handleSelectChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      const selectedTab = normalizedTabs.value.find(
        (tab) => tab.name === target.value,
      );
      if (selectedTab) {
        handleTabClick(selectedTab);
      }
    };

    // 获取颜色名称
    const getColorName = computed((): ColorType => {
      // 如果指定了自定义的活动颜色，优先使用
      if (props.activeColor) {
        return props.activeColor;
      }

      // 否则根据主题选择默认颜色
      if (props.theme) {
        return THEME_COLOR_MAP[props.theme as ThemeColorType];
      }

      return 'indigo'; // 默认颜色
    });

    // 获取悬停颜色名称
    const getHoverColorName = computed((): ColorType => {
      return props.hoverColor || getColorName.value;
    });

    // 生成激活状态的类名
    const activeTabClasses = computed(() => {
      const colorName = getColorName.value;
      return [
        borderColorMap[colorName],
        textColorMap[colorName],
      ];
    });

    // 生成悬停状态的类名
    const hoverTabClasses = computed(() => {
      const colorName = getHoverColorName.value;
      return [
        hoverBorderMap[colorName],
        hoverTextMap[colorName],
      ];
    });

    // 生成聚焦状态的类名
    const focusTabClasses = computed(() => {
      const colorName = getColorName.value;
      return focusOutlineMap[colorName];
    });

    return () => (
      <div>
        {/* Mobile View */}
        <div class="grid grid-cols-1 sm:hidden">
          <select
            value={props.modelValue || props.defaultTab || normalizedTabs.value[0]?.name}
            onChange={handleSelectChange}
            aria-label="Select a tab"
            class={[
              "col-start-1 row-start-1 w-full appearance-none rounded-md bg-white dark:bg-gray-800 py-2 pr-8 pl-3",
              "text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600",
              "focus:outline-2 focus:-outline-offset-2",
              focusTabClasses.value,
              "transition-colors duration-200",
            ]}
          >
            {normalizedTabs.value.map((tab) => (
              <option key={tab.name} value={tab.name} disabled={tab.disabled}>
                {tab.content || tab.name}
              </option>
            ))}
          </select>
          <div class="pointer-events-none col-start-1 row-start-1 flex items-center justify-end pr-3">
            <svg
              class="h-5 w-5 text-gray-400 dark:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Desktop View */}
        <div class="hidden sm:block">
          <div class="border-b border-gray-200 dark:border-gray-700">
            <nav class="-mb-px flex flex-wrap" aria-label="Tabs" role="tablist">
              {normalizedTabs.value.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  role="tab"
                  aria-selected={isActive(tab.name)}
                  aria-controls={`panel-${tab.name}`}
                  class={[
                    isActive(tab.name)
                      ? activeTabClasses.value
                      : ["border-transparent", "text-gray-500 dark:text-gray-400", ...hoverTabClasses.value],
                    "flex-auto md:flex-none border-b-2 px-3 py-4 text-center text-sm font-medium",
                    "transition-all duration-200 ease-in-out",
                    { "cursor-not-allowed opacity-50 dark:opacity-40": tab.disabled },
                  ]}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(tab);
                  }}
                >
                  {slots.tab ? slots.tab({ tab }) : (tab.content || tab.name)}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Panels */}
        {props.showContent && (
          <div class="mt-4 min-h-[100px]">
            {normalizedTabs.value.map((tab) => (
              <div
                key={tab.name}
                id={`panel-${tab.name}`}
                role="tabpanel"
                aria-labelledby={tab.name}
                class={[
                  "transition-all duration-300",
                  isActive(tab.name) ? "opacity-100 transform-none" : "hidden opacity-0 translate-y-2",
                ]}
              >
                {slots[tab.name]?.({ tab }) ?? tab.content}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
});

export default Tabs;
