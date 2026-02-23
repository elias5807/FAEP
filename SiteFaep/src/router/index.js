import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BureauView from '../views/BureauView.vue' 
import AgoView from '../views/AgoView.vue'
import IutView from '../views/Campus/IutView.vue'
import CitadelleView from '../views/Campus/CitadelleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bureau', 
      name: 'bureau',
      component: BureauView
    },
    {
      path: '/ago',
      name: 'ago',
      component: AgoView
    },
    {
      path: '/iut',
      name: 'iut',
      component: IutView
    },
    {
      path: '/citadelle',
      name: 'citadelle',
      component: CitadelleView
    }
  ]
})

export default router