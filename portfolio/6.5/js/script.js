$(document).ready(function() {

	//PROJECT EXIT BUTTON
	$('.prjExitBtn').css('bottom','-40px').delay(1000).animate({'bottom':'0px'}, 300);

	// TOGGLE BUTTON LOGIC
	$('.seeLessWork').hide();

	$('#addPrjBtn').click(function() {
		$('#addPrjBox').toggle();
		$('.seeLessWork').toggle();
		$('.seeMoreWork').toggle();
	});

	// TOGGLE SELF ILLUSTRATION HOVER
	$('.selfIllustration').hover(function() {
		$('#selfIllustrationDefault').toggle();
		$('#selfIllustrationHover').toggle();
	});

    // TOUCH SCREEN DETECTION & BEHAVIORS
    function is_touch_device() {
		return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }
     
    if (is_touch_device()) {
    	$('.btn').toggleClass('touchBtn');
    }
});