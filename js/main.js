var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 23.973875, lng: 120.982024}
  });

	var ctaLayer = new google.maps.KmlLayer({
    url: 'https://drive.google.com/open?id=0B5Sc8FRibfkOZFVGTUJUVDY1LVk',
		// url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml',
    map: map
  });

	
  // Load GeoJSON.
  // map.data.loadGeoJson('https://storage.googleapis.com/maps-devrel/google.json');

  // Add some style.
  // map.data.setStyle(function(feature) {
    // return /** @type {google.maps.Data.StyleOptions} */({
      // fillColor: feature.getProperty('color'),
      // strokeWeight: 1
    // });
  // });

  // [START snippet]
  // Set mouseover event for each feature.
  // map.data.addListener('mouseover', function(event) {
    // document.getElementById('info-box').textContent =
        // event.feature.getProperty('letter');
  // });
  // [END snippet]
}
