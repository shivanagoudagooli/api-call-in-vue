import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import SingleImage from '../components/SingleImage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Child',
    component :SingleImage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
