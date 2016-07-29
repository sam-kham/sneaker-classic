$(document).ready(function() {
   $(document).on("scroll", scroll, change);

	$('a[href^="#"]').on("click", function(e){
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function(){
			$(this).removeClass('active');
		})

		$(this).addClass('active');
		var target = this.hash;
		var nav = target;
		$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top + 2
		}, 600, 'swing', function(){
			window.location.hash = target;
			$(document).on("scroll", scroll, change);
		});
	});
});

function change() {
    if($(document).scrollTop() > 100) {
        $("#nav").addClass("active");
    } else {
       $("#nav").removeClass("active");
    }
}

function scroll(event) {
   	var position = $(document).scrollTop(); //scroll position

	$('#nav a').each(function(){ //for each element
   		var current = $(this);
   		var element = $(current.attr('href'));
   		if (element.position().top <= position && element.position().top + element.height() > position)
   		{
   			$("#nav ul li a").removeClass("active");
			current.addClass("active");
   		} else {
   			current.removeClass("active");
   		}
	});
}




