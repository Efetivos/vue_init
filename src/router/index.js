import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Contato from '@/components/Contato'
import Rla from '@/components/Rla'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/contato',
      component: Contato
    },
    {
      path: '/rla',
      component: Rla
    }
  ]
})
