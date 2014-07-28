$(document).ready(function() {

	//BUTTON BEHAVIORS
	$('.button').mouseenter(function() {
		$(this).animate({'background-color':'#CC3232'},250);
		$(this).css('transform','scale(1.1)');
	});
	$('.button').mouseleave(function() {
		$(this).animate({'background-color':'#104E8B'},250);
		$(this).css('transform','scale(1)');
	});


	$('#launch_container').fadeIn(1000);


	//LAUNCH BUTTON BEHAVIOR
	$('#launchButton').click(function() {
		$('#launch_container').fadeOut(1000);
		$('#site_container').fadeIn(1000);
		$('#earth_container').fadeIn(1000);
		$('#earth_container').delay(37000).fadeOut(1000);
		$('#mars_container').delay(36000).fadeIn(2000);
		$('#finish_container').delay(50000).fadeIn(1000);
		$('#logo').delay(50000).fadeIn(3000);
		$('#relaunchButton').delay(53000).fadeIn(1000);
		$('#links').delay(54000).fadeIn(1000);
		$('#disclaimer').delay(55000).fadeIn(1000);
	});


	//RELAUNCH BUTTON BEHAVIOR
	$('#relaunchButton').click(function() {
		$('#site_container').fadeOut(1000);
		$('#launch_container').fadeOut(1000);

		setTimeout(function()
		{
			location.reload();
		}, 1000);
	});


	// TOUCH SCREEN DETECTION & BEHAVIORS
    function is_touch_device() {
     return (('ontouchstart' in window)
          || (navigator.MaxTouchPoints > 0)
          || (navigator.msMaxTouchPoints > 0));
    }
     
    if (!is_touch_device()) {

        $('#frontCloud_container').hide();
        $('#middleCloud_container').hide();
        $('#readCloud_container').hide();
    }

    // else
    // {
    //     $('.tmb_ttl').show();
    //     $('.tmb_dsc').show();
    //     $('.tmb_img').css('opacity','0.5');

    //     $('#karanplaybutton').css('display','none');
    //     $('#karanmobile').css('display','inline');

    //     $('#circlesdesktop').css('display','none');
    //     $('#circlesmobile').css('display','inline');
    // }
    // END TOUCH SCREEN DETECTION & BEHAVIORS
});
