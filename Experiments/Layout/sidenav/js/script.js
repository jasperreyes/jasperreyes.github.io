$(document).ready(function(){

//NAVBAR BEHAVIORS

	$('.navbar').click(function(){
	    if ($(this).hasClass('hidden'))
	    {
	        $(this).removeClass('hidden');
	    }
	    else
	    {
	        $(this).addClass('hidden');
	    }
	});

	$('.navbar').mouseover(function(){
	    if ($('.navbar').hasClass('hidden'))
	    {
	    	$('.navbar').css('opacity','0.9');
	    }
	});
	$('.navbar').mouseout(function(){
	    if ($('.navbar').hasClass('hidden'))
	    {
	    	$('.navbar').css('opacity','0.5');
	    }

	});
	$('#site').click(function(){
	    if (!$('.navbar').hasClass('hidden'))
	    {
	        $('.navbar').addClass('hidden');
	        $('.navbar').css('opacity','0.5');
	    }
	});

// IFRAME BEHAVIORS

	$('.page').hide();d

	$('#button_a').click(function() {
		$('.page').hide();
		$('#iframe_a').show();
	});

	$('#button_b').click(function() {
		$('.page').hide();
		$('#iframe_b').show();
	});

	$('#button_c').click(function() {
		$('.page').hide();
		$('#iframe_c').show();
	});

});