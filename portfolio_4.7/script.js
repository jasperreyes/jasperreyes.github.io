$(document).ready(function(){

    //INITIAL SETUP -------------------------------------------------------------
    $('#home_page').show();
	$('#work_page').hide();
	$('#about_page').hide();
    $('#homebutton_grey').hide();
    $('#home_jasperbackground').hide();
    $('#home_chicagobackground').hide();
    $('.project_exitbutton').css('bottom','-50px').hide();
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


    // //HOME/WORK/ABOUT BUTTONS - SLIDING ANIMATIONS -------------------------------------------------------------
    // var homeactive = true;
    // var workactive = false;
    // var aboutactive = false;

    // $('#workbutton').click(function()
    // {
    //     if (homeactive)
    //     {
    //         $('#home_page').animate({'left':'-100%'},300).fadeOut(300);
    //         $('#work_page').css('left','100%').show(0).animate({'left':'0%'},300);
    //     };

    //     if (aboutactive)
    //     {
    //         $('#about_page').animate({'left':'-100%'},300).fadeOut(300);
    //         $('#work_page').css('left','100%').show(0).animate({'left':'0%'},300);
    //     };

    //     homeactive = false;
    //     workactive = true;
    //     aboutactive = false;


    //     if (workactive)
    //     {
    //         $('.project').fadeOut(300);
    //         $('#work_page').fadeIn(300);
    //         $('.project_exitbutton').animate({'bottom':'-50px'},200).hide(0);
    //     }

    //     $(this).css('color','#66cc33');
    //     $('#aboutbutton').css('color','#333');
    //     $('#homebutton_green').fadeOut(300);
    //     $('#homebutton_grey').fadeIn(300);
    // });

    // $('#aboutbutton').click(function()
    // {
    //     $(this).css('color','#66cc33');
    //     $('#workbutton').css('color','#333');
    //     $('#homebutton_green').fadeOut(300);
    //     $('#homebutton_grey').fadeIn(300);
    //     $('.project').hide();


    //     if (homeactive)
    //     {
    //         $('#home_page').animate({'left':'100%'},300).fadeOut(300).delay(200).hide(0);
    //         $('#about_page').css('left','-100%').show(0).animate({'left':'0%'},200);
           
    //         homeactive = false;
    //         workactive = false;
    //         aboutactive = true;
    //     };

    //     if (workactive)
    //     {
    //         $('#work_page').animate({'left':'100%'},200).delay(200).hide(0);
    //         $('#about_page').css('left','-100%').show(0).animate({'left':'0%'},200);

    //         homeactive = false;
    //         workactive = false;
    //         aboutactive = true;
    //     };
    // });

    // $('#homebutton').click(function()
    // {

    //     $('#homebutton_grey').fadeOut();
    //     $('#homebutton_green').fadeIn();
    //     $('#aboutbutton').css('color','#333');
    //     $('#workbutton').css('color','#333');
    //     $('.project').hide();


    //     if (homeactive)
    //     {
    //         $('#about_page').noop();
    //         $('#work_page').noop();
    //         $('#home_page').noop();

    //         homeactive = true;
    //         workactive = false;
    //         aboutactive = false;
    //     };

    //     if (workactive)
    //     {
    //         $('#work_page').animate({'left':'100%'},200).delay(200).hide(0);
    //         $('#home_page').css('left','-100%').show(0).animate({'left':'0%'},200);

    //         homeactive = true;
    //         workactive = false;
    //         aboutactive = false;
    //     };

    //     if (aboutactive)
    //     {
    //         $('#about_page').animate({'left':'-100%'},200).delay(200).hide(0);
    //         $('#home_page').css('left','100%').show(0).animate({'left':'0%'},200);

    //         homeactive = true;
    //         workactive = false;
    //         aboutactive = false;
    //     };
    // });

    //HOME/WORK/ABOUT BUTTONS - RUDIMENTARY --------------------------------------------

    $('#homebutton').click(function() {
        $('#home_page').show();
        $('#work_page').hide();
        $('#about_page').hide();
        $('.project').hide()

        $('#homebutton_grey').fadeOut(300);
        $('#homebutton_green').fadeIn(300);
        $('#aboutbutton').css('color','#333');
        $('#workbutton').css('color','#333');
    });

    $('#workbutton').click(function() {
        $('#home_page').hide();
        $('#work_page').show();
        $('#work_container').show();
        $('#about_page').hide();
        $('.project').hide()

        $(this).css('color','#66cc33');
        $('#aboutbutton').css('color','#333');
        $('#homebutton_green').fadeOut(300);
        $('#homebutton_grey').fadeIn(300);
    });

    $('#aboutbutton').click(function() {
        $('#home_page').hide();
        $('#work_page').hide();
        $('#about_page').show();
        $('.project').hide();

        $(this).css('color','#66cc33');
        $('#workbutton').css('color','#333');
        $('#homebutton_green').fadeOut(300);
        $('#homebutton_grey').fadeIn(300);

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

    // SCROLL UP BUTTON -------------------------------------------------------------
    // $('#about_upbutton').click(function() {
    //     $('#about_container').animate({
    //        scrollTop: 0
    //     }, 'slow');
    //     $(this).delay(1000).fadeOut(300);
    // });

    // $('#about_container').bind('scroll', function()
    // {
    //     if($(this).scrollTop() + 
    //        $(this).innerHeight()
    //        >= $(this)[0].scrollHeight)
    //     {
    //         $('#about_upbutton').css('bottom','-100px').show(0).animate({'bottom':'20px'},300).delay(2000).animate({'bottom':'-100px'},300);
    //     }
    // });

    // $('#work_upbutton').click(function() {
    //     $('#work_container').animate({
    //        scrollTop: 0
    //     }, 'slow');
    //     $(this).delay(1000).fadeOut(300);
    // });

    // $('#work_container').bind('scroll', function()
    // {
    //     if($(this).scrollTop() + 
    //        $(this).innerHeight()
    //        >= $(this)[0].scrollHeight)
    //     {
    //         $('#work_upbutton').css('bottom','-100px').show(0).animate({'bottom':'20px'},300).delay(2000).animate({'bottom':'-100px'},300);
    //     }
    // });

    // SCROLL UP BUTTON - RUDIMENTARY -----------------------------------------------

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

});