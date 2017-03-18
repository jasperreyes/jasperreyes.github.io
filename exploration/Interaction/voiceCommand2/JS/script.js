$(document).ready(function() {


	// TO DO -----------------------------------------
		// add background colors that correspond to emotions
		// add sounds that correspond to emotions
		// add background images to correspond to emotions
		// add active state to currently-triggered emotion
		// hook up to voice control annyang
		// add eye color to anger/sadness

	// BASE ANIMATIONS-----------------------------------

	// EYE SIZE
	function blink() {
		$('.eye').addClass('eyeSizeClose').delay(300).queue(function(next) {
			$(this).removeClass('eyeSizeClose');
			next();
		});
	}

	function eyeSizeSquint1() {
		$('.eye').addClass('eyeSizeSquint1');
	}

	function eyeSizeSquint2() {
		$('.eye').addClass('eyeSizeSquint2');
	}

	function eyeSizeSquint3() {
		$('.eye').addClass('eyeSizeSquint3');
	}

	function eyeSizeSquint4() {
		$('.eye').addClass('eyeSizeSquint4');
	}

	function eyeSizeOpen() {
		$('.eye').addClass('eyeSizeOpen');
	}

	function eyeSizeClose() {
		$('.eye').addClass('eyeSizeClose');
	}

	// EYE MOVEMENT
	function eyeRaise() {
		$('.eye').addClass('eyeRaise');
	}

	function eyeLower() {
		$('.eye').addClass('eyeLower');
	}

	function eyeTiltInward() {
		$('#eyeL').addClass('eyeTiltCW');
		$('#eyeR').addClass('eyeTiltCCW');
	}

	function eyeTiltOutward() {
		$('#eyeL').addClass('eyeTiltCCW');
		$('#eyeR').addClass('eyeTiltCW');
	}

	function eyeRaiseTiltInward() {
		$('#eyeL').addClass('eyeRaiseTiltCW');
		$('#eyeR').addClass('eyeRaiseTiltCCW');
	}

	function eyeRaiseTiltOutward() {
		$('#eyeL').addClass('eyeRaiseTiltCCW');
		$('#eyeR').addClass('eyeRaiseTiltCW');
	}

	function eyeLowerTiltInward() {
		$('#eyeL').addClass('eyeLowerTiltCW');
		$('#eyeR').addClass('eyeLowerTiltCCW');
	}

	function eyeLowerTiltOutward() {
		$('#eyeL').addClass('eyeLowerTiltCCW');
		$('#eyeR').addClass('eyeLowerTiltCW');
	}

	function lookUp() {
		$('.iris').addClass('irisUp');
		$('.pupil').addClass('pupilUp');
	}

	function lookDown() {
		$('.iris').addClass('irisDown');
		$('.pupil').addClass('pupilDown');
	}

	function lookLeft() {
		$('.iris').addClass('irisLeft');
		$('.pupil').addClass('pupilLeft');
	}

	function lookRight() {
		$('.iris').addClass('irisRight');
		$('.pupil').addClass('pupilRight');
	}

	function lookUpLeft() {
		$('.iris').addClass('irisUpLeft');
		$('.pupil').addClass('pupilUpLeft');
	}

	function lookUpRight() {
		$('.iris').addClass('irisUpRight');
		$('.pupil').addClass('pupilUpRight');
	}

	function lookDownLeft() {
		$('.iris').addClass('irisDownLeft');
		$('.pupil').addClass('pupilDownLeft');
	}

	function lookDownRight() {
		$('.iris').addClass('irisDownRight');
		$('.pupil').addClass('pupilDownRight');
	}

	function pupilExpand() {
		$('.pupil').addClass('pupilExpand');
	}

	function pupilContract() {
		$('.pupil').addClass('pupilContract');
	}

	function redEye() {
		$('.eyeWhite').addClass('redEye');
	}

	function eyebrowTiltInward() {
		$('#eyebrowL').addClass('eyebrowTiltCW');
		$('#eyebrowR').addClass('eyebrowTiltCCW');
	}

	function eyebrowTiltOutward() {
		$('#eyebrowL').addClass('eyebrowTiltCCW');
		$('#eyebrowR').addClass('eyebrowTiltCW');
	}

	function eyebrowRaise() {
		$('.eyebrow').addClass('eyebrowRaise');
	}

	function eyebrowLower() {
		$('.eyebrow').addClass('eyebrowLower');
	}

	function eyebrowRaiseTiltInward() {
		$('#eyebrowL').addClass('eyebrowRaiseTiltCW');
		$('#eyebrowR').addClass('eyebrowRaiseTiltCCW');
	}

	function eyebrowRaiseTiltOutward() {
		$('#eyebrowL').addClass('eyebrowRaiseTiltCCW');
		$('#eyebrowR').addClass('eyebrowRaiseTiltCW');
	}

	function eyebrowLowerTiltInward() {
		$('#eyebrowL').addClass('eyebrowLowerTiltCW');
		$('#eyebrowR').addClass('eyebrowLowerTiltCCW');
	}

	function eyebrowLowerTiltOutward() {
		$('#eyebrowL').addClass('eyebrowLowerTiltCCW');
		$('#eyebrowR').addClass('eyebrowLowerTiltCW');
	}

	function noseSquint() {
		$('#nose').addClass('noseSquint');
	}

	function nostrilFlare() {
		$('.nostril').addClass('nostrilFlare').delay(200).queue(function(next) {
			$(this).removeClass('nostrilFlare');
			next();
		});
	}

	function mouthHappy() {
		resetMouth();
		$('#mouth').addClass('mouthHappy');
	}

	function mouthUnhappy() {
		resetMouth();
		$('#mouth').addClass('mouthUnhappy');
	}

	function mouthJoy() {
		resetMouth();
		$('#mouth').addClass('mouthJoy');
	}

	function mouthSurprise() {
		resetMouth();
		$('#mouth').addClass('mouthSurprise');
	}

	function mouthSad() {
		resetMouth();
		$('#mouth').addClass('mouthSad');
	}

	function mouthStiff() {
		resetMouth();
		$('#mouth').addClass('mouthStiff');
	}

	// RESETS ---------------------------------------------
	function resetEyebrows() {
		$('.eyebrow').removeClass('eyebrowRaise eyebrowLower eyebrowTiltCW eyebrowTiltCCW eyebrowRaiseTiltCW eyebrowRaiseTiltCCW eyebrowLowerTiltCW eyebrowLowerTiltCCW');
	}

	function resetEyeSize() {
		$('.eye').removeClass('eyeSizeSquint1 eyeSizeSquint2 eyeSizeSquint3 eyeSizeSquint4 eyeSizeClose eyeSizeOpen');
	}

	function resetEyeDirection() {
		$('.pupil').removeClass('pupilUp pupilDown pupilLeft pupilRight pupilUpLeft pupilUpRight pupilDownLeft pupilDownRight');
		$('.iris').removeClass('irisUp irisDown irisLeft irisRight irisUpLeft irisUpRight irisDownLeft irisDownRight');
	}

	function resetEyeMovement() {
		$('.eye').removeClass('eyeRaise eyeLower eyeTiltCW eyeTiltCCW eyeRaiseTiltCW eyeRaiseTiltCCW eyeLowerTiltCW eyeLowerTiltCCW');
	}

	function resetPupilSize() {
		$('.pupil').removeClass('pupilExpand pupilContract');
	}

	function resetNose() {
		$('#nose').removeClass('noseSquint nostrilFlare');
	}

	function resetMouth() {
		$('#mouth').removeClass('mouthHappy mouthUnhappy mouthJoy mouthSurprise mouthSad mouthStiff');
		$('#mouth').addClass('mouthDefault');
	}

	function resetAll() {
		resetEyeSize();
		resetEyebrows();
		resetEyeDirection();
		resetEyeMovement();
		resetPupilSize();
		resetNose();
		resetMouth();
	}


	// EMOTIONS ----------------------------------------------

	function joy() {
		eyebrowRaise();
		eyeTiltOutward();
		eyeSizeSquint1();
		pupilExpand();
		mouthJoy();
	}

	function sadness() {
		eyebrowLowerTiltOutward();
		eyeSizeSquint2();
		eyeTiltOutward();
		nostrilFlare();
		mouthSad();
		lookDown();
	}

	function anger() {
		eyebrowLowerTiltInward();
		eyeTiltInward();
		eyeSizeSquint3();
		pupilContract();
		noseSquint();
		mouthStiff();
	}

	function rage() {
		eyebrowLowerTiltInward();
		eyeTiltInward();
		eyeSizeSquint1();
		noseSquint();
		mouthStiff();
	}

	function confusion() {
		$('#eyebrowL').addClass('eyebrowRaiseTiltCW');
		$('#eyebrowR').addClass('eyebrowLowerTiltCCW');
		$('#eyeR').addClass('eyeSizeSquint1');
		lookUpLeft();
		mouthUnhappy();
	}

	function surprise() {
		eyebrowRaise();
		eyeSizeOpen();
		pupilExpand();
		mouthSurprise();
	}

	function crosseyed() {
		$('#eyeL .iris').addClass('irisDownRight');
		$('#eyeR .iris').addClass('irisDownLeft');
		$('#eyeL .pupil').addClass('pupilDownRight');
		$('#eyeR .pupil').addClass('pupilDownLeft');
		eyebrowRaise();
		mouthSurprise();
	}

	function wink() {
		$('#eyeL').addClass('eyeSizeClose').delay(300).queue(function(next) {
			$(this).removeClass('eyeSizeClose');
			next();
		});

		// $('#eyebrowL').addClass('eyebrowLower').delay(300).queue(function(next) {
		// 	$(this).removeClass('eyebrowLower');
		// 	next();
		// });

		// $('#eyeR').addClass('eyeSizeSquint1').delay(300).queue(function(next) {
		// 	$(this).removeClass('eyeSizeSquint1');
		// 	next();
		// });

		$('#mouth').addClass('mouthHappy').delay(300).queue(function(next) {
			$(this).removeClass('mouthHappy');
			next();
		});
	}

	// // STATUS CHECKER -----------------------------------------
	// if an emotionActive = true ||is running

	// function statusChecker() {
	// 	if (emotionActive === true) {
	// 		// stop defaultAffectations()
	// 		defaultAffectations().end();

	// 	} else {
	// 		defaultAffectations(); 
	// 	}
	// }

	// statusChecker();
	// eye hover
		// blink > anger

	// nose hover
		// crosseyed > anger



	// BUTTON TRIGGERS -----------------------------------------------------
	
	// EYE SIZE
	$('#blinkBtn').click(function() { 
		blink(); 
	});

	$('#eyeSizeSquint1Btn').click(function() { 
		resetEyeSize();
		eyeSizeSquint1(); 
	});

	$('#eyeSizeSquint2Btn').click(function() {
		resetEyeSize();
		eyeSizeSquint2();
	});

	$('#eyeSizeSquint3Btn').click(function() {
		resetEyeSize();
		eyeSizeSquint3();
	});

	$('#eyeSizeSquint4Btn').click(function() {
		resetEyeSize();
		eyeSizeSquint4();
	});

	$('#eyeSizeOpenBtn').click(function() {
		resetEyeSize();
		eyeSizeOpen();
	});

	$('#eyeSizeCloseBtn').click(function() {
		resetEyeSize();
		eyeSizeClose();
	});

	// EYE MOVEMENT
	$('#eyeRaiseBtn').click(function() {
		resetEyeMovement();
		eyeRaise();
	});

	$('#eyeLowerBtn').click(function() {
		resetEyeMovement();
		eyeLower();
	});

	$('#eyeTiltInwardBtn').click(function() {
		resetEyeMovement();
		eyeTiltInward();
	});

	$('#eyeTiltOutwardBtn').click(function() {
		resetEyeMovement();
		eyeTiltOutward();
	});

	$('#eyeRaiseTiltInwardBtn').click(function() {
		resetEyeMovement();
		eyeRaiseTiltInward();
	});

	$('#eyeRaiseTiltOutwardBtn').click(function() {
		resetEyeMovement();
		eyeRaiseTiltOutward();
	});

	$('#eyeLowerTiltInwardBtn').click(function() {
		resetEyeMovement();
		eyeLowerTiltInward();
	});

	$('#eyeLowerTiltOutwardBtn').click(function() {
		resetEyeMovement();
		eyeLowerTiltOutward();
	});


	// EYE DIRECTION
	$('#lookUpBtn').click(function() {
		resetEyeDirection();
		lookUp();
	});

	$('#lookDownBtn').click(function() {
		resetEyeDirection();
		lookDown();
	});

	$('#lookLeftBtn').click(function() {
		resetEyeDirection();
		lookLeft();
	});

	$('#lookRightBtn').click(function() {
		resetEyeDirection();
		lookRight();
	});

	$('#lookUpLeftBtn').click(function() {
		resetEyeDirection();
		lookUpLeft();
	});

	$('#lookUpRightBtn').click(function() {
		resetEyeDirection();
		lookUpRight();
	});

	$('#lookDownLeftBtn').click(function() {
		resetEyeDirection();
		lookDownLeft();
	});

	$('#lookDownRightBtn').click(function() {
		resetEyeDirection();
		lookDownRight();
	});


	// PUPIL SIZE
	$('#pupilExpandBtn').click(function() {
		resetPupilSize();
		pupilExpand();
	});

	$('#pupilContractBtn').click(function() {
		resetPupilSize();
		pupilContract();
	});


	// EYE COLOR
	$('#redEyeBtn').click(function() {
		redEye();
	});	


	// EYEBROW MOTION
	$('#eyebrowRaiseBtn').click(function() {
		resetEyebrows();
		eyebrowRaise();
	});

	$('#eyebrowLowerBtn').click(function() {
		resetEyebrows();
		eyebrowLower();
	});

	$('#eyebrowTiltInwardBtn').click(function() {
		resetEyebrows();
		eyebrowTiltInward();
	});

	$('#eyebrowTiltOutwardBtn').click(function() {
		resetEyebrows();
		eyebrowTiltOutward();
	});

	$('#eyebrowRaiseTiltInwardBtn').click(function() {
		resetEyebrows();
		eyebrowRaiseTiltInward();
	});

	$('#eyebrowRaiseTiltOutwardBtn').click(function() {
		resetEyebrows();
		eyebrowRaiseTiltOutward();
	});

	$('#eyebrowLowerTiltInwardBtn').click(function() {
		resetEyebrows();
		eyebrowLowerTiltInward();
	});

	$('#eyebrowLowerTiltOutwardBtn').click(function() {
		resetEyebrows();
		eyebrowLowerTiltOutward();
	});

	// NOSE MOVEMENT 
	$('#noseSquintBtn').click(function() {
		noseSquint();
	});

	$('#nostrilFlareBtn').click(function() {
		nostrilFlare();
	});

	// MOUTH MOVEMENT
	$('#mouthHappyBtn').click(function() {
		resetMouth();
		mouthHappy();
	});

	$('#mouthUnhappyBtn').click(function() {
		resetMouth();
		mouthUnhappy();
	});

	$('#mouthJoyBtn').click(function() {
		resetMouth();
		mouthJoy();
	});

	$('#mouthSurpriseBtn').click(function() {
		resetMouth();
		mouthSurprise();
	});

	$('#mouthSadBtn').click(function() {
		resetMouth();
		mouthSad();
	});

	$('#mouthStiffBtn').click(function() {
		resetMouth();
		mouthStiff();
	});


	// RESET 
	$('#resetEyebrowsBtn').click(function() {
		resetEyebrows();
	});

	$('#resetEyeSizeBtn').click(function() {
		resetEyeSize();
	});

	$('#resetEyeDirectionBtn').click(function() {
		resetEyeDirection();
	});

	$('#resetEyeMovementBtn').click(function() {
		resetEyeMovement();
	});

	$('#resetPupilBtn').click(function() {
		resetPupilSize();
	});

	$('#resetNoseBtn').click(function() {
		resetNose();
	});

	$('#resetMouthBtn').click(function() {
		resetMouth();
	});

	$('#resetAllBtn').click(function() {
		resetAll();
	});



	$('#joyBtn').click(function() { 
		resetAll();
		joy(); 
	});

	$('#sadnessBtn').click(function() { 
		resetAll();
		sadness(); 
	});

	$('#angerBtn').click(function() { 
		resetAll();
		anger(); 
	});

	$('#surpriseBtn').click(function() { 
		resetAll();
		surprise(); 
	});

	$('#confusionBtn').click(function() { 
		resetAll();
		confusion(); 
	});

	$('#rageBtn').click(function() { 
		resetAll();
		rage(); 
	});

	$('#crosseyedBtn').click(function() { 
		resetAll();
		crosseyed(); 
	});

	$('#winkBtn').click(function() { 
		resetAll();
		wink(); 
	});


	
	// $('#sadnessBtn').click(function() { sadness(); });
	// $('#angerBtn').click(function() { anger(); });
	// $('#rageBtn').click(function() { rage(); });
	// $('#confusionBtn').click(function() { confusion(); });
	// $('#crosseyedBtn').click(function() { crosseyed(); });
	// $('#surpriseBtn').click(function() { surprise(); });

	// $('#resetBtn').click(function() { resetEmotion(); });





	// DEFAULT AFFECTATIONS -----------------------------------------
	var defaultAffectationsRunning = false;	

	function defaultAffectations() {

		// PERIODICAL BLINKING
		setInterval(function() {
			blink();
		}, 2000);

		// PERIODICAL EYE MOVEMENT
		var directions = [lookUp, lookDown, lookLeft, lookRight, lookUpLeft, lookUpRight, lookDownLeft, lookDownRight, resetAll];
		
		function selectDirection() {
			var direction = directions[Math.floor(Math.random()*directions.length)]; 
			direction.call();	
		}

		setInterval(function() {
			resetAll();
			selectDirection();
		}, 3000);

		defaultAffectationsRunning = true;
	}


	$('#defaultAffectationsBtn').click(function() {
		
		if(defaultAffectationsRunning === false) {
			defaultAffectations();
			$('#defaultAffectationsBtn').addClass('activeBtn');
		}

		else {
			$('#defaultAffectationsBtn').removeClass('activeBtn');
			resetAll();
			return defaultAffectations();
		}
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


