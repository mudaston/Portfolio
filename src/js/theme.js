'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const darkMode          = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const html              = document.querySelector('html')
    const changeThemeButton = document.querySelector('.menu__change-theme')
    const htmlIconText      = document.querySelector('.html-icon').querySelectorAll('.text')
    const cssIconText       = document.querySelector('.css-icon-text')
    const nodeJsText        = document.querySelector('.node-js-icon').querySelectorAll('.text')

    const mutationObserver = new MutationObserver((entries) => {
        const darkMode = entries[0].target.dataset.theme === 'dark'
        const color    = darkMode ? '#fff' : '#000'

        htmlIconText.forEach((item) => {
            item.setAttribute('fill', color)
        })
        nodeJsText.forEach((item) => {
            item.setAttribute('fill', color)
        })
        cssIconText.setAttribute('fill', color)
    })

    mutationObserver.observe(html, {attributes: true})

    const changeTheme = () => {
        let currentTheme = html.dataset.theme

        switch (currentTheme) {
            case 'dark':
                currentTheme = 'light'
                break
            case 'light':
                currentTheme = 'dark'
                break;
            default:
                currentTheme = 'dark'
        }

        html.dataset.theme = currentTheme

        localStorage.setItem('theme', currentTheme)
    }

    const changeButtonThemeIcon = () => {
        html.dataset.theme === 'dark' ?
            changeThemeButton.classList.remove('icon-sun') :
            changeThemeButton.classList.add('icon-sun')
    }

    changeThemeButton.addEventListener('click', () => {
        changeTheme()
        changeButtonThemeIcon()
    })

    const savedLanguage = localStorage.getItem('theme')

    if (savedLanguage)
        html.dataset.theme = savedLanguage
    else
        html.dataset.theme = `${darkMode ? 'dark' : 'light'}`

    changeButtonThemeIcon()
})
