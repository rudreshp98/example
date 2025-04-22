
const burger = document.getElementById('burgerToggle');
const nav = document.getElementById('navMenu');
const navList = document.querySelector('.nav-list');


burger.addEventListener('click', (e) => {
  e.stopPropagation();
  navList.classList.toggle('show');
  burger.classList.toggle('active');
});


document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !burger.contains(e.target)) {
    navList.classList.remove('show');
    burger.classList.remove('active');
  }
});


document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('show');
    burger.classList.remove('active');
  });
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('[Service Worker] Registered! Scope:', registration.scope);
      })
      .catch((error) => {
        console.log('[Service Worker] Registration failed:', error);
      });
  });
}
