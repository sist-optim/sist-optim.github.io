$(document).ready(function(){
	/* инициализация функций */
	initNav ();

	/* описание функций */

	function initNav (){
		$('.logo').click(function(){
			$('html,body').animate({scrollTop:0},1000);
			return false;
		});
		$('.nav a').click(function(){
			$('.nav .selected').removeClass('selected');
			$(this).parent().addClass('selected');
			$('html,body').animate({
				scrollTop: $('[rel=' + $(this).attr('href') + ']').offset().top-60
			},1000, function(){$('.nav .selected').removeClass('selected');});
			return false;
		});
		$('.product-listing .holder a.button02').click(function(){
			$('html,body').animate({
				scrollTop: $('[rel=' + $(this).attr('href') + ']').offset().top-60
			},300);
			return false;
		});
		$(window).scroll(function(){
			var _titles = [],
				_navitem = [],
				_rel = false;
			$('.nav a').each(function(){
				_titles.push($('[rel='+$(this).attr('href')+']').offset().top);
				_navitem.push($(this).attr('href'));
			});
			for (i = 0; i < _titles.length; i++) {
				if (_titles[i] < $(window).scrollTop() + $(window).height() / 2) {
					_rel = _navitem[i];
				}
			}
			if (_rel) {
				$('.nav .active').removeClass('active');
				$('.nav a[href=' + _rel + ']').parent().addClass('active');
			} else if ($(window).scrollTop() < $(window).height()/2){
				$('.nav .active').removeClass('active');
			}
		});
		$(window).trigger('scroll');
	}
});