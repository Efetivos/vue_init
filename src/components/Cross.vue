<template>
<div class="body">

  <img src="http://unsplash.it/1094" id="image" alt="">
  <img src="http://cdn140.picsart.com/239070553076212.png" id="mask" alt="">
  <canvas width="1200" height="800" id="canvas"></canvas>

</div>
</template>

<script>
import { webglMixin } from './js/webglMixin';
export default {
 mixins: [ webglMixin],
 
     created() {
       //Scrolls to top when view is displayed
   			window.scrollTo(0, 0)
   			window.document.title = "FASHION 2  | EFETIVOS  "
   },
   mounted () {
     TweenMax.to('a',1,{color:'pink'})
     TweenMax.to('body',1,{backgroundColor:'#333'})
   }
}
</script>

<style>
img{
  display: none;
}

</style>
