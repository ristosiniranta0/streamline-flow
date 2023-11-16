/* 
FileName: AdvancedAnimation.js
Content: Complex animation using HTML5 Canvas and JavaScript
*/

// Initialize canvas and get context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array for particles
let particles = [];

// Create class for particles
class Particle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Change direction on collision with boundaries
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.speedX *= -1;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.speedY *= -1;
    }

    // Draw particle
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

// Function to create particles
function createParticles() {
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 5 + 1;
    const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    particles.push(new Particle(x, y, size, color));
  }
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
  }
}

// Entry point
(function () {
  // Initialize canvas and particles
  createParticles();

  // Start animation loop
  animate();
})();

// Handle window resize
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Re-create particles on window resize
  particles = [];
  createParticles();
});