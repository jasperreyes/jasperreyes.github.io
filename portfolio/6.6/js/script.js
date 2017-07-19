$(document).ready(function() {

	// NAVBAR TEXT CONTROL ------------------------------------
	var navTxt = '<em>User Experience &amp; Product Design</em>',
	  div = document.getElementById('navDsc');
	div.insertAdjacentHTML( 'beforeend', navTxt);


	// SCROLL TO TOP
	$('#scrollToTopBtn').click(function() {
    	$("html, body").animate({ scrollTop: 0 }, "slow");
	});


	// TOGGLE SELF ILLUSTRATION HOVER
	// $('#selfTxt').hover(function() {
	// 	$('#selfIllustrationDefault').toggle();
	// 	$('#selfIllustrationHover').toggle();
	// });


	// TOGGLE BUTTON LOGIC ----------------------------------
	// $('#addPrjBox').hide();
	// $('.addPrjToggleBtn').hide();
	// var addPrjStatus = 'collapsed';
	// console.log(addPrjStatus);

	// $('.addPrjToggleBtn').click(function() {

	// 	if (addPrjStatus === 'collapsed') {
	// 		addPrjStatus = 'expanded';
	// 		$('#addPrjBox').show();
	// 		$('#addPrjExpandBtn').hide();
	// 	}

	// 	else if (addPrjStatus === 'expanded') {
	// 		addPrjStatus = 'collapsed';
	// 		$('#addPrjBox').hide();
	// 		$('#addPrjExpandBtn').show();
	// 	}

	// 	console.log(addPrjStatus);
	// });
});