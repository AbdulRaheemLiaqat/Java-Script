fetch('https://restcountries.com/v3.1/name/pakistan')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
