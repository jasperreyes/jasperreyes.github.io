$(document).ready(function() {

	// alert('hi');

	// function showAll() {
	//  	$('.web, .id, .photo').removeClass('project_min').addClass('project_max');
	// };

	// function hideAll() {
	//  	$('.web, .id, .photo').removeClass('project_max').addClass('project_min');
	// };

	// function showWeb() {
	// 	$('.web').removeClass('project_min').addClass('project_max');
	// }

	// function showID() {
	// 	$('.id').removeClass('project_min').addClass('project_max');
	// }

	// function showPhoto() {
	// 	$('.photo').removeClass('project_min').addClass('project_max');
	// }

	// $('.filter').click(function() {
	// 	showAll();
	// });

	// $('#webButton').click(function() {
	// 	hideAll();
	// 	setTimeout(function() {
	// 		showWeb();
	// 	},500);
	// });

	// $('#idButton').click(function() {
	// 	hideAll();
	// 	setTimeout(function() {
	// 		showID();
	// 	},500);
	// });

	// $('#photoButton').click(function() {
	// 	hideAll();
	// 	setTimeout(function() {
	// 		showPhoto();
	// 	},500);
	// });

	$('.filter').click(function() {
		$('.filter').css('color','#FFF');
		$(this).css('color','#66cc33');
	});

	$('#webButton').click(function() {
		$('.web').removeClass('projectDeselected');
		$('.id, .photo').addClass('projectDeselected');
	});

	$('#idButton').click(function() {
		$('.id').removeClass('projectDeselected');
		$('.web, .photo').addClass('projectDeselected');
	});

	$('#photoButton').click(function() {
		$('.photo').removeClass('projectDeselected');
		$('.id, .web').addClass('projectDeselected');
	});

	$('#allButton').click(function() {
	 	$('.web, .id, .photo').removeClass('projectDeselected');
	});

});

