// Importando o Swiper para Carrossel

const swiper = new Swiper('.meu-slider', {
// Quantos slides aparecerão ao mesmo tempo
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
});