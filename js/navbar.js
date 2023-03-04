var startPos;
$(document).ready(function(){
    window.scrollTo(0,0);
    startPos = $("nav").offset().top;
    });
$(document).resize(function(){
    window.scrollTo(0,0);
    startPos = $("nav").offset().top;
    });
$(window).scroll(function(){
        if ($(document).scrollTop()>startPos) {
            $( "nav" ).addClass('fixed-navi');
            } 
        else {
            if ($( "nav" ).hasClass( 'fixed-navi' )){
                $( "nav" ).removeClass('fixed-navi');
                }
            }
    });