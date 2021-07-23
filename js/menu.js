const iconoMenu = document.querySelector('.btn-icono-menu');
const menu = document.querySelector('#menu');
iconoMenu.addEventListener("click",(e)=>{
    menu.classList.toggle("active");
    document.body.classList.toggle("opacity");
});
const iconoMenu2 = document.querySelector('.btn-icono');
iconoMenu2.addEventListener("click",(e)=>{
    menu.classList.toggle("active");
    document.body.classList.toggle("opacity");
});