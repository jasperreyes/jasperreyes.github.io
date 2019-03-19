/*eslint-env jquery*/


$(document).ready(function() {

	// NAVBAR SCROLL LOGIC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	$('.contentBox').scroll(function() {
	    if ($('.contentBox').scrollTop() > 1) {
	        $('nav').addClass('floatingNav');
	    } else {
	        $('nav').removeClass('floatingNav');
	    }
	});
	// END NAVBAR SCROLL LOGIC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




	// MOBILE CONTACT MENU SHOW/HIDE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	$('#mobileMenuBtn').click(function() {
		if ($('#navMenu').hasClass('showMobileNavMenu')) {
			$('#navMenu').removeClass('showMobileNavMenu');
		} else {
			$('#navMenu').addClass('showMobileNavMenu');
		}

	});

	$('#closeMobileMenuBtn').click(function() {
		$('#navMenu').removeClass('showMobileNavMenu');
	});
	// END MOBILE CONTACT MENU SHOW/HIDE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




	// SCROLL TO TOP BUTTON ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	$('#scrollToTopBtn').click(function() {
    	$("html, .contentBox").animate({ scrollTop: 0 }, "slow");
	});
	// END SCROLL TO TOP BUTTON ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




	// ADDITIONAL PROJECT SHOW/HIDE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	function showHideInteraction() {
		if ($('#interactionAddPrjBox').hasClass('hideAddPrjBox')) {
			$('#interactionAddPrjBox').removeClass('hideAddPrjBox');
		} else {
			$('#interactionAddPrjBox').addClass('hideAddPrjBox');
		}
	}

	$('#interactionBtn').on('keypress', function(e) {
		if(e.which == 13) {
			showHideInteraction();
		}
	});

	$('#interactionBtn').click(function() {
		showHideInteraction();
	});

	function showHideOtherDesign() {
		if ($('#otherDesignAddPrjBox').hasClass('hideAddPrjBox')) {
			$('#otherDesignAddPrjBox').removeClass('hideAddPrjBox');
		} else {
			$('#otherDesignAddPrjBox').addClass('hideAddPrjBox');
		}
	}

	$('#otherDesignBtn').on('keypress', function(e) {
		if(e.which == 13) {
			showHideOtherDesign();
		}
	});

	$('#otherDesignBtn').click(function() {
		showHideOtherDesign();
	});

	function showHidePhotoVideo() {
		if ($('#photoVideoAddPrjBox').hasClass('hideAddPrjBox')) {
			$('#photoVideoAddPrjBox').removeClass('hideAddPrjBox');
		} else {
			$('#photoVideoAddPrjBox').addClass('hideAddPrjBox');
		}
	}

	$('#photoVideoBtn').on('keypress', function(e) {
		if(e.which == 13) {
			showHidePhotoVideo();
		}
	});

	$('#photoVideoBtn').click(function() {
		showHidePhotoVideo();
	});
	// END ADDITIONAL PROJECT SHOW/HIDE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


});