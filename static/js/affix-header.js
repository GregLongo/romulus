$(window).scroll(function(){
	var header = $(".header");
	var hamburger = $(".hamburger");
	if ($(window).scrollTop() >= 1){
		header.addClass("header--fixed")
		hamburger.addClass("fixed")
	}
	else{
		header.removeClass("header--fixed")
		hamburger.removeClass("fixed")
	}
});
