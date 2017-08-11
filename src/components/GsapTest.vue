<template>
<div>
    <div id="box"></div>
    <div id="box2"></div>
    </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap'
// import { TimelineMax } from 'gsap'

export default { mounted () { TweenMax.from('#box', 5, {width: 0}); const tlVueGsap = new TimelineMax(); tlVueGsap.from('#box2', 5, {width: 0}).to('#box', 5, {opacity: 0}) }
}
</script>

<style>
#box{
    margin: 50px 50px;
    width: 80px;
    height: 80px;
    background-color: red;
}
#box2{
    margin: 50px 50px;
    width: 80px;
    height: 80px;
    background-color: blue;
}

</style>
