$(document).ready(function() {

	//PROJECT EXIT BUTTON
	$('.prjExitBtn').css('bottom','-40px').delay(1000).animate({'bottom':'0px'}, 300);

	$('#seeAllBtn').click(function() {
		$('#add').toggleClass('addPrjToggle');
	});
});