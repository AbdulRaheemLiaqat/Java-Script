const getLocationInfo = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Problem with geocoding API (${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      console.log(`📍 You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json();
    })
    .then(countryData => {
      const country = countryData[0];
      console.log(`🌍 Country: ${country.name.common}`);
      console.log(`👫 Population: ${country.population}`);
      console.log(`🗣️ Languages: ${Object.values(country.languages).join(', ')}`);
      console.log(`💰 Currency: ${Object.values(country.currencies)[0].name}`);
    })
    .catch(err => {
      console.error(`❌ Error: ${err.message}`);
    });
};

getLocationInfo(52.508, 13.381);
getLocationInfo(19.037, 72.873);
getLocationInfo(-33.933, 18.474);
