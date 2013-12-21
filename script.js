//navbar menu ---------------------------------------

$(document).ready(function() {
	$('#webbox').mouseenter(function(){
		$('#analogcover').fadeOut('fast');
        $('#photocover').fadeOut('fast');
	});

	$('#webbox').mouseleave(function() {
        $('#analogcover').fadeIn('fast');
        $('#photocover').fadeIn('fast');
	});

    $('#analogbox').hover(function(){
        $('#webcover').animate({opacity: "0.0"}, 300);
        $('#photocover').animate({opacity: "0.0"}, 300);
    });

    $('#analogbox').mouseleave(function() {
        $('#webcover').animate({opacity: "1.0"}, 200);
        $('#photocover').animate({opacity: "1.0"}, 200);
    });

    $('#photobox').mouseenter(function(){
        $('#webcover').animate({opacity: "0.0"}, 300);
        $('#analogcover').animate({opacity: "0.0"}, 300);
    });

    $('#photobox').mouseleave(function() {
        $('#webcover').animate({opacity: "1.0"}, 200);
        $('#analogcover').animate({opacity: "1.0"}, 200);

    });


 });


//scrollbutton --------------------------------------
var amount = '';

function scroll() {
    $('.imagecontainer').animate({
        scrollLeft: amount
    }, 100, 'linear',function() {
        if (amount != '') {
            scroll();
        }
    });
}
$('.scrollrightbutton').hover(function() {
    amount = '+=20';
    scroll();
}, function() {
    amount = '';
});
$('.scrollleftbutton').hover(function() {
    amount = '-=20';
    scroll();
}, function() {
    amount = '';
});
