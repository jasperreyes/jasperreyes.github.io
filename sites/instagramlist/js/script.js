$(document).ready(function() {

	$('#content_container').scroll(function(){

		//if an hpc is 15px or less from top of content and more than (hpcHeight - headerHeight) from top,
			//add currentHPC class
		//if an hpc is more than hpcHeight*-1 from top, remove currentHPC class

		var distanceFromTop = $('#headerPosting_container2').offset().top;
 		var hpcHeight = $('#headerPosting_container2').height();
 		var iosNavbarHeight = $('#ios_navbar').height();
 		var headerHeight = $('.header').height();

		var currentHPC;


		//set currentHPC
		if ( (distanceFromTop) <= iosNavbarHeight && distanceFromTop > 0)
		{
			$('#headerPosting_container2').addClass('currentHPC');
		}

		if (distanceFromTop > iosNavbarHeight)
		{
			$('#headerPosting_container2').removeClass('currentHPC');
		}

 		// console.log(testVar);
 		console.log(distanceFromTop);
 		// console.log(hpcHeight);

 		//fixes current header and shifts up when not current
 		function headerShift() {

			if (distanceFromTop <= iosNavbarHeight && distanceFromTop > ((hpcHeight - iosNavbarHeight - headerHeight)*-1))
			{
				$('#header2').css('position','fixed');
				$('#header2').css('top', iosNavbarHeight + 'px');
			}
			else if ((distanceFromTop*-1) >= (hpcHeight - headerHeight - iosNavbarHeight))
			{ 
				$('#header2').css('position', 'absolute');
				$('#header2').css('top', (hpcHeight - headerHeight) + 'px');
			}
			else
			{ 
				$('#header2').css('position', 'absolute');
				$('#header2').css('top', '0px');
			}
		}

		headerShift();

	});
});