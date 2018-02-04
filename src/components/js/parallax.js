import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'
//import DrawSVGPlugin from "gsap/DrawSVGPlugin"
import SplitText from "gsap/SplitText"
import Menuefet from '../Menuefet.vue'
import  nicescroll from 'jquery.nicescroll'


export default { 

  components: {
    'menuefet': Menuefet
  },
    
    created() {
      
        
        //Scrolls to top when view is displaye
        window.scrollTo(0, 0)
        window.document.title = "GSAP Test"
        
           // this.$router.push({ path: '/sobre' })
        
    },
    mounted () { 

      var oldURL = document.referrer;
      alert(oldURL);
    

/*

          $("html").niceScroll({
    	cursoropacitymax: 0.5,
		autohidemode: false,
        zindex: "999",
       scrollspeed: 300,
        Mousescrollstep : 100,
        Smoothscroll : true 
    
    });*/
      
var tl = new TimelineLite, 
mySplitText = new SplitText("#quote", {type:"words,chars"}), 
chars = mySplitText.chars; //an array of all the divs that wrap each character

TweenLite.set("#quote", {perspective:400});

tl.staggerFrom(chars, 2, {opacity:0, scale:0, y:-150, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");



document.getElementById("animate").onclick = function() {
tl.restart();
}

var tlDraw = new TimelineMax()
.from('#s-letter', 4, {drawSVG: '0%'})


        $(window).scroll(function(e) {
            parallax();
          })
          
          
          function parallax() {
            var scroll = $(window).scrollTop();
            var screenHeight = $(window).height();
          
            $('.photo-prlx').each(function() {
              var offset = $(this).offset().top;
              var distanceFromBottom = offset - scroll - screenHeight
              
              if (offset > screenHeight && offset) {
                $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.26) +'px');
              } else {
                $(this).css('background-position', 'center ' + (( -scroll ) * 0.26) + 'px');
              }
            })
          }
           
/*
  // Transition Fail 
    const tlGoTrans = new TimelineMax({onComplete:goNext})
    .to('#yellow',1.3 ,{x:600})

    function goNext () {
        window.location.href = '.#/sobre'

    }
    const scene2 = new ScrollMagic.Scene({
        triggerElement: "#yellow",
        triggerHook: 0.9
    })
    .setTween(tlGoTrans)
    .addTo(controller);
*/


   

    }, //Close Mounted

    beforeRouteLeave(to, from, next) {
        var tlTrans = new TimelineMax({onComplete:next}).to(window, 6, {scrollTo:  0, ease: Power4.easeInOut})
        .to('#body', 2 ,{backgroundColor:'#000'})
        
        
      }

      
}//Close Export Defautl