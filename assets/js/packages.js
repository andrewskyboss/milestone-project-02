
const sourceData = {
	"ireland": [{
		"Number": "even",
		"Title": "Limerick Strand Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "2 NIGHT ACTIVITY BREAK",
		"Price": 350,
		"Img": "assets/images/travel-ireland-002.jpg",
		"Alt": "Limerick River",
	},{
		"Number": "odd",
		"Title": "Ballynahinch Castle Hote",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "3 NIGHT ACTIVITY BREAK",
		"Price": 450,
		"Img": "assets/images/travel-ireland-003.jpg",
		"Alt": "Kylemore Abbey",
	},{
		"Number": "even",
		"Title": "Lady Gregory Hotel & Leisure Club",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "4 NIGHT ACTIVITY BREAK",
		"Price": 250,
		"Img": "assets/images/travel-ireland-005.jpg",
		"Alt": "kilkenny castle",
	}],

	"germany": [{
		"Number": "even",
		"Title": "Schlosshotel Bredenfelde Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "2 NIGHT ACTIVITY BREAK",
		"Price": 250,
		"Img": "assets/images/germany-01.jpg",
		"Alt": "Bredenfelde, Germany",
	},{
		"Number": "odd",
		"Title": "Schlosshotel Althörnitz Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "4 NIGHT ACTIVITY BREAK",
		"Price": 450,
		"Img": "assets/images/germany-02.jpg",
		"Alt": "Bertsdorf, Germany",
	}],

	"france": [{
		"Number": "even",
		"Title": "Le Château D'apigné Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "2 NIGHT ACTIVITY BREAK",
		"Price": 250,
		"Img": "assets/images/france-01.jpg",
		"Alt": "Le Château D'apigné Hotel",
	},{
		"Number": "odd",
		"Title": "Château de la Treyne Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "4 NIGHT ACTIVITY BREAK",
		"Price": 350,
		"Img": "assets/images/france-02.jpg",
		"Alt": "Château de la Treyne Hotel",
	}],

	"italy": [{
		"Number": "even",
		"Title": "Castello di Petroia Hotel",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "2 NIGHT ACTIVITY BREAK",
		"Price": 250,
		"Img": "assets/images/travel-italy-001.jpg",
		"Alt": "Castello di Petroia Hotel",
	},{
		"Number": "odd",
		"Title": "Hotel Mercurio Venice",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "4 NIGHT ACTIVITY BREAK",
		"Price": 150,
		"Img": "assets/images/travel-italy-003.jpg",
		"Alt": "Hotel Mercurio Venice",
	}],

	"spain": [{
		"Number": "even",
		"Title": "Hotel Villazambra",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "2 NIGHT ACTIVITY BREAK",
		"Price": 127,
		"Img": "assets/images/spain-01.jpg",
		"Alt": "Hotel Villazambra",
	},{
		"Number": "odd",
		"Title": "Hotel Torre del Mar",
		"Subitle": "SUMMER FAMILY FUN",
		"Description": "4 NIGHT ACTIVITY BREAK",
		"Price": 179,
		"Img": "assets/images/spain-02.jpg",
		"Alt": "Hotel Torre del Mar",
	}]
};

function openPackages(country) {

	var checkPackage = document.getElementById("package-row").hasChildNodes();

	if(checkPackage === true) {
		var tempPack = document.getElementById("package-row");
		tempPack.innerHTML = '';
	}
	
	let classId = country;

	for (var key in sourceData) {

		if(key === classId) {
			for (var i = 0; i < sourceData[key].length; i++) {

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
						'<p class="description">Buy from EUR' + price + '</p>' +
						'<a class="btn btn-primary" href="contact.html">Contact Us</a>' +
					'</div>';
				}else if (number === 'even') {
					packBox.className = 'row image-boxes-2-row even';
					packBox.innerHTML =
					'<div class="image-box-content col-lg-4 col-sm-12">' +
						'<h2 class="title box-title">' + title + '</h2>' +
						'<h3 class="subtitle">' + subitle + '</h3>' +
						'<p class="description">' + description + '</p>' +
						'<p class="description">Buy from EUR' + price + '</p>' +
						'<a class="btn btn-primary" href="contact.html">Contact Us</a>' +
					'</div>' +
					'<div class="image-box-image col-lg-8 col-sm-12">' +
					'<img src="' + image + '" alt="' + alt + '">' +

					'</div>';
				}
				document.getElementById("package-row").appendChild(packBox);
			}
		}
	}
}
