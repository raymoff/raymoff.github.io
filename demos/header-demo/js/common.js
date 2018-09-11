$(function() {

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
