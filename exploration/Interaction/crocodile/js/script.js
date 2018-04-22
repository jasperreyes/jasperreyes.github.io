$(document).ready(function() {
	
	var randomValue;
	
	function getRandomValue() {
		randomValue = Math.floor(Math.random() * 3);
	}	
	
	function resetBtns() {
		$('.btn').removeClass('trigger');
	}
	
	function assignRandomValue() {
		getRandomValue();
		console.log('Random value is ' + randomValue);
		
		if (randomValue === 0) {
			$('#btn1').addClass('trigger');
		}
		
		else if (randomValue === 1) {
			$('#btn2').addClass('trigger');
		}
		
		else {
			$('#btn3').addClass('trigger');
		}
	}
	
	$('#assignBtn').click(function() {
		assignRandomValue();
	});
	
	$('#resetBtn').click(function() {
		resetBtns();
	});
	
});