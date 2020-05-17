import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' //add
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'


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
    name: 'index',
    component: 'Index'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
