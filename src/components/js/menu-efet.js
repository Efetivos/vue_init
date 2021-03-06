import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'


export default { 

      
    created() {
      
        
        //Scrolls to top when view is displaye
        window.scrollTo(0, 0)
        window.document.title = "Menu"
        
           // this.$router.push({ path: '/sobre' })
        
    },
    mounted () { 
      if ($( window ).width() < 960) {
        
        
          var tlMenuEfetMob = new TimelineMax()
            
            .from('.ctn-menu',1.5,{width:0, scale:1.1, x:-49, skewX: -9 , ease: Power2.easeInOut})
            .staggerFrom('.link',1,{autoAlpha:0, x:-300, ease: Power2.easeOut},0.1,'-=1.3')
            .staggerFrom('.menu-icons',1,{autoAlpha:0, y:100, ease: Power2.easeOut},0.1,'-=0.9')
          
            .reverse();
        ;   
        
        $(".trg-menu").click(function() {
        
          tlMenuEfetMob.reversed(!tlMenuEfetMob.reversed());
        });	
          
        } //fecha mobile
        
        
        
        else {
        
          
          
          
          $('.box-link').html(function(){
              
          
            var tlHoverBoxLink = new TimelineMax({paused:true})
              .to(this, 1,{backgroundColor:'#292929'})
              .to($(this).find('a'), 1,{color:'#fff'},'-=1')
          
          $(this).hover(	
            function(){			
              tlHoverBoxLink.play();
            }, 
            
            function(){
              tlHoverBoxLink.reverse();
            })//Close Hover
          
          })//CloseBoxLinkHtml
          
        
          
          var tlMenuEfetMob = new TimelineMax()
            
            .from('.ctn-menu, .box-link',1.5,{width:0, ease: Power3.easeInOut})
            .staggerFrom('.link, span',1,{autoAlpha:0, y:800, ease: Power2.easeOut},0.05,'-=0.6')
            .staggerFrom('.menu-icons',1,{autoAlpha:0, y:100, ease: Power2.easeOut},0.1,'-=0.9')
          
            .reverse();
        ;   
        
        $(".trg-menu").click(function() {
        
          tlMenuEfetMob.reversed(!tlMenuEfetMob.reversed());
        });	
          
        } //Fecha ELSE
        
        
        
  
    }, //Close Mounted

    beforeRouteLeave(to, from, next) {
        var tlTrans = new TimelineMax({onComplete:next}).to(window, 6, {scrollTo:  0, ease: Power4.easeInOut})
        .to('#body', 2 ,{backgroundColor:'#000'})
        
        
      }

      
}//Close Export Defautl