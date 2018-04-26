
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

<button @click="sobre" class="sobre-btn"> Sobre </button>

<h1> CARREGADO: <span>00</span>%</h1>
  <div id="state"></div>
  <div id="progress">...</div>
  <div id="progressbar">
    <div class="bar"></div>
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
  background: url() center no-repeat;
  background-size: cover;
}

.b2 {
  background: url() center no-repeat;
  background-size: cover;
}

.b3 {
  background: url() center no-repeat;
  background-size: cover;
}

.b4 {
  background: url() center no-repeat;
  background-size: cover;
}

h1 {
  position: fixed;
  z-index: 5;
  margin: 23%;
  color: red;
}

html,
body {
  background-color: #1e1e1e;
  color: white;
}

#state {
  color: #c8c8c8;
  font-family: Monaco;
  font-size: 12px;
  line-height: 1em;
  padding: 20px;
  text-align: center;
}

#progress {
  font-size: 50px;
  left: 50%;
  letter-spacing: 0.1em;
  margin: -25px 0 0 -100px;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 200px;
}

#progressbar {
  left: 10%;
  position: absolute;
  text-align: center;
  top: 55%;
  right: 10%;
  width: 100%;
}
#progressbar .bar {
  -moz-box-shadow: cyan 0 0 10px 1px;
  -webkit-box-shadow: cyan 0 0 10px 1px;
  box-shadow: cyan 0 0 10px 1px;
  -moz-transition: all 300ms;
  -o-transition: all 300ms;
  -webkit-transition: all 300ms;
  transition: all 300ms;
  background-color: cyan;
  height: 1px;
  display: inline-block;
  width: 100%;
  margin-left: -20vw;
}
#progressbar .bar.complete {
  -moz-box-shadow: rgba(255, 0, 0, 0) 0 0 10px 10px;
  -webkit-box-shadow: rgba(255, 0, 0, 0) 0 0 10px 10px;
  box-shadow: rgba(255, 0, 0, 0) 0 0 10px 10px;
}

.sobre-btn {
  position: absolute;
  margin-top: 25vh;
  z-index: 2;
  cursor: pointer;
}

</style>
