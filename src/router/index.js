import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/wood-ridge",
      component: () => import("../views/WoodRidgeView.vue"),
    },
    {
      path: "/sp-aice",
      component: () => import("../views/SpaiceView.vue"),
    },
  ],
});

export default router;
