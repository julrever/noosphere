import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Prices from '@/components/Prices'
import Services from '@/components/Services'
import ForDoctors from '@/components/Fordoctors'
import Spec from '@/components/Spec'
import About from '@/components/About'
import Neck from '@/components/services/Neck'
import Chest from '@/components/services/Chest'
import Lumbar from '@/components/services/Lumbar'
import Sacral from '@/components/services/Sacral'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      component: Services,
      children: [
        {
          path: 'neck',
          name: 'Neck',
          component: Neck
        },
        {
          path: 'chest',
          name: 'Chest',
          component: Chest
        },
        {
          path: 'lumbar',
          name: 'Lumbar',
          component: Lumbar
        },
        {
          path: 'sacral',
          name: 'Sacral',
          component: Sacral
        }
      ]
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
