const navIconMobileOpen = document.querySelector('.open-menu');
const navIconMobileClose = document.querySelector('.close-menu');
const navMobileIcon = document.querySelector('.navMobileIcon');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navMobileIcon.addEventListener('click', function () {
    navMenu.classList.toggle('mobile--visible');
    navIconMobileOpen.classList.toggle('element--hide');
    navIconMobileClose.classList.toggle('element--hide');
});

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('nav-link--active'))
        link.classList.add('nav-link--active');
    })
});