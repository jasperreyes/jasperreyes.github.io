jQuery(document).ready(function(){

	// INITIAL SETUP
	$('#landing_container').hide();
	$('#about_container').hide();
	// $('#ideas_container').hide();
	$('#final_container').hide();
	$('#thanks_container').hide();
	// END INITIAL SETUP

	// LANDING
	$('#landingbutton').hide();
    $('#landingbutton').delay(1000).fadeIn(400);

    $('#landingbutton').click(function() {
     $('#landing_container').fadeOut(400);
     $('#about_container').delay(400).fadeIn(400);
    });
	// END LANDING

	// ABOUT
    $('#aboutbutton').click(function() {
      $('#about_container').fadeOut(400);
      $('#ideas_container').delay(400).fadeIn(400);
    });
	// END ABOUT

	// IDEAS
	$('#ideasbutton').click(function() {
	  $('#ideas_container').fadeOut(400);
	  $('#final_container').delay(400).fadeIn(400);
	});
	$('#navbar').show();
	// END IDEAS

	// FINAL
	$('#upvote').hide();
	$('#downvote').hide();
	$('#finalbutton').hide();

		// ARROW BEHAVIORS 
		$('#up_clicked').hide();
		$('#up_hover').hide();

		$('#down_clicked').hide();
		$('#down_hover').hide();

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

			$('#finalbutton').delay(1000).fadeIn(400);
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

			$('#finalbutton').delay(1000).fadeIn(400);
		});

		$('#finalbutton').click(function() {
			$('#final_container').fadeOut(400);
			$('#thanks_container').delay(400).fadeIn(400);
		});
		// END ARROW BEHAVIORS
	// END FINAL

	// THANKS
	// END THANKS

});