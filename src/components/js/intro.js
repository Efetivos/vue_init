
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
        var mySplitText = new SplitText(".apenas", { type: "chars, words" }),
            tlApenas = new TimelineMax(),
            numChars = mySplitText.chars.length,
            durations = 3

        TweenLite.defaultEase = Linear.easeNone;



        //<!-- --------- tlApenas Seja --------- -->
        for (var i = 0; i < numChars; i++) {
            //random value used as position parameter
            tlApenas.from(mySplitText.chars[i], 2, { opacity: 0 }, Math.random() * 10)
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
