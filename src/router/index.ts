import PregList from '@/components/preguntas/PregList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PregList',
      component: PregList
    }
  ]
})

export default router
