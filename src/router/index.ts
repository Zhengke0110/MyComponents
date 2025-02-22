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
