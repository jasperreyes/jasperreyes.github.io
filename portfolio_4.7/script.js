$(document).ready(function(){

    //INITIAL SETUP -------------------------------------------------------------
    $('#home_page').show();
	$('#work_page').hide();
	$('#about_page').hide();
    $('#homebutton_grey').hide();
    $('#home_jasperbackground').hide();
    $('#home_chicagobackground').hide();
    $('#project_hydratile').hide();
    $('#project_karan').hide();
    $('#project_kenkyo').hide();
    $('#project_people').hide();
    $('.project_exitbutton').css('bottom','-50px').hide();


    //HOME PAGE INTERACTIONS -------------------------------------------------------------
    $('#home_jasperbutton').click(function() {
        $('.home_text').animate({'color':'#FFF'},300).delay(800).animate({'color':'#333'},300);
        $('#home_jasperbackground').fadeIn(300).delay(800).fadeOut(300);
    });

    $('#home_chicagobutton').click(function() {
        $('.home_text').animate({'color':'#FFF'},300).delay(800).animate({'color':'#333'},300);
        $('#home_chicagobackground').fadeIn(300).delay(800).fadeOut(300);
    });


    //HOME + WORK + ABOUT BUTTONS -------------------------------------------------------------
    var homeactive = true;
    var workactive = false;
    var aboutactive = false;

    $('#workbutton').click(function()
    {
        if (homeactive)
        {
            $('#home_page').animate({'left':'-100%'},300).fadeOut(300);
            $('#work_page').css('left','100%').show(0).animate({'left':'0%'},300);
        };

        if (aboutactive)
        {
            $('#about_page').animate({'left':'-100%'},300).fadeOut(300);
            $('#work_page').css('left','100%').show(0).animate({'left':'0%'},300);
        };

        homeactive = false;
        workactive = true;
        aboutactive = false;

        $(this).css('color','#66cc33');
        $('#aboutbutton').css('color','#222');
        $('#homebutton_green').fadeOut(300);
        $('#homebutton_grey').fadeIn(300);
    });

    $('#aboutbutton').click(function()
    {
        $(this).css('color','#66cc33');
        $('#workbutton').css('color','#222');
        $('#homebutton_green').fadeOut(300);
        $('#homebutton_grey').fadeIn(300);

        if (homeactive)
        {
            $('#home_page').animate({'left':'100%'},300).fadeOut(300).delay(200).hide(0);
            $('#about_page').css('left','-100%').show(0).animate({'left':'0%'},200);
           
            homeactive = false;
            workactive = false;
            aboutactive = true;
        };

        if (workactive)
        {
            $('#work_page').animate({'left':'100%'},200).delay(200).hide(0);
            $('#about_page').css('left','-100%').show(0).animate({'left':'0%'},200);

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

        if (homeactive)
        {
            $('#about_page').noop();
            $('#work_page').noop();
            $('#home_page').noop();

            homeactive = true;
            workactive = false;
            aboutactive = false;
        };

        if (workactive)
        {
            $('#work_page').animate({'left':'100%'},200).delay(200).hide(0);
            $('#home_page').css('left','-100%').show(0).animate({'left':'0%'},200);

            homeactive = true;
            workactive = false;
            aboutactive = false;
        };
        if (aboutactive)
        {
            $('#about_page').animate({'left':'-100%'},200).delay(200).hide(0);
            $('#home_page').css('left','100%').show(0).animate({'left':'0%'},200);

            homeactive = true;
            workactive = false;
            aboutactive = false;
        };
    });


    //PROJECT TRANSITIONS -------------------------------------------------------------
    $('.work_thumbnail').click(function() {
        $('.project_exitbutton').css('bottom','-50px').show(300).delay(300).animate({'bottom':'20px'},300);
        $('#work_container').fadeOut(300);
    });

    $('#work_thumbnail_hydratile').click(function() {
        $('#project_hydratile').fadeIn(300);
    });

    $('#work_thumbnail_karan').click(function() {
        $('#project_karan').fadeIn(300);
    });

    $('#work_thumbnail_kenkyo').click(function() {
        $('#project_kenkyo').fadeIn(300);
    });

    $('#work_thumbnail_people').click(function() {
        $('#project_people').fadeIn(300);
    });


    //EXIT BUTTON -------------------------------------------------------------
    $('.project_exitbutton').click(function(){
        $(this).animate({'bottom':'-50px'},200).hide(0);
        $('.project').delay(200).fadeOut(200);
        $('#work_container').delay(200).fadeIn(200);
    });


    //ESCAPE KEYPRESS -------------------------------------------------------------
    $(document).keyup(function(e) {
        if (workactive = true)
        {
            if (e.keyCode == 27)
            { 
                $('.project_exitbutton').animate({'bottom':'-50px'},200).hide(0);
                $('.project').delay(200).fadeOut(200);
                $('#work_container').delay(200).fadeIn(200);
            };  
        };
    });
});