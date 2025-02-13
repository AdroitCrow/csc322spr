// Import THREE
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

// Import OrbitControls
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);

// Create OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 10;
controls.maxDistance = 200;

// Create scene
const scene = new THREE.Scene();

// Create a circle using an implicit function
const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
const points = [];
const a = 20;  // scale of the function
const segments = 100;  // Number of points for approximation

for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * 2 * Math.PI;
    const x = 
    (a * Math.sqrt(2) * Math.cos(theta)) /
    ((Math.sin(theta) * Math.sin(theta)) + 1);
    const y = 
    (a * Math.sqrt(2) * Math.cos(theta) * Math.sin(theta)) /
    ((Math.sin(theta) * Math.sin(theta)) + 1)
    points.push(new THREE.Vector3(x, y, 0));
}

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);
scene.add(line);

// Animation loop for rendering and controls update
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// Start the animation loop
animate();