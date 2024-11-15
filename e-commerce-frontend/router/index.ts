import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import Cart from '../views/Cart.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: ProductList },
  { path: '/cart', component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;