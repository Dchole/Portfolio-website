//This snippet below add animation to the anchor tag when click
    
$(document).ready(function() {
    $("a.scrollLink").click(function(event) {
        event.preventDefault();
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 600);
    });
});
          
let underscript = "I will be a fullstack developer before the year ends";
