import Vue from 'vue'
import Router from 'vue-router'
import Contato from '@/components/Contato'
import Rla from '@/components/Rla'
import Sobre from '@/components/Sobre'
import GsapTest from '@/components/GsapTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GsapTest',
      component: GsapTest
    },
    {
      path: '/contato',
      component: Contato
    },
    {
      path: '/rla',
      component: Rla
    },
    {
      path: '/sobre',
      component: Sobre
    }
  ]
})
