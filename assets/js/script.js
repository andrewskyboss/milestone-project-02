/*jshint esversion: 6 */
var scrollThreshold = 50;
// Carousel Bootstrap
$('.carousel').carousel({
  interval: 2000
});

// Mobile menu Open Close
$('body').on('click', '.mobile-menu-trigger', function(e) {
	if(!$(this).hasClass('.mobile-menu-hidde')) {
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
		$('.mobile-menu').show('slow').removeClass('hidden').addClass('visible');
		$('.mobile-menu-trigger').removeClass('mobile-menu-hidden').addClass('mobile-menu-visible');
	} else {
		$('.mobile-menu').removeClass('visible').addClass('hidden');
		$('.mobile-menu-trigger').removeClass('mobile-menu-visible').addClass('mobile-menu-hidden');
	}
}
// Newsletter Sign up
function newsletterMail(newsletterForm) {
	emailjs.send("service_u9b5bpg","template_dm2c1ma", {
		"from_email": newsletterForm.emailNewsletters.value
	})
	.then (
		function(response) {
			console.log("SUCCESS", response);
			$('.form-input').val('');
			document.getElementById('confirmation-title-email').textContent = 'Thank You for newsletter signing up';
		},
		function(error) {
			console.log("FAILED . . .", error);
			$('.form-input').val('');
			document.getElementById('confirmation-title-email').textContent = 'Sorry, something went wrong. Try Later';
		}
	);
	return true;
}

$(window).on('load', function() {
    // Initialize on-load animations
    $('body').addClass('on-load-animations-start');
});

$(window).on('load scroll', function(e) {
    // Handle scroll
    if($(document).scrollTop() > scrollThreshold) {
        $('body').addClass('scrolled');
    } else {
        $('body').removeClass('scrolled');
    }
});



