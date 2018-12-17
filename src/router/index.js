import Vue from 'vue'
import Router from 'vue-router'

import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})