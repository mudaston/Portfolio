'use strict'

document.addEventListener('DOMContentLoaded', () => {
    function closeMenu() {
        menu.classList.remove('active')
        overlap.classList.remove('active')
        document.body.removeAttribute('style')
    }

    const closer  = document.querySelector('.menu__close'),
          burger  = document.querySelector('.menu__burger'),
          overlap = document.querySelector('.menu__overlap'),
          menu    = document.querySelector('.menu__block')

    burger.addEventListener('click', () => {
        menu.classList.add('active')
        overlap.classList.add('active')
        document.body.style.overflow = 'hidden'
    })

    overlap.addEventListener('click', () => closeMenu())

    closer.addEventListener('click', () => closeMenu())

    menu.addEventListener('click', (e) => {
        const target = e.target

        if (target && target.matches('.menu__link')) closeMenu()
    })

})
