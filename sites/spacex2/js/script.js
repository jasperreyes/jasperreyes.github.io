$(document).ready(function() {

	$('.button').mouseenter(function() {
		$(this).animate({'background-color':'#CC3232'},250);
		$(this).css('transform','scale(1.1)');
	});

	$('.button').mouseleave(function() {
		$(this).animate({'background-color':'#104E8B'},250);
		$(this).css('transform','scale(1)');
	});

	$('#launch_container').fadeIn(1000);

	$('#launchButton').click(function() {
		$('#launch_container').fadeOut(1000);
		$('#site_container').fadeIn(1000);
		$('#earth_container').fadeIn(1000);
		$('#earth_container').delay(37000).fadeOut(1000);
		$('#mars_container').delay(36000).fadeIn(1000);
		$('#finish_container').delay(50000).fadeIn(1000);
		$('#logo').delay(51000).fadeIn(3000);
		$('#relaunchButton').delay(53000).fadeIn(1000);
		$('#links').delay(54000).fadeIn(1000);
		$('#disclaimer').delay(55000).fadeIn(1000);
	});

	$('#relaunchButton').click(function() {
		$('#site_container').fadeOut(1000);
		$('#launch_container').fadeOut(1000);

		setTimeout(function()
		{
			location.reload();
		}, 1000);
	});
});
