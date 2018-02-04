
<template>

<div id="para"> 
  
  <div class="section s0"></div>
<div class="section s1"></div>
<div class="box"><div class="section s2"></div></div>
<div class="section s3"></div>
<div class="section s4"></div>
<div class="section s5"></div>
<div class="section s6"></div>
</div>
</template>

<script scoped  type="script" src="./js/parallax.js"></script>

<style scoped> 


/* INSERIDO NO CSS DO APP.VUE
html {
  height: 100%;
  overflow: hidden;
}
body { 
  margin:0;
  padding:0;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  perspective: 1px;
}*/

.box{
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.section {
  position: relative;
  height: 100vh;
  width: 100vw;
  background: 50% 50% / cover;  
  background-color: #000;
}
.s0{
  background-image: url('https://i.imgur.com/zuxuTsN.jpg');
  transform: translateZ(-1px) scale(2);
  z-index:-1;

}

.s2{
  background-image: url('https://i.imgur.com/Nubk9vB.jpg');
  transform: translateZ(-1px) scale(2);
  z-index:-1;
  width: 40%;

}
.s4 {
 background-image: url('https://i.imgur.com/KG3VSS4.jpg');
 transform: translateZ(-1px) scale(2);
 z-index:-1;
}
.s6 {
 background-image: url('https://i.imgur.com/Qj3LdS6.jpg');
 transform: translateZ(-1px) scale(2);
 z-index:-1;
 
}
</style>
