import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BureauView from '../views/BureauView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // 2. Définis l'adresse URL
      path: '/bureau', 
      name: 'bureau',
      component: BureauView
    }
  ]
})

export default router