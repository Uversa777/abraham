// The following javascript functions wil animate the 
// test and button on the home-screen.
const h1 = document.querySelector('#h1');
const text = "i am Abraham Ogah";
const speed = 50;
i = -1;

function execute() {
  function typeText() {
    // <i> represents the number of characters to be selected from the 
    // text variable declared above. <i> is incremented each time the function
    // is called.  
    if (i < text.length) {
      h1.innerHTML += text.charAt(i);
      i++;
    }
  }
  // setInterval(typeText, speed);
  setInterval(typeText, speed);
}
setTimeout(execute, 1000);

const description = document.querySelector('.first-caption');
function displayCaption() {
  // this function assigns a new CSS class to the 
  // html element with the class name <first-caption>
  description.classList.add('first-c');
}
setTimeout(displayCaption, 3150);

const displayBtn = document.querySelector('.portfolio-button');
function displayButton() {
  displayBtn.classList.add('displayBtn');
  // displayBtn.classList.add('sub');
}
setTimeout(displayButton, 4950);

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