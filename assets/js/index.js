const navIconMobileOpen = document.querySelector('.open-menu');
const navIconMobileClose = document.querySelector('.close-menu');
const navMobileIcon = document.querySelector('.navMobileIcon');
const navMenu = document.querySelector('.nav-menu');

navMobileIcon.addEventListener('click', function () {
    navMenu.classList.toggle('mobile--visible');
    navIconMobileOpen.classList.toggle('element--hide');
    navIconMobileClose.classList.toggle('element--hide');
});