document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.getElementsByClassName('menu-toggle')[0];
    const menuClose = document.getElementsByClassName('menu-close')[0];
    const menu= document.getElementsByClassName('menu')[0];
    if(!menuToggle || !menuClose || !menu) return;
    menuToggle.addEventListener('click', function(){
        menu.classList.add('is-active')
    })
    menuClose.addEventListener('click', function(){
        menu.classList.remove('is-active')
    })
})