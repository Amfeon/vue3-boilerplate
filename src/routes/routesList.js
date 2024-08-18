export const routes = [
  { path: '/', component: () => import('@/components/pages/Home/HomePage.vue')  },
  { path: '/about', component: { template:'<div>About</div>' } }
]
