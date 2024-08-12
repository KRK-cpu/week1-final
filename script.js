document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');

  // Toggle menu visibility on menu button click
  menuBtn.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      menuBtn.classList.remove('open'); // Optional: add visual change for button if desired
    } else {
      menu.classList.add('active');
      menuBtn.classList.add('open'); // Optional: add visual change for button if desired
    }
  });

  // Sticky navbar on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
  });
});
