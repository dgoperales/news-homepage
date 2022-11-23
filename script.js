//Declaration of Variables
const hamburgerMenu = document.querySelector('.nav__menu');
const closeMenu = document.querySelector('#menu-close');
const mobileMenu = document.querySelector('#mobile-menu');

// Show Mobile Menu
function showMobileMenu() {
    mobileMenu.style.display = 'flex';
    mobileMenu.classList.toggle('active');
    //document.body.classList('opacity');
};

// Hide Mobile Menu
function hideMobileMenu() {
    mobileMenu.style.display = 'none';
};

hamburgerMenu.addEventListener('click', showMobileMenu);
closeMenu.addEventListener('click', hideMobileMenu);