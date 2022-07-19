'use strict'

document.addEventListener('DOMContentLoaded', () => {
    function closeMenu() {
        setTimeout(() => {
            menu.classList.remove('active')
        }, 300)

        menuBlock.classList.remove('active')
        overlap.classList.remove('active')
        document.body.removeAttribute('style')
    }

    function openMenu() {
        const paddingRight = scrollbarWidth()

        if (!menu.classList.contains('active'))
            menu.classList.add('active')

        menuBlock.classList.add('active')
        overlap.classList.add('active')
        document.body.style.overflow     = 'hidden'
        document.body.style.paddingRight = `${paddingRight}px`
    }

    function scrollbarWidth() {
        const documentWidth = parseInt(document.documentElement.clientWidth);
        const windowsWidth  = parseInt(window.innerWidth);
        return windowsWidth - documentWidth;
    }

    const closer    = document.querySelector('.menu__close'),
          burger    = document.querySelector('.menu__burger'),
          overlap   = document.querySelector('.menu__overlap'),
          menuBlock = document.querySelector('.menu__block'),
          menu      = document.querySelector('.menu')

    burger?.addEventListener('click', () => openMenu())

    overlap?.addEventListener('click', () => closeMenu())

    closer?.addEventListener('click', () => closeMenu())

    menuBlock?.addEventListener('click', (e) => {
        const target = e.target

        if (target && target.matches('.menu__link') || target.matches('.menu__social-link')) closeMenu()
    })

})
