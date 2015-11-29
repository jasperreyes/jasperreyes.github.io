//SLIDES ONE PAGE IN AND ANOTHER OUT SIMULTANEOUSLY
$(document).ready(function() {
	$('#greenshit').click(function(){
    	$('#greencontainer').animate({'left':'0%'},500);
		$('#greencontainer').show();
    	$('#redcontainer').animate({'left':'100%'},500);
		$('#redcontainer').delay(500).hide(0);
    	$('#bluecontainer').animate({'left':'200%'},500);
		$('#bluecontainer').delay(500).hide(0);
    });
	$('#redshit').click(function(){
    	$('#greencontainer').animate({'left':'-100%'},500);
		$('#greencontainer').delay(500).hide(0);
    	$('#redcontainer').animate({'left':'0%'},500);
		$('#redcontainer').show();
    	$('#bluecontainer').animate({'left':'100%'},500);
		$('#bluecontainer').delay(500).hide(0);
    });
	$('#blueshit').click(function(){
    	$('#greencontainer').animate({'left':'-200%'},500);
		$('#greencontainer').delay(500).hide(0);
    	$('#redcontainer').animate({'left':'-100%'}, 500);
 		$('#redcontainer').delay(500).hide(0);   	
    	$('#bluecontainer').animate({'left':'0%'},500);
		$('#bluecontainer').show();
    });
});

//WORKS FOR TWO VARIABLES
// $(document).ready(function() {
// 	$('#redshit').click(function(){    
// 	    $('#greencontainer').fadeOut('fast', function(){
// 	        $('#redcontainer').fadeIn('fast');
// 	    });
// 	});
// 	$('#greenshit').click(function(){    
// 	    $('#redcontainer').fadeOut('fast', function(){
// 	        $('#greencontainer').fadeIn('fast');
// 	    });
// 	});
// });