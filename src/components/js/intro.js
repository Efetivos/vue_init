
import { TweenMax } from 'gsap'
import $ from 'jquery'
import SplitText from 'gsap/SplitText'



export default {
    created() {
        //Scrolls to top when view is displayed
        window.scrollTo(0, 0)
        window.document.title = "Sobre Efetivos"
    },

    mounted() {
        TweenMax.set('html', { overflow: 'hidden !important' })
        var durations = 3

        TweenLite.defaultEase = Linear.easeNone;



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
            //random value used as position parameter
            tlLets.from(myLets.chars[i], 2, { opacity: 0 }, Math.random() * 10)
                .add('end')
                .duration(durations)
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










    }//close mounted
} // close export
