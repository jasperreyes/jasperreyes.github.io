$(document).ready(function(){

	$('#work').hide();
	$('#about').hide();

    $('#project_HT').hide();

    $('#home_aboutbutton').click(function() {
     $('#home').animate({'left':'100%'},200);
     $('#about').show();
     $(this).delay(100).hide();
    });

    $('#home_workbutton').click(function() {
     $('#home').animate({'left':'-100%'},200);
     $('#home').delay(200).hide(0);
     $('#work').show();
     $(this).hide();
    });

    $('#about_homebutton').click(function() {
     $('#home').animate({'left':'0%'},200);
     $('#home_aboutbutton').delay(200).show(0);
     $('#about').delay(200).hide(0);
    });

    $('#work_homebutton').click(function() {
     $('#home').animate({'left':'0%'},200);
     $('#home').show();
     $('#home_workbutton').delay(200).show(0);
     $('#work').delay(200).hide(0);
    });

    //THUMBNAILS--------------------------------------------
    $('#tmb_HT').click(function() {
        $('#work').hide();
        $('#project_HT').show();
    });

});