
/*----------- Map ----------*/

function initMap() {

	var options = {
		center: {
			lat: 47.511707,
			lng: 4.694711},
		zoom: 5
	}

	var map = new google.maps.Map(document.getElementById('map'), options);

	const destinationsPrimary = [
		[{ lat: 53.031401, lng: -8.056747 },
			'Ireland',
			'<p><strong>population:</strong> 6,572,728 (2016)</p>',
			"<p>Ireland is an island in the North Atlantic. It is separated from Great Britain to its east by the North Channel, the Irish Sea, and St Georges Channel. Ireland is the second-largest island of the British Isles, the third-largest in Europe, and the twentieth-largest on Earth</p>", 
			'<a onclick="unhideModule(\'ireland\')" href="#ireland">Our Packages</a><br><br>', 
			'<a target="_blank" href="https://www.ireland.com">Tourist Information</a>'],
		[{ lat: 50.725340, lng: 10.286539 }, 
			"Germany",
			'<p><strong>population:</strong> 83.02 million (2019) Eurostat</p>',
			"<p>Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank.</p>", 
			'<a onclick="unhideModule(\'germany\')" href="#germany">Our Packages</a><br><br>', 
			'<a target="_blank" href="https://www.germany.travel/en/home.html">Tourist Information</a>'],
		[{ lat: 46.854619, lng: 2.316878 }, 
			"France",
			'<p><strong>population:</strong> 67.06 million (2019) World Bank</p>',
			"<p>France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.</p>", 
			'<a onclick="unhideModule(\'france\')" href="#france">Our Packages</a><br><br>', 
			'<a target="_blank" href="https://uk.france.fr/en">Tourist Information</a>'],
		[{ lat: 42.375270, lng: 13.108583 }, 
			"Italy",
			'<p><strong>population:</strong> 60.36 million (2019) Eurostat</p>',
			"<p>Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s 'David' and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital</p>", 
			'<a onclick="unhideModule(\'italy\')" href="#italy">Our Packages</a><br><br>', 
			'<a target="_blank" href="http://www.italia.it/en/home.html">Tourist Information</a>'],
		[{ lat: 40.812041, lng: -3.823681 },
			"Spain",
			'<p><strong>population:</strong> 46.94 million (2019) Eurostat</p>',
			"<p>Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church.</p>", 
			'<a onclick="unhideModule(\'spain\')" href="#spain">Our Packages</a><br><br>', 
			'<a target="_blank" href="https://www.spain.info/en/">Tourist Information</a>'],
	];

	const infoWindow = new google.maps.InfoWindow({
		// content: contentString,
		maxWidth: 300,
	});

	destinationsPrimary.forEach(([position, title, population, content, link1, link2], i) => {

		const marker = new google.maps.Marker({
			position,
			map,
			draggable: true,
			icon: "assets/map/locator1.png",
			animation: google.maps.Animation.DROP,
			title: `${title}`,
			population: `${population}`,
			content: `${content}`,
			link1: `${link1}`,
			link2: `${link2}`,
			optimized: false,
		});

		// Add a click listener for each marker, and set up the info window.
		marker.addListener("click", () => {
			infoWindow.close();
			infoWindow.setContent("<h3>" + marker.getTitle() + 
				"</h3>" + marker.population + 
				marker.content + marker.link1 + 
				marker.link2);

			//infoWindow.setContent(marker.getTitle() + contentString);
			// infoWindow.setContent(contentString);
			infoWindow.open(marker.getMap(), marker);
		});


		function toggleBounce() {
			if (marker.getAnimation() !== null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			}
		}
	});

}

function unhideModule(classId) {
	console.log("button id text " + classId);

	const sectionRow = document.querySelector(".image-boxes-2-row." + classId);
	console.log(sectionRow);
	sectionRow.classList.remove("hidden")
}


