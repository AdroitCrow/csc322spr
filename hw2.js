// import THREE
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
// import Orbit controls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 0, 600, 600 );

const scene = new THREE.Scene();

//white background for visibility
scene.background = new THREE.Color(0xffffff);

//main; add buffergeometrys
const geometryA = new THREE.BufferGeometry();
const geometryB = new THREE.BufferGeometry();
const geometryC = new THREE.BufferGeometry();
const geometryD = new THREE.BufferGeometry();
const geometryA1 = new THREE.BufferGeometry();
const geometryB1 = new THREE.BufferGeometry();
const geometryC1 = new THREE.BufferGeometry();
const geometryD1 = new THREE.BufferGeometry();


//vertice float arrays
const verticesA = new Float32Array( [
	-27.5,  0,    27.5, 
	 27.5,  0,    27.5, 
	-17,    500,  17,   

	 17,    500,  17,   
	-17,    500,  17,   
	 27.5,  0,    27.5  
] );

const verticesB = new Float32Array( [
	-27.5,  0,   -27.5, 
	-27.5,  0,    27.5, 
	-17,    500, -17,   

	-17,    500,  17,   
	-17,    500, -17,   
	-27.5,  0,    27.5  
] );

const verticesC = new Float32Array( [
  27.5,  0,    27.5, 
  27.5,  0,   -27.5, 
  17,    500,  17,   

  17,    500, -17,   
  17,    500,  17,   
  27.5,  0,   -27.5  
] );

const verticesD = new Float32Array( [
  27.5,  0,   -27.5, 
 -27.5,  0,   -27.5, 
  17,    500, -17,   

 -17,    500, -17,   
  17,    500, -17,   
 -27.5,  0,   -27.5  
] );

const verticesA1 = new Float32Array( [
  17,    500, -17, 
 -17,    500, -17, 
  0,     555,  0,   
] );

const verticesB1 = new Float32Array( [
  -17, 500, -17,
  -17, 500,  17,
   0,  555,  0
] );

const verticesC1 = new Float32Array( [
  17, 500,  17,
  17, 500, -17,
  0,  555,  0
] );

const verticesD1 = new Float32Array( [
-17, 500, 17,
 17, 500, 17,
 0,  555, 0
] );

//geometry set attributes
geometryA.setAttribute( 'position', new THREE.BufferAttribute( verticesA, 3 ) );
geometryB.setAttribute( 'position', new THREE.BufferAttribute( verticesB, 3 ) );
geometryC.setAttribute( 'position', new THREE.BufferAttribute( verticesC, 3 ) );
geometryD.setAttribute( 'position', new THREE.BufferAttribute( verticesD, 3 ) );

geometryA1.setAttribute( 'position', new THREE.BufferAttribute( verticesA1, 3 ) );
geometryB1.setAttribute( 'position', new THREE.BufferAttribute( verticesB1, 3 ) );
geometryC1.setAttribute( 'position', new THREE.BufferAttribute( verticesC1, 3 ) );
geometryD1.setAttribute( 'position', new THREE.BufferAttribute( verticesD1, 3 ) );

//materials
const material1 = new THREE.MeshBasicMaterial( { color: 0xa020f0 } );
const material2 = new THREE.MeshBasicMaterial( {color: new THREE.Color(220, 0, 255) } );
const material3 = new THREE.MeshBasicMaterial( {color: 'skyblue'} );
const material4 = new THREE.MeshBasicMaterial( { color: 'blue'} );
const material5 = new THREE.MeshBasicMaterial( { color: 'red'} );
const material6 = new THREE.MeshBasicMaterial( { color: 'yellow'} );
const material7 = new THREE.MeshBasicMaterial( { color: 'green'} );
const material8 = new THREE.MeshBasicMaterial( { color: 'grey'} );

//define mesh
const meshA = new THREE.Mesh( geometryA, material1 );
const meshB = new THREE.Mesh( geometryB, material2 );
const meshC = new THREE.Mesh( geometryC, material3 );
const meshD = new THREE.Mesh( geometryD, material4 );

const meshA1 = new THREE.Mesh( geometryA1, material5 );
const meshB1 = new THREE.Mesh( geometryB1, material6 );
const meshC1 = new THREE.Mesh( geometryC1, material7 );
const meshD1 = new THREE.Mesh( geometryD1, material8 );

//add mesh to scene
scene.add(meshA);
scene.add(meshB);
scene.add(meshC);
scene.add(meshD);

scene.add(meshA1);
scene.add(meshB1);
scene.add(meshC1);
scene.add(meshD1);

//controls
var controls = new OrbitControls (camera, renderer.domElement);
controls.screenSpacePanning = true;

//animate and render scene
const yrot = 0.0003;
function animate() {
  requestAnimationFrame(animate);
  controls.update();

  meshA.rotation.y +=yrot;
  meshB.rotation.y +=yrot;
  meshC.rotation.y +=yrot;
  meshD.rotation.y +=yrot;

  meshA1.rotation.y +=yrot;
  meshB1.rotation.y +=yrot;
  meshC1.rotation.y +=yrot;
  meshD1.rotation.y +=yrot;

  renderer.render(scene, camera);
}

animate();