history.scrollRestoration = 'manual';

const aNavLink = document.getElementById('navLink1');
const secondNavLink = document.getElementById('navLink2');
const thirdNavLink = document.getElementById('navLink3');

function changeColor() {
    aNavLink.style.backgroundColor = 'rgba(21, 22, 29, 0.9)'; // first nav link

    secondNavLink.style.background = 'transparent'; // second nav link
    thirdNavLink.style.background = 'transparent'; // third nav link
}

function changeColorAgain() {
    secondNavLink.style.backgroundColor = 'rgba(21, 22, 29, 0.9)'; // second nav link

    aNavLink.style.background = 'transparent'; // first nav link
    thirdNavLink.style.background = 'transparent'; // third nav link
}

function changeColorAnother() {
    thirdNavLink.style.backgroundColor = 'rgba(21, 22, 29, 0.9)'; // third nav link

    aNavLink.style.background = 'transparent'; // first nav link
    secondNavLink.style.background = 'transparent'; // second nav link
}
