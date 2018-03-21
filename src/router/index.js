import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Prices from '@/components/Prices'
import Services from '@/components/Services'
import ForDoctors from '@/components/Fordoctors'
import Spec from '@/components/Spec'
import About from '@/components/About'
import Neck from '@/components/services/diseases/Neck'
import Chest from '@/components/services/diseases/Chest'
import Lumbar from '@/components/services/diseases/Lumbar'
import Sacral from '@/components/services/diseases/Sacral'
import Interdisk from '@/components/services/diseases/Interdisk'
import Joint from '@/components/services/diseases/Joint'
import Protrusion from '@/components/services/diseases/Protrusion'
import Hernia from '@/components/services/diseases/Hernia'
import Osteo from '@/components/services/diseases/Osteo'
import Machine from '@/components/services/methods/Machine'
import Manual from '@/components/services/methods/Manual'
import Neurology from '@/components/services/methods/Neurology'

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
        },
        {
          path: 'interdisk',
          name: 'Interdisk',
          component: Interdisk
        },
        {
          path: 'joint',
          name: 'Joint',
          component: Joint
        },
        {
          path: 'protrusion',
          name: 'Protrusion',
          component: Protrusion
        },
        {
          path: 'hernia',
          name: 'Hernia',
          component: Hernia
        },
        {
          path: 'osteo',
          name: 'Osteo',
          component: Osteo
        },
        {
          path: 'machine',
          name: 'Machine',
          component: Machine
        },
        {
          path: 'manual',
          name: 'Manual',
          component: Manual
        },
        {
          path: 'neurology',
          name: 'Neurology',
          component: Neurology
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
