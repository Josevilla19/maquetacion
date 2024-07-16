// JavaScript para mostrar/ocultar menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.menu-links');

    menuToggle.addEventListener('click', function () {
        menuLinks.classList.toggle('show');
    });
});
