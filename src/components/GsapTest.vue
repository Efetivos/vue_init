
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

export default { mounted () { 
    TweenMax.from('#red', 5, {width: 0});

    const tlVueGsap = new TimelineMax()
    .from('#blue', 5, {width: 0})
    .to('#blue', 5, {x: 400})
    
    $('#yellow').hide();
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
    background-color: blue;
}
#yellow{
    background-color: yellow;
}

</style>
