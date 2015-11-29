jQuery(document).ready(function() {


	$('video#bgvideo').on('loadedmetadata', scaleVideo);

	

	function scaleVideo() {

		// GETS WINDOW HEIGHT AND WIDTH
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		
		alert(windowHeight + ' and the window width is ' + windowWidth);

	// 	var videoHeight = $('video#bgvideo')[0].videoHeight;
	// 	var videoWidth = $('video#bgvideo')[0].videoWidth;

	// 	alert('Our window dimensions are: ' + windowHeight + 'x' + windowWidth + ' and our video width and height is: ' + videoWidth + 'x' + videoHeight);
	// }

	}
})
