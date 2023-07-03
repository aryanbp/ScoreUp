import Vue from 'vue'
import VueRouter from 'vue-router'
import Scoreboard from '../views/Scoreboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Scoreboard
  },
  {
    path: '/submissions',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Submissions.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
