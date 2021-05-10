
sourceData = {
	"ireland": [{
		"Title": "Insert description here.",
		"Subitle": "Insert description here.",
		"Price": 379.99,
		"Img": "assets/images/travel-ireland-004.jpg",
		"Alt": "kilkenny castle",
		"Link": "contact.html",
	}, {
		"Description": "Insert description here.",
		"Price": 199.99,
		"ProductName": "Yonex AI 98 Tennis Racquet",
	}],

	"basketball": [{
		"Description": "Insert description here.",
		"Price": 64.99,
		"ProductName": "Wilson NCAA Solution Official Game Basketball",
	}, {
		"Description": "Insert description here.",
		"Price": 59.99,
		"ProductName": "Spalding NBA NeverFlat Size 7 Composite Leather Basketball",
	}]
}

for (var key in sourceData) {
		for (var i = 0; i < sourceData[key].length; i++) {
			var title = sourceData[key][i].Title;
			var desc = sourceData[key][i].Subitle;
			var price = sourceData[key][i].Price;
			var badge = document.createElement('div');
			badge.className = 'badge';
			badge.innerHTML =
			'<h1>' + title + '</h1>' +
			'<h2>' + desc + '</h1>' +
			'<div class="options-only-phone">' +
			'<a class="service-provider-call" href="#" target="_blank"> Buy for $' + price + '</a>';
			document.getElementById(key).appendChild(badge);
		}
	}