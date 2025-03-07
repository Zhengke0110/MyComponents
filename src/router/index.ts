import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/Button",
    name: "Button",
    component: () => import("@/views/ButtonView"),
  },
  {
    path: "/Message",
    name: "Message",
    component: () => import("@/views/MessageView"),
  },
  {
    path: "/Badges",
    name: "Badges",
    component: () => import("@/views/BadgesView"),
  },
  {
    path: "/Calendars",
    name: "Calendars",
    component: () => import("@/views/CalendarsView"),
  },
  {
    path: "/CheckBox",
    name: "CheckBox",
    component: () => import("@/views/CheckBoxView"),
  },
  {
    path: "/ColorInput",
    name: "ColorInput",
    component: () => import("@/views/ColorInputView"),
  },
  {
    path: "/Dialog",
    name: "Dialog",
    component: () => import("@/views/DialogView"),
  },
  {
    path: "/Dropdowns",
    name: "Dropdowns",
    component: () => import("@/views/DropdownsView"),
  },
  {
    path: "/ModalBox",
    name: "ModalBox",
    component: () => import("@/views/ModalBoxView"),
  },
  {
    path: "/Pagination",
    name: "Pagination",
    component: () => import("@/views/PaginationView"),
  },
  {
    path: "/Popover",
    name: "Popover",
    component: () => import("@/views/PopoverView"),
  },
  {
    path: "/RoundProgress",
    name: "RoundProgress",
    component: () => import("@/views/RoundProgressView"),
  },
  {
    path: "/SearchInput",
    name: "SearchInput",
    component: () => import("@/views/SearchInputView"),
  },
  {
    path: "/Segment",
    name: "Segment",
    component: () => import("@/views/SegmentView"),
  },
  {
    path: "/SelectMenus",
    name: "SelectMenus",
    component: () => import("@/views/SelectMenusView"),
  },
  {
    path: "/Tabs",
    name: "Tabs",
    component: () => import("@/views/TabsView"),
  },
  {
    path: "/TagsList",
    name: "TagsList",
    component: () => import("@/views/TagsListView"),
  },
  {
    path: "/TextInput",
    name: "TextInput",
    component: () => import("@/views/TextInputView"),
  },
  {
    path: "/Tooltip",
    name: "Tooltip",
    component: () => import("@/views/TooltipView"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
