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
    path: "/Main",
    name: "Main",
    component: () => import("@/layout/GlobalMain"),
    children: [
      {
        path: "/Alert",
        name: "Alert",
        component: () => import("@/libs/Alert"),
      },
      {
        path: "/Avatar",
        name: "Avatar",
        component: () => import("@/libs/Avatar"),
      },
      {
        path: "/Badge",
        name: "Badge",
        component: () => import("@/libs/Badge"),
      },
      {
        path: "/Button",
        name: "Button",
        component: () => import("@/libs/Button"),
      },
      {
        path: "/ButtonGroups",
        name: "ButtonGroups",
        component: () => import("@/libs/ButtonGroups"),
      },
      {
        path: "/Calendars",
        name: "Calendars",
        component: () => import("@/libs/Calendars"),
      },
      {
        path: "/Card",
        name: "Card",
        component: () => import("@/libs/Card"),
      },
      {
        path: "/Carousel",
        name: "Carousel",
        component: () => import("@/libs/Carousel"),
      },
      {
        path: "/CheckBox",
        name: "CheckBox",
        component: () => import("@/libs/CheckBox"),
      },
      {
        path: "/ColorInput",
        name: "ColorInput",
        component: () => import("@/libs/ColorInput"),
      },
      {
        path: "/Comment",
        name: "Comment",
        component: () => import("@/libs/Comment"),
      },
      {
        path: "/Dialog",
        name: "Dialog",
        component: () => import("@/libs/Dialog"),
      },
      {
        path: "/Divider",
        name: "Divider",
        component: () => import("@/libs/Divider"),
      },
      {
        path: "/Drawer",
        name: "Drawer",
        component: () => import("@/libs/Drawer"),
      },
      {
        path: "/Dropdowns",
        name: "Dropdowns",
        component: () => import("@/libs/Dropdowns"),
      },
      {
        path: "/Empty",
        name: "Empty",
        component: () => import("@/libs/Empty"),
      },
      {
        path: "/ImagePreview",
        name: "ImagePreview",
        component: () => import("@/libs/ImagePreview"),
      },
      {
        path: "/Message",
        name: "Message",
        component: () => import("@/libs/Message/View.vue"),
      },
      {
        path: "/ModalBox",
        name: "ModalBox",
        component: () => import("@/libs/ModalBox"),
      },
      {
        path: "/Notification",
        name: "Notification",
        component: () => import("@/libs/Notification"),
      },
      {
        path: "/Pagination",
        name: "Pagination",
        component: () => import("@/libs/Pagination"),
      },
      {
        path: "/Popover",
        name: "Popover",
        component: () => import("@/libs/Popover"),
      },
      {
        path: "/Progress",
        name: "Progress",
        component: () => import("@/libs/Progress"),
      },
      {
        path: "/RadioBox",
        name: "RadioBox",
        component: () => import("@/libs/RadioBox"),
      },
      {
        path: "/Rate",
        name: "Rate",
        component: () => import("@/libs/Rate"),
      },
      {
        path: "/Result",
        name: "Result",
        component: () => import("@/libs/Result"),
      },
      {
        path: "/Segment",
        name: "Segment",
        component: () => import("@/libs/Segment"),
      },
      {
        path: "/SelectMenus",
        name: "SelectMenus",
        component: () => import("@/libs/SelectMenus"),
      },
      {
        path: "/Slider",
        name: "Slider",
        component: () => import("@/libs/Slider"),
      },
      {
        path: "/Spin",
        name: "Spin",
        component: () => import("@/libs/Spin"),
      },
      {
        path: "/Steps",
        name: "Steps",
        component: () => import("@/libs/Steps"),
      },
      {
        path: "/SwitchBox",
        name: "SwitchBox",
        component: () => import("@/libs/SwitchBox"),
      },
      {
        path: "/Tab",
        name: "Tab",
        component: () => import("@/libs/Tab"),
      },
      {
        path: "/TagsList",
        name: "TagsList",
        component: () => import("@/libs/TagsList"),
      },
      {
        path: "/TextInput",
        name: "TextInput",
        component: () => import("@/libs/TextInput"),
      },
      {
        path: "/Timeline",
        name: "Timeline",
        component: () => import("@/libs/Timeline"),
      },
      {
        path: "/Tooltip",
        name: "Tooltip",
        component: () => import("@/views/TooltipView"),
      },
      {
        path: "/Waterfall",
        name: "Waterfall",
        component: () => import("@/libs/Waterfall"),
      },
    ],
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
