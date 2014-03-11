jQuery(document).ready(function(){

    // BG VIDEO SCALING
    $('video#bgvideo').on('loadedmetadata', scaleVideo);

    $(window).on('resize', scaleVideo);

    function scaleVideo() {

        // GETS WINDOW HEIGHT AND WIDTH
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        // GETS VIDEO HEIGHT AND WIDTH
        var videoHeight = $('video#bgvideo')[0].videoHeight;
        var videoWidth = $('video#bgvideo')[0].videoWidth;

        // GETS SCALE FACTORS
        var heightScaleFactor = windowHeight / videoHeight;
        var widthScaleFactor = windowWidth / videoWidth;


        // GETS HIGHEST SCALE FACTOR
        if (widthScaleFactor > heightScaleFactor)
        {
            var scale = widthScaleFactor;
        }
        
        else
        {
            var scale = heightScaleFactor;
        }

        var scaledVideoHeight = videoHeight * scale;
        var scaledVideoWidth = videoWidth * scale;

        $('video#bgvideo').height(scaledVideoHeight);
        $('video#bgvideo').width(scaledVideoWidth);
    };


    $('#bgimage').hide();
    $('#site_container').hide();
    $('#navbar').hide();


    $('#nextbuttonA').click(function() {
        $('#landingPageA').animate({'top':'-100%'},300).hide(300);
        $(this).hide();
    });

    $('#nextbuttonB').click(function() {
        $('#landingPageB').animate({'top':'-100%'},300).hide(300);
        $('#navbar').css('top','-60px').show();
        $('#navbar').delay(300).animate({'top':'0px'},300);
        $('#site_container').delay(300).fadeIn(100);
    });

    $('#navbar_logo').click(function() {
        location.replace(location.pathname)
    });

    $('#menubutton').click(function() {
        $('#navbar_contents').toggle().css('visibility','visible');
    });

    $('#navbar_contents li').click(function() {
        $('#navbar_contents').hide();
    });


    // DETECTS TOUCH SCREEN DEVICE TO DISPLAY THUMBNAIL TITLE AND DESCRIPTION -----------------------------------------------
    function is_touch_device() {
     return (('ontouchstart' in window)
          || (navigator.MaxTouchPoints > 0)
          || (navigator.msMaxTouchPoints > 0));
    }
     
    if (is_touch_device()) {
        $('#bgvideo').hide();
        $('#bgimage').show();
    }


});