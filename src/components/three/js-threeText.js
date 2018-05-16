
import { TimelineMax } from 'gsap';
import $ from 'jquery';
import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE);
import img1 from '../images/cutout-full.jpg'
import img2 from '../images/photo2.jpg'
import img3 from '../images/photo4.jpg'
import img4 from '../images/logo3.jpg'
import popp from '../js/poppins.json'

/* const shaders = {
  fragment: require('./fragment.glsl'),
  vertex: require('./vertex.glsl')
}
const Promise = window.Promise || require('es6-promise').Promise; */

export default {
    mounted() {
        function init() {
            var camera, scene, renderer;
            // * PARALLAX ON MOUSE MOVE
            var mouseX = 0, mouseY = 0;
            var windowHalfX = window.innerWidth / 2;
            var windowHalfY = window.innerHeight / 2;

            var targetX = 0, targetY = 0;

            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 100, 6000);


            camera.position.z = 300;
            // var controls = new OrbitControls(camera);
            // controls.target.set( 0, 0, 0 );
            // controls.update();
            // controls.autoRotate = true;
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x000000);
            var loader = new THREE.FontLoader();
            loader.load('https://cdn.rawgit.com/Efetivos/f84714a096ea598e6014d6f0d25dbca1/raw/403c2e3a26084e1911cc94c210124a96c99617a4/poppins.json', function (font) {
                var xMid, text;
                var textShape = new THREE.BufferGeometry();
                var color = 0xffffff;
                var matDark = new THREE.LineBasicMaterial({
                    color: color,
                    side: THREE.DoubleSide
                });
                var matLite = new THREE.MeshBasicMaterial({
                    color: 0xaaaaaa,
                    opacity: 0.4,
                    transparent: true,
                    side: THREE.DoubleSide
                });
                var message = "Efetivos";
                var shapes = font.generateShapes(message, 100, 2);
                var geometry = new THREE.ShapeGeometry(shapes);
                geometry.computeBoundingBox();
                xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
                geometry.translate(xMid, 0, 0);
                // make shape ( N.B. edge view not visible )
                textShape.fromGeometry(geometry);
                text = new THREE.Mesh(textShape, matLite);
                text.position.z = - 50;
                scene.add(text);
                // make line shape ( N.B. edge view remains visible )
                var holeShapes = [];
                for (var i = 0; i < shapes.length; i++) {
                    var shape = shapes[i];
                    if (shape.holes && shape.holes.length > 0) {
                        for (var j = 0; j < shape.holes.length; j++) {
                            var hole = shape.holes[j];
                            holeShapes.push(hole);
                        }
                    }
                }
                shapes.push.apply(shapes, holeShapes);
                var lineText = new THREE.Object3D();
                for (var i = 0; i < shapes.length; i++) {
                    var shape = shapes[i];
                    var points = shape.getPoints();
                    var geometry = new THREE.BufferGeometry().setFromPoints(points);

                    geometry.translate(xMid, 0, 0);
                    var lineMesh = new THREE.Line(geometry, matDark);
                    lineText.add(lineMesh);
                }
                scene.add(lineText);



                renderer = new THREE.WebGLRenderer({ antialias: true });
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
                document.body.appendChild(renderer.domElement);

                window.addEventListener('resize', onWindowResize, false);

                function onWindowResize() {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                }

                // * FUNÇÃO PARALLAX ON MOUSE MOVE
                function onDocumentMouseMove(event) {
                    mouseX = (event.clientX - windowHalfX) * 1;
                    mouseY = (event.clientY - windowHalfY) * 1;
                }

                function render() {
                    renderer.render(scene, camera);
                    requestAnimationFrame(render);


                    targetX = mouseX * .001;
                    targetY = mouseY * .001;



                    lineText.rotation.y += 0.00005 * (targetX - lineText.rotation.y);
                    lineText.rotation.x += 0.00005 * (targetY - lineText.rotation.x);
                    lineText.rotation.z += 0.00005 * (targetY - lineText.rotation.z);

                    lineText.position.z += 4.0005 * (targetY - lineText.rotation.z);

                    text.rotation.y += 0.00005 * (targetX - text.rotation.y);
                    text.rotation.x += 0.00005 * (targetY - text.rotation.x);
                    text.rotation.z += 0.00005 * (targetY - text.rotation.z);


                    // 					camera.rotation.y += 0.00005 * ( targetX - camera.rotation.y );
                    // 					camera.rotation.x += 0.00005 * ( targetY - camera.rotation.x );
                    // 					camera.rotation.z += 0.00005 * ( targetY - camera.rotation.z );
                    //camera.rotation.z += ( mouseX - camera.rotation.z ) * .005;
                    //      text.rotation.x += ( mouseX - text.rotation.x ) * .005;

                    //camera.rotation.y += 0.001;
                }
                render();

                TweenMax.to(camera.position, 3, { z: 280, y: 40, repeat: -1, yoyo: true })

                document.addEventListener('mousemove', onDocumentMouseMove, false);
            }); //end load function
        } // end init 

        init();


    } //close Mounted

}//Close Export Defautl