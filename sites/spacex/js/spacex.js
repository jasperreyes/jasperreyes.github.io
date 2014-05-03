$(document).ready(function() {



	// SIDEBAR BEHAVIOR
	$(function() {
		$('#sidebar_container').click(function() {
		 	$('.sidebar_closed').switchClass('sidebar_closed', 'sidebar_open', 100);
		 });
		$('#sidebar_container').click(function() {
		 	 $('.sidebar_open').switchClass('sidebar_open', 'sidebar_closed', 100);
		});
	});

	$('#tab').mouseenter(function() {
		$('#tab').animate({'color':'#FFF'},100).animate({'color':'#006699'},100);
	});

	$('#sidebar_links a').mouseenter(function() {
		$(this).animate({'color':'#FFF'},100).animate({'color':'#006699'},100);
	});	
	// END SIDEBAR BEHAVIOR

	//ANIMATION 
	$("#support").addClass("support_rotate");

	 $('#ground').delay(3000).animate({'bottom':'-100%'},2000,'easeInQuad');
	 $('.tower_foreground').delay(3000).animate({'bottom':'-100%'},1700,'easeInQuad');
	 $('#support').delay(3000).animate({'bottom':'-100%'},1850,'easeInQuad');
	 $('.tower_background').delay(3000).animate({'bottom':'-100%'},2000,'easeInQuad');

	$('#sky').animate({'backgroundColor':'#000'}, 17000);

	// $('#stage2').delay(7000).animate({'margin-bottom':'1000%'},4000, 'easeOutQuart');

	$('#stage1_fire_center').hide();
	$('#stage1_fire').delay(1000).fadeIn(2000, 'easeOutCirc');

	$('#stage1_fire_center').show();
	$(function(){
	    var images = ['#fire5', '#fire6'],
	         imgIx = 0;

	    (function nextImage(){
	        $(images[imgIx++] || images[imgIx = 0, imgIx++]).fadeOut(20).delay(20).fadeIn(20).delay(20).fadeOut(20, nextImage);
	    })();
	});

	$('#smoke').hide();
	$('#smoke').delay(1500).fadeIn(300).animate({'left':'-500%'},2000, 'easeOutBack').fadeOut(300);
	
	//$('#rocket_innercontainer').delay(5000).animate({'bottom':'0%'}, 2000).animate({'bottom':'-20%'},2000).animate({'bottom':'150%'},2000);
	$('#stage2').css('bottom','calc(-32% - 67px').delay(5000).animate({'bottom':'-17%'}, 2000).animate({'bottom':'-47%'},2000).animate({'bottom':'150%'},4000);
	$('#stage1').css('bottom','-32%').delay(5000).animate({'bottom':'-10%'}, 2000).animate({'bottom':'-40%'},2000).animate({'bottom':'-150%'},4000);


	$('#bigcloud1').delay(6000).animate({'top':'100%'},3000, 'linear');
	$('#bigcloud2').delay(4000).animate({'top':'100%'},4000, 'linear');
	$('#bigcloud3').delay(4250).animate({'top':'100%'},3000, 'linear');
	$('#bigcloud4').delay(5500).animate({'top':'100%'},4000, 'linear');
	$('#bigcloud5').delay(5750).animate({'top':'100%'},3000, 'linear');
	$('#bigcloud6').delay(4500).animate({'top':'100%'},4000, 'linear');
	$('#bigcloud7').delay(5250).animate({'top':'100%'},3000, 'linear');
	$('#bigcloud8').delay(4750).animate({'top':'100%'},4000, 'linear');
	$('#bigcloud9').delay(6500).animate({'top':'100%'},3000, 'linear');
	$('#bigcloud10').delay(3750).animate({'top':'100%'},4000, 'linear');

	$('#smallcloud1').delay(500).animate({'top':'100%'},9000, 'linear');
	$('#smallcloud2').delay(1000).animate({'top':'100%'},7000, 'linear');
	$('#smallcloud3').delay(0).animate({'top':'100%'},7000, 'linear');
	$('#smallcloud4').delay(1500).animate({'top':'100%'},9000, 'linear');
	$('#smallcloud5').delay(500).animate({'top':'100%'},7000, 'linear');
	$('#smallcloud6').delay(2500).animate({'top':'100%'},9000, 'linear');
	$('#smallcloud7').delay(1000).animate({'top':'100%'},7000, 'linear');
	$('#smallcloud8').delay(2000).animate({'top':'100%'},9000, 'linear');
	$('#smallcloud9').delay(2500).animate({'top':'100%'},7000, 'linear');
	$('#smallcloud10').delay(0).animate({'top':'100%'},9000, 'linear');

	$('#centertextbox p').delay(10000).animate({'opacity':'1'}, 2000);

	$('.star').hide().delay(8000).fadeIn(3000);

	$('#star1').delay(1000).fadeOut(1000).delay(1000).fadeIn(2000).delay(4000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star2').delay(1000).fadeOut(1000).delay(1000).fadeIn(2000).delay(5000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star3').delay(1500).fadeOut(1000).delay(1000).fadeIn(2000).delay(4500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star4').delay(2000).fadeOut(1000).delay(1000).fadeIn(2000).delay(5000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star5').delay(2500).fadeOut(1000).delay(1000).fadeIn(2000).delay(5500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star6').delay(3000).fadeOut(1000).delay(1000).fadeIn(2000).delay(6000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star7').delay(3500).fadeOut(1000).delay(1000).fadeIn(2000).delay(6500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star8').delay(4000).fadeOut(1000).delay(1000).fadeIn(2000).delay(7000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star9').delay(4500).fadeOut(1000).delay(1000).fadeIn(2000).delay(7500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star10').delay(4000).fadeOut(1000).delay(1000).fadeIn(2000).delay(7000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star11').delay(3500).fadeOut(1000).delay(1000).fadeIn(2000).delay(6500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star12').delay(3000).fadeOut(1000).delay(1000).fadeIn(2000).delay(6000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star13').delay(2500).fadeOut(1000).delay(1000).fadeIn(2000).delay(5500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star14').delay(2000).fadeOut(1000).delay(1000).fadeIn(2000).delay(5000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star15').delay(1500).fadeOut(1000).delay(1000).fadeIn(2000).delay(4500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star16').delay(1000).fadeOut(1000).delay(1000).fadeIn(2000).delay(4000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star17').delay(1000).fadeOut(1000).delay(1000).fadeIn(2000).delay(4000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star18').delay(1000).fadeOut(1000).delay(1000).fadeIn(2000).delay(5000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star19').delay(1500).fadeOut(1000).delay(1000).fadeIn(2000).delay(5500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star20').delay(2000).fadeOut(1000).delay(1000).fadeIn(2000).delay(6000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star21').delay(2500).fadeOut(1000).delay(1000).fadeIn(2000).delay(6500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star22').delay(3000).fadeOut(1000).delay(1000).fadeIn(2000).delay(7000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star23').delay(3500).fadeOut(1000).delay(1000).fadeIn(2000).delay(7500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star24').delay(4000).fadeOut(1000).delay(1000).fadeIn(2000).delay(8000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star25').delay(4500).fadeOut(1000).delay(1000).fadeIn(2000).delay(8500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star26').delay(4000).fadeOut(1000).delay(1000).fadeIn(2000).delay(7000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star27').delay(3500).fadeOut(1000).delay(1000).fadeIn(2000).delay(6500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star28').delay(3000).fadeOut(1000).delay(1000).fadeIn(2000).delay(6000).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star29').delay(2500).fadeOut(1000).delay(1000).fadeIn(2000).delay(5500).fadeOut(1000).delay(1000).fadeIn(2000);
	$('#star30').delay(2000).fadeOut(1000).delay(1000).fadeIn(2000).delay(5000).fadeOut(1000).delay(1000).fadeIn(2000);
	// END ANIMATION

	// $('#smoke').hide();
	// $('.star').hide();
	// $('#support').hide();
	// $('.tower_foreground').hide();
	// $('.tower_background').hide();

});