import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',    
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',    
    component: () => import('../views/DeliveryView.vue')
  },
  {
    path: '/chocolate',
    name: 'chocolate',    
    component: () => import('../views/ChocolateView.vue')
  },
  {
    path: '/sweets-set',
    name: 'sweets-set',    
    component: () => import('../views/SweetsSetView.vue')
  },
  {
    path: '/sweets',
    name: 'sweets',    
    component: () => import('../views/SweetsView.vue')
  },
  {
    path: '/cart',
    name: 'cart',    
    component: () => import('../views/CartView.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('../views/NotFoundView.vue'),
  },
  {
    path: "/order-ok",
    component: () => import('../views/OrderOkView.vue'),
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    }
  }
})

export default router
