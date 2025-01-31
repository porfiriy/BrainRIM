import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/three.module.min.js';

// Сцена
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222452);

// Камера
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

// Рендерер
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Куб
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0xff77ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Освещение
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Вращение с помощью мыши
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

function onMouseDown(event) {
   isDragging = true;
   previousMousePosition = { x: event.clientX, y: event.clientY };
}

function onMouseMove(event) {
   if (!isDragging) return;

   const deltaMove = {
      x: event.clientX - previousMousePosition.x,
      y: event.clientY - previousMousePosition.y,
   };

   cube.rotation.y += deltaMove.x * 0.01; // Вращение по оси Y
   cube.rotation.x += deltaMove.y * 0.01; // Вращение по оси X

   previousMousePosition = { x: event.clientX, y: event.clientY };
}

function onMouseUp() {
   isDragging = false;
}

// Добавляем обработчики событий
window.addEventListener('mousedown', onMouseDown);
window.addEventListener('mousemove', onMouseMove);
window.addEventListener('mouseup', onMouseUp);

// Анимация
function animate() {
   requestAnimationFrame(animate);
   renderer.render(scene, camera);
}
animate();
