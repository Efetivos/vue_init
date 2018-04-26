import { TweenMax, TimelineMax } from 'gsap'
import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'
import  Draggable  from 'gsap/Draggable'
import  ThrowPropsPlugin from 'gsap/ThrowPropsPlugin'
import createjs from 'preload-js'
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));



export default { 
    created() {
        //Scrolls to top when view is displayed
        window.scrollTo(0, 0)
        window.document.title = "GSAP Test"
        
           // this.$router.push({ path: '/sobre' })
        
    },
    methods:{
      sobre:function (){
        this.name= 'sobre';      
        
        this.$router.push({ path: '/sobre' })
      }
    },
    mounted () { var winH = window.innerWidth;

      function preloadImage(url) {
        const img = new Image();
        img.onload = function(){
          alert('loaded');
        }
        img.src = url;
      }
        var baseUrl = 'http://unsplash.it/108',
        arrayB = [ '.b1', '.b2', '.b3', '.b4']
        
        var go = TweenMax.from('.holder',2.2,{x:1200, ease: Power3.easeOut, paused:true})
        var $holder = $('.holder')
        
        TweenMax.set('.b1', {background:'url('+images[2]+') center no-repeat'});
        TweenMax.set('.b2', {background:'url('+images[3]+') center no-repeat'});
        TweenMax.set('.b3', {background:'url('+images[4]+') center no-repeat'});
        TweenMax.set('.b4', {background:'url('+images[5]+') center no-repeat'});
        Draggable.create($holder , {
          trigger: '.ctn',
          type:'x',  
          edgeResistance: .8,
          bounds:'.ctn',    
          throwProps:true,
          snap: {
                x: function(endValue) {
                  console.log(endValue, Math.round(endValue / winH) * (winH/10));
                    return Math.round(endValue / winH) * winH;
                }, ease:Strong.easeOut
            }  
          
        })

        console.log(images);
        

    //     var queue        = new createjs.LoadQueue(),
    //     $state       = $('#state'),
    //     $progress    = $('#progress'),
    //     $progressbar = $('#progressbar .bar');
    
    
    // queue.on('complete',     onComplete);
    // queue.on('error',        onError);
    // queue.on('fileload',     onFileLoad);
    // queue.on('fileprogress', onFileProgress);
    // queue.on('progress',     onProgress);
    
    
    // queue.loadManifest([
    //   {
    //     id:   '1',
    //     src:  images[0]
    //   },   {
    //     id:   '2',
    //     src:  images[1]
    //   },   {
    //     id:   '3',
    //     src:  images[2]
    //   },   {
    //     id:   '4',
    //     src:  images[3]
    //   },   {
    //     id:   '5',
    //     src:  images[4]
    //   },   {
    //     id:   '6',
    //     src:  images[5]
    //   },   {
    //     id:   '7',
    //     src:  images[6]
    //   },   {
    //     id:   '8',
    //     src:  images[7]
    //   },   {
    //     id:   '9',
    //     src:  images[8]
    //   },   {
    //     id:   '10',
    //     src:  images[9]
    //   },   {
    //     id:   '11',
    //     src:  images[10]
    //   },   {
    //     id:   '12',
    //     src:  images[11]
    //   },   {
    //     id:   '13',
    //     src:  images[12]
    //   },   {
    //     id:   '14',
    //     src:  images[13]
    //   },   {
    //     id:   '15',
    //     src:  images[14]
    //   },   {
    //     id:   '16',
    //     src:  images[15]
    //   },   {
    //     id:   '17',
    //     src:  images[16]
    //   },   {
    //     id:   '18',
    //     src:  images[17]
    //   },   {
    //     id:   '19',
    //     src:  images[18]
    //   },   {
    //     id:   '20',
    //     src:  images[19]
    //   }
    // ]);
    
     
    
    // TweenMax.set('.ctn',{opacity:0})
    // function onComplete(event) {

    //   console.log('Complete', event);
    //   go.play();
    //   TweenMax.to('.ctn',3,{opacity:1, onComplete: goRouter})

    //   function goRouter () {
    //  //  $('.sobre-btn').trigger('click')
    //   }
    // }
    
    // function onError(event) {
      
    // }
    
    // function onFileLoad(event) {
    // }
    
    // function onFileProgress(event) {
    // }
    
    // var count = 0 ;
    // function onProgress(event) {
    //     var progress = Math.round(event.loaded * 100);

    //     TweenMax.set('#progressbar .bar',{width:progress +'%'})
        
    //     $('h1 span').text(progress)
    //     console.log(progress);

    // }





















/*  var queue        = new createjs.LoadQueue(),
    $state       = $('#state'),
    $progress    = $('#progress'),
    $progressbar = $('#progressbar .bar');


queue.on('complete',     onComplete);
queue.on('error',        onError);
queue.on('fileload',     onFileLoad);
queue.on('fileprogress', onFileProgress);
queue.on('progress',     onProgress);


queue.loadManifest([
  {
    id:   '21',
    src:  'http://upload.wikimedia.org/wikipedia/commons/a/a2/Polycyclic_Aromatic_Hydrocarbons_In_Space.jpg'
  },
  {
    id: '2',
    src: 'http://static3.businessinsider.com/image/522746c56bb3f72e2a316155/photo-airbus-proves-its-huge-new-warplane-doesnt-need-a-paved-runway.jpg'
  },
  {
    id:   '3',
    src:  'https://www.chem.gla.ac.uk/staff/wynne/i/2005/TRVS/TRVS-group-photo-huge.jpg'
  },
  {
    id:   '4',
    src:  'https://ak2.picdn.net/shutterstock/videos/18597332/preview/stock-footage-happy-father-and-son-playing-on-the-beach-at-sunset.mp4'
  },
  {
    id:   '4',
    src:  'https://ak2.picdn.net/shutterstock/videos/18597332/preview/stock-footage-happy-father-and-son-playing-on-the-beach-at-sunset.mp4'
  },
  {
    id:   '4',
    src:  'https://ak2.picdn.net/shutterstock/videos/18597332/preview/stock-footage-happy-father-and-son-playing-on-the-beach-at-sunset.mp4'
  },
  {
    id:   '4',
    src:  'https://ak2.picdn.net/shutterstock/videos/18597332/preview/stock-footage-happy-father-and-son-playing-on-the-beach-at-sunset.mp4'
  }
]);




function onComplete(event) {
  console.log('Complete', event);
  $state.text( $state.text() + '[All loaded]' );
  $progressbar.addClass('complete');
}

function onError(event) {
  console.log('Error', event);
  $state.text( $state.text() + '[' + event.item.id + ' errored] ');
}

function onFileLoad(event) {
  console.log('File loaded', event);
  $state.text( $state.text() + '[' + event.item.id + ' loaded] ');
}

function onFileProgress(event) {
  console.log('File progress', event);
}

function onProgress(event) {
  var progress = Math.round(event.loaded * 100);
  
  console.log('General progress', Math.round(event.loaded) * 100, event);
  $progress.text(progress + '%');
  $progressbar.css({
    'width': progress + '%'
  });
} */


    }, //Close Mounted
/*
      beforeRouteEnter(to, from, next) {
        var tlTransEnter = new TimelineMax({onComplete:next})
        //.to(window, 6, {scrollTo:"#body", ease: Power4.easeInOut})
        .to('.box', .8 ,{opacity:0, backgroudColor:'#000'})
        
}, */
beforeRouteEnter (to, from, next) {
    if (from.name === 'Vuetif' || from.name === 'Sobre'  ){
        next(vm => {
            $('.box').css('background-color','#000');
                 $( ".box" ).trigger( "click" );
            console.log('Veio do Vuetif')
        });
        } else {
            next();
        }
    }
}//Close Export Defautl