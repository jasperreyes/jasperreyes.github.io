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



$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});

$('#myScrollspy').on('activate.bs.scrollspy', function () {
  alert('itsactive!');
});


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


    // $('#logo_blue').hide();

 //    $('#logo').mouseenter(function() {
 //        $('#logo_white').hide();
 //        $('#logo_blue').show();
 //    });
 //    $('#logo').mouseleave(function() {
 //        $('#logo_white').show();
 //        $('#logo_blue').hide();
 //    });

 //    $('#homepage_textbox p').hide();
 //    $('#homepage_textbox img').hide();
 //    $('#homepage_textbox img').delay(1000).fadeIn(300);
    
 //    $('#homepage_textbox img').click(function() {
 //     $('#homepage_textbox img').fadeOut(300);
 //     $('#homepage_textbox p').delay(300).fadeIn(300);
 //    });

 //    $('#nextbutton').click(function() {
 //        $('#homepage').animate({'top':'-100vh'},300);
 //        $('#homepage').delay(300).hide(0);
 //    });

});