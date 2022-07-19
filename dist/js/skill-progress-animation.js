'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const progressWrapper = document.querySelector('#progress__wrapper')
    const progressItems   = progressWrapper.querySelectorAll('.progress-item')
    let animationUsed = false

    const visible = (target) => {
        const targetPosition = {
                  top: window.pageYOffset + target.getBoundingClientRect().top,
                  bottom: window.pageYOffset + target.getBoundingClientRect().bottom
              },

              windowPosition = {
                  top: window.pageYOffset,
                  bottom: window.pageYOffset + document.documentElement.clientHeight
              }

        return targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom;
    }

    const tm = (element, str, num) => {
        setTimeout(() => {
            element.innerHTML = `${num.toFixed(0)}${str}`;
        }, num * 20);
    }

    window.addEventListener('scroll', () => {
        const startAnimation = visible(progressWrapper)

        if (!startAnimation) return
        if (animationUsed) return;

        animationUsed = true

        progressItems.forEach(item => {
            const percentItem = item.querySelector('.progress-item__percent')
            const percent     = parseInt(percentItem.innerHTML)
            const percentItemFill = item.querySelector('.progress-item__fill')

            percentItemFill.style.marginRight = `${100 - percent}%`

            for (let i = 1; i <= percent; i += .5) tm(percentItem, '%', i);
        })
    })

    visible(progressWrapper)
})
