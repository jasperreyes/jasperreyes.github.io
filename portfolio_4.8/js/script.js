$(document).ready(function(){

    //INITIAL SETUP -------------------------------------------------------------
    $('#home_page').show();
    $('#work_page').hide();
    $('#about_page').hide();

    $('#home_jasperbackground').hide();
    $('#home_chicagobackground').hide();

    $('#work_navbar_container').hide();
    $('#about_navbar_container').hide();

    $('#project_hydratile').hide();
    $('#project_kenkyo').hide();
    $('#project_people').hide();
    $('#project_places').hide();
    $('#project_things').hide();
    $('#project_karan').hide();


    //NAVBAR LOGO MOUSEOVER ANIMATIONS
    $('#work_homebutton').mouseenter(function() {
        $('.homebutton_grey').fadeOut(300);
    });
    $('#work_homebutton').mouseleave(function() {
        $('.homebutton_grey').fadeIn(300);
    });
    $('#about_homebutton').mouseenter(function() {
        $('.homebutton_grey').fadeOut(300);
    });
    $('#about_homebutton').mouseleave(function() {
        $('.homebutton_grey').fadeIn(300);
    });


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

    $('.workbutton').click(function()
    {
        $('#home_navbar_container').hide();
        $('#about_navbar_container').hide();
        $('#work_navbar_container').show();

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
            $('#work_container').fadeIn(300);
        }

    });

    $('.aboutbutton').click(function()
    {

        $('#home_navbar_container').hide();
        $('#about_navbar_container').show();
        $('#work_navbar_container').hide();

        if (homeactive)
        {
            $('#home_page').animate({'left':'100%'},300).fadeOut(300).delay(300).hide(0);
            $('#about_page').css('left','-100%').show(0).animate({'left':'0%'},300);
        };

        if (workactive)
        {
            $('#work_page').animate({'left':'100%'},300).delay(300).hide(0);
            $('.project').fadeOut(300);
            $('#about_page').css('left','-100%').show(0).animate({'left':'0%'},300);
        };

        homeactive = false;
        workactive = false;
        aboutactive = true;

    });

    $('.homebutton').click(function()
    {
        $('#home_navbar_container').show();
        $('#about_navbar_container').hide();
        $('#work_navbar_container').hide();

        if (homeactive)
        {
            $('#about_page').noop();
            $('#work_page').noop();
            $('#home_page').noop();
        };

        if (workactive)
        {
            $('#work_page').animate({'left':'100%'},300).delay(300).hide(0);
            $('.project').fadeOut(300);
            $('#home_page').css('left','-100%').show(0).animate({'left':'0%'},300);

        };

        if (aboutactive)
        {
            $('#about_page').animate({'left':'-100%'},300).delay(300).hide(0);
            $('#home_page').css('left','100%').show(0).animate({'left':'0%'},300);
        };

        homeactive = true;
        workactive = false;
        aboutactive = false;

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
    $('.work_thumbnail').click(function() {
        $('#work_container').fadeOut(300);
        $('.project_exitbutton').delay(1000).animate({'bottom':'20px'},300);
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

    $('#work_thumbnail_places').click(function() {
        $('#project_places').fadeIn(300);
    });

    $('#work_thumbnail_things').click(function() {
        $('#project_things').fadeIn(300);
    });


    //EXIT BUTTON -------------------------------------------------------------
    $('.project_exitbutton').click(function(){
        $('.project').fadeOut(300);
        $('#work_container').fadeIn(300);
        $('.project_exitbutton').animate({'bottom':'-50px'},300);

    });


    //ESCAPE / DELETE KEYPRESS -------------------------------------------------------------
    if (workactive = true)
    {
        $(document).keyup(function(e) {
            if (workactive = true)
            {
                if (e.keyCode == 27)
                { 
                    $('.project').fadeOut(200);
                    $('#work_container').fadeIn(300);
                    $('.project_exitbutton').animate({'bottom':'-50px'},300);

                }; 
                if (e.keyCode == 8)
                { 
                    $('.project').fadeOut(200);
                    $('#work_container').fadeIn(300);
                    $('.project_exitbutton').animate({'bottom':'-50px'},300);

                };  
            };
        });
    };


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

    //LAZYLOAD -----------------------------------------------
    $(function() {
        $("img.lazy").lazyload(
        {
            placeholder : "./images/loading.gif",
            queue_size : "whole images count"
        });

        $("img.lazy").lazyload(
        { container: $("#project_hydratile_container") });
        $("img.lazy").lazyload(
        { container: $("#project_people_container") });
        $("img.lazy").lazyload(
        { container: $("#project_places_container") });
        $("img.lazy").lazyload(
        { container: $("#project_things_container") });
        $("img.lazy").lazyload(
        { container: $("#project_hydratile_container") });
        $("img.lazy").lazyload(
        { container: $("#project_2013_container") });
    });
});