import { createMemoryHistory, createRouter } from 'vue-router'
import { routes } from '@/routes/routesList.js'

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
