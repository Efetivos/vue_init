<template>
    <div id="box">    
    </div>
</template>

<script>
import { TweenMax } from 'gsap'
import $ from 'jquery'

export default {
}

TweenMax.to('#box', 10, {width: 0})

$('#box').hide()
</script>

<style>
#box{
    position: absolute;
    margin: 50px 50px;
    width: 80px;
    height: 80px;
    background-color: red;
}

</style>
