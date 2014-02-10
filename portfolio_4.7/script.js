$(document).ready(function(){

    //INITIAL SETUP
    $('#home_page').show();
	$('#work_page').hide();
	$('#about_page').hide();
    $('#jasper_background').hide();
    $('#chicago_background').hide();
    $('#project_hydratile').hide();

    //NAVBAR
    $('#navbar').css('top','-60px');
    $('#navbar').delay(800).animate({'top':'0px'},400);

    $('#homebutton').mouseenter(function() {
        $('#homebutton_green').fadeIn();
    });
    $('#homebutton').mouseleave(function() {
        $('#homebutton_green').fadeOut();
    });

    //HOME INTERACTIONS
    $('#jasper_button').click(function() {
        $('#jasper_background').fadeIn(500).delay(800).fadeOut(500);
        $('#home_container').animate({'color':'#FFF'},500).delay(800).animate({'color':'#222'},500);
        $(this).animate({'color':'#66cc33'},500).delay(800).animate({'color':'#777'},500);
    });
    $('#chicago_button').click(function() {
        $('#chicago_background').fadeIn(500).delay(800).fadeOut(500);
        $('#home_container').animate({'color':'#FFF'},500).delay(800).animate({'color':'#222'},500);
        $(this).animate({'color':'#66cc33'},500).delay(800).animate({'color':'#777'},500);
    });

    //PROJECT TRANSITIONS
    $('#work_thumbnail_hydratile').click(function() {
        $('#work_container').fadeOut();
        $('#project_hydratile').fadeIn();
    });

    //EXIT BUTTON
    $('.project_exitbutton').click(function(){
        $('.project').fadeOut();
        $('#work_container').fadeIn();
    });

    //Esc key to bring user from project to work page
    // $(document).keyup(function(e) {
    //     if (e.keyCode == 13) { $('.save').click(); }     // enter
    //     if (e.keyCode == 27) { $('.cancel').click(); }   // esc
    // });


    //HOME + WORK + ABOUT BUTTONS
    var homeactive = true;
    var workactive = false;
    var aboutactive = false;

    $('#workbutton').click(function()
    {
        if (homeactive)
        {
            $('#home_page').animate({'left':'-100%'},400);
            $('#home_page').delay(400).hide(0);
            $('#work_page').show();
            $('#work_page').css('left','100%');
            $('#work_page').animate({'left':'0%'},400);
            $('#homebutton_green').fadeOut();
        };
        if (aboutactive)
        {
            $('#about_page').animate({'left':'-100%'},400);
            $('#about_page').delay(400).hide(0);
            $('#work_page').show();
            $('#work_page').css('left','100%');
            $('#work_page').animate({'left':'0%'},400);
            $('#homebutton_green').fadeOut();
        };

        homeactive = false;
        workactive = true;
        aboutactive = false;
    });

    $('#aboutbutton').click(function()
    {
        if (homeactive)
        {
            $('#home_page').animate({'left':'100%'},400);
            $('#home_page').delay(400).hide(0);
            $('#about_page').show();
            $('#about_page').css('left','-100%');
            $('#about_page').animate({'left':'0%'},400);
            $('#homebutton_green').fadeOut();
        };
        if (workactive)
        {
            $('#work_page').animate({'left':'100%'},400);
            $('#work_page').delay(400).hide(0);
            $('#about_page').show();
            $('#about_page').css('left','-100%');
            $('#about_page').animate({'left':'0%'},400);
            $('#homebutton_green').fadeOut();
        };

        homeactive = false;
        workactive = false;
        aboutactive = true;
    });

    $('#homebutton').click(function()
    {
        if (workactive)
        {
            $('#work_page').animate({'left':'100%'},400);
            $('#work_page').delay(400).hide(0);
            $('#home_page').show();
            $('#home_page').css('left','-100%');
            $('#home_page').animate({'left':'0%'},400);
        };
        if (aboutactive)
        {
            $('#about_page').animate({'left':'-100%'},400);
            $('#about_page').delay(400).hide(0);
            $('#home_page').show();
            $('#home_page').css('left','100%');
            $('#home_page').animate({'left':'0%'},400);
            $('#homebutton_green').fadeIn();          
        };

        homeactive = true;
        workactive = false;
        aboutactive = false;
    });



});