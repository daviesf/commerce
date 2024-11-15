import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Catalog from "../views/AppCatalog.vue";
import Cart from "../views/AppCart.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Catalog", component: Catalog },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
