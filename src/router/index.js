import Vue from 'vue'
import Router from 'vue-router'
import Slot from '@/pages/slot/index'
import Layout from '@/pages/layout'
import Directive from '@/pages/directive/index'
import Prop from '@/pages/prop/index'
import Component from '@/pages/components/index'
import LifeCycle from '@/pages/lifecycle/index'
import Comflex from '@/pages/lifecycle/father'
import Brother from '@/pages/lifecycle/brother'
import Bus from '@/pages/bus/index'
import Store from '@/pages/store/index'
import Filter from '@/pages/filter/index'
import Permission from '@/pages/permission/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      redirect: '/single'
    },
    {
      path: '',
      component: Layout,
      children: [
        {
          path: '/slot',
          name: 'slot',
          component: Slot
        },
        {
          path: '/single',
          name: 'single',
          component: LifeCycle
        },
        {
          path: '/brother',
          name: 'brother',
          component: Brother
        },
        {
          path: '/comflex',
          name: 'comflex',
          component: Comflex
        },
        {
          path: '/component',
          name: 'component',
          component: Component
        },
        {
          path: '/directive',
          name: 'directive',
          component: Directive
        },
        {
          path: '/prop',
          name: 'prop',
          component: Prop
        },
        {
          path: '/bus',
          name: 'bus',
          component: Bus
        },
        {
          path: '/store',
          name: 'store',
          component: Store
        },
        {
          path: '/filter',
          name: 'filter',
          component: Filter
        },
        {
          path: '/permission',
          name: 'permission',
          component: Permission
        }
      ]
    }
  ]
})
