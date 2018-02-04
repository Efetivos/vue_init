import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'
import  Draggable  from 'gsap/Draggable'
import  ThrowPropsPlugin from 'gsap/ThrowPropsPlugin'

export default { 
    created() {
        //Scrolls to top when view is displayed
        window.scrollTo(0, 0)
        window.document.title = "GSAP Test"
        
           // this.$router.push({ path: '/sobre' })
        
    },
    mounted () { var winH = window.innerWidth;
        
        TweenMax.from('.holder',2.2,{x:1200, ease: Power3.easeOut})
        var $holder = $('.holder')
        
        Draggable.create($holder , {
          trigger: '.ctn',
          type:'x',  
          edgeResistance: .8,
          bounds:'.ctn',    
          throwProps:true,
          snap: {
                x: function(endValue) {
                  console.log(endValue, Math.round(endValue / winH) * (winH/10));
                    return Math.round(endValue / winH) * winH;
                }, ease:Strong.easeOut
            }  
          
        })

    }, //Close Mounted
/*
      beforeRouteEnter(to, from, next) {
        var tlTransEnter = new TimelineMax({onComplete:next})
        //.to(window, 6, {scrollTo:"#body", ease: Power4.easeInOut})
        .to('.box', .8 ,{opacity:0, backgroudColor:'#000'})
        
}, */
beforeRouteEnter (to, from, next) {
    if (from.name === 'Vuetif' || from.name === 'Sobre'  ){
        next(vm => {
            $('.box').css('background-color','#000');
                 $( ".box" ).trigger( "click" );
            console.log('Veio do Vuetif')
        });
        } else {
            next();
        }
    }
}//Close Export Defautl