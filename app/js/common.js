$(function() {
	$(document).ready(function(){
  	$(".carousel-services").owlCarousel();
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			800: {
				items: 2,
			},
			1100: {
				items: 3,
			}
		}
	}).on('changed.owl.carousel', function() {
		carouselService();
	});

	$('.partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		}
	});


	/*$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.top').addClass("active");
		} else {
			$('.top').removeClass("active");
		};
	});

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css("display", "flex").hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});


