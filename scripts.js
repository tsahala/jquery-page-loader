jQuery(function($) {
	$(window).on('load', function() {
		$(".pageLoader").delay(800).fadeOut(1200);
	});
	function loaderClose(){
		$(".pageLoader").fadeOut(1200);
	}
	setTimeout(loaderClose, 10000);
});
