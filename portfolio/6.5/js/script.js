$(document).ready(function() {

	// NAVBAR TEXT CONTROL
	var navTxt = '<h2>Jasper Reyes | <em>User Experience &amp Interaction</em></h2>',
	  div = document.getElementById('headerNameDsc');
	div.insertAdjacentHTML( 'beforeend', navTxt);

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
	$('#selfTxt').hover(function() {
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

    // TOUCH SCREEN REMOVE HOVERS
	var touch = 'ontouchstart' in document.documentElement
	            || navigator.maxTouchPoints > 0
	            || navigator.msMaxTouchPoints > 0;

	if (touch) { // remove all :hover stylesheets
	    try { // prevent exception on browsers not supporting DOM styleSheets properly
	        for (var si in document.styleSheets) {
	            var styleSheet = document.styleSheets[si];
	            if (!styleSheet.rules) continue;

	            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
	                if (!styleSheet.rules[ri].selectorText) continue;

	                if (styleSheet.rules[ri].selectorText.match(':hover')) {
	                    styleSheet.deleteRule(ri);
	                }
	            }
	        }
	    } catch (ex) {}
	}
});