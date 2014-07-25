$(document).ready(function()
{

	$('#mars_container').hide();

	setTimeout(function()
	{
		$('#mars').addClass('marsHuge');
	}, 40000);

	setTimeout(function()
	{
		$('#earth_container').delay(45000).fadeOut(1000);
	},1000);

	setTimeout(function()
	{
		$('#mars_container').delay(45000).fadeIn(1000);
	}, 1000);

});