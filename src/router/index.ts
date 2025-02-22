import { createRouter, createWebHistory } from "vue-router";
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
  }, {
    path: "/Calendars",
    name: "Calendars",
    component: () => import("@/lib/Calendars/Demo.vue"),
  },
  {
    path: "/ColorInput",
    name: "ColorInput",
    component: () => import("@/lib/ColorInput/Demo.vue"),
  },
  {
    path: "/Dialog",
    name: "Dialog",
    component: () => import("@/lib/Dialog/Demo.vue"),
  },
  {
    path: "/Dropdowns",
    name: "Dropdowns",
    component: () => import("@/lib/Dropdowns/Demo.vue"),
  },
  {
    path: "/ModalBox",
    name: "ModalBox",
    component: () => import("@/lib/ModalBox/Demo.vue"),
  },
  {
    path: "/Pagination",
    name: "Pagination",
    component: () => import("@/lib/Pagination/Demo.vue"),
  },
  {
    path: "/Popover",
    name: "Popover",
    component: () => import("@/lib/Popover/Demo.vue"),
  },
  {
    path: "/RoundProgress",
    name: "RoundProgress",
    component: () => import("@/lib/RoundProgress/Demo.vue"),
  },
  {
    path: "/SearchInput",
    name: "SearchInput",
    component: () => import("@/lib/SearchInput/Demo.vue"),
  },
  {
    path: "/Segment",
    name: "Segment",
    component: () => import("@/lib/Segment/Demo.vue"),
  },
  {
    path: "/SelectMenus",
    name: "SelectMenus",
    component: () => import("@/lib/SelectMenus/Demo.vue"),
  },
  {
    path: "/Tabs",
    name: "Tabs",
    component: () => import("@/lib/Tabs/Demo.vue"),
  },
  {
    path: "/TagsInput",
    name: "TagsInput",
    component: () => import("@/lib/TagsInput/Demo.vue"),
  },
  {
    path: "/TagsList",
    name: "TagsList",
    component: () => import("@/lib/TagsList/Demo.vue"),
  },
  {
    path: "/TextInput",
    name: "TextInput",
    component: () => import("@/lib/TextInput/Demo.vue"),
  },
  {
    path: "/demo",
    name: "Tooltip",
    component: () => import("@/lib/Tooltip/Demo.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
