//IMPORTAR LIBS ANTES
import { TweenMax, TimelineMax } from 'gsap'
import 'pixi.js'
import $ from 'jquery'
import PixiPlugin  from 'gsap/PixiPlugin'
// import * as filters from 'pixi-filters';
// import {OldFilmFilter} from '@pixi/filter-old-film';

export const pixiMixin = {

 mounted(){


    var wScreen = $(window).width();
    var hScreen = $(window).height();
    // ---------- alias photo ...
    var baseUrl = 'https://raw.githubusercontent.com/Efetivos/Barbara_vue/master/src/components/images/galeria/';
    
    
    // ---------- alias Pixi ...
    var Application = PIXI.Application, 
        loader = PIXI.loader, 
        resources = PIXI.loader.resources,
        Sprite = PIXI.Sprite,
        resources = PIXI.loader.resources; 
    
    
    // ---------- Init Pixi ...
    var app = new Application ({
      width: main.clientWidth,
      height: main.clientHeight, 
      antialias: true,
      backgroundColor: 0x000000,
       transparent: true,
      view  //Choice Canvas Id View
    });
    
    
    
    // ---------- Rectangulo ...
    var graphics = new PIXI.Graphics();
        graphics.beginFill(0x000000);
        graphics.drawRect(0, 0, wScreen, hScreen);
       app.stage.addChild(graphics);
    
    // ---------- Noise Filter ...
    var filter = new PIXI.filters.NoiseFilter();
       filter.noise = .3;
       filter.seed = .9;
       app.stage.filters = [filter];
    
    
    
    
    var img;
    // ---------- Function after Loading ...
    function setup() {
      //Create the cat sprite
       img = new Sprite(resources.img.texture);
       img.width = wScreen;   
      // app.stage.addChild(img); 
    
    
       
       app.ticker.add(delta => gameLoop(delta));   
    }
    
    //   ---------- Function Loop Animation ...
    function gameLoop(delta){
       
       if( filter.seed < 1) {
           filter.seed  +=.001 * delta;
       }
       else if ( filter.seed > 0.1) {
          filter.seed  -=.001 * delta;
       }
    }
    
    
    
       
    
    
    
    
    // ---------- Load Images ...
    loader 
       .add('img', baseUrl+'photo-be9.jpg')
         .load(setup);//Call Function after Loading
    
    
 }
}//Close export const
 