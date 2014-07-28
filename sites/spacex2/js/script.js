$(document).ready(function()
{
	$('#earth_container').hide();
	$('#mars_container').hide();
	$('#launch_container').hide();
	// $('#logo').hide();
	// $('#relaunchButton').hide();
	// $('#links').hide();
	// $('#disclaimer').hide();

	// $('#launch_container').fadeIn(1000);

	$('#relaunchButton').click(function() {
		$('#site_container').fadeOut(1000);

		setTimeout(function()
		{
			location.reload();
		}, 2000);

	});


	$('#launchButton').click(function() {
		$('#launch_container').delay(250).fadeOut(250);
		// $('#earth_container').delay(250).show();

		// setTimeout(function()
		// {
		// 	$('#earth_container').delay(37000).fadeOut(1000);
		// },1000);

		setTimeout(function()
		{
			$('#mars_container').delay(500).fadeIn(500);
		}, 1000);

		setTimeout(function()
		{
			$('#logo').delay(10000).fadeIn(1000);
		}, 1000);

		setTimeout(function()
		{
			$('#relaunchButton').delay(12000).fadeIn(1000);
		}, 1000);

		setTimeout(function()
		{
			$('#links').delay(14000).fadeIn(1000);
		}, 1000);

		setTimeout(function()
		{
			$('#disclaimer').delay(16000).fadeIn(2000);
		}, 1000);
	});

});

