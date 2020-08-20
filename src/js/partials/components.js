$(document).ready(function () {
	popupInit($('.first-screen__share'));
	popupInit($('.first-screen__circle-wrapper--press'));
	/*$('.first-screen__share').fancybox({
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

	$('.first-screen__circle-wrapper--press')*/

	$('.popup-share__refresh').click(function () {
		$('.popup-share__card:visible').hide().siblings().eq(Math.floor(Math.random() * 6)).css('display', 'flex');
	});

	function popupInit(el) {
		el.fancybox({
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
	}
});