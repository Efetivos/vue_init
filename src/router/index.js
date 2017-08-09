import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Contato from '@/components/Contato'

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
    }
  ]
})
