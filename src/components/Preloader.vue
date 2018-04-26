<template>
<div class="body">
<main id="main">
    <canvas id="view"></canvas>
</main>

    <div class="ctn-photos">
        <div class="photos photos1"></div>
        <div class="photos photos2"></div>
        <div class="photos photos3"></div>
        <div class="photos photos4"></div>
        <div class="photos photos5"></div>
        <div class="photos photos6"></div>
        <div class="photos photos7"></div>
        <div class="photos photos8"></div>
    </div>


</div>
</template>

<script>
import $ from 'jquery';
import {TweenMax} from 'gsap'
import { pixiMixin } from './js/pixiMixin';
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));
export default {
 mixins: [ pixiMixin],
 
     created() {
       //Scrolls to top when view is displayed
   			window.scrollTo(0, 0)
   			window.document.title = " VIDMSAK 2  | EFETIVOS  "
   },
   mounted () {

console.log('url('+images[2]+')');

        var i = 0;
        $(document).ready(function(){
            $(".photos").each(function(i){
                i++
                $(this).css({'background-image':'url('+images[i]+')'});
            });
        });







   }
}
</script>

<style scoped>

body {
  margin: 0;
  overflow: hidden !important;
}

 .ctn-photos {
     flex-direction: column;
     display: flex;
     align-items: center;
     justify-content: center;
     width: 100vw;
 }

.photos {
    width: 60vw;
    height: 80vh;
    margin-top: 35vh;
    background: url('./images/02.png') center no-repeat;
    background-size: cover;
}

</style>
