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
	} else {

	}
});