import { createRouter, createWebHistory } from 'vue-router';

// Lazy loading views
const HomeView = () => import('../views/HomeView.vue');
const ProductView = () => import('../views/ProductView.vue');
const AboutView = () => import('../views/AboutView.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
