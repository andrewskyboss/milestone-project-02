
/*----------- Map ----------*/

/*
	Information about countrys were taken from Wikipedia website and google search:
	https://en.wikipedia.org/wiki/Ireland
	https://en.wikipedia.org/wiki/Germany
	https://en.wikipedia.org/wiki/France
	https://en.wikipedia.org/wiki/Italy
    https://en.wikipedia.org/wiki/Spain
    https://www.expedia.ie/Europe.d6022967.Holidays-City-Breaks?pwaLob=wizard-package-pwa
*/
// Country row content source
const countryData = {
	"ireland": [{
		"Title": "Ireland Packages",
		"Subitle": "More information below",
		"Description": "The west coast of Ireland, Lahinch and Donegal Bay in particular, have popular surfing beaches, being fully exposed to the Atlantic Ocean",
		"Img": "assets/images/travel-ireland-004.jpg",
		"Alt": "kilkenny castle",
	}],

	"germany": [{
		"Title": "Germany Packages",
		"Subitle": "More information below",
		"Description": "Germany is the ninth most visited country in the world as of 2017, with 37.4 million visits.[205] Berlin has become the third most visited city destination in Europe",
		"Img": "assets/images/germany-03.jpg",
		"Alt": "Germany image",
	}],

	"france": [{
		"Title": "France Packages",
		"Subitle": "More information below",
		"Description": "With 89 million international tourist arrivals in 2018,[217] France is ranked as the first tourist destination in the world, ahead of Spain (83 million) and the United States (80 million)",
		"Img": "assets/images/france-03.jpg",
		"Alt": "France image",
	}],

	"italy": [{
		"Title": "Italy Packages",
		"Subitle": "More information below",
		"Description": "Italy is the fifth most visited country in the world, with a total of 52.3 million international arrivals in 2016",
		"Img": "assets/images/travel-italy-002.jpg",
		"Alt": "Italy image",
	}],

	"spain": [{
		"Title": "Spain Packages",
		"Subitle": "More information below",
		"Description": "In 2017, Spain was the second most visited country in the world, recording 82 million tourists which marked the fifth consecutive year of record-beating numbers",
		"Img": "assets/images/spain-03.jpg",
		"Alt": "Spain image",
	}]
};
// Map initialisation and population
function initMap() {

	var options = {
		center: {
			lat: 47.511707,
			lng: 4.694711},
		zoom: 5
	};

    var map = new google.maps.Map(document.getElementById('map'), options);

    // Locators content
	const destinationsPrimary = [
		[{ lat: 53.031401, lng: -8.056747 },
			'Ireland',
			'<p><strong>population:</strong> 6,572,728 (2016)</p>',
			"<p>Ireland is an island in the North Atlantic. It is separated from Great Britain to its east by the North Channel, the Irish Sea, and St Georges Channel. Ireland is the second-largest island of the British Isles, the third-largest in Europe, and the twentieth-largest on Earth</p>", 
			'<a onclick="countryInfo(\'ireland\')" class="btn btn-secondary" href="#country-row">Our Packages</a><br><br>', 
			'<a class="btn btn-secondary" target="_blank" href="https://www.ireland.com">Tourist Information</a>'],
		[{ lat: 50.725340, lng: 10.286539 }, 
			"Germany",
			'<p><strong>population:</strong> 83.02 million (2019) Eurostat</p>',
			"<p>Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank.</p>", 
			'<a onclick="countryInfo(\'germany\')" class="btn btn-secondary" href="#country-row">Our Packages</a><br><br>', 
			'<a class="btn btn-secondary" target="_blank" href="https://www.germany.travel/en/home.html">Tourist Information</a>'],
		[{ lat: 46.854619, lng: 2.316878 }, 
			"France",
			'<p><strong>population:</strong> 67.06 million (2019) World Bank</p>',
			"<p>France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.</p>", 
			'<a onclick="countryInfo(\'france\')" class="btn btn-secondary" href="#country-row">Our Packages</a><br><br>', 
			'<a class="btn btn-secondary" target="_blank" href="https://uk.france.fr/en">Tourist Information</a>'],
		[{ lat: 42.375270, lng: 13.108583 }, 
			"Italy",
			'<p><strong>population:</strong> 60.36 million (2019) Eurostat</p>',
			"<p>Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s 'David' and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital</p>", 
			'<a onclick="countryInfo(\'italy\')" class="btn btn-secondary" href="#country-row">Our Packages</a><br><br>', 
			'<a class="btn btn-secondary" target="_blank" href="http://www.italia.it/en/home.html">Tourist Information</a>'],
		[{ lat: 40.812041, lng: -3.823681 },
			"Spain",
			'<p><strong>population:</strong> 46.94 million (2019) Eurostat</p>',
			"<p>Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church.</p>", 
			'<a onclick="countryInfo(\'spain\')" class="btn btn-secondary" href="#country-row">Our Packages</a><br><br>', 
			'<a class="btn btn-secondary" target="_blank" href="https://www.spain.info/en/">Tourist Information</a>'],
    ];

    // Info window initialization 
	const infoWindow = new google.maps.InfoWindow({
		maxWidth: 300,
	});

    // Populates markers info windows content
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
			infoWindow.open(marker.getMap(), marker);
		});

        // Markers animation
		function toggleBounce() {
			if (marker.getAnimation() !== null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			}
		}
	});

}

// Populates country row content to the div element
function countryInfo(countryName) {

	var checkCountry = document.getElementById("country-row").hasChildNodes();
	var checkPackage = document.getElementById("package-row").hasChildNodes();

    // Checks country row and package rows to be empty
	if(checkCountry === true && checkPackage === false) {
		var temp = document.getElementById("country-row");
		temp.innerHTML = '';
	}else if(checkCountry === true && checkPackage === true) {
		var tempCountry = document.getElementById("country-row");
		var tempPack = document.getElementById("package-row");
		tempCountry.innerHTML = '';
		tempPack.innerHTML = '';
	}

	let classId = countryName;
	console.log("class name is " + classId);

    //populates country information to the div element
	for (var key in countryData) {
		console.log("key name is " + key);
		if(key === classId) {
			for (var i = 0; i < countryData[key].length; i++) {

				var title = countryData[key][i].Title;
				var subitle = countryData[key][i].Subitle;
				var description = countryData[key][i].Description;
				var image = countryData[key][i].Img;
				var alt = countryData[key][i].Alt;
				var packBox = document.createElement('div');

				packBox.className = 'row image-boxes-2-row country country';
				packBox.innerHTML =
				'<div class="image-box-image col-lg-8 col-sm-12">' +
				'<img src="' + image + '" alt="' + alt + '">' +
				'</div>' +
				'<div class="image-box-content col-lg-4 col-sm-12">' +
					'<h2 class="title box-title">' + title + '</h2>' +
					'<h3 class="subtitle">' + subitle + '</h3>' +
					'<p class="description">' + description + '</p>' +
					'<a onclick="openPackages('+ "'" + classId + "'" + ')" class="btn btn-primary" href="#package-row">View Packages</a>' +
				'</div>';
				
				document.getElementById("country-row").appendChild(packBox);
			}
		}
	}
}


