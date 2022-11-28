// CONFIGS / RESETS

ScrollReveal({ reset: true})
const delayDefault = {
    duration: 700
}

// CONFIGS PARA OS CONTAINERS PRINCIPAIS

ScrollReveal().reveal('.container__home', delayDefault)
ScrollReveal().reveal('.container__personagens', delayDefault)

// CONFIGS PARA O CONTAINER TRAILER

ScrollReveal().reveal('.container__trailer', {
    duration: 1000,
    distance: '150%',
    origin: 'bottom'
})

// CONFIGS PARA O CONTAINER PERSONAGENS 


ScrollReveal().reveal('.container__personagensDivScroll', {
    duration: 1000,
    easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    distance: '100%',
    origin: 'bottom'
})

