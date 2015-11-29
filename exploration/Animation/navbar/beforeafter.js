$(document).ready(function() {
	
	$('#rectangle').mouseenter(function() {
		$('#rectangle').fadeOut().delay(1000).fadeIn();
	});


	$('#navbar').mouseenter(function() {
		$(this).animate({transform: "translateY'top','0px')
	})
});