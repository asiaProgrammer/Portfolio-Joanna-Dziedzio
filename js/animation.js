window.sr = ScrollReveal();
sr.reveal('.photo, .under-construction', {
    reset: false,
    delay: 300,
    distance: 0
});
sr.reveal('#about', {
    reset:false,
    delay: 500,
    distance: 10
});
sr.reveal('h2, p', {
    reset: false,
    delay: 300
});

$('.navbar-nav li a').on('click', function(){
    if(!$( this ).hasClass('dropdown-toggle')){
        $('.navbar-collapse').collapse('hide');
    }
});