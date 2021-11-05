const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
const navLink = document.querySelectorAll('.liens');

function toggleMenu () {  
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
  
    })
  ;  
}
toggleMenu();




  
