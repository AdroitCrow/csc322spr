// import THREE
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
// import Orbit controls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial( { color: 0x00ffff } );

//triangle 0
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 15, -5 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push(new THREE.Vector3(-10, 0, 0) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add( line );

//triangle 1
const points1 = [];
points1.push( new THREE.Vector3( - 10, 0, 0 ) );
points1.push( new THREE.Vector3( 0, 15, -5 ) );
points1.push( new THREE.Vector3( 0, 0, -17 ) );
points1.push(new THREE.Vector3(-10, 0, 0) );

const geometry1 = new THREE.BufferGeometry().setFromPoints( points1 );

const line1 = new THREE.Line( geometry1, material );

scene.add( line1 );

//triangle 2
const points2 = [];
points2.push( new THREE.Vector3( 10, 0, 0 ) );
points2.push( new THREE.Vector3( 0, 15, -5 ) );
points2.push( new THREE.Vector3( 0, 0, -17 ) );
points2.push(new THREE.Vector3( 10, 0, 0) );

const geometry2 = new THREE.BufferGeometry().setFromPoints( points2 );

const line2 = new THREE.Line( geometry2, material );

scene.add( line2 );


//controls
var controls = new OrbitControls (camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Update the controls
  renderer.render(scene, camera);
}
animate();