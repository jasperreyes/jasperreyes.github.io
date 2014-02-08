$(document).ready(function(){

    //INITIAL SETUP
    $('#landing_page').show();
	$('#work_page').hide();
	$('#about_page').hide();

    //LANDING PAGE INTERACTIONS
    // $('#jasper_button').click(function() {
    //     $('#landing_page').css('background-image', 'url('starvedrock.jpg')');
    //     $('#landing_page').css('background-size', 'cover');
    //     $('#landing_page').css('background-position', 'center center');
    // });

    //INTRO TAB ANIMATIONS
    $('#landing_navbar').css('top','-60px');
    $('#landing_navbar').delay(800).animate({'top':'0px'},400);

    // //HOVER TAB ANIMATIONS
    // $('.tab_leftwhite').mouseenter(function() {
    //  $('.tab_leftwhite').delay(100).animate({'left':'0'},100);
    // });
    // $('.tab_leftwhite').mouseleave(function() {
    //  $('.tab_leftwhite').animate({'left':'-20px'},100);
    // });
    // $('.tab_rightwhite').mouseenter(function() {
    //  $('.tab_rightwhite').delay(100).animate({'right':'0'},100);
    // });
    // $('.tab_rightwhite').mouseleave(function() {
    //  $('.tab_rightwhite').animate({'right':'-20px'},100);
    // });
    // $('.tab_leftgrey').mouseenter(function() {
    //  $('.tab_leftgrey').delay(100).animate({'left':'0px'},100);
    // });
    // $('.tab_leftgrey').mouseleave(function() {
    //  $('.tab_leftgrey').animate({'left':'-20px'},100);
    // });
    // $('.tab_rightgrey').mouseenter(function() {
    //  $('.tab_rightgrey').delay(100).animate({'right':'0px'},100);
    // });
    // $('.tab_rightgrey').mouseleave(function() {
    //  $('.tab_rightgrey').animate({'right':'-20px'},100);
    // });

    //HOME->ABOUT TRANSITION
    // $('#home_aboutbutton').click(function() {
    //  $('#home_page').animate({'left':'100%'},400);
    //  $('#home_page').delay(400).hide(0);
    //  $('#about_page').show();
     // $('#home_aboutbutton').delay(400).hide(0);
     // $('#home_workbutton').delay(400).hide(0);

    //  $('#about').show();
    //  $('#about').css('left','-100%');
    //  $('#about').animate({'left':'0%'},400);
    //  $('#about_homebutton').css('right','-100px');
    //  $('#about_homebutton').delay(400).animate({'right':'-20px'});
    // });

    // //ABOUT->HOME TRANSITION
    // $('#about_homebutton').click(function() {

    //  $('#about').animate({'left':'-100%'},400);
    //  $('#about').delay(400).hide(0);

    //  $('#home').show();
    //  $('#home').css('left','100%');
    //  $('#home').animate({'left':'0%'},400);

    //  $('#home_aboutbutton').delay(400).show(0);
    //  $('#home_aboutbutton').css('left','-100px');     
    //  $('#home_aboutbutton').delay(400).animate({'left':'-20px'},400);

    //  $('#home_workbutton').delay(400).show(0);
    //  $('#home_workbutton').css('right','-100px');
    //  $('#home_workbutton').delay(400).animate({'right':'-20px'},400);
    // });

    //LANDING->WORK TRANSITION
    $('#landing_workbutton').click(function() {
     $('#landing_page').animate({'left':'-100%'},400);
     $('#landing_page').delay(400).hide(0);
     $('#work_page').show();
     $('#work_page').css('left','100%');
     $('#work_page').animate({'left':'0%'},400);
     $('#landing_navbar').hide();
     $('#work_navbar').show();
    });

    //WORK-->ABOUT TRANSITION
    $('#work_aboutbutton').click(function() {
     $('#work_page').animate({'left':'100%'},400);
     $('#work_page').delay(400).hide(0);
     $('#about_page').show();
     $('#about_page').css('left','-100%');
     $('#about_page').animate({'left':'0%'},400);
     $('#work_navbar').hide();
     $('#about_navbar').show();
    });

    //LANDING-->ABOUT TRANSITION
    $('#landing_aboutbutton').click(function() {
     $('#landing_page').animate({'left':'100%'},400);
     $('#landing_page').delay(400).hide(0);
     $('#about_page').show();
     $('#about_page').css('left','-100%');
     $('#about_page').animate({'left':'0%'},400);
     $('#landing_navbar').hide();
     $('#about_navbar').show();
    });

    //ABOUT-->WORK TRANSITION
    $('#about_workbutton').click(function() {
     $('#about_page').animate({'left':'-100%'},400);
     $('#about_page').delay(400).hide(0);
     $('#work_page').show();
     $('#work_page').css('left','100%');
     $('#work_page').animate({'left':'0%'},400);
     $('#about_navbar').hide();
     $('#work_navbar').show();
    });


    // //WORK->HOME TRANSITION
    // $('#work_homebutton').click(function() {
    //  $('#work').animate({'left':'100%'},400);
    //  $('#work').delay(400).hide(0);
    //  $('#home').show();
    //  $('#home').css('left','-100%');
    //  $('#home').animate({'left':'0%'},400);
    // });

    
});