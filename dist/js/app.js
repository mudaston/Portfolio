'use strict'

document.addEventListener('DOMContentLoaded', () => {
    function closeMenu() {
        menu.classList.remove('active')
        overlap.classList.remove('active')
        document.body.removeAttribute('style')
    }

    function openMenu() {
        const paddingRight = scrollbarWidth()

        menu.classList.add('active')
        overlap.classList.add('active')
        document.body.style.overflow     = 'hidden'
        document.body.style.paddingRight = `${paddingRight}px`

    }

    function scrollbarWidth() {
        const documentWidth = parseInt(document.documentElement.clientWidth);
        const windowsWidth  = parseInt(window.innerWidth);
        return windowsWidth - documentWidth;
    }

    const closer  = document.querySelector('.menu__close'),
          burger  = document.querySelector('.menu__burger'),
          overlap = document.querySelector('.menu__overlap'),
          menu    = document.querySelector('.menu__block')

    burger.addEventListener('click', () => openMenu())

    overlap.addEventListener('click', () => closeMenu())

    closer.addEventListener('click', () => closeMenu())

    menu.addEventListener('click', (e) => {
        const target = e.target

        if (target && target.matches('.menu__link') || target.matches('.menu__social-link')) closeMenu()
    })

})
