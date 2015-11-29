$(document).ready(function()
{
	$('#rocket_full_container').css('bottom','-30%');
	$('#rocket_full_container').animate({'bottom':'30%'},2000);
	$('#rocket_full_container').animate({'bottom':'-40%'},2000);
	$('#rocket_full_container').animate({'bottom':'20%'},2000);
	$('#rocket_full_container').animate({'bottom':'-10%'},2000);
	$('#rocket_full_container').animate({'bottom':'0%'},2000).hide(0);



	$('#stage1_container').css('bottom','-137px');
	$('#stage1_container').delay(1000).animate({'bottom':'143px'},2000,'easeInOutQuad');
	$('#stage1_container').delay(300).animate({'bottom':'-107px'},2000,'easeInOutQuad');
	$('#stage1_container').delay(300).animate({'bottom':'43px'},2000,'easeInOutQuad');
	$('#stage1_container').delay(300).animate({'bottom':'-57px'},2000,'easeInOutQuad');
	$('#stage1_container').delay(800).queue(function()
	{
        $(this).addClass('stage1_rotate');
        $(this).dequeue()
    });
	$('#stage1_container').delay(300).animate({'bottom':'-1000px'},2500,'easeInOutQuad');


	$('#stage2_container').css('bottom','-200px');
	$('#stage2_container').delay(1000).animate({'bottom':'100px'},2000,'easeInOutQuad');
	$('#stage2_container').delay(300).animate({'bottom':'-150px'},2000,'easeInOutQuad');
	$('#stage2_container').delay(300).animate({'bottom':'0px'},2000,'easeInOutQuad');
	$('#stage2_container').delay(300).animate({'bottom':'-100px'},2000,'easeInOutQuad');
	$('#stage2_container').delay(300).animate({'bottom':'1000px'},2000,'easeInQuart');

});