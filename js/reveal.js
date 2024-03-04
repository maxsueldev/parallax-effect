window.revelar = ScrollReveal({reset: true});

// SOBRE

revelar.reveal('.efeito-sobre-txt', {
    duration: 3000,
    distance: '90px'
}); 

// DESIGN

revelar.reveal('.efeito-design-txt', {
    duration: 3000,
    distance: '90px',
    origin: 'right'
});

revelar.reveal('.efeito-design-btn', {
    duration: 3000,
    distance: '90px',
    origin: 'right',
    delay: 500
});

// CURRICULO

revelar.reveal('.efeito-curriculo-txt', {
    duration: 3000,
    distance: '90px',
    origin: 'left'
});

revelar.reveal('.efeito-curriculo-btn', {
    duration: 3000,
    distance: '90px',
    origin: 'left',
    delay: 500
});

// FOOTER

revelar.reveal('.efeito-footer-frase', {
    duration: 3000,
    distance: '90px',
    origin: 'bottom'
});

revelar.reveal('.efeito-footer-autor', {
    duration: 3000,
    distance: '90px',
    origin: 'bottom',
    delay: 500
});