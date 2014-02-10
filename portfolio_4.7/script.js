$(document).ready(function(){

    //INITIAL SETUP -------------------------------------------------------------
    $('#home_page').show();
	$('#work_page').hide();
	$('#about_page').hide();
    $('#jasper_background').hide();
    $('#chicago_background').hide();
    $('#project_hydratile').hide();

    //NAVBAR ------------------------------------------------------------- 
    $('#navbar').css('top','-60px');
    $('#navbar').delay(800).animate({'top':'0px'},400);

    //HOME INTERACTIONS -------------------------------------------------------------
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

    //PROJECT TRANSITIONS -------------------------------------------------------------
    $('#work_thumbnail_hydratile').click(function() {
        $('#work_container').fadeOut();
        $('#project_hydratile').fadeIn();
    });

    //HOME + WORK + ABOUT BUTTONS -------------------------------------------------------------
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
        };
        if (aboutactive)
        {
            $('#about_page').animate({'left':'-100%'},400);
            $('#about_page').delay(400).hide(0);
            $('#work_page').show();
            $('#work_page').css('left','100%');
            $('#work_page').animate({'left':'0%'},400);
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
        };
        if (workactive)
        {
            $('#work_page').animate({'left':'100%'},400);
            $('#work_page').delay(400).hide(0);
            $('#about_page').show();
            $('#about_page').css('left','-100%');
            $('#about_page').animate({'left':'0%'},400);
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
        };

        homeactive = true;
        workactive = false;
        aboutactive = false;
    });

    //EXIT PROJECT
        //EXIT BUTTON
        $('.project_exitbutton').click(function(){
            $('.project').fadeOut();
            $('#work_container').fadeIn();
        });

        //ESCAPE KEYPRESS
            $(document).keyup(function(e) {
                if (workactive = true)
                {
                    if (e.keyCode == 27)
                    { 
                        $('.project').fadeOut();
                        $('#work_container').fadeIn();
                    };  
                };
            });


});