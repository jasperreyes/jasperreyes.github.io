$(document).ready(function() {

	//PROJECT EXIT BUTTON
	// $('.prjExitBtn').css('bottom','-40px').delay(1000).animate({'bottom':'0px'}, 300);
	// $('.seeLessWork').hide();

	// TOGGLE BUTTON LOGIC
	$('#addPrjBtn').click(function() {
		$('#addPrjBox').toggle();
		$('.seeLessWork').toggle();
		$('.seeMoreWork').toggle();
	});

    // TOUCH SCREEN DETECTION & BEHAVIORS
    function is_touch_device() {
		return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    }
     
    if (!is_touch_device()) {

    	// alert('this is not a touch device.');
    }

    else {
    	$('.btn:hover').addClass('disableHover');

    	// alert('this is a touch device.');

    }
});