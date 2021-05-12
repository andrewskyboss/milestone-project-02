
sourceData = {
	"ireland": [{
		"Number": "even",
		"Title": "Riverside Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "2 NIGHT ACTIVITY BREAK",
		"Price": 250,
		"Img": "assets/images/travel-ireland-004.jpg",
		"Alt": "kilkenny castle",
	},{
		"Number": "odd",
		"Title": "Riverside Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "3 NIGHT ACTIVITY BREAK",
		"Price": 350,
		"Img": "assets/images/travel-ireland-002.jpg",
		"Alt": "kilkenny castle",
	},{
		"Number": "even",
		"Title": "Riverside Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "4 NIGHT ACTIVITY BREAK",
		"Price": 450,
		"Img": "assets/images/travel-ireland-003.jpg",
		"Alt": "kilkenny castle",
	}],

	"germany": [{
		"Number": "odd",
		"Title": "Germany Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "2 NIGHT ACTIVITY BREAK",
		"Price": 250,
		"Img": "assets/images/germany-01.jpg",
		"Alt": "kilkenny castle",
	},{
		"Number": "even",
		"Title": "Germany Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "4 NIGHT ACTIVITY BREAK",
		"Price": 450,
		"Img": "assets/images/germany-02.jpg",
		"Alt": "kilkenny castle",
	}],

	"france": [{
		"Number": "odd",
		"Title": "France Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "2 NIGHT ACTIVITY BREAK",
		"Price": 250,
		"Img": "assets/images/france-01.jpg",
		"Alt": "kilkenny castle",
	},{
		"Number": "even",
		"Title": "France Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "4 NIGHT ACTIVITY BREAK",
		"Price": 450,
		"Img": "assets/images/france-02.jpg",
		"Alt": "kilkenny castle",
	}]
};

function openPackages(key) {
	let classId = key;
	console.log("class name is " + classId);
	console.log("classId");

	for (var key in sourceData) {
		console.log("key name is " + key);
		if(key === classId) {
			for (var i = 0; i < sourceData[key].length; i++) {
				console.log("key inside 2 for name is " + key);
				var number = sourceData[key][i].Number;
				var title = sourceData[key][i].Title;
				var subitle = sourceData[key][i].Subitle;
				var description = sourceData[key][i].Description;
				var price = sourceData[key][i].Price;
				var image = sourceData[key][i].Img;
				var alt = sourceData[key][i].Alt;
				var packBox = document.createElement('div');

				if(number === 'odd') {
					packBox.className = 'row image-boxes-2-row';
					packBox.innerHTML =
					'<div class="image-box-image col-lg-8 col-sm-12">' +
					'<img src="' + image + '" alt="' + alt + '">' +

					'</div>' +
					'<div class="image-box-content col-lg-4 col-sm-12">' +
						'<h2 class="title box-title">' + title + '</h2>' +
						'<h3 class="subtitle">' + subitle + '</h3>' +
						'<p class="description">' + description + '</p>' +
						'<p class="description">Buy for EUR' + price + '</p>' +
						'<a class="btn btn-primary" href="contact.html">Contact Us</a>' +
					'</div>';
				}else if (number === 'even') {
					packBox.className = 'row image-boxes-2-row even';
					packBox.innerHTML =
					'<div class="image-box-content col-lg-4 col-sm-12">' +
						'<h2 class="title box-title">' + title + '</h2>' +
						'<h3 class="subtitle">' + subitle + '</h3>' +
						'<p class="description">' + description + '</p>' +
						'<p class="description">Buy for EUR' + price + '</p>' +
						'<a class="btn btn-primary" href="contact.html">Contact Us</a>' +
					'</div>' +
					'<div class="image-box-image col-lg-8 col-sm-12">' +
					'<img src="' + image + '" alt="' + alt + '">' +

					'</div>';
				}
				
				document.getElementById(key + "-pk").appendChild(packBox);
			}
		}
		
	}

};



