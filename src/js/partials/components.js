$(document).ready(function () {
	$('.first-screen__share').fancybox({
		touch: false,
		scrolling: 'no',
		beforeShow: function(){
			$("body").css({'overflow-y':'hidden'});
		},
		afterClose: function(){
			$("body").css({'overflow-y':'visible'});
		},
		btnTpl : {
			smallBtn : '<div data-fancybox-close class="popup-share__close"></div>'
		}
	});
});