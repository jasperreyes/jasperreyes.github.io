$(document).ready(function() {


  // TO DO -----------------------------------------


  // TO DO LATER -----------------------------------
    // - add background scenery to alien box
    // - add sound effects to emotions
    // - add animations to emotinon triggers
      // - tear drop to sad
      // - eyes turn pink to anger, rage, sadness

  // DONE ------------------------------------------
    // fix eye movement timing doubling up issue
    // add default affectations
    // configure touch behavior with hover buttons
    // reconsider flow for touch devices
    // reenable dots for desktop
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

    // DESIRED SOUND EFFECTS ---------------------
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


  // GLOBAL VARIABLES ----------------------------------
  var duration = 100;
  var currentPg; // introPg, emotionsPg, controlsPg
  var controlType = ['eyebrowPosition','eyeDirection','eyePosition','eyeSize','pupilSize','nose','mouth'];
  var currentControlType = 0;
  var screenBreakPoint = 640;
  var deviceType; // touchDevice clickDevice

  // TOUCH DEVICE DETECTION ----------------------------
  window.addEventListener('touchstart', function() {
    deviceType = 'touchDevice';
  });

  // CLICK DEVICE BUTTON HOVER EFFECTS --------------
  $('.primaryBtn').mouseenter(function() {
    if (deviceType !== 'touchDevice') {
      $(this).css('backgroundColor','#e3e3ff');
    }
  });

  $('.primaryBtn').mouseleave(function() {
    if (deviceType !== 'touchDevice') {
      $(this).css('backgroundColor','#fff');
    }
  });

  $('.secondaryBtn').mouseenter(function() {
    if (deviceType !== 'touchDevice') {
      $(this).css('backgroundColor','#666699');
    }
  });

  $('.secondaryBtn').mouseleave(function() {
    if (deviceType !== 'touchDevice') {
      $(this).css('backgroundColor','#7c7cba');
    }
  });

  $('.ghostBtn').mouseenter(function() {
    if (deviceType !== 'touchDevice') {
      $(this).css('backgroundColor','#33334c');
    }
  });

  $('.ghostBtn').mouseleave(function() {
    if (deviceType !== 'touchDevice') {
      $(this).css('backgroundColor','#444466');
    }
  });

  // REFRESH BUTTON ---------------------------
  function refresh() {
    location.reload();
  }

  // DEBUG ---------------------------------------
  // function getCurrentPgControlType() {
  //   if (currentPg === 'controls') {
  //     console.log('The current control type is "' + controlType[currentControlType] + '".');
  //   }
  // }

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

  $('.navBtn').mouseenter(function() {
    if (deviceType !== 'touchDevice') {
      $(this).addClass('navBtnHover');
    }
  });

  $('.navBtn').mouseleave(function() {
    if (deviceType !== 'touchDevice') {
      $(this).removeClass('navBtnHover');
    }
  });

  function updateControlTypeDisplay() {
    $('.controlDot').removeClass('controlDotSelected');
    ctbFadeOut();

    if (currentControlType === 0) {
      $('.controlTypeName span').html("Eyebrow Position");
      $('#eyebrowPositionCTB').delay(duration).fadeIn(duration);
      $('#eyebrowPositionDot').addClass('controlDotSelected');
    }
    else if (currentControlType === 1) {
      $('.controlTypeName span').html("Eye Direction");
      $('#eyeDirectionCTB').delay(duration).fadeIn(duration);
      $('#eyeDirectionDot').addClass('controlDotSelected');
    }
    else if (currentControlType === 2) {
      $('.controlTypeName span').html("Eye Position");
      $('#eyePositionCTB').delay(duration).fadeIn(duration);
      $('#eyePositionDot').addClass('controlDotSelected');
    }
    else if (currentControlType === 3) {
      $('.controlTypeName span').html("Eye Size");
      $('#eyeSizeCTB').delay(duration).fadeIn(duration);
      $('#eyeSizeDot').addClass('controlDotSelected');
    }
    else if (currentControlType === 4) {
      $('.controlTypeName span').html("Pupil Size");
      $('#pupilSizeCTB').delay(duration).fadeIn(duration);
      $('#pupilSizeDot').addClass('controlDotSelected');
    }
    else if (currentControlType === 5) {
      $('.controlTypeName span').html("Nose");
      $('#noseCTB').delay(duration).fadeIn(duration);
      $('#noseDot').addClass('controlDotSelected');
    }
    else if (currentControlType === 6) {
      $('.controlTypeName span').html("Mouth");
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

  function goToTouchInstructions() {
    pgFadeOut();
    $('#touchInstructionsPg').delay(duration).fadeIn(duration);
    currentPg = 'touchInstructions';
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
      resetDefaultAffectations();
      removeNavBtnSelected();
      $('#emotionsBtn').addClass('navBtnSelected');
    }
  }

  function goToControls() {
    if (currentPg !== 'controls') {
      pgFadeOut();
      $('#controlsPg').delay(duration).fadeIn(duration);
      currentPg = 'controls';
      updateControlTypeDisplay();
      removeNavBtnSelected();
      $('#controlsBtn').addClass('navBtnSelected');
      resetEmotionRunTime();
      defaultAffectationsOff();
      resetAll();
    }
  }

  function goToAbout() {
    if (currentPg !== 'about') {
      pgFadeOut();
      $('#aboutPg').delay(duration).fadeIn(duration);
      currentPg = 'about';
      resetDefaultAffectations();
      removeNavBtnSelected();
      $('#aboutBtn').addClass('navBtnSelected'); 
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

    if (deviceType === 'touchDevice') {
      goToTouchInstructions();
    }

    else {
      goToMic();
    }
  });

  $('#micYesBtn').click(function() {
    annyang.start();
    goToMicYes();
  });

  $('#micNoBtn').click(function() {
    goToMicNo();
  });

  $('#micDisclaimerBtn').click(function() {
    goToEmotions();
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

  $('#touchDeviceOkBtn').click(function() {
    goToEmotions();
    currentControlType = 0;
  });

  // MAIN NAVIGATION BUTTONS ----------------------------------
  $('#emotionsBtn').click(function() {
    goToEmotions();
  });

  $('#controlsBtn').click(function() {
    goToControls();
  });

  $('#aboutBtn').click(function() {
    goToAbout();
  });

  $('#navLeft').click(function() {
    refresh();
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

  $('.pgCenterBox').on("swipeleft",function(){
    if (currentPg === 'controls') {
      goToPreviousControlType();
      updateControlTypeDisplay();
    }
  });

  $('.pgCenterBox').on("swiperight",function(){
    if (currentPg === 'controls') {
      goToNextControlType();
      updateControlTypeDisplay();
    }
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

  // MOBILE NAV -------------------------------
  $('#mobileMenuBtn').click(function() {
    updateMobileBtnDisplay();
    $('#mobileNav').fadeIn(duration);
    $(this).fadeOut(duration);
  });

  $('#mobileOverlay').click(function() {
    $('#mobileNav').fadeOut(duration);
    if (deviceType === 'touchDevice') {
      $('#mobileMenuBtn').fadeIn(duration);
    }
  });

  $('#mobileHeader span').click(function() {
    refresh();
  });

  $('#emotionsMobileBtn').click(function() {
    goToEmotions();
    $('#mobileNav').fadeOut(duration);
    if (deviceType === 'touchDevice') {
      $('#mobileMenuBtn').fadeIn(duration);
    }
  });

  $('#controlsMobileBtn').click(function() {
    goToControls();
    $('#mobileNav').fadeOut(duration);
    if (deviceType === 'touchDevice') {
      $('#mobileMenuBtn').fadeIn(duration);
    }
  });

  $('#aboutMobileBtn').click(function() {
    goToAbout();
    $('#mobileNav').fadeOut(duration);
    if (deviceType === 'touchDevice') {
      $('#mobileMenuBtn').fadeIn(duration);
    }
  });

  $('#mobileMenuExitBtn').click(function() {
    $('#mobileNav').fadeOut(duration);
    if (deviceType === 'touchDevice') {
      $('#mobileMenuBtn').fadeIn(duration);
    }
  });

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

  // EYE SIZE ------------------------------------
  $('#eyeSizeSquint1Btn').click(function() { eyeSizeSquint1(); });
  $('#eyeSizeSquint2Btn').click(function() { eyeSizeSquint2(); });
  $('#eyeSizeSquint3Btn').click(function() { eyeSizeSquint3(); });
  $('#eyeSizeSquint4Btn').click(function() { eyeSizeSquint4(); });
  $('#eyeSizeOpenBtn').click(function() { eyeSizeOpen(); });
  $('#eyeSizeCloseBtn').click(function() { eyeSizeClose();});
  $('#resetEyeSizeBtn').click(function() { resetEyeSize(); });

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

  // NOSE ANIMATION ------------------------------------
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

  // MOUTH ANIMATION ------------------------------------
  $('#mouthSmileBtn').click(function() { mouthSmile(); });
  $('#mouthBigSmileBtn').click(function() { mouthBigSmile(); });
  $('#mouthOpenBtn').click(function() { mouthOpen(); });
  $('#mouthOpenWideBtn').click(function() { mouthOpenWide(); });
  $('#mouthFrownBtn').click(function() { mouthFrown(); });
  $('#mouthStiffBtn').click(function() { mouthStiff(); });
  $('#resetMouthBtn').click(function() { resetMouth(); });




  // BLINKING BEHAVIOR ------------------------------------
  function bothEyesBlink() {
    $('.eye').addClass('eyeSizeClose').delay(300).queue(function(next) {
      $(this).removeClass('eyeSizeClose');
      next();
    });
  }

  function leftEyeBlink() {
    $('#eyeL').addClass('eyeSizeClose').delay(150).queue(function(next) {
      $(this).removeClass('eyeSizeClose');
      next();
    });
  }

  function rightEyeBlink() {
    $('#eyeR').addClass('eyeSizeClose').delay(150).queue(function(next) {
      $(this).removeClass('eyeSizeClose');
      next();
    });
  }

  $('#eyeL').click(function() {
    leftEyeBlink();
  });

  $('#eyeR').click(function() {
    rightEyeBlink();
  });

  $('#nose').click(function() {
    noseSquint();
    bothEyesBlink();
  });


  // --------------------------------------------
  // DEFAULT AFFECTATIONS -----------------------
  // --------------------------------------------


  // RANDOMIZED DELAYS FOR BLINKING AND EYE MOVEMENT -----------------
  var delays = [3000, 4000, 5000];
  var selectedDelay;

  function selectDelay() {
    selectedDelay = delays[Math.floor(Math.random()*delays.length)];
    // console.log("The timing delay is: " + selectedDelay + '.');
    return selectedDelay;
  }

  // BLINKING -------------------------------------
  var blinkingStatus;

  function blinkingOn() {
    blinkingStatus = setInterval(function() {
      bothEyesBlink();
    }, selectDelay());
  }

  function blinkingOff() {
    resetEyeSize();
    clearInterval(blinkingStatus);
    selectedDelay = 0;
  }

  // RANDOMIZED EYE DIRECTION SELECTION -------------------
  var directions = [lookUp, lookDown, lookLeft, lookRight, lookUpLeft, lookUpRight, lookDownLeft, lookDownRight];
  
  function selectEyeDirection() {
    var selectedDirection = directions[Math.floor(Math.random()*directions.length)]; 
    selectedDirection.call();
  }

  // EYE DIRECTION -----------------------------------
  var eyeDirectionStatus;

  function eyeDirectionOn() {
    eyeDirectionStatus = setInterval( function() {
      selectEyeDirection();
    }, selectDelay());
  }

  function eyeDirectionOff() {
    resetEyeDirection();
    clearInterval(eyeDirectionStatus);
  }

  function defaultAffectationsOn() {
    eyeDirectionOn();
    blinkingOn();
  }

  function defaultAffectationsOff() {
    eyeDirectionOff();
    blinkingOff();
  }

  function resetDefaultAffectations() {
    resetAll();
    defaultAffectationsOff();
    defaultAffectationsOn();
    bothEyesBlink();
  }

  $('#defaultAffectationsOnBtn').click(function() {
    defaultAffectationsOn();
    // console.log("blinking status: " + blinkingStatus);
    // console.log("eye direction status: " + eyeDirectionStatus);
  });

  $('#defaultAffectationsOffBtn').click(function() {
    defaultAffectationsOff();
    // console.log("blinking status: " + blinkingStatus);
    // console.log("eye direction status: " + eyeDirectionStatus);
  });


  // EMOTIONS -----------------------------------------------------------------

  function joy() {
    resetAll();
    eyebrowRaise();
    eyeTiltOutward();
    pupilExpand();
    mouthBigSmile();
  }

  function sadness() {
    resetAll();
    eyebrowLowerTiltOutward();
    eyeSizeSquint2();
    eyeTiltOutward();
    noseNostrilFlare();
    mouthFrown();
    lookDown();
  }

  function happiness() {
    resetAll();
    mouthSmile();
  }

  function anger() {
    resetAll();
    eyebrowLowerTiltInward();
    eyeTiltInward();
    eyeSizeSquint3();
    pupilContract();
    noseSquint();
    mouthStiff();
  }

  function rage() {
    resetAll();
    eyebrowRaiseTiltInward();
    eyeTiltInward();
    eyeSizeOpen();
    noseSquint();
    mouthStiff();
  }

  function confusion() {
    $('#eyebrowL').addClass('eyebrowRaiseTiltCW');
    $('#eyebrowR').addClass('eyebrowLowerTiltCCW');
    $('#eyeR').addClass('eyeSizeSquint1');
    lookUpLeft();
    mouthFrown();
  }

  function surprise() {
    eyebrowRaise();
    eyeSizeOpen();
    pupilExpand();
    mouthOpenWide();
  }

  function calmness() {
    eyebrowTiltOutward();
    eyeSizeSquint3();
    eyeTiltOutward();
    mouthSmile();
  }

  function exhaustion() {
    eyebrowTiltOutward();
    eyeSizeSquint3();
    eyeTiltOutward();
    mouthFrown();
  }

  function doubt() {
    eyebrowRaiseTiltOutward();
    eyeSizeOpen();
    lookDownLeft();
    mouthStiff();
  }

  function crosseyed() {
    $('#eyeL .iris').addClass('irisDownRight');
    $('#eyeR .iris').addClass('irisDownLeft');
    $('#eyeL .pupil').addClass('pupilDownRight');
    $('#eyeR .pupil').addClass('pupilDownLeft');
    eyebrowLowerTiltInward();
    eyeSizeSquint1();
    mouthOpen();
  }

  function wink() {
    $('#eyeL').addClass('eyeSizeClose').delay(300).queue(function(next) {
      $(this).removeClass('eyeSizeClose');
      next();
    });

    $('#eyeR').addClass('eyeSizeSquint2').delay(300).queue(function(next) {
      $(this).removeClass('eyeSizeSquint2');
      next();
    });

    $('#mouth').addClass('mouthBigSmile').delay(300).queue(function(next) {
      $(this).removeClass('mouthBigSmile');
      next();
    });
  }


  // EMOTION PANEL TRIGGERS ------------------------------------------------------

  // $('.speechBtn').click(function() {
  //   $('.speechBtn').removeClass('activeSpeechBtn');
  //   resetEmotionTimer();
  // });


  var emotionRunTime;

  function startEmotionTimer() {
      emotionRunTime = setTimeout(function(){
        resetDefaultAffectations();  
      },
      3000);
  }

  function resetEmotionRunTime() {
      clearTimeout(emotionRunTime);
  }

  // var emotionRunTime = 3000;

  // function resetEmotionRunTime() {
  //   emotionRunTime = 0;
  //   emotionRunTime = 3000;
  // }

  function activateJoy() {
    eyeDirectionOff();
    resetAll();
    resetEmotionRunTime();
    startEmotionTimer();
    joy();
  }

  function activateSadness() {
    eyeDirectionOff();
    resetAll();
    resetEmotionRunTime();
    startEmotionTimer();
    sadness();
  }

  function activateHappiness() {
    eyeDirectionOff();
    resetAll();
    resetEmotionRunTime();
    startEmotionTimer();
    happiness();
  }

  function activateAnger() {
    eyeDirectionOff();
    resetAll();
    resetEmotionRunTime();
    startEmotionTimer();
    anger();
  }

  function activateSurprise() {
    eyeDirectionOff();
    resetAll();
    resetEmotionRunTime();
    startEmotionTimer();
    surprise();
  }

  function activateConfusion() {
    eyeDirectionOff();
    resetAll();
    resetEmotionRunTime();
    startEmotionTimer();
    confusion();
  }

  function activateRage() {
    eyeDirectionOff();
    resetAll();
    resetEmotionRunTime();
    startEmotionTimer();
    rage();
  }

  function activateWink() {
    defaultAffectationsOff();
    resetAll();
    resetEmotionRunTime();
    startEmotionTimer();
    wink();
  }

  function activateCalmness() {
    eyeDirectionOff();
    resetAll();
    resetEmotionRunTime();
    startEmotionTimer();
    calmness();
  }

  function activateExhaustion() {
    eyeDirectionOff();
    resetAll();
    resetEmotionRunTime();
    startEmotionTimer();
    exhaustion();
  }

  function activateCrosseyed() {
    eyeDirectionOff();
    resetAll();
    resetEmotionRunTime();
    startEmotionTimer();
    crosseyed();
  }

  function activateDoubt() {
    eyeDirectionOff();
    resetAll();
    resetEmotionRunTime();
    startEmotionTimer();
    doubt();
  }

  $('#joyBtn').click(function() {
    activateJoy();
  });

  $('#sadnessBtn').click(function() {
    activateSadness();
  });

  $('#happinessBtn').click(function() {
    activateHappiness();
  });

  $('#angerBtn').click(function() {
    activateAnger();
  });

  $('#surpriseBtn').click(function() {
    activateSurprise();  
  });

  $('#confusionBtn').click(function() {
    activateConfusion();
  });

  $('#rageBtn').click(function() {
    activateRage();
  });

  $('#crosseyedBtn').click(function() {
    activateCrosseyed();
  });

  $('#winkBtn').click(function() {
    activateWink();
  });

  $('#calmnessBtn').click(function() {
    activateCalmness();
  });

  $('#exhaustionBtn').click(function() {
    activateExhaustion();
  });

  $('#crosseyedBtn').click(function() {
    activateCrosseyed();
  });

  $('#doubtBtn').click(function() {
    activateDoubt();
  });

  $('#resetAllEmotionsBtn').click(function() {
    resetAll();
    resetDefaultAffectations();
    resetEmotionRunTime();
  });


  // ---------------------------------
  // DESIRED BEHAVIOR ----------------
  // ---------------------------------


  $('#controlsBtn').click(function() {
    defaultAffectationsOff();
  });

  $('#emotionsBtn').click(function() {
    resetDefaultAffectations();
  });

  $('#aboutBtn').click(function() {
    resetDefaultAffectations();
  });



  // GREETINGS PAGE

  // Greetings Page
    // default affectations on 
    // when 'Hi Zwerpy' is clicked
      // eye direction reset
      // eye direction off
      // Zwerpy smiles for three seconds
        // Zwerpy resets
        // default

  defaultAffectationsOn();

  $('#greetingsBtn').click(function() {
    resetEyeDirection();
    eyeDirectionOff();
    happiness();

    setTimeout(function() {
      resetDefaultAffectations();
    }, 2000);
  });

  $('#helpYesBtn').click(function() {
    resetEyeDirection();
    eyeDirectionOff();
    joy();

    setTimeout(function() {
      resetDefaultAffectations();
    }, 2000);
  });

  $('#helloBtn').click(function() {
    resetEyeDirection();
    eyeDirectionOff();
    joy();

    setTimeout(function() {
      resetDefaultAffectations();
    }, 2000);
  });


  // ANNYANG VOICE COMMAND ----------------------------------------
   if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call

      var commands = {

        // VOICE COMMANDS


        'anger': function() {
          if (currentPg === 'emotions') {
            activateAnger();
          }
        },



        'hello': function() {
          if (currentPg === 'micTest') {
            goToEmotions();
          }
        },

        // NAVIGATION VOICE COMMANDS --------------------------

        'emotions': function() {
          if (currentPg === 'controls' || 'about') {
            goToEmotions();
          }
        },

        'playground': function() {
          if (currentPg === 'emotions' || 'about') {
            goToControls();
          }
        },

        'about': function() {
          if (currentPg === 'emotions' || 'controls') {
            goToAbout();
          }
        },

        // EMOTION VOICE COMMANDS --------------------------

        'calmness': function() {
          if (currentPg === 'emotions') {
            activateCalmness();
          }
        },

        'confusion': function() {
          if (currentPg === 'emotions') {
            activateConfusion();
          }
        },

        'crosseyed': function() {
          if (currentPg === 'emotions') {
            activateCrosseyed();
          }
        },

        'doubt': function() {
          if (currentPg === 'emotions') {
            activateDoubt();
          }
        },

        'exhaustion': function() {
          if (currentPg === 'emotions') {
            activateExhaustion();
          }
        },

        'happiness': function() {
          if (currentPg === 'emotions') {
            activateHappiness();
          }
        },

        'joy': function() {
          if (currentPg === 'emotions') {
            activateJoy();
          }
        },

        'rage': function() {
          if (currentPg === 'emotions') {
            activateRage();
          }
        },

        'sadness': function() {
          if (currentPg === 'emotions') {
            activateSadness();
          }
        },

        'surprise': function() {
          if (currentPg === 'emotions') {
            activateSurprise();
          }
        },

        'wink': function() {
          if (currentPg === 'emotions') {
            activateWink();
          }
        },

        'reset': function() {
          if (currentPg === 'emotions') {
            resetAll();
          }
        },


        // CONTROLS NAVIGATION VOICE COMMANDS ------------------------
        'previous': function() {
          if (currentPg === 'controls') {
            goToPreviousControlType();
            updateControlTypeDisplay();

          }
        },

        'next': function() {
          if (currentPg === 'controls') {
            goToNextControlType();
            updateControlTypeDisplay();
          }
        },


        // CONTROLS > EYEBROW POSITION COMMANDS ---------------------
        'reset eye brows': function() {
          if ((currentPg === 'controls') && (currentControlType === 0)) {
            resetEyebrowPosition();
          }
        },

        // CONTROLS > EYE DIRECTION COMMANDS -----------------------------------------
        'left': function() {
          if ((currentPg === 'controls') && (currentControlType === 1)) {
            lookLeft();
          }
        },

        'right': function() {
          if ((currentPg === 'controls') && (currentControlType === 1)) {
            lookRight();
          }
        },

        'up left': function() {
          if ((currentPg === 'controls') && (currentControlType === 1)) {
            lookUpLeft();
          }
        },

        'up right': function() {
          if ((currentPg === 'controls') && (currentControlType === 1)) {
            lookUpRight();
          }
        },

        'down left': function() {
          if ((currentPg === 'controls') && (currentControlType === 1)) {
            lookDownLeft();
          }
        },

        'down right': function() {
          if ((currentPg === 'controls') && (currentControlType === 1)) {
            lookDownRight();
          }
        },

        'reset eye direction': function() {
          if ((currentPg === 'controls') && (currentControlType === 1)) {
            resetEyeDirection();
          }
        },


        // CONTROLS > EYE POSITION COMMANDS -----------------------------------------
        'reset eye position': function() {
          if ((currentPg === 'controls') && (currentControlType === 2)) {
            resetEyePosition();
          }
        },

        // CONTROLS > EYE SIZE COMMANDS -----------------------------------------
        'squint one': function() {
          if ((currentPg === 'controls') && (currentControlType === 3)) {
            eyeSizeSquint1();
          }
        },

        'squint two': function() {
          if ((currentPg === 'controls') && (currentControlType === 3)) {
            eyeSizeSquint2();
          }
        },

        'squint three': function() {
          if ((currentPg === 'controls') && (currentControlType === 3)) {
            eyeSizeSquint3();
          }
        },

        'squint four': function() {
          if ((currentPg === 'controls') && (currentControlType === 3)) {
            eyeSizeSquint4();
          }
        },

        'close': function() {
          if ((currentPg === 'controls') && (currentControlType === 3)) {
            eyeSizeClose();
          }
        },

        'reset eye size': function() {
          if ((currentPg === 'controls') && (currentControlType === 3)) {
            resetEyeSize();
          }
        },


        // CONTROLS > PUPIL SIZE COMMANDS -----------------------------------------
        'expand': function() {
          if ((currentPg === 'controls') && (currentControlType === 4)) {
            pupilExpand();
          }
        },

        'contract': function() {
          if ((currentPg === 'controls') && (currentControlType === 4)) {
            pupilContract();
          }
        },

        'reset pupil size': function() {
          if ((currentPg === 'controls') && (currentControlType === 4)) {
            resetPupilSize();
          }
        },

        // CONTROLS > NOSE COMMANDS -----------------------------------------
        'squint': function() {
          if ((currentPg === 'controls') && (currentControlType === 5)) {
            noseSquint();
          }
        },

        'nostril flare': function() {
          if ((currentPg === 'controls') && (currentControlType === 5)) {
            noseNostrilFlare();
          }
        },

        'reset nose': function() {
          if ((currentPg === 'controls') && (currentControlType === 5)) {
            resetPupilSize();
          }
        },

        // CONTROLS > MOUTH COMMANDS -----------------------------------------
        'smile': function() {
          if ((currentPg === 'controls') && (currentControlType === 6)) {
            mouthSmile();
          }
        },

        'big smile': function() {
          if ((currentPg === 'controls') && (currentControlType === 6)) {
            mouthBigSmile();
          }
        },

        'open wide': function() {
          if ((currentPg === 'controls') && (currentControlType === 6)) {
            mouthOpenWide();
          }
        },

        'frown': function() {
          if ((currentPg === 'controls') && (currentControlType === 6)) {
            mouthFrown();
          }
        },

        'stiff': function() {
          if ((currentPg === 'controls') && (currentControlType === 6)) {
            mouthStiff();
          }
        },

        'reset mouth': function() {
          if ((currentPg === 'controls') && (currentControlType === 6)) {
            resetMouth();
          }
        },

        // DUPLICATE COMMANDS -----------------------------------

        'up': function() {
          if ((currentPg === 'controls') && (currentControlType === 0)) {
            eyebrowRaise();
          }
          if ((currentPg === 'controls') && (currentControlType === 1)) {
            lookUp();
          }
          if ((currentPg === 'controls') && (currentControlType === 2)) {
            eyeRaise();
          }
        },

        'down': function() {
          if ((currentPg === 'controls') && (currentControlType === 0)) {
            eyebrowLower();
          }
          if ((currentPg === 'controls') && (currentControlType === 1)) {
            lookDown();
          }
          if ((currentPg === 'controls') && (currentControlType === 2)) {
            eyeLower();
          }
        },

        'tilt in': function() {
          if ((currentPg === 'controls') && (currentControlType === 0)) {
            eyebrowTiltInward();
          }
          if ((currentPg === 'controls') && (currentControlType === 2)) {
            eyeTiltInward();
          }
        },

        'tilt out': function() {
          if ((currentPg === 'controls') && (currentControlType === 0)) {
            eyebrowTiltOutward();
          }
          if ((currentPg === 'controls') && (currentControlType === 2)) {
            eyeTiltOutward();
          }
        },

        'up tilt in': function() {
          if ((currentPg === 'controls') && (currentControlType === 0)) {
            eyebrowRaiseTiltInward();
          }
          if ((currentPg === 'controls') && (currentControlType === 2)) {
            eyeRaiseTiltInward();
          }
        },

        'up tilt out': function() {
          if ((currentPg === 'controls') && (currentControlType === 0)) {
            eyebrowRaiseTiltOutward();
          }
          if ((currentPg === 'controls') && (currentControlType === 2)) {
            eyeRaiseTiltOutward();
          }
        },

        'down tilt in': function() {
          if ((currentPg === 'controls') && (currentControlType === 0)) {
            eyebrowLowerTiltInward();
          }
          if ((currentPg === 'controls') && (currentControlType === 2)) {
            eyeLowerTiltInward();
          }
        },

        'down tilt out': function() {
          if ((currentPg === 'controls') && (currentControlType === 0)) {
            eyebrowLowerTiltOutward();
          }
          if ((currentPg === 'controls') && (currentControlType === 2)) {
            eyeLowerTiltOutward();
          }
        },

        'open': function() {
          if ((currentPg === 'controls') && (currentControlType === 3)) {
            eyeSizeOpen();
          }
          if ((currentPg === 'controls') && (currentControlType === 6)) {
            mouthOpen();
          }
        },

        // RESET ALL --------------------------------------------
        'reset all': function() {
          resetAll();
        },
     };

      // Add our commands to annyang
      // annyang.addCommands(commands);

      // Start listening. You can call this here, or attach this call to an event, button, etc.
      
    }

});


