$(function() {

	// Custom JS
  $("img, a").on("dragstart", function (event) {
		event.preventDefault();
	});

	$(window).on("load",function(){
		$("a[rel='m_PageScroll2id']").mPageScroll2id();
	});

});
