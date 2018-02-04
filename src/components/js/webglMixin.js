//IMPORTAR LIBS ANTES
import { TweenMax, TimelineMax } from 'gsap'
import 'pixi.js'
import $ from 'jquery'

export const webglMixin = {

 mounted(){

    var canv = document.getElementById('canvas'),
         ctx = canv.getContext('2d'),
         img = document.getElementById('image'),
         mask = document.getElementById('mask');



         function draw () {         


             ctx.clearRect(0,0,800,600);
             ctx.globalCompositeOperation = 'source-over';
             ctx.drawImage(mask,15,380);
             ctx.globalCompositeOperation = 'source-in';
             ctx.drawImage(img,0,0);

             
             window.requestAnimationFrame(draw);
         }

         draw();


         


 }//close Mounted
}//Close export const
 