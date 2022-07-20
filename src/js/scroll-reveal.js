'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 1000,
        delay: 200,
        //reset: false
    })

    sr.reveal('.promo .container', {origin: 'right'})
    sr.reveal('.social', {origin: 'left'})

    sr.reveal('.about .about__container')
    sr.reveal('.about .about__skills', {origin: 'right'})

    sr.reveal('.experience .about-item')
    sr.reveal('#first-attainments-col', {origin: 'left'})
    sr.reveal('#second-attainments-col', {origin: 'right'})

    sr.reveal('.technology .about-item')
    sr.reveal('.technology .technology__wrapper', {origin: 'bottom'})

    sr.reveal('.works .about-item')
    sr.reveal('.works .works__wrapper', {origin: 'bottom', distance: '20px'})

    sr.reveal('.price-list .about-item', {distance: '10px'})
    sr.reveal('.price-list [data-origin="left"]', {origin: 'left'})
    sr.reveal('.price-list [data-origin="right"]', {origin: 'right'})

    sr.reveal('.contact-me .contact-me__person-photo', {origin: 'left'})
    sr.reveal('.contact-me .contact-me__right-side', {origin: 'right'})
})
