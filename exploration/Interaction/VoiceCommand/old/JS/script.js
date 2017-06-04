$(document).ready(function() {


	$('#redLink').hover(function() {
		$(this).toggleClass('red');
	});

	$('#redLink').click(function() {
		$('#circle').css('background-color','red');
	});

	$('#blueLink').hover(function() {
		$(this).toggleClass('blue');
	});

	$('#blueLink').click(function() {
		$('#circle').css('background-color','blue');
	});

	$('#greenLink').hover(function() {
		$(this).toggleClass('green');
	});

	$('#greenLink').click(function() {
		$('#circle').css('background-color','green');
	});

});