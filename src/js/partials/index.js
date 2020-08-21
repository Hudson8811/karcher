$(document).ready(function () {
	if (window.matchMedia('(min-width: 1024px)').matches) {
		$('.header__menu-link').click(function () {
			if (!$(this).hasClass('header__menu-link--active')) {
				$('.header__menu-link').removeClass('header__menu-link--active');
				$(this).addClass('header__menu-link--active');
				$('.js-fade').fadeOut(200);
				$('.js-fade').eq($(this).parent('li').index()).fadeIn(400);
			}
		});

		$('.js-to-trends').click(function () {
			$('.header__menu-link').removeClass('header__menu-link--active');
			$('.header__menu-link').eq(1).addClass('header__menu-link--active');
			$('.js-fade').fadeOut(200);
			$('.js-fade').eq(1).fadeIn(400);
		});
	}

	$('.first-screen__share').mouseenter(function () {
		$('.first-screen__share-inner').addClass('first-screen__share-inner-visible');
	});

	$('.first-screen__share-inner').mouseleave(function () {
		$('.first-screen__share-inner').removeClass('first-screen__share-inner-visible');
	});
});