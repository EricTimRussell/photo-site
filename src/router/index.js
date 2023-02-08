import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/collections',
      name: 'Collections',
    },
    {
      path: '/market',
      name: 'Market',
    },
  ]
})

export default router


