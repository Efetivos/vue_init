
import { TweenMax } from 'gsap'
import $ from 'jquery'
import SplitText from 'gsap/SplitText'
import img1 from '../images/intro/header-barbara.jpg'
import img2 from '../images/intro/header-nicole.jpg'
import img3 from '../images/intro/header-scheila.jpg'
import img4 from '../images/intro/header-adoro.jpg'
import img5 from '../images/intro/header-rla.jpg'
import img6 from '../images/intro/header-balao.jpg'
import img7 from '../images/intro/header-marconatto.jpg'
import img8 from '../images/intro/header-bb.jpg'
import img9 from '../images/intro/header-adidas.jpg'
import img10 from '../images/intro/eyes2.png'



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


        TweenMax.set('.ctn-menu', { opacity: 0 })
        let tlIntro = new TimelineMax({ repeat: -1 }).timeScale(1.5)
            .set(slideIntro, { attr: { src: '' + img2 } }, '+=.2')
            .set(slideIntro, { attr: { src: '' + img3 } }, '+=.2')
            .set(slideIntro, { attr: { src: '' + img4 } }, '+=.2')
            .set(slideIntro, { attr: { src: '' + img5 } }, '+=.2')
            .set(slideIntro, { attr: { src: '' + img6 } }, '+=.2')
            .set(slideIntro, { attr: { src: '' + img7 } }, '+=.2')
            .set(slideIntro, { attr: { src: '' + img8 } }, '+=.2')
            .set(slideIntro, { attr: { src: '' + img9 } }, '+=.2')
            .set(slideIntro, { attr: { src: '' + img10 } }, '+=.2')




        //<!-- --------- tlApenas Seja --------- -->
        var myApenas = new SplitText(".apenas", { type: "chars, words" }),
            tlApenas = new TimelineMax(),
            numChars = myApenas.chars.length

        for (var i = 0; i < numChars; i++) {
            tlApenas.from(myApenas.chars[i], 2, { opacity: 0 }, Math.random() * 10)
                .add('end')
                .duration(durations - .5)
        }



        //<!-- --------- lets --------- -->
        var myLets = new SplitText(".eftv-lets", { type: "chars, words" }),
            tlLets = new TimelineMax({repeat:-1, yoyo:true}),
            numLets = myLets.chars.length

        for (var i = 0; i < numLets; i++) {
            tlLets.from(myLets.chars[i], 4, { opacity: 0 }, Math.random() * 10)
                .add('end')
                .duration(8)
        }



        //<!-- --------- tlTitle  --------- -->
        var myTitle = new SplitText(".title-efetivos", { type: "chars, words" }),
            tlTitle = new TimelineMax(),
            numTitle = myTitle.chars.length

        for (var i = 0; i < numTitle; i++) {
            tlTitle
                .from(myTitle.chars[i], 2, { opacity: 0 }, Math.random() * 2)
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


        //<!-- --------- REVEAL --------- -->
        var tlReveal = new TimelineMax()
            .to($revealUp, durations + .6, { scaleY: .2, transformOrigin: 'right top', ease: Power1.easeIn }, 0)
            .to($revealDown, durations + .6, { scaleY: .2, transformOrigin: 'right bottom', ease: Power1.easeIn }, 0)
            .duration(durations)


        //<!-- --------- scale destaque --------- -->
        var tlScale = new TimelineMax()
            .from(slideIntro, 3, { scale: 1.8, rotation: 20, ease: Power3.easeOut })
            .to(slideIntro, 3, { opacity: .4 }, 0);


        //<!-- ---------------------- svg play circ ---------------- -->

        var circSvg = $('.another-circle'),
            timeHover = .8
        TweenMax.set('.circ-hover', { rotation: -90, transformOrigin: 'center center' });

        var initEnter = TweenMax.fromTo('.holder-triggers', 1.8, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: Power3.easeOut })


        var hoverCirc = new TimelineMax({ paused: true })
            .to(circSvg, timeHover, { strokeDashoffset: 64, ease: Power3.easeInOut })
            .from('.circ-hover', timeHover, { rotation: -450, transformOrigin: 'center center', ease: Power3.easeInOut }, 0)
            .from('.next-play', timeHover / 2, { x: -35, opacity: 0, ease: Power3.easeInOut }, timeHover / 3)
            .to('.current-play', timeHover / 2, { x: 35, opacity: 0, ease: Power3.easeInOut }, timeHover / 3)
            .to('#line', timeHover, { scaleX: .5, transformOrigin: 'top right', ease: Power3.easeInOut }, 0)
            .to('.arrow-down', timeHover, { yPercent: 20, ease: Power3.easeInOut }, 0)
            .add('end')
        hoverCirc.reverse('end')

        circSvg.add('.holder-triggers, .ctn-title .title').hover(
            function () {
                hoverCirc.play();
            }, function () {
                hoverCirc.reverse();
            }
        );
        circSvg.add('.holder-triggers').hover(
            function () {
                $('.ctn-title').trigger('mouseenter')

            }, function () {
                $('.ctn-title').trigger('mouseleave')
            }
        );

        TweenMax.set('.arrow-down', { rotation: -90 })




        var tlMaster = new TimelineMax({ delay: 1 })
            .add(tlReveal)
            .add(tlIntro, '0')
            .add(tlApenas, '0')
            .add(tlLines, '0')
            .add(function () { tlIntro.pause() }, '3.5')
            .set(slideIntro, { attr: { src: '' + img10 } })
            .to('.box-apenas', 1.2, { opacity: 0 })

            .add(tlTitle, '4.2')
            .add(tlLets, '3')
            .add(tlScale, '3.6')
            .from('.ctn-logo-intro',2.2,{scale:2, opacity:0,  ease: Power3.easeOut},'5.2')
            .add(initEnter)


    }//close mounted
} // close export
