$(document).ready(function() {

	// TO DO -----------------------------------------


  // check to make sure still works in chrome
    // still works

  // check to see how to invoke permission prompt in browser for chrome, see if we can customize prompt window

  // check to see if works on mobile chrome
    // does not work
    // create landing page for non-mobile

  // check to see how to invoke persomission prompt in safari, opera
    // does not work, neither desktop nor mobile

	// add background colors that correspond to emotions

	// add sounds that correspond to emotions

	// add background images to correspond to emotions

	// add active state to currently-triggered emotion
    // not needed

	// hook up to voice control annyang
    // done


  // add more emotions
    // disgust
    // guilt
    // fear
    // shame
    // love
    // annoyance
    // boredom

	// add eye color to anger/sadness

  // I.     BASE ANIMATIONS
  // II.    EMOTIONS
  // III.   DEFAULT AFFECTATIONS
  // IV.    RESETS
  // V.     EMOTION PANEL TRIGGERS
  // VI.    CONTROL PANEL TRIGGERS
  // VII.   PAGE SETUP
  // VIII.  ANNYANG VOICE CONTROLS


// PAGE SETUP --------------------------------------------------------------------------------

  var introOne = true;
  var introTwo = false;
  var introThree = false;
  var emotionsPanel = false;

  // LANDING PAGE
  $('#introOne').show();
  blinkingOn();
  eyeDirectionOn();

    annyang.start();


  // INTRO ONE
    // enable speech recognition!
      // begin listening for 'Alen'
    // animate listening animation!
  $('#micBtn').click(function() {
    introOne = false;
    introTwo = true;
    $('#introOne').fadeOut(250, function() {
      $('#introTwo').fadeIn(250);
    });
  });

  // INTRO 2
  $('#nameBtn').click(function() {
    introTwo = false;
    introThree = true;
    $('#introTwo').fadeOut(250, function() {
      $('#introThree').fadeIn(250);
    });
    eyeDirectionOff();
    resetEyeDirection(); 
  });

  // INTRO 3
  $('#instructionsBtn').click(function() {
    introThree = false;
    emotionsPanel = true;
    $('#introThree').fadeOut(250, function() {
      $('#emotionsPanel').css('display','flex').fadeIn(250);
    });
    eyeDirectionOn();
  });

    // CONTROL PANEL
    // hide emotion panel
    // show control panel
    // reset emotion
    // eye movement on
    // blinking on

  // GOODBYE
    // invoke sadness
    // fade to black
    // restart page

  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call

    var commands = {

     // VOICE COMMANDS

      'enable': function() {
        if (introOne === true) {
          introOne = false;
          introTwo = true;
          $('#introOne').fadeOut(250, function() {
            $('#introTwo').fadeIn(250);
          });
        }
      },


      'red': function() {
        if (introTwo === true) {
          introTwo = false;
          introThree = true;
          eyeDirectionOff();
          resetEyeDirection(); 
          $('#nameBtn').addClass('active');
          $('#introTwo').fadeOut(250, function() {
            $('#introThree').fadeIn(250);
          });
        }
      },

      'okay': function() {
        if (introThree === true) {
          emotionsPanel = true;
          introThree = false;
          eyeDirectionOn();
          $('#introThree').fadeOut(250, function() {
            $('#emotionsPanel').fadeIn(250);
          });
        }
      },

      'anger': function() {
        if (emotionsPanel === true) {
          resetEmotionTimer();
          anger();
          $('#angerSpeechBtn').addClass('active');
        }
      },

      'confusion': function() {
        if (emotionsPanel === true) {
          resetEmotionTimer();
          confusion();
          $('#confusionSpeechBtn').addClass('active');
        }
      },

      'crosseyed': function() {
        if (emotionsPanel === true) {
          resetEmotionTimer();
          crosseyed();
          $('#crosseyedSpeechBtn').addClass('active');
        }
      },

      'doubt': function() {
        if (emotionsPanel === true) {
          resetEmotionTimer();
          doubt();
          $('#doubtSpeechBtn').addClass('active');
        }
      },

      'exhaustion': function() {
        if (emotionsPanel === true) {
          resetEmotionTimer();
          exhaustion();
          $('#exhaustionSpeechBtn').addClass('active');
        }
      },

      'joy': function() {
        resetEmotionTimer();
        joy();
        $('#joySpeechBtn').addClass('active');

      },

      'rage': function() {
        resetEmotionTimer();
        rage();
        $('#rageSpeechBtn').addClass('active');
      },

      'sadness': function() {
        resetEmotionTimer();
        sadness();
        $('#sadnessSpeechBtn').addClass('active');
      },

      'serenity': function() {
        resetEmotionTimer();
        serenity();
        $('#serenitySpeechBtn').addClass('active');
      },

      'surprise': function() {
        resetEmotionTimer();
        surprise();
        $('#surpriseSpeechBtn').addClass('active');
      },

      'wink': function() {
        resetEmotionTimer();
        wink();
        $('#winkSpeechBtn').addClass('active');
      },
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
  }

  $('#angerSpeechBtn').click(function() { anger(); });
  $('#confusionSpeechBtn').click(function() { confusion(); });
  $('#crosseyedSpeechBtn').click(function() { crosseyed(); });
  $('#doubtSpeechBtn').click(function() { doubt(); });
  $('#exhaustionSpeechBtn').click(function() { exhaustion(); });
  $('#joySpeechBtn').click(function() { joy(); });
  $('#rageSpeechBtn').click(function() { rage(); });
  $('#sadnessSpeechBtn').click(function() { sadness(); });
  $('#serenitySpeechBtn').click(function() { serenity(); });
  $('#surpriseSpeechBtn').click(function() { surprise(); });
  $('#winkSpeechBtn').click(function() { wink(); });


	// I. BASE ANIMATIONS ---------------------------------------------------------------

	 // EYE SIZE
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

    // EYE DIRECTION
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

    // PUPIL SIZE
	function pupilExpand() {
		$('.pupil').addClass('pupilExpand');
	}

	function pupilContract() {
		$('.pupil').addClass('pupilContract');
	}

    // EYEBROW MOVEMENT
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

    // NOSE MOVEMENT
	function noseSquint() {
		$('#nose').addClass('noseSquint');
	}

	function nostrilFlare() {
		$('.nostril').addClass('nostrilFlare').delay(200).queue(function(next) {
			$(this).removeClass('nostrilFlare');
			next();
		});
	}

    // MOUTH MOVEMENT
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



  // EMOTIONS -----------------------------------------------------------------
  function joy() {
    eyebrowRaise();
    eyeTiltOutward();
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

  function serenity() {
    eyebrowTiltOutward();
    eyeSizeSquint3();
    eyeTiltOutward();
  }

  function exhaustion() {
    eyebrowTiltOutward();
    eyeSizeSquint3();
    eyeTiltOutward();
    mouthSad();
  }

  function doubt() {
    eyebrowRaiseTiltOutward();
    eyeSizeOpen();
    pupilExpand();
    mouthStiff();
  }

  function crosseyed() {
    $('#eyeL .iris').addClass('irisDownRight');
    $('#eyeR .iris').addClass('irisDownLeft');
    $('#eyeL .pupil').addClass('pupilDownRight');
    $('#eyeR .pupil').addClass('pupilDownLeft');
    eyebrowLowerTiltInward();
    eyeSizeSquint1();
    mouthJoy();
  }

  function wink() {
    $('#eyeL').addClass('eyeSizeClose').delay(300).queue(function(next) {
      $(this).removeClass('eyeSizeClose');
      next();
    });

    $('#mouth').addClass('mouthHappy').delay(300).queue(function(next) {
      $(this).removeClass('mouthHappy');
      next();
    });
  }



  // DEFAULT AFFECTATIONS ---------------------------------------------------------

    // RANDOMIZED DELAYS FOR BLINKING AND EYE MOVEMENT
  var delay;

  function selectDelay() {
    var delays = [3000, 3500, 4000, 4500, 5000];
    delay = delays[Math.floor(Math.random()*delays.length)];
    return delay;
  }

    // SINGLE BLINK
  function blink() {
    $('.eye').addClass('eyeSizeClose').delay(300).queue(function(next) {
      $(this).removeClass('eyeSizeClose');
      next();
    });
  }

    // BLINKING
  var blinkingStatus;

      // BLINKING ON
  function blinkingOn() {
    blinkingStatus = setInterval(function() {
      blink();
    }, selectDelay());
  }

      // BLINKING OFF
  function blinkingOff() {
    clearInterval(blinkingStatus);
  }

    // RANDOMIZED EYE DIRECTION SELECTION
  function eyeDirection() {
    var directions = [lookUp, lookDown, lookLeft, lookRight, lookUpLeft, lookUpRight, lookDownLeft, lookDownRight];

    function selectDirection() {
      var direction = directions[Math.floor(Math.random()*directions.length)]; 
      direction.call();
    }
    resetEyeDirection();
    selectDirection();
  }

    // EYE DIRECTION
  var eyeDirectionStatus;

    // EYE DIRECTION ON
  function eyeDirectionOn() {
    eyeDirectionStatus = setInterval( function() {
      eyeDirection();
    }, selectDelay());
  }

    // EYE DIRECTION OFF
  function eyeDirectionOff() {
    resetEyeDirection();
    clearInterval(eyeDirectionStatus);
  }



  // RESETS ------------------------------------------------------------------------
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


  // EMOTION PANEL TRIGGERS ------------------------------------------------------
  
    // if an emotion is clicked during timer
      // reset the timer (if applicable)
      // set a reset timer for 3 seconds
      // stop eye movement
      // reset all
      // run selected emotion

  function resetEmotionTimer() {
    var emotionTimer;

    clearTimeout(emotionTimer);
    resetAll();
    eyeDirectionOff();

    emotionTimer = setTimeout(function() {
      resetAll();
      eyeDirectionOn();
      $('div.active').removeClass('active');
    }, 3000);
  }

  $('.speechBtn').click(function() { resetEmotionTimer(); });
  $('#joySpeechBtn').click(function() { joy(); });
  $('#sadnessSpeechBtn').click(function() { sadness(); });
  $('#angerSpeechBtn').click(function() { anger(); });
  $('#surpriseSpeechBtn').click(function() { surprise(); });
  $('#confusionSpeechBtn').click(function() { confusion(); });
  $('#rageSpeechBtn').click(function() { rage(); });
  $('#crosseyedSpeechBtn').click(function() { crosseyed(); });
  $('#winkSpeechBtn').click(function() { wink(); });
  $('#serenitySpeechBtn').click(function() { serenity(); });
  $('#exhaustionSpeechBtn').click(function() { exhaustion(); });
  $('#crosseyedSpeechBtn').click(function() { crosseyed(); });
  $('#doubtSpeechBtn').click(function() { doubt(); });



  // CONTROL PANEL TRIGGERS -----------------------------------------------------
    // EYE SIZE
  $('.eyeSizeBtn').click(function() { resetEyeSize(); });
  $('#eyeSizeSquint1Btn').click(function() { eyeSizeSquint1(); });
  $('#eyeSizeSquint2Btn').click(function() { eyeSizeSquint2(); });
  $('#eyeSizeSquint3Btn').click(function() { eyeSizeSquint3(); });
  $('#eyeSizeSquint4Btn').click(function() { eyeSizeSquint4(); });
  $('#eyeSizeOpenBtn').click(function() { eyeSizeOpen(); });
  $('#eyeSizeCloseBtn').click(function() { eyeSizeClose();});
  $('#blinkBtn').click(function() { blink(); });

   // EYE MOVEMENT
  $('.eyeMovementBtn').click(function() { resetEyeMovement(); });
  $('#eyeRaiseBtn').click(function() { eyeRaise(); });
  $('#eyeLowerBtn').click(function() { eyeLower(); });
  $('#eyeTiltInwardBtn').click(function() { eyeTiltInward(); });
  $('#eyeTiltOutwardBtn').click(function() { eyeTiltOutward(); });
  $('#eyeRaiseTiltInwardBtn').click(function() { eyeRaiseTiltInward(); });
  $('#eyeRaiseTiltOutwardBtn').click(function() { eyeRaiseTiltOutward(); });
  $('#eyeLowerTiltInwardBtn').click(function() { eyeLowerTiltInward(); });
  $('#eyeLowerTiltOutwardBtn').click(function() { eyeLowerTiltOutward(); });

   // EYE DIRECTION
  $('.eyeDirectionBtn').click(function() { resetEyeDirection(); });
  $('#lookUpBtn').click(function() { lookUp(); });
  $('#lookDownBtn').click(function() { lookDown(); });
  $('#lookLeftBtn').click(function() { lookLeft(); });
  $('#lookRightBtn').click(function() { lookRight(); });
  $('#lookUpLeftBtn').click(function() { lookUpLeft(); });
  $('#lookUpRightBtn').click(function() { lookUpRight(); });
  $('#lookDownLeftBtn').click(function() { lookDownLeft(); });
  $('#lookDownRightBtn').click(function() { lookDownRight(); });

   // PUPIL SIZE
  $('.pupilSizeBtn').click(function() { resetPupilSize(); });
  $('#pupilExpandBtn').click(function() { pupilExpand(); });
  $('#pupilContractBtn').click(function() { pupilContract(); });

   // EYEBROW MOVEMENT
  $('.eyebrowMovementBtn').click(function() { resetEyebrows(); });
  $('#eyebrowRaiseBtn').click(function() { eyebrowRaise(); });
  $('#eyebrowLowerBtn').click(function() { eyebrowLower(); });
  $('#eyebrowTiltInwardBtn').click(function() { eyebrowTiltInward(); });
  $('#eyebrowTiltOutwardBtn').click(function() { eyebrowTiltOutward(); });
  $('#eyebrowRaiseTiltInwardBtn').click(function() { eyebrowRaiseTiltInward(); });
  $('#eyebrowRaiseTiltOutwardBtn').click(function() { eyebrowRaiseTiltOutward(); });
  $('#eyebrowLowerTiltInwardBtn').click(function() { eyebrowLowerTiltInward(); });
  $('#eyebrowLowerTiltOutwardBtn').click(function() { eyebrowLowerTiltOutward(); });

   // NOSE MOVEMENT 
  $('#noseSquintBtn').click(function() { noseSquint();  });
  $('#nostrilFlareBtn').click(function() { nostrilFlare(); });

   // MOUTH MOVEMENT
  $('.mouthMovementBtn').click(function() { resetMouth(); });
  $('#mouthHappyBtn').click(function() { mouthHappy(); });
  $('#mouthUnhappyBtn').click(function() { mouthUnhappy(); });
  $('#mouthJoyBtn').click(function() { mouthJoy(); });
  $('#mouthSurpriseBtn').click(function() { mouthSurprise(); });
  $('#mouthSadBtn').click(function() { mouthSad(); });
  $('#mouthStiffBtn').click(function() { mouthStiff(); });

  // DEFAULT AFFECTATIONS
  $('#blinkingOnBtn').click(function() { 
    blinkingOn();
    // hide blinkingOn button
    // show blinkingOff button
  });

  $('#blinkingOffBtn').click(function() {
    blinkingOff(); 
    // hide blinkingOff button
    // show blinkingOn button
  });

  $('#eyeDirectionOnBtn').click(function() {
    eyeDirectionOn();
    // hide eyeDirectionOn button
    // show eyeDirectionOff button
  });

  $('#eyeDirectionOffBtn').click(function() {
    eyeDirectionOff();
    // hide eyeDirectionOff button
    // show eyeDirectionOn button
  });


   // RESET 
  $('#resetEyebrowsBtn').click(function() { resetEyebrows(); });
  $('#resetEyeSizeBtn').click(function() { resetEyeSize(); });
  $('#resetEyeDirectionBtn').click(function() { resetEyeDirection(); });
  $('#resetEyeMovementBtn').click(function() { resetEyeMovement(); });
  $('#resetPupilBtn').click(function() { resetPupilSize(); });
  $('#resetNoseBtn').click(function() { resetNose(); });
  $('#resetMouthBtn').click(function() { resetMouth(); });
  $('#resetAllBtn').click(function() { resetAll(); });





	// ANNYANG VOICE CONTROLS ----------------------------------------
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


