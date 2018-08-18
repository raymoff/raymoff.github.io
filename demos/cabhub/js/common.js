$(function() {
	
	$.ajax({
    url: '/post',
    localCache: true,        // Required. Either a boolean, in which case localStorage will be used, or
                             // an object that implements the Storage interface.

    cacheTTL: 1200,           // Optional. In hours. Can be used with float to indicate part of an hour, e.g. 0.5.
    cacheKey: 'post',      // optional.
    isCacheValid: function () {  // optional.
        return true;
    },
    isResponseValid: function (data, status, jqXHR) {  // optional.
        return data.code === '0';
    },
    thenResponse: function (data, status, jqXHR) { // optional, only in versions 2.x.x+
        // Alter data in whatever way you want it altered before it gets cached.
        data.code = 101;
        return data;
    }
}).done(function (response) {
    // The response is available here.
});


	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 65) {
			$(".main-menu").css("background", "#000");
		}
		else{
			$(".main-menu").css("background", "transparent");  	
		}
	});
	
	$('.toggle-mnu').click(function() {
		$(this).toggleClass('on');
		$('.main-menu__nav').slideToggle();
	});
	
	// Equal height 
	$('.s-tariff .card').equalHeights();
	
	// Stop image drag
	$("img, a").on("dragstart", function (event) {
		event.preventDefault();
	});
	
	
	
	// Change buttons classes on card hover
	$('#card1').hover(
		function() {
			$('#card-button1').removeClass('buttons--yellow').addClass('buttons--dark');
		},
		function() {
			$('#card-button1').removeClass('buttons--dark').addClass('buttons--yellow');
		}
	);
	
	$('#card2').hover(
		function() {
			$('#card-button2').removeClass('buttons--yellow').addClass('buttons--dark');
		},
		function() {
			$('#card-button2').removeClass('buttons--dark').addClass('buttons--yellow');
		}
	);
	
	$('#card3').hover(
		function() {
			$('#card-button3').removeClass('buttons--yellow').addClass('buttons--dark');
		},
		function() {
			$('#card-button3').removeClass('buttons--dark').addClass('buttons--yellow');
		}
	);
	
	// wow
	wow = new WOW(
		{
		offset: 20,
		mobile: false,
		live: true
	}
	)
	wow.init();


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
