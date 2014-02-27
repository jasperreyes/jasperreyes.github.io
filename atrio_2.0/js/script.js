$(document).ready(function(){
    $('#logo').mouseenter(function() {
        $('#logo_white').fadeOut(300);
        $('#logo_blue').fadeIn(300);
    });
    $('#logo').mouseleave(function() {
        $('#logo_white').fadeIn(300);
        $('#logo_blue').fadeOut(300);
    });
});