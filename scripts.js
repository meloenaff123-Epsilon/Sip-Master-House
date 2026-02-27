// Simple fog animation over hero section
const hero = document.querySelector('.hero');

function animateFog() {
  hero.style.backgroundPosition = `center ${Date.now() % 1000 / 10}px`;
  requestAnimationFrame(animateFog);
}
