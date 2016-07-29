$(document).ready(function(){

var images = $('ul.imgs li');
var lastElem = images.length-1;
var target;

images.first().addClass('active');
images.hide().first().show();

function sliderResponse(target){
	images.fadeOut(500).eq(target).fadeIn(500);
	images.removeClass('active').eq(target).addClass('active');
}

	//prev button
	$('.next').click(function(){
		target = $("ul.imgs li.active").index();
		target === lastElem ? target = 0 : target = target + 1;
		sliderResponse(target);
		resetTiming();
	});

	//next button
	$('.prev').click(function(){
		target = $("ul.imgs li.active").index();
		lastElem = images.length -1;
		target === 0 ? target = lastElem : target = target -1;
		sliderResponse(target);
		resetTiming();
	});

	function sliderTiming() {
    target = $('ul.imgs li.active').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
}

	var timingRun = setInterval(function() { sliderTiming(); },5000);
	function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); },5000);
}
});

