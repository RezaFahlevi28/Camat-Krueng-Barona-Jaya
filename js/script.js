const nav = document.querySelector('nav ul');
const menuToogle = document.querySelector('.menu-toogle input');
const body = document.querySelector('body');

menuToogle.addEventListener('click', function() {
    nav.classList.toggle('slide');
})

body.addEventListener('scroll', function() {
    nav.style.position = 'fixed';
})