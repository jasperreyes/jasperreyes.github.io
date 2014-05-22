jQuery(document).ready(function(){

    // INITIAL HIDE
    $('#bgimage').hide();
    $('#site_container').hide();
    $('#navbar').hide();
    // END INTIAL HIDE


    // VIDEO THUMBNAIL BEHAVIOR AND VIDEO LOADING
    $('.video').hide();
    $('.thumbnail', this).on('click', function(ev) {
        $(this).fadeOut(1000);
    });
    $('#thumbnail_ss').on('click', function(ev) {
        $('#video_ss').fadeIn(1000);
        $("#video_ss")[0].src += "&autoplay=1";
        ev.preventDefault();
    });
    $('#thumbnail_lpi').on('click', function(ev) {
        $('#video_lpi').fadeIn(1000);
        $("#video_lpi")[0].src += "&autoplay=1";
        ev.preventDefault();
    });
    $('#thumbnail_mi').on('click', function(ev) {
        $('#video_mi').fadeIn(1000);
        $("#video_mi")[0].src += "&autoplay=1";
        ev.preventDefault();
    });
    // END VIDEO THUMBNAIL BEHAVIOR AND VIDEO LOADING


    // RESPONSIVE FLUID VIDEO SCALING
    $(".video_container").fitVids();
    // END RESPONSIVE FLUID VIDEO SCALING


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
    // END BG VIDEO SCALING


    // DETECTS FIREFOX -----------------------------------------------
        // var FF = (document.getBoxObjectFor != null || window.mozInnerScreenX != null);

        // if (FF) {
        //     document.getElementById("bgvideo").style.display = 'none';
        // }
    // END DETECTS FIREFOX -----------------------------------------------


    // LANDING PAGE NEXT BUTTONS 
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
    // END LANDING PAGE NEXT BUTTONS


    // NAVBAR BEHAVIORS
    $('#navbar_logo').click(function() {
        location.replace(location.pathname)
    });
    $('#menubutton').click(function() {
        $('#mobile_navbar_contents').toggleClass('hidden');
    });
    $('#mobile_navbar_contents li').click(function() {
        $('#mobile_navbar_contents').toggleClass('hidden');
    });
    // END NAVBAR BEHAVIORS 


    // DETECTS TOUCH SCREEN DEVICE
    function is_touch_device() {
     return (('ontouchstart' in window)
          || (navigator.MaxTouchPoints > 0)
          || (navigator.msMaxTouchPoints > 0));
    }
    if (is_touch_device()) {
        $('#bgvideo').hide();
        // $('#bgimage').show();
    }
    // END DETECS TOUCH SCREEN DEVICE
});