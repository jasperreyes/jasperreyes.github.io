$(document).ready(function() {

	// TOUCH SCREEN DETECTION & BEHAVIORS
    function is_touch_device() {
     return (('ontouchstart' in window)
          || (navigator.MaxTouchPoints > 0)
          || (navigator.msMaxTouchPoints > 0));
    }
     
    if (!is_touch_device()) {

		$('#launch_container').fadeIn(1000);

		//LAUNCH BUTTON BEHAVIOR / ANIMATION TIMINGS
		$('#launchButton').click(function() {
			$('#launch_container').fadeOut(1000);
			$('#site_container').fadeIn(1000);
			$('#earth_container').fadeIn(1000);
			$('#earth_container').delay(37000).fadeOut(1000);
			$('#mars_container').delay(36000).fadeIn(1000);
			$('#finish_container').delay(50000).fadeIn(1000);
			$('#logo').delay(50000).fadeIn(3000);
			$('#relaunchButton').delay(53000).fadeIn(1000);
			$('#links').delay(54000).fadeIn(1000);
			$('#disclaimer').delay(55000).fadeIn(1000);
		});
    }

    else
    {

		$('#launch_container').hide();
		$('#mobile_container').show();

  //       $('#frontCloud_container').hide();
  //       $('#middleCloud_container').hide();
  //       $('#rearCloud_container').hide();

		// $('#S2F_L').css("-webkit-animation", "none");
		// $('#S2F_L').css("-moz-animation", "none");
		// $('#S2F_L').css("-ms-animation", "none");
		// $('#S2F_L').css("animation", "none");
		// $('#S2F_M').hide();
		// $('#S2F_S').hide();

		// $('#S1F_L').css("-webkit-animation", "none");
		// $('#S1F_L').css("-moz-animation", "none");
		// $('#S1F_L').css("-ms-animation", "none");
		// $('#S1F_L').css("animation", "none");
		// $('#S1F_M').hide();
		// $('#S1F_S').hide();

		// $('#S1SF_L').css("-webkit-animation", "none");
		// $('#S1SF_L').css("-moz-animation", "none");
		// $('#S1SF_L').css("-ms-animation", "none");
		// $('#S1SF_L').css("animation", "none");
		// $('#S1SF_M').hide();
		// $('#S1SF_S').hide();

		// $('#D2_F1_L').css("-webkit-animation", "none");
		// $('#D2_F1_L').css("-moz-animation", "none");
		// $('#D2_F1_L').css("-ms-animation", "none");
		// $('#D2_F1_L').css("animation", "none");
  //       $('#D2_F1_M').hide();
  //       $('#D2_F1_S').hide();

		// $('#D2_F2_L').css("-webkit-animation", "none");
		// $('#D2_F2_L').css("-moz-animation", "none");
		// $('#D2_F2_L').css("-ms-animation", "none");
		// $('#D2_F2_L').css("animation", "none");
  //       $('#D2_F2_M').hide();
  //       $('#D2_F2_S').hide();

		// $('#D2_F3_L').css("-webkit-animation", "none");
		// $('#D2_F3_L').css("-moz-animation", "none");
		// $('#D2_F3_L').css("-ms-animation", "none");
		// $('#D2_F3_L').css("animation", "none");
  //       $('#D2_F3_M').hide();
  //       $('#D2_F3_S').hide();

     //    if(window.innerHeight > window.innerWidth){
    		// $('launch_container').hide();
    		// $('landscape_container').show();
    	// }
    }


 	// $('#launch_container').hide();
 	// $('#mobile_container').show();

	//BUTTON BEHAVIOR
	$('.button').mouseenter(function() {
		$(this).animate({'background-color':'#CC3232'},250);
		$(this).css('transform','scale(1.1)');
	});
	$('.button').mouseleave(function() {
		$(this).animate({'background-color':'#104E8B'},250);
		$(this).css('transform','scale(1)');
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


});
