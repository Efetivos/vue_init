<template>
  <div id="app">
    <div id="logoContainer"><div id="logo"></div></div>
    <div class="ctn-menu">
      <router-link to="/"></router-link>
      <router-link to="/vuetif">Vuetif</router-link>
      <router-link to="/sobre">Sobre</router-link>
      <router-link to="/preloader">Preloader</router-link>
       <router-link to="/gsap">GSAP</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

import $ from 'jquery';
import {TweenMax} from 'gsap'

export default {
    methods: {
    myFunction: function () {
    }
  },

  mounted (){

  }
}

</script>

<style src="./components/css/css_app.css"></style>