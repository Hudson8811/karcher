$(document).ready(function () {
	$('.first-screen__share').mouseenter(function () {
		$('.first-screen__share-inner').addClass('first-screen__share-inner-visible');
	});

	$('.first-screen__share-inner').mouseleave(function () {
		$('.first-screen__share-inner').removeClass('first-screen__share-inner-visible');
	});
});