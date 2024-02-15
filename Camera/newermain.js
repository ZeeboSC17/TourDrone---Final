import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/GLTFLoader.js';


//Load 3d World 
const sloader = new GLTFLoader();
sloader.load(
  './landscape/scene.gltf', // Replace 'path_to_your_model.gltf' with your model's path
  function (gltf) {
    // Once loaded, you can access the loaded object
    const model = gltf.scene;
    // You might want to position, scale, or rotate the model
    model.position.set(0, 0, 0); // Set the position
    model.scale.set(150, 700, 150); // Set the scale
    model.rotation.set(0, 3 * Math.PI / 2, 0); // Rotates the model 90 degrees around the Y-axis

    // Add the model to the scene
    scene.add(model);
    const ambientLight = new THREE.AmbientLight(0xffffff, .8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, .8);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);
  },
  undefined,
  function (error) {
    console.error('Error loading model:', error);
  }
);
sloader.load(
  './landscape/scene.gltf', // Replace 'path_to_your_model.gltf' with your model's path
  function (gltf) {
    // Once loaded, you can access the loaded object
    const model = gltf.scene;
    // You might want to position, scale, or rotate the model
    model.position.set(0, 0, 300); // Set the position
    model.scale.set(150, 700, -150); // Set the scale
    model.rotation.set(0, Math.PI / 2, 0); // Rotates the model 90 degrees around the Y-axis


    // Add the model to the scene
    scene.add(model);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);
  },
  undefined,
  function (error) {
    console.error('Error loading model:', error);
  }
);

sloader.load(
  './lion/scene.gltf', // Replace 'path_to_your_model.gltf' with your model's path
  function (gltf) {
    // Once loaded, you can access the loaded object
    const model = gltf.scene;
    // You might want to position, scale, or rotate the model
    model.position.set(0, 25, 380); // Set the position
    model.scale.set(1.5, 1.5, 1.5); // Set the scale
    model.rotation.set(0, Math.PI, 0);

    // Add the model to the scene
    scene.add(model);
    const ambientLight = new THREE.AmbientLight(0xffffff, .8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, .8);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);
  },
  undefined,
  function (error) {
    console.error('Error loading model:', error);
  }
);


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 1, 5);
const controls = new OrbitControls(camera, renderer.domElement);
const keyboard = {};


const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
  './skybox/bluecloud_bk.jpg',
  './skybox/bluecloud_ft.jpg',
  './skybox/bluecloud_up.jpg',
  './skybox/bluecloud_dn.jpg',
  './skybox/bluecloud_lf.jpg',
  './skybox/bluecloud_rt.jpg',
]);
scene.background = texture;

const moveSpeed = 0.85;
const rotationSpeed = 0.02;
const ascendDescendSpeed = 0.5;

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

const leftStickCircle = document.querySelector('.left-stick .circle');
const rightStickCircle = document.querySelector('.right-stick .circle');



function keyDown(event) {
  keyboard[event.key] = true;
  event.preventDefault();
  const key = event.key
  const keyCode = event.keyCode;


  if (key === 'w') {
    document.getElementById('left-button-up').classList.add('active');
    leftStickCircle.style.transform = 'translateY(-25px)';
  } else if (key === 'a') {
    document.getElementById('left-button-left').classList.add('active');
    leftStickCircle.style.transform = 'translateX(-25px)';
  } else if (key === 's') {
    document.getElementById('left-button-down').classList.add('active');
    leftStickCircle.style.transform = 'translateY(25px)';
  } else if (key === 'd') {
    document.getElementById('left-button-right').classList.add('active');
    leftStickCircle.style.transform = 'translateX(25px)';
  } else if (keyCode === 38) { // ArrowUp
    document.getElementById('right-button-up').classList.add('active');
    rightStickCircle.style.transform = 'translateY(-25px)';
  } else if (keyCode === 40) { // ArrowDown
    document.getElementById('right-button-down').classList.add('active');
    rightStickCircle.style.transform = 'translateY(25px)';
  } else if (keyCode === 37) { // ArrowLeft
    document.getElementById('right-button-left').classList.add('active');
    rightStickCircle.style.transform = 'translateX(-25px)';
  } else if (keyCode === 39) { //ArrowRight
    document.getElementById('right-button-right').classList.add('active');
    rightStickCircle.style.transform = 'translateX(25px)';
  } else if (key === ' ') {
    document.getElementById('ascend-button').classList.add('active');
  } else if (key === 'Alt') {
    document.getElementById('descend-button').classList.add('active');
  } else if (key === 'escape') {
    showCursor();
  } else if (key === 'p') {
    document.getElementById('take-picture-button').click();
  }
  if (key === 'w' && key === 'a') {
    leftStickCircle.style.transform = 'translateY(-35px)';
  }
}

function keyUp(event) {
  keyboard[event.key] = false;
  const key = event.key.toLowerCase();
  const keyCode = event.keyCode;
  if (key === 'w') {
    document.getElementById('left-button-up').classList.remove('active');
    if (!keyboard['a'] && !keyboard['s'] && !keyboard['d']) {
      leftStickCircle.style.transform = 'translate(0px, 0px)';
    }
  } else if (key === 'a') {
    document.getElementById('left-button-left').classList.remove('active');
    if (!keyboard['w'] && !keyboard['s'] && !keyboard['d']) {
      leftStickCircle.style.transform = 'translate(0px, 0px)';
    }
  } else if (key === 's') {
    document.getElementById('left-button-down').classList.remove('active');
    if (!keyboard['w'] && !keyboard['a'] && !keyboard['d']) {
      leftStickCircle.style.transform = 'translate(0px, 0px)';
    }
  } else if (key === 'd') {
    document.getElementById('left-button-right').classList.remove('active');
    if (!keyboard['a'] && !keyboard['s'] && !keyboard['w']) {
      leftStickCircle.style.transform = 'translate(0px, 0px)';
    }
  } else if (keyCode === 38) {
    document.getElementById('right-button-up').classList.remove('active');
    if (keyCode != 40 && keyCode != 37 && keyCode != 39) {
      rightStickCircle.style.transform = 'translate(0px, 0px)';
    }
  } else if (keyCode === 40) {
    document.getElementById('right-button-down').classList.remove('active');
    if (keyCode != 38 && keyCode != 37 && keyCode != 39) {
      rightStickCircle.style.transform = 'translate(0px, 0px)';
    }
  } else if (keyCode === 37) {
    document.getElementById('right-button-left').classList.remove('active');
    if (keyCode != 40 && keyCode != 38 && keyCode != 39) {
      rightStickCircle.style.transform = 'translate(0px, 0px)';
    }
  } else if (keyCode === 39) {
    document.getElementById('right-button-right').classList.remove('active');
    if (keyCode != 40 && keyCode != 37 && keyCode != 38) {
      rightStickCircle.style.transform = 'translate(0px, 0px)';
    }
  } else if (key === ' ') {
    document.getElementById('ascend-button').classList.remove('active');
  } else if (key === 'alt') {
    document.getElementById('descend-button').classList.remove('active');
  }
}

function animate() {

  //BOUNDARIES 
  if (camera.position.x > 110) {
    // If it does, set the camera position to the maximum X value
    camera.position.x = 110;
  }
  if (camera.position.y > 200) {
    // If it does, set the camera position to the maximum X value
    camera.position.y = 200;
  }
  if (camera.position.z > 400) {
    // If it does, set the camera position to the maximum X value
    camera.position.z = 400;
  }
  if (camera.position.x < -110) {
    // If it does, set the camera position to the maximum X value
    camera.position.x = -110;
  }
  if (camera.position.y < 25) {
    // If it does, set the camera position to the maximum X value
    camera.position.y = 25;
  }
  if (camera.position.z < -100) {
    // If it does, set the camera position to the maximum X value
    camera.position.z = -100;
  }

  requestAnimationFrame(animate);

  if (keyboard['w']) {
    camera.position.add(camera.getWorldDirection().multiplyScalar(moveSpeed));
  }
  if (keyboard['s']) {
    camera.position.sub(camera.getWorldDirection().multiplyScalar(moveSpeed));
  }
  if (keyboard['a']) {
    camera.position.sub(camera.getWorldDirection().cross(camera.up).normalize().multiplyScalar(moveSpeed));
  }
  if (keyboard['d']) {
    camera.position.add(camera.getWorldDirection().cross(camera.up).normalize().multiplyScalar(moveSpeed));
  }
  if (keyboard['ArrowUp']) {
    camera.rotateX(rotationSpeed);
  }
  if (keyboard['ArrowDown']) {
    camera.rotateX(-rotationSpeed);
  }

  if (keyboard['ArrowLeft']) {
    const axis = new THREE.Vector3(0, 1, 0);
    camera.rotateOnWorldAxis(axis, rotationSpeed);
  }
  if (keyboard['ArrowRight']) {
    const axis = new THREE.Vector3(0, 1, 0);
    camera.rotateOnWorldAxis(axis, -rotationSpeed);
  }

  if (keyboard[' ']) {
    camera.position.y += ascendDescendSpeed;
  }
  if (keyboard['Alt']) {
    camera.position.y -= ascendDescendSpeed;
  }

  renderer.render(scene, camera);
}

const takePictureButton = document.getElementById('take-picture-button');
takePictureButton.addEventListener('click', () => {
  renderer.render(scene, camera);
  const screenshotDataURL = renderer.domElement.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = screenshotDataURL;
  a.download = 'screenshot.png';
  a.click();
});

function hideCursor() {
  document.body.style.cursor = 'none';
}
function showCursor() {
  document.body.style.cursor = 'auto';
}
hideCursor();

animate();




// TIMER
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');

const startTime = Date.now();
const endTime = startTime + 0.08 * 60 * 1000; // 10 minutes in milliseconds

function updateCountdown() {
  const currentTime = Date.now();
  const remainingTime = endTime - currentTime;

  if (remainingTime >= 0) {
    const remainingMinutes = Math.floor(remainingTime / 1000 / 60);
    const remainingSeconds = Math.floor((remainingTime / 1000) % 60);
    const remainingMilliseconds = Math.floor((remainingTime % 1000) / 10); // Extracting tens of milliseconds

    minutes.innerHTML = remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes;
    seconds.innerHTML = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    milliseconds.innerHTML = remainingMilliseconds < 10 ? '0' + remainingMilliseconds : remainingMilliseconds;
  } else {
    clearInterval(interval);
    // alert("Your TourDrone appointment has ended. Please press the Spacebar to conitnue to be redirected to the Main Menu.");
    // window.location.href = "timer.html"
    alert("You are eligible for a 2 minute extension as the queue is currently open. Press Space to continue.");
    endTime = startTime + 2 * 60 * 1000;
    remainingTime = endTime - currentTime;
    interval = setInterval(updateCountdown, 10);
  }
}

// Initial call to update countdown
updateCountdown();

// Update countdown every 10 milliseconds
const interval = setInterval(updateCountdown, 10);
