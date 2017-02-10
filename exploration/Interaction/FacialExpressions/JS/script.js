$(document).ready(function() {


	// TO DO ------------------------------------------
	// add reaction eye hover
		// blink > anger

	// add reaction to nose hover
		// 




	// EMOTIONS ----------------------------------------------------

	// HAPPINESS
	// iris normal
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


	// when you click the emotion, the corresponding emotion will display


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

	// $('#nose').hover(function () {
	// 	resetEmotion();
	// 	crosseyed();
	// });

	// $('#nose').mouseout(function() {
	// 	$(this).unbind('crosseyed');
	// });


	// Returns emotions to the default state
	$('#resetBtn').click(function() {
		resetEmotion();
	});
});


// //used to reset timer
// var timeOutVariable;


// //runs when a key is pressed
// function keyPressed(key) {

// //reset the dot grid
// $('.dot').removeClass('active');

// //display the corresponding character in dot form
// if (key.keyCode == '49') { number1(); }
// else if (key.keyCode == '50') { number2(); } 
// else if (key.keyCode == '51') { number3(); }
// else if (key.keyCode == '52') { number4(); }
// else if (key.keyCode == '53') { number5(); }
// else if (key.keyCode == '54') { number6(); }
// else if (key.keyCode == '55') { number7(); }
// else if (key.keyCode == '56') { number8(); }
// else if (key.keyCode == '57') { number9(); }
// else if (key.keyCode == '48') { number0(); }

// //display question mark for undefined characters
// else { questionMark(); }

// //resets the timer variable  
// clearTimeout(timeOutVariable);

// //reset the grid after one second
// timeOutVariable = setTimeout(function() {
// 	$('.dot').removeClass('active');
// }, 1000);






//

