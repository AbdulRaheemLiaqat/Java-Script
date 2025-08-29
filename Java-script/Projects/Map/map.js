'use strict';
let map;    
let mapEvent;     
const loadMap = function (position) {
  const { latitude, longitude } = position.coords;
  const coords = [latitude, longitude];
  map = L.map('map').setView(coords, 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  L.marker(coords)
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 120,
        autoClose: false,
        closeOnClick: false,
        className: 'arch-popup',
      })
    )
    .setPopupContent('Home')
    .openPopup();
  map.on('click', function (mapE) {
    mapEvent = mapE;
    const { lat, lng } = mapEvent.latlng;

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 120,
          autoClose: true,
          closeOnClick: true,
          className: 'arch-popup',
        })
      )
      .setPopupContent(`Marker @ ${lat.toFixed(5)}, ${lng.toFixed(5)}`)
      .openPopup();
  });
};

const geoError = function () {
  alert('ArCH Map: Could not get your position. Please allow location access.');
};

// Get current position & bootstrap the map
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(loadMap, geoError, {
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 10000,
  });
} else {
  alert('Geolocation is not supported by your browser.');
}