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


  // REFRESH BUTTON ---------------------------
  function refresh() {
    location.reload();
  }

  // GLOBAL VARIABLES ----------------------------------
  var duration = 100;
  var currentPg;
  var controlType = ['eyebrowPosition','eyeDirection','eyePosition','eyeSize','pupilSize','nose','mouth'];
  var currentControlType = 0;
  var screenBreakPoint = 640;

  // DEBUG ---------------------------------------
  function getCurrentPgControlType() {

    console.log('The current page is "' + currentPg + '".');

    if (currentPg === 'controls') {
      console.log('The current control type is "' + controlType[currentControlType] + '".');
    }
  }

  // NAVIGATION FUNCTIONS ---------------------------------------
  function goToNextControlType() {
    currentControlType = currentControlType + 1;
    currentControlType = currentControlType % controlType.length;
    return controlType[currentControlType];
  }

  function goToPreviousControlType() {
    if (currentControlType === 0) {
      currentControlType = controlType.length;
    }
    currentControlType = currentControlType - 1;
    return controlType[currentControlType];
  }

  function pgFadeOut() {
    $('.pg').fadeOut(duration);
  }

  function ctbFadeOut() {
    $('.controlTypeBox').fadeOut(duration);
  }

  function removeNavBtnSelected() {
    if ( $('.navBtn').hasClass('navBtnSelected') ) {
      $('.navBtn').removeClass('navBtnSelected');
    }
  }

  function updateControlTypeDisplay() {
    $('.controlDot').removeClass('controlDotSelected');
    ctbFadeOut();
    getCurrentPgControlType();

    if (currentControlType === 0) {
      $('#eyebrowPositionCTB').delay(duration).fadeIn(duration);
      $('#eyebrowPositionDot').addClass('controlDotSelected');
    }
    else if (currentControlType === 1) {
      $('#eyeDirectionCTB').delay(duration).fadeIn(duration);
      $('#eyeDirectionDot').addClass('controlDotSelected');
    }
    else if (currentControlType === 2) {
      $('#eyePositionCTB').delay(duration).fadeIn(duration);
      $('#eyePositionDot').addClass('controlDotSelected');
    }
    else if (currentControlType === 3) {
      $('#eyeSizeCTB').delay(duration).fadeIn(duration);
      $('#eyeSizeDot').addClass('controlDotSelected');
    }
    else if (currentControlType === 4) {
      $('#pupilSizeCTB').delay(duration).fadeIn(duration);
      $('#pupilSizeDot').addClass('controlDotSelected');
    }
    else if (currentControlType === 5) {
      $('#noseCTB').delay(duration).fadeIn(duration);
      $('#noseDot').addClass('controlDotSelected');
    }
    else if (currentControlType === 6) {
      $('#mouthCTB').delay(duration).fadeIn(duration);
      $('#mouthDot').addClass('controlDotSelected');
    }
  }

  function updateMobileBtnDisplay() {
    $('.mobileBtn').removeClass('mobileBtnSelected');

    if (currentPg === 'emotions') {
      $('#emotionsMobileBtn').addClass('mobileBtnSelected');
    }

    else if (currentPg === 'controls') {
      $('#controlsMobileBtn').addClass('mobileBtnSelected');
    }

    else if (currentPg === 'about') {
      $('#aboutMobileBtn').addClass('mobileBtnSelected');
    }
  }



  // function goToGreetings() {
  //   pgFadeOut();
  //   $('#greetingsPg').delay(duration).fadeIn(duration);
  //   currentPg = 'greetings';
  // }

  function goToHelp() {
    pgFadeOut();
    $('#helpPg').delay(duration).fadeIn(duration);
    currentPg = 'help';
  }

  function goToMic() {
    pgFadeOut();
    $('#micPg').delay(duration).fadeIn(duration);
    currentPg = 'mic';
  }

  function goToMicYes() {
    pgFadeOut();
    $('#micYesPg').delay(duration).fadeIn(duration);
    currentPg = 'micYes';
  }

  function goToMicNo() {
    pgFadeOut();
    $('#micNoPg').delay(duration).fadeIn(duration);
    currentPg = 'micNo';
  }

  function goToMicTest() {
    pgFadeOut();
    $('#micTestPg').delay(duration).fadeIn(duration);
    currentPg = 'micTest';
  }

  function goToEmotions() {
    if (currentPg !== 'emotions') {
      pgFadeOut();
      $('#emotionsPg').delay(duration).fadeIn(duration);
      currentPg = 'emotions';

      if ($(window).width() > screenBreakPoint) {
        $('#navRight').delay(4*duration).fadeIn(duration);
      }

      if ($(window).width() < screenBreakPoint) {
        $('#mobileMenuBtn').fadeIn(duration);
      }

      $('#emotionsBtn').addClass('navBtnSelected');
      getCurrentPgControlType();
    }
  }

  function goToControls() {
    if (currentPg !== 'controls') {
      pgFadeOut();
      $('#controlsPg').delay(duration).fadeIn(duration);
      currentPg = 'controls';
      updateControlTypeDisplay();
    }
  }

  function goToAbout() {
    if (currentPg !== 'about') {
      pgFadeOut();
      $('#aboutPg').delay(duration).fadeIn(duration);
      currentPg = 'about';
      getCurrentPgControlType();
    }
  }

  function goToEyebrowPosition() {
    if (currentControlType !== 0) {
      currentControlType = 0;
      updateControlTypeDisplay();
    }
  }

  function goToEyeDirection() {
    if (currentControlType !== 1) {
      currentControlType = 1;
      updateControlTypeDisplay();
    }
  }

  function goToEyePosition() {
    if (currentControlType !== 2) {
      currentControlType = 2;
      updateControlTypeDisplay();
    }
  }

  function goToEyeSize() {
    if (currentControlType !== 3) {
      currentControlType = 3;
      updateControlTypeDisplay();
    }
  }

  function goToPupilSize() {
    if (currentControlType !== 4) {
      currentControlType = 4;
      updateControlTypeDisplay();
    }
  }

  function goToNose() {
    if (currentControlType !== 5) {
      currentControlType = 5;
      updateControlTypeDisplay();
    }
  }

  function goToMouth() {
    if (currentControlType !== 6) {
      currentControlType = 6;
      updateControlTypeDisplay();
    }
  }

  // INTRO NAVIGATION BUTTONS -------------------------------
  $('#greetingsBtn').click(function() {
    goToHelp();
  });

  $('#helpYesBtn').click(function() {
    goToMic();
  });

  $('#micYesBtn').click(function() {
    goToMicYes();
  });

  $('#micNoBtn').click(function() {
    goToMicNo();
  });

  $('#micDoneBtn').click(function() {
    goToMicTest();
  });

  $('#noMicOkBtn').click(function() {
    goToMicTest();
    currentControlType = 0;
  });

  $('#helloBtn').click(function() {
    goToEmotions();
    currentControlType = 0;
  });


  // MAIN NAVIGATION BUTTONS ----------------------------------
  $('#emotionsBtn').click(function() {
    removeNavBtnSelected();
    $(this).addClass('navBtnSelected');
    goToEmotions();
  });

  $('#controlsBtn').click(function() {
    removeNavBtnSelected();
    $(this).addClass('navBtnSelected');
    goToControls();
  });

  $('#aboutBtn').click(function() {
    removeNavBtnSelected();
    $(this).addClass('navBtnSelected');
    goToAbout();
  });


  // CONTROL NAVIGATION BUTTONS --------------------------------
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

  $('#leftArrowBox').click(function() {
    goToPreviousControlType();
    updateControlTypeDisplay();
  });

  $('#rightArrowBox').click(function() {
    goToNextControlType();
    updateControlTypeDisplay();
  });


  // KEYBOARD ARROW BEHAVIOR ----------------------------
  $(document).keydown(function(e) {

    if (currentPg === 'controls') {
      if (e.keyCode === 39) {
        goToNextControlType();
        updateControlTypeDisplay();
      }
      if (e.keyCode === 37) {
        goToPreviousControlType();
        updateControlTypeDisplay();
      }
    }
  });


  // NAVIGATION

  $('#navLeft').click(function() {
    refresh();
  });

  // MOBILE NAV -------------------------------
  $('#mobileMenuBtn').click(function() {
    updateMobileBtnDisplay();
    $('#mobileNav').fadeIn(duration);
    $(this).fadeOut(duration);
  });

  $('#mobileOverlay').click(function() {
    $('#mobileNav').fadeOut(duration);
    $('#mobileMenuBtn').fadeIn(duration);
  });

  $('#mobileHeader span').click(function() {
    refresh();
  });

  $('#emotionsMobileBtn').click(function() {
    goToEmotions();
    $('#mobileNav').fadeOut(duration);
    $('#mobileMenuBtn').fadeIn(duration);
  });

  $('#controlsMobileBtn').click(function() {
    goToControls();
    $('#mobileNav').fadeOut(duration);
    $('#mobileMenuBtn').fadeIn(duration);
  });

  $('#aboutMobileBtn').click(function() {
    goToAbout();
    $('#mobileNav').fadeOut(duration);
    $('#mobileMenuBtn').fadeIn(duration);
  })



  // ---------------------------------------------------
  // ALIEN ANIMATIONS ----------------------------------
  // ---------------------------------------------------

  // RESETS ------------------------------------------------------------------------
  function resetEyebrowPosition() {
    $('.eyebrow').removeClass('eyebrowRaise eyebrowLower eyebrowTiltCW eyebrowTiltCCW eyebrowRaiseTiltCW eyebrowRaiseTiltCCW eyebrowLowerTiltCW eyebrowLowerTiltCCW');
  }

  function resetEyePosition() {
    $('.eye').removeClass('eyeRaise eyeLower eyeTiltCW eyeTiltCCW eyeRaiseTiltCW eyeRaiseTiltCCW eyeLowerTiltCW eyeLowerTiltCCW');
  }


  function resetEyeSize() {
    $('.eye').removeClass('eyeSizeSquint1 eyeSizeSquint2 eyeSizeSquint3 eyeSizeSquint4 eyeSizeClose eyeSizeOpen');
  }

  function resetEyeDirection() {
    $('.pupil').removeClass('pupilUp pupilDown pupilLeft pupilRight pupilUpLeft pupilUpRight pupilDownLeft pupilDownRight');
    $('.iris').removeClass('irisUp irisDown irisLeft irisRight irisUpLeft irisUpRight irisDownLeft irisDownRight');
  }

  function resetPupilSize() {
    $('.pupil').removeClass('pupilExpand pupilContract');
  }

  function resetNose() {
    $('#nose').removeClass('noseSquint noseNostrilFlare');
  }

  function resetMouth() {
    $('#mouth').removeClass('mouthSmile mouthBigSmile mouthOpen mouthOpenWide mouthFrown mouthStiff');
    $('#mouth').addClass('mouthDefault');
  }

  function resetAll() {
    resetEyebrowPosition();
    resetEyeDirection();
    resetEyePosition();
    resetEyeSize();
    resetPupilSize();
    resetNose();
    resetMouth();
  }

  $('.resetAllControlsBtn').click(function() {
    resetAll();
  });



  // EYEBROW POSITION -------------------------------
  function eyebrowRaise() {
    resetEyebrowPosition();
    $('.eyebrow').addClass('eyebrowRaise');
  }

  function eyebrowLower() {
    resetEyebrowPosition();
    $('.eyebrow').addClass('eyebrowLower');
  }

  function eyebrowTiltInward() {
    resetEyebrowPosition();
    $('#eyebrowL').addClass('eyebrowTiltCW');
    $('#eyebrowR').addClass('eyebrowTiltCCW');
  }

  function eyebrowTiltOutward() {
    resetEyebrowPosition();
    $('#eyebrowL').addClass('eyebrowTiltCCW');
    $('#eyebrowR').addClass('eyebrowTiltCW');
  }

  function eyebrowRaiseTiltInward() {
    resetEyebrowPosition();
    $('#eyebrowL').addClass('eyebrowRaiseTiltCW');
    $('#eyebrowR').addClass('eyebrowRaiseTiltCCW');
  }

  function eyebrowRaiseTiltOutward() {
    resetEyebrowPosition();
    $('#eyebrowL').addClass('eyebrowRaiseTiltCCW');
    $('#eyebrowR').addClass('eyebrowRaiseTiltCW');
  }

  function eyebrowLowerTiltInward() {
    resetEyebrowPosition();
    $('#eyebrowL').addClass('eyebrowLowerTiltCW');
    $('#eyebrowR').addClass('eyebrowLowerTiltCCW');
  }

  function eyebrowLowerTiltOutward() {
    resetEyebrowPosition();
    $('#eyebrowL').addClass('eyebrowLowerTiltCCW');
    $('#eyebrowR').addClass('eyebrowLowerTiltCW');
  }

  // EYEBROW POSITION
  $('#eyebrowRaiseBtn').click(function() { eyebrowRaise(); });
  $('#eyebrowLowerBtn').click(function() { eyebrowLower(); });
  $('#eyebrowTiltInwardBtn').click(function() { eyebrowTiltInward(); });
  $('#eyebrowTiltOutwardBtn').click(function() { eyebrowTiltOutward(); });
  $('#eyebrowRaiseTiltInwardBtn').click(function() { eyebrowRaiseTiltInward(); });
  $('#eyebrowRaiseTiltOutwardBtn').click(function() { eyebrowRaiseTiltOutward(); });
  $('#eyebrowLowerTiltInwardBtn').click(function() { eyebrowLowerTiltInward(); });
  $('#eyebrowLowerTiltOutwardBtn').click(function() { eyebrowLowerTiltOutward(); });
  $('#resetEyebrowPositionBtn').click(function() { resetEyebrowPosition(); });



  // EYE POSITION -----------------------------
  function eyeRaise() {
    resetEyePosition();
    $('.eye').addClass('eyeRaise');
  }

  function eyeLower() {
    resetEyePosition();
    $('.eye').addClass('eyeLower');
  }

  function eyeTiltInward() {
    resetEyePosition();
    $('#eyeL').addClass('eyeTiltCW');
    $('#eyeR').addClass('eyeTiltCCW');
  }

  function eyeTiltOutward() {
    resetEyePosition();
    $('#eyeL').addClass('eyeTiltCCW');
    $('#eyeR').addClass('eyeTiltCW');
  }

  function eyeRaiseTiltInward() {
    resetEyePosition();
    $('#eyeL').addClass('eyeRaiseTiltCW');
    $('#eyeR').addClass('eyeRaiseTiltCCW');
  }

  function eyeRaiseTiltOutward() {
    resetEyePosition();
    $('#eyeL').addClass('eyeRaiseTiltCCW');
    $('#eyeR').addClass('eyeRaiseTiltCW');
  }

  function eyeLowerTiltInward() {
    resetEyePosition();
    $('#eyeL').addClass('eyeLowerTiltCW');
    $('#eyeR').addClass('eyeLowerTiltCCW');
  }

  function eyeLowerTiltOutward() {
    resetEyePosition();
    $('#eyeL').addClass('eyeLowerTiltCCW');
    $('#eyeR').addClass('eyeLowerTiltCW');
  }

  // EYE POSITION ------------------------------------------
  $('#eyeRaiseBtn').click(function() { eyeRaise(); });
  $('#eyeLowerBtn').click(function() { eyeLower(); });
  $('#eyeTiltInwardBtn').click(function() { eyeTiltInward(); });
  $('#eyeTiltOutwardBtn').click(function() { eyeTiltOutward(); });
  $('#eyeRaiseTiltInwardBtn').click(function() { eyeRaiseTiltInward(); });
  $('#eyeRaiseTiltOutwardBtn').click(function() { eyeRaiseTiltOutward(); });
  $('#eyeLowerTiltInwardBtn').click(function() { eyeLowerTiltInward(); });
  $('#eyeLowerTiltOutwardBtn').click(function() { eyeLowerTiltOutward(); });
  $('#resetEyePositionBtn').click(function() { resetEyePosition(); });


  // EYE DIRECTION ------------------------------
  function lookUp() {
    resetEyeDirection();
    $('.iris').addClass('irisUp');
    $('.pupil').addClass('pupilUp');
  }

  function lookDown() {
    resetEyeDirection();
    $('.iris').addClass('irisDown');
    $('.pupil').addClass('pupilDown');
  }

  function lookLeft() {
    resetEyeDirection();
    $('.iris').addClass('irisLeft');
    $('.pupil').addClass('pupilLeft');
  }

  function lookRight() {
    resetEyeDirection();
    $('.iris').addClass('irisRight');
    $('.pupil').addClass('pupilRight');
  }

  function lookUpLeft() {
    resetEyeDirection();
    $('.iris').addClass('irisUpLeft');
    $('.pupil').addClass('pupilUpLeft');
  }

  function lookUpRight() {
    resetEyeDirection();
    $('.iris').addClass('irisUpRight');
    $('.pupil').addClass('pupilUpRight');
  }

  function lookDownLeft() {
    resetEyeDirection();
    $('.iris').addClass('irisDownLeft');
    $('.pupil').addClass('pupilDownLeft');
  }

  function lookDownRight() {
    resetEyeDirection();
    $('.iris').addClass('irisDownRight');
    $('.pupil').addClass('pupilDownRight');
  }

  // EYE DIRECTION ---------------------------
  $('#lookUpBtn').click(function() { lookUp(); });
  $('#lookDownBtn').click(function() { lookDown(); });
  $('#lookLeftBtn').click(function() { lookLeft(); });
  $('#lookRightBtn').click(function() { lookRight(); });
  $('#lookUpLeftBtn').click(function() { lookUpLeft(); });
  $('#lookUpRightBtn').click(function() { lookUpRight(); });
  $('#lookDownLeftBtn').click(function() { lookDownLeft(); });
  $('#lookDownRightBtn').click(function() { lookDownRight(); });
  $('#resetEyeDirectionBtn').click(function() { resetEyeDirection(); });

  // EYE SIZE ---------------------------------
  function eyeSizeSquint1() {
    resetEyeSize();
    $('.eye').addClass('eyeSizeSquint1');
  }

  function eyeSizeSquint2() {
    resetEyeSize();
    $('.eye').addClass('eyeSizeSquint2');
  }

  function eyeSizeSquint3() {
    resetEyeSize();
    $('.eye').addClass('eyeSizeSquint3');
  }

  function eyeSizeSquint4() {
    resetEyeSize();
    $('.eye').addClass('eyeSizeSquint4');
  }

  function eyeSizeOpen() {
    resetEyeSize();
    $('.eye').addClass('eyeSizeOpen');
  }

  function eyeSizeClose() {
    resetEyeSize();
    $('.eye').addClass('eyeSizeClose');
  }

  // EYE SIZE
  $('#eyeSizeSquint1Btn').click(function() { eyeSizeSquint1(); });
  $('#eyeSizeSquint2Btn').click(function() { eyeSizeSquint2(); });
  $('#eyeSizeSquint3Btn').click(function() { eyeSizeSquint3(); });
  $('#eyeSizeSquint4Btn').click(function() { eyeSizeSquint4(); });
  $('#eyeSizeOpenBtn').click(function() { eyeSizeOpen(); });
  $('#eyeSizeCloseBtn').click(function() { eyeSizeClose();});
  $('#resetEyeSizeBtn').click(function() { resetEyeSize(); });
  // $('#blinkBtn').click(function() { blink(); });



  // PUPIL SIZE ------------------------------------
  function pupilExpand() {
    resetPupilSize();
    $('.pupil').addClass('pupilExpand');
  }

  function pupilContract() {
    resetPupilSize();
    $('.pupil').addClass('pupilContract');
  }

  // PUPIL SIZE
  $('#pupilExpandBtn').click(function() { pupilExpand(); });
  $('#pupilContractBtn').click(function() { pupilContract(); });
  $('#resetPupilSizeBtn').click(function() { resetPupilSize(); });


  // NOSE -------------------------------
  function noseSquint() {
    resetNose();
    $('#nose').addClass('noseSquint');
  }

  function noseNostrilFlare() {
    resetNose();
    $('.nostril').addClass('noseNostrilFlare').delay(200).queue(function(next) {
      $(this).removeClass('noseNostrilFlare');
      next();
    });
  }


  // NOSE ANIMATION 
  $('#noseSquintBtn').click(function() { noseSquint();  });
  $('#noseNostrilFlareBtn').click(function() { noseNostrilFlare(); });
  $('#resetNoseBtn').click(function() { resetNose(); });



  // MOUTH -------------------------------
  function mouthSmile() {
    resetMouth();
    $('#mouth').addClass('mouthSmile');
  }

  function mouthBigSmile() {
    resetMouth();
    $('#mouth').addClass('mouthBigSmile');
  }

  function mouthOpen() {
    resetMouth();
    $('#mouth').addClass('mouthOpen');
  }

  function mouthOpenWide() {
    resetMouth();
    $('#mouth').addClass('mouthOpenWide');
  }

  function mouthFrown() {
    resetMouth();
    $('#mouth').addClass('mouthFrown');
  }

  function mouthStiff() {
    resetMouth();
    $('#mouth').addClass('mouthStiff');
  }

  // MOUTH ANIMATION
  $('#mouthSmileBtn').click(function() { mouthSmile(); });
  $('#mouthBigSmileBtn').click(function() { mouthBigSmile(); });
  $('#mouthOpenBtn').click(function() { mouthOpen(); });
  $('#mouthOpenWideBtn').click(function() { mouthOpenWide(); });
  $('#mouthFrownBtn').click(function() { mouthFrown(); });
  $('#mouthStiffBtn').click(function() { mouthStiff(); });
  $('#resetMouthBtn').click(function() { resetMouth(); });








  // EMOTIONS -----------------------------------------------------------------

  function joy() {
    resetAll();
    eyebrowRaise();
    eyeTiltOutward();
    pupilExpand();
    mouthBigSmile();
    // clearActiveSpeechBtn();
    // $('#joySpeechBtn').addClass('activeSpeechBtn');
  }

  function sadness() {
    resetAll();
    eyebrowLowerTiltOutward();
    eyeSizeSquint2();
    eyeTiltOutward();
    noseNostrilFlare();
    mouthFrown();
    lookDown();
    // clearActiveSpeechBtn();
    // $('#sadnessSpeechBtn').addClass('activeSpeechBtn');
  }

  function anger() {
    resetAll();
    eyebrowLowerTiltInward();
    eyeTiltInward();
    eyeSizeSquint3();
    pupilContract();
    noseSquint();
    mouthStiff();
    // clearActiveSpeechBtn();
    // $('#angerSpeechBtn').addClass('activeSpeechBtn');
  }

  function rage() {
    eyebrowRaiseTiltInward();
    eyeTiltInward();
    eyeSizeOpen();
    noseSquint();
    mouthStiff();
    // clearActiveSpeechBtn();
    // $('#rageSpeechBtn').addClass('activeSpeechBtn');
  }

  function confusion() {
    $('#eyebrowL').addClass('eyebrowRaiseTiltCW');
    $('#eyebrowR').addClass('eyebrowLowerTiltCCW');
    $('#eyeR').addClass('eyeSizeSquint1');
    lookUpLeft();
    mouthFrown();
    // clearActiveSpeechBtn();
    // $('#confusionSpeechBtn').addClass('activeSpeechBtn');
  }

  function surprise() {
    eyebrowRaise();
    eyeSizeOpen();
    pupilExpand();
    mouthOpenWide();
    // clearActiveSpeechBtn();
    // $('#surpriseSpeechBtn').addClass('activeSpeechBtn');
  }

  function calmness() {
    eyebrowTiltOutward();
    eyeSizeSquint3();
    eyeTiltOutward();

    // clearActiveSpeechBtn();
    // $('#serenitySpeechBtn').addClass('activeSpeechBtn');
  }

  function exhaustion() {
    eyebrowTiltOutward();
    eyeSizeSquint3();
    eyeTiltOutward();
    mouthFrown();
    // clearActiveSpeechBtn();
    // $('#exhaustionSpeechBtn').addClass('activeSpeechBtn');
  }

  function doubt() {
    eyebrowRaiseTiltOutward();
    eyeSizeOpen();
    lookDownLeft();
    mouthStiff();
    // clearActiveSpeechBtn();
    // $('#doubtSpeechBtn').addClass('activeSpeechBtn');
  }

  function crosseyed() {
    $('#eyeL .iris').addClass('irisDownRight');
    $('#eyeR .iris').addClass('irisDownLeft');
    $('#eyeL .pupil').addClass('pupilDownRight');
    $('#eyeR .pupil').addClass('pupilDownLeft');
    eyebrowLowerTiltInward();
    eyeSizeSquint1();
    mouthOpen();
    // clearActiveSpeechBtn();
    // $('#crosseyedSpeechBtn').addClass('activeSpeechBtn');
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


  // EMOTION PANEL TRIGGERS ------------------------------------------------------

  // $('.speechBtn').click(function() {
  //   $('.speechBtn').removeClass('activeSpeechBtn');
  //   resetEmotionTimer();
  // });

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
  $('#calmnessBtn').click(function() {
    resetAll();
    calmness();
  });
  $('#exhaustionBtn').click(function() {
    resetAll();
    exhaustion();
  });
  $('#crosseyedBtn').click(function() {
    resetAll();
    crosseyed();
  });
  $('#doubtBtn').click(function() {
    resetAll();
    doubt();
  });
  $('#resetAllEmotionsBtn').click(function() {
    resetAll();
  });


  // RANDOMIZE DELAYS FOR BLINKING AND EYE MOVEMENT

  // var delay;

  // function selectDelay() {
  //   var delays = [3000, 3500, 4000, 4500, 5000];
  //   delay = delays[Math.floor(Math.random()*delays.length)];
  //   return delay;
  // }

  // DEFAULT AFFECTATIONS -------------------------------------------------

  // // SINGLE BLINK

  // function blink() {
  //   $('.eye').addClass('eyeSizeClose').delay(300).queue(function(next) {
  //     $(this).removeClass('eyeSizeClose');
  //     next();
  //   });
  // }


  // // BLINKING

  // var blinkingStatus;

  // // BLINKING ON

  // function blinkingOn() {
  //   blinkingStatus = setInterval(function() {
  //     blink();
  //   }, selectDelay());
  // }


  // // BLINKING OFF

  // function blinkingOff() {
  //   clearInterval(blinkingStatus);
  // }


  // // RANDOMIZED EYE DIRECTION SELECTION

  // function eyeDirection() {
  //   var directions = [lookUp, lookDown, lookLeft, lookRight, lookUpLeft, lookUpRight, lookDownLeft, lookDownRight];

  //   function selectDirection() {
  //     var direction = directions[Math.floor(Math.random()*directions.length)]; 
  //     direction.call();
  //   }
  //   resetEyeDirection();
  //   selectDirection();
  // }


  // // EYE DIRECTION
  // var eyeDirectionStatus;

  // // EYE DIRECTION ON
  // function eyeDirectionOn() {
  //   eyeDirectionStatus = setInterval( function() {
  //     eyeDirection();
  //   }, selectDelay());
  // }


  // // EYE DIRECTION OFF
  // function eyeDirectionOff() {
  //   resetEyeDirection();
  //   clearInterval(eyeDirectionStatus);
  // }


  // // RESET EMOTION TIMER
  // function resetEmotionTimer() {
  //   var emotionTimer;

  //   clearTimeout(emotionTimer);
  //   resetAll();
  //   eyeDirectionOff();

  //   emotionTimer = setTimeout(function() {
  //     resetAll();
  //     eyeDirectionOn();
  //     $('div.active').removeClass('active');
  //     $('.speechBtn').removeClass('activeSpeechBtn');
  //   }, 3000);
  // }










  // CONTROL PANEL TRIGGERS -----------------------------------------------------

  // if (currentPg === 'controls') {
  //   $('.speechBtn').click(function() {
  //     resetAll();
  //   });
  // }



  


  // DEFAULT AFFECTATIONS
  // $('#blinkingOnBtn').click(function() { 
  //   blinkingOn();
  //   // hide blinkingOn button
  //   // show blinkingOff button
  // });

  // $('#blinkingOffBtn').click(function() {
  //   blinkingOff(); 
  //   // hide blinkingOff button
  //   // show blinkingOn button
  // });

  // $('#eyeDirectionOnBtn').click(function() {
  //   eyeDirectionOn();
  //   // hide eyeDirectionOn button
  //   // show eyeDirectionOff button
  // });

  // $('#eyeDirectionOffBtn').click(function() {
  //   eyeDirectionOff();
  //   // hide eyeDirectionOff button
  //   // show eyeDirectionOn button
  // });


  // EMOTION SPEECH BUTTON TRIGGERS ------------------------------

  // $('#angerSpeechBtn').click(function() { anger(); });
  // $('#confusionSpeechBtn').click(function() { confusion(); });
  // $('#crosseyedSpeechBtn').click(function() { crosseyed(); });
  // $('#doubtSpeechBtn').click(function() { doubt(); });
  // $('#exhaustionSpeechBtn').click(function() { exhaustion(); });
  // $('#joySpeechBtn').click(function() { joy(); });
  // $('#rageSpeechBtn').click(function() { rage(); });
  // $('#sadnessSpeechBtn').click(function() { sadness(); });
  // $('#serenitySpeechBtn').click(function() { serenity(); });
  // $('#surpriseSpeechBtn').click(function() { surprise(); });
  // $('#winkSpeechBtn').click(function() { wink(); });


  // CONTROL BUTTON RESETS

  // $('#resetEyebrowsBtn').click(function() { resetEyebrows(); });
  // $('#resetEyeSizeBtn').click(function() { resetEyeSize(); });
  // $('#resetEyeDirectionBtn').click(function() { resetEyeDirection(); });
  // $('#resetEyeMovementBtn').click(function() { resetEyeMovement(); });
  // $('#resetPupilBtn').click(function() { resetPupilSize(); });
  // $('#resetNoseBtn').click(function() { resetNose(); });
  // $('#resetMouthBtn').click(function() { resetMouth(); });
  // $('#resetAllBtn').click(function() { resetAll(); });



  // ANNYANG VOICE COMMAND ----------------------------------------
   // if (annyang) {
   //  // Let's define our first command. First the text we expect, and then the function it should call

   //    var commands = {

   //      // VOICE COMMANDS

   //      'hello': function() {
   //        if (currentPg === 'setup') {
   //          introGoToEmotions();
   //        }
   //      },

   //      // NAVIGATION VOICE COMMANDS
   //      'emotions': function() {
   //        if (currentPg === 'controls' || 'about') {
   //          navGoToEmotions();
   //        }
   //      },

   //      'face controller': function() {
   //        if (currentPg === 'emotions' || 'about') {
   //          navGoToControls();
   //        }
   //      },

   //      'about': function() {
   //        if (currentPg === 'emotions' || 'controls') {
   //          navGoToAbout();
   //        }
   //      },

   //      // EMOTION VOICE COMMANDS
   //      'joy': function() {
   //        if (currentPg === 'emotions') {
   //          joy();
   //        }
   //      },

   //      'rage': function() {
   //        if (currentPg === 'emotions') {
   //          rage();
   //        }
   //      },

   //      'serenity': function() {
   //        if (currentPg === 'emotions') {
   //          serenity();
   //        }
   //      },

   //      'exhaustion': function() {
   //        if (currentPg === 'emotions') {
   //          exhaustion();
   //        }
   //      },

   //      'sadness': function() {
   //        if (currentPg === 'emotions') {
   //          sadness();
   //        }
   //      },

   //      'surprise': function() {
   //        if (currentPg === 'emotions') {
   //          surprise();
   //        }
   //      },

   //      'doubt': function() {
   //        if (currentPg === 'emotions') {
   //          doubt();
   //        }
   //      },

   //      'anger': function() {
   //        if (currentPg === 'emotions') {
   //          anger();
   //        }
   //      },

   //      'crosseyed': function() {
   //        if (currentPg === 'emotions') {
   //          crosseyed();
   //        }
   //      },

   //      'confusion': function() {
   //        if (currentPg === 'emotions') {
   //          confusion();
   //        }
   //      },

   //      'reset': function() {
   //        if (currentPg === 'emotions') {
   //          resetAll();
   //        }
   //      },

   //      // CONTROLS > LEFT AND RIGHT
   //      'previous': function() {
   //        if (currentPg === 'controls') {
   //          previousControlType();
   //        }
   //      },

   //      'next': function() {
   //        if (currentPg === 'controls') {
   //          nextControlType();
   //        }
   //      },

   //      // CONTROLS > EYEBROW POSITION COMMANDS
   //      'raise': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
   //          eyebrowRaise();
   //        }
   //      },

   //      'lower': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
   //          eyebrowLower();
   //        }
   //      },

   //      'tilt inward': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
   //          eyebrowTiltInward();
   //        }
   //      },

   //      'tilt outward': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
   //          eyebrowTiltOutward();
   //        }
   //      },

   //      'raise tilt inward': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
   //          eyebrowRaiseTiltInward();
   //        }
   //      },

   //      'raise tilt outward': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
   //          eyebrowRaiseTiltOutward();
   //        }
   //      },

   //      'lower tilt inward': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
   //          eyebrowLowerTiltInward();
   //        }
   //      },

   //      'lower tilt outward': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
   //          eyebrowLowerTiltOutward();
   //        }
   //      },

   //      'reset eyebrow position': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyebrowPosition')) {
   //          resetEyebrows();
   //        }
   //      },

   //      // CONTROLS > EYE DIRECTION COMMANDS
   //      'look up': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
   //          lookUp();
   //        }
   //      },

   //      'look down': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
   //          lookDown();
   //        }
   //      },

   //      'look left': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
   //          lookLeft();
   //        }
   //      },

   //      'look right': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
   //          lookRight();
   //        }
   //      },

   //      'look up left': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
   //          lookUpLeft();
   //        }
   //      },

   //      'look up right': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
   //          lookUpRight();
   //        }
   //      },

   //      'look down left': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
   //          lookDownLeft();
   //        }
   //      },

   //      'look down right': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
   //          lookDownRight();
   //        }
   //      },

   //      'reset eye direction': function() {
   //        if ((currentPg === 'controls') && (currentBtnBox === 'eyeDirection')) {
   //          resetEyeDirection();
   //        }
   //      },

   //    };

   //    // Add our commands to annyang
   //    annyang.addCommands(commands);

   //    // Start listening. You can call this here, or attach this call to an event, button, etc.
   
   //  }

});


