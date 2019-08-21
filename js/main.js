$(function () {

	//make a scroll to top button
	var scrollButton = $('.scroll-top');

	$(window).scroll(function () {

		if ($(this).scrollTop() >= 1000) {
			scrollButton.fadeIn(500);
		} else {
			scrollButton.fadeOut(500);
		}
	});

	//click to scroll button to scroll up
	$('.scroll-top').click(function () {
		$('html , body').animate({
			scrollTop: 0
		}, 1000);

	});

	//click on the arrow down to scroll
	$('.content .arrow , .header button').click(function () {

		var navbar = document.querySelector('.navbar');

		$('html, body').animate({

			scrollTop: $(navbar).offset().top

		}, 2000);

	});

	

	//Hire Me Button scroll to contact section
	$('.about .my-info .hire').click(function () {

		var contact = document.querySelector('.contact');

		$('html , body').animate({

			scrollTop: $(contact).offset().top

		}, 1000);

	});

});

//make a preloader
function loading() {
	$('.loading_overlay').fadeOut(1500, function () {

		$('body').css('overflow', 'hidden');

	});
}

// image popup
$('.image-popup-vertical-fit').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	mainClass: 'mfp-img-mobile',
	image: {
		verticalFit: true
	}
	
});

$('.image-popup-fit-width').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	image: {
		verticalFit: false
	}
});

$('.image-popup-no-margins').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	closeBtnInside: false,
	fixedContentPos: true,
	mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	image: {
		verticalFit: true
	},
	zoom: {
		enabled: true,
		duration: 300 // don't foget to change the duration also in CSS
	}
});