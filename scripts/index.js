const menu=document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.Navmenu');
menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-links').forEach((navLink) => navLink.addEventListener('click', () => {
    menu.classList.remove('active');
    navMenu.classList.remove('active');
  }));