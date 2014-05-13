$(document).ready(function() {

	$('#stage1_container').css('bottom','20px');
	$('#stage1_container').delay(1000).animate({'bottom':'200px'},2000,'easeInOutQuad');
	$('#stage1_container').delay(300).animate({'bottom':'-50px'},2000,'easeInOutQuad');
	$('#stage1_container').delay(300).animate({'bottom':'100px'},2000,'easeInOutQuad');
	$('#stage1_container').delay(300).animate({'bottom':'0px'},2000,'easeInOutQuad');
	$('#stage1_container').delay(800).queue(function()
	{
        $(this).addClass('stage1_rotate');
        $(this).dequeue()
    });
	$('#stage1_container').delay(300).animate({'bottom':'-1000px'},2500,'easeInOutQuad');


	$('#stage2_container').css('bottom','520px');
	$('#stage2_container').delay(1000).animate({'bottom':'700px'},2000,'easeInOutQuad');
	$('#stage2_container').delay(300).animate({'bottom':'450px'},2000,'easeInOutQuad');
	$('#stage2_container').delay(300).animate({'bottom':'600px'},2000,'easeInOutQuad');
	$('#stage2_container').delay(300).animate({'bottom':'500px'},2000,'easeInOutQuad');
	$('#stage2_container').delay(300).animate({'bottom':'1000px'},2000,'easeInQuart');

});