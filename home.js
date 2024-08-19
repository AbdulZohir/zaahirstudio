const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
menuToggle.addEventListener('click',()=>{
    menuToggle.classList.toggle("active");
    dropdownMenu.classList.toggle("active");
});