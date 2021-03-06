import Vue from 'vue'
import VueRouter from 'vue-router'
import Stats from '../views/Stats.vue'
import TubControl from '../views/TubControl.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TubControl',
    component: TubControl
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
