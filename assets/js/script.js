
/*----------- Carousel Bootstrap ----------*/
$('.carousel').carousel({
  interval: 2000
})

/*----------- Mobile menu Open Close ----------*/
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
/*----------- Newsletter Sign up ----------*/
function newsletterMail(newsletterForm) {
	emailjs.send("service_u9b5bpg","template_dm2c1ma", {
		"from_email": newsletterForm.emailNewsletters.value
	})
	.then (
		function(response) {
			console.log("SUCCESS", response);
		},
		function(error) {
			console.log("FAILED . . .", error);
		}
	);
	return true;
}
/*----------- Contact Form ----------*/

window.onload = function() {
	document.getElementById('contact-us-form').addEventListener('submit', function(event) {
	event.preventDefault();

		emailjs.sendForm('service_u9b5bpg', 'template_a26hqai', this)
		.then(function() {
			console.log('SUCCESS!');
			this.firstName.value = "";
			this.lastName.value = "";
			this.emailAddress.value = "";
			this.phoneNumber.value = "";
			this.address.value = "";
			this.city.value = "";
			this.country.value = "";
			this.message.value = "";

		}, function(error) {
			console.log('FAILED...', error);
		});
	});
}

/*----------- Map ----------*/
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 46.619261,
      lng: -33.134766
    }
  });

  var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

  var locations = [
    { lat: 40.785091, lng: -73.968285},
    { lat: 41.084045, lng: -73.874256},
    { lat: 40.754932, lng: -73.984016}
  ];

  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
      imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
  });

}
