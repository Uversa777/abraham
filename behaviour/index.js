const navbarToggle = document.querySelector('#navbar-toggle');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';


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



let notNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'false';
function removeNavMenu() {
  notNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute('aria-expanded', notNavbarExpanded);
}

const menuItem1 = document.querySelector('#home');
const menuItem2 = document.querySelector('#about');
const menuItem3 = document.querySelector('#portfolio');
const menuItem4 = document.querySelector('#contact');
menuItem1.addEventListener("click", removeNavMenu);
menuItem2.addEventListener("click", removeNavMenu);
menuItem3.addEventListener("click", removeNavMenu);
menuItem4.addEventListener("click", removeNavMenu);