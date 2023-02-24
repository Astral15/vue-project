import { createRouter, createWebHistory } from 'vue-router'
import routes from './routs'

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router