var startPos;
$(document).ready(function(){
    window.scrollTo(0,0);
    startPos = $("social").offset().top;
    });
$(document).resize(function(){
    window.scrollTo(0,0);
    startPos = $("social").offset().top;
    });
$(window).scroll(function(){
        if ($(document).scrollTop()>startPos) {
            $( "social" ).addClass('fixed-navi');
            } 
        else {
            if ($( "social" ).hasClass( 'fixed-navi' )){
                $( "social" ).removeClass('fixed-navi');
                }
            }
    });