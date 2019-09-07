import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from '../components/home/Home'
import App from '../App'
import Vuelidate from 'vuelidate'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
