<template>
<div>

    <!-- --------- logo-intro --------- -->
    <div class="ctn-logo-intro">
        <div class="holder-logo-intro e-rel">
            <div class="wrap-logo-intro e-abs">
               <img src="./images/logo-efet-branco.svg" alt="Efetivos Comunicacao Visual" class="logo-intro">
            </div>
        </div>
    </div>




    <main class="ctn-main e-wvw e-hvh e-rel e-flex-col">        
        <!-- --------- photo-holder --------- -->
        <img src="./images/intro/eyes1.jpg" alt="" class="slide-intro e-wvw e-img-fit e-hvh mobile-intro">

        
        <!-- --------- holder apenas seja --------- -->
        <div class="box-apenas e-flex e-fix">
            <div class="holder-tracos e-wp e-hp e-rel">
                <div class="traco-apenas e-abs t-top traco-hori e-wp"></div>
                <div class="traco-apenas e-abs t-bottom  traco-hori e-wp"></div>
                <div class="traco-apenas e-abs t-right traco-vert e-hp"></div>
                <div class="traco-apenas e-abs t-left traco-vert e-hp"></div>
            </div>
            <h1 class="apenas e-sans e-white">APENAS SEJA</h1>
        </div>



        <!-- --------- letters Efetivos --------- -->
        <div class="box-letters e-fix">
            <div class="holder-letters">
                <h1 class="eftv-lets e-white">EFETIVOS</h1>
                <h1 class="eftv-lets e-white">EFETIVOS</h1>
                <h1 class="eftv-lets e-white">EFETIVOS</h1>
                <h1 class="eftv-lets e-white">EFETIVOS</h1>
            </div>
        </div>



        <!-- --------- box title efetivos --------- -->
        <div class="box-title-efetivos e-fix">
            <div class="holder-title-efetivos">
                <h1 class="title-efetivos e-sans e-white">EFETIVOS</h1>
            </div>
        </div>
    </main>



<!-- ---------------------- svg play circ ---------------- -->
    <div class="ctn-triggers">
        <div class="holder-triggers e-rel">
           	<svg  class="arrow-down e-abs" xmlns="http://www.w3.org/2000/svg" viewBox="44.693 342 167.747 85.4">
            <g id="arrow-svg-home" transform="translate(212.44 419.4) rotate(180)">

            <g id="arrow" transform="translate(114.635 30.98)">
               <path id="arrow-trg" data-name="Path 5" class="cls-2" d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"/>
            </g>
            <path id="line" class="cls-3" d="M118.289,0H0" transform="translate(0 34.444)"/>
            </g>
         </svg>
            <router-link :to="{path: '/'+name}" tag="div" class="router-play"></router-link>
            <div class="svg-circ btn-prev">
            
            <!--   entrar  -->
               <a href="#" class="enter-home e-sans e-white"> ENTRAR</a>
            
            <!--   STROKES CIRCLE -->
            <svg class="circ-hover" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"     y="0px" width="60px" height="60px" viewBox="0 0 80 80" xml:space="preserve">
                <circle class="static-circle" cx="40" cy="40" r="26" fill="transparent"  stroke="white" stroke-width="3" />

                <!--   STROKES CIRCLE -->    
                <circle class="another-circle" transform="rotate(-90 40 40)" cx="40" cy="40" r="26" fill="transparent" stroke-width="3" />
            </svg>
            </div>
        </div>
    </div> 
    

    <div class="reveal reveal-up e-wvw"></div>
    <div class="reveal reveal-down e-wvw"></div>
</div>
</template>

<script scoped type="script" src="./js/intro.js"></script>
<style scoped src="./css/style_intro.scss" lang="scss"></style>
