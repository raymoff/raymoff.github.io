$(function() {

	// FilpClock
	var clock;
	clock = $('.clock').FlipClock({
		clockFace: 'DailyCounter',
		autoStart: true,
		callbacks: {
			stop: function() {
				$('message').html('The conference is going on!');
			}
		}
	});

	var dt = 'January 06 2019 00:00:00';
	var first = new Date(dt);
	var last = Date.now();
	var remaining = first - last;
	remaining /= 1000;

	clock.setTime(remaining);
	clock.setCountdown(true);
	clock.start();



	$('.toggle-mnu').click(function() {
		$(this).toggleClass('on');
		$('.my-menu__nav').slideToggle();
	});

	// Stop image drag
  $("img, a").on("dragstart", function (event) {
		event.preventDefault();
	});

		//Chrome Smooth Scroll
		try {
			$.browserSelector();
			if($("html").hasClass("chrome")) {
				$.smoothScroll();
			}
		} catch(err) {
			
		};

	// Smooth scroll to id
	let scroll = new SmoothScroll('a[data-scroll]');
});
