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

    //HOME PAGE INTERACTIONS -------------------------------------------------------------
    $('#home_jasperbutton').click(function() {
        $('.home_text').animate({'color':'#FFF'},300).delay(800).animate({'color':'#333'},300);
        $('#home_jasperbackground').fadeIn(300).delay(800).fadeOut(300);
    });

    $('#home_chicagobutton').click(function() {
        $('.home_text').animate({'color':'#FFF'},300).delay(800).animate({'color':'#333'},300);
        $('#home_chicagobackground').fadeIn(300).delay(800).fadeOut(300);
    });


    //HOME/WORK/ABOUT BUTTONS - SLIDING ANIMATIONS -------------------------------------------------------------
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


        if (workactive)
        {
            $('.project').fadeOut(300);
            $('#work_page').fadeIn(300);
        }

        $(this).css('color','#66cc33');
        $('#aboutbutton').css('color','#333');
        $('#homebutton_green').fadeOut(300);
        $('#homebutton_grey').fadeIn(300);
    });

    $('#aboutbutton').click(function()
    {
        $(this).css('color','#66cc33');
        $('#workbutton').css('color','#333');
        $('#homebutton_green').fadeOut(300);
        $('#homebutton_grey').fadeIn(300);

        if (homeactive)
        {
            $('#home_page').animate({'left':'100%'},300).fadeOut(300).delay(300).hide(0);
            $('#about_page').css('left','-100%').show(0).animate({'left':'0%'},300);
           
            homeactive = false;
            workactive = false;
            aboutactive = true;
        };

        if (workactive)
        {
            $('#work_page').animate({'left':'100%'},300).delay(300).hide(0);
            $('.project').fadeOut(300);
            $('#about_page').css('left','-100%').show(0).animate({'left':'0%'},300);

            homeactive = false;
            workactive = false;
            aboutactive = true;
        };
    });

    $('#homebutton').click(function()
    {

        $('#homebutton_grey').fadeOut();
        $('#homebutton_green').fadeIn();
        $('#aboutbutton').css('color','#333');
        $('#workbutton').css('color','#333');

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
            $('#work_page').animate({'left':'100%'},300).delay(300).hide(0);
            $('.project').fadeOut(300);
            $('#home_page').css('left','-100%').show(0).animate({'left':'0%'},300);

            homeactive = true;
            workactive = false;
            aboutactive = false;
        };

        if (aboutactive)
        {
            $('#about_page').animate({'left':'-100%'},300).delay(300).hide(0);
            $('#home_page').css('left','100%').show(0).animate({'left':'0%'},300);

            homeactive = true;
            workactive = false;
            aboutactive = false;
        };
    });

    // //HOME/WORK/ABOUT BUTTONS - RUDIMENTARY --------------------------------------------

    // $('#homebutton').click(function() {
    //     $('#home_page').show();
    //     $('#work_page').hide();
    //     $('#about_page').hide();
    //     $('.project').hide()

    //     $('#homebutton_grey').fadeOut(300);
    //     $('#homebutton_green').fadeIn(300);
    //     $('#aboutbutton').css('color','#333');
    //     $('#workbutton').css('color','#333');
    // });

    // $('#workbutton').click(function() {
    //     $('#home_page').hide();
    //     $('#work_page').show();
    //     $('#work_container').show();
    //     $('#about_page').hide();
    //     $('.project').hide()

    //     $(this).css('color','#66cc33');
    //     $('#aboutbutton').css('color','#333');
    //     $('#homebutton_green').fadeOut(300);
    //     $('#homebutton_grey').fadeIn(300);
    // });

    // $('#aboutbutton').click(function() {
    //     $('#home_page').hide();
    //     $('#work_page').hide();
    //     $('#about_page').show();
    //     $('.project').hide();

    //     $(this).css('color','#66cc33');
    //     $('#workbutton').css('color','#333');
    //     $('#homebutton_green').fadeOut(300);
    //     $('#homebutton_grey').fadeIn(300);

    // });


    //PROJECT THUMBNAIL TRANSITIONS -------------------------------------------------------------
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
        $('.project').fadeOut(300);
        $('#work_container').fadeIn(300);
    });


    //ESCAPE KEYPRESS -------------------------------------------------------------
    $(document).keyup(function(e) {
        if (workactive = true)
        {
            if (e.keyCode == 27)
            { 
                $('.project').fadeOut(200);
                $('#work_container').fadeIn(300);
            };  
        };
    });

    // SCROLL UP BUTTON -----------------------------------------------

    $('#about_upbutton').click(function() {
        $('#about_container').animate({
           scrollTop: 0
        }, 'slow');
    });

    $('#work_upbutton').click(function() {
        $('#work_container').animate({
           scrollTop: 0
        }, 'slow');
    });

    $('.project_upbutton').click(function() {
        $('.project_container').animate({
           scrollTop: 0
        }, 'slow');
    });
});