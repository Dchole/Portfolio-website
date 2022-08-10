//This snippet below add animation to the anchor tag when click
    
$(document).ready(function() {
    $("a.scrollLink").click(function(event) {
        event.preventDefault();
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 600);
    });
});



function hamb() {
    
    const hamburger = document.querySelector('#hamburger');
    const navlinks = document.querySelector('.nav-link');
    navlinks.style.display="none";
}

// var hamb = document.querySelector('#hamburger');
// var navlinks = document.querySelector('.nav-link');

// navToggle.addEventListener('click', function(){
//     navlinks.classList.toggle("show_nav");
// })
