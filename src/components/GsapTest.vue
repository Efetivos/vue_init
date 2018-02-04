
<template>
<div id="body">
<div class="ctn">
  <div class="holder">
    <div class="box"><div class="inner b1"></div></div>
    <div class="box"><div class="inner b2"></div></div>
    <div class="box"><div class="inner b3"></div></div>
    <div class="box"><div class="inner b4"></div></div>
  </div>
</div>
</div>
</template>

<script scoped type="script" src="./js/test.js"></script>

<style>
.ctn {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.ctn .holder {
  display: flex;
  justify-content: center;
  width: 400vw;
  height: 100%;
}
.ctn .holder .box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.inner {
  height: 80%;
  width: 80%;
}

.b1 {
  background: url(http://unsplash.it/1089) center no-repeat;
  background-size: cover;
}

.b2 {
  background: url(http://unsplash.it/1088) center no-repeat;
  background-size: cover;
}

.b3 {
  background: url(http://unsplash.it/1087) center no-repeat;
  background-size: cover;
}

.b4 {
  background: url(http://unsplash.it/1086) center no-repeat;
  background-size: cover;
}

</style>
