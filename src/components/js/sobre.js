
import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'




export default { 
	  created() {
        //Scrolls to top when view is displayed
				window.scrollTo(0, 0)
				window.document.title = "Sobre Efetivos"
		},
		
		mounted(){
			var tlHeader = new TimelineMax({delay:0.5})
	.add('photoS')
	.from('#photoSobre',3,{x: -100, ease: Power4.easeOut},'photoS')
	.from('#photoSobre',1.8,{width:0, ease: Power4.easeOut},'photoS')
	.add('letras','-=2.5')
	.staggerFrom('#E,#f,#e,#t,#i,#v,#o,#s',2,{ y: 300, ease: Power3.easeOut},0.08,'letras')
	.staggerFrom('#E,#f,#e,#t,#i,#v,#o,#s',2,{ opacity:0}, 0.08,'letras')
	.staggerFrom('#descSobre p, #sejaEfetivos',1.3,{opacity: 0, y:50},0.15,'-=1')
;
var controller = new ScrollMagic.Controller();

$('.photoService').each(function(){ 
    var imgs = this;
      
    var tlImgs = new TimelineMax()
    .from(this, 2 ,{ y:50, scale: 1.1, opacity: 0, ease: Power2.easeOut})
	  
	var sceneImgs = new ScrollMagic.Scene({
		triggerElement: this,
      triggerHook: 0.7
        
    })
     
    .setTween(tlImgs)
    .addTo(controller);
    
    });

$('.descService').each(function(){ 
    var infos = this;
      
    var tlinfos = new TimelineMax()
    .from(this, 2 ,{ y:50, opacity: 0, ease: Power2.easeOut})
	  
	var sceneinfos = new ScrollMagic.Scene({
		triggerElement: this,
      triggerHook: 0.9
        
    })
     
    .setTween(tlinfos)
    .addTo(controller);
    
    });
		},
 beforeRouteLeave(to, from, next) {
                var tlTrans = new TimelineMax({onComplete:next}).to(window, 6, {scrollTo:"#body", ease: Power4.easeInOut})
                .to('#body', 2 ,{opacity:0, backgroudColor:'#000'})
                
      }
}
