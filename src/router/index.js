import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/FoodProviders.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fp',
    name: 'fp',
    component: () => import( '../views/FoodProviders.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import( '../views/MenuView.vue')
  },
  {
    path: '/zac',
    name: 'zac',
    component: () => import( '../views/ZacView.vue')
  }
  
]

const router = new VueRouter({
  routes,
  // duplicateNavigationPolicy: 'ignore'
})

export default router
