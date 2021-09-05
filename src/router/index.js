import { createRouter, createWebHistory } from 'vue-router'
import GlobalCompsiteOperationPractice from '../views/GlobalCompsiteOperationPractice.vue'

const routes = [
  {
    path: '/globalCompsiteOperationPractice',
    name: 'globalCompsiteOperationPractice',
    component: GlobalCompsiteOperationPractice
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
