$(document).ready(function () {
	$('.header__burger').click(function () {
		$(this).toggleClass('open');
		$('.header__menu--mobile').toggleClass('header__menu--show');
		$('body').toggleClass('body-scroll-lock');
	});

	anchorScroll($('.anchor'));

	function anchorScroll(e) {
		e.click(function () {
			if (window.matchMedia('(max-width: 1023px)').matches) {
				hideMenu();
			}
			link = $(this).attr('href');
			to = $(link).offset().top;
			$('body, html').animate({
				scrollTop: to
			}, 800);
		});
	}

	function hideMenu() {
		$('.header__menu--mobile').removeClass('header__menu--show');
		$('body').removeClass('body-scroll-lock');
	}
});