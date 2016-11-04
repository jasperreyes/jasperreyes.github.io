$(document).ready(function() {

	//PROJECT EXIT BUTTON
	// $('.prjExitBtn').css('bottom','-40px').delay(1000).animate({'bottom':'0px'}, 300);

	// $('#add').hide();
	// $('#seeAllBtnTxtShow').hide();

	// //TOGGLE BUTTON
	// $('#seeAllBtn').click(function() {
	// 	// $('#seeAllBtnTxtHide').fadeOut();
	// 	// $('#seeAllBtnTxtShow').fadeIn();
	// 	$('#seeAllBtnTxtHide').toggle();
	// 	$('#seeAllBtnTxtShow').toggle();
	// 	$('#add').fadeToggle();
	// });

	$('#moreWorkBtn').click(function() {
		$('#moreWorkContainer').toggle('hideMoreWorkContainer');
		// $(this).toggleClass('hide show');
		// $('.seeMore').show();
	});
});