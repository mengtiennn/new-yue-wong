import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "homePage",
    component: () => import("../views/homePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes],
});
export default router;
