$(document).ready(function() {




	$('#botBoxHeader').click(function() {

		if ($(this).hasClass('botBoxCollapsed')) {
			$('#botBoxChat').fadeOut();
			$('#botBox').removeClass('botBoxCollapsed');
			$('#botBox').addClass('botBoxExpanded');
		}

		else {
			$('#botBox').addClass('botBoxCollapsed');
			$('#botBox').removeClass('botBoxExpanded');			
		}
	});



	// NAVBAR TEXT CONTROL ------------------------------------
	var navTxt = '<em>User Experience &amp; Product Design</em>',
	  div = document.getElementById('navDsc');
	div.insertAdjacentHTML( 'beforeend', navTxt);


	// SCROLL TO TOP
	$('#scrollToTopBtn').click(function() {
    	$("html, body").animate({ scrollTop: 0 }, "slow");
	});



	// CHATBOX EXPAND / COLLAPSE BEHAVIOR


	// on chatbox header click
		// if chatbox collapsed
			// increase height
			// fade in contents

		// else
			// fade out contents
			// decrease height















	// header behavior
	// if scroll down, then

		// nav position = fixed
		// nav add drop shadow


		var wrap = $('nav');

		wrap.on("scroll", function() {
		    
		  if (this.scrollTop > 147) {
		    wrap.addClass('navFixed');
		    console.log('scrolled');
		  } else {
		    wrap.removeClass('navFixed');
		  }
		  
		});





	// chat behavior
	// if question button is clicked, then

		// question container hides
		// selected question gets appended as a chat bubble
		// typing animation appears for x secs
		// response appears as chat bubble
		// question container shows, minus questions already asked

		// 






	// hide/show functionality
	// if click show more button, then

		// show more --> show less
		// content container height increases from 0px to 100% with max height of 60vh
		// content objects fade in after a delay






	// TOGGLE SELF ILLUSTRATION HOVER
	// $('#selfTxt').hover(function() {
	// 	$('#selfIllustrationDefault').toggle();
	// 	$('#selfIllustrationHover').toggle();
	// });


	// TOGGLE BUTTON LOGIC ----------------------------------
	// $('#addPrjBox').hide();
	// $('.addPrjToggleBtn').hide();
	// var addPrjStatus = 'collapsed';
	// console.log(addPrjStatus);

	// $('.addPrjToggleBtn').click(function() {

	// 	if (addPrjStatus === 'collapsed') {
	// 		addPrjStatus = 'expanded';
	// 		$('#addPrjBox').show();
	// 		$('#addPrjExpandBtn').hide();
	// 	}

	// 	else if (addPrjStatus === 'expanded') {
	// 		addPrjStatus = 'collapsed';
	// 		$('#addPrjBox').hide();
	// 		$('#addPrjExpandBtn').show();
	// 	}

	// 	console.log(addPrjStatus);
	// });
});