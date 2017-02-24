$(document).ready(function() {

	// DEFAULT (RESET)
	function resetEmotion() {
		$('*').removeClass('pupilDownRight irisDownRight pupilDownLeft irisDownLeft pupilUpRight irisUpRight pupilUpLeft irisUpLeft pupilRight irisRight pupilLeft irisLeft pupilDown irisDown pupilUp irisUp pupilContract pupilExpand squint2 eyeWhiteOpenWide eyelidBottomSquint eyelidTopSquint');
	}

	// TRIGGERS -----------------------------------------------------

	// BLINK
	$('#blinkBtn').click(function() {

		$('.eyelidTop').addClass('eyelidTopClose').delay(200).queue(function(next){
		    $(this).removeClass('eyelidTopClose');
		    next();
		});

		$('.eyelidBottom').addClass('eyelidBottomClose').delay(200).queue(function(next){
		    $(this).removeClass('eyelidBottomClose');
		    next();
		});
	});

	// SQUINT
	$('#squintBtn').click(function() {
		resetEmotion();
		$('.eyelidTop').addClass('eyelidTopSquint');
		$('.eyelidBottom').addClass('eyelidBottomSquint');
	});

	// OPEN WIDE
	$('#openWideBtn').click(function() {
		resetEmotion();
		$('.eyeWhite').addClass('eyeWhiteOpenWide');
		$('.eyelidContainer').addClass('eyeWhiteOpenWide');
	});

	// LOOK UP
	$('#lookUpBtn').click(function() {
		resetEmotion();
		$('.iris').addClass('irisUp');
		$('.pupil').addClass('pupilUp');
	});

	// LOOK DOWN
	$('#lookDownBtn').click(function() {
		resetEmotion();
		$('.iris').addClass('irisDown');
		$('.pupil').addClass('pupilDown');
	});

	// LOOK LEFT
	$('#lookLeftBtn').click(function() {
		resetEmotion();
		$('.iris').addClass('irisLeft');
		$('.pupil').addClass('pupilLeft');
	});

	// LOOK RIGHT
	$('#lookRightBtn').click(function() {
		resetEmotion();
		$('.iris').addClass('irisRight');
		$('.pupil').addClass('pupilRight');
	});

	// LOOK UP LEFT
	$('#lookUpLeftBtn').click(function() {
		resetEmotion();
		$('.iris').addClass('irisUpLeft');
		$('.pupil').addClass('pupilUpLeft');
	});

	// LOOK UP RIGHT
	$('#lookUpRightBtn').click(function() {
		resetEmotion();
		$('.iris').addClass('irisUpRight');
		$('.pupil').addClass('pupilUpRight');
	});

	// LOOK DOWN LEFT
	$('#lookDownLeftBtn').click(function() {
		resetEmotion();
		$('.iris').addClass('irisDownLeft');
		$('.pupil').addClass('pupilDownLeft');
	});

	// LOOK DOWN RIGHT
	$('#lookDownRightBtn').click(function() {
		resetEmotion();
		$('.iris').addClass('irisDownRight');
		$('.pupil').addClass('pupilDownRight');
	});

	// PUPIL EXPAND
	$('#pupilExpandBtn').click(function() {
		resetEmotion();
		$('.pupil').addClass('pupilExpand');
	});

	// PUPIL CONTRACT
	$('#pupilContractBtn').click(function() {
		resetEmotion();
		$('.pupil').addClass('pupilContract');
	});

	// Returns emotions to the default state
	$('#resetBtn').click(function() {
		resetEmotion();
	});
});


