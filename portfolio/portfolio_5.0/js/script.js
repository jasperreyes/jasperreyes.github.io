$(document).ready(function(){

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
		$('.tmb_img',this).animate({'opacity':'0.3'},200);
		$('.tmb_ttl',this).fadeIn(200);
		$('.tmb_dsc',this).fadeIn(200);
	});
	$('.tmb').mouseleave(function() {
		$('.tmb_img',this).animate({'opacity':'1.0'},200);
		$('.tmb_ttl',this).fadeOut(200);
		$('.tmb_dsc',this).fadeOut(200);
	});
	// END THUMBNAIL INTERACTIONS

    // TOUCH SCREEN DETECTION & BEHAVIORS
    function is_touch_device() {
     return (('ontouchstart' in window)
          || (navigator.MaxTouchPoints > 0)
          || (navigator.msMaxTouchPoints > 0));
    }
     
    if (!is_touch_device()) {

        $('.tmb_ttl').hide();
        $('.tmb_dsc').hide(); 

        $('.tmb').mouseenter(function() {
            $('.tmb_ttl',this).fadeIn(300);
            $('.tmb_dsc',this).fadeIn(300);
        });

        $('.tmb').mouseleave(function() {
            $('.tmb_ttl',this).fadeOut(300);
            $('.tmb_dsc',this).fadeOut(300);
        });
    }

    else
    {
        $('.tmb_ttl').show();
        $('.tmb_dsc').show();
        $('.tmb_img').css('opacity','0.5');

        $('#karanplaybutton').css('display','none');
        $('#karanmobile').css('display','relative');
    }
    // END TOUCH SCREEN DETECTION & BEHAVIORS


	// PROJECT EXIT BUTTON
	// $('.project_exitbutton').hide();
	$('.project_exitbutton').css('bottom','-40px').delay(1000).animate({'bottom':'0px'}, 300);
	// END PROJECT EXIT BUTTON


});