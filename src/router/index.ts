import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'signup',
      path: '/signup',
      component: () => import('@/views/SignUpView.vue')
    }
  ]
})

export default router
