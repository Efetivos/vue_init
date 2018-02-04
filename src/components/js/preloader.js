import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'
import imagesLoaded from 'imagesloaded'


export default { 
    created() {
        //Scrolls to top when view is displayed
        window.scrollTo(0, 0)
        window.document.title = "PRELOADER"
        
           // this.$router.push({ path: '/sobre' })
        
    },
    mounted () { 

        var oldURL = document.referrer;
        console.log(oldURL)
        console.log(from.path)
        
        imagesLoaded.makeJQueryPlugin( $ );
        
        
        
        var loadedCount = 0; 
        var imagesToLoad = $('.photo').length;   
        var loadingProgress = 0; 
        
        
         
        $('.photo').imagesLoaded({background: true})
                    .progress( function( instance, image ) { 
                          loadProgress();
        });
         
        
        
        
        
        function loadProgress(imgLoad, image)
        { 
            loadedCount++; 
            loadingProgress = (loadedCount/imagesToLoad); 
          
            TweenLite.to(progressTl,.5, {progress:loadingProgress, ease:Linear.easeNone});
        }
        
        var progressTl = new TimelineMax({paused: true, onUpdate: progressUpdate, onComplete: loadComplete})
            .to($('.progress span'), 1, {width:'100vw', backgroundColor: 'black', ease:Linear.easeNone});   
         
        
        function progressUpdate() 
        {
            loadingProgress = Math.round(progressTl.progress() * 100);
            $(".txt-perc").text(loadingProgress + '%');
         
        }
        
        function loadComplete() {
         
            // preloader out
            var preloaderOutTl = new TimelineMax();
         
            preloaderOutTl
                .to($('.progress'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn})
                .to($('.txt-perc'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn}, 0.1)
                .set($('body'), {className: '-=is-loading'})
                .set($('#intro'), {className: '+=is-loaded'})
                .to($('#preloader'), 0.7, {yPercent: 100, ease:Power4.easeInOut})
                .set($('#preloader'), {className: '+=is-hidden'})
                .from($('#intro .title'), 1, {autoAlpha: 0, ease:Power1.easeOut}, '-=0.2')
                .from($('#intro p'), 0.7, {autoAlpha: 0, ease:Power1.easeOut}, '+=0.2')
                .from($('.scroll-hint'), 0.3, {y: -20, autoAlpha: 0, ease:Power1.easeOut}, '+=0.1');
         
            return preloaderOutTl;
        }
        
        
        

    }

}//Close Export Defautl