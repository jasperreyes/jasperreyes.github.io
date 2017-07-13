$(document).ready(function() {

	// TOGGLE BUTTON LOGIC ----------------------------------
	// $('#addPrjBox').hide();
	$('.addPrjToggleBtn').hide();
	var addPrjStatus = 'collapsed';
	// console.log(addPrjStatus);

	$('.addPrjToggleBtn').click(function() {

		if (addPrjStatus === 'collapsed') {
			addPrjStatus = 'expanded';
			$('#addPrjBox').show();
			$('#addPrjExpandBtn').hide();
		}

		else if (addPrjStatus === 'expanded') {
			addPrjStatus = 'collapsed';
			$('#addPrjBox').hide();
			$('#addPrjExpandBtn').show();
		}
	});

	// NAVBAR TEXT CONTROL ------------------------------------
	var navTxt = '<em>User Experience &amp; Product Design</em>',
	  div = document.getElementById('navDsc');
	div.insertAdjacentHTML( 'beforeend', navTxt);

	// TOGGLE SELF ILLUSTRATION HOVER
	// $('#selfTxt').hover(function() {
	// 	$('#selfIllustrationDefault').toggle();
	// 	$('#selfIllustrationHover').toggle();
	// });

	//PROJECT EXIT BUTTON
	$('.prjExitBtn').css('bottom','-40px').delay(1000).animate({'bottom':'0px'}, 300);


});