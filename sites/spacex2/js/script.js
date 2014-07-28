$(document).ready(function()
{
	$('#earth_container').hide();
	$('#mars_container').hide();
	$('#launch_container').hide();
	$('#logo').hide();
	$('#relaunchButton').hide();
	$('#links').hide();
	$('#disclaimer').hide();

	$('#launch_container').fadeIn(500);

	$('#relaunchButton').click(function() {
		$('#site_container').fadeOut(500);

		setTimeout(function()
		{
			location.reload();
		}, 2000);

	});


	$('#launchButton').click(function() {
		$('#launch_container').delay(500).fadeOut(500);
		$('#earth_container').delay(500).show();

		setTimeout(function()
		{
			$('#earth_container').delay(37000).fadeOut(500);
		},1000);

		setTimeout(function()
		{
			$('#mars_container').delay(35500).fadeIn(500);
		}, 1000);

		setTimeout(function()
		{
			$('#logo').delay(50000).fadeIn(1000);
		}, 1000);

		setTimeout(function()
		{
			$('#relaunchButton').delay(52000).fadeIn(1000);
		}, 1000);

		setTimeout(function()
		{
			$('#links').delay(53000).fadeIn(1000);
		}, 1000);

		setTimeout(function()
		{
			$('#disclaimer').delay(54000).fadeIn(1000);
		}, 1000);
	});

});

