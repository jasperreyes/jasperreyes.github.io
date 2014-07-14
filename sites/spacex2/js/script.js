jQuery(document).ready(function(){

	$('#mars').mouseenter(function() {
		$('#mars_message').css('visibility','visible');
	});
	$('#mars').mouseout(function() {
		$('#mars_message').css('visibility','hidden');
	});

});