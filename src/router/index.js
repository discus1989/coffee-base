import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' //add
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Show from '../views/Show.vue'
import Beans from '../views/Beans.vue'
import Tools from '../views/Tools.vue'
import Shops from '../views/Shops.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue) //add

import 'bootstrap/dist/css/bootstrap.css' //add
import 'bootstrap-vue/dist/bootstrap-vue.css' //add

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  },
  {
    path: '/beans',
    name: 'Beans',
    component: Beans
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/shops',
    name: 'Shops',
    component: Shops
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
