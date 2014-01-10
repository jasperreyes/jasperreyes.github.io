//Randomizer that accounts for browser size----------------------------------------
$(document).ready(function(){
    var topDist = Math.random()*(window.innerHeight-(860/2));
    var topPx = topDist.toString() + "px";
    console.log(topDist);
    console.log(topPx);
    $('#level1').css("top", topPx);
    var rightDist = Math.random()*(window.innerWidth-(860/2));
    console.log(rightDist);
    var rightPx = rightDist.toString() + "px";
    console.log(rightPx);
    $('#level1').css("right", rightPx);
});


// 1	000066
// 2	000099
// 3	0000CC
// 4	3300CC
// 5	6600CC
// 6	9900CC
// 7	CC00CC
// 8	CC0099
// 9	CC0066
// 10	CC0033
// 11	CC0000
// 12	FF0000

$(document).ready(function() {
	$('#level1').mouseenter(function() {
		$('#container').css('background-color','#000066');
	});
	$('#level1').mouseleave(function() {
		$('#container').css('background-color','#000066');
	}); 
	$('#level2').mouseenter(function() {
		$('#container').css('background-color','#000099');
	});
	$('#level2').mouseleave(function() {
		$('#container').css('background-color','#000066');
	});
	$('#level3').mouseenter(function() {
		$('#container').css('background-color','#0000CC');
	});
	$('#level3').mouseleave(function() {
		$('#container').css('background-color','#000099');
	});
	$('#level4').mouseenter(function() {
		$('#container').css('background-color','#3300CC');
	});
	$('#level4').mouseleave(function() {
		$('#container').css('background-color','#0000CC');
	});
	$('#level5').mouseenter(function() {
		$('#container').css('background-color','#6600CC');
	});
	$('#level5').mouseleave(function() {
		$('#container').css('background-color','#3300CC');
	});
	$('#level6').mouseenter(function() {
		$('#container').css('background-color','#9900CC');
	});
	$('#level6').mouseleave(function() {
		$('#container').css('background-color','#6600CC');
	});
	$('#level7').mouseenter(function() {
		$('#container').css('background-color','#CC00CC');
	});
	$('#level7').mouseleave(function() {
		$('#container').css('background-color','#9900CC');
	});
	$('#level8').mouseenter(function() {
		$('#container').css('background-color','#CC0099');
	});
	$('#level8').mouseleave(function() {
		$('#container').css('background-color','#CC00CC');
	});
	$('#level9').mouseenter(function() {
		$('#container').css('background-color','#CC0066');
	});
	$('#level9').mouseleave(function() {
		$('#container').css('background-color','#CC0099');
	});
	$('#level10').mouseenter(function() {
		$('#container').css('background-color','#CC0033');
	});
	$('#level10').mouseleave(function() {
		$('#container').css('background-color','#CC0066');
	});
	$('#level11').mouseenter(function() {
		$('#container').css('background-color','#CC0000');
	});
	$('#level11').mouseleave(function() {
		$('#container').css('background-color','#CC0033');
	});
	$('#level12').mouseenter(function() {
		$('#container').css('background-color','#FF0000');
	});
	$('#level12').mouseleave(function() {
		$('#container').css('background-color','#CC0000');
	});
});

