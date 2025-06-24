// Importando o Swiper para Carrossel

const swiper = new Swiper('.meu-slider', {
  // Quantos slides aparecerão ao mesmo tempo (padrão para desktop)
  slidesPerView: 4,
  // Espaço entre os slides
  spaceBetween: 30,
  // Deixa o slider em loop infinito
  loop: true,

  // Configuração da paginação (bolinhas)
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  // Configuração das setas de navegação
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // Alternativas de navegação:
  // Ativar navegação por teclado
  keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
  // Ativar navegação por mousewheel
  mousewheel: {
      invert: false,
  },

  // Responsividade
  breakpoints: {
    // telas até 480px (celulares pequenos)
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // telas até 768px (celulares grandes/tablets)
    480: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // telas até 1024px (tablets/laptops pequenos)
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // telas maiores (desktop)
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
