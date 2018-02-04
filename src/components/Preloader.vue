<template>
<div class="body">
<main id="main">
    <canvas id="view"></canvas>
</main>

</div>
</template>

<script>
import $ from 'jquery';
import {TweenMax} from 'gsap'
import { pixiMixin } from './js/pixiMixin';
export default {
 mixins: [ pixiMixin],
 
     created() {
       //Scrolls to top when view is displayed
   			window.scrollTo(0, 0)
   			window.document.title = " VIDMSAK 2  | EFETIVOS  "
   },
   mounted () {
   }
}
</script>

<style scoped>

body {
  margin: 0;
  overflow: hidden !important;
}
main {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #dddddd;
}


</style>
