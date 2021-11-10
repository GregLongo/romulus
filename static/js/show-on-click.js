jQuery(document).ready(function($){
  $('.show-on-click').on('click', function(e){
	  e.preventDefault();
	  let span = $('span', $(this));
	  if (span.hasClass('visible')) {
		  span.removeClass('visible');
	  }else{
		  span.addClass('visible');
	  }
  });
});
