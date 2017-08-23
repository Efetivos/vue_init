import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'


export default { 
    mounted () { 

    const controller = new ScrollMagic.Controller();

    TweenMax.from('#red', 5, {width: 0});

    const tlVueGsap = new TimelineMax()
    .from('#blue', 5, {width: 0})
    .to('#blue', 5, {x: 400})



    const scene = new ScrollMagic.Scene({
        triggerElement: "#red",
        triggerHook: 0.0001
    })
    .setTween(tlVueGsap)
    .addTo(controller);

    } //Close Mounted
}//Close Export Defautl