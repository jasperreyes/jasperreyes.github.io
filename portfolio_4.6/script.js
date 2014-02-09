$(document).ready(function(){

    //INITIAL SETUP
    $('#home_page').show();
	$('#work_page').hide();
	$('#about_page').hide();
    $('#jasper_background').hide();
    $('#chicago_background').hide();
    $('#project_hydratile').hide();

    //NAVBAR
    $('#home_navbar').css('top','-60px');
    $('#home_navbar').delay(800).animate({'top':'0px'},400);

    //HOME INTERACTIONS
    $('#jasper_button').click(function() {
        $('#jasper_background').fadeIn(500).delay(800).fadeOut(500);
    });
    $('#chicago_button').click(function() {
        $('#chicago_background').fadeIn(500).delay(800).fadeOut(500);
    });

    //PROJECT TRANSITIONS
    $('#work_thumbnail_hydratile').click(function() {
        $('#work_container').fadeOut();
        $('#project_hydratile').fadeIn();
    });
    $('#project_hydratile_exitbutton').click(function(){
        $('#project_hydratile').fadeOut();
        $('#work_container').fadeIn();
    });

    //HOME-->WORK TRANSITION
    $('#home_workbutton').click(function() {
     $('#home_page').animate({'left':'-100%'},400);
     $('#home_page').delay(400).hide(0);
     $('#work_page').show();
     $('#work_page').css('left','100%');
     $('#work_page').animate({'left':'0%'},400);
     $('#home_navbar').hide();
     $('#work_navbar').show();
    });

    //WORK-->HOME TRANSITION
    $('#work_homebutton').click(function() {
     $('#work_page').animate({'left':'100%'},400);
     $('#work_page').delay(400).hide(0);
     $('#home_page').show();
     $('#home_page').css('left','-100%');
     $('#home_page').animate({'left':'0%'},400);
     $('#work_navbar').hide();
     $('#home_navbar').show();
     // $('.project_navbar').css('position','relative');
     // $('.project_navbar').delay(400).css('position','fixed')
    });   

    //HOME-->ABOUT TRANSITION
    $('#home_aboutbutton').click(function() {
     $('#home_page').animate({'left':'100%'},400);
     $('#home_page').delay(400).hide(0);
     $('#about_page').show();
     $('#about_page').css('left','-100%');
     $('#about_page').animate({'left':'0%'},400);
     $('#home_navbar').hide();
     $('#about_navbar').show();
    });

    //ABOUT-->HOME TRANSITION
     $('#about_homebutton').click(function() {
     $('#about_page').animate({'left':'-100%'},400);
     $('#about_page').delay(400).hide(0);
     $('#home_page').show();
     $('#home_page').css('left','100%');
     $('#home_page').animate({'left':'0%'},400);
     $('#about_navbar').hide();
     $('#home_navbar').show();
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


    
});