//mmmmmmmmenu
jQuery(document).ready(function() {
	var mynav = $( "#nav-mobile" )[0];
	const menu = new MmenuLight(
			mynav
		);
	const navigator = menu.navigation();
	const drawer = menu.offcanvas();
	navigator.openPanel(
			mynav
		);
	$( 'a[href="#nav-mobile"]' ).on('click mousedown touchstart', function(e){
        e.preventDefault()
        $('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
		drawer.open();
	});
    $('.mm-ocd__backdrop').on('click mousedown touchstart', function(e) {
        e.preventDefault();
        $('a[href="#nav-mobile"]').removeClass('is-active');
        $(this).find('.nav__submenu').css('opacity', 0);
    });
});
