$('.carousel').carousel({
  interval: 2000
})

/*----------- Mobile menu Open Close ----------*/
$('body').on('click', '.mobile-menu-trigger', function(e) {
	if(!$(this).hasClass('.mobile-menu-visible')) {
		mobileMenuOpenClose(true);
	} else {
		mobileMenuOpenClose(false);
	}
	e.stopPropagation();
})
.on('click', function(e) {
	mobileMenuOpenClose(false);
});

function mobileMenuOpenClose(open) {
	open = (typeof open !== 'undefined') ? open : true;

	if(open) {
		$('.mobile-menu').show().removeClass('hidden').addClass('visible');
		$('.mobile-menu-trigger').removeClass('mobile-menu-hidden').addClass('mobile-menu-visible');
	} else {
		$('.mobile-menu').removeClass('visible').addClass('hidden');
		$('.mobile-menu-trigger').removeClass('mobile-menu-visible').addClass('mobile-menu-hidden');
	}
}

