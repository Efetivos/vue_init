<template>
  <div class="sloted">
    <partials class="classed"> <p>Oiiii</p> </partials>
    <partials> <p class="ola">Vish</p> </partials>      
  </div>
</template>

<script>
import $ from "jquery";
import { TweenMax } from "gsap";
import Partials from "./partials/Partials.vue";
export default {
  components: {
    partials: Partials
  },

  mounted() {
    
         TweenMax.to('.ola',5,{color:'blue'})
        // TweenMax.to('.classed',5,{opacity:0})
  }
};
</script>

<style lang="scss">

.sloted {
  .classed  {
    .box {
     background: url(http://unsplash.it/1045) center no-repeat / cover;
    }
  }
  p, h1 {
    color: #fff;
  }

  .ola {
    color: red;
  }
}
</style>
