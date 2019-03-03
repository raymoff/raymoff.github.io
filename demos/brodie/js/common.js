$(function() {

  // Custom JS
  

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

});
