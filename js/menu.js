$(document).ready(function(){
	$("#menu").click(function() {
    $("#topnav").slideToggle("slow");
  });

  $(window).resize(function() {
    if (window.innerWidth > 600) {
      $("#topnav").removeAttr("style");
    }
  });
});