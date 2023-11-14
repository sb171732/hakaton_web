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
    path: '/menu',
    name: 'menu',
    component: () => import( '../views/MenuView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
