$(document).ready(function(){
	$('#work').hide();
	$('#about').hide();

    $('.home_leftbutton').css('left','-100px');
    $('.home_leftbutton').delay(400).animate({'left':'0'},400);
    $('.home_rightbutton').css('right','-100px');
    $('.home_rightbutton').delay(400).animate({'right':'0'},400);

    $('#home_aboutbutton').click(function() {
     $('#home').animate({'left':'100%'},400);
     $('#about').show();
     $('.home_linktext').hide();
     $('.home_linktext').delay(400).show(0);
     $('#about_homebutton').css('right','-100px');
     $('#about_homebutton').delay(400).animate({'right':'0'},400);
    });

    $('#home_aboutbutton').mouseenter(function() {
     $('#home_aboutbutton').delay(200).animate({'left':'-20px'},200);
    });
    $('#home_aboutbutton').mouseleave(function() {
     $('#home_aboutbutton').animate({'left':'0px'},200);
    });
    $('#home_workbutton').mouseenter(function() {
     $('#home_workbutton').delay(200).animate({'right':'-20px'},200);
    });
    $('#home_workbutton').mouseleave(function() {
     $('#home_workbutton').animate({'right':'0px'},200);
    });

    $('#about_homebutton').mouseenter(function() {
     $('#about_homebutton').delay(200).animate({'right':'-20px'},200);
    });
    $('#about_homebutton').mouseleave(function() {
     $('#about_homebutton').animate({'right':'0px'},200);
    });


    $('#home_workbutton').click(function() {
     $('#home').animate({'left':'-100%'},400);
     $('#work').show();
     $('.home_linktext').hide();
     $('.home_linktext').delay(400).show(0);
    });

    $('#about_homebutton').click(function() {
     $('#home').animate({'left':'0%'},400);
     $('#home_aboutbutton').delay(400).show(0);
     $('#about').delay(400).hide(0);
    });

    $('#work_homebutton').click(function() {
     $('#home').animate({'left':'0%'},400);
     $('#home_workbutton').delay(400).show(0);
     $('#work').delay(400).hide(0);
    });

    //THUMBNAILS--------------------------------------------

});