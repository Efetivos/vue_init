
<template>
<div id="body">
  
<div class="photo-prlx photo"></div>
<div class="ctn-divisor"></div>

<div class="photo-prlx photo"></div>
<div class="ctn-divisor"></div>


<div class="photo-prlx photo"></div>
<div class="ctn-divisor"></div>


<div class="photo-prlx photo"></div>
<div class="ctn-divisor"></div>



    <div id="btn-back" ><router-link to="/sobre">Go Back Home</router-link></div>  
</div>
</template>

<script type="script" src="./js/parallax.js"></script>

<style>    
* {
  transition: all ease-in-out 250ms;
}  

.ctn-divisor{
  height: 100vh;
  width:100vw;
  opacity: 0.6;
}
.photo{
   height: 120vh;
  width:65vw;
}
.photo-prlx {

  background: url(http://static1.purepeople.com.br/articles/7/19/19/47/@/2228537-nicki-minaj-apostou-na-producao-superjus-950x0-4.jpg) center no-repeat;
   background-size: cover;
}
.photo-prlx{
  transition: initial;
}
</style>
