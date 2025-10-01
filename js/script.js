document.addEventListener('DOMContentLoaded', function () {
  // hero animasi
  const hero = document.querySelector('.hero');
  if (hero) hero.style.animation = 'zoomOut 1.2s ease';

  // hamburger
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!menuToggle || !navLinks) return;

  const icon = menuToggle.querySelector('i');

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('active');

    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });

  // tutup menu saat klik salah satu link
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-times'); }
    });
  });
  
  // reset saat resize ke desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-times'); }
    }
  });
});