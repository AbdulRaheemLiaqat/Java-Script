fetch('https://restcountries.com/v3.1/name/pakistan')
  .then(res => res.json())
  .then(data => console.log('Country:', data[0].name.common))
  .catch(err => console.error('Error:', err))
  .finally(() => console.log('Request finished ✅'));
