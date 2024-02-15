import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/GLTFLoader.js';


//Load 3d World 
const sloader = new GLTFLoader();
sloader.load(
  './landscape/scene.gltf', // Replace 'path_to_your_model.gltf' with your model's path
  function(gltf) {
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
  function(error) {
    console.error('Error loading model:', error);
  }
);
sloader.load(
  './landscape/scene.gltf', // Replace 'path_to_your_model.gltf' with your model's path
  function(gltf) {
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
  function(error) {
    console.error('Error loading model:', error);
  }
);

sloader.load(
  './lion/scene.gltf', // Replace 'path_to_your_model.gltf' with your model's path
  function(gltf) {
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
  function(error) {
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

//Simulate Key Presses when the mouse is clicked over their corresponding buttons
//LEFT CONTROLS
document.getElementById('left-button-up').addEventListener('mousedown', () => {
  document.getElementById('left-button-up').classList.add('active');
  keyboard['w'] = true;
});
document.getElementById('left-button-down').addEventListener('mousedown', () => {
  document.getElementById('left-button-down').classList.add('active');
  keyboard['s'] = true;
});
document.getElementById('left-button-left').addEventListener('mousedown', () => {
  document.getElementById('left-button-left').classList.add('active');
  keyboard['a'] = true;
});
document.getElementById('left-button-right').addEventListener('mousedown', () => {
  document.getElementById('left-button-right').classList.add('active');
  keyboard['d'] = true;
});

//RIGHT CONTROLS
document.getElementById('right-button-up').addEventListener('mousedown', () => {
  document.getElementById('right-button-up').classList.add('active');
  keyboard['ArrowUp'] = true;
});
document.getElementById('right-button-down').addEventListener('mousedown', () => {
  document.getElementById('right-button-down').classList.add('active');
  keyboard['ArrowDown'] = true;
});
document.getElementById('right-button-left').addEventListener('mousedown', () => {
  document.getElementById('right-button-left').classList.add('active');
  keyboard['ArrowLeft'] = true;
});
document.getElementById('right-button-right').addEventListener('mousedown', () => {
  document.getElementById('right-button-right').classList.add('active');
  keyboard['ArrowRight'] = true;
});



let initX = 0;
let initY = 0;
let isDragging = false;
document.getElementById('cover-page').addEventListener('mousedown', (event) => {
  initX = event.clientX;
  initY = event.clientY;
  isDragging = true;
  document.getElementById('cover-page').style.cursor = "grabbing";
});
document.getElementById('cover-page').addEventListener('mouseup', (event) => {
  isDragging = false;
  document.getElementById('cover-page').style.cursor = "default";
});
document.getElementById('cover-page').addEventListener('mousemove', (event) => {
  let newX = event.clientX;
  let newY = event.clientY;
  if (isDragging) {

    if (newX > initX + 40) {
      keyboard['ArrowRight'] = true;
      keyboard['ArrowLeft'] = false;
    }
    else if (newX < initX - 40) {
      keyboard['ArrowLeft'] = true;
      keyboard['ArrowRight'] = false;
    }
    else if (newX < initX + 40 && newX > initX - 40) {
      keyboard['ArrowRight'] = false;
      keyboard['ArrowLeft'] = false;
    }
    if (newY > initY + 40) {
      keyboard['ArrowDown'] = true;
      keyboard['ArrowUp'] = false;
    }
    else if (newY < initY - 40) {
      keyboard['ArrowUp'] = true;
      keyboard['ArrowDown'] = false;
    }
    else if (newY < initY + 40 && newY > initY - 40) {
      keyboard['ArrowUp'] = false;
      keyboard['ArrowDown'] = false;
    }

  }
});



//ZOOM CONTROLS
document.getElementById('zoom-in-button').addEventListener('mousedown', () => {
  document.getElementById('zoom-in-button').classList.add('active');
  // keyboard['k'] = true;
  camera.fov -= camera.fov > 10 ? 5 : 0;
  camera.updateProjectionMatrix();
});
document.getElementById('zoom-out-button').addEventListener('mousedown', () => {
  document.getElementById('zoom-out-button').classList.add('active');
  // keyboard['l'] = true;
  camera.fov += camera.fov < 75 ? 5 : 0;
  camera.updateProjectionMatrix();
});

//ASCEND-DESCEND CONTROLS
document.getElementById('ascend-button').addEventListener('mousedown', () => {
  document.getElementById('ascend-button').classList.add('active');
  keyboard[' '] = true;
});
document.getElementById('descend-button').addEventListener('mousedown', () => {
  document.getElementById('descend-button').classList.add('active');
  keyboard['Alt'] = true;
});

//CLEAR ALL CONTROLS
document.addEventListener('mouseup', () => {
  //CLEAR LEFT
  document.getElementById('left-button-up').classList.remove('active');
  document.getElementById('left-button-down').classList.remove('active');
  document.getElementById('left-button-left').classList.remove('active');
  document.getElementById('left-button-right').classList.remove('active');
  keyboard['w'] = false;
  keyboard['s'] = false;
  keyboard['a'] = false;
  keyboard['d'] = false;
  //CLEAR RIGHT
  document.getElementById('right-button-up').classList.remove('active');
  document.getElementById('right-button-down').classList.remove('active');
  document.getElementById('right-button-left').classList.remove('active');
  document.getElementById('right-button-right').classList.remove('active');
  keyboard['ArrowUp'] = false;
  keyboard['ArrowDown'] = false;
  keyboard['ArrowLeft'] = false;
  keyboard['ArrowRight'] = false;
  //CLEAR ZOOM
  document.getElementById('zoom-in-button').classList.remove('active');
  document.getElementById('zoom-out-button').classList.remove('active');
  keyboard['j'] = false;
  keyboard['l'] = false;
  //CLEAR ASCEND-DESCEND
  document.getElementById('ascend-button').classList.remove('active');
  document.getElementById('descend-button').classList.remove('active');
  keyboard[' '] = false;
  keyboard['Alt'] = false;
});

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
  } else if (key == 'k') {
    document.getElementById('zoom-in-button').classList.add('active');
  } else if (key == 'l') {
    document.getElementById('zoom-out-button').classList.add('active');
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
  } else if (key === 'k') {
    camera.fov -= camera.fov > 10 ? 5 : 0;
    camera.updateProjectionMatrix();
    document.getElementById('zoom-in-button').classList.remove('active');
  } else if (key === 'l') {
    camera.fov += camera.fov < 75 ? 5 : 0;
    camera.updateProjectionMatrix();
    document.getElementById('zoom-out-button').classList.remove('active');
  }
}


const point = document.getElementById("point");


function updateMinimap() {
  const xTranslation = camera.position.x * -3.82;
  const yTranslation = -1140 + (camera.position.z * 7.6);
  rotationAngle = (rotationAngle + 360) % 360;
  point.style.transform = `translate(${yTranslation}%, ${xTranslation}%)  rotate(${rotationAngle}deg)`;

}

const y_interval = setInterval(updateMinimap, 10);

function update_campos() {
  const camposX = document.getElementById("x");
  const camposZ = document.getElementById("z");
  camposX.innerHTML = `${camera.position.x} \n`;
  camposZ.innerHTML = `\n ${camera.position.z}`;
}


// const pos_interval = setInterval(update_campos, 10);
let rotationAngle = 0;
function animate() {

  //BOUNDARIES 
  if (camera.position.x > 110) {
    camera.position.x = 110;
  }
  if (camera.position.y > 200) {
    camera.position.y = 200;
  }
  if (camera.position.z > 400) {
    camera.position.z = 400;
  }
  if (camera.position.x < -110) {
    camera.position.x = -110;
  }
  if (camera.position.y < 25) {
    camera.position.y = 25;
  }
  if (camera.position.z < -100) {
    camera.position.z = -100;
  }

  requestAnimationFrame(animate);

  if (keyboard['w'] || document.getElementById('left-button-up').classList.contains('active')) {
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
    rotationAngle -= 0.7;
  }
  if (keyboard['ArrowRight']) {
    const axis = new THREE.Vector3(0, 1, 0);
    camera.rotateOnWorldAxis(axis, -rotationSpeed);
    rotationAngle += 0.7;
  }

  if (keyboard[' ']) {
    camera.position.y += ascendDescendSpeed;
  }
  if (keyboard['Alt']) {
    camera.position.y -= ascendDescendSpeed;
  }

  renderer.render(scene, camera);
}


//TAKE PICTURE
const takePictureButton = document.getElementById('take-picture-button');
takePictureButton.addEventListener('click', () => {
  renderer.render(scene, camera);
  const screenshotDataURL = renderer.domElement.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = screenshotDataURL;
  a.download = 'screenshot.png';
  a.click();
  alert("Picture will be sent to your email address provided in the previous page. Press ESC to continue.");
});

//GO TO MAIN MENU
const goMainMenu = document.getElementById('menuButton');
goMainMenu.addEventListener('click', () => {
  if (confirm("Do you want to return to the Main Menu and end your session?") == true) {
    window.location.href = "../MainMenu.html";
  }
});

function hideCursor() {
  document.body.style.cursor = 'none';
}

function showCursor() {
  document.body.style.cursor = 'auto';
}

//hideCursor();

animate();




// TIMER
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');

const startTime = Date.now();
let endTime = startTime + 5 * 60 * 1000; // 10 minutes in milliseconds

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
    alert("Your TourDrone appointment has ended. Please press the Spacebar to conitnue to be redirected to the Main Menu.");
    window.location.href = "../MainMenu.html"
  }
}


updateCountdown();

let moreExt = true;
const ext = document.getElementById('ext');
ext.addEventListener('click', () => {
  if (moreExt) {
    alert("You are eligible for an extension and will be provided an extra 2 minutes of flight time. Enjoy! ");
    let additionalTime = 2 * 60 * 1000;
    endTime += additionalTime;
    updateCountdown();
    moreExt = false;
  } else {
    alert("You are no longer eligible for an extension. If you wish to fly again, you may book an appointment or join another queue after this session is over. \n Please enjoy your remaining time!");
  }
});


const interval = setInterval(updateCountdown, 10);
