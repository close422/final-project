console.log('connected')

const hamburger = document.querySelector('#hamburger-menu')
// console.log(hamburger)

const menu = document.querySelector('.menu')
// console.log(menu)

const menuClose = document.querySelector('#menu-close')
// console.log(menuClose)

hamburger.addEventListener('click', () => {
    menu.classList.add('menu-open')
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('menu-open')
})