
//NiceScroll
$(document).ready(function() {  
    
    $("html").niceScroll({
        zindex: "999",
       scrollspeed: 300,
        Mousescrollstep : 100,
        Smoothscroll : true 
    
    });
	
	TweenMax.set('#all',{autoAlpha:0});
});


var tlChangeImgs = new TimelineMax()
	
	.add('changeBmw')
	.set('.imgsIntro',{delay: 0.5, className:'+=introBmw'},'changeBmw')

	.add('changeMarc','+=0.4')
	.set('.imgsIntro',{className:'-=introBmw'},'changeMarc')
	.set('.imgsIntro',{className:'+=introMarc'},'changeMarc')

	.add('changeBB','+=0.4')
	.set('.imgsIntro',{className:'-=introMarc'},'changeBB')
	.set('.imgsIntro',{className:'+=introBB'},'changeBB')

	.add('changeRLA','+=0.3')
	.set('.imgsIntro',{className:'-=introBB'},'changeRLA')
	.set('.imgsIntro',{className:'+=introRLA'},'changeRLA')

	.add('changeUltra','+=0.3')
	.set('.imgsIntro',{className:'-=introRLA'},'changeUltra')
	.set('.imgsIntro',{className:'+=introUltra'},'changeUltra')

	.add('changeProsp','+=0.2')
	.set('.imgsIntro',{className:'-=introUltra'},'changeProsp')
	.set('.imgsIntro',{className:'+=introProsp'},'changeProsp')

	.add('changeCof','+=0.1')
	.set('.imgsIntro',{className:'-=introProsp'},'changeCof')
	.set('.imgsIntro',{className:'+=introCof'},'changeCof')

	.add('changeEMS','+=0.1')
	.set('.imgsIntro',{className:'-=introCof'},'changeEMS')
	.set('.imgsIntro',{className:'+=introEms'},'changeEMS')
	.add('goFader','+=0.5')
	.fromTo('#faderIntroGrey',0.5,{bottom:0, height:0}, {height:"100%", ease: Power3.easeOut},'goFader')
	.fromTo('#faderIntroBlack',0.8,{bottom:0, height:0}, {height:"100%", ease: Power3.easeOut},'goFader')
	
	



	.to(".coverIntro",3.8, {height:"100%"},0.2)
	


//TimelineInit
var tlLines = new TimelineMax()
	.staggerFromTo('#lineVert1, #lineVert2',1.2,{height:0}, {height:"100vh", ease: Power3.easeOut},0.4)
	.staggerFromTo('#lineHori1, #lineHori2',1.2,{width:0}, {width:'100vw', ease: Power3.easeOut},0.4,'-=1.5')
	.from('#body',1,{backgroundColor:'#black'},'-=1')
	.from('#menu, #logo',0.5,{autoAlpha:0,y:-200})
	.from('#all',0.4,{autoAlpha:0})
	
	.add(goAll,'-=0.6')

;


function goAll(){
	

//InitPredefines
var controller = new ScrollMagic.Controller();
TweenMax.set('#menuContainer,#logo, h1',{zIndex:02});
TweenMax.set(' #gradeVert, #gradeHori',{zIndex:01});


// EACH COVER _ PARALLAX
  $('.TitleProject').each(function(){ 
    var parallax = this;
      
    var tlParallax = new TimelineMax()
    .to(this, 10 ,{backgroundPosition: "top 200px", ease: Power4.easeOut})
	  
	var scenePara = new ScrollMagic.Scene({
		triggerElement: this,
		duration: 2000,
      triggerHook: 1
        
    })
    
    .setTween(tlParallax)
    .addTo(controller);
    
    });


// EACH COVER _ SCALE REVEAL
  $('.coverProject').each(function(){ 
    var covers = this;
      
    var tlCovers = new TimelineMax()
    .from(this,1,{opacity: 0.8, height:"50vh", scale: 0.9, ease: Quart.easeOut})
	  
	var sceneCover = new ScrollMagic.Scene({
		triggerElement: this,
      triggerHook: 1
        
    })
    
    .setTween(tlCovers) // trigger a TweenMax.to tween
 //   .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    
    });





//BgBLACKBARBA
var bodyBB = new TimelineMax()
		.to('#body', 1, {css:{backgroundColor:'#bca77b'}})
		
		;

   var scene = new ScrollMagic.Scene({
		triggerElement: '#h1bb',
		duration:400,
      triggerHook: 1
    })    
    .setTween(bodyBB)
    .addTo(controller);

//BgMarconatto
var bodyMarc = new TimelineMax()
		.to('#body', 1, {css:{backgroundColor:'#e7e8e7'}})
		;

   var scene2 = new ScrollMagic.Scene({
		triggerElement: '#h1marc',
		duration:400,
      triggerHook: 1
    })    
    .setTween(bodyMarc)
    .addTo(controller);

//BgULTRA
var bodyUltra = new TimelineMax()
		.to('#body', 1, {css:{backgroundColor:'#2f2f2f'}})
		;

   var scene3 = new ScrollMagic.Scene({
		triggerElement: '#h1Ultra',
		duration:400,
      triggerHook: 1
    })    
    .setTween(bodyUltra) 
    .addTo(controller);

//BgCoffe
var bodyCof = new TimelineMax()
		.to('#body', 1, {css:{backgroundColor:'#d6c7bb'}})
		;

   var scene4 = new ScrollMagic.Scene({
		triggerElement: '#h1Cof',
		duration:400,
      triggerHook: 1
    })    
    .setTween(bodyCof)
    .addTo(controller);

//BgBMW
var bodyBmw = new TimelineMax()
		.to('#body', 1, {css:{backgroundColor:'#191919'}})
		;

   var scene5 = new ScrollMagic.Scene({
		triggerElement: '#h1Bmw',
		duration:400,
      triggerHook: 1
    })    
    .setTween(bodyBmw) 
    .addTo(controller);

//BgProspero
var bodyProsp = new TimelineMax()
		.to('#body', 1, {css:{backgroundColor:'#d9ceea'}})
		;

   var scene6 = new ScrollMagic.Scene({
		triggerElement: '#h1Prosp',
		duration:400,
      triggerHook: 1
    })    
    .setTween(bodyProsp)
    .addTo(controller);



//BgRLA
var bodyRLA = new TimelineMax()
		.to('#body', 1, {css:{backgroundColor:'#fcdacf'}})
		;

   var scene7 = new ScrollMagic.Scene({
		triggerElement: '#h1RLA',
		duration:400,
      triggerHook: 1
    })    
    .setTween(bodyRLA)
    .addTo(controller);

//BgEMS
var bodyEms = new TimelineMax()
		.to('#body', 1, {css:{backgroundColor:'#e0e0e0'}})
		;

   var scene8 = new ScrollMagic.Scene({
		triggerElement: '#h1Ems',
		duration:400,
      triggerHook: 1
    })    
    .setTween(bodyEms)
    //.addIndicators({name: "Ems", colorEnd: "#e0e0e0"}) 
    .addTo(controller);
	
	}


//ScrollToPlugging
$('#h1Nmd').click(function(){	
	TweenMax.to(window, 1, {scrollTo:"#nmdSection", onComplete: goNmd});

  function goNmd(){
  window.location = "./adidasnmd.html";          
}
});

$('#h1bb').click(function(){	
	TweenMax.to(window, 1, {scrollTo:"#bbSection", onComplete: goBb});
	
	function goBb(){
  window.location = "./blackbarba.html";          
}
});

$('#h1Ultra').click(function(){	
	TweenMax.to(window, 1, {scrollTo:"#ultraSection", onComplete: goUltra});
	
		function goUltra(){
  window.location = "./adidasultra.html";          
}
});

$('#h1marc').click(function(){	
	TweenMax.to(window, 1, {scrollTo:"#marcSection", onComplete: goMarc});
	
		function goMarc(){
  window.location = "./marconatto.html";          
}
});
	
$('#h1Cof').click(function(){	
	TweenMax.to(window, 1, {scrollTo:"#coffSection", onComplete: goCof});
	
		function goCof(){
  window.location = "./coffeelings.html";          
}
});
	
$('#h1Bmw').click(function(){	
	TweenMax.to(window, 1, {scrollTo:"#bmwSection", onComplete: goBmw});
	
		function goBmw(){
  window.location = "./bmw.html";          
}
});
	
$('#h1Prosp').click(function(){	
	TweenMax.to(window, 1, {scrollTo:"#prospSection",onComplete: goProsp});
	
		function goProsp(){
  window.location = "./prospero.html";          
}
});
	
$('h1#h1RLA').click(function(){	
	TweenMax.to(window, 1, {scrollTo:"#rlaSection", onComplete: goRla});
	
		function goRla(){
  window.location = "./rla.html";          
}
});

$('#h1Ems').click(function(){	
	TweenMax.to(window, 1, {scrollTo:"#emsSection", onComplete: goEms});
	
		function goEms(){
  window.location = "./ems.html";          
}
});

var MasterTL = new TimelineMax()
	.add(tlChangeImgs)
	.to('.sectionIntro',0.5,{autoAlpha:0})
	.add(tlLines,'-=1');
