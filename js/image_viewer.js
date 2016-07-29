$(document).ready(function(){
	$('.photo_trigger').on('click', function(e) {

    e.preventDefault();
    var image_href = $(this).attr('href');
    var slideNum = $('.photo_trigger').index(this);

    if ($('#photobox').length > 0) { //check if exists
      $('#photobox').fadeIn(400);
    } else { //or false

      var photobox = '<div id="photobox"></div>';

      //insert photobox HTML into page
      $('body').append(photobox);

      $('#product').find('.photo_trigger').each(function() {
        var $href = $(this).attr('href');
        $('#photobox').append('<img src="' + $href + '" />');
      });

    }

    var size = $('#photobox img').length;
    $('#photobox img').hide();
    $('#photobox img:eq(' + slideNum + ')').show();

    var current = slideNum;
  }); 

  $('body').on('click', '#photobox', function() { 
    $('#photobox').fadeOut(300);
  });

});