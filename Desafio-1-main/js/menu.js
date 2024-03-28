document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-link');

  // Inicialmente oculta o menu em dispositivos móveis
  if (window.innerWidth <= 574) {
      navLinks.style.display = 'none';
  }

  menuToggle.addEventListener('click', function() {
      navLinks.style.display = navLinks.style.display === 'none' ? 'block' : 'none';
  });

  // Adiciona um ouvinte de evento a cada link do menu
  navLinksItems.forEach(function(navLink) {
      navLink.addEventListener('click', function() {
          navLinks.style.display = 'none'; // Oculta o menu
      });
  });
});
