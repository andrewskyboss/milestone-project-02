

/*----------- Gallery ----------*/
const gallery = document.querySelectorAll(".gallery-container .gallery-row-single-image"),
	modalBox = document.querySelector(".modal"),
	modalImage = modalBox.querySelector("img"),
	closeModal = document.querySelector(".close-icon"),
	currentImageTitle = modalBox.querySelector("h3.image-title-h3"),
	currentImage = modalBox.querySelector(".current-image"),
	totalImages = modalBox.querySelector(".total-images");

window.onload = () => {
	for (let i = 0; i < gallery.length; i++) {
		totalImages.textContent = gallery.length;
		console.log(" gallery length " + gallery.length);
		let imgIndex = i;
		let tempImgIndex;

		gallery[i].onclick = () =>{
			
			console.log(i);
			tempImgIndex = imgIndex;

			function getImgAddress(){
				currentImage.textContent = imgIndex + 1;
				let selectedImgAddress = gallery[imgIndex].querySelector("img").src;
				let selectedImgTitle = gallery[imgIndex].querySelector("h3.gallery-item-title").textContent;
				console.log(selectedImgTitle);
				currentImageTitle.innerHTML = selectedImgTitle;
				modalImage.src = selectedImgAddress;
				modalImage.animate([
					{ transform: 'translateY(10px)', opacity: '0.5' },
					{ transform: 'translateY(0px)' , opacity: '1'}
					], {
					duration: 500,
					iterations: 1
					});
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


