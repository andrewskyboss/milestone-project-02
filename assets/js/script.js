
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
			$('.form-input').val('');
		}, function(error) {
			console.log('FAILED...', error);
		});
	});
}
/*----------- Map ----------*/


/*----------- Map ----------*/
function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 15,
		center: {
		lat: 52.66473,
		lng: -8.62896
		}
	});

	var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

	var locations = [
		{ lat: 52.66234, lng: -8.62506},
		{ lat: 52.66453, lng: -8.63582},
		{ lat: 52.66007, lng: -8.63149}
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

/*----------- Gallery ----------*/
const gallery = document.querySelectorAll(".gallery-container .gallery-row-single-image"),
	modalBox = document.querySelector(".modal"),
	modalImage = modalBox.querySelector("img"),
	closeModal = document.querySelector(".close-icon"),
	currentImage = modalBox.querySelector(".current-image"),
	totalImages = modalBox.querySelector(".total-images");

window.onload = () => {
	for (let i = 0; i < gallery.length; i++) {
		totalImages.textContent = gallery.length;
		console.log(" gallery length " +gallery.length);
		let imgIndex = i;
		let tempImgIndex;

		gallery[i].onclick = () =>{
			
			console.log(i);
			tempImgIndex = imgIndex;

			function getImgAddress(){
				currentImage.textContent = imgIndex + 1;
				let selectedImgAddress = gallery[imgIndex].querySelector("img").src;
				modalImage.src = selectedImgAddress;
				modalImage.classList.add("active");
				console.log(selectedImgAddress);
			}

			/* ------ Buttons ------- */
			const prevButton = document.querySelector(".prev");
			const nextButton = document.querySelector(".next");

			if(imgIndex == 0){
				prevButton.style.display = "none";
			}
			if(imgIndex >= gallery.length - 1){
				nextButton.style.display = "none";
			}
			/* ------ Preview Button ------- */
			prevButton.onclick = ()=>{
				imgIndex --;
				console.log(imgIndex);

				if(imgIndex == 0){
					getImgAddress();
					prevButton.style.display = "none";

				}else{
					getImgAddress();
					nextButton.style.display = "flex";
				}	
			}
			/* ------ Next Button ------- */
			nextButton.onclick = ()=>{
				imgIndex ++;
				console.log(imgIndex);

				if(imgIndex >= gallery.length - 1){
					getImgAddress();
					nextButton.style.display = "none";

				}else{
					getImgAddress();
					prevButton.style.display = "flex";
				}	
			}

			getImgAddress();

			modalBox.classList.add("show");
			document.querySelector("body").style.overflow = "hidden";

			closeModal.onclick = () =>{
				imgIndex = tempImgIndex;
				modalBox.classList.remove("show");
				modalImage.classList.remove("active");
				prevButton.style.display = "flex";
				nextButton.style.display = "flex";
				document.querySelector("body").style.overflow = "auto";
			}
		}
	}
}

