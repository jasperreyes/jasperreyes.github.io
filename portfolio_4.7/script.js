$(document).ready(function(){

    //INITIAL SETUP -------------------------------------------------------------
    $('#home_page').show();
	$('#work_page').hide();
	$('#about_page').hide();
    $('#homebutton_grey').hide();
    $('#home_jasperbackground').hide();
    $('#home_chicagobackground').hide();
    $('#project_hydratile').hide();

    //NAVBAR ------------------------------------------------------------- 
    $('#navbar').css('top','-40px');
    $('#navbar').delay(1000).animate({'top':'0px'},300);

    //HOME PAGE INTERACTIONS -------------------------------------------------------------
    $('#home_jasperbutton').click(function() {
        $('.home_text').animate({'color':'#FFF'},500).delay(800).animate({'color':'#222'});
        $('#home_jasperbackground').fadeIn(500).delay(800).fadeOut(500);
    });

    $('#home_chicagobutton').click(function() {
        $('.home_text').animate({'color':'#FFF'},500).delay(800).animate({'color':'#222'});
        $('#home_chicagobackground').fadeIn(500).delay(800).fadeOut(500);
    });

    //PROJECT TRANSITIONS -------------------------------------------------------------
    $('#work_thumbnail_hydratile').click(function() {
        $('#work_container').fadeOut();
        $('.project_title').hide();
        $('#project_hydratile').fadeIn(function() {
            $('.project_exitbutton').show();
            $('.project_exitbutton').animate({'bottom':'20px'},200);
            $('#navbar').css('height','80px');
            $('.project_title').delay(100).fadeIn(300);
        });
    });

    //HOME + WORK + ABOUT BUTTONS -------------------------------------------------------------
    var homeactive = true;
    var workactive = false;
    var aboutactive = false;

    $('#workbutton').click(function()
    {
        if (homeactive)
        {
            $('#home_page').animate({'left':'-100%'},300);
            $('#home_page').delay(300).hide(0);
            $('#work_page').show();
            $('#work_page').css('left','100%');
            $('#work_page').animate({'left':'0%'},300);

            homeactive = false;
            workactive = true;
            aboutactive = false;
        };

        if (aboutactive)
        {
            $('#about_page').animate({'left':'-100%'},300);
            $('#about_page').delay(300).hide(0);
            $('#work_page').show();
            $('#work_page').css('left','100%');
            $('#work_page').animate({'left':'0%'},300);

            homeactive = false;
            workactive = true;
            aboutactive = false;
        };

        $(this).css('color','#66cc33');
        $('#aboutbutton').css('color','#222');
        $('#homebutton_green').fadeOut();
        $('#homebutton_grey').fadeIn();
    });

    $('#aboutbutton').click(function()
    {
        $(this).css('color','#66cc33');
        $('#workbutton').css('color','#222');
        $('#homebutton_green').fadeOut();
        $('#homebutton_grey').fadeIn();

        if (homeactive)
        {
            $('#home_page').animate({'left':'100%'},300);
            $('#home_page').delay(300).hide(0);
            $('#about_page').show();
            $('#about_page').css('left','-100%');
            $('#about_page').animate({'left':'0%'},300);
           
            homeactive = false;
            workactive = false;
            aboutactive = true;
        };

        if (workactive)
        {
            $('#work_page').animate({'left':'100%'},300);
            $('#work_page').delay(300).hide(0);
            $('#about_page').show();
            $('#about_page').css('left','-100%');
            $('#about_page').animate({'left':'0%'},300);

            homeactive = false;
            workactive = false;
            aboutactive = true;
        };
    });

    $('#homebutton').click(function()
    {

        $('#homebutton_grey').fadeOut();
        $('#homebutton_green').fadeIn();
        $('#aboutbutton').css('color','#222');
        $('#workbutton').css('color','#222');

        if (workactive)
        {
            $('#work_page').animate({'left':'100%'},300);
            $('#work_page').delay(300).hide(0);
            $('#home_page').show();
            $('#home_page').css('left','-100%');
            $('#home_page').animate({'left':'0%'},300);

            homeactive = true;
            workactive = false;
            aboutactive = false;
        };
        if (aboutactive)
        {
            $('#about_page').animate({'left':'-100%'},300);
            $('#about_page').delay(300).hide(0);
            $('#home_page').show();
            $('#home_page').css('left','100%');
            $('#home_page').animate({'left':'0%'},300);

            homeactive = true;
            workactive = false;
            aboutactive = false;
        };
        if (homeactive)
        {
            $('#about_page').noop();
            $('#work_page').noop();
            $('#home_page').noop();

            homeactive = true;
            workactive = false;
            aboutactive = false;
        };

    });

    //EXIT BUTTON
    $('.project_exitbutton').click(function(){
        $('.project_title').fadeOut(100);
        $('.project').delay(300).fadeOut(300);
        $('#work_container').delay(300).fadeIn(300);

        $(this).css('bottom','-80px').fadeOut(300);
        $('#navbar').delay(300).css('height','40px');

    });

    //ESCAPE KEYPRESS
    $(document).keyup(function(e) {
        if (workactive = true)
        {
            if (e.keyCode == 27)
            { 
                $('.project').delay(300).fadeOut(300);
                $('.project_title').fadeOut(300);
                $('#work_container').delay(300).fadeIn(300);
                $('#navbar').css('height','40px');
            };  
        };
    });

});