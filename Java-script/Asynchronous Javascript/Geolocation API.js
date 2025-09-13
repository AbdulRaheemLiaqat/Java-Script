const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then(pos => console.log(`Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`))
  .catch(err => console.error(err));
