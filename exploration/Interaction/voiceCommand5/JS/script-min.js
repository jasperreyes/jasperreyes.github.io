$(document).ready(function(){function e(){location.reload()}function n(){return sn+=1,sn%=ln.length,ln[sn]}function i(){return 0===sn&&(sn=ln.length),sn-=1,ln[sn]}function t(){$(".pg").fadeOut(on)}function o(){$(".controlTypeBox").fadeOut(on)}function c(){$(".navBtn").hasClass("navBtnSelected")&&$(".navBtn").removeClass("navBtnSelected")}function l(){$(".controlDot").removeClass("controlDotSelected"),o(),0===sn?($(".controlTypeName span").html("Eyebrow Position"),$("#eyebrowPositionCTB").delay(on).fadeIn(on),$("#eyebrowPositionDot").addClass("controlDotSelected")):1===sn?($(".controlTypeName span").html("Eye Direction"),$("#eyeDirectionCTB").delay(on).fadeIn(on),$("#eyeDirectionDot").addClass("controlDotSelected")):2===sn?($(".controlTypeName span").html("Eye Position"),$("#eyePositionCTB").delay(on).fadeIn(on),$("#eyePositionDot").addClass("controlDotSelected")):3===sn?($(".controlTypeName span").html("Eye Size"),$("#eyeSizeCTB").delay(on).fadeIn(on),$("#eyeSizeDot").addClass("controlDotSelected")):4===sn?($(".controlTypeName span").html("Pupil Size"),$("#pupilSizeCTB").delay(on).fadeIn(on),$("#pupilSizeDot").addClass("controlDotSelected")):5===sn?($(".controlTypeName span").html("Nose"),$("#noseCTB").delay(on).fadeIn(on),$("#noseDot").addClass("controlDotSelected")):6===sn&&($(".controlTypeName span").html("Mouth"),$("#mouthCTB").delay(on).fadeIn(on),$("#mouthDot").addClass("controlDotSelected"))}function s(){$(".mobileBtn").removeClass("mobileBtnSelected"),"emotions"===cn?$("#emotionsMobileBtn").addClass("mobileBtnSelected"):"controls"===cn?$("#controlsMobileBtn").addClass("mobileBtnSelected"):"about"===cn&&$("#aboutMobileBtn").addClass("mobileBtnSelected")}function u(){t(),$("#helpPg").delay(on).fadeIn(on),cn="help"}function a(){t(),$("#micPg").delay(on).fadeIn(on),cn="mic"}function f(){t(),$("#micYesPg").delay(on).fadeIn(on),cn="micYes"}function d(){t(),$("#micNoPg").delay(on).fadeIn(on),cn="micNo"}function r(){t(),$("#micTestPg").delay(on).fadeIn(on),cn="micTest"}function y(){t(),$("#touchInstructionsPg").delay(on).fadeIn(on),cn="touchInstructions"}function C(){"emotions"!==cn&&(t(),$("#emotionsPg").delay(on).fadeIn(on),cn="emotions",$(window).width()>un&&$("#navRight").delay(4*on).fadeIn(on),$(window).width()<un&&$("#mobileMenuBtn").fadeIn(on),ze(),c(),$("#emotionsBtn").addClass("navBtnSelected"))}function p(){"controls"!==cn&&(t(),$("#controlsPg").delay(on).fadeIn(on),cn="controls",l(),c(),$("#controlsBtn").addClass("navBtnSelected"),He(),ge(),I())}function m(){"about"!==cn&&(t(),$("#aboutPg").delay(on).fadeIn(on),cn="about",ze(),c(),$("#aboutBtn").addClass("navBtnSelected"))}function B(){0!==sn&&(sn=0,l())}function w(){1!==sn&&(sn=1,l())}function k(){2!==sn&&(sn=2,l())}function h(){3!==sn&&(sn=3,l())}function b(){4!==sn&&(sn=4,l())}function S(){5!==sn&&(sn=5,l())}function T(){6!==sn&&(sn=6,l())}function v(){$(".eyebrow").removeClass("eyebrowRaise eyebrowLower eyebrowTiltCW eyebrowTiltCCW eyebrowRaiseTiltCW eyebrowRaiseTiltCCW eyebrowLowerTiltCW eyebrowLowerTiltCCW")}function D(){$(".eye").removeClass("eyeRaise eyeLower eyeTiltCW eyeTiltCCW eyeRaiseTiltCW eyeRaiseTiltCCW eyeLowerTiltCW eyeLowerTiltCCW")}function L(){$(".eye").removeClass("eyeSizeSquint1 eyeSizeSquint2 eyeSizeSquint3 eyeSizeSquint4 eyeSizeClose eyeSizeOpen")}function R(){$(".pupil").removeClass("pupilUp pupilDown pupilLeft pupilRight pupilUpLeft pupilUpRight pupilDownLeft pupilDownRight"),$(".iris").removeClass("irisUp irisDown irisLeft irisRight irisUpLeft irisUpRight irisDownLeft irisDownRight")}function g(){$(".pupil").removeClass("pupilExpand pupilContract")}function z(){$("#nose").removeClass("noseSquint noseNostrilFlare")}function W(){$("#mouth").removeClass("mouthSmile mouthBigSmile mouthOpen mouthOpenWide mouthFrown mouthStiff"),$("#mouth").addClass("mouthDefault")}function I(){v(),R(),D(),L(),g(),z(),W()}function O(){v(),$(".eyebrow").addClass("eyebrowRaise")}function q(){v(),$(".eyebrow").addClass("eyebrowLower")}function P(){v(),$("#eyebrowL").addClass("eyebrowTiltCW"),$("#eyebrowR").addClass("eyebrowTiltCCW")}function N(){v(),$("#eyebrowL").addClass("eyebrowTiltCCW"),$("#eyebrowR").addClass("eyebrowTiltCW")}function M(){v(),$("#eyebrowL").addClass("eyebrowRaiseTiltCW"),$("#eyebrowR").addClass("eyebrowRaiseTiltCCW")}function U(){v(),$("#eyebrowL").addClass("eyebrowRaiseTiltCCW"),$("#eyebrowR").addClass("eyebrowRaiseTiltCW")}function E(){v(),$("#eyebrowL").addClass("eyebrowLowerTiltCW"),$("#eyebrowR").addClass("eyebrowLowerTiltCCW")}function x(){v(),$("#eyebrowL").addClass("eyebrowLowerTiltCCW"),$("#eyebrowR").addClass("eyebrowLowerTiltCW")}function F(){D(),$(".eye").addClass("eyeRaise")}function A(){D(),$(".eye").addClass("eyeLower")}function Y(){D(),$("#eyeL").addClass("eyeTiltCW"),$("#eyeR").addClass("eyeTiltCCW")}function H(){D(),$("#eyeL").addClass("eyeTiltCCW"),$("#eyeR").addClass("eyeTiltCW")}function j(){D(),$("#eyeL").addClass("eyeRaiseTiltCW"),$("#eyeR").addClass("eyeRaiseTiltCCW")}function G(){D(),$("#eyeL").addClass("eyeRaiseTiltCCW"),$("#eyeR").addClass("eyeRaiseTiltCW")}function J(){D(),$("#eyeL").addClass("eyeLowerTiltCW"),$("#eyeR").addClass("eyeLowerTiltCCW")}function K(){D(),$("#eyeL").addClass("eyeLowerTiltCCW"),$("#eyeR").addClass("eyeLowerTiltCW")}function Q(){R(),$(".iris").addClass("irisUp"),$(".pupil").addClass("pupilUp")}function V(){R(),$(".iris").addClass("irisDown"),$(".pupil").addClass("pupilDown")}function X(){R(),$(".iris").addClass("irisLeft"),$(".pupil").addClass("pupilLeft")}function Z(){R(),$(".iris").addClass("irisRight"),$(".pupil").addClass("pupilRight")}function _(){R(),$(".iris").addClass("irisUpLeft"),$(".pupil").addClass("pupilUpLeft")}function ee(){R(),$(".iris").addClass("irisUpRight"),$(".pupil").addClass("pupilUpRight")}function ne(){R(),$(".iris").addClass("irisDownLeft"),$(".pupil").addClass("pupilDownLeft")}function ie(){R(),$(".iris").addClass("irisDownRight"),$(".pupil").addClass("pupilDownRight")}function te(){L(),$(".eye").addClass("eyeSizeSquint1")}function oe(){L(),$(".eye").addClass("eyeSizeSquint2")}function ce(){L(),$(".eye").addClass("eyeSizeSquint3")}function le(){L(),$(".eye").addClass("eyeSizeSquint4")}function se(){L(),$(".eye").addClass("eyeSizeOpen")}function ue(){L(),$(".eye").addClass("eyeSizeClose")}function ae(){g(),$(".pupil").addClass("pupilExpand")}function fe(){g(),$(".pupil").addClass("pupilContract")}function de(){z(),$("#nose").addClass("noseSquint")}function $e(){z(),$(".nostril").addClass("noseNostrilFlare").delay(200).queue(function(e){$(this).removeClass("noseNostrilFlare"),e()})}function re(){W(),$("#mouth").addClass("mouthSmile")}function ye(){W(),$("#mouth").addClass("mouthBigSmile")}function Ce(){W(),$("#mouth").addClass("mouthOpen")}function pe(){W(),$("#mouth").addClass("mouthOpenWide")}function me(){W(),$("#mouth").addClass("mouthFrown")}function Be(){W(),$("#mouth").addClass("mouthStiff")}function we(){$(".eye").addClass("eyeSizeClose").delay(300).queue(function(e){$(this).removeClass("eyeSizeClose"),e()})}function ke(){$("#eyeL").addClass("eyeSizeClose").delay(150).queue(function(e){$(this).removeClass("eyeSizeClose"),e()})}function he(){$("#eyeR").addClass("eyeSizeClose").delay(150).queue(function(e){$(this).removeClass("eyeSizeClose"),e()})}function be(){return dn=fn[Math.floor(Math.random()*fn.length)]}function Se(){$n=setInterval(function(){we()},be())}function Te(){L(),clearInterval($n),dn=0}function ve(){rn[Math.floor(Math.random()*rn.length)].call()}function De(){yn=setInterval(function(){ve()},be())}function Le(){R(),clearInterval(yn)}function Re(){De(),Se()}function ge(){Le(),Te()}function ze(){I(),ge(),Re(),we()}function We(){I(),O(),H(),ae(),ye()}function Ie(){I(),x(),oe(),H(),$e(),me(),V()}function Oe(){I(),re()}function qe(){I(),E(),Y(),ce(),fe(),de(),Be()}function Pe(){I(),M(),Y(),se(),de(),Be()}function Ne(){$("#eyebrowL").addClass("eyebrowRaiseTiltCW"),$("#eyebrowR").addClass("eyebrowLowerTiltCCW"),$("#eyeR").addClass("eyeSizeSquint1"),_(),me()}function Me(){O(),se(),ae(),pe()}function Ue(){N(),ce(),H(),re()}function Ee(){N(),ce(),H(),me()}function xe(){U(),se(),ne(),Be()}function Fe(){$("#eyeL .iris").addClass("irisDownRight"),$("#eyeR .iris").addClass("irisDownLeft"),$("#eyeL .pupil").addClass("pupilDownRight"),$("#eyeR .pupil").addClass("pupilDownLeft"),E(),te(),Ce()}function Ae(){$("#eyeL").addClass("eyeSizeClose").delay(300).queue(function(e){$(this).removeClass("eyeSizeClose"),e()}),$("#eyeR").addClass("eyeSizeSquint2").delay(300).queue(function(e){$(this).removeClass("eyeSizeSquint2"),e()}),$("#mouth").addClass("mouthBigSmile").delay(300).queue(function(e){$(this).removeClass("mouthBigSmile"),e()})}function Ye(){Cn=setTimeout(function(){ze()},3e3)}function He(){clearTimeout(Cn)}function je(){Le(),I(),He(),Ye(),We()}function Ge(){Le(),I(),He(),Ye(),Ie()}function Je(){Le(),I(),He(),Ye(),Oe()}function Ke(){Le(),I(),He(),Ye(),qe()}function Qe(){Le(),I(),He(),Ye(),Me()}function Ve(){Le(),I(),He(),Ye(),Ne()}function Xe(){Le(),I(),He(),Ye(),Pe()}function Ze(){ge(),I(),He(),Ye(),Ae()}function _e(){Le(),I(),He(),Ye(),Ue()}function en(){Le(),I(),He(),Ye(),Ee()}function nn(){Le(),I(),He(),Ye(),Fe()}function tn(){Le(),I(),He(),Ye(),xe()}var on=100,cn,ln=["eyebrowPosition","eyeDirection","eyePosition","eyeSize","pupilSize","nose","mouth"],sn=0,un=640,an;window.addEventListener("touchstart",function(){an="touchDevice"}),$(".primaryBtn").mouseenter(function(){"touchDevice"!==an&&$(this).css("backgroundColor","#e3e3ff")}),$(".primaryBtn").mouseleave(function(){"touchDevice"!==an&&$(this).css("backgroundColor","#fff")}),$(".secondaryBtn").mouseenter(function(){"touchDevice"!==an&&$(this).css("backgroundColor","#666699")}),$(".secondaryBtn").mouseleave(function(){"touchDevice"!==an&&$(this).css("backgroundColor","#7c7cba")}),$(".ghostBtn").mouseenter(function(){"touchDevice"!==an&&$(this).css("backgroundColor","#33334c")}),$(".ghostBtn").mouseleave(function(){"touchDevice"!==an&&$(this).css("backgroundColor","#444466")}),$(".navBtn").mouseenter(function(){"touchDevice"!==an&&$(this).addClass("navBtnHover")}),$(".navBtn").mouseleave(function(){"touchDevice"!==an&&$(this).removeClass("navBtnHover")}),$("#greetingsBtn").click(function(){u()}),$("#helpYesBtn").click(function(){"touchDevice"===an?y():a()}),$("#micYesBtn").click(function(){annyang.start(),f()}),$("#micNoBtn").click(function(){d()}),$("#micDisclaimerBtn").click(function(){C()}),$("#micDoneBtn").click(function(){r()}),$("#noMicOkBtn").click(function(){r(),sn=0}),$("#helloBtn").click(function(){C(),sn=0}),$("#touchDeviceOkBtn").click(function(){C(),sn=0}),$("#emotionsBtn").click(function(){C()}),$("#controlsBtn").click(function(){p()}),$("#aboutBtn").click(function(){m()}),$("#navLeft").click(function(){e()}),$("#eyebrowPositionDot").click(function(){B()}),$("#eyeDirectionDot").click(function(){w()}),$("#eyePositionDot").click(function(){k()}),$("#eyeSizeDot").click(function(){h()}),$("#pupilSizeDot").click(function(){b()}),$("#noseDot").click(function(){S()}),$("#mouthDot").click(function(){T()}),$("#leftArrowBox").click(function(){i(),l()}),$("#rightArrowBox").click(function(){n(),l()}),$(".pgCenterBox").on("swipeleft",function(){"controls"===cn&&(i(),l())}),$(".pgCenterBox").on("swiperight",function(){"controls"===cn&&(n(),l())}),$(document).keydown(function(e){"controls"===cn&&(39===e.keyCode&&(n(),l()),37===e.keyCode&&(i(),l()))}),$("#mobileMenuBtn").click(function(){s(),$("#mobileNav").fadeIn(on),$(this).fadeOut(on)}),$("#mobileOverlay").click(function(){$("#mobileNav").fadeOut(on),"touchDevice"===an&&$("#mobileMenuBtn").fadeIn(on)}),$("#mobileHeader span").click(function(){e()}),$("#emotionsMobileBtn").click(function(){C(),$("#mobileNav").fadeOut(on),"touchDevice"===an&&$("#mobileMenuBtn").fadeIn(on)}),$("#controlsMobileBtn").click(function(){p(),$("#mobileNav").fadeOut(on),"touchDevice"===an&&$("#mobileMenuBtn").fadeIn(on)}),$("#aboutMobileBtn").click(function(){m(),$("#mobileNav").fadeOut(on),"touchDevice"===an&&$("#mobileMenuBtn").fadeIn(on)}),$("#mobileMenuExitBtn").click(function(){$("#mobileNav").fadeOut(on),"touchDevice"===an&&$("#mobileMenuBtn").fadeIn(on)}),$(".resetAllControlsBtn").click(function(){I()}),$("#eyebrowRaiseBtn").click(function(){O()}),$("#eyebrowLowerBtn").click(function(){q()}),$("#eyebrowTiltInwardBtn").click(function(){P()}),$("#eyebrowTiltOutwardBtn").click(function(){N()}),$("#eyebrowRaiseTiltInwardBtn").click(function(){M()}),$("#eyebrowRaiseTiltOutwardBtn").click(function(){U()}),$("#eyebrowLowerTiltInwardBtn").click(function(){E()}),$("#eyebrowLowerTiltOutwardBtn").click(function(){x()}),$("#resetEyebrowPositionBtn").click(function(){v()}),$("#eyeRaiseBtn").click(function(){F()}),$("#eyeLowerBtn").click(function(){A()}),$("#eyeTiltInwardBtn").click(function(){Y()}),$("#eyeTiltOutwardBtn").click(function(){H()}),$("#eyeRaiseTiltInwardBtn").click(function(){j()}),$("#eyeRaiseTiltOutwardBtn").click(function(){G()}),$("#eyeLowerTiltInwardBtn").click(function(){J()}),$("#eyeLowerTiltOutwardBtn").click(function(){K()}),$("#resetEyePositionBtn").click(function(){D()}),$("#lookUpBtn").click(function(){Q()}),$("#lookDownBtn").click(function(){V()}),$("#lookLeftBtn").click(function(){X()}),$("#lookRightBtn").click(function(){Z()}),$("#lookUpLeftBtn").click(function(){_()}),$("#lookUpRightBtn").click(function(){ee()}),$("#lookDownLeftBtn").click(function(){ne()}),$("#lookDownRightBtn").click(function(){ie()}),$("#resetEyeDirectionBtn").click(function(){R()}),$("#eyeSizeSquint1Btn").click(function(){te()}),$("#eyeSizeSquint2Btn").click(function(){oe()}),$("#eyeSizeSquint3Btn").click(function(){ce()}),$("#eyeSizeSquint4Btn").click(function(){le()}),$("#eyeSizeOpenBtn").click(function(){se()}),$("#eyeSizeCloseBtn").click(function(){ue()}),$("#resetEyeSizeBtn").click(function(){L()}),$("#pupilExpandBtn").click(function(){ae()}),$("#pupilContractBtn").click(function(){fe()}),$("#resetPupilSizeBtn").click(function(){g()}),$("#noseSquintBtn").click(function(){de()}),$("#noseNostrilFlareBtn").click(function(){$e()}),$("#resetNoseBtn").click(function(){z()}),$("#mouthSmileBtn").click(function(){re()}),$("#mouthBigSmileBtn").click(function(){ye()}),$("#mouthOpenBtn").click(function(){Ce()}),$("#mouthOpenWideBtn").click(function(){pe()}),$("#mouthFrownBtn").click(function(){me()}),$("#mouthStiffBtn").click(function(){Be()}),$("#resetMouthBtn").click(function(){W()}),$("#eyeL").click(function(){ke()}),$("#eyeR").click(function(){he()}),$("#nose").click(function(){de(),we()});var fn=[3e3,4e3,5e3],dn,$n,rn=[Q,V,X,Z,_,ee,ne,ie],yn;$("#defaultAffectationsOnBtn").click(function(){Re()}),$("#defaultAffectationsOffBtn").click(function(){ge()});var Cn;$("#joyBtn").click(function(){je()}),$("#sadnessBtn").click(function(){Ge()}),$("#happinessBtn").click(function(){Je()}),$("#angerBtn").click(function(){Ke()}),$("#surpriseBtn").click(function(){Qe()}),$("#confusionBtn").click(function(){Ve()}),$("#rageBtn").click(function(){Xe()}),$("#crosseyedBtn").click(function(){nn()}),$("#winkBtn").click(function(){Ze()}),$("#calmnessBtn").click(function(){_e()}),$("#exhaustionBtn").click(function(){en()}),$("#crosseyedBtn").click(function(){nn()}),$("#doubtBtn").click(function(){tn()}),$("#resetAllEmotionsBtn").click(function(){I(),ze(),He()}),$("#controlsBtn").click(function(){ge()}),$("#emotionsBtn").click(function(){ze()}),$("#aboutBtn").click(function(){ze()}),Re(),$("#greetingsBtn").click(function(){R(),Le(),Oe(),setTimeout(function(){ze()},2e3)}),$("#helpYesBtn").click(function(){R(),Le(),We(),setTimeout(function(){ze()},2e3)}),$("#helloBtn").click(function(){R(),Le(),We(),setTimeout(function(){ze()},2e3)})});