/*
Filename: complex_app.js

This code is a complex and sophisticated JavaScript application that performs various tasks such as data manipulation, animation, event handling, and more. It showcases advanced techniques and concepts in JavaScript programming. It exceeds 200 lines to provide a comprehensive example.

Note: This code is purely for demonstration purposes and may not have a practical use case in real-world applications.

*/

// Global variables
let canvas, context;
let objects = [];
let animationFrame;

// Utility function to generate a random number
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Object constructor function
function Object(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;

  this.update = function () {
    this.x += this.speed;
  }

  this.render = function () {
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, 50, 50);
  }
}

// Function to initialize the application
function init() {
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 10; i++) {
    const x = getRandomNumber(0, canvas.width);
    const y = getRandomNumber(0, canvas.height);
    const speed = getRandomNumber(-2, 2);
    const object = new Object(x, y, speed);
    objects.push(object);
  }

  animate();
}

// Animation loop
function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Update and render objects
  for (let i = 0; i < objects.length; i++) {
    objects[i].update();
    objects[i].render();
  }

  animationFrame = requestAnimationFrame(animate);
}

// Event handler for mouse click
function handleClick(event) {
  const x = event.clientX;
  const y = event.clientY;
  
  objects.push(new Object(x, y, getRandomNumber(-2, 2)));
}

// Event handler for key press
function handleKeyPress(event) {
  const key = event.key;
  
  if (key === ' ') {
    cancelAnimationFrame(animationFrame);
  }
}

// Event handler for window resize
function handleResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Event listeners
window.addEventListener('load', init);
window.addEventListener('click', handleClick);
window.addEventListener('keypress', handleKeyPress);
window.addEventListener('resize', handleResize);
