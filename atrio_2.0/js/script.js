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
});