//This snippet below add animation to the anchor tag when click
    
$(document).ready(function() {
    $("a.scrollLink").click(function(event) {
        event.preventDefault();
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 600);
    });
});


const hamburger = document.querySelector("#hamburger");
/** @type {HTMLDivElement|null} */
const navFlex = document.querySelector(".nav-flex");

const mobileNavState = {
    hidden:undefined,
    height:undefined
}

hamburger?.addEventListener("click", () => {
    if (!navFlex?.style.height || navFlex.style.height === "0px") {
        navFlex.hidden = false;
        navFlex.style.height = "250px";
    } else {
        navFlex.style.height = "0";
        navFlex.hidden = true;
    }

    mobileNavState.hidden = navFlex?.hidden
    mobileNavState.height = navFlex?.style.height
});

window.addEventListener('resize', () => {
    const {matches} = window.matchMedia('only screen and (max-width: 600px)')
    
    if(!matches) {
        console.log('on desktop')
        navFlex.style.height = "fit-content";
        navFlex.hidden = false;
    } else {
        navFlex.style.height = mobileNavState.height;
        navFlex.hidden = mobileNavState.hidden
    }
})

// function hamb() {
    
//     const hamburger = document.querySelector('#hamburger');
//     const navlinks = document.querySelector('.nav-link');
//     navlinks.style.display="none";
// }

// var hamb = document.querySelector('#hamburger');
// var navlinks = document.querySelector('.nav-link');

// navToggle.addEventListener('click', function(){
//     navlinks.classList.toggle("show_nav");
// })
