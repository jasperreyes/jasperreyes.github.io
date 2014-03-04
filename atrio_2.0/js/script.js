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


    $('#landingPageTextBox').hide();

    $('#landingPage img').click(function() {
        $('#landingPage img').animate({'top':'-150%'},300).hide(400);
        $('#landingPageTextBox').css('bottom','-100%').show(0);
        $('#landingPageTextBox').animate({'bottom':'0%'},300);
    });


    $('#navbar').css('top','-60px');
    $('#landingPageTextBox').click(function() {
        $('#landingPage').animate({'top':'-100%'},300).hide(400);
        $('#navbar').delay(600).animate({'top':'0px'},300);
    });


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