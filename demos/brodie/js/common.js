$(function() {

  // Custom JS

  // Preloader
  setTimeout(function() {
    $('body').addClass('loaded');
  });

  // Table search
  $('#toolsInput').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('#toolsTable tr').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
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

});
