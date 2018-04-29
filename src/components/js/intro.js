
import { TweenMax } from 'gsap'
import $ from 'jquery'
import SplitText from 'gsap/SplitText'
import img1 from '../images/intro/eyes1.jpg'
import img2 from '../images/intro/eyes2.png'
import img3 from '../images/intro/eyes3.png'
import img4 from '../images/intro/eyes4.png'
import img5 from '../images/intro/eyes5.png'



export default {
    created() {
        //Scrolls to top when view is displayed
        window.scrollTo(0, 0)
        window.document.title = "Sobre Efetivos"
    },

    mounted() {
        TweenMax.set('html', { overflow: 'hidden !important' })
        var durations = 3,
        $revealUp = $('.reveal-up'),
        $revealDown = $('.reveal-down'),
        slideIntro = $('.slide-intro')

        TweenLite.defaultEase = Linear.easeNone;


        TweenMax.set('.ctn-menu',{opacity:0})
        let tlIntro = new TimelineMax({repeat:-1}).timeScale(1.4)
          .set(slideIntro,{attr:{ src:''+img2}},'+=.2')
          .set(slideIntro,{attr:{ src:''+img3}},'+=.2')
          .set(slideIntro,{attr:{ src:''+img4}},'+=.2')
          .set(slideIntro,{attr:{ src:''+img1}},'+=.2')
          .set(slideIntro,{attr:{ src:''+img1}},'+=.2')




        //<!-- --------- tlApenas Seja --------- -->
        var myApenas = new SplitText(".apenas", { type: "chars, words" }),
            tlApenas = new TimelineMax(),
            numChars = myApenas.chars.length

        for (var i = 0; i < numChars; i++) {
            tlApenas.from(myApenas.chars[i], 2, { opacity: 0}, Math.random() * 10)
                .add('end')
                .duration(durations)
        }


        
        //<!-- --------- tlLets Seja --------- -->
        var myLets = new SplitText(".eftv-lets", { type: "chars, words" }),
            tlLets = new TimelineMax(),
            numLets = myLets.chars.length
            
        for (var i = 0; i < numLets; i++) {
            tlLets.from(myLets.chars[i], 2, { opacity: 0 }, Math.random() * 10)
                .add('end')
                .duration(8)
        }



        //<!-- --------- tlTitle  --------- -->
        var myTitle = new SplitText(".title-efetivos", { type: "chars, words" }),
            tlTitle = new TimelineMax(),
            numTitle = myTitle.chars.length
            
        for (var i = 0; i < numTitle; i++) {
            tlTitle.from(myTitle.chars[i], 2, { opacity: 0 }, Math.random() * 10)
                .add('end')
                .duration(3)
        }



        //<!-- --------- tlTracos --------- -->
        var tlLines = new TimelineMax()
            .from('.t-top', 1, { scaleX: 0, transformOrigin: 'left' })
            .from('.t-right', 1, { scaleY: 0, transformOrigin: 'left top' })
            .from('.t-bottom', 1, { scaleX: 0, transformOrigin: 'right' })
            .from('.t-left', 1, { scaleY: 0, transformOrigin: 'left bottom' })
            .add('end')
            .duration(durations)

        //tlApenas.tweenTo('end')
        //tlLines.tweenTo('end')


        //<!-- --------- REVEAL --------- -->
        var tlReveal = new TimelineMax()
                .to($revealUp, 2.56, {scaleY:0, transformOrigin:'right top', ease: Power1.easeIn},0)
                .to($revealDown, 2.56, {scaleY:0, transformOrigin:'right bottom', ease: Power1.easeIn},0)
                .duration(durations)


        //<!-- --------- scale destaque --------- -->
        var tlScale = new TimelineMax()
            .from('.slide-intro', 3, {scale:1.2, rotation:20, ease: Power3.easeOut});





        var tlMaster = new TimelineMax()
            .add(tlReveal)
            .add(tlIntro,'0')
            .add(tlLines,'0')
            .add(function(){ tlIntro.pause()},'3')
            .to('.box-apenas',.6,{opacity:0})

            .add(tlTitle,'3.5')
            .add(tlLets,'3.5')
            .add(tlScale,'3.5')



    }//close mounted
} // close export
