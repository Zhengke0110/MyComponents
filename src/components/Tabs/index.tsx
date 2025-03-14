import { computed, defineComponent, type PropType } from "vue";
import { ColorType, THEME_COLOR_MAP, ThemeColorType } from "../colors";

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

// 边框颜色映射表
const borderColorMap: Record<ColorType, string> = {
  slate: "border-slate-500 dark:border-slate-400",
  gray: "border-gray-500 dark:border-gray-400",
  zinc: "border-zinc-500 dark:border-zinc-400",
  neutral: "border-neutral-500 dark:border-neutral-400",
  stone: "border-stone-500 dark:border-stone-400",
  red: "border-red-500 dark:border-red-400",
  orange: "border-orange-500 dark:border-orange-400",
  amber: "border-amber-500 dark:border-amber-400",
  yellow: "border-yellow-500 dark:border-yellow-400",
  lime: "border-lime-500 dark:border-lime-400",
  green: "border-green-500 dark:border-green-400",
  emerald: "border-emerald-500 dark:border-emerald-400",
  teal: "border-teal-500 dark:border-teal-400",
  cyan: "border-cyan-500 dark:border-cyan-400",
  sky: "border-sky-500 dark:border-sky-400",
  blue: "border-blue-500 dark:border-blue-400",
  indigo: "border-indigo-500 dark:border-indigo-400",
  violet: "border-violet-500 dark:border-violet-400",
  purple: "border-purple-500 dark:border-purple-400",
  fuchsia: "border-fuchsia-500 dark:border-fuchsia-400",
  pink: "border-pink-500 dark:border-pink-400",
  rose: "border-rose-500 dark:border-rose-400",
};

// 文本颜色映射表
const textColorMap: Record<ColorType, string> = {
  slate: "text-slate-600 dark:text-slate-300",
  gray: "text-gray-600 dark:text-gray-300",
  zinc: "text-zinc-600 dark:text-zinc-300",
  neutral: "text-neutral-600 dark:text-neutral-300",
  stone: "text-stone-600 dark:text-stone-300",
  red: "text-red-600 dark:text-red-300",
  orange: "text-orange-600 dark:text-orange-300",
  amber: "text-amber-600 dark:text-amber-300",
  yellow: "text-yellow-600 dark:text-yellow-300",
  lime: "text-lime-600 dark:text-lime-300",
  green: "text-green-600 dark:text-green-300",
  emerald: "text-emerald-600 dark:text-emerald-300",
  teal: "text-teal-600 dark:text-teal-300",
  cyan: "text-cyan-600 dark:text-cyan-300",
  sky: "text-sky-600 dark:text-sky-300",
  blue: "text-blue-600 dark:text-blue-300",
  indigo: "text-indigo-600 dark:text-indigo-300",
  violet: "text-violet-600 dark:text-violet-300",
  purple: "text-purple-600 dark:text-purple-300",
  fuchsia: "text-fuchsia-600 dark:text-fuchsia-300",
  pink: "text-pink-600 dark:text-pink-300",
  rose: "text-rose-600 dark:text-rose-300",
};

// 鼠标悬停边框颜色映射表
const hoverBorderMap: Record<ColorType, string> = {
  slate: "hover:border-slate-300 dark:hover:border-slate-500",
  gray: "hover:border-gray-300 dark:hover:border-gray-500",
  zinc: "hover:border-zinc-300 dark:hover:border-zinc-500",
  neutral: "hover:border-neutral-300 dark:hover:border-neutral-500",
  stone: "hover:border-stone-300 dark:hover:border-stone-500",
  red: "hover:border-red-300 dark:hover:border-red-500",
  orange: "hover:border-orange-300 dark:hover:border-orange-500",
  amber: "hover:border-amber-300 dark:hover:border-amber-500",
  yellow: "hover:border-yellow-300 dark:hover:border-yellow-500",
  lime: "hover:border-lime-300 dark:hover:border-lime-500",
  green: "hover:border-green-300 dark:hover:border-green-500",
  emerald: "hover:border-emerald-300 dark:hover:border-emerald-500",
  teal: "hover:border-teal-300 dark:hover:border-teal-500",
  cyan: "hover:border-cyan-300 dark:hover:border-cyan-500",
  sky: "hover:border-sky-300 dark:hover:border-sky-500",
  blue: "hover:border-blue-300 dark:hover:border-blue-500",
  indigo: "hover:border-indigo-300 dark:hover:border-indigo-500",
  violet: "hover:border-violet-300 dark:hover:border-violet-500",
  purple: "hover:border-purple-300 dark:hover:border-purple-500",
  fuchsia: "hover:border-fuchsia-300 dark:hover:border-fuchsia-500",
  pink: "hover:border-pink-300 dark:hover:border-pink-500",
  rose: "hover:border-rose-300 dark:hover:border-rose-500",
};

// 鼠标悬停文本颜色映射表
const hoverTextMap: Record<ColorType, string> = {
  slate: "hover:text-slate-700 dark:hover:text-slate-300",
  gray: "hover:text-gray-700 dark:hover:text-gray-300",
  zinc: "hover:text-zinc-700 dark:hover:text-zinc-300",
  neutral: "hover:text-neutral-700 dark:hover:text-neutral-300",
  stone: "hover:text-stone-700 dark:hover:text-stone-300",
  red: "hover:text-red-700 dark:hover:text-red-300",
  orange: "hover:text-orange-700 dark:hover:text-orange-300",
  amber: "hover:text-amber-700 dark:hover:text-amber-300",
  yellow: "hover:text-yellow-700 dark:hover:text-yellow-300",
  lime: "hover:text-lime-700 dark:hover:text-lime-300",
  green: "hover:text-green-700 dark:hover:text-green-300",
  emerald: "hover:text-emerald-700 dark:hover:text-emerald-300",
  teal: "hover:text-teal-700 dark:hover:text-teal-300",
  cyan: "hover:text-cyan-700 dark:hover:text-cyan-300",
  sky: "hover:text-sky-700 dark:hover:text-sky-300",
  blue: "hover:text-blue-700 dark:hover:text-blue-300",
  indigo: "hover:text-indigo-700 dark:hover:text-indigo-300",
  violet: "hover:text-violet-700 dark:hover:text-violet-300",
  purple: "hover:text-purple-700 dark:hover:text-purple-300",
  fuchsia: "hover:text-fuchsia-700 dark:hover:text-fuchsia-300",
  pink: "hover:text-pink-700 dark:hover:text-pink-300",
  rose: "hover:text-rose-700 dark:hover:text-rose-300",
};

// 焦点轮廓颜色映射表
const focusOutlineMap: Record<ColorType, string> = {
  slate: "focus:outline-slate-600 dark:focus:outline-slate-500",
  gray: "focus:outline-gray-600 dark:focus:outline-gray-500",
  zinc: "focus:outline-zinc-600 dark:focus:outline-zinc-500",
  neutral: "focus:outline-neutral-600 dark:focus:outline-neutral-500",
  stone: "focus:outline-stone-600 dark:focus:outline-stone-500",
  red: "focus:outline-red-600 dark:focus:outline-red-500",
  orange: "focus:outline-orange-600 dark:focus:outline-orange-500",
  amber: "focus:outline-amber-600 dark:focus:outline-amber-500",
  yellow: "focus:outline-yellow-600 dark:focus:outline-yellow-500",
  lime: "focus:outline-lime-600 dark:focus:outline-lime-500",
  green: "focus:outline-green-600 dark:focus:outline-green-500",
  emerald: "focus:outline-emerald-600 dark:focus:outline-emerald-500",
  teal: "focus:outline-teal-600 dark:focus:outline-teal-500",
  cyan: "focus:outline-cyan-600 dark:focus:outline-cyan-500",
  sky: "focus:outline-sky-600 dark:focus:outline-sky-500",
  blue: "focus:outline-blue-600 dark:focus:outline-blue-500",
  indigo: "focus:outline-indigo-600 dark:focus:outline-indigo-500",
  violet: "focus:outline-violet-600 dark:focus:outline-violet-500",
  purple: "focus:outline-purple-600 dark:focus:outline-purple-500",
  fuchsia: "focus:outline-fuchsia-600 dark:focus:outline-fuchsia-500",
  pink: "focus:outline-pink-600 dark:focus:outline-pink-500",
  rose: "focus:outline-rose-600 dark:focus:outline-rose-500",
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
