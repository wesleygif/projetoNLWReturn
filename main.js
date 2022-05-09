function onScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}
let information = {
    origin: 'top',
    distance: '30px',
    duration: 700,
}

ScrollReveal(information).reveal(`
    #home,
    #home img, 
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #bout content
  `);