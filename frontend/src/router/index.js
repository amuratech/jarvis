import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './../components/Dashboard'
import About from './../components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
