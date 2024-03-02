$(document).ready(function () {
	//smoothscroll
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");
		      
		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 2800, 'swing', function () {
			window.location.hash = target;
		});
	});

	$('.arrowToUp').fadeOut(0);

    // esconde e mostra o btn to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 160) { // distancia que tem que rolar antes de aparecer
            $('.arrowToUp').fadeIn(250);
        } else {
            $('.arrowToUp').fadeOut(250);
        }
    });
});