$(document).ready(function() {


	// TO DO

		// add background colors that correspond to emotions
		// add sounds that correspond to emotions
		// add background images to correspond to emotions
		// add active state to currently-triggered emotion
		// hook up to voice control annyang
		// add eye color to anger/sadness


	// EMOTIONS ----------------------------------------------------

	// DEFAULT (RESET)
	function resetEmotion() {
		$('*').removeClass('eyeShrinkY eyeGrowY eyebrowTiltCCW eyebrowTiltCW enlarge shrink enlargeY shrinkY raise lower tiltCW tiltCCW raiseTiltCW raiseTiltCCW lowerTiltCW lowerTiltCCW noseBunch crosseyedL crosseyedR eyesRed irisUp irisDown irisLeft irisRight irisUpLeft irisUpRight irisDownLeft irisDownRight squint');
	}

	function happiness() {
		$('.eye').addClass('eyeBlink');
	}

	function joy() {
		$('#eyebrowL').addClass('eyebrowRaiseTiltCCW');
		$('#eyebrowR').addClass('eyebrowRaiseTiltCW');
		$('.eye').addClass('eyeGrowY');
		$('.eyelid').addClass('eyeGrowY');
		$('.eye').addClass('eyeGrowY');
		$('.pupil').addClass('grow');
	}

	function sadness() {
		$('.eyeContainer').addClass('shrinkY');
		$('.eye').addClass('enlargeY');
		$('.iris').addClass('irisDown');
		$('.pupil').addClass('irisDown');
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
		$('.pupil').addClass('enlarge');
		$('.eyeContainer').addClass('shrinkY');
		$('.eye').addClass('enlargeY');
		$('#eyebrowL').addClass('lowerTiltCW');
		$('#eyebrowR').addClass('lowerTiltCCW');
		$('#nose').addClass('noseBunch');
	}

	function surprise() {
		$('.eyeContainer').addClass('enlarge');
		$('.pupil').addClass('enlarge');
		$('.eyebrow').addClass('raise');
	}

	function confusion() {
		$('#irisR').addClass('enlarge');
		$('#irisL').addClass('shrink');
		$('#irisL').addClass('irisUpLeft');
		$('#irisR').addClass('irisUpLeft');
		$('#eyebrowL').addClass('raiseTiltCCW');
		$('#eyebrowR').addClass('lower');
		$('#nose').addClass('noseBunch');
	}



	// DEFAULT AFFECTATIONS ---------------------------------------------
			
	// eye hover
		// blink > anger

	// nose hover
		// crosseyed > anger

	function crosseyed() {
		$('.iris').addClass('enlarge');
		$('#irisL').addClass('crosseyedL');
		$('#irisR').addClass('crosseyedR');
		$('#pupilL').addClass('crosseyedL');
		$('#pupilR').addClass('crosseyedR');
		$('#nose').addClass('noseBunch');
	}

	$('#nose').hover(function() {
		crosseyed();
	});

	$('#nose').mouseout(function() {
		resetEmotion();
	});



	// eyes move around
		// randomized { down, up, left, right, downLeft, downRight, upLeft, upRight, center }
		// stops when emotion is triggered

	// blinks periodically



	// FUNCTION TRIGGERS -----------------------------------------------------

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


	// ANNYANG VOICE COMMANDS ----------------------------------------

	// if (annyang) {
	//   // Let's define our first command. First the text we expect, and then the function it should call
	//   var commands = {

	//   	// Colors
	//     'happiness': function() {
	//     	resetEmotion();
	// 		happiness();
	//     },
	//     'joy': function() {
	//     	resetEmotion();
	// 		joy();
	//     },
	//     'anger': function() {
	//     	resetEmotion();
	// 		anger();
	//     },
	//     'surprise': function() {
	//     	resetEmotion();
	// 		surprise();
	//     },
	//     'sadness': function() {
	//     	resetEmotion();
	// 		sadness();
	//     },
	//     'confusion': function() {
	//     	resetEmotion();
	// 		confusion();
	//     },
	//     'reset': function() {
	// 		resetEmotion();
	//     },
	//   };

	//   // Add our commands to annyang
	//   annyang.addCommands(commands);

	//   // Start listening. You can call this here, or attach this call to an event, button, etc.
	//   annyang.start();
	// }



});


