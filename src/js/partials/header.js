$(document).ready(function () {
	$('.header__burger').click(function () {
		$(this).toggleClass('open');
		$('.header__menu--mobile').toggleClass('header__menu--show');
	});

	anchorScroll($('.anchor'));
	anchorScroll($('.js-to-trends'));

	function anchorScroll(e) {
		e.click(function () {
			if (window.matchMedia('(max-width: 1023px)').matches) {
				hideMenu();
				$('.header__burger').removeClass('open');
			}
			link = $(this).attr('href');
			to = $(link).offset().top - 50;
			$('body, html').animate({
				scrollTop: to
			}, 800);
		});
	}

	function hideMenu() {
		$('.header__menu--mobile').removeClass('header__menu--show');
	}
});