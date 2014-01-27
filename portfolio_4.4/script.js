$(document).ready(function(){
	$('#work').hide();
	$('#about').hide();

    $('.home_leftbutton').css('left','-100px');
    $('.home_leftbutton').delay(600).animate({'left':'0'},800);
    $('.home_rightbutton').css('right','-100px');
    $('.home_rightbutton').delay(600).animate({'right':'0'},800);


    $('#home_aboutbutton').click(function() {
     $('#home').animate({'left':'100%'},200);
     $('#about').show();
     $(this).delay(100).hide();
    });

    $('#home_workbutton').click(function() {
     $('#home').animate({'left':'-100%'},200);
     $('#work').show();
     $(this).delay(100).hide(0);
    });

    $('#about_homebutton').click(function() {
     $('#home').animate({'left':'0%'},200);
     $('#home_aboutbutton').delay(200).show(0);
     $('#about').delay(200).hide(0);
    });

    $('#work_homebutton').click(function() {
     $('#home').animate({'left':'0%'},200);
     $('#home_workbutton').delay(200).show(0);
     $('#work').delay(200).hide(0);
    });

    //THUMBNAILS--------------------------------------------

});