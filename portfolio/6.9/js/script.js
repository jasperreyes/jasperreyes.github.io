/*eslint-env jquery*/

$(document).ready(function() {

	// initial hiding
	$('#addWorkSection').hide();
	$('#hideBtn').hide();
	$('#addWorkSectionDivider').hide();

	// show btn logic
	$('#showBtn').click(function() {
		$('#addWorkSection').show();
		$('#hideBtn').show();
		$('#showBtn').hide();
		$('#addWorkSectionDivider').show();
	});

	// hide btn logic
	$('#hideBtn').click(function() {
		$('#addWorkSection').hide();
		$('#hideBtn').hide();
		$('#showBtn').show();
		$('#addWorkSectionDivider').hide();
	});
});