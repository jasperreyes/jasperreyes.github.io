$(document).ready(function() {

	$('#navMenuButton').click(function() {
		$('#navMenu').toggleClass('menuInvisible');
	});

	$('#navMenu ul li').click(function() {
		$('#navMenu').addClass('menuInvisible');
	});

	$('#logoContainer').mouseenter(function() {
		$('#logoRed').show();
		$('#logo').hide();
	});
	$('#logoContainer').mouseleave(function() {
		$('#logoRed').hide();
		$('#logo').show();
	});

	// var previousScroll = 0,
	//     headerOrgOffset = $('#navLinks').height();

	// $('nav').height($('#navLinks').height());

	// $(window).scroll(function () {
	//     var currentScroll = $(this).scrollTop();
	//     if (currentScroll > headerOrgOffset) {
	//         if (currentScroll > previousScroll) {
	//             $('nav').animate({'top':'-100px'},300);
	//         } else {
	//             $('nav').animate({'top':'0px'},300);
	//         }
	//     } else {
	//             $('nav').animate({'top':'0px'},300);
	//     }
	//     previousScroll = currentScroll;
	// });
});