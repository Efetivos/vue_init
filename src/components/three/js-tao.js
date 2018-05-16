
import { TimelineMax } from 'gsap';
import $ from 'jquery';
import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE);
var glsl = require('glslify')
import img1 from '../images/cutout-full.jpg'
import img2 from '../images/intro/eyes2.png'
import img3 from '../images/photo4.jpg'
import img4 from '../images/intro/header-bb.jpg'
/* const shaders = {
  fragment: require('./fragment.glsl'),
  vertex: require('./vertex.glsl')
}
const Promise = window.Promise || require('es6-promise').Promise; */

export default {
  mounted() {

    
    const vertex = glsl`
    uniform float time;
    varying vec2 vUv;
    varying vec2 vUv1;
    varying vec4 vPosition;
    
    uniform sampler2D texture1;
    uniform sampler2D texture2;
    uniform vec2 pixels;
    uniform vec2 uvRate1;
    
    void main() {
      vUv = uv;
      vec2 _uv = uv - 0.5;
      vUv1 = _uv;
      vUv1 *= uvRate1.xy;
    
      vUv1 += 0.5;
    
    
    
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
`;
    const fragment = glsl`
    uniform float time;
    uniform float progress;
    uniform sampler2D texture1;
    uniform sampler2D texture2;
    uniform vec2 pixels;
    uniform vec2 uvRate1;
    uniform vec2 accel;
    
    varying vec2 vUv;
    varying vec2 vUv1;
    varying vec4 vPosition;
    
    
    vec2 mirrored(vec2 v) {
      vec2 m = mod(v,2.);
      return mix(m,2.0 - m, step(1.0 ,m));
    }
    
    float tri(float p) {
      return mix(p,1.0 - p, step(0.5 ,p))*2.;
    }
    
    
    void main()	{
      vec2 uv = gl_FragCoord.xy/pixels.xy;
      
      float p = fract(progress);
    
      float delayValue = p*7. - uv.y*2. + uv.x - 2.;
    
      delayValue = clamp(delayValue,0.,1.);
    
      vec2 translateValue = p + delayValue*accel;
      vec2 translateValue1 = vec2(-0.5,1.)* translateValue;
      vec2 translateValue2 = vec2(-0.5,1.)* (translateValue - 1. - accel);
    
      vec2 w = sin( sin(time)*vec2(0,0.3) + vUv.yx*vec2(0,4.))*vec2(0,0.5);
      vec2 xy = w*(tri(p)*0.5 + tri(delayValue)*0.5);
    
      vec2 uv1 = vUv1 + translateValue1 + xy;
      vec2 uv2 = vUv1 + translateValue2 + xy;
    
      vec4 rgba1 = texture2D(texture1,mirrored(uv1));
      vec4 rgba2 = texture2D(texture2,mirrored(uv2));
    
      vec4 rgba = mix(rgba1,rgba2,delayValue);
      gl_FragColor = rgba;
      // gl_FragColor = vec4(tri(progress));
      // gl_FragColor = vec4(delayValue);
      // gl_FragColor = vec4(delayValue);
      // gl_FragColor = vec4(uv,1.,1.);
    }
`;




let gallery = [
  THREE.ImageUtils.loadTexture(img1),
  THREE.ImageUtils.loadTexture(img1),
  THREE.ImageUtils.loadTexture(img2),
  THREE.ImageUtils.loadTexture(img3),
  THREE.ImageUtils.loadTexture(img4)
];

let camera, pos, controls, scene, renderer, geometry, geometry1, material,plane,tex1,tex2;
let destination = {x:0,y:0};
let textures = [];

function init() {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerWidth);

  var container = document.getElementById('container');
  container.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.001, 1000
  );
  camera.position.set( 0, 0, 1 );
  camera.position.z = 800;


  // controls = new OrbitControls(camera, renderer.domElement);


  material = new THREE.ShaderMaterial( {
    side: THREE.DoubleSide,
    uniforms: {
      time: { type: 'f', value: 0 },
      pixels: {type: 'v2', value: new THREE.Vector2(window.innerWidth,window.innerHeight)},
      accel: {type: 'v2', value: new THREE.Vector2(0.5,2)},
      progress: {type: 'f', value: 0},
      uvRate1: {
        value: new THREE.Vector2(1,1)
      },
      texture1: {
        value: THREE.ImageUtils.loadTexture('img/img4.jpg')
      },
      texture2: {
        value: THREE.ImageUtils.loadTexture('img/img1.jpg')
      },
    },
    // wireframe: true,
    vertexShader: vertex,
    fragmentShader: fragment
  });

  plane = new THREE.Mesh(new THREE.PlaneGeometry( 1,1, 1, 1 ),material);
  scene.add(plane);

  resize();

 
}

window.addEventListener('resize', resize); 
function resize() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  renderer.setSize( w, h );
  camera.aspect = w / h;

  material.uniforms.uvRate1.value.y = h / w;

  // calculate scene
  let dist  = camera.position.z - plane.position.z;
  let height = 1;
  camera.fov = 2*(180/Math.PI)*Math.atan(height/(2*dist));

  // if(w/h>1) {
  plane.scale.x = w/h;
  // }



  camera.updateProjectionMatrix();
}

let time = 0;
function animate() {
  time = time+0.05;
  material.uniforms.time.value = time;
  
  requestAnimationFrame(animate);
  render();
}

function render() {
  renderer.render(scene, camera);
}


init();
animate();


let tl = new TimelineMax();
  
// $('body').on('click',() => {
//   if($('body').hasClass('done')) {
//     tl.to(material.uniforms.progress,1,{
//       value:0,
//     });
//     $('body').removeClass('done');
//   } else{
//     tl.to(material.uniforms.progress,1,{
//       value:1
//     });
//     $('body').addClass('done');
//   }
// });

/// SCROLL MAGIC
let speed = 0;
let position = 0;
document.addEventListener('wheel',function(event) {
  speed += event.deltaY*0.0004;
});

let tl1 = new TimelineMax();
function raf() {
  position += speed;
  speed *=0.9;


  let i = Math.round(position);
  let dif = i - position;

  // dif = dif<0? Math.max(dif,-0.02):Math.max(dif,+0.03);

  position += dif*0.035;
  if(Math.abs(i - position)<0.001) {
    position = i;
  }



  tl1.set('.dot',{y:position*200});
  material.uniforms.progress.value = position;


  let curslide = (Math.floor(position) - 1 + gallery.length)%gallery.length;
  let nextslide = (((Math.floor(position) + 1)%gallery.length -1) + gallery.length)%gallery.length;
  console.log(curslide,nextslide);
  material.uniforms.texture1.value = gallery[curslide];
  material.uniforms.texture2.value = gallery[nextslide];

  // console.log(speed,position);
  window.requestAnimationFrame(raf);
}

raf();
  } //close Mounted

}//Close Export Defautl