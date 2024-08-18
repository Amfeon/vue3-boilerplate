export const routes = [
  { path: '/', component: () => import('@/components/pages/Home/HomePage.vue') },
  { path: '/about', component: () => import('@/components/pages/About/AboutPage.vue') }
]
