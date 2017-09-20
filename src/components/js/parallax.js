import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'


export default { 
    
    created() {
        
        //Scrolls to top when view is displayed
        window.scrollTo(0, 0)
        window.document.title = "GSAP Test"
        
           // this.$router.push({ path: '/sobre' })
        
    },
    mounted () { 
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
                $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.2) +'px');
              } else {
                $(this).css('background-position', 'center ' + (( -scroll ) * 0.2) + 'px');
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