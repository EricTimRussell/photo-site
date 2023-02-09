import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CollectionsView from '../views/CollectionsView.vue'
import MarketView from '../views/MarketView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/collections',
      name: 'Collections',
      component: CollectionsView
    },
    {
      path: '/market',
      name: 'Market',
      component: MarketView
    }
  ]
})

export default router


