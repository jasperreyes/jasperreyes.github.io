$(document).ready(function() {


  // TO DO -----------------------------------------
  // fix eye movement timing doubling up issue

  // TO DO LATER -----------------------------------
    // - add background scenery to alien box
    // - add sound effects to emotions
    // - add animations to emotinon triggers
      // - tear drop to sad
      // - eyes turn pink to anger, rage, sadness

  // DONE ------------------------------------------
    // make responsive
    // add link to refresh page when clicking top left navbar
    // save and return to current button box
    // add padding to control btn box
    // fix navRight padding
    // insert arrow triangles for control panel
    // clean up button container redundancies
    // hook up annyang
    // fix incorrect/non display of some control btn boxes
    // figure out why control type name is not displaying
    // fix link styling
    // updated mic permissions to show red rectangle
    // when voice command for emotion is triggered, add active class to corresponding button
    // decide on alien name and planet name
    // add additional styping to control box
    // finalize colors/styling
    // when voice command for controls is triggered, add active class to corresponding button


    // DESIRED SOUND EFFECTS

      // greetings
        // Wah wah
        // neerp

      // setup  
        // hello!

      // emotions
        // joy
          // Yaaa!

        // serenity
          // hmmmmmmm

        // exhaustion
          // hmph

        // sadness
          // nnnnnnnnnnnnn

        // surprise
          // wah!

        // doubt
          // ehhhhh

        // anger
          // upward pitch, rough


        // rage
          // wahhhh, rough

        // crosseyed
          // wehhhhhhh

        // confusion
          // upward pitch high






  // DESIRED TIMER BEHAVIOR

    // EMOTIONS

      // when the user calls an emotion

        // set a timer for 4 seconds, during which: 
          // emotions that have front facing eyes have eyes reset
            // joy
            // serenity
            // exhaustion
            // surprise
            // anger
            // rage

          // emotions that have non front-facing eyes have eyes frozen in place
            // confusion
            // sadness
            // doubt
            // crosseyed


          // blinking is set to on
          // the corresponding button is highlighted

        // once the timer has expired, reset all to default

    // CONTROLS

      // when the user calls an animation

        //




  // PAGE CONTROLS ---------------------------------

  var duration = 100;
  var currentPg;
  var currentBtnBox;

  function clearPg() {
    $('.pg').fadeOut(duration);
  }

  function clearNavSelect() {
    $('.navBtn').removeClass('navSelected');
  }

  function clearCarouselDots() {
    $('.carouselDot').removeClass('activeDot');
  }

  function clearBtnBox() {
    $('.btnBox').hide();
  }

  function clearControlTypeName() {
    $('.name').hide();
  }

  function clearActiveSpeechBtn() {
    $('.speechBtn').removeClass('activeSpeechBtn');
  }


  // CONTROLS ----------------------------

  function goToEyebrowPosition() {
    clearBtnBox();
    clearCarouselDots();
    clearControlTypeName();
    currentBtnBox = 'eyebrowPosition';
    $('#eyebrowPositionBox').fadeIn(duration);
    $('#eyebrowPositionDot').addClass('activeDot');
    $('#eyebrowPositionName').fadeIn(duration);
  }

  function goToEyeDirection() {
    clearBtnBox();
    clearCarouselDots();
    clearControlTypeName();
    currentBtnBox = 'eyeDirection';
    $('#eyeDirectionBox').fadeIn(duration);
    $('#eyeDirectionDot').addClass('activeDot');
    $('#eyeDirectionName').fadeIn(duration);
  }

  function goToEyePosition() {
    clearBtnBox();
    clearCarouselDots();
    clearControlTypeName();
    currentBtnBox = 'eyePosition';
    $('#eyePositionBox').fadeIn(duration);
    $('#eyePositionDot').addClass('activeDot');
    $('#eyePositionName').fadeIn(duration);
  }

  function goToEyeSize() {
    clearBtnBox();
    clearCarouselDots();
    clearControlTypeName();
    currentBtnBox = 'eyeSize';
    $('#eyeSizeBox').fadeIn(duration);
    $('#eyeSizeDot').addClass('activeDot');
    $('#eyeSizeName').fadeIn(duration);
  }

  function goToPupilSize() {
    clearBtnBox();
    clearCarouselDots();
    clearControlTypeName();
    currentBtnBox = 'pupilSize';
    $('#pupilSizeBox').fadeIn(duration);
    $('#pupilSizeDot').addClass('activeDot');
    $('#pupilSizeName').fadeIn(duration);
  }

  function goToNose() {
    clearBtnBox();
    clearCarouselDots();
    clearControlTypeName();
    currentBtnBox = 'nose';
    $('#noseAnimationBox').fadeIn(duration);
    $('#noseDot').addClass('activeDot');
    $('#noseName').fadeIn(duration);
  }

  function goToMouth() {
    clearBtnBox();
    clearCarouselDots();
    clearControlTypeName();
    currentBtnBox = 'mouth';
    $('#mouthAnimationBox').fadeIn(duration);
    $('#mouthDot').addClass('activeDot');
    $('#mouthName').fadeIn(duration);
  }

  function nextControlType() {
    if (currentBtnBox === 'eyebrowPosition') {
      goToEyeDirection();
    }

    else if (currentBtnBox === 'eyeDirection') {
      goToEyePosition();
    }

    else if (currentBtnBox === 'eyePosition') {
      goToEyeSize();
    }

    else if (currentBtnBox === 'eyeSize') {
      goToPupilSize();
    }

    else if (currentBtnBox === 'pupilSize') {
      goToNose();
    }

    else if (currentBtnBox === 'nose') {
      goToMouth();
    }

    else if (currentBtnBox === 'mouth') {
      goToEyebrowPosition();
    }
  }

  function previousControlType() {

    if (currentBtnBox === 'eyebrowPosition') {
      goToMouth();
    }

    else if (currentBtnBox === 'mouth') {
      goToNose();
    }

    else if (currentBtnBox === 'nose') {
      goToPupilSize();
    }

    else if (currentBtnBox === 'pupilSize') {
      goToEyeSize();
    }

    else if (currentBtnBox === 'eyeSize') {
      goToEyePosition();
    }

    else if (currentBtnBox === 'eyePosition') {
      goToEyeDirection();
    }

    else if (currentBtnBox === 'eyeDirection') {
     goToEyebrowPosition();
    }
  }


  // CAROUSEL DOT CLICK BEHAVIOR ----------------------------

  $('#eyebrowPositionDot').click(function() {
    goToEyebrowPosition();
  });

  $('#eyeDirectionDot').click(function() {
    goToEyeDirection();
  });

  $('#eyePositionDot').click(function() {
    goToEyePosition();
  });

  $('#eyeSizeDot').click(function() {
    goToEyeSize();
  });

  $('#pupilSizeDot').click(function() {
    goToPupilSize();
  });

  $('#noseDot').click(function() {
    goToNose();
  });

  $('#mouthDot').click(function() {
    goToMouth();
  });


  // ONSCREEN ARROW BEHAVIOR ---------------------------

  $('#leftArrow').click(function() {
    previousControlType();
  });

  $('#rightArrow').click(function() {
    nextControlType();
  });


  // KEYBOARD ARROW BEHAVIOR ----------------------------

  $(document).keydown(function(e) {

    if (currentPg === 'controls') {

      if (e.keyCode === 37) {
        previousControlType();
      }

      if (e.keyCode === 39) {
        nextControlType();
      }
    }
  });


  // EYE SIZE ---------------------------------

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


  // EYE POSITION -----------------------------

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


  // EYE DIRECTION ------------------------------

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


  // PUPIL SIZE ------------------------------------

  function pupilExpand() {
    $('.pupil').addClass('pupilExpand');
  }

  function pupilContract() {
    $('.pupil').addClass('pupilContract');
  }


  // EYEBROW POSITION -------------------------------

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


  // NOSE -------------------------------

  function noseSquint() {
    $('#nose').addClass('noseSquint');
  }

  function nostrilFlare() {
    $('.nostril').addClass('nostrilFlare').delay(200).queue(function(next) {
      $(this).removeClass('nostrilFlare');
      next();
    });
  }


  // MOUTH -------------------------------

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
    clearActiveSpeechBtn();
    $('#joySpeechBtn').addClass('activeSpeechBtn');
  }

  function sadness() {
    eyebrowLowerTiltOutward();
    eyeSizeSquint2();
    eyeTiltOutward();
    nostrilFlare();
    mouthSad();
    lookDown();
    clearActiveSpeechBtn();
    $('#sadnessSpeechBtn').addClass('activeSpeechBtn');
  }

  function anger() {
    eyebrowLowerTiltInward();
    eyeTiltInward();
    eyeSizeSquint3();
    pupilContract();
    noseSquint();
    mouthStiff();
    clearActiveSpeechBtn();
    $('#angerSpeechBtn').addClass('activeSpeechBtn');
  }

  function rage() {
    eyebrowLowerTiltInward();
    eyeTiltInward();
    eyeSizeSquint1();
    noseSquint();
    mouthStiff();
    clearActiveSpeechBtn();
    $('#rageSpeechBtn').addClass('activeSpeechBtn');
  }

  function confusion() {
    $('#eyebrowL').addClass('eyebrowRaiseTiltCW');
    $('#eyebrowR').addClass('eyebrowLowerTiltCCW');
    $('#eyeR').addClass('eyeSizeSquint1');
    lookUpLeft();
    mouthUnhappy();
    clearActiveSpeechBtn();
    $('#confusionSpeechBtn').addClass('activeSpeechBtn');
  }

  function surprise() {
    eyebrowRaise();
    eyeSizeOpen();
    pupilExpand();
    mouthSurprise();
    clearActiveSpeechBtn();
    $('#surpriseSpeechBtn').addClass('activeSpeechBtn');
  }

  function serenity() {
    eyebrowTiltOutward();
    eyeSizeSquint3();
    eyeTiltOutward();
    clearActiveSpeechBtn();
    $('#serenitySpeechBtn').addClass('activeSpeechBtn');
  }

  function exhaustion() {
    eyebrowTiltOutward();
    eyeSizeSquint3();
    eyeTiltOutward();
    mouthSad();
    clearActiveSpeechBtn();
    $('#exhaustionSpeechBtn').addClass('activeSpeechBtn');
  }

  function doubt() {
    eyebrowRaiseTiltOutward();
    eyeSizeOpen();
    pupilExpand();
    mouthStiff();
    clearActiveSpeechBtn();
    $('#doubtSpeechBtn').addClass('activeSpeechBtn');
  }

  function crosseyed() {
    $('#eyeL .iris').addClass('irisDownRight');
    $('#eyeR .iris').addClass('irisDownLeft');
    $('#eyeL .pupil').addClass('pupilDownRight');
    $('#eyeR .pupil').addClass('pupilDownLeft');
    eyebrowLowerTiltInward();
    eyeSizeSquint1();
    mouthJoy();
    clearActiveSpeechBtn();
    $('#crosseyedSpeechBtn').addClass('activeSpeechBtn');
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
    $('#mouthSpeechBtn').addClass('activeSpeechBtn');
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


  // RANDOMIZE DELAYS FOR BLINKING AND EYE MOVEMENT

  var delay;

  function selectDelay() {
    var delays = [3000, 3500, 4000, 4500, 5000];
    delay = delays[Math.floor(Math.random()*delays.length)];
    return delay;
  }

  // DEFAULT AFFECTATIONS -------------------------------------------------

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


  // RESET EMOTION TIMER
  function resetEmotionTimer() {
    var emotionTimer;

    clearTimeout(emotionTimer);
    resetAll();
    eyeDirectionOff();

    emotionTimer = setTimeout(function() {
      resetAll();
      eyeDirectionOn();
      $('div.active').removeClass('active');
      $('.speechBtn').removeClass('activeSpeechBtn');
    }, 3000);
  }


  // EMOTION PANEL TRIGGERS ------------------------------------------------------

  $('.speechBtn').click(function() {
    $('.speechBtn').removeClass('activeSpeechBtn');
    resetEmotionTimer();
  });

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

  // EYEBROW POSITION
  $('.eyebrowMovementBtn').click(function() { resetEyebrows(); });
  $('#eyebrowRaiseBtn').click(function() { eyebrowRaise(); });
  $('#eyebrowLowerBtn').click(function() { eyebrowLower(); });
  $('#eyebrowTiltInwardBtn').click(function() { eyebrowTiltInward(); });
  $('#eyebrowTiltOutwardBtn').click(function() { eyebrowTiltOutward(); });
  $('#eyebrowRaiseTiltInwardBtn').click(function() { eyebrowRaiseTiltInward(); });
  $('#eyebrowRaiseTiltOutwardBtn').click(function() { eyebrowRaiseTiltOutward(); });
  $('#eyebrowLowerTiltInwardBtn').click(function() { eyebrowLowerTiltInward(); });
  $('#eyebrowLowerTiltOutwardBtn').click(function() { eyebrowLowerTiltOutward(); });

  // EYE POSITION
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

  // EYE SIZE
  $('.eyeSizeBtn').click(function() { resetEyeSize(); });
  $('#eyeSizeSquint1Btn').click(function() { eyeSizeSquint1(); });
  $('#eyeSizeSquint2Btn').click(function() { eyeSizeSquint2(); });
  $('#eyeSizeSquint3Btn').click(function() { eyeSizeSquint3(); });
  $('#eyeSizeSquint4Btn').click(function() { eyeSizeSquint4(); });
  $('#eyeSizeOpenBtn').click(function() { eyeSizeOpen(); });
  $('#eyeSizeCloseBtn').click(function() { eyeSizeClose();});
  $('#blinkBtn').click(function() { blink(); });

  // PUPIL SIZE
  $('.pupilSizeBtn').click(function() { resetPupilSize(); });
  $('#pupilExpandBtn').click(function() { pupilExpand(); });
  $('#pupilContractBtn').click(function() { pupilContract(); });

  // NOSE ANIMATION 
  $('#noseSquintBtn').click(function() { noseSquint();  });
  $('#nostrilFlareBtn').click(function() { nostrilFlare(); });

  // MOUTH ANIMATION
  $('.mouthMovementBtn').click(function() { resetMouth(); });
  $('#mouthHappyBtn').click(function() { mouthHappy(); });
  $('#mouthUnhappyBtn').click(function() { mouthUnhappy(); });
  $('#mouthJoyBtn').click(function() { mouthJoy(); });
  $('#mouthOpenWideBtn').click(function() { mouthSurprise(); });
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


  // EMOTION SPEECH BUTTON TRIGGERS ------------------------------

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


  // CONTROL BUTTON RESETS

  $('#resetEyebrowsBtn').click(function() { resetEyebrows(); });
  $('#resetEyeSizeBtn').click(function() { resetEyeSize(); });
  $('#resetEyeDirectionBtn').click(function() { resetEyeDirection(); });
  $('#resetEyeMovementBtn').click(function() { resetEyeMovement(); });
  $('#resetPupilBtn').click(function() { resetPupilSize(); });
  $('#resetNoseBtn').click(function() { resetNose(); });
  $('#resetMouthBtn').click(function() { resetMouth(); });
  $('#resetAllBtn').click(function() { resetAll(); });


  // REFRESH BUTTON

  $('#navLeft').click(function() {
    location.reload();
  });



  // NEXT BUTTONS -------------------------------

  function introGoToSetup() {
    $('#greetingsPg').fadeOut(duration);
    $('#setupPg').delay(duration).fadeIn(duration);
    currentPg = 'setup';
    joy();
    eyeDirectionOff(); 
  }

  function introGoToEmotions() {
    $('#setupPg').fadeOut(duration);
    $('#emotionsPg').delay(duration).fadeIn(duration);
    $('#emotionsBtn').addClass('navSelected');
    currentPg = 'emotions';

    $('#navRight').show();
  }

  // NAV BUTTONS -------------------------

  function navGoToEmotions() {
    if (!(currentPg === 'emotions')) {
      clearNavSelect();
      $('#emotionsBtn').addClass('navSelected');
      clearPg();
      currentPg = 'emotions';
      $('#emotionsPg').delay(duration).fadeIn(duration);
    }
  }

  function navGoToControls() {
    if (!(currentPg === 'controls')) {
      clearNavSelect();
      $('#controlsBtn').addClass('navSelected');
      clearPg();
      currentPg = 'controls';
      $('#controlsPg').delay(duration).fadeIn(duration);
      eyeDirectionOff();
    }

    // SAVE AND RETURN TO CURRENT BUTTON BOX / DISPLAY CORRESPONDING CAROUSEL DOT -------------------

    if (currentBtnBox === 'eyebrowPosition') {
      clearCarouselDots();
      clearControlTypeName();
      $('#eyebrowPositionDot').addClass('activeDot');
      $('#eyebrowPositionBox').delay(duration).fadeIn(duration);
      $('#eyebrowPositionName').delay(duration).fadeIn(duration);
    }

    else if (currentBtnBox === 'eyeDirection') {
      clearCarouselDots();
      clearControlTypeName();
      $('#eyeDirectionDot').addClass('activeDot');
      $('#eyeDirectionBox').delay(duration).fadeIn(duration);
      $('#eyeDirectionName').delay(duration).fadeIn(duration);
    }

    else if (currentBtnBox === 'eyePosition') {
      $('#eyePositionBox').delay(duration).fadeIn(duration);
      clearCarouselDots();
      $('#eyePositionDot').addClass('activeDot');
    }

    else if (currentBtnBox === 'eyeSize') {
      $('#eyeSizeBox').delay(duration).fadeIn(duration);
      clearCarouselDots();
      $('#eyeSizeDot').addClass('activeDot');
    }

    else if (currentBtnBox === 'pupilSize') {
      $('#pupilSizeBox').delay(duration).fadeIn(duration);
      clearCarouselDots();
      $('#pupilSizeDot').addClass('activeDot');
    }

    else if (currentBtnBox === 'nose') {
      $('#noseBox').delay(duration).fadeIn(duration);
      clearCarouselDots();
      $('#noseDot').addClass('activeDot');
    }

    else {
      $('#mouthBox').delay(duration).fadeIn(duration);
      clearCarouselDots();
      $('#mouthDot').addClass('activeDot');
    }
  }

  function navGoToAbout() {
    if (!(currentPg === 'about')) {
      clearNavSelect();
      $('#aboutBtn').addClass('navSelected');
      clearPg();
      currentPg = 'about';
      $('#aboutPg').delay(duration).fadeIn(duration);
    }
  }

  // $('#greetingsBtn').click(function() { 
  //   introGoToSetup();
  //   annyang.start(); 
  // });

  $('#setupBtn').click(function() { introGoToEmotions(); });



  $('#emotionsBtn').click(function() { navGoToEmotions(); });
  $('#controlsBtn').click(function() { navGoToControls(); });
  $('#aboutBtn').click(function() { navGoToAbout(); });

  // navGoToControls();

  // DEFAULT LANDING PAGE -------------------------------

  // $('#greetingsPg').fadeIn(duration);
  blinkingOn();
  eyeDirectionOn();
  currentPg = 'greetings';
  currentBtnBox = 'eyebrowPosition';
  $('#eyebrowPositionName').fadeIn(duration);



  // ANNYANG VOICE COMMAND ----------------------------------------
  

    // if (annyang) {
    // // Let's define our first command. First the text we expect, and then the function it should call

    //   var commands = {

    //     // VOICE COMMANDS

    //     'hello': function() {
    //       if (currentPg === 'setup') {
    //         introGoToEmotions();
    //       }
    //     },

    //     // NAVIGATION VOICE COMMANDS
    //     'emotions': function() {
    //       if (currentPg === 'controls' || 'about') {
    //         navGoToEmotions();
    //       }
    //     },

    //     'face controller': function() {
    //       if (currentPg === 'emotions' || 'about') {
    //         navGoToControls();
    //       }
    //     },

    //     'about': function() {
    //       if (currentPg === 'emotions' || 'controls') {
    //         navGoToAbout();
    //       }
    //     },

    //     // EMOTION VOICE COMMANDS
    //     'joy': function() {
    //       if (currentPg === 'emotions') {
    //         joy();
    //       }
    //     },

    //     'rage': function() {
    //       if (currentPg === 'emotions') {
    //         rage();
    //       }
    //     },

    //     'serenity': function() {
    //       if (currentPg === 'emotions') {
    //         serenity();
    //       }
    //     },

    //     'exhaustion': function() {
    //       if (currentPg === 'emotions') {
    //         exhaustion();
    //       }
    //     },

    //     'sadness': function() {
    //       if (currentPg === 'emotions') {
    //         sadness();
    //       }
    //     },

    //     'surprise': function() {
    //       if (currentPg === 'emotions') {
    //         surprise();
    //       }
    //     },

    //     'doubt': function() {
    //       if (currentPg === 'emotions') {
    //         doubt();
    //       }
    //     },

    //     'anger': function() {
    //       if (currentPg === 'emotions') {
    //         anger();
    //       }
    //     },

    //     'crosseyed': function() {
    //       if (currentPg === 'emotions') {
    //         crosseyed();
    //       }
    //     },

    //     'confusion': function() {
    //       if (currentPg === 'emotions') {
    //         confusion();
    //       }
    //     },

    //     'reset': function() {
    //       if (currentPg === 'emotions') {
    //         resetAll();
    //       }
    //     },

    //     // CONTROLS > LEFT AND RIGHT

    //     'previous': function() {
    //       if (currentPg === 'controls') {
    //         previousControlType();
    //       }
    //     },

    //     'next': function() {
    //       if (currentPg === 'controls') {
    //         nextControlType();
    //       }
    //     },

    //     // CONTROLS > EYEBROW POSITION COMMANDS
    //     'raise': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
    //         eyebrowRaise();
    //       }
    //     },

    //     'lower': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
    //         eyebrowLower();
    //       }
    //     },

    //     'tilt inward': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
    //         eyebrowTiltInward();
    //       }
    //     },

    //     'tilt outward': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
    //         eyebrowTiltOutward();
    //       }
    //     },

    //     'raise tilt inward': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
    //         eyebrowRaiseTiltInward();
    //       }
    //     },

    //     'raise tilt outward': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
    //         eyebrowRaiseTiltOutward();
    //       }
    //     },

    //     'lower tilt inward': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
    //         eyebrowLowerTiltInward();
    //       }
    //     },

    //     'lower tilt outward': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
    //         eyebrowLowerTiltOutward();
    //       }
    //     },

    //     'reset eyebrow position': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
    //         resetEyebrows();
    //       }
    //     },

    //     // CONTROLS > EYE DIRECTION COMMANDS
    //     'look up': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
    //         lookUp();
    //       }
    //     },

    //     'look down': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
    //         lookDown();
    //       }
    //     },

    //     'look left': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
    //         lookLeft();
    //       }
    //     },

    //     'look right': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
    //         lookRight();
    //       }
    //     },

    //     'look up left': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
    //         lookUpLeft();
    //       }
    //     },

    //     'look up right': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
    //         lookUpRight();
    //       }
    //     },

    //     'look down left': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
    //         lookDownLeft();
    //       }
    //     },

    //     'look down right': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
    //         lookDownRight();
    //       }
    //     },

    //     'reset eye direction': function() {
    //       if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
    //         resetEyeDirection();
    //       }
    //     },

    //   };

    //   // Add our commands to annyang
    //   annyang.addCommands(commands);

    //   // Start listening. You can call this here, or attach this call to an event, button, etc.
   
    // }
  
});


