$(document).ready(function () {
	if (window.matchMedia('(min-width: 1024px)').matches) {
		new WOW().init();
	}

	popupInit($('.first-screen__circle-wrapper--press'));

	$('.popup-share__refresh').click(function () {
		$('.popup-share__card:visible').hide().siblings().eq(Math.floor(Math.random() * 6)).css('display', 'flex');
	});

	function randomCard(){
		$('.popup-share__card').eq(Math.floor(Math.random() * 6)).css('display', 'flex');
	}

	randomCard();

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

	window.auth = function (data) {
		$.ajax({
			type: "POST",
			url: "/authorize/",
			data: data,
			success: function(data) {
				if (data.length > 0) {
					checkAuth();
				}
			},
			error: function () {
				alert('Ошибка авторизации для продолжения');
			}
		});
	}
	
	function checkAuth() {
		$.ajax({
			type: "POST",
			url: "/get_hashcode/",
			success: function(data) {
				if (JSON.parse(data).hashcode != '' && JSON.parse(data).hashcode != undefined) {
					hash = JSON.parse(data).hashcode;

					$('.popup-share__socials').each(function () {
                        var url = $(this).data('url');
                        url += '&u='+encodeURIComponent(hash);
                        $(this).attr('data-url', url);
                    });
					$('.popup-share__auth').hide();
					$('.popup-share__share').show();
				}
			}
		});
	}
	checkAuth();

	var socialTypes =  {
		"fb": "http://www.facebook.com/share.php?u=",
		"vk": "http://vkontakte.ru/share.php?url=",
		"tw": "https://twitter.com/intent/tweet?url=",
		"ok": "http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl=",
	};

	function getMeta(name) {
		var meta = $('meta[property="og:'+name+'"]');
		return meta.length ? meta.attr('content') : '';
	}

	$('.sharing__button').click(function() {
		var no_sharing = $(this).parent().attr('data-nosharing');
		if (no_sharing) return;

		var socialType;
		for (var name in socialTypes)
			if ($(this).hasClass(name)) { socialType = name; break; }
		if (socialType == undefined) return;

		var url = getMeta('url');
		var title = getMeta('title');
		var description = getMeta('description');
		var image = getMeta('image');

		var parent = $(this).parent();
		var new_url = parent.attr('data-url');
		if (new_url) {
			url = new_url;
			image = '';
		}
		if (url == '') url = window.location.toString();

		var p_desc = parent.attr('data-description');
		if (p_desc) description = p_desc;
		var p_title = parent.attr('data-title');
		if (p_title) title = p_title;
		var p_image = parent.attr('data-image');
		if (p_image) image = p_image;

		var $slink = encodeURIComponent(url);
		switch (socialType) {
			case 'tw':
				$slink += '&text='+encodeURIComponent(title); break;
			case 'vk':
				if (image != '') $slink += '&image='+encodeURIComponent(image);
				if (title != '') $slink += '&title='+encodeURIComponent(title);
				if (description != '') $slink += '&description='+encodeURIComponent(description); break;
			case 'ok':
				if (image != '') $slink += '&st.imageUrl='+encodeURIComponent(image);
				//if (title != '') $slink += '&title='+encodeURIComponent(title);
				if (description != '') $slink += '&st.comments='+encodeURIComponent(description); break;
			case 'fb':
				if (image != '') $slink += '&p[images][0]='+encodeURIComponent(image);
				if (title != '') $slink += '&p[title]='+encodeURIComponent(title);
				if (description != '') $slink += '&p[summary]='+encodeURIComponent(description); break;
		}

		if ($(this).data('mode') == 'nohash'){
			window.open(socialTypes[socialType]+$slink,socialType,'width=500,height=500,resizable=yes,scrollbars=yes,status=yes');
		} else {
			if (hash === '') checkAuth();
			//$slink += '&u='+encodeURIComponent(hash);
			window.open(socialTypes[socialType]+$slink,socialType,'width=500,height=500,resizable=yes,scrollbars=yes,status=yes');
			afterShare(socialType);
		}

	});


	function afterShare(social) {
		$.fancybox.open('<div class="promocode"><div class="promocode__code">Ваш промокод на скидку <span>KarcherMaxim</span></div><div class="promocode__info">Промокод действителен только в официальном магазине <a href="https://www.karcher.ru/ru/" target="_blank">https://www.karcher.ru/ru/</a> до 30.09.2020 и распространяется только на бытовую технику, не суммируется с другими скидками и не распространяется на юридические лица.</div></div>');

		$.ajax({
			type: "POST",
			url: "/new_share/",
			data: { social_share : social },
			success: function(data) {
				console.log('share ok');
			}
		});
	}
});