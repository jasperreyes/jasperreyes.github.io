jQuery(document).ready(function(){

	// BANNER ANIMATIONS
	$('#home_jasper_img').hide();
	$('#home_jasper').click(function() {
		$('#home_jasper_img').fadeIn(200).delay(600).fadeOut(200);
		// $('#banner p').animate({'color':'#FFF'},200).delay(600).animate({'color':'#333'},200);
	});

	$('#home_chicago_img').hide();
	$('#home_chicago').click(function() {
		$('#home_chicago_img').fadeIn(200).delay(600).fadeOut(200);
		// $('#banner p').animate({'color':'#FFF'},200).delay(600).animate({'color':'#333'},200);
	});
	// END BANNER ANIMATIONS

	// THUMBNAIL ANIMATIONS
	$('.tmb_ttl').hide();
	$('.tmb_dsc').hide();
	$('.tmb').mouseenter(function() {
		$('.tmb_img',this).animate({'opacity':'0.8'},200);
		$('.tmb_ttl',this).fadeIn(200);
		$('.tmb_dsc',this).fadeIn(200);
	});
	$('.tmb').mouseleave(function() {
		$('.tmb_img',this).animate({'opacity':'1.0'},200);
		$('.tmb_ttl',this).fadeOut(200);
		$('.tmb_dsc',this).fadeOut(200);
	});
	// END THUMBNAIL INTERACTIONS
});