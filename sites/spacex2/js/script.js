$(document).ready(function()
{
	// $('#site_container').hide();
	$('#earth_container').hide();
	$('#mars_container').hide();
	$('#logo').hide();
	$('#relaunchbutton').hide();
	// $('#launch').hide();

	$('.button').mouseenter(function() {
		$(this).css('transform','scale(1.1)');
	});

	$('.button').mouseleave(function() {
		$(this).css('transform','scale(1)');
	});


	$('#relaunchbutton').click(function() {
		location.reload();
	});


	// $('#launchbutton').click(function() {
	// 	// $('#launch').delay(1000).fadeOut(1000);
	// 	$('#launch').delay(1000).animate({'left':'-100%'}, 500, 'easeInQuad').delay(500).hide(0);
	// 	$('#earth_container').delay(1000).show();

	// 	setTimeout(function()
	// 	{
	// 		$('#earth_container').delay(37000).fadeOut(1000);
	// 	},1000);

	// 	setTimeout(function()
	// 	{
	// 		$('#mars_container').delay(37000).fadeIn(1000);
	// 	}, 1000);

	// 	setTimeout(function()
	// 	{
	// 		$('#logo').delay(55000).fadeIn(3000);
	// 	}, 1000);

	// 	setTimeout(function()
	// 	{
	// 		$('#relaunchbutton').delay(60000).fadeIn(3000);
	// 	}, 1000);


	// });

});

