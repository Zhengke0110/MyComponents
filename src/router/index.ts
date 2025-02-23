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
