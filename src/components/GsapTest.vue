
<template>
<div>
    <div class="box"  id="red"></div>
    <div class="box"  id="blue"></div>
    <div class="box"  id="yellow"></div>
    </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
import ScrollGsap from 'scrollmagic'


export default { mounted () { 
    TweenMax.from('#red', 5, {width: 0});

    const tlVueGsap = new TimelineMax()
    .from('#blue', 5, {width: 0})
    .to('#blue', 5, {x: 400})

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        triggerElement: "#red"
    })
    .setTween(tlVueGsap)
    .addTo(controller);


    //$('#yellow').hide();
    } //Close Mounted
}//Close Export Defautl


</script>

<style>
.box{
    margin: 50px 50px;
    width: 80px;
    height: 80px;
}
#red{
    background-color: red;
}
#blue{
    position: absolute;
    background-color: blue;
}
#yellow{
    margin-top: 2000px;
    background-color: yellow;
}

</style>
