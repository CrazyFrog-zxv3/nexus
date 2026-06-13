let menu = document.querySelector('.menu')

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 0){
        menu.classList.add('rolando');
    } else {
        menu.classList.remove('rolando');
    }
})

const menuMobile = document.querySelector(".menu-mobile");
const navMenu = document.querySelector(".nav-menu");
const icon = document.querySelector(".menu-mobile i");

menuMobile.addEventListener("click", () => {

    navMenu.classList.toggle("ativo");

    if(navMenu.classList.contains("ativo")){
        icon.classList.remove("bi-list");
        icon.classList.add("bi-x-lg");
    }else{
        icon.classList.remove("bi-x-lg");
        icon.classList.add("bi-list");
    }

});

