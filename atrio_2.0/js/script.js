$(document).ready(function(){

    $('#logo').mouseover(function() {
        $('#logo_white').fadeOut(300);
    });
    $('#logo').mouseout(function() {
        $('#logo_white').fadeIn(300);
    });
});