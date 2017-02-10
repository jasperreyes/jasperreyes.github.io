$(document).ready(function() {


	// DEFAULT AFFECTATIONS ---------------------------
			
		// eye hover
			// blink > anger

		// nose hover
			// crosseyed > anger

		// eyes move around
			// randomized { down, up, left, right, downLeft, downRight, upLeft, upRight, center }
			// stops when emotion is triggered

		// blinks periodically


	// EMOTIONS ----------------------------------------------------

	// HAPPINESS
		// eyebrows angled upward

	function happiness() {
		$('#eyebrowL').addClass('tiltCCW');
		$('#eyebrowR').addClass('tiltCW');
		$('#siteContainer').addClass('joyBg');
	}

	// JOY
		// iris big
		// eyebrows outside angle down
		// eyes outside angle down
		// lips outside angle up
		// lips show teeth
		// mouth moves up
		// mouth open

	function joy() {
		$('.eyeContainer').addClass('enlarge');
		$('.iris').addClass('enlarge');
		$('#eyebrowL').addClass('raiseTiltCCW');
		$('#eyebrowR').addClass('raiseTiltCW');
	}

	// SADNESS
		// iris down
		// eyebrows outside angle down
		// eyes outside angle down
		// lips outside angle down
		// eyes pink
		// lips quiver
		// nostrils flare
		// teardrop

	function sadness() {
		$('.eyeContainer').addClass('shrink');
		$('.iris').addClass('irisDown');
		$('#eyebrowL').addClass('lowerTiltCCW');
		$('#eyebrowR').addClass('lowerTiltCW');
		$('#siteContainer').addClass('angerBg');
		$('#eyeL').addClass('eyesRed');
	}

	// ANGER
		// iris big
		// eyes squint
		// eyes outside angle up
		// eyebrows outside angle up sharply
		// nostrils flare

	function anger() {
		$('.eyeContainer').addClass('shrink');
		$('.iris').addClass('enlarge');
		$('#eyebrowL').addClass('lowerTiltCW');
		$('#eyebrowR').addClass('lowerTiltCCW');
		$('#nose').addClass('noseBunch');
	}

	function surprise() {
		$('.eyeContainer').addClass('enlarge');
		$('.iris').addClass('enlarge');
		$('.eyebrow').addClass('raise');
	}

	function confusion() {
		$('#eyeContainerL').addClass('enlarge');
		$('#eyeContainerR').addClass('shrink');
		$('.iris').addClass('enlarge');
		$('#irisL').addClass('irisUpLeft');
		$('#irisR').addClass('irisUpLeft');
		$('#eyebrowL').addClass('raiseTiltCW');
		$('#eyebrowR').addClass('lower');
		$('#nose').addClass('noseBunch');
	}

	function resetEmotion() {
		$('*').removeClass('enlarge shrink raise lower tiltCW tiltCCW raiseTiltCW raiseTiltCCW lowerTiltCW lowerTiltCCW noseBunch crosseyedL crosseyedR eyesRed irisUp irisDown irisLeft irisRight irisUpLeft irisUpRight irisDownLeft irisDownRight');
	}




	// AFFECTATIONS ---------------------------------

	// on hover of nose
	// function crosseyed() {
	// 	$('.iris').addClass('enlarge');
	// 	$('#irisL').addClass('crosseyedL');
	// 	$('#irisR').addClass('crosseyedR');
	// 	$('#nose').addClass('noseBunch');
	// }

	// // on hover of the eyes
	// function blink() {



	// }


	// FUNCTION TRIGGERS

	// BUTTONS

	$('#happinessBtn').click(function() {
		resetEmotion();
		happiness();
	});

	$('#joyBtn').click(function() {
		resetEmotion();
		joy();
	});

	$('#angerBtn').click(function() {
		resetEmotion();
		anger();
	});

	$('#sadnessBtn').click(function() {
		resetEmotion();
		sadness();
	});

	$('#surpriseBtn').click(function() {
		resetEmotion();
		surprise();
	});

	$('#confusionBtn').click(function() {
		resetEmotion();
		confusion();
	});

	// Returns emotions to the default state

	$('#resetBtn').click(function() {
		resetEmotion();
	});
});

