const navbarToggle = document.querySelector('#navbar-toggle');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
let notNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'false';

function toggleNavbarVisibility() {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};

navbarToggle.addEventListener('click', toggleNavbarVisibility);

const navbarMenu = document.querySelector('#navbar-menu');
const navbarLinksContainer = navbarMenu.querySelector('.navbar-links');

navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
navbarMenu.addEventListener('click', toggleNavbarVisibility);

// __________________________________________________________________________
// Page manipulation
function stayBlue() {
  const navLink = document.querySelector('.navbar-link');
  navLink.style.color = "#1DA1F2";
}

function rmNavbarVisibility() {
  // isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.getAttribute('aria-expanded', notNavbarExpanded);
};