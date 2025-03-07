import { computed, defineComponent, type PropType } from "vue";

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

// 主题配置映射表
const themeColorMap = {
  [TabTheme.Primary]: {
    active: {
      border: "border-blue-500",
      text: "text-blue-600",
    },
    hover: {
      border: "hover:border-blue-300",
      text: "hover:text-blue-700",
    },
    focus: "focus:outline-blue-600",
  },
  [TabTheme.Secondary]: {
    active: {
      border: "border-gray-500",
      text: "text-gray-600",
    },
    hover: {
      border: "hover:border-gray-300",
      text: "hover:text-gray-700",
    },
    focus: "focus:outline-gray-600",
  },
  [TabTheme.Success]: {
    active: {
      border: "border-emerald-500",
      text: "text-emerald-600",
    },
    hover: {
      border: "hover:border-emerald-300",
      text: "hover:text-emerald-700",
    },
    focus: "focus:outline-emerald-600",
  },
  [TabTheme.Danger]: {
    active: {
      border: "border-red-500",
      text: "text-red-600",
    },
    hover: {
      border: "hover:border-red-300",
      text: "hover:text-red-700",
    },
    focus: "focus:outline-red-600",
  },
  [TabTheme.Warning]: {
    active: {
      border: "border-amber-500",
      text: "text-amber-600",
    },
    hover: {
      border: "hover:border-amber-300",
      text: "hover:text-amber-700",
    },
    focus: "focus:outline-amber-600",
  },
  [TabTheme.Info]: {
    active: {
      border: "border-indigo-500",
      text: "text-indigo-600",
    },
    hover: {
      border: "hover:border-indigo-300",
      text: "hover:text-indigo-700",
    },
    focus: "focus:outline-indigo-600",
  },
};

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

    // 获取当前主题的颜色配置
    const themeConfig = computed(() => {
      return themeColorMap[props.theme as TabTheme] || themeColorMap[TabTheme.Info];
    });

    // 获取激活状态的类名
    const activeClasses = computed(() => [
      themeConfig.value.active.border,
      themeConfig.value.active.text,
    ]);

    // 获取非激活状态的类名
    const inactiveClasses = computed(() => [
      "border-transparent",
      "text-gray-500",
      themeConfig.value.hover.border,
      themeConfig.value.hover.text,
    ]);

    // 获取焦点状态的类名
    const focusClasses = computed(() => [
      themeConfig.value.focus,
    ]);

    return () => (
      <div>
        {/* Mobile View */}
        <div class="grid grid-cols-1 sm:hidden">
          <select
            value={props.modelValue}
            onChange={handleSelectChange}
            aria-label="Select a tab"
            class={[
              "col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300",
              "focus:outline-2 focus:-outline-offset-2",
              focusClasses.value,
            ]}
          >
            {normalizedTabs.value.map((tab) => (
              <option key={tab.name} value={tab.name}>
                {tab.name}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop View */}
        <div class="hidden sm:block">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex" aria-label="Tabs" role="tablist">
              {normalizedTabs.value.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  role="tab"
                  aria-selected={isActive(tab.name)}
                  aria-controls={`panel-${tab.name}`}
                  class={[
                    isActive(tab.name)
                      ? activeClasses.value
                      : inactiveClasses.value,
                    "w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium transition-all duration-200",
                    { "cursor-not-allowed opacity-50": tab.disabled },
                  ]}
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick(tab);
                  }}
                >
                  {slots.tab ? slots.tab({ tab }) : tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Panels */}
        {props.showContent && (
          <div class="mt-4">
            {normalizedTabs.value.map((tab) => (
              <div
                key={tab.name}
                id={`panel-${tab.name}`}
                role="tabpanel"
                class={[
                  "transition-opacity duration-200",
                  isActive(tab.name) ? "opacity-100" : "hidden opacity-0",
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
