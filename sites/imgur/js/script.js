jQuery(document).ready(function(){

	// INITIAL SETUP
	// $('#landing_container').hide();
	$('#site_container').hide();
	// $('#about_container').hide();
	$('#ideas_container').hide();
	$('#final_container').hide();
	$('#thanks_container').hide();
	// END INITIAL SETUP

	// LANDING
    $('#landingbutton').click(function() {
     $('#landing_container').fadeOut(400);
     $('#site_container').delay(400).fadeIn(400);
    });
	// END LANDING

	// ABOUT
    $('#aboutbutton').click(function() {
      $('#about_container').fadeOut(400);
      $('#ideas_container').delay(400).fadeIn(400);
    });

    $('#about_backbutton').click(function() {
      $('#about_container').fadeOut(400);
      $('#landing_container').delay(400).fadeIn(400);
    });
	// END ABOUT

	// NAVBAR
	$('#menu').mouseenter(function() {
		if (!$('#menu').hasClass('menu_clicked'))
		{
			$('#menu').addClass('menu_hover');
		}
	});
	$('#menu').mouseleave(function() {
		if (!$('#menu').hasClass('menu_clicked'))
		{
			$('#menu').removeClass('menu_hover');
		}
	});
	$('#menu').click(function() {
		$('#menu').toggleClass('menu_hover');
		$('#menu').toggleClass('menu_clicked');
		$('#menubox').toggleClass('hidden');
	});
	// END NAVBAR

	// IDEAS
	$('#ideasbutton').click(function() {
	  $('#ideas_container').fadeOut(400);
	  $('#final_container').delay(400).fadeIn(400);

	  $('#upvote').hide();
	  $('#downvote').hide();
	  $('#finalnote').show();
	  $('#final_buttoncontainer').hide();
	  $('#up_clicked').hide();
	  $('#up_hover').hide();
	  $('#down_clicked').hide();
	  $('#down_hover').hide();
	});

	$('#ideas_backbutton').click(function() {
	  $('#ideas_container').fadeOut(400);
	  $('#about_container').delay(400).fadeIn(400);
	});

	// END IDEAS

	// FINAL
		// ARROW BEHAVIORS 
		$('#uparrow').mouseenter(function() {
			$('#up').hide();
			$('#up_hover').show();
		});
		$('#uparrow').mouseleave(function() {
			$('#up').show();
			$('#up_hover').hide();
		});
		$('#uparrow').click(function() {
			$('#up').hide();
			$('#up_hover').hide();
			$('#up_clicked').show();
			$('#down').show();
			$('#down_hover').hide();
			$('#down_clicked').hide();

			$('#upvote').show();
			$('#downvote').hide();
			$('#finalnote').hide();

			$('#final_buttoncontainer').fadeIn(400);
		});
		$('#downarrow').mouseenter(function() {
			$('#down').hide();
			$('#down_hover').show();
		});
		$('#downarrow').mouseleave(function() {
			$('#down').show();
			$('#down_hover').hide();
		});

		$('#downarrow').click(function() {
			$('#down').hide();
			$('#down_hover').hide();
			$('#down_clicked').show();
			$('#up').show();
			$('#up_hover').hide();
			$('#up_clicked').hide();

			$('#downvote').show();
			$('#upvote').hide();
			$('#finalnote').hide();
			$('#final_buttoncontainer').fadeIn(400);
		});

		$('#final_backbutton').click(function() {
			$('#final_container').fadeOut(400);
			$('#ideas_container').delay(400).fadeIn(400);
		});

		$('#finalbutton').click(function() {
			$('#final_container').fadeOut(400);
			$('#thanks_container').delay(400).fadeIn(400);
		});
		// END ARROW BEHAVIORS
	// END FINAL

	// THANKS
	$('#thanks_backbutton').click(function() {
		$('#thanks_container').fadeOut(400);
		$('#final_container').delay(400).fadeIn(400);
	    $('#upvote').hide();
	    $('#downvote').hide();
	    $('#finalnote').show();
	    $('#final_buttoncontainer').hide();
	  $('#up_clicked').hide();
	  $('#up_hover').hide();
	  $('#down_clicked').hide();
	  $('#down_hover').hide();
	});

	$('#thanksbutton').click(function() {
    	location.reload();
	});
	// END THANKS


});