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
	let scroll = new SmoothScroll('.smooth-scroll, [data-scroll]');
	
	
	// Isotope
	$('.portfolio-items').isotope ({
		itemSelector: '.work',
		layoutMode: 'fitRows',
		fitRows: {
			gutter: 20
		}
	});

	$('.portfolio-menu ul li').click(function() {
		$('.portfolio-menu ul li').removeClass('active');
		$(this).addClass('active');

		let selector = $(this).attr('data-filter');
		$('.portfolio-items').isotope({
			filter: selector
		});
		return false;
	});


	// Video modal
	let $videoSrc;  
	$('.video-btn').click(function() {
			$videoSrc = $(this).data( "src" );
	});
	console.log($videoSrc);
	
	$('#myModal').on('shown.bs.modal', function (e) {
			
	$("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
	})
		
	$('#myModal').on('hide.bs.modal', function (e) {
			$("#video").attr('src',$videoSrc); 
	});

});

