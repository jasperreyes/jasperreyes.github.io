$(document).ready(function() {

	// alert('hi');

	// function expandAll() {
	//  	$('.web, .id, .photo').removeClass('project_min').addClass('project_max');
	// };

	// function shrinkAll() {
	//  	$('.web, .id, .photo').removeClass('project_max').addClass('project_min');
	// };

	// function hideAll() {
	//  	$('.web, .id, .photo').hide();
	// };


	// function showWeb() {
	// 	$('.web').show(0).removeClass('project_min').delay(500).addClass('project_max');
	// }

	// function showID() {
	// 	$('.id').show(0).removeClass('project_min').delay(500).addClass('project_max');
	// }

	// function showPhoto() {
	// 	$('.photo').show(0).removeClass('project_min').delay(500).addClass('project_max');
	// }

	// $('#allButton').click(function() {
	// 	expandAll();
	// });

	// $('#webButton').click(function() {
	// 	shrinkAll();
	// 	setTimeout(function() {
	// 		hideAll();
	// 	},500);
	// 	setTimeout(function() {
	// 		showWeb();
	// 	},5100);
	// });

	// $('#idButton').click(function() {
	// 	shrinkAll();
	// 	setTimeout(function() {
	// 		showID();
	// 	},500);
	// });

	// $('#photoButton').click(function() {
	// 	shrinkAll();
	// 	setTimeout(function() {
	// 		showPhoto();
	// 	},500);
	// });


	function showAll() {
	 	$('.web, .id, .photo').fadeIn(500);
	};

	function hideAll() {
	 	$('.web, .id, .photo').fadeOut(500);
	};

	function showWeb() {
		$('.web').delay(500).fadeIn(500);
	}

	function showID() {
		$('.id').fadeIn(500);
	}

	function showPhoto() {
		$('.photo').fadeIn(500);
	}


	$('#allButton').click(function() {
		showAll();
	});

	$('#webButton').click(function() {
		hideAll();
		showWeb();
	});

	$('#idButton').click(function() {
		hideAll();
		setTimeout(function() {
			showID();
		},500);
	});

	$('#photoButton').click(function() {
		hideAll();
		setTimeout(function() {
			showPhoto();
		},500);
	});


});

