<template>
<div>

   <router-link to="sloted2" class="box">

       <slot></slot>
       <p>mais coisas</p>

   </router-link>
</div>
</template>

<script>
import $ from 'jquery';
import {TweenMax} from 'gsap'
 export default {
mounted () {
    $('.oi').text('Go to Slot II')
   }
 }
</script>

<style scoped >
body{
  background: #e2e2e2;
  display:flex;
  align-items: center;
  justify-content: center;
}

p {
  color: #fff;
}
.box{
    padding: 50px 50px;
    width: 65vw;
    border: 1px solid #ccc;
    margin: 5vh auto;
    position: fixed;

}


</style>
