$(document).ready(function() {


	// On load hiding
	$('#photoVideoSection > .sectionContent').hide();
	$('#photoVideoHideBtn').hide();
	$('#otherDesignSection > .sectionContent').hide();
	$('#otherDesignHideBtn').hide();

	// Show button logic
	$('#otherDesignShowBtn').click(function() {
		$(this).hide();
		$('#otherDesignSection > .sectionContent').fadeIn();
		// $('#otherDesignHideBtn').show();
	});

	$('#photoVideoShowBtn').click(function() {
		$(this).hide();
		$('#photoVideoSection > .sectionContent').fadeIn();
		// $('#photoVideoHideBtn').show();
	});


	// Hide button logic
	$('#otherDesignHideBtn').click(function() {
		$(this).hide();
		$('#otherDesignSection > .sectionContent').hide();
		$('#otherDesignShowBtn').show();
	});

	$('#photoVideoHideBtn').click(function() {
		$(this).hide();
		$('#photoVideoSection > .sectionContent').hide();
		$('#photoVideoShowBtn').show();
	});

});