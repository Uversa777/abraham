// Create a function that will add a class attribute to an element> 
const controlled = document.querySelector('.dropdown-links-none');
const dropdownButton = document.querySelector('#dropdown-button');
function assignNewAttribute() {
    if (controlled.classList.contains('dropdown-links')) {
        controlled.classList.remove('dropdown-links');
        dropdownButton.innerHTML = "click to hide classes";
    }else {
        controlled.classList.add('dropdown-links');
    }
}
dropdownButton.addEventListener("click", assignNewAttribute);