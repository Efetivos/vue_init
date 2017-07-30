//NiceScroll
$(document).ready(function() {  
    
    $("html").niceScroll({
        zindex: "999",
       scrollspeed: 300,
        Mousescrollstep : 100,
        Smoothscroll : true 
    
    });
});



var controller = new ScrollMagic.Controller();

TweenMax.from('#tracoExplore',2,{y: -100, height:0, ease: Power3.easeOut, repeat: -1});

$('.imgProject').each(function(){ 
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

// EACH COVER _ PARALLAX
  var tlCover = new TimelineMax()
  .add("juntos")
  .to(' #exploreContainer',0.5,{opacity:0},"juntos")
  .to('h1',1,{y:-150, opacity:0},"juntos")
  .to('#imgNmd', 2 ,{scale: 1.2, opacity:0.5},"juntos")
  
	  
	var sceneImgs = new ScrollMagic.Scene({
		triggerElement: '#imgNmd',
		duration: 750,
      triggerHook: 0.00001
        
    })
    
    .setTween(tlCover )
    .addTo(controller);