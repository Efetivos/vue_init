<template>
<div>

   <div class="box">
       <slot></slot>
   </div>
   
</div>
</template>

<script>
import $ from 'jquery';
import {TweenMax} from 'gsap'
 export default {
  mounted () {

    }
 }
</script>

<style>


p {
  color: #fff;
}
.box{
    padding: 50px 50px;
    width: 65vw;
    border: 1px solid #ccc;
    margin: 5vh auto;
    

}


</style>
