$(document).ready(function(){
	$('#logo_blue').hide();

    $('#logo').mouseenter(function() {
        $('#logo_white').hide();
        $('#logo_blue').show();
    });
    $('#logo').mouseleave(function() {
        $('#logo_white').show();
        $('#logo_blue').hide();
    });

    $('#homepage_textbox p').hide();
    $('#homepage_textbox img').hide();
    $('#homepage_textbox img').delay(1000).fadeIn(300);
    
    $('#homepage_textbox img').click(function() {
    	$('#homepage_textbox img').fadeOut(300);
    	$('#homepage_textbox p').delay(300).fadeIn(300);
    });

});