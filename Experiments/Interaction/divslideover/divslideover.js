$(document).ready(function(){

    //INITIAL SETUP
	$('#work').hide();
	$('#about').hide();

    //INTRO TAB ANIMATIONS
    $('#home_aboutbutton').css('left','-100px');
    $('#home_aboutbutton').delay(200).animate({'left':'0'},400);
    $('#home_workbutton').css('right','-100px');
    $('#home_workbutton').delay(200).animate({'right':'0'},400);

    //HOVER TAB ANIMATIONS
    $('.tab_leftwhite').mouseenter(function() {
     $('.tab_leftwhite').delay(100).animate({'left':'-20px'},100);
    });
    $('.tab_leftwhite').mouseleave(function() {
     $('.tab_leftwhite').animate({'left':'0px'},100);
    });
    $('.tab_rightwhite').mouseenter(function() {
     $('.tab_rightwhite').delay(100).animate({'right':'-20px'},100);
    });
    $('.tab_rightwhite').mouseleave(function() {
     $('.tab_rightwhite').animate({'right':'0px'},100);
    });
    $('.tab_leftgrey').mouseenter(function() {
     $('.tab_leftgrey').delay(100).animate({'left':'-20px'},100);
    });
    $('.tab_leftgrey').mouseleave(function() {
     $('.tab_leftgrey').animate({'left':'0px'},100);
    });
    $('.tab_rightgrey').mouseenter(function() {
     $('.tab_rightgrey').delay(100).animate({'right':'-20px'},100);
    });
    $('.tab_rightgrey').mouseleave(function() {
     $('.tab_rightgrey').animate({'right':'0px'},100);
    });

    //HOME->ABOUT TRANSITION
    $('#home_aboutbutton').click(function() {
     $('#home').animate({'left':'100%'},400);
     $('#home').delay(400).hide(0);
     $('#home_aboutbutton').delay(400).hide(0);
     $('#home_workbutton').delay(400).hide(0);

     $('#about').show();
     $('#about').css('left','-100%');
     $('#about').animate({'left':'0%'},400);
     $('#about_homebutton').css('right','-100px');
     $('#about_homebutton').delay(400).animate({'right':'0px'});
    });

    //ABOUT->HOME TRANSITION
    $('#about_homebutton').click(function() {

     $('#about').animate({'left':'-100%'},400);
     $('#about').delay(400).hide(0);

     $('#home').show();
     $('#home').css('left','100%');
     $('#home').animate({'left':'0%'},400);

     $('#home_aboutbutton').delay(400).show(0);
     $('#home_aboutbutton').css('left','-100px');     
     $('#home_aboutbutton').delay(400).animate({'left':'0px'},400);

     $('#home_workbutton').delay(400).show(0);
     $('#home_workbutton').css('right','-100px');
     $('#home_workbutton').delay(400).animate({'right':'0px'},400);
    });

    //HOME->WORK TRANSITION
    $('#home_workbutton').click(function() {
     $('#home').animate({'left':'-100%'},400);
     $('#home').delay(400).hide(0);
     $('#home_aboutbutton').delay(400).hide(0);
     $('#home_workbutton').delay(400).hide(0);

     $('#work').show();
     $('#work').css('left','100%');
     $('#work').animate({'left':'0%'},400);
     $('#work_homebutton').css('left','-100px');
     $('#work_homebutton').delay(400).animate({'left':'0px'});
    });

    //WORK->HOME TRANSITION
    $('#work_homebutton').click(function() {

     $('#work').animate({'left':'100%'},400);
     $('#work').delay(400).hide(0);

     $('#home').show();
     $('#home').css('left','-100%');
     $('#home').animate({'left':'0%'},400);

     $('#home_aboutbutton').delay(400).show(0);
     $('#home_aboutbutton').css('left','-100px');     
     $('#home_aboutbutton').delay(400).animate({'left':'0px'},400);

     $('#home_workbutton').delay(400).show(0);
     $('#home_workbutton').css('right','-100px');
     $('#home_workbutton').delay(400).animate({'right':'0px'},400);
    });

    
});