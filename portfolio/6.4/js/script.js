$(document).ready(function() {

	//PROJECT EXIT BUTTON
	// $('.prjExitBtn').css('bottom','-40px').delay(1000).animate({'bottom':'0px'}, 300);
	// $('.seeLessWork').hide();

	$('#addPrjBtn').click(function() {
		$('#addPrjBox').toggle();
		$('.seeLessWork').toggle();
		$('.seeMoreWork').toggle();
	});
});