/*eslint-env jquery*/


$(document).ready(function() {

	// NAVBAR SCROLL LOGIC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	$('.content').scroll(function() {
	    if ($('.content').scrollTop() > 1) {
	        $('nav').addClass('floatingNav');
	    } else {
	        $('nav').removeClass('floatingNav');
	    }
	});
	// END NAVBAR SCROLL LOGIC ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




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





	// MOBILE CONTACT MENU SHOW/HIDE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	$('#mobileMenuBtn').click(function() {
		$('#mobileMenu').addClass('showMobileMenu');
	});

	$('#closeMobileMenuBtn').click(function() {
		$('#mobileMenu').removeClass('showMobileMenu');
	});
	// END MOBILE CONTACT MENU SHOW/HIDE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~











	// // initial hiding
	// $('#addWorkSection').hide();
	// $('#hideBtn').hide();
	// $('#addWorkSectionDivider').hide();

	// // show btn logic
	// $('#showBtn').click(function() {
	// 	$('#addWorkSection').show();
	// 	$('#hideBtn').show();
	// 	$('#showBtn').hide();
	// 	$('#addWorkSectionDivider').show();
	// });

	// // hide btn logic
	// $('#hideBtn').click(function() {
	// 	$('#addWorkSection').hide();
	// 	$('#hideBtn').hide();
	// 	$('#showBtn').show();
	// 	$('#addWorkSectionDivider').hide(); 
	// });

	// $('.showHideBtn').click(function() {
	// 	if (!$(this).hasClass('showing')) {
	// 		$(this).addClass('showing');
	// 		$(this).siblings('.addPrjBox').css('display','flex');
	// 		$(this).html('Show less');
	// 		$(this).css('font-family', 'Open Sans');
	// 	}

	// 	else {
	// 		$(this).removeClass('showing');
	// 		$(this).siblings('.addPrjBox').css('display','none');
	// 		$(this).html('Show more');
	// 	}
	// });
});