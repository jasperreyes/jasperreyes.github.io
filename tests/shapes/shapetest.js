$(document).ready(function(){

	$('#work').hide();
	$('#about').hide();

	$('#home_aboutbutton').click(function() {
    	$('#home').animate({'left':'100%'},300);
    	$('#about').show();
    	$(this).hide();
	});

	$('#home_workbutton').click(function() {
    	$('#home').animate({'left':'-100%'},300);
    	$('#work').show();
    	$(this).hide();
	});

	$('#about_homebutton').click(function() {
    	$('#home').animate({'left':'0%'},300);
    	$('#home_aboutbutton').delay(300).show(0);
    	$('#about').delay(300).hide(0);
	});

	$('#work_homebutton').click(function() {
    	$('#home').animate({'left':'0%'},300);
    	$('#home_workbutton').delay(300).show(0);
    	$('#work').delay(300).hide(0);
	});

	$('#about_workbutton').click(function() {
    	$('#work').delay(300).show(0);
    	$('#home_aboutbutton').delay(300).show(0);
		$('#home').animate({'left':'-100%'},600, function() {
			$('#work').animate({'left':'0%'},300);
		});
	});

	$('#work_aboutbutton').click(function() {
    	$('#about').delay(300).show(0);
    	$('#home_workbutton').delay(300).show(0);
		$('#home').animate({'left':'100%'},600, function() {
			$('#about').animate({'left':'0%'},300);
		});
	});

});