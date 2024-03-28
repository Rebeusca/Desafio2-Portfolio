function setActiveMenuItem() {
  // Obtém todas as seções da página
  const sections = document.querySelectorAll('section');
  // Obtém a posição atual de rolagem
  const scrollPosition = window.scrollY || window.pageYOffset;
  // Obtém a altura da janela de visualização
  const windowHeight = window.innerHeight;
 
  // Itera sobre cada seção
  sections.forEach(section => {
       const sectionId = section.getAttribute('id');
       const sectionTop = section.offsetTop;
       const sectionHeight = section.clientHeight;
 
       // Calcula a posição de rolagem que considera a seção como "visível"
       const activationPosition = scrollPosition + windowHeight / 2;
 
       // Verifica se a seção está visível na janela de visualização
       if (activationPosition >= sectionTop && activationPosition < sectionTop + sectionHeight) {
           // Remove a classe ativa de todos os itens de menu
           document.querySelectorAll('nav a').forEach(item => {
               item.classList.remove('active');
           });
 
           // Adiciona a classe ativa ao item de menu correspondente à seção visível
           document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
       }
  });
 }
 
 // Adiciona um ouvinte de evento de rolagem à janela
 window.addEventListener('scroll', setActiveMenuItem);
 // Chama a função setActiveMenuItem inicialmente para definir a classe ativa no carregamento da página
 setActiveMenuItem();
 