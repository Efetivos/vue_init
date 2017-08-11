<template>
    <div id="box">    
    </div>
</template>

<script>
import { TweenMax } from 'gsap'

export default { mounted () { TweenMax.from('#box', 5, {width: 0}) }
}
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
