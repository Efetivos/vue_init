import Vue from 'vue'
import Router from 'vue-router'
import Contato from '@/components/Contato'
import Rla from '@/components/Rla'
import Cross from '@/components/Cross'
import Preloader from '@/components/Preloader'
import GsapTest from '@/components/GsapTest'
import Three from '@/components/Three'
import ThreeText from '@/components/ThreeText'
import Intro from '@/components/Intro'
import Tao from '@/components/Tao'
import Parallax from '@/components/Parallax'
import Menuefet from '@/components/Menuefet'
import Vuetif from '@/components/Vuetif'
import Sloted from '@/components/Sloted'
import Sloted2 from '@/components/Sloted2'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';
import $ from 'jquery'
import { TweenMax, TimelineMax } from 'gsap'
Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/menuefet',
      name: 'Menuefet',
      component: Menuefet
    },
    {
      path: '/tao',
      name: 'Tao',
      component: Tao
    },
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/threetext',
      name: 'ThreeText',
      component: ThreeText
    },
    {
      path: '/three',
      name: 'Three',
      component: Three
    },
    {
      path: '/gsap',
      name: 'GsapTest',
      component: GsapTest
    },
    {
      path: '/vuetif',
      name: 'Vuetif',
      component: Vuetif
    },
    {
      path: '/contato',
      component: Contato, beforeEnter: (to, from, next) => {
        TweenMax.to('.titleContato',10,{opacity:0})
          next();
        }
    },
    {
      path: '/rla',
      component: Rla
    },
    {
      path: '/cross',
      name: 'Cross',
      component: Cross
    },
    {
      path: '/preloader',
      component: Preloader
    },
    {
      path: '/parallax',
      component: Parallax
    },
    {
      path: '/',
      name: 'Sloted',
      component: Sloted
    },
    {
      path: '/sloted2',
      name: 'Sloted2',
      component: Sloted2
    },
    {
      path: '/parallax',
      component: Parallax
    }
  ]
})
