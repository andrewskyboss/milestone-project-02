
/*----------- Map ----------*/
/*let map;

function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant" },
      { type: "tourist_attraction" },
    ],
    maxPlaceCount: 12,
  });

  map = localContextMapView.map;
  map.setOptions({
    center: { lat: 51.507307, lng: -0.08114 },
    zoom: 14,
  });
}*/


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
