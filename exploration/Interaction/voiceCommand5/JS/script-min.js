$(document).ready(function(){function e(){$(".pg").fadeOut(xe)}function n(){$(".navBtn").removeClass("navSelected")}function i(){$(".carouselDot").removeClass("activeDot")}function t(){$(".btnBox").hide()}function o(){$(".name").hide()}function c(){$(".speechBtn").removeClass("activeSpeechBtn")}function a(){t(),i(),o(),Ue="eyebrowPosition",$("#eyebrowPositionBox").fadeIn(xe),$("#eyebrowPositionDot").addClass("activeDot"),$("#eyebrowPositionName").fadeIn(xe)}function s(){t(),i(),o(),Ue="eyeDirection",$("#eyeDirectionBox").fadeIn(xe),$("#eyeDirectionDot").addClass("activeDot"),$("#eyeDirectionName").fadeIn(xe)}function l(){t(),i(),o(),Ue="eyePosition",$("#eyePositionBox").fadeIn(xe),$("#eyePositionDot").addClass("activeDot"),$("#eyePositionName").fadeIn(xe)}function u(){t(),i(),o(),Ue="eyeSize",$("#eyeSizeBox").fadeIn(xe),$("#eyeSizeDot").addClass("activeDot"),$("#eyeSizeName").fadeIn(xe)}function d(){t(),i(),o(),Ue="pupilSize",$("#pupilSizeBox").fadeIn(xe),$("#pupilSizeDot").addClass("activeDot"),$("#pupilSizeName").fadeIn(xe)}function f(){t(),i(),o(),Ue="nose",$("#noseAnimationBox").fadeIn(xe),$("#noseDot").addClass("activeDot"),$("#noseName").fadeIn(xe)}function r(){t(),i(),o(),Ue="mouth",$("#mouthAnimationBox").fadeIn(xe),$("#mouthDot").addClass("activeDot"),$("#mouthName").fadeIn(xe)}function y(){"eyebrowPosition"===Ue?s():"eyeDirection"===Ue?l():"eyePosition"===Ue?u():"eyeSize"===Ue?d():"pupilSize"===Ue?f():"nose"===Ue?r():"mouth"===Ue&&a()}function p(){"eyebrowPosition"===Ue?r():"mouth"===Ue?f():"nose"===Ue?d():"pupilSize"===Ue?u():"eyeSize"===Ue?l():"eyePosition"===Ue?s():"eyeDirection"===Ue&&a()}function C(){$(".eye").addClass("eyeSizeSquint1")}function B(){$(".eye").addClass("eyeSizeSquint2")}function h(){$(".eye").addClass("eyeSizeSquint3")}function w(){$(".eye").addClass("eyeSizeSquint4")}function S(){$(".eye").addClass("eyeSizeOpen")}function k(){$(".eye").addClass("eyeSizeClose")}function m(){$(".eye").addClass("eyeRaise")}function b(){$(".eye").addClass("eyeLower")}function D(){$("#eyeL").addClass("eyeTiltCW"),$("#eyeR").addClass("eyeTiltCCW")}function v(){$("#eyeL").addClass("eyeTiltCCW"),$("#eyeR").addClass("eyeTiltCW")}function L(){$("#eyeL").addClass("eyeRaiseTiltCW"),$("#eyeR").addClass("eyeRaiseTiltCCW")}function R(){$("#eyeL").addClass("eyeRaiseTiltCCW"),$("#eyeR").addClass("eyeRaiseTiltCW")}function T(){$("#eyeL").addClass("eyeLowerTiltCW"),$("#eyeR").addClass("eyeLowerTiltCCW")}function z(){$("#eyeL").addClass("eyeLowerTiltCCW"),$("#eyeR").addClass("eyeLowerTiltCW")}function g(){$(".iris").addClass("irisUp"),$(".pupil").addClass("pupilUp")}function I(){$(".iris").addClass("irisDown"),$(".pupil").addClass("pupilDown")}function W(){$(".iris").addClass("irisLeft"),$(".pupil").addClass("pupilLeft")}function P(){$(".iris").addClass("irisRight"),$(".pupil").addClass("pupilRight")}function x(){$(".iris").addClass("irisUpLeft"),$(".pupil").addClass("pupilUpLeft")}function q(){$(".iris").addClass("irisUpRight"),$(".pupil").addClass("pupilUpRight")}function U(){$(".iris").addClass("irisDownLeft"),$(".pupil").addClass("pupilDownLeft")}function O(){$(".iris").addClass("irisDownRight"),$(".pupil").addClass("pupilDownRight")}function N(){$(".pupil").addClass("pupilExpand")}function M(){$(".pupil").addClass("pupilContract")}function E(){$("#eyebrowL").addClass("eyebrowTiltCW"),$("#eyebrowR").addClass("eyebrowTiltCCW")}function A(){$("#eyebrowL").addClass("eyebrowTiltCCW"),$("#eyebrowR").addClass("eyebrowTiltCW")}function H(){$(".eyebrow").addClass("eyebrowRaise")}function F(){$(".eyebrow").addClass("eyebrowLower")}function j(){$("#eyebrowL").addClass("eyebrowRaiseTiltCW"),$("#eyebrowR").addClass("eyebrowRaiseTiltCCW")}function J(){$("#eyebrowL").addClass("eyebrowRaiseTiltCCW"),$("#eyebrowR").addClass("eyebrowRaiseTiltCW")}function G(){$("#eyebrowL").addClass("eyebrowLowerTiltCW"),$("#eyebrowR").addClass("eyebrowLowerTiltCCW")}function K(){$("#eyebrowL").addClass("eyebrowLowerTiltCCW"),$("#eyebrowR").addClass("eyebrowLowerTiltCW")}function Q(){$("#nose").addClass("noseSquint")}function V(){$(".nostril").addClass("nostrilFlare").delay(200).queue(function(e){$(this).removeClass("nostrilFlare"),e()})}function X(){we(),$("#mouth").addClass("mouthHappy")}function Y(){we(),$("#mouth").addClass("mouthUnhappy")}function Z(){we(),$("#mouth").addClass("mouthJoy")}function _(){we(),$("#mouth").addClass("mouthSurprise")}function ee(){we(),$("#mouth").addClass("mouthSad")}function ne(){we(),$("#mouth").addClass("mouthStiff")}function ie(){H(),v(),N(),Z(),c(),$("#joySpeechBtn").addClass("activeSpeechBtn")}function te(){K(),B(),v(),V(),ee(),I(),c(),$("#sadnessSpeechBtn").addClass("activeSpeechBtn")}function oe(){G(),D(),h(),M(),Q(),ne(),c(),$("#angerSpeechBtn").addClass("activeSpeechBtn")}function ce(){G(),D(),C(),Q(),ne(),c(),$("#rageSpeechBtn").addClass("activeSpeechBtn")}function ae(){$("#eyebrowL").addClass("eyebrowRaiseTiltCW"),$("#eyebrowR").addClass("eyebrowLowerTiltCCW"),$("#eyeR").addClass("eyeSizeSquint1"),x(),Y(),c(),$("#confusionSpeechBtn").addClass("activeSpeechBtn")}function se(){H(),S(),N(),_(),c(),$("#surpriseSpeechBtn").addClass("activeSpeechBtn")}function le(){A(),h(),v(),c(),$("#serenitySpeechBtn").addClass("activeSpeechBtn")}function ue(){A(),h(),v(),ee(),c(),$("#exhaustionSpeechBtn").addClass("activeSpeechBtn")}function de(){J(),S(),N(),ne(),c(),$("#doubtSpeechBtn").addClass("activeSpeechBtn")}function fe(){$("#eyeL .iris").addClass("irisDownRight"),$("#eyeR .iris").addClass("irisDownLeft"),$("#eyeL .pupil").addClass("pupilDownRight"),$("#eyeR .pupil").addClass("pupilDownLeft"),G(),C(),Z(),c(),$("#crosseyedSpeechBtn").addClass("activeSpeechBtn")}function $e(){$("#eyeL").addClass("eyeSizeClose").delay(300).queue(function(e){$(this).removeClass("eyeSizeClose"),e()}),$("#mouth").addClass("mouthHappy").delay(300).queue(function(e){$(this).removeClass("mouthHappy"),e()}),$("#mouthSpeechBtn").addClass("activeSpeechBtn")}function re(){$(".eyebrow").removeClass("eyebrowRaise eyebrowLower eyebrowTiltCW eyebrowTiltCCW eyebrowRaiseTiltCW eyebrowRaiseTiltCCW eyebrowLowerTiltCW eyebrowLowerTiltCCW")}function ye(){$(".eye").removeClass("eyeSizeSquint1 eyeSizeSquint2 eyeSizeSquint3 eyeSizeSquint4 eyeSizeClose eyeSizeOpen")}function pe(){$(".pupil").removeClass("pupilUp pupilDown pupilLeft pupilRight pupilUpLeft pupilUpRight pupilDownLeft pupilDownRight"),$(".iris").removeClass("irisUp irisDown irisLeft irisRight irisUpLeft irisUpRight irisDownLeft irisDownRight")}function Ce(){$(".eye").removeClass("eyeRaise eyeLower eyeTiltCW eyeTiltCCW eyeRaiseTiltCW eyeRaiseTiltCCW eyeLowerTiltCW eyeLowerTiltCCW")}function Be(){$(".pupil").removeClass("pupilExpand pupilContract")}function he(){$("#nose").removeClass("noseSquint nostrilFlare")}function we(){$("#mouth").removeClass("mouthHappy mouthUnhappy mouthJoy mouthSurprise mouthSad mouthStiff"),$("#mouth").addClass("mouthDefault")}function Se(){ye(),re(),pe(),Ce(),Be(),he(),we()}function ke(){var e=[3e3,3500,4e3,4500,5e3];return Oe=e[Math.floor(Math.random()*e.length)]}function me(){$(".eye").addClass("eyeSizeClose").delay(300).queue(function(e){$(this).removeClass("eyeSizeClose"),e()})}function be(){Ne=setInterval(function(){me()},ke())}function De(){clearInterval(Ne)}function ve(){function e(){n[Math.floor(Math.random()*n.length)].call()}var n=[g,I,W,P,x,q,U,O];pe(),e()}function Le(){Me=setInterval(function(){ve()},ke())}function Re(){pe(),clearInterval(Me)}function Te(){var e;clearTimeout(e),Se(),Re(),e=setTimeout(function(){Se(),Le(),$("div.active").removeClass("active"),$(".speechBtn").removeClass("activeSpeechBtn")},3e3)}function ze(){$("#greetingsPg").fadeOut(xe),$("#setupPg").delay(xe).fadeIn(xe),qe="setup",ie(),Re()}function ge(){$("#setupPg").fadeOut(xe),$("#emotionsPg").delay(xe).fadeIn(xe),$("#emotionsBtn").addClass("navSelected"),qe="emotions",$("#navRight").show()}function Ie(){"emotions"!==qe&&(n(),$("#emotionsBtn").addClass("navSelected"),e(),qe="emotions",$("#emotionsPg").delay(xe).fadeIn(xe))}function We(){"controls"!==qe&&(n(),$("#controlsBtn").addClass("navSelected"),e(),qe="controls",$("#controlsPg").delay(xe).fadeIn(xe),Re()),"eyebrowPosition"===Ue?(i(),o(),$("#eyebrowPositionDot").addClass("activeDot"),$("#eyebrowPositionBox").delay(xe).fadeIn(xe),$("#eyebrowPositionName").delay(xe).fadeIn(xe)):"eyeDirection"===Ue?(i(),o(),$("#eyeDirectionDot").addClass("activeDot"),$("#eyeDirectionBox").delay(xe).fadeIn(xe),$("#eyeDirectionName").delay(xe).fadeIn(xe)):"eyePosition"===Ue?($("#eyePositionBox").delay(xe).fadeIn(xe),i(),$("#eyePositionDot").addClass("activeDot")):"eyeSize"===Ue?($("#eyeSizeBox").delay(xe).fadeIn(xe),i(),$("#eyeSizeDot").addClass("activeDot")):"pupilSize"===Ue?($("#pupilSizeBox").delay(xe).fadeIn(xe),i(),$("#pupilSizeDot").addClass("activeDot")):"nose"===Ue?($("#noseBox").delay(xe).fadeIn(xe),i(),$("#noseDot").addClass("activeDot")):($("#mouthBox").delay(xe).fadeIn(xe),i(),$("#mouthDot").addClass("activeDot"))}function Pe(){"about"!==qe&&(n(),$("#aboutBtn").addClass("navSelected"),e(),qe="about",$("#aboutPg").delay(xe).fadeIn(xe))}var xe=100,qe,Ue;$("#eyebrowPositionDot").click(function(){a()}),$("#eyeDirectionDot").click(function(){s()}),$("#eyePositionDot").click(function(){l()}),$("#eyeSizeDot").click(function(){u()}),$("#pupilSizeDot").click(function(){d()}),$("#noseDot").click(function(){f()}),$("#mouthDot").click(function(){r()}),$("#leftArrow").click(function(){p()}),$("#rightArrow").click(function(){y()}),$(document).keydown(function(e){"controls"===qe&&(37===e.keyCode&&p(),39===e.keyCode&&y())});var Oe,Ne,Me;$(".speechBtn").click(function(){$(".speechBtn").removeClass("activeSpeechBtn"),Te()}),$("#joySpeechBtn").click(function(){ie()}),$("#sadnessSpeechBtn").click(function(){te()}),$("#angerSpeechBtn").click(function(){oe()}),$("#surpriseSpeechBtn").click(function(){se()}),$("#confusionSpeechBtn").click(function(){ae()}),$("#rageSpeechBtn").click(function(){ce()}),$("#crosseyedSpeechBtn").click(function(){fe()}),$("#winkSpeechBtn").click(function(){$e()}),$("#serenitySpeechBtn").click(function(){le()}),$("#exhaustionSpeechBtn").click(function(){ue()}),$("#crosseyedSpeechBtn").click(function(){fe()}),$("#doubtSpeechBtn").click(function(){de()}),$(".eyebrowMovementBtn").click(function(){re()}),$("#eyebrowRaiseBtn").click(function(){H()}),$("#eyebrowLowerBtn").click(function(){F()}),$("#eyebrowTiltInwardBtn").click(function(){E()}),$("#eyebrowTiltOutwardBtn").click(function(){A()}),$("#eyebrowRaiseTiltInwardBtn").click(function(){j()}),$("#eyebrowRaiseTiltOutwardBtn").click(function(){J()}),$("#eyebrowLowerTiltInwardBtn").click(function(){G()}),$("#eyebrowLowerTiltOutwardBtn").click(function(){K()}),$(".eyeMovementBtn").click(function(){Ce()}),$("#eyeRaiseBtn").click(function(){m()}),$("#eyeLowerBtn").click(function(){b()}),$("#eyeTiltInwardBtn").click(function(){D()}),$("#eyeTiltOutwardBtn").click(function(){v()}),$("#eyeRaiseTiltInwardBtn").click(function(){L()}),$("#eyeRaiseTiltOutwardBtn").click(function(){R()}),$("#eyeLowerTiltInwardBtn").click(function(){T()}),$("#eyeLowerTiltOutwardBtn").click(function(){z()}),$(".eyeDirectionBtn").click(function(){pe()}),$("#lookUpBtn").click(function(){g()}),$("#lookDownBtn").click(function(){I()}),$("#lookLeftBtn").click(function(){W()}),$("#lookRightBtn").click(function(){P()}),$("#lookUpLeftBtn").click(function(){x()}),$("#lookUpRightBtn").click(function(){q()}),$("#lookDownLeftBtn").click(function(){U()}),$("#lookDownRightBtn").click(function(){O()}),$(".eyeSizeBtn").click(function(){ye()}),$("#eyeSizeSquint1Btn").click(function(){C()}),$("#eyeSizeSquint2Btn").click(function(){B()}),$("#eyeSizeSquint3Btn").click(function(){h()}),$("#eyeSizeSquint4Btn").click(function(){w()}),$("#eyeSizeOpenBtn").click(function(){S()}),$("#eyeSizeCloseBtn").click(function(){k()}),$("#blinkBtn").click(function(){me()}),$(".pupilSizeBtn").click(function(){Be()}),$("#pupilExpandBtn").click(function(){N()}),$("#pupilContractBtn").click(function(){M()}),$("#noseSquintBtn").click(function(){Q()}),$("#nostrilFlareBtn").click(function(){V()}),$(".mouthMovementBtn").click(function(){we()}),$("#mouthHappyBtn").click(function(){X()}),$("#mouthUnhappyBtn").click(function(){Y()}),$("#mouthJoyBtn").click(function(){Z()}),$("#mouthOpenWideBtn").click(function(){_()}),$("#mouthSadBtn").click(function(){ee()}),$("#mouthStiffBtn").click(function(){ne()}),$("#blinkingOnBtn").click(function(){be()}),$("#blinkingOffBtn").click(function(){De()}),$("#eyeDirectionOnBtn").click(function(){Le()}),$("#eyeDirectionOffBtn").click(function(){Re()}),$("#angerSpeechBtn").click(function(){oe()}),$("#confusionSpeechBtn").click(function(){ae()}),$("#crosseyedSpeechBtn").click(function(){fe()}),$("#doubtSpeechBtn").click(function(){de()}),$("#exhaustionSpeechBtn").click(function(){ue()}),$("#joySpeechBtn").click(function(){ie()}),$("#rageSpeechBtn").click(function(){ce()}),$("#sadnessSpeechBtn").click(function(){te()}),$("#serenitySpeechBtn").click(function(){le()}),$("#surpriseSpeechBtn").click(function(){se()}),$("#winkSpeechBtn").click(function(){$e()}),$("#resetEyebrowsBtn").click(function(){re()}),$("#resetEyeSizeBtn").click(function(){ye()}),$("#resetEyeDirectionBtn").click(function(){pe()}),$("#resetEyeMovementBtn").click(function(){Ce()}),$("#resetPupilBtn").click(function(){Be()}),$("#resetNoseBtn").click(function(){he()}),$("#resetMouthBtn").click(function(){we()}),$("#resetAllBtn").click(function(){Se()}),$("#navLeft").click(function(){location.reload()}),$("#setupBtn").click(function(){ge()}),$("#emotionsBtn").click(function(){Ie()}),$("#controlsBtn").click(function(){We()}),$("#aboutBtn").click(function(){Pe()}),be(),Le(),qe="greetings",Ue="eyebrowPosition",$("#eyebrowPositionName").fadeIn(xe)});