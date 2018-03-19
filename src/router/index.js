import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Prices from '@/components/Prices'
import Services from '@/components/Services'
import ForDoctors from '@/components/Fordoctors'
import Spec from '@/components/Spec'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/prices',
      name: 'Prices',
      component: Prices
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/fordoctors',
      name: 'ForDoctors',
      component: ForDoctors
    },
    {
      path: '/specialists',
      name: 'Spec',
      component: Spec
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
