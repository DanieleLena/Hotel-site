// //animazione menu a sinsitra

const landingPage = document.querySelector(".landing-page");
const btnMenu = document.querySelector(".burger-section");
const leftNav = document.querySelector(".left-hidden-nav");
const cover = document.querySelector(".cover");
const btnX = document.querySelector(".fa-times");
const body = document.getElementsByTagName("BODY")[0];


const  mediaQuery = window.matchMedia("(max-width: 800px)");
const mobileMenu = document.querySelector(".mobile-menu");

btnMenu.addEventListener("click", function(){

//MOBILE MENU

    if (mediaQuery.matches){        
        mobileMenu.classList.toggle("open-mobile-menu");
    
// DESKTOP MENU
    }else { 

    leftNav.style.transitionDuration = `.8s`;
    landingPage.style.transition = ` .5s `;
    landingPage.classList.add("animation");
    leftNav.classList.remove("hide-nav");

    cover.classList.remove("hide-cover");

    body.style.overflow = `hidden`;
    }  
});

function closeLeftMenu(item) {
    item.addEventListener("click", ()=>{
        leftNav.style.transition = ` .2s `;
        landingPage.classList.remove("animation");
        leftNav.classList.add("hide-nav");

        cover.classList.add("hide-cover");

        body.style.overflow = `visible`;
    });
    
};

closeLeftMenu(cover);
closeLeftMenu(btnX);


